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
			<table id="table_4_3">
				<thead>
					<tr>
						<td colspan="9">
							<h4>4.3.1学校创新创业教育情况</h4>
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
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td>1.创新创业教育机构</td> 
						<td></td>
					</tr>
					
					<tr>
						<td>2.创新创业教育专职教师（人）</td> 
						<td></td>
					</tr>
					<tr>
						<td>3.创新创业教育导师（人）</td> 
						<td></td>
					</tr>
					<tr>
						<td>4. 创新创业教育机构培训人次数</td> 
						<td></td>
					</tr>
					<tr>
						<td>5. 创业实习基地数</td> 
						<td></td>
					</tr>
					<tr>
						<td>6. 创新创业教育实践平台数</td> 
						<td></td>
					</tr>
					<tr>
						<td>7.创业示范基地数</td> 
						<td></td>
					</tr>
					<tr>
						<td>8.创业培训项目数</td> 
						<td></td>
					</tr>
					<tr>
						<td>9.创新创业教育课程(门)</td> 
						<td></td>
					</tr>
					<tr>
						<td>其中：创新创业优质课（门）</td> 
						<td></td>
					</tr>
					<tr>
						<td>10. 开设的职业生涯规划及创业指导课程数（门)</td> 
						<td></td>
					</tr>
					<tr>
						<td>11. 创新创业讲座(次）</td> 
						<td></td>
					</tr>
					<tr>
						<td>12.创新创业奖学金（万元）</td> 
						<td></td>
					</tr>
					<tr>
						<td>13.创新创业专项资金投入（万元）</td> 
						<td></td>
					</tr>
					<tr>
						<td>14.创新创业教育教材数（门）</td> 
						<td></td>
					</tr>
					<tr>
						<td>15.参与创新创业训练项目全日制本科在校学生数（人）</td> 
						<td></td>
					</tr>
					<tr>
						<td>16.参与创新创业竞赛全日制本科在校学生数（人）</td> 
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="9">
							<font color="red">※以上数据来源：表5-4-1 创新创业教育情况。	</font>					
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
						key : "ASDS_table4-3-1",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						console.info(result);
						if(result==""||result==null){
							$("#table_4_3 tbody").html("<tr><td colspan=\"9\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						//alert();
						 $.each(result,function(i,obj){
							$("#table_4_3 tbody tr:eq(0) td:eq(1)").html(obj[0]);
							$("#table_4_3 tbody tr:eq(1) td:eq(1)").html(obj[1]);
							$("#table_4_3 tbody tr:eq(2) td:eq(1)").html(obj[2]);
							$("#table_4_3 tbody tr:eq(3) td:eq(1)").html(obj[3]);
							$("#table_4_3 tbody tr:eq(4) td:eq(1)").html(obj[4]);
							$("#table_4_3 tbody tr:eq(5) td:eq(1)").html(obj[5]);
							$("#table_4_3 tbody tr:eq(6) td:eq(1)").html(obj[6]);
							$("#table_4_3 tbody tr:eq(7) td:eq(1)").html(obj[7]);
							$("#table_4_3 tbody tr:eq(8) td:eq(1)").html(obj[8]);
							$("#table_4_3 tbody tr:eq(9) td:eq(1)").html(obj[9]);
							$("#table_4_3 tbody tr:eq(10) td:eq(1)").html(obj[10]);
							$("#table_4_3 tbody tr:eq(11) td:eq(1)").html(obj[11]);
							$("#table_4_3 tbody tr:eq(12) td:eq(1)").html(obj[12]);
							$("#table_4_3 tbody tr:eq(13) td:eq(1)").html(obj[13]);
							$("#table_4_3 tbody tr:eq(14) td:eq(1)").html(obj[14]);
							$("#table_4_3 tbody tr:eq(15) td:eq(1)").html(obj[15]);
							$("#table_4_3 tbody tr:eq(16) td:eq(1)").html(obj[16]);
						}); 
						
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
