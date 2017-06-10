package com.devappsol.sbm.sbmfundrequisition.utills;

public class SBMStringUtils {

	public static String getNumericString(String value) {
		
		value = value.replaceAll(",", "");
		value = value.replaceAll("\"", "");
		value = value.replaceAll("'", "");
		value = value.trim();
		
		return value;
	}
	
	public static String getTruncatedName(String name) {
		name = name.replaceAll("Â", "");
		name = name.replaceAll("�", "");
		name = name.trim();
		name = name.replaceAll("\\s+", "_");
		name = name.replaceAll("\\W", "");
		
		if(name.length() > 127) {
			name = name.substring(0, 99);
		}
		
		return name;
	}
	
	public static String getAlphaNumeric(String name) {
		name = name.replaceAll("Â", "");
		name = name.replaceAll("�", "");
		name = name.trim();
		name = name.replaceAll("\\s+", " ");
		name = name.replaceAll("\\W", "");
		
		return name;
	}
	
	public static String getDateFromName(String name) {
		name = name.substring((name.length()-28), (name.length()));
	
	return name;
	}
}
