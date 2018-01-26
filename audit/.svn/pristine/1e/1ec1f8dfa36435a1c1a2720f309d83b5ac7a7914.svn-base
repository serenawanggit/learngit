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
			<table id="table_1_6">
				<thead>
					<tr>
						<td colspan="9">
							<h4>1.6 教学单位学科专业概览</h4>
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
						<td>序号</td> 
						<td>单位</td> 
						<td>本科专业数</td>
						<td>博士后流动站数</td> 
						<td>博士学位授权一级学科点</td> 
						<td>博士学位授权二级学科点（不含一级覆盖点）</td>
						<td>硕士学位授权一级学科点</td> 
						<td>硕士学位授权二级学科点（不含一级覆盖点）</td> 
						<td>重点学科数</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td></td> 
						<td></td>
						<td></td>
						<td></td> 
						<td></td>
						<td></td>
						<td></td> 
						<td></td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="9">
							<font color="red">※ 此表来源：表 1-4 学校教学科研单位，表 4-1-2 博士后流动站，表 4-2-2 专业基本情况，表 4-1-3 博<br>
							士点、硕士点，表 4-1-4 重点学科。<br>
							【注】：此表中本科专业数按照校内实际专业统计，包含专业方向。	</font>				
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
						key : "ASDS_table1-6",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result=="" || result==null){
							$("#table_1_6 tbody").html("<tr><td colspan=\"9\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						for(var i=0;i<result.length;i++){
							if(result[i][0]!=0){
								 html+="<tr>";
									 html+="<td>"+(i+1)+"</td>";
									html+="<td>"+result[i][0]+"</td> ";
									html+="<td>"+result[i][1]+"</td>";
									html+="<td>"+result[i][2]+"</td>";
									html+="<td>"+result[i][3]+"</td> ";
									html+="<td>"+result[i][4]+"</td>";
									html+="<td>"+result[i][5]+"</td>";
									html+="<td>"+result[i][6]+"</td> ";
									html+="<td>"+result[i][7]+"</td>";
								html+="</tr>";
							}
						}
						
						$("#table_1_6 tbody").html(html);
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
