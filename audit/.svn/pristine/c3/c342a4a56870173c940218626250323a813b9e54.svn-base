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
						key : "ASDS_table3-1-1",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							$("#table_3_1_1 tbody tr:eq(0) td:eq(1)").html(result[0][0]==""?0:valueFormat(result[0][0],2));
							$("#table_3_1_1 tbody tr:eq(1) td:eq(1)").html(result[0][1]==""?0:result[0][1]);
							$("#table_3_1_1 tbody tr:eq(2) td:eq(1)").html(result[0][2]==""?0:result[0][2]);
							$("#table_3_1_1 tbody tr:eq(3) td:eq(1)").html(result[0][3]==""?0:result[0][3]);
							$("#table_3_1_1 tbody tr:eq(4) td:eq(1)").html(result[0][4]==""?0:result[0][4]);
							$("#table_3_1_1 tbody tr:eq(5) td:eq(1)").html(result[0][5]==""?0:result[0][5]);
							$("#table_3_1_1 tbody tr:eq(6) td:eq(1)").html(result[0][6]==""?0:result[0][6]);
							$("#table_3_1_1 tbody tr:eq(7) td:eq(1)").html(result[0][7]==""?0:result[0][7]);
							$("#table_3_1_1 tbody tr:eq(8) td:eq(1)").html(result[0][8]==""?0:result[0][8]);
							$("#table_3_1_1 tbody tr:eq(9) td:eq(1)").html(result[0][9]==""?0:result[0][9]);
							
							$("#table_3_1_1 tbody tr:eq(10) td:eq(1)").html(result[0][10]==""?0:result[0][10]);
							$("#table_3_1_1 tbody tr:eq(11) td:eq(1)").html(result[0][11]==""?0:result[0][11]);
							$("#table_3_1_1 tbody tr:eq(12) td:eq(1)").html(result[0][12]==""?0:result[0][12]);
							$("#table_3_1_1 tbody tr:eq(13) td:eq(1)").html(result[0][13]==""?0:result[0][13]);
							$("#table_3_1_1 tbody tr:eq(14) td:eq(1)").html(result[0][14]==""?0:result[0][14]);
							$("#table_3_1_1 tbody tr:eq(15) td:eq(1)").html(result[0][15]==""?0:result[0][15]);
							$("#table_3_1_1 tbody tr:eq(16) td:eq(1)").html(result[0][16]==""?0:result[0][16]);
							$("#table_3_1_1 tbody tr:eq(17) td:eq(1)").html(result[0][17]==""?0:result[0][17]);
							$("#table_3_1_1 tbody tr:eq(18) td:eq(1)").html(result[0][18]==""?0:result[0][18]);
							$("#table_3_1_1 tbody tr:eq(19) td:eq(1)").html(result[0][19]==""?0:result[0][19]);
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
			<div class="tb_title"><h4>学生</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_3_1_1">
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
							<td>项目</td>
							<td>学校情况</td>
							<td>办学条件指标合格标准</td>
							<td>办学条件指标限制招生标准</td>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>教学行政用房总面积</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>生均教学行政用房面积</td>
							<td></td>
							<td>14平方/生</td>
							<td>8平方米/生</td>
						</tr>
						<tr>
							<td>百名学生多媒体教室和语音实验室座位数</td>
							<td></td>
							<td>百名学生配多媒体教室和语音实验室座位数不少于7个</td>
							<td>-</td>
						</tr>
						<tr>
							<td>生均教学科研仪器设备值</td>
							<td></td>
							<td>5000元</td>
							<td>3000元</td>
						</tr>
						<tr>
							<td>新增教学科研仪器设备值所占比例</td>
							<td></td>
							<td>10%</td>
							<td>-</td>
						</tr>
						<tr>
							<td>校园网主干带宽</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>校园网出口带宽</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>纸质图书总量</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>生均纸质图书</td>
							<td></td>
							<td>100册</td>
							<td>50册</td>
						</tr>
						<tr>
							<td>电子图书总量</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>生均电子图书</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>当年新增纸质图书</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>生均年进纸质图书</td>
							<td></td>
							<td>4册</td>
							<td>-</td>
						</tr>
						<tr>
							<td>当年新增电子图书</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>当年图书流通量</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>纸质期刊总量</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>纸质期刊种类数</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>数据库</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>电子期刊种类</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
						<tr>
							<td>当年文献购置费</td>
							<td></td>
							<td>-</td>
							<td>-</td>
						</tr>
					</tbody>
				
				<tfoot>
				<tr>
					<td colspan="4">
						【注】：当年文献购置费：指年度学校及各教学单位用于图书、期刊（包括纸质类和电子类）购置的实际支出经费。<br>
						※以上数据来源：表2-2.教学行政用房面积，表2-3-1.图书馆，表2-3-2.图书当年新增情况，表2-5.校园网，表2-6.固定资产，表6-1.学生数量基本情况。
					</td>
				</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
