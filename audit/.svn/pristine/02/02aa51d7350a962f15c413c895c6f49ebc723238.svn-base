<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="/audit/js/jquery.js"></script>
	<script type="text/javascript" src="/audit/js/echarts-all.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	<script>
	validateLogin();
	var myChartm;
		var option = {
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
		                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
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
          
			
			$(function(){
				 
				 //var data = "a=" + myChartm.getDataURL("png");
				// alert(data)
				
				$("#tb").change(function(){
					var type = $(this).val();
					if(type == "bie"){
					
					}

					if(type == "bar"){
						 var chartDIV = document.getElementById("tbarea");
				 		 myChartm = echarts.init(chartDIV); 
						 myChartm.setOption(option); 
					}
				}); 
			}); 
			function create(){
				if(myChartm == undefined){
					alert("请选择图");
				}
				 var data = myChartm.getDataURL("png");
				 data =encodeURIComponent(data);
				console.info(data);
				 var url = "/audit/viewPic/createImage.do";
				 $.ajax({
				 	url:url,
				 	data:{"image":data},
				 	type:'POST',
				 	success:function(data){
				 		alert(data);
				 	}
				 });
				
				 		 myChartm.clear();
			}
			      
	</script>
  </head>
  
  <body>
  	整合成功
  	<div style="width:600px;height:500px;display:none" id="tbarea"></div>
  	<select id="tb">
  		<option value="pie">饼图</option>
  		<option value="bar">柱状图</option>
  	</select>
  	<BR />
  	<input type="button" onclick="create()" value="create" />
  </body>
</html>
