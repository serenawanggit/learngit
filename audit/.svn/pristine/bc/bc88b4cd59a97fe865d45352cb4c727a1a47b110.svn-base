<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>教学资源</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_3_4">
				<thead>
					<tr>
						<td colspan="12">
							<h4>3.4 优势专业概览</h4>
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
						<td rowspan="2">序号</td> 
						<td rowspan="2">专业名称</td> 
						<td rowspan="2">专业类型</td>
						<td rowspan="2">设立时间(年)</td> 
						<td colspan="3">授课教师</td> 
						<td rowspan="2">本科学生数</td>
						<td rowspan="2">学生与本学院授课教师之比</td> 
						<td rowspan="2">学年内学生流动净值</td> 
						<td rowspan="2">应届毕业生数</td>
						<td rowspan="2">当年毕业生初次就业率（%）</td>
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
						<td>人文地理与城乡规划</td>
						<td>重点建设专业</td>
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
						<td>信息与计算科学</td>
						<td>重点建设专业</td>
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
						<td colspan="12">
							<font color="red">※以上数据来源：表1-5-1专业基本情况，表5-1-1开课情况，表5-1-2专业课教学实施情况表，表1-6-1教职工基本信息，表1-7本科生基本情况，表6-2-1 本科生转专业情况，表6-5-2应届本科毕业生分专业毕业就业情况。<br>
【注】：1.本表格中授课教师只统计专业课教师, 不含外聘人员，含离职人员。2.本表按国标专业统计，有可能存在所含校内专业不属于优势专业范畴，故未纳入此表统计的情况。
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
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-4",
						year : $("#year").val()
					},
					success : function(data){
					
						var result = eval("("+data+")");
						if(result==""||result==null){
							// hide
							hideLodding();
							$("#table_3_4 tbody").html("<tr><td colspan=\"12\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
							html+="<td>"+valueFormat(result[i][7],2)+"</td>";
							html+="<td>"+result[i][8]+"</td>";
							html+="<td>"+result[i][9]+"</td>"; 
							html+="<td>"+valueFormat(result[i][10],1)+"</td>"; 
							html+="</tr>"; 
						}
						$("#table_3_4 tbody").html(html);
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
