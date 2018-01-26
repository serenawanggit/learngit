<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
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
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_0.css">

<link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" /> 
<link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css"> 


<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.form.js"></script>
<script type="text/javascript" src="js/jquery.form.min.js"></script>

<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/core/base.js" type="text/javascript"></script>
<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
<script type="text/javascript" src="/audit/page/guanliyuan/staticPage/js/xianchangkaocha.js"></script>
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>

<style type="text/css">
body {
	font-family: "微软雅黑";
}

.menuli li {
	list-style: none;
	float: left;
	width: 20%;
	background: url("/audit/page/guanliyuan/images/backgroundout.png") round;
	text-align: center;
	height: 36px;
	line-height: 32px;
	cursor: pointer;
}

.menuli li a {
	text-decoration: none;
}
.xialaUl {
	 list-style: none;background: white;
}
li:hover{ 
		background-color:#2f93fd;
}

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
</head>

<body>
	<input type="hidden" id="specialtyId"
		value="<%=request.getParameter("specialtyId")%>" />
	<input type="hidden" id="dateYear"
		value="<%=request.getParameter("dateYear")%>" />
	<div id="main">
		<div id="top">
			<div id="text">专家现场考查报告</div>
		</div>
		<!-- 内容  -->
		<div style="border:1px solid  #F0F0F0; margin-top: 8px;">
			<!-- 头  -->
			<div>
				<ul class="menuli">
					<li name="yijian" onmousedown="toggleMenu(this)" style="background: url('/audit/page/guanliyuan/images/backgroundin.png') round;">现场考查反馈意见(个人)</li>
					<li name="jilu" onmousedown="toggleMenu(this)">现场考查工作记录表</li>
					<li name="kanke" onmousedown="toggleMenu(this)">听课看课表</li>
					<li name="sjqk" onmousedown="toggleMenu(this)">学生毕业论文(设计)情况</li>
					<li name="pingjia" onmousedown="toggleMenu(this)">试卷评价表</li>
				</ul>
			</div>
			<!-- 现场考查反馈意见(个人) -->
			<div id="yijian" name="content">
						<!-- 条件选择栏目 -->
						<div style="height: 47px; width:100%;margin-top: 5%;border:1px solid #F0F0F0;width: 96%;margin: 5% auto;">
							<div style="margin-top:10px;">
								<!-- 专家名称搜索 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专家:</strong> 
									<input type="text" style="height: 32px;"
										id="sp_name1_zj" placeholder="请选择专家" />
										<a
										href="javascript:xiala(1)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="1" name="xialaBox"
										style="height:230px;border:1px solid #eeeeee;width: 134px;position: absolute;left: 66px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul1_zj'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 专家名专业名称 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专业:</strong> <input type="text" style="height: 32px;"
										id="sp_name2_zy" placeholder="请选择专业" /> 
										<a
										href="javascript:xiala(2)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="2" name="xialaBox2"
										style="height:230px;border:1px solid #eeeeee;width: 134px;position: absolute;left: 66px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul2_zy'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 时间 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>时间:</strong> <select style="height:32px;width:134px"
										id="rYear_yijian">
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
									</select> <a href="javascript:changeData()"><img title="点击搜索"
										src="/audit/page/guanliyuan/staticPage/img/search.png"
										style="float:right" />
									</a>
								</div>
							</div>
						</div>


				<div id="tableDiv">
					<table style="font-size:12px;width:100%; border:#F8AC59 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
							<tr
								style='background-color:#DCDBDB;color:#000;font-weight:bold;font-size:12px;'>
								<th nowrap='nowrap'
									style='padding:0 20px;width:400px;height:30px;border:#D1D1D1 1px solid;background-color:#DCDBDB'
									align='center' colspan='2'>考查要点</th>
								<th nowrap='nowrap'
									style='padding:0 20px; width:350px;height:30px;border:#D1D1D1 1px solid;background-color:#DCDBDB'
									align='center'>达成情况(包括值得肯定之处、需要改进之处、并提出意见和建议)</th>
								<th nowrap='nowrap'
									style='padding:0 20px;height:30px;border:#D1D1D1 1px solid;background-color:#DCDBDB'
									align='center'>打分</th>
							</tr>
						</thead>
						<tbody id="tb_tbody2">
							<%-- <tr>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业代码</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'><img src="<%=basePath%>images/zypg/delete.png" style="cursor:pointer;"></img></td>
							</tr> --%>
						</tbody>
					</table>
				</div>

			</div>
			<!-- 现场考查工作记录表 -->
			<div id="jilu" name="content" style="display:none">
						<!-- 条件选择栏目 -->
						<div style="height: 47px; width:100%;margin-top: 5%;border:1px solid #F0F0F0;width: 96%;margin: 5% auto;">
							<div style="margin-top:10px;">
								<!-- 专家名称搜索 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专家:</strong> 
									<input type="text" style="height: 32px;"
										id="sp_name1_jl" placeholder="请选择专家" />
										<a
										href="javascript:xiala(3)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="3" name="xialaBox"
										style="height:230px;border:1px solid #eeeeee;width: 134px;position: absolute;left: 66px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul1_jl'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 专家名专业名称 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专业:</strong> <input type="text" style="height: 32px;"
										id="jl_name2_zy" placeholder="请选择专业" /> 
										<a
										href="javascript:xiala(4)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="4" name="xialaBox2"
										style="height:230px;border:1px solid #eeeeee;width: 134px;position: absolute;left: 66px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul2_jl'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 时间 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>时间:</strong> <select style="height:32px;width:134px"
										id="rYear_jl">
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
									</select> <a href="javascript:changeData()"><img title="点击搜索"
										src="/audit/page/guanliyuan/staticPage/img/search.png"
										style="float:right" />
									</a>
								</div>
							</div>
						</div>

					<div id='tableData_jl' style="width:100%">
						<div style="width:100%;height:30px">
							<div id="showPeople"
								style="width:100%;display:none;margin-bottom:5px;">
								<span style="width:150px;font-size:15px">考查专家:</span><select
									id="select3" style="width:200px;height:25px;margin-left:10px;"
									onclick="changeDataByPeople()"><option value="0">-
										-请选择考查专家- -</option>
								</select><span style='color:red;margin-left:10px;'>*不选择默认为自己的信息!</span>
							</div>
							<div style="float:left">
								<span style="width:150px;font-size:15px">考查活动:</span><select
									id="selects1" style="width:200px;height:25px;margin-left:10px;"
									onchange="activityChange()"></select>
							</div>
							<!-- <div style="float:left;margin-left:5%">
								<input id="selects2"
									style="vertical-align:center;width:126px;height:18px;" />
							</div> -->
							<div>
								<!-- <a href="javascript:void" id="excelTable"
									onclick="ExportWordHtml()"><img
									src="/audit/images/exportHtml.png"
									style="margin-right:15px;float:right" />
								</a><a href="javascript:void(0)" id='ss' onclick="saveInspect()"><img
									src="/audit/page/zenith/staticPage/img/save.png"
									style="float:right;margin-right:15px;" />
								</a> -->
							</div>
						</div>
						
						
						<div id="tableDiv">
							<table
								style="width:100%; border:#F1F1F1 1px solid;margin-top:10px;"
								cellpadding="0" cellspacing="0" id="contenttable ">
								<tr>
									<td
										style='padding:0 20px;width:200px;height:30px;border:#DCDBDB 1px solid;font-size:15px;background-color:#E6E6E6'>考查活动</td>
									<td style='padding:0 20px;height:30px;border:#DCDBDB 1px solid;'></td>
								</tr>
								<tr>
									<td
										style='padding:0 20px;width:200px;height:30px;border:#DCDBDB 1px solid;font-size:15px;background-color:#E6E6E6'>时间</td>
									<td style='padding:0 20px;height:30px;border:#DCDBDB 1px solid;'></td>
								</tr>
								<tr>
									<td
										style='padding:0 20px;width:200px;height:30px;border:#DCDBDB 1px solid;font-size:15px;background-color:#E6E6E6'>专家姓名</td>
									<td style='padding:0 20px;height:30px;border:#DCDBDB 1px solid;'></td>
								</tr>
								<tr>
									<td style='padding:0;border:#DCDBDB 1px solid;' colspan='2'>
										<div style="width:100%;height:250px;">
											<textarea id="jl_content" style="width:100%;height:100%;"></textarea>
										</div></td>
								</tr>
							</table>
							<div>
								填表说明：</br>1.本表作为专家在开展不同考察活动时的工作记录表,相关记录信息供专家在撰写结论及意见时参考;</br>2.根据访谈、考察实验室、内部会议等不同考察活动复制本表。
							</div>
	
						</div>
						<div style="width:100%;margin-top:3%">
							<!-- <a href="javascript:void" id = "excelTable" onclick="tableExcel()" ><img src="/audit/page/zenith/staticPage/img/upload.png" style="float:right;margin-bottom:10px"/></a> -->
	
						</div>
					</div>
			</div>
			<!-- 听课看课表 -->
			<div id="kanke" name="content" style="display:none">
				<!-- 条件选择栏目 -->
						<div style="height: 47px; width:100%;margin-top: 5%;border:1px solid #F0F0F0;width: 96%;margin: 5% auto;">
							<div style="margin-top:10px;">
								<!-- 专家名称搜索 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专家:</strong> 
									<input type="text" style="height: 32px;"
										id="kanke_name1_zj" placeholder="请选择专家" />
										<a
										href="javascript:xiala(5)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="5" name="xialaBox"
										style="height:230px;border:1px solid #eeeeee;width: 133px;position: absolute;left: 66.5px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul1_kk'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 专家名专业名称 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专业:</strong> 
									<input type="text" style="height: 32px;"
										id="kanke_name2_zy" placeholder="请选择专业" /> 
										<a
										href="javascript:xiala(6)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="6" name="xialaBox2"
										style="height:230px;border:1px solid #eeeeee;width: 133px;position: absolute;left: 66.5px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul2_kk'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 时间 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>时间:</strong> <select style="height:32px;width:133px"
										id="rYear_kk">
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
									</select> <a href="javascript:getTkKk()"><img title="点击搜索"
										src="/audit/page/guanliyuan/staticPage/img/search.png"
										style="float:right" />
									</a>
								</div>
							</div>
						</div>
			
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
							<tr  id="yuliu">
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
									<input class="input2" type="checkbox"  value='90' disabled="true" />好
									<input class="input2" type="checkbox"  value='85' disabled="true" />较好	
									<input class="input2" type="checkbox"  value='75' disabled="true" />一般
									<input class="input2" type="checkbox"  value='65' disabled="true" />较差
								</td>
							</tr> 
							<tr id="lastTr">
								<td colspan="10">
									<div style="width:100%;height:100%">
										<div>课堂教学总体存在的主要问题及建议：</div>
										<div  id="zong2">
										</div>
									</div></td>
							</tr>
				  </table>
			</div>
		</div>
			<!-- 学生毕业论文(设计)情况 -->
			<div id="sjqk" name="content" style="display:none">
				<!-- 条件选择栏目 -->
						<div style="height: 47px; width:100%;margin-top: 5%;border:1px solid #F0F0F0;width: 96%;margin: 5% auto;">
							<div style="margin-top:10px;">
								<!-- 专家名称搜索 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专家:</strong> 
									<input type="text" style="height: 32px;"
										id="xs_name1_zj" placeholder="请选择专家" />
										<a
										href="javascript:xiala(7)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="7" name="xialaBox"
										style="height:230px;border:1px solid #eeeeee;width: 134px;position: absolute;left: 66px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul1_sj'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 专家名专业名称 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专业:</strong> <input type="text" style="height: 32px;"
										id="xs_name2_zy" placeholder="请选择专业" /> 
										<a
										href="javascript:xiala(8)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="8" name="xialaBox2"
										style="height:230px;border:1px solid #eeeeee;width: 134px;position: absolute;left: 66px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul2_sj'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 时间 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>时间:</strong> <select style="height:32px;width:134px"
										id="rYear_xs">
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
									</select> <a href="javascript:changeData()"><img title="点击搜索"
										src="/audit/page/guanliyuan/staticPage/img/search.png"
										style="float:right" />
									</a>
								</div>
							</div>
						</div>

					<div id="tableDiv_xs">
						<table style="font-size:12px;width:100%; border:#DCDBDB 1px solid;"
							cellpadding="0" cellspacing="0" id="contenttable">
							<tr>
								<td
									style='padding:0;border-top:#DCDBDB 1px solid;border-left:#DCDBDB 1px solid;border-right:#DCDBDB 1px solid;border-bottom:white 1px solid;'
									colspan='5'><div
										style="width:100%;height:300px;border:0px solid;">
										<div style="font-size:16px;">
											请就论文（设计）选题、论文（设计）水平、论文（设计）内容、教师指导、成绩评定、管理环节等情况进行总体评价。<br>
											<br> 阅读了<span id='gradeSpan1'></span><input id='grade1'
												style="border-top:0 solid;border-left:0 solid;border-right:0 solid;width:50px;" />年级
											<span id="specialty1_xs"></span>&nbsp;专业毕业论文（ <span id='numSpan1'></span><input
												id='num1'
												style="border-top:0 solid;border-left:0 solid;border-right:0 solid;width:50px;" />份），总体评价如下：
										</div>
										<textarea id='assessData1'
											style="width:100%;height:35%;margin-top:1px;"></textarea>
										<span style="font-size:16px;">存在的问题：</span><br>
										<textarea id='assessProblem1'
											style="width:100%;height:35%;margin-top:1px;"></textarea>
									</div>
								</td>
							</tr>
							<tr>
								<td
									style='padding:0;border-bottom:#DCDBDB 1px solid;border-left:#DCDBDB 1px solid;border-right:#DCDBDB 1px solid;border-top:white 1px solid;'
									colspan='5'><div
										style="width:100%;height:150px;border:0px solid;">
										<span style="font-size:16px;">建议：</span>
										<textarea id='assessSug'
											style="width:100%;height:87%;margin-top:1px;"></textarea>
									</div>
								</td>
							</tr>
							<tr id="assess1" style="height:25px;font-size:16px;">
								<td style='padding:0;border:#DCDBDB 1px solid;'>论文审阅情况总体评价</td>
								<td style='padding:0;border:#DCDBDB 1px solid;'><input
									type="radio" value='90' name="assessAll1" checked />好</td>
								<td style='padding:0;border:#DCDBDB 1px solid;'><input
									type="radio" value='85' name="assessAll1" />较好</td>
								<td style='padding:0;border:#DCDBDB 1px solid;'><input
									type="radio" value='75' name="assessAll1" />一般</td>
								<td style='padding:0;border:#DCDBDB 1px solid;'><div
										style="float:left">
										<input type="radio" value='65' name="assessAll1"
											style="line-height:24px;" />较差
									</div>
									<div style="display:none;float:left;">
										<input type="button" style="height:24px;" value="+"
											onclick="addOne()" /><input type="button" value="-"
											onclick="deleteOne(1)" />
									</div>
								</td>
							</tr>
						</table>
					</div>
			</div>
			<!-- 试卷评价 -->
			<div id="pingjia" name="content" style="display:none">
					<!-- 条件选择栏目 -->
						<div style="height: 47px; width:100%;margin-top: 5%;border:1px solid #F0F0F0;width: 96%;margin: 5% auto;">
							<div style="margin-top:10px;">
								<!-- 专家名称搜索 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专家:</strong> 
									<input type="text" style="height: 32px;"
										id="sp_name1_zj" placeholder="请选择专家" />
										<a
										href="javascript:xiala(9)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="9" name="xialaBox"
										style="height:230px;border:1px solid #eeeeee;width: 133px;position: absolute;left: 66.5px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul1_pj'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 专家名专业名称 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专业:</strong> <input type="text" style="height: 32px;"
										id="sp_name2_zy" placeholder="请选择专业" /> 
										<a
										href="javascript:xiala(10)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="10" name="xialaBox2"
										style="height:230px;border:1px solid #eeeeee;width: 133px;position: absolute;left: 66.5px;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul2_pj'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 时间 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>时间:</strong> <select style="height:32px;width:133px"
										id="rYear_pj">
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
									</select> <a href="javascript:getSjPj()"><img title="点击搜索"
										src="/audit/page/guanliyuan/staticPage/img/search.png"
										style="float:right" />
									</a>
								</div>
							</div>
						</div>
						
					<div class="box" style="margin:18px;margin-right: 40px;" id="tableBox">
						<table id="table" width="100%" height="80%" border="1" cellspacing="0"
							cellpadding="2" bordercolor="#DADADA">
							<tr>
								<td class="td" align="center">操作</td>
								<td class="td" align="center">序号</td>
								<td class="td" align="center">试卷情况（课程名称、学院、专业、年级、份数等）</td>
								<td class="td" align="center" colspan="2">审读方式 （精读、泛读）</td>
							</tr>
							<tr id="yuliu3">
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
							<tr id="lastTr3">
								<td class="td1" align="center" colspan="1">试卷审阅情况总体评价</td>
								<td class="td1" align="center"><input class="input"
									type="checkbox" id="1x" value='90'   disabled="true" />好</td>
								<td class="td1" align="center"><input class="input"
									type="checkbox" id="2x" value='85'  disabled="true" />较好</td>
								<td class="td1" align="center"><input class="input"
									type="checkbox" id="3x" value='75'  disabled="true" />一般</td>
								<td class="td1" align="center" colspan="1"><input
									class="input" type="checkbox" id="4x" value="65" disabled="true" />较差</td>
							</tr>
							<tr>
								<td colspan="10">
									<div style="width:100%;height:100%">
										<div>课堂教学总体存在的主要问题及建议：</div>
										<div id="zong3" style="width:100%;width:98%;overflow-y: auto;">
										</div>
									</div></td>
				
							</tr>
						</table>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
