var ASDS_table2_2_zc,ASDS_table2_2_xw,ASDS_table2_2_nl,ASDS_table2_2_xy;
var record1 = {};
var record2 = {};
var record3 = {};
var record4 = {};
var record5 = {};


//提供显示控件
jQuery(function() {
	myInit();
});

function myInit(){
	ASDS_table2_2_zc = echarts.init(document.getElementById("ASDS_table2_2_zc"));
	ASDS_table2_2_xw = echarts.init(document.getElementById("ASDS_table2_2_xw"));
	ASDS_table2_2_nl = echarts.init(document.getElementById("ASDS_table2_2_nl"));
	ASDS_table2_2_xy = echarts.init(document.getElementById("ASDS_table2_2_xy"));
	
	init();// echarts控件初始化后初始化页面数据
	
	getImg(ASDS_table2_2_zc.getDataURL("png"),"table_2_2_zc_img.png");//获取图片
	getImg(ASDS_table2_2_xw.getDataURL("png"),"table_2_2_zgxw_img.png");//获取图片
	getImg(ASDS_table2_2_nl.getDataURL("png"),"table_2_2_age_img.png");//获取图片
	getImg(ASDS_table2_2_xy.getDataURL("png"),"table_2_2_xy_img.png");//获取图片
}

//初始化数据
function init(){
	ASDS_table2_2_zc.setOption(getRadarOption_zc("/CHART/collegeReport/collegeReport_collegeGetListByYear.htm"));
	ASDS_table2_2_xw.setOption(getRadarOption_zgxw("/CHART/collegeReport/collegeReport_collegeGetListByYear.htm"));
	ASDS_table2_2_nl.setOption(getRadarOption_age("/CHART/collegeReport/collegeReport_collegeGetListByYear.htm"));
	ASDS_table2_2_xy.setOption(getRadarOption_xy("/CHART/collegeReport/collegeReport_collegeGetListByYear.htm"));
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
			key : "ASDS_table2-2-zc",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("职称:"+result);
			record1.value = result[0][0];
			record1.name = '正高级';
			
			record2.value = result[0][1];
			record2.name = '副高级';
			
			record3.value = result[0][2];
			record3.name = '中级';
			
			record4.value = result[0][3];
			record4.name = '初级';

			option.series[0].data=[record1,record2,record3,record4];
			option.title.text ="职称结构";
			option.series.name="职称结构";
			option.legend.data=['正高级','副高级','中级','初级'];
		},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-zc_echarts.js");
		}
	});
	return option;
}

function getRadarOption_zgxw(url){
	ASDS_table2_2_xw.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-2-xw",
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
			record3.name = '学士及以下';
			
			/*record4.value = result[0][3];
			record4.name = '无学位教师数';*/
			
			option.series[0].data=[record1,record2,record3];
			option.title.text="学位结构";
			option.series.name="学位结构";
			option.legend.data=['博士学位教师数','硕士学位教师数','学士学位教师数']
			
		},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-zgxw_echarts.js");
		}
	});
	return option;
}

function getRadarOption_age(url){
	ASDS_table2_2_nl.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-2-nl",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("年龄:"+result);
			record1.value = result[0][0];
			record1.name = '35岁及以下教师数';
			
			record2.value = result[0][1];
			record2.name = '专任教师36-45岁教师数';
			
			record3.value = result[0][2];
			record3.name = '专任教师46-55岁教师数';
			
			record4.value = result[0][3];
			record4.name = '专任教师56岁以上教师数';
			
			option.series[0].data=[record1,record2,record3,record4];
			option.title.text="年龄结构";
			option.series.name="年龄结构";
			option.legend.data=['35岁及以下教师数','专任教师36-45岁教师数','专任教师46-55岁教师数','专任教师56岁以上教师数']
		},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-age_echarts.js");
		}
	});
	return option;
}

function getRadarOption_xy(url){
	ASDS_table2_2_xy.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table2-2-xy",
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
			option.title.text="学缘结构";
			option.series.name="学缘结构";
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
