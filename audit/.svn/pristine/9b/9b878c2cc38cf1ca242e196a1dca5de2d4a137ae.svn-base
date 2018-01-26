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

<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_0.css">
	
<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript" src="js/jquery.form.js" ></script>	
<script type="text/javascript" src="js/jquery.form.min.js" ></script>	

  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
  <script type="text/javascript">
validateLogin();
</script>
</head>

<body>
<input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>

	<div style='border:1px soid  red;margin: 10px 100px 0px 10px; height: 70%;'>
   	<span style="margin-left:3%;">年份：</span><select id = "rYear" onclick="init()"></select>
   		<table id="table" border="1" cellpadding="2" cellspacing="0.5" style="margin: 10 auto;" width="950" bordercolor="#DADADA">
   		
   			<!-- <tr>
				<td align="center">报告名称</td>   				
				<td align="center">学院名称</td>   				
				<td align="center">专业名称</td>   				
				<td align="center">专业负责人</td>   				
				<td align="center"><a href="javascript:void(0)">下载</a></td>   				
   			</tr> -->
   		</table>
	</div>
</body>

<script type="text/javascript">

function initTime(){
$("#rYear").html("");
	var date = new Date();
			for(var i = 2013;i<=date.getFullYear()+1;i++){
			if(i!=date.getFullYear()){
			$("#rYear").append("<option value='"+i+"'>"+i+"</option>");
			}else{
			$("#rYear").append("<option value='"+i+"' selected>"+i+"</option>");
			}
			}
}
	function init(){
	
	$("#table").html("");
	var str=""; 
		str+=	"<thead><tr><td align='center' style='background:#DCDBDB'>专业名称</td> "+  
					"<td align='center' style='background:#DCDBDB'>报告名称</td>"+   				
					"<td align='center' style='background:#DCDBDB'>专业负责人</td	> "+  				
					"<td align='center' style='background:#DCDBDB'>操作</td></tr></thead>";
		$.ajax({
			   type: "POST",
			   url: "/audit/AssessmentSpecialtyInfoGuanliyuanController/selectZgList.do",
			   data: {"syear":$("#rYear").val()},
			   dataType:"json",
			   success: function(data){
			   		
			   		$(data).each(function (k, v){
				   		if(v.fileName==undefined){
				   			v.fileName="";
				   		}
				   		if(v.oName==undefined){
				   			v.oName="";
				   		}
				   		if(v.sp_name==undefined){
				   			v.sp_name="";
				   		}
				   		if(v.showname==undefined){
				   			v.showname="";
				   		}
				   		
				   	
			   			if(k%2==0){
			   				str+="<tr style='background:#F9F9F9' onmouseover='onHover(this)' onmouseout='outHover(this)'>"+
			   				"<td align='center'>"+v.sp_name+"</td> "  	+
									"<td align='center'>"+v.fileName+"</td> " ;				
									/* "<td align='center'>"+v.oName+"</td> "  +	 */			
										
									if(v.fileName!=undefined&&v.fileName!=""){
										str+="<td align='center'>"+v.showname+"</td> ";
										str+="<td align='center'><a title='下载' href='javascript:down("+v.zgId+")''><img src='/audit/page/zenith/staticPage/img/download.png' /></a></td>   ";		
									}else{
										str+="<td align='center'></td> <td align='center'></td>   "
									}
				   			str+=	"</tr>";
			   			}else{
			   				str+="<tr style='background:#FFFFFF' onmouseover='onHover(this)' onmouseout='outHover(this)'>"+
									"<td align='center'>"+v.sp_name+"</td> "  	+		
									"<td align='center'>"+v.fileName+"</td> " ;				
								/* 	"<td align='center'>"+v.oName+"</td> "  + */				
										
									if(v.fileName!=undefined&&v.fileName!=''){
										str+="<td align='center'>"+v.showname+"</td> ";	
										str+="<td align='center'><a title='下载' href='javascript:down("+v.zgId+")''><img src='/audit/page/zenith/staticPage/img/download.png' /></a></td>   ";		
									}else{
										str+="<td align='center'></td> <td align='center'></td>   "
									}
				   			str+=	"</tr>";
			   			}
			   		});	
					$("#table").append(str);
			   }
			}); 
 			
	}
	initTime();
	init();
	
	function down(id){
		location.href="/audit/asAssessAnalysis/downRecPlan.do?uid="+id;
	}
	var oldBackground;
	function  onHover(obj){
		oldBackground=$(obj).css("background");
		$(obj).css("background","#d2c6c6");
	}
	function outHover(obj){
		$(obj).css("background",oldBackground);
	}
</script>
</html>
