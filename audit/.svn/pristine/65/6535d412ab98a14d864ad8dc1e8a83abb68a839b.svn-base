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
		function Zyselects(){
			hideLodding();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1_10",
						year : $("#year").val(),
						//num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(result.length>0){
							$("#td_1").html(isNaN(result[0][0])?result[0][0]:getFloat(result[0][0],2));
							$("#td_2").html(isNaN(result[0][1])?result[0][1]:getFloat(result[0][1],2));
							$("#td_3").html(isNaN(result[0][2])?result[0][2]:getFloat(result[0][2],2));
							$("#td_4").html(isNaN(result[0][3])?result[0][3]:getFloat(result[0][3],2));
							$("#td_5").html(isNaN(result[0][4])?result[0][4]:getFloat(result[0][4],2));
							$("#td_6").html(isNaN(result[0][5])?result[0][5]:getFloat(result[0][5],2));
							$("#td_7").html(isNaN(result[0][6])?result[0][6]:getFloat(result[0][6],2));
							/* $("#td_1").html(result[0][0]==""?"0":getFloat(result[0][0],2));
							$("#td_2").html(result[0][1]==""?"0":getFloat(result[0][1],2));
							$("#td_3").html(result[0][2]==""?"0":getFloat(result[0][2],2));
							$("#td_4").html(result[0][3]==""?"0":getFloat(result[0][3],2));
							$("#td_5").html(result[0][4]==""?"0":getFloat(result[0][4],2));
							$("#td_6").html(result[0][5]==""?"0":getFloat(result[0][5],2));
							$("#td_7").html(result[0][6]==""?"0":getFloat(result[0][6],2)); */
						}else{
							$("#td_1").html("0");
							$("#td_2").html("0");
							$("#td_3").html("0");
							$("#td_4").html("0");
							$("#td_5").html("0");
							$("#td_6").html("0");
							$("#td_7").html("0");
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
 --%> 	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>学生</h4>
			</div>
		</div>
		<div class="tb_main">
			<!-- <table border="1" id="table_1_3">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">1.3 近三年毕业生去向分布情况</h4>
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
							<td rowspan="2" width="70px">年份</td>
							<td rowspan="2" width="70px">总人数</td>
							<td colspan="9">毕业去向人数</td>
						</tr>
						<tr>
							<td>政府机构</td>
							<td>事业单位</td>
							<td>企业</td>
							<td>部队</td>
							<td>灵活就业</td>
							<td>境内升学</td>
							<td>境外升学</td>
							<td>参加国家地方项目就业</td>
							<td>其他</td>
						</tr>
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table> -->
			<table id="table_1_3">
				<thead>
					<tr>
						<td colspan="15">
							<h4>1.10 学生异动情况</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year" onchange="Zyselects()">
											<option>2018/09/30</option>
											<option selected="selected">2017/09/30</option>
											<option>2016/09/30</option>
											<option>2015/09/30</option>
											<option>2014/09/30</option>
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<!-- <tr>
						<td align="center" colspan="2">学生转专业与处分、缺补考率统计表</td>
					</tr> -->
				</thead>
				
				<tbody>
					
					<tr>
						<td width="60%">在校生休学率：</td> 
						<td id="td_1"></td>
					</tr>
					<tr>
						<td>转专业（转出比例）：</td> 
						<td id="td_2"></td>
					</tr>
					<tr>
						<td>转专业（转入比例）：</td> 
						<td id="td_3"></td>
					</tr>
					<tr>
						<td>当年处分人次：</td> 
						<td id="td_4"></td>
					</tr>
					<tr>
						<td>总体补考率：</td> 
						<td id="td_5"></td>
					</tr>
					<tr>
						<td>缺考率：</td> 
						<td id="td_6"></td>
					</tr>
					<tr>
						<td>学籍警示率：</td> 
						<td id="td_7"></td>
					</tr>
					
				</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
