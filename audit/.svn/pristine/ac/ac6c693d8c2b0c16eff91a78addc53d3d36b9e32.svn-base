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
						key : "ASDS_table5-1",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$("#test1").text(result[0][0]==""?0:result[0][0]);
							$("#test2").text(result[0][1]==""?0:result[0][1]);
							$("#test3").text(result[0][2]==""?0:result[0][2]);
							$("#test4").text(result[0][3]==""?0:result[0][3]);
							$("#test5").text(result[0][4]==""?0:result[0][4]);
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
			<div class="tb_title"><h4>课程体系</h4>
			</div>
		</div>
		<div class="tb_main">
			<div align="center"><span style="font-size:15px;">本专业 共开出<u><span id="test1">0</span></u>门课，其中必修课<u><span id="test2">0</span></u>门，理论课时<u><span id="test3">0</span></u>，实践学时<u><span id="test4">0</span></u>。本专业的毕业要求总学分为<u><span id="test5">0</span></u>，本专业课程学分构成具体情况见表1。</span></div>
			 <table border="1" id="table_5_1">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">5.1 课程情况</h4>
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
						
						<tr>
							<td>课程类别</td>
							<td>学分</td>
							<td>占总学分比例（%）</td>
						</tr>
					</thead>
					
					<tbody>
						<!-- <tr>
							<td>数学与自然科学类</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>工程基础、专业基础与专业类</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>工程实践与毕业设计类</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>人文社会科学类通识教育</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>总学分</td>
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
