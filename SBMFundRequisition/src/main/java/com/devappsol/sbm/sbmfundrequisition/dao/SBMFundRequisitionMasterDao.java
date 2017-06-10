package com.devappsol.sbm.sbmfundrequisition.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.devappsol.sbm.sbmfundrequisition.interfaces.dao.ISBMFundRequisitionMasterDao;
import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationFinancialYear;
import com.devappsol.sbm.sbmfundrequisition.model.CitySanitationMaster;
import com.devappsol.sbm.sbmfundrequisition.model.IHHLCenterShare;
import com.devappsol.sbm.sbmfundrequisition.model.SanctionMaster;
import com.devappsol.sbm.sbmfundrequisition.model.StateCodes;
import com.devappsol.sbm.sbmfundrequisition.model.StateFinancialTarget;
import com.devappsol.sbm.sbmfundrequisition.model.StateUtilizationMaster;
import com.devappsol.sbm.sbmfundrequisition.model.ULBCodes;

public class SBMFundRequisitionMasterDao implements ISBMFundRequisitionMasterDao{
	
	@PersistenceContext(type = PersistenceContextType.TRANSACTION, unitName = "ra_db_web_PU")
	EntityManager webentityManager;
	
	private static final Logger logger = Logger.getLogger(SBMFundRequisitionMasterDao.class);

	@Override
	@Transactional
	public CitySanitationMaster saveCitySanitationData(CitySanitationMaster city) {
		CitySanitationMaster cityObj =null;
		try{
			 cityObj = webentityManager.merge(city);
			
		}catch (Exception e) {
			logger.error("Unable to save/update CitySanitationData "+e);
		}
		return cityObj;
	}



	@Override
	public List<CitySanitationMaster> getCitySanitationData() {
		
		Query query = webentityManager.createQuery("from CitySanitationMaster");
		return query.getResultList();
	}



	@Override
	@Transactional
	public CitySanitationFinancialYear saveCitySanitationFinancialData(CitySanitationFinancialYear city) {
		CitySanitationFinancialYear cityObj =null;
		try{
			 cityObj = webentityManager.merge(city);
			 logger.error("Saved/Updated CitySanitationFinancialYear Data Successfully....");
		}catch (Exception e) {
			logger.error("Unable to save/update CitySanitationFinancialYear "+e);
		}
		return cityObj;
	}



	@Override
	public List<CitySanitationFinancialYear> getCitySanitationFinancialData() {
		Query query = webentityManager.createQuery("from CitySanitationFinancialYear");
		return query.getResultList();
	}



	@Override
	@Transactional
	public StateFinancialTarget saveStateFinancialTargetData(StateFinancialTarget state) {
		StateFinancialTarget cityObj =null;
		try{
			 cityObj = webentityManager.merge(state);
			
		}catch (Exception e) {
			logger.error("Unable to save/update StateFinancialTarget "+e);
		}
		return cityObj;
	}



	@Override
	public List<StateFinancialTarget> getStateFinancialTargetData() {
		Query query = webentityManager.createQuery("from StateFinancialTarget");
		return query.getResultList();
	}
	
	public List<StateCodes> getStateDropDown(){
		TypedQuery<StateCodes> query= webentityManager.createQuery(" From StateCodes um ORDER BY um.stateName ",StateCodes.class);
		return query.getResultList();
	}

	public List<ULBCodes> getCityDropDown(int stateName){
		TypedQuery<ULBCodes> query = webentityManager.createQuery("From ULBCodes uc WHERE uc.stateCodes.stateCode=:stateName ORDER BY uc.ulbName",ULBCodes.class);
		query.setParameter("stateName", stateName);
		return query.getResultList();
	}



	@Override
	@Transactional
	public IHHLCenterShare saveIhhlShareAmount(IHHLCenterShare shareAmount) {
		IHHLCenterShare shareAmt = null;
		try{
			shareAmt = webentityManager.merge(shareAmount);
			
		}catch (Exception e) {
			logger.error("Unable to save/update IHHL-Center Share Amount "+e);
		}
		return shareAmt;
	}


	@Override
	public List<IHHLCenterShare> getIhhlShareAmountData() {
		Query query = webentityManager.createQuery("from IHHLCenterShare");
		return query.getResultList();
	}



	@Override
	@Transactional
	public SanctionMaster saveSancstionData(SanctionMaster sanctionMaster) {
		SanctionMaster sanction = null;
		try{
			sanction = webentityManager.merge(sanctionMaster);
			
		}catch (Exception e) {
			logger.error("Unable to save/update IHHL-Center Share Amount "+e);
		}
		return sanction;
	}



	@Override
	public List<SanctionMaster> getSancstionData() {
		Query query = webentityManager.createQuery("from SanctionMaster");
		return query.getResultList();
	}



	@Override
	@Transactional
	public StateUtilizationMaster saveStateUtilizationData(StateUtilizationMaster stateUtilization) {
		StateUtilizationMaster stateUtilMaster = null;
		try{
			stateUtilMaster = webentityManager.merge(stateUtilization);
			
		}catch (Exception e) {
			logger.error("Unable to save/update StateUtilizationMaster "+e);
		}
		return stateUtilMaster;
	}



	@Override
	public List<StateUtilizationMaster> getStateUtilizationData() {
		Query query = webentityManager.createQuery("from StateUtilizationMaster");
		return query.getResultList();
	}
	
	

}
