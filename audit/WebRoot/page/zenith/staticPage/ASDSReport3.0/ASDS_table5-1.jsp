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
			<div class="tb_title"><h4>学生发展</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_5_1">
				<thead>
					<tr>
						<td colspan="11">
							<h4>5.1 生源情况</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select"   id="year" >
												<option>2016-09-30</option> 
 												<option>2017-09-30</option> 
 												<option>2018-09-30</option> 
 												<option>2019-09-30</option> 
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<tr>
						<td rowspan="2">省份</td> 
						<td rowspan="2">批次</td> 
						<td colspan="3">录取数</td>
						<td colspan="3">批次最低控制线(分)</td> 
						<td colspan="3">当年录取平均分与批次最低控制线的差值(分)</td>
					</tr>
					<tr>
						<td>文科</td> 
						<td>理科</td>
						<td>不分文理</td>
						<td>文科</td>
						<td>理科</td> 
						<td>不分文理</td>
						<td>文科</td>
						<td>理科</td> 
						<td>不分文理</td>
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
							<font color="red">※ 数据来源：表6-3-3近一届本科生录取标准及人数。
。		</font>						
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
						key : "ASDS_table5-1",
						year : $("#year").val()
					},
					success : function(data){
					var result = eval("("+data+")");
					console.info(result);
					if(result==""||result==null){
							$("#table_5_1 tbody").html("<tr><td colspan=\"8\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						if(data.trim().length<=2){
							return ;
						}else{
							var html="";
							$.each(result,function(i,obj){
								html+="<tr>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+obj[3]+"</td>";
								html+="<td>"+obj[4]+"</td>";
								html+="<td>"+obj[5]+"</td>";
								html+="<td>"+valueFormat(obj[6], 2)+"</td>";
								html+="<td>"+valueFormat(obj[7], 2)+"</td>";
								html+="<td>"+obj[8]+"</td>";
								html+="<td>"+obj[9]+"</td>";
								html+="<td>"+obj[10]+"</td>";
								html+="</tr>"; 
							});
							$("#table_5_1 tbody").html(html);
							hideLodding();
						}
						// hide
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
