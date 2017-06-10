package com.devappsol.sbm.sbmfundrequisition.model;

public class UserRequest {

	private String token;
	
	private String moduleName;
	
	private String action;
	
	private String emailId;

	public String getToken() {
		return token;
	}

	public String getModuleName() {
		return moduleName;
	}

	public String getAction() {
		return action;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	
	
}
