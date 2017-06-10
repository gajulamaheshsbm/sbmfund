package com.devappsol.sbm.sbmfundrequisition.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "city_sanitation_financial_year")
public class CitySanitationFinancialYear {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@OneToOne
	private StateCodes StateCode;
	
	@OneToOne
	private ULBCodes ulbCodes;
	
	@Column(name = "urban_HHs_defecating_on_open")
	private Long urbanHHsDefecatingonOpen;
	
	@Column(name = "urban_HHs_having_Pit_Laterines")
	private Long urbanHHsHavingPitLaterines;
	
	@Column(name = "Urban_HHs_with_Insanitary_Laterines")
	private Long UrbanHHswithInsanitaryLaterines;
	
	@Column(name = "total_IHHTs_required_by_state")
	private Long totalIHHTsRequiredbyState;
	
	@Column(name = "total_CT_required")
	private Long totalCTRequired;
	
	@Column(name = "total_PT_required")
	private Long totalPTRequired;
	
	@Column(name = "financial_year")
	private Long financialYear;

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

	public ULBCodes getUlbCodes() {
		return ulbCodes;
	}

	public void setUlbCodes(ULBCodes ulbCodes) {
		this.ulbCodes = ulbCodes;
	}

	public long getUrbanHHsDefecatingonOpen() {
		return urbanHHsDefecatingonOpen;
	}

	public void setUrbanHHsDefecatingonOpen(long urbanHHsDefecatingonOpen) {
		this.urbanHHsDefecatingonOpen = urbanHHsDefecatingonOpen;
	}

	public long getUrbanHHsHavingPitLaterines() {
		return urbanHHsHavingPitLaterines;
	}

	public void setUrbanHHsHavingPitLaterines(long urbanHHsHavingPitLaterines) {
		this.urbanHHsHavingPitLaterines = urbanHHsHavingPitLaterines;
	}

	public long getUrbanHHswithInsanitaryLaterines() {
		return UrbanHHswithInsanitaryLaterines;
	}

	public void setUrbanHHswithInsanitaryLaterines(long urbanHHswithInsanitaryLaterines) {
		UrbanHHswithInsanitaryLaterines = urbanHHswithInsanitaryLaterines;
	}

	public long getTotalIHHTsRequiredbyState() {
		return totalIHHTsRequiredbyState;
	}

	public void setTotalIHHTsRequiredbyState(long totalIHHTsRequiredbyState) {
		this.totalIHHTsRequiredbyState = totalIHHTsRequiredbyState;
	}

	public long getTotalCTRequired() {
		return totalCTRequired;
	}

	public void setTotalCTRequired(long totalCTRequired) {
		this.totalCTRequired = totalCTRequired;
	}

	public long getTotalPTRequired() {
		return totalPTRequired;
	}

	public void setTotalPTRequired(long totalPTRequired) {
		this.totalPTRequired = totalPTRequired;
	}

	public long getFinancialYear() {
		return financialYear;
	}

	public void setFinancialYear(long financialYear) {
		this.financialYear = financialYear;
	}

}
