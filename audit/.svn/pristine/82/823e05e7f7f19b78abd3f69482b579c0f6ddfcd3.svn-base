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
			 <table id="table_G_3">
				<thead>
					<tr>
						<td colspan="2">
							<h4>概要 3学科专业基本情况</h4>
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
						<td>项目</td>
						<td>数量</td>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<td>本科专业总数</td>
						<td></td>
					</tr>
					<tr>
						<td>其中：新专业</td>
						<td></td>
					</tr>
					<tr>
						<td>校内专业总数</td>
						<td></td>
					</tr>
					<tr>
						<td>专业大类数</td>
						<td></td>
					</tr>
					<tr>
						<td>本科专业覆盖学科门类数</td>
						<td></td>
					</tr>
					<tr>
						<td>重点学科数 </td>
						<td></td>
					</tr>
					<tr>
						<td>校内专业平均总学分</td>
						<td></td>
					</tr>
				<!-- 	<tr>
						<td>专业平均实践教学环节学分比例(%)</td>
						<td></td>
					</tr> -->
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="2">
						<font color="red">※以上数据来源：表4-1-1学科建设，表1-5-1 专业基本情况，表1-5-2专业大类情况，表4-1-4重点学科，表4-2专业培养计划表。<br/>
						【注】:</br>
1.每个专业实践教学环节学分所占比例=（集中实践教学环节学分+实验教学学分）/总学分。</br>
2.详细数据可参考【附表1 专业基本情况】，【附表2 专业大类情况】。
<br/>
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
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableG-3",
						year : $("#year").val()
					},
					success : function(data){
					if(data.trim().length>3){
						var result = eval("("+data+")");
						$("#table_G_3 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_G_3 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						$("#table_G_3 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
						$("#table_G_3 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
						$("#table_G_3 tbody tr:eq(4) td:eq(1)").html(result[0][4]);
						$("#table_G_3 tbody tr:eq(5) td:eq(1)").html(valueFormat(result[0][5],2));
						$("#table_G_3 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
					//	$("#table_G_3 tbody tr:eq(7) td:eq(1)").html(result[0][7]);
						// $("#table_G_3 tbody tr:eq(8) td:eq(1)").html((valueFormat(result[0][8],2)));
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
				// hide
			});
			
			// 调用方法
			$("#year").change();
		});
	</script> 
</body>
</html>
