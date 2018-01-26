<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>学生发展</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_5_5">
				<thead>
					<tr>
						<td colspan="8">
							<h4>5.5 本科生奖贷补情况</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year">
<!-- 												<option>2014</option> -->
<!-- 												<option>2013</option> -->
<!-- 												<option>2012</option> -->
<!-- 												<option>2011</option> -->
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<tr>
						<td></td> 
						<td>政府奖，助学金</td> 
						<td>社会奖，助学金</td>
						<td>学校奖学金</td> 
						<td>国家助学贷款</td> 
						<td>勤工助学金</td>
						<td>减免学费</td> 
						<td>临时困难补助</td> 
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
						<td></td>
					</tr>
					
					<tr>
						<td></td> 
						<td></td>
						<td></td>
						<td></td> 
						<td></td>
						<td></td>
						<td></td> 
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="8">
							<font color="red">※ 以上数据来源：表 6-4 本科生奖贷补。	</font>								
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
	<script type="text/javascript">
		$(function(){
			formatEndYear("year");
			
			$("#year").change(function(){
			    // show
				showLodding();
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-5",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
							if(result==""||result==null){
								$("#table_5_5 tbody").html("<tr><td colspan=\"3\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
								// hide
								hideLodding();
								return;
							}
							if(data.trim().length>0){
							var html="";
							$.each(result,function(i,obj){
								html+="<tr>";
									html+="<td>"+obj[0]+"</td>";
									html+="<td>"+obj[1]+"</td>";
									html+="<td>"+obj[2]+"</td>";
									html+="<td>"+obj[3]+"</td>";
									html+="<td>"+obj[4]+"</td>";
									html+="<td>"+obj[5]+"</td>";
									html+="<td>"+obj[6]+"</td>";
									html+="<td>"+obj[7]+"</td>";
								html+="</tr>"; 
							});
							$("#table_5_5 tbody").html(html);
					}else{
						$("#table_5_5 tbody").html("<tr><td colspan=\"3\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
					}
						// hide
						hideLodding();
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
			});
			
			// 调用方法
			$("#year").change();
		});
	</script>
</body>
</html>
