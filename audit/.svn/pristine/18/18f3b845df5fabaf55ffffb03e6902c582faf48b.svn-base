<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="js/ZYReportFormat2.js"></script>
	<script type="text/javascript" src="${chartCtx }/js/echarts/echarts-all.js"></script>
	<script type="text/javascript">
 var table_2_xl;	
  var table_2_xw;	
 var record1 = {};
var record2 = {};
var record3 = {};
var record4 = {};

var record5 = {};
var record6 = {};
var record7 = {};
var record8 = {};
 
		$(function(){
			       
		            table_2_xl = echarts.init(document.getElementById("table_2_xl"));
		             table_2_xw = echarts.init(document.getElementById("table_2_xw"));
					formatEndYear("year");
					table_2_xl.setOption(getRadarOption_xl("/CHART/analysisReport/analysis_findTableByCodeToThree.htm"));
						table_2_xw.setOption(getRadarOption_xw("/CHART/analysisReport/analysis_findTableByCodeToThree.htm"));
		});
	
			function byyear(){
		        table_2_xl.setOption(getRadarOption_xl("/CHART/analysisReport/analysis_findTableByCodeToThree.htm"));
				table_2_xw.setOption(getRadarOption_xw("/CHART/analysisReport/analysis_findTableByCodeToThree.htm"));
		}	
		
		function getRadarOption_xl(url){
					table_2_xl.clear();
					$.ajax({
						url : url,
						type : "POST",
						async:false,
						data : {
							key : "table_2_xl",
							year : $("#year").val(),
							num:getNum(),
							code:getCode()
						},
						success : function(data){
							var result=eval("("+data+")");
							console.info(result);
							if(data.length>2){
									record1.value = result[0][0];
									record1.name = '博士研究生';
									
									record2.value = result[0][1];
									record2.name = '硕士研究生';
									
									record3.value = result[0][2];
									record3.name = '大学本科';
									
									record4.value = result[0][3];
									record4.name = '专科及以下';
									
									option.series[0].data=[record1,record2,record3,record4];
									option.title.text ="学历结构";
									option.series.name="学历结构";
									option.legend.data=['博士研究生','硕士研究生','大学本科','专科及以下'];	
								
							}else{
							   option=null;
							}
						},error:function(){
							alert("加载失败");
						}
				});
				return option;
		}
		
				function getRadarOption_xw(url){
					table_2_xw.clear();
					$.ajax({
						url : url,
						type : "POST",
						async:false,
						data : {
							key : "table_2_xw",
							year : $("#year").val(),
							num:getNum(),
							code:getCode()
						},
						success : function(data){
							var result=eval("("+data+")");
							console.info(result);
							if(data.length>2){
									record5.value = result[0][0];
									record5.name = '博士学位';
									
									record6.value = result[0][1];
									record6.name = '硕士学位';
									
									record7.value = result[0][2];
									record7.name = '学士学位';
									
									record8.value = result[0][3];
									record8.name = '无学位';
									
									option1.series[0].data=[record5,record6,record7,record8];
									option1.title.text ="学位结构";
									option1.series.name="学位结构";
									option1.legend.data=['博士学位','硕士学位','学士学位','无学位'];	
								
							}else{
							   option=null;
							}
						},error:function(){
							alert("加载失败");
						}
				});
				return option1;
		}
		
var option = {
    title : {
        text: '学历结构',
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

var option1 = {
    title : {
        text: '学位结构',
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

		
	</script>
</head>

<body>
<%-- 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
 --%>	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>学历学位结构</h4>
			</div>
						<div class="chocieYear"><ul>
									<li>年份：
										<select class="select_tips tb_select" id="year" onchange="byyear()">
										<option>2017</option>
										<option selected="selected">2016</option>
										<option>2015</option>
										<option>2014</option>
										</select>
									</li>
								</ul>
			</div>
		</div>
           <div id="table_2_xl" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
		</div>
		
				</div>
           <div id="table_2_xw" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
		</div>
	</div>
	
</body>
</html>
