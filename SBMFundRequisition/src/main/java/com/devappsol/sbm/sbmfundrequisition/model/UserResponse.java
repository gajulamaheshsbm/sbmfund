package com.devappsol.sbm.sbmfundrequisition.model;

public class UserResponse {

	private String message;
	
	private int status;
	
	private String token;
	
	private Object data;
	
	private String emailId;

	public String getMessage() {
		return message;
	}

	public int getStatus() {
		return status;
	}

	public String getToken() {
		return token;
	}

	public Object getData() {
		return data;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	
}
