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
			  $("#table_6_2_4 tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table6-2-4",
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
								(obj[0]==''?0:obj[0])+"</td><td>"+
								(obj[1]==''?0:obj[1])+"</td><td>"+
								(obj[2]==''?0:obj[2])+"</td><td>"+
								(obj[3]==''?0:obj[3])+"</td><td>"+
								"</tr>";
							});
							$("#table_6_2_4 tbody").html(html);
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
			<div class="tb_title"><h4>学风建设与学生指导</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_6_2_4">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">6.2.4各教学单位学生管理人员与学生情况</h4>
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
							<td>教学单位</td>
							<td>学生管理人员数</td>
							<td>本科在校生数</td>
							<td>本科在校生与学生管理人员比例</td>
						</tr>
					</thead>
					
					<tbody>
					</tbody>
				
				<tfoot>
					<tr>
						<td colspan="5">※以上数据来源：表3-2.相关管理人员基本信息，表1-7.本科生基本情况，表1-4.学校教学科研单位。</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
