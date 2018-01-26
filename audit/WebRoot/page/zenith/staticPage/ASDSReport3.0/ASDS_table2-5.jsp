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
			<div class="tb_title"><h4>教师队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_2_5">
				<thead>
					<tr>
						<td colspan="12">
							<h4>2.5 各专业授课教师情况</h4>
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
						<td colspan="2">授课教师数</td>
						<td colspan="2">高级职称</td> 
						<td colspan="2">教授</td> 
						<td colspan="2">其中为低年级授课教授</td>
						<td colspan="2">具有硕士、博士学位</td>
					</tr>
					
					<tr>
						<td>总数</td>
						<td>承担课程门数</td>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
<!-- 						<td>123</td>  -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td>  -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td>  -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td> -->
<!-- 						<td>123</td>  -->
<!-- 						<td>123</td> -->
					</tr>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="12">
							<font color="red">※以上数据来源：表1-5-1专业基本情况，表1-5-2专业大类情况表，表1-6-1教职工基本信息，表1-6-2外聘教师基本信息，表1-6-3 附属医院师资情况，表5-1-1 开课情况，5-1-2 专业课教学实施情况表。<br/>
【注】：1.本表格只统计本科专业课的授课情况，含外聘教师，含离职人员。<br/>
2.本表格选取本校本科授课主讲教师中，高级职称比例最高与最低的5个专业，详细数据可参考【附表10 各专业授课教师授课情况】。

<br>
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
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-5",
						year : $("#year").val()
					},
					success : function(data){
					//>0是因为输出data是""
					if(data.trim().length>0){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_2_5 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var str = "";
						$.each(result,function(i,obj){
							if(obj[0]!="/"){
								str += "<tr>";
								str += "<td>"+obj[0]+"</td>";
								str += "<td>"+obj[1]+"</td>";
								str += "<td>"+obj[2]+"</td>";
								//承担课程门数
								str += "<td>"+obj[3]+"</td>";
								str += "<td>"+obj[4]+"</td>";
								str += "<td>"+valueFormat(obj[5],1)+"</td>";
								str += "<td>"+obj[6]+"</td>";
								str += "<td>"+valueFormat(obj[7],1)+"</td>";
								str += "<td>"+obj[8]+"</td>";
								str += "<td>"+valueFormat(obj[9],1)+"</td>";
								str += "<td>"+obj[10]+"</td>";
								str += "<td>"+valueFormat(obj[11],1)+"</td>";
								str += "<tr/>";
							}
						});
						$("#table_2_5 tbody").html(str);
						hideLodding();
						}else{
						$("#table_2_5 tbody").html("<tr><td colspan=\"10\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
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
