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
			<div class="tb_title"><h4>学生发展</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_5_2">
				<thead>
					<tr>
						<td colspan="6">
							<h4>5.2 各专业（大类）本科生招生报到情况</h4>
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
						<td>专业（大类）</td> 
						<td>招生计划数</td>
						<td>实际录取数</td> 
						<td>实际报到数</td> 
						<td>报到率（%）</td>
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
					</tr>
					
					<tr>
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
						<td colspan="6">
							<font color="red">※ 以上数据来源：表 6-1-2 普通本科分专业（大类）学生数， 表 6-1-6 各专业（大类）招生报到情况。<br>
							【注】： 本表格选取本校招生报到率最低的 10 个专业， 详细数据可参考【附表 13 各专业（大类）本科生招生情况】。		</font>					
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
						key : "ASDS_table5-2",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
					if(data.trim().length>0){
					var result = eval("("+data+")");
						if(result==""||result==null){
							$("#table_5_2 tbody").html("<tr><td colspan=\"8\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						var html="";
						$.each(result,function(i,obj){
							html+="<tr>";
								html+="<td>"+(i+1)+"</td>";
								html+="<td>"+obj[0]+"</td>";
								html+="<td>"+obj[1]+"</td>";
								html+="<td>"+obj[2]+"</td>";
								html+="<td>"+obj[3]+"</td>";
								html+="<td>"+valueFormat(obj[4],1)+"</td>";
							html+="</tr>"; 
						});
						$("#table_5_2 tbody").html(html);
					}else{
						$("#table_5_2 tbody").html("<tr><td colspan=\"8\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
