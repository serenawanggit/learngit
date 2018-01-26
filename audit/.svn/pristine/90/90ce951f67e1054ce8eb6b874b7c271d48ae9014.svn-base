<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="js/ZYReportFormat2.js"></script>
	<script type="text/javascript" src="${chartCtx }/js/echarts/echarts-all.js"></script>
	<script type="text/javascript">
		$(function(){
			//formatEndYear("year");
			//Zyselects();
			formatDate("year");
			hideLodding();
		});
		function Zyselects(){
			hideLodding();
			$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2-2",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var str = "";
						if(result.length>0){
							//总体情况
							$("#table_2_2 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
							$("#table_2_2 tbody tr:eq(0) td:eq(2)").html(valueFormat(result[0][1],1));
							
							//职称
							$("#table_2_2 tbody tr:eq(1) td:eq(2)").html(result[0][2]);
							$("#table_2_2 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][3],1));
							$("#table_2_2 tbody tr:eq(2) td:eq(1)").html(result[0][4]);
							$("#table_2_2 tbody tr:eq(2) td:eq(2)").html(valueFormat(result[0][5],1));
							$("#table_2_2 tbody tr:eq(3) td:eq(1)").html(result[0][6]);
							$("#table_2_2 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][7],1));
							$("#table_2_2 tbody tr:eq(4) td:eq(1)").html(result[0][8]);
							$("#table_2_2 tbody tr:eq(4) td:eq(2)").html(valueFormat(result[0][9],1));
							
							//学位
							$("#table_2_2 tbody tr:eq(5) td:eq(2)").html(result[0][10]);
							$("#table_2_2 tbody tr:eq(5) td:eq(3)").html(valueFormat(result[0][11],1));
							$("#table_2_2 tbody tr:eq(6) td:eq(1)").html(result[0][12]);
							$("#table_2_2 tbody tr:eq(6) td:eq(2)").html(valueFormat(result[0][13],1));
							$("#table_2_2 tbody tr:eq(7) td:eq(1)").html(result[0][14]);
							$("#table_2_2 tbody tr:eq(7) td:eq(2)").html(valueFormat(result[0][15],1));
							
							//年龄
							$("#table_2_2 tbody tr:eq(8) td:eq(2)").html(result[0][16]);
							$("#table_2_2 tbody tr:eq(8) td:eq(3)").html(valueFormat(result[0][17],1));
							$("#table_2_2 tbody tr:eq(9) td:eq(1)").html(result[0][18]);
							$("#table_2_2 tbody tr:eq(9) td:eq(2)").html(valueFormat(result[0][19],1));
							$("#table_2_2 tbody tr:eq(10) td:eq(1)").html(result[0][20]);
							$("#table_2_2 tbody tr:eq(10) td:eq(2)").html(valueFormat(result[0][21],1));
							$("#table_2_2 tbody tr:eq(11) td:eq(1)").html(result[0][22]);
							$("#table_2_2 tbody tr:eq(11) td:eq(2)").html(valueFormat(result[0][23],1));
						

							//学缘
							$("#table_2_2 tbody tr:eq(12) td:eq(2)").html(result[0][24]);
							$("#table_2_2 tbody tr:eq(12) td:eq(3)").html(valueFormat(result[0][25],1));
							$("#table_2_2 tbody tr:eq(13) td:eq(1)").html(result[0][26]);
							$("#table_2_2 tbody tr:eq(13) td:eq(2)").html(valueFormat(result[0][27],1));
							$("#table_2_2 tbody tr:eq(14) td:eq(1)").html(result[0][28]);
							$("#table_2_2 tbody tr:eq(14) td:eq(2)").html(valueFormat(result[0][29],1));
							
						}else{
							str = "<tr><td>暂无表样</td></tr>";
						}
						$("#table_2_2 tbody").html(str);
					},error:function(){
						alert("加载失败");
					}
			});
		}
	</script>
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ZY_ASDS_2-2_echarts.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>师资队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_2_2">
					<thead>
						<tr>
							<td colspan="22">
								<!-- <h4 id="filename">2.2 专业教师队伍结构</h4> -->
								<h4 id="filename">2.14课程教学质量评价统计表</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="Zyselects()">
												<option selected="selected">2017/09/30</option>
												<option>2016/09/30</option>
												<option>2015/09/30</option>
												<option>2014/09/30</option>
												<option>2013/09/30</option>
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						
<!-- 						<tr>
							<td colspan="2" rowspan="2"></td>
							<td colspan="6">专任教师接受培训进修、交流情况</td>
						</tr>
 -->						<!-- <tr>
							<td>人数</td>
							<td>比例</td>
						</tr> -->
						<!-- <tr>
							<td>工号</td>
							<td>教师姓名</td>
							<td>培训进修、交流类型</td>
							<td>开始时间</td>
							<td>结束时间</td>
							<td>备注</td>
						</tr> -->
					</thead>
					<tbody>
						<tr>
							<td>暂无表样</td>
						</tr>
						<!-- <tr>
							<td colspan="2">总体情况</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">职称</td>
							<td>正高级</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>副高级</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>中级</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>初级及以下</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="3">学位</td>
							<td>博士</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>硕士</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>学士及以下</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">年龄</td>
							<td>35岁及以下</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>36-45岁</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>46-55岁</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>56岁及以上</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="3">学缘</td>
							<td>本校</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>外校(境内)</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>外校(境外)</td>
							<td></td>
							<td></td>
						</tr> -->
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	<!-- <div style="width:100%;height:1400px;margin-left:20px;">
			<div  style="width:48%;height:25%;border:1px solid #7B7B7B;float:left;text-align:center;">
				<div style="width:100%;height:30px;border:1px solid #7B7B7B;text-align:center;"><h1 style="font-size:20px">职称结构</h1></div>
				<div id="ASDS_table2_2_zc" style="width:100%;height:350px;text-align:center;"></div>
			</div>
			<div  style="width:48%;height:25%;border:1px solid #7B7B7B;float:left;text-align:center;">
				<div style="width:100%;height:30px;border:1px solid #7B7B7B;text-align:center;"><h1 style="font-size:20px">学位结构</h1></div>
				<div id="ASDS_table2_2_xw" style="width:100%;height:350px;text-align:center;"></div>
			</div>
			<div  style="width:48%;height:25%;border:1px solid #7B7B7B;float:left;text-align:center;">
				<div style="width:100%;height:30px;border:1px solid #7B7B7B;text-align:center;"><h1 style="font-size:20px">年龄结构</h1></div>
				<div id="ASDS_table2_2_nl" style="width:100%;height:350px;text-align:center;"></div>
			</div>
			<div  style="width:48%;height:25%;border:1px solid #7B7B7B;float:left;text-align:center;">
				<div style="width:100%;height:30px;border:1px solid #7B7B7B;text-align:center;"><h1 style="font-size:20px">学缘结构</h1></div>
				<div id="ASDS_table2_2_xy" style="width:100%;height:350px;text-align:center;"></div>
			</div>
		</div> -->
</body>
</html>
