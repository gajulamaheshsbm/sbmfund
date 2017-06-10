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
@Table(name = "state_iec")
public class StateIEC {


	@Id
	@Column(name = "iec_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int iecId;
	
	@OneToOne
	private StateCodes StateCode;
	
	@Column(name = "financial_year")
	private String financialYear;
	
	@Column(name = "heads")
	private String expenseHead;
	
	@Column(name = "description")
	private String description;
	
	@Column(name="total_project_cost")
	private long totalProjectCost;
	
	@Column(name="central_assistance_sought")
	private long centralAssistanceSought;
	
	@Column(name="state_contribution")
	private long stateContribution;
	
	@Column(name="others")
	private long others;
	
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
	
	@Column(name = "created_by")
	private String created_by;
	
	@Column(name = "created_at")
	private Date createdAt;
	
	@Column(name = "update_at")
	private Date updatedAt;
	
	@Column(name = "updated_by")
	private String updateBy;

	public int getIecId() {
		return iecId;
	}

	public void setIecId(int iecId) {
		this.iecId = iecId;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getTotalProjectCost() {
		return totalProjectCost;
	}

	public void setTotalProjectCost(long totalProjectCost) {
		this.totalProjectCost = totalProjectCost;
	}

	public long getCentralAssistanceSought() {
		return centralAssistanceSought;
	}

	public void setCentralAssistanceSought(long centralAssistanceSought) {
		this.centralAssistanceSought = centralAssistanceSought;
	}

	public long getStateContribution() {
		return stateContribution;
	}

	public void setStateContribution(long stateContribution) {
		this.stateContribution = stateContribution;
	}

	public long getOthers() {
		return others;
	}

	public void setOthers(long others) {
		this.others = others;
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

}
