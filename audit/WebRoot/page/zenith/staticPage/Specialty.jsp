<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>教学评估</title>
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/zenith/staticPage/css/home_1.css"/>
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	<script type="text/javascript">
	validateLogin();
	function logout(){
	window.location.href="/logout";
}
$(function(){
	var cookie = getCookie("uvocookie");
	var cookies = cookie.split("&");
	var userId = cookies[0];
$.ajax({
	url:'/audit/asAssessReport/getCookie.do',
	type:'POST',
	data:{
	id:userId
	},
	dataType:'json',
	async:false,
	success:function(data){
	var datas = eval("("+data+")")
	$("#showNames").html(datas[0].showname);
	}
})
    	

})
function getCookie(cookie_name){
	var allcookies = document.cookie;
	var cookie_pos = allcookies.indexOf(cookie_name); //索引的长度  
	// 如果找到了索引，就代表cookie存在，  
	// 反之，就说明不存在。  
	if (cookie_pos != -1){
		// 把cookie_pos放在值的开始，只要给值加1即可。  
		cookie_pos += cookie_name.length + 1; 
		var cookie_end = allcookies.indexOf(";", cookie_pos);
		if (cookie_end == -1)
		{
			cookie_end = allcookies.length;
		}
		var value = unescape(allcookies.substring(cookie_pos, cookie_end)); 
	}
	return value;
} 
	
	function loadCourseOrCollege(){
		var zylxId = $("#zylxId").val();
		$.ajax({
			url: "/audit/asAssessReport/getAssessmentTypeById.do",
			type:'POST',
			async:false,
			data:{
				"id":zylxId
			},
			success:function(data){
				var datas = eval("("+data+")");
				if(datas=="学院评估"){
					$("#dynamic").html("学院评估");
				}else if(datas=="课程评估"){
					$("#dynamic").html("课程评估");
				}else{
					$("#dynamic").html("专业评估");
				}
			}
		})
	}
	
	</script>
  </head>
  
  <body onload="loadCourseOrCollege()">
  <input type="hidden" value="<%=request.getParameter("zylxId")%>" id='zylxId'/>
    <div id="div1">
    	<div id="left">
    		<div id="upper">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div id = "dynamic">学院评估</div>
    		</div>
    		<div id="middle" style="background-color:#3A3A3A">
    			<!-- <span id ="dataReport">教学状态</span> -->
    		</div>
    		<div id="down">
    			<div id="content" class="dropdown">
    			</div>
    		</div>
    	</div>
    	<div id="right">
    		<div id="top">
    			<div id="left1">
    				<div>
    					<!-- <ul id="tab">
    						<li><div onclick="clickTab(0)" style="cursor:pointer">专业评估整改落实</div></li>
    						<li><div onclick="clickTab(1)" style="cursor:pointer">本科专业建设质量报告</div></li>
    						<li><div onclick="clickTab(2)" style="cursor:pointer">专业整改计划</div></li>
    						<li><div onclick="clickTab(3)"style="cursor:pointer">历史记录</div></li>
    					</ul> -->
    				</div>
    			</div>
    			<div id="right1">
    				<div>
    					<ul id="tab2">
    					<li><div><a href="javascript:void(0)" onclick="logout()" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/exit.png"></a></div></li>
    					<li><div><a href="/audit/page/zenith/newMaink.jsp"><img src="<%=basePath%>page/zenith/staticPage/img/back.png"></a></div></li>
    					<li><div><a href="javascript:void(0)" onclick="javascript:location.reload()" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/refresh.png"></a></div></li>
    					<li><div ><span id="showNames" style="color:white;line-height:25px;"></span></div></li>
    					<li><div><img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img></div></li>
    						<%-- <li><div><img src="<%=basePath%>page/zenith/staticPage/img/problem.png"></div></li> --%>
    						
    					</ul>
    				</div>
    			</div>
    		</div>
    		<div id="main">
  				<iframe id="tempIframe" frameborder="0" scrolling="auto" name="hello" src="<%=basePath%>page/zenith/staticPage/Specialty_1.jsp?zylxId=<%=request.getParameter("zylxId")%>"></iframe>
    		</div>
    	</div>
    </div>
  </body>
</html>
