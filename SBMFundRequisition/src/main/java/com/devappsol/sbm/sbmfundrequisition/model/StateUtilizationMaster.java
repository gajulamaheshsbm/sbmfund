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
@Table(name = "state_utilization_master")
public class StateUtilizationMaster {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@OneToOne
	private StateCodes StateCode;
	
	@Column(name = "utilization_created_date")
	private Date utilizationCreatedDate;
	
	@OneToMany(fetch=FetchType.EAGER,cascade = CascadeType.ALL)
	private List<StateUtilizationHeadMaster> stateUtilizationHeadMasters;

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

	public Date getUtilizationCreatedDate() {
		return utilizationCreatedDate;
	}

	public void setUtilizationCreatedDate(Date utilizationCreatedDate) {
		this.utilizationCreatedDate = utilizationCreatedDate;
	}

	public List<StateUtilizationHeadMaster> getStateUtilizationHeadMasters() {
		return stateUtilizationHeadMasters;
	}

	public void setStateUtilizationHeadMasters(List<StateUtilizationHeadMaster> stateUtilizationHeadMasters) {
		this.stateUtilizationHeadMasters = stateUtilizationHeadMasters;
	}

	
	
}
