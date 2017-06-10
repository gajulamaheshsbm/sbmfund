package com.devappsol.sbm.sbmfundrequisition.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "central_assistance_to_state")
public class CentralAssistanceToState {
	
	@Id
	@Column(name = "cas_id")
	private int casId;
	
	@OneToOne
	private StateCodes StateCode;
	
	@Column(name = "Ihhl")
	private float Ihhl;
	
	@Column(name = "ct")
	private float CT;
	
	@Column(name = "swm")
	private float SWM;
	
	@Column(name = "iec")
	private float IEC;
	
	@Column(name = "cb")
	private float CB;
	
	@Column(name = "total")
	private float total;

	public int getCasId() {
		return casId;
	}

	public void setCasId(int casId) {
		this.casId = casId;
	}

	public StateCodes getStateCode() {
		return StateCode;
	}

	public void setStateCode(StateCodes stateCode) {
		StateCode = stateCode;
	}

	public float getIhhl() {
		return Ihhl;
	}

	public void setIhhl(float ihhl) {
		Ihhl = ihhl;
	}

	public float getCT() {
		return CT;
	}

	public void setCT(float cT) {
		CT = cT;
	}

	public float getSWM() {
		return SWM;
	}

	public void setSWM(float sWM) {
		SWM = sWM;
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
