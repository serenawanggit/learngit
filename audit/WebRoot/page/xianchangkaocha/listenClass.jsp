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
<title>听课看课总体情况记录表</title>
<link rel="stylesheet" type="text/css" href="css/page_num.css">
<link rel="stylesheet" type="text/css" href="css/page_1.css">
<style type="text/css">
.box {
	margin: 0 auto;
	font-family: "微软雅黑";
}
.input2{
    margin: 3px;
   }
.td {
	padding: 0 20px;
	height: 30px;
	border: #DADADA 1px solid;
	background: #F1F1F1;
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
	src="<%=basePath%>page/xianchangkaocha/js/listenClass.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body>
<input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>
<input type="hidden" id="sid" value="<%=request.getParameter("sid")%>">
	<div id="top" style="height: 40px;
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
			<div id="showName">听课看课总体情况记录表</div>
			<div id="right">
				<span id="assess_self">报告提交时间：</span>
			</div>
			<div id="left">———————————————————————————————————————————————————————————</div>
		</div>
	</div>
	<div style="margin: 35px;margin-left: 12px;margin-top: 12px;" id="maxBox">
		<div>
			<div
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
			<input id="speName" type="hidden" name="speName" value="听课看课总体情况记录表" />
			<input id="contentMold" type="hidden" name="contents" />
		</form>
		<div class="box" id="tableBox">
			<table id="table" width="100%" height="80%" border="1"
				cellspacing="0" cellpadding="2" bordercolor="#DADADA">
				<tr>
					<td class="td" align="center">操作</td>
					<td class="td" align="center">序号</td>
					<td class="td" align="center">课程情况（名称、学院、专业、年级等）</td>
					<td class="td" align="center">授课教师情况（姓名、年龄、职称）</td>
					<td class="td" align="center">考察形式（听课、看课等）</td>
					<td class="td" align="center">总体评价（请填写"好"、"较好"、"一般"、"较差"</td>
				</tr>
				<%--<tr >
					<td class="td1"  align="center">
						<input class="input" type="checkbox"/>
					</td>
					<td class="td1"  align="center">
						1
					</td>
					<td class="td1" align="center">
						<input type="text"/>
					</td>
					<td class="td1" align="center">
						<input class="input" type="text"/>
					</td>
					<td class="td1"class="td" align="center">
						<input class="input" type="text"/>
					</td>
					<td class="td1" align="center">
						<input class="input" type="text"/>
					</td>
				</tr>
				--%>
				<tr id="lastTr">
					<td colspan="10">
						<div style="width:100%;height:100%">
							<div>课堂教学总体存在的主要问题及建议：</div>
							<div style="width:100%;height:100%;">
								<textarea id="zong" name=""
									style="resize: none;width:99%;height:93%;font-size: 18px;outline: none;border:none"></textarea>
							</div>
						</div>
					</td>
				</tr>
			</table>
		</div>
		<%--<div style="text-align: right;">
			<div>专家签名： <span>xxx</span>  日期：<span>2016</span></div>
		</div>
	--%>
	</div>

	<%--模板--%>
	<div style="display:none" id="muban">
		<div class=WordSection1 style='layout-grid:15.6pt;'>
			<p class=MsoListParagraph align=left
				style='margin-left:36.0pt;text-align:left;
	text-indent:0cm;mso-char-indent-count:0;mso-pagination:widow-orphan'>
				<span lang=EN-US><o:p>&nbsp;</o:p> </span>
			</p>

			<p class=MsoNormal align=center style='text-align:center'>
				<b style='mso-bidi-font-weight:
	normal'><span
					style='font-size:15.0pt;font-family:宋体;mso-ascii-font-family:
	Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:
	minor-fareast;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>听课看课总体情况记录表</span>
				</b><b style='mso-bidi-font-weight:normal'><span lang=EN-US
					style='font-size:15.0pt'><o:p></o:p> </span> </b>
			</p>

			<div align=center>

				<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0
					style='margin-left:36.0pt;border-collapse:collapse;border:none;width:680pt;mso-border-alt:
	 solid windowtext .5pt;mso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>
					<tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
						<td width=102 valign=top
							style='width:76.6pt;border:solid windowtext 1.0pt;
	  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
							<p class=MsoListParagraph align=center
								style='text-align:center;text-indent:
	  0cm;mso-char-indent-count:0'>
								<b style='mso-bidi-font-weight:normal'><span
									style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
	  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
	  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>序号</span><span
									lang=EN-US><o:p></o:p> </span> </b>
							</p>
						</td>
						<td width=104 valign=top
							style='width:78.0pt;border:solid windowtext 1.0pt;
	  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
	  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
							<p class=MsoListParagraph align=center
								style='text-align:center;text-indent:
	  0cm;mso-char-indent-count:0'>
								<b style='mso-bidi-font-weight:normal'><span
									style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
	  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
	  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>课程情况</span><span
									lang=EN-US><o:p></o:p> </span> </b>
							</p>
							<p class=MsoListParagraph align=center
								style='text-align:center;text-indent:
	  0cm;mso-char-indent-count:0'>
								<b style='mso-bidi-font-weight:normal'><span
									style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
	  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
	  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>（名称、学院、专业、年级等）</span><span
									lang=EN-US><o:p></o:p> </span> </b>
							</p>
						</td>
						<td width=104 valign=top
							style='width:78.0pt;border:solid windowtext 1.0pt;
	  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
	  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
							<p class=MsoListParagraph align=center
								style='text-align:center;text-indent:
	  0cm;mso-char-indent-count:0'>
								<b style='mso-bidi-font-weight:normal'><span
									style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
	  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
	  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>授课教师情况（姓名、年龄、职称）</span><span
									lang=EN-US><o:p></o:p> </span> </b>
							</p>
						</td>
						<td width=104 valign=top
							style='width:78.05pt;border:solid windowtext 1.0pt;
	  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
	  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
							<p class=MsoListParagraph align=center
								style='text-align:center;text-indent:
	  0cm;mso-char-indent-count:0'>
								<b style='mso-bidi-font-weight:normal'><span
									style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
	  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
	  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>考察形式</span><span
									lang=EN-US><o:p></o:p> </span> </b>
							</p>
							<p class=MsoListParagraph align=center
								style='text-align:center;text-indent:
	  0cm;mso-char-indent-count:0'>
								<b style='mso-bidi-font-weight:normal'><span
									style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
	  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
	  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>（听课、看课等）</span><span
									lang=EN-US><o:p></o:p> </span> </b>
							</p>
						</td>
						<td width=106 valign=top
							style='width:79.45pt;border:solid windowtext 1.0pt;
	  border-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:
	  solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>
							<p class=MsoListParagraph align=center
								style='text-align:center;text-indent:
	  0cm;mso-char-indent-count:0'>
								<b style='mso-bidi-font-weight:normal'><span
									style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
	  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
	  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>总体评价</span><span
									lang=EN-US><o:p></o:p> </span> </b>
							</p>
							<p class=MsoListParagraph align=center
								style='text-align:center;text-indent:
	  0cm;mso-char-indent-count:0'>
								<b style='mso-bidi-font-weight:normal'><span
									style='font-family:宋体;mso-ascii-font-family:Calibri;mso-ascii-theme-font:
	  minor-latin;mso-fareast-font-family:宋体;mso-fareast-theme-font:minor-fareast;
	  mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin'>（请填写“好”、“较好”、“一般”、“较差”</span><span
									lang=EN-US><o:p></o:p> </span> </b>
							</p>
						</td>
					</tr>

					<tr id="last_tr"
						style='mso-yfti-irow:4;mso-yfti-lastrow:yes;height:432.3pt'>
						<td width=520 colspan=5 valign=top
							style='width:390.1pt;border:solid windowtext 1.0pt;
	  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;
	  padding:0cm 5.4pt 0cm 5.4pt;height:432.3pt'>
							<p class=MsoListParagraph
								style='text-indent:0cm;mso-char-indent-count:0'>
								<b style='mso-bidi-font-weight:normal'><span
									style='font-family:宋体;mso-ascii-font-family:
	  Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:宋体;
	  mso-fareast-theme-font:minor-fareast;mso-hansi-font-family:Calibri;
	  mso-hansi-theme-font:minor-latin'>课堂教学总体存在的主要问题及建议：</span><span
									lang=EN-US><o:p></o:p> </span> </b>
							</p>
							<div class=MsoListParagraph
								style='text-indent:0cm;mso-char-indent-count:0' id="zongMM"></div>
						</td>
					</tr>
				</table>

			</div>

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
	</div>
</body>
</html>

