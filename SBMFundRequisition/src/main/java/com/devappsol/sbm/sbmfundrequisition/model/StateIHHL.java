package com.devappsol.sbm.sbmfundrequisition.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.envers.Audited;

@Entity
@Audited
@Table(name = "state_ihhl")
public class StateIHHL {

	@Id
	@Column(name = "ihhl_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ihhlId;
	
	@OneToOne
	private StateCodes StateCode;
	
	@Column(name = "financial_year")
	private String financialYear;
	
	
	@Column(name = "heads")
	private String expenseHead;
	
	@Column(name = "physical_proposal_target")
	private long physicalProposalTarget;
	
	@Column(name = "total_proposal_amount")
	private long totalProposalAmount;
	
	@Column(name = "request_fund_amount")
	private long requestFundAmount;
	
	@Column(name = "remarks")
	private String remarks;
	
	@Column(name = "detailed_action_plan_name")
	private String detailedActionPlanName;
	
	@Column(name = "detailed_action_plan_path")
	private String detailedActionPlanPath;
	
	@Column(name = "detailed_action_plan_refNo")
	private String detailedActionPlanRefNo;
	
	@Column(name = "uc_certificate_name")
	private String ucCertificateName;
	
	@Column(name = "uc_certificate_path")
	private String ucCertificatePath;
	
	@Column(name = "uc_certificate_refNo")
	private String ucCertificateRefNO;
	
	@Column(name = "progress_photo_name")
	private String progressPhotoName;
	
	@Column(name = "progress_photo_path")
	private String progressPhotoPath;
	
	@Column(name = "financial_progress_ihhl_constructed_name")
	private String financialProgressIhhlContructedName;
	
	@Column(name = "financial_progress_ihhl_constructed_path")
	private String financialProgressIhhlContructedPath;
	
	@Column(name = "created_by")
	private String created_by;
	
	@Column(name = "created_at")
	private Date createdAt;
	
	@Column(name = "update_at")
	private Date updatedAt;
	
	@Column(name = "updated_by")
	private String updateBy;
	
	@Column(name = "installment1_refNo")
	private int installment1RefNo;
	
	@Column(name = "installment1_flag")
	private int installment1Flag;

	public int getIhhlId() {
		return ihhlId;
	}

	public void setIhhlId(int ihhlId) {
		this.ihhlId = ihhlId;
	}

	public StateCodes getStateCode() {
		return StateCode;
	}

	public void setStateCode(StateCodes stateCode) {
		StateCode = stateCode;
	}

	public String getFinancialYear() {
		return financialYear;
	}

	public void setFinancialYear(String financialYear) {
		this.financialYear = financialYear;
	}

	public String getExpenseHead() {
		return expenseHead;
	}

	public void setExpenseHead(String expenseHead) {
		this.expenseHead = expenseHead;
	}

	public long getPhysicalProposalTarget() {
		return physicalProposalTarget;
	}

	public void setPhysicalProposalTarget(long physicalProposalTarget) {
		this.physicalProposalTarget = physicalProposalTarget;
	}

	public long getTotalProposalAmount() {
		return totalProposalAmount;
	}

	public void setTotalProposalAmount(long totalProposalAmount) {
		this.totalProposalAmount = totalProposalAmount;
	}

	public long getRequestFundAmount() {
		return requestFundAmount;
	}

	public void setRequestFundAmount(long requestFundAmount) {
		this.requestFundAmount = requestFundAmount;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getDetailedActionPlanName() {
		return detailedActionPlanName;
	}

	public void setDetailedActionPlanName(String detailedActionPlanName) {
		this.detailedActionPlanName = detailedActionPlanName;
	}

	public String getDetailedActionPlanPath() {
		return detailedActionPlanPath;
	}

	public void setDetailedActionPlanPath(String detailedActionPlanPath) {
		this.detailedActionPlanPath = detailedActionPlanPath;
	}

	public String getDetailedActionPlanRefNo() {
		return detailedActionPlanRefNo;
	}

	public void setDetailedActionPlanRefNo(String detailedActionPlanRefNo) {
		this.detailedActionPlanRefNo = detailedActionPlanRefNo;
	}

	public String getUcCertificateName() {
		return ucCertificateName;
	}

	public void setUcCertificateName(String ucCertificateName) {
		this.ucCertificateName = ucCertificateName;
	}

	public String getUcCertificatePath() {
		return ucCertificatePath;
	}

	public void setUcCertificatePath(String ucCertificatePath) {
		this.ucCertificatePath = ucCertificatePath;
	}

	public String getUcCertificateRefNO() {
		return ucCertificateRefNO;
	}

	public void setUcCertificateRefNO(String ucCertificateRefNO) {
		this.ucCertificateRefNO = ucCertificateRefNO;
	}

	public String getProgressPhotoName() {
		return progressPhotoName;
	}

	public void setProgressPhotoName(String progressPhotoName) {
		this.progressPhotoName = progressPhotoName;
	}

	public String getProgressPhotoPath() {
		return progressPhotoPath;
	}

	public void setProgressPhotoPath(String progressPhotoPath) {
		this.progressPhotoPath = progressPhotoPath;
	}

	public String getFinancialProgressIhhlContructedName() {
		return financialProgressIhhlContructedName;
	}

	public void setFinancialProgressIhhlContructedName(String financialProgressIhhlContructedName) {
		this.financialProgressIhhlContructedName = financialProgressIhhlContructedName;
	}

	public String getFinancialProgressIhhlContructedPath() {
		return financialProgressIhhlContructedPath;
	}

	public void setFinancialProgressIhhlContructedPath(String financialProgressIhhlContructedPath) {
		this.financialProgressIhhlContructedPath = financialProgressIhhlContructedPath;
	}

	public String getCreated_by() {
		return created_by;
	}

	public void setCreated_by(String created_by) {
		this.created_by = created_by;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public String getUpdateBy() {
		return updateBy;
	}

	public void setUpdateBy(String updateBy) {
		this.updateBy = updateBy;
	}

	public int getInstallment1RefNo() {
		return installment1RefNo;
	}

	public void setInstallment1RefNo(int installment1RefNo) {
		this.installment1RefNo = installment1RefNo;
	}

	public int getInstallment1Flag() {
		return installment1Flag;
	}

	public void setInstallment1Flag(int installment1Flag) {
		this.installment1Flag = installment1Flag;
	}
}
