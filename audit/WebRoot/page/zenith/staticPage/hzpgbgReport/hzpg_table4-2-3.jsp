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
			formatEndYear("year");
			Zyselects();
		});
		function Zyselects(){
			hideLodding();
			  $("#table_4_2_3 tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table4-2-3",
						year : $("#year").val(),
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							var html="";
							$.each(result,function(i,obj){
								html=html+"<tr><td>"+
								(i+1)+"</td><td>"+
								(obj[0]==''?'/':obj[0])+"</td><td>"+
								(obj[1]==''?'/':obj[1])+"</td><td>"+
								(obj[2]==''?'/':obj[2])+"</td>"+
								"</tr>";
							});
							$("#table_4_2_3 tbody").html(html);
						}
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
			<div class="tb_title"><h4>专业与课程建设</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_4_2_3">
					<thead>
						<tr>
							<td colspan="4">
								<h4 id="filename">4.2.3省部级以上精品课程列表</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="javascript:Zyselects();">
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td>编号</td>
							<td>名称</td>
							<td>类型</td>
							<td>级别</td>
						</tr>
					</thead>
					
					<tbody>
					
					</tbody>
				
				<tfoot>
				<tr>
							<td colspan="4">※以上数据来源：表5-3-2.本科教学信息化。</td>
							
							</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
