package com.devappsol.sbm.sbmfundrequisition.service;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.devappsol.sbm.sbmfundrequisition.interfaces.dao.ISBMFundRequisitionMasterDao;
import com.devappsol.sbm.sbmfundrequisition.interfaces.service.ISBMFundRequisitionMasterService;
import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationFinancialYear;
import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationMaster;
import com.devappsol.sbm.sbmfundrequisition.model.IHHLCenterShare;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateCodes;
import com.devappsol.sbm.sbmfundrequisition.model.StateFinancialTarget;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationMaster;
import com.devappsol.sbm.sbmfundrequisition.model.ULBCodes;

public class SBMFundRequisitionMasterService implements ISBMFundRequisitionMasterService{

	private static final Logger logger = Logger.getLogger(SBMFundRequisitionMasterService.class);
	@Autowired
	ISBMFundRequisitionMasterDao masterDao;
	
	@Override
	public CitySanitationMaster saveCitySanitationData(CitySanitationMaster city) {
		return masterDao.saveCitySanitationData(city);
	}

	
	@Override
	public List<CitySanitationMaster> getCitySanitationData() {
		
		List<CitySanitationMaster> masterList =  masterDao.getCitySanitationData();
		if(masterList.isEmpty()){
			logger.info("No City Sanitation Data Found...");
		}else{
			return masterList;
		}
		return masterList;
	}


	@Override
	public CitySanitationFinancialYear saveCitySanitationFinancialData(CitySanitationFinancialYear city) {
		return masterDao.saveCitySanitationFinancialData(city);
	}




	@Override
	public List<CitySanitationFinancialYear> getCitySanitationFinancialData() {
		List<CitySanitationFinancialYear> masterList =  masterDao.getCitySanitationFinancialData();
		if(masterList.isEmpty()){
			logger.info("No City Sanitation Data Found...");
		}else{
			return masterList;
		}
		return masterList;
	}


	@Override
	public StateFinancialTarget saveStateFinancialTargetData(StateFinancialTarget state) {
		return masterDao.saveStateFinancialTargetData(state);
	}



	@Override
	public List<StateFinancialTarget> getStateFinancialTargetData() {
		List<StateFinancialTarget> masterList =  masterDao.getStateFinancialTargetData();
		if(masterList.isEmpty()){
			logger.info("No Financial Target Data Found...");
		}else{
			return masterList;
		}
		return masterList;
	}

	@Override
	public List<StateCodes> getStateDropDown() {
		List<StateCodes> stateList = masterDao.getStateDropDown();
		if(stateList.isEmpty()){
			logger.info("No State Names Found...");
		}else{
			return stateList;
		}
		return stateList;
	}

	@Override
	public List<ULBCodes> getCityDropDown(int stateName) {
		List<ULBCodes>  ulbCodeList = masterDao.getCityDropDown(stateName);
		if(ulbCodeList.isEmpty()){
			logger.info("No City Names Found For State: "+stateName);
		}else{
			return ulbCodeList;
		}
		return ulbCodeList;
	}

	@Override
	public IHHLCenterShare saveIhhlShareAmount(IHHLCenterShare shareAmount) {
		return masterDao.saveIhhlShareAmount(shareAmount);
	}


	@Override
	public List<IHHLCenterShare> getIhhlShareAmountData() {
		List<IHHLCenterShare>  ihhList = masterDao.getIhhlShareAmountData();
		if(ihhList.isEmpty()){
			logger.info("No IHHL-Center Share Amount Details Found ");
		}else{
			return ihhList;
		}
		return ihhList;
	}


	@Override
	public SanctionMaster saveSancstionData(SanctionMaster sanctionMaster) {
		return masterDao.saveSancstionData(sanctionMaster);
	}


	@Override
	public List<SanctionMaster> getSancstionData() {
		List<SanctionMaster>  sanctionList = masterDao.getSancstionData();
		if(sanctionList.isEmpty()){
			logger.info("No Sanction Details Found ");
		}else{
			return sanctionList;
		}
		return sanctionList;
	}


	@Override
	public StateUtilizationMaster saveStateUtilizationData(StateUtilizationMaster stateUtilization) {
		return masterDao.saveStateUtilizationData(stateUtilization);
	}


	@Override
	public List<StateUtilizationMaster> getStateUtilizationData() {
		List<StateUtilizationMaster>  stateUtilList = masterDao.getStateUtilizationData();
		if(stateUtilList.isEmpty()){
			logger.info("No State Utilization Master Details Found ");
		}else{
			return stateUtilList;
		}
		return stateUtilList;
	}

}
