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
			<div class="tb_title"><h4>教学资源</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_3_8">
				<thead>
					<tr>
						<td colspan="7">
							<h4>3.7.1 全校课程开设情况</h4>
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
						<td>课程类别</td> 
						<td>课程门数</td> 
						<td>其中：高级职称教师讲授课程门数比例</td> 
						<td>课程门次数</td>
						<td>双语课程门数</td> 
						<td>平均学时数</td> 
						<td>平均班规模（人）</td>
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
					</tr>
					
					<tr>
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
						<td colspan="7">
							<font color="red">※ 以上数据来源：表5-1-1开课情况。，<br/>
【注】：1.此表为全校数据统计；<br/>
2.课程门数=表5-1-1中此类课程编号数（查重）；课程门次数=表5-1-1中此类课程编号数（不查重）；平均班规模=Σ（此类课程门次内的本科学生数）/课程门次数；平均学时数=Σ（此类课程门次内的学时）/课程门次数。
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
						key : "ASDS_table3-7-1",
						year : $("#year").val()
					},
					success : function(data){
						if(data.trim().length>0){
					var result = eval("("+data+")");
						if(result==""||result==null){
							$("#table_3_8 tbody").html("<tr><td colspan=\"6\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						html+="<tr>";
							html+="<td>"+result[0][0]+"</td>"; 
							html+="<td>"+result[0][1]+"</td>";
							html+="<td>"+result[0][2]+"</td>";
							html+="<td>"+result[0][3]+"</td>"; 
							html+="<td>"+valueFormat(result[0][4],2)+"</td>";
							html+="<td>"+valueFormat(result[0][5],2)+"</td>";
							html+="<td>"+valueFormat(result[0][6],2)+"</td>";
						html+="</tr>";
						$("#table_3_8 tbody").html(html);
					}else{
					 $("#table_3_8 tbody").html("<tr><td colspan=\"6\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
					}
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				//f-1
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-7-fj-qy-1",
						year : $("#year").val()
					},
					success : function(data){
                                                if(data.trim().length>0){
                                                     var result = eval("("+data+")");
						if(result==""||result==null){
							$("#table_3_8 tbody").html("<tr><td colspan=\"6\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						html+="<tr>";
							html+="<td>"+result[0][0]+"</td>"; 
							html+="<td>"+result[0][1]+"</td>";
							html+="<td>"+result[0][2]+"</td>";
							html+="<td>"+result[0][3]+"</td>"; 
							html+="<td>"+valueFormat(result[0][4],2)+"</td>";
							html+="<td>"+valueFormat(result[0][5],2)+"</td>";
							html+="<td>"+valueFormat(result[0][6],2)+"</td>";
						html+="</tr>";
						$("#table_3_8 tbody").append(html);
        



                                                }else{
                                                   $("#table_3_8 tbody").html("<tr><td colspan=\"6\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
                                                    

                                                }

						
						
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				//f-2
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-7-fj-qy-2",
						year : $("#year").val()
					},
					success : function(data){
						 if(data.trim().length>0){
					var result = eval("("+data+")");
						if(result==""||result==null){
							$("#table_3_8 tbody").html("<tr><td colspan=\"6\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						html+="<tr>";
							html+="<td>"+result[0][0]+"</td>"; 
							html+="<td>"+result[0][1]+"</td>";
							html+="<td>"+result[0][2]+"</td>";
							html+="<td>"+result[0][3]+"</td>"; 
							html+="<td>"+valueFormat(result[0][4],2)+"</td>";
							html+="<td>"+valueFormat(result[0][5],2)+"</td>";
							html+="<td>"+valueFormat(result[0][6],2)+"</td>";
						html+="</tr>";
						$("#table_3_8 tbody").append(html);
					}else{
					$("#table_3_8 tbody").html("<tr><td colspan=\"6\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
					}
						
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
