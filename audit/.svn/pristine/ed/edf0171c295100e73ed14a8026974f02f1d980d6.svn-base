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
						key : "ASDS_table2_12",
						year : $("#year").val(),
						//num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var str = "";
						if(result.length>0){
							for(var i=0;i<result.length;i++){
								str += "<tr><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] + "</td><td>" + result[i][3] 
								+ "</td><td>" + result[i][4] + "</td><td>" + result[i][5] + "</td><td>" + result[i][6] + "</td><td>" + result[i][7] 
								+ "</td></tr>";
							}
						}
						$("#table_2_12 tbody").html(str);
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
			<div class="tb_title"><h4>师资队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_2_12">
					<thead>
						<tr>
							<td colspan="22">
								<!-- <h4 id="filename">2.2 专业教师队伍结构</h4> -->
								<h4 id="filename">2.12出版教材</h4>
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
							<td colspan="6">出版教材</td>
						</tr> -->
						<tr>
							<td>工号</td>
							<td>教师姓名</td>
							<td>教师名称</td>
							<td>出版社</td>
							<td>ISBN</td>
							<td>出版时间</td>
							<td>教材入选情况</td>
							<td>入选时间</td>
						</tr>
					</thead>
					
					<tbody>
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
