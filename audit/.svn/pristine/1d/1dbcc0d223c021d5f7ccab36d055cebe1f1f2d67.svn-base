<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="js/ZYReportFormat2.js"></script>
	
	<script type="text/javascript">
		$(function(){
			formatEndYear("year");
			Zyselects();
		});
		function Zyselects(){
			hideLodding();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1-2-2-a",
						year : $("#year").val(),
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						//数量
							$("#table_1_2_2 tbody tr:eq(0) td:eq(1)").html(result[0][0]==""?0:result[0][0]);						
							$("#table_1_2_2 tbody tr:eq(0) td:eq(2)").html(result[0][2]==""?0:result[0][2]);	
							$("#table_1_2_2 tbody tr:eq(0) td:eq(3)").html(result[0][4]==""?0:result[0][4]);	
							$("#table_1_2_2 tbody tr:eq(0) td:eq(4)").html(result[0][6]==""?0:result[0][6]);	
							$("#table_1_2_2 tbody tr:eq(0) td:eq(5)").html(result[0][8]==""?0:result[0][8]);	
							$("#table_1_2_2 tbody tr:eq(0) td:eq(6)").html(result[0][10]==""?0:result[0][10]);	
							$("#table_1_2_2 tbody tr:eq(0) td:eq(7)").html(result[0][12]==""?0:result[0][12]);	
							$("#table_1_2_2 tbody tr:eq(0) td:eq(8)").html(result[0][14]==""?0:result[0][14]);	
							$("#table_1_2_2 tbody tr:eq(0) td:eq(9)").html(result[0][16]==""?0:result[0][16]);	
							
						//比例%
							$("#table_1_2_2 tbody tr:eq(1) td:eq(1)").html(result[0][1]==""?0:result[0][1]);						
							$("#table_1_2_2 tbody tr:eq(1) td:eq(2)").html(result[0][3]==""?0:result[0][3]);	
							$("#table_1_2_2 tbody tr:eq(1) td:eq(3)").html(result[0][5]==""?0:result[0][5]);	
							$("#table_1_2_2 tbody tr:eq(1) td:eq(4)").html(result[0][7]==""?0:result[0][7]);	
							$("#table_1_2_2 tbody tr:eq(1) td:eq(5)").html(result[0][9]==""?0:result[0][9]);	
							$("#table_1_2_2 tbody tr:eq(1) td:eq(6)").html(result[0][11]==""?0:result[0][11]);	
							$("#table_1_2_2 tbody tr:eq(1) td:eq(7)").html(result[0][13]==""?0:result[0][13]);	
							$("#table_1_2_2 tbody tr:eq(1) td:eq(8)").html(result[0][15]==""?0:result[0][15]);	
							$("#table_1_2_2 tbody tr:eq(1) td:eq(9)").html(result[0][17]==""?0:result[0][17]);	
						}
					},error:function(){
						alert("加载失败");
					}
			});    
		}
	</script>
</head>

<body>
	<div class='loadding'><img src='/audit/images/lodding.gif'/></div> 
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>办学思路与领导作用</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_1_2_2">
					<thead>
						<tr>
							<td colspan="10">
								<h4 id="filename">1.2.2校领导年龄和学位结构</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="javascript:Zyselects();">
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td rowspan="2"></td>
							<td rowspan="2">总计</td>
							<td colspan="4">学位</td>
							<td colspan="4">年龄</td>
						</tr>
						<tr>
							<td>博士</td>
							<td>硕士</td>
							<td>学士</td>
							<td>无学位</td>
							<td>35岁及以下</td>
							<td>36-45</td>
							<td>46-55</td>
							<td>56岁及上</td>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>数量</td> 
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
							<td>比例(%)</td> 
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
					<td colspan="10">※以上数据来源：表3-1.校领导基本信息。</td>
				</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
