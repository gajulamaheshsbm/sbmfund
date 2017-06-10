package com.devappsol.sbm.sbmfundrequisition.model;

public class MasterResponse {
	private int status;
	private String message;
	private Object obj;
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getObj() {
		return obj;
	}
	public void setObj(Object obj) {
		this.obj = obj;
	}
	@Override
	public String toString() {
		return "MasterResponse [status=" + status + ", message=" + message + ", obj=" + obj + "]";
	}
	
	

}
