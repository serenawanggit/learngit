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
			<div class="tb_title"><h4>学校概要数据</h4>
			</div>
		</div>
		<div class="tb_main">
			 <table id="table_G_2">
				<thead>
					<tr>
						<td colspan="9">
							<h4>概要2 学位点概况</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year">
												<option>2014</option>
												<option>2013</option>
												<option>2012</option>
												<option>2011</option>
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<tr>
						<td ></td> 
						<td  >1.博士后流动站</td> 
						<td  >2.博士学位授权一级学科点</td> 
						<td  >3.博士学位授权二级学科点(不含一级覆盖点)</td>
						<td  >4.硕士学位授权一级学科点</td>
						<td  >5.硕士学位授权二级学科点(不含一级覆盖点)</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td>合计</td> 
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
							<font color="red">※ 以上数据来源：表4-1-1 学科建设	</font>		
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
						key : "ASDS_tableG-2",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						$("#table_G_2 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_G_2 tbody tr:eq(0) td:eq(2)").html(result[0][1]);
						$("#table_G_2 tbody tr:eq(0) td:eq(3)").html(result[0][2]);
						$("#table_G_2 tbody tr:eq(0) td:eq(4)").html(result[0][3]);
						$("#table_G_2 tbody tr:eq(0) td:eq(5)").html(result[0][4]);
						
					},
					error : function(){
						
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				// hide
				hideLodding();
			});
			
			// 调用方法
			$("#year").change();
		});
	</script> 
</body>
</html>
