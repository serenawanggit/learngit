var report_data_1_xy = [];
var report_data_1 = [];
var report_data_2_1 = 0;
var report_data_2_2 = 0;
var report_data_2_3 = 0;
var report_data_4_xy = [];
var report_data_4 = [];
var report_data_5_xy = [];
var report_data_5 = [];
var report_data_7_kc = [];
var report_data_7 = [];

var myChart;// = echarts.init(document.getElementById('table_1_3_bt_zc'));
var myChart_1;// = echarts.init(document.getElementById('container_1'));
var myChart_2;// = echarts.init(document.getElementById('container_2'));
var myChart_4;// = echarts.init(document.getElementById('container_4'));
var myChart_5;// = echarts.init(document.getElementById('container_5'));

$(function() {
	getYear();
	
	var date = new Date()
	var year = date.getFullYear();
    var month = date.getMonth()+1;    //js从0开始取 
    var date1 = date.getDate(); 
	$("#showDate").html(year+"年"+month+"月"+date1+"日");

	showYear();
	getData();
	
	$("#year").change(function(){
		location.reload();
		showYear();
		getData();
	})
	$("#xueqi").change(function(){
		location.reload();
		showYear();
		getData();
	})
	
	//合并内容相同的单元格
	_w_table_rowspan("#tab_4_2",1);
	_w_table_rowspan("#tab_4_2",2);
	
});

function getYear(){
	var date = new Date();
	var year = date.getFullYear();
	var yearStr = "";
	for ( var i = 3; i >= 0; i--) {
		var first = year - (i + 1);
		var sencond = year - i;
		if(sencond==year-1){
			yearStr += "<option selected='selected' value='" + first + "-" + sencond + "'>" + first + "-" + sencond + "学年</option>";
		}else{
			yearStr += "<option value='" + first + "-" + sencond + "'>" + first + "-" + sencond + "学年</option>";
		}
	}
	var y = year + 1;
	yearStr += "<option value='" + year + "-" + y + "'>" + year + "-" + y + "学年</option>";
	$("#year").html(yearStr);
}

function showYear(){
	var xueqi1 = "";
	if($("#xueqi").val()==1){
		xueqi1 = "第一学期";
	}else{
		xueqi1 = "第二学期";
	}
	var str = $("#year").val() + "学年" + xueqi1;//2015-2016学年第二学期";
//	if($("#year").val()=="2015/03/30"){
//		str = "2014-2015学年第一学期";
//		$("#yearString_1").html("（2014-2015学年第一学期）");
//		$("#yearString_2").html("2015年3月");
//	}
//	if($("#year").val()=="2015/09/30"){
//		str = "2014-2015学年第二学期";
//		$("#yearString_1").html("（2014-2015学年第二学期）");
//		$("#yearString_2").html("2015年9月");
//	}
//	if($("#year").val()=="2016/03/30"){
//		str = "2015-2016学年第一学期";
//		$("#yearString_1").html("（2015-2016学年第一学期）");
//		$("#yearString_2").html("2016年3月");
//	}
//	if($("#year").val()=="2016/09/30"){
//		str = "2015-2016学年第二学期";
//		$("#yearString_1").html("（2015-2016学年第二学期）");
//		$("#yearString_2").html("2016年9月");
//	}
//	if($("#year").val()=="2017/03/30"){
//		str = "2016-2017学年第一学期";
//		$("#yearString_1").html("（2016-2017学年第一学期）");
//		$("#yearString_2").html("2017年3月");
//	}
//	if($("#year").val()=="2017/09/30"){
//		str = "2016-2017学年第二学期";
//		$("#yearString_1").html("（2016-2017学年第二学期）");
//		$("#yearString_2").html("2017年9月");
//	}
//	if($("#year").val()=="2018/03/30"){
//		str = "2017-2018学年第一学期";
//		$("#yearString_1").html("（2017-2018学年第一学期）");
//		$("#yearString_2").html("2018年3月");
//	}
//	if($("#year").val()=="2018/09/30"){
//		str = "2017-2018学年第二学期";
//		$("#yearString_1").html("（2017-2018学年第二学期）");
//		$("#yearString_2").html("2018年9月");
//	}
//	if($("#year").val()=="2019/03/30"){
//		str = "2018-2019学年第一学期";
//		$("#yearString_1").html("（2018-2019学年第一学期）");
//		$("#yearString_2").html("2019年3月");
//	}
//	if($("#year").val()=="2019/09/30"){
//		str = "2018-2019学年第二学期";
//		$("#yearString_1").html("（2018-2019学年第二学期）");
//		$("#yearString_2").html("2019年9月");
//	}
	
	if(str=="2015-2016学年第二学期"){
		$("#titleXq").html("2015-2016学年第一学期");
		$("#xqSix").html("2015-2016学年第一学期");
//		$("#preXN").html("2014-2015学年第二学期和2014-2015学年第一学期");
		$(".thePre").html("2015-2016学年第一学期");
	}else if(str=="2016-2017学年第一学期"){
		$("#titleXq").html("2015-2016学年");
		$("#xqSix").html("2015-2016学年");
//		$("#preXN").html("2015-2016学年第二学期和2015-2016学年第一学期");
		$(".thePre").html("2015-2016学年第二学期");
	}else if(str=="2016-2017学年第二学期"){
		$("#titleXq").html("2015-2016学年第二学期和2016-2017学年第一学期");
		$("#xqSix").html("2015-2016学年第二学期和2016-2017学年第一学期");
//		$("#preXN").html("2015-2016学年第二学期和2015-2016学年第一学期");
		$(".thePre").html("2016-2017学年第一学期");
	}else if(str=="2017-2018学年第一学期"){
		$(".thePre").html("2016-2017学年第二学期");
		$("#xqSix").html("2016-2017学年");
//		$("#preXN").html("2016-2017学年第二学期和2016-2017学年第一学期");
	}else if(str=="2017-2018学年第二学期"){
		$(".thePre").html("2017-2018学年第一学期");
		$("#xqSix").html("2016-2017学年第二学期和2017-2018学年第一学期");
//		$("#preXN").html("2016-2017学年第二学期和2016-2017学年第一学期");
	}
	
	$("#yearString_1").html("(" + str + ")");
//	$("#span_1").html(str);
//	$("#span_2").html(str);
//	$("#span_3").html(str);
//	$("#span_4").html(str);
//	$("#span_5").html(str);
//	$("#span_6").html(str);
//	$("#span_7").html(str);
//	$("#span_8").html(str);
//	$("#span_9").html(str);
//	$("#span_10").html(str);
//	$("#span_11").html(str);
//	$("#span_12").html(str);
	$(".current").html(str);
}

function getData(){
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table1-a",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			if(data.length>2){
				$("#font_1_1").html(result[0][0]==""?"0":result[0][0]);
				$("#font_1_2").html(result[0][1]==""?"0":result[0][1]);
				$("#font_1_3").html(result[0][2]==""?"0":result[0][2]);
				$("#font_1_4").html(result[0][2]==""?"0.00%":result[0][3]);
			}
		},
		error:function(){alert("加载失败");}
	});
	
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table1-b",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			report_data_1_xy = [];
			report_data_1 = [];
			var result=eval("("+data+")");
			var str = "<tr style='background:#DCDBDB;'><td>序号</td><td>学院（部）</td><td>需评人数</td><td>完全评价<br>人数</td><td>部分评价<br>人数</td><td>完全未评价<br>人数</td><td>评教率(%)</td></tr>";
			if(data.length>2){
				for ( var int = 0; int < result.length; int++) {
					var rate = result[int][5]+"";
					if(rate.indexOf("%")==-1){
						var d = result[int][5] + "";
						rate = d.substring(0,5) + "%";
						report_data_1.push(d.substring(0,5));
					}else{
						var s = result[int][5].substring(0,result[int][5].indexOf("%"));
						report_data_1.push(s);
					}
					str += "<tr><td>"+(int+1)+"</td><td>"+result[int][0]+"</td><td>"+result[int][1]+"</td><td>"+result[int][2]+"</td>" +
							"<td>"+result[int][3]+"</td><td>"+result[int][4]+"</td><td>"+rate+"</td></tr>";
					report_data_1_xy.push(result[int][0]);
				}
			}
			$("#tab_1").html(str);
			//加载柱状图
			myChart = echarts.init(document.getElementById('table_1_3_bt_zc'));
			//1、学生评教参与情况分析
			getOneZhuzhuangtu();
		},
		error:function(){alert("加载失败");}
	});
//	$.ajax({
//		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
//		type : "POST",
//		async:false,
//		data : {
//			key : "ASDS_table2-a",
//			year : $("#year").val(),
//			xueqi : $("#xueqi").val()
//		},
//		success : function(data){
//			var result=eval("("+data+")");
//			if(result!=null && result.length>0){
//				$("#tr_1_td_1").html(result[0][0]);		$("#tr_1_td_2").html(result[0][1]); 	$("#tr_1_td_3").html(result[0][2]);
//				$("#tr_1_td_4").html(result[0][3]);		$("#tr_1_td_5").html(result[0][4]);
//				$("#tr_2_td_1").html(result[0][5]);		$("#tr_2_td_2").html(result[0][6]);		$("#tr_2_td_3").html(result[0][7]);
//				$("#tr_2_td_4").html(result[0][8]);		$("#tr_2_td_5").html(result[0][9]);
//				$("#tr_3_td_1").html(result[0][10]); 	$("#tr_3_td_2").html(result[0][11]); 	$("#tr_3_td_3").html(result[0][12]);
//				$("#tr_3_td_4").html(result[0][13]); 	$("#tr_3_td_5").html(result[0][14]);
//				$("#tr_4_td_1").html(result[0][15]); 	$("#tr_4_td_2").html(result[0][16]); 	$("#tr_4_td_3").html(result[0][17]);
//				$("#tr_4_td_4").html(result[0][18]); 	$("#tr_4_td_5").html(result[0][19]);
//				$("#tr_5_td_1").html(result[0][20]); 	$("#tr_5_td_2").html(result[0][21]);	$("#tr_5_td_3").html(result[0][22]);
//				$("#tr_5_td_4").html(result[0][23]);	$("#tr_5_td_5").html(result[0][24]);
//				$("#tr_6_td_1").html(result[0][25]);	$("#tr_6_td_2").html(result[0][26]);	$("#tr_6_td_3").html(result[0][27]);
//				$("#tr_6_td_4").html(result[0][28]);	$("#tr_6_td_5").html(result[0][29]);
//				$("#tr_7_td_1").html(result[0][30]);	$("#tr_7_td_2").html(result[0][31]);	$("#tr_7_td_3").html(result[0][32]);
//				$("#tr_7_td_4").html(result[0][33]);	$("#tr_7_td_5").html(result[0][34]);
//				$("#tr_8_td_1").html(result[0][35]);	$("#tr_8_td_2").html(result[0][36]);	$("#tr_8_td_3").html(result[0][37]);
//				$("#tr_8_td_4").html(result[0][38]);	$("#tr_8_td_5").html(result[0][39]);
//				$("#tr_9_td_1").html(result[0][40]);	$("#tr_9_td_2").html(result[0][41]);	$("#tr_9_td_3").html(result[0][42]);
//				$("#tr_9_td_4").html(result[0][43]);	$("#tr_9_td_5").html(result[0][44]);
//				$("#tr_10_td_1").html(result[0][45]);	$("#tr_10_td_2").html(result[0][46]);	$("#tr_10_td_3").html(result[0][47]);
//				$("#tr_10_td_4").html(result[0][48]);	$("#tr_10_td_5").html(result[0][49]);
//				$("#tr_11_td_1").html(result[0][50]);	$("#tr_11_td_2").html(result[0][51]);	$("#tr_11_td_3").html(result[0][52]);
//				$("#tr_11_td_4").html(result[0][53]);	$("#tr_11_td_5").html(result[0][54]);
//				$("#tr_12_td_1").html(result[0][55]);	$("#tr_12_td_2").html(result[0][56]);	$("#tr_12_td_3").html(result[0][57]);
//				$("#tr_12_td_4").html(result[0][58]);	$("#tr_12_td_5").html(result[0][59]);
//				$("#tr_13_td_1").html(result[0][60]);	$("#tr_13_td_2").html(result[0][61]);	$("#tr_13_td_3").html(result[0][62]);
//				$("#tr_13_td_4").html(result[0][63]);	$("#tr_13_td_5").html(result[0][64]);
//				$("#tr_14_td_1").html(result[0][65]);	$("#tr_14_td_2").html(result[0][66]);	$("#tr_14_td_3").html(result[0][67]);
//				$("#tr_14_td_4").html(result[0][68]);	$("#tr_14_td_5").html(result[0][69]);
//				$("#tr_15_td_1").html(result[0][70]);	$("#tr_15_td_2").html(result[0][71]);	$("#tr_15_td_3").html(result[0][72]);
//				$("#tr_15_td_4").html(result[0][73]);	$("#tr_15_td_5").html(result[0][74]);
//			}
//		},
//		error:function(){alert("加载失败");}
//	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table2-b",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			if(data.length>2){
				$("#font_2_2").html(result[0][2]);
				$("#tab_2_td_1").html(result[0][2]);
//				//var str = "<tr style='background:#DCDBDB;'><td style='width:300px;'>评价指标</td><td width='160px;'>平均得分</td></tr><tr><td>总体上我对这门课的教学评价为</td><td>"++"</td></tr>";
//				$("#tab_2_td_1").html(result[0][1]);
//				$("#tab_2_td_2").html(result[0][2]);
//				$("#tab_2_td_3").html(result[0][3]);
//				$("#tab_2_td_4").html(result[0][4]);
//				$("#tab_2_td_5").html(result[0][5]);
//				$("#tab_2_td_6").html(result[0][6]);
//				$("#tab_2_td_7").html(result[0][7]);
//				$("#tab_2_td_8").html(result[0][8]);
//				$("#tab_2_td_9").html(result[0][9]);
//				$("#tab_2_td_10").html(result[0][10]);
//				$("#tab_2_td_11").html(result[0][11]);
//				$("#tab_2_td_12").html(result[0][12]);
//				$("#tab_2_td_13").html(result[0][13]);
//				$("#tab_2_td_14").html(result[0][14]);
//				$("#tab_2_td_15").html(result[0][15]);
//				$("#tab_2_td_16").html(result[0][16]);
			}
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table2-c",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			var xqStr = "第一学期";
			var str = "<tr style='background:#DCDBDB;'><td style='width:300px;'>学年学期</td><td width='160px;'>平均得分</td></tr>";
			for ( var i = 0; i < result.length; i++) {
				if(result[i][1]==2) xqStr = "第二学期";
				else xqStr = "第一学期";
				str += "<tr><td>" + result[i][0] + "学年" + xqStr + "</td><td>" + result[i][2] + "</td></tr>";
			}
			$("#tab_2_3").html(str);
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table2-d",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			if(data.length>2){
				$("#font_2_5").html(result[0][0]+result[0][1]);
				$("#font_2_6").html(result[0][2]);
				$("#font_2_7").html(result[0][3]);
				var str = "评价得分≥90分课堂数" + result[0][4] + "个，占有效评价课堂数" + result[0][5] + "%；得分<90且≥85分课堂数" + result[0][6] + "个，" +
						"占有效评价课堂数" + result[0][7] + "%，得分<85分课堂数" + result[0][8] + "个，占有效评价课堂数" + result[0][9] + "%。";
				$("#font_2_8").html(str);
				
				report_data_2_1 = result[0][4];
				report_data_2_2 = result[0][6];
				report_data_2_3 = result[0][8];
			}else{
				$("#font_2_5").html(0);
				$("#font_2_6").html(0);
				$("#font_2_7").html(0);
				$("#font_2_8").html("评价得分≥90分课堂数0个，占有效评价课堂数0；得分<90且≥85分课堂数0个，占有效评价课堂数0，得分<85分课堂数0个，占有效评价课堂数0。");
			}
			myChart_1 = echarts.init(document.getElementById('container_1'));
			//2、学生评教指标体系与结果
			showTwoData();
		},
		error:function(){alert("加载失败");}
	});
	
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table3-a",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			if(data.length>2){
				$("#font_3_1").html(result[0][0]);
			}else{
				$("#font_3_1").html(0);
			}
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table3-b",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			var str = "<tr style='background:#DCDBDB;'><td>序号</td><td>学院（部）</td><td>平均得分</td></tr>";
			for ( var i = 0; i < result.length; i++) {
				str += "<tr><td>" + (i+1) + "</td><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td></tr>";
			}
			$("#tab_3").html(str);
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table4-a",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			if(data.length>2)
				$("#font_4_1").html(result[0][0] + "~" + result[0][1]);
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table4-b",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			report_data_4_xy = [];
			report_data_4 = [];
			var result=eval("("+data+")");
			for ( var i = 0; i < result.length; i++) {
				report_data_4_xy.push(result[i][0]);
				report_data_4.push(result[i][1]);
			}
			myChart_2 = echarts.init(document.getElementById('container_2'));
			//4、全校范围内学生评教得分后50名的课堂
			showFour();
		},
		error:function(){alert("加载失败");}
	});//
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table4-c",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			var str = "<tr style='background:#DCDBDB;'><td>倒数排序</td><td>教师姓名</td><td>课程名称</td><td>教师得分</td><td width='500px'>学生评语中的主要问题</td><td>所在学院</td></tr>";
			for ( var i = 0; i < result.length; i++) {
				str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td>" + result[i][3] + "</td><td><div style='margin:5px;'>" + result[i][4] + "</div></td><td>" + result[i][5] + "</td></tr>";
			}
			$("#tab_4_1").html(str);
		},
		error:function(){alert("加载失败");}
	});//
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table4-d",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			var str = "<tr style='background:#DCDBDB;'><td>学院</td><td>教师姓名</td><td>课程名称</td><td>教师得分</td><td width='500px'>学生评语中的主要问题</td></tr>";
			for ( var i = 0; i < result.length; i++) {
				str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td>" + result[i][3] + "</td><td><div style='margin:5px;'>" + result[i][4] + "</div></td></tr>";
			}
			$("#tab_4_2").html(str);
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table5-a",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			if(result.length>0){
				var num = result[0];
				if(result[0]=="" || result[0]==undefined || result[0]==null)
					num = "0";
				$("#font_5_1").html(num + "门");
				$("#font_5_2").html(num + "门");
			}
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table5-b",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			var str = "<tr style='background:#DCDBDB;'><td>序号</td><td>教师姓名</td><td>课程代码</td><td>课程名称</td><td>对教师评分</td><td width='370px'>学院</td></tr>";
			for ( var i = 0; i < result.length; i++) {
				str += "<tr><td>" + (i+1) + "</td><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td><div style='margin:5px;'>" + result[i][3] + "</div></td><td>" + result[i][4] + "</td></tr>";
			}
			$("#tab_5_1").html(str);
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table5-c",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			report_data_5_xy = [];
			report_data_5 = [];
			var result=eval("("+data+")");
			for ( var i = 0; i < result.length; i++) {
				report_data_5_xy.push(result[i][0]);
				report_data_5.push(result[i][1]);
			}
			myChart_4 = echarts.init(document.getElementById('container_4'));
//			//5、全校范围内学生评教得分满分的课堂（6名）
			showFive();
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table6-a",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			var str = "<tr style='background:#DCDBDB;'><td>教师所在部门</td><td>教师姓名</td><td>课程名称</td><td>2015-2016学年第一学期学生评教</td><td>2015-2016学年第二学期学生评教</td><td>是否在2015-2016学年第二学期学生评教后50名</td></tr>";
			for ( var i = 0; i < result.length; i++) {
				str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td>" + result[i][3] + "</td><td>" + result[i][4] + "</td><td>" + result[i][5] + "</td></tr>";
			}
			$("#tab_6_1").html(str);
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table6-b",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			var str = "<tr style='background:#DCDBDB;'><td>学院</td><td>教师姓名</td><td>课课程名称</td><td width='500px'>主要问题与建议</td></tr>";
			for ( var i = 0; i < result.length; i++) {
				str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td><div style='padding:5px;'>" + result[i][3] + "</div></td></tr>";
			}
			$("#tab_6_2").html(str);
		},
		error:function(){alert("加载失败");}
	});
	//
//	$.ajax({
//		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
//		type : "POST",
//		async:false,
//		data : {
//			key : "ASDS_table7-a",
//			year : $("#year").val()
//		},
//		success : function(data){
//			var result=eval("("+data+")");
//			var str = "<tr style='background:#DCDBDB;'><td>学院</td><td>教师姓名</td><td>课课程名称</td><td width='500px'>主要问题与建议</td></tr>";
//			for ( var i = 0; i < result.length; i++) {
//				str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td><div style='padding:5px;'>" + result[i][3] + "</div></td></tr>";
//			}
//		},
//		error:function(){alert("加载失败");}
//	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table7-b",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			report_data_7_kc = [];
			report_data_7 = [];
			
			var result=eval("("+data+")");
			for ( var i = 0; i < result.length; i++) {
				report_data_7_kc.push(result[i][0]);
				report_data_7.push(result[i][1]);
			}
			
			myChart_5 = echarts.init(document.getElementById('container_5'));
			//7、基于课程性质/类别的学生评价分析
			showSeven();
		},
		error:function(){alert("加载失败");}
	});
	$.ajax({
		url : "/CHART/collegeReport/collegeReport_collegeGetListByYearToBgd.htm",
		type : "POST",
		async:false,
		data : {
			key : "ASDS_table8",
			year : $("#year").val(),
			xueqi : $("#xueqi").val()
		},
		success : function(data){
			var result=eval("("+data+")");
			var str = "<tr style='background:#DCDBDB;'><td>排序</td><td>姓名</td><td>所在学院</td><td>课程</td><td>学生评分</td></tr>";
			for ( var i = 0; i < result.length; i++) {
				str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td>" + result[i][3] + "</td><td>" + result[i][4] + "</td></tr>";
			}
			$("#tab_8").html(str);
		},
		error:function(){alert("加载失败");}
	});
}




function downupload() {
	$(".removeDiv").remove();
	$("#upload_img").show();
	getImg(myChart.getDataURL("png"), "report_data_1_img.png");//获取图片
	getImg(myChart_1.getDataURL("png"), "report_data_2_img.png");//获取图片
	getImg(myChart_2.getDataURL("png"), "report_data_4_img.png");//获取图片
	getImg(myChart_4.getDataURL("png"), "report_data_5_img.png");//获取图片
	getImg(myChart_5.getDataURL("png"), "report_data_7_img.png");//获取图片
	
	$("#table_1_3_bt_zc").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_1_img.png'/>");
	$("#container_1").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_2_img.png'/>");
	$("#container_2").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_4_img.png'/>");
	$("#container_4").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_5_img.png'/>");
	$("#container_5").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_7_img.png'/>");
	
	var html2 = $("#bodyDiv1").html();
	var html2 = document.getElementById("bodyDiv1").innerHTML;//outerHTML;
	html2 = html2.replace(new RegExp("(<img [^<>]*>)", "gm"), "$1</img>");

//	$.ajax({
//		url : "/CHART/poiWord",//"/audit/asAssessReport/downloadWord.do",///CHART/itext
//		type : "POST",
//		dataType:"json",
//		data : {
//			"bodyData" : html2,
//			"versionsID":4,
//			"wordName":"本科教学学生评教数据统计分析报告"
//		},
//		async : false,
//		success : function(data) {
//			alert(data);
//			var dateStr = eval("("+data+")");
//			alert(dateStr);
//			var html = "<form id=\"formid\" action=\"/audit/asAssessReport/wordLoad.do\" method=\"post\">" +
//					"<input type=\"hidden\" id=\"filename\" name=\"filename\" value='本科教学学生评教数据统计分析报告'></input>" +
//					"<input type=\"hidden\" id=\"dateString\" name=\"dateString\" value='"+dateStr+"'></input></form>";
//			$("body").append(html);
//			$("#formid").submit();
//			$("#formid").remove();
//			$("#upload_img").fadeOut(1000);
//		}
//	});
	
	
	$.ajax({
		url : getRootPath() + "/CHART/poiWord",///CHART/itext
		type : "POST",
		data : {
			"bodyData" : html2,
			"versionsID":4,
			"wordName":"本科教学学生评教数据统计分析报告"
		},
		async : false,
		success : function(dateString) {
			if (dateString != "error") {
				var html = "";
				html = "<form id=\"formid\" action=\""
						+ getRootPath()
						+ "/CHART/poiWordUpload\" method=\"post\"><input type=\"hidden\" id=\"filename\" name=\"filename\" value='本科教学学生评教数据统计分析报告'></input><input type=\"hidden\" id=\"dateString\" name=\"dateString\" value='"+dateString+"'></input></form>";
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

function getImg(img,fileName){
	$.ajax({
		async:false,
		url : "/CHART/GetASDSR_Table_Img",
		type : "POST",
		data : {"img_Base64":img,"img_Name": fileName},
		error:function(){
			alert("save img error.");
		}
	});
}


function getTomcatRootPath()  
{  
   var pathName = window.location.pathname.substring(1);  
   var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));  
   return window.location.protocol + '//' + window.location.host;// + '/'+ webName;  
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

function getOneZhuzhuangtu(){
	//1、学生评教参与情况分析
	if(report_data_1_xy!=null && report_data_1_xy!=""){
		// 自定义option数据：
		option = {
			tooltip : {
				trigger : 'axis'
			},
			toolbox : {
				show : true,
				feature : {
					dataView : {
						show : true,
						readOnly : false
					},
					magicType : {
						show : true,
						type : [ 'line', 'bar' ]
					},
					restore : {
						show : true
					},
					saveAsImage : {
						show : true
					}
				}
			},
			calculable : true,
			xAxis : [ {
				type : 'category',
				data : report_data_1_xy
			} ],
			yAxis : [ {
				type : 'value'
			} ],
			series : [
					{
						name : '',
						type : 'bar',
						data : report_data_1,
						itemStyle: {
	    	                 normal: {
	    	                     label: {
	    	                         show: true,
	    	                         textStyle: {
	    	                             color: '#800080'
	    	                         },
	    							formatter:'{c}%'
	    	                     },
								color:'#0070C8'
	    	                 }
	    	             },
			            barMaxWidth:40//最大宽度
					}]
		};
		// 为echarts对象加载数据：
		myChart.setOption(option);
	}
}

function showTwoData(){
	//2、学生评教指标体系与结果
	option = {
		    title : {
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['<90分 且 >=85','85分以下','90分以上']
		    },
		    series : [
		        {
		            name: '',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:report_data_2_1, name:'<90分 且 >=85'},
		                {value:report_data_2_2, name:'85分以下'},
		                {value:report_data_2_3, name:'90分以上'}
		            ],
		            itemStyle:{ 
    	            normal:{ 
    	                  label:{ 
    	                    show: true, 
    	                    formatter: '{b} : {c} ({d}%)' 
    	                  }, 
    	                  labelLine :{show:true} 
    	                } 
    	            } 
		        }
		    ]
		};
	myChart_1.setOption(option);
}

function showFour(){
	//4、全校范围内学生评教得分后50名的课堂
	// 自定义option数据：
	if(report_data_4_xy!=null && report_data_4_xy!=""){
		option_2 = {
			title : {
				text : '课堂数（门）',
	//			subtext : '纯属虚构'
			},
			tooltip : {
				trigger : 'axis'
			},
	//		legend : {
	//			data : [ '蒸发量', '降水量' ]
	//		},
			toolbox : {
				show : true,
				feature : {
					dataView : {
						show : true,
						readOnly : false
					},
					magicType : {
						show : true,
						type : [ 'line', 'bar' ]
					},
					restore : {
						show : true
					},
					saveAsImage : {
						show : true
					}
				}
			},
			calculable : true,
			xAxis : [ {
				type : 'category',
				data : report_data_4_xy,
				axisLabel:{  
                      interval:0,//横轴信息全部显示  
                      rotate:-30,//-30度角倾斜显示  
                }  
			} ],
			 grid: { // 控制图的大小，调整下面这些值就可以，
	             x: 40,
	             x2: 100,
	             y2: 150,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
	         },
			yAxis : [ {
				type : 'value'
			} ],
			series : [
					{
						name : '',
						type : 'bar',
						data : report_data_4,
						itemStyle: {
	    	                 normal: {
	    	                     label: {
	    	                         show: true,
	    	                         textStyle: {
	    	                             color: '#800080'
	    	                         }
	    	                     },
								color:'#0070C8'
	    	                 }
	    	             },
			            barMaxWidth:40//最大宽度
					}]
		};
		// 为echarts对象加载数据：
		myChart_2.setOption(option_2);
	}	
}

function showFive(){
	//5、全校范围内学生评教得分满分的课堂（6名）
	// 自定义option数据：
	if(report_data_5_xy!=null && report_data_5_xy!=""){
		option_4 = {
				title : { text : '课堂数（门）', },
				tooltip : { trigger : 'axis' },
				toolbox : { show : true,
					feature : { 
						dataView : { show : true, readOnly : false },
						magicType : { show : true, type : [ 'line', 'bar' ] },
						restore : { show : true },
						saveAsImage : { show : true }
					}
				},
				calculable : true,
				xAxis : [ { type : 'category', data : report_data_5_xy } ],
				yAxis : [ { type : 'value' } ],
				series : [ { name : '', type : 'bar', data : report_data_5,
							itemStyle: { normal: { label: { show: true, textStyle: { color: '#800080' } },
										color:'#0070C8' } },
				           barMaxWidth:40//最大宽度
				}]
			};
			// 为echarts对象加载数据：
			myChart_4.setOption(option_4);
	}else{
		var option_4 = {
	        title :{
	           text:""
	        },
	        series:[
	            {

	            }
	        ]
	    };
		myChart_4.setOption(option_4);
	}
}

function showSeven(){
	//7、基于课程性质/类别的学生评价分析
	// 自定义option数据：
	if(report_data_7_kc!=null && report_data_7_kc!=""){
		option_5 = {
			title : { text : '评价评分', },
			tooltip : { trigger : 'axis' },
			toolbox : {
				show : true,
				feature : {
					dataView : {
						show : true,
						readOnly : false
					},
					magicType : {
						show : true,
						type : [ 'line', 'bar' ]
					},
					restore : {
						show : true
					},
					saveAsImage : {
						show : true
					}
				}
			},
			calculable : true,
			xAxis : [ {
				type : 'category',
				data : report_data_7_kc
			} ],
			yAxis : [ {
				type : 'value'
	//			data : [81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
			} ],
			series : [
					{
						name : '',
						type : 'bar',
						data : report_data_7,
			            barMaxWidth:40,//最大宽度
			            itemStyle: {
	    	                 normal: {
	    	                     label: {
	    	                         show: true,
	    	                         textStyle: {
	    	                             color: '#800080'
	    	                         }
	    	                     },
	    						color:'#0070C8'
	    	                 }
	    	             },
			            markLine : {
							data : [ {
								type : 'average',
								name : '平均值'
							} ]
						}
					}]
		};
		// 为echarts对象加载数据：
		myChart_5.setOption(option_5);
	}else{
		 var option_5 = {
	        title :{
	           text:""
	        },
	        series:[
	            {

	            }
	        ]
	    };
	    myChart_5.setOption(option_5);
	}
}

//合并内容相同的单元格
function _w_table_rowspan(_w_table_id,_w_table_colnum){
    _w_table_firsttd = "";
    _w_table_currenttd = "";
    _w_table_SpanNum = 0;
    _w_table_Obj = $(_w_table_id + " tr td:nth-child(" + _w_table_colnum + ")");
    _w_table_Obj.each(function(i){
        if(i==0){
            _w_table_firsttd = $(this);
            _w_table_SpanNum = 1;
        }else{
            _w_table_currenttd = $(this);
            if(_w_table_firsttd.text()==_w_table_currenttd.text()){
                _w_table_SpanNum++;
//                _w_table_currenttd.hide();
                _w_table_currenttd.remove();
                _w_table_firsttd.attr("rowSpan",_w_table_SpanNum);
            }else{
                _w_table_firsttd = $(this);
                _w_table_SpanNum = 1;
            }
        }
    }); 
}
function _w_table_colspan(_w_table_id,_w_table_rownum,_w_table_maxcolnum){
    if(_w_table_maxcolnum == void 0){_w_table_maxcolnum=0;}
    _w_table_firsttd = "";
    _w_table_currenttd = "";
    _w_table_SpanNum = 0;
    $(_w_table_id + " tr:nth-child(" + _w_table_rownum + ")").each(function(i){
        _w_table_Obj = $(this).children();
        _w_table_Obj.each(function(i){
            if(i==0){
                _w_table_firsttd = $(this);
                _w_table_SpanNum = 1;
            }else if((_w_table_maxcolnum>0)&&(i>_w_table_maxcolnum)){
                return "";
            }else{
                _w_table_currenttd = $(this);
                if(_w_table_firsttd.text()==_w_table_currenttd.text()){
                    _w_table_SpanNum++;
                    _w_table_currenttd.hide(); //remove();
                    _w_table_firsttd.attr("colSpan",_w_table_SpanNum);
                }else{
                    _w_table_firsttd = $(this);
                    _w_table_SpanNum = 1;
                }
            }
        });
    });
}
