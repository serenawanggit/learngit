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
						key : "ASDS_table1_4",
						year : $("#year").val(),
						//num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var str = "";
						if(result.length>0){
							$.each(result,function(i,obj){
								/* $("#table_1_4 tbody tr:eq(0) td:eq("+(i+1)+")").html(obj[1]);
								$("#table_1_4 tbody tr:eq(1) td:eq("+(i+1)+")").html(obj[2]); */
								str += "<tr><td>" + obj[0] + "</td><td>" + obj[1] + "</td><td>" + obj[2] + "</td><td>" + obj[3] + "</td><td>" + obj[4] 
								+ "</td><td>" + obj[5] + "</td><td>" + obj[6] + "</td><td>" + obj[7] + "</td><td>" + obj[8] + "</td><td>" + obj[9] 
								+ "</td><td>" + obj[10] + "</td></tr>";
							});
						}
						$("#table_1_4 tbody").html(str);
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
			<table border="1" id="table_1_4">
					<thead>
					<tr>
						<td colspan="15">
							<h4>1.4 近三年毕业生去向分布情况</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year" onchange="Zyselects()">
											<option>2014/09/30</option> 
											<option>2015/09/30</option> 
											<option selected="selected">2016/09/30</option> 
											<option>2017/09/30</option> 
											<option>2018/09/30</option> 
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<!-- <tr>
						<td align="center" colspan="4">近三年毕业生趋向分布情况</td>
					</tr> -->
					<tr>
						<td rowspan="2">年份</td>
						<td rowspan="2">总人数</td>
						<td colspan="9">毕业去向人数</td>
					</tr>
					<tr>
						<!-- <td>教学科研单位名称</td>
						<td>单位号</td>
						<td>单位职能</td>
						<td>单位负责人</td> -->
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
					<!-- 
					<tr>
						<td width="60%">在校生休学率</td> 
						<td></td>
					</tr>
					<tr>
						<td>转专业（转出比例）</td> 
						<td></td>
					</tr>
					<tr>
						<td>转专业（转入比例）</td> 
						<td></td>
					</tr>
					<tr>
						<td>转专业（转入比例）</td> 
						<td></td>
					</tr>
					<tr>
						<td>总体补考率</td> 
						<td></td>
					</tr>
					<tr>
						<td>总体补考率</td> 
						<td></td>
					</tr>
					<tr>
						<td>学籍警示率</td> 
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
