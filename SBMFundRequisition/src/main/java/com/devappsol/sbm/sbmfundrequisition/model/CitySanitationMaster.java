package com.devappsol.sbm.sbmfundrequisition.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "city_sanitation_master")
public class CitySanitationMaster {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@OneToOne
	private StateCodes StateCode;
	
	@OneToOne
	private ULBCodes ulbCodes;
	
	@Column(name = "urban_population")
	private Long urbanPopulation;
	
	@Column(name="no_of_urban_house_holds")
	private Long noOfUrbanHouseHolds;
	
	@Column(name="urban_hh_defecating_open")
	private Long urbanHHDefecatingOpen;
	
	@Column(name="urban_HHs_having_Pit_Laterines")
	private Long urbanHHshavingPitLaterines;
	
	@Column(name="urban_HHs_with_Insanitary_Laterines")
	private Long UrbanHHswithInsanitaryLaterines;
	
	@Column(name="solid_Waste_Generated")
	private Long solidWasteGenerated;
	
	@Column(name="msw_Collected")
	private Long MSWCollected;
	
	@Column(name="msw_Transported")
	private Long mswTransported;
	
	@Column(name="msw_Treated")
	private Long mswTreated;
	
	@Column(name="census_year")
	private Long censusYear;

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

	public long getUrbanPopulation() {
		return urbanPopulation;
	}

	public void setUrbanPopulation(long urbanPopulation) {
		this.urbanPopulation = urbanPopulation;
	}

	public long getNoOfUrbanHouseHolds() {
		return noOfUrbanHouseHolds;
	}

	public void setNoOfUrbanHouseHolds(long noOfUrbanHouseHolds) {
		this.noOfUrbanHouseHolds = noOfUrbanHouseHolds;
	}

	public long getUrbanHHDefecatingOpen() {
		return urbanHHDefecatingOpen;
	}

	public void setUrbanHHDefecatingOpen(long urbanHHDefecatingOpen) {
		this.urbanHHDefecatingOpen = urbanHHDefecatingOpen;
	}

	public long getUrbanHHshavingPitLaterines() {
		return urbanHHshavingPitLaterines;
	}

	public void setUrbanHHshavingPitLaterines(long urbanHHshavingPitLaterines) {
		this.urbanHHshavingPitLaterines = urbanHHshavingPitLaterines;
	}

	public long getUrbanHHswithInsanitaryLaterines() {
		return UrbanHHswithInsanitaryLaterines;
	}

	public void setUrbanHHswithInsanitaryLaterines(long urbanHHswithInsanitaryLaterines) {
		UrbanHHswithInsanitaryLaterines = urbanHHswithInsanitaryLaterines;
	}

	public long getSolidWasteGenerated() {
		return solidWasteGenerated;
	}

	public void setSolidWasteGenerated(long solidWasteGenerated) {
		this.solidWasteGenerated = solidWasteGenerated;
	}

	public long getMSWCollected() {
		return MSWCollected;
	}

	public void setMSWCollected(long mSWCollected) {
		MSWCollected = mSWCollected;
	}

	public long getMswTransported() {
		return mswTransported;
	}

	public void setMswTransported(long mswTransported) {
		this.mswTransported = mswTransported;
	}

	public long getMswTreated() {
		return mswTreated;
	}

	public void setMswTreated(long mswTreated) {
		this.mswTreated = mswTreated;
	}

	public long getCensusYear() {
		return censusYear;
	}

	public void setCensusYear(long censusYear) {
		this.censusYear = censusYear;
	}
	
	
	
	
}
