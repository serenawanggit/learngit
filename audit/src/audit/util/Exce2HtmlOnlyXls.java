package audit.util;
/**
 * 只能解析xls格式的
 */
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.util.List;

import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.apache.commons.io.FileUtils;
import org.apache.poi.hssf.converter.ExcelToHtmlConverter;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hwpf.usermodel.Picture;
import org.w3c.dom.Document;
public class Exce2HtmlOnlyXls {
	final static String path = "D:\\doc";
	final static String file = "test1.xlsx";
    public static void main(String args[]) throws Exception {
    	startExce2Html(path, file,"text.html");
    }
public static void startExce2Html(String folderPath, String filePath, String OutputFile) throws Exception{
	InputStream input=new FileInputStream(folderPath+"\\"+filePath);
    HSSFWorkbook excelBook=new HSSFWorkbook(input);
    ExcelToHtmlConverter excelToHtmlConverter = new ExcelToHtmlConverter (DocumentBuilderFactory.newInstance().newDocumentBuilder().newDocument() );
    excelToHtmlConverter.processWorkbook(excelBook);
    List pics = excelBook.getAllPictures();
    if (pics != null) {
        for (int i = 0; i < pics.size(); i++) {
            Picture pic = (Picture) pics.get (i);
            File file =new File(path+"\\"+ pic.suggestFullFileName()); 
            //创建
            file.createNewFile();
            try {
                pic.writeImageContent (new FileOutputStream (path + pic.suggestFullFileName() ) );
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }
    }
    Document htmlDocument =excelToHtmlConverter.getDocument();
    ByteArrayOutputStream outStream = new ByteArrayOutputStream();
    DOMSource domSource = new DOMSource (htmlDocument);
    StreamResult streamResult = new StreamResult (outStream);
    TransformerFactory tf = TransformerFactory.newInstance();
    Transformer serializer = tf.newTransformer();
    serializer.setOutputProperty (OutputKeys.ENCODING, "utf-8");
    serializer.setOutputProperty (OutputKeys.INDENT, "yes");
    serializer.setOutputProperty (OutputKeys.METHOD, "html");
    serializer.transform (domSource, streamResult);
    outStream.close();

    String content = new String (outStream.toByteArray() );

    FileUtils.writeStringToFile(new File (path, OutputFile), content, "utf-8");
    }
}
