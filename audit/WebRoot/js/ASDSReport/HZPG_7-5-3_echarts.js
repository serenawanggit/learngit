var ASDS_table7_5_3ZY;
var record1 = {};
var record2 = {};
var record3 = {};
var record4 = {};
var record5 = {};
var record6 = {};
var record7 = {};
var record8 = {};


//提供显示控件
jQuery(function() {
	myInit();
});

function myInit(){
	ASDS_table7_5_3ZY = echarts.init(document.getElementById("hzpg_table7_5_3_JY"));
	
	init();// echarts控件初始化后初始化页面数据
	
	getImg(ASDS_table7_5_3ZY.getDataURL("png"),"hzpg_table7_5_3_zc_img.png");//获取图片
}

//初始化数据
function init(){
	ASDS_table7_5_3ZY.setOption(getRadarOption_ZY("/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm"));
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
function getRadarOption_ZY(url){
	ASDS_table7_5_3ZY.clear();
	$.ajax({
		url : url,
		type : "POST",
		data : {
			key : "ASDS_table7-5-3",
			year : $("#year").val()
		},
		async:false,
		success : function(data){
			var result = eval("("+data+")");
//			console.info("职称:"+result);
			record1.value = result[0][1];
			record1.name = '政府机构';
			
			record2.value = result[0][2];
			record2.name = '事业单位';
			
			record3.value = result[0][3];
			record3.name = '企业';
			
			record4.value = result[0][4];
			record4.name = '部队';
			
			record5.value = result[0][5];
			record5.name = '灵活就业';
			
			record6.value = result[0][6];
			record6.name = '升学';
			
			record7.value = result[0][7];
			record7.name = '参加国家地方项目就业';
			
			record8.value = result[0][8];
			record8.name = '其他';

			option.series[0].data=[record1,record2,record3,record4,record5,record6,record7,record8];
			option.title.text ="就业去向(人)";
			option.series.name="就业去向(人)";
			option.legend.data=['政府机构','事业单位','企业','部队','灵活就业','升学','参加国家地方项目就业','其他'];
		},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-zc_echarts.js");
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
                record1,record2,record3,record4,record5,record6,record7,record8
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
