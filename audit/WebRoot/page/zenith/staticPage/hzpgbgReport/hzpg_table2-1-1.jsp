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
						key : "ASDS_table2-1-1",
						year : $("#year").val(),
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
						//学生
							$("#table_2_1_1 tbody tr:eq(0) td:eq(2)").html(result[0][0]==""?0:result[0][0]);
							$("#table_2_1_1 tbody tr:eq(1) td:eq(1)").html(result[0][1]==""?0:result[0][1]);
							$("#table_2_1_1 tbody tr:eq(2) td:eq(1)").html(result[0][2]==""?0:result[0][2]);
							$("#table_2_1_1 tbody tr:eq(3) td:eq(1)").html(result[0][3]==""?0:result[0][3]);
							$("#table_2_1_1 tbody tr:eq(4) td:eq(1)").html(result[0][4]==""?0:result[0][4]);
						//专任教师
							$("#table_2_1_1 tbody tr:eq(5) td:eq(2)").html(result[0][5]==""?0:result[0][5]);
							$("#table_2_1_1 tbody tr:eq(6) td:eq(1)").html(result[0][6]==""?0:result[0][6]);
							$("#table_2_1_1 tbody tr:eq(7) td:eq(1)").html(result[0][7]==""?0:result[0][7]);
							$("#table_2_1_1 tbody tr:eq(8) td:eq(1)").html(result[0][8]==""?0:result[0][8]);
							$("#table_2_1_1 tbody tr:eq(9) td:eq(1)").html(result[0][9]==""?0:result[0][9]);
						//外聘教师
						$("#table_2_1_1 tbody tr:eq(10) td:eq(1)").html(result[0][10]==""?0:result[0][10]);
						//生师比
						$("#table_2_1_1 tbody tr:eq(11) td:eq(1)").html(result[0][11]==""?0:result[0][11]);
						//主讲本科课程教师总计
						$("#table_2_1_1 tbody tr:eq(12) td:eq(1)").html(result[0][12]==""?0:result[0][12]);
						//师资总数
						$("#table_2_1_1 tbody tr:eq(13) td:eq(1)").html(result[0][13]==""?0:result[0][13]);
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
			<div class="tb_title"><h4>教师队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_2_1_1">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">2.1.1学校专任教师数量、生师比及主讲教师情况</h4>
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
							<td colspan="2">项目</td>
							<td>数量</td>
							<td>基本要求</td>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td rowspan="5">学生</td>
							<td>普通本科生</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td>普通高职(专科)生</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td>自考学生</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td>其他注2</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td>折合在校生数</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td rowspan="5">专任教师</td>
							<td>总计</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td>其中：具有硕士学位</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td>具有博士学位</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td>双师型</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td>具有硕士、博士学位比例</td>
							<td></td>
							<td>不低于50%</td>
						</tr>
						<tr>
							<td colspan="2">外聘教师</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td colspan="2">生师比</td>
							<td></td>
							<td>不高于22:1</td>
						</tr>
						<tr>
							<td colspan="2">主讲本科课程教师总计</td>
							<td></td>
							<td>-</td>
						</tr>
						<tr>
							<td colspan="2">师资总数</td>
							<td></td>
							<td>-</td>
						</tr>
					</tbody>
				
				<tfoot>
					<tr>
						<td colspan="4">
							【注】：<br>
1.“专任教师”指具有教师资格，专门从事教学工作的人员；“师资”指学校在编的具有教师专业技术职称的人员。<br/>
2.“学生”数量中“其他”包括研究生、外国留学生、普通预科生、进修生、成人脱产班学生、夜大（业余）学生、函授学生和网络学生等。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
