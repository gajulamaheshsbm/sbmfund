package com.devappsol.sbm.sbmfundrequisition.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "state_financial_target")
public class StateFinancialTarget {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@OneToOne
	private StateCodes StateCode;
	
	@Column(name = "heads")
	private String heads;
	
	@Column(name = "total_target_funds")
	private Long totalTargetFunds;
	
	@Column(name = "financial_year")
	private String financialYear;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public StateCodes getStateCode() {
		return StateCode;
	}

	public void setStateCode(StateCodes stateCode) {
		StateCode = stateCode;
	}

	public String getHeads() {
		return heads;
	}

	public void setHeads(String heads) {
		this.heads = heads;
	}

	public long getTotalTargetFunds() {
		return totalTargetFunds;
	}

	public void setTotalTargetFunds(long totalTargetFunds) {
		this.totalTargetFunds = totalTargetFunds;
	}

	public String getFinancialYear() {
		return financialYear;
	}

	public void setFinancialYear(String financialYear) {
		this.financialYear = financialYear;
	}

	@Override
	public String toString() {
		return "StateFinancialTarget [id=" + id + ", StateCode=" + StateCode + ", heads=" + heads
				+ ", totalTargetFunds=" + totalTargetFunds + ", financialYear=" + financialYear + "]";
	}
	
	
	
	

}
