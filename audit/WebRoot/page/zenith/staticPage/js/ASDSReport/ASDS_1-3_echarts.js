var table_1_3_bt_zc,table_1_3_bt_zgxw,table_1_3_bt_age;
var record1 = {};
var record2 = {};
var record3 = {};
var record4 = {};
var record5 = {};

//提供显示控件
jQuery(function() {
	table_1_3_bt_zc = echarts.init(document.getElementById("table_1_3_bt_zc"));
	table_1_3_bt_zgxw = echarts.init(document.getElementById("table_1_3_bt_zgxw"));
	table_1_3_bt_age = echarts.init(document.getElementById("table_1_3_bt_age"));
	
	init();// echarts控件初始化后初始化页面数据
	
	getImg(table_1_3_bt_zc.getDataURL("png"),"table_1_3_zc_img.png");//获取图片
	getImg(table_1_3_bt_zgxw.getDataURL("png"),"table_1_3_zgxw_img.png");//获取图片
	getImg(table_1_3_bt_age.getDataURL("png"),"table_1_3_age_img.png");//获取图片
	
});
//初始化数据
function init(){
	table_1_3_bt_zc.setOption(getRadarOption_zc("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	table_1_3_bt_zgxw.setOption(getRadarOption_zgxw("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	table_1_3_bt_age.setOption(getRadarOption_age("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	
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
function getRadarOption_zc(url){
	table_1_3_bt_zc.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table1-3-bt-zc",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("职称:"+result);
			record1.value = result[0][0];
			record1.name = '正高级校级教学管理人员数';
			
			record2.value = result[0][1];
			record2.name = '副高级校级教学管理人员数';
			
			record3.value = result[0][2];
			record3.name = '中级校级教学管理人员数';
			
			record4.value = result[0][3];
			record4.name = '初级校级教学管理人员数';
			
			record5.value = result[0][4];
			record5.name = '无职称校级教学管理人员数';
			
			option.series[0].data=[record1,record2,record3,record4,record5];
			option.title.text ="职称";
			option.series.name="职称";
			option.legend.data=['正高级校级教学管理人员数','副高级校级教学管理人员数','中级校级教学管理人员数','初级校级教学管理人员数','无职称校级教学管理人员数']
		},
		error:function(){
			alert("echarts:500 - asds_1-3-bt-zc_echarts.js");
		}
	});
	return option;
}

function getRadarOption_zgxw(url){
	table_1_3_bt_zgxw.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table1-3-bt-zgxw",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("最高学位:"+result);
			record1.value = result[0][0];
			record1.name = '博士校级教学管理人员数';
			
			record2.value = result[0][1];
			record2.name = '硕士校级教学管理人员数';
			
			record3.value = result[0][2];
			record3.name = '学士校级教学管理人员数';
			
			record4.value = result[0][3];
			record4.name = '无学位校级教学管理人员数';
			
			option.series[0].data=[record1,record2,record3,record4];
			option.title.text="最高学位";
			option.series.name="最高学位";
			option.legend.data=['博士校级教学管理人员数','硕士校级教学管理人员数','学士校级教学管理人员数','无学位校级教学管理人员数']
			
		},
		error:function(){
			alert("echarts:500 - asds_1-3-bt-zgxw_echarts.js");
		}
	});
	return option;
}

function getRadarOption_age(url){
	table_1_3_bt_age.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table1-3-bt-nl",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("年龄:"+result);
			record1.value = result[0][0];
			record1.name = '35岁以下校级教学管理人员数';
			
			record2.value = result[0][1];
			record2.name = '36岁-45岁校级教学管理人员数';
			
			record3.value = result[0][2];
			record3.name = '46岁-55岁校级教学管理人员数';
			
			record4.value = result[0][3];
			record4.name = '56岁以上校级教学管理人员数';
			
			option.series[0].data=[record1,record2,record3,record4];
			option.title.text="年龄";
			option.series.name="年龄";
			option.legend.data=['35岁以下校级教学管理人员数','36岁-45岁校级教学管理人员数','46岁-55岁校级教学管理人员数','56岁以上校级教学管理人员数']
		},
		error:function(){
			alert("echarts:500 - asds_1-3-bt-age_echarts.js");
		}
	});
	return option;
}

var option = {
    title : {
        text: '职称',
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
