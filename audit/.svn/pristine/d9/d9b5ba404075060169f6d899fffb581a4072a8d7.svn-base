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
			 $("#table_4_1_1 tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table4-1-1",
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
								(obj[2]==''?'/':obj[2])+"</td><td>"+
								(obj[3]==''?'/':obj[3])+"</td><td>"+
								(obj[4]==''?'/':obj[4])+"</td><td>"+
								(obj[5]==''?'/':obj[5])+"</td><td>"+
								(obj[6]==''?0:obj[6])+"</td><td>"+
								(obj[7]==''?0:obj[7])+"</td><td>"+
								(obj[8]==''?0:obj[8])+"</td><td>"+
								(obj[9]==''?0:obj[9])+"</td><td>"+
								"</tr>";
							});
							$("#table_4_1_1 tbody").html(html);
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
			<table border="1" id="table_4_1_1">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">4.1.1本科专业情况一览表</h4>
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
							<td>序号</td>
							<td>专业名称</td>
							<td>优势专业</td>
							<td>专业设置时间</td>
							<td>总学时</td>
							<td>总学分</td>
							<td>集中实践教学环节学分</td>
							<td>课内教学学分</td>
							<td>实验教学学分</td>
							<td>课外科技活动学分</td>
							<td>实践教学环节学分所占比例（%）</td>
						</tr>
					</thead>
					
					<tbody>
					
					</tbody>
				
				<tfoot>
				<tr>
						<td colspan="11">
						【注】实践教学环节学分所占比例=（集中实践教学环节学分+实验教学学分）/总学分。
					<br>
							※以上数据来源：表1-5-1.专业基本情况，表4-2.专业培养计划表。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
