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
			/* $.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_tableG",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						
						}
					},error:function(){
						alert("加载失败");
					}
			}); */
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
			<table border="1" id="table_2_3_2">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">2.3.2 专任教师企业工作经历</h4>
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
							<td rowspan="2">序号</td>
							<td rowspan="2">姓名</td>
							<td rowspan="2">工号</td>
							<td colspan="2">企业经历</td>
						</tr>
						<tr>
							<td>起止时间</td>
							<td>工作内容</td>
						</tr>
					</thead>
					
					<tbody>
						<!-- <tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr> -->
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
