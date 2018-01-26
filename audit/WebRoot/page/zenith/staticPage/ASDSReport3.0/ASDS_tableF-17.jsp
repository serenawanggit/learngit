﻿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
			<table id="table_F_17">
				<thead>
					<tr>
						<td colspan="8">
							<h4>附表17各专业本科生招生情况</h4>
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
						<td>专业名称</td>
						<td>招生计划数</td> 
						<td>实际录取数</td>
						<td>第一志愿录取数</td>
						<td>实际报到数</td>
						<td>第一志愿专业录取率(%)</td>
						<td>报到率（ %）</td>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="8">
							<font color="red">※ 以上数据来源：表6-3-4各专业（大类）招生报到情况
							<br/>
【注】：1.报到率=实际报到数/实际录取数
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
						key : "ASDS_tableF-17",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						 if(result==""||result==null){
							// hide
							hideLodding();
							$("#table_F_17 tbody").html("<tr><td colspan=\"8\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
							html+="<td>"+valueFormat(result[i][5],1)+"</td>";
							html+="<td>"+valueFormat(result[i][6],1)+"</td>";
							html+="</tr>"; 
						}
						$("#table_F_17 tbody").html(html);
					}else{
					  hideLodding();
							$("#table_F_17 tbody").html("<tr><td colspan=\"8\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
		
		
		
		/**
		 * 格式化结束年份
		 * 
		 * @param id
		 */
		function formatEndYear2(id) {
			var endYear = getYear2();
			var str = "";
			str += "<option value='" + endYear + "' selected>" + endYear + "</option>";
			for ( var i = endYear - 1; i >= 2011; i--) {
				str += "<option value='" + i + "'>" + i + "</option>";
			}
			$("#" + id).html(str);
		}
		
		/**
		 * 获取年份时间
		 */
		function getYear2() {
			var date = new Date();
			var nowYear = date.getFullYear();
			var nowMonth = date.getMonth() + 1;
			var nowDate = date.getDate();
			
			if (nowMonth >= 9) {
				return nowYear;
			} else {
				return nowYear - 1;
			}
		}
	</script>
</body>
</html>