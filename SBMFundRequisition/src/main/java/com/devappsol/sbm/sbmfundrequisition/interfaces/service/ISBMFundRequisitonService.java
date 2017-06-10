package com.devappsol.sbm.sbmfundrequisition.interfaces.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.devappsol.sbm.sbmfundrequisition.model.ProposalMaster;
import com.devappsol.sbm.sbmfundrequisition.model.Response;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionHeadMater;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationHeadMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationMaster;

public interface ISBMFundRequisitonService {

	public List<ProposalMaster> getProposalByState(int stateCode);

	public ProposalMaster saveProposalByState(ProposalMaster proposalMaster);

	public String dumpUploadedFile(MultipartFile multipartFile);

	public StateUtilizationMaster getUtilisationByState(int stateCode);

	public SanctionMaster getSanctionDetailsByState(int stateCode);

	public List<ProposalMaster> saveSanctionByState(SanctionMaster metadata);

	public ProposalMaster getProposalById(String proposalId);

	public List<ProposalMaster> getAllProposals();

	public Response getTotalTargetByState(int parseInt);

	public Response getSWMValidDetailsByState(int parseInt);

	public String getStateNameByStateCode(int stateCode);

	public String generateAutoProposalId(ProposalMaster proposalMaster);

	public Response getIhhlInstalment1Details(int stateCode);

	public Response getSWMInstalment1Details(int parseInt);

	public StateUtilizationHeadMaster saveUtilization(StateUtilizationHeadMaster utilizationMaster);

	public Long getUtilizationTillDate(String expenseHead, int stateCode);

}
