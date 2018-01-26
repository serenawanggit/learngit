<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>评估时间设置</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  		<script src="<%=basePath%>js/ligerui/lib/jquery/jquery-1.9.0.min.js" type="text/javascript"></script>
 	<link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" /> 
	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/core/base.js" type="text/javascript"></script>
	  <link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
	<script type="text/javascript" src="<%=basePath%>js/ligerui/lib/json2.js"></script>


  <link rel="stylesheet" href="<%=basePath%>/css/SpecialtyManage/installDataAndSpecialty.css" type="text/css"></link>
  <script type="text/javascript" src="<%=basePath%>js/SpecialtyManage/installDataAndSpecialty.js"></script>
  <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>

  </head>
  <body style="height:88%">
     <div class="title_zy">
         <p style="margin-top: 7px;margin-left: 12px;color:white;font-family: 'Microsoft YaHei';font-size: 15px">评估时间设置</p>
     </div>
     
     
     
     <div class="top_zy1" id="top_zy_1">
     <div style="margin-left: 30px">
          
           <span>
              <ul  class="top_ul_zy">
                 <li style="padding-top: 5px;padding-right:5px"> <span style="font-size: 14px;">学院名称  :</span></li>
                 <li><input type="text" style="width:200px;height:31.5px" id="searchvalue"/></li>
                 <li> <img src="/audit/images/zypg/sousuo.png" style="cursor: pointer;" onclick="searchstart()"></img></li>
              </ul>
           </span>
           <span style="float: right;margin-right: 15px">
              <img src="/audit/images/zypg/adddate.png" style="cursor: pointer;" onclick="addDateForSpecialty()"></img>
           </span>
      </div>
     </div>
       <div class="down_zy" id="datetable" style="width:98%">
           
       </div>
     
     
      <div class="top_zy" id="top_zy_2" style="display: none">
     <div style=""  class="top_date">
         <!--      <ul  class="top_ul_zy">
                 <li style="padding-top: 5px;padding-right:5px"> <span style="font-size: 14px;">年度  :</span></li>
                 <li><input type="text" style="width:200px;height:31.5px" id="searchvalue"/></li>
                 <li> <img src="/audit/images/zypg/sousuo.png" style="cursor: pointer;" onclick="gouback()"></img></li>
              </ul> -->
             <!--       <ul style="width:80%">
                    <li>年份 :<input type="text"> <input type="text" style="border:0px;background-color: white;" disabled="true"></li>
                    <li>自评时间 : <input type="text" class="initDate"><input type="text" class="initDate"></li>
                    <li>网评时间 :<input type="text" class="initDate"><input type="text" class="initDate"></li>
                    <li>现场考察时间 :<input type="text" class="initDate"><input type="text" class="initDate"></li>
                 </ul> -->
                 
                   <table class="dateDiv_table"  style="margin-top: 11px;width:53%">
                       <tr  style="margin-top: 5px;"><td style="text-align:right;font-size: 14px;">年份 :</td><td style="text-align:right;font-size: 14px;"></td><td><select style="width:131px" id="syear"><option>2015</option><option>2016</option><option>2017</option><option>2018</option><option>2019</option></select></td></tr>
                      <tr style="margin-top: 5px;"><td style="text-align:right;font-size: 14px;">自评时间 :</td><td style="text-align:right;font-size: 14px;">开始时间:</td><td ><input type="text" id="f112"/></td><td style="text-align:right;font-size: 14px;">结束时间:</td><td><input type="text" id="f113"/></td></tr>
                      <tr style="margin-top: 5px;"><td style="text-align:right;font-size: 14px;">网评时间 :</td><td style="text-align:right;font-size: 14px;">开始时间:</td><td><input type="text"  id="f114" /></td><td style="text-align:right;font-size: 14px;">结束时间:</td><td><input type="text"  id="f115"/></td></tr>
                      <tr style="margin-top: 5px;	"><td style="text-align:right;font-size: 14px;">现场考查时间 :</td><td style="text-align:right;font-size: 14px;">开始时间:</td><td><input type="text"  id="f116" /></td><td style="text-align:right;font-size: 14px;">结束时间:</td><td><input type="text"  id="f117"/></td></tr>
                 </table>
                 
           <span style="margin-top: 4.5%;width:9%">
               <li style="padding-top: 5%;padding-left: 29%;">  
                     <img src="<%=basePath%>images/zypg/save.png" style="cursor: pointer;" onclick="confirmAdd()"></img>
                     <img src="<%=basePath%>images/zypg/goback.png" style="cursor: pointer;" onclick="gouback()"></img>
               </li>
           </span>
      </div>
     </div>
       <div class="down_zy" id="datetable2" style="width:97%;display: none">
             <div class="down_zy_left" style="text-align: center;">
                <!--  <table>
                     <tr style="width:100px;border:1px solid red;text-align: center;font-size: 14px;margin-left: 10px;height:25px">
                       <td >专业名称</td><td style="width:50px">专业代码</td>
                     </tr>
                 </table> -->

			<div id="divcontent"
				style="background-color:white;height:99%;width:100%; top: 10%;left:8%;overflow-x:auto;">
				<div style="padding: 5px 5px 5px 5px">
					<table style="font-size:12px;width:100%; border:#23C6C8 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
							<tr
								style='background-color:#23C6C8;color:white;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>学院名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>学院代码</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>学院类型</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>操作</td>
							</tr>
						</thead>
						<tbody id="tb_tbody1">
							<tr>
								<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>学院名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>学院代码</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>学科类型</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'><img id="add" src="<%=basePath%>images/zypg/add.png" style="cursor:pointer;margin-right: 5px"></img><img id="yadd" src="<%=basePath%>images/zypg/yadd.png" style="cursor:pointer;display: none;"></img></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="down_zy_right">
			<div id="divcontent"
				style="background-color:white;height:80%;width:100%; top: 10%;left:8%;overflow-x:auto;">
				<div style="padding: 5px 5px 5px 5px">
					<table style="font-size:12px;width:100%; border:#F8AC59 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
							<tr
								style='background-color:#F8AC59;color:white;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>学院名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>学院代码</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>操作</td>
							</tr>
						</thead>
						<tbody id="tb_tbody2">
							<%-- <tr>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业代码</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'><img src="<%=basePath%>images/zypg/delete.png" style="cursor:pointer;"></img></td>
							</tr> --%>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
   <!--   <div  class="down_zy">
           <div  class="down_zy_left">
           <div class="dateDiv" >
                 
           </div>
           </div>
           <div  class="down_zy_right">
           
            
           </div>
     </div> -->
  </body>
</html>
