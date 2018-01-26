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
			<div class="tb_title"><h4>培养过程</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_4_5" border="1">
				<thead>
					<tr>
						<td colspan="10">
							<h4>4.5 毕业综合训练情况</h4>
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
						<td rowspan="3">专业名称</td> 
						<td rowspan="3">校内专业名称</td>
						<td colspan="7">毕业综合训练</td>
					</tr>
					<tr>
						<td rowspan="2">课题数</td> 
						<td rowspan="2">在实验、实习、工程实践和社会调查等社会实践中完成数</td> 
						<td rowspan="2">比 例（%）</td>
						<td colspan="3">指导教师数</td>
						<td rowspan="2">每名校内教师平均指导毕业生数</td>
					</tr>
					<tr>
						<td>校内教师</td>
						<td>其中：副高以上职称</td>
						<td>外聘教师</td>

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
					
					<tr>
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
						<td colspan="10">
							<font color="red">※以上数据来源：表5-2-1分专业毕业综合训练情况，表5-2-2 分专业教师指导学生毕业综</br>
							合训练情况，表6-5-2应届本科毕业生分专业毕业就业情况。</br>
                                                                      【注】：此表只取每名教师平均指导毕业生数最高和最低的5个专业，详细数据可参考【附表16毕业综合训练情况】。</font>	
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
						key : "ASDS_table4-5",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						console.info(result);
						if(result==""||result==null){
							$("#table_4_5 tbody").html("<tr><td colspan=\"8\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+obj[3]+"</td>";
								html+="<td>"+obj[4]+"</td>";
								html+="<td>"+valueFormat(obj[5],1)+"</td>";
								html+="<td>"+obj[6]+"</td>";
								html+="<td>"+obj[7]+"</td>";
								html+="<td>"+obj[8]+"</td>";
								html+="<td>"+obj[9]+"</td>";
							html+="</tr>"; 
						});
						$("#table_4_5 tbody").html(html);
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
