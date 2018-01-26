<%@ page contentType="text/html; charset=utf-8" import="java.net.*,java.util.*,java.io.*"  %>
<%
 String fileName="";
 String filePath = "";
 String fileInfo = "";
 String fileType = "";
 BufferedInputStream bis = null;
 BufferedOutputStream bos = null;
 fileInfo = request.getParameter("fileInfo");
 fileName="现场考察报告.html";  
//注意这里一般都用URLEncoder的encode方法进行对文件名进行编码  
String enFileName = URLEncoder.encode(fileName, "utf-8"); 
 response.setContentType("application/octet-stream; charset=utf-8");
 response.setHeader("Content-disposition","attachment; filename="+enFileName);
 try {
  filePath = request.getSession().getServletContext().getRealPath("/");
  filePath += "/page/majorEvaluation/";
  bis = new BufferedInputStream(new FileInputStream(filePath + fileName));
  bos = new BufferedOutputStream(response.getOutputStream());
  int bytesRead; 
  bos.write(fileInfo.getBytes("utf-8"));
  bos.flush();
 }finally {
  if (bis != null)
  bis.close();
  if (bos != null)
  bos.close();
  
  out.clear();
  out = pageContext.pushBody();
 }
%>
<html>
<head>
<title></title>
</head>
<body>
</body>
</html>