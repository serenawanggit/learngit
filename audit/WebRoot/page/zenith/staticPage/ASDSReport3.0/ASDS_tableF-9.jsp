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
			<table id="table_F_9">
				<thead>
					<tr>
						<td colspan="16">
							<h4>附表 9各大类授课教师结构</h4>
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
						<td rowspan="3">序 号</td> 
						<td rowspan="3">大类名称</td>
						<td rowspan="3">授课教师数</td>
						<td colspan="3">职称</td> 
						<td colspan="3">学位</td>
						<td colspan="4">年龄</td>
						<td colspan="3">学员</td>
					</tr>
					<tr>
						<td rowspan="2">教授</td>
						<td rowspan="2">副教授</td>
						<td rowspan="2">其他</td> 
						<td rowspan="2">博士</td> 
						<td rowspan="2">硕士</td> 
						<td rowspan="2">其他</td> 
						<td rowspan="2">35岁及以下</td> 
						<td rowspan="2">36-45岁</td> 
						<td rowspan="2">46-55岁</td> 
						<td rowspan="2">56岁及以上</td>
						<td rowspan="2">本校</td>
						<td colspan="2">外校</td>
					</tr>
					<tr>
						<td>境内</td>
						<td>境外</td>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
				
			<tfoot>
					<tr>
						<td colspan="16">
							<font color="red">※以上数据来源：表1-5-1专业基本情况，表1-6-1教职工基本信息，表1-6-2 外聘教师基本信息，表1-6-3 附属医院师资情况
表5-1-1开课情况，表5-1-2专业课教学实施情况。<br/>
【注】：<br/>
1. 本表格中授课教师只统计专业课的。<br/>
2. 此表不含没有毕业生的新办专业（（专业设置年+4）小于 等于  当前年）。
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
						key : "ASDS_tableF-9",
						year : $("#year").val()
					},
					success : function(data){
						
						if(data.trim().length>0){
						var result = eval("("+data+")");
							 if(result==""||result==null){
							// hide
							hideLodding();
							$("#table_F_9 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
						$("#table_F_9 tbody").html(html);
						hideLodding();
						// hide
						}else{
					
							$("#table_F_9 tbody").html("<tr><td colspan=\"11\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							hideLodding();
							return;
						}
						
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
			});
			hideLodding();
			// 调用方法
			$("#year").change();
		});
	</script>
</body>
</html>
