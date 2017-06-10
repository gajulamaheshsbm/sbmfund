package com.devappsol.sbm.sbmfundrequisition.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "state_utilization_head_master")
public class StateUtilizationHeadMaster {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@OneToOne
	private StateCodes StateCode;
	
	@Column(name = "expense_head")
	private String expenseHead;
	
	@Column(name = "utilization_created_date")
	private Date utilizationCreatedDate;
	
	@Column(name = "financial_year")
	private String financialYear;
	
	@Column(name = "utilization_amount")
	private long utilizationAmount;
	
	@Column(name = "utilization_amount_till_date")
	private long utilizationAmountTillDate;
	
	@Column(name = "utilization_reference_no")
	private String utilizationReferenceNo;
	
	@Column(name = "utilization_certificate_filePath")
	private String utilizationCertificateFilePath;
	
	@Column(name = "utilization_certificate_name")
	private String utilizationCertificateName;
	
	@Column(name = "photos_path")
	private String photosPath;
	
	@Column(name = "photos_name")
	private String photosName;
	
	@Column(name = "remarks")
	private String remarks;
	
	@Column(name = "work_completed")
	private long workCompleted;
	
	@Column(name = "constructed_numbers")
	private long constructedNumbers;
	
	@Column(name = "commenced_numbers")
	private long commencedNumbers;
	
	@Column(name = "no_of_photograph_commenced")
	private long noOfPhotographCommenced;
	
	@Column(name = "no_of_photograph_completed")
	private long noOfPhotographCompleted;
	
	

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

	public String getExpenseHead() {
		return expenseHead;
	}

	public void setExpenseHead(String expenseHead) {
		this.expenseHead = expenseHead;
	}

	public String getFinancialYear() {
		return financialYear;
	}

	public void setFinancialYear(String financialYear) {
		this.financialYear = financialYear;
	}

	public long getUtilizationAmountTillDate() {
		return utilizationAmountTillDate;
	}

	public void setUtilizationAmountTillDate(long utilizationAmountTillDate) {
		this.utilizationAmountTillDate = utilizationAmountTillDate;
	}

	public String getUtilizationReferenceNo() {
		return utilizationReferenceNo;
	}

	public void setUtilizationReferenceNo(String utilizationReferenceNo) {
		this.utilizationReferenceNo = utilizationReferenceNo;
	}

	public String getUtilizationCertificateFilePath() {
		return utilizationCertificateFilePath;
	}

	public void setUtilizationCertificateFilePath(String utilizationCertificateFilePath) {
		this.utilizationCertificateFilePath = utilizationCertificateFilePath;
	}

	public String getUtilizationCertificateName() {
		return utilizationCertificateName;
	}

	public void setUtilizationCertificateName(String utilizationCertificateName) {
		this.utilizationCertificateName = utilizationCertificateName;
	}

	public String getPhotosName() {
		return photosName;
	}

	public void setPhotosName(String photosName) {
		this.photosName = photosName;
	}

	public void setPhotosPath(String photosPath) {
		this.photosPath = photosPath;
	}


	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public long getWorkCompleted() {
		return workCompleted;
	}

	public void setWorkCompleted(long workCompleted) {
		this.workCompleted = workCompleted;
	}

	public long getConstructedNumbers() {
		return constructedNumbers;
	}

	public void setConstructedNumbers(long constructedNumbers) {
		this.constructedNumbers = constructedNumbers;
	}

	public long getCommencedNumbers() {
		return commencedNumbers;
	}

	public void setCommencedNumbers(long commencedNumbers) {
		this.commencedNumbers = commencedNumbers;
	}

	public long getNoOfPhotographCommenced() {
		return noOfPhotographCommenced;
	}

	public void setNoOfPhotographCommenced(long noOfPhotographCommenced) {
		this.noOfPhotographCommenced = noOfPhotographCommenced;
	}

	public long getNoOfPhotographCompleted() {
		return noOfPhotographCompleted;
	}

	public void setNoOfPhotographCompleted(long noOfPhotographCompleted) {
		this.noOfPhotographCompleted = noOfPhotographCompleted;
	}

	public long getUtilizationAmount() {
		return utilizationAmount;
	}

	public void setUtilizationAmount(long utilizationAmount) {
		this.utilizationAmount = utilizationAmount;
	}

	public Date getUtilizationCreatedDate() {
		return utilizationCreatedDate;
	}

	public void setUtilizationCreatedDate(Date utilizationCreatedDate) {
		this.utilizationCreatedDate = utilizationCreatedDate;
	}

	

}
