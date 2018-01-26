var ASDS_table2_2_zc;
var record1 = {};
var record2 = {};
var record3 = {};
var record4 = {};
var record5 = {};
var record6 = {};
var record7 = {};
var record8 = {};
var record9 = {};
var record10 = {};
var record11 = {};
var record12 = {};
var record13 = {};



//提供显示控件
jQuery(function() {
	myInit();
});

function myInit(){
	ASDS_table2_2_zc = echarts.init(document.getElementById("hzpg_table2_1_2_zc"));
	
	init();// echarts控件初始化后初始化页面数据
	
	getImg(ASDS_table2_2_zc.getDataURL("png"),"hzpg_table2_1_2_zc_img.png");//获取图片
}
//初始化数据
function init(){
	ASDS_table2_2_zc.setOption( getRadarOption_zc("/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm"));
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
//请求数据
function getRadarOption_zc(url){
	ASDS_table2_2_zc.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-1-2-zt",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("职称:"+result);
			record1.value = result[0][0];
			record1.name = '教授';
			
			record2.value = result[0][1];
			record2.name = '副讲师';
			
			record3.value = result[0][2];
			record3.name = '讲师';
			
			record4.value = result[0][3];
			record4.name = '助教';
			
			record5.value = result[0][4];
			record5.name = '无职称';
			
			record6.value = result[0][5];
			record6.name = '博士';
			
			record7.value = result[0][6];
			record7.name = '硕士';
			
			record8.value = result[0][7];
			record8.name = '学士';
			
			record9.value = result[0][8];
			record9.name = '无学位';
			
			record10.value = result[0][9];
			record10.name = '35岁以下';
			
			record11.value = result[0][10];
			record11.name = '36-45';
			
			record12.value = result[0][11];
			record12.name = '46-55';
			
			record13.value = result[0][12];
			record13.name = '56岁以上';

			/*option.series[0].data=[record1,record2,record3,record4,,record5,record6,record7,record8,record9,record10,record11,record12,record13];
			option.title.text ="教师队伍职称、学位、年龄分布";
			option.series.name="教师队伍职称、学位、年龄分布";
			option.legend.data=['教授','副教授','讲师','助教',,'无职称','博士','硕士',,'学士','无学位','35岁以下',,'36-45','46-55','56岁以上'];
		*/},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-zc_echarts.js");
		}
	});
	return option;
}


var option =  {
		color: ['#3398DB'],
	    title : {
	        text: '教师队伍职称、学位、年龄分布',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            mark : {show: true},
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
	            data : ['教授','副教授','讲师','助教','无职称','博士','硕士','学士','无学位','35岁以下','36-45','46-55','56岁以上']
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
	            barWidth:30,
	            data:[record1,record2,record3,record4,record5,record6,record7,record8,record9,record10,record11,record12,record13],
	              markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            } 
	        }
	    ]
	};
