<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="Generator" content="EditPlus®">
<meta name="Author" content="">
<meta name="Keywords" content="">
<meta name="Description" content="">
<title>试卷情况总体评价表</title>
<link rel="stylesheet" type="text/css" href="css/page_num.css">
<link rel="stylesheet" type="text/css" href="css/page_1.css">
<style type="text/css">
.box {
	margin: 0 auto;
	font-family: "微软雅黑";
}

.td {
	padding: 0 20px;
	height: 30px;
	border: #DADADA 1px solid;
	background: #F1F1F1;;
}

.td1 {
	height: 30px;
	｝
	.input{
	width
	:
	100%;
}

a {
	
}

.title1 {
	display: block;
	-webkit-margin-before: 1.33em;
	-webkit-margin-after: 1.33em;
	-webkit-margin-start: 0px;
	-webkit-margin-end: 0px;
	font-weight: bold;
	text-align: center;
}
</style>
<link rel="stylesheet" type="text/css"
	href="<%=basePath%>page/lzrPopWindow/css/lzrwindow.css" />
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript"
	src="<%=basePath%>page/lzrPopWindow/js/lzrWindow.js"></script>
<script type="text/javascript"
	src="<%=basePath%>page/xianchangkaocha/js/shiJuanInfo.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	
</head>
<body>
	<div id="top"
		style="height: 40px;
    margin: 9px;
    margin-right: 35px;">
		<div>
			<span id="specialtys"></span>
		</div>
	</div>
	<div id="midle"
		style="height: 36px;
    width: 996px;
    margin-left: 22px;">
		<div id="mid" style="background: url('img/1.png') no-repeat;">
			<div id="showName">试卷情况总体评价表</div>
			<div id="right">
				<span id="assess_self">报告提交时间：</span>
			</div>
			<div id="left">———————————————————————————————————————————————————————————</div>
		</div>
	</div>
	<div style="margin: 35px;margin-left: 12px;margin-top: 12px;" id="maxBox">
		<div>
			<%--<div
				style=" display: block;
					    -webkit-margin-before: 1.33em;
					    -webkit-margin-after: 1.33em;
					    -webkit-margin-start: 0px;
					    -webkit-margin-end: 0px;
					    font-weight: bold;
					    text-align: right;
					    float:left;
					    width:58%">听课看课总体情况记录表</div>
			<div>
				--%>
			<a href='javascript:tijiao()'
				style="display:block;float:right;margin-right:12px;height: 60px;line-height: 60px;"><img
				style="margin-top: 15px;" src="img/tijiao.png" /> </a> <a
				href='javascript:out()'
				style="display:block;float:right;margin-right:12px;height: 60px;line-height: 60px;"><img
				style="margin-top: 15px;" src="img/out.png" /> </a> <a
				href='javascript:addline()'
				style="display:block;float:right;margin-right:12px;height: 60px;line-height: 60px;"><img
				style="margin-top: 15px;" src="img/addline.png" /> </a> <a
				href='javascript:deleteline()'
				style="display:block;float:right;margin-right:12px;height: 60px;line-height: 60px;"><img
				style="margin-top: 15px;" src="img/deleteline.png" /> </a>
		</div>
	</div>
	<form method="POST" id="myForm"
		action="/audit/AssessmentSpecialtyInfoWangPingController/downWordHtml.do">
		<input id="speName" type="hidden" name="speName" value="试卷情况总体评价表" />
		<input id="contentMold" type="hidden" name="contents" />
	</form>
	<div class="box" style="margin:18px;margin-right: 40px;" id="tableBox">
		<table id="table" width="100%" height="80%" border="1" cellspacing="0"
			cellpadding="2" bordercolor="#DADADA">
			<tr>
				<td class="td" align="center">操作</td>
				<td class="td" align="center">序号</td>
				<td class="td" align="center">试卷情况（课程名称、学院、专业、年级、份数等）</td>
				<td class="td" align="center" colspan="2">审读方式 （精读、泛读）</td>
			</tr>
			<%--
				<tr >
					<td class="td1"  align="center">
						<input class="input" type="checkbox"/>
					</td>
					<td class="td1"  align="center">
						1
					</td>
					<td class="td1" align="center">
						<input type="text"/>
					</td>
					<td class="td1" align="center" colspan="2">
						<input type="text"/>
					</td>
				</tr>
				--%>
			<tr id="lastTr">
				<td class="td1" align="center" colspan="1">试卷审阅情况总体评价</td>
				<td class="td1" align="center"><input class="input"
					type="checkbox" id="1" value='90' checked="checked" />好</td>
				<td class="td1" align="center"><input class="input"
					type="checkbox" id="2" value='85' />较好</td>
				<td class="td1" align="center"><input class="input"
					type="checkbox" id="3" value='75' />一般</td>
				<td class="td1" align="center" colspan="1"><input
					class="input" type="checkbox" id="4" value="65"/>较差</td>
			</tr>
			<tr id="lastTr2">
				<td colspan="10">
					<div style="width:100%;height:100%">
						<div>课堂教学总体存在的主要问题及建议：</div>
						<div style="width:100%;height:100%;">
							<textarea id="zong" name=""
								style="resize: none;width:99%;height:93%;font-size: 18px;outline: none;border:none"></textarea>
						</div>
					</div></td>

			</tr>
		</table>
	</div>
	<%--
		<div style="text-align: right;">
			<div>
				专家签名： <span>xxx</span> 日期：<span>2016</span>
			</div>
		</div>
	--%>
	</div>

	<%--模板--%>
	<div id="muban" style='layout-grid:15.6pt;display:none'>
<p class=MsoNormal align=left style='text-align:left;mso-pagination:widow-orphan'><span
lang=EN-US><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal align=center style='text-align:center'><b style='mso-bidi-font-weight:
normal'><span style='font-size:15.0pt;font-family:宋体;mso-ascii-font-family:
Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:
minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>试卷情况总体评价表</span></b><b
style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:15.0pt'><o:p></o:p></span></b></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
style='margin-left:125.0pt;border-collapse:collapse;border:none;width:680pt;mso-border-alt:
solid windowtext .5pt;mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width=73 valign=top style='width:55.05pt;border:solid windowtext 1.0pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
  style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>序号</span><span
  lang=EN-US><o:p></o:p></span></b></p>
  </td>
  <td width=331 colspan=4 valign=top style='width:248.05pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
  style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>试卷情况（课程名称、学院、专业、年级、份数等）</span><span
  lang=EN-US><o:p></o:p></span></b></p>
  </td>
  <td width=164 colspan=2 valign=top style='width:123.0pt;border:solid windowtext 1.0pt;
  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
  style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>审读方式</span><span
  lang=EN-US><o:p></o:p></span></b></p>
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
  style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>（精读、泛读）</span><span
  lang=EN-US><o:p></o:p></span></b></p>
  </td>
 </tr>
 <%--<tr>
  <td width=73 valign=top style='width:55.05pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:15.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
  <td width=331 colspan=4 valign=top style='width:248.05pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:15.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
  <td width=164 colspan=2 valign=top style='width:123.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=center style='text-align:center'><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:15.0pt'><o:p>&nbsp;</o:p></span></b></p>
  </td>
 </tr>
 --%><tr style='mso-yfti-irow:4;height:40.0pt' id="last_tr_1">
  <td width=208 colspan=2 valign=top style='width:155.85pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:40.0pt'>
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
  style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>试卷审阅情况总体评价</span></b><b
  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:15.0pt'><o:p></o:p></span></b></p>
  </td>
  <td id='1s' width=73 valign=top style='width:55.1pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:40.0pt'>
  <p class=MsoNormal><span style='font-family:宋体;mso-ascii-font-family:Calibri;
  mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:
  minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>好</span></p>
  </td>
  <td id='2s' width=88 valign=top style='width:65.75pt;border-top:none;border-left:
  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:40.0pt'>
  <p class=MsoNormal><span style='font-family:宋体;mso-ascii-font-family:Calibri;
  mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:
  minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>较好</span></p>
  <p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>
  </td>
  <td id='3s' width=101 colspan=2 valign=top style='width:76.0pt;border-top:none;
  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:40.0pt'>
  <p class=MsoNormal align=left style='text-align:left;mso-pagination:widow-orphan'><span
  style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>一般</span></p>
  <p class=MsoNormal><span lang=EN-US><o:p>&nbsp;</o:p></span></p>
  </td>
  <td id='4s' width=98 valign=top style='width:73.4pt;border-top:none;border-left:none;
  border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;
  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:40.0pt'>
  <p class=MsoNormal><span style='font-family:宋体;mso-ascii-font-family:Calibri;
  mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:
  minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>较差</span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5;mso-yfti-lastrow:yes;height:79.0pt'>
  <td width=568 colspan=7 valign=top style='width:426.1pt;border:solid windowtext 1.0pt;
  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
  padding:0cm 5.4pt 0cm 5.4pt;height:79.0pt'>
  <p class=MsoNormal><b style='mso-bidi-font-weight:normal'><span
  style='font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:
  Calibri;mso-bidi-font-family:宋体'>课堂教学总体存在的主要问题及建议：</span></b><a name="_GoBack"></a></p>
  	<div class=MsoListParagraph
								style='text-indent:0cm;mso-char-indent-count:0' id="zongMM"></div>
  </td>
 </tr>
 <![if !supportMisalignedColumns]>
 <tr height=0>
  <td width=73 style='border:none'></td>
  <td width=134 style='border:none'></td>
  <td width=73 style='border:none'></td>
  <td width=88 style='border:none'></td>
  <td width=35 style='border:none'></td>
  <td width=66 style='border:none'></td>
  <td width=98 style='border:none'></td>
 </tr>
 <![endif]>
</table>

<p class=MsoListParagraph align=right
				style='margin-top:0cm;margin-right:220pt;
	margin-bottom:0cm;margin-left:36.0pt;margin-bottom:.0001pt;text-align:right;
	text-indent:0cm;mso-char-indent-count:0'>
				<span
					style='font-family:宋体;
	mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:
	宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
	mso-hansi-theme-font:minor-latin'>专家签名：</span><span
					lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				</span> </span><span
					style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;
	mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:
	Calibri;mso-hansi-theme-font:minor-latin'>日期：</span><span
					lang=EN-US><span style='mso-spacerun:yes'>&nbsp;&nbsp;&nbsp;&nbsp;
				</span> </span><a name="_GoBack"></a><b style='mso-bidi-font-weight:normal'><span
					lang=EN-US style='font-size:15.0pt'><o:p></o:p> </span> </b>
			</p>





	</div>
</body>
</html>

