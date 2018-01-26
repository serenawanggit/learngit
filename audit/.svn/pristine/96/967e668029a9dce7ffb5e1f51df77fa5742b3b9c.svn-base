<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title></title>
    
    
	<!-- <link rel="stylesheet" type="text/css" href="/audit/page/zenith/staticPage/css/page_num.css">
	<link rel="stylesheet" type="text/css" href="/audit/page/zenith/staticPage/css/page_0.css">
		<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
		<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css"> -->
	
	
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/xueyuan/staticPage/css/home_1.css"/>
	<link rel="stylesheet" type="text/css"
	href="<%=basePath%>page/lzrPopWindow/css/lzrwindow.css" />
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
	<script type="text/javascript"
	src="<%=basePath%>page/lzrPopWindow/js/lzrWindow.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/wangping/staticPage/js/zyzlbg.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/jquery.form.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/jquery.form.min.js"></script>
	
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
	<style type="text/css">
		#table1{border-collapse:collapse;border:none;width: 100%;}
		#table1 td{border:solid #BDBCBC 1px;height:30px;width: 10%;font-size:10px;text-align: center;}
		#table1 th{border:solid #BDBCBC 1px;height:30px;width:10%;border-color:#BDBCBC;font-size:15px;text-align: center;}
		.score table {border-collapse:collapse;border:none;width: 100%;}
		.score table td{font-weight: 600;color: #C12625;}
		#score table td{width: 100px; }
		.score{margin-left: 13px;}
		/* .score table td u{ text-decoration: underline;text-align: center;border-color: black;} */
		#top_table table td{font-size:13px; font-weight: bold;}
		#showCailiao a{text-decoration: none;font-weight: 600;color: blue;margin: 20px;}
		.main{width:100%;height: 30px;overflow:auto; margin: 15px;border:solid #138b8a 1px;}
		.cell {width:25%; float:left; height:100%;text-decoration: none;font-weight: 600;text-align: center;}
		.c:HOVER {cursor: pointer;/* background:#138b8a; */text-align: center;}
		.main a{text-decoration: none;color:#138b8a;font-size: 15px;}
		.lianghua table {border-collapse:collapse;border:none;width: 100%;text-align: center; }
		.lianghua table th{border:solid #BDBCBC 1px;height:40px;border-color:#BDBCBC;font-size:15px;text-align: center;}
		.lianghua table td{border:solid #BDBCBC 1px;height:40px;border-color:#BDBCBC;font-size:12px;font-weight: 600;color:#797979;text-align: center;}
		.midt  {border-collapse:collapse;border:none;width: 100%;}
	    .midt td{border:solid #BDBCBC 1px;height:40px;width: 10%;border-color:#BDBCBC;font-size:12px;text-align: center;}
	    .midt  th{border:solid #BDBCBC 1px;height:40px;width:10%;border-color:#BDBCBC;font-size:15px;text-align: center;}
	</style>
	
	<script type="text/javascript">
		validateLogin();
		function logout(){
			window.location.href="/logout";
		}
		
		
		window.onload=function(){  
			var request =GetRequest();
			var zylxId = request.zylxId;
			var specialtyId=request.specialtyId;
			
			var path = "/audit/page/wangping/staticPage/Specialty.jsp?zylxId="+zylxId;
			$("#blackPage").attr("href",path);
			
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
						$(document).attr("title","学院评估");//修改title值
						document.title="学院评估";
						$("#dynamic").html("学院评估");
						$("#dataReport").html("学院质量报告");
					}else if(datas=="课程评估"){
						$(document).attr("title","课程评估");//修改title值
						document.title="课程评估";
						$("#dynamic").html("课程评估");
						$("#dataReport").html("课程质量报告");
					}else{
						$(document).attr("title","专业评估");//修改title值
						document.title="专业评估";
						$("#dynamic").html("专业评估");
						$("#dataReport").html("专业质量报告");
						//$("#zjwp div").html("专业质量报告");
					}
				}
			});	
		};
		
		function GetRequest() { 
			var url = window.location.search; //获取url中"?"符后的字串 
			
			var theRequest = new Object(); 
			if (url.indexOf("?") != -1) { 
				var str = url.substr(1); 
				strs = str.split("&"); 
				for(var i = 0; i < strs.length; i ++) { 
					theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
				} 
			} 
			var name=decodeURI(theRequest.name);
			name=name.split("'");
			$("#text").html(name[1]);
			return theRequest; 
		}
	</script>
	
 </head>
  
  <body style="font-family:'Microsoft YaHei'">
  <input id="organizationName"  type="text" style="display:none"/>
   <input type="hidden" value="<%=request.getParameter("zylxId")%>" id='zylxId'/>
   <div id="div1">
    	<div id="left">
    		<div id="upper">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div id = "dynamic">专家网评</div>
    		</div>
    		<div id="middle">
    			<span id ="dataReport">专业质量报告</span>
    		</div>
    		<div id="down">
    			<div id="content" class="dropdown" style="background: #000000">
    			</div>
    		</div>
    	</div>
    	<div id="right">
    		<div id="top">
    			<div id="left1">
    				<div style="margin-top:-1px">
    					<ul id="tab" >
    						<!-- <li><div id="zgbg" onclick="jump(0)" style="cursor:pointer">专家网评</div></li> --><!-- onclick="javascript:location.reload()" --><!-- 专业质量报告 -->
    						<li id="zjwp"><div onclick="jump(1)" style="cursor:pointer;background-color: rgb(70, 163, 209);">专家网评</div></li>
    						<%--<li><div onclick="clickTab(2)" style="cursor:pointer">历史报告</div></li>
    					--%></ul>
    				</div>
    			</div>
    			<div id="right1">
    				<div>
    					<ul id="tab2"><!-- onclick="javascript:black()" -->
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img></div></li>
    						<li><div><span id="showUserName" style="color:white;line-height:25px"></span></div></li>
    						<li><div><a href="javascript:void(0)" onclick="javascript:location.reload()" style="cursor:pointer"><img title="刷新" src="<%=basePath%>page/zenith/staticPage/img/refresh.png"></a></div></li>
    						<li><div><a id="blackPage" href="/audit/page/wangping/staticPage/Specialty.jsp" style="cursor:pointer"><img title="返回列表" src="<%=basePath%>page/zenith/staticPage/img/back.png"></a></div></li>
    						<%-- <li><div><img src="<%=basePath%>page/zenith/staticPage/img/problem.png"></div></li> --%>
    						<li><div><a href="javascript:void(0)" onclick="logout();" style="cursor:pointer"><img title="注销" src="<%=basePath%>page/zenith/staticPage/img/exit.png"></a></div></li>
    					</ul>
    				</div>
    			</div>
    		</div>
    		<div id="contentAll2" style="left: 15%; width: 75%; height:85%; display:none; background:#fff; position: absolute; border: 3px solid rgba(113, 113, 113, 0.56)">
					<div style="height: 8%;background: #46A3D1;">
						<span id="title" style="height: 100%;margin-right:10px;line-height:34px;"></span>
   						<a href="javascript:closeWindow()" style="float: right;float: right;display: block;height: 100%;margin-right:10px;line-height:34px;"><img src="/audit/page/wangping/staticPage/img/closeWindow.png" /></a>
						<a href="javascript:download()" id="down1" style="float: right;float: right;display: none;height: 100%; margin-right:10px;line-height:34px;"><img src="/audit/page/wangping/staticPage/img/download_2.png" /></a>
    				</div>
    				<div id="c"></div>
			</div>
    		<div id="main" style="margin-right:10px">
    			<!-- ${pageContext.request.contextPath }/page/zenith/staticPage/page_4.jsp -->
  				<iframe id="tempIframe" frameborder="0" scrolling="auto" name="hello" src=""></iframe>
					
    		</div>
    </div>
    
    
    <form method="POST" id="myForm" action="/audit/AssessmentSpecialtyInfoWangPingController/downWordHtml.do">
    	<input id="speName" type="hidden" name="speName"/>
    	<input id="contentMold" type="hidden" name="contents"/>
    </form>
<!-- 工科  id 1-10-->    
<div class=WordSection1 style='display:none'id="GkModle">

	<p  style='margin-top:7.8pt;margin-right:0cm;
	margin-bottom:7.8pt;margin-left:0cm;text-align:center;
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:36.0pt;line-height:150%;font-family:黑体'>本科专业质量报告<span
	lang=EN-US><o:p></o:p></span></span></b></p>

	<p  style='text-align:center'><span lang=EN-US
	style='font-size:26.0pt'><o:p>&nbsp;</o:p></span></p>

	<p ><span lang=EN-US style='font-size:22.0pt'><o:p>&nbsp;</o:p></span></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学<span lang=EN-US><span
	style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>院：<span lang=EN-US id="Axueyuan">___________________<u><o:p></o:p></u></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>专<span lang=EN-US><span
	style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>业：<span lang=EN-US id="Azhuanye">___________________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>完成时间：<span lang=EN-US>___________________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>专业负责人：<span lang=EN-US>_________________</span></span></b><u><span
	lang=EN-US style='font-size:12.0pt;mso-bidi-font-size:10.0pt;line-height:150%'><o:p></o:p></span></u></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>联系电话：<span lang=EN-US>___________________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学院负责人签字：<span lang=EN-US>_____________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学院盖章：<span lang=EN-US>___________________<o:p></o:p></span></span></b></p>

	<p ><b style='mso-bidi-font-weight:normal'><span lang=EN-US
	style='font-size:14.0pt;font-family:黑体;mso-hansi-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></b></p>

	<p ><span lang=EN-US style='font-size:22.0pt'><o:p>&nbsp;</o:p></span></p>

	<p ><span lang=EN-US style='font-size:22.0pt'><o:p>&nbsp;</o:p></span></p>

	<p ><span lang=EN-US style='font-size:22.0pt'><o:p>&nbsp;</o:p></span></p>

	<b style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:14.0pt;
	line-height:150%;font-family:黑体;mso-hansi-font-family:Calibri;mso-bidi-font-family:
	"Times New Roman";mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;
	mso-bidi-language:AR-SA'><br clear=all style='page-break-before:always'>
	</span></b>
	<p id="4A" style='text-align:left;line-height:150%'><b
	style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt;line-height:
	150%;font-family:黑体;mso-hansi-font-family:Calibri'>一、</span></b><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>专业情况概要（<span lang=EN-US>600</span>字以内）<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="1A" style='text-align:left;line-height:150%' ><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>二、专业建设详情（学<a name="_GoBack"></a>年度内的目标、举措与成效，可以分成如下几个部分详细论述）<span
	lang=EN-US><o:p></o:p></span></span></p>

	<p id="2A" style='margin-top:7.8pt;margin-right:0cm; 
	margin-bottom:7.8pt;margin-left:0cm;text-align:left;
	line-height:150%'><span lang=EN-US style='font-size:14.0pt;line-height:150%;
	font-family:黑体;mso-hansi-font-family:"Times New Roman"'>1 </span><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学生<span lang=EN-US><o:p></o:p></span></span></p>


	<p id="3A" style='text-align:left;line-height:150%'><span
	lang=EN-US style='font-size:14.0pt;line-height:150%;font-family:黑体'>2 </span><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体'>培养目标<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="5A" style='text-align:left;line-height:150%'><span
	lang=EN-US style='font-size:14.0pt;line-height:150%;font-family:黑体'>3 </span><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体'>毕业要求<span lang=EN-US><o:p></o:p></span></span></p>


	<p id="6A" style='margin-left:.05pt;text-align:left;
	line-height:150%'><span lang=EN-US style='font-size:14.0pt;line-height:150%;
	font-family:黑体'>4 </span><span style='font-size:14.0pt;line-height:150%;
	font-family:黑体'>持续改进<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="7A" style='margin-top:7.8pt;
	text-align:left'><span lang=EN-US style='font-size:14.0pt;font-family:黑体'>5 </span><span
	style='font-size:14.0pt;font-family:黑体'>课程体系<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="8A" style='text-align:left;text-indent:0cm;
	mso-char-indent-count:0;line-height:150%'><span lang=EN-US style='font-size:
	14.0pt;line-height:150%;font-family:黑体'>6 </span><span style='font-size:14.0pt;
	line-height:150%;font-family:黑体'>师资队伍<span lang=EN-US><o:p></o:p></span></span></p>



	<p id="9A" style='text-align:left;text-indent:0cm;
	mso-char-indent-count:0;line-height:150%;tab-stops:9.0cm'><span lang=EN-US
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	Calibri'>7 </span><span style='font-size:14.0pt;line-height:150%;font-family:
	黑体;mso-hansi-font-family:Calibri'>支持条件<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="10A"  style='text-align:left;line-height:150%'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>三、专业建设存在的问题与改进方向<span lang=EN-US><o:p></o:p></span></span></p>

</div>
<!-- 非工科 id 11-20 -->    
<div class=WordSection1 style='display:none' id="FgkModle">

	<p class=MsoNormal align=center style='margin-top:7.8pt;margin-right:0cm;
	margin-bottom:7.8pt;margin-left:0cm;mso-para-margin-top:.5gd;mso-para-margin-right:
	0cm;mso-para-margin-bottom:.5gd;mso-para-margin-left:0cm;text-align:center;
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:36.0pt;line-height:150%;font-family:黑体'>本科专业质量报告<span
	lang=EN-US><o:p></o:p></span></span></b></p>


	<p class=MsoNormal align=center style='text-align:center'><span lang=EN-US
	style='font-size:26.0pt'><o:p>&nbsp;</o:p></span></p>

	<p class=MsoNormal><span lang=EN-US style='font-size:22.0pt'><o:p>&nbsp;</o:p></span></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学<span lang=EN-US><span
	style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>院：<span lang=EN-US id="Bxueyuan">___________________<u><o:p></o:p></u></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>专<span lang=EN-US><span
	style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>业：<span lang=EN-US id="Bzhuanye">___________________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>完成时间：<span lang=EN-US>___________________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>专业负责人：<span lang=EN-US>_________________</span></span></b><u><span
	lang=EN-US style='font-size:12.0pt;mso-bidi-font-size:10.0pt;line-height:150%'><o:p></o:p></span></u></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>联系电话：<span lang=EN-US>___________________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学院负责人签字：<span lang=EN-US>_____________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学院盖章：<span lang=EN-US>___________________<o:p></o:p></span></span></b></p>

	<p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span lang=EN-US
	style='font-size:14.0pt;font-family:黑体;mso-hansi-font-family:"Times New Roman"'><o:p>&nbsp;</o:p></span></b></p>

	<p class=MsoNormal><span lang=EN-US style='font-size:22.0pt'><o:p>&nbsp;</o:p></span></p>

	<p class=MsoNormal><span lang=EN-US style='font-size:22.0pt'><o:p>&nbsp;</o:p></span></p>

	<p class=MsoNormal><span lang=EN-US style='font-size:22.0pt'><o:p>&nbsp;</o:p></span></p>

	<b style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:14.0pt;
	line-height:150%;font-family:黑体;mso-hansi-font-family:Calibri;mso-bidi-font-family:
	"Times New Roman";mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;
	mso-bidi-language:AR-SA'><br clear=all style='page-break-before:always'>
	</span></b>

	<p id="11B" class=MsoNormal align=left style='text-align:left;line-height:150%'><b
	style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt;line-height:
	150%;font-family:黑体;mso-hansi-font-family:Calibri'>一、</span></b><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>专业情况概要（<span lang=EN-US>600</span>字以内）<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="12B" class=MsoNormal align=left style='text-align:left;line-height:150%'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>二、专业建设详情（学年度内的目标、举措与成效，可以分成如下几个部分详细论述）<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="13B" class=MsoNormal align=left style='margin-top:7.8pt;margin-right:0cm;
	margin-bottom:7.8pt;margin-left:0cm;mso-para-margin-top:.5gd;mso-para-margin-right:
	0cm;mso-para-margin-bottom:.5gd;mso-para-margin-left:0cm;text-align:left;
	line-height:150%'><span lang=EN-US style='font-size:14.0pt;line-height:150%;
	font-family:黑体;mso-hansi-font-family:"Times New Roman"'>1 </span><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>定位与目标<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="14B" class=MsoNormal align=left style='margin-top:7.8pt;margin-right:0cm;
	margin-bottom:7.8pt;margin-left:0cm;mso-para-margin-top:.5gd;mso-para-margin-right:
	0cm;mso-para-margin-bottom:.5gd;mso-para-margin-left:0cm;text-align:left;
	line-height:150%'><span lang=EN-US style='font-size:14.0pt;line-height:150%;
	font-family:黑体;mso-hansi-font-family:"Times New Roman"'>2 </span><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>教师队伍<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="15B" class=MsoNormal align=left style='margin-top:7.8pt;margin-right:0cm;
	margin-bottom:7.8pt;margin-left:0cm;mso-para-margin-top:.5gd;mso-para-margin-right:
	0cm;mso-para-margin-bottom:.5gd;mso-para-margin-left:0cm;text-align:left;
	line-height:150%'><span lang=EN-US style='font-size:14.0pt;line-height:150%;
	font-family:黑体;mso-hansi-font-family:"Times New Roman"'>3 </span><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>教学资源<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="16B" class=MsoNormal align=left style='margin-top:7.8pt;margin-right:0cm;
	margin-bottom:7.8pt;margin-left:0cm;mso-para-margin-top:.5gd;mso-para-margin-right:
	0cm;mso-para-margin-bottom:.5gd;mso-para-margin-left:0cm;text-align:left;
	line-height:150%'><span lang=EN-US style='font-size:14.0pt;line-height:150%;
	font-family:黑体;mso-hansi-font-family:"Times New Roman"'>4 </span><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>培养过程<span lang=EN-US><o:p></o:p></span></span></p>

	<p id="17B" class=MsoNormal align=left style='margin-top:7.8pt;margin-right:0cm;
	margin-bottom:7.8pt;margin-left:0cm;mso-para-margin-top:.5gd;mso-para-margin-right:
	0cm;mso-para-margin-bottom:.5gd;mso-para-margin-left:0cm;text-align:left;
	line-height:150%'><span lang=EN-US style='font-size:14.0pt;line-height:150%;
	font-family:黑体;mso-hansi-font-family:"Times New Roman"'>5 </span><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学生发展<span lang=EN-US><o:p></o:p></span></span></p>


	<p id="18B" class=MsoNormal align=left style='text-align:left;line-height:150%'><span
	lang=EN-US style='font-size:14.0pt;line-height:150%;font-family:黑体'>6 </span><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体'>质量保障<span lang=EN-US><o:p></o:p></span></span></p>

	

	<p id="20B" class=MsoNormal align=left style='text-align:left;line-height:150%'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>三、专业建设存在的问题与改进方向<span lang=EN-US><o:p></o:p></span></span></p>

</div>

  <!-- 全文预览导出模板 -->    
<div class=WordSection1 style='display:none' id="allModel">
	<p class=MsoNormal align=center style='text-align:center;display:none'><span lang=EN-US
	style='font-size:26.0pt'><o:p>&nbsp;</o:p></span></p>

	<p class=MsoNormal><span lang=EN-US style='font-size:22.0pt'><o:p>&nbsp;</o:p></span></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	margin-left:50%;display:none
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'><span lang=EN-US><span
	style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span><span lang=EN-US id="Oxueyuan"><u><o:p></o:p></u></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	margin-left:50%;display:none
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'><span lang=EN-US><span
	style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span><span lang=EN-US id="Ozhuanye"><o:p></o:p></span></span></b></p>


	<b style='mso-bidi-font-weight:normal;display:none'><span lang=EN-US style='font-size:14.0pt;
	line-height:150%;font-family:黑体;mso-hansi-font-family:Calibri;mso-bidi-font-family:
	"Times New Roman";mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;
	mso-bidi-language:AR-SA'><br clear=all style='page-break-before:always'>
	</span></b>

	<p id="OllReport" class=MsoNormal align=left style='text-align:left;line-height:150%'><b
	style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt;line-height:
	150%;font-family:黑体;mso-hansi-font-family:Calibri'></span></b><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'><span></span><span lang=EN-US><o:p></o:p></span></span></p>


</div>     
    
    
    
    
  </body>
  <script type="text/javascript">
	function onDianJi(obj){
		var txt=$(obj).val();
		if(txt=="请输入你的意见"){
			$(obj).val("");
		}
	}
</script>
</html>
