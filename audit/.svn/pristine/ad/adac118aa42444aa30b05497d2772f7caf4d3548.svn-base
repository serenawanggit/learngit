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
			<table id="table_3_2_4" border="1">
				<thead>
					<tr>
						<td colspan="4">
							<h4>3.2.4 校园网、图书情况</h4>
							
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year">
												<option>2014</option> 
											<option>2013</option> 
										</select>
									</li>
								</ul>
							</div>
							
						</td>
					</tr> 
					<tr>
						<td >项目</td> 
						<td >学校情况</td> 
						 <td>学校条件指标合格标准</td>
						<!--  <td>常模值</td> -->
					 </tr>
					 
				</thead>
				
				<tbody>
					<tr>
						<td>校园网主干带宽（Mbps）</td> 
						<td></td>
					 	<td></td>
					 	<td></td>
						<!--<td></td> -->
					</tr>
					<tr>
						<td>校园网出口带宽（Mbps）</td> 
						<td></td>
						<td></td>
						<td></td>
					<!-- 	<td></td> -->
					</tr>
					<tr>
						<td>网络接入信息点数量（个）</td> 
						<td></td>
						 <td></td>
						 <td></td>
						<!--<td></td> -->
					</tr>
					<tr>
						<td>纸质图书总量（册）</td> 
						<td></td>
						 <td>-</td>
						 <td></td>
						<!--<td></td> -->
					</tr>
					<tr>
						<td>生均纸质图书（册）</td> 
						<td></td>
						<td id="hij">100册</td>
						<td></td>
					<!-- 	<td></td> -->
					</tr>
					<tr>
						<td>当年新增纸质图书（册）</td> 
						<td></td>
						<td>-</td>
						<td></td>
						<!-- <td></td> -->
					</tr>
					<tr>
						<td>生均年进纸质图书（册）</td> 
						<td></td>
						<td id="klm">4册</td>
						<td></td>
					<!-- 	<td></td> -->
					</tr>
					
					<tr>
						<td>当年新增电子图书（册）</td> 
						<td></td>
						<td></td>
						<td></td>
					<!-- 	<td></td> -->
					</tr>
					
					<tr>
						<td>当年图书流通量（本次）</td> 
						<td></td>
						 <td>-</td>
						 <td></td>
						<!--<td></td> -->
					</tr>
					<tr>
						<td>纸质期刊数量（份）</td> 
						<td></td>
						<td>-</td>
						<td></td>
						<!-- <td></td> -->
					</tr>
					
					<tr>
						<td>纸质期刊种类数（种）</td> 
						<td></td>
						<td>-</td>
						<td></td>
					<!-- 	<td></td> -->
					</tr>
					<tr>
						<td>数据库（个）</td> 
						<td></td>
						<td></td>
						<td></td>
					<!-- 	<td></td> -->
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="4">
							<font color="red">※以上数据来源：表2-3-1图书馆，表2-3-2 图书当年新增情况，表2-5校园网。	</font>			
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
						key : "ASDS_table3-2-4",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result.length==0||result==null){
							
						}else{
							console.info(result);
							$("#table_3_2_4 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
							$("#table_3_2_4 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
							$("#table_3_2_4 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
						}
						
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				
				//附加
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-2-4-fj-qy",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						console.info(result);
						if(result.length==0||result==null){
							$("#table_3_2_4 tbody tr:eq(3) td:eq(1)").html("");
							$("#table_3_2_4 tbody tr:eq(4) td:eq(1)").html("");
							$("#table_3_2_4 tbody tr:eq(5) td:eq(1)").html(""); 
							$("#table_3_2_4 tbody tr:eq(6) td:eq(1)").html("");
							$("#table_3_2_4 tbody tr:eq(7) td:eq(1)").html("");
							$("#table_3_2_4 tbody tr:eq(8) td:eq(1)").html("");
							$("#table_3_2_4 tbody tr:eq(9) td:eq(1)").html("");
							$("#table_3_2_4 tbody tr:eq(10) td:eq(1)").html("");
							$("#table_3_2_4 tbody tr:eq(11) td:eq(1)").html("");
							$("#table_3_2_4 tbody tr:eq(12) td:eq(1)").html("");
							$("#table_3_2_4 tbody tr:eq(13) td:eq(1)").html("");
							$("#hij").html("100册");
						    $("#klm").html("4册");
						}else{
							$("#table_3_2_4 tbody tr:eq(3) td:eq(1)").html(result[0][0]);
							$("#table_3_2_4 tbody tr:eq(4) td:eq(1)").html(result[0][1]);
							$("#table_3_2_4 tbody tr:eq(5) td:eq(1)").html(result[0][2]); 
							$("#table_3_2_4 tbody tr:eq(6) td:eq(1)").html(result[0][3]);
							$("#table_3_2_4 tbody tr:eq(7) td:eq(1)").html(result[0][4]);
							$("#table_3_2_4 tbody tr:eq(8) td:eq(1)").html(result[0][5]);
							$("#table_3_2_4 tbody tr:eq(9) td:eq(1)").html(result[0][6]);
							$("#table_3_2_4 tbody tr:eq(10) td:eq(1)").html(result[0][7]);
							$("#table_3_2_4 tbody tr:eq(11) td:eq(1)").html(result[0][8]);
							$("#hij").html(result[0][9]);
						    $("#klm").html(result[0][10]);
							/*$("#table_3_2_4 tbody tr:eq(3) td:eq(1)").html(valueFormat(result[0][0],2));
							$("#table_3_2_4 tbody tr:eq(4) td:eq(1)").html(valueFormat(result[0][1],2));
							$("#table_3_2_4 tbody tr:eq(5) td:eq(1)").html(valueFormat(result[0][2],2));
							$("#table_3_2_4 tbody tr:eq(6) td:eq(1)").html(valueFormat(result[0][3],2));
							$("#table_3_2_4 tbody tr:eq(7) td:eq(1)").html(valueFormat(result[0][4],2));
							$("#table_3_2_4 tbody tr:eq(8) td:eq(1)").html(valueFormat(result[0][5],2));
							$("#table_3_2_4 tbody tr:eq(9) td:eq(1)").html(valueFormat(result[0][6],2));
							$("#table_3_2_4 tbody tr:eq(10) td:eq(1)").html(valueFormat(result[0][7],2));
							$("#table_3_2_4 tbody tr:eq(11) td:eq(1)").html(valueFormat(result[0][8],2));
							$("#table_3_2_4 tbody tr:eq(12) td:eq(1)").html(valueFormat(result[0][9],2));
							$("#table_3_2_4 tbody tr:eq(13) td:eq(1)").html(valueFormat(result[0][10],2));
							$("#table_3_2_4 tbody tr:eq(14) td:eq(1)").html(valueFormat(result[0][11],2));
							$("#table_3_2_4 tbody tr:eq(15) td:eq(1)").html(valueFormat(result[0][12],2));
							$("#table_3_2_4 tbody tr:eq(16) td:eq(1)").html(valueFormat(result[0][13],2));
							$("#table_3_2_4 tbody tr:eq(17) td:eq(1)").html(valueFormat(result[0][14],2));*/
						}
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
