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
						key : "ASDS_table4_1",
						year : $("#year").val(),
						//num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var str = "";
						if(result.length>0){
							for(var i=0;i<result.length;i++){
								str += "<tr><td>" + (i+1) + "</td><td>" + result[i][0] + "</td><td>" + result[i][1] + "</td><td>" + result[i][2] 
								+ "</td><td>" + result[i][3] + "</td><td>" + result[i][4] + "</td><td>" + result[i][5] + "</td><td>" + result[i][6] 
								+ "</td><td>" + result[i][7] + "</td></tr>";
							};
						$("#table_4_1 tbody").html(str);
						//var html="";
						//if(result.length>0){
							//总体情况		
						//	$.each(result,function(i,obj){
							//	html+="<tr>"+
							//	"<td>"+(i+1)+"</td>"+
							//	"<td>"+(obj[5])+"</td>"+
							//	"<td>"+(obj[6])+"</td>"+
						//		"<td>"+(obj[7])+"</td>"+
							//	"<td>"+(obj[8])+"</td>"+
							//	"<td>"+(obj[9])+"</td>"+
							//	"<td>"+(obj[10])+"</td>"+
							//	"<td>"+(obj[11])+"</td>"+
							//	"<td>"+(obj[12])+"</td>"+
							//	"<td>"+(obj[13])+"</td>"+
							//	"</tr>";
							//});	
							//$("#tbody").html(html);				
						}
						//else{
						   //$("#tbody").html("");
						//}
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
								<h4 id="filename">4.1校外实习、实训基地</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="Zyselects()">
												<option selected="selected">2017/09/30</option>
												<option>2016/09/30</option>
												<option>2015/09/30</option>
												<option>2014/09/30</option>
												<option>2013/09/30</option>
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td>序号</td>
							<td>基地名称</td>
							<td>建立时间</td>
							<td>院系（单位）号</td>
							<td>院系（单位）名称</td>
							<td>面向校内专业</td>
							<td>地址</td>
							<td>每次可接纳学生数（人）</td>
							<td>当年接纳学生总数（人次）</td>

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
