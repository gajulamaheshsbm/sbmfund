package com.devappsol.sbm.sbmfundrequisition.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "ihhl_center_share")
public class IHHLCenterShare {

	@Id
	@Column(name = "ihhl_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ihhlId;
	
	@OneToOne
	private StateCodes StateCode;
	
	@Column(name = "center_share_amount")
	private int centerShareAmount;

	public int getIhhlId() {
		return ihhlId;
	}

	public void setIhhlId(int ihhlId) {
		this.ihhlId = ihhlId;
	}

	public StateCodes getStateCode() {
		return StateCode;
	}

	public void setStateCode(StateCodes stateCode) {
		StateCode = stateCode;
	}

	public int getCenterShareAmount() {
		return centerShareAmount;
	}

	public void setCenterShareAmount(int centerShareAmount) {
		this.centerShareAmount = centerShareAmount;
	}
	


}
