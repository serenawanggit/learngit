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
			<table id="table_2_7_1">
				<thead>
					<tr>
						<td colspan="8">
							<h4>2.7.1教师教学发展机构培训情况</h4>
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
						<td >机构名称</td> 
						<td >培训类型</td> 
						<td >培训次数</td> 
						<td >培训人次</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="8">
							<font color="red">※以上数据来源：表3-4-1 教师教学发展机构。	</font>				
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
						key : "ASDS_table2-7-1",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_2_7_1 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
	  						var html="";
						for(var i =0;i<result.length;i++){
							html+="<tr>";
							html+="<td>"+result[i][0]+"</td>";
							html+="<td>"+result[i][1]+"</td>";
							html+="<td>"+result[i][2]+"</td>"; 
							html+="<td>"+result[i][3]+"</td>";
							html+="</tr>"; 
						}
						$("#table_2_7_1 tbody").html(html);
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
