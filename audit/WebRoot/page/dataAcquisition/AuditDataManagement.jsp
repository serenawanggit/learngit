<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title></title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
    <link rel="stylesheet" href="<%=basePath %>/css/makeupData.css" type="text/css"></link>
    <script type="text/javascript" src="<%=basePath %>/js/json2.js"></script>
    <script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
    <script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/AuditDataManagement.js"></script>
    <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
  </head>
  <style type="text/css">
			body, html{width: 100%;height: 98%;margin:0;border:none;
			background-repeat:repeat-x;font-size:12px;
			font-family:Arial, Helvetica, sans-serif;
			background:url(<%=basePath %>/images/centerbk.png);
			   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
			   -moz-background-size:100% 100%;
			}
			.hr1{ height:1px;border:none;border-top:1px solid #DADADA;}
			.tb_thead tr td{white-space: nowrap;}
			
    </style>
  <body>
           <table style='width:98%;margin:12px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
			<tr>
				  <td style='height:40px;' align='left'>
				    <span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
				      <span  style='display:inline-block;height:28px;line-height:28px;'>已审核数据管理 &nbsp;&nbsp;>></span> 
				      </span>
				    </span>
				    
				    </td>
<%-- 				   <td style='height:40px;' align='right'>
				      <span style='color:#FFF;display:inline-block;width:75px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
				      <span  style='display:inline-block;height:28px;line-height:28px;' onclick="">删除</span>
				      </span>
				    </span>
				    	
				     <span style='color:#FFF;display:inline-block;width:75px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
				      <span  style='display:inline-block;height:28px;line-height:28px;' onclick="" >审核通过<input type="text" value="" id="passState" style="display: none;"/></span>
				      </span>
				    </span>
				   </td> --%>
			</tr>
		<tr><td colspan="2"><hr class="hr1"></td></tr>
		
		<tr>
		  <td colspan="2" style="height: 40px;">
			<select id="flag"  style="height: 25px;">
				<option value="SJBM">数据表名</option>
				<option value="CJBM">采集部门</option>
				<option value="CJR">采集人</option>
				<option value="RWMC">任务名称</option>
			</select>
			<input type="text" value="" id="param" style="height: 25px; "/>
			<input type="button" onclick="showDataManagement()" value="搜索" style="background-color: #568E59;height: 25px;border: 0px;color: #FFF;"/>
		</tr>
	</table>
	
	<div class="maindiv">
	     <table style="font-size:12px;width:100%; border:#DADADA 1px solid;" cellpadding="0" cellspacing="0" id="shztsjbshow">
				<thead>
					<tr style="background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;height:40px;">
						<td style="width:200px;height:30px;" align="center">状态库数据表</td>
						<td style="width:200px;height:30px;" align="center">数据采集单位</td>
						<td style="width:200px;height:30px;" align="center">数据采集人</td>
						<td style="width:200px;height:30px;" align="center">所属任务</td>
						<td style="width:200px;height:30px;" align="center">审核状态</td>
						<td style="width:100px;height:30px;" align="center">操作</td>
					</tr>
				</thead>
				<tbody id="dataTable"> 
				</tbody>
		 </table>
	</div>
	
	<table style='width:100%; cellpadding='0' id="pageTb">
		<tbody>
			<tr>
				<td align='left'>
				<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
				</td>
				<td align='right'>
				<span style='display:inline-block;margin-right:40px;'>
				
				<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
					src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'
						onmouseover="this.src='/audit/images/pgicon-first.png;'"
						onmouseout="this.src='/audit/images/pgicon-first_press.png;'">
				<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
					src='/audit/images/pgicon-pre_press.png'
						style='vertical-align:middle;margin-left:5px;'
						onmouseover="this.src='/audit/images/pgicon-pre.png;'"
						onmouseout="this.src='/audit/images/pgicon-pre_press.png;'">
				<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/1页</span>
				<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
						src='/audit/images/pgicon-next_press.png'
						style='vertical-align:middle;margin-left:5px;'
						onmouseover="this.src='/audit/images/pgicon-next.png;'"
						onmouseout="this.src='/audit/images/pgicon-next_press.png;'">
				<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
				line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
				<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
						src='/audit/images/pgicon-last_press.png'
						style='vertical-align:middle;margin-left:5px;'
						onmouseover="this.src='/audit/images/pgicon-last.png'"
						onmouseout="this.src='/audit/images/pgicon-last_press.png'">
				</span>
				</td>
			</tr>
		</tbody>
	</table>
	
	   <div id="divc" style="margin:0;padding:0;border:none;width:100%;height:100%;background:#333;opacity:0.6;filter:alpha(opacity=60);z-index:99;position:fixed;top:0;left:0;display: none"></div>
       <!-- 弹出的内容 -->
        <div id="divclose" style="background-color:#4C8AC4;height:6%;width:85%;z-index: 100;position: absolute; top: 4%;left:8%;display: none;">
               <img border="0" style="vertical-align:middle;float: right;" src="<%=basePath%>/images/alertimg/alertclose.png " onclick="hidebutton()"></img>
        </div>
       <div id="divcontent" style="background-color:white;height:80%;width:85%;z-index: 100;position: absolute; top: 10%;left:8%;display: none;overflow-x:auto;">
           <div style="padding: 5px 5px 5px 5px">
             <input type="hidden" id="rwid"/>
             <table style="font-size:12px;width:100%; border:#DADADA 1px solid;" cellpadding="0" cellspacing="0" id="content">
                      <thead id="tb_thead" class="tb_thead">
                          <tr></tr>
                      </thead>
                      <tbody id="tb_tbody">
                         <tr>
                         </tr>
                      </tbody>
             </table>
           </div>
           <div><span id="zs" style="margin-left: 10px;color:green;font-size: 14px;"></span></div>
             <div style="margin-left: 50%"><input type="button" value="下载" onclick="exportPassExcel();" id="subbutton"/> <input type="button" id="hidebutton" value="取消" onclick="hidebutton()"/> </div>
               <input type="text" style="display: none;" value="" id="cname"/>
               <input type="text" style="display: none;" value="" id="cjmbdm"/>
       </div>
       
       <form action="" id="exportform" method="post" >
			<input type="hidden" readonly="readonly" id="rwid" value=""/> 
			<input type="hidden" readonly="readonly" id="cjmbdm" value=""/> 
		</form>
  </body>
</html>
