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
			$("#table_5_2 tbody").empty();
			$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table5-2-zj",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
							$("#test1").text(result[0][0]==""?0:result[0][0]);
							$("#test2").text(result[0][1]==""?0:result[0][1]);
							$("#test3").text(result[0][2]==""?0:result[0][2]);
							$("#test4").text(result[0][3]==""?0:result[0][3]);
						}
					},error:function(){
						alert("加载失败");
					}
			});
			
			$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table5-2",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var html="";
						if(data.length>2){
						$.each(result,function(i,obj){
								html+="<tr><td>"+(i+1)+"</td>"+
								"<td>"+(obj[0]==''?'0':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'/':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'0':obj[2])+"</td>"+
								"<td>"+(obj[3]==''?'0':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'0':obj[4])+"</td>"+
								"<td>"+(obj[5]==''?'/':obj[5])+"</td>"+
								"</tr>";
							});
							
						}
						$("#table_5_2 tbody").html(html);
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
			<div class="tb_title"><h4>课程体系</h4>
			</div>
		</div>
		<div class="tb_main">
			<div align="center"><span style="font-size:15px;">专业主干课程 共<u><span id="test1">0</span></u>门，（<u><span id="test2">0</span></u>学分），其中由教授（或其它正高级职称）授课门数为<u><span id="test3">0</span></u>门（占<u><span id="test4">0</span></u>学分）。</span></div>
			<table border="1" id="table_5_2">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">5.2专业主干课程情况</h4>
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
							<td>课程名称</td>
							<td>课程类别</td>
							<td>学分</td>
							<td>授课教师</td>
							<td>专业技术职称</td>
							<td>考核方式</td>
						</tr>
						
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
