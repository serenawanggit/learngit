var ASDS_2_1;
var numData,percentageData;//数量data,百分比data
//提供显示控件
jQuery(function() {
	ASDS_2_1 = echarts.init(document.getElementById("ASDS_2_1"));
	init();// echarts控件初始化后初始化页面数据
});
//初始化数据
function init(){
	
	ASDS_2_1.setOption(getRadarOption("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	/*$("#bodyDiv2").append("<img src='"+ASDS_2_1.getDataURL("png").replace(/\+/,'')+"'/>");*/
/*	ASDS_2_1.getDataURL("png").replace(/\+/,'');*/
}
//请求数据
function getRadarOption(url){
	ASDS_2_1.clear();
	$.ajax({
		url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
		type : "POST",
		data : {
			key : "ASDS_table2-1",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
			numData=result[0][0]+","+result[0][3]+","+result[0][1]+","+result[0][5]+","+result[0][7]+","+result[0][9]+","+result[0][11]+","+result[0][12]+","+result[0][14]+","+valueFormat(result[0][15],3)+","+result[0][16];
			percentageData=0+","+valueFormat(result[0][4],3)+","+valueFormat(result[0][2],3)+","+valueFormat(result[0][6],3)+","+valueFormat(result[0][8],3)+","+valueFormat(result[0][10],3)+",0,"+valueFormat(result[0][13],3)+",0,0,0";
			option.series[0].data=numData.split(",");
			option.series[1].data=percentageData.split(",");
		},
		error:function(){
			alert("echarts:500 - asds_2-1_echarts.js");
		}
	});
	return option;
}

var option = {
	    title : {
	        text: '学校生师比及教师情况',
	        subtext: '教师队伍'
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    animation:false,
	    legend: {
	        data:['数量','百分比']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: false},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            axisLabel:{
	                   rotate:15,
	                   interval:0
	          	},
	            data : ['专任教师数-总计','专任教师数-其中：具有硕士学位','专任教师数-具有博士学位','专任教师数-双师型','专任教师数-具有工程背景','专任教师数-具有行业背景','外聘教师-总计','外聘教师-其中：境外教师','折合在校生数','生师比','本科课程授课教师数']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'数量',
	            type:'bar',
	            data:[],
	            itemStyle: {
	                normal: {
	                    label : {
	                        show: true, position: 'top'
	                    }
	                }
	            }
	        },
	        {
	            name:'百分比',
	            type:'bar',
	            data:[],
	            itemStyle: {
	                normal: {
	                    label : {
	                        show: true, position: 'top'
	                    }
	                }
	            }
	        }
	    ]
};