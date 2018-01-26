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
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/wangping/staticPage/css/home_1.css"/>
	<link rel="stylesheet" type="text/css"
	href="<%=basePath%>page/lzrPopWindow/css/lzrwindow.css" />
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript"
	src="<%=basePath%>page/lzrPopWindow/js/lzrWindow.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/wangping/staticPage/js/ZJzl.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/jquery.form.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/jquery.form.min.js"></script>
	
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
	
 </head>
  
  <body style="font-family:'Microsoft YaHei'">
  <input id="organizationName"  type="text" style="display:none"/>
   <div id="div1">
    	<div>
    		<div id="contentAll2" style="left: 1%;
    										top:1%;
											width: 81%;
											height:85%;
											display:none;
											background:#fff;
											position: absolute;
											border: 3px solid rgba(113, 113, 113, 0.56)">
					<div style="
    					height: 8%;
    					background: #46A3D1;
    					"><span id="title" style="height: 100%;
												  margin-right:10px;
												  line-height:34px;"></span>
    					<a href="javascript:closeWindow()" style="float: right;
										    					float: right;
															    display: block;
															    height: 100%;
															    margin-right:10px;
															    line-height:34px;
										    					"><img src="/audit/page/wangping/staticPage/img/closeWindow.png" /></a>
						<a href="javascript:download()" id="down1" style="float: right;
										    					float: right;
															    display: none;
															    height: 100%;
															    margin-right:10px;
															    line-height:34px;
										    					"><img src="/audit/page/wangping/staticPage/img/download_2.png" /></a>
    				</div>
    				<div id="contentThing"></div>
			</div>
    		<div style="margin-right:10px;">
					<div>
						<div style="background:#46A3D1;height:7%;line-height: 31px;color:#FFFFFF;margin:4px;0px;5px;4px" id="ii">
							<div style="margin-left:10px" id="name"></div>
						</div>
						<div id="contentAll" style="width:100%;height:85%">
							<!-- 导出按钮 -->
							<div id="outBtn" style="width:100%; height:34px;">
								<a id="outBtn" href="javascript:outfile()" style="float:right;margin-right: 4%;"><img src="img/out.png"></img></a>
								<a id="showAllFile" href="javascript:showAll()" style="float:right;margin-right: 4%;display:none"><img title="预览用户上传的总文件" src="/audit/page/wangping/staticPage/img/allread.png"></img></a>
								<a id="backbtn" href="javascript:history.go(0)" style="float:right;margin-right: 4%;display:none"><img title="点击返回" src="/audit/images/zypg/goback.png"></img></a>
							</div>
							<div id="contentAll_one"></div>
							<div id="contentAll_two"></div>
							<div id="imglodding" style="margin:20 auto;width:383px"><img  src="img/loading.png"></img></div>
						</div>
					</div>
    		</div>
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
	margin-left:50%;
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学<span lang=EN-US><span
	style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>院：<span lang=EN-US id="Oxueyuan">___________________<u><o:p></o:p></u></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	margin-left:50%;
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>专<span lang=EN-US><span
	style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp; </span></span>业：<span lang=EN-US id="Ozhuanye">___________________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	margin-left:50%;
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>完成时间：<span lang=EN-US>___________________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	margin-left:50%;
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>专业负责人：<span lang=EN-US>_________________</span></span></b><u><span
	lang=EN-US style='font-size:12.0pt;mso-bidi-font-size:10.0pt;line-height:150%'><o:p></o:p></span></u></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	margin-left:50%;
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>联系电话：<span lang=EN-US>___________________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	margin-left:50%;
	line-height:150%'><b style='mso-bidi-font-weight:normal'><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'>学院负责人签字：<span lang=EN-US>_____________<o:p></o:p></span></span></b></p>

	<p  style='margin-top:7.8pt;margin-bottom:7.8pt;
	margin-left:50%;line-height:150%'><b style='mso-bidi-font-weight:normal'><span
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

	<p id="OllReport" class=MsoNormal align=left style='text-align:left;line-height:150%'><b
	style='mso-bidi-font-weight:normal'><span style='font-size:14.0pt;line-height:
	150%;font-family:黑体;mso-hansi-font-family:Calibri'>一、</span></b><span
	style='font-size:14.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:
	"Times New Roman"'><span id="name">专业质量报告</span><span lang=EN-US><o:p></o:p></span></span></p>

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
