<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="js/ZYReportFormat2.js"></script>
	
	<script type="text/javascript">
		$(function(){
			formatEndYear("year");
			Zyselects();
		});
		function Zyselects(){
			hideLodding();
			  $("#table_7_4_2 tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table7-4-2",
						year : $("#year").val(),
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							var html="";
							$.each(result,function(i,obj){
								html=html+"<tr><td>"+
								(obj[0]==''?'/':obj[0])+"</td><td>"+
								(obj[1]==''?'/':obj[1])+"</td><td>"+
								(obj[2]==''?0:obj[2])+"</td><td>"+
								(obj[3]==''?0:obj[3])+"</td><td>"+
								(obj[4]==''?0:obj[4])+"</td><td>"+
								(obj[5]==''?0:obj[5])+"</td><td>"+
								(obj[6]==''?0:valueFormat(obj[6], 2))+"</td><td>"+
								(obj[7]==''?0:valueFormat(obj[7],2))+"</td>"+
								"</tr>";
							});
							$("#table_7_4_2 tbody").html(html);
						}
					},error:function(){
						alert("加载失败");
					}
			});   
		}
	</script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>教学质量</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_7_4_2">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">7.4.2分省录取分数线</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="javascript:Zyselects();">
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td rowspan="2">省份</td>
							<td rowspan="2">批次</td>
							<td colspan="2">录取数(个)</td>
							<td colspan="2">批次最低控制线(分)</td>
							<td colspan="2">当年录取平均分数与批次最低控制线的差值（分）</td>
						</tr>
						<tr>
							<td>文科</td>
							<td>理科</td>
							<td>文科</td>
							<td>理科</td>
							<td>文科</td>
							<td>理科</td>
						</tr>
					</thead>
					
					<tbody>
					
					</tbody>
				
				<tfoot>
					<tr>
						<td colspan="8">
							【注】以上录取分数不包括艺术类等特殊类型招生。<br>
※以上数据来源：表6-3-3.近一届本科生录取标准及人数。
							
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
