package com.devappsol.sbm.sbmfundrequisition.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.TypedQuery;

import org.apache.log4j.Logger;
import org.springframework.transaction.annotation.Transactional;

import com.devappsol.sbm.sbmfundrequisition.interfaces.dao.ISBMFundRequisitionDao;
import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationFinancialYear;
import com.devappsol.sbm.sbmfundrequisition.model.ProposalMaster;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionHeadMater;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateFinancialTarget;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationHeadMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationMaster;

public class SBMFundRequisitionDao implements ISBMFundRequisitionDao {
	
	@PersistenceContext(type = PersistenceContextType.TRANSACTION, unitName = "ra_db_web_PU")
	EntityManager webentityManager;
	
	private static final Logger logger = Logger.getLogger(SBMFundRequisitionDao.class);
	public List<ProposalMaster> getProposalByState(int stateCode){
		try{
			TypedQuery<ProposalMaster> query = webentityManager.createQuery("From ProposalMaster pm where pm.StateCode.stateCode = :stateCode",ProposalMaster.class);
			query.setParameter("stateCode", stateCode);
			return query.getResultList();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch Proposal Master"+e);
			return null;
		}
		
	}
	public String getStateNameByStateCode(int stateCode){
		try{
			TypedQuery<String> query = webentityManager.createQuery("Select pm.stateName From StateCodes pm where pm.stateCode = :stateCode   ",String.class);
			query.setParameter("stateCode", stateCode);
			return query.getSingleResult();
		}catch(Exception e){
			e.printStackTrace(); 
			logger.warn("Unable to fetch Proposal Master"+e);
			return null;
		}
	}
	public List<ProposalMaster> getAllProposals(){
		try{
			TypedQuery<ProposalMaster> query = webentityManager.createQuery("From ProposalMaster pm where pm.status = 'SHPC-Approved' or pm.status = 'Center-Approved' or  pm.status = 'Returned-by-Centre'   ",ProposalMaster.class);
			return query.getResultList();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch Proposal Master"+e);
			return null;
		}
	}
	
	public ProposalMaster getProposalById(String proposalId){
		try{
			TypedQuery<ProposalMaster> query = webentityManager.createQuery("From ProposalMaster pm where pm.Id=:proposalId",ProposalMaster.class);
			query.setParameter("proposalId", proposalId);
			return query.getSingleResult();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch Proposal Master"+e);
			return null;
		}
	}
	
	@Transactional
	public synchronized ProposalMaster saveProposalByState(ProposalMaster proposalMaster){
		try{
			
			ProposalMaster proposalMaster2=webentityManager.merge(proposalMaster);
		return proposalMaster2;
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to Save Proposal State "+e);
			return null;
		}
	
	}
	@Transactional
	public synchronized void saveSanctionByState(SanctionMaster metadata){
		try{
			webentityManager.merge(metadata);
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to Save Proposal State "+e);
		}
	}
	public StateUtilizationMaster getUtilisationByState(int stateCode){
		try{
			TypedQuery<StateUtilizationMaster> query = webentityManager.createQuery("From StateUtilizationMaster sm where sm.StateCode.stateCode = :stateCode Order by sm.utilizationCreatedDate DESC",StateUtilizationMaster.class);
			query.setParameter("stateCode", stateCode);
			//query.setParameter("expenseHead", expenseHead);
			query.setMaxResults(1);
			return query.getSingleResult();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch the State Utilization"+ e);
			return null;
		}
		
	}
	public SanctionMaster getSanctionDetailsByState(int stateCode){
		try{
			TypedQuery<SanctionMaster> query = webentityManager.createQuery("From SanctionMaster sm where sm.StateCode.stateCode = :stateCode Order by sm.SanctionDate desc limit 1",SanctionMaster.class);
			query.setParameter("stateCode", stateCode);
			query.setMaxResults(1);
			return query.getSingleResult();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch the State Utilization"+ e);
			return null;
		}
	}
	public List<CitySanitationFinancialYear> getTotalPhysicalTargetByState(int stateCode){
		try{
			TypedQuery<CitySanitationFinancialYear> query = webentityManager.createQuery("From CitySanitationFinancialYear sm where sm.StateCode.stateCode = :stateCode",CitySanitationFinancialYear.class);
			query.setParameter("stateCode", stateCode);
			return query.getResultList();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch the State Utilization"+ e);
			return null;
		}
	}

	public StateFinancialTarget getTotalFinancialTargetByState(int stateCode){
		try{
			TypedQuery<StateFinancialTarget> query = webentityManager.createQuery("From StateFinancialTarget sm where sm.StateCode.stateCode = :stateCode Order by sm.financialYear Desc",StateFinancialTarget.class);
			query.setParameter("stateCode", stateCode);
			query.setMaxResults(1);
			return query.getSingleResult();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch the State Utilization"+ e);
			return null;
		}
	}
	
	public List<SanctionHeadMater> getSWMSanctionDetails(int stateCode, String fromDate, String toDate){
		try{
			TypedQuery<SanctionHeadMater> query = webentityManager.createQuery("From SanctionHeadMater sm where sm.StateCode.stateCode = :stateCode and sm.expenseHead = 'SWM' and sm.SanctionDate BETWEEN '"+fromDate+"' AND '"+toDate+"' Order by sm.financialYear Desc",SanctionHeadMater.class);
			query.setParameter("stateCode", stateCode);
			//query.setMaxResults(1);
			return query.getResultList();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch the State Utilization"+ e);
			return null;
		}
	}
	public List<StateUtilizationHeadMaster> getSWMUtilizationDetails(int stateCode, String fromDate, String toDate){
		try{
			TypedQuery<StateUtilizationHeadMaster> query = webentityManager.createQuery("From StateUtilizationHeadMaster sm where sm.StateCode.stateCode = :stateCode and sm.expenseHead = 'SWM' and sm.utilizationCreatedDate BETWEEN '"+fromDate+"' AND '"+toDate+"' Order by sm.financialYear Desc",StateUtilizationHeadMaster.class);
			query.setParameter("stateCode", stateCode);
			//query.setMaxResults(1);
			return query.getResultList();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch the State Utilization"+ e);
			return null;
		}
	}
	public List<String> getIhhlInstalment1Details(int stateCode){
		try{
			TypedQuery<String> query = webentityManager.createQuery("Select pm.Id From ProposalMaster pm JOIN pm.stateIHHL si where si.installment1Flag = 0 and si.StateCode.stateCode = :stateCode",String.class);
			query.setParameter("stateCode", stateCode);
			//query.setMaxResults(1);
			return query.getResultList();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch the State Ihhl installment1 "+ e);
			return null;
		}
	}
	public List<String> getSWMInstalment1Details(int stateCode){
		try{
			TypedQuery<String> query = webentityManager.createQuery("Select pm.Id From ProposalMaster pm JOIN pm.stateSWM si where si.installment1Flag = 0 and si.StateCode.stateCode = :stateCode",String.class);
			query.setParameter("stateCode", stateCode);
			//query.setMaxResults(1);
			return query.getResultList();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch the State Ihhl installment1 "+ e);
			return null;
		}
	}
	
	@Transactional
	public StateUtilizationHeadMaster saveUtilization(StateUtilizationHeadMaster utilizationMaster){
		try{
			StateUtilizationHeadMaster stateUtilizationHeadMaster =	webentityManager.merge(utilizationMaster);
			return stateUtilizationHeadMaster;
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to Save Proposal State "+e);
			return null;
		}
	}
	
	public Long getUtilizationTillDate(String expenseHead , int stateCode){
		try{
			TypedQuery<Long> query = webentityManager.createQuery("Select suh.utilizationAmountTillDate From StateUtilizationHeadMaster suh  where suh.expenseHead = :expenseHead and suh.StateCode.stateCode = :stateCode Order by suh.utilizationCreatedDate DESC ",Long.class);
			query.setParameter("stateCode", stateCode);
			query.setParameter("expenseHead", expenseHead);
			query.setMaxResults(1);
			return query.getSingleResult();
		}catch(Exception e){
			e.printStackTrace();
			logger.warn("Unable to fetch the State Ihhl installment1 "+ e);
			return null;
		}
	}
}
