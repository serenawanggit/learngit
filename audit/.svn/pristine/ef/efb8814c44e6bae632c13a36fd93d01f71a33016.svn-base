
//提供显示控件
jQuery(function() {
	myInit();
});

function myInit(){
	table_2_2_bt_zc = echarts.init(document.getElementById("table_2_2_bt_zc"));
	table_2_2_bt_zgxw = echarts.init(document.getElementById("table_2_2_bt_zgxw"));
	table_2_2_bt_age = echarts.init(document.getElementById("table_2_2_bt_age"));
	table_2_2_bt_xy = echarts.init(document.getElementById("table_2_2_bt_xy"));
	
	init();// echarts控件初始化后初始化页面数据
	
	getImg(table_2_2_bt_zc.getDataURL("png"),"table_2_2_zc_img.png");//获取图片
	getImg(table_2_2_bt_zgxw.getDataURL("png"),"table_2_2_zgxw_img.png");//获取图片
	getImg(table_2_2_bt_age.getDataURL("png"),"table_2_2_age_img.png");//获取图片
	getImg(table_2_2_bt_xy.getDataURL("png"),"table_2_2_xy_img.png");//获取图片
}
//初始化数据
function init(){
	table_2_2_bt_zc.setOption(getRadarOption_zc("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	table_2_2_bt_zgxw.setOption(getRadarOption_zgxw("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	table_2_2_bt_age.setOption(getRadarOption_age("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
	table_2_2_bt_xy.setOption(getRadarOption_xy("/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm"));
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
	table_2_2_bt_zc.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-2-qy-zc",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("职称:"+result);
			record1.value = result[0][0];
			record1.name = '教授';
			
			record2.value = result[0][1];
			record2.name = '副教授';
			
			record3.value = result[0][2];
			record3.name = '讲师';
			
			record4.value = result[0][3];
			record4.name = '助教';

			record5.value = result[0][4];
			record5.name = '其他正高级';
			
			record6.value = result[0][5];
			record6.name = '其他副高级';
			
			record7.value = result[0][6];
			record7.name = '其他中级';
			
			record8.value = result[0][7];
			record8.name = '其他初级';
			
			record9.value = result[0][8];
			record9.name = '未评级';
			
			option.series[0].data=[record1,record2,record3,record4,record5,record6,record7,record8,record9];
			option.title.text ="职称";
			option.series.name="职称";
			option.legend.data=['教授','副教授','讲师','助教','其他正高级','其他副高级','其他中级','其他初级','未评级']
		},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-zc_echarts.js");
		}
	});
	return option;
}

function getRadarOption_zgxw(url){
	table_2_2_bt_zgxw.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-2-qy-zgxw",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("最高学位:"+result);
			record1.value = result[0][0];
			record1.name = '博士学位教师数';
			
			record2.value = result[0][1];
			record2.name = '硕士学位教师数';
			
			record3.value = result[0][2];
			record3.name = '学士学位教师数';
			
			record4.value = result[0][3];
			record4.name = '无学位教师数';
			
			option.series[0].data=[record1,record2,record3,record4];
			option.title.text="最高学位";
			option.series.name="最高学位";
			option.legend.data=['博士学位教师数','硕士学位教师数','学士学位教师数','无学位教师数']
			
		},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-zgxw_echarts.js");
		}
	});
	return option;
}

function getRadarOption_age(url){
	table_2_2_bt_age.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-2-qy-age",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("年龄:"+result);
			record1.value = result[0][0];
			record1.name = '35岁及以下教师数';
			
			record2.value = result[0][1];
			record2.name = '外聘教师36-45岁教师数';
			
			record3.value = result[0][2];
			record3.name = '外聘教师46-55岁教师数';
			
			record4.value = result[0][3];
			record4.name = '外聘教师56岁以上教师数';
			
			option.series[0].data=[record1,record2,record3,record4];
			option.title.text="年龄";
			option.series.name="年龄";
			option.legend.data=['35岁及以下教师数','外聘教师36-45岁教师数','外聘教师46-55岁教师数','外聘教师56岁以上教师数']
		},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-age_echarts.js");
		}
	});
	return option;
}

function getRadarOption_xy(url){
	table_2_2_bt_xy.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-2-qy-xy",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("学缘:"+result);
			record1.value = result[0][0];
			record1.name = '本校学缘教师数';
			
			record2.value = result[0][1];
			record2.name = '外校(境内)学缘教师数';
			
			record3.value = result[0][2];
			record3.name = '外校(境外)学缘教师数';
			
			option.series[0].data=[record1,record2,record3];
			option.title.text="学缘";
			option.series.name="学缘";
			option.legend.data=['本校学缘教师数','外校(境内)学缘教师数','外校(境外)学缘教师数']
		},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-xy_echarts.js");
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
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                  record1,record2,record3,record4,record5,record6,record7,record8,record9
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
