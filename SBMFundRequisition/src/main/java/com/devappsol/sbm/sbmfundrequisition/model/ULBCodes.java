package com.devappsol.sbm.sbmfundrequisition.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ulb_codes")
public class ULBCodes implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "ulb_code")
	private int ulbCode;
	
	@Column(name = "ulb_name")
	private String ulbName;
	
	@Column(name = "district_code")
	private int districtCode;
	
	@Column(name = "district_name")
	private String districtName;

	@OneToOne(fetch=FetchType.EAGER)
	private StateCodes stateCodes;
	
	public int getUlbCode() {
		return ulbCode;
	}

	public void setUlbCode(int ulbCode) {
		this.ulbCode = ulbCode;
	}

	public String getUlbName() {
		return ulbName;
	}

	public void setUlbName(String ulbName) {
		this.ulbName = ulbName;
	}

	public int getDistrictCode() {
		return districtCode;
	}

	public void setDistrictCode(int districtCode) {
		this.districtCode = districtCode;
	}

	public String getDistrictName() {
		return districtName;
	}

	public void setDistrictName(String districtName) {
		this.districtName = districtName;
	}

	public StateCodes getStateCodes() {
		return stateCodes;
	}

	public void setStateCodes(StateCodes stateCodes) {
		this.stateCodes = stateCodes;
	}
	

}
