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
			<table id="table_F_10">
				<thead>
					<tr>
						<td colspan="13">
							<h4>附表 10各专业授课教师授课情况</h4>
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
						<td rowspan="2">序 号</td> 
						<td rowspan="2">专业名称</td>
						<td colspan="2">授课教师</td> 
						<td colspan="2">高级职称</td>
						<td colspan="2">教授</td>
						<td colspan="2">其中为低年级授课教授</td>
						<td colspan="2">具有硕士、博士学位</td>
					</tr>
					<tr>
						<td>总数</td>
						<td>承担课程门数</td>
						<td>数量</td> 
						<td>比例（ %）</td> 
						<td>数量</td> 
						<td>比例（ %）</td> 
						<td>数量</td> 
						<td>比例（ %）</td> 
						<td>数量</td> 
						<td>比例（ %）</td> 
					</tr>
				</thead>
				<tbody>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="13">
							<font color="red">※以上数据来源：表1-5-1专业基本情况，表1-6-1教职工基本信息，表1-6-2外聘教师基本信息，表1-6-3 附属医院师资情况，表5-1-1  开课情况，表5-1-2 专业课教学实施情况表。
							<br/>
【注】：1.本表格只统计专业课的授课情况、含外聘教师统计。。<br/>
2. 此表为表2.5各专业授课教师情况的详细信息。
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
						key : "ASDS_tableF-10",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_F_4 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
							html+="<td>"+valueFormat(result[i][4],1)+"</td>";
							html+="<td>"+result[i][5]+"</td>"; 
							html+="<td>"+valueFormat(result[i][6],1)+"</td>"; 
							html+="<td>"+result[i][7]+"</td>";
							html+="<td>"+valueFormat(result[i][8],1)+"</td>";
							html+="<td>"+valueFormat(result[i][9],2)+"</td>";
							html+="<td>"+valueFormat(result[i][10],1)+"</td>"; 
							html+="</tr>"; 
						}
						$("#table_F_10 tbody").html(html);
						hideLodding();
						// hide
						}else{
					
							$("#table_F_10 tbody").html("<tr><td colspan=\"11\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							hideLodding();
							return;
						}
						
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
			});
			hideLodding();
			// 调用方法
			$("#year").change();
		});
	</script>
</body>
</html>
