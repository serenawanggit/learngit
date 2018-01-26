
var avgChart;
$(document).ready(function() { 
	validateLogin();
	// 界面加载时执行select数据绑定
	avgChart = echarts.init(document.getElementById("avgChartDisplay"));
	getAnalysisInitData();
	
	}); 

var isFirst = true;
function show(num){
	if(num == 1){
		$("#avgChartDisplay").show();
		$("#subAnalysis").hide();
	}else{
		$("#avgChartDisplay").hide();
		$("#subAnalysis").show();
		if(isFirst){
			getSubAnalysis();
			isFirst = false;
		}
	}
}


function getAnalysisInitData(){
	$.ajax({
		url : "/audit/asAccessStatusController/getAnalysisInitData.do",
		type : "POST",
		dataType : "json",
		data : {},
		success : function(data) {
			var result = eval("(" + data + ")");
			if (result.flag!=1) {
				return;
			}
			$('#main-bottom-div1').html("");
			var yearList = result.yearList;
			var yearStr = "";
			//获取年份
			var strCookie = document.cookie;
			var cookies = strCookie.split("; ");
			for(var i=0;i<cookies.length;i++){
				var cookie = cookies[i];
				var details = cookie.split("=");
				if(details[0] == "assessYear"){
					nowYear = eval(details[1]);
			 	}
			 }
			for ( var i = 0; i < yearList.length; i++) {
				if(yearList[i].access_year == nowYear){
					yearStr += "<option value='" + yearList[i].access_year + "' selected='selected'>";
					yearStr +=  yearList[i].access_year +"</option>";
				}else{
					yearStr += "<option value='" + yearList[i].access_year + "' >";
					yearStr +=  yearList[i].access_year +"</option>";
				}
			}
			$("#selectYear").html(yearStr);
			var estimationList = result.estimationList;
			var estimationStr = "";
			for ( var i = 0; i < estimationList.length; i++) {
				estimationStr += "<option value='" + estimationList[i].id + "' >";
				estimationStr +=  estimationList[i].name +"</option>";
			}
			$("#selectEstimation").html(estimationStr);
			var specialityList=result.specialityList;
			var specialityStr = "";
			for ( var i = 0; i < specialityList.length; i++) {
				specialityStr += "<option value='" + specialityList[i].id + "' >";
				specialityStr +=  specialityList[i].specialty_name +"</option>";
			}
			$("#selectSpeciality").html(specialityStr);
			
			getChartData();
		},
		error : function() {
		}
	});
}
function getChartData(){
	var year=$('#selectYear option:selected').val();
	//设置当前年份
	document.cookie="assessYear="+year+";path=/";
	
	var estimationID=$('#selectEstimation  option:selected').val();
	$.ajax({
		url : "/audit/asAccessStatusController/getAnalysisAvgData.do",
		type : "POST",
		dataType : "json",
		/*data : {year:year,estimationID:estimationID,specialityID:specialityID},*/
		data : {
			year:year,
			estimationID:estimationID
		},
		success : function(data) {
			var result = eval("(" + data + ")");
			if (result.flag!=1) {
				return;
			}
			var analysisAvgList = result.analysisAvgList;
			var xAxisData = [];
			var seriesData = [];
			var series = {};
			series.name = i;
			series.type = "bar";
			series.barWidth=70;
			series.data = [];
			//var percData = [];
			var sumPerc=0;
			for(var i=0;i<analysisAvgList.length;i++){
				sumPerc+=analysisAvgList[i].perc;
				xAxisData.push(analysisAvgList[i].name+"("+analysisAvgList[i].score+"分)");//横坐标数据
				series.data.push(analysisAvgList[i].perc.toFixed(2));  //柱状图的值
			}
			xAxisData.push("总平均");
			series.data.push((sumPerc/analysisAvgList.length).toFixed(2));  //柱状图的值
			//option.series.data=percData;
			avgChart.clear();
			option.xAxis[0].data = xAxisData;
			
			series.itemStyle =  {
					normal : {
	                    color: function(params) {
	                        // build a color map as your need.
	                        var colorList = [
	                          '#98FB98','#B5C334','#8470FF','#E87C25','#27727B',
	                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
	                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
	                        ];
	                        return colorList[params.dataIndex]
	                    },
	                    label: {
	                        show: true,
	                        position: 'top',
	                        formatter: '{c}%'
	                    },
	                    barBorderRadius :[5, 5, 0, 0]
					}
				}
			
			seriesData.push(series);
			option.series = seriesData;
			avgChart.setOption(option);
			getSubAnalysis();
		},
		error : function() {
			alert("没有相应的指标数据");
		}
	});
}

function changeAvgAccessYear(){
	var year=$('#selectYear option:selected').val();
	$.ajax({
		url : "/audit/asAccessStatusController/changeAvgAccessYear.do",
		type : "POST",
		dataType : "json",
		data : {year:year},
		success : function(data) {
			var result = eval("(" + data + ")");
			if (result.flag!=1) {
				return;
			}
			var specialityList=result.specialityList;
			var specialityStr = "";
			for ( var i = 0; i < specialityList.length; i++) {
				specialityStr += "<option value='" + specialityList[i].id + "' >";
				specialityStr +=  specialityList[i].specialty_name +"</option>";
			}
			$("#selectSpeciality").html(specialityStr);
		},
		error : function() {
		}
	});
	getChartData();
}



var option = {
		backgroundColor : "#FFF",
	    tooltip : {
	        trigger: 'item',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    grid :{
	        height:'68%'
	    },
	    toolbox: {
	        show : true,
	        orient: 'vertical',
	        x: 'right',
	        y: 'center',
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            axisLabel:{
	                   rotate:38
	          	},
	            data : []
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [  {
	            name:2015,
	            type:'bar',
	            barWidth:70,
	            itemStyle: {
	                normal: {
	                    color: function(params) {
	                        // build a color map as your need.
	                        var colorList = [
	                          '#98FB98','#B5C334','#8470FF','#E87C25','#27727B',
	                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
	                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
	                        ];
	                        return colorList[params.dataIndex]
	                    },
	                    label: {
	                        show: true,
	                        position: 'top',
	                        formatter: '{c}%'
	                    },
	                    barBorderRadius :[5, 5, 0, 0]
	                }
	            },
	            data:[120, 132, 101, 134, 90, 230, 210]
	        }
	    ]
	};

var scoreList = new Array();
function getSubAnalysis(){
	var year=$('#selectYear option:selected').val();
	var estimationID=$('#selectEstimation  option:selected').val();
	$.ajax({
		url : "/audit/asAccessStatusController/subAnalysis.do",
		type : "POST",
		dataType : "json",
		data :{
			year : year,
			standardId : estimationID
		},
		success : function(data) {
			var result = eval("(" + data + ")");
			var standardList = result.data.standardList;
			var maxLength = result.data.maxLength;
			var list = result.data.list;
			scoreList = list;
			
			var theadHtml = "<tr>";
			for ( var i = 0; i < standardList.length; i++) {
				var standard = standardList[i];
				theadHtml +="<th>"+(i+1)+"."+standard.name+"</th>";
			}
			theadHtml +="</tr>";
			$("#and_head").html(theadHtml);
			
			var tbodyhtml = "";
			for ( var i = 0; i < maxLength; i++) {
				tbodyhtml +="<tr>";
				for ( var j = 0; j < standardList.length; j++) {
					var standard = standardList[j];
					var isExist = false;
					for ( var k = 0; k < list.length; k++) {
						var recond = list[k];
						if(recond.parentId == standard.id && recond.hasUse == null){
							var score = recond.score.toFixed(2);
							if(score > 85){
								tbodyhtml +="<td class='ana_green' onclick='showDetail("+recond.id+")'>"+recond.name+"</td>";
							}else if(parseFloat(85) >= parseFloat(score) && parseFloat(score) >= parseFloat(75)){
								tbodyhtml +="<td class='ana_yellow' onclick='showDetail("+recond.id+")'>"+recond.name+"</td>";
							}else{
								tbodyhtml +="<td class='ana_red' onclick='showDetail("+recond.id+")'>"+recond.name+"</td>";
							}
							recond.hasUse =1;
							isExist = true;
							break;
						}
					}
					if(!isExist){
						tbodyhtml +="<td></td>";
					}
				}
				tbodyhtml +="</tr>";
			}
			$("#and_body").html(tbodyhtml);
		}
	});
}

function showDetail(id){
	$("#myModal").modal('show');
	$("#detailScore").html("");
	var html = "";
	
	for ( var i = 0; i < scoreList.length; i++) {
		var recond = scoreList[i];
		if(id == recond.id){
			var list = recond.detail;
			var newScoreList = list;
			newScoreList.sort(sort);
			for ( var j = 0; j < newScoreList.length; j++) {
				var record = newScoreList[j];
				html +="<tr><td>"+record.academy_name+"</td>";
				html +="<td>"+record.specialty_name+"</td>";
				if(record.totalScore !=null && record.totalScore !=0){
					html +="<td>"+((record.score/record.totalScore)*100).toFixed(2)+"%</td>";
				}else{
					html +="<td>0.00%</td>";
				}
				if(record.score != null){
					html +="<td>"+record.score+"</td></tr>";
				}else{
					html +="<td>0</td></tr>";
				}
			}
		}
	}
	$("#detailScore").html(html);
}

function sort(record1, record2){
	if(record2.score == null){
		record2.score = 0;
	}
	
	if(record1.score < record2.score){
		return 1;
	}else if(record1.score > record2.score){
		return -1;
	}else{
		return 0;
	}
}