package audit.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesUtil {

	private static Properties prop = new Properties();
	static {
		InputStream ss = PropertiesUtil.class.getResourceAsStream("config.properties");
		try {
			prop.load(ss);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static String getProperty(String a){
		return  prop.getProperty(a);
	}
     public static void main(String[] args) {
    	 System.out.println(PropertiesUtil.getProperty("server.ip"));
	}
}
