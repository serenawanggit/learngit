<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>学院管理</title>
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>css/SpecialtyManage/SpecialtyInstall.css"/>
	
 	<link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" /> 
	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/core/base.js" type="text/javascript"></script>
	<link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
	<script type="text/javascript" src="<%=basePath%>js/ligerui/lib/json2.js"></script>
  	<script type="text/javascript" src="<%=basePath%>js/SpecialtyManage/SpecialtyInstall.js"></script>
 <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
 
  </head>
  <body>
   <div class="title_zy"> <p style="margin-left: 12px;color:white;font-family: 'Microsoft YaHei';font-size: 15px">学院设置</p></div>
     <div class="top_zy">
     <div style="margin-left: 30px">
          
           <span>
              <ul  class="top_ul_zy">
                 <li style="padding-top: 5px;padding-right:5px"> <span style="font-size: 14px;">学院名称  :</span></li>
                 <li><input type="text" style="width:200px;height:31.5px" id="searchvalue"/></li>
                 <li> <img src="<%=basePath%>images/zypg/sousuo.png" style="cursor: pointer;" onclick="searchstart()"></img></li>
              </ul>
           </span>
           <span style="float: right;margin-right: 15px">
              <img src="<%=basePath%>images/zypg/addb1.png" style="cursor: pointer;" onclick="addspecialty()"></img>
           </span>
      </div>
     </div>
       <div class="down_zy" id="datatable" style="width:98%">
           
       </div>
  </body>
</html>
