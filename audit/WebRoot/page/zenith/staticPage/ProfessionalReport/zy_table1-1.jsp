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
			//Njselects();
		});
		function Zyselects(){
			hideLodding();
			$("#table_G_3 tbody").empty();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1_1",
						year : $("#year").val(),
						//num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var str = "";
						var selStr = "";
						if(result.length>0){
							for(var i=0;i<result.length;i++){
								str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td></tr>";
								if(result[i][0]!="总计"){
									selStr += "<option>" + result[i][0] + "</option>";
								}
							}
						}
						$("#table_G_3 tbody").html(str);
						$("#grade").html(selStr);
					},error:function(){
						alert("加载失败");
					}
			});
			Njselects();
		}
		
		function Njselects(){
			hideLodding();
			$("#table_1_1 tbody").empty();
			$.ajax({
					url : "/CHART/analysisReport/analysis_getAnalysisReportListByYearOne.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1_1_2",
						year : $("#year").val(),
						grade:$("#grade").val(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var str = "";
						if(result.length>0){
							$("#line").html("总行数："+result.length);
							for(var i=0;i<result.length;i++){
								str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td>" + result[i][3] 
								+ "</td><td>" + result[i][4] + "</td><td>" + result[i][5] + "</td><td>" + result[i][6] + "</td></tr>";
							}
						}
						$("#table_1_1 tbody").html(str);
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
			<div class="tb_title"><h4>学生</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_G_3">
				<thead>
					<tr>
						<td colspan="2">
							<h4>1.1本专业在校学生数</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year" onchange="Zyselects()">
												<option>2017/09/30</option>
												<option selected="selected">2016/09/30</option>
												<option>2015/09/30</option>
												<option>2014/09/30</option>
												<option>2013/09/30</option>
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<!-- <tr>
						<td colspan="2" align="center">本专业在校学生数</td>
					</tr> -->
					<tr>
						<td>年级</td>
						<td>学生数</td>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
		
		<div class="tb_main">
			<table id="table_1_1">
				<thead>
					<tr>
						<td colspan="7">
							<h4 id="line"></h4>
							<div class="chocieYear">
								<ul>
									<li>年级：
										<select class="select_tips tb_select" id="grade" onchange="Njselects()">
												<option selected="selected">2016</option>
												<option>2015</option>
												<option>2014</option>
												<option>2013</option>
												<option>2012</option>
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<tr>
						<td>学号</td>
						<td>姓名</td>
						<td>性别</td>
						<td>校内专业（大类）名称</td>
						<td>校内专业（大类）代码</td>
						<td>生源类别</td>
						<td>年级</td>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<td id="td_1"></td>
						<td id="td_2"></td>
					</tr>
				</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
		
	</div>
	
</body>
</html>
