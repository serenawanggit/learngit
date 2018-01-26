<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML >
<html>
<head>
<title>现场考查~专家组的评估结论</title>
<link rel="stylesheet" type="text/css" href="<%=basePath %>/css/majorEvaluation/base.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath %>/css/majorEvaluation/siteVisitExpertAssessment.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>/kindeditor/themes/default/default.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>/kindeditor/plugins/code/prettify.css" />
<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/bootstrap.min.css" />
<script type="text/javascript" src="<%=basePath %>/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/majorEvaluation/siteVisitExpertAssessment.js"></script>
<script type="text/javascript" src="<%=basePath %>js/majorEvaluation/merge.js"></script>
<script type="text/javascript" src="<%=basePath%>/kindeditor/kindeditor.js" ></script>
<script type="text/javascript" src="<%=basePath%>/kindeditor/kindeditor.js"></script>
<script type="text/javascript" src="<%=basePath%>/kindeditor/lang/zh_CN.js"></script>
<script type="text/javascript" src="<%=basePath%>/kindeditor/plugins/code/prettify.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/common.js"></script>
<script src="<%=basePath%>js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<jsp:include page="contextMenuSite.jsp"></jsp:include>
</head>
<script type="text/javascript">

$(document).ready(function () {
	getYear();
	validateLogin();
});
	var editor;
	KindEditor.ready(function(K) {
		editor = K.create('textarea[name="content"]', {
			cssPath : '<%=basePath%>/kindeditor/plugins/code/prettify.css',
			uploadJson : '<%=basePath%>/kindeditor/jsp/upload_json.jsp',
			fileManagerJson : '<%=basePath%>/kindeditor/jsp/file_manager_json.jsp',
			allowFileManager : true,
			width: '100%',
			height:'600px',
			afterBlur : function(){saveReport();} ,
		});
	});
		prettyPrint();
</script>
<body>
	<div class="main">
		<div class="main-top-short-znj">
			<form>
				<li class="top-div2-label1">评估年度 </li> 
				<select class="form-control select_year" id="year" onchange="getSpecialty()">
				</select>
				<select class="form-control select1-xy" id="org" onchange="getSpe()">
				</select> 
				<select class="form-control select2-zy" id="spe" onchange="getRecord()">
				</select>
			</form>
			<!-- 四个操作按钮 -->
			<button class="top-div3-button1" onclick="button_click(this,1)">专家组评分</button>
			<!-- <button class="top-div3-button2" onclick="button_click(this,2)">查看专业评估材料</button> -->
			<button class="top-div3-button3" onclick="button_click(this,3)">专家组现场考查报告</button>
			<button class="top-div3-button4" onclick="button_click(this,4)">报告预览</button>
			<button class="top-div3-button4" onclick="button_click(this,5)">报告导出</button>
		</div>
		<div class="main-bottom">
			<!--  按钮一控制显示的界面 为 main-bottom-div1-->
			<div class="main-bottom-div1 div1" id="recordList">
				<table class="bottom-table">
					<thead>
						<tr class="bottom-table-th1">
							<td class="table-th-td1" rowspan="2">一级指标</td>
							<td class="table-th-td2" rowspan="2">二级指标</td>
							<td class="table-th-td2" rowspan="2">三级指标</td>
							<td class="table-th-td3" id="userNum">专家个人评分</td>
							<td class="table-th-td4" rowspan="2">专家组考查评分</td>
						</tr>
						<tr class="bottom-table-th2" id='userList'>
						</tr>
					</thead>
					<tbody id="recordBody">
						<!-- <tr class="bottom-table-td">
							<td rowspan="6">1.培养目标与培养方案(16分)</td>
							<td rowspan="3">1.1 专业定位与人才培养目标(6分)</td>
							<td>1.1.1aaaaaaaaaaaaa</td>
							<td></td>
							<td></td>
							<td></td>
							<td class="table-tr-td5"><input type="number" class="input_button" /></td>
							<td class="table-tr-td6" rowspan="6">自动计算(取平均值)</td>
						</tr>
						<tr class="bottom-table-td">
							<td>1.1.2aaaaaaaaaaaaa</td>
							<td></td>
							<td></td>
							<td></td>
							<td><input type="number" class="input_button"/></td>
						</tr>
						<tr class="bottom-table-td">
							<td>1.1.3aaaaaaaaaaaaa</td>
							<td></td>
							<td></td>
							<td></td>
							<td><input type="number" class="input_button"/></td>
						</tr>
						<tr class="bottom-table-td">
							<td rowspan="2">1.2 培养方案(5分)</td>
							<td>1.2.1aaaaaaaaaaaaaaa</td>
							<td></td>
							<td></td>
							<td></td>
							<td><input type="number" class="input_button"/></td>
						</tr>
						<tr class="bottom-table-td">
							<td>1.2.2aaaaaaaaaaaaaaa</td>
							<td></td>
							<td></td>
							<td></td>
							<td><input type="number" class="input_button"/></td>
						</tr>
						<tr class="bottom-table-td">
							<td>1.3 课程体系(5分)</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td><input type="number" class="input_button"/></td>
						</tr> -->
					</tbody>
				</table>
			</div>
			<!--  按钮二控制显示的界面 为 main-bottom-div2-->
			<div class="main-bottom-div2 div1">查看专业评估材料 界面</div>
			<!--  按钮三控制显示的界面 为 main-bottom-div3-->
			<div class="main-bottom-div3 div1" onmousedown="showRightMenu(this,event)">
				<span style="line-height: 27px;color: green;">操作提示：右键点击加目录,目录选中再编辑</span>
				<!--  用table 布局控制的tab切换-->
				<table class="bottom-div3-table">
					<tr id='nodeList'>
						
					</tr>
				</table>
			<div class="bottom-div3-div1 div1">
				<textarea name="content" id="content" rows="80" onBlur="saveReport()"></textarea>
			</div>
			<!--  按钮四控制显示的界面 为 main-bottom-div4-->
			<div class="main-bottom-div4 div1 div2">导出考查报告 界面</div>
		</div>
		
	</div>
		<div class="div_cm" id="addDialog">
           		<p class="close"><a href="#" onclick="closeDialog();">关闭</a></p> 
           		<div style="margin-left: 75px;margin-top: 50px;">
           			<ul>
           				<li >目录名：<input type="text" id="name" class="main-center-li-two"></li>
           				<li class="center-li-two" style="margin-top: 40px;margin-left: 10px;width: 233px;">
           					<input type="button" style="width: 105px;  height: 26px;margin-right: 15px;" onclick="addNewNode()" value="确定" />
           					<input type="button" style="width: 105px;  height: 26px;" onclick="closeDialog()" value="取消" />
                        </li>
           			</ul>
           		</div>
           </div>
           <div class="black_overlay" id="overlay"></div>
</body>
</html>
