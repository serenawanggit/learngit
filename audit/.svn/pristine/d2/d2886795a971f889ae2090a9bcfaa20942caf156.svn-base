<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat2.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>学校概要数据</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_G_3">
				<thead>
					<tr>
						<td colspan="2">
							<h4>概要 3 学校《本科教学质量报告》支撑数据指标比较</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year">
<!-- 												<option>2014</option> -->
<!-- 												<option>2013</option> -->
<!-- 												<option>2012</option> -->
<!-- 												<option>2011</option> -->
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<tr>
						<td>指标项</td> 
						<td>学校填报质量报告数据</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td>本科生人数</td> 
						<td></td>
					</tr>
					
					<tr>
						<td>折合学生数</td>
						<td></td>
					</tr>
					<tr>
						<td>全日制在校生数</td>
						<td></td>
					</tr>
					<tr>
						<td>本科生占全日制在校生总数的比例（ %)</td>
						<td></td>
					</tr>
					
					<tr>
						<td>专任教师数量（人）</td>
						<td></td>
					</tr>
					
					<tr>
						<td>具有高级职称的专任教师比例（ %)</td>
						<td></td>
					</tr>
					
					<tr>
						<td>本科招生专业总数</td>
						<td></td>
					</tr>
					
					<tr>
						<td>生师比</td>
						<td></td>
					</tr>
					
					<tr>
						<td>生均教学科研仪器设备值（元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td>年新增教学科研仪器设备值（万元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td>生均纸质图书（册）</td>
						<td></td>
					</tr>
					
					<tr>
						<td>电子图书总数（册）</td>
						<td></td>
					</tr>
					
					<tr>
						<td>电子期刊种类数（种）</td>
						<td></td>
					</tr>
					
					<tr>
						<td>生均教学行政用房（平方米）</td>
						<td></td>
					</tr>
					
					<tr>
						<td>生均实验室面积（平方米）</td>
						<td></td>
					</tr>
					
					<tr>
						<td>生均本科教学日常运行支出（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td>本科专项教学经费(万元)</td>
						<td></td>
					</tr>
					<tr>
						<td>生均本科实验经费(万元)</td>
						<td></td>
					</tr>
					<tr>
						<td>全校开设本科总门数</td>
						<td></td>
					</tr>
					<tr>
						<td>主讲本科课程的教授占教授总数的比例(%)</td>
						<td></td>
					</tr>
					<tr>
						<td>教授授本科课程占总课程数的比例(%)</td>
						<td></td>
					</tr>
					<tr>
						<td>应届本科生毕业率(%)</td>
						<td></td>
					</tr>
					<tr>
						<td>应届本科生学位授予率(%)</td>
						<td></td>
					</tr>
					<tr>
						<td>应届本科生就业率(%)</td>
						<td></td>
					</tr>
					<tr>
						<td>体质测试达标率(%)</td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="2">
						<font color="red">※	【注】：<br/>
							1. 指标内涵按《教育部办公厅关于普通高等学校编制发布 2012 年〈本科教学质量报告〉的通知》（教高司函﹝2013﹞33 号）文件的解释；<br/>
							2. 水平评估当年数据和质量报告数据由学校直接上报。<br/>
							3. “专任教师”指具有教师资格、专职从事教学工作的、只属于教学单位的人员。<br/>
							4. 折合在校生数=普通本、专科（高职)生数+全日制硕士生数×1.5+全日制博士生数×2+留学生数×3+预科生<br/>
							数+进修生数+成人脱产班学生数+夜大（业余)学生数×0.3+函授生数×0.1 （不包括自考生）<br/>
							5. 全日制在校生数=普通本、专科（高职)生数+全日制硕士生数+全日制博士生数+留学生数+预科生数+成<br/>
							人脱产班学生数+进修生数<br/>
							6. 生师比=折合在校生数/教师总数（教师总数= 专任教师数+ 外聘教师数 × 0.5） 。	</font>
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
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableG-3",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
					if(data.trim().length>0){
						var result = eval("("+data+")");
						$("#table_G_3 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_G_3 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						$("#table_G_3 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
						$("#table_G_3 tbody tr:eq(3) td:eq(1)").html(valueFormat(result[0][3],1));
						$("#table_G_3 tbody tr:eq(4) td:eq(1)").html(result[0][4]);
						$("#table_G_3 tbody tr:eq(5) td:eq(1)").html(valueFormat(result[0][5],1));
						$("#table_G_3 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
						$("#table_G_3 tbody tr:eq(7) td:eq(1)").html(result[0][7]);
						$("#table_G_3 tbody tr:eq(8) td:eq(1)").html((valueFormat(result[0][8],2)*10000));
						$("#table_G_3 tbody tr:eq(9) td:eq(1)").html(valueFormat(result[0][9],2));
						$("#table_G_3 tbody tr:eq(10) td:eq(1)").html(valueFormat(result[0][10],2));
						$("#table_G_3 tbody tr:eq(11) td:eq(1)").html(valueFormat(result[0][11],2));
						$("#table_G_3 tbody tr:eq(12) td:eq(1)").html(valueFormat(result[0][12],2));
						$("#table_G_3 tbody tr:eq(13) td:eq(1)").html(valueFormat(result[0][13],2));
						$("#table_G_3 tbody tr:eq(14) td:eq(1)").html(valueFormat(result[0][14],2));
						$("#table_G_3 tbody tr:eq(15) td:eq(1)").html(valueFormat(result[0][15],2));
						$("#table_G_3 tbody tr:eq(16) td:eq(1)").html(valueFormat(result[0][16],2));
						$("#table_G_3 tbody tr:eq(17) td:eq(1)").html(valueFormat(result[0][17],2));
						$("#table_G_3 tbody tr:eq(18) td:eq(1)").html(valueFormat(result[0][18],2));
						$("#table_G_3 tbody tr:eq(19) td:eq(1)").html(valueFormat(result[0][19],1));
						$("#table_G_3 tbody tr:eq(20) td:eq(1)").html(valueFormat(result[0][20],1));
						$("#table_G_3 tbody tr:eq(21) td:eq(1)").html(valueFormat(result[0][21],1));
						$("#table_G_3 tbody tr:eq(22) td:eq(1)").html(valueFormat(result[0][22],1));
						$("#table_G_3 tbody tr:eq(23) td:eq(1)").html(valueFormat(result[0][23],1));
						$("#table_G_3 tbody tr:eq(24) td:eq(1)").html(valueFormat(result[0][24],1));
						hideLodding();
						}else{
							hideLodding();
							return;
						}
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				// hide
			});
			
			// 调用方法
			$("#year").change();
		});
	</script>
</body>
</html>
