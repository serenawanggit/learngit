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
			<table id="table_F_8">
				<thead>
					<tr>
						<td colspan="11">
							<h4>附表 8 各专业教师、学生情况概览</h4>
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
						<td rowspan="2">批准时间（年）</td> 
						<td colspan="3">授课教师</td>
						<td rowspan="2">本科学生数</td>
						<td rowspan="2">学生与本学院授课教师之比</td>
						<td rowspan="2">学年内学生流动净值</td>
						<td rowspan="2">应届毕业生数</td>
						<td rowspan="2">当年初次就业率（ %）</td>
					</tr>
					<tr>
						<td>本学院授课教师数</td>
						<td>外学院授课教师数</td>
						<td>具有高级职称的授课教师数</td>
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
						<td></td>
						<td></td>
						<td></td> 
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="11">
							<font color="red">※ 以上数据来源： 表 4-2-1 专业基本情况， 表 5-1-1 开课情况，表 5-1-2 专业教学实施情况表，表 3-1-1<br/>
							专任教师基本信息，表 6-1-8 应届本科毕业生就业情况。<br/>
							【注】：<br/>
							1. 本表格中授课教师只统计专业课的。<br/>
							2. 此表为表 3.3 专业情况概览的详细信息。		</font>					
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
						key : "ASDS_tableF-8",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							// hide
							hideLodding();
							$("#table_F_8 tbody").html("<tr><td colspan=\"11\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
							html+="<td>"+valueFormat(result[i][6],2)+"</td>"; 
							html+="<td>"+result[i][7]+"</td>";
							html+="<td>"+result[i][8]+"</td>";
							html+="<td>"+valueFormat(result[i][9],1)+"</td>";
							html+="</tr>"; 
						}
						$("#table_F_8 tbody").html(html);
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
