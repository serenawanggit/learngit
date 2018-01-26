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
			<table id="table_F_16_1">
				<thead>
					<tr>
						<td colspan="5">
							<h4>附表16-1医学专业学生毕业综合训练情况</h4>
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
						<td>序号</td> 
						<td>医院单位号</td> 
						<td>医院名称</td>
						<td>床位数</td>
						<td>当年接受毕业实习学生数</td>
					</tr>
				</thead>
				<tbody>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="5">
							<font color="red">※以上数据来源：表5-2-3医学专业学生毕业综合训练情况。
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
						key : "ASDS_tableF-16-1",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_F_16_1 tbody").html("<tr><td colspan=\"5\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html="";
						for ( var i = 0; i < result.length; i++) {
							html+="<tr>";
								html+="<td>"+result[i][0]+"</td>";
								html+="<td>"+result[i][1]+"</td>";
								html+="<td>"+result[i][2]+"</td>";
								html+="<td>"+result[i][3]+"</td>";
								html+="<td>"+result[i][4]+"</td>";
							html+="</tr>";
						}
						var table=jQuery("#table_F_16_1 tbody:eq(0)");
						if(result!=null && result.length>0){
							table.html(html);
						}else{
							table.html("<tr><td colspan=\"5\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
