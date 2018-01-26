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
			$("#table_5_5 tbody").empty();
			hideLodding();
			$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table5-5",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
								var html="";
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
						$("#table_5_5 tbody").html(html);
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
			<table border="1" id="table_5_5">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">5.5近三年专任教师代表性教学研究、科学研究项目</h4>
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
							<td >序号</td>
							<td >项目名称</td>
							<td >资助单位</td>
							<td >主持人姓名</td>
							<td>项目经费</td>
							<td>立项时间</td>
							<td>其他参研人员</td>
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
