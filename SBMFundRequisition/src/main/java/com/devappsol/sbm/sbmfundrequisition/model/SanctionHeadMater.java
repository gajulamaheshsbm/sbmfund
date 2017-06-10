package com.devappsol.sbm.sbmfundrequisition.model;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "sanction_head_master")
public class SanctionHeadMater {
	
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
	
	
	@Column(name = "sanctioned_amount")
	private long sanctionedAmount;
	
	@Column(name = "financial_year")
	private String financialYear;
	
	@Column(name = "expense_head")
	private String expenseHead;
	
	@Column(name = "proposal_head_id")
	private int proposalHeadId;
	
	@Column(name = "total_sanctioned_amount_per_head")
	private int totalSanctionAmountPerHead;

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

	public long getSanctionedAmount() {
		return sanctionedAmount;
	}

	public void setSanctionedAmount(long sanctionedAmount) {
		this.sanctionedAmount = sanctionedAmount;
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

	public int getProposalHeadId() {
		return proposalHeadId;
	}

	public void setProposalHeadId(int proposalHeadId) {
		this.proposalHeadId = proposalHeadId;
	}

	public int getTotalSanctionAmountPerHead() {
		return totalSanctionAmountPerHead;
	}

	public void setTotalSanctionAmountPerHead(int totalSanctionAmountPerHead) {
		this.totalSanctionAmountPerHead = totalSanctionAmountPerHead;
	}


}
