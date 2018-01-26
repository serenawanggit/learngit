var HZSF_Table2_A,HZSF_Table2_B,HZSF_Table2_C,HZSF_Table2_D,HZSF_Table2_E;
var titleName=[];
var contentA=[];
var contentB=[];

//提供显示控件
function myInit(){
	HZSF_Table2_A = echarts.init(document.getElementById("HZSH_Table2_2"));
	titleName.push("10");
	titleName.push("20");
	titleName.push("30");
	titleName.push("40");
	titleName.push("50");
	titleName.push("60");
	titleName.push("70");
	titleName.push("80");
	titleName.push("90");
	titleName.push("10");
	titleName.push("11");
	titleName.push("12");
	HZSF_Table2_A.setOption(option);
	
	HZSF_Table2_B = echarts.init(document.getElementById("HZSH_Table2_3"));
	HZSF_Table2_B.setOption(option);
	
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

function getRadarOption_A(url){
	HZSF_Table2_A.clear();
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
		},
		error:function(){
			alert("echarts:500 - asds_2-2-bt-zc_echarts.js");
		}
	});
	return options;
}
function getRadarOption_B(url){
	
}
function getRadarOption_C(url){
	
}
function getRadarOption_D(url){
	
}
function getRadarOption_E(url){
	
}

option = {
	    title : {
	        text: '某地区蒸发量和降水量',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['2014','2015']
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
	            name:'2014',
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
	            name:'2015',
	            type:'bar',
	            data:titleName,
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