<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat.js"></script>
</head>

<body>
 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
 	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>教师队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			 <table id="table2-1">
				<thead>
					<tr>
						<td colspan="4">
							<h4 id="filename">学校教师情况及生师比</h4>
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
						<td colspan="2">项目</td> 
						<td>数量</td> 
						<td>百分比（%）</td>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<td rowspan="6">专任教师数</td> 
						<td>总计</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>其中：具有硕士学位</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>具有博士学位</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>双师型</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>具有工程背景</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>具有行业背景</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td rowspan="2">外聘教师</td> 
						<td>总计</td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td>其中：境外教师</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td colspan="2">折合在校生数</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td colspan="2">生师比</td> 
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td colspan="2">本科课程授课校内教师数</td> 
						<td></td> 
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="4">
						<font color="red">	
						※以上数据来源：表1-6-1 教职工基本信息，表1-6-2外聘教师基本信息，表1-6-3附属医院师资情况，表5-1-1开课情况，表6-1学生数量基本情况。<br>
						【注】：<br>
						1. 折合在校生数=普通本、专科（高职)生数+全日制硕士生数×1.5+全日制博士生数×2+留学生数×3+预科生数+进修生数+成人脱产班学生数+夜大（业余)学生数×0.3+函授生数×0.1（不包括自考生）。<br/>
						2.“专任教师”指具有教师资格、专职从事教学工作的、只属于教学单位的人员，此处统计时不包括直属医院具有医师职称的医生。<br/>
						3.生师比=折合在校生数/教师总数（教师总数= 专任教师数 + 外聘教师数 ×0.5）；此处计算生师比时，直属医院具有医师职称的医生按15%比例计入统计。<br/>
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
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-1",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table2-1 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						$("#table2-1 tr:eq(2) td:eq(2)").html(result[0][0]);
 						$("#table2-1 tr:eq(2) td:eq(3)").html('/');
						
						$("#table2-1 tr:eq(3) td:eq(1)").html(result[0][1]);
						$("#table2-1 tr:eq(3) td:eq(2)").html(valueFormat(result[0][2],1));
						
						$("#table2-1 tr:eq(4) td:eq(1)").html(result[0][3]);
						$("#table2-1 tr:eq(4) td:eq(2)").html(valueFormat(result[0][4],1));
						
						$("#table2-1 tr:eq(5) td:eq(1)").html(result[0][5]);
						$("#table2-1 tr:eq(5) td:eq(2)").html(valueFormat(result[0][6],1));
						
						$("#table2-1 tr:eq(6) td:eq(1)").html(result[0][7]);
						$("#table2-1 tr:eq(6) td:eq(2)").html(valueFormat(result[0][8],1));
						
						$("#table2-1 tr:eq(7) td:eq(1)").html(result[0][9]);
						$("#table2-1 tr:eq(7) td:eq(2)").html(valueFormat(result[0][10],1));
						
						$("#table2-1 tr:eq(8) td:eq(2)").html(result[0][11]);
 						$("#table2-1 tr:eq(8) td:eq(3)").html('/');
						
						$("#table2-1 tr:eq(9) td:eq(1)").html(result[0][12]);
						$("#table2-1 tr:eq(9) td:eq(2)").html(valueFormat(result[0][13],1));

						$("#table2-1 tr:eq(10) td:eq(1)").html(result[0][14]);
						$("#table2-1 tr:eq(10) td:eq(2)").html('/');

						$("#table2-1 tr:eq(11) td:eq(1)").html(result[0][15]);
						$("#table2-1 tr:eq(11) td:eq(2)").html('/');

						$("#table2-1 tr:eq(12) td:eq(1)").html(result[0][16]);
 						$("#table2-1 tr:eq(12) td:eq(2)").html('/');
						
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
