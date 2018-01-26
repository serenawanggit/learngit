<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="js/ZYReportFormat2.js"></script>
	
	<script type="text/javascript">
		$(function(){
			//formatEndYear("year");
			formatDate("year");
			Zyselects();
		});
		function Zyselects(){
			hideLodding();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table4_2",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var html="";
						if(result.length>0){
							//总体情况		
							$.each(result,function(i,obj){
								html+="<tr>"+
								"<td>"+(obj[0])+"</td>"+
								"<td>"+(obj[1])+"</td>"+
								"<td>"+(obj[2])+"</td>"+
								"<td>"+(obj[3])+"</td>"+
								"<td>"+(obj[4])+"</td>"+
								"<td>"+(obj[5])+"</td>"+
								"<td>"+(obj[6])+"</td>"+
								"<td>"+(obj[7])+"</td>"+
								"<td>"+(obj[8])+"</td>"+
								"<td>"+(obj[9])+"</td>"+
								"<td>"+(obj[10])+"</td>"+
								"</tr>";
							});				
						}
						$("#tbody").html(html);	
					},error:function(){
						alert("加载失败");
					}
			});
		}
	</script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>条件</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_4_1">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">4.2本科实验、实习、实训场所</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="Zyselects()">
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td>序号</td>
							<td>名称</td>
							<td>院系名称</td>
							<td>面积</td>
							<td>性质</td>
							<td>面向校内专业</td>
							<td>学年度承担的实验教学人时数（人时）</td>
							<td>学年度承担的实验教学人次数（人次）</td>
							<td>学年度承担的本科生实验、实习、实训项目数</td>
							<td>最大可接纳学生数</td>
							<td>当年接纳学生总数</td>
						</tr>
						
					</thead>
					
					<tbody id="tbody">
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
