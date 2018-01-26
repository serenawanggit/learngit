﻿<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>ASDS_table_main</title>

<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="this is my page">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<style type="text/css">
table {
	border: 0px;
	width: 100%;
	font-size: 10.5pt;
	
}

table thead {
	background-color: #eee;
	border: 1px;
}

table td {
	border: 0px;
	text-align: center;
	height: 30px;
}


</style>
<link rel="stylesheet" href="/CHART/css/ASDSReport.css" type="text/css"></link>
<script type="text/javascript" src="/CHART/js/jquery.js"></script>
<script type="text/javascript" src="/CHART/js/echarts/echarts-all.js"></script>
<script type="text/javascript"
	src="/CHART/js/ASDSReport/ASDSReportFormat.js"></script>

<script type="text/javascript">
	$(function() {
		$("#searchPDF").text("右侧选择年份");
		formatEndYear2("year");
	});

	function buttWord() {
		if ($("#searchPDF").text() != "已完成") {
			alert("数据不完整.请稍后");
			return;
		}
		$("#bodyDiv2").html("");

		var html2 = $("#bodyDiv1").html();
		html2 = html2.replace(new RegExp("(<img [^<>]*>)", "gm"), "$1</img>");
		$("#upload_img").show();
		$
				.ajax({
				    url : getRootPath() + "/CHART/poiWord",///CHART/itext
					//url : getRootPath() + "/audit/itext2Word",///CHART/itext
					type : "POST",
					data : {
						"bodyData" : html2,
						"versionsID":1,
						"wordName":"教学基本状态数据分析报告"
					},
					async : false,
					success : function(dateString) {
						if (dateString != "error") {
							var html = "";
							html = "<form id=\"formid\" action=\""
									+ getRootPath()
									+ "/CHART/poiWordUpload\" method=\"post\"><input type=\"hidden\" id=\"filename\" name=\"filename\" value='审核评估状态数据分析报告'></input><input type=\"hidden\" id=\"dateString\" name=\"dateString\" value='"+dateString+"'></input></form>";
							$("body").append(html);
							$("#formid").submit();
							$("#formid").remove();
							$("#upload_img").fadeOut(1000);
						} else {
							alert("历史纪录 insert...错误");
						}
					}
				});
	}
	//该页面年份下拉
	function formatEndYear2(id) {
		var endYear = 2016;
		var str = "";
		str += "<option value='' selected>---请选择年份---</option>";
		str += "<option value='" + endYear+"/09/30" + "'>" + endYear + "/09/30"
				+ "</option>";
		for ( var i = endYear + 1; i <= 2019; i++) {
			str += "<option value='" + i +"/09/30" + "'>" + i + "/09/30"
					+ "</option>";
		}
		$("#" + id).html(str);
	}

	function yearchange() {
		if ($("#year").val() == "") {
			return;
		}
		var myDate = new Date();
		$("#h3Date").text(myDate.toLocaleDateString());

		$("#searchPDF").text("正在加载数据...");

		$("#searchPDF").text("正在加载数据...G-1");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_tableG-1",
				year : $("#year").val()
			},
			success : function(data) {
			var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								// $("#jiaoshao").hide();
								 return;
							}
				if (data.trim().length > 0) {
					$("#a1").html(result[0][0]);
					$("#a2").html(result[0][1]);
					$("#a3").html(result[0][2]);
					$("#a4").html(result[0][3]);
					$("#a5").html(result[0][4]);
					$("#a6").html(result[0][5]);
					$("#a7").html(result[0][6]);
					$("#a8").html(result[0][7]);
					$("#a9").html(result[0][8]);
					$("#a10").html(result[0][9]);
					$("#a11").html(result[0][10]);
					$("#a12").html(result[0][11]);
					$("#a13").html(result[0][12]);
					$("#a14").html(result[0][13]);
					$("#a15").html(result[0][14]);
					$("#a16").html(result[0][15]);
					$("#a17").html(result[0][16]);
					$("#a18").html(result[0][17]);
					$("#a19").html(result[0][18]);
					$("#a20").html(result[0][19]); 
					hideLodding();
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}

		});
		
		
		$("#searchPDF").text("正在加载数据...G-2");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_tableG-2",
				year : $("#year").val()
			},
			success : function(data) {
			var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								/* 							$("#table_1_2 tbody").html("<tr><td colspan=\"10\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								 */return;
							}
				if (data.trim().length > 0) {
					$("#table_G_2 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
					$("#table_G_2 tbody tr:eq(0) td:eq(2)").html(result[0][1]);
					$("#table_G_2 tbody tr:eq(0) td:eq(3)").html(result[0][2]);
					$("#table_G_2 tbody tr:eq(0) td:eq(4)").html(result[0][3]);
					$("#table_G_2 tbody tr:eq(0) td:eq(5)").html(result[0][4]);
					hideLodding();
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}

		});
		$("#searchPDF").text("正在加载数据...G-3");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_tableG-3",
				year : $("#year").val()
			},
			success : function(data) {
			var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								/* 							$("#table_1_2 tbody").html("<tr><td colspan=\"10\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								 */return;
							}
				if (data.trim().length > 3) {
					$("#table_G_3 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
					$("#table_G_3 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
					$("#table_G_3 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
					$("#table_G_3 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
					$("#table_G_3 tbody tr:eq(4) td:eq(1)").html(result[0][4]);
					$("#table_G_3 tbody tr:eq(5) td:eq(1)").html(
							valueFormat(result[0][5], 2));
					$("#table_G_3 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
/* 					$("#table_G_3 tbody tr:eq(7) td:eq(1)").html(result[0][7]);
					$("#table_G_3 tbody tr:eq(8) td:eq(1)").html(
							(valueFormat(result[0][8], 2))); */
				}

			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});

		$("#searchPDF").text("正在加载数据...G-4");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_tableG-4",
				year : $("#year").val()
			},
			success : function(data) {
			var result = eval("(" + data + ")");
				if (data.trim().length > 3) {
					$("#table_G_4 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
					$("#table_G_4 tbody tr:eq(1) td:eq(2)").html(result[0][1]);
					$("#table_G_4 tbody tr:eq(2) td:eq(2)").html(result[0][2]);
					$("#table_G_4 tbody tr:eq(3) td:eq(2)").html(result[0][3]);
					$("#table_G_4 tbody tr:eq(4) td:eq(2)").html(result[0][4]);
					$("#table_G_4 tbody tr:eq(5) td:eq(2)").html(result[0][5]);
					$("#table_G_4 tbody tr:eq(6) td:eq(2)").html(result[0][6]);
					$("#table_G_4 tbody tr:eq(7) td:eq(2)").html(result[0][7]);
					$("#table_G_4 tbody tr:eq(8) td:eq(2)").html(
							(valueFormat(result[0][8], 2)));
					$("#table_G_4 tbody tr:eq(9) td:eq(2)").html(
							valueFormat(result[0][9], 2));
					$("#table_G_4 tbody tr:eq(10) td:eq(2)").html(
							valueFormat(result[0][10], 2));
					$("#table_G_4 tbody tr:eq(11) td:eq(2)").html(
							valueFormat(result[0][11], 2));
					$("#table_G_4 tbody tr:eq(12) td:eq(2)").html(
							valueFormat(result[0][12], 2));
					$("#table_G_4 tbody tr:eq(13) td:eq(2)").html(
							valueFormat(result[0][13], 2));
					$("#table_G_4 tbody tr:eq(14) td:eq(2)").html(
							valueFormat(result[0][14], 2));
					$("#table_G_4 tbody tr:eq(15) td:eq(2)").html(
							valueFormat(result[0][15], 2));
					$("#table_G_4 tbody tr:eq(16) td:eq(2)").html(
							valueFormat(result[0][16], 2));
					$("#table_G_4 tbody tr:eq(17) td:eq(2)").html(
							valueFormat(result[0][17], 2));
					$("#table_G_4 tbody tr:eq(18) td:eq(2)").html(
							valueFormat(result[0][18], 2));
					$("#table_G_4 tbody tr:eq(19) td:eq(2)")
							.html(result[0][19]);
					$("#table_G_4 tbody tr:eq(20) td:eq(2)")
							.html(result[0][20]);
					$("#table_G_4 tbody tr:eq(21) td:eq(2)")
							.html(result[0][21]);
					$("#table_G_4 tbody tr:eq(22) td:eq(2)")
							.html(result[0][22]);
					$("#table_G_4 tbody tr:eq(23) td:eq(2)")
							.html(result[0][23]);
					$("#table_G_4 tbody tr:eq(24) td:eq(2)")
							.html(result[0][24]);
				}

			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});

		$("#searchPDF").text("正在加载数据...1-1");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table1-1",
				year : $("#year").val()
			},
			success : function(data) {
			var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								/* 							$("#table_1_2 tbody").html("<tr><td colspan=\"10\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								 */return;
							}
				if (data.trim().length > 0) {
					$("#span1").html(result[0][0]);
					$("#span2").html(result[0][1]);
				}

			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});

		$("#searchPDF").text("正在加载数据...1-2");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table1-2",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								/* 							$("#table_1_2 tbody").html("<tr><td colspan=\"10\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								 */return;
							}
							$("#table_1_2 tbody tr:eq(0) td:eq(1)").html(
									result[0][0]);
							$("#table_1_2 tbody tr:eq(0) td:eq(2)").html(
									result[0][2]);
							$("#table_1_2 tbody tr:eq(0) td:eq(3)").html(
									result[0][4]);
							$("#table_1_2 tbody tr:eq(0) td:eq(4)").html(
									result[0][6]);
							$("#table_1_2 tbody tr:eq(0) td:eq(5)").html(
									result[0][8]);
							$("#table_1_2 tbody tr:eq(0) td:eq(6)").html(
									result[0][10]);
							$("#table_1_2 tbody tr:eq(0) td:eq(7)").html(
									result[0][12]);
							$("#table_1_2 tbody tr:eq(0) td:eq(8)").html(
									result[0][14]);
							$("#table_1_2 tbody tr:eq(0) td:eq(9)").html(
									result[0][16]);
							//百分比
							$("#table_1_2 tbody tr:eq(1) td:eq(1)").html(
									result[0][1]);
							$("#table_1_2 tbody tr:eq(1) td:eq(2)").html(
									valueFormat(result[0][3], 1));
							$("#table_1_2 tbody tr:eq(1) td:eq(3)").html(
									valueFormat(result[0][5], 1));
							$("#table_1_2 tbody tr:eq(1) td:eq(4)").html(
									valueFormat(result[0][7], 1));
							$("#table_1_2 tbody tr:eq(1) td:eq(5)").html(
									valueFormat(result[0][9], 1));
							$("#table_1_2 tbody tr:eq(1) td:eq(6)").html(
									valueFormat(result[0][11], 1));
							$("#table_1_2 tbody tr:eq(1) td:eq(7)").html(
									valueFormat(result[0][13], 1));
							$("#table_1_2 tbody tr:eq(1) td:eq(8)").html(
									valueFormat(result[0][15], 1));
							$("#table_1_2 tbody tr:eq(1) td:eq(9)").html(
									valueFormat(result[0][17], 1));
						} else {
							hideLodding();
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...1-3");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table1-3",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								/* 							$("#table_1_3 tbody").html("<tr><td colspan=\"15\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								 */return;
							}
							$("#table_1_3 tbody tr:eq(0) td:eq(1)").html(
									result[0][0]);
							$("#table_1_3 tbody tr:eq(0) td:eq(2)").html(
									result[0][2]);
							$("#table_1_3 tbody tr:eq(0) td:eq(3)").html(
									result[0][4]);
							$("#table_1_3 tbody tr:eq(0) td:eq(4)").html(
									result[0][6]);
							$("#table_1_3 tbody tr:eq(0) td:eq(5)").html(
									result[0][8]);
							$("#table_1_3 tbody tr:eq(0) td:eq(6)").html(
									result[0][10]);
							$("#table_1_3 tbody tr:eq(0) td:eq(7)").html(
									result[0][12]);
							$("#table_1_3 tbody tr:eq(0) td:eq(8)").html(
									result[0][14]);
							$("#table_1_3 tbody tr:eq(0) td:eq(9)").html(
									result[0][16]);
							$("#table_1_3 tbody tr:eq(0) td:eq(10)").html(
									result[0][18]);
							$("#table_1_3 tbody tr:eq(0) td:eq(11)").html(
									result[0][20]);
							$("#table_1_3 tbody tr:eq(0) td:eq(12)").html(
									result[0][22]);
							$("#table_1_3 tbody tr:eq(0) td:eq(13)").html(
									result[0][24]);
							$("#table_1_3 tbody tr:eq(0) td:eq(14)").html(
									result[0][26]);
							//百分比
							//$("#table_1_3 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],1));
							$("#table_1_3 tbody tr:eq(1) td:eq(1)").html('/');
							$("#table_1_3 tbody tr:eq(1) td:eq(2)").html(
									valueFormat(result[0][3], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(3)").html(
									valueFormat(result[0][5], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(4)").html(
									valueFormat(result[0][7], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(5)").html(
									valueFormat(result[0][9], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(6)").html(
									valueFormat(result[0][11], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(7)").html(
									valueFormat(result[0][13], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(8)").html(
									valueFormat(result[0][15], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(9)").html(
									valueFormat(result[0][17], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(10)").html(
									valueFormat(result[0][19], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(11)").html(
									valueFormat(result[0][21], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(12)").html(
									valueFormat(result[0][23], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(13)").html(
									valueFormat(result[0][25], 1));
							$("#table_1_3 tbody tr:eq(1) td:eq(14)").html(
									valueFormat(result[0][27], 1));
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...1-4");
		//var counts;
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table1-4",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null || result.length<=2) {
						return;
					}
					//wudi=result.length;
					var html4="";
						for ( var i = 0; i < 7; i++) {
							 html4+="<tr>";
									 if(i==0){
									 	html4+="<td>所含本科专业数</td> ";
									 }
									  if(i==1){
									 	html4+="<td>比例(%)</td> ";
									 }
									  if(i==2){
									 	html4+="<td>博士学位授权一级学科点数</td> ";
									 }
									  if(i==3){
									 	html4+="<td>博士学位授权二级学科点数(不含一级学科覆盖点)</td> ";
									 }
									  if(i==4){
									 	html4+="<td>硕士学位授权一级学科点数</td> ";
									 }
									  if(i==5){
									 	html4+="<td>硕士学位授权二级学科点数(不含一级学科覆盖点)</td> ";
									 }
									  if(i==6){
									 	html4+="<td>重点学科数</td> ";
									 }
									html4+="<td>"+result[0][i+1]+"</td>";
									html4+="<td>"+result[1][i+1]+"</td>";
									html4+="<td>"+result[2][i+1]+"</td>";
									html4+="<td>"+result[3][i+1]+"</td> ";
									html4+="<td>"+result[4][i+1]+"</td>";
									html4+="<td>"+result[5][i+1]+"</td>";
									html4+="<td>"+result[6][i+1]+"</td> ";
									html4+="<td>"+result[7][i+1]+"</td> ";
									html4+="<td>"+result[8][i+1]+"</td> ";
									html4+="<td>"+result[9][i+1]+"</td> ";
									html4+="<td>"+result[10][i+1]+"</td> ";
									html4+="<td>"+result[11][i+1]+"</td> ";
									html4+="<td>"+result[12][i+1]+"</td> ";
								html4+="</tr>";
								
							
						}
					$("#table_1_4 tbody").html(html4);
						$("#table_1_4 tbody tr:eq(1) td:eq(13)").html("/");
				} else {
					return;
				}

			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});

/* 		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table1-4-fj-sum",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
					var html = "";
					$.each(result, function(i, obj) {
						html += "<tr>";
						html += "<td>" + "总计" + "</td> ";
						html += "<td>" + result[i][0] + "</td> ";
						html += "<td>" + result[i][1] + "</td>";
						html += "<td>" + result[i][2] + "</td>";
						html += "<td>" + result[i][3] + "</td> ";
						html += "<td>" + result[i][4] + "</td>";
						html += "<td>" + result[i][5] + "</td>";
						html += "<td>" + result[i][6] + "</td> ";
						html += "</tr>";
					});
					$("#table_1_4 tbody").append(html);
				} else {
					return;
				}

			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		}); */
		$("#searchPDF").text("正在加载数据...1-5");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table1-5",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_1_5 tbody")
										.html(
												"<tr><td colspan=\"8\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								if (result[i][0] != 0) {
									html += "<tr>";
									html += "<td>" + (i + 1) + "</td>";
									html += "<td>" + result[i][0] + "</td> ";
									html += "<td>" + result[i][1] + "</td>";
									html += "<td>" + result[i][2] + "</td>";
									html += "<td>" + result[i][3] + "</td> ";
									html += "<td>" + result[i][4] + "</td>";
									html += "<td>" + result[i][5] + "</td>";
									html += "<td>" + result[i][6] + "</td> ";
									html += "<td>" + result[i][7] + "</td>";
									html += "</tr>";
								}
							}

							$("#table_1_5 tbody").html(html);
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});

		$("#searchPDF").text("正在加载数据...2-1");
		//2-1
		$
				.ajax({
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-1",
						year : $("#year").val()
					},
					async : false,
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");

							if (result == "" || result == null) {
								$("#table_2_1 tbody")
										.html(
												"<tr><td colspan=\"4\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
						$("#table_2_1 tr:eq(2) td:eq(2)").html(result[0][0]);
 						$("#table_2_1 tr:eq(2) td:eq(3)").html('/');
						
						$("#table_2_1 tr:eq(3) td:eq(1)").html(result[0][1]);
						$("#table_2_1 tr:eq(3) td:eq(2)").html(valueFormat(result[0][2],1));
						
						$("#table_2_1 tr:eq(4) td:eq(1)").html(result[0][3]);
						$("#table_2_1 tr:eq(4) td:eq(2)").html(valueFormat(result[0][4],1));
						
						$("#table_2_1 tr:eq(5) td:eq(1)").html(result[0][5]);
						$("#table_2_1 tr:eq(5) td:eq(2)").html(valueFormat(result[0][6],1));
						
						$("#table_2_1 tr:eq(6) td:eq(1)").html(result[0][7]);
						$("#table_2_1 tr:eq(6) td:eq(2)").html(valueFormat(result[0][8],1));
						
						$("#table_2_1 tr:eq(7) td:eq(1)").html(result[0][9]);
						$("#table_2_1 tr:eq(7) td:eq(2)").html(valueFormat(result[0][10],1));
						
						$("#table_2_1 tr:eq(8) td:eq(2)").html(result[0][11]);
 						$("#table_2_1 tr:eq(8) td:eq(3)").html('/');
						
						$("#table_2_1 tr:eq(9) td:eq(1)").html(result[0][12]);
						$("#table_2_1 tr:eq(9) td:eq(2)").html(valueFormat(result[0][13],1));

						$("#table_2_1 tr:eq(10) td:eq(1)").html(result[0][14]);
						$("#table_2_1 tr:eq(10) td:eq(2)").html('/');

						$("#table_2_1 tr:eq(11) td:eq(1)").html(result[0][15]);
						$("#table_2_1 tr:eq(11) td:eq(2)").html('/');

						$("#table_2_1 tr:eq(12) td:eq(1)").html(result[0][16]);
 						$("#table_2_1 tr:eq(12) td:eq(2)").html('/');
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...2-2");
		/* 2-2 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-2",
						year : $("#year").val()
					},
					success : function(data) {

						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");

							if (result == "" || result == null) {
								 							$("#table_2_2 tbody").html("<tr><td colspan=\"22\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								 return;
							}

							// 总数
						$("#table_2_2 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_2_2 tbody tr:eq(0) td:eq(2)").html('/');
						$("#table_2_2 tbody tr:eq(0) td:eq(3)").html(result[0][41]);
						$("#table_2_2 tbody tr:eq(0) td:eq(4)").html('/');
						
						//职称
						$("#table_2_2 tbody tr:eq(1) td:eq(2)").html(result[0][1]);
						$("#table_2_2 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][2], 1));
						$("#table_2_2 tbody tr:eq(2) td:eq(1)").html(result[0][3]);
						$("#table_2_2 tbody tr:eq(2) td:eq(2)").html(valueFormat(result[0][4], 1));
						$("#table_2_2 tbody tr:eq(3) td:eq(1)").html(result[0][5]);
						$("#table_2_2 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][6], 1));
						$("#table_2_2 tbody tr:eq(4) td:eq(1)").html(result[0][7]);
						$("#table_2_2 tbody tr:eq(4) td:eq(2)").html(valueFormat(result[0][8], 1));
						$("#table_2_2 tbody tr:eq(5) td:eq(1)").html(result[0][9]);
						$("#table_2_2 tbody tr:eq(5) td:eq(2)").html(valueFormat(result[0][10], 1));
						$("#table_2_2 tbody tr:eq(6) td:eq(1)").html(result[0][11]);
						$("#table_2_2 tbody tr:eq(6) td:eq(2)").html(valueFormat(result[0][12], 1));
						$("#table_2_2 tbody tr:eq(7) td:eq(1)").html(result[0][13]);
						$("#table_2_2 tbody tr:eq(7) td:eq(2)").html(valueFormat(result[0][14], 1));
						$("#table_2_2 tbody tr:eq(8) td:eq(1)").html(result[0][15]);
						$("#table_2_2 tbody tr:eq(8) td:eq(2)").html(valueFormat(result[0][16], 1));
						$("#table_2_2 tbody tr:eq(9) td:eq(1)").html(result[0][17]);
						$("#table_2_2 tbody tr:eq(9) td:eq(2)").html(valueFormat(result[0][18], 1));
						$("#table_2_2 tbody tr:eq(10) td:eq(2)").html(result[0][19]);
						$("#table_2_2 tbody tr:eq(10) td:eq(3)").html(valueFormat(result[0][20], 1));
						$("#table_2_2 tbody tr:eq(11) td:eq(1)").html(result[0][21]);
						$("#table_2_2 tbody tr:eq(11) td:eq(2)").html(valueFormat(result[0][22], 1));
						$("#table_2_2 tbody tr:eq(12) td:eq(1)").html(result[0][23]);
						$("#table_2_2 tbody tr:eq(12) td:eq(2)").html(valueFormat(result[0][24], 1));
						$("#table_2_2 tbody tr:eq(13) td:eq(1)").html(result[0][25]);
						$("#table_2_2 tbody tr:eq(13) td:eq(2)").html(valueFormat(result[0][26], 1));
						$("#table_2_2 tbody tr:eq(14) td:eq(2)").html(result[0][27]);
						$("#table_2_2 tbody tr:eq(14) td:eq(3)").html(valueFormat(result[0][28], 1));
						$("#table_2_2 tbody tr:eq(15) td:eq(1)").html(result[0][29]);
						$("#table_2_2 tbody tr:eq(15) td:eq(2)").html(valueFormat(result[0][30], 1));
						$("#table_2_2 tbody tr:eq(16) td:eq(1)").html(result[0][31]);
						$("#table_2_2 tbody tr:eq(16) td:eq(2)").html(valueFormat(result[0][32], 1));
						$("#table_2_2 tbody tr:eq(17) td:eq(1)").html(result[0][33]);
						$("#table_2_2 tbody tr:eq(17) td:eq(2)").html(valueFormat(result[0][34], 1));
						$("#table_2_2 tbody tr:eq(18) td:eq(2)").html(result[0][35]);
						$("#table_2_2 tbody tr:eq(18) td:eq(3)").html(valueFormat(result[0][36], 1));
						$("#table_2_2 tbody tr:eq(19) td:eq(2)").html(result[0][37]);
						$("#table_2_2 tbody tr:eq(19) td:eq(3)").html(valueFormat(result[0][38], 1));
						$("#table_2_2 tbody tr:eq(20) td:eq(1)").html(result[0][39]);
						$("#table_2_2 tbody tr:eq(20) td:eq(2)").html(valueFormat(result[0][40], 1));
						
						
						$("#table_2_2 tbody tr:eq(1) td:eq(4)").html(result[0][42]);
						$("#table_2_2 tbody tr:eq(1) td:eq(5)").html(valueFormat(result[0][43], 1));
						$("#table_2_2 tbody tr:eq(2) td:eq(3)").html(result[0][44]);
						$("#table_2_2 tbody tr:eq(2) td:eq(4)").html(valueFormat(result[0][45], 1));
						$("#table_2_2 tbody tr:eq(3) td:eq(3)").html(result[0][46]);
						$("#table_2_2 tbody tr:eq(3) td:eq(4)").html(valueFormat(result[0][47], 1));
						$("#table_2_2 tbody tr:eq(4) td:eq(3)").html(result[0][48]);
						$("#table_2_2 tbody tr:eq(4) td:eq(4)").html(valueFormat(result[0][49], 1));
						$("#table_2_2 tbody tr:eq(5) td:eq(3)").html(result[0][50]);
						$("#table_2_2 tbody tr:eq(5) td:eq(4)").html(valueFormat(result[0][51], 1));
						$("#table_2_2 tbody tr:eq(6) td:eq(3)").html(result[0][52]);
						$("#table_2_2 tbody tr:eq(6) td:eq(4)").html(valueFormat(result[0][53], 1));
						$("#table_2_2 tbody tr:eq(7) td:eq(3)").html(result[0][54]);
						$("#table_2_2 tbody tr:eq(7) td:eq(4)").html(valueFormat(result[0][55], 1));
						$("#table_2_2 tbody tr:eq(8) td:eq(3)").html(result[0][56]);
						$("#table_2_2 tbody tr:eq(8) td:eq(4)").html(valueFormat(result[0][57], 1));
						$("#table_2_2 tbody tr:eq(9) td:eq(3)").html(result[0][58]);
						$("#table_2_2 tbody tr:eq(9) td:eq(4)").html(valueFormat(result[0][59], 1));
						//最高学位
						$("#table_2_2 tbody tr:eq(10) td:eq(4)").html(result[0][60]);
						$("#table_2_2 tbody tr:eq(10) td:eq(5)").html(valueFormat(result[0][61], 1));
						$("#table_2_2 tbody tr:eq(11) td:eq(3)").html(result[0][62]);
						$("#table_2_2 tbody tr:eq(11) td:eq(4)").html(valueFormat(result[0][63], 1));
						$("#table_2_2 tbody tr:eq(12) td:eq(3)").html(result[0][64]);
						$("#table_2_2 tbody tr:eq(12) td:eq(4)").html(valueFormat(result[0][65], 1));
						$("#table_2_2 tbody tr:eq(13) td:eq(3)").html(result[0][66]);
						$("#table_2_2 tbody tr:eq(13) td:eq(4)").html(valueFormat(result[0][67], 1));
						//年龄
						$("#table_2_2 tbody tr:eq(14) td:eq(4)").html(result[0][68]);
						$("#table_2_2 tbody tr:eq(14) td:eq(5)").html(valueFormat(result[0][69], 1));
						$("#table_2_2 tbody tr:eq(15) td:eq(3)").html(result[0][70]);
						$("#table_2_2 tbody tr:eq(15) td:eq(4)").html(valueFormat(result[0][71], 1));
						$("#table_2_2 tbody tr:eq(16) td:eq(3)").html(result[0][72]);
						$("#table_2_2 tbody tr:eq(16) td:eq(4)").html(valueFormat(result[0][73], 1));
						$("#table_2_2 tbody tr:eq(17) td:eq(3)").html(result[0][74]);
						$("#table_2_2 tbody tr:eq(17) td:eq(4)").html(valueFormat(result[0][75], 1));
						
						//学员
						$("#table2-2 tbody tr:eq(18) td:eq(4)").html("0");
						$("#table2-2 tbody tr:eq(18) td:eq(5)").html("0.00");
						$("#table2-2 tbody tr:eq(19) td:eq(4)").html("0");
						$("#table2-2 tbody tr:eq(19) td:eq(5)").html("0.00");
						$("#table2-2 tbody tr:eq(20) td:eq(3)").html("0");
						$("#table2-2 tbody tr:eq(20) td:eq(4)").html("0.00");
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...2-3");
		/* 2-3 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-3",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_2_3 tbody")
										.html(
												"<tr><td colspan=\"11\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var str = "";
							for ( var i = 0; i < result.length; i++) {
								str += "<tr>";
								str += "<td>" + (i + 1) + "</td>";
								str += "<td>" + result[i][0] + "</td>";
								str += "<td>" + result[i][1] + "</td>";
								str += "<td>" + result[i][2] + "</td>";
								str += "<td>" + valueFormat(result[i][3], 1)+ "</td>";
								str += "<td>" + result[i][4] + "</td>";
								str += "<td>" + valueFormat(result[i][5], 1)+ "</td>";
								str += "<td>" + result[i][6] + "</td>";
								str += "<td>" + valueFormat(result[i][7], 1)+ "</td>";
								str += "<td>" + result[i][8] + "</td>";
								str += "<td>" + result[i][9] + "</td>";
								str += "<td>" + valueFormat(result[i][10], 2)+ "</td>";
								str += "</tr>";
							}
							$("#table_2_3 tbody").html(str);
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...2-4");
		/* 2-4 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-4",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
							var str = "";
							$.each(result, function(i, obj) {
								if (obj[0] != "/") {
									str += "<tr>";
									str += "<td>" + (i + 1) + "</td>";
									str += "<td>" + obj[0] + "</td>";
									str += "<td>" + obj[1] + "</td>";
									//承担课程门数
									str += "<td>" + obj[2] + "</td>";
									str += "<td>" + obj[3] + "</td>";
									str += "<td>" + valueFormat(obj[4], 1)
											+ "</td>";
									str += "<td>" + obj[5] + "</td>";
									str += "<td>" + valueFormat(obj[6], 1)
											+ "</td>";
									str += "<td>" + obj[7] + "</td>";
									str += "<td>" + valueFormat(obj[8], 1)
											+ "</td>";
									str += "<td>" + obj[9] + "</td>";
									str += "<td>" + valueFormat(obj[10], 2)
											+ "</td>";
									str += "</tr>";
								}
							});
							$("#table_2_4 tbody").html(str);
						} else {
							$("#table_2_4 tbody")
									.html(
											"<tr><td colspan=\"10\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...2-5");
		/* 2-5 */
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table2-5",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
					var str = "";
					$.each(result, function(i, obj) {
						if (obj[0] != "/") {
							str += "<tr>";
								str += "<td>"+obj[0]+"</td>";
								str += "<td>"+obj[1]+"</td>";
								str += "<td>"+obj[2]+"</td>";
								//承担课程门数
								str += "<td>"+obj[3]+"</td>";
								str += "<td>"+obj[4]+"</td>";
								str += "<td>"+valueFormat(obj[5],1)+"</td>";
								str += "<td>"+obj[6]+"</td>";
								str += "<td>"+valueFormat(obj[7],1)+"</td>";
								str += "<td>"+obj[8]+"</td>";
								str += "<td>"+valueFormat(obj[9],1)+"</td>";
								str += "<td>"+obj[10]+"</td>";
								str += "<td>"+valueFormat(obj[11],1)+"</td>";
							str += "</tr>";
						}
					});
					$("#table_2_5 tbody").html(str);

				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		/* 2-6 */
		$("#searchPDF").text("正在加载数据...2-6-1");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-6-1",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
											$("#table_2_6 tbody tr:eq(1) td:eq(1)").html(result[0][0]);
						$("#table_2_6 tbody tr:eq(1) td:eq(2)").html(result[0][1]);
						$("#table_2_6 tbody tr:eq(1) td:eq(3)").html(result[0][2]);
						$("#table_2_6 tbody tr:eq(1) td:eq(4)").html(result[0][3]);
						$("#table_2_6 tbody tr:eq(1) td:eq(5)").html(result[0][4]);
						$("#table_2_6 tbody tr:eq(1) td:eq(6)").html(result[0][5]);
						
						$("#table_2_6 tbody tr:eq(2) td:eq(1)").html(result[0][54]);
						$("#table_2_6 tbody tr:eq(2) td:eq(3)").html(result[0][6]);
						$("#table_2_6 tbody tr:eq(2) td:eq(4)").html(valueFormat(result[0][7], 1));
						$("#table_2_6 tbody tr:eq(2) td:eq(5)").html(result[0][8]);
						$("#table_2_6 tbody tr:eq(2) td:eq(6)").html(valueFormat(result[0][9], 1));
						$("#table_2_6 tbody tr:eq(2) td:eq(7)").html(result[0][10]);
						$("#table_2_6 tbody tr:eq(2) td:eq(8)").html(valueFormat(result[0][11], 1));
						
						$("#table_2_6 tbody tr:eq(3) td:eq(1)").html(result[0][12]);
						$("#table_2_6 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][13], 1));
						$("#table_2_6 tbody tr:eq(3) td:eq(3)").html(result[0][14]);
						$("#table_2_6 tbody tr:eq(3) td:eq(4)").html(valueFormat(result[0][15], 1));
						$("#table_2_6 tbody tr:eq(3) td:eq(5)").html(result[0][16]);
						$("#table_2_6 tbody tr:eq(3) td:eq(6)").html(valueFormat(result[0][17], 1));
						
						$("#table_2_6 tbody tr:eq(4) td:eq(1)").html(result[0][18]);
						$("#table_2_6 tbody tr:eq(4) td:eq(2)").html(valueFormat(result[0][19], 1));
						$("#table_2_6 tbody tr:eq(4) td:eq(3)").html(result[0][20]);
						$("#table_2_6 tbody tr:eq(4) td:eq(4)").html(valueFormat(result[0][21], 1));
						$("#table_2_6 tbody tr:eq(4) td:eq(5)").html(result[0][22]);
						$("#table_2_6 tbody tr:eq(4) td:eq(6)").html(valueFormat(result[0][23], 1));
						
						
						$("#table_2_6 tbody tr:eq(5) td:eq(1)").html(result[0][24]);
						$("#table_2_6 tbody tr:eq(5) td:eq(2)").html(valueFormat(result[0][25], 1));
						$("#table_2_6 tbody tr:eq(5) td:eq(3)").html(result[0][26]);
						$("#table_2_6 tbody tr:eq(5) td:eq(4)").html(valueFormat(result[0][27], 1));
						$("#table_2_6 tbody tr:eq(5) td:eq(5)").html(result[0][28]);
						$("#table_2_6 tbody tr:eq(5) td:eq(6)").html(valueFormat(result[0][29], 1));
						
						$("#table_2_6 tbody tr:eq(6) td:eq(1)").html(result[0][55]);
						$("#table_2_6 tbody tr:eq(6) td:eq(3)").html(result[0][30]);
						$("#table_2_6 tbody tr:eq(6) td:eq(4)").html(valueFormat(result[0][31], 1));
						$("#table_2_6 tbody tr:eq(6) td:eq(5)").html(result[0][32]);
						$("#table_2_6 tbody tr:eq(6) td:eq(6)").html(valueFormat(result[0][33], 1));
						$("#table_2_6 tbody tr:eq(6) td:eq(7)").html(result[0][34]);
						$("#table_2_6 tbody tr:eq(6) td:eq(8)").html(valueFormat(result[0][35], 1));
						
						
						$("#table_2_6 tbody tr:eq(7) td:eq(1)").html(result[0][36]);
						$("#table_2_6 tbody tr:eq(7) td:eq(2)").html(valueFormat(result[0][37], 1));
						$("#table_2_6 tbody tr:eq(7) td:eq(3)").html(result[0][38]);
						$("#table_2_6 tbody tr:eq(7) td:eq(4)").html(valueFormat(result[0][39], 1));
						$("#table_2_6 tbody tr:eq(7) td:eq(5)").html(result[0][40]);
						$("#table_2_6 tbody tr:eq(7) td:eq(6)").html(valueFormat(result[0][41], 1));
						
						
						$("#table_2_6 tbody tr:eq(8) td:eq(1)").html(result[0][42]);
						$("#table_2_6 tbody tr:eq(8) td:eq(2)").html(valueFormat(result[0][43], 1));
						$("#table_2_6 tbody tr:eq(8) td:eq(3)").html(result[0][44]);
						$("#table_2_6 tbody tr:eq(8) td:eq(4)").html(valueFormat(result[0][45], 1));
						$("#table_2_6 tbody tr:eq(8) td:eq(5)").html(result[0][46]);
						$("#table_2_6 tbody tr:eq(8) td:eq(6)").html(valueFormat(result[0][47], 1));
						
						
						$("#table_2_6 tbody tr:eq(9) td:eq(1)").html(result[0][48]);
						$("#table_2_6 tbody tr:eq(9) td:eq(2)").html(valueFormat(result[0][49], 1));
						$("#table_2_6 tbody tr:eq(9) td:eq(3)").html(result[0][50]);
						$("#table_2_6 tbody tr:eq(9) td:eq(4)").html(valueFormat(result[0][51], 1));
						$("#table_2_6 tbody tr:eq(9) td:eq(5)").html(result[0][52]);
						$("#table_2_6 tbody tr:eq(9) td:eq(6)").html(valueFormat(result[0][53], 1));
							// hide
							//hideLodding();
						} else {
							hideLodding();
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
				$("#searchPDF").text("正在加载数据...2-6-2");
				$.ajax({
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-6-2",
						year : $("#year").val()
					},
					async : false,
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_2_6_2 tbody").html("<tr><td colspan=\"16\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
					    var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+valueFormat(obj[3],1)+"</td>";/* valueFormat(obj[3],1) */
								html+="<td>"+obj[4]+"</td>";
								html+="<td>"+valueFormat(obj[5],1)+"</td>";
								html+="<td>"+obj[6]+"</td>";
								html+="<td>"+valueFormat(obj[7],1)+"</td>";
							html+="</tr>"; 
						});
						$("#table_2_6_2 tbody").html(html);
						
						hideLodding();
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				
		/* 2-7 */
		$("#searchPDF").text("正在加载数据...2-7");
		$.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-7-1",
						year : $("#year").val()
					},
					success : function(data) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
							$("#table_2_7_1 tbody").html("<tr><td colspan=\"4\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								 return;
							}
			  				var html="";
							for(var i =0;i<result.length;i++){
								html+="<tr>";
								html+="<td>"+result[i][0]+"</td>";
								html+="<td>"+result[i][1]+"</td>";
								html+="<td>"+result[i][2]+"</td>"; 
								html+="<td>"+result[i][3]+"</td>";
								html+="</tr>"; 
							}
						$("#table_2_7_1 tbody").html(html);
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
					$("#searchPDF").text("正在加载数据...2-7-2");
								$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-7",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_2_7 tbody").html("<tr><td colspan=\"16\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						$("#table_2_7 tbody tr:eq(0) td:eq(1)").html(result[0][0]==""?0:result[0][0]);
						$("#table_2_7 tbody tr:eq(0) td:eq(2)").html(result[0][2]==""?0:result[0][2]);
						$("#table_2_7 tbody tr:eq(0) td:eq(3)").html(result[0][4]==""?0:result[0][4]);
						$("#table_2_7 tbody tr:eq(0) td:eq(4)").html(result[0][6]==""?0:result[0][6]);
						$("#table_2_7 tbody tr:eq(0) td:eq(5)").html(result[0][8]==""?0:result[0][8]);
						$("#table_2_7 tbody tr:eq(0) td:eq(6)").html(result[0][10]==""?0:result[0][10]);
						$("#table_2_7 tbody tr:eq(0) td:eq(7)").html(result[0][12]==""?0:result[0][12]);
						
						$("#table_2_7 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(2)").html(valueFormat(result[0][3],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][5],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(4)").html(valueFormat(result[0][7],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(5)").html(valueFormat(result[0][9],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(6)").html(valueFormat(result[0][11],2));
						$("#table_2_7 tbody tr:eq(1) td:eq(7)").html(result[0][13]);
						// hide
						hideLodding();
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
		/* 2-8 */
		$("#searchPDF").text("正在加载数据...2-8");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-8",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {

								/* 							$("#table_2_8 tbody").html("<tr><td colspan=\"15\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								 */return;
							}
							$("#table_2_8 tbody tr:eq(0) td:eq(1)").html(
									result[0][0]);
							$("#table_2_8 tbody tr:eq(0) td:eq(2)").html(
									result[0][2]);
							$("#table_2_8 tbody tr:eq(0) td:eq(3)").html(
									result[0][4]);
							$("#table_2_8 tbody tr:eq(0) td:eq(4)").html(
									result[0][6]);
							$("#table_2_8 tbody tr:eq(0) td:eq(5)").html(
									result[0][8]);
							$("#table_2_8 tbody tr:eq(0) td:eq(6)").html(
									result[0][10]);
							$("#table_2_8 tbody tr:eq(0) td:eq(7)").html(
									result[0][12]);
							$("#table_2_8 tbody tr:eq(0) td:eq(8)").html(
									result[0][14]);
							$("#table_2_8 tbody tr:eq(0) td:eq(9)").html(
									result[0][16]);
							$("#table_2_8 tbody tr:eq(0) td:eq(10)").html(
									result[0][18]);
							$("#table_2_8 tbody tr:eq(0) td:eq(11)").html(
									result[0][20]);
							$("#table_2_8 tbody tr:eq(0) td:eq(12)").html(
									result[0][22]);
							$("#table_2_8 tbody tr:eq(0) td:eq(13)").html(
									result[0][24]);
							$("#table_2_8 tbody tr:eq(0) td:eq(14)").html(
									result[0][26]);

							$("#table_2_8 tbody tr:eq(1) td:eq(1)").html(
									result[0][1]);
							$("#table_2_8 tbody tr:eq(1) td:eq(2)").html(
									valueFormat(result[0][3], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(3)").html(
									valueFormat(result[0][5], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(4)").html(
									valueFormat(result[0][7], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(5)").html(
									valueFormat(result[0][9], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(6)").html(
									valueFormat(result[0][11], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(7)").html(
									valueFormat(result[0][13], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(8)").html(
									valueFormat(result[0][15], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(9)").html(
									valueFormat(result[0][17], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(10)").html(
									valueFormat(result[0][19], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(11)").html(
									valueFormat(result[0][21], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(12)").html(
									valueFormat(result[0][23], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(13)").html(
									valueFormat(result[0][25], 1));
							$("#table_2_8 tbody tr:eq(1) td:eq(14)").html(
									valueFormat(result[0][27], 1));

						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		/* 2-9 */
		$("#searchPDF").text("正在加载数据...2-9");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-9",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								/* 							$("#table_2_9 tbody").html("<tr><td colspan=\"3\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								 */return;
							}

							$("#table_2_9 tbody tr:eq(0) td:eq(1)").html(
									result[0][0]);
							$("#table_2_9 tbody tr:eq(0) td:eq(2)").html(
									result[0][2]);
							$("#table_2_9 tbody tr:eq(0) td:eq(3)").html(
									result[0][4]);
							$("#table_2_9 tbody tr:eq(0) td:eq(4)").html(
									result[0][6]);
							$("#table_2_9 tbody tr:eq(0) td:eq(5)").html(
									result[0][8]);
							$("#table_2_9 tbody tr:eq(0) td:eq(6)").html(
									result[0][10]);
							$("#table_2_9 tbody tr:eq(0) td:eq(7)").html(
									result[0][12]);
							$("#table_2_9 tbody tr:eq(0) td:eq(8)").html(
									result[0][14]);
							$("#table_2_9 tbody tr:eq(0) td:eq(9)").html(
									result[0][16]);
							$("#table_2_9 tbody tr:eq(0) td:eq(10)").html(
									result[0][18]);
							$("#table_2_9 tbody tr:eq(0) td:eq(11)").html(
									result[0][20]);
							$("#table_2_9 tbody tr:eq(0) td:eq(12)").html(
									result[0][22]);
							$("#table_2_9 tbody tr:eq(0) td:eq(13)").html(
									result[0][24]);
							$("#table_2_9 tbody tr:eq(0) td:eq(14)").html(
									result[0][26]);

							$("#table_2_9 tbody tr:eq(1) td:eq(1)").html(
									result[0][1]);
							$("#table_2_9 tbody tr:eq(1) td:eq(2)").html(
									valueFormat(result[0][3], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(3)").html(
									valueFormat(result[0][5], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(4)").html(
									valueFormat(result[0][7], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(5)").html(
									valueFormat(result[0][9], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(6)").html(
									valueFormat(result[0][11], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(7)").html(
									valueFormat(result[0][13], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(8)").html(
									valueFormat(result[0][15], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(9)").html(
									valueFormat(result[0][17], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(10)").html(
									valueFormat(result[0][19], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(11)").html(
									valueFormat(result[0][21], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(12)").html(
									valueFormat(result[0][23], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(13)").html(
									valueFormat(result[0][25], 1));
							$("#table_2_9 tbody tr:eq(1) td:eq(14)").html(
									valueFormat(result[0][27], 1));
							//hide
						} else {
							hideLodding();
							return;
						}

					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});

		$("#searchPDF").text("正在加载数据...2-10");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-10",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_2_10 tbody")
										.html(
												"<tr><td colspan=\"3\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}

							$("#table_2_10 tbody tr:eq(0) td:eq(2)").html(
									valueFormat(result[0][0], 2));
							$("#table_2_10 tbody tr:eq(1) td:eq(1)").html(
									valueFormat(result[0][1], 2));
							$("#table_2_10 tbody tr:eq(2) td:eq(1)").html(
									valueFormat(result[0][2], 2));
							$("#table_2_10 tbody tr:eq(3) td:eq(2)").html(
									valueFormat(result[0][3], 2));
							$("#table_2_10 tbody tr:eq(4) td:eq(1)").html(
									valueFormat(result[0][4], 2));
							$("#table_2_10 tbody tr:eq(5) td:eq(1)").html(
									valueFormat(result[0][5], 2));
							$("#table_2_10 tbody tr:eq(6) td:eq(1)").html(
									valueFormat(result[0][6], 2));
							$("#table_2_10 tbody tr:eq(7) td:eq(1)").html(
									valueFormat(result[0][7], 2));
							$("#table_2_10 tbody tr:eq(8) td:eq(1)").html(
									valueFormat(result[0][8], 2));
							$("#table_2_10 tbody tr:eq(9) td:eq(1)").html(
									valueFormat(result[0][9], 2));
							$("#table_2_10 tbody tr:eq(10) td:eq(1)").html(
									valueFormat(result[0][10], 2));

						} else {
							hideLodding();
							return;
						}

					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		/* 3-1  */
		$("#searchPDF").text("正在加载数据...3-1");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table3-1",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
				$("#table_3_1 tbody tr:eq(0) td:eq(1)").html(valueFormat(result[0][0],2));
						$("#table_3_1 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],2));
						$("#table_3_1 tbody tr:eq(2) td:eq(1)").html(valueFormat(result[0][2],2));

				} else {

					return;
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		//附加
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table3-1-fj-qyzb",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 2) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
						$("#table_3_1 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][0],2));
						$("#table_3_1 tbody tr:eq(4) td:eq(2)").html(valueFormat(result[0][1],2));
						$("#table_3_1 tbody tr:eq(5) td:eq(1)").html(valueFormat(result[0][2],2));
						$("#table_3_1 tbody tr:eq(6) td:eq(1)").html(valueFormat(result[0][3],2));
						$("#table_3_1 tbody tr:eq(7) td:eq(2)").html(valueFormat(result[0][4],2));
						$("#table_3_1 tbody tr:eq(8) td:eq(1)").html(valueFormat(result[0][5],2));
						$("#table_3_1 tbody tr:eq(9) td:eq(2)").html(valueFormat(result[0][6],2));
						$("#table_3_1 tbody tr:eq(10) td:eq(1)").html(valueFormat(result[0][7]*100,2));
						$("#table_3_1 tbody tr:eq(11) td:eq(1)").html(valueFormat(result[0][8],2));
						$("#table_3_1 tbody tr:eq(12) td:eq(1)").html(valueFormat(result[0][9],2));
						$("#table_3_1 tbody tr:eq(13) td:eq(1)").html(valueFormat(result[0][10],2));
						$("#table_3_1 tbody tr:eq(14) td:eq(1)").html(valueFormat(result[0][11],2));
						$("#table_3_1 tbody tr:eq(15) td:eq(1)").html(valueFormat(result[0][12],2));
				} else {
					return;
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		/* 3-2-1  */
		$("#searchPDF").text("正在加载数据...3-2-1");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table3-2-1",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
						$("#table_3_2_1 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
						$("#table_3_2_1 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						
						$("#table_3_2_1 tbody tr:eq(2) td:eq(2)").html(result[0][2]);
						$("#table_3_2_1 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
						$("#table_3_2_1 tbody tr:eq(4) td:eq(1)").html(result[0][4]);
						$("#table_3_2_1 tbody tr:eq(5) td:eq(1)").html(result[0][5]);
						$("#table_3_2_1 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
						$("#table_3_2_1 tbody tr:eq(7) td:eq(1)").html(result[0][7]);
						$("#table_3_2_1 tbody tr:eq(8) td:eq(1)").html(result[0][8]);
						$("#table_3_2_1 tbody tr:eq(9) td:eq(1)").html(result[0][9]);
						$("#cxxx").html(result[0][10]);
				} else {
					return;
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});

		//附加1
		/* $.ajax({
			async :false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table3-2-1-fj-qy-1",
				year : $("#year").val()
			},
			success : function(data){
			if(data.trim().length){
				var result = eval("("+data+")");
				$("#table_3_2_1 tbody tr:eq(10) td:eq(2)").html(valueFormat(result[0][0],2));
				$("#table_3_2_1 tbody tr:eq(11) td:eq(1)").html(valueFormat(result[0][1],2));
				$("#table_3_2_1 tbody tr:eq(12) td:eq(1)").html(valueFormat(result[0][2],2));
				$("#table_3_2_1 tbody tr:eq(13) td:eq(1)").html(valueFormat(result[0][3],2));
				$("#table_3_2_1 tbody tr:eq(14) td:eq(1)").html(valueFormat(result[0][4],2));
				$("#table_3_2_1 tbody tr:eq(15) td:eq(1)").html(valueFormat(result[0][5],2));
				$("#table_3_2_1 tbody tr:eq(16) td:eq(1)").html(valueFormat(result[0][6],2));
				}else{
				 return;
				}
			},
			error : function(){
				hideLodding();alert("系统忙，请稍后重试！！！");
			}
		}); */
		//附加2
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table3-2-1-fj-qy-2",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
							$("#table_3_2_1 tbody tr:eq(10) td:eq(2)").html(result[0][0]);
						$("#table_3_2_1 tbody tr:eq(11) td:eq(1)").html(result[0][1]);
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		//附加3
		/* $.ajax({
			async :false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table3-2-1-fj-qy-3",
				year : $("#year").val()
			},
			success : function(data){
			if(data.trim().length>3){
				var result = eval("("+data+")");
			
				$("#table_3_2_1 tbody tr:eq(19) td:eq(2)").html(valueFormat(result[0][1],2));
				$("#table_3_2_1 tbody tr:eq(20) td:eq(1)").html(valueFormat(result[0][2],2));
				}else{
				return;
				}
			},
			error : function(){
				hideLodding();alert("系统忙，请稍后重试！！！");
			}
		}); */
		/*3-2-2  */
		$("#searchPDF").text("正在加载数据...3-2-2");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-2-2",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								return;
							}
							$("#table_3_2_2 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
							$("#table_3_2_2 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],2));
							$("#table_3_2_2 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
							$("#table_3_2_2 tbody tr:eq(3) td:eq(1)").html(valueFormat(result[0][3],1));
							$("#abc").html(result[0][4]+"元");
							$("#def").html(result[0][5]);
						} else {
							return;
						}

					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...3-2-3");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table3-2-3",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
						var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+result[i][0]+"</td> ";
								html+="<td>"+result[i][1]+"</td>";
								html+="<td>"+result[i][2]+"</td>";
								html+="<td>"+result[i][3]+"</td>";
								html+="<td>"+result[i][4]+"</td>";
								html+="<td>"+result[i][5]+"</td>";
							html+="</tr>"; 
						});
						$("#table_3_2_3 tbody").html(html);
	
				} else {
					return;
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		//附加
		/* $
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-2-3-fj-qy",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");

							$("#table_3_2_3 tbody tr:eq(5) td:eq(2)").html(
									valueFormat(result[0][0], 2));
							$("#table_3_2_3 tbody tr:eq(6) td:eq(1)").html(
									valueFormat(result[0][1], 2));
						} else {
							$("#table_3_2_3 tbody")
									.html(
											"<tr><td colspan=\"5\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				}); */
		/*3-2-4  */
		$("#searchPDF").text("正在加载数据...3-2-4");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table3-2-4",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result.length == 0 || result == null) {
					return ;
					} else {
						$("#table_3_2_4 tbody tr:eq(0) td:eq(1)").html(
								result[0][0]);
						$("#table_3_2_4 tbody tr:eq(1) td:eq(1)").html(
								result[0][1]);
						$("#table_3_2_4 tbody tr:eq(2) td:eq(1)").html(
								result[0][2]);
					}
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});

		//附加
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table3-2-4-fj-qy",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result.length == 0 || result == null) {
		return;
					} else {

							$("#table_3_2_4 tbody tr:eq(3) td:eq(1)").html(result[0][0]);
							$("#table_3_2_4 tbody tr:eq(4) td:eq(1)").html(result[0][1]);
							$("#table_3_2_4 tbody tr:eq(5) td:eq(1)").html(result[0][2]); 
							$("#table_3_2_4 tbody tr:eq(6) td:eq(1)").html(result[0][3]);
							$("#table_3_2_4 tbody tr:eq(7) td:eq(1)").html(result[0][4]);
							$("#table_3_2_4 tbody tr:eq(8) td:eq(1)").html(result[0][5]);
							$("#table_3_2_4 tbody tr:eq(9) td:eq(1)").html(result[0][6]);
							$("#table_3_2_4 tbody tr:eq(10) td:eq(1)").html(result[0][7]);
							$("#table_3_2_4 tbody tr:eq(11) td:eq(1)").html(result[0][8]);
					$("#hij").html(result[0][9]);
						    $("#klm").html(result[0][10]);
					}
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		/*3-3  */
		$("#searchPDF").text("正在加载数据...3-3");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-3",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_3_3 tbody")
										.html(
												"<tr><td colspan=\"11\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + result[i][4] + "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + valueFormat(result[i][6], 2)
										+ "</td>";
								html += "<td>" + result[i][7] + "</td>";
								html += "<td>" + result[i][8] + "</td>";
								html += "<td>" + valueFormat(result[i][9], 1)
										+ "</td>";
								html += "</tr>";
							}
							$("#table_3_3 tbody").html(html);

						} else {
							return;
						}

					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...3-4");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-4",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								// hide
								hideLodding();
								$("#table_3_4 tbody")
										.html(
												"<tr><td colspan=\"12\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + result[i][4] + "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + result[i][6] + "</td>";
								html += "<td>" + valueFormat(result[i][7], 2)
										+ "</td>";
								html += "<td>" + result[i][8] + "</td>";
								html += "<td>" + result[i][9] + "</td>";
								html += "<td>" + valueFormat(result[i][10], 1)
										+ "</td>";
								html += "</tr>";
							}
							$("#table_3_4 tbody").html(html);
							// hide
							hideLodding();
						} else {
							hideLodding();
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...3-5");
			$.ajax({
			async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-5",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						
						if(result==""||result==null){
							// hide
							hideLodding();
							$("#table_3_5 tbody").html("<tr><td colspan=\"11\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html="";
						for(var i =0;i<result.length;i++){
							html+="<tr>";
							html+="<td>"+(i+1)+"</td>"; 
							html+="<td>"+result[i][0]+"</td>";
							html+="<td>"+result[i][1]+"</td>";
							html+="<td>"+result[i][2]+"</td>"; 
							html+="<td>"+result[i][3]+"</td>";
							html+="<td>"+result[i][4]+"</td>";
							html+="<td>"+result[i][5]+"</td>"; 
							html+="<td>"+valueFormat(result[i][6],2)+"</td>"; 
							html+="<td>"+valueFormat(result[i][7],2)+"</td>";
							html+="<td>"+valueFormat(result[i][8],2)+"</td>"; 
							html+="<td>"+valueFormat(result[i][9],1)+"</td>"; 
							html+="</tr>"; 
						}
						$("#table_3_5 tbody").html(html);
						// hide
						hideLodding();
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...3-6");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-6",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_3_6 tbody")
										.html(
												"<tr><td colspan=\"5\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

								return;
							}
							var html = "";
							$.each(result, function(i, obj) {
							html+="<tr>";
								html+="<td>"+obj[0]+"</td> ";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+obj[3]+"</td>";
								html+="<td>"+valueFormat(obj[4],1)+"</td>";
								html+="<td>"+obj[5]+"</td>";
								html+="<td>"+valueFormat(obj[6],1)+"</td>";
								html+="<td>"+obj[7]+"</td>";
							html+="</tr>";
							});
							$("#table_3_6 tbody").html(html);
						} else {
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
/* 		$("#searchPDF").text("正在加载数据...3-7-1");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-7",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_3_7 tbody")
										.html(
												"<tr><td colspan=\"8\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							$.each(result, function(i, obj) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td> ";
								html += "<td>" + obj[0] + "</td>";
								html += "<td>" + obj[1] + "</td>";
								html += "<td>" + obj[2] + "</td>";
								html += "<td>" + valueFormat(obj[3], 1)
										+ "</td>";
								html += "<td>" + obj[4] + "</td>";
								html += "<td>" + valueFormat(obj[5], 1) + "</td>";
								html += "<td>" + obj[6] + "</td>";
								html += "</tr>";
							});
							$("#table_3_7 tbody").html(html);
						} else {
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				}); */
				

				
		$("#searchPDF").text("正在加载数据...3-7-1");
		$.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-7-1",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_3_7_1 tbody")
										.html(
												"<tr><td colspan=\"6\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

								return;
							}
						var html="";
						html+="<tr>";
							html+="<td>"+result[0][0]+"</td>"; 
							html+="<td>"+result[0][1]+"</td>";
							html+="<td>"+result[0][2]+"</td>";
							html+="<td>"+result[0][3]+"</td>"; 
							html+="<td>"+valueFormat(result[0][4],2)+"</td>";
							html+="<td>"+valueFormat(result[0][5],2)+"</td>";
							html+="<td>"+valueFormat(result[0][6],2)+"</td>";
						html+="</tr>";
						$("#table_3_7_1 tbody").html(html);
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		//f-1
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-7-fj-qy-1",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_3_7_1 tbody")
										.html(
												"<tr><td colspan=\"6\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

								return;
							}
							var html = "";
							html += "<tr>";
										html+="<td>"+result[0][0]+"</td>"; 
							html+="<td>"+result[0][1]+"</td>";
							html+="<td>"+result[0][2]+"</td>";
							html+="<td>"+result[0][3]+"</td>"; 
							html+="<td>"+valueFormat(result[0][4],2)+"</td>";
							html+="<td>"+valueFormat(result[0][5],2)+"</td>";
							html+="<td>"+valueFormat(result[0][6],2)+"</td>";
							html += "</tr>";
							$("#table_3_7_1 tbody").append(html);

						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		//f-2
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-7-fj-qy-2",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_3_7_1 tbody")
										.html(
												"<tr><td colspan=\"6\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

								return;
							}
							var html = "";
							html += "<tr>";
							html+="<td>"+result[0][0]+"</td>"; 
							html+="<td>"+result[0][1]+"</td>";
							html+="<td>"+result[0][2]+"</td>";
							html+="<td>"+result[0][3]+"</td>"; 
							html+="<td>"+valueFormat(result[0][4],2)+"</td>";
							html+="<td>"+valueFormat(result[0][5],2)+"</td>";
							html+="<td>"+valueFormat(result[0][6],2)+"</td>";
							html += "</tr>";
							$("#table_3_7_1 tbody").append(html);

						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
				
									$("#searchPDF").text("正在加载数据...3-7-2");
								$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-7-2",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(data.length>0){
						if(result==""||result==null){
							$("#table_3_7_2 tbody").html("<tr><td colspan=\"6\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+obj[3]+"</td>";/* valueFormat(obj[3],1) */
								html+="<td>"+obj[4]+"</td>";
								html+="<td>"+obj[5]+"</td>";
							html+="</tr>"; 
						});
						$("#table_3_7_2 tbody").html(html);
						}
						// hide
						hideLodding();
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				
		$("#searchPDF").text("正在加载数据...3-8");
		$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-8",
						year : $("#year").val()
					},
					success : function(data){
					if(data.length>2){
					
						var result = eval("("+data+")");
						if(result==""||result==null){
							$("#table_3_8 tbody").html("<tr><td colspan=\"4\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						$("#MOOC").html(result[0][3]);
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								if(i==0){
								  html+="<td rowspan='2' id='MOOC'></td>";
								}else{
								}
								
							html+="</tr>"; 
						});
						$("#table_3_8 tbody").html(html);
						$("#MOOC").html(result[0][3]);
						}
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...3-9");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-9",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_3_9 tbody")
										.html(
												"<tr><td colspan=\"2\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";

							html += "<tr>";
							html += "<td>签订合作协议机构总数</td>";
							html += "<td>" + result[0][0] + "</td>";
							html += "</tr>";
							html += "<tr>";
							html += "<td>其中:学术机构</td> ";
							html += "<td>" + result[0][1] + "</td> ";
							html += "</tr>";
							html += "<tr>";
							html += "<td>行业机构和企业</td> ";
							html += "<td>" + result[0][2] + "</td> ";
							html += "</tr>";
							html += "<tr>";
							html += "<td>地方政府</td> ";
							html += "<td>" + result[0][3] + "</td> ";
							html += "</tr>";
							$("#table_3_9 tbody").html(html);
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...4-1");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table4-1",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_4_1 tbody")
										.html(
												"<tr><td colspan=\"4\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

								return;
							}
						var html="";var html1="";
				/* 		
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+valueFormat(obj[2], 2)+"</td>";
								html+="<td>"+valueFormat(obj[3], 1)+"</td>";
							html+="</tr>"; 
						});  */
						html1+="<td>学科门类</td>";
						for ( var i = 0; i < result.length; i++) {
								html1+="<td>"+result[i][0]+"</td>";
						}
						
						
						html+="<tr>"
						html+="<td>所含专业数</td>"
						for ( var i = 0; i < result.length; i++) {
								html+="<td>"+result[i][1]+"</td>";
						}
						html+="</tr>"
						html+="<tr>"
						html+="<td>专业平均总学分</td>"
						for ( var i = 0; i < result.length; i++) {
								html+="<td>"+valueFormat(result[i][2],2)+"</td>";
						}
						html+="</tr>"
						html+="<tr>"
						html+="<td>专业平均实践教学环节学分比例（%）</td>"
						for ( var i = 0; i < result.length; i++) {
								html+="<td>"+valueFormat(result[i][3],1)+"</td>";
						}
						html+="</tr>"
						/*alert(result);
						       html+="<tr>";
						        for ( var j = 0; j <result.length ; j++) {
						            html+="<td>"+result[0][j]+"</td>";
						        }
						       html+="</tr>";
							*/
							$("#4-1tr").html(html1);
						$("#table_4_1 tbody").html(html);
						$("#1colspan").attr("colspan",result.length+1);
						$("#2colspan").attr("colspan",result.length+1);
						} else {
							hideLodding();
							return;
						}

					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...4-2");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table4-2",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
					var html = "";
					$.each(result, function(i, obj) {
						html += "<tr>";
						html += "<td>" + (i + 1) + "</td>";
						html += "<td>" + obj[0] + "</td>";
						html += "<td>" + obj[1] + "</td>";
						html += "<td>" + obj[2] + "</td>";
						html += "<td>" + obj[3] + "</td>";
						html += "</tr>";
					});
					$("#table_4_2 tbody").html(html);
				} else {
					hideLodding();
					return;
				}

			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		$("#searchPDF").text("正在加载数据...4-3");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table4-3-1",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_4_3 tbody")
										.html(
												"<tr><td colspan=\"5\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

								return;
							}
							$.each(result, function(i, obj) {
	                        $("#table_4_3 tbody tr:eq(0) td:eq(1)").html(obj[0]);
							$("#table_4_3 tbody tr:eq(1) td:eq(1)").html(obj[1]);
							$("#table_4_3 tbody tr:eq(2) td:eq(1)").html(obj[2]);
							$("#table_4_3 tbody tr:eq(3) td:eq(1)").html(obj[3]);
							$("#table_4_3 tbody tr:eq(4) td:eq(1)").html(obj[4]);
							$("#table_4_3 tbody tr:eq(5) td:eq(1)").html(obj[5]);
							$("#table_4_3 tbody tr:eq(6) td:eq(1)").html(obj[6]);
							$("#table_4_3 tbody tr:eq(7) td:eq(1)").html(obj[7]);
							$("#table_4_3 tbody tr:eq(8) td:eq(1)").html(obj[8]);
							$("#table_4_3 tbody tr:eq(9) td:eq(1)").html(obj[9]);
							$("#table_4_3 tbody tr:eq(10) td:eq(1)").html(obj[10]);
							$("#table_4_3 tbody tr:eq(11) td:eq(1)").html(obj[11]);
							$("#table_4_3 tbody tr:eq(12) td:eq(1)").html(obj[12]);
							$("#table_4_3 tbody tr:eq(13) td:eq(1)").html(obj[13]);
							$("#table_4_3 tbody tr:eq(14) td:eq(1)").html(obj[14]);
							$("#table_4_3 tbody tr:eq(15) td:eq(1)").html(obj[15]);
							$("#table_4_3 tbody tr:eq(16) td:eq(1)").html(obj[16]);
							});

						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...4-3-2");
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table4-3-2",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							$("#table_4_3_2 tbody").html("<tr><td colspan=\"5\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+obj[3]+"</td>";
								html+="<td>"+obj[4]+"</td>";
							html+="</tr>"; 
						});
						$("#table_4_3_2 tbody").html(html);
					},
					error : function(){
						hideLodding();
					}
				});
				
		$("#searchPDF").text("正在加载数据...4-4");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table4-4",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_4_4 tbody")
										.html(
												"<tr><td colspan=\"8\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							$.each(result, function(i, obj) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + obj[0] + "</td>";
								html += "<td>" + obj[1] + "</td>";
								html += "<td>" + obj[2] + "</td>";
								html += "<td>" + obj[3] + "</td>";
								html += "</tr>";
							});
							$("#table_4_4 tbody").html(html);

						} else {
							$("#table_4_4 tbody")
									.html(
											"<tr><td colspan=\"8\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...4-5");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table4-5",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
					var html = "";
					$.each(result, function(i, obj) {
						html += "<tr>";
						html += "<td>" + obj[0] + "</td>";
						html += "<td>" + obj[1] + "</td>";
						html += "<td>" + obj[2] + "</td>";
						html += "<td>" + obj[3] + "</td>";
						html += "<td>" + obj[4] + "</td>";
						html += "<td>" + valueFormat(obj[5], 1) + "</td>";
						html += "<td>" + obj[6] + "</td>";
						html += "<td>" + obj[7] + "</td>";
						html+="<td>"+obj[8]+"</td>";
						html+="<td>"+obj[9]+"</td>";
						html += "</tr>";
					});
					$("#table_4_5 tbody").html(html);

				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		$("#searchPDF").text("正在加载数据...4-6");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table4-6",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_4_6 tbody")
										.html(
												"<tr><td colspan=\"7\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}

							$("#table_4_6 tbody tr:eq(0) td:eq(2)").html(
									result[0][0]);
							$("#table_4_6 tbody tr:eq(1) td:eq(2)").html(
									result[0][1]);
							$("#table_4_6 tbody tr:eq(2) td:eq(1)").html(
									result[0][2]);
							$("#table_4_6 tbody tr:eq(3) td:eq(1)").html(
									result[0][3]);
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});

		$("#searchPDF").text("正在加载数据...4-7");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table4-7",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						/* 							$("#table_4_7 tbody").html("<tr><td colspan=\"2\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						 */
						return;
					}
					    $("#table_4_7 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_4_7 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						
						$("#table_4_7 tbody tr:eq(0) td:eq(2)").html(result[0][2]);
						$("#table_4_7 tbody tr:eq(1) td:eq(2)").html(result[0][3]);
						
						$("#table_4_7 tbody tr:eq(0) td:eq(3)").html(result[0][4]);
						$("#table_4_7 tbody tr:eq(1) td:eq(3)").html(result[0][5]);
						
						$("#table_4_7 tbody tr:eq(0) td:eq(4)").html(result[0][6]);
						$("#table_4_7 tbody tr:eq(1) td:eq(4)").html(result[0][7]);
						
						$("#table_4_7 tbody tr:eq(0) td:eq(5)").html(result[0][8]);
						$("#table_4_7 tbody tr:eq(1) td:eq(5)").html(result[0][9]);
						
						$("#table_4_7 tbody tr:eq(0) td:eq(6)").html(result[0][10]);
						$("#table_4_7 tbody tr:eq(1) td:eq(6)").html(result[0][11]);

				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		$("#searchPDF").text("正在加载数据...4-8");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table4-8",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_4_8 tbody")
										.html(
												"<tr><td colspan=\"9\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

								return;
							}
							$("#table_4_8 tbody tr:eq(0) td:eq(2)").html(
									result[0][0]);
							$("#table_4_8 tbody tr:eq(1) td:eq(1)").html(
									result[0][1]);
							$("#table_4_8 tbody tr:eq(2) td:eq(1)").html(
									result[0][2]);
							$("#table_4_8 tbody tr:eq(3) td:eq(1)").html(
									result[0][3]);
							$("#table_4_8 tbody tr:eq(4) td:eq(1)").html(
									valueFormat(result[0][4], 1));
							$("#table_4_8 tbody tr:eq(5) td:eq(1)").html(
									result[0][5]);
							$("#table_4_8 tbody tr:eq(6) td:eq(1)").html(
									result[0][6]);
							$("#table_4_8 tbody tr:eq(7) td:eq(1)").html(
									result[0][7]);
							$("#table_4_8 tbody tr:eq(8) td:eq(1)").html(
									result[0][8]);
						} else {
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...5-1");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-1",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
							var html = "";
							$.each(result, function(i, obj) {
								html += "<tr>";
								html += "<td>" + obj[0] + "</td>";
								html += "<td>" + obj[1] + "</td>";
								html += "<td>" + obj[2] + "</td>";
								html += "<td>" + obj[3] + "</td>";
								html += "<td>" + obj[4] + "</td>";
								html += "<td>" + obj[5] + "</td>";
								html += "<td>" + valueFormat(obj[6], 2)
										+ "</td>";
								html += "<td>" + valueFormat(obj[7], 2)
										+ "</td>";
								html += "<td>" + obj[8]
										+ "</td>";
								html += "<td>" + obj[9]
										+ "</td>";
								html += "<td>" + obj[10]
										+ "</td>";
								html += "</tr>";
							});
							$("#table_5_1 tbody").html(html);
						} else {
							$("#table_5_1 tbody")
									.html(
											"<tr><td colspan=\"8\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...5-2");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-2-1",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_5_2 tbody")
										.html(
												"<tr><td colspan=\"8\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

								return;
							}
							var html = "";
							$.each(result, function(i, obj) {
								html += "<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+obj[3]+"</td>";
								html+="<td>"+obj[4]+"</td>";
								html+="<td>"+obj[5]+"</td>";
								html+="<td>"+valueFormat(obj[6],1)+"</td>";
								html+="<td>"+valueFormat(obj[7],1)+"</td>";
								html += "</tr>";
							});
							$("#table_5_2 tbody").html(html);
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...5-2-2");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-2-2",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
						if (result == "" || result == null) {
							$("#table_5_2_2 tbody")
									.html(
											"<tr><td colspan=\"8\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

							return;
						}
						var html = "";
						$.each(result, function(i, obj) {
							html += "<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+obj[3]+"</td>";
								html+="<td>"+obj[4]+"</td>";
								html+="<td>"+obj[5]+"</td>";
								html+="<td>"+valueFormat(obj[6],1)+"</td>";
								html+="<td>"+valueFormat(obj[7],1)+"</td>";
							html += "</tr>";
						});
						$("#table_5_2_2 tbody").html(html);
					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});

		$("#searchPDF").text("正在加载数据...5-3");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table5-3",
				year : $("#year").val()
			},
			success : function(data) {
			if(data.trim().length>0){
				var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
				$("#table_5_3 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
				$("#table_5_3 tbody tr:eq(1) td:eq(1)").html(result[0][1]);

				$("#table_5_3 tbody tr:eq(0) td:eq(2)").html(result[0][2]);
				$("#table_5_3 tbody tr:eq(1) td:eq(2)").html(
						valueFormat(result[0][3], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(3)").html(result[0][4]);
				$("#table_5_3 tbody tr:eq(1) td:eq(3)").html(
						valueFormat(result[0][5], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(4)").html(result[0][6]);
				$("#table_5_3 tbody tr:eq(1) td:eq(4)").html(
						valueFormat(result[0][7], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(5)").html(result[0][8]);
				$("#table_5_3 tbody tr:eq(1) td:eq(5)").html(
						valueFormat(result[0][9], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(6)").html(result[0][10]);
				$("#table_5_3 tbody tr:eq(1) td:eq(6)").html(
						valueFormat(result[0][11], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(7)").html(result[0][12]);
				$("#table_5_3 tbody tr:eq(1) td:eq(7)").html(
						valueFormat(result[0][13], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(8)").html(result[0][14]);
				$("#table_5_3 tbody tr:eq(1) td:eq(8)").html(
						valueFormat(result[0][15], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(9)").html(result[0][16]);
				$("#table_5_3 tbody tr:eq(1) td:eq(9)").html(
						valueFormat(result[0][17], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(10)").html(result[0][18]);
				$("#table_5_3 tbody tr:eq(1) td:eq(10)").html(
						valueFormat(result[0][19], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(11)").html(result[0][20]);
				$("#table_5_3 tbody tr:eq(1) td:eq(11)").html(
						valueFormat(result[0][21], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(12)").html(result[0][22]);
				$("#table_5_3 tbody tr:eq(1) td:eq(12)").html(
						valueFormat(result[0][23], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(13)").html(result[0][24]);
				$("#table_5_3 tbody tr:eq(1) td:eq(13)").html(
						valueFormat(result[0][25], 1));

				$("#table_5_3 tbody tr:eq(0) td:eq(14)").html(result[0][26]);
				$("#table_5_3 tbody tr:eq(1) td:eq(14)").html(
						valueFormat(result[0][27], 1));

			}},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});

		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table5-3-qy",
				year : $("#year").val()
			},
			success : function(data) {
			if(data.trim().length>0){
				var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
				$("#table_5_3 tbody tr:eq(2) td:eq(1)").html(result[0][0]);
				$("#table_5_3 tbody tr:eq(3) td:eq(1)").html(result[0][1]);

				$("#table_5_3 tbody tr:eq(2) td:eq(2)").html(result[0][2]);
				$("#table_5_3 tbody tr:eq(3) td:eq(2)").html(
						valueFormat(result[0][3], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(3)").html(result[0][4]);
				$("#table_5_3 tbody tr:eq(3) td:eq(3)").html(
						valueFormat(result[0][5], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(4)").html(result[0][6]);
				$("#table_5_3 tbody tr:eq(3) td:eq(4)").html(
						valueFormat(result[0][7], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(5)").html(result[0][8]);
				$("#table_5_3 tbody tr:eq(3) td:eq(5)").html(
						valueFormat(result[0][9], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(6)").html(result[0][10]);
				$("#table_5_3 tbody tr:eq(3) td:eq(6)").html(
						valueFormat(result[0][11], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(7)").html(result[0][12]);
				$("#table_5_3 tbody tr:eq(3) td:eq(7)").html(
						valueFormat(result[0][13], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(8)").html(result[0][14]);
				$("#table_5_3 tbody tr:eq(3) td:eq(8)").html(
						valueFormat(result[0][15], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(9)").html(result[0][16]);
				$("#table_5_3 tbody tr:eq(3) td:eq(9)").html(
						valueFormat(result[0][17], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(10)").html(result[0][18]);
				$("#table_5_3 tbody tr:eq(3) td:eq(10)").html(
						valueFormat(result[0][19], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(11)").html(result[0][20]);
				$("#table_5_3 tbody tr:eq(3) td:eq(11)").html(
						valueFormat(result[0][21], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(12)").html(result[0][22]);
				$("#table_5_3 tbody tr:eq(3) td:eq(12)").html(
						valueFormat(result[0][23], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(13)").html(result[0][24]);
				$("#table_5_3 tbody tr:eq(3) td:eq(13)").html(
						valueFormat(result[0][25], 1));

				$("#table_5_3 tbody tr:eq(2) td:eq(14)").html(result[0][26]);
				$("#table_5_3 tbody tr:eq(3) td:eq(14)").html(
						valueFormat(result[0][27], 1));

			}},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		
		$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-3-xl",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						$("#table_5_3 tbody tr:eq(4) td:eq(1)").html(result[0][0]);
						$("#table_5_3 tbody tr:eq(5) td:eq(1)").html(result[0][1]);
						
						$("#table_5_3 tbody tr:eq(4) td:eq(2)").html(result[0][2]);
						$("#table_5_3 tbody tr:eq(5) td:eq(2)").html(valueFormat(result[0][3],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(3)").html(result[0][4]);
						$("#table_5_3 tbody tr:eq(5) td:eq(3)").html(valueFormat(result[0][5],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(4)").html(result[0][6]);
						$("#table_5_3 tbody tr:eq(5) td:eq(4)").html(valueFormat(result[0][7],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(5)").html(result[0][8]);
						$("#table_5_3 tbody tr:eq(5) td:eq(5)").html(valueFormat(result[0][9],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(6)").html(result[0][10]);
						$("#table_5_3 tbody tr:eq(5) td:eq(6)").html(valueFormat(result[0][11],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(7)").html(result[0][12]);
						$("#table_5_3 tbody tr:eq(5) td:eq(7)").html(valueFormat(result[0][13],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(8)").html(result[0][14]);
						$("#table_5_3 tbody tr:eq(5) td:eq(8)").html(valueFormat(result[0][15],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(9)").html(result[0][16]);
						$("#table_5_3 tbody tr:eq(5) td:eq(9)").html(valueFormat(result[0][17],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(10)").html(result[0][18]);
						$("#table_5_3 tbody tr:eq(5) td:eq(10)").html(valueFormat(result[0][19],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(11)").html(result[0][20]);
						$("#table_5_3 tbody tr:eq(5) td:eq(11)").html(valueFormat(result[0][21],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(12)").html(result[0][22]);
						$("#table_5_3 tbody tr:eq(5) td:eq(12)").html(valueFormat(result[0][23],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(13)").html(result[0][24]);
						$("#table_5_3 tbody tr:eq(5) td:eq(13)").html(valueFormat(result[0][25],1));
						
						$("#table_5_3 tbody tr:eq(4) td:eq(14)").html(result[0][26]);
						$("#table_5_3 tbody tr:eq(5) td:eq(14)").html(valueFormat(result[0][27],1));
						// hide
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
		
		
		$("#searchPDF").text("正在加载数据...5-4");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-4",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
						if (result == "" || result == null) {
							$("#table_5_4 tbody")
									.html(
											"<tr><td colspan=\"5\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

							return;
						}
						var html = "";
						$.each(result, function(i, obj) {
							html += "<tr>";
							html += "<td>" + (i + 1) + "</td>";
							html += "<td>" + obj[0] + "</td>";
							html += "<td>" + obj[1] + "</td>";
							html += "<td>" + obj[2] + "</td>";
							html += "<td>" + obj[3] + "</td>";
							html += "<td>" + obj[4] + "</td>";
							html += "</tr>";
						});
						$("#table_5_4 tbody").html(html);

					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...5-5");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-5",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_5_5 tbody")
										.html(
												"<tr><td colspan=\"3\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

								return;
							}
							var html = "";
							$.each(result, function(i, obj) {
								html += "<tr>";
								html += "<td>" + obj[0] + "</td>";
								html += "<td>" + obj[1] + "</td>";
								html += "<td>" + obj[2] + "</td>";
								html += "<td>" + obj[3] + "</td>";
								html += "<td>" + obj[4] + "</td>";
								html += "<td>" + obj[5] + "</td>";
								html += "<td>" + obj[6] + "</td>";
								html += "<td>" + obj[7] + "</td>";
								html += "</tr>";
							});
							$("#table_5_5 tbody").html(html);
						} else {
							return;
						}

					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...5-6");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table5-6",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {

					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						/* 							$("#table_5_6 tbody").html("<tr><td colspan=\"3\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						 */

						return;
					}
					$("#table_5_6 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
					$("#table_5_6 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
					$("#table_5_6 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
					$("#table_5_6 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
					$("#table_5_6 tbody tr:eq(4) td:eq(2)").html(result[0][4]);
					$("#table_5_6 tbody tr:eq(5) td:eq(1)").html(result[0][5]);
					$("#table_5_6 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
					$("#table_5_6 tbody tr:eq(7) td:eq(1)").html(result[0][7]);
					$("#table_5_6 tbody tr:eq(8) td:eq(2)").html(result[0][8]);

					$("#table_5_6 tbody tr:eq(9) td:eq(1)").html(result[0][9]);
					$("#table_5_6 tbody tr:eq(10) td:eq(1)")
							.html(result[0][10]);
					$("#table_5_6 tbody tr:eq(11) td:eq(1)")
							.html(result[0][11]);

					$("#table_5_6 tbody tr:eq(12) td:eq(1)").html(
							valueFormat(result[0][12], 2));
					$("#table_5_6 tbody tr:eq(13) td:eq(1)").html(
							valueFormat(result[0][13], 2));

					$("#table_5_6 tbody tr:eq(14) td:eq(1)")
							.html(result[0][14]);
					$("#table_5_6 tbody tr:eq(15) td:eq(2)")
							.html(result[0][15]);

					$("#table_5_6 tbody tr:eq(16) td:eq(1)")
							.html(result[0][16]);
					$("#table_5_6 tbody tr:eq(17) td:eq(1)")
							.html(result[0][17]);
					$("#table_5_6 tbody tr:eq(18) td:eq(1)")
							.html(result[0][18]);

				}

			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		$("#searchPDF").text("正在加载数据...5-7");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-7",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
						if (result == "" || result == null) {
							$("#table_5_7 tbody")
									.html(
											"<tr><td colspan=\"9\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

							return;
						}
						var html = "";
						$.each(result, function(i, obj) {
							html += "<tr>";
							html += "<td>" + obj[0] + "</td>";
							html += "<td>" + obj[1] + "</td>";
							html += "<td>" + obj[2] + "</td>";
							html += "<td>" + obj[3] + "</td>";
							html += "<td>" + obj[4] + "</td>";
							html += "<td>" + obj[5] + "</td>";
							html += "</tr>";
						});
						$("#table_5_7 tbody").html(html);

					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...5-8");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-8",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
						if (result == "" || result == null) {
							$("#table_5_8 tbody")
									.html(
											"<tr><td colspan=\"10\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html = "";
						$.each(result, function(i, obj) {
							html += "<tr>";
							html += "<td>" + (i + 1) + "</td>";
							html += "<td>" + obj[0] + "</td>";
							html += "<td>" + obj[1] + "</td>";
							html += "<td>" + obj[2] + "</td>";
							html += "<td>" + obj[3] + "</td>";
							html += "<td>" + valueFormat(obj[4], 1) + "</td>";
							html += "<td>" + obj[5] + "</td>";
							html += "<td>" + valueFormat(obj[6], 1) + "</td>";
							html += "<td>" + obj[7] + "</td>";
							html += "<td>" + valueFormat(obj[8], 1) + "</td>";
							html += "</tr>";
						});
						$("#table_5_8 tbody").html(html);
					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...5-9");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table5-9",
				year : $("#year").val()
			},
			success : function(data) {
			if(data.trim().length>0){
				var result = eval("(" + data + ")");
				if (result == "" || result == null) {
					/* 							$("#table_5_9 tbody").html("<tr><td colspan=\"10\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
					 */

					return;
				}
				$("#table_5_9 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
				$("#table_5_9 tbody tr:eq(1) td:eq(2)").html(result[0][1]);

				$("#table_5_9 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
				$("#table_5_9 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
				$("#table_5_9 tbody tr:eq(4) td:eq(1)").html(result[0][4]);

				$("#table_5_9 tbody tr:eq(7) td:eq(1)").html(result[0][5]);
				$("#table_5_9 tbody tr:eq(7) td:eq(2)").html(result[0][6]);
				$("#table_5_9 tbody tr:eq(7) td:eq(3)").html(result[0][7]);
				$("#table_5_9 tbody tr:eq(7) td:eq(4)").html(result[0][8]);

				$("#table_5_9 tbody tr:eq(8) td:eq(1)").html(result[0][9]);
				$("#table_5_9 tbody tr:eq(8) td:eq(2)").html(result[0][10]);
				$("#table_5_9 tbody tr:eq(8) td:eq(3)").html(result[0][11]);
				$("#table_5_9 tbody tr:eq(8) td:eq(4)").html(result[0][12]);

				$("#table_5_9 tbody tr:eq(9) td:eq(1)").html(result[0][13]);
				$("#table_5_9 tbody tr:eq(9) td:eq(2)").html(result[0][14]);
				$("#table_5_9 tbody tr:eq(9) td:eq(3)").html(result[0][15]);
				$("#table_5_9 tbody tr:eq(9) td:eq(4)").html(result[0][16]);

				$("#table_5_9 tbody tr:eq(10) td:eq(1)").html(result[0][17]);
				$("#table_5_9 tbody tr:eq(10) td:eq(2)").html(result[0][18]);
				$("#table_5_9 tbody tr:eq(10) td:eq(3)").html(result[0][19]);
				$("#table_5_9 tbody tr:eq(10) td:eq(4)").html(result[0][20]);

				$("#table_5_9 tbody tr:eq(11) td:eq(1)").html(result[0][21]);
				$("#table_5_9 tbody tr:eq(11) td:eq(2)").html(result[0][22]);
				$("#table_5_9 tbody tr:eq(11) td:eq(3)").html(result[0][23]);
				$("#table_5_9 tbody tr:eq(11) td:eq(4)").html(result[0][24]);

				$("#table_5_9 tbody tr:eq(12) td:eq(1)").html(result[0][25]);
				$("#table_5_9 tbody tr:eq(12) td:eq(2)").html(result[0][26]);
				$("#table_5_9 tbody tr:eq(12) td:eq(3)").html(result[0][27]);
				$("#table_5_9 tbody tr:eq(12) td:eq(4)").html(result[0][28]);

				$("#table_5_9 tbody tr:eq(13) td:eq(1)").html(result[0][29]);
				$("#table_5_9 tbody tr:eq(13) td:eq(2)").html(result[0][30]);
				$("#table_5_9 tbody tr:eq(13) td:eq(3)").html(result[0][31]);
				$("#table_5_9 tbody tr:eq(13) td:eq(4)").html(result[0][32]);

				$("#table_5_9 tbody tr:eq(14) td:eq(1)").html(result[0][33]);
				$("#table_5_9 tbody tr:eq(14) td:eq(2)").html(result[0][34]);
				$("#table_5_9 tbody tr:eq(14) td:eq(3)").html(result[0][35]);
				$("#table_5_9 tbody tr:eq(14) td:eq(4)").html(result[0][36]);

				$("#table_5_9 tbody tr:eq(15) td:eq(1)").html(result[0][37]);
				$("#table_5_9 tbody tr:eq(15) td:eq(2)").html(result[0][38]);
				$("#table_5_9 tbody tr:eq(15) td:eq(3)").html(result[0][39]);
				$("#table_5_9 tbody tr:eq(15) td:eq(4)").html(result[0][40]);

				$("#table_5_9 tbody tr:eq(16) td:eq(1)").html(result[0][41]);
				$("#table_5_9 tbody tr:eq(16) td:eq(2)").html(result[0][42]);
				$("#table_5_9 tbody tr:eq(16) td:eq(3)").html(result[0][43]);
				$("#table_5_9 tbody tr:eq(16) td:eq(4)").html(result[0][44]);
			}},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		$("#searchPDF").text("正在加载数据...6-1");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table6-1",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
					
						if (result == "" || result == null) {
							$("#table_6_1 tbody")
									.html(
											"<tr><td colspan=\"6\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");

							return;
						}
						var html = "";
						$.each(result, function(i, obj) {
							html += "<tr>";
							html += "<td>" + obj[0] + "</td>";
							html += "<td>" + valueFormat(obj[1], 2) + "</td>";
							html += "<td>" + valueFormat(obj[2], 2) + "</td>";
							html += "<td>" + valueFormat(obj[3], 2) + "</td>";
							html += "<td>" + valueFormat(obj[4], 2) + "</td>";
							html += "<td>" + valueFormat(obj[5], 2) + "</td>";
							html += "</tr>";
						});
						$("#table_6_1 tbody").html(html);

					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...6-2");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table6-2",
				year : $("#year").val()
			},
			success : function(data) {
			if(data.trim().length>0){
				var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
				$("#table_6_2 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
				$("#table_6_2 tbody tr:eq(1) td:eq(1)").html(result[0][1]);

				$("#table_6_2 tbody tr:eq(0) td:eq(2)").html(result[0][2]);
				$("#table_6_2 tbody tr:eq(1) td:eq(2)").html(
						valueFormat(result[0][3], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(3)").html(result[0][4]);
				$("#table_6_2 tbody tr:eq(1) td:eq(3)").html(
						valueFormat(result[0][5], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(4)").html(result[0][6]);
				$("#table_6_2 tbody tr:eq(1) td:eq(4)").html(
						valueFormat(result[0][7], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(5)").html(result[0][8]);
				$("#table_6_2 tbody tr:eq(1) td:eq(5)").html(
						valueFormat(result[0][9], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(6)").html(result[0][10]);
				$("#table_6_2 tbody tr:eq(1) td:eq(6)").html(
						valueFormat(result[0][11], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(7)").html(result[0][12]);
				$("#table_6_2 tbody tr:eq(1) td:eq(7)").html(
						valueFormat(result[0][13], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(8)").html(result[0][14]);
				$("#table_6_2 tbody tr:eq(1) td:eq(8)").html(
						valueFormat(result[0][15], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(9)").html(result[0][16]);
				$("#table_6_2 tbody tr:eq(1) td:eq(9)").html(
						valueFormat(result[0][17], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(10)").html(result[0][18]);
				$("#table_6_2 tbody tr:eq(1) td:eq(10)").html(
						valueFormat(result[0][19], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(11)").html(result[0][20]);
				$("#table_6_2 tbody tr:eq(1) td:eq(11)").html(
						valueFormat(result[0][21], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(12)").html(result[0][22]);
				$("#table_6_2 tbody tr:eq(1) td:eq(12)").html(
						valueFormat(result[0][23], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(13)").html(result[0][24]);
				$("#table_6_2 tbody tr:eq(1) td:eq(13)").html(
						valueFormat(result[0][25], 1));

				$("#table_6_2 tbody tr:eq(0) td:eq(14)").html(result[0][26]);
				$("#table_6_2 tbody tr:eq(1) td:eq(14)").html(
						valueFormat(result[0][27], 1));

			}},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		//qy1
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table6-2-qy-1",
				year : $("#year").val()
			},
			success : function(data) {
			if(data.trim().length>0){
				var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
				$("#table_6_2 tbody tr:eq(2) td:eq(1)").html(result[0][0]);
				$("#table_6_2 tbody tr:eq(3) td:eq(1)").html(result[0][1]);

				$("#table_6_2 tbody tr:eq(2) td:eq(2)").html(result[0][2]);
				$("#table_6_2 tbody tr:eq(3) td:eq(2)").html(
						valueFormat(result[0][3], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(3)").html(result[0][4]);
				$("#table_6_2 tbody tr:eq(3) td:eq(3)").html(
						valueFormat(result[0][5], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(4)").html(result[0][6]);
				$("#table_6_2 tbody tr:eq(3) td:eq(4)").html(
						valueFormat(result[0][7], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(5)").html(result[0][8]);
				$("#table_6_2 tbody tr:eq(3) td:eq(5)").html(
						valueFormat(result[0][9], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(6)").html(result[0][10]);
				$("#table_6_2 tbody tr:eq(3) td:eq(6)").html(
						valueFormat(result[0][11], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(7)").html(result[0][12]);
				$("#table_6_2 tbody tr:eq(3) td:eq(7)").html(
						valueFormat(result[0][13], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(8)").html(result[0][14]);
				$("#table_6_2 tbody tr:eq(3) td:eq(8)").html(
						valueFormat(result[0][15], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(9)").html(result[0][16]);
				$("#table_6_2 tbody tr:eq(3) td:eq(9)").html(
						valueFormat(result[0][17], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(10)").html(result[0][18]);
				$("#table_6_2 tbody tr:eq(3) td:eq(10)").html(
						valueFormat(result[0][19], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(11)").html(result[0][20]);
				$("#table_6_2 tbody tr:eq(3) td:eq(11)").html(
						valueFormat(result[0][21], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(12)").html(result[0][22]);
				$("#table_6_2 tbody tr:eq(3) td:eq(12)").html(
						valueFormat(result[0][23], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(13)").html(result[0][24]);
				$("#table_6_2 tbody tr:eq(3) td:eq(13)").html(
						valueFormat(result[0][25], 1));

				$("#table_6_2 tbody tr:eq(2) td:eq(14)").html(result[0][26]);
				$("#table_6_2 tbody tr:eq(3) td:eq(14)").html(
						valueFormat(result[0][27], 1));

			}},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		//qy2

		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table6-2-qy-2",
				year : $("#year").val()
			},
			success : function(data) {
			var result = eval("(" + data + ")");
			if(data.trim().length>0){
				var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
				$("#table_6_2 tbody tr:eq(4) td:eq(1)").html(result[0][0]);
				$("#table_6_2 tbody tr:eq(5) td:eq(1)").html(result[0][1]);

				$("#table_6_2 tbody tr:eq(4) td:eq(2)").html(
						Number(result[0][2]));
				$("#table_6_2 tbody tr:eq(5) td:eq(2)").html(
						valueFormat(result[0][3], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(3)").html(
						Number(result[0][4]));
				$("#table_6_2 tbody tr:eq(5) td:eq(3)").html(
						valueFormat(result[0][5], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(4)").html(
						Number(result[0][6]));
				$("#table_6_2 tbody tr:eq(5) td:eq(4)").html(
						valueFormat(result[0][7], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(5)").html(
						Number(result[0][8]));
				$("#table_6_2 tbody tr:eq(5) td:eq(5)").html(
						valueFormat(result[0][9], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(6)").html(
						Number(result[0][10]));
				$("#table_6_2 tbody tr:eq(5) td:eq(6)").html(
						valueFormat(result[0][11], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(7)").html(
						Number(result[0][12]));
				$("#table_6_2 tbody tr:eq(5) td:eq(7)").html(
						valueFormat(result[0][13], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(8)").html(
						Number(result[0][14]));
				$("#table_6_2 tbody tr:eq(5) td:eq(8)").html(
						valueFormat(result[0][15], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(9)").html(
						Number(result[0][16]));
				$("#table_6_2 tbody tr:eq(5) td:eq(9)").html(
						valueFormat(result[0][17], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(10)").html(
						Number(result[0][18]));
				$("#table_6_2 tbody tr:eq(5) td:eq(10)").html(
						valueFormat(result[0][19], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(11)").html(
						Number(result[0][20]));
				$("#table_6_2 tbody tr:eq(5) td:eq(11)").html(
						valueFormat(result[0][21], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(12)").html(
						Number(result[0][22]));
				$("#table_6_2 tbody tr:eq(5) td:eq(12)").html(
						valueFormat(result[0][23], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(13)").html(
						Number(result[0][24]));
				$("#table_6_2 tbody tr:eq(5) td:eq(13)").html(
						valueFormat(result[0][25], 1));

				$("#table_6_2 tbody tr:eq(4) td:eq(14)").html(
						Number(result[0][26]));
				$("#table_6_2 tbody tr:eq(5) td:eq(14)").html(
						valueFormat(result[0][27], 1));

			}},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		$("#searchPDF").text("正在加载数据...6-3");
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table6-3",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
					$("#table_6_3 tbody tr:eq(0) td:eq(2)").html(result[0][1]);
					$("#table_6_3 tbody tr:eq(1) td:eq(1)").html(result[0][2]);
					$("#table_6_3 tbody tr:eq(2) td:eq(1)").html(result[0][3]);

					$("#table_6_3 tbody tr:eq(0) td:eq(3)").html(result[1][1]);
					$("#table_6_3 tbody tr:eq(1) td:eq(2)").html(result[1][2]);
					$("#table_6_3 tbody tr:eq(2) td:eq(2)").html(result[1][3]);

					$("#table_6_3 tbody tr:eq(0) td:eq(4)").html(result[2][1]);
					$("#table_6_3 tbody tr:eq(1) td:eq(3)").html(result[2][2]);
					$("#table_6_3 tbody tr:eq(2) td:eq(3)").html(result[2][3]);

					$("#table_6_3 tbody tr:eq(0) td:eq(5)").html(result[3][1]);
					$("#table_6_3 tbody tr:eq(1) td:eq(4)").html(result[3][2]);
					$("#table_6_3 tbody tr:eq(2) td:eq(4)").html(result[3][3]);
				} else {
					return;
				}

			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		//qy
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_table6-3-qy",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
var result = eval("("+data+")");
						$("#table_6_3 tbody tr:eq(3) td:eq(2)").html(result[0][1]);
						$("#table_6_3 tbody tr:eq(4) td:eq(1)").html(result[0][2]); 
						$("#table_6_3 tbody tr:eq(5) td:eq(1)").html(result[0][3]);
						$("#table_6_3 tbody tr:eq(6) td:eq(1)").html(valueFormat(result[0][4], 2)); 
						$("#table_6_3 tbody tr:eq(7) td:eq(1)").html(result[0][5]);
						$("#table_6_3 tbody tr:eq(8) td:eq(1)").html(result[0][6]);
							$("#table_6_3 tbody tr:eq(9) td:eq(1)").html(result[0][7]);
								$("#table_6_3 tbody tr:eq(10) td:eq(1)").html(result[0][8]);
						
						$("#table_6_3 tbody tr:eq(3) td:eq(3)").html(result[1][1]);
						$("#table_6_3 tbody tr:eq(4) td:eq(2)").html(result[1][2]); 
						$("#table_6_3 tbody tr:eq(5) td:eq(2)").html(result[1][3]);
/* 						$("#table_6_3 tbody tr:eq(6) td:eq(2)").html(result[1][4]); 
						$("#table_6_3 tbody tr:eq(7) td:eq(2)").html(result[1][5]);
						$("#table_6_3 tbody tr:eq(8) td:eq(2)").html(result[1][6]);
						$("#table_6_3 tbody tr:eq(9) td:eq(2)").html(result[1][7]); */
						$("#table_6_3 tbody tr:eq(10) td:eq(2)").html(result[1][8]);
						$("#table_6_3 tbody tr:eq(6) td:eq(2)").html("/"); 
						$("#table_6_3 tbody tr:eq(7) td:eq(2)").html("/");
						$("#table_6_3 tbody tr:eq(8) td:eq(2)").html("/");
						$("#table_6_3 tbody tr:eq(9) td:eq(2)").html("/");
						 
						$("#table_6_3 tbody tr:eq(3) td:eq(4)").html(result[2][1]);
						$("#table_6_3 tbody tr:eq(4) td:eq(3)").html(result[2][2]); 
						$("#table_6_3 tbody tr:eq(5) td:eq(3)").html(result[2][3]);
					/* 	$("#table_6_3 tbody tr:eq(6) td:eq(3)").html(result[2][4]); 
						$("#table_6_3 tbody tr:eq(7) td:eq(3)").html(result[2][5]);
						$("#table_6_3 tbody tr:eq(8) td:eq(3)").html(result[2][6]);
						$("#table_6_3 tbody tr:eq(9) td:eq(3)").html(result[2][7]); */
							$("#table_6_3 tbody tr:eq(6) td:eq(3)").html("/"); 
						$("#table_6_3 tbody tr:eq(7) td:eq(3)").html("/");
						$("#table_6_3 tbody tr:eq(8) td:eq(3)").html("/");
						$("#table_6_3 tbody tr:eq(9) td:eq(3)").html("/");
						$("#table_6_3 tbody tr:eq(10) td:eq(3)").html(result[2][8]);
					
						$("#table_6_3 tbody tr:eq(3) td:eq(5)").html(result[3][1]);
						$("#table_6_3 tbody tr:eq(4) td:eq(4)").html(result[3][2]); 
						$("#table_6_3 tbody tr:eq(5) td:eq(4)").html(result[3][3]);
			/* 			$("#table_6_3 tbody tr:eq(6) td:eq(4)").html(result[3][4]); 
						$("#table_6_3 tbody tr:eq(7) td:eq(4)").html(result[3][5]);
						$("#table_6_3 tbody tr:eq(8) td:eq(4)").html(result[3][6]);
						$("#table_6_3 tbody tr:eq(9) td:eq(4)").html(result[3][7]); */
									$("#table_6_3 tbody tr:eq(6) td:eq(4)").html("/"); 
						$("#table_6_3 tbody tr:eq(7) td:eq(4)").html("/");
						$("#table_6_3 tbody tr:eq(8) td:eq(4)").html("/");
						$("#table_6_3 tbody tr:eq(9) td:eq(4)").html("/");
                        $("#table_6_3 tbody tr:eq(10) td:eq(4)").html(result[3][8]); 

				/* 		$("#table_6_3 tbody tr:eq(3) td:eq(2)").html(result[0][0]);
						$("#table_6_3 tbody tr:eq(4) td:eq(1)").html(result[0][1]);
						$("#table_6_3 tbody tr:eq(5) td:eq(1)").html(result[0][2]);
						$("#table_6_3 tbody tr:eq(6) td:eq(1)").html(result[0][3]);
						$("#table_6_3 tbody tr:eq(7) td:eq(1)").html(valueFormat(result[0][4],2));
						$("#table_6_3 tbody tr:eq(8) td:eq(1)").html(result[0][5]);
						$("#table_6_3 tbody tr:eq(9) td:eq(1)").html(valueFormat(result[0][6],2));
						$("#table_6_3 tbody tr:eq(10) td:eq(1)").html(valueFormat(result[0][7],2)); */
						// hide
						hideLodding();
				} else {
					return;
				}

			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		$("#searchPDF").text("正在加载数据...F-1");
		/* F-1 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-1",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
						var html = "";
						for ( var i = 0; i < result.length; i++) {
							html += "<tr>";
							html += "<td>" + (i + 1) + "</td>";
							html += "<td>" + result[i][0] + "</td>";
							html += "<td>" + result[i][1] + "</td>";
							html += "<td>" + result[i][2] + "</td>";
							html += "<td>" + result[i][3] + "</td>";
							html += "<td>" + result[i][4] + "</td>";
							html += "<td>" + result[i][5] + "</td>";
							html += "<td>" + result[i][6] + "</td>";
							html += "<td>" + result[i][7] + "</td>";
							html += "<td>" + result[i][8] + "</td>";
							html += "<td>" + result[i][9] + "</td>";
							html += "</tr>";
						}
						var table = jQuery("#table_F_1 tbody:eq(0)");
						if (result != null && result.length > 0) {
							table.html(html);
						} else {
							table
									.html("<tr><td colspan=\"11\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						}
					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-2");
		/* F-2 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-2",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
						var html = "";
						for ( var i = 0; i < result.length; i++) {
							html += "<tr>";
							html += "<td>" + (i+1) + "</td>";
							html += "<td>" + result[i][0] + "</td>";
							html += "<td>" + result[i][1] + "</td>";
							html += "<td>" + result[i][2] + "</td>";
							html += "<td>" + result[i][3] + "</td>";
							html += "<td>" + result[i][4] + "</td>";
							html += "<td>" + result[i][5] + "</td>";
							html += "</tr>";
						}
						var table = jQuery("#table_F_2 tbody:eq(0)");
						if (result != null && result.length > 0) {
							table.html(html);
						} else {
							table
									.html("<tr><td colspan=\"7\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						}
					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-3");
		/* F-3 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-3",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
						var html = "";
						for ( var i = 0; i < result.length; i++) {
							html += "<tr>";
							html += "<td>" + result[i][0] + "</td>";
							html += "<td>" + result[i][1] + "</td>";
							html += "<td>" + result[i][2] + "</td>";
							html += "<td>" + (result[i][3].replace("-","")) + "</td>";
							html += "<td>" + result[i][4] + "</td>";
							html += "<td style='border: 1px solid #ccc; height:30px; width:25%;'>"
									+ result[i][5] + "</td>";
							html += "<td>" + result[i][6] + "</td>";
							html += "<td>" + result[i][7] + "</td>";
							html += "</tr>";
						}
						var table = jQuery("#table_F_3 tbody:eq(0)");
						if (result != null && result.length > 0) {
							table.html(html);
						} else {
							table
									.html("<tr><td colspan=\"18\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						}
					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-4");
		/* F-4 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-4",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
						var html = "";
						for ( var i = 0; i < result.length; i++) {
							html += "<tr>";
							html += "<td>" + result[i][0] + "</td>";
							html += "<td>" + result[i][1] + "</td>";
							html += "<td>" + result[i][2] + "</td>";
							html += "<td>" + result[i][3] + "</td>";
							html += "<td>" + result[i][4] + "</td>";
							html += "<td>" + (result[i][5].replace("-","")) + "</td>";
							html += "<td>" + result[i][6] + "</td>";
							html+="<td>"+result[i][7]+"</td>";
							html += "</tr>";
						}
						var table = jQuery("#table_F_4 tbody:eq(0)");
						if (result != null && result.length > 0) {
							table.html(html);
						} else {
							table
									.html("<tr><td colspan=\"10\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						}
					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-5");
		/* F-5 */
		$.ajax({
			async : false,
			url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
			type : "POST",
			data : {
				key : "ASDS_tableF-5",
				year : $("#year").val()
			},
			success : function(data) {
				if (data.trim().length > 0) {
					var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
					/* if(result==""||result==null){
						$("#table_F_5 tbody").html("<tr><td colspan=\"16\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						return;
					} */
					var html = "";
					for ( var i = 0; i < result.length; i++) {
						html += "<tr>";
						html += "<td>" + (i + 1) + "</td>";
						html += "<td>" + result[i][0] + "</td>";
						html += "<td>" + result[i][1] + "</td>";
						html += "<td>" + result[i][2] + "</td>";
						html += "<td>" + result[i][3] + "</td>";
						html += "<td>" + result[i][4] + "</td>";
						html += "<td>" + result[i][5] + "</td>";
						html += "<td>" + result[i][6] + "</td>";
						html += "<td>" + result[i][7] + "</td>";
						html += "<td>" + result[i][8] + "</td>";
						html += "<td>" + result[i][9] + "</td>";
						html += "<td>" + result[i][10] + "</td>";
						html += "<td>" + result[i][11] + "</td>";
						html += "<td>" + result[i][12] + "</td>";
						html += "<td>" + result[i][13] + "</td>";
						html += "<td>" + result[i][14] + "</td>";
						html += "<td>" + result[i][15] + "</td>";
						html += "<td>" + result[i][16] + "</td>";
						html += "</tr>";
					}
					$("#table_F_5 tbody").html(html);
				} else {
					hideLodding();
					return;
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		$("#searchPDF").text("正在加载数据...F-6");
		/* F-6 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-6",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
						if (result == "" || result == null) {
							$("#table_F_6 tbody")
									.html(
											"<tr><td colspan=\"16\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html = "";
						for ( var i = 0; i < result.length; i++) {
							html += "<tr>";
							html += "<td>" + (i + 1) + "</td>";
							html += "<td>" + result[i][0] + "</td>";
							html += "<td>" + result[i][1] + "</td>";
							html += "<td>" + result[i][2] + "</td>";
							html += "<td>" + result[i][3] + "</td>";
							html += "<td>" + valueFormat(result[i][4], 2)
									+ "</td>";
							html += "<td>" + result[i][5] + "</td>";
							html += "<td>" + valueFormat(result[i][6], 2)
									+ "</td>";
							html += "<td>" + result[i][7] + "</td>";
							html += "<td>" + valueFormat(result[i][8], 2)
									+ "</td>";
							html += "</tr>";
						}
						$("#table_F_6 tbody").html(html);
					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-7");
		/* F-7 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-7",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
					if (result == "" || result == null) {
						return;
					}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + result[i][4] + "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + result[i][6] + "</td>";
								html += "<td>" + result[i][7] + "</td>";
								html += "<td>" + result[i][8] + "</td>";
								html += "<td>" + result[i][9] + "</td>";
								html += "<td>" + result[i][10] + "</td>";
								html += "<td>" + result[i][11] + "</td>";
								html += "<td>" + result[i][12] + "</td>";
								html += "<td>" + result[i][13] + "</td>";
								html += "<td>" + result[i][14] + "</td>";
								html += "</tr>";
							}
							$("#table_F_7 tbody").html(html);
						} else {
							$("#table_F_7 tbody")
									.html(
											"<tr><td colspan=\"11\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-8");
		/* F-8 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-8",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_8 tbody")
										.html(
												"<tr><td colspan=\"11\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + result[i][4] + "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + result[i][6] + "</td>";
								html += "<td>" + result[i][7] + "</td>";
								html += "<td>" + result[i][8] + "</td>";
								html += "<td>" + result[i][9] + "</td>";
								html += "<td>" + result[i][10] + "</td>";
								html += "<td>" + result[i][11] + "</td>";
								html += "<td>" + result[i][12] + "</td>";
								html += "<td>" + result[i][13] + "</td>";
								html += "<td>" + result[i][14] + "</td>";
								html += "</tr>";
							}
							$("#table_F_8 tbody").html(html);
						} else {
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-9");
		/* F-9 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-9",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
						if (result == "" || result == null) {
							$("#table_F_9 tbody")
									.html(
											"<tr><td colspan=\"16\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html = "";
						for ( var i = 0; i < result.length; i++) {
							html += "<tr>";
							html += "<td>" + (i + 1) + "</td>";
							html += "<td>" + result[i][0] + "</td>";
							html += "<td>" + result[i][1] + "</td>";
							html += "<td>" + result[i][2] + "</td>";
							html += "<td>" + result[i][3] + "</td>";
							html += "<td>" + result[i][4] + "</td>";
							html += "<td>" + result[i][5] + "</td>";
							html += "<td>" + result[i][6] + "</td>";
							html += "<td>" + result[i][7] + "</td>";
							html += "<td>" + result[i][8] + "</td>";
							html += "<td>" + result[i][9] + "</td>";
							html += "<td>" + result[i][10] + "</td>";
							html += "<td>" + result[i][11] + "</td>";
							html += "<td>" + result[i][12] + "</td>";
							html += "<td>" + result[i][13] + "</td>";
							html += "<td>" + result[i][14] + "</td>";
							html += "</tr>";
						}
						$("#table_F_9 tbody").html(html);
					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-10");
		/* F-10 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-10",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_10 tbody")
										.html(
												"<tr><td colspan=\"10\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + valueFormat(result[i][4], 1)
										+ "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + valueFormat(result[i][6], 1)
										+ "</td>";
								html += "<td>" + result[i][7] + "</td>";
								html += "<td>" + valueFormat(result[i][8], 1)
										+ "</td>";
								html += "<td>" + valueFormat(result[i][9], 2)
										+ "</td>";
								html += "<td>" + valueFormat(result[i][10], 1)
										+ "</td>";
								html += "</tr>";
							}
							$("#table_F_10 tbody").html(html);
						} else {
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-11");
		/* F-11 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-11",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_11 tbody")
										.html(
												"<tr><td colspan=\"13\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + valueFormat(result[i][4], 1)
										+ "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + valueFormat(result[i][6], 1)
										+ "</td>";
								html += "<td>" + result[i][7] + "</td>";
								html += "<td>" + valueFormat(result[i][8], 1)
										+ "</td>";
								html += "<td>" + result[i][9] + "</td>";
								html += "<td>" + valueFormat(result[i][10], 1)
										+ "</td>";
								html += "</tr>";
							}
							$("#table_F_11 tbody").html(html);
						} else {
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});

		$("#searchPDF").text("正在加载数据...F-12");
		/* F-12 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-12",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_12 tbody")
										.html(
												"<tr><td colspan=\"8\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + result[i][4] + "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + valueFormat(result[i][6], 2)
										+ "</td>";
								html += "<td>" + result[i][7] + "</td>";
								html += "<td>" + result[i][8] + "</td>";
								html += "<td>" + valueFormat(result[i][9], 1)
										+ "</td>";
								html += "</tr>";
							}
							$("#table_F_12 tbody").html(html);

						}

					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-13");
		/* F-13 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-13",
						year : $("#year").val()
					},
					success : function(data) {
					if(data.trim().length>0){
						var result = eval("(" + data + ")");
						if (result == "" || result == null) {
							$("#table_F_13 tbody")
									.html(
											"<tr><td colspan=\"8\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html = "";
						for ( var i = 0; i < result.length; i++) {
							html += "<tr>";
							html += "<td>" + (i + 1) + "</td>";
							html += "<td>" + result[i][0] + "</td>";
							html += "<td>" + result[i][1] + "</td>";
							html += "<td>" + result[i][2] + "</td>";
							html += "<td>" + result[i][3] + "</td>";
							html += "<td>" + result[i][4] + "</td>";
							html += "<td>" + result[i][5] + "</td>";
							html += "<td>" + result[i][6] + "</td>";
							html += "<td>" + result[i][7] + "</td>";
							html += "<td>" + result[i][8] + "</td>";
							html += "<td>" + result[i][9] + "</td>";
							html += "<td>" + result[i][10] + "</td>";
							html += "</tr>";
						}
						$("#table_F_13 tbody").html(html);
					}},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		$("#searchPDF").text("正在加载数据...F-14");
		/* F-14 */
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-14",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_14 tbody")
										.html(
												"<tr><td colspan=\"9\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + valueFormat(result[i][3], 1)
										+ "</td>";
								html += "<td>" + result[i][4] + "</td>";
								html += "<td>" + valueFormat(result[i][5], 1)
										+ "</td>";
								html += "<td>" + result[i][6] + "</td>";
								html += "</tr>";
							}
							$("#table_F_14 tbody").html(html);
							hideLodding();
						} else {
							hideLodding();
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		/* F-15 */
		$("#searchPDF").text("正在加载数据...F-15");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-15",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_15 tbody")
										.html(
												"<tr><td colspan=\"9\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + result[i][4] + "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + result[i][6] + "</td>";
								html += "<td>" + result[i][7] + "</td>";
								html += "<td>" + result[i][8] + "</td>";
								html += "<td>" + result[i][9] + "</td>";
								html += "<td>" + result[i][10] + "</td>";
								html += "<td>" + valueFormat(result[i][11], 1)
										+ "</td>";
								html += "</tr>";
							}
							$("#table_F_15 tbody").html(html);
							hideLodding();
						} else {
							hideLodding();
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		/* F-16 */
		$("#searchPDF").text("正在加载数据...F-16");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-16",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_16 tbody")
										.html(
												"<tr><td colspan=\"9\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + valueFormat(result[i][4], 1)
										+ "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + result[i][6] + "</td>";
								html += "<td>" + result[i][7] + "</td>";
								html += "</tr>";
							}
							$("#table_F_16 tbody").html(html);
							hideLodding();
						} else {
							hideLodding();
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
				$("#searchPDF").text("正在加载数据...ASDS_tableF-16-1");
					$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-16-1",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_F_16_1 tbody").html("<tr><td colspan=\"5\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html="";
						for ( var i = 0; i < result.length; i++) {
							html+="<tr>";
								html+="<td>"+result[i][0]+"</td>";
								html+="<td>"+result[i][1]+"</td>";
								html+="<td>"+result[i][2]+"</td>";
								html+="<td>"+result[i][3]+"</td>";
								html+="<td>"+result[i][4]+"</td>";
							html+="</tr>";
						}
						var table=jQuery("#table_F_16_1 tbody:eq(0)");
						if(result!=null && result.length>0){
							table.html(html);
						}else{
							table.html("<tr><td colspan=\"5\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
						}
						// hide
						hideLodding();
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				
		/* F-17 */
		$("#searchPDF").text("正在加载数据...F-17");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-17",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_17 tbody")
										.html(
												"<tr><td colspan=\"9\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + result[i][4] + "</td>";
								html += "<td>" + valueFormat(result[i][5], 1)
										+ "</td>";
								html += "<td>" + valueFormat(result[i][6], 1)
										+ "</td>";
								html += "</tr>";
							}
							$("#table_F_17 tbody").html(html);
							hideLodding();
						} else {
							hideLodding();
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		/* F-18 */
		$("#searchPDF").text("正在加载数据...F-18");
		$
				.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-18",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_18 tbody")
										.html(
												"<tr><td colspan=\"9\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + result[i][4] + "</td>";
								html += "<td>" + valueFormat(result[i][5], 1)
										+ "</td>";
								html += "<td>" + valueFormat(result[i][6], 1)
										+ "</td>";
							}
							$("#table_F_18 tbody").html(html);
							hideLodding();
						} else {
							hideLodding();
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});
		/* F-19 */
		$("#searchPDF").text("正在加载数据...F-19");
		$.ajax({
					async : false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-19",
						year : $("#year").val()
					},
					success : function(data) {
						if (data.trim().length > 0) {
							var result = eval("(" + data + ")");
							if (result == "" || result == null) {
								$("#table_F_19 tbody")
										.html(
												"<tr><td colspan=\"9\"><font color=\"black\"><b>该年份下没有数据</b></font></td></tr>");
								return;
							}
							var html = "";
							for ( var i = 0; i < result.length; i++) {
								html += "<tr>";
								html += "<td>" + (i + 1) + "</td>";
								html += "<td>" + result[i][0] + "</td>";
								html += "<td>" + result[i][1] + "</td>";
								html += "<td>" + result[i][2] + "</td>";
								html += "<td>" + result[i][3] + "</td>";
								html += "<td>" + valueFormat(result[i][4], 1)
										+ "</td>";
								html += "<td>" + result[i][5] + "</td>";
								html += "<td>" + valueFormat(result[i][6], 1)
										+ "</td>";
								html += "<td>" + result[i][7] + "</td>";
								html += "<td>" + valueFormat(result[i][8], 1)
										+ "</td>";
							}
							$("#table_F_19 tbody").html(html);
							hideLodding();
						} else {
							hideLodding();
							return;
						}
					},
					error : function() {
						hideLodding();
						alert("系统忙，请稍后重试！！！");
					}
				});

		//echarts

		init();// echarts控件初始化后初始化页面数据
		//1-2
		getImg(table_1_2_bt_nl.getDataURL("png"), "table_1_2_nl_img.png");//获取图片
		getImg(table_1_2_bt_xw.getDataURL("png"), "table_1_2_xw_img.png");//获取图片
		//1-3
		getImg(table_1_3_bt_zc.getDataURL("png"), "table_1_3_zc_img.png");//获取图片
		getImg(table_1_3_bt_zgxw.getDataURL("png"), "table_1_3_zgxw_img.png");//获取图片
		getImg(table_1_3_bt_age.getDataURL("png"), "table_1_3_age_img.png");//获取图片
		//2-2
	 	/* getImg(table_2_2_bt_zc.getDataURL("png"), "table_2_2_zc_img.png");//获取图片
		getImg(table_2_2_bt_zgxw.getDataURL("png"), "table_2_2_zgxw_img.png");//获取图片
		getImg(table_2_2_bt_age.getDataURL("png"), "table_2_2_age_img.png");//获取图片
		getImg(table_2_2_bt_xy.getDataURL("png"), "table_2_2_xy_img.png");//获取图片  */
		//2-8
	 	getImg(table_2_8_bt_nl.getDataURL("png"), "table_2_8_nl_img.png");//获取图片
		getImg(table_2_8_bt_xw.getDataURL("png"), "table_2_8_xw_img.png");//获取图片
		getImg(table_2_8_bt_xy.getDataURL("png"), "table_2_8_xy_img.png");//获取图片
		getImg(table_2_8_bt_zc.getDataURL("png"), "table_2_8_zc_img.png");//获取图片 
		//2-9
	 	getImg(table_2_9_bt_nl.getDataURL("png"), "table_2_9_nl_img.png");//获取图片
		getImg(table_2_9_bt_xw.getDataURL("png"), "table_2_9_xw_img.png");//获取图片
		getImg(table_2_9_bt_zc.getDataURL("png"), "table_2_9_zc_img.png");//获取图片
		//添加图片到html
	 	$("#table_1_2_nl_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_1_2_nl_img.png");
		$("#table_1_2_xw_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_1_2_xw_img.png");
		
	 	$("#table_1_3_zc_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_1_3_zc_img.png");
		$("#table_1_3_zgxw_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_1_3_zgxw_img.png");
		$("#table_1_3_age_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_1_3_age_img.png");

		/* $("#table_2_2_zc_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_2_2_zc_img.png");
		$("#table_2_2_zgxw_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_2_2_zgxw_img.png");
		$("#table_2_2_age_div img").attr("src",getRootPath() + "/CHART/images/ASDS_img_glv/table_2_2_age_img.png");
		$("#table_2_2_xy_div img").attr("src",getRootPath() + "/CHART/images/ASDS_img_glv/table_2_2_xy_img.png");  */
		
		$("#table_2_8_nl_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_2_8_nl_img.png");
		$("#table_2_8_xw_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_2_8_xw_img.png");
		$("#table_2_8_xy_div img").attr("src",getRootPath() + "/CHART/images/ASDS_img_glv/table_2_8_xy_img.png");
		$("#table_2_8_zc_div img").attr("src",getRootPath() + "/CHART/images/ASDS_img_glv/table_2_8_zc_img.png");
		
		$("#table_2_9_nl_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_2_9_nl_img.png");
		$("#table_2_9_xw_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_2_9_xw_img.png");
		$("#table_2_9_zc_div img").attr("src",getRootPath() + "/CHART/images/ASDS_img_glv/table_2_9_zc_img.png");

		$("#searchPDF").text("已完成");
		/* F 结束 */
	};

	function butt() {
		if ($("#searchPDF").text() != "已完成") {
			alert("数据不完整.请稍后");
			return;
		}
		$("#bodyDiv2").html("");

		var html2 = $("#bodyDiv1").html();
		html2 = html2.replace(new RegExp("(<img [^<>]*>)", "gm"), "$1</img>");
		$("#upload_img").show();
		$
				.ajax({
					url : getRootPath() + "/CHART/itext",
					type : "POST",
					data : {
						"bodyData" : html2
					},
					async : false,
					success : function(dateString) {
						if (dateString != "error") {
							var html = "";
							html = "<form id=\"formid\" action=\""
									+ getRootPath()
									+ "/CHART/itextUpload\" method=\"post\"><input type=\"hidden\" id=\"filename\" name=\"filename\" value='审核评估状态数据分析报告'></input><input type=\"hidden\" id=\"dateString\" name=\"dateString\" value='"+dateString+"'></input></form>";
							$("body").append(html);
							$("#formid").submit();
							$("#formid").remove();
							$("#upload_img").fadeOut(1000);
						} else {
							alert("历史纪录 insert...错误");
						}
					}
				});
	}

	function getRootPath() {
		//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
		var curWwwPath = window.document.location.href;
		//获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
		var pathName = window.document.location.pathname;
		var pos = curWwwPath.indexOf(pathName);
		//获取主机地址，如： http://localhost:8083
		var localhostPaht = curWwwPath.substring(0, pos);
		//获取带"/"的项目名，如：/uimcardprj
		var projectName = pathName.substring(0,
				pathName.substr(1).indexOf('/') + 1);
		return localhostPaht;
	}
</script>
<script type="text/javascript"
	src="/CHART/js/ASDSReport/ASDS_save_echarts.js"></script>
</head>

<body>

	<div class="tb_main">
		<span id="searchPDF"
			style=" margin: 5px;float: left;color: black;font-size: 24"></span>
		<div class="chocieYear">
			<ul>
				<li><!-- <input onclick="butt();" style="position: relative;"
					type="button" value="PDF下载状态数据分析报告"></input> --><span id="searchztfxbg">
						<input onclick="buttWord();" style="position: relative;"
						type="button" value="WORD下载状态数据分析报告"></input> </span>年份： <select
					class="select_tips tb_select" onchange="yearchange();" id="year">
				</select></li>
			</ul>
		</div>
	</div>

	<div id="bodyDiv2" style="display: none;"></div>
	<div style="margin-left:25%;">
		<img id="upload_img" style="display: none;"
			src="/CHART/images/dengdai_lv_se.gif"></img>
	</div>
	<!-- style="display: none;" -->
	<div id="bodyDiv1"  style="display: none;">
		<table style="width:100%;height:1090px;">
			<tr>
				<td style="border: 0px;text-align: center;font-size: 28pt;font-family: SimHei">普通高等学校本科教学
				</td>
			</tr>
			<tr>
				<td style="border: 0px;text-align: center;font-size: 28pt;font-family: SimHei">审核评估教学状态数据分析报告
				</td>
			</tr>
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"><h1>*</h1></td></tr> -->
			<!-- <tr><td style="border: 0px;text-align: center;"><h1>江</h1></td></tr> -->
			<!-- <tr><td style="border: 0px;text-align: center;"><h1>上</h1></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"><h1>*</h1></td></tr> -->
			<!-- <tr><td style="border: 0px;text-align: center;"><h1>苏</h1></td></tr> -->
			<!-- <tr><td style="border: 0px;text-align: center;"><h1>海</h1></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"><h1>*</h1></td></tr> -->
			<!-- <tr><td style="border: 0px;text-align: center;"><h1>师</h1></td></tr> -->
			<!-- <tr><td style="border: 0px;text-align: center;"><h1>电</h1></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"><h1>*</h1></td></tr> -->
			<!-- <tr><td style="border: 0px;text-align: center;"><h1>范</h1></td></tr> -->
			<!-- <tr><td style="border: 0px;text-align: center;"><h1>机</h1></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"><h1>大</h1></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"><h1>学</h1></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<!--   	<tr><td style="border: 0px;text-align: center;"></td></tr> -->
			<tr>
				<td style="border: 0px;text-align: center;"></td>
			</tr>
			<tr><td>我就是学校的名字</td></tr>
			<tr>
				<td style="border: 0px;text-align: center;"><h3>教育部高等教育教学评估中心</h3>
				</td>
			</tr>
			<tr>
				<td style="border: 0px;text-align: center;"><h3 id="h3Date"></h3>
				</td>
			</tr>

		</table>
			<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman";
mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
</span>
		<!-- 目 录 1 -->
		<table style="border-collapse:collapse;padding: 0px;margin: 0px;border: 1px;">
			<thead >
				<tr>
					<td colspan="4" style="background-color: #eee;font-family: SimSun;font-size: 22pt">目 录</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style="border: 0px;border: 0px;text-align: left;">一、</td>
					<td style="border: 0px;text-align: left;">学校概要数据</td>
					<td style="border: 0px;text-align: center;"></td>
					<td style="border: 0px;text-align: center;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">概要 1</td>
					<td style="border: 0px;text-align: left;">概要1 学校基本情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">概要 2</td>
					<td style="border: 0px;text-align: left;">概要2 学位点概况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">概要 3</td>
					<td style="border: 0px;text-align: left;">概要3 学科专业基本情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">概要 4</td>
					<td style="border: 0px;text-align: left;">概要4学校《本科教学质量报告》支撑数据指标比较</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">二、</td>
					<td style="border: 0px;text-align: left;">审核评估基本数据</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">1</td>
					<td style="border: 0px;text-align: left;">定位与目标</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">1.1</td>
					<td style="border: 0px;text-align: left;">办学指导思想</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">1.2</td>
					<td style="border: 0px;text-align: left;">校领导年龄和学位结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">1.3</td>
					<td style="border: 0px;text-align: left;">校级教学管理人员结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">1.4</td>
					<td style="border: 0px;text-align: left;">专业布局概览</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">1.5</td>
					<td style="border: 0px;text-align: left;">教学单位学科专业概览</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2</td>
					<td style="border: 0px;text-align: left;">教师队伍</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.1</td>
					<td style="border: 0px;text-align: left;">学校教师情况及生师比</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.2</td>
					<td style="border: 0px;text-align: left;">教师队伍结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.3</td>
					<td style="border: 0px;text-align: left;">各教学单位教师与本科生情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.4</td>
					<td style="border: 0px;text-align: left;">各专业专任教师与本科生情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.5</td>
					<td style="border: 0px;text-align: left;">各专业授课教师情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.6</td>
					<td style="border: 0px;text-align: left;">教授、副教授及高层次人才讲授本科课程情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.6.1</td>
					<td style="border: 0px;text-align: left;">教授、副教授讲授本科课程情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.6.2</td>
					<td style="border: 0px;text-align: left;">高层次人才讲授本科课程情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.7</td>
					<td style="border: 0px;text-align: left;">教师发展与服务情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.7.1</td>
					<td style="border: 0px;text-align: left;">教师教学发展机构培训情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.7.2</td>
					<td style="border: 0px;text-align: left;">教师进修、培养与交流情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.8</td>
					<td style="border: 0px;text-align: left;">专业带头人情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">2.9</td>
					<td style="border: 0px;text-align: left;">学校实验技术人员结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
<!-- 				<tr>
					<td style="border: 0px;text-align: left;">2.10</td>
					<td style="border: 0px;text-align: left;">教师教育教学改革与成果</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr> -->

				<tr>
					<td style="border: 0px;text-align: left;">3</td>
					<td style="border: 0px;text-align: left;">教学资源</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.1</td>
					<td style="border: 0px;text-align: left;">教学资源投入情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.2</td>
					<td style="border: 0px;text-align: left;">教学基本设施情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.2.1</td>
					<td style="border: 0px;text-align: left;">教学行政用房情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.2.2</td>
					<td style="border: 0px;text-align: left;">教学、科研仪器设备情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.2.3</td>
					<td style="border: 0px;text-align: left;">本科校内实验、实习、实训场所及设备情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.2.4</td>
					<td style="border: 0px;text-align: left;">校园网、图书情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.3</td>
					<td style="border: 0px;text-align: left;">专业情况概览</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.4</td>
					<td style="border: 0px;text-align: left;">优势专业概览</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.5</td>
					<td style="border: 0px;text-align: left;">新设专业概览</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.6</td>
					<td style="border: 0px;text-align: left;">各专业实验教学情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<!-- <tr>
					<td style="border: 0px;text-align: left;">3.4</td>
					<td style="border: 0px;text-align: left;">优势专业概览</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.5</td>
					<td style="border: 0px;text-align: left;">新设专业概览</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.6</td>
					<td style="border: 0px;text-align: left;">各教学单位课程开设情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr> -->
				<tr>
					<td style="border: 0px;text-align: left;">3.7</td>
					<td style="border: 0px;text-align: left;">课程开设情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.7.1</td>
					<td style="border: 0px;text-align: left;">全校课程开设情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.7.2</td>
					<td style="border: 0px;text-align: left;">全校课程规模情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">3.8</td>
					<td style="border: 0px;text-align: left;">在线开放课程情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
			<!-- 	<tr>	
					<td style="border: 0px;text-align: left;">3.9</td>
					<td style="border: 0px;text-align: left;">国家精品开放课程建设</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr> -->
				<tr>
					<td style="border: 0px;text-align: left;">3.9</td>
					<td style="border: 0px;text-align: left;">合作办学情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>


				<tr>
					<td style="border: 0px;text-align: left;">4</td>
					<td style="border: 0px;text-align: left;">培养过程</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.1</td>
					<td style="border: 0px;text-align: left;">专业培养方案学分结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.2</td>
					<td style="border: 0px;text-align: left;">人才培养模式创新实验项目情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.3</td>
					<td style="border: 0px;text-align: left;">创新创业教育</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.3.1</td>
					<td style="border: 0px;text-align: left;">学校创新创业教育情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.3.2</td>
					<td style="border: 0px;text-align: left;">高校实践育人创新创业基地</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.4</td>
					<td style="border: 0px;text-align: left;">实验教学示范中心</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.5</td>
					<td style="border: 0px;text-align: left;">毕业综合训练情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.6</td>
					<td style="border: 0px;text-align: left;">校园文化活动情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.7</td>
					<td style="border: 0px;text-align: left;">学生社团情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">4.8</td>
					<td style="border: 0px;text-align: left;">国外及港澳台侨学生情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<!-- 	</tbody>
   	</table>
   		目录2
   		<table>
			<tbody> -->
				<tr>
					<td style="border: 0px;text-align: left;">5</td>
					<td style="border: 0px;text-align: left;">学生发展</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">5.1</td>
					<td style="border: 0px;text-align: left;">生源情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>

				<tr>
					<td style="border: 0px;text-align: left;">5.2.1</td>
					<td style="border: 0px;text-align: left;">各专业（大类）本科生招生报到情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">5.2.2</td>
					<td style="border: 0px;text-align: left;">各大类本科生招生报到情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">5.3</td>
					<td style="border: 0px;text-align: left;">学生管理人员与心里咨询人员结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">5.4</td>
					<td style="border: 0px;text-align: left;">各教学单位学生管理人员与学生情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">5.5</td>
					<td style="border: 0px;text-align: left;">本科生奖贷补情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">5.6</td>
					<td style="border: 0px;text-align: left;">学生发展情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">5.7</td>
					<td style="border: 0px;text-align: left;">本科生参加大学生创新创业训练计划与参与教师科研情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">5.8</td>
					<td style="border: 0px;text-align: left;">各专业毕业生情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">5.9</td>
					<td style="border: 0px;text-align: left;">毕业生就业去向分布情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>

				<tr>
					<td style="border: 0px;text-align: left;">6</td>
					<td style="border: 0px;text-align: left;">质量保障</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">6.1</td>
					<td style="border: 0px;text-align: left;">评教信息</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">6.2</td>
					<td style="border: 0px;text-align: left;">教学质量管理队伍结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">6.3</td>
					<td style="border: 0px;text-align: left;">教育教学改革与成果</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>

				<tr>
					<td style="border: 0px;text-align: left;">三、</td>
					<td style="border: 0px;text-align: left;">详细数据附表</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 1</td>
					<td style="border: 0px;text-align: left;">专业基本情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 2</td>
					<td style="border: 0px;text-align: left;">专业大类情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>

				<tr>
					<td style="border: 0px;text-align: left;">附表 3</td>
					<td style="border: 0px;text-align: left;">校领导情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 4</td>
					<td style="border: 0px;text-align: left;">校级教学管理人员基本信息</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 5</td>
					<td style="border: 0px;text-align: left;">各教学单位专任教师结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 6</td>
					<td style="border: 0px;text-align: left;">各教学单位专业带头人情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 7</td>
					<td style="border: 0px;text-align: left;">各教学单位实验系列职称人员结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>

				<tr>
					<td style="border: 0px;text-align: left;">附表 8</td>
					<td style="border: 0px;text-align: left;">各专业授课教师结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 9</td>
					<td style="border: 0px;text-align: left;">各大类授课教师结构</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 10</td>
					<td style="border: 0px;text-align: left;">各专业授课教师授课情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 11</td>
					<td style="border: 0px;text-align: left;">各专业大类授课教师授课情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 12</td>
					<td style="border: 0px;text-align: left;">各专业教师学生情况概览</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 13</td>
					<td style="border: 0px;text-align: left;">校内实验室使用情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 14</td>
					<td style="border: 0px;text-align: left;">各专业实验教学情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 15</td>
					<td style="border: 0px;text-align: left;">各专业教学情况一览表</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 16</td>
					<td style="border: 0px;text-align: left;">毕业综合训练情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 16-1</td>
					<td style="border: 0px;text-align: left;">医学专业学生毕业综合训练情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 17</td>
					<td style="border: 0px;text-align: left;">各专业本科生招生情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 18</td>
					<td style="border: 0px;text-align: left;">各大类本科生招生情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;">附表 19</td>
					<td style="border: 0px;text-align: left;">各专业毕业生情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
			<!-- 	<tr>
					<td style="border: 0px;text-align: left;">四、</td>
					<td style="border: 0px;text-align: left;">来源数据列表</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr> -->
			<tr><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td></tr>
<!-- <tr><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td></tr>
<tr><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td></tr>
<tr><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td></tr>
<tr><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td></tr>
<tr><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td></tr>
<tr><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td></tr>
<tr><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td><td style="border: 0px;text-align: center;"></td></tr>
	 -->	
	 <tr><td style="border: 0px;text-align: left;"></td></tr>
	 <tr><td style="border: 0px;text-align: left;"></td></tr>
	 <tr><td style="border: 0px;text-align: left;"></td></tr>
	 </tbody>
	</table>
 <!-- 	 <table>
		<tbody>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			</tbody>
	</table>   -->
	<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman";
mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
</span>
		<div style="text-align: center;"><p style="font-size:22pt;font-family: Simsun">说 明</p></div>
		<p style="font-size:14pt;text-align: left;font-family: FangSong">&nbsp&nbsp&nbsp&nbsp除特殊说明外,本报告所有的数据资料均来自于学校全国本科教学基本状态数据库。报告围绕本科教学工作审核评估范围,通过数据提取与分析,量化反映学校本科教学基本状态,供评估专家了解情况、分析判断使用。</p>
		<p style="font-size:14pt;text-align: left;font-family: FangSong">&nbsp&nbsp&nbsp&nbsp本报告分三部分,第一部分为学校本科教学质量报告支撑数据的发展变化及学科专业基本情况;第二部分根据审核评估范围的
			6 个审核项目,分别对相关的数据进行分析,并通过图表等方式呈现;第三部分为详细的数据附表,为各位专家开展评估工作提供直观的数据支撑。</p>
		<p style="font-size:14pt;text-align: left;font-family: FangSong">&nbsp&nbsp&nbsp&nbsp专家如需了解更多的原始数据,在评估期间可以登录学校本科教学基本状态数据库系统查阅。</p>
		<p style="font-size:14pt;text-align: left;font-family: FangSong">&nbsp&nbsp&nbsp&nbsp除特殊说明外,报告中财务和科研数据的统计时点为自然年(即上年
			1 月 1日至 12 月 31 日),教学等其他数据统计时点为学年(即 上年 9
			月 1日至 本年 8月 31日)、时点(即 本年9月30日)。</p>
		<p style="font-size:14pt;text-align: left;font-family: FangSong">&nbsp&nbsp&nbsp&nbsp“※”标注出原始数据在状态数据库中位置，便于专家查阅。
说明：本《数据分析报告》是与学校核实数据，经学校确认后生成。
		</p>
		
		<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman";
mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
</span>
<!-- <table>
		<tbody> -->
		<!-- 	<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr> -->
			<!-- <tr><td style="border: 0px;text-align: left;"></td></tr>
			<tr><td style="border: 0px;text-align: left;"></td></tr>
			</tbody> -->
<!-- 	</table> 
		  <table>
			<tbody>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
			</tbody>
		</table>  -->

		<div class="tb_main">
			<!-- 正式数据 -->

			<p style="font-size: 28px">
				<b>一、学校概要数据</b>
			</p>
			
			<div id="jiaoshao">
 			<p style="font-size: 24px">
				<b>概要1学校基本情况 </b>
			</p>
			
					<u >&nbsp;&nbsp;<font id="a1"> &nbsp;&nbsp;&nbsp;</font></u>地处<u > <font id="a2">&nbsp;&nbsp;&nbsp;</font></u>省<u ><font id="a3">&nbsp;&nbsp;&nbsp;</font></u>市，是<u ><font id="a4">&nbsp;&nbsp;&nbsp;</font></u>类院校，举办者为<u ><font id="a5">&nbsp;&nbsp;&nbsp;</font></u>，于<u><font id="a6">&nbsp;&nbsp;&nbsp;</font></u>年开办本科。学校有本科专业<u><font id="a7">&nbsp;&nbsp;&nbsp;</font></u>个，其中<u><font id="a8">&nbsp;&nbsp;&nbsp;</font></u>
					个为新办专业。招生批次为<u ><font id="a9">&nbsp;&nbsp;&nbsp;</font></u>。学校全日制在校生<u ><font id="a10">&nbsp;&nbsp;&nbsp;</font></u>,折合在校生<u><font id="a11">&nbsp;&nbsp;&nbsp;</font></u>，全校教职工<u ><font id="a12">&nbsp;&nbsp;&nbsp;</font></u>人，其中专任教师<u><font id="a13">&nbsp;&nbsp;&nbsp;</font></u>人。学校共有<u ><font id="a14">&nbsp;&nbsp;&nbsp;</font></u>个校区，其中<u><font id="a15">&nbsp;&nbsp;&nbsp;</font></u>
					个为本地校区。学校有国家实验室<u><font id="a16">&nbsp;&nbsp;&nbsp;</font></u>个，国家重点实验室<u><font id="a17">&nbsp;&nbsp;&nbsp;</font></u>个，院士<u ><font id="a18">&nbsp;&nbsp;&nbsp;</font></u>人，千人计划<u ><font id="a19">&nbsp;&nbsp;&nbsp;</font></u>人，长江学者<u ><font id="a20">&nbsp;&nbsp;&nbsp;</font></u>人。
				<br>
				※以上数据来源：表1-1 学校概况，表1-6-1 教职工基本信息，表1-8-2 科研基地，表3-3-1 高层次人才， 表4-1-1 学科建设，表6-1 学生数量基本情况。<br>
				
			</div>
 			<p style="font-size: 18px;text-align: left;"></p>
			<p style="font-size: 24px">
				<b>概要 2 学位点概况 </b>
			</p>
			<table id="table_G_2">
				<thead>
					<tr>
						<td colspan="6">
							<h4>学校概要数据-概要2 学位点概况</h4></td>
					</tr>
					<tr>
						<td></td>
						<td>1.博士后流动站</td>
						<td>2.博士学位授权一级学科点</td>
						<td>3.博士学位授权二级学科点(不含一级覆盖点)</td>
						<td>4.硕士学位授权一级学科点</td>
						<td>5.硕士学位授权二级学科点(不含一级覆盖点)</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>合计</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="6"><font color="black">※ ※以上数据来源：表4-1-1 学科建设，
						</font></td>
					</tr>
				</tfoot>
			</table>


			<P style="FONT-SIZE: 24px">
				<B>概要 3 学科专业基本情况 </B>
			</P>
			<TABLE id=table_G_3>
				<THEAD>
					<TR>
						<TD colSpan="2">
							<H4>学校概要数据-概要3 学科专业基本情况</H4>
						</TD>
					</TR>
					<tr>
						<td>项目</td>
						<td>数量</td>
					</tr>

				</THEAD>

				<TBODY>
					<tr>
						<td>本科专业总数</td>
						<td></td>
					</tr>
					<tr>
						<td>其中：新专业</td>
						<td></td>
					</tr>
					<tr>
						<td>校内专业总数</td>
						<td></td>
					</tr>
					<tr>
						<td>专业大类数</td>
						<td></td>
					</tr>
					<tr>
						<td>本科专业覆盖学科门类数</td>
						<td></td>
					</tr>
					<tr>
						<td>重点学科数</td>
						<td></td>
					</tr>
					<tr>
						<td><!-- 专业平均总分数 -->校内专业平均总学分</td>
						<td></td>
					</tr>
				<!-- 	<tr>
						<td>专业平均实践教学环节学分比例(%)</td>
						<td></td>
					</tr> -->
				</TBODY>
				<TFOOT>
					<TR>
						<TD colSpan="2"><FONT color=black>※以上数据来源：表4-1-1学科建设，表1-5-1 专业基本情况，表1-5-2专业大类情况，表4-1-4重点学科，表4-2专业培养计划表。<br>
【注】：1.每个专业实践教学环节学分所占比例=（集中实践教学环节学分+实验教学学分）/总学分。<br>
2.详细数据可参考【附表1 专业基本情况】，【附表2 专业大类情况】。<br>
</TD>
					</TR>
				</TFOOT>
			</TABLE>

			<p style="font-size: 24px">
				<b>概要 4 学校《本科教学质量报告》支撑数据指标比较 </b>
			</p>
			<table id="table_G_4">
				<thead>
					<tr>
						<td colspan="5">
							<h4>学校概要数据-概要 4 学校《本科教学质量报告》支撑数据指标比较</h4></td>
					</tr>
					<tr>
						<td>指标项</td>
						<td>学校当年质量报告数据</td>
						<td>学校填报数据平台数据</td>
						<td>高等教育质量监测国家数据平台2016年985院校高校常模数据</td>
						<td>上一轮评估数据（20××年）</td>
					</tr>
				</thead>

				<tbody>

					<tr>
					
						<td>本科生人数(人)</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>折合学生数(人)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>全日制在校生数(人)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>本科生占全日制在校生总数的比例（ %)</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>专任教师数量（人）</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>具有高级职称的专任教师比例（ %)</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>本科专业总数(个)</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>生师比</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>生均教学科研仪器设备值（万元）</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>年新增教学科研仪器设备值（万元）</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>生均纸质图书（册）</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>电子图书总数（册）</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>电子期刊、图书等数据库（个）</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>生均教学行政用房（平方米）</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>生均实验室面积（平方米）</td>
						<td></td><td></td><td></td><td></td>
					</tr>

					<tr>
						<td>生均教学日常运行支出（元）</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>本科专项教学经费(万元)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>生均本科实验经费(元)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>全校开设课程总门数(门)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>主讲本科课程的教授占教授总数的比例(%)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>教授授本科课程占总课程数的比例(%)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>应届本科生毕业率(%)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>应届本科毕业生学位授予率(%)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>应届本科毕业生就业率(%)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
					<tr>
						<td>体质测试达标率(%)</td>
						<td></td><td></td><td></td><td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="5"><font color="black"> 【注】：<br /> 
								1. 指标内涵按《教育部办公厅关于普通高等学校编制发布2012年〈本科教学质量报告〉的通知》（教高司函﹝2013﹞33号）文件的解释；<br/>
2.当年质量报告数据和上一轮评估数据由学校直接上报。<br/>
3. “专任教师”指具有教师资格、专职从事教学工作的、只属于教学单位的人员，此处统计时不包括直属医院具有医师职称的医生。<br/>
4. 折合在校生数=普通本、专科（高职)生数+全日制硕士生数×1.5+全日制博士生数×2+留学生数×3+预科生数+进修生数+成人脱产班学生数+夜大（业余)学生数×0.3+函授生数×0.1（不包括自考生）<br/>
5.全日制在校生数=普通本、专科（高职)生数+全日制硕士生数+全日制博士生数+留学生数+预科生数+成人脱产班学生数+进修生数<br/>
6.生师比=折合在校生数/教师总数（教师总数= 专任教师数+ 外聘教师数×0.5）；此处专任教师数中含直属医院具有医师职称的医生。<br/>
 </font></td>
					</tr>
				</tfoot>
			</table>
			<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman";
mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
</span>
				<div align="center">
				<h2>二、审核评估基本数据</h2>
				</div>
			<p style="font-size: 28px">
				<b>1、定位与目标</b>
			</p>
			<table>
				<thead>
					<tr>
						<th>审核项目</th>
						<th>审核要素</th>
						<th>审核要点</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowspan="3" >1.定位与目标</td>
						<td >1.1办学定位</td>
						<td style="text-align: left;">（1）学校办学定位及确定依据<br>（2）办学定位在学校发展规划中的体现
						</td >
					</tr>
					<tr >
						<td>1.2培养目标</td>
						<td style="text-align: left;">（1）学校人才培养总目标及确定依据<br>（2）专业培养目标、标准及确定依据</td>
					</tr>
					<tr >
						<td>1.3教学中心地位</td>
						<td style="text-align: left;">（1）教学中心地位的政策与措施<br>（2）教学中心地位的体现与效果</td>
					</tr>
				</tbody>
			</table>
			<p style="font-size: 24px;line-height:1.5;">
				<b>1.1 办学指导思想 </b><br/>
				<span  style="font-size:14pt">学校校训:</span><span id="span1" style="font-size:14px"></span><br/>
				<span  style="font-size:14pt">定位与发展目标:</span><span id="span2" style="font-size:14px"></span>
			</p>
			<br>
			<p>※以上数据来源：表1-9办学指导思想</p>
			<p style="font-size: 24px">
				<b>1.2 校领导年龄和学位结构 </b>
			</p>
			<table id="table_1_2">
				<thead>
					<tr>
						<td colspan="10">
							<h4>定位与目标-校领导年龄和学位结构</h4></td>
					</tr>
					<tr>
						<td rowspan="2"></td>
						<td rowspan="2">总计</td>
						<td colspan="4">学位</td>
						<td colspan="4">年龄</td>
					</tr>
					<tr>
						<td>博士</td>
						<td>硕士</td>
						<td>学士</td>
						<td>无学位</td>

						<td>35岁及以下</td>
						<td>36-45岁</td>
						<td>46-55岁</td>
						<td>56岁以上</td>
					</tr>

				</thead>

				<tbody>

					<tr>
						<td>数量</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>比例(%)</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="10"><font color="black">※
								※以上数据来源：表3-1校领导基本信息，表1-6-1教职工基本信息。详细数据可参考【附表3校领导情况】。</font></td>
					</tr>
				</tfoot>
			</table>
			<div id="table_1_2_nl_div">
				<img src="" width="800" width="350"></img>
			</div>
			<div id="table_1_2_xw_div">
				<img src="" width="800" width="350"></img>
			</div>

			<!-- 1-3 -->
			<p style="font-size: 24px">
				<b>1.3 校级教学管理人员结构 </b>
			</p>
			<table id="table_1_3">
				<thead>
					<tr>
						<td colspan="15">
							<h4>定位与目标-校级教学管理人员结构</h4></td>
					</tr>
					<tr>
						<td rowspan="2"></td>
						<td rowspan="2">总计</td>
						<td colspan="5">职称</td>
						<td colspan="4">最高学位</td>
						<td colspan="4">年龄</td>
					</tr>

					<tr>
						<td>正高级</td>
						<td>副高级</td>
						<td>中级</td>
						<td>初级</td>
						<td>无职称</td>
						<td>博士</td>
						<td>硕士</td>
						<td>学士</td>
						<td>无学位</td>
						<td>35岁及以下</td>
						<td>36-45岁</td>
						<td>46-55岁</td>
						<td>56岁以上</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td>数量</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>比例(%)</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="15"><font color="black">※以上数据来源：表3-2相关管理人员基本信息，1-6-1教职工基本信息，1-3学校相关党政单位。</font></td>
					</tr>
				</tfoot>
			</table>
			<div id="table_1_3_zc_div">
				<img src="" width="800" width="350"></img>
			</div>
			<div id="table_1_3_zgxw_div">
				<img src="" width="800" width="350"></img>
			</div>
			<div id="table_1_3_age_div">
				<img src="" width="800" width="350"></img>
			</div>
			<!-- 1-4 -->
			<p style="font-size: 24px">
				<b>1.4 专业布局概览</b>
			</p>
			<table id="table_1_4">
				<thead>
					<tr>
						<td colspan="14">
							<h4>专业布局概览</h4></td>
					</tr>
					<tr>
	                        <td>学科门类</td>
							<td>哲学</td>
							<td>经济学</td>
							<td>法学</td> 
							<td>教育学</td> 
							<td>文学</td>
							<td>历史学</td> 
							<td>理学</td>
							<td>工学</td>
							<td>农学</td>
							<td>医学</td>
							<td>管理学</td>
							<td>艺术学</td>
							<td>总计</td>	

					</tr>
				</thead>

				<tbody>


				</tbody>
				<tfoot>
					<tr>
						<td colspan="14"><font color="black">※ 以上数据来源：表1-5-1专业基本情况，4-1-3博士点、硕士点，表4-1-4重点学科。<br/>
【注】：此表中本科专业数按照《普通高等学校本科专业目录（2012版）》统计，不含专业大类和校内专业方向。
</font></td>
					</tr>
				</tfoot>
			</table>
			<p style="font-size: 24px">
				<b>1.5 教学单位学科专业概览</b>
			</p>
			<table id="table_1_5">
				<thead>
					<tr>
						<td colspan="9">
							<h4>定位与目标-教学单位学科专业概览</h4></td>
					</tr>
					<tr>
						<td>序号</td>
						<td>单位</td>
						<td>本科专业数</td>
						<td>博士后流动站数</td>
						<td>博士学位授权一级学科点</td>
						<td>博士学位授权二级学科点（不含一级覆盖点）</td>
						<td>硕士学位授权一级学科点</td>
						<td>硕士学位授权二级学科点（不含一级覆盖点）</td>
						<td>重点学科数</td>
					</tr>
				</thead>

				<tbody>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="9">
							<font style="line-height:150%;color:black;">
								※此表来源：表 1-5-1 专业基本情况，表 1-4 学校教学科研单位，表 4-1-2 博士后流动站，表 4-1-3 博士点、硕士点，表 4-1-4 重点学科<br>
								【注】：此表中本科专业数按照《普通高等学校本科专业目录（2012 版）》统计，不含专业大类和校内专业方向。
							</font>
						</td>
					</tr>
				</tfoot>
			</table>

			<!-- 教师队伍 -->
			<p style="font-size: 28px">
				<b>2.教师队伍</b>
			</p>
			<table>
				<thead>
					<tr>
						<th>审核项目</th>
						<th>审核要素</th>
						<th>审核要点</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowspan="4" >2.教师队伍</td>
						<td >2.1数量与结构</td>
						<td style="text-align: left;">（1）教师队伍的数量与结构<br>（2）教师队伍建设规划及发展态势
						</td>
					</tr>
					<tr >
						<td>2.2教育教学水平</td>
						<td style="text-align: left;">（1）专任教师的专业水平与教学能力<br>（2）学校师德师风建设措施与效果</td>
					</tr>
					<tr >
						<td>2.3教师教学投入</td>
						<td style="text-align: left;">（1）教授、副教授为本科生上课情况<br>（2）教师开展教学研究、参与教学改革与建设情况</td>
					</tr>
					<tr >
						<td>2.4教师发展与服务</td>
						<td style="text-align: left;">（1）提升教师教学能力和专业水平的政策措施<br>（2）服务教师职业生涯发展的政策措施</td>
					</tr>
				</tbody>
			</table>
			<p style="font-size: 24px">
				<b>2.1 学校教师情况及生师比</b>
			</p>
			<table id="table_2_1">
				<thead>
					<tr>
						<td colspan="4">
							<div class="tb_top">
								<h4 id="filename">教师队伍-学校生师比及教师情况</h4>
							</div></td>
					</tr>
					<tr>
						<td colspan="2">项目</td>
						<td>数量</td>
						<td>百分比（%）</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td rowspan="6">专任教师数</td>
						<td>总计</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>其中：具有硕士学位</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>具有博士学位</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>双师型</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>具有工程背景</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>具有行业背景</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td rowspan="2">外聘教师</td>
						<td>总计</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td>其中：境外教师</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td colspan="2">折合在校生数</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td colspan="2">生师比</td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td colspan="2">本科课程授课校内教师数</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="4"><font color="black">
						※以上数据来源：表1-6-1 教职工基本信息，表1-6-2外聘教师基本信息，表1-6-3附属医院师资情况，表5-1-1开课情况，表6-1学生数量基本情况。<br>
						 【注】：<br>
1. 折合在校生数=普通本、专科（高职)生数+全日制硕士生数×1.5+全日制博士生数×2+
留学生数×3+预科生数+进修生数+成人脱产班学生数+夜大（业余)学生数×0.3+函授生数×
0.1（不包括自考生）。<br>
2.“专任教师”指具有教师资格、专职从事教学工作的、只属于教学单位的人员，此处统计
时不包括直属医院具有医师职称的医生。<br>
3.生师比=折合在校生数/教师总数（教师总数= 专任教师数 + 外聘教师数 ×
0.5）；此处计算生师比时，直属医院具有医师职称的医生按 15%比例计入统计。 </font></td>
					</tr>
				</tfoot>
			</table>
			<!-- 2-2 -->
			<p style="font-size: 24px">
				<b>2.2 教师队伍结构</b>
			</p>
			<table id="table_2_2">
				<thead>
					<tr>
						<td colspan="7">
							<div class="tb_top">
								<h4 id="filename">教师队伍-教师队伍结构</h4>
							</div></td>
					</tr>
					<tr>
						<td rowspan="2" colspan="3">项目</td>
						<td colspan="2">专任教师</td>
						<td colspan="2">外聘教师</td>
					</tr>
					<tr>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td colspan="3">总计</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="9">职称</td>
						<td colspan="2">教授</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">副教授</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">讲师</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">助教</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">其他正高级</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">其他副高级</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">其他中级</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">其他初级</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">未评级</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="4">最高学位</td>
						<td colspan="2">博士</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">硕士</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">学士</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">无学位</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="4">年龄</td>
						<td colspan="2">35岁及以下</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">36-45岁</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">46-55岁</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">56岁及以上</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="3">学缘</td>
						<td colspan="2">本校</td>
						<td></td>
						<td></td>
						<td >0</td>
						<td>0.00</td>
					</tr>
					<tr>
						<td rowspan="2">外校</td>
						<td>境内</td>
						<td></td>
						<td></td>
						<td>0</td>
						<td>0.00</td>
					</tr>
					<tr>
						<td>境外</td>
						<td></td>
						<td></td>
						<td>0</td>
						<td>0.00</td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="7"><font color="black">※
								以上数据来源：表1-6-1教职工基本信息，表1-6-2外聘教师基本信息。<br /> 【注】：<br />
								1.“专任教师”指具有教师资格、专职从事教学工作的、只属于教学单位的人员。此处统计时不包括直属医院具有医师职称的医生。</font></td>
					</tr>
				</tfoot>
			</table>
			<!-- <div id="table_2_2_zc_div">
				<img src=""  width="800" width="350"></img>
			</div>
			<div id="table_2_2_zgxw_div">
				<img src=""  width="800" width="350"></img>
			</div>
			<div id="table_2_2_age_div">
				<img src=""  width="800" width="350"></img>
			</div>
			<div id="table_2_2_xy_div">
				<img src=""  width="800" width="350"></img>
			</div> -->
			<!-- 2-3 -->
			<p style="font-size: 24px">
				<b>2.3 各教学单位教师与本科生情况</b>
			</p>
			<table id="table_2_3">
				<thead>
					<tr>
						<td colspan="12">
								<h4 >教师队伍-各教学单位教师与本科生情况</h4>
							</td>
					</tr>
					<tr>
						<td rowspan="3">序号</td>
						<td rowspan="3">单位</td>
						<td colspan="7">专任教师</td>
						<td rowspan="3">外聘教师数</td>
						<td rowspan="3">本科生数</td>
						<td rowspan="3">本科生与专任教师之比</td>
					</tr>
					<tr>
						<td rowspan="2">总数</td>
						<td colspan="2">具有高级职称教师</td>
						<td colspan="2">35岁以下青年教师</td>
						<td colspan="2">近五年新增教师</td>
					</tr>
					<tr>
						<td>数量</td>
						<td>比例（%）</td>
						<td>数量</td>
						<td>比例（%）</td>
						<td>数量</td>
						<td>比例（%）</td>
					</tr>
				</thead>

				<tbody>

				</tbody>

				<tfoot>
					<tr>
						<td colspan="12"><font color="black">※
								以上数据来源：表1-6-1教职工基本信息，表1-6-2外聘教师基本信息，表1-7本科生基本情况。<br /> 【注】：<br />
								1.“专任教师”指具有教师资格、专职从事教学工作的、只属于教学单位的人员，此处统计时不包括直属医院具有医师职称的医生。<br />
 </font></td>
					</tr>
				</tfoot>
			</table>
			<!-- 2-4 -->
			<p style="font-size: 24px">
				<b>2.4  各专业专任教师与本科生情况</b>
			</p>
			<table id="table_2_4">
				<thead>
					<tr>
						<td colspan="12">
								<h4 id="filename">各专业专任教师与本科生情况</h4>
							</td>
					</tr>
					<tr>
						<td rowspan="3">序号</td>
						<td rowspan="3">专业代码</td>
						<td rowspan="3">专业名称</td>
						<td colspan="7">专任教师</td>
						<td rowspan="3">本科生数</td>
						<td rowspan="3">本科生与专任教师之比</td>
					</tr>
					<tr>
						<td rowspan="2">总数</td>
						<td colspan="2">具有高级职称教师</td>
						<td colspan="2">35岁以下青年教师</td>
						<td colspan="2">近五年新增教师</td>
					</tr>
					<tr>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
					</tr>
				</thead>

				<tbody>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="12"><font color="black">※
								以上数据来源：表1-5-1专业基本情况，表1-6-1教职工基本信息，表1-7本科生基本情况。<br>
								【注】：1.学校直附属医院教职工未纳入专业专任教师统计。<br> </font></td>
					</tr>
				</tfoot>
			</table>
			<!-- 2-5 -->
			<p style="font-size: 24px">
				<b>2.5 各专业授课教师情况</b>
			</p>
			<table id="table_2_5">
				<thead>
					<tr>
						<td colspan="12">
							<div class="tb_top">
								<h4 id="filename">各专业授课教师情况</h4>
							</div></td>
					</tr>
					<tr>
						<td rowspan="2">序号</td>
						<td rowspan="2">专业名称</td>
						<td colspan="2">授课教师数</td>
						<td colspan="2">高级职称</td>
						<td colspan="2">教授</td>
						<td colspan="2">其中为低年级授课教授</td>
						<td colspan="2">具有硕士、博士学位</td>
					</tr>

					<tr>
						<td>总数</td>
						<td>承担课程门数</td>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
					</tr>
				</thead>

				<tbody>

				</tbody>

				<tfoot>
					<tr>
						<td colspan="12"><font color="black">
								※以上数据来源：表1-5-1专业基本情况，表1-5-2专业大类情况表，表1-6-1教职工基本信息，表1-6-2外聘教师基本信息，
								表1-6-3 附属医院师资情况，表5-1-1 开课情况，5-1-2 专业课教学实施情况表。<br />
								 【注】：1.本表格只统计本科专业课的授课情况，含外聘教师，含离职人员。<br />
								2.本表格选取本校本科授课主讲教师中，高级职称比例最高与最低的5个专业，详细数据可参考【附表10 各专业授课教师授课情况】。 
						</td>
					</tr>
				</tfoot>
			</table>
			<!-- 2-6 -->
			<p style="font-size: 24px">
				<b>2.6 教授、副教授及高层次人才讲授本科课程情况</b>
			</p>
			<p style="font-size: 24px">
				<b>2.6.1教授、副教授讲授本科课程情况</b>
			</p>
		<table border="1" id="table_2_6">
				<thead>
					<tr>
						<td colspan="9">
							<h4>2.6.1教授、副教授讲授本科课程比例</h4>
						</td>
					</tr> 
				</thead>
				
				<tbody>
					
						<tr>
					    <td rowspan="2">类别</td> 
					    <td rowspan="2">总人数</td> 
						<td>项目</td> 
						<td>授课人数</td> 
						<td>百分比(%)</td>
						<td>课程门次(门次)</td> 
						<td>百分比(%)</td>
						<td>课程门数(门)</td> 
						<td>百分比(%)</td>
					</tr>
					
					
					<tr>
						<td >学校</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td rowspan="4">教授</td>
						<td rowspan="4"></td> 
						<td>授课教授</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：公共必修课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>公共选修课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>专业课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="4">副教授</td> 
						<td rowspan="4"></td>
						<td>授课副教授</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：公共必修课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>公共选修课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>专业课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="9">
							<font color="black">※以上数据来源：表5-1-1开课情况,表1-6-1教职工基本信息。
					<br>
					【注】：
					   1.课程门次数是对开课号进行统计。<br>
					   2.教授、副教授的总人数不含外聘人员。<br>
					   3.授课人数百分比是与教授（副教授）总人数的比值；课程门（次）数百分比是与学校课程门（次）数的比值。<br>
						</font>
						</td>
					</tr>
				</tfoot>
			</table>
			<!-- 2-6-2 -->
						<p style="font-size: 24px">
				<b>2.6.2高层次人才讲授本科课程情况</b>
			</p>
						<table border="1" id="table_2_6_2">
				<thead>
					<tr>
						<td colspan="9">
							<h4>2.6.2高层次人才讲授本科课程情况</h4>
						</td>
					</tr> 
					<tr>
					    <td >类别</td> 
					    <td >总人数</td> 
						<td>授课人数</td> 
						<td>百分比(%)</td>
						<td>课程门次(门次)</td> 
						<td>百分比(%)</td>
						<td>课程门数(门)</td> 
						<td>百分比(%)</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td >院士</td>
						<td ></td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>国家级</td>
						<td></td> 
						<td></td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：公共必修课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="9">
							<font color="black">※以上数据来源：表5-1-1开课情况,表3-3-1 高层次人才。
						</font>
						</td>
					</tr>
				</tfoot>
			</table>
			
			
			<!-- 2-7 -->
			<p style="font-size: 24px">
				<b>2.7 教师发展与服务情况</b>
			</p>
				<!-- 2-7-1 -->
			<p style="font-size: 24px">
				<b>2.7.1教师教学发展机构培训情况</b>
			</p>
						<table id="table_2_7_1">
				<thead>
					<tr>
						<td colspan="4">
							<h4>2.7.1教师教学发展机构培训情况</h4>
						</td>
					</tr> 
					<tr>
						<td >机构名称</td> 
						<td >培训类型</td> 
						<td >培训次数</td> 
						<td >培训人次</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="4">
							<font color="black">※以上数据来源：表3-4-1 教师教学发展机构。	</font>				
						</td>
					</tr>
				</tfoot>
			</table>
			
			
			
			<!-- 2-7-2 -->
			<p style="font-size: 24px">
				<b>2.7.2教师进修、培养与交流情况</b>
			</p>
			<table id="table_2_7">
				<thead>
					<tr>
						<td colspan="8">
							<h4>教师进修培养与交流情况</h4></td>
					</tr>
					<tr>
						<td rowspan="2">项目</td>
						<td colspan="2">培训进修</td>
						<td colspan="2">攻读学位</td>
						<td colspan="2">交流</td>
						<td rowspan="2">总计</td>
					</tr>
					<tr>
						<td>境内</td>
						<td>境外</td>
						<td>攻读博士</td>
						<td>攻读硕士</td>
						<td>境内</td>
						<td>境外</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td>数量</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>比例(%)</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="8"><font color="black">※ 以上数据来源：表3-4-2
								教师培训进修、交流情况。 </font></td>
					</tr>
				</tfoot>
			</table>
			<!-- 2-8 -->
			<p style="font-size: 24px">
				<b>2.8专业带头人情况</b>
			</p>
			<table id="table_2_8">
				<thead>
					<tr>
						<td colspan="15">
							<h4>教师队伍-专业带头人情况</h4></td>
					</tr>
					<tr>
						<td rowspan="3"></td>
						<td rowspan="3">总计</td>
						<td colspan="3">职称</td>
						<td colspan="3">学位</td>
						<td colspan="4">年龄</td>
						<td colspan="3">学缘</td>
					</tr>

					<tr>

						<td rowspan="2">正高级</td>
						<td rowspan="2">副高级</td>
						<td rowspan="2">其他</td>

						<td rowspan="2">博士</td>
						<td rowspan="2">硕士</td>
						<td rowspan="2">其他</td>

						<td rowspan="2">35岁及以下</td>
						<td rowspan="2">36-45岁</td>
						<td rowspan="2">46-55岁</td>
						<td rowspan="2">56岁及以上</td>

						<td rowspan="2">本校</td>
						<td colspan="2">外校</td>
					</tr>
					<tr>
						<td>境内</td>
						<td>境外</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td>数量</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>比例 %</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="15"><font color="black">※以上数据来源：表1-6-1教职工基本信息，表4-2专业培养计划表。详细数据可参考【附表6各教学单位专业带头人情况】。
							<br>
							【注】：此表只统计1-6-1本校在编教职工。 </font></td>
					</tr>
				</tfoot>
			</table>
			<div id="table_2_8_nl_div">
				<img src="" width="800" width="350"></img>
			</div>
			<div id="table_2_8_xw_div">
				<img src="" width="800" width="350"></img>
			</div>
			<div id="table_2_8_xy_div">
				<img src="" width="800" width="350"></img>
			</div>
			<div id="table_2_8_zc_div">
				<img src="" width="800" width="350"></img>
			</div>
			
			<!-- 2-9 -->
			<p style="font-size: 24px">
				<b>2.9 学校实验系列人员结构</b>
			</p>
			<table id="table_2_9">
				<thead>
					<tr>
						<td colspan="15">
							<h4>教师队伍-学校实验系列人员结构</h4></td>
					</tr>
					<tr>
						<td rowspan="2">项目</td>
						<td rowspan="2">总计</td>
						<td colspan="5">职称</td>
						<td colspan="4">学位</td>
						<td colspan="4">年龄</td>
					</tr>

					<tr>

						<td>正高级</td>
						<td>副高级</td>
						<td>中级</td>
						<td>初级</td>
						<td>无职称</td>

						<td>博士</td>
						<td>硕士</td>
						<td>学士</td>
						<td>无学位</td>

						<td>35岁及以下</td>
						<td>36-45岁</td>
						<td>46-55岁</td>
						<td>56岁及以上</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td>数量</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>比例 %</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="15"><font color="black">※
								以上数据来源：表1-6-1教职工基本信息。详细数据可参考【附表7各教学单位实验系列职称人员结构】。 </font></td>
					</tr>
				</tfoot>
			</table>
			<div id="table_2_9_nl_div">
				<img src="" width="800" width="350"></img>
			</div>
			<div id="table_2_9_xw_div">
				<img src="" width="800" width="350"></img>
			</div>
			<div id="table_2_9_zc_div">
				<img src="" width="800" width="350"></img>
			</div>

		
			<!-- 3-1 -->
			<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman";
mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
</span>
			<p style="font-size: 28px">
				<b>3 教学资源</b>
			</p>
			<table>
				<thead>
					<tr>
						<th>审核项目</th>
						<th>审核要素</th>
						<th>审核要点</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowspan="5" >3.教学资源</td>
						<td >3.1教学经费</td>
						<td style="text-align: left;">（1）教学经费投入及保障机制<br>（2）学校教学经费年度变化情况<br>（3）教学经费分配方式、比例及使用效益
						</td>
					</tr>
					<tr >
						<td>3.2教学设施</td>
						<td style="text-align: left;">（1）教学设施满足教学需要情况<br>（2）教学、科研设施的开放程度及利用率<br>（3）教学信息化条件及资源建设</td>
					</tr>
					<tr >
						<td>3.3专业设置与培养方案</td>
						<td style="text-align: left;">（1）专业建设规划与执行<br>（2）专业设置与结构调整，优势专业与新专业建设<br>（3）培养方案的制定、执行与调整</td>
					</tr>
					<tr >
						<td>3.4课程资源</td>
						<td style="text-align: left;">（1）课程建设规划与执行<br>（2）课程的数量、结构及优质课程资源建设<br>（3）教材建设与选用</td>
					</tr>
					<tr >
						<td>3.5社会资源</td>
						<td style="text-align: left;">（1）合作办学、合作育人的措施与效果<br>（2）共建教学资源情况<br>（3）社会捐赠情况</td>
					</tr>
				</tbody>
			</table>
			<p style="font-size: 24px">
				<b>3.1 教学资源投入情况</b>
			</p>
			<table id="table_3_1">
				<thead>
					<tr>
						<td colspan="4">
							<h4>教学资源投入情况</h4></td>
					</tr>
					<tr>
						<td colspan="3">项目</td>
						<td>数量</td>
					</tr>
				</thead>

				<tbody>
                        	<tr>
						<td colspan="3">学校教育经费总额（万元）</td> 
						<td></td>
					</tr>
					
					<tr>
						<td colspan="3">教学经费总额（万元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td colspan="3">学校年度教学改革与建设专项经费（万元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td rowspan="6">教育事业收入</td>
						<td colspan="2">经常性预算内教育事业费收入（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="2">本科生生均拨款总额</td>
						<td>其中：国家（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td>地方（万元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td colspan="2">本科学费收入（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="2">教改专项拨款</td>
						<td>其中：国家（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td>地方（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="3">教学日常运行支出</td>
						<td colspan="2">总额（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">教学日常支出占经常性预算内教育事业费拨款与本专科生学费收入之和的比例(%)</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">生均教学日常运行支出（元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td colspan="3">教学改革支出（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="3">专业建设支出（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="3">实践教学支出（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="3">生均实践教学经费（元）</td>
						<td></td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="4"><font color="black">※
								※以上数据来源：表2-9-1教学经费概况，表2-9-2本科教育经费收支情况，表6-1学生数量基本情况。</font></td>
					</tr>
				</tfoot>
			</table>


			<!-- 3-2-1 -->
			<p style="font-size: 28px">
				<b>3.2 教学基本设施情况</b>
			</p>
			<p style="font-size: 24px">
				<b>3.2.1 教学行政用房情况</b>
			</p>
			<table id="table_3_2_1">
				<thead>
					<tr>
						<td colspan="5">
							<h4>教学资源-教学行政用房情况</h4></td>
					</tr>
					<tr>
						<td colspan="3">项目</td>
						<td>学校情况</td>
						<td>办学条件指标合格标准</td>
					<!-- 	<td>常模值</td> -->
					</tr>
				</thead>

				<tbody>

					<tr>
						<td rowspan="10">教学行政用房</td>
						<td colspan="2">总面积（平方米）</td>
						<td></td>
						<td>-</td>
					</tr>

					<tr>
						<td colspan="2">教学科研及辅助用房（平方米）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="6">其中</td>
						<td>教室（平方米）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>图书馆（平方米）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>实验室、实习场所（平方米）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>专用科研用房（平方米）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>体育馆（平方米）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>会堂（平方米）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">行政用房（平方米）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">生均教学行政用房面积（平方米/生）</td>
						<td></td>
						<td id="cxxx">14平方米</td>
					</tr>

					<!-- 3 -->
					<tr>
						<td rowspan="2">运动场</td>
						<td colspan="2">面积（平方米）</td>
						<td></td>
						<td>-</td>
					</tr>

					<tr>
						<td colspan="2">数量（个）</td>
						<td></td>
						<td>-</td>
					</tr>

				</tbody>

				<tfoot>
					<tr>
						<td colspan="5"><font color="black">※以上数据来源：表2-2教学行政用房面积，表2-10学生生活、运动条件。
						</font></td>
					</tr>
				</tfoot>
			</table>

			<!-- 3-2-2 -->
			<p style="font-size: 24px">
				<b>3.2.2 教学、科研仪器设备情况 </b>
			</p>
			<table id="table_3_2_2">
				<thead>
					<tr>
						<td colspan="4">
							<h4>教学资源-教学、科研仪器设备情况</h4></td>
					</tr>
					<tr>
						<td colspan="2" width="60%">项目</td>
						<td>学校情况</td>
						<td>办学条件指标合格标准</td>
					<!-- 	<td>常模值</td> -->
					</tr>
				</thead>

				<tbody>

					<tr>
						<td rowspan="4">教学、科研仪器设备</td>
						<td>资产总值（万元）</td>
						<td></td>
						<td>-</td>
					</tr>

					<tr>
						<td>生均（万元）</td>
						<td></td>
						<td id="abc">5000元</td>
					</tr>
					<tr>
						<td>当年新增（万元）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>当年新增所占比例（％）</td>
						<td></td>
						<td id="def">10%</td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="5"><font color="black">※ 以上数据来源：表 2-6 固定资产。
						</font></td>
					</tr>
				</tfoot>
			</table>
			<!--3-2-3  -->
			<p style="font-size: 24px">
				<b>3.2.3本科校内实验、实习、实训场所及设备情况 </b>
			</p>
			<table id="table_3_2_3">
				<thead>
					<tr>
						<td colspan="6">
							<h4>教学资源-本科校内实验、实习、实训场所及设备情况</h4></td>
					</tr>
					<tr>
						<td>项目</td>
						<td>数量</td>
						<td>承担实验课程门数</td>
						<td>面积(平方米)</td>
						<td>设备台套数</td>
						<td>设备值(万元)</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="6"><font color="black">※
								以上数据来源：表1-8-1本科实验场所，表2-7本科实验设备情况，表5-1-4分专业（大类）专业实验课情况。<br>
								详细数据可参考【附表13校内实验室使用情况】 。 </font></td>
					</tr>
				</tfoot>
			</table>
			<!-- 3-2-4 -->
			<p style="font-size: 24px">
				<b>3.2.4 校园网、图书情况 </b>
			</p>
			<table id="table_3_2_4">
				<thead>
					<tr>
						<td colspan="3">
							<h4>教学资源-校园网、图书情况</h4></td>
					</tr>
					<tr>
						<td>项目</td>
						<td>学校情况</td>
						<td>学校条件指标合格标准</td>
						<!-- <td>常模值</td> -->
					</tr>
				</thead>

				<tbody>

					<tr>
						<td>校园网主干带宽（Mbps）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>校园网出口带宽（Mbps）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>网络接入信息点数量（个）</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>纸质图书总量（册）</td>
						<td></td>
						<td>-</td>
					</tr>
					<tr>
						<td>生均纸质图书（册）</td>
						<td></td>
						<td id="hij">100册</td>
					</tr>
					<tr>
						<td>当年新增纸质图书（册）</td>
						<td></td>
						<td>-</td>
					</tr>
					<tr>
						<td>生均年进纸质图书（册）</td>
						<td></td>
						<td id="klm">4册</td>
					</tr>
					
					<tr>
						<td>当年新增电子图书（册）</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>当年图书流通量（本次）</td>
						<td></td>
						<td>-</td>
					</tr>
					<tr>
						<td>纸质期刊数量（份）</td>
						<td></td>
						<td>-</td>
					</tr>

					<tr>
						<td>纸质期刊种类数（种）</td>
						<td></td>
						<td>-</td>
					</tr>
					<tr>
						<td>数据库（个）</td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="4"><font color="black">※以上数据来源：表2-3-1图书馆，表2-3-2 图书当年新增情况，表2-5校园网。 </font></td>
					</tr>
				</tfoot>
			</table>


			<!-- 3-3 -->
			<p style="font-size: 24px">
				<b>3.3 专业情况概览 </b>
			</p>
			<table id="table_3_3">
				<thead>
					<tr>
						<td colspan="11">
							<h4>教学资源-专业情况概览</h4></td>
					</tr>
					<tr>
						<td rowspan="2">序号</td>
						<td rowspan="2">专业名称</td>
						<td rowspan="2">设立时间(年)</td>
						<td colspan="3">授课教师</td>
						<td rowspan="2">本科学生数</td>
						<td rowspan="2">学生与本学院授课教师之比</td>
						<td rowspan="2">学年内学生流动净值</td>
						<td rowspan="2">应届毕业生数</td>
						<td rowspan="2">当年毕业生初次就业率（%）</td>
					</tr>
					<tr>
						<td>本学院授课教师数</td>
						<td>外学院授课教师数</td>
						<td>具有高级职称的授课教师数</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td></td>
						<td>日语</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td></td>
						<td>财务管理</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="11">
													<font color="black">
							※以上数据来源：表1-5-1专业基本情况，表5-1-1开课情况，表5-1-2专业课教学实施情况表，表1-6-1教职工基本信息，表1-7本科生基本情况，表6-2-1 本科生转专业情况，表6-5-2应届本科毕业生非分专业毕业就业情况。
<br>【注】：<br>
1.本表格中授课教师只统计专业课教师,按照《普通高等学校本科专业目录（2012版）》统计。不含外聘人员，含离职人员。<br>
2.此表选择专业的原则是: 专业设置年+4小于等于当前年，只选取学生与本学院授课教师之比最大的10个专业，详细数据请看【附表12各专业教师、学生情况概览】。
	</font>
						</td>
					</tr>
				</tfoot>
			</table>
			<!-- 3-4 -->
			<p style="font-size: 24px">
				<b>3.4 优势专业概览 </b>
			</p>
			<table id="table_3_4">
				<thead>
					<tr>
						<td colspan="12">
							<h4>教学资源-优势专业概览</h4></td>
					</tr>
					<tr>
						<td rowspan="2">序号</td>
						<td rowspan="2">专业名称</td>
						<td rowspan="2">专业类型</td>
						<td rowspan="2">设立时间(年)</td>
						<td colspan="3">授课教师</td>
						<td rowspan="2">本科学生数</td>
						<td rowspan="2">学生与本学院授课教师之比</td>
						<td rowspan="2">学年内学生流动净值</td>
						<td rowspan="2">应届毕业生数</td>
						<td rowspan="2">当年毕业生初次就业率（%）</td>
					</tr>
					<tr>
						<td>本学院授课教师数</td>
						<td>外学院授课教师数</td>
						<td>具有高级职称的授课教师数</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td></td>
						<td>人文地理与城乡规划</td>
						<td>重点建设专业</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td></td>
						<td>信息与计算科学</td>
						<td>重点建设专业</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="12">
													<font color="black">※以上数据来源：表1-5-1专业基本情况，表5-1-1开课情况，表5-1-2专业课教学实施情况表，表1-6-1教职工基本信息，表1-7本科生基本情况，表6-2-1 本科生转专业情况，表6-5-2应届本科毕业生分专业毕业就业情况。<br>
【注】：1.本表格中授课教师只统计专业课教师, 不含外聘人员，含离职人员。2.本表按国标专业统计，有可能存在所含校内专业不属于优势专业范畴，故未纳入此表统计的情况。
		</font>		
						
						</td>
					</tr>
				</tfoot>
			</table>
			<!-- 3-5 -->
			<p style="font-size: 24px">
				<b>3.5 新设专业概览 </b>
			</p>
			<table id="table_3_5">
				<thead>
					<tr>
						<td colspan="11">
							<h4>教学资源-新设专业概览</h4></td>
					</tr>
					<tr>
						<td rowspan="2">序号</td>
						<td rowspan="2">专业名称</td>
						<td rowspan="2">校内专业名称</td> 
						<td rowspan="2">设立时间(年)</td>
						<td colspan="3">授课教师</td>
						<td rowspan="2">本科学生数</td>
						<td rowspan="2">学年与本学院授课教师之比</td>
						<td rowspan="2">应届毕业生数</td>
						<td rowspan="2">当年毕业生初次就业率（%）</td>
					</tr>
					<tr>
						<td>本学院授课教师数</td>
						<td>外学院授课教师数</td>
						<td>具有高级职称的授课教师数</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td></td>
						<td>审计学</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td></td>
						<td>房地产开发与管理</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="11"><font color="black">※以上数据来源：表1-5-1专业基本情况，表5-1-1开课情况，表5-1-2专业课教学实施情况表，表1-6-1教职工基本信息，表1-7本科生基本情况，表6-5-2应届本科毕业生分专业毕业就业情况<br>
【注】：此表选择专业的原则是:专业设置年+4小于等于当前年。
<br>
							</font>	</td>
					</tr>
				</tfoot>
			</table>

			<!-- 3-6 -->
			<!-- 3-7 -->
			<p style="font-size: 24px">
				<b>3.6各专业实验教学情况</b>
			</p>
			<table id="table_3_6">
				<thead>
					<tr>
						<td colspan="8">
							<h4>教学资源-各专业实验教学情况</h4></td>
					</tr>
					<tr>
						<td rowspan="2">序号</td>
						<td rowspan="2">专业名称</td>
						<td rowspan="2">校内专业名称</td>
						<td colspan="2">实践教学</td>
						<td colspan="3">其中：实验教学</td>
					</tr>
					<tr>
						<td>学分</td>
						<td>占总学分比（%）</td>
						<td>学分</td>
						<td>占总学分比（%）</td>
						<td>独立开设实验课程门数</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

				</tbody>

				<tfoot>
					<tr>
						<td colspan="8"><font color="black">※以上数据来源：表1-5-1专业基本情况，表5-1-4分专业（大类）专业实验课情况，表4-2专业培养计划表，表5-1-1开课情况。<br/>
                                                           【注】：此表只取实验教学学分占总学分比例最高的和最低的各五个专业，详细数据可参考
                                                           【附表14各专业实验教学情况】【附表15各专业教学情况一览表】（合格评估要求：人文
                                                           社科类专业实践教学占总学分（学时）不低于20%，理工农医类专业实践教学比例占总学分
                                                           （学时）比例不低于25%，师范类专业教育实习不少于12周）。
                        </font></td>
					</tr>
				</tfoot>
			</table>
			
			<p style="font-size: 24px">
				<b>3.7课程开设情况</b>
			</p>
			
			<!-- 3-8 -->
			<p style="font-size: 24px">
				<b>3.7.1全校课程开设情况</b>
			</p>
			<table id="table_3_7_1">
				<thead>
					<tr>
						<td colspan="7">
							<h4>教学资源-全校课程开设情况</h4></td>
					</tr>
					<tr>
						<td>课程类别</td>
						<td>课程门数</td>
						<td>其中：高级职称教师讲授课程门数比例</td> 
						<td>课程门次数</td>
						<td>双语课程门数</td>
						<td>平均学时数</td>
						<td>平均班规模（人）</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="7"><font color="black">※
								以上数据来源：表5-1-1开课情况。，<br /> 【注】：1.此表为全校数据统计；<br />
								2.课程门数=表5-1-1中此类课程编号数（查重）；课程门次数=表5-1-1中此类课程编号数（不查重）；平均班规模=Σ（此类课程门次内的本科学生数）/课程门次数；平均学时数=Σ（此类课程门次内的学时）/课程门次数。
						</font></td>
					</tr>
				</tfoot>
			</table>
			
			<!-- 3-7-2 -->
						<p style="font-size: 24px">
				<b>3.7.2全校课程规模情况</b>
			</p>
			<table id="table_3_7_2">
				<thead>
					<tr>
						<td colspan="6">
							<h4>3.7.2全校课程规模情况</h4>
			
						</td>
					</tr> 
					<tr>
						<td rowspan="2">课程类别</td> 
						<td rowspan="2">课程门次数</td>
						<td colspan="4">课程规模</td>
					</tr>
					<tr>
						<td>30人及以下课程门次数</td> 
						<td>31-60人课程门次数</td> 
						<td>61-90人课程门次数</td>
						<td>90人以上课程门次数</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td></td> 
						<td></td>
						<td></td>
						<td></td> 
						<td></td>
						<td></td>
					</tr>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="6">
							<font color="black">※以上数据来源：表5-1-1开课情况。<br>
							</font>						
						</td>
					</tr>
				</tfoot>
			</table>
			
									<p style="font-size: 24px">
				<b>3.8 在线开放课程情况</b>
			</p>
		<table id="table_3_8">
				<thead>
					<tr>
						<td colspan="4">
							<h4>3.8 在线开放课程情况</h4>

						</td>
					</tr> 
					<tr>
						<td>级别</td> 
						<td>精品视频公开课</td>
						<td>精品资源共享课</td> 
						<td>MOOC</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td></td> 
						<td></td> 
						<td></td>
						<td rowspan="2"></td>
					</tr>
					
					<tr>
						<td></td> 
						<td></td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="4">
							<font color="black">※ 以上数据来源：表5-3-2本科教学信息化。<br/>
【注】：<br/>
MOOC无国家级与省级之分
		</font>						
						</td>
					</tr>
				</tfoot>
			</table>
	
			<!-- 3-10 -->
			<p style="font-size: 24px">
				<b>3.9合作办学情况</b>
			</p>
			<table id="table_3_9">
				<thead>
					<tr>
						<td colspan="2">
							<h4>教学资源-合作办学情况</h4></td>
					</tr>
					<tr>
						<td>项目</td>
						<td>数量</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="2"><font color="black">※以上数据来源：表 1-10
								校友会与社会合作。 </font></td>
					</tr>
				</tfoot>
			</table>
			<!-- 4-1 -->
			
			<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman";
mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
</span>
			
			<p style="font-size: 28px">
				<b>4、培养过程</b>
			</p>
			
			<table>
				<thead>
					<tr>
						<th>审核项目</th>
						<th>审核要素</th>
						<th>审核要点</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowspan="4" >4.培养过程</td>
						<td >4.1课堂教学</td>
						<td style="text-align: left;">（1）课程教学大纲的制订与执行情况<br>（2）教学内容对人才培养目标的体现，科研促进教学的情况<br>（3）教学方法多样化，教学手段信息化的程度<br/>（4）考试（考核）的管理与考试方法的改革
						</td>
					</tr>
					<tr >
						<td>4.2实践教学</td>
						<td style="text-align: left;">（1）实践教学体系建设与实践教学改革<br>（2）实验教学与实验室开放情况<br>（3）实习实训、社会实践、毕业设计（论文）的落实及效果</td>
					</tr>
					<tr >
						<td>4.3第二课堂</td>
						<td style="text-align: left;">（1）第二课堂育人体系建设与保障措施<br>（2）社团建设与校园文化、科技活动及育人效果<br>（3）学生国内外访学情况</td>
					</tr>
					<tr >
						<td>4.4教学改革</td>
						<td style="text-align: left;">（1）教学改革的总体思路及保障措施<br>（2）教学改革的示范性与应用性</td>
					</tr>
				</tbody>
			</table>
			<p style="font-size: 24px">
				<b>4.1 专业培养方案学分结构</b>
			</p>
			<table id="table_4_1">
				<thead>
					<tr>
						<td colspan="4"  id="1colspan">
							<h4>培养过程-专业培养方案学分结构</h4></td>
					</tr>
					<tr id="4-1tr">
						<td>学科门类</td>
						<td>所含专业数</td>
						<td>专业平均总学分</td>
						<td>专业平均实践教学环节学分比例（%）</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="4"  id="2colspan"><font color="black">※以上数据来源：表 1-5-1
								专业基本情况。表4-2专业培养计划<br /> 【注】：<br />
								1.每个专业实践教学环节学分所占比例=（集中实践教学环节学分+实验教学学分）/总学分，先计算每个专业的比例，然后再按学科门类平均。<br />
								2.此表中本科专业数按照《普通高等学校本科专业目录》统计，不含专业大类和校内专业方向。 </font></td>
					</tr>
				</tfoot>
			</table>
			<!-- 4-2 -->
			<p style="font-size: 24px">
				<b>4.2 人才培养模式创新实验项目情况</b>
			</p>
			<table id="table_4_2">
				<thead>
					<tr>
						<td colspan="5">
							<h4>培养过程-人才培养模式创新实验项目情况</h4></td>
					</tr>
					<tr>
						<td>序号</td>
						<td>名称</td>
						<td>类型</td>
						<td>设立时间</td>
						<td>参与学生数(人)</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="7"><font color="black">※以上数据来源：表 5-3-1
								人才培养模式创新实验项目。 </font></td>
					</tr>
				</tfoot>
			</table>
			<!-- 4-3 -->
			<p style="font-size: 24px">
				<b>4.3创新创业教育</b>
			</p>
			<p style="font-size: 24px">
				<b>4.3.1学校创新创业教育情况</b>
			</p>
			<table id="table_4_3">
				<thead>
					<tr>
						<td colspan="2">
							<h4>培养过程-学校创新创业教育情况</h4></td>
					</tr>
					<tr>
						<td>项目</td>
						<td>数量</td>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>1.创新创业教育机构</td>
						<td></td>
					</tr>

					<tr>
						<td>2.创新创业教育专职教师（人）</td>
						<td></td>
					</tr>
					<tr>
						<td>3.创新创业教育导师（人）</td>
						<td></td>
					</tr>
					<tr>
						<td>4. 创新创业教育机构培训人次数</td>
						<td></td>
					</tr>
					<tr>
						<td>5. 创业实习基地数</td>
						<td></td>
					</tr>
					<tr>
						<td>6. 创新创业教育实践平台数</td>
						<td></td>
					</tr>
					<tr>
						<td>7.创业示范基地数</td>
						<td></td>
					</tr>
					<tr>
						<td>8.创业培训项目数</td>
						<td></td>
					</tr>
					<tr>
						<td>9.创新创业教育课程(门)</td>
						<td></td>
					</tr>
					<tr>
						<td>其中：创新创业优质课（门）</td>
						<td></td>
					</tr>
					<tr>
						<td>10. 开设的职业生涯规划及创业指导课程数（门)</td>
						<td></td>
					</tr>
					<tr>
						<td>11. 创新创业讲座(次）</td>
						<td></td>
					</tr>
					<tr>
						<td>12.创新创业奖学金（万元）</td>
						<td></td>
					</tr>
										<tr>
						<td>13.创新创业专项资金投入（万元）</td> 
						<td></td>
					</tr>
					<tr>
						<td>14.创新创业教育教材数（门）</td> 
						<td></td>
					</tr>
					<tr>
						<td>15.参与创新创业训练项目全日制本科在校学生数（人）</td> 
						<td></td>
					</tr>
					<tr>
						<td>16.参与创新创业竞赛全日制本科在校学生数（人）</td> 
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="2"><font color="black">※ 数据来源：表5-4-1创新创业教育情况。
						</font></td>
					</tr>
				</tfoot>
			</table>
			
			<!-- 4-3-2 -->
						<p style="font-size: 24px">
				<b>4.3.2高校实践育人创新创业基地</b>
			</p>
						<table id="table_4_3_2">
				<thead>
					<tr>
						<td colspan="5">
							<h4>4.3.2高校实践育人创新创业基地</h4>
					
						</td>
					</tr> 
					<tr>
						<td>基地名称</td> 
						<td>基地级别</td>
						<td>基地类型</td> 
						<td>参与角色</td> 
						<td>批准年份</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td></td> 
						<td></td> 
						<td></td>
						<td></td>
						<td></td>
					</tr>
					

				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="5">
							<font color="black">※以上数据来源：表5-4-2高校实践育人创新创业基地。<br/>
		</font>						
						</td>
					</tr>
				</tfoot>
			</table>
			
			<!-- 4-4 -->
			<p style="font-size: 24px">
				<b>4.4 实验教学示范中心</b>
			</p>
			<table id="table_4_4">
				<thead>
					<tr>
						<td colspan="5">
							<h4>培养过程-实验教学示范中心</h4></td>
					</tr>
					<tr>
						<td>序号</td>
						<td>学科名称</td>
						<td>名称</td>
						<td>级别</td>
						<td>设立时间</td>
					</tr>
				</thead>

				<tbody>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>

				<tfoot>
					<tr>
						<td colspan="5"><font color="black">※数据来源：表2-8实验教学示范中心。
						</font></td>
					</tr>
				</tfoot>
			</table>
			<jsp:include page="foot.jsp"></jsp:include>
		</div>
	</div>
	<div id="table_1_2_bt_nl"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_1_2_bt_xw"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	
	<div id="table_1_3_bt_zc"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_1_3_bt_zgxw"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_1_3_bt_age"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>

	<!-- <div id="table_2_2_bt_zc"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_2_2_bt_zgxw"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_2_2_bt_age"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_2_2_bt_xy"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div> -->
		
	<div id="table_2_8_bt_nl"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_2_8_bt_xw"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_2_8_bt_xy"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_2_8_bt_zc"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
		
	<div id="table_2_9_bt_nl"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_2_9_bt_xw"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
	<div id="table_2_9_bt_zc"
		style=" border:1px solid #ccc;float: left;width:99%;height:540px;margin: 5px;"></div>
</body>
</html>
