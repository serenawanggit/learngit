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
			<table id="table_F_14">
				<thead>
					<tr>
						<td colspan="9">
							<h4>附表 14各专业实践教学情况</h4>
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
						<td rowspan="2">专业名称</td>
						<td rowspan="2">校内专业名称</td>
						<td colspan="2">实践教学</td> 
						<td colspan="3">实验教学</td>
					</tr>
					<tr>
						<td>学分</td>
						<td>占总学分比（％）</td>
						<td>学分</td>
						<td>占总学分比（％）</td>
						<td>独立开设实验课程门数</td>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="9">
							<font color="red">※以上数据来源：表1-5-1专业基本情况，表5-1-4分专业（大类）专业实验课情况，4-2专业培养计划表，表5-1-1 开课情况。
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
						key : "ASDS_tableF-14",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							// hide
							hideLodding();
							$("#table_F_14 tbody").html("<tr><td colspan=\"10\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html="";
						for(var i =0;i<result.length;i++){
							html+="<tr>";
							html+="<td>"+(i+1)+"</td>";
							html+="<td>"+result[i][0]+"</td>";
							html+="<td>"+result[i][1]+"</td>";
							html+="<td>"+result[i][2]+"</td>"; 
							html+="<td>"+valueFormat(result[i][3],1)+"</td>";
							html+="<td>"+result[i][4]+"</td>";
							html+="<td>"+valueFormat(result[i][5],1)+"</td>"; 
							html+="<td>"+result[i][6]+"</td>"; 
							html+="</tr>"; 
						}
						$("#table_F_14 tbody").html(html);
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
