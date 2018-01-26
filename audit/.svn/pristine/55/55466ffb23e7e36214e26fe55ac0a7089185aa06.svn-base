<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>教学评估报告</title>
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/guanliyuan/staticPage/css/home_1.css"/>
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/guanliyuan/staticPage/js/home_1.js"></script>
	<script type="text/javascript" src="/audit/commonjs/common1.js"></script>
	<script type="text/javascript">
		function blackPre(){
			//if($("#cid").val() == 9){
				location.href="/audit/page/zenith/Main.jsp?cid=8";
			/* }else{
			location.href="/audit/page/SpecialtyManage/SpecialtyManageMain.jsp";
			} */
		}
	</script>
	
	<script type="text/javascript">
		$(function(){  //zylxId
			getCollegerOrCourse();
		
			function getCollegerOrCourse(){
				var zylxId = getQueryString("zylxId");
				$.ajax({
					url:"/audit/asAssessReport/getAssessmentTypeById.do",
					type:'POST',
					async:false,
					data:{
						"id":zylxId
					},
					success:function(data){
						var datas = eval("("+data+")");
						if(datas.trim()=="学院评估"){
							$("#dynamic").html("学院评估");
							$("#QualityReport").html("学院质量报告");
						}else if(datas.trim()=="课程评估"){
							$("#dynamic").html("课程评估");
							$("#QualityReport").html("课程质量报告");
							$("#dataReport").html("课程质量报告");
						}else{
							$("#dynamic").html("专业评估");
							$("#QualityReport").html("专业质量报告");
							$("#dataReport").html("专业质量报告");
						}
					}
				})
			}
		})
		
		function getQueryString(name) { 
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
			var r = window.location.search.substr(1).match(reg); 
			if (r != null) return unescape(r[2]); return null; 
		}
	</script>
  </head>
  
  <body>
  <!-- 弹出层  -->
  <div id="mask2" class="mask2"></div>
  <div class="sp_box"></div>
  <input type="hidden" value="<%=request.getParameter("specialtyId")%>" id='specialtyId'/>
  <input type="hidden" value="<%=request.getParameter("dateYear")%>" id='dateYear'/>
  <input type="hidden" value="<%=request.getParameter("zg_task_id")%>" id='zg_task_id'/>
  <input type="hidden" value="<%=request.getParameter("zy_task_id")%>" id='zy_task_id'/>
   <input type="hidden" value="<%=request.getParameter("ispass")%>" id='ispass'/>
    <input type="hidden" value="<%=request.getParameter("cid")%>" id='cid'/>
   <div id="div1">
    	<div id="left">
    		<div id="upper">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div id = "dynamic"></div>
    		</div>
    		<!-- <div id="middle">
    			<span id ="dataReport">教学状态</span>
    		</div> -->
    		<!-- <div id="down">
    			<div id="content" class="dropdown" style="background-color: #3A3A3A;">
    			</div>
    		</div> -->
    	</div>
    	<div id="right">
    		<div id="top">
    			<div id="left1">
    				<div style="margin-left:0px">
    					<ul id="tab">
<!--     						<li style=""><div onclick="clickTab(0)" style="cursor:pointer">整改报告</div></li>
 -->    						<li><div onclick="clickTab(0)" id="titltes" style="cursor:pointer">专业质量报告</div></li>
    		<!-- 				<li><div onclick="clickTab(2)" style="cursor:pointer">现场考查</div></li>
    						<li><div onclick="clickTab(3)" style="cursor:pointer">整改计划</div></li>
    						<li><div onclick="clickTab(4)" style="cursor:pointer">进度跟踪</div></li> -->
    					</ul>
    				</div>
    			</div>
    			<div id="right1">
    				<div>
    					<ul id="tab2">
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img></div></li>
    						<li><div onclick="javascript:updatePassword()"><span id="showUserName" style="color:white;line-height:25px;cursor:pointer"></span></div></li>
    						<li><div><a href="javascript:void(0)" onclick="javascript:location.reload()" style="cursor:pointer"><img alt="刷新" src="<%=basePath%>page/zenith/staticPage/img/refresh.png"></a></div></li>
    						<li><div><a href="javascript:void(0)" onclick="javascript:blackPre()" style="cursor:pointer"><img alt="返回列表" src="<%=basePath%>page/zenith/staticPage/img/back.png"></a></div></li>
    						<%-- <li><div><img src="<%=basePath%>page/zenith/staticPage/img/problem.png"></div></li> --%>
    						<li><div><a href="javascript:void(0)" onclick="logout();" style="cursor:pointer"><img alt="注销" src="<%=basePath%>page/zenith/staticPage/img/exit.png"></a></div></li>
    					</ul>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div id="main">
 			<iframe id="tempIframe" frameborder="0" scrolling="auto" name="hello" src="<%=basePath%>page/zenith/staticPage/page_0.jsp"></iframe>
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
  </body>
</html>
