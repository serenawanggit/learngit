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
			<table id="table_3_2_3">
				<thead>
					<tr>
						<td colspan="6">
							<h4>3.2.3本科实验、实习、实训场所及设备情况</h4>
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
						<td>项目</td> 
						<td>数量</td> 
						<td>承担实验课程门数</td> 
						<td>面积(平方米)</td> 
						<td>设备台套数</td> 
						<td>设备值(万元)</td> 
						<!-- <td>办学条件指标</td>
						<td rowspan="2">常模值</td> -->
					</tr>
					<!-- <tr><td>合格标准</td></tr> -->
				</thead>
				
				<tbody>
					
					<tr>
						<td ></td> 
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
					</tr>
					<tr>
						<td ></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr> 
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="6">
							<font color="red">※ 以上数据来源：表1-8-1 本科实验场所，表2-7本科实验设备情况，表5-1-4分专业（大类）专业实验课情况。<br>
详细数据可参考【附表13校内实验室使用情况】
。		</font>					
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
					async:false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-2-3",
						year : $("#year").val()
					},
					success : function(data){
					console.info(data);
						var result = eval("("+data+")");
						if(result=="" || result==null){
 							$("#table_3_2_3 tbody").html("<tr><td colspan=\"10\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
 							// hide
							hideLodding();
							return;
						}
		var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+result[i][0]+"</td> ";
								html+="<td>"+result[i][1]+"</td>";
								html+="<td>"+result[i][2]+"</td>";
								html+="<td>"+result[i][3]+"</td>";
								html+="<td>"+result[i][4]+"</td>";
								html+="<td>"+result[i][5]+"</td>";
							html+="</tr>"; 
						});
								$("#table_3_2_3 tbody").html(html);
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				//附加
				/* $.ajax({
					async:false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-2-3-fj-qy",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result=="" || result==null){
							$("#table_3_2_3 tbody").html("<tr><td colspan=\"5\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						$("#table_3_2_3 tbody tr:eq(5) td:eq(2)").html(valueFormat(result[0][0],2));
						$("#table_3_2_3 tbody tr:eq(6) td:eq(1)").html(valueFormat(result[0][1],2));
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				}); */
				// hide
				hideLodding();
			});
			
			// 调用方法
			$("#year").change();
		});
	</script>
</body>
</html>
