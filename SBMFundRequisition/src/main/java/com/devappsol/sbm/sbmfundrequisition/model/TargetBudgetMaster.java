package com.devappsol.sbm.sbmfundrequisition.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "target_budget_master")
public class TargetBudgetMaster {
	
	@Id
	@Column(name = "id")
	private int masterId;
	
	@OneToOne
	private StateCodes stateCode;
	
	@Column(name = "individual_hh_toilets")
	private long individualHHToilets;
	
	@Column(name = "community_toilet_seats")
	private long communityToiletSeats;
	
	@Column(name = "public_toilet_seats")
	private long publicToiletSeats;
	
	@OneToOne
	private CentralAssistanceToState centralAssistanceToState;
	
	@OneToOne
	private RetainedAtCenter retainedAtCenter;
	
	@Column(name = "grand_total")
	private float grandTotal;

	public int getMasterId() {
		return masterId;
	}

	public void setMasterId(int masterId) {
		this.masterId = masterId;
	}

	public StateCodes getStateCode() {
		return stateCode;
	}

	public void setStateCode(StateCodes stateCode) {
		this.stateCode = stateCode;
	}

	public long getIndividualHHToilets() {
		return individualHHToilets;
	}

	public void setIndividualHHToilets(long individualHHToilets) {
		this.individualHHToilets = individualHHToilets;
	}

	public long getCommunityToiletSeats() {
		return communityToiletSeats;
	}

	public void setCommunityToiletSeats(long communityToiletSeats) {
		this.communityToiletSeats = communityToiletSeats;
	}

	public long getPublicToiletSeats() {
		return publicToiletSeats;
	}

	public void setPublicToiletSeats(long publicToiletSeats) {
		this.publicToiletSeats = publicToiletSeats;
	}

	public CentralAssistanceToState getCentralAssistanceToState() {
		return centralAssistanceToState;
	}

	public void setCentralAssistanceToState(CentralAssistanceToState centralAssistanceToState) {
		this.centralAssistanceToState = centralAssistanceToState;
	}

	public RetainedAtCenter getRetainedAtCenter() {
		return retainedAtCenter;
	}

	public void setRetainedAtCenter(RetainedAtCenter retainedAtCenter) {
		this.retainedAtCenter = retainedAtCenter;
	}

	public float getGrandTotal() {
		return grandTotal;
	}

	public void setGrandTotal(float grandTotal) {
		this.grandTotal = grandTotal;
	}
	
}
