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
			//formatEndYear("year");
			formatDate("year");
			//Zyselects();
		});
		/* function Zyselects(){
			hideLodding();
			$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1-4",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$.each(result,function(i,obj){
								$("#table_1_4 tbody tr:eq(0) td:eq("+(i+1)+")").html(obj[1]);
								$("#table_1_4 tbody tr:eq(1) td:eq("+(i+1)+")").html(obj[2]);
							});
						}
					},error:function(){
						alert("加载失败");
					}
			});
		} */
	</script>
</head>

<body>
<%-- 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
 --%>	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>学生</h4>
			</div>
		</div>
		<div class="tb_main">
			<!-- <table border="1" id="table_1_4">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">1.4 近三年本专业学生转入转出情况</h4>
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
							<td>年份</td>
							<td>2014年</td>
							<td>2015年</td>
							<td>2016年</td>
						</tr>
						
					</thead>
					
					<tbody>
						<tr>
							<td>转入人数</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>转出人数</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table> -->
			<table border="1" id="table_1_4">
					<thead>
					<tr>
						<td colspan="15">
							<h4>1.9 学生社团</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year">
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<!-- <tr>
						<td align="center" colspan="2">学生社团</td>
					</tr> -->
					<tr>
						<td colspan="2">项目</td>
						<td>数量</td>
					</tr>
				</thead>
				
				<tbody>
					<!-- <tr>
						<td>暂无表样</td>
					</tr> -->
					<tr>
						<td rowspan="6" style="font-weight:bold;">1.社团</td> 
						<td>总数</td>
						<td></td>
					</tr>
					<tr>
						<td>其中：科技类</td> 
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;人文社会类</td> 
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;体育类</td> 
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;文艺类</td> 
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;其他</td> 
						<td></td>
					</tr>
					<tr>
						<td rowspan="6" style="font-weight:bold;">2.参与人数（人次）</td> 
						<td>总数</td>
						<td></td>
					</tr>
					<tr>
						<td>其中：科技类</td> 
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;人文社会类</td> 
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;体育类</td> 
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;文艺类</td> 
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;&nbsp;&nbsp;其他</td> 
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	
</body>
</html>
