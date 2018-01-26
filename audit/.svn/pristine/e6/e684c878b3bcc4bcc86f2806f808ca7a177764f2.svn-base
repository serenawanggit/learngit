package audit.util.text;

//import com.itextpdf.text.Document;
//import com.itextpdf.text.DocumentException;
//import com.itextpdf.text.PageSize;
//import com.itextpdf.text.pdf.PdfWriter;
//import com.itextpdf.tool.xml.XMLWorkerHelper;
//import com.zenith.chart.util.DBConnection;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.nio.charset.Charset;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import audit.util.DBConnection;

public class itext
  extends HttpServlet
{
  private static final long serialVersionUID = 1L;
  
  public void destroy()
  {
    super.destroy();
  }
  
  public void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {}
  
  public void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException
  {
    request.setCharacterEncoding("UTF-8");
    response.setContentType("text/html;charset=utf-8");
    response.setCharacterEncoding("UTF-8");
    System.out.println(System.getProperty("ASDS_PDF_Path") + "\\");
    String bodyData = request.getParameter("bodyData");
    

    String name = System.getProperty("schoolName");
    char[] names = name.toCharArray();
    StringBuffer sb = new StringBuffer();
    for (char c : names)
    {
      sb.append("<tr><td style=\"border: 0px;text-align: center;\"></td></tr>");
      sb.append("<tr><td style='border: 0px;text-align: center;'><h1>" + c + "</h1></td></tr>");
      sb.append("<tr><td style=\"border: 0px;text-align: center;\"></td></tr>");
    }
    bodyData = bodyData.replaceAll("<tr><td>我就是学校的名字</td></tr>", sb.toString());
    

    String path = getServletContext().getRealPath("/");
    path = path.replaceAll("\\\\", "/");
    StringBuffer html = new StringBuffer();
    
    html.append("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    html.append("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">");
    html.append("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
    html.append("<head>");
    
    html.append("<style type=\"text/css\">");
    html.append("body{");
    html.append("font-family:SimSun;");
    html.append("} table{border: 0px ; width:100%;}\t\t  table thead{background-color: #eee; border: 1px solid #ccc;}\t\t  table td{border: 0px ;text-align: center; height:30px;}");

    html.append(".tb_title{background-color:#eee;border:1px solid #ccc; font-weight:bold; height:30px; margin-top: 15px;}.tb_title h4{float: left; color:#4A8BC2; padding-left:10px; line-height:30px;position: relative;}.tb_main table{border: 1px solid #ccc;  border-collapse: collapse; width:100%;margin:5px 0;}.tb_main table td{border: 1px solid #ccc;text-align: center; height:30px;}.tb_main table thead{background-color: #eee; border: 1px solid #ccc;}.tb_main table tfoot td{text-align: left; padding-left:10px; }.tb_main table thead h4{float: left; line-height: 30px; padding-left:15px;}.f1class{ border: 1px solid #ccc;text-align: center; height:30px; width:30%;}");


    html.append("</style>");
    html.append("<meta http-equiv=\"Content-Type\" content=\"text/html;charset=GBK\"></meta>").append("</head>");
    html.append("<body>");
    html.append(bodyData.replaceAll("<br/>", "<p></p>").replaceAll("<br>", "<p></p>"));
    html.append("</body>");
    html.append("</html>");
    PrintStream ps = new PrintStream(new FileOutputStream(path + "/page/ASDSReport/ASDSReportPDF/ASDS_pdf_html.html"));
    ps.println(html.toString());
    ps.close();
    
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH：mm：ss");
    String dateString = sdf.format(new Date());
    File file = new File(System.getProperty("ASDS_PDF_Path") + "\\");
    if (!file.exists()) {
      file.mkdirs();
    }
    
    System.out.println(html);
//    TestJsoupComponent.htmlConvertWord(html.toString(), "");
    
//    Document document = new Document(PageSize.A4);
//    try
//    {
//      PdfWriter writer = PdfWriter.getInstance(document, new FileOutputStream(file + "\\" + dateString + ".pdf"));
//      
//      document.open();
//      
//      XMLWorkerHelper.getInstance().parseXHtml(writer, document, new FileInputStream(path + "page/ASDSReport/ASDSReportPDF/ASDS_pdf_html.html"), 
//        Charset.forName("gbk"));
//      
//      document.close();
//    }
//    catch (DocumentException e)
//    {
//      e.printStackTrace();
//    }
    
    
//    Connection conn = DBConnection.getConnection();
//    Statement stmt = null;
//    try
//    {
//      stmt = conn.createStatement();
//      String sql = "insert into Auditing_history values('PDF审核评估状态数据分析报告','" + dateString + "')";
//      int i = stmt.executeUpdate(sql);
//      if (i > 0) {
//        response.getWriter().print(dateString);
//      } else {
//        response.getWriter().print("error");
//      }
//      stmt.close();
//      conn.close();
//    }
//    catch (SQLException e1)
//    {
//      e1.printStackTrace();
//    }
  }
  
  public void init()
    throws ServletException
  {}
}
