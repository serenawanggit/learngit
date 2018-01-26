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
			/*  $("#table_7_2 tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1-1",
						year : $("#year").val(),
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							var html="";
							$.each(result,function(i,obj){
								html=html+"<tr><td>"+(obj[0]==''?'/':obj[0])+"</td><td>"+(obj[1]==''?'/':obj[1])+"</td></tr>";
							});
							$("#table_7_2 tbody").html(html);
						}
					},error:function(){
						alert("加载失败");
					}
			});   */
		}
	</script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>教学质量</h4>
			</div>
		</div>
		<div class="tb_main">
		<h4 id="filename">7.2专业知识和能力</h4>
		评估指标基本要求：<br>
●专业基本理论与技能<br>
达到培养目标的要求，学生掌握了专业基本理论、基本知识和基本技能。<br>
●专业能力<br>
具备了从事本专业相关工作的能力。<br>
		
			<!-- <table border="1" id="table_7_2">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">1.1本专业在校生数</h4>
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
							<td>年级</td>
							<td>学生数</td>
						</tr>
					</thead>
					
					<tbody>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table> -->
		</div>
	</div>
	
</body>
</html>
