<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>专业评估</title>
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/xueyuan/staticPage/css/home_1.css"/>
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/xueyuan/staticPage/js/home_1.js"></script>
	
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
  
  <script type="text/javascript">
		validateLogin();
		function logout(){
			window.location.href="/logout";
		}
		window.onload=function(){ 
		
			$("#gogo").attr("href","/audit/page/zenith/staticPage/Specialty.jsp?zylxId="+$("#zylxId").val())+"&date="+date;
			//$.ajax({
				//url: "/audit/AssessmentSpecialtyInfoXueYuanController/findUserInfo.do",
				//async:false,
				////type:'POST',
				//data:{
			//	},
			//	dataType:'json',
			//	success:function(data){
				//	$("#nameUser").html(data.showname);
			//	}
			//});
			
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
			});	
		};
	</script>
  
  </head>
  
  <body>
  <input type="hidden" value="<%=request.getParameter("specialtyId")%>" id='specialtyId'/>
  <input type="hidden" value="<%=request.getParameter("dateYear")%>" id='dateYear'/>
  <input type="hidden" value="<%=request.getParameter("zg_task_id")%>" id='zg_task_id'/>
  <input type="hidden" value="<%=request.getParameter("zy_task_id")%>" id='zy_task_id'/>
   <input type="hidden" value="<%=request.getParameter("ispass")%>" id='ispass'/>
   <input type="hidden" value="<%=request.getParameter("date")%>" id='date'/>
   <input type="hidden" value="<%=request.getParameter("zylxId")%>" id='zylxId'/>
   <div id="div1">
    	<div id="left">
    		<div id="upper">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div id = "dynamic">学院审核</div>
    		</div>
    		<div id="middle">
    			<span id ="dataReport">教学状态</span>
    		</div>
    		<div id="down">
    			<div id="content" class="dropdown" style="background-color: black;">
    			</div>
    		</div>
    	</div>
    	<div id="right">
    		<div id="top">
    			<div id="left1">
    				<div>
    					<ul id="tab">
    						<!-- <li><div onclick="clickTab(0)" style="cursor:pointer">整改报告</div></li> -->
    						<li><div onclick="clickTab(1)" style="cursor:pointer">专业质量报告</div></li>
    						<!-- <li><div onclick="clickTab(2)" style="cursor:pointer">专业整改计划</div></li> -->
    					</ul>
    				</div>
    			</div>
    			<div id="right1">
    				<div  style="margin-left:-20px;">
    					<ul id="tab2">
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img></div></li>
    						<li><div><span id="showUserName" style="color:white;line-height:25px"></span></div></li>
    						<li><div><a href="javascript:void(0)" onclick="javascript:location.reload()" style="cursor:pointer"><img alt="刷新" src="<%=basePath%>page/zenith/staticPage/img/refresh.png"></a></div></li>
    						<li><div><a id="gogo" href="/audit/page/zenith/staticPage/Specialty.jsp" style="cursor:pointer"><img alt="返回列表" src="<%=basePath%>page/zenith/staticPage/img/back.png"></a></div></li>
    						<%-- <li><div><img src="<%=basePath%>page/zenith/staticPage/img/problem.png"></div></li> --%>
    						<li><div><a href="javascript:void(0)" onclick="logout();" style="cursor:pointer"><img alt="注销" src="<%=basePath%>page/zenith/staticPage/img/exit.png"></a></div></li>
    					</ul>
    				</div>
    			</div>
    		</div>
    		<div id="main">
  				<iframe id="tempIframe" frameborder="0" scrolling="auto" name="hello" src="<%=basePath%>page/zenith/staticPage/page_0.jsp"></iframe>
    		</div>
    	</div>
    </div>
  </body>
</html>