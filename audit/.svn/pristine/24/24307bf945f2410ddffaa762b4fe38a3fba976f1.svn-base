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
			<div class="tb_title"><h4>培养过程</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_4_1">
					<thead>
						<tr>
							<td colspan="4" id="1colspan">
								<h4 id="filename">4.1 专业培养方案学分结构</h4>
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
						<tr id="4-1tr">
							<td>学科门类</td>
							<td >所含专业数</td> 
							<td >专业平均总学分</td>
							<td >专业平均实践教学环节学分比例（%）</td>
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
						<tr>
							<td></td> 
							<td></td> 
							<td></td>
							<td></td> 
						</tr>
						
					</tbody>
				
				<tfoot>
					<tr>
						<td colspan="4" id="2colspan">
							<font color="red">※以上数据来源：表 1-5-1 专业基本情况。表4-2专业培养计划<br/>
							【注】：<br/>
							1.每个专业实践教学环节学分所占比例=（集中实践教学环节学分+实验教学学分） /总学分，先计算每个专<br/>
							业的比例，然后再按学科门类平均。<br/>
							2.此表中本科专业数按照《普通高等学校本科专业目录》统计，不含专业大类和校内专业方向。		</font>					
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
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							$("#table_4_1 tbody").html("<tr><td colspan=\"4\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							
						}
					if(data.trim().length>2){
						var html="";var html1="";
				/* 		
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+valueFormat(obj[2], 2)+"</td>";
								html+="<td>"+valueFormat(obj[3], 1)+"</td>";
							html+="</tr>"; 
						});  */
						html1+="<td>学科门类</td>";
						for ( var i = 0; i < result.length; i++) {
								html1+="<td>"+result[i][0]+"</td>";
						}
						
						
						html+="<tr>"
						html+="<td>所含专业数</td>"
						for ( var i = 0; i < result.length; i++) {
								html+="<td>"+result[i][1]+"</td>";
						}
						html+="</tr>"
						html+="<tr>"
						html+="<td>专业平均总学分</td>"
						for ( var i = 0; i < result.length; i++) {
								html+="<td>"+valueFormat(result[i][2],2)+"</td>";
						}
						html+="</tr>"
						html+="<tr>"
						html+="<td>专业平均实践教学环节学分比例（%）</td>"
						for ( var i = 0; i < result.length; i++) {
								html+="<td>"+valueFormat(result[i][3],1)+"</td>";
						}
						html+="</tr>"
						/*alert(result);
						       html+="<tr>";
						        for ( var j = 0; j <result.length ; j++) {
						            html+="<td>"+result[0][j]+"</td>";
						        }
						       html+="</tr>";
							*/
							$("#4-1tr").html(html1);
						$("#table_4_1 tbody").html(html);
						$("#1colspan").attr("colspan",result.length+1);
						$("#2colspan").attr("colspan",result.length+1);
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
