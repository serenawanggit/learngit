var report_data_1_xy = [];
var report_data_1 = [];
var report_data_2_1 = 0;
var report_data_2_2 = 0;
var report_data_2_3 = 0;
var report_data_4_xy = [];
var report_data_4 = [];
var report_data_5_xy = [];
var report_data_5 = [];
var report_data_7_kc = [];
var report_data_7 = [];

var myChart;// = echarts.init(document.getElementById('table_1_3_bt_zc'));
var myChart_1;// = echarts.init(document.getElementById('container_1'));
var myChart_2;// = echarts.init(document.getElementById('container_2'));
var myChart_3;// = echarts.init(document.getElementById('container_2'));
var myChart_4;// = echarts.init(document.getElementById('container_4'));
var myChart_5;// = echarts.init(document.getElementById('container_5'));
var myChart_6;// = echarts.init(document.getElementById('container_4'));
var myChart_7;// = echarts.init(document.getElementById('container_5'));

$(function() {
	var date = new Date()
	var year = date.getFullYear();
    var month = date.getMonth()+1;    //js从0开始取 
    var date1 = date.getDate(); 
	$("#showDate").html(year+"年"+month+"月"+date1+"日");
	
	myChart = echarts.init(document.getElementById('container_1_1'));
	myChart_1 = echarts.init(document.getElementById('container_1'));
	myChart_2 = echarts.init(document.getElementById('container_2'));
	myChart_3 = echarts.init(document.getElementById('container_3'));
	myChart_4 = echarts.init(document.getElementById('container_4'));
	myChart_5 = echarts.init(document.getElementById('container_5'));
	myChart_6 = echarts.init(document.getElementById('container_6'));
	myChart_7 = echarts.init(document.getElementById('container_7'));
//	//1、学生评教参与情况分析
	getOneZhuzhuangtu();
//	//2、学生评教指标体系与结果
	showTwoData();
//	//4、全校范围内学生评教得分后50名的课堂
	showFour();
//	//5、全校范围内学生评教得分满分的课堂（6名）
	showFive();
//	//7、基于课程性质/类别的学生评价分析
	showSeven();
//	//5、全校范围内学生评教得分满分的课堂（6名）
	showSix();
//	//7、基于课程性质/类别的学生评价分析
	showSeven_1();
	
//	getData();
//	
//	showYear();
//	
//	$("#year").change(function(){
//		getData();
//		showYear();
//	})
//	
//	//合并内容相同的单元格
//	_w_table_rowspan("#tab_4_2",1);
//	_w_table_rowspan("#tab_4_2",2);
	
});





function downupload() {
	$("#upload_img").show();
	getImg(myChart.getDataURL("png"), "report_data_wsl_1_img.png");//获取图片
	getImg(myChart_1.getDataURL("png"), "report_data_wsl_2_img.png");//获取图片
	getImg(myChart_2.getDataURL("png"), "report_data_wsl_4_img.png");//获取图片
	getImg(myChart_3.getDataURL("png"), "report_data_wsl_3_img.png");//获取图片
	getImg(myChart_4.getDataURL("png"), "report_data_wsl_5_img.png");//获取图片
	getImg(myChart_5.getDataURL("png"), "report_data_wsl_7_img.png");//获取图片
	
	$("#table_1_3_bt_zc").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_wsl_1_img.png'/>");
	$("#container_1").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_wsl_2_img.png'/>");
	$("#container_2").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_wsl_4_img.png'/>");
	$("#container_3").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_wsl_3_img.png'/>");
	$("#container_4").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_wsl_5_img.png'/>");
	$("#container_5").html("<img src='"+getTomcatRootPath()+"/CHART/images/ASDS_img_glv/report_data_wsl_7_img.png'/>");
	
	var html2 = $("#bodyDiv1").html();
	var html2 = document.getElementById("bodyDiv1").innerHTML;//outerHTML;
	html2 = html2.replace(new RegExp("(<img [^<>]*>)", "gm"), "$1</img>");

	$.ajax({
		url : getRootPath() + "/CHART/poiWord",///CHART/itext
		type : "POST",
		data : {
			"bodyData" : html2,
			"versionsID":4,
			"wordName":"本科教学学生评教数据统计分析报告"
		},
		async : false,
		success : function(dateString) {
			if (dateString != "error") {
				var html = "";
				html = "<form id=\"formid\" action=\""
						+ getRootPath()
						+ "/CHART/poiWordUpload\" method=\"post\"><input type=\"hidden\" id=\"filename\" name=\"filename\" value='本科教学学生评教数据统计分析报告'></input><input type=\"hidden\" id=\"dateString\" name=\"dateString\" value='"+dateString+"'></input></form>";
				$("body").append(html);
				$("#formid").submit();
				$("#formid").remove();
				$("#upload_img").fadeOut(1000);
			} else {
				alert("历史纪录 insert...错误");
			}
		}
	});
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


function getTomcatRootPath()  
{  
   var pathName = window.location.pathname.substring(1);  
   var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));  
   return window.location.protocol + '//' + window.location.host;// + '/'+ webName;  
}  

function getRootPath() {
	//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
	var curWwwPath = window.document.location.href;
	//获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	//获取主机地址，如： http://localhost:8083
	var localhostPaht = curWwwPath.substring(0, pos);
	//获取带"/"的项目名，如：/uimcardprj
	var projectName = pathName.substring(0,
			pathName.substr(1).indexOf('/') + 1);
	return localhostPaht;
}

function getOneZhuzhuangtu(){
	//1、学生评教参与情况分析
		// 自定义option数据：
		option = {
//				title: {
//			        text: '折线图堆叠'
//			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['湖州师范学院']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data: ['2012','2013','2014','2015','2016']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    series: [
			        {
			            name:'湖州师范学院',
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190]
			        }
			    ]
		};
		// 为echarts对象加载数据：
		myChart.setOption(option);
}

function showTwoData(){
	//2、学生评教指标体系与结果
	option = {
		    title: {
		        text: '折线图堆叠'
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['绍兴文理学院','浙江科技学院','湖州师范学院','台州学院','浙江海洋学院','嘉兴学院']
		    },
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    toolbox: {
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['2012','2013','2014','2015','2016']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [
		        {
		            name:'绍兴文理学院',
		            type:'line',
		            stack: '总量',
		            data:[120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name:'浙江科技学院',
		            type:'line',
		            stack: '总量',
		            data:[220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name:'湖州师范学院',
		            type:'line',
		            stack: '总量',
		            data:[150, 232, 201, 154, 190, 330, 410]
		        },
		        {
		            name:'台州学院',
		            type:'line',
		            stack: '总量',
		            data:[320, 332, 301, 334, 390, 330, 320]
		        },
		        {
		            name:'浙江海洋学院',
		            type:'line',
		            stack: '总量',
		            data:[460, 230, 250, 301, 150, 411, 315]
		        },
		        {
		            name:'嘉兴学院',
		            type:'line',
		            stack: '总量',
		            data:[419, 320, 105, 413, 235, 300, 144]
		        }
		    ]
		};
	myChart_1.setOption(option);
}

function showFour(){
	//4、全校范围内学生评教得分后50名的课堂
	// 自定义option数据：
		option_2 = {
				title: {
			        text: '折线图堆叠'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['绍兴文理学院','浙江科技学院','湖州师范学院','台州学院','浙江海洋学院','嘉兴学院']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    toolbox: {
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data: ['2012','2013','2014','2015','2016']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    series: [
			        {
			            name:'绍兴文理学院',
			            type:'line',
			            stack: '总量',
			            data:[120, 132, 101, 134, 90, 230, 210]
			        },
			        {
			            name:'浙江科技学院',
			            type:'line',
			            stack: '总量',
			            data:[220, 182, 191, 234, 290, 330, 310]
			        },
			        {
			            name:'湖州师范学院',
			            type:'line',
			            stack: '总量',
			            data:[150, 232, 201, 154, 190, 330, 410]
			        },
			        {
			            name:'台州学院',
			            type:'line',
			            stack: '总量',
			            data:[320, 332, 301, 334, 390, 330, 320]
			        },
			        {
			            name:'浙江海洋学院',
			            type:'line',
			            stack: '总量',
			            data:[460, 230, 250, 301, 150, 411, 315]
			        },
			        {
			            name:'嘉兴学院',
			            type:'line',
			            stack: '总量',
			            data:[419, 320, 105, 413, 235, 300, 144]
			        }
			    ]
		};
		// 为echarts对象加载数据：
		myChart_2.setOption(option_2);
		myChart_3.setOption(option_2);
}

function showFive(){
	//5、全校范围内学生评教得分满分的课堂（6名）
	// 自定义option数据：
	option_4 = {
			tooltip: { trigger: 'axis'},
		    legend: { data:['绍兴文理学院','浙江科技学院','湖州师范学院','台州学院','浙江海洋学院','嘉兴学院']},
		    grid: {left: '3%',right: '4%',bottom: '3%',containLabel: true},
		    toolbox: { feature: {saveAsImage: {}}},
		    xAxis: {
		        type: 'category',boundaryGap: false,data: ['2012','2013','2014','2015','2016']
		    },
		    yAxis: {type: 'value'},
		    series: [
		        {name:'绍兴文理学院',type:'line',stack: '总量',data:[120, 132, 101, 134, 90, 230, 210]},
		        { name:'浙江科技学院',type:'line',stack: '总量', data:[220, 182, 191, 234, 290, 330, 310]},
		        { name:'湖州师范学院',type:'line',  stack: '总量', data:[150, 232, 201, 154, 190, 330, 410]},
		        {name:'台州学院',type:'line',stack: '总量',data:[320, 332, 301, 334, 390, 330, 320]},
		        { name:'浙江海洋学院',type:'line',stack: '总量',data:[460, 230, 250, 301, 150, 411, 315]},
		        {name:'嘉兴学院',  type:'line', stack: '总量', data:[419, 320, 105, 413, 235, 300, 144]}
		    ]
		};
		// 为echarts对象加载数据：
		myChart_4.setOption(option_4);
}

function showSeven(){
	//7、基于课程性质/类别的学生评价分析
	// 自定义option数据：
	option_5 = {
			tooltip: { trigger: 'axis'},
		    legend: { data:['绍兴文理学院','浙江科技学院','湖州师范学院','台州学院','浙江海洋学院','嘉兴学院']},
		    grid: {left: '3%',right: '4%',bottom: '3%',containLabel: true},
		    toolbox: { feature: {saveAsImage: {}}},
		    xAxis: {
		        type: 'category',boundaryGap: false,data: ['2012','2013','2014','2015','2016']
		    },
		    yAxis: {type: 'value'},
		    series: [
		        {name:'绍兴文理学院',type:'line',stack: '总量',data:[120, 132, 101, 134, 90, 230, 210]},
		        { name:'浙江科技学院',type:'line',stack: '总量', data:[220, 182, 191, 234, 290, 330, 310]},
		        { name:'湖州师范学院',type:'line',  stack: '总量', data:[150, 232, 201, 154, 190, 330, 410]},
		        {name:'台州学院',type:'line',stack: '总量',data:[320, 332, 301, 334, 390, 330, 320]},
		        { name:'浙江海洋学院',type:'line',stack: '总量',data:[460, 230, 250, 301, 150, 411, 315]},
		        {name:'嘉兴学院',  type:'line', stack: '总量', data:[419, 320, 105, 413, 235, 300, 144]}
		    ]
	};
	// 为echarts对象加载数据：
	myChart_5.setOption(option_5);
}

function showSix(){
	//5、全校范围内学生评教得分满分的课堂（6名）
	// 自定义option数据：
	option_4 = {
			tooltip: { trigger: 'axis'},
		    legend: { data:['绍兴文理学院','浙江科技学院','湖州师范学院','台州学院','浙江海洋学院','嘉兴学院']},
		    grid: {left: '3%',right: '4%',bottom: '3%',containLabel: true},
		    toolbox: { feature: {saveAsImage: {}}},
		    xAxis: {
		        type: 'category',boundaryGap: false,data: ['2012','2013','2014','2015','2016']
		    },
		    yAxis: {type: 'value'},
		    series: [
		        {name:'绍兴文理学院',type:'line',stack: '总量',data:[120, 132, 101, 134, 90, 230, 210]},
		        { name:'浙江科技学院',type:'line',stack: '总量', data:[220, 182, 191, 234, 290, 330, 310]},
		        { name:'湖州师范学院',type:'line',  stack: '总量', data:[150, 232, 201, 154, 190, 330, 410]},
		        {name:'台州学院',type:'line',stack: '总量',data:[320, 332, 301, 334, 390, 330, 320]},
		        { name:'浙江海洋学院',type:'line',stack: '总量',data:[460, 230, 250, 301, 150, 411, 315]},
		        {name:'嘉兴学院',  type:'line', stack: '总量', data:[419, 320, 105, 413, 235, 300, 144]}
		    ]
		};
		// 为echarts对象加载数据：
		myChart_6.setOption(option_4);
}

function showSeven_1(){
	//7、基于课程性质/类别的学生评价分析
	// 自定义option数据：
	option_5 = {
			tooltip: { trigger: 'axis'},
		    legend: { data:['绍兴文理学院','浙江科技学院','湖州师范学院','台州学院','浙江海洋学院','嘉兴学院']},
		    grid: {left: '3%',right: '4%',bottom: '3%',containLabel: true},
		    toolbox: { feature: {saveAsImage: {}}},
		    xAxis: {
		        type: 'category',boundaryGap: false,data: ['2012','2013','2014','2015','2016']
		    },
		    yAxis: {type: 'value'},
		    series: [
		        {name:'绍兴文理学院',type:'line',stack: '总量',data:[120, 132, 101, 134, 90, 230, 210]},
		        { name:'浙江科技学院',type:'line',stack: '总量', data:[220, 182, 191, 234, 290, 330, 310]},
		        { name:'湖州师范学院',type:'line',  stack: '总量', data:[150, 232, 201, 154, 190, 330, 410]},
		        {name:'台州学院',type:'line',stack: '总量',data:[320, 332, 301, 334, 390, 330, 320]},
		        { name:'浙江海洋学院',type:'line',stack: '总量',data:[460, 230, 250, 301, 150, 411, 315]},
		        {name:'嘉兴学院',  type:'line', stack: '总量', data:[419, 320, 105, 413, 235, 300, 144]}
		    ]
	};
	// 为echarts对象加载数据：
	myChart_7.setOption(option_5);
}

//合并内容相同的单元格
function _w_table_rowspan(_w_table_id,_w_table_colnum){
    _w_table_firsttd = "";
    _w_table_currenttd = "";
    _w_table_SpanNum = 0;
    _w_table_Obj = $(_w_table_id + " tr td:nth-child(" + _w_table_colnum + ")");
    _w_table_Obj.each(function(i){
        if(i==0){
            _w_table_firsttd = $(this);
            _w_table_SpanNum = 1;
        }else{
            _w_table_currenttd = $(this);
            if(_w_table_firsttd.text()==_w_table_currenttd.text()){
                _w_table_SpanNum++;
//                _w_table_currenttd.hide();
                _w_table_currenttd.remove();
                _w_table_firsttd.attr("rowSpan",_w_table_SpanNum);
            }else{
                _w_table_firsttd = $(this);
                _w_table_SpanNum = 1;
            }
        }
    }); 
}
function _w_table_colspan(_w_table_id,_w_table_rownum,_w_table_maxcolnum){
    if(_w_table_maxcolnum == void 0){_w_table_maxcolnum=0;}
    _w_table_firsttd = "";
    _w_table_currenttd = "";
    _w_table_SpanNum = 0;
    $(_w_table_id + " tr:nth-child(" + _w_table_rownum + ")").each(function(i){
        _w_table_Obj = $(this).children();
        _w_table_Obj.each(function(i){
            if(i==0){
                _w_table_firsttd = $(this);
                _w_table_SpanNum = 1;
            }else if((_w_table_maxcolnum>0)&&(i>_w_table_maxcolnum)){
                return "";
            }else{
                _w_table_currenttd = $(this);
                if(_w_table_firsttd.text()==_w_table_currenttd.text()){
                    _w_table_SpanNum++;
                    _w_table_currenttd.hide(); //remove();
                    _w_table_firsttd.attr("colSpan",_w_table_SpanNum);
                }else{
                    _w_table_firsttd = $(this);
                    _w_table_SpanNum = 1;
                }
            }
        });
    });
}
