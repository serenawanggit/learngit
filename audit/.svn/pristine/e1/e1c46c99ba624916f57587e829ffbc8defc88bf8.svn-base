<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

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
	<script type="text/javascript" src="js/ZYReportFormat2.js"></script>

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
					type : "POST",
					data : {
						"bodyData" : html2,
						"versionsID":2,
						"wordName":"专业分析报告"
					},
					async : false,
					success : function(dateString) {
						if (dateString != "error") {
							var html = "";
							html = "<form id=\"formid\" action=\""
									+ getRootPath()
									+ "/CHART/poiWordUpload\" method=\"post\"><input type=\"hidden\" id=\"filename\" name=\"filename\" value='专业分析报告'></input><input type=\"hidden\" id=\"dateString\" name=\"dateString\" value='"+dateString+"'></input></form>";
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
		$("#searchPDF").text("正在加载数据...G-0");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_tableG",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$("#table_0_0 tbody tr:eq(0) td:eq(1)").html(result[0][0]==""?"/":result[0][0]);
							$("#table_0_0 tbody tr:eq(1) td:eq(1)").html(result[0][1]==""?"/":result[0][1]);
							$("#table_0_0 tbody tr:eq(2) td:eq(1)").html(result[0][2]==""?"/":result[0][2]);
							$("#table_0_0 tbody tr:eq(3) td:eq(1)").html(result[0][3]==""?"/":result[0][3]);
							$("#table_0_0 tbody tr:eq(4) td:eq(1)").html(result[0][4]==""?"/":result[0][4]);
							$("#table_0_0 tbody tr:eq(5) td:eq(1)").html(result[0][5]==""?"/":result[0][5]);
							$("#table_0_0 tbody tr:eq(6) td:eq(1)").html(result[0][6]==""?"/":result[0][6]);
							$("#table_0_0 tbody tr:eq(7) td:eq(1)").html(result[0][7]==""?"/":result[0][7]);
						}
					},error:function(){
						alert("加载失败");
					}
			});
		
		
		

		$("#searchPDF").text("正在加载数据...1-1");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1-1",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							var html="";
							$.each(result,function(i,obj){
								html=html+"<tr><td>"+(obj[0]==''?'/':obj[0])+"</td><td>"+(obj[1]==''?'/':obj[1])+"</td></tr>";
							});
							$("#table_1_1 tbody").html(html);
						}
					},error:function(){
						alert("加载失败");
					}
			});

		$("#searchPDF").text("正在加载数据...1-2");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1-2",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						var html="";
							$.each(result,function(i,obj){
								html=html+"<tr><td>"+(obj[0]==''?'/':obj[0])+"</td><td>"+(obj[1]==''?'/':obj[1])+"</td><td>"+(obj[2]==''?'/':obj[2])+"</td></tr>";
							});
							$("#table_1_2 tbody").html(html);
						}
					},error:function(){
						alert("加载失败");
					}
			});
			
		$("#searchPDF").text("正在加载数据...1-3");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_tableG",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						/* var html="";
							$.each(result,function(i,obj){
								html+="<tr><td>"+(obj[0]==''?'/':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'/':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'/':obj[2])+"</td>"+
								"<td>"+(obj[3]==''?'/':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'/':obj[4])+"</td>"+
								"<td>"+(obj[5]==''?'/':obj[5])+"</td>"+
								"<td>"+(obj[6]==''?'/':obj[6])+"</td>"+
								"<td>"+(obj[7]==''?'/':obj[7])+"</td>"+
								"<td>"+(obj[8]==''?'/':obj[8])+"</td>"+
								"<td>"+(obj[9]==''?'/':obj[9])+"</td>"+
								"<td>"+(obj[10]==''?'/':obj[10])+"</td>"+
								"</tr>";
							});
							$("#table_1_3 tbody").html(html); */
						}
					},error:function(){
						alert("加载失败");
					}
			});
			
		$("#searchPDF").text("正在加载数据...1-4");
		//var counts;
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1-4",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$.each(result,function(i,obj){
								$("#table_1_4 tbody tr:eq(0) td:eq("+(i+1)+")").html(obj[1]);
								$("#table_1_4 tbody tr:eq(1) td:eq("+(i+1)+")").html(obj[2]);
							});
						}
					},error:function(){
						alert("加载失败");
					}
			});

		

		$("#searchPDF").text("正在加载数据...2-1");
		//2-1
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2-1",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						var html="";
							$.each(result,function(i,obj){
								html+="<tr><td>"+(obj[0]==''?'0':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'0':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'0':valueFormat(obj[2],1))+"</td>"+
								"<td>"+(obj[3]==''?'0':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'0':valueFormat(obj[4],1))+"</td>"+
								"</tr>";
							});
							$("#table_2_1 tbody").html(html);
						}
					},error:function(){
						alert("加载失败");
					}
			});
		$("#searchPDF").text("正在加载数据...2-2");
		/* 2-2 */
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2-2",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							//总体情况
							$("#table_2_2 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
							$("#table_2_2 tbody tr:eq(0) td:eq(2)").html(valueFormat(result[0][1],1));
							
							//职称
							$("#table_2_2 tbody tr:eq(1) td:eq(2)").html(result[0][2]);
							$("#table_2_2 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][3],1));
							$("#table_2_2 tbody tr:eq(2) td:eq(1)").html(result[0][4]);
							$("#table_2_2 tbody tr:eq(2) td:eq(2)").html(valueFormat(result[0][5],1));
							$("#table_2_2 tbody tr:eq(3) td:eq(1)").html(result[0][6]);
							$("#table_2_2 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][7],1));
							$("#table_2_2 tbody tr:eq(4) td:eq(1)").html(result[0][8]);
							$("#table_2_2 tbody tr:eq(4) td:eq(2)").html(valueFormat(result[0][9],1));
							
							//学位
							$("#table_2_2 tbody tr:eq(5) td:eq(2)").html(result[0][10]);
							$("#table_2_2 tbody tr:eq(5) td:eq(3)").html(valueFormat(result[0][11],1));
							$("#table_2_2 tbody tr:eq(6) td:eq(1)").html(result[0][12]);
							$("#table_2_2 tbody tr:eq(6) td:eq(2)").html(valueFormat(result[0][13],1));
							$("#table_2_2 tbody tr:eq(7) td:eq(1)").html(result[0][14]);
							$("#table_2_2 tbody tr:eq(7) td:eq(2)").html(valueFormat(result[0][15],1));
							
							//年龄
							$("#table_2_2 tbody tr:eq(8) td:eq(2)").html(result[0][16]);
							$("#table_2_2 tbody tr:eq(8) td:eq(3)").html(valueFormat(result[0][17],1));
							$("#table_2_2 tbody tr:eq(9) td:eq(1)").html(result[0][18]);
							$("#table_2_2 tbody tr:eq(9) td:eq(2)").html(valueFormat(result[0][19],1));
							$("#table_2_2 tbody tr:eq(10) td:eq(1)").html(result[0][20]);
							$("#table_2_2 tbody tr:eq(10) td:eq(2)").html(valueFormat(result[0][21],1));
							$("#table_2_2 tbody tr:eq(11) td:eq(1)").html(result[0][22]);
							$("#table_2_2 tbody tr:eq(11) td:eq(2)").html(valueFormat(result[0][23],1));
						

							//学缘
							$("#table_2_2 tbody tr:eq(12) td:eq(2)").html(result[0][24]);
							$("#table_2_2 tbody tr:eq(12) td:eq(3)").html(valueFormat(result[0][25],1));
							$("#table_2_2 tbody tr:eq(13) td:eq(1)").html(result[0][26]);
							$("#table_2_2 tbody tr:eq(13) td:eq(2)").html(valueFormat(result[0][27],1));
							$("#table_2_2 tbody tr:eq(14) td:eq(1)").html(result[0][28]);
							$("#table_2_2 tbody tr:eq(14) td:eq(2)").html(valueFormat(result[0][29],1));
							
						}
					},error:function(){
						alert("加载失败");
					}
			});
		$("#searchPDF").text("正在加载数据...2-3-1");
		/* 2-3 */
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2-3",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$("#table_2_3_1 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
							$("#table_2_3_1 tbody tr:eq(0) td:eq(2)").html(valueFormat(result[0][1],1));
							
							
							$("#table_2_3_1 tbody tr:eq(1) td:eq(1)").html(result[0][2]);
							$("#table_2_3_1 tbody tr:eq(1) td:eq(2)").html(valueFormat(result[0][3],1));
							
							
							$("#table_2_3_1 tbody tr:eq(2) td:eq(1)").html(result[0][4]);
							$("#table_2_3_1 tbody tr:eq(2) td:eq(2)").html(valueFormat(result[0][5],1));
						}
					},error:function(){
						alert("加载失败");
					}
			});
			$("#searchPDF").text("正在加载数据...2-3-2");
			/* $.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_tableG",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						
						}
					},error:function(){
						alert("加载失败");
					}
			}); */
		$("#searchPDF").text("正在加载数据...2-4");
		/* 2-4 */
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2-4",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$("#table_2_4 tbody tr:eq(0) td:eq(1)").html(result[0][0]==""?0:result[0][0]);
							$("#table_2_4 tbody tr:eq(1) td:eq(1)").html(result[0][1]==""?0:result[0][1]);
							$("#table_2_4 tbody tr:eq(2) td:eq(1)").html(result[0][2]==""?0:result[0][2]);
							$("#table_2_4 tbody tr:eq(3) td:eq(1)").html(result[0][3]==""?0:result[0][3]);
							$("#table_2_4 tbody tr:eq(4) td:eq(1)").html(result[0][4]==""?0:result[0][4]);
							$("#table_2_4 tbody tr:eq(5) td:eq(1)").html(result[0][5]==""?0:result[0][5]);
						}
					},error:function(){
						alert("加载失败");
					}
			});
		$("#searchPDF").text("正在加载数据...2-5");
		/* 2-5 */
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_tableG",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						/* //总体情况
							$("#table_2_5 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
							$("#table_2_5 tbody tr:eq(0) td:eq(2)").html(valueFormat(result[0][1]));
							
							//职称
							$("#table_2_5 tbody tr:eq(1) td:eq(2)").html(result[0][2]);
							$("#table_2_5 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][3],1));
							$("#table_2_5 tbody tr:eq(2) td:eq(1)").html(result[0][4]);
							$("#table_2_5 tbody tr:eq(2) td:eq(2)").html(valueFormat(result[0][5],1));
							$("#table_2_5 tbody tr:eq(3) td:eq(1)").html(result[0][6]);
							$("#table_2_5 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][7],1));
							$("#table_2_5 tbody tr:eq(4) td:eq(1)").html(result[0][8]);
							$("#table_2_5 tbody tr:eq(4) td:eq(2)").html(valueFormat(result[0][9],1));
							
							//学位
							$("#table_2_5 tbody tr:eq(5) td:eq(2)").html(result[0][10]);
							$("#table_2_5 tbody tr:eq(5) td:eq(3)").html(valueFormat(result[0][11],1));
							$("#table_2_5 tbody tr:eq(6) td:eq(1)").html(result[0][12]);
							$("#table_2_5 tbody tr:eq(6) td:eq(2)").html(valueFormat(result[0][13],1));
							$("#table_2_5 tbody tr:eq(7) td:eq(1)").html(result[0][14]);
							$("#table_2_5 tbody tr:eq(7) td:eq(2)").html(valueFormat(result[0][15],1));
							
							//年龄
							$("#table_2_5 tbody tr:eq(8) td:eq(2)").html(result[0][16]);
							$("#table_2_5 tbody tr:eq(8) td:eq(3)").html(valueFormat(result[0][17],1));
							$("#table_2_5 tbody tr:eq(9) td:eq(1)").html(result[0][18]);
							$("#table_2_5 tbody tr:eq(9) td:eq(2)").html(valueFormat(result[0][19],1));
							$("#table_2_5 tbody tr:eq(10) td:eq(1)").html(result[0][20]);
							$("#table_2_5 tbody tr:eq(10) td:eq(2)").html(valueFormat(result[0][21],1));
							$("#table_2_5 tbody tr:eq(11) td:eq(1)").html(result[0][22]);
							$("#table_2_5 tbody tr:eq(11) td:eq(2)").html(valueFormat(result[0][23],1));
						

							//学缘
							$("#table_2_5 tbody tr:eq(12) td:eq(2)").html(result[0][24]);
							$("#table_2_5 tbody tr:eq(12) td:eq(3)").html(valueFormat(result[0][25],1));
							$("#table_2_5 tbody tr:eq(13) td:eq(1)").html(result[0][26]);
							$("#table_2_5 tbody tr:eq(13) td:eq(2)").html(valueFormat(result[0][27],1));
							$("#table_2_5 tbody tr:eq(14) td:eq(1)").html(result[0][28]);
							$("#table_2_5 tbody tr:eq(14) td:eq(2)").html(valueFormat(result[0][29],1));
						 */	
						}
					},error:function(){
						alert("加载失败");
					}
			});
		
		/* 3-1  */
		$("#searchPDF").text("正在加载数据...3-1");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_tableG",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						
						}
					},error:function(){
						alert("加载失败");
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
					$("#table_3_1 tbody tr:eq(3) td:eq(2)").html(
							valueFormat(result[0][0], 2));
					$("#table_3_1 tbody tr:eq(4) td:eq(2)").html(
							valueFormat(result[0][1], 2));
					$("#table_3_1 tbody tr:eq(5) td:eq(1)").html(
							valueFormat(result[0][2], 2));
					$("#table_3_1 tbody tr:eq(6) td:eq(1)").html(
							valueFormat(result[0][3], 2));
					$("#table_3_1 tbody tr:eq(7) td:eq(1)").html(
							valueFormat(result[0][4], 2));
					$("#table_3_1 tbody tr:eq(8) td:eq(2)").html(
							valueFormat(result[0][5], 2));
					$("#table_3_1 tbody tr:eq(9) td:eq(1)").html(
							valueFormat(result[0][6] * 100, 2));
					$("#table_3_1 tbody tr:eq(10) td:eq(1)").html(
							valueFormat(result[0][7], 2));
					$("#table_3_1 tbody tr:eq(11) td:eq(1)").html(
							valueFormat(result[0][8], 2));
					$("#table_3_1 tbody tr:eq(12) td:eq(1)").html(
							valueFormat(result[0][9], 2));
					$("#table_3_1 tbody tr:eq(13) td:eq(1)").html(
							valueFormat(result[0][10], 2));
					$("#table_3_1 tbody tr:eq(14) td:eq(1)").html(
							valueFormat(result[0][11], 2));
				} else {
					return;
				}
			},
			error : function() {
				hideLodding();
				alert("系统忙，请稍后重试！！！");
			}
		});
		/* 3-2  */
		/* $("#searchPDF").text("正在加载数据...3-2");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table3-2-zj",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$("#test1").text(result[0][0]);
							$("#test2").text(result[0][1]);
						}
					},error:function(){
						alert("加载失败");
					}
			}); */
			/* $.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table3-2",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							var html="";
							$.each(result,function(i,obj){
								html+="<tr><td>"+(i+1)+"</td>"+
								"<td>"+(obj[0]==''?0:obj[0])+"</td>"+
								"<td>"+(obj[1]==''?0:obj[1])+"</td>"+
								"<td>"+(obj[2]==''?0:obj[2])+"</td>"+
								"<td>"+(obj[3]==''?0:obj[3])+"</td>"+
								"</tr>";
							});
							$("#table_3_2 tbody").html(html);
						}
					},error:function(){
						alert("加载失败");
					}
			}); */

		
						
		/*3-3  */
		$("#searchPDF").text("正在加载数据...3-3");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table3-3",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						/* alert(data); */
						var html="";
							$.each(result,function(i,obj){
								html+="<tr><td>"+(i+1)+"</td>"+
								"<td>"+(obj[0]==''?'/':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'/':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'/':obj[2])+"</td>"+
								"<td>"+(obj[3]==''?'/':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?0:obj[4])+"</td>"+
								"<td>"+(obj[5]==''?0:obj[5])+"</td>"+
								"</tr>";
							});
							$("#table_3_3 tbody").html(html);
						}
					},error:function(){
						alert("加载失败");
					}
			});
		
		$("#searchPDF").text("正在加载数据...4-1");
		/* $.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_tableG",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						
						}
					},error:function(){
						alert("加载失败");
					}
			}); */
		
		$("#searchPDF").text("正在加载数据...5-1");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table5-1",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$("#test1").text(result[0][0]==""?0:result[0][0]);
							$("#test2").text(result[0][1]==""?0:result[0][1]);
							$("#test3").text(result[0][2]==""?0:result[0][2]);
							$("#test4").text(result[0][3]==""?0:result[0][3]);
							$("#test5").text(result[0][4]==""?0:result[0][4]);
						}
					},error:function(){
						alert("加载失败");
					}
			});
		$("#searchPDF").text("正在加载数据...5-2");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table5-2-zj",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$("#test5_1").text(result[0][0]==""?0:result[0][0]);
							$("#test5_2").text(result[0][1]==""?0:result[0][1]);
							$("#test5_3").text(result[0][2]==""?0:result[0][2]);
							$("#test5_4").text(result[0][3]==""?0:result[0][3]);
						}
					},error:function(){
						alert("加载失败");
					}
			});
			
			$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table5-2",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var html="";
						if(data.length>2){
						$.each(result,function(i,obj){
								html+="<tr><td>"+(i+1)+"</td>"+
								"<td>"+(obj[0]==''?'0':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'/':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'0':obj[2])+"</td>"+
								"<td>"+(obj[3]==''?'0':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'0':obj[4])+"</td>"+
								"<td>"+(obj[5]==''?'/':obj[5])+"</td>"+
								"</tr>";
							});
							
						}
						$("#table_5_2 tbody").html(html);
					},error:function(){
						alert("加载失败");
					}
			});
		

		/* $("#searchPDF").text("正在加载数据...5-3");
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
		}); */
		$("#searchPDF").text("正在加载数据...5-4");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_tableG",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						
						}
					},error:function(){
						alert("加载失败");
					}
			});
		$("#searchPDF").text("正在加载数据...5-5");
		$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table5-5",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
								var html="";
							$.each(result,function(i,obj){
								html+="<tr><td>"+(i+1)+"</td>"+
								"<td>"+(obj[0]==''?'0':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'/':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'0':obj[2])+"</td>"+
								"<td>"+(obj[3]==''?'0':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'0':obj[4])+"</td>"+
								"<td>"+(obj[5]==''?'/':obj[5])+"</td>"+
								"</tr>";
							});
						}
						$("#table_5_5 tbody").html(html);
					},error:function(){
						alert("加载失败");
					}
			});
		

		//echarts

		init();// echarts控件初始化后初始化页面数据
		//1-3
		/* getImg(table_1_3_bt_zc.getDataURL("png"), "table_1_3_zc_img.png");//获取图片
		getImg(table_1_3_bt_zgxw.getDataURL("png"), "table_1_3_zgxw_img.png");//获取图片
		getImg(table_1_3_bt_age.getDataURL("png"), "table_1_3_age_img.png");//获取图片 */
		//2-2
		getImg(table_2_2_bt_zc.getDataURL("png"), "table_2_2_zc_img.png");//获取图片
		getImg(table_2_2_bt_zgxw.getDataURL("png"), "table_2_2_zgxw_img.png");//获取图片
		getImg(table_2_2_bt_age.getDataURL("png"), "table_2_2_age_img.png");//获取图片
		getImg(table_2_2_bt_xy.getDataURL("png"), "table_2_2_xy_img.png");//获取图片
		//添加图片到html
	/* 	$("#table_1_3_zc_div img").attr("src",getRootPath()+ "/CHART/images/ASDS_img_glv/table_1_3_zc_img.png");
		$("#table_1_3_zgxw_div img").attr(
				"src",
				getRootPath()
						+ "/CHART/images/ASDS_img_glv/table_1_3_zgxw_img.png");
		$("#table_1_3_age_div img").attr(
				"src",
				getRootPath()
						+ "/CHART/images/ASDS_img_glv/table_1_3_age_img.png");
 */
		$("#table_2_2_zc_div img").attr(
				"src",
				getRootPath()
						+ "/CHART/images/ASDS_img_glv/table_2_2_zc_img.png");
		$("#table_2_2_zgxw_div img").attr(
				"src",
				getRootPath()
						+ "/CHART/images/ASDS_img_glv/table_2_2_zgxw_img.png");
		$("#table_2_2_age_div img").attr(
				"src",
				getRootPath()
						+ "/CHART/images/ASDS_img_glv/table_2_2_age_img.png");
		$("#table_2_2_xy_div img").attr(
				"src",
				getRootPath()
						+ "/CHART/images/ASDS_img_glv/table_2_2_xy_img.png");

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
<!-- <script type="text/javascript"
	src="/CHART/js/ASDSReport/ASDS_save_echarts.js"></script> -->
	<script type="text/javascript"
	src="/CHART/js/ASDSReport/ZY_save_echarts.js"></script>
</head>

<body>

	<div class="tb_main">
		<span id="searchPDF"
			style=" margin: 5px;float: left;color: red;font-size: 24"></span>
		<div class="chocieYear">
			<ul>
				<li><!-- <input onclick="butt();" style="position: relative;"
					type="button" value="PDF下载状态数据分析报告"></input><span id="searchztfxbg"> -->
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
	
	<div id="bodyDiv1" style="display: none;">
		<table>
			<tr>
				<td style="border: 0px;text-align: center;font-size: 33px;"><h1>普通高等学校本科教学</h1>
				</td>
			</tr>
			<tr>
				<td style="border: 0px;text-align: center;"></td>
			</tr>
			<tr>
				<td style="border: 0px;text-align: center;font-size: 33px;"><h1>审核评估教学状态数据分析报告</h1>
				</td>
			</tr>
			<tr>
				<td style="border: 0px;text-align: center;"></td>
			</tr>
			<tr><td>我就是学校的名字</td></tr>
			<tr>
				<td style="border: 0px;text-align: center; font-size: 16px" ><h3>上海喆思电子技术有限公司</h3>
				</td>
			</tr>
			<tr>
				<td style="border: 0px;text-align: center;"><h3 id="h3Date"></h3>
				</td>
			</tr>
		</table>
		<!-- 目 录 1 -->
		<table style="border-collapse:collapse;padding: 0px;margin: 0px">
			<thead>
				<tr>
					<td colspan="4">目 录</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style="border: 0px;border: 0px;text-align: left;">说明</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: center;"></td>
					<td style="border: 0px;text-align: center;"></td>
				</tr>
				<!-- <tr>
					<td style="border: 0px;border: 0px;text-align: left;">专业基本信息</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: center;"></td>
					<td style="border: 0px;text-align: center;"></td>
				</tr> -->
				<tr>
					<td style="border: 0px;text-align: left;width:40px;">一</td>
					<td style="border: 0px;text-align: left;">学生</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">1.1本专业在校生数（数据源：表1.1）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">1.2近三年本专业招生情况（数据源：表1.2）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">1.3近三年毕业生去向分布情况（数据源：表1.3、表1.4）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">1.4近三年本专业学生转入转出情况（数据源：表1.5、表1.6）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;width:40px;">二</td>
					<td style="border: 0px;text-align: left;">师资队伍</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">2.1专业教师分类人数构成比例（数据源：表4.1、表4.4）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">2.2专业教师队伍结构（数据源：表4.1）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">2.3专任教师企业经历背景情况（数据源：表4.2）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">2.4近三年专任教师接受培训进修情况（数据源：表4.3）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">2.5近三年专任教师的教学科学研究项目、获奖和成果情况汇总(数据源：表4.5、4.8、4.10、4.13)</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;width:40px;">三</td>
					<td style="border: 0px;text-align: left;">支撑条件</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">3.1与企业合作建立实践基地（数据源：表5.1）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">3.2校内实践教学场所使用状况（数据源：表5.2）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">3.3校外实习实训基地使用状况（数据源：表5.4）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>

<tr>
					<td style="border: 0px;text-align: left;width:40px;">四</td>
					<td style="border: 0px;text-align: left;">培养目标和毕业要求</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">4.1近期专业培养目标修订时企业行业参与情况（数据源：表2.1）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">4.2培养目标（数据源：表2.2）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">4.3毕业要求及指标项分解（数据源：表2.3</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">4.4毕业要求与培养目标的支撑关系（数据源：表2.4）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">4.5毕业要求与通用标准的对应关系（数据源：表2.5）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
					<tr>
					<td style="border: 0px;text-align: left;width:40px;">五</td>
					<td style="border: 0px;text-align: left;">课程体系</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">5学生发展</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">5.1课程情况</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>

<!-- 				<tr>
					<td style="border: 0px;text-align: left;">5.2</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
 -->				 <tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">5.3专业主干课程对毕业要求支撑矩阵图（数据源：表3.3）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr> 
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">5.4近三年毕业设计（论文）情况（数据源：表3.2）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
				<tr>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;">5.5近三年专任教师代表性教学研究、科学研究项目（数据源：表4.6、表4.11）</td>
					<td style="border: 0px;text-align: left;"></td>
					<td style="border: 0px;text-align: left;"></td>
				</tr>
	</tbody>
	</table>
		<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		<br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br><br/><br/><br><br/><br/><br/><br/>
		<div style="text-align: center;"><p style="font-size: 36px;font-family: '仿宋'">说 明</p></div>
		<p style="font-size: 18px;text-align: left;">本报告所有数据资料均来自于各认证专业填报的基本状态数据采集表，各小节数据源表格编号即为专业基本状态数据采集表编号。报告围绕中国工程教育专业认证标准，通过数据提取与分析，量化反映认证专业基本状态。</p>
		<p style="font-size: 18px;text-align: left;">本报告是认证专家进校现场考查前评估认证专业基本情况的基础，同时也是否受理次年专业认证申请的重要判据。</p>
		<p style="font-size: 18px;text-align: left;">本报告分为两部分：</p>
		<p style="font-size: 18px;text-align: left;">第一部分为专业基本信息；</p>
		<p style="font-size: 18px;text-align: left;">第二部分依据专业认证标准涉及的学生、培养目标和毕业要求、课程体系、师资队伍以及支撑条件五个部分，分别对相关的数据进行分析，并通过图表等方式呈现。</p>
		<div class="tb_main">
			<!-- 正式数据 -->

			
			<div id="jiaoshao">
 			<p style="font-size: 24px">
				<b>专业基本信息（数据源：表0） </b>
			</p>
			<table  id="table_0_0">
					<thead>
						<tr>
							<td colspan="2">
								<h4 id="filename">专业基本信息</h4>
							</td>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>专业名称</td>
							<td></td>
						</tr>
						<tr>
							<td>专业代码</td>
							<td></td>
						</tr>
						<tr>
							<td>校内专业代码</td>
							<td></td>
						</tr>
						<tr>
							<td>学制</td>
							<td></td>
						</tr>
						<tr>
							<td>专业设置年份</td>
							<td></td>
						</tr>
						<tr>
							<td>专业方向</td>
							<td></td>
						</tr>
						<tr>
							<td>所在学院</td>
							<td></td>
						</tr>
						<tr>
							<td>专业负责人姓名</td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>


			<P style="FONT-SIZE: 24px">
				<B>1.1本专业在校生数 </B>
			</P>
			<table  id="table_1_1">
					<thead>
						<tr>
							<td colspan="2">
								<h4 id="filename">1.1本专业在校生数</h4>
							</td>
						</tr>
						<tr>
							<td>年级</td>
							<td>学生数</td>
						</tr>
					</thead>
					
					<tbody>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>

			<p style="font-size: 24px">
				<b>1.2近三年本科专业招生情况 </b>
			</p>
			<table  id="table_1_2">
					<thead>
						<tr>
							<td colspan="3">
								<h4 id="filename">1.2近三年本科专业招生情况</h4>
							</td>
						</tr>
						<tr>
							<td>年份</td>
							<td>招生计划数</td>
							<td>实际录取数</td>
						</tr>
						
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>

			<!-- 1-3 -->
			<p style="font-size: 24px">
				<b>1.3 近三年毕业生去向分布情况</b>
			</p>
			<table  id="table_1_3">
					<thead>
						<tr>
							<td colspan="11">
								<h4 id="filename">1.3 近三年毕业生去向分布情况</h4>
							</td>
						</tr>
						<tr>
							<td rowspan="2" width="70px">年份</td>
							<td rowspan="2" width="70px">总人数</td>
							<td colspan="9">毕业去向人数</td>
						</tr>
						<tr>
							<td>政府机构</td>
							<td>事业单位</td>
							<td>企业</td>
							<td>部队</td>
							<td>灵活就业</td>
							<td>境内升学</td>
							<td>境外升学</td>
							<td>参加国家地方项目就业</td>
							<td>其他</td>
						</tr>
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<!-- <div id="table_1_3_zc_div">
				<img src="" width="600" height="270"></img>
			</div>
			<div id="table_1_3_zgxw_div">
				<img src="" width="600" height="270"></img>
			</div>
			<div id="table_1_3_age_div">
				<img src="" width="600" height="270"></img>
			</div> -->
			<!-- 1-4 -->
			<p style="font-size: 24px">
				<b>1.4 近三年本专业学生转入转出情况</b>
			</p>
			<table  id="table_1_4">
					<thead>
						<tr>
							<td colspan="4">
								<h4 id="filename">1.4 近三年本专业学生转入转出情况</h4>
							</td>
						</tr>
						
						<tr>
							<td>年份</td>
							<td>2014年</td>
							<td>2015年</td>
							<td>2016年</td>
						</tr>
						
					</thead>
					
					<tbody>
						<tr>
							<td>转入人数</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>转出人数</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>

			<!-- 教师队伍 -->
			
			<p style="font-size: 24px">
				<b>2.1专业教师分类人数构成比例</b>
			</p>
			<table  id="table_2_1">
					<thead>
						<tr>
							<td colspan="5">
								<h4 id="filename">2.1专业教师分类人数构成比例</h4>
							</td>
						</tr>
						<tr>
							<td rowspan="2">教师总数</td>
							<td colspan="2">专任教师</td>
							<td colspan="2">外聘教师</td>
						</tr>
						<tr>
							<td>人数</td>
							<td>比例(%)</td>
							<td>人数</td>
							<td>比例(%)</td>
						</tr>
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<!-- 2-2 -->
			<p style="font-size: 24px">
				<b>2.2 专业教师队伍结构</b>
			</p>
			<table  id="table_2_2">
					<thead>
						<tr>
							<td colspan="4">
								<h4 id="filename">2.2 专业教师队伍结构</h4>
							</td>
						</tr>
						
						<tr>
							<td colspan="2" rowspan="2"></td>
							<td colspan="2">专任教师人数及比例</td>
						</tr>
						<tr>
							<td>人数</td>
							<td>比例</td>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td colspan="2">总体情况</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">职称</td>
							<td>正高级</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>副高级</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>中级</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>初级及以下</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="3">学位</td>
							<td>博士</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>硕士</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>学士及以下</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">年龄</td>
							<td>35岁及以下</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>36-45岁</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>46-55岁</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>56岁及以上</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="3">学缘</td>
							<td>本校</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>外校(境内)</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>外校(境外)</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<div id="table_2_2_zc_div">
				<img src=""  width="600" height="270"></img>
			</div>
			<div id="table_2_2_zgxw_div">
				<img src=""  width="600" height="270"></img>
			</div>
			<div id="table_2_2_age_div">
				<img src=""  width="600" height="270"></img>
			</div>
			<div id="table_2_2_xy_div">
				<img src=""  width="600" height="270"></img>
			</div>
			<!-- 2-3 -->
			<p style="font-size: 24px">
				<b>2.3专任教师企业经历背景情况</b>
			</p>
			<<table  id="table_2_3_1">
					<thead>
						<tr>
							<td colspan="3">
								<h4 id="filename">2.3专任教师企业经历背景情况</h4>
							</td>
						</tr>
						<tr>
							<td></td>
							<td>数量</td>
							<td>比例(%)</td>
						</tr>
						
					</thead>
					
					<tbody>
						<tr>
							<td>专任教师总人数</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>总人数中:具有企业工作经历</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>总人数:承担工程项目</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<!-- 2-4 -->
			<p style="font-size: 24px">
				<b>2.3.2 专任教师企业工作经历</b>
			</p>
			<table  id="table_2_3_2">
					<thead>
						<tr>
							<td colspan="5">
								<h4 id="filename">2.3.2 专任教师企业工作经历</h4>
							</td>
						</tr>
						<tr>
							<td rowspan="2">序号</td>
							<td rowspan="2">姓名</td>
							<td rowspan="2">工号</td>
							<td colspan="2">企业经历</td>
						</tr>
						<tr>
							<td>起止时间</td>
							<td>工作内容</td>
						</tr>
					</thead>
					
					<tbody>
						<!-- <tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr> -->
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<!-- 2-5 -->
			<p style="font-size: 24px">
				<b>2.4  近三年专任教师接受培训进修情况</b>
			</p>
			<table  id="table_2_4">
					<thead>
						<tr>
							<td colspan="2">
								<h4 id="filename">2.4  近三年专任教师接受培训进修情况</h4>
							</td>
						</tr>
						<tr>
							<td>培训进修类型</td>
							<td>人数</td>
						</tr>
						
					</thead>
					
					<tbody>
						<tr>
							<td>访问学者</td>
							<td></td>
						</tr>
						<tr>
							<td>攻读学位</td>
							<td></td>
						</tr>
						<tr>
							<td>行业培训</td>
							<td></td>
						</tr>
						<tr>
							<td>新近教师校内培训</td>
							<td></td>
						</tr>
						<tr>
							<td>3个月以上进修人次</td>
							<td></td>
						</tr>
						<tr>
							<td>接受培训进修合计人次</td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<!-- 2-6 -->
			<p style="font-size: 24px">
				<b>2.5近三年专任教师的教学科学研究项目、获奖和成果情况汇总</b>
			</p>
			<table  id="table_2_5">
					<thead>
						<tr>
							<td colspan="3">
								<h4 id="filename">2.5近三年专任教师的教学科学研究项目、获奖和成果情况汇总</h4>
							</td>
						</tr>
						<tr>
							<td colspan="2" >项目</td>
							<td>数量</td>
						</tr>
						
					</thead>
					
					<tbody>
						<tr>
							<td rowspan="3" width="400">专任教师承担教学研究项目</td>
							<td >项目总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：国家级</td>
							<td></td>
						</tr>
						<tr>
							<td>省部级</td>
							<td></td>
						</tr>
						
						<tr>
							<td rowspan="3">专任教师教学获奖</td>
							<td>获奖总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：国家级</td>
							<td></td>
						</tr>
						<tr>
							<td>省部级</td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">专任教师教学研究成果</td>
							<td>成果总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：出版专著数</td>
							<td></td>
						</tr>
						<tr>
							<td>发表论文数</td>
							<td></td>
						</tr>
						<tr>
							<td>其他</td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">专任教师承担科学研究项目</td>
							<td>项目总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：国家级</td>
							<td></td>
						</tr>
						<tr>
							<td>省部级</td>
							<td></td>
						</tr>
						<tr>
							<td>横向</td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="3">专任教师科学研究获奖</td>
							<td>获奖总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：国家级</td>
							<td></td>
						</tr>
						<tr>
							<td>省部级</td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">专任教师科学研究成果</td>
							<td>成果总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：出版专著数</td>
							<td></td>
						</tr>
						<tr>
							<td>发表论文数</td>
							<td></td>
						</tr>
						<tr>
							<td>其他</td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<!-- 3-1 -->
			<p style="font-size: 24px">
				<b>3.1 与企业合作建立实践基地</b>
			</p>
				<h4 id="filename">3.1 与企业合作建立实践基地</h4>
				<span>目前，本专业与企业合作建立实践基地38个</span>
			


			<!-- 3-2-1 -->
			
			<p style="font-size: 24px">
				<b>3.2 校内实践教学场所使用状况</b>
			</p>
			<div align="center"><span style="font-size:15px;">现有<u><span id="test1">1</span></u>个校内实践场所，共承担了<u><span id="test2">1</span></u>门实践教学课程。</span></div>
			<table  id="table_3_2">
					<thead>
						<tr>
							<td colspan="5">
								<h4 id="filename">3.2 校内实践教学场所使用状况</h4>
							</td>
						</tr>
						<tr>
							<td>序号</td>
							<td>实践场所名称</td>
							<td>承担本专业实践教学课程名称</td>
							<td>本学年度承担本专业实践教学学时数</td>
							<td>本学年度专业参与实践教学学生数</td>
						</tr>
						
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>


			<!-- 3-3 -->
			<p style="font-size: 24px">
				<b>3.3 校外实习实训基地使用状况 </b>
			</p>
			<table  id="table_3_3">
					<thead>
						<tr>
							<td colspan="7">
								<h4 id="filename">3.3 校外实习实训基地使用状况</h4>
							</td>
						</tr>
						<tr>
							<td>序号</td>
							<td>实习实训基地名称</td>
							<td>合作单位</td>
							<td>协议签订时间</td>
							<td>实践教学内容</td>
							<td>单次最多可接纳学生数</td>
							<td>本年度接纳学生总数</td>
						</tr>
						
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<!-- 4-1 -->
			<p style="font-size: 24px">
				<b>4.1近期专业培养目标修订时企业行业参与情况</b>
			</p>
			<table  id="table_4_1">
					<thead>
						<tr>
							<td colspan="5">
								<h4 id="filename">4.1近期专业培养目标修订时企业行业参与情况</h4>
							</td>
						</tr>
						<tr>
							<td>序号</td>
							<td>年份</td>
							<td>专家姓名</td>
							<td>所在单位</td>
							<td>参与修订的主要工作</td>
						</tr>
						
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<p style="font-size: 24px">
				<b>5.1 课程情况</b>
			</p>
			 <table  id="table_5_1">
					<thead>
						<tr>
							<td colspan="3">
								<h4 id="filename">5.1 课程情况</h4>
							</td>
						</tr>
						
						<tr>
							<td>课程类别</td>
							<td>学分</td>
							<td>占总学分比例（%）</td>
						</tr>
					</thead>
					
					<tbody>
						<!-- <tr>
							<td>数学与自然科学类</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>工程基础、专业基础与专业类</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>工程实践与毕业设计类</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>人文社会科学类通识教育</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>总学分</td>
							<td></td>
							<td></td>
						</tr> -->
					</tbody>
				
				<tfoot>
				</tfoot>
			</table> 
			<!-- 4-3 -->
			<p style="font-size: 24px">
				<b>5.2专业主干课程情况</b>
			</p>
		<div align="center"><span style="font-size:15px;">专业主干课程 共<u><span id="test5_1">0</span></u>门，（<u><span id="test5_2">0</span></u>学分），其中由教授（或其它正高级职称）授课门数为<u><span id="test5_3">0</span></u>门（占<u><span id="test5_4">0</span></u>学分）。</span></div>
			<table  id="table_5_2">
					<thead>
						<tr>
							<td colspan="7">
								<h4 id="filename">5.2专业主干课程情况</h4>
							</td>
						</tr>
						<tr>
							<td>序号</td>
							<td>课程名称</td>
							<td>课程类别</td>
							<td>学分</td>
							<td>授课教师</td>
							<td>专业技术职称</td>
							<td>考核方式</td>
						</tr>
						
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			<!-- 4-4 -->
			<p style="font-size: 24px">
				<b>5.4近三年毕业设计（论文）情况</b>
			</p>
			<table  id="table_5_4">
					<thead>
						<tr>
							<td colspan="8">
								<h4 id="filename">5.4近三年毕业设计（论文）情况</h4>
							</td>
						</tr>
						<tr>
							<td rowspan="2">年份</td>
							<td rowspan="2">毕业设计(论文)总篇数</td>
							<td colspan="2">工程设计</td>
							<td colspan="2">工程研究</td>
							<td colspan="2">其他</td>
						</tr>
						<tr>
							<td>篇数</td>
							<td>比例（%）</td>
							<td>篇数</td>
							<td>比例（%）</td>
							<td>篇数</td>
							<td>比例（%）</td>
						</tr>
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
			
			<!--5-5  -->
			<p style="font-size: 24px">
				<b>5.5近三年专任教师代表性教学研究、科学研究项目</b>
			</p>
			<table  id="table_5_5">
					<thead>
						<tr>
							<td colspan="7">
								<h4 id="filename">5.5近三年专任教师代表性教学研究、科学研究项目</h4>
							</td>
						</tr>
						<tr>
							<td >序号</td>
							<td >项目名称</td>
							<td >资助单位</td>
							<td >主持人姓名</td>
							<td>项目经费</td>
							<td>立项时间</td>
							<td>其他参研人员</td>
						</tr>
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	</div>

	<div id="ASDS_table2_2_zc"
		style=" border:1px solid #ccc;float: left;width:99%;height:500px;margin: 5px;"></div>
	<div id="ASDS_table2_2_xw"
		style=" border:1px solid #ccc;float: left;width:99%;height:500px;margin: 5px;"></div>
	<div id="ASDS_table2_2_nl"
		style=" border:1px solid #ccc;float: left;width:99%;height:500px;margin: 5px;"></div>
	<div id="ASDS_table2_2_xy"
		style=" border:1px solid #ccc;float: left;width:99%;height:500px;margin: 5px;"></div>
</body>
</html>
