package com.devappsol.sbm.sbmfundrequisition.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.envers.Audited;

@Entity
@Audited
@Table(name = "state_codes")
public class StateCodes implements Serializable {
	
private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "state_code")
	private int stateCode;
	
	@Column(name = "state_name")
	private String stateName;
	
	/*@OneToMany(fetch=FetchType.LAZY)
	@JsonIgnore
	private List<ULBCodes> ulbCodes;*/

	public int getStateCode() {
		return stateCode;
	}

	public void setStateCode(int stateCode) {
		this.stateCode = stateCode;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	/*public List<ULBCodes> getUlbCodes() {
		return ulbCodes;
	}

	public void setUlbCodes(List<ULBCodes> ulbCodes) {
		this.ulbCodes = ulbCodes;
	}*/

}
