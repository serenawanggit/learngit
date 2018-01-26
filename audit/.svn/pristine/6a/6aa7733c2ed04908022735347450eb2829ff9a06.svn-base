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
			<div class="tb_title"><h4>详细数据附表</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_F_19">
				<thead>
					<tr>
						<td colspan="10">
							<h4>附表 19 各专业毕业生情况</h4>
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
						<td>序 号</td> 
						<td>专业名称</td>
						<td>校内专业名称</td>
						<td>应届毕 业生数</td> 
						<td>应届生中未按时毕业数</td>
						<td>毕业率（ %）</td>
						<td>学位授予数</td>
						<td>毕业生学位授予率（%）</td>
						<td>应届毕业生就业人数</td>
						<td>毕业生初次就业率（%）</td>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="10">
							<font color="red">※ 以上数据来源：表6-5-2 应届本科毕业生分专业毕业就业情况。
							<br/>
【注】：此表是表5.8的详细数据。
		</font>			
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
						key : "ASDS_tableF-19",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
						// hide
							hideLodding();
							$("#table_F_5 tbody").html("<tr><td colspan=\"9\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html="";
						for(var i =0;i<result.length;i++){
							html+="<tr>";
							html+="<td>"+(i+1)+"</td>"; 
							html+="<td>"+result[i][0]+"</td>";
							html+="<td>"+result[i][1]+"</td>";
							html+="<td>"+result[i][2]+"</td>"; 
							html+="<td>"+result[i][3]+"</td>";
							html+="<td>"+valueFormat(result[i][4],1)+"</td>";
							html+="<td>"+result[i][5]+"</td>"; 
							html+="<td>"+valueFormat(result[i][6],1)+"</td>"; 
							html+="<td>"+result[i][7]+"</td>"; 
							html+="<td>"+valueFormat(result[i][8],1)+"</td>";
						}
						$("#table_F_19 tbody").html(html);
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
