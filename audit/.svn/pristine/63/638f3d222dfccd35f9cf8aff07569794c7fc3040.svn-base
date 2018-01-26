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
						key : "ASDS_table1-1-1",
						year : $("#year").val(),
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							var html="";
							$("#table_1_1 tbody tr:eq(0) td:eq(1)").html(result[0][0]==""?0:result[0][0]);
							$("#table_1_1 tbody tr:eq(0) td:eq(2)").html(result[0][1]==""?0:result[0][1]);
							$("#table_1_1 tbody tr:eq(0) td:eq(3)").html(result[0][2]==""?0:result[0][2]);
							$("#table_1_1 tbody tr:eq(0) td:eq(4)").html(result[0][3]==""?0:result[0][3]);
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
			<div class="tb_title"><h4>办学思路与领导作用</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_1_1">
					<thead>
						<tr>
							<td colspan="5">
								<h4 id="filename">1.1学校定位</h4>
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
							<td>分数</td>
							<td>总数</td>
							<td>普通本科生数</td>
							<td>普通高职(含专科)学生数</td>
							<td>含授学生数</td>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>数量</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				<tr>
					<td colspan="5">※以上数据来源：表6-1.学生数量基本情况。</td>
				</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
