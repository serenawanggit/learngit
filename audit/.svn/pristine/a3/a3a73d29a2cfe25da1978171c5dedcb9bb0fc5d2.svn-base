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
			<table id="table_3_7">
				<thead>
					<tr>
						<td colspan="8">
							<h4>3.6各专业实验教学情况</h4>
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
						<td rowspan="2">序号</td> 
						<td rowspan="2">专业名称</td> 
						<td rowspan="2">校内专业名称</td>
						<td colspan="2">实践教学</td>
						<td colspan="4">其中：实验教学</td>
					</tr>
					<tr>
						<td>学分</td> 
						<td>占总学分比（%）</td> 
						<td>学分</td>
						<td>占总学分比（%）</td>
						<td>独立开设实验课程门数</td>
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
					</tr>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="8">
							<font color="red">※以上数据来源：表1-5-1专业基本情况，表5-1-4分专业（大类）专业实验课情况，表4-2专业培养计划表，表5-1-1开课情况。<br>
							【注】：此表只取实验教学学分占总学分比例最高的和最低的各五个专业，详细数据可参考<br>
							考【附表14各专业实验教学情况】【附表15各专业教学情况一览表】（合格评估要求：人文社<br>
							科类专业实践教学占总学分（学时）不低于20%，理工农医类专业实践教学比例占总学分<br>
							（学时）比例不低于25%，师范类专业教育实习不少于12周）。
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
							$("#table_3_7 tbody").html("<tr><td colspan=\"8\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+obj[0]+"</td> ";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+obj[3]+"</td>";
								html+="<td>"+valueFormat(obj[4],1)+"</td>";
								html+="<td>"+obj[5]+"</td>";
								html+="<td>"+valueFormat(obj[6],1)+"</td>";
								html+="<td>"+obj[7]+"</td>";
							html+="</tr>"; 
						});
						$("#table_3_7 tbody").html(html);
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
