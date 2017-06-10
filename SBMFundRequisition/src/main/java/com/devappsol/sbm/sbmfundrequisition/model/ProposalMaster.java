package com.devappsol.sbm.sbmfundrequisition.model;

import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.envers.Audited;

@Entity
@Audited
@Table(name = "proposal_master")
public class ProposalMaster {

	@Id
	@Column(name = "id")
	private String Id;
	
	@OneToOne
	private StateCodes StateCode;
	
	/*@Column(name = "proposal_name")
	private String proposalName;*/
	
	@Column(name = "financial_year")
	private String financialYear;
	
	@Column(name = "created_by")
	private String createdBy;
	
	@Column(name = "created_at")
	private Date createdAt;
	
	@Column(name = "update_at")
	private Date updatedAt;
	
	@Column(name = "updated_by")
	private String updateBy;

	@Column(name = "status")
	private String status;
	
	@Column(name = "total_amount")
	private long totalAmount;
	
	@Column(name = "approver_remarks")
	private String approverRemarks;
	
	@Column(name = "approved_amount")
	private String approvedAmount;
	
	@Column(name = "shpc_approval_name")
	private String shpcApprovalName;
	
	@Column(name = "shpc_approval_path")
	private String shpcApprovalPath;
	
	@Column(name = "shpc_approval_refNo")
	private String shpcApprovalRefNO;
	
	/*@OneToMany(fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	private List<ProposalHeadMaster> proposalHeadMaster;*/
	
	@OneToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	private Set<StateIHHL> stateIHHL;
	
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	private StateCTPT stateCTPT;
	
	@OneToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	private Set<StateSWM> stateSWM;
	
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	private StateIEC stateIEC;
	
	@OneToOne(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
	private StateCBAOE stateCBAOE;
	

	public String getId() {
		return Id;
	}

	public void setId(String id) {
		Id = id;
	}

	public StateCodes getStateCode() {
		return StateCode;
	}

	public void setStateCode(StateCodes stateCode) {
		StateCode = stateCode;
	}

	/*public String getProposalName() {
		return proposalName;
	}

	public void setProposalName(String proposalName) {
		this.proposalName = proposalName;
	}*/

	public String getFinancialYear() {
		return financialYear;
	}

	public void setFinancialYear(String financialYear) {
		this.financialYear = financialYear;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public long getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(long totalAmount) {
		this.totalAmount = totalAmount;
	}

	public String getApproverRemarks() {
		return approverRemarks;
	}

	public void setApproverRemarks(String approverRemarks) {
		this.approverRemarks = approverRemarks;
	}

	public String getApprovedAmount() {
		return approvedAmount;
	}

	public void setApprovedAmount(String approvedAmount) {
		this.approvedAmount = approvedAmount;
	}

	public String getShpcApprovalName() {
		return shpcApprovalName;
	}

	public void setShpcApprovalName(String shpcApprovalName) {
		this.shpcApprovalName = shpcApprovalName;
	}

	public String getShpcApprovalPath() {
		return shpcApprovalPath;
	}

	public void setShpcApprovalPath(String shpcApprovalPath) {
		this.shpcApprovalPath = shpcApprovalPath;
	}

	public String getShpcApprovalRefNO() {
		return shpcApprovalRefNO;
	}

	public void setShpcApprovalRefNO(String shpcApprovalRefNO) {
		this.shpcApprovalRefNO = shpcApprovalRefNO;
	}

	public Set<StateIHHL> getStateIHHL() {
		return stateIHHL;
	}

	public void setStateIHHL(Set<StateIHHL> stateIHHL) {
		this.stateIHHL = stateIHHL;
	}

	public StateCTPT getStateCTPT() {
		return stateCTPT;
	}

	public void setStateCTPT(StateCTPT stateCTPT) {
		this.stateCTPT = stateCTPT;
	}

	public Set<StateSWM> getStateSWM() {
		return stateSWM;
	}

	public void setStateSWM(Set<StateSWM> stateSWM) {
		this.stateSWM = stateSWM;
	}

	public StateIEC getStateIEC() {
		return stateIEC;
	}

	public void setStateIEC(StateIEC stateIEC) {
		this.stateIEC = stateIEC;
	}

	public StateCBAOE getStateCBAOE() {
		return stateCBAOE;
	}

	public void setStateCBAOE(StateCBAOE stateCBAOE) {
		this.stateCBAOE = stateCBAOE;
	}

	
}
