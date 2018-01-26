<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat2.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>定位与目标</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_5">
				<thead>
					<tr>
						<td colspan="9">
							<h4>1.5 专业布局概览</h4>
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
						<td>学科门类</td> 
						<td>所含本科专业数</td> 
						<td>比例(%)</td>
						<td>博士学位授权一级学科点数</td> 
						<td>博士学位授权二级学科点数（不含一级学科覆盖点）</td> 
						<td>硕士学位授权一级学科点数</td>
						<td>硕士学位授权二级学科点数（不含一级学科覆盖点）</td> 
						<td>重点学科数</td> 
					</tr>
				</thead>
				
				<tbody>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="9">
							<font color="red">※ 以上数据来源：表 4-2-2 专业基本情况， 4-1-3 博士点、硕士点，表 4-1-4 重点学科。<br>
							【注】：此表中本科专业数按照《普通高等学校本科专业目录》统计，不含专业方向。		</font>				
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
				
				var html2="";
				var result_sum=0;
				 $.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table1-5-fj-sum",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						result_sum=result[0][0];
						if(result=="" || result==null){
							$("#table_1_5 tbody").html("<tr><td colspan=\"9\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						html2+="<tr>";
							html2+="<td>总计</td> ";
							html2+="<td>"+result[0][0]+"</td> ";
							html2+="<td>/</td> ";//比例自己计算
							html2+="<td>"+result[0][1]+"</td> ";
							html2+="<td>"+result[0][2]+"</td> ";
							html2+="<td>"+result[0][3]+"</td> ";
							html2+="<td>"+result[0][4]+"</td> ";
							html2+="<td>"+result[0][5]+"</td> ";
						html2+="</tr>";
						
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				}); 
				
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table1-5",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result=="" || result==null){
							$("#table_1_5 tbody").html("<tr><td colspan=\"9\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html1="";
						for(var i=0;i<result.length;i++){
							html1+="<tr>";
								html1+="<td>"+result[i][0]+"</td> ";
								html1+="<td>"+result[i][1]+"</td> ";
								html1+="<td>"+valueFormat((result[i][1]/result_sum),1)+"</td> ";//比例自己计算
								html1+="<td>"+result[i][2]+"</td> ";
								html1+="<td>"+result[i][3]+"</td> ";
								html1+="<td>"+result[i][4]+"</td> ";
								html1+="<td>"+result[i][5]+"</td> ";
								html1+="<td>"+result[i][6]+"</td> ";
							html1+="</tr>";
						}
						$("#table_1_5 tbody").html(html1);
						$("#table_1_5 tbody").append(html2);
						// hide
						hideLodding();
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				// hide
				hideLodding();
			});
			
			// 调用方法
			$("#year").change();
		});
	</script>
</body>
</html>
