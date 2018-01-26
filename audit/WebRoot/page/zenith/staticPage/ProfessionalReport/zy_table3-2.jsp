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
			hideLodding();
		});
		function Zyselects(){
			$("#table_3_2 tbody").empty();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table3_2",
						year : $("#year").val(),
						//num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var str = "";
						if(result.length>0){
							for(var i=0;i<result.length;i++){
								str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td>" + result[i][3] 
								+ "</td><td>" + result[i][4] + "</td><td>" + result[i][5] + "</td></tr>";
							}
						}
						$("#table_3_2 tbody").html(str);
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
			<div class="tb_title"><h4>课程</h4>
			</div>
		</div>
		<div class="tb_main">
			<!-- <div align="center"><span style="font-size:15px;">现有<u><span id="test1">1</span></u>个校内实践场所，共承担了<u><span id="test2">1</span></u>门实践教学课程。</span></div> -->
			<table border="1" id="table_3_2">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">3.2主要实践教学环节</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="Zyselects()">
												<option>2017/09/30</option>
												<option selected="selected">2016/09/30</option>
												<option>2015/09/30</option>
												<option>2014/09/30</option>
												<option>2013/09/30</option>
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td>校内专业（大类）代码</td>
							<td>校内专业（大类）名称</td>
							<td>课程号</td>
							<td>课程名称</td>
							<td>所用实验场所名称</td>
							<td>实验场所代码</td>
						</tr>
						
					</thead>
					
					<tbody>
						<!-- <tr>
							<td>暂无表样</td>
						</tr> -->
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
