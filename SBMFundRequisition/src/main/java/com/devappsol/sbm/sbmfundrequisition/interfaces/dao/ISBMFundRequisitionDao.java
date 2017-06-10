package com.devappsol.sbm.sbmfundrequisition.interfaces.dao;

import java.util.List;

import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationFinancialYear;
import com.devappsol.sbm.sbmfundrequisition.model.ProposalMaster;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionHeadMater;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateFinancialTarget;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationHeadMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationMaster;

public interface ISBMFundRequisitionDao {

	public List<ProposalMaster> getProposalByState(int stateCode);

	public ProposalMaster saveProposalByState(ProposalMaster proposalMaster);

	public StateUtilizationMaster getUtilisationByState(int stateCode);

	public SanctionMaster getSanctionDetailsByState(int stateCode);

	public void saveSanctionByState(SanctionMaster metadata);

	public ProposalMaster getProposalById(String proposalId);

	public List<ProposalMaster> getAllProposals();

	public List<CitySanitationFinancialYear> getTotalPhysicalTargetByState(int parseInt);

	public StateFinancialTarget getTotalFinancialTargetByState(int parseInt);

	public List<SanctionHeadMater> getSWMSanctionDetails(int stateCode, String fromDate, String toDate);

	public List<StateUtilizationHeadMaster> getSWMUtilizationDetails(int stateCode, String fromDate, String toDate);

	public String getStateNameByStateCode(int stateCode);

	public List<String> getIhhlInstalment1Details(int stateCode);

	public List<String> getSWMInstalment1Details(int stateCode);

	public StateUtilizationHeadMaster saveUtilization(StateUtilizationHeadMaster utilizationMaster);

	public Long getUtilizationTillDate(String expenseHead, int stateCode);

}
