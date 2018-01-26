<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat2.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>详细数据附表</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_F_5">
				<thead>
					<tr>
						<td colspan="16">
							<h4>附表 5 各教学单位实验系列职称人员结构</h4>
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
						<td rowspan="2">序 号</td> 
						<td rowspan="2">单位</td>
						<td rowspan="2">总计</td> 
						<td colspan="5">职称</td>
						<td colspan="4">学位</td>
						<td colspan="4">年龄</td>
					</tr>
					<tr>
						<td>正 高 级</td>
						<td>副 高 级</td>
						<td>中 级</td>
						<td>初 级</td>
						<td>无 职 称</td>
						<td>博 士</td>
						<td>硕 士</td>
						<td>学 士</td>
						<td>无 学 位</td>
						<td>35 岁以下</td>
						<td>36-45岁</td>
						<td>46-55岁</td>
						<td>56岁以上</td>
					</tr>
				</thead>
				<tbody>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="16">
							<font color="red">※ 以上数据来源： 表 3-1-3 其他师资信息。	</font>				
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
						key : "ASDS_tableF-5",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
						// hide
							hideLodding();
							$("#table_F_5 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
							html+="<td>"+result[i][4]+"</td>";
							html+="<td>"+result[i][5]+"</td>"; 
							html+="<td>"+result[i][6]+"</td>"; 
							html+="<td>"+result[i][7]+"</td>";
							html+="<td>"+result[i][8]+"</td>";
							html+="<td>"+result[i][9]+"</td>"; 
							html+="<td>"+result[i][10]+"</td>";
							html+="<td>"+result[i][11]+"</td>";
							html+="<td>"+result[i][12]+"</td>";
							html+="<td>"+result[i][13]+"</td>";
							html+="<td>"+result[i][14]+"</td>"; 
							html+="</tr>"; 
						}
						$("#table_F_5 tbody").html(html);
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
