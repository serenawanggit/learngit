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
			<div class="tb_title"><h4>定位与目标</h4>
			</div>
		</div>
		<div class="tb_main">
			 <table border="1" id="table_1_4">
					<thead>
						<tr>
							<td colspan="14">
								<h4 id="filename">1.4专业布局概览</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year">
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
						<!-- 	<td>学科门类</td>
							<td>所含本科专业数</td>
							<td>比例（%）</td> 
							<td>博士学位授权一级学科点数</td> 
							<td>博士学位授权二级学科点数（不含一级学科覆盖点）</td>
							<td>硕士学位授权一级学科点数</td> 
							<td>硕士学位授权二级学科点数（不含一级学科覆盖点）</td>
							<td>重点学科数</td> -->
							<td>学科门类</td>
							<td>哲学</td>
							<td>经济学</td>
							<td>法学</td> 
							<td>教育学</td> 
							<td>文学</td>
							<td>历史学</td> 
							<td>理学</td>
							<td>工学</td>
							<td>农学</td>
							<td>医学</td>
							<td>管理学</td>
							<td>艺术学</td>
							<td>总计</td>
							
						</tr>
						
					</thead>
					
					<tbody>
					</tbody>
				
				<tfoot>
					<tr>
						<td colspan="14">
							<font color="red">※以上数据来源：表1-5-1专业基本情况，4-1-3博士点、硕士点，表4-1-4重点学科。<br/>
【注】：此表中本科专业数按照《普通高等学校本科专业目录（2012版）》统计，不含专业大类和校内专业方向。		</font>				
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
				
				var html4="";
				var result_sum=0;
				 $.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table1-4",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result=="" || result==null || result.length<=2){
							$("#table_1_4 tbody").html("<tr><td colspan=\"9\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}else{
						result_sum=result[0][0];
						for ( var i = 0; i < 7; i++) {
							 html4+="<tr>";
									 if(i==0){
									 	html4+="<td>所含本科专业数</td> ";
									 }
									  if(i==1){
									 	html4+="<td>比例(%)</td> ";
									 }
									  if(i==2){
									 	html4+="<td>博士学位授权一级学科点数</td> ";
									 }
									  if(i==3){
									 	html4+="<td>博士学位授权二级学科点数(不含一级学科覆盖点)</td> ";
									 }
									  if(i==4){
									 	html4+="<td>硕士学位授权一级学科点数</td> ";
									 }
									  if(i==5){
									 	html4+="<td>硕士学位授权二级学科点数(不含一级学科覆盖点)</td> ";
									 }
									  if(i==6){
									 	html4+="<td>重点学科数</td> ";
									 }
									html4+="<td>"+result[0][i+1]+"</td>";
									html4+="<td>"+result[1][i+1]+"</td>";
									html4+="<td>"+result[2][i+1]+"</td>";
									html4+="<td>"+result[3][i+1]+"</td> ";
									html4+="<td>"+result[4][i+1]+"</td>";
									html4+="<td>"+result[5][i+1]+"</td>";
									html4+="<td>"+result[6][i+1]+"</td> ";
									html4+="<td>"+result[7][i+1]+"</td> ";
									html4+="<td>"+result[8][i+1]+"</td> ";
									html4+="<td>"+result[9][i+1]+"</td> ";
									html4+="<td>"+result[10][i+1]+"</td> ";
									html4+="<td>"+result[11][i+1]+"</td> ";
									html4+="<td>"+result[12][i+1]+"</td> ";
								html4+="</tr>";
						}
					/* 	 $.each(result,function (i,obj){
						 console.info(obj);
						});  */
						$("#table_1_4 tbody").html(html4);
						}
						/* for(var i=0;i<result.length;i++){
								 html+="<tr>";
									html+="<td>"+result[i][0]+"</td> ";
									html+="<td>"+result[i][1]+"</td>";
									html+="<td>"+result[i][2]+"</td>";
									html+="<td>"+result[i][3]+"</td> ";
									html+="<td>"+result[i][4]+"</td>";
									html+="<td>"+result[i][5]+"</td>";
									html+="<td>"+result[i][6]+"</td> ";
									html+="<td>"+result[i][7]+"</td> ";
								html+="</tr>";
						} */
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				}); 
				
				
/* 				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table1-4-fj-sum",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
							result_sum=result[0][0];
						 $.each(result,function (i,obj){
								 	html4+="<tr>";
								 	html4+="<td>"+"总计"+"</td> ";
									html4+="<td>"+result[i][0]+"</td> ";
									html4+="<td>"+result[i][1]+"</td>";
									html4+="<td>"+result[i][2]+"</td>";
									html4+="<td>"+result[i][3]+"</td> ";
									html4+="<td>"+result[i][4]+"</td>";
									html4+="<td>"+result[i][5]+"</td>";
									html4+="<td>"+result[i][6]+"</td> ";
								html4+="</tr>";
						}); 
						
					
						$("#table_1_4 tbody").html(html4);
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});  */
				hideLodding();
			});
			
			// 调用方法
			$("#year").change();
		});
	</script> 
</body>
</html>
