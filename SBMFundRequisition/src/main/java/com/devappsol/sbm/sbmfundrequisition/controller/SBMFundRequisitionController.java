package com.devappsol.sbm.sbmfundrequisition.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.devappsol.sbm.sbmfundrequisition.interfaces.service.ISBMFundRequisitonService;
import com.devappsol.sbm.sbmfundrequisition.model.ProposalMaster;
import com.devappsol.sbm.sbmfundrequisition.model.Response;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionHeadMater;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateCBAOE;
import com.devappsol.sbm.sbmfundrequisition.model.StateCTPT;
import com.devappsol.sbm.sbmfundrequisition.model.StateIEC;
import com.devappsol.sbm.sbmfundrequisition.model.StateIHHL;
import com.devappsol.sbm.sbmfundrequisition.model.StateSWM;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationHeadMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationMaster;
import com.google.gson.Gson;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*",maxAge = 3600)
public class SBMFundRequisitionController {

	@Autowired
	ISBMFundRequisitonService fundRequisitonService;
	
	private static final Logger logger = Logger.getLogger(SBMFundRequisitionController.class);
	
	@RequestMapping(value = "/fund/read/getAllProposals", method = RequestMethod.POST)
	public @ResponseBody List<ProposalMaster> getAllProposals() {
		List<ProposalMaster> proposal_Master=fundRequisitonService.getAllProposals();
		return proposal_Master;
	}
	
	@RequestMapping(value = "/fund/read/getProposalByState", method = RequestMethod.POST)
	public @ResponseBody List<ProposalMaster> getProposalByState(@RequestParam(value = "stateCode") int stateCode) {
		List<ProposalMaster> proposal_Master=fundRequisitonService.getProposalByState(stateCode);
		return proposal_Master;
	}
	
	@RequestMapping(value = "/fund/read/getProposalById", method = RequestMethod.POST)
	public @ResponseBody ProposalMaster getProposalById(@RequestBody Map<String,String> proposalId) {
		ProposalMaster proposal_Master=fundRequisitonService.getProposalById(proposalId.get("proposalId"));
		return proposal_Master;
	}
	
	
	@RequestMapping(value = "/fund/create/saveSanctionByState", method = RequestMethod.POST)
	public @ResponseBody List<ProposalMaster> saveSanctionByState(MultipartHttpServletRequest multipartFileRequest ) {
		
		MultipartFile sanctionLetterMulti = multipartFileRequest.getFile("sanctionLetter");
		
		String proposalMasterData=multipartFileRequest.getParameter("proposalMaster");
		ProposalMaster proposalMaster= new Gson().fromJson(proposalMasterData, ProposalMaster.class);
		String proposalStatusData=multipartFileRequest.getParameter("proposalStatus");
		if(proposalStatusData.equalsIgnoreCase("SHCP-Approved")){
			proposalMaster.setStatus(proposalStatusData);
			fundRequisitonService.saveProposalByState(proposalMaster);
			return fundRequisitonService.getAllProposals();
		}else if(proposalStatusData.equalsIgnoreCase("Returned-by-Centre")){
			proposalMaster.setStatus(proposalStatusData);
			fundRequisitonService.saveProposalByState(proposalMaster);
			return fundRequisitonService.getAllProposals();
		}else{
			
			String sanctionMasterData=multipartFileRequest.getParameter("sanctionMaster");
			SanctionMaster sanctionMater= new Gson().fromJson(sanctionMasterData, SanctionMaster.class);
			System.out.println("****sanctionMater**********"+sanctionMater.toString());
			for(SanctionHeadMater sanctionHeadMater : sanctionMater.getSanctionHeadMaters()){
				sanctionHeadMater.setSanctionDate(new Date());
				sanctionHeadMater.setSanctionedBy(multipartFileRequest.getSession().getAttribute("emailId").toString());

			}
			sanctionMater.setSanctionLetterPath(fundRequisitonService.dumpUploadedFile(sanctionLetterMulti));
			sanctionMater.setSanctionLetterName(sanctionLetterMulti.getOriginalFilename());
			sanctionMater.setSanctionedBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
			sanctionMater.setSanctionDate(new Date());
			fundRequisitonService.saveSanctionByState(sanctionMater);
			proposalMaster.setStatus("Center-Approved");
			ProposalMaster sanctionMaster= fundRequisitonService.saveProposalByState(proposalMaster);
			if(sanctionMaster != null){
				List<ProposalMaster> proposalMasters=  fundRequisitonService.getProposalByState(sanctionMaster.getStateCode().getStateCode());
						return proposalMasters;
			}else{
				return null;
			}
			
		}
		
		
	}
	@RequestMapping(value = "/fund/create/rejectProposalByState", method = RequestMethod.POST)
	public @ResponseBody List<ProposalMaster> rejectProposalByState(@RequestBody ProposalMaster proposalMaster) {
		System.out.println("*****Rejected*******"+proposalMaster.toString());
		ProposalMaster proposal_Master=fundRequisitonService.saveProposalByState(proposalMaster);
		if(proposal_Master != null){
			return fundRequisitonService.getProposalByState(proposal_Master.getStateCode().getStateCode());
		}else{
			return null;
		}
	}
	
	@RequestMapping(value = "/fund/create/withDrawProposal", method = RequestMethod.POST)
	public @ResponseBody List<ProposalMaster> withDrawProposal(@RequestBody ProposalMaster proposalMaster) {
		System.out.println("*****Rejected*******"+proposalMaster.toString());
		ProposalMaster proposal_Master=fundRequisitonService.saveProposalByState(proposalMaster);
		if(proposal_Master != null){
			return fundRequisitonService.getProposalByState(proposal_Master.getStateCode().getStateCode());
		}else{
			return null;
		}
	}
	
	
	@RequestMapping(value = "/fund/create/submitProposalByState", method = RequestMethod.POST)
	public @ResponseBody List<ProposalMaster> submitProposalByState(MultipartHttpServletRequest multipartFileRequest ) {
		String proposalMasterData=multipartFileRequest.getParameter("proposalMaster");
		ProposalMaster proposalMaster= new Gson().fromJson(proposalMasterData, ProposalMaster.class);
		MultipartFile shpcApprovalMulti = multipartFileRequest.getFile("shpcDocument");
		if(shpcApprovalMulti != null){
			proposalMaster.setShpcApprovalName(shpcApprovalMulti.getOriginalFilename());
			proposalMaster.setShpcApprovalPath(fundRequisitonService.dumpUploadedFile(shpcApprovalMulti));
		} 
		ProposalMaster proposal_Master=fundRequisitonService.saveProposalByState(proposalMaster);
		if(proposal_Master != null){
			return fundRequisitonService.getProposalByState(proposal_Master.getStateCode().getStateCode());
		}else{
			return null;
		}
		
	}
		
	
	@RequestMapping(value = "/fund/create/saveProposalByState", method = RequestMethod.POST)
	public @ResponseBody ProposalMaster saveProposalByState(MultipartHttpServletRequest multipartFileRequest ) {
		
		MultipartFile iHHL1DetailedActionMulti = multipartFileRequest.getFile("iHHL1dapFile");
		MultipartFile iHHL1UcCertificateMulti = multipartFileRequest.getFile("iHHL1ucFile");
		MultipartFile iHHL1ProgressPhotoMulti = multipartFileRequest.getFile("iHHL1ppFile");

		MultipartFile iHHL2DetailedActionMulti = multipartFileRequest.getFile("iHHL2dapFile");
		MultipartFile iHHL2UcCertificateMulti = multipartFileRequest.getFile("iHHL2ucFile");
		MultipartFile iHHL2ProgressPhotoMulti = multipartFileRequest.getFile("iHHL2ppFile");
		MultipartFile financialPlanMulti = multipartFileRequest.getFile("iHHL2fpFile");
		
		MultipartFile ctptDetailedActionMulti = multipartFileRequest.getFile("ctptdapFile");
		MultipartFile ctptUcCertificateMulti = multipartFileRequest.getFile("ctptucFile");
		MultipartFile ctptProgressPhotoMulti = multipartFileRequest.getFile("ctptppFile");
		
		MultipartFile swmDetailedActionMulti = multipartFileRequest.getFile("swmdapFile");
		MultipartFile swmUcCertificateMulti = multipartFileRequest.getFile("swmucFile");
		MultipartFile swmProgressPhotoMulti = multipartFileRequest.getFile("swmppFile");
		
		MultipartFile swm2DetailedActionMulti = multipartFileRequest.getFile("swm2dapFile");
		MultipartFile swm2UcCertificateMulti = multipartFileRequest.getFile("swm2ucFile");
		MultipartFile swm2ProgressPhotoMulti = multipartFileRequest.getFile("swm2ppFile");
		
		MultipartFile iecDetailedActionMulti = multipartFileRequest.getFile("iecdapFile");
		MultipartFile iecUcCertificateMulti = multipartFileRequest.getFile("iecucFile");
		MultipartFile iecProgressPhotoMulti = multipartFileRequest.getFile("iecppFile");
		
		MultipartFile cbAoeDetailedActionMulti = multipartFileRequest.getFile("cbAoedapFile");
		MultipartFile cbAoeCertificateMulti = multipartFileRequest.getFile("cbAoeucFile");
		MultipartFile cbAoeProgressPhotoMulti = multipartFileRequest.getFile("cbAoeppFile");
		
		
		String proposalMasterData=multipartFileRequest.getParameter("proposalMaster");
		ProposalMaster proposalMaster= new Gson().fromJson(proposalMasterData, ProposalMaster.class);
		if(proposalMaster.getId() == null){
			String propId= fundRequisitonService.generateAutoProposalId(proposalMaster);
			System.out.println("********propId***************"+propId);
			proposalMaster.setId(propId);
		}
		
		logger.info("********"+proposalMaster);
		long totalAmount = 0;
		//for(ProposalHeadMaster proposalHeadMaster  : proposalMaster.getProposalHeadMaster()){
			Set<StateIHHL> ihhlList = proposalMaster.getStateIHHL();
			for(StateIHHL ihhl : ihhlList){
				if(ihhl != null){
					if(ihhl.getExpenseHead().equalsIgnoreCase("IHHL Installment1")){
						ihhl.setCreated_by(multipartFileRequest.getSession().getAttribute("emailId").toString());
						ihhl.setCreatedAt(new Date());
						ihhl.setUpdateBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
						ihhl.setUpdatedAt(new Date());
						//proposalHeadMaster.setDetailedActionPlanName(iHHL1DetailedActionMulti.getOriginalFilename());
						//proposalHeadMaster.setDetailedActionPlanPath(fundRequisitonService.dumpUploadedFile(iHHL1DetailedActionMulti));
						if(iHHL1DetailedActionMulti != null){
							ihhl.setDetailedActionPlanName(iHHL1DetailedActionMulti.getOriginalFilename());
							ihhl.setDetailedActionPlanPath(fundRequisitonService.dumpUploadedFile(iHHL1DetailedActionMulti));
						}
						if(iHHL1UcCertificateMulti != null){
							ihhl.setUcCertificatePath(fundRequisitonService.dumpUploadedFile(iHHL1UcCertificateMulti));
							ihhl.setUcCertificateName(iHHL1UcCertificateMulti.getOriginalFilename());
						}
						if(iHHL1ProgressPhotoMulti != null){
							ihhl.setProgressPhotoPath(fundRequisitonService.dumpUploadedFile(iHHL1ProgressPhotoMulti));
							ihhl.setProgressPhotoName(iHHL1ProgressPhotoMulti.getOriginalFilename());
						}
						totalAmount = totalAmount+ihhl.getRequestFundAmount();
					}else if( ihhl.getExpenseHead().equalsIgnoreCase("IHHL Installment2")){
						ihhl.setCreated_by(multipartFileRequest.getSession().getAttribute("emailId").toString());
						ihhl.setCreatedAt(new Date());
						ihhl.setUpdateBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
						ihhl.setUpdatedAt(new Date());
						if(iHHL2DetailedActionMulti != null){
							ihhl.setDetailedActionPlanName(iHHL2DetailedActionMulti.getOriginalFilename());
							ihhl.setDetailedActionPlanPath(fundRequisitonService.dumpUploadedFile(iHHL2DetailedActionMulti));
						}
						if(iHHL2UcCertificateMulti != null){
							ihhl.setUcCertificatePath(fundRequisitonService.dumpUploadedFile(iHHL2UcCertificateMulti));
							ihhl.setUcCertificateName(iHHL2UcCertificateMulti.getOriginalFilename());
						}
						if(iHHL2ProgressPhotoMulti != null){
							ihhl.setProgressPhotoPath(fundRequisitonService.dumpUploadedFile(iHHL2ProgressPhotoMulti));
							ihhl.setProgressPhotoName(iHHL2ProgressPhotoMulti.getOriginalFilename());
						}
						if(financialPlanMulti != null){
							ihhl.setFinancialProgressIhhlContructedPath(fundRequisitonService.dumpUploadedFile(financialPlanMulti));
							ihhl.setFinancialProgressIhhlContructedName(financialPlanMulti.getOriginalFilename());
						}
						
						totalAmount = totalAmount+ihhl.getRequestFundAmount();
					}
					
				}
			}
		
			StateCTPT ctpt = proposalMaster.getStateCTPT();
			
			if( ctpt != null){
				ctpt.setCreated_by(multipartFileRequest.getSession().getAttribute("emailId").toString());
				ctpt.setCreatedAt(new Date());
				ctpt.setUpdateBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
				ctpt.setUpdatedAt(new Date());
				if(ctptDetailedActionMulti != null){
					ctpt.setDetailedActionPlanName(ctptDetailedActionMulti.getOriginalFilename());
					ctpt.setDetailedActionPlanPath(fundRequisitonService.dumpUploadedFile(ctptDetailedActionMulti));
				}
				if(ctptUcCertificateMulti != null){
					ctpt.setUcCertificatePath(fundRequisitonService.dumpUploadedFile(ctptUcCertificateMulti));
					ctpt.setUcCertificateName(ctptUcCertificateMulti.getOriginalFilename());
				}
				if(ctptProgressPhotoMulti != null){
					ctpt.setProgressPhotoPath(fundRequisitonService.dumpUploadedFile(ctptProgressPhotoMulti));
					ctpt.setProgressPhotoName(ctptProgressPhotoMulti.getOriginalFilename());
				}
				
				
				totalAmount = totalAmount+ctpt.getCentralAssistanceSought();
			}
			Set<StateSWM> swmList = proposalMaster.getStateSWM();
			for(StateSWM  swm: swmList){
				if(swm != null){
					if(swm.getExpenseHead().equalsIgnoreCase("SWM Installment1")){
						swm.setCreated_by(multipartFileRequest.getSession().getAttribute("emailId").toString());
						swm.setCreatedAt(new Date());
						swm.setUpdateBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
						swm.setUpdatedAt(new Date());
						//proposalHeadMaster.setDetailedActionPlanName(iHHL1DetailedActionMulti.getOriginalFilename());
						//proposalHeadMaster.setDetailedActionPlanPath(fundRequisitonService.dumpUploadedFile(iHHL1DetailedActionMulti));
						if(swmDetailedActionMulti != null){
							swm.setDetailedActionPlanName(swmDetailedActionMulti.getOriginalFilename());
							swm.setDetailedActionPlanPath(fundRequisitonService.dumpUploadedFile(swmDetailedActionMulti));
						}
						if(swmUcCertificateMulti != null){
							swm.setUcCertificatePath(fundRequisitonService.dumpUploadedFile(swmUcCertificateMulti));
							swm.setUcCertificateName(swmUcCertificateMulti.getOriginalFilename());
						}
						if(swmProgressPhotoMulti != null){
							swm.setProgressPhotoPath(fundRequisitonService.dumpUploadedFile(swmProgressPhotoMulti));
							swm.setProgressPhotoName(swmProgressPhotoMulti.getOriginalFilename());
						}
						totalAmount = totalAmount+swm.getCentralAssistanceSought();
					}else if( swm.getExpenseHead().equalsIgnoreCase("SWM Installment2")){
						swm.setCreated_by(multipartFileRequest.getSession().getAttribute("emailId").toString());
						swm.setCreatedAt(new Date());
						swm.setUpdateBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
						swm.setUpdatedAt(new Date());
						if(swm2DetailedActionMulti != null){
							swm.setDetailedActionPlanName(swm2DetailedActionMulti.getOriginalFilename());
							swm.setDetailedActionPlanPath(fundRequisitonService.dumpUploadedFile(swm2DetailedActionMulti));
						}
						if(swm2UcCertificateMulti != null){
							swm.setUcCertificatePath(fundRequisitonService.dumpUploadedFile(swm2UcCertificateMulti));
							swm.setUcCertificateName(swm2UcCertificateMulti.getOriginalFilename());
						}
						if(swm2ProgressPhotoMulti != null){
							swm.setProgressPhotoPath(fundRequisitonService.dumpUploadedFile(swm2ProgressPhotoMulti));
							swm.setProgressPhotoName(swm2ProgressPhotoMulti.getOriginalFilename());
						}
						/*if(financialPlanMulti != null){
							//swm.setFinancialProgressIhhlContructedPath(fundRequisitonService.dumpUploadedFile(financialPlanMulti));
							//swm.setFinancialProgressIhhlContructedName(financialPlanMulti.getOriginalFilename());
						}*/
						
						totalAmount = totalAmount+swm.getCentralAssistanceSought();
					}
					
				}
			}
			
			StateIEC iec = proposalMaster.getStateIEC();
			if(iec != null){
				iec.setCreated_by(multipartFileRequest.getSession().getAttribute("emailId").toString());
				iec.setCreatedAt(new Date());
				iec.setUpdateBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
				iec.setUpdatedAt(new Date());
				if(iecDetailedActionMulti != null){
					iec.setDetailedActionPlanName(iecDetailedActionMulti.getOriginalFilename());
					iec.setDetailedActionPlanPath(fundRequisitonService.dumpUploadedFile(iecDetailedActionMulti));
				}
				if(iecUcCertificateMulti != null){
					iec.setUcCertificatePath(fundRequisitonService.dumpUploadedFile(iecUcCertificateMulti));
					iec.setUcCertificateName(iecUcCertificateMulti.getOriginalFilename());
				}
				if(iecProgressPhotoMulti != null){
					iec.setProgressPhotoPath(fundRequisitonService.dumpUploadedFile(iecProgressPhotoMulti));
					iec.setProgressPhotoName(iecProgressPhotoMulti.getOriginalFilename());
				}
				totalAmount = totalAmount+iec.getCentralAssistanceSought();
			} 
			StateCBAOE cbAoe = proposalMaster.getStateCBAOE();
			if(cbAoe != null ){
				cbAoe.setCreated_by(multipartFileRequest.getSession().getAttribute("emailId").toString());
				cbAoe.setCreatedAt(new Date());
				cbAoe.setUpdateBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
				cbAoe.setUpdatedAt(new Date());
				if(cbAoeDetailedActionMulti != null){
					cbAoe.setDetailedActionPlanName(cbAoeDetailedActionMulti.getOriginalFilename());
					cbAoe.setDetailedActionPlanPath(fundRequisitonService.dumpUploadedFile(cbAoeDetailedActionMulti));
				}
				if(cbAoeCertificateMulti != null){
					cbAoe.setUcCertificatePath(fundRequisitonService.dumpUploadedFile(cbAoeCertificateMulti));
					cbAoe.setUcCertificateName(cbAoeCertificateMulti.getOriginalFilename());
				}
				if(cbAoeProgressPhotoMulti != null){
					cbAoe.setProgressPhotoPath(fundRequisitonService.dumpUploadedFile(cbAoeProgressPhotoMulti));
					cbAoe.setProgressPhotoName(cbAoeProgressPhotoMulti.getOriginalFilename());
				}
				totalAmount = totalAmount+cbAoe.getCentralAssistanceSought();
			}
		//}
		
		
		/*MultipartFile shpcApprovalMulti = multipartFileRequest.getFile("shpcDocument");
		if(shpcApprovalMulti != null){
			proposalMaster.setShpcApprovalName(shpcApprovalMulti.getOriginalFilename());
			proposalMaster.setShpcApprovalPath(fundRequisitonService.dumpUploadedFile(shpcApprovalMulti));
		}*/
		proposalMaster.setCreatedAt(new Date());
		proposalMaster.setCreatedBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
		proposalMaster.setUpdateBy(multipartFileRequest.getSession().getAttribute("emailId").toString());
		proposalMaster.setUpdatedAt(new Date());
		proposalMaster.setTotalAmount(totalAmount);
		ProposalMaster proposal_Master=fundRequisitonService.saveProposalByState(proposalMaster);
		return proposal_Master;
	}
	
	
	@RequestMapping(value = "/fund/read/getUtilisationByState", method = RequestMethod.POST)
	public @ResponseBody StateUtilizationMaster getUtilisationByState(@RequestBody Map<String, String> utilDeatils) {
		System.out.println("********************"+Integer.parseInt(utilDeatils.get("stateCode")) +"*****"+utilDeatils.get("expenseHead"));
		StateUtilizationMaster proposal_Master=fundRequisitonService.getUtilisationByState(Integer.parseInt(utilDeatils.get("stateCode")));
		return proposal_Master;
	}
	@RequestMapping(value = "/fund/read/getSanctionDetailsByState", method = RequestMethod.POST)
	public @ResponseBody SanctionMaster getSanctionDetailsByState(@RequestBody Map<String, String> utilDeatils) {
		SanctionMaster proposal_Master=fundRequisitonService.getSanctionDetailsByState(Integer.parseInt(utilDeatils.get("stateCode")));
		return proposal_Master;
	}
	
	@RequestMapping(value = "/fund/read/getTotalTargetByState", method = RequestMethod.POST)
	public @ResponseBody Response getTotalTargetByState(@RequestBody Map<String, String> utilDeatils) {
		Response proposal_Master=fundRequisitonService.getTotalTargetByState(Integer.parseInt(utilDeatils.get("stateCode")));
		return proposal_Master;
	}
	@RequestMapping(value = "/fund/read/getSWMValidDetailsByState", method = RequestMethod.POST)
	public @ResponseBody Response getSWMValidDetailsByState(@RequestBody Map<String, String> utilDeatils) {
		Response proposal_Master=fundRequisitonService.getSWMValidDetailsByState(Integer.parseInt(utilDeatils.get("stateCode")));
		return proposal_Master;
	}
	
	@RequestMapping(value = "/fund/read/getIhhlInstalment1Details", method = RequestMethod.POST)
	public @ResponseBody Response getIhhlInstalment1Details(@RequestBody Map<String, String> utilDeatils) {
		Response proposal_Master=fundRequisitonService.getIhhlInstalment1Details(Integer.parseInt(utilDeatils.get("stateCode")));
		return proposal_Master;
	}
	
	@RequestMapping(value = "/fund/read/getSWMInstalment1Details", method = RequestMethod.POST)
	public @ResponseBody Response getSWMInstalment1Details(@RequestBody Map<String, String> utilDeatils) {
		Response proposal_Master=fundRequisitonService.getSWMInstalment1Details(Integer.parseInt(utilDeatils.get("stateCode")));
		return proposal_Master;
	}
	
	@RequestMapping(value = "/fund/create/saveUitlization", method = RequestMethod.POST)
	public @ResponseBody Response saveUtilization(MultipartHttpServletRequest multipartFileRequest ) {
		String utilizationMasterData=multipartFileRequest.getParameter("utilizationMaster");
		StateUtilizationHeadMaster utilizationMaster= new Gson().fromJson(utilizationMasterData, StateUtilizationHeadMaster.class);
		MultipartFile ucApprovalMulti = multipartFileRequest.getFile("ucCertificate");
		
		MultipartFile photographmulti = multipartFileRequest.getFile("photograps");
		
		if(ucApprovalMulti != null){
			utilizationMaster.setUtilizationCertificateName(ucApprovalMulti.getOriginalFilename());
			utilizationMaster.setUtilizationCertificateFilePath(fundRequisitonService.dumpUploadedFile(ucApprovalMulti));
		}
		
		if(photographmulti != null){
			utilizationMaster.setPhotosName(photographmulti.getOriginalFilename());
			utilizationMaster.setPhotosPath(fundRequisitonService.dumpUploadedFile(photographmulti));
		}
		utilizationMaster.setUtilizationCreatedDate(new Date());
		Long utlizationTillDate = fundRequisitonService.getUtilizationTillDate(utilizationMaster.getExpenseHead(), utilizationMaster.getStateCode().getStateCode());
		if(utlizationTillDate == null){
			utilizationMaster.setUtilizationAmountTillDate(utilizationMaster.getUtilizationAmount());
		}else{
			utilizationMaster.setUtilizationAmountTillDate(utlizationTillDate +utilizationMaster.getUtilizationAmount() );
		}
		StateUtilizationHeadMaster proposal_Master=fundRequisitonService.saveUtilization(utilizationMaster);
		if(proposal_Master != null){
			Response response = new Response();
			response.setStatus(1);
			response.setData(proposal_Master);
			response.setMessage("Utlization saved successfully");
			return response;
		}else{
			return null;
		}
		
	}
	
}
