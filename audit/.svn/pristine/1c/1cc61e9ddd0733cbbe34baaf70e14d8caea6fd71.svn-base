<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat2.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>详细数据附表</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_F_3">
				<thead>
					<tr>
						<td colspan="18">
							<h4>附表 3 各教学单位专任教师结构</h4>
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
						<td rowspan="3">序 号</td> 
						<td rowspan="3">单位</td>
						<td rowspan="3">专 任 教 师 数</td> 
						<td colspan="5">职称</td>
						<td colspan="3">学位</td>
						<td colspan="4">年龄</td>
						<td colspan="3">学缘</td>
					</tr>
					<tr>
						<td rowspan="2">教 授</td> 
						<td rowspan="2">副 教 授</td>
						<td rowspan="2">其 他 正 高 级</td>
						<td rowspan="2">其 他 副 高 级</td>
						<td rowspan="2">其 他</td>
						<td rowspan="2">博 士</td>
						<td rowspan="2">硕 士</td> 
						<td rowspan="2">其 他</td>
						<td rowspan="2">35岁 及 以 下</td>
						<td rowspan="2">36-45岁</td>
						<td rowspan="2">46-55岁</td>
						<td rowspan="2">56岁 及 以 上</td>
						<td rowspan="2">本 校</td>
						<td colspan="2">外校</td>
					</tr>
					<tr>
						<td>境 内</td>
						<td>境 外</td>
					</tr>
					
				</thead>
				<tbody>
<!-- 					<tr>
						<td></td> 
						<td></td>
						<td></td>
						<td></td> 
						<td></td>
						<td></td>
						<td></td> 
						<td></td>
						<td></td>
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
						<td></td>
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
 -->				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="18">
							<font color="red">※ 以上数据来源：表 3-1-1 专任教师基本信息。		</font>					
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
						key : "ASDS_tableF-3",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						var html="";
						for ( var i = 0; i < result.length; i++) {
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
								html+="<td>"+result[i][11]+"</td>";
								html+="<td>"+result[i][12]+"</td>";
								html+="<td>"+result[i][13]+"</td>";
								html+="<td>"+result[i][14]+"</td>";
								html+="<td>"+result[i][15]+"</td>";
								html+="<td>"+result[i][16]+"</td>";
							html+="</tr>";
						}
						var table=jQuery("#table_F_3 tbody:eq(0)");
						if(result!=null && result.length>0){
							table.html(html);
						}else{
							table.html("<tr><td colspan=\"18\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
