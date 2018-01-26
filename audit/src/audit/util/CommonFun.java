package audit.util;

import org.apache.commons.codec.binary.Base64;
public class CommonFun {

    /**
     * 二进制转字符串
     * 
     * @param b
     * @return
     */
    public static String byte2Hex(byte[] b) {
        StringBuilder hex = new StringBuilder();
        for (byte c : b) {
            hex.append(Character.forDigit((c >> 4) & 0xf, 16));
            hex.append(Character.forDigit(c & 0xf, 16));
        }
        return hex.toString().toUpperCase();
    }

    /**
     * 
     * @param password
     * @return
     * @throws Exception
     */
    public static String encodeForUrl(String password) {
        try {
            return Base64.encodeBase64URLSafeString(password.getBytes());
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * 
     * @param password
     * @return
     * @throws Exception
     */
    public static String decodeForUrl(String password) {
        byte[] b;
        try {
            b = Base64.decodeBase64(password);
            return new String(b);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
    
    public static void main(String[] args) {
		System.out.println(CommonFun.encodeForUrl("http://192.168.1.51:8078/CHART"));
		System.out.println(CommonFun.decodeForUrl("aHR0cDovLzE5Mi4xNjguMS41MDo4MDgwL0NIQVJU"));
    }
    

}
