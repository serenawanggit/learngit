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
 var table_2_zcjg;	
 var record1 = {};
var record2 = {};
var record3 = {};
var record4 = {};
var record5 = {};
 var record6 = {};
 var record7 = {};
 var record8 = {};
 var record9 = {};
 
		$(function(){
			       
		            table_2_zcjg = echarts.init(document.getElementById("table_2_zcjg"));
					formatEndYear("year");
					table_2_zcjg.setOption(getRadarOption_zcjg("/CHART/analysisReport/analysis_findTableByCodeToThree.htm"));
		});
	
			function byyear(){
		        table_2_zcjg.setOption(getRadarOption_zcjg("/CHART/analysisReport/analysis_findTableByCodeToThree.htm"));
		}
		
		function getRadarOption_zcjg(url){
					table_2_zcjg.clear();
					$.ajax({
						url : url,
						type : "POST",
						async:false,
						data : {
							key : "ASDS_table2_zyzc",
							year : $("#year").val(),
							num:getNum(),
							code:getCode()
						},
						success : function(data){
							var result=eval("("+data+")");
							if(data.length>2){
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
									option.title.text ="职称结构";
									option.series.name="职称结构";
									option.legend.data=['教授','副教授','讲师','助教','其他正高级','其他副高级','其他中级','其他初级','未评级'];	
							}else{
							   option=null;
							}
						},error:function(){
							alert("加载失败");
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
		
	</script>
</head>

<body>
<%-- 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
 --%>	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>职称结构</h4>
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
		
           <div id="table_2_zcjg" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
		</div>
	</div>
	
</body>
</html>
