<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>详细数据附表</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_F_16">
				<thead>
					<tr>
						<td colspan="9">
							<h4>附表 16 毕业综合训练情况</h4>
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
						<td  rowspan="3">序 号</td> 
						<td  rowspan="3">专业名称</td>
						<td  rowspan="3">校内专业名称</td> 
						<td colspan="6">毕业综合训练</td> 
					</tr>
					<tr>
						<td  rowspan="2">课题数</td>
						<td  rowspan="2">在实验、实习、工程实践和社会调查等社会实践中完成数</td>
						<td rowspan="2">比例（ %）</td>
						<td colspan="2">指导教师数</td>
						<td  rowspan="2">每名校内教师平均指导毕业生数</td>
					</tr>
					<tr>
						<td >校内 教师</td>
						<td >外聘 教师</td>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="9">
							<font color="red">※以上数据来源：表5-2-1分专业毕业综合训练情况，表5-2-2 分专业教师指导学生毕业综合训练情况，表6-5-2应届本科毕业生分专业毕业就业情况。
	<br/>
	【注】：此表是表4.5的详细数据。
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
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_tableF-16",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							// hide
							hideLodding();
							$("#table_F_16 tbody").html("<tr><td colspan=\"8\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html="";
						for(var i =0;i<result.length;i++){
							html+="<tr>";
							html+="<td>"+(i+1)+"</td>"; 
							html+="<td>"+result[i][0]+"</td>";
							html+="<td>"+result[i][1]+"</td>";
							html+="<td>"+result[i][2]+"</td>"; 
							html+="<td>"+result[i][3]+"</td>";
							html+="<td>"+valueFormat(result[i][4], 1)+"</td>";
							html+="<td>"+result[i][5]+"</td>"; 
							html+="<td>"+result[i][6]+"</td>"; 
							html+="<td>"+result[i][7]+"</td>"; 
							html+="</tr>"; 
						}
						$("#table_F_16 tbody").html(html);
						// hide
						hideLodding();
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
