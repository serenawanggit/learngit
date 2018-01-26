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
			<table id="table2-3">
				<thead>
					<tr>
						<td colspan="12">
							<h4>2.3 各教学单位教师与本科生情况</h4>
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
						<td rowspan="3">序号</td>
						<td rowspan="3">单位</td>
						<td colspan="7">专任教师</td>
						<td rowspan="3">外聘教师数</td>
						<td rowspan="3">本科生数</td>
						<td rowspan="3">本科生与专任教师之比</td>
					</tr>
					
					<tr>
						<td rowspan="2">总数</td> 
						<td colspan="2">具有高级职称教师</td>
						<td colspan="2">35岁以下青年教师</td>
						<td colspan="2">近五年新增教师</td> 
					</tr>
					
					<tr>
						<td>数量</td>
						<td>比例（%）</td>
						<td>数量</td>
						<td>比例（%）</td>
						<td>数量</td>
						<td>比例（%）</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
<!-- 						<td>123</td>  -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td>  -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td>  -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td>  -->
<!-- 						<td>123</td> -->
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="12">
							<font color="red">※ 以上数据来源：表1-6-1教职工基本信息，表1-6-2外聘教师基本信息，表1-7本科生基本情况。<br/>
【注】：<br/>
1.“专任教师”指具有教师资格、专职从事教学工作的、只属于教学单位的人员，此处统计时不包括直属医院具有医师职称的医生。<br/>
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
						key : "ASDS_table2-3",
						year : $("#year").val()
					},
					success : function(data){
					//length》2是因为这儿输出的[]
					var result = eval("("+data+")");
					if(result==""||result==null){
							hideLodding();
							$("#table2-3 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
					if(data.trim().length>2){
						var str = "";
						$.each(result,function(i,obj){
							str += "<tr>";
							str += "<td>"+(i+1)+"</td>";
							str += "<td>"+obj[0]+"</td>";
							str += "<td>"+obj[1]+"</td>";
							str += "<td>"+obj[2]+"</td>";
							str += "<td>"+valueFormat(obj[3],1)+"</td>";
							str += "<td>"+obj[4]+"</td>";
							str += "<td>"+valueFormat(obj[5],1)+"</td>";
							str += "<td>"+obj[6]+"</td>";
							str += "<td>"+valueFormat(obj[7],1)+"</td>";
							str += "<td>"+obj[8]+"</td>";
							str += "<td>"+obj[9]+"</td>";
							str += "<td>"+valueFormat(obj[10],2)+"</td>";
							
							str += "<tr/>";
						});
						$("#table2-3 tbody").html(str);
						// hide
						hideLodding();
						}else{
						$("#table2-3 tbody").html("<tr><td colspan=\"11\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
						}
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
