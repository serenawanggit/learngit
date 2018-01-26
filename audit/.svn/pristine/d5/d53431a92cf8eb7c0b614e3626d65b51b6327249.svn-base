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
			<div class="tb_title"><h4>质量保障</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_6_3" border="1">
				<thead>
					<tr>
						<td colspan="6">
							<h4>6.3教育教学改革与成果</h4>
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
						<td colspan="2" rowspan="2">项目</td> 
						<td rowspan="2">全校总数</td> 
						<td colspan="3">其中：教学质量管理，监控人员</td>
					</tr>
					<tr>
						<td >校级教学管理</td> 
						<td>院系教学管理</td>
						<td>教学质量监控</td>
					</tr>
					
				</thead>
				
				<tbody>
					<tr>
						<td rowspan="3">教学成果奖（项）</td> 
						<td>数量</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						
					</tr>
					<tr>
						<td>其中：国家级</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>省部级</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="7">教育教学研究与改革项目</td> 
						<td>总数</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：国家级</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>省部级</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>项目经费（万元）</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：国家级（万元）</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>省部级（万元）</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>参与教师（人次）</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">教学研究论文</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="6">
							<font color="red">※以上数据来源：表1-6-1教职工基本信息，表3-2相关管理人员基本信息，表7-3-1 教
育教学研究与改革项目，表7-3-2 教学成果奖，表3-5-3教师发表的论文情况。
<br/>
【注】：教育教学研究与改革项目总数包括自然年度内立项和在研（含结题）项目
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
						key : "ASDS_table6-3",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						console.info(result);
						if(result==""||result==null){
							$("#table_6_3 tbody").html("<tr><td colspan=\"10\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
					if(data.trim().length>0){
						//教学成果奖
						$("#table_6_3 tbody tr:eq(0) td:eq(2)").html(result[0][1]);
						$("#table_6_3 tbody tr:eq(1) td:eq(1)").html(result[0][2]); 
						$("#table_6_3 tbody tr:eq(2) td:eq(1)").html(result[0][3]);
						
						$("#table_6_3 tbody tr:eq(0) td:eq(3)").html(result[1][1]);
						$("#table_6_3 tbody tr:eq(1) td:eq(2)").html(result[1][2]); 
						$("#table_6_3 tbody tr:eq(2) td:eq(2)").html(result[1][3]);
						 
						$("#table_6_3 tbody tr:eq(0) td:eq(4)").html(result[2][1]);
						$("#table_6_3 tbody tr:eq(1) td:eq(3)").html(result[2][2]); 
						$("#table_6_3 tbody tr:eq(2) td:eq(3)").html(result[2][3]);
						
						$("#table_6_3 tbody tr:eq(0) td:eq(5)").html(result[3][1]);
						$("#table_6_3 tbody tr:eq(1) td:eq(4)").html(result[3][2]); 
						$("#table_6_3 tbody tr:eq(2) td:eq(4)").html(result[3][3]); 
						
						//教育教学研究与改革项目
						
						
						 
						
						//教学研究论文
						
						/* var html="";
						for(var j =0;j<3;j++){
						for(var i =0;i<result.length;i++){
							html+="<tr>";
							html+="<td>"+result[i][j]+"</td>";
							html+="<td>"+result[i][j]+"</td>";
							html+="<td>"+result[i][j]+"</td>"; 
							html+="</tr>"; 
						}
						} 
						$("#table_6_3 tbody").html(html);*/
						// hide
						hideLodding();
						}else{
						hideLodding();
						return;
						
						}
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				//qy
				 $.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table6-3-qy",
						year : $("#year").val()
					},
					success : function(data){
					if(data.trim().length>0){
						var result = eval("("+data+")");
						$("#table_6_3 tbody tr:eq(3) td:eq(2)").html(result[0][1]);
						$("#table_6_3 tbody tr:eq(4) td:eq(1)").html(result[0][2]); 
						$("#table_6_3 tbody tr:eq(5) td:eq(1)").html(result[0][3]);
						$("#table_6_3 tbody tr:eq(6) td:eq(1)").html(valueFormat(result[0][4], 2)); 
						$("#table_6_3 tbody tr:eq(7) td:eq(1)").html(result[0][5]);
						$("#table_6_3 tbody tr:eq(8) td:eq(1)").html(result[0][6]);
							$("#table_6_3 tbody tr:eq(9) td:eq(1)").html(result[0][7]);
								$("#table_6_3 tbody tr:eq(10) td:eq(1)").html(result[0][8]);
						
						$("#table_6_3 tbody tr:eq(3) td:eq(3)").html(result[1][1]);
						$("#table_6_3 tbody tr:eq(4) td:eq(2)").html(result[1][2]); 
						$("#table_6_3 tbody tr:eq(5) td:eq(2)").html(result[1][3]);
/* 						$("#table_6_3 tbody tr:eq(6) td:eq(2)").html(result[1][4]); 
						$("#table_6_3 tbody tr:eq(7) td:eq(2)").html(result[1][5]);
						$("#table_6_3 tbody tr:eq(8) td:eq(2)").html(result[1][6]);
						$("#table_6_3 tbody tr:eq(9) td:eq(2)").html(result[1][7]); */
						$("#table_6_3 tbody tr:eq(10) td:eq(2)").html(result[1][8]);
						$("#table_6_3 tbody tr:eq(6) td:eq(2)").html("/"); 
						$("#table_6_3 tbody tr:eq(7) td:eq(2)").html("/");
						$("#table_6_3 tbody tr:eq(8) td:eq(2)").html("/");
						$("#table_6_3 tbody tr:eq(9) td:eq(2)").html("/");
						 
						$("#table_6_3 tbody tr:eq(3) td:eq(4)").html(result[2][1]);
						$("#table_6_3 tbody tr:eq(4) td:eq(3)").html(result[2][2]); 
						$("#table_6_3 tbody tr:eq(5) td:eq(3)").html(result[2][3]);
					/* 	$("#table_6_3 tbody tr:eq(6) td:eq(3)").html(result[2][4]); 
						$("#table_6_3 tbody tr:eq(7) td:eq(3)").html(result[2][5]);
						$("#table_6_3 tbody tr:eq(8) td:eq(3)").html(result[2][6]);
						$("#table_6_3 tbody tr:eq(9) td:eq(3)").html(result[2][7]); */
							$("#table_6_3 tbody tr:eq(6) td:eq(3)").html("/"); 
						$("#table_6_3 tbody tr:eq(7) td:eq(3)").html("/");
						$("#table_6_3 tbody tr:eq(8) td:eq(3)").html("/");
						$("#table_6_3 tbody tr:eq(9) td:eq(3)").html("/");
						$("#table_6_3 tbody tr:eq(10) td:eq(3)").html(result[2][8]);
					
						$("#table_6_3 tbody tr:eq(3) td:eq(5)").html(result[3][1]);
						$("#table_6_3 tbody tr:eq(4) td:eq(4)").html(result[3][2]); 
						$("#table_6_3 tbody tr:eq(5) td:eq(4)").html(result[3][3]);
			/* 			$("#table_6_3 tbody tr:eq(6) td:eq(4)").html(result[3][4]); 
						$("#table_6_3 tbody tr:eq(7) td:eq(4)").html(result[3][5]);
						$("#table_6_3 tbody tr:eq(8) td:eq(4)").html(result[3][6]);
						$("#table_6_3 tbody tr:eq(9) td:eq(4)").html(result[3][7]); */
									$("#table_6_3 tbody tr:eq(6) td:eq(4)").html("/"); 
						$("#table_6_3 tbody tr:eq(7) td:eq(4)").html("/");
						$("#table_6_3 tbody tr:eq(8) td:eq(4)").html("/");
						$("#table_6_3 tbody tr:eq(9) td:eq(4)").html("/");
                        $("#table_6_3 tbody tr:eq(10) td:eq(4)").html(result[3][8]); 

				/* 		$("#table_6_3 tbody tr:eq(3) td:eq(2)").html(result[0][0]);
						$("#table_6_3 tbody tr:eq(4) td:eq(1)").html(result[0][1]);
						$("#table_6_3 tbody tr:eq(5) td:eq(1)").html(result[0][2]);
						$("#table_6_3 tbody tr:eq(6) td:eq(1)").html(result[0][3]);
						$("#table_6_3 tbody tr:eq(7) td:eq(1)").html(valueFormat(result[0][4],2));
						$("#table_6_3 tbody tr:eq(8) td:eq(1)").html(result[0][5]);
						$("#table_6_3 tbody tr:eq(9) td:eq(1)").html(valueFormat(result[0][6],2));
						$("#table_6_3 tbody tr:eq(10) td:eq(1)").html(valueFormat(result[0][7],2)); */
						// hide
						hideLodding();
						}else{
						hideLodding();
						return;
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
