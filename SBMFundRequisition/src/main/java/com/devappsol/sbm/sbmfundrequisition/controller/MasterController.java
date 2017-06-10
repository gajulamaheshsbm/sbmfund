package com.devappsol.sbm.sbmfundrequisition.controller;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.module.SimpleAbstractTypeResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.devappsol.sbm.sbmfundrequisition.interfaces.service.ISBMFundRequisitionMasterService;
import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationFinancialYear;
import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationMaster;
import com.devappsol.sbm.sbmfundrequisition.model.IHHLCenterShare;
import com.devappsol.sbm.sbmfundrequisition.model.MasterResponse;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionHeadMater;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateCodes;
import com.devappsol.sbm.sbmfundrequisition.model.StateFinancialTarget;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationHeadMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationMaster;
import com.devappsol.sbm.sbmfundrequisition.model.ULBCodes;
import com.google.common.util.concurrent.Service.State;
import com.opencsv.CSVReader;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
public class MasterController {

	@Autowired
	ISBMFundRequisitionMasterService masterService;

	private static final Logger logger = Logger.getLogger(MasterController.class);

	@RequestMapping(value = "/fund/create/saveCitySanitations", method = RequestMethod.POST)
	public @ResponseBody MasterResponse saveCitySanitationData(@RequestBody CitySanitationMaster city) {
		MasterResponse response = new MasterResponse();
		CitySanitationMaster cityObj = masterService.saveCitySanitationData(city);
		if (cityObj != null) {
			List<CitySanitationMaster> cityList = masterService.getCitySanitationData();
			if (!cityList.isEmpty()) {
				response.setStatus(200);
				response.setMessage("City Sanitations Details Loaded Successfully");
				response.setObj(cityList);
				return response;
			} else {
				logger.info("No Records found for City Sanitation");
				response.setStatus(-1);
				response.setMessage("No Records found for City Sanitation");
				response.setObj(null);
			}
		} else {
			logger.info("CitySanitation saving failed...");
			response.setStatus(-1);
			response.setMessage("CitySanitation saving failed...");
			response.setObj(null);
		}
		return response;
	}

	@RequestMapping(value = "/fund/create/uploadCitySanitations", method = RequestMethod.POST)
	public @ResponseBody MasterResponse uploadCitySanitationData(MultipartHttpServletRequest request) {
		MasterResponse response = new MasterResponse();
		CSVReader csvReader = null;
		try {
			FileReader fileReader = new FileReader(multipartToFile(request.getFile("file")));
			csvReader = new CSVReader(fileReader);
			String[] row = null;
			int count = 0;

			while ((row = csvReader.readNext()) != null) {
				if (count == 0) {
				} else {
					CitySanitationMaster city = new CitySanitationMaster();
					StateCodes sCodes = new StateCodes();
					sCodes.setStateCode(Integer.parseInt(row[0]));
					city.setStateCode(sCodes);
					ULBCodes ulbCodes = new ULBCodes();
					ulbCodes.setUlbCode(Integer.parseInt(row[1]));
					city.setUlbCodes(ulbCodes);
					city.setUrbanPopulation(Long.parseLong(row[2]));
					city.setNoOfUrbanHouseHolds(Long.parseLong(row[3]));
					city.setUrbanHHDefecatingOpen(Long.parseLong(row[4]));
					city.setUrbanHHshavingPitLaterines(Long.parseLong(row[5]));
					city.setUrbanHHswithInsanitaryLaterines(Long.parseLong(row[6]));
					city.setSolidWasteGenerated(Long.parseLong(row[7]));
					city.setMSWCollected(Long.parseLong(row[8]));
					city.setMswTransported(Long.parseLong(row[9]));
					city.setMswTreated(Long.parseLong(row[10]));
					city.setCensusYear(Long.parseLong(row[11]));
					masterService.saveCitySanitationData(city);
				}
				count++;
			}
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				csvReader.close();
			} catch (IOException e) {
				logger.error("Exception raised at closing csvReader resource " + e);
				e.printStackTrace();
			}
		}

		List<CitySanitationMaster> cityList = masterService.getCitySanitationData();
		if (!cityList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("City Sanitations Details Loaded Successfully");
			response.setObj(cityList);
			return response;
		} else {
			logger.info("No Records found for City Sanitation");
			response.setStatus(-1);
			response.setMessage("No Records found for City Sanitation");
			response.setObj(null);
		}

		return response;
	}

	@RequestMapping(value = "/fund/update/updateCitySanitations", method = RequestMethod.POST)
	public @ResponseBody MasterResponse updateCitySanitationData(@RequestBody CitySanitationMaster city) {
		MasterResponse response = new MasterResponse();
		CitySanitationMaster cityObj = masterService.saveCitySanitationData(city);
		if (cityObj != null) {
			List<CitySanitationMaster> cityList = masterService.getCitySanitationData();

			if (!cityList.isEmpty()) {

				response.setStatus(200);
				response.setMessage("City Sanitations Details Loaded Successfully");
				response.setObj(cityList);
				return response;
			} else {
				logger.info("No Records found for City Sanitation");
				response.setStatus(-1);
				response.setMessage("No Records found for City Sanitation");
				response.setObj(null);
			}
		} else {
			logger.info("CitySanitation update failed...");
			response.setStatus(-1);
			response.setMessage("CitySanitation update failed...");
			response.setObj(null);
		}
		return response;
	}

	@RequestMapping(value = "/fund/read/getCitySanitations", method = RequestMethod.POST)
	public @ResponseBody MasterResponse getCitySanitationData() {
		List<CitySanitationMaster> cityList = masterService.getCitySanitationData();
		MasterResponse response = new MasterResponse();
		if (!cityList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("City Sanitations Details Loaded Successfully");
			response.setObj(cityList);
			return response;
		} else {
			logger.info("No Records found for City Sanitation");
			response.setStatus(-1);
			response.setMessage("No Records found for City Sanitation");
			response.setObj(null);

		}
		return response;
	}

	@RequestMapping(value = "/fund/create/saveCitySanitationsFinYear", method = RequestMethod.POST)
	public @ResponseBody MasterResponse saveCitySanitationFinancialData(@RequestBody CitySanitationFinancialYear city) {
		MasterResponse response = new MasterResponse();
		CitySanitationFinancialYear cityObj = masterService.saveCitySanitationFinancialData(city);
		if (cityObj != null) {
			List<CitySanitationFinancialYear> cityList = masterService.getCitySanitationFinancialData();
			if (!cityList.isEmpty()) {
				response.setStatus(200);
				response.setMessage("City Sanitations Financial Year Details Loaded Successfully");
				response.setObj(cityList);
				return response;
			} else {
				logger.info("No Records found for City Sanitation Financial Year ");
				response.setStatus(-1);
				response.setMessage("No Records found for City Sanitation Financial Year ");
				response.setObj(null);
			}
		} else {
			logger.info("City Sanitation Financial Year saving failed...");
			response.setStatus(-1);
			response.setMessage("City Sanitation Financial Year  saving failed...");
			response.setObj(null);
		}
		return response;
	}

	@RequestMapping(value = "/fund/create/uploadCitySanitationsFinYear", method = RequestMethod.POST)
	public @ResponseBody MasterResponse uploadCitySanitationFinancialData(MultipartHttpServletRequest request) {
		MasterResponse response = new MasterResponse();
		CSVReader csvReader = null;
		try {
			FileReader fileReader = new FileReader(multipartToFile(request.getFile("file")));
			csvReader = new CSVReader(fileReader);
			String[] row = null;
			int count = 0;

			while ((row = csvReader.readNext()) != null) {
				if (count == 0) {
				} else {
					CitySanitationFinancialYear cFinYear = new CitySanitationFinancialYear();
					StateCodes sCodes = new StateCodes();
					sCodes.setStateCode(Integer.parseInt(row[0]));
					cFinYear.setStateCode(sCodes);
					ULBCodes ulbCodes = new ULBCodes();
					cFinYear.setUlbCodes(ulbCodes);
					ulbCodes.setUlbCode(Integer.parseInt(row[1]));
					cFinYear.setUrbanHHsDefecatingonOpen(Long.parseLong(row[2]));
					cFinYear.setUrbanHHsHavingPitLaterines(Long.parseLong(row[3]));
					cFinYear.setUrbanHHswithInsanitaryLaterines(Long.parseLong(row[4]));
					cFinYear.setTotalIHHTsRequiredbyState(Long.parseLong(row[5]));
					cFinYear.setTotalCTRequired(Long.parseLong(row[6]));
					cFinYear.setTotalPTRequired(Long.parseLong(row[7]));
					cFinYear.setFinancialYear(Long.parseLong(row[8]));
					masterService.saveCitySanitationFinancialData(cFinYear);
				}
				count++;
			}
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				csvReader.close();
			} catch (IOException e) {
				logger.error("Exception raised at closing csvReader resource " + e);
				e.printStackTrace();
			}
		}

		List<CitySanitationFinancialYear> cityList = masterService.getCitySanitationFinancialData();
		if (!cityList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("City Sanitations Financial Year Details Loaded Successfully");
			response.setObj(cityList);
			return response;
		} else {
			logger.info("No Records found for City Sanitation Financial Year ");
			response.setStatus(-1);
			response.setMessage("No Records found for City Sanitation Financial Year ");
			response.setObj(null);
		}

		return response;
	}

	@RequestMapping(value = "/fund/update/updateCitySanitationsFinYear", method = RequestMethod.POST)
	public @ResponseBody MasterResponse updateFinancialYearData(@RequestBody CitySanitationFinancialYear city) {
		MasterResponse response = new MasterResponse();
		CitySanitationFinancialYear cityObj = masterService.saveCitySanitationFinancialData(city);
		if (cityObj != null) {
			List<CitySanitationFinancialYear> cityList = masterService.getCitySanitationFinancialData();

			if (!cityList.isEmpty()) {

				response.setStatus(200);
				response.setMessage("City Sanitations Financial Year Details Loaded Successfully");
				response.setObj(cityList);
				return response;
			} else {
				logger.info("No Records found for City Sanitation Financial Year");
				response.setStatus(-1);
				response.setMessage("No Records found for City Sanitation Financial Year");
				response.setObj(null);
			}
		} else {
			logger.info("City Sanitation Financial Year update failed...");
			response.setStatus(-1);
			response.setMessage("City Sanitation Financial Year update failed...");
			response.setObj(null);
		}
		return response;
	}

	@RequestMapping(value = "/fund/read/getCitySanitationsFinYear", method = RequestMethod.POST)
	public @ResponseBody MasterResponse getFinancialYearData() {
		List<CitySanitationFinancialYear> cityList = masterService.getCitySanitationFinancialData();
		MasterResponse response = new MasterResponse();
		if (!cityList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("City Sanitations Financial Year Details Loaded Successfully");
			response.setObj(cityList);
			return response;
		} else {
			logger.info("No Records found for City Sanitation Financial Year");
			response.setStatus(-1);
			response.setMessage("No Records found for City Sanitation Financial Year");
			response.setObj(null);

		}
		return response;
	}

	@RequestMapping(value = "/fund/create/saveStateFinTarget", method = RequestMethod.POST)
	public @ResponseBody MasterResponse saveStateFinancialTargetData(@RequestBody StateFinancialTarget city) {
		MasterResponse response = new MasterResponse();
		StateFinancialTarget cityObj = masterService.saveStateFinancialTargetData(city);
		if (cityObj != null) {
			List<StateFinancialTarget> cityList = masterService.getStateFinancialTargetData();
			if (!cityList.isEmpty()) {
				response.setStatus(200);
				response.setMessage("State Financial Target Details Loaded Successfully");
				response.setObj(cityList);
				return response;
			} else {
				logger.info("No Records found for State Financial Target ");
				response.setStatus(-1);
				response.setMessage("No Records found for State Financial Target ");
				response.setObj(null);
			}
		} else {
			logger.info("State Financial Target saving failed...");
			response.setStatus(-1);
			response.setMessage("State Financial Target  saving failed...");
			response.setObj(null);
		}
		return response;
	}

	@RequestMapping(value = "/fund/create/uploadStateFinTarget", method = RequestMethod.POST)
	public @ResponseBody MasterResponse uploadStateFinancialTargetData(MultipartHttpServletRequest request) {
		MasterResponse response = new MasterResponse();
		CSVReader csvReader = null;
		try {
			FileReader fileReader = new FileReader(multipartToFile(request.getFile("file")));
			csvReader = new CSVReader(fileReader);
			String[] row = null;
			int count = 0;

			while ((row = csvReader.readNext()) != null) {
				if (count == 0) {
				} else {
					StateFinancialTarget state = new StateFinancialTarget();
					StateCodes sCodes = new StateCodes();
					sCodes.setStateCode(Integer.parseInt(row[0]));
					state.setStateCode(sCodes);
					state.setHeads(row[1]);
					state.setTotalTargetFunds(Long.parseLong(row[2]));
					state.setFinancialYear(row[3]);
					masterService.saveStateFinancialTargetData(state);
				}
				count++;
			}
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				csvReader.close();
			} catch (IOException e) {
				logger.error("Exception raised at closing csvReader resource " + e);
				e.printStackTrace();
			}
		}

		List<StateFinancialTarget> cityList = masterService.getStateFinancialTargetData();
		if (!cityList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("State Financial Target Details Loaded Successfully");
			response.setObj(cityList);
			return response;
		} else {
			logger.info("No Records found for State Financial Target ");
			response.setStatus(-1);
			response.setMessage("No Records found for State Financial Target ");
			response.setObj(null);
		}

		return response;
	}

	@RequestMapping(value = "/fund/update/updateStateFinTarget", method = RequestMethod.POST)
	public @ResponseBody MasterResponse updateStateFinancialTargetData(@RequestBody StateFinancialTarget city) {
		MasterResponse response = new MasterResponse();
		StateFinancialTarget cityObj = masterService.saveStateFinancialTargetData(city);
		if (cityObj != null) {
			List<StateFinancialTarget> cityList = masterService.getStateFinancialTargetData();

			if (!cityList.isEmpty()) {

				response.setStatus(200);
				response.setMessage("State Financial Target Details Loaded Successfully");
				response.setObj(cityList);
				return response;
			} else {
				logger.info("No Records found for State Financial Target");
				response.setStatus(-1);
				response.setMessage("No Records found for State Financial Target");
				response.setObj(null);
			}
		} else {
			logger.info("State Financial Target saving failed...");
			response.setStatus(-1);
			response.setMessage("State Financial Target saving failed...");
			response.setObj(null);
		}
		return response;
	}

	@RequestMapping(value = "/fund/read/getStateFinTarget", method = RequestMethod.POST)
	public @ResponseBody MasterResponse getStateFinancialTargetData() {
		List<StateFinancialTarget> cityList = masterService.getStateFinancialTargetData();
		MasterResponse response = new MasterResponse();
		if (!cityList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("State Financial Target Details Loaded Successfully");
			response.setObj(cityList);
			return response;
		} else {
			logger.info("No Records found for State Financial Target");
			response.setStatus(-1);
			response.setMessage("No Records found for State Financial Target ");
			response.setObj(null);

		}
		return response;
	}

	public File multipartToFile(MultipartFile multipart) throws IllegalStateException, IOException {
		File convFile = new File(multipart.getOriginalFilename());
		multipart.transferTo(convFile);
		return convFile;
	}

	@RequestMapping(value = "/fund/read/getStatesList", method = RequestMethod.POST)
	public @ResponseBody MasterResponse getStateDropDown() {
		List<StateCodes> stateList = masterService.getStateDropDown();
		MasterResponse response = new MasterResponse();
		if (!stateList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("State Names Loaded Successfully");
			response.setObj(stateList);
			return response;
		} else {
			logger.info("No State Names Found..");
			response.setStatus(-1);
			response.setMessage("No State Names Found.. ");
			response.setObj(null);

		}
		return response;
	}

	@RequestMapping(value = "/fund/read/getCityListByState/{stateId}", method = RequestMethod.POST)
	public @ResponseBody MasterResponse getCityListByState(@PathVariable("stateId") int stateId) {
		List<ULBCodes> ulbList = masterService.getCityDropDown(stateId);
		MasterResponse response = new MasterResponse();
		if (!ulbList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("City Names Loaded Successfully");
			response.setObj(ulbList);
			return response;
		} else {
			logger.info("No City Names Found For StateId: " + stateId);
			response.setStatus(-1);
			response.setMessage("No City Names Found For StateId: " + stateId);
			response.setObj(null);

		}
		return response;
	}
	
	
	@RequestMapping(value = "/fund/create/saveIhhlShareAmt", method = RequestMethod.POST)
	public @ResponseBody MasterResponse saveIhhlShareAmount(@RequestBody IHHLCenterShare shareAmount) {
		MasterResponse response = new MasterResponse();
		IHHLCenterShare shareAmountObj = masterService.saveIhhlShareAmount(shareAmount);
		if (shareAmountObj != null) {
			List<IHHLCenterShare> ihhList = masterService.getIhhlShareAmountData();
			if (!ihhList.isEmpty()) {
				response.setStatus(200);
				response.setMessage("IHHL-Center Share Amount Details Loaded Successfully");
				response.setObj(ihhList);
				return response;
			} else {
				logger.info("No Records found for IHHL-Center Share Amount");
				response.setStatus(-1);
				response.setMessage("No Records found for IHHL-Center Share Amount");
				response.setObj(null);
			}
		} else {
			logger.info("IHHL Share Amount saving failed...");
			response.setStatus(-1);
			response.setMessage("IHHL Share Amount saving failed...");
			response.setObj(null);
		}
		return response;
	}

	@RequestMapping(value = "/fund/create/uploadIhhlShareAmt", method = RequestMethod.POST)
	public @ResponseBody MasterResponse uploadIhhlShareAmount(MultipartHttpServletRequest request) {
		MasterResponse response = new MasterResponse();
		CSVReader csvReader = null;
		try {
			FileReader fileReader = new FileReader(multipartToFile(request.getFile("file")));
			csvReader = new CSVReader(fileReader);
			String[] row = null;
			int count = 0;

			while ((row = csvReader.readNext()) != null) {
				if (count == 0) {
				} else {
					IHHLCenterShare ihhl = new IHHLCenterShare();
					StateCodes sCodes = new StateCodes();
					sCodes.setStateCode(Integer.parseInt(row[0]));
					ihhl.setStateCode(sCodes);
					ihhl.setCenterShareAmount(Integer.parseInt(row[1]));
					masterService.saveIhhlShareAmount(ihhl);
				}
				count++;
			}
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				csvReader.close();
			} catch (IOException e) {
				logger.error("Exception raised at closing csvReader resource " + e);
				e.printStackTrace();
			}
		}

		List<IHHLCenterShare> ihhList = masterService.getIhhlShareAmountData();
		if (!ihhList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("IHHL-Center Share Amount Details Loaded Successfully");
			response.setObj(ihhList);
			return response;
		} else {
			logger.info("No Records found for IHHL-Center Share Amount");
			response.setStatus(-1);
			response.setMessage("No Records found for IHHL-Center Share Amount");
			response.setObj(null);
		}

		return response;
	}
	
	
	@RequestMapping(value = "/fund/update/updateIhhlShareAmt", method = RequestMethod.POST)
	public @ResponseBody MasterResponse updateIhhlShareAmountData(@RequestBody IHHLCenterShare ihhlData) {
		MasterResponse response = new MasterResponse();
		IHHLCenterShare ihhlObj = masterService.saveIhhlShareAmount(ihhlData);
		if (ihhlObj != null) {
			List<CitySanitationMaster> cityList = masterService.getCitySanitationData();

			if (!cityList.isEmpty()) {

				response.setStatus(200);
				response.setMessage("IHHL-Center Share Amount Details Loaded Successfully");
				response.setObj(cityList);
				return response;
			} else {
				logger.info("No Records found for IHHL-Center Share Amount");
				response.setStatus(-1);
				response.setMessage("No Records found for IHHL-Center Share Amount");
				response.setObj(null);
			}
		} else {
			logger.info("IHHL-Center Share Amount updating failed...");
			response.setStatus(-1);
			response.setMessage("IHHL-Center Share Amount updating failed...");
			response.setObj(null);
		}
		return response;
	}

	@RequestMapping(value = "/fund/read/getIhhlShareAmt", method = RequestMethod.POST)
	public @ResponseBody MasterResponse getIhhlShareAmountData() {
		List<IHHLCenterShare> ihhList = masterService.getIhhlShareAmountData();
		MasterResponse response = new MasterResponse();
		if (!ihhList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("IHHL-Center Share Amount Details Loaded Successfully");
			response.setObj(ihhList);
			return response;
		} else {
			logger.info("No Records found for IHHL-Center Share Amount");
			response.setStatus(-1);
			response.setMessage("No Records found for IHHL-Center Share Amount");
			response.setObj(null);

		}
		return response;
	}
	
	// Sanction Master curd operations....
	
	@RequestMapping(value = "/fund/create/saveSanctionData", method = RequestMethod.POST)
	public @ResponseBody MasterResponse saveSanctionData(@RequestBody SanctionMaster sanctionMaster) {
		MasterResponse response = new MasterResponse();
		SanctionMaster sanctionObj = masterService.saveSancstionData(sanctionMaster);
		if (sanctionObj != null) {
			List<SanctionMaster> sanctionList = masterService.getSancstionData();
			if (!sanctionList.isEmpty()) {
				response.setStatus(200);
				response.setMessage("IHHL-Center Share Amount Details Loaded Successfully");
				response.setObj(sanctionList);
				return response;
			} else {
				logger.info("No Records found for IHHL-Center Share Amount");
				response.setStatus(-1);
				response.setMessage("No Records found for IHHL-Center Share Amount");
				response.setObj(null);
			}
		} else {
			logger.info("IHHL Share Amount saving failed...");
			response.setStatus(-1);
			response.setMessage("IHHL Share Amount saving failed...");
			response.setObj(null);
		}
		return response;
	}

	@RequestMapping(value = "/fund/create/uploadSanctionData", method = RequestMethod.POST)
	public @ResponseBody MasterResponse uploadSanctionData(MultipartHttpServletRequest request) {
		MasterResponse response = new MasterResponse();
		CSVReader csvReader = null;
		try {
			FileReader fileReader = new FileReader(multipartToFile(request.getFile("file")));
			csvReader = new CSVReader(fileReader);
			String[] row = null;
			int count = 0;

			while ((row = csvReader.readNext()) != null) {
				if (count == 0) {
				} else {
					
					try {
						SanctionMaster sanction = new SanctionMaster();
						
						StateCodes sCodes = new StateCodes();
						sCodes.setStateCode(Integer.parseInt(row[0]));
						sanction.setStateCode(sCodes);
						SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
						Date date = sdf.parse(row[1]);
						sanction.setSanctionDate(date);
						sanction.setSanctionedBy(row[2]);
						sanction.setSanctionLetterName(row[3]);
						sanction.setSanctionLetterPath(row[4]);		
						sanction.setSanctionLetterRefNO(row[5]);
						sanction.setTotalSanctionedAmount(Long.parseLong(row[6]));
						sanction.setProposalName(row[7]);
						sanction.setProposalId(Integer.parseInt(row[8]));
						List<SanctionHeadMater> shMaster = new ArrayList<>();
						SanctionHeadMater headMaster = new SanctionHeadMater();
						StateCodes headCodes = new StateCodes();
						headCodes.setStateCode(Integer.parseInt(row[9]));
						headMaster.setStateCode(headCodes);
						SimpleDateFormat headSdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
						Date headDate = headSdf.parse(row[10]);
						headMaster.setSanctionDate(headDate);
						headMaster.setSanctionedBy(row[11]);
						headMaster.setSanctionedAmount(Long.parseLong(row[12]));
						headMaster.setFinancialYear(row[13]);
						headMaster.setExpenseHead(row[14]);
						headMaster.setProposalHeadId(Integer.parseInt(row[15]));
						headMaster.setTotalSanctionAmountPerHead(Integer.parseInt(row[16]));
						shMaster.add(headMaster);
						sanction.setSanctionHeadMaters(shMaster);
						masterService.saveSancstionData(sanction);
					} catch (ParseException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				count++;
			}
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				csvReader.close();
			} catch (IOException e) {
				logger.error("Exception raised at closing csvReader resource " + e);
				e.printStackTrace();
			}
		}

		List<SanctionMaster> sanctionList = masterService.getSancstionData();
		if (!sanctionList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("Sanction Master Details Loaded Successfully");
			response.setObj(sanctionList);
			return response;
		} else {
			logger.info("No Records found for Sanction Master");
			response.setStatus(-1);
			response.setMessage("No Records found for Sanction Master");
			response.setObj(null);
		}

		return response;
	}
	
	
	@RequestMapping(value = "/fund/update/updateSanctionData", method = RequestMethod.POST)
	public @ResponseBody MasterResponse updateSanctionData(@RequestBody SanctionMaster sanctinMaster) {
		MasterResponse response = new MasterResponse();
		SanctionMaster sanctionObj = masterService.saveSancstionData(sanctinMaster);
		if (sanctionObj != null) {
			List<CitySanitationMaster> cityList = masterService.getCitySanitationData();

			if (!cityList.isEmpty()) {

				response.setStatus(200);
				response.setMessage("Sanction Master Details Loaded Successfully");
				response.setObj(cityList);
				return response;
			} else {
				logger.info("No Records found for Sanction Master");
				response.setStatus(-1);
				response.setMessage("No Records found for Sanction Master");
				response.setObj(null);
			}
		} else {
			logger.info("Sanction Master updating failed...");
			response.setStatus(-1);
			response.setMessage("Sanction Master updating failed...");
			response.setObj(null);
		}
		return response;
	}
	
	
	
	
	@RequestMapping(value = "/fund/read/getSancationData", method = RequestMethod.POST)
	public @ResponseBody MasterResponse getSancationData() {
		List<SanctionMaster> sanctionList = masterService.getSancstionData();
		MasterResponse response = new MasterResponse();
		if (!sanctionList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("Sanction Details Loaded Successfully");
			response.setObj(sanctionList);
			return response;
		} else {
			logger.info("No Records found for Sanction Master");
			response.setStatus(-1);
			response.setMessage("No Records found for Sanction Master");
			response.setObj(null);

		}
		return response;
	}
	
	
	@RequestMapping(value = "/fund/create/uploadStateUtilization", method = RequestMethod.POST)
	public @ResponseBody MasterResponse uploadStateUtilization(MultipartHttpServletRequest request) {
		MasterResponse response = new MasterResponse();
		CSVReader csvReader = null;
		try {
			FileReader fileReader = new FileReader(multipartToFile(request.getFile("file")));
			csvReader = new CSVReader(fileReader);
			String[] row = null;
			int count = 0;

			while ((row = csvReader.readNext()) != null) {
				if (count == 0) {
				} else {
					
					try {
						StateUtilizationMaster stateUtilMaster = new StateUtilizationMaster();
						
						StateCodes sCodes = new StateCodes();
						sCodes.setStateCode(Integer.parseInt(row[0]));
						stateUtilMaster.setStateCode(sCodes);
						SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
						Date date = sdf.parse(row[1]);
						stateUtilMaster.setUtilizationCreatedDate(date);
						
						List<StateUtilizationHeadMaster> headMasterList = new ArrayList<>();
						StateUtilizationHeadMaster headMaster = new StateUtilizationHeadMaster();
						StateCodes headCodes = new StateCodes();
						headCodes.setStateCode(Integer.parseInt(row[2]));
						headMaster.setStateCode(headCodes);
						headMaster.setExpenseHead(row[3]);
						SimpleDateFormat headSdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
						Date headDate = headSdf.parse(row[4]);
						headMaster.setUtilizationCreatedDate(headDate);
						headMaster.setFinancialYear(row[5]);
						headMaster.setUtilizationAmount(Long.parseLong(row[6]));
						headMaster.setUtilizationAmountTillDate(Long.parseLong(row[7]));
						headMaster.setUtilizationReferenceNo(row[8]);
						headMaster.setUtilizationCertificateFilePath(row[9]);
						headMaster.setUtilizationCertificateName(row[10]);
						headMaster.setPhotosPath(row[11]);
						headMaster.setPhotosName(row[12]);
						headMaster.setRemarks(row[13]);
						headMaster.setWorkCompleted(Long.parseLong(row[14]));
						headMaster.setConstructedNumbers(Long.parseLong(row[15]));
						headMaster.setCommencedNumbers(Long.parseLong(row[16]));
						headMaster.setNoOfPhotographCommenced(Long.parseLong(row[17]));
						headMaster.setNoOfPhotographCompleted(Long.parseLong(row[18]));
						
					
						headMasterList.add(headMaster);
						stateUtilMaster.setStateUtilizationHeadMasters(headMasterList);
						masterService.saveStateUtilizationData(stateUtilMaster);
					} catch (ParseException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				count++;
			}
		} catch (NumberFormatException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				csvReader.close();
			} catch (IOException e) {
				logger.error("Exception raised at closing csvReader resource " + e);
				e.printStackTrace();
			}
		}

		List<StateUtilizationMaster> stateUtilMasterList = masterService.getStateUtilizationData();
		if (!stateUtilMasterList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("State Utilization Master Details Loaded Successfully");
			response.setObj(stateUtilMasterList);
			return response;
		} else {
			logger.info("No Records found for State Utilization Master");
			response.setStatus(-1);
			response.setMessage("No Records found for State Utilization Master");
			response.setObj(null);
		}

		return response;
	}
	

	@RequestMapping(value = "/fund/read/getStateUtilizationData", method = RequestMethod.POST)
	public @ResponseBody MasterResponse getStateUtilizationData() {
		List<StateUtilizationMaster> stateUtilMasList = masterService.getStateUtilizationData();
		MasterResponse response = new MasterResponse();
		if (!stateUtilMasList.isEmpty()) {
			response.setStatus(200);
			response.setMessage("State Utilization Master Details Loaded Successfully");
			response.setObj(stateUtilMasList);
			return response;
		} else {
			logger.info("No Records found for State Utilization Master");
			response.setStatus(-1);
			response.setMessage("No Records found for State Utilization Master");
			response.setObj(null);

		}
		return response;
	}
	
}
