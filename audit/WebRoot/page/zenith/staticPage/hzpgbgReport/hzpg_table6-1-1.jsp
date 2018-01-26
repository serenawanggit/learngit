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
						key : "ASDS_table6-1-1",
						year : $("#year").val(),
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							$("#table_6_1_1 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
							$("#table_6_1_1 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
							$("#table_6_1_1 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
							$("#table_6_1_1 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
							$("#table_6_1_1 tbody tr:eq(4) td:eq(1)").html(result[0][4]);
							$("#table_6_1_1 tbody tr:eq(5) td:eq(1)").html(result[0][5]);
						}
					},error:function(){
						alert("加载失败");
					}
			});   
		}
	</script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>学风建设与学生指导</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_6_1_1">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">6.1.1本科生交流情况</h4>
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
							<td>项目</td>
							<td>数量</td>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>当年交流本科生数</td>
							<td></td>
						</tr>
						<tr>
							<td>占全日制本科生比例（%）</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：本校到境外</td>
							<td></td>
						</tr>
						<tr>
							<td>本校到境内</td>
							<td></td>
						</tr>
						<tr>
							<td>境内到本校</td>
							<td></td>
						</tr>
						<tr>
							<td>境外到本校</td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				<tr>
					<td colspan="2">
※以上数据来源：表6-7.本科生交流情况。
					</td>
				</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
