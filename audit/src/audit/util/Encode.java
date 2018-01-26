package audit.util;

import java.security.MessageDigest;
import java.security.spec.KeySpec;

import javax.crypto.KeyGenerator;
import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

/**
 * 基础加密组件
 */
public class Encode {
    public static final String KEY_SHA = "SHA";
    public static final String KEY_MD5 = "MD5";

    public static void main(String[] args) {

        String pass = "sssssssss";
        try {
            System.out.println(new String(encryptPBKDF2(pass, "ybvubi")));
            String s = encryptBASE64("1234".getBytes());
            System.out.println("密文：" + s);
            System.out.println("明文：" + new String(decryptBASE64(s)));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * MAC算法可选以下多种算法
     * 
     * <pre>
     * HmacMD5
     * HmacSHA1
     * HmacSHA256
     * HmacSHA384
     * HmacSHA512
     * </pre>
     */
    public static final String KEY_MAC = "HmacMD5";

    /**
     * BASE64解密
     * 
     * @param key
     * @return
     * @throws Exception
     */
    public static byte[] decryptBASE64(String key) throws Exception {
        return (new BASE64Decoder()).decodeBuffer(key);
    }

    public static byte[] encryptPBKDF2(String password, String salt)
            throws Exception {
        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt.getBytes(),
                2000, 256);

        SecretKeyFactory sf = SecretKeyFactory
                .getInstance("PBKDF2WithHmacSHA1");
        SecretKey key = sf.generateSecret(spec);
        byte[] b = key.getEncoded();
        return b;
    }

    /**
     * BASE64加密
     * 
     * @param key
     * @return
     * @throws Exception
     */
    public static String encryptBASE64(byte[] key) throws Exception {
        return (new BASE64Encoder()).encodeBuffer(key);
    }

    /**
     * MD5加密
     * 
     * @param data
     * @return
     * @throws Exception
     */
    public static byte[] encryptMD5(byte[] data) throws Exception {

        MessageDigest md5 = MessageDigest.getInstance(KEY_MD5);
        md5.update(data);

        return md5.digest();

    }

    /**
     * SHA加密
     * 
     * @param data
     * @return
     * @throws Exception
     */
    public static byte[] encryptSHA(byte[] data) throws Exception {

        MessageDigest sha = MessageDigest.getInstance(KEY_SHA);
        sha.update(data);

        return sha.digest();

    }

    /**
     * 初始化HMAC密钥
     * 
     * @return
     * @throws Exception
     */
    public static String initMacKey() throws Exception {
        KeyGenerator keyGenerator = KeyGenerator.getInstance(KEY_MAC);

        SecretKey secretKey = keyGenerator.generateKey();
        return encryptBASE64(secretKey.getEncoded());
    }

    /**
     * HMAC加密
     * 
     * @param data
     * @param key
     * @return
     * @throws Exception
     */
    public static byte[] encryptHMAC(byte[] data, String key) throws Exception {

        SecretKey secretKey = new SecretKeySpec(decryptBASE64(key), KEY_MAC);
        Mac mac = Mac.getInstance(secretKey.getAlgorithm());
        mac.init(secretKey);

        return mac.doFinal(data);

    }
}