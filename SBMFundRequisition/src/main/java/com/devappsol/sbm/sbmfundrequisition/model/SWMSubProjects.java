package com.devappsol.sbm.sbmfundrequisition.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.envers.Audited;

@Entity
@Audited
@Table(name = "swm_sub_projects")
public class SWMSubProjects {
	
	@Id
	@Column(name = "swm_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int swmId;
	
	@Column(name = "swmsub_project_name")
	private String swmSubProjectName;
	
	@Column(name = "description")
	private String description;
	
	@Column(name="total_project_cost")
	private long totalProjectCost;
	
	@Column(name="central_assistance_sought")
	private long centralAssistanceSought;
	
	@Column(name="state_contribution")
	private long stateContribution;
	
	@Column(name="others")
	private long others;

	public int getSwmId() {
		return swmId;
	}

	public void setSwmId(int swmId) {
		this.swmId = swmId;
	}

	public String getSwmSubProjectName() {
		return swmSubProjectName;
	}

	public void setSwmSubProjectName(String swmSubProjectName) {
		this.swmSubProjectName = swmSubProjectName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getTotalProjectCost() {
		return totalProjectCost;
	}

	public void setTotalProjectCost(long totalProjectCost) {
		this.totalProjectCost = totalProjectCost;
	}

	public long getCentralAssistanceSought() {
		return centralAssistanceSought;
	}

	public void setCentralAssistanceSought(long centralAssistanceSought) {
		this.centralAssistanceSought = centralAssistanceSought;
	}

	public long getStateContribution() {
		return stateContribution;
	}

	public void setStateContribution(long stateContribution) {
		this.stateContribution = stateContribution;
	}

	public long getOthers() {
		return others;
	}

	public void setOthers(long others) {
		this.others = others;
	}
}
