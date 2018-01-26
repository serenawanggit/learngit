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
			<div class="tb_title"><h4>教师队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_2_6_2">
				<thead>
					<tr>
						<td colspan="9">
							<h4>2.6.2高层次人才讲授本科课程情况</h4>
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
					    <td >类别</td> 
					    <td >总人数</td> 
						<td>授课人数</td> 
						<td>百分比(%)</td>
						<td>课程门次(门次)</td> 
						<td>百分比(%)</td>
						<td>课程门数(门)</td> 
						<td>百分比(%)</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td >院士</td>
						<td ></td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>国家级</td>
						<td></td> 
						<td></td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：公共必修课</td> 
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
						<td colspan="9">
							<font color="red">※以上数据来源：表5-1-1开课情况,表3-3-1 高层次人才。
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
						key : "ASDS_table2-6-2",
						year : $("#year").val()
					},
					
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_2_6_2 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
					    var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+valueFormat(obj[3],1)+"</td>";/* valueFormat(obj[3],1) */
								html+="<td>"+obj[4]+"</td>";
								html+="<td>"+valueFormat(obj[5],1)+"</td>";
								html+="<td>"+obj[6]+"</td>";
								html+="<td>"+valueFormat(obj[7],1)+"</td>";
							html+="</tr>"; 
						});
						$("#table_2_6_2 tbody").html(html);
						
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
