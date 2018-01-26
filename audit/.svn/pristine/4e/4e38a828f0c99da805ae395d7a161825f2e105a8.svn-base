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
			/*  $("#table_7_1 tbody").empty();
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
		<h4 id="filename">7.德育</h4>
		评估指标基本要求：<br>
●思想政治教育<br>
学校创新思想政治教育形式，丰富思想政治教育内容，思想政治教育工作的针对性和实效性较强，学生比较满意，评价较高。<br>
●思想品德<br>
学生展现出良好的思想政治素质，表现出服务国家和服务人民的社会责任感和公民意识，具有团结互助、诚实守信、遵纪守法、艰苦奋斗的良好品质，学生能积极参与志愿服务等公益活动。
		
			<!-- <table border="1" id="table_7_1">
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
