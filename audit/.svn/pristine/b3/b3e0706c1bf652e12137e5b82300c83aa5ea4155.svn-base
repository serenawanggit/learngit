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
			Zyselects();
		});
		
		function byyear(){
		Zyselects();
		}
		
		function Zyselects(){
			hideLodding();
			$("#table_1_1 tbody").empty();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table0_0",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						console.info(result);
						if(data.length>2){
							var html="";	
							$("#FIELD1").html(result[0][0]);$("#FIELD12").html(result[0][11]);
							$("#FIELD2").html(result[0][1]);$("#FIELD13").html(result[0][12]);
							$("#FIELD3").html(result[0][2]);$("#FIELD14").html(result[0][13].toFixed(2));
							$("#FIELD4").html(result[0][3]);$("#FIELD15").html(result[0][14]);
							$("#FIELD5").html(result[0][4]);$("#FIELD16").html(result[0][15].toFixed(2));
							$("#FIELD6").html(result[0][5]);$("#FIELD17").html(result[0][16].toFixed(2));
							$("#FIELD7").html(result[0][6]);$("#FIELD18").html(result[0][17]);
							$("#FIELD8").html(result[0][7]);$("#FIELD19").html(result[0][18]);
							$("#FIELD9").html(result[0][8]);$("#FIELD20").html(result[0][19]);
							$("#FIELD10").html(result[0][9]);$("#FIELD21").html(result[0][20]);
							$("#FIELD11").html(result[0][10]);$("#FIELD22").html(result[0][21]);
							                          $("#FIELD23").html(result[0][22]);
						}else{
						  		$("#FIELD1").html(" ");$("#FIELD12").html(" ");
							$("#FIELD2").html(" ");$("#FIELD13").html(" ");
							$("#FIELD3").html(" ");$("#FIELD14").html(" ");
							$("#FIELD4").html(" ");$("#FIELD15").html(" ");
							$("#FIELD5").html(" ");$("#FIELD16").html(" ");
							$("#FIELD6").html(" ");$("#FIELD17").html(" ");
							$("#FIELD7").html(" ");$("#FIELD18").html(" ");
							$("#FIELD8").html(" ");$("#FIELD19").html(" ");
							$("#FIELD9").html(" ");$("#FIELD20").html(" ");
							$("#FIELD10").html(" ");$("#FIELD21").html(" ");
							$("#FIELD11").html(" ");$("#FIELD22").html(" ");
							                          $("#FIELD23").html(" ");
						}
					},error:function(){
						alert("加载失败");
					}
			});
		}
	</script>
</head>

<body>
<%-- 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
 --%>	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>专业基本信息</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_0_0">
				<thead>
					<tr>
						<td colspan="2">
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year" onchange="byyear()">
										<option>2017</option>
										<option selected="selected">2016</option>
										<option>2015</option>
										<option>2014</option>
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<tr>
						<td colspan="2" align="center">专业基本信息</td>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<td style="width:20%">专业介绍</td>
						<td style="width:80%" id="FIELD1"></td>
					</tr>
					<tr>
						<td style="width:20%">人才培养目标</td>
						<td style="width:80%;text-align:left;" id="FIELD2"></td>
					</tr>
					<tr>
						<td>生师比</td>
						<td id="FIELD3"></td>
					</tr>
					<tr>
						<td>专任教师数/平均年龄</td>
						<td id="FIELD4"></td>
					</tr>
					<tr>
						<td>其中：教授/副教授</td>
						<td id="FIELD5"></td>
					</tr>
					<tr>
						<td>博士研究生/硕士研究生 </td>
						<td id="FIELD6"></td>
					</tr>
					<tr>
						<td>双师比例/海外经历教师比例</td>
						<td id="FIELD7"></td>
					</tr>
					<tr>
						<td>当年平均课时</td>
						<td id="FIELD8"></td>
					</tr>
					<tr>
						<td>当年教授、副教授上课比例</td>
						<td id="FIELD9"></td>
					</tr>
					<tr>
						<td>教学质量评价全校排名情况</td>
						<td id="FIELD10"></td>
					</tr>
					<tr>
						<td>学生数</td>
						<td id="FIELD11"></td>
					</tr>
					<tr>
						<td>当年招生数、报到率</td>
						<td id="FIELD12"></td>
					</tr>
					<tr>
						<td>当年毕业生数</td>
						<td id="FIELD13"></td>
					</tr>
					<tr>
						<td>当年最终毕业率</td>
						<td id="FIELD14"></td>
					</tr>
					<tr>
						<td>当年初次学位授予率</td>
						<td id="FIELD15"></td>
					</tr>
					<tr>
						<td>当年最终学位授予率</td>
						<td id="FIELD16"></td>
					</tr>
					<tr>
						<td>当年初次就业率</td>
						<td id="FIELD17"></td>
					</tr>
					<tr>
						<td>其中：攻读研究生比例</td>
						<td id="FIELD18"></td>
					</tr>
					<tr>
						<td>出国深造比例</td>
						<td id="FIELD19"></td>
					</tr>
					<tr>
						<td>事业单位、国企比例</td>
						<td id="FIELD20"></td>
					</tr>
					<tr>
						<td>创业比例</td>
						<td id="FIELD21"></td>
					</tr>
					<tr>
						<td>就业专业对口率</td>
						<td id="FIELD22"></td>
					</tr>
					<tr>
						<td>学生和用人单位满意度</td>
						<td id="FIELD23"></td>
					</tr>
				</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
