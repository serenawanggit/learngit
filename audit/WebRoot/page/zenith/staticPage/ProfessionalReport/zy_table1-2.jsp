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
			//formatDate("year");
			Zyselects();
		});
		
		function Zyselects(){
			hideLodding();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToFour.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1_2",
						endYear : $("#endYear").val(),
						beginYear : $("#beginYear").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						$("#table_1_2 tbody").empty();
						if(result.length>0){
							var html="";
							$.each(result,function(i,obj){
								html=html+"<tr><td>"+(obj[0]==''?'/':obj[0])+"</td><td>"+(obj[1]==''?'/':obj[1])+"</td><td>"+(obj[2]==''?'/':obj[2])
								+"</td><td>"+(obj[3]==''?'/':obj[3])+"</td><td>"+(obj[4]==''?'/':obj[4])+"</td><td>"+(obj[5]==''?'/':obj[5])+"</td><td>"
								+(obj[6]==''?'/':getFloat(obj[6],2))+"</td></tr>";
							});
							$("#table_1_2 tbody").html(html);
						}
					},error:function(){
						alert("加载失败");
					}
			});
		}
		
	</script>
</head>

<body>
<%-- 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
 --%>	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>学生</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_1_2">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">1.2 专业招生报到情况</h4>
								<div class="chocieYear">
									<ul>
										<li> 开始年份：
											<select class="select_tips tb_select" id="beginYear" onchange="Zyselects()">
												<option>2018/09/30</option>
												<option selected="selected">2017/09/30</option>
												<option>2016/09/30</option>
												<option>2015/09/30</option>
												<option>2014/09/30</option>
											</select>
											结束年份：
											<select class="select_tips tb_select" id="endYear" onchange="Zyselects()">
												<option>2018/09/30</option>
												<option selected="selected">2017/09/30</option>
												<option>2016/09/30</option>
												<option>2015/09/30</option>
												<option>2014/09/30</option>
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						
						<tr>
							<td >年份</td>
							<td >省份</td> 
							<td >招生计划数</td> 
							<td>实际录取数</td>
							<td>第一志愿专业录取数</td>
							<td>实际报到人数</td>
							<td>当年本专业录取平均分数</td>
						</tr>
						
						
					</thead>
					
					<tbody>
						<tr>
							<td></td> 
							<td></td>
							<td></td> 
							<td></td>
							<td></td> 
							<td></td> 
							<td></td> 
						</tr>
					</tbody>
				
				<!-- <tfoot>
					<tr>
						<td colspan="10">
						<font color="red">※ 以上数据来源：表3-1校领导基本信息。详细数据可参考【附表3校领导情况】。	</font>
						</td>
					</tr>
				</tfoot> -->
			</table>
		</div>
	</div>
	
</body>
</html>
