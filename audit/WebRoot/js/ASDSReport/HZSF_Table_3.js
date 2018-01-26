var ASDS_table2_2_zc,ASDS_table2_2_2zc;
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
function myInit(){
	ASDS_table2_2_zc = echarts.init(document.getElementById("HZSH_Table2_2"));
	ASDS_table2_2_zc.setOption(getRadarOption_zc("/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm"));
	
	ASDS_table2_2_2zc = echarts.init(document.getElementById("HZSH_Table2_3"));
	ASDS_table2_2_2zc.setOption(getRadarOption_zc_a("/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm"));
	
	//getImg(ASDS_table2_2_zc.getDataURL("png"),"hzpg_table2_1_2_zc_img.png");//获取图片

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
	return options;
}

function getRadarOption_zc_a(url){
	ASDS_table2_2_2zc.clear();
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
	return options;
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

option = {
	    title : {
	        text: '某地区蒸发量和降水量',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['蒸发量','降水量']
	    },
	    toolbox: {
	        show : true,
	        feature : {
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
	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'蒸发量',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
	        },
	        {
	            name:'降水量',
	            type:'bar',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
	            markPoint : {
	                data : [
	                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
	                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name : '平均值'}
	                ]
	            }
	        }
	    ]
	};
var options =  {
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
