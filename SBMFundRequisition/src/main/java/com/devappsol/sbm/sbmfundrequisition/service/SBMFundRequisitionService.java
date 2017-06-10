package com.devappsol.sbm.sbmfundrequisition.service;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import com.devappsol.sbm.sbmfundrequisition.interfaces.dao.ISBMFundRequisitionDao;
import com.devappsol.sbm.sbmfundrequisition.interfaces.service.ISBMFundRequisitonService;
import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationFinancialYear;
import com.devappsol.sbm.sbmfundrequisition.model.ProposalMaster;
import com.devappsol.sbm.sbmfundrequisition.model.Response;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionHeadMater;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateFinancialTarget;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationHeadMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationMaster;
import com.devappsol.sbm.sbmfundrequisition.utills.SBMStringUtils;

public class SBMFundRequisitionService implements ISBMFundRequisitonService {
	
	@Autowired
	ISBMFundRequisitionDao sRequisitionDao;
	
	public List<ProposalMaster> getProposalByState(int stateCode){
		return sRequisitionDao.getProposalByState(stateCode);
	}
	public String getStateNameByStateCode(int stateCode){
		return sRequisitionDao.getStateNameByStateCode(stateCode);
	}
	public List<ProposalMaster> getAllProposals(){
		return sRequisitionDao.getAllProposals();
	}
	
	public ProposalMaster getProposalById(String proposalId){
		return sRequisitionDao.getProposalById(proposalId);
	}

	public ProposalMaster saveProposalByState(ProposalMaster proposalMaster){
		return sRequisitionDao.saveProposalByState(proposalMaster);
	}
	public String generateAutoProposalId(ProposalMaster proposalMaster){
		String stateName=  getStateNameByStateCode(proposalMaster.getStateCode().getStateCode());
		List<ProposalMaster> propList=sRequisitionDao.getProposalByState(proposalMaster.getStateCode().getStateCode());
		int count =1;
		if(!propList.isEmpty()){
			for(ProposalMaster proposalMaster2 : propList){
				String[] exsisPropId = proposalMaster2.getId().split("/");
				if(proposalMaster.getFinancialYear().equalsIgnoreCase(exsisPropId[1])){
					count=count+1;
				}
			}	
		}
		
		String newPropId= stateName+"/"+proposalMaster.getFinancialYear()+"/"+count;
		return newPropId;

	}
	public String dumpUploadedFile(MultipartFile multipartFile) {
		String fileName = multipartFile.getOriginalFilename();
		String[] fileArray = StringUtils.split(fileName, ".");
		String truncated = SBMStringUtils.getTruncatedName(fileArray[0]);
		fileName = truncated + new Date().toString().replace(" ", "_") +"."+ fileArray[1];
		String path = null;
		// try {
		byte[] bytes = null;
		try {
			bytes = multipartFile.getBytes();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String fileBase = System.getenv("FILEBASE");
		if(fileBase == null) {
			fileBase = "/home/vekomy/home";
		}		
		
		String filePath = fileBase + File.separator + "SBMUploads/SBMFundRequisition" + File.separator + "Attachments";	
   	    File dir = new File(filePath);
  		if (!dir.exists()) {
			dir.mkdirs();
		}	
  	// Create the file on server		
        File serverFile = new File(dir.getAbsolutePath() + File.separator + fileName);
		BufferedOutputStream stream;
		try {
			stream = new BufferedOutputStream(new FileOutputStream(serverFile));
			stream.write(bytes);
			stream.close();	
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		path = serverFile.getAbsolutePath();	
		String rep = fileBase + File.separator + "SBMUploads";
		path = path.replace(rep, "/sbm/content");
//	path = "/content/Banner" + "/" + fileName;
		
	return path;
	}
	
	public StateUtilizationMaster getUtilisationByState(int stateCode){
		return sRequisitionDao.getUtilisationByState(stateCode);
		
	}
	
	public SanctionMaster getSanctionDetailsByState(int stateCode){
		return sRequisitionDao.getSanctionDetailsByState(stateCode);
	}
	
	public List<ProposalMaster> saveSanctionByState(SanctionMaster metadata){
		sRequisitionDao.saveSanctionByState(metadata);
		return sRequisitionDao.getAllProposals();
	}
	
	public Response getTotalTargetByState(int parseInt){
		List<CitySanitationFinancialYear> citySanitationFinancialYearList=sRequisitionDao.getTotalPhysicalTargetByState(parseInt);
		StateFinancialTarget stateFinancialList=sRequisitionDao.getTotalFinancialTargetByState(parseInt);
		long totalIHHTsRequiredbyState = 0;
		long totalCTRequired = 0;
		long totalPTRequired = 0;
		for(CitySanitationFinancialYear citySanitationFinancialYear : citySanitationFinancialYearList){
			totalIHHTsRequiredbyState=totalIHHTsRequiredbyState+citySanitationFinancialYear.getTotalIHHTsRequiredbyState();
			totalCTRequired=totalCTRequired+citySanitationFinancialYear.getTotalCTRequired();
			totalPTRequired=totalPTRequired+citySanitationFinancialYear.getTotalPTRequired();
		}
		CitySanitationFinancialYear citySanitationFinancialYear= new CitySanitationFinancialYear();
		citySanitationFinancialYear.setTotalIHHTsRequiredbyState(totalIHHTsRequiredbyState);
		citySanitationFinancialYear.setTotalCTRequired(totalCTRequired);
		citySanitationFinancialYear.setTotalPTRequired(totalPTRequired);
		
		
		List<Object> responseData= new ArrayList<Object>();
		responseData.add(citySanitationFinancialYear);
		responseData.add(stateFinancialList);
		Response response = new  Response();
		response.setData(responseData);
		response.setStatus(1);
		response.setMessage("Data fetched Successfully");
		
		return response;
	}
	public Response getSWMValidDetailsByState(int stateCode){
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String fromDate = sdf.format(date);
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.MONTH, -18);
		String toDate = sdf.format(cal.getTime());
		//cal.add(Calendar.YEAR, -1);
		System.out.println("**********fromDate**************"+fromDate);
		System.out.println("**********toDate**************"+toDate);
		List<SanctionHeadMater> sanctionMasterList = sRequisitionDao.getSWMSanctionDetails(stateCode,fromDate,toDate);
		long totalSanAmount = 0;
		for(SanctionHeadMater sanctionHeadMater : sanctionMasterList){
			totalSanAmount=totalSanAmount+sanctionHeadMater.getSanctionedAmount();
		}
		
		List<StateUtilizationHeadMaster> stateUtilizationMastersList = sRequisitionDao.getSWMUtilizationDetails(stateCode,fromDate,toDate);
		long totalUtilAmount = 0;
		for(StateUtilizationHeadMaster sanctionHeadMater : stateUtilizationMastersList){
			totalUtilAmount=totalUtilAmount+sanctionHeadMater.getUtilizationAmount();
		}
		
		System.out.println("******totalSanAmount***********"+totalSanAmount + "*****totalUtilAmount******"+totalUtilAmount);
		Map<String, Long> swmDetails= new HashMap<String, Long>();
		swmDetails.put("totalSanAmount", totalSanAmount);
		swmDetails.put("totalUtilAmount", totalUtilAmount);
		Response response = new Response();
		response.setData(swmDetails);
		response.setStatus(1);
		response.setMessage("Data loaded successfully");
		return response;
	}
	public Response getIhhlInstalment1Details(int stateCode){
		List<String> stateUtilizationMastersList = sRequisitionDao.getIhhlInstalment1Details(stateCode);
		Response response = new Response();
		response.setStatus(1);
		response.setMessage("Fetched Successfully");
		response.setData(stateUtilizationMastersList);
		return response;

	}
	
	public Response getSWMInstalment1Details(int stateCode){
		List<String> stateUtilizationMastersList = sRequisitionDao.getSWMInstalment1Details(stateCode);
		Response response = new Response();
		response.setStatus(1);
		response.setMessage("Fetched Successfully");
		response.setData(stateUtilizationMastersList);
		return response;

	}
	public StateUtilizationHeadMaster saveUtilization(StateUtilizationHeadMaster utilizationMaster){
		return sRequisitionDao.saveUtilization(utilizationMaster);
	}
	public Long getUtilizationTillDate(String expenseHead ,int stateCode){
		return sRequisitionDao.getUtilizationTillDate(expenseHead, stateCode);
	}
}
