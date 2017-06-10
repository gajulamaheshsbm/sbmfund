package com.devappsol.sbm.sbmfundrequisition.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "retained_at_center")
public class RetainedAtCenter {
	
	@Id
	@Column(name = "rac_id")
	private int racId;
	
	@OneToOne
	private StateCodes StateCode;
	
	@Column(name = "iec")
	private float IEC;
	
	@Column(name = "cb")
	private float CB;
	
	@Column(name = "total")
	private float total;

	public int getRacId() {
		return racId;
	}

	public void setRacId(int racId) {
		this.racId = racId;
	}

	public StateCodes getStateCode() {
		return StateCode;
	}

	public void setStateCode(StateCodes stateCode) {
		StateCode = stateCode;
	}

	public float getIEC() {
		return IEC;
	}

	public void setIEC(float iEC) {
		IEC = iEC;
	}

	public float getCB() {
		return CB;
	}

	public void setCB(float cB) {
		CB = cB;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}
}
