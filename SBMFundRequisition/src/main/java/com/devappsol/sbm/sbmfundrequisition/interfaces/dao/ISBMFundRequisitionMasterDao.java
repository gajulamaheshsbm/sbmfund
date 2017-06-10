package com.devappsol.sbm.sbmfundrequisition.interfaces.dao;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationFinancialYear;
import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationMaster;
import com.devappsol.sbm.sbmfundrequisition.model.IHHLCenterShare;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateCodes;
import com.devappsol.sbm.sbmfundrequisition.model.StateFinancialTarget;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationMaster;
import com.devappsol.sbm.sbmfundrequisition.model.ULBCodes;

public interface ISBMFundRequisitionMasterDao {

	public CitySanitationMaster saveCitySanitationData(CitySanitationMaster city);
	
	public List<CitySanitationMaster> getCitySanitationData();
	
	public CitySanitationFinancialYear saveCitySanitationFinancialData(CitySanitationFinancialYear city);
	
	public List<CitySanitationFinancialYear> getCitySanitationFinancialData();
	
	public StateFinancialTarget saveStateFinancialTargetData(StateFinancialTarget state);
	
	public List<StateFinancialTarget> getStateFinancialTargetData();
	
	public List<StateCodes> getStateDropDown();
	
	public List<ULBCodes> getCityDropDown(int stateName);
	
	public IHHLCenterShare saveIhhlShareAmount(IHHLCenterShare shareAmount);
	
	public List<IHHLCenterShare> getIhhlShareAmountData();
	
	public SanctionMaster saveSancstionData(SanctionMaster sanctionMaster);
	
	public List<SanctionMaster> getSancstionData();
	
	public StateUtilizationMaster saveStateUtilizationData(StateUtilizationMaster stateUtilization);
	
	public List<StateUtilizationMaster> getStateUtilizationData();
}
