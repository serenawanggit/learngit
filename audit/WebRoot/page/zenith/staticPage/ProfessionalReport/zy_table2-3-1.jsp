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
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2-3",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$("#table_2_3_1 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
							$("#table_2_3_1 tbody tr:eq(0) td:eq(2)").html(valueFormat(result[0][1],1));
							
							
							$("#table_2_3_1 tbody tr:eq(1) td:eq(1)").html(result[0][2]);
							$("#table_2_3_1 tbody tr:eq(1) td:eq(2)").html(valueFormat(result[0][3],1));
							
							
							$("#table_2_3_1 tbody tr:eq(2) td:eq(1)").html(result[0][4]);
							$("#table_2_3_1 tbody tr:eq(2) td:eq(2)").html(valueFormat(result[0][5],1));
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
			<div class="tb_title"><h4>师资队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_2_3_1">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">2.3专任教师企业经历背景情况</h4>
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
							<td></td>
							<td>数量</td>
							<td>比例(%)</td>
						</tr>
						
					</thead>
					
					<tbody>
						<tr>
							<td>专任教师总人数</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>总人数中:具有企业工作经历</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>总人数:承担工程项目</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
