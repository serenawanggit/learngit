<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>评估管理</title>
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/zenith/staticPage/css/home_1.css"/>
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
    <script type="text/javascript" src="<%=basePath%>js/SpecialtyManage/SpecialtyManageMain.js"></script>
   <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
   
    <script type="text/javascript">
          $(function(){
          
  			var cookie = document.cookie;
		if(cookie && cookie != ""){
			var cookies = cookie.split(";");
			for(var i = 0 ; i < cookies.length; i++){
  			var index = cookies[i].indexOf("=");
  			var cookiename = cookies[i].substring(0,index);
  			if(cookiename.trim() == "uvocookie"){
  				var value = cookies[i].substring(index+1,cookies[i].length);
  				var array = value.split("&");
/* 		  				
	  			var url = getDlyzPath() + "/login?name=" + array[1] + "&password="+array[2]; */
	  		/* 	$.getJSON(url,function(data){ */
	  				$("#showname").text(array[1]);	
	  	/* 		}); */
			}
			}
		}else{
			window.location.href='/logout';
		}
  		});
    </script>
    
    </head>
  
  <body>
   <!-- 弹出层  -->
  <div id="mask" class="mask"></div>
  <div class="sp_box">1212</div>
    <div id="div1">
    	<div id="left">
    		<div id="upper">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div style="margin-top: 5px;">评估管理</div>
    		</div>
    		<div id="middle">
    			<span style="line-height: ">基础数据</span>
    		</div>
    		<div id="down" style="background:#393a3a">
    			<div class="dropdown tendina">
    			  <li class="li1 mySelect" onclick="showpage(this,1)" type="" id="dxsz">
    			      <a id="deepest1" style="color: white;font-size: 14px;font-family: 'Microsoft YaHei';padding-left: 30px;font-weight: bold;cursor: pointer;" >专业设置</a>
    			  </li>
    			   <li class="li1" onclick="showpage(this,2)" type="" id="pgsjsz">
    			      <a id="deepest2" style="color: white;font-size: 14px;font-family: 'Microsoft YaHei';padding-left: 30px;font-weight: bold;cursor: pointer;" >评估时间设置</a>
    			  </li>
    			  <li class="li1" onclick="showpage(this,3)" type="" id="pgrysz">
    			      <a id="deepest3" style="color: white;font-size: 14px;font-family: 'Microsoft YaHei';padding-left: 30px;font-weight: bold;cursor: pointer;" >评估人员设置</a>
    			  </li>
    			</div>
    		</div>
    	</div>
    	<div id="right">
    		<div id="top">
    			<div id="left1">
    				<div>
    					<ul id="tab">
    						<li><div onclick="clickTab(1)" style="font-size:14px;cursor: pointer;">学院数据</div></li>
    						<li><div onclick="clickTab(2)" style="font-size:14px;cursor: pointer;">课程数据</div></li>
    						<li><div onclick="clickTab(3)" style="font-size:14px;cursor: pointer;">专业数据</div></li>
    						</ul>
    				</div>
    			</div>
    			<div id="right1">
    				<div>
    					<ul id="tab2">
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/exit.png" style="cursor: pointer;" onclick="tuichu()"></div></li>
<%--     						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/refresh.png" style="cursor: pointer;"></div></li> 
 --%>    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/back.png" style="cursor: pointer;"  onclick="gogo()"></div></li>
    						<li><div><a href="/audit/page/guanliyuan/staticPage/home_1.jsp"><img title="管理员评估" src="<%=basePath%>page/zenith/staticPage/img/guanliyuanAssess.png" /></a></div></li>
    						<li><div onclick="javascript:updatePassword()"><span id="showname" style="color:white;cursor:pointer">xxx</span></div></li>
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img></div></li>
    					</ul>
    				</div>
    			</div>
    		</div>
    		<div id="main">
  				<iframe id="tempIframe" frameborder="0" scrolling="auto" name="hello" src=""></iframe>
    		</div>
    	</div>
    </div>
    <!-- 密码维护 -->
	<div id="pwdManageDiv" style="">
		<div class="row1">
			密码维护<a href="javascript:closePswd();" title="关闭窗口" class="close_btn"
				id="closeBtn" style="text-decoration:none;">×</a>
		</div>
		<div class="office" align="center">
			<table class="tab" id="table" align="center"
				style="margin-top: 20px;width:100%">
				<tr>
					<td style="width: 30%;text-align: right;">输入原密码(<font
						class="font-style">*</font>):</td>
					<td><input type="password" name="oldPassword" id="oldPassword"
						maxlength="16" Class="txt" /></td>
				</tr>
				<tr style="height: 80px;">
					<td style="width: 30%;text-align: right;">输入新密码(<span
						class="req">*</span>):</td>
					<td><input style="margin-top: 15px;" type="password"
						name="newPassword" id="newPassword" maxlength="16" Class="txt"
						onkeyup="nkeyup();" onfocus="nfocus();" /> <br /> <span>由6-16位，由字母（区分大小写）、数字、符号组成</span>
					</td>
				</tr>

				<tr>
					<td style="width: 30%;text-align: right;">密码强度:</td>
					<td>
						<div class="ywz_zhuce_huixian" id='pwdLevel_1'></div>
						<div class="ywz_zhuce_huixian" id='pwdLevel_2'></div>
						<div class="ywz_zhuce_huixian" id='pwdLevel_3'></div> <br />
						<div class="ywz_zhuce_hongxianwenzi">弱</div>
						<div class="ywz_zhuce_hongxianwenzi">中</div>
						<div class="ywz_zhuce_hongxianwenzi">强</div></td>
				</tr>

				<tr style="height: 60px;">
					<td style="width: 30%;text-align: right;">确认新密码(<span
						class="req">*</span>):</td>
					<td><input type="password" name="renewPassword"
						id="renewPassword" maxlength="16" Class="txt" /></td>
				</tr>
				<tr>
					<td colspan="2" align="center" style="padding-top: 20px;"><input
						type="button" value="保存" class="bt" onclick="passwordWH();" />&nbsp;&nbsp;
						<input type="button" value="取消" class="bt" onclick="closePswd();" />
					</td>
				</tr>
			</table>
		</div>
	</div>
	</div>
  </body>
</html>
