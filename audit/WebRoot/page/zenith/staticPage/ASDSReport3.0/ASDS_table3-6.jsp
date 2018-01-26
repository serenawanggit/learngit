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
			<div class="tb_title"><h4>教学资源</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_3_6">
				<thead>
					<tr>
						<td colspan="5">
							<h4>3.6 各教学单位课程开设情况</h4>
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
						<td>开设双语课程教师数</td> 
						<td>专业课平均每课堂学生数</td>
						<td>教授、副教授人均授课学时数</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td> </td> 
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
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="5">
							<font color="red">※以上数据来源：表1-5-1专业基本情况，表5-1-4分专业（大类）专业实验课情况，表4-2专业培养计划表，表5-1-1开课情况。<br>
【注】：此表只取实验教学学分占总学分比例最高的和最低的各五个专业，详细数据可参考
【附表14各专业实验教学情况】【附表15各专业教学情况一览表】（合格评估要求：人文
社科类专业实践教学占总学分（学时）不低于20%，理工农医类专业实践教学比例占总学
分（学时）比例不低于25%，师范类专业教育实习不少于12周）。

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
						key : "ASDS_table3-6",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							$("#table_3_6 tbody").html("<tr><td colspan=\"5\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						$.each(result,function(i,obj){
							console.info(obj);
							html+="<tr>";
								html+="<td>"+obj[0]+"</td> ";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								if(obj[3]!="/"){
									html+="<td>"+valueFormat(obj[3],2)+"</td>";
								}else{
									html+="<td>0</td>";
								}
								if(obj[4]!="/"){
									html+="<td>"+valueFormat(obj[4],2)+"</td>";
								}else{
									html+="<td>0</td>";
								}
							html+="</tr>"; 
						});
						$("#table_3_6 tbody").html(html);
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
