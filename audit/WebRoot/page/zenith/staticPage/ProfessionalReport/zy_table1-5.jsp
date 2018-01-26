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
			//formatEndYear("year");
			formatDate("year");
			Zyselects();
		});
		function Zyselects(){
			hideLodding();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1_5",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var str = "";
						if(data.length>2){
							$.each(result,function(i,obj){
								str += "<tr><td>" + obj[0] + "</td><td>" + obj[1] + "</td><td>" + obj[2] + "</td><td>" + obj[3] + "</td><td>" + obj[4] 
								+ "</td><td>" + obj[5] + "</td></tr>";
							});
						}
						$("#table_1_5 tbody").html(str);
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
			<table border="1" id="table_1_5">
					<thead>
					<tr>
						<td colspan="15">
							<h4>1.5 学生毕业就业情况</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year" onchange="Zyselects()">
											<option>2014/09/30</option> 
											<option>2015/09/30</option> 
											<option selected="selected">2016/09/30</option> 
											<option>2017/09/30</option> 
											<option>2018/09/30</option>
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<tr>
						<td>校内专业代码</td>
						<td>校内专业名称</td>
						<td>应届毕业生</td>
						<td>应届生中未按时毕业数</td>
						<td>授予学位数</td>
						<td>应届就业人数</td>
					</tr>
				</thead>
				<tbody>
				</tbody>
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
