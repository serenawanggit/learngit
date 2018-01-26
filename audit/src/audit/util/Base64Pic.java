package audit.util;

import java.io.FileOutputStream;
import java.io.IOException;

import sun.misc.BASE64Decoder;

public class Base64Pic {
	    /**
	     * 把base64图片数据转为本地图片
	     * @param base64ImgData
	     * @param filePath
	     * @throws IOException
	     */
	    public static void convertBase64DataToImage(String base64ImgData,String filePath) throws IOException {
	        BASE64Decoder d = new BASE64Decoder();
	        //解码base64
	        byte[] bs = d.decodeBuffer(base64ImgData);
	        FileOutputStream os = new FileOutputStream(filePath);
	        os.write(bs);
	        os.close();
	    }
}
