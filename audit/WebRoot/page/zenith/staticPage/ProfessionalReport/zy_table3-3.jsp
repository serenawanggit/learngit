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
			//Zyselects();
			hideLodding();
		});
		function Zyselects(){
		$("#table_3_3 tbody").empty();
			$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table3-3",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						/* alert(data); */
						var html="";
							$.each(result,function(i,obj){
								html+="<tr><td>"+(i+1)+"</td>"+
								"<td>"+(obj[0]==''?'/':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'/':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'/':obj[2])+"</td>"+
								"<td>"+(obj[3]==''?'/':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?0:obj[4])+"</td>"+
								"<td>"+(obj[5]==''?0:obj[5])+"</td>"+
								"</tr>";
							});
							$("#table_3_3 tbody").html(html);
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
			<div class="tb_title"><h4>课程</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_3_3">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">3.3校级、省部级课程汇总表</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="javascript:Zyselects();">
												<option>2017/09/30</option>
												<option selected="selected">2016/09/30</option>
												<option>2015/09/30</option>
												<option>2014/09/30</option>
												<option>2013/09/30</option>
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<!-- <tr>
							<td>课程名称</td>
							<td>课程号</td>
							<td>合作单位</td>
							<td>项目类型</td>
							<td>项目级别</td>
						</tr> -->
					</thead>
					<tbody>
						<tr>
							<td>暂无表样</td>
						</tr>
					</tbody>
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
