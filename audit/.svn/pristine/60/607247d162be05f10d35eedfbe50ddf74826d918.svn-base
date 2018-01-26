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
						key : "ASDS_table3_1",
						year : $("#year").val(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						$("#table_3_1 tbody").empty();
						var html="";
						if(data.length>2){
							$.each(result,function(i,obj){
								html=html+"<tr><td><div style='padding:5px'>"+(obj[0]==''?'/':obj[0])+"</div></td><td><div style='padding:5px'>"+(obj[1]==''?'/':obj[1])+"</div></td><td>"+(obj[2]==''?'/':obj[2])+"</td><td>"+(obj[3]==''?'/':obj[3])+
								"</td><td>"+(obj[4]==''?'/':obj[4])+"</td><td>"+(obj[5]==''?'/':obj[5])+"</td><td><div style='padding:5px'>"+(obj[6]==''?'/':obj[6])+"</div></td><td><div style='padding:5px'>"+(obj[7]==''?'/':obj[7])+
								"<div></td><td><div style='padding:5px'>"+(obj[8]==''?'/':obj[8])+"</div></td><td>"+(obj[9]==''?'/':obj[9])+"</td><td>"+(obj[10]==''?'/':obj[10])+"</td><td>"+(obj[11]==''?'/':obj[11])+
								"</td><td>"+(obj[12]==''?'/':obj[12])+"</td><td>"+(obj[13]==''?'/':obj[13])+"</td><td>"+(obj[14]==''?'/':obj[14])+"</td></tr>";
							});
						}
						$("#table_3_1 tbody").html(html);
					},error:function(){
						alert("加载失败");
					}
			});
		}
		
		/* function Zyselects(){
			hideLodding();
			$.ajax({
					url : "/CHART/collegeReport/collegeReport_collegeGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_tableG",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						
						}
					},error:function(){
						alert("加载失败");
					}
			});
		} */
	</script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>课程</h4>
			</div>
		</div>
		<div class="tb_main" align="center">
								<!-- <h4 id="filename">3.1 核心课程</h4> -->
								<!-- <span>目前，本专业与企业合作建立实践基地38个</span> -->
			<table border="1" id="table_3_1">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">3.1 核心课程</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="Zyselects()">
	 												<option>2014/09/30</option> 
	 												<option>2015/09/30</option> 
	 												<option selected="selected">2016/09/30</option> 
	 												<option>2017/09/30</option> 
	 												<option>2018/09/30</option> 
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td>校内专业名称</td>
							<td>校内专业代码</td>
							<td>课程名称</td>
							<td>课程号</td>
							<td>课程类别</td>
							<td>课程性质</td>
							<td width="10%">课程设置知识要求</td>
							<td width="10%">课程设置能力要求</td>
							<td width="16%">课程达成目标</td>
							<td>精品开放课程</td>
							<td>学分</td>
							<td>总学时</td>
							<td>其中：理论教学学时</td>
							<td>其中：实践教学学时</td>
							<td>其中：实验教学学时</td>
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
							<td></td>
						</tr>
						<!-- <tr style="background:#EEEEEE;">
							<td colspan="3">精品开放课程</td>
							<td>学分</td>
							<td colspan="2">总学时</td>
							<td>其中：理论教学学时</td>
							<td>其中：实践教学学时</td>
							<td>其中：实验教学学时</td>
						</tr> -->
						<tr>
							<td colspan="3"></td>
							<td></td>
							<td colspan="2"></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
