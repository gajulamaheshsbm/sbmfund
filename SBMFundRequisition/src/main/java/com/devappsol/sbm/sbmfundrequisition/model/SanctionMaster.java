package com.devappsol.sbm.sbmfundrequisition.model;

import java.util.Date;
import java.util.List;

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

@Entity
@Table(name = "sanction_master")
public class SanctionMaster {

	@Id
	@Column(name = "san_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int sanId;
	
	@OneToOne
	private StateCodes StateCode;
	
	@Column(name = "sanction_date")
	private Date SanctionDate;
	
	@Column(name = "sanctioned_by")
	private String sanctionedBy;
	
	@Column(name = "sanction_letter_name")
	private String sanctionLetterName;
	
	@Column(name = "sanction_letter_path")
	private String sanctionLetterPath;
	
	@Column(name = "sanction_letter_refNo")
	private String sanctionLetterRefNO;
	
	@Column(name = "total_sanctioned_amount")
	private long totalSanctionedAmount;
	
	@Column(name = "proposal_name")
	private String proposalName;
	
	@Column(name = "proposal_id")
	private int proposalId;
	
	@OneToMany(fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	private List<SanctionHeadMater> sanctionHeadMaters;

	public int getSanId() {
		return sanId;
	}

	public void setSanId(int sanId) {
		this.sanId = sanId;
	}

	public StateCodes getStateCode() {
		return StateCode;
	}

	public void setStateCode(StateCodes stateCode) {
		StateCode = stateCode;
	}

	public Date getSanctionDate() {
		return SanctionDate;
	}

	public void setSanctionDate(Date sanctionDate) {
		SanctionDate = sanctionDate;
	}

	public String getSanctionedBy() {
		return sanctionedBy;
	}

	public void setSanctionedBy(String sanctionedBy) {
		this.sanctionedBy = sanctionedBy;
	}

	public String getSanctionLetterName() {
		return sanctionLetterName;
	}

	public void setSanctionLetterName(String sanctionLetterName) {
		this.sanctionLetterName = sanctionLetterName;
	}

	public String getSanctionLetterPath() {
		return sanctionLetterPath;
	}

	public void setSanctionLetterPath(String sanctionLetterPath) {
		this.sanctionLetterPath = sanctionLetterPath;
	}

	public String getSanctionLetterRefNO() {
		return sanctionLetterRefNO;
	}

	public void setSanctionLetterRefNO(String sanctionLetterRefNO) {
		this.sanctionLetterRefNO = sanctionLetterRefNO;
	}

	public long getTotalSanctionedAmount() {
		return totalSanctionedAmount;
	}

	public void setTotalSanctionedAmount(long totalSanctionedAmount) {
		this.totalSanctionedAmount = totalSanctionedAmount;
	}

	public String getProposalName() {
		return proposalName;
	}

	public void setProposalName(String proposalName) {
		this.proposalName = proposalName;
	}

	public int getProposalId() {
		return proposalId;
	}

	public void setProposalId(int proposalId) {
		this.proposalId = proposalId;
	}

	public List<SanctionHeadMater> getSanctionHeadMaters() {
		return sanctionHeadMaters;
	}

	public void setSanctionHeadMaters(List<SanctionHeadMater> sanctionHeadMaters) {
		this.sanctionHeadMaters = sanctionHeadMaters;
	}

	@Override
	public String toString() {
		return "SanctionMaster [sanId=" + sanId + ", StateCode=" + StateCode + ", SanctionDate=" + SanctionDate
				+ ", sanctionedBy=" + sanctionedBy + ", sanctionLetterName=" + sanctionLetterName
				+ ", sanctionLetterPath=" + sanctionLetterPath + ", sanctionLetterRefNO=" + sanctionLetterRefNO
				+ ", totalSanctionedAmount=" + totalSanctionedAmount + ", proposalName=" + proposalName
				+ ", proposalId=" + proposalId + ", sanctionHeadMaters=" + sanctionHeadMaters + "]";
	}
}
