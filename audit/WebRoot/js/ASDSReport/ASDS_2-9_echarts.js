var table_2_9_bt_age,table_2_9_bt_xw,table_2_9_bt_zc;
var record1 = {};
var record2 = {};
var record3 = {};
var record4 = {};
var record5 = {};

//提供显示控件
jQuery(function() {
	table_2_9_bt_age = echarts.init(document.getElementById("table_2_9_bt_age"));
	table_2_9_bt_xw = echarts.init(document.getElementById("table_2_9_bt_xw"));
	table_2_9_bt_zc = echarts.init(document.getElementById("table_2_9_bt_zc"));
	
	init();// echarts控件初始化后初始化页面数据
	
	getImg(table_2_9_bt_age.getDataURL("png"),"table_2_9_age_img.png");//获取图片
	getImg(table_2_9_bt_xw.getDataURL("png"),"table_2_9_xw_img.png");//获取图片
	getImg(table_2_9_bt_zc.getDataURL("png"),"table_2_9_zc_img.png");//获取图片
});
//初始化数据
function init(){
	table_2_9_bt_age.setOption(getRadarOption_age("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	table_2_9_bt_xw.setOption(getRadarOption_zgxw("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	table_2_9_bt_zc.setOption(getRadarOption_zc("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	
}

function getImg(img,fileName){
	$.ajax({
		async:false,
		url : "/CHART/GetASDSR_Table_Img",
		type : "POST",
		data : {"img_Base64":img,"img_Name": fileName},
		async:false,
		error:function(){
			alert("save img error.");
		}
	});
}
//请求数据
function getRadarOption_age(url){
	table_2_9_bt_age.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-9nl-bt",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
			record1.value = result[0][0];
			record1.name = '35岁以下';
			
			record2.value = result[0][2];
			record2.name = '36-45岁';
			
			record3.value = result[0][4];
			record3.name = '46-55岁';
			
			record4.value = result[0][6];
			record4.name = '56岁以上';
			
			option.series[0].data=[record1,record2,record3,record4];
			option.title.text ="年龄";
			option.series.name="年龄";
			option.legend.data=['35岁以下','36-45岁','46-55岁','56岁以上']
		},
		error:function(){
			alert("echarts:500 - asds_1-3-bt-zc_echarts.js");
		}
	});
	return option;
}

function getRadarOption_zgxw(url){
	table_2_9_bt_xw.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-9xw-bt",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("最高学位:"+result);
			record1.value = result[0][6];
			record1.name = '无学位';
			
			record2.value = result[0][4];
			record2.name = '学士';
			
			record3.value = result[0][2];
			record3.name = '硕士';
			
			record4.value = result[0][0];
			record4.name = '博士';
			
			option.series[0].data=[record1,record2,record3,record4];
			option.title.text="学位";
			option.series.name="学位";
			option.legend.data=['无学位','学士','硕士','博士']
			
		},
		error:function(){
			alert("echarts:500 - asds_1-3-bt-zgxw_echarts.js");
		}
	});
	return option;
}

function getRadarOption_zc(url){
	table_2_9_bt_zc.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-9zc-bt",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("年龄:"+result);
			record1.value = result[0][8];
			record1.name = '无职称教师';
			
			record2.value = result[0][6];
			record2.name = '初级教师';
			
			record3.value = result[0][4];
			record3.name = '中级教师';
			
			record4.value = result[0][2];
			record4.name = '副高级教师';

			record5.value = result[0][0];
			record5.name = '正高级教师';
			
			option.series[0].data=[record1,record2,record3,record4,record5];
			option.title.text="职称";
			option.series.name="职称";
			option.legend.data=['无职称教师','初级教师','中级教师','副高级教师','正高级教师']
		},
		error:function(){
			alert("echarts:500 - asds_1-3-bt-age_echarts.js");
		}
	});
	return option;
}

var option = {
    title : {
        text: '年龄',
    	x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:[]
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    animation:false,
    calculable : true,
    series : [
        {
            name:'',
            type:'pie',
            radius : '75%',
            center: ['50%', '55%'],
            data:[
                  record1,record2,record3,record4,record5
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b} : {c} ({d}%)"
                    }
                }
            }
        }
    ]
};
