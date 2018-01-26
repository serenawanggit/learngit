<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css"
	type="text/css"></link>

<script type="text/javascript" src="js/ZYReportFormat2.js"></script>
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/base.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/inject.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/ligerui.all.js" type="text/javascript"></script>

<style type="text/css">
	#tableData{
		border-left:1px #cdcdcd solid;
		border-bottom:1px #cdcdcd solid;
	}
	#tableData td{
		border-top:1px #cdcdcd solid;
		border-right:1px #cdcdcd solid;
		height:30px;
	}
</style>

<script type="text/javascript">
	var object1;
	var object2;
	var object3;
	var object4;
	var object5;
	$(function() {
		//formatEndYear("year");
		formatDate("year");
		Zyselects();
	});

	function byyear() {
		Zyselects();
	}

	function Zyselects() {
		hideLodding();
		$("#table_2_1 tbody").empty();
		
		$.ajax({
			url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
			type : "POST",
			async : false,
			data : {
				key : "ASDS_table1_7",
				year : $("#year").val(),
				code : getCode()
			},
			success : function(data) {
				var result = eval("(" + data + ")");
				if (result.length > 0) {
					$("#td_1").html(parseInt(result[0][0])+parseInt(result[0][1])+parseInt(result[0][2]));
					$("#td_2").html(result[0][0]);
					$("#td_3").html(result[0][1]);
					$("#td_4").html(result[0][2]);
					$("#td_5").html(parseInt(result[0][3])+parseInt(result[0][4])+parseInt(result[0][5]));
					$("#td_6").html(result[0][3]);
					$("#td_7").html(result[0][4]);
					$("#td_8").html(result[0][5]);
					$("#td_9").html(parseInt(result[0][6])+parseInt(result[0][7])+parseInt(result[0][8]));
					$("#td_10").html(result[0][6]);
					$("#td_11").html(result[0][7]);
					$("#td_12").html(result[0][8]);
					$("#td_13").html(result[0][12]);
					$("#td_16").html(result[0][13]);
					$("#td_17").html(result[0][14]);
					$("#td_18").html(result[0][15]);
					$("#td_19").html(result[0][16]);
				}else{
					$("#td_1").html(0);
					$("#td_2").html(0);
					$("#td_3").html(0);
					$("#td_4").html(0);
					$("#td_5").html(0);
					$("#td_6").html(0);
					$("#td_7").html(0);
					$("#td_8").html(0);
					$("#td_9").html(0);
					$("#td_10").html(0);
					$("#td_11").html(0);
					$("#td_12").html(0);
					$("#td_13").html(0);
					$("#td_16").html(0);
					$("#td_17").html(0);
					$("#td_18").html(0);
					$("#td_19").html(0);
				}
				/* if (result.length > 0) {
					object1 = result;
					var html = "";
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(1)'>"+result.length+"</a>";
					$("#field1").html(str);
				} else {
					object1 = null;
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(1)'>0</a>";
					$("#field1").html(str);
				} */
			},
			error : function() {
				alert("加载失败");
			}
		});
		
		$.ajax({
			url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
			type : "POST",
			async : false,
			data : {
				key : "ASDS_table1_7_1",
				year : $("#year").val(),
				num : getNum(),
				code : getCode()
			},
			success : function(data) {
				var result = eval("(" + data + ")");
				if (result.length > 0) {
					object1 = result;
					var html = "";
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(1)'>"+result.length+"</a>";
					$("#field1").html(str);
				} else {
					object1 = null;
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(1)'>0</a>";
					$("#field1").html(str);
				}
			},
			error : function() {
				alert("加载失败");
			}
		});

		$.ajax({
			url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
			type : "POST",
			async : false,
			data : {
				key : "ASDS_table1_7_2",
				year : $("#year").val(),
				num : getNum(),
				code : getCode()
			},
			success : function(data) {
				var result = eval("(" + data + ")");
				if (result.length > 0) {
					object2 = result;
					var html = "";
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(2)'>"+result.length+"</a>";
					$("#field2").html(str);
				} else {
					object2 = null;
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(2)'>0</a>";
					$("#field2").html(str);
				}
			},
			error : function() {
				alert("加载失败");
			}
		});
		$.ajax({
			url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
			type : "POST",
			async : false,
			data : {
				key : "ASDS_table1_7_3",
				year : $("#year").val(),
				num : getNum(),
				code : getCode()
			},
			success : function(data) {
				var result = eval("(" + data + ")");
				console.info(result);
				if (result.length > 0) {
					object3 = result;
					var html = "";
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(3)'>"+result.length+"</a>";
					$("#field3").html(str);
				} else {
					object3 = null;
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(3)'>0</a>";
					$("#field3").html(str);
				}
			},
			error : function() {
				alert("加载失败");
			}
		});

		$.ajax({
			url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
			type : "POST",
			async : false,
			data : {
				key : "ASDS_table1_7_4",
				year : $("#year").val(),
				num : getNum(),
				code : getCode()
			},
			success : function(data) {
				var result = eval("(" + data + ")");
				if (result.length > 0) {
					object4 = result;
					var html = "";
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(4)'>"+result.length+"</a>";
					$("#field4").html(str);
				} else {
					object4 = null;
					var str = "<a href='javascript:void(0);' onclick='findTableDatas1(4)'>0</a>";
					$("#field4").html(str);
				}
			},
			error : function() {
				alert("加载失败");
			}
		});

	}

	function findTableDatas1(num) {

		var table = "<table id='tableData' style='width:99.8%;text-align:center;'  cellpadding='0' cellspacing='0'>"
				+ "<thead><tr id='tr_1' style='background:#EEEEEE;font-weight:bold;'></tr></thead>"
				+ "<tbody id='tbody_1'></tbody>" + "</table>";
		//弹窗
		var winWidth = window.innerWidth;
		var leftWidth = winWidth / 2 - 580;
		$.ligerDialog.open({
			height : 400,
			width : 1005,
			content : table,
			top : 50,
			left : leftWidth,
			title : '查看',
			showMax : false,
			showToggle : true,
			showMin : false,
			isResize : true,
			slide : false,
			isHidden : false,
			//			fixedType:'se',
			buttons : [ {
				text : '关闭',
				onclick : function(item, dialog) {
					dialog.close();
				}
			} ]
		});

		if (num == 1) {
			var str = "";
			var html = "";
			str += "<td>学号</td>";
			str += "<td>姓名</td>";
			str += "<td>比赛名称</td>";
			str += "<td>赛事类别</td>";
			str += "<td>获奖等级</td>";
			str += "<td>获奖时间</td>";
			str += "<td>主办单位</td>";
			str += "<td>学生排名</td>";
			str += "<td>说明</td>";
			$("#tr_1").html(str);
			$.each(object1, function(i, obj) {
				html += "<tr><td>" + (obj[0]) + "</td>" + "<td>" + (obj[1])
						+ "</td>" + "<td>" + (obj[2]) + "</td>" + "<td>"
						+ (obj[3]) + "</td>" + "<td>" + (obj[4]) + "</td>"
						+ "<td>" + (obj[5]) + "</td>" + "<td>" + (obj[6])
						+ "</td>" + "<td>" + (obj[7]) + "</td>" + "<td>"
						+ (obj[8]) + "</td>"  + "</tr>";
			});
			$("#tbody_1").html(html);
		} else if (num == 2) {
			var str = "";
			var html = "";
			str += "<td>学号</td>";
			str += "<td>姓名</td>";
			str += "<td>论文名称</td>";
			str += "<td>发表期刊</td>";
			str += "<td>发表时间</td>";
			str += "<td>收录情况</td>";
			$("#tr_1").html(str);
			$.each(object2, function(i, obj) {
				html += "<tr><td>" + (obj[0]) + "</td>" + "<td>" + (obj[1])
						+ "</td>" + "<td>" + (obj[2]) + "</td>" + "<td>"
						+ (obj[3]) + "</td>" + "<td>" + (obj[4]) + "</td>"
						+ "<td>" + (obj[5]) + "</td>"  + "</tr>";
			});
			$("#tbody_1").html(html);
		} else if (num == 3) {
			var str = "";
			var html = "";
			str += "<td>学号</td>";
			str += "<td>姓名</td>";
			str += "<td>作品名称</td>";
			str += "<td>类别</td>";
			str += "<td>类型</td>";
			str += "<td>发布时间</td>";
			str += "<td>发布场地</td>";
			str += "<td>主办单位</td>";
			str += "<td>影响范围</td>";
			$("#tr_1").html(str);
			$.each(object3, function(i, obj) {
				html += "<tr><td>" + (obj[0]) + "</td>" + "<td>" + (obj[1])
						+ "</td>" + "<td>" + (obj[2]) + "</td>" + "<td>"
						+ (obj[3]) + "</td>" + "<td>" + (obj[4]) + "</td>"
						+ "<td>" + (obj[5]) + "</td>"+ "<td>" + (obj[6]) + "</td>"+ "<td>" + (obj[7]) + "</td>"+ "<td>" + (obj[8]) + "</td>" + "</tr>";
			});
			$("#tbody_1").html(html);

		} else if (num == 4) {
			var str = "";
			var html = "";
			str += "<td>学号</td>";
			str += "<td>姓名</td>";
			str += "<td>名称</td>";
			str += "<td>类别</td>";
			str += "<td>授权号</td>";
			str += "<td>获批时间</td>";
			str += "<td>是否第一发明人</td>";
			$("#tr_1").html(str);
			$.each(object4, function(i, obj) {
				html += "<tr><td>" + (obj[0]) + "</td>" + "<td>" + (obj[1])
						+ "</td>" + "<td>" + (obj[2]) + "</td>" + "<td>"
						+ (obj[3]) + "</td>" + "<td>" + (obj[4]) + "</td>"
						+ "<td>" + (obj[5]) + "</td>" + "<td>" + (obj[6]) + "</td>" + "</tr>";
			});
			$("#tbody_1").html(html);

		} else if (num == 5) {
			var str = "";
			var html = "";
			str += "<td>工号</td>";
			str += "<td>姓名</td>";
			str += "<td>单位名称</td>";
			str += "<td>学历</td>";
			str += "<td>最高学位</td>";
			str += "<td>学缘</td>";
			$("#tr_1").html(str);
			$.each(object5, function(i, obj) {
				html += "<tr><td>" + (obj[0]) + "</td>" + "<td>" + (obj[1])
						+ "</td>" + "<td>" + (obj[2]) + "</td>" + "<td>"
						+ (obj[3]) + "</td>" + "<td>" + (obj[4]) + "</td>"
						+ "<td>" + (obj[5]) + "</td>" + "</tr>";
			});
			$("#tbody_1").html(html);
		}
	}

</script>
</head>

<body>
	<%-- 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
 --%>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<h4>学生</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_1_2">
				<thead>
					<tr>
						<td colspan="22">
							<h4 id="filename">1.7 学生学习成效</h4>
							<div class="chocieYear">
								<ul>
									<li>年份： <select class="select_tips tb_select"
										id="year" onchange="byyear()">
											<option>2018/09/30</option>
											<option>2017/09/30</option>
											<option selected="selected">2016/09/30</option>
											<option>2015/09/30</option>
											<option>2014/09/30</option>
									</select></li>
								</ul>
							</div></td>
					</tr>
					<tr>
						<td colspan="2" width="75%">项目</td>
						<td>数量</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowspan="4" style="font-weight:bold;">1.学科竞赛获奖（项）</td>
						<td>总数</td>
						<td id="td_1"></td>
					</tr>
					<tr>
						<td>其中：国际级</td>
						<td id="td_2"></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;国家级</td>
						<td id="td_3"></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;省部级</td>
						<td id="td_4"></td>
					</tr>
					<tr>
						<td rowspan="4" style="font-weight:bold;">2.本科生创新活动、技能竞赛获奖</td>
						<td>总数</td>
						<td id="td_5"></td>
					</tr>
					<tr>
						<td>其中：国际级</td>
						<td id="td_6"></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;国家级</td>
						<td id="td_7"></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;省部级</td>
						<td id="td_8"></td>
					</tr>
					<tr>
						<td rowspan="4" style="font-weight:bold;">3.文艺、体育竞赛获奖（项）</td>
						<td>总数</td>
						<td id="td_9"></td>
					</tr>
					<tr>
						<td>其中：国际级</td>
						<td id="td_10"></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;国家级</td>
						<td id="td_11"></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;省部级</td>
						<td id="td_12"></td>
					</tr>
					<tr>
						<td colspan="2" style="font-weight:bold;">4.学生发表学术论文（篇）</td>
						<td id="field2"></td>
					</tr>
					<tr>
						<td colspan="2" style="font-weight:bold;">5.学生发表作品数（篇、册）</td>
						<td id="field3"></td>
					</tr>
					<tr>
						<td colspan="2" style="font-weight:bold;">6.学生获准专利（著作权）数（项）</td>
						<td id="field4"></td>
					</tr>
					<tr>
						<td rowspan="2" style="font-weight:bold;">7.英语等级考试</td>
						<td>英语四级考试累计通过率（%）</td>
						<td id="td_16"></td>
					</tr>
					<tr>
						<td>英语六级考试累计通过率（%）</td>
						<td id="td_17"></td>
					</tr>
					<tr>
						<td colspan="2" style="font-weight:bold;">8.体质合格率（%）</td>
						<td id="td_18"></td>
					</tr>
					<tr>
						<td colspan="2" style="font-weight:bold;">9.参加国际会议（人次）</td>
						<td id="td_19"></td>
					</tr>
					<!-- <tr>
						<td>专业比赛奖励情况</td>
						<td id="field1"></td>
						<td><a href="javascript:void(0);" onclick="findTableDatas1(1)">查看</a></td>
					</tr>
					<tr>
						<td>学生发表学术论文</td>
						<td id="field2"></td>
						<td><a href="javascript:void(0);" onclick="findTableDatas1(2)">查看</a></td>
					</tr>
					<tr>
						<td>学生发表作品数</td>
						<td id="field3"></td>
						<td><a href="javascript:void(0);" onclick="findTableDatas1(3)">查看</a></td>
					</tr>
					<tr>
						<td>学生获准专利数</td>
						<td id="field4"></td>
						<td><a href="javascript:void(0);" onclick="findTableDatas1(4)">查看</a></td>
					</tr> -->
					<!-- <tr>
							<td>专业比赛奖励情况</td> 
							<td></td>
						</tr>
						<tr>
							<td>学生发表学术论文</td> 
							<td></td>
						</tr>
						<tr>
							<td>学生发表作品数</td> 
							<td></td>
						</tr>
						<tr>
							<td>学生获准专利数</td> 
							<td></td>
						</tr>
						<tr>
							<td>学生发表学术论文</td> 
							<td></td>
						</tr> -->
				</tbody>

				<!-- <tfoot>
					<tr>
						<td colspan="10"><font color="red">※
								以上数据来源：表3-1校领导基本信息。详细数据可参考【附表3校领导情况】。 </font></td>
					</tr>
				</tfoot> -->
			</table>
		</div>
	</div>

</body>
</html>
