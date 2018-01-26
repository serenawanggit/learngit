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
			<table id="table_F_15">
				<thead>
					<tr>
						<td colspan="13">
							<h4>附表 15 各专业教学情况一览表</h4>
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
						<td>序 号</td>
						<td>校内专业名称</td>
						<td>优势 专业</td>
						<td>专业设 置时间（年）</td> 
						<td>总 学 时</td>
						<td>总学分</td>
						<td>必修课学分</td>
						<td>选 修 课 学 分</td>
						<td>集中实践环节学分</td>
						<td>课内教学学分</td>
						<td>实验教学学分</td>
						<td>课外科技活动学分</td>
						<td>实践教学学分比例（ %）</td>
					</tr>
				</thead>
				<tbody>
					 
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="13">
							<font color="red">※ 以上数据来源：表 1-5-1 专业基本情况,表4-2专业培养计划。<br/>
							【注】：此表不含没有毕业生的新办专业（（专业设置年+4） <= 当前年）。		</font>						
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
						key : "ASDS_tableF-15",
						year : $("#year").val()
					},
					success : function(data){
					var result = eval("("+data+")");
					if(result==""||result==null){
							// hide
							hideLodding();
							$("#table_F_15 tbody").html("<tr><td colspan=\'10\'><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						if(data.trim().length>0){
						var html="";
						for(var i =0;i<result.length;i++){
							html+="<tr>";
							html+="<td>"+(i+1)+"</td>"; 
							html+="<td>"+result[i][0]+"</td>";
							html+="<td>"+result[i][1]+"</td>";
							html+="<td>"+result[i][2]+"</td>"; 
							html+="<td>"+result[i][3]+"</td>";
							html+="<td>"+result[i][4]+"</td>";
							html+="<td>"+result[i][5]+"</td>"; 
							html+="<td>"+result[i][6]+"</td>"; 
							html+="<td>"+result[i][7]+"</td>"; 
							html+="<td>"+result[i][8]+"</td>"; 
							html+="<td>"+result[i][9]+"</td>"; 
							html+="<td>"+result[i][10]+"</td>"; 
							html+="<td>"+valueFormat(result[i][11],1)+"</td>"; 
							html+="</tr>"; 
						}
						$("#table_F_15 tbody").html(html);
					
					}
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
