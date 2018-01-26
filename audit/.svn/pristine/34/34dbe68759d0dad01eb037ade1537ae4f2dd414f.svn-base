package audit.util.lzr;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * 时间工具类
 * @author Administrator
 *
 */
public class LzrTimeUntil {
	public static void main(String[] args) {
		try {
			System.out.println(LzrTimeUntil.returnDateNumOfToday("2017-1-14~2017-1-19"));
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}
	/**
	 * 给我一个时间段 我给你判断今天 是否在这个时间段内 1之前  2之内  3之后
	 * @param date
	 * @return
	 * @throws ParseException 
	 */
	public static int returnDateNumOfToday(String date) throws ParseException{
		 if (date == null || !date.contains("-") ||!date.contains("~")) {
		      //  throw new IllegalArgumentException("范围时间格式错误:" + date);
		 }else{
			 Date nowdate = new Date();
			 String[] split = date.split("~");
			 SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd",
					 Locale.CHINA);
			 
			 String time1 = split[0];//前面的时间
			 //后一个时间
			 // 默认给他推迟一天 避免日期为当天日期，显示过期
			 Integer num1 = time1.lastIndexOf("-");
			 String ri = time1.substring(num1 + 1);
			 Integer ri1 = Integer.parseInt(ri);
			 ri1 = ri1 + 1;
			 time1 = time1.substring(0, num1 + 1) + ri1;
			 Date d1 = sdf.parse(time1);
			 boolean flag1 = d1.after(nowdate);
			 
			 
			 String time2 = split[1];//后面时间
			 //后一个时间
			 // 默认给他推迟一天 避免日期为当天日期，显示过期
			 Integer num2 = time2.lastIndexOf("-");
			 String ri2 = time2.substring(num2 + 1);
			 Integer ri12 = Integer.parseInt(ri2);
			 ri12 = ri12 + 1;
			 time2 = time2.substring(0, num2 + 1) + ri12;
			 
			 Date d2 = sdf.parse(time2);
			 boolean flag2 = d2.after(nowdate);
			 
			 System.out.println("flag1==="+flag1);
			 System.out.println("flag2==="+flag2);
			 if (flag1||flag2) {
				 return 2;// 在范围内
			 }else if(flag1==false&&flag2==false){
				 return 3;// 之后
			 }else if(!flag1){
				 return 1;// 之前
			 }
		 }
			return 0;
	}
}
