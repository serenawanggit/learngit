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
			<div class="tb_title"><h4>培养过程</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_4_1">
				<thead>
					<tr>
						<td colspan="4">
							<h4>4.1 专业培养方案学分结构</h4>
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
						<td>学科门类</td> 
						<td>所含专业数</td> 
						<td>专业平均总分</td>
						<td>专业平均实践教学环节学分比例(%)</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
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
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="4">
							<font color="red">※以上数据来源：表 4-2-1 专业基本情况。<br/>
							【注】：<br/>
							1.每个专业实践教学环节学分所占比例=（集中实践教学环节学分+实验教学学分） /总学分，先计算每个专<br/>
							业的比例，然后再按学科门类平均。<br/>
							2.此表中本科专业数按照《普通高等学校本科专业目录》统计，不含专业方向。		</font>					
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
						key : "ASDS_table4-1",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
					if(data.trim().length>2){
						var result = eval("("+data+")");
					/* 	if(result==""||result==null){
							$("#table_4_1 tbody").html("<tr><td colspan=\"4\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							
						} */
						var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+valueFormat(obj[2],2)+"</td>";
								html+="<td>"+valueFormat(obj[3],1)+"</td>";
							html+="</tr>"; 
						});
						$("#table_4_1 tbody").html(html);
						// hide
						hideLodding();
						}else{
							hideLodding();
							return;
						}
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
