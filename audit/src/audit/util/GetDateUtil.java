package audit.util;

import java.util.Date;

public class GetDateUtil {
	public static  String getDate(){
		@SuppressWarnings("deprecation")
		int year = new Date().getYear()+1900;
		@SuppressWarnings("deprecation")
		int month = new Date().getMonth()+1;
		@SuppressWarnings("deprecation")
		int day = new Date().getDate();
		String ASSESS_time =year+"-"+month+"-"+day;
		return ASSESS_time;
	}
}
