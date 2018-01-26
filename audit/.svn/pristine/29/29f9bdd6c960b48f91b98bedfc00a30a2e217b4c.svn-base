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
			<table id="table_4_2">
				<thead>
					<tr>
						<td colspan="4">
							<h4>4.2 人才培养模式创新区情况</h4>
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
						<td>序号</td> 
						<td>名称</td> 
						<td>类型</td>
						<td>设立时间</td>
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
							<font color="red">※以上数据来源：表 5-3-1 人才培养模式创新实验项目。	</font>						
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
						key : "ASDS_table4-2",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							$("#table_4_2 tbody").html("<tr><td colspan=\"4\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+(i+1)+"</td>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
							html+="</tr>"; 
						});
						$("#table_4_2 tbody").html(html);
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
