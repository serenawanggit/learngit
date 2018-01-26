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
						key : "ASDS_table2_4",
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
								html+="<tr><td>"+(obj[1])+"</td>"+
								"<td>"+(obj[2])+"</td>"+
								"<td>"+(obj[3])+"</td>"+
								"<td>"+(obj[4])+"</td>"+
								"<td>"+(obj[5])+"</td>"+
								"<td>"+(obj[6])+"</td>"+
								"<td>"+(obj[7])+"</td>"+
								"<td>"+(obj[8])+"</td>"+
								"<td>"+(obj[9])+"</td>"+
								"</tr>";
							});	
							$("#tbody").html(html);				
						}else{
						   $("#tbody").html("");	
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
			<div class="tb_title"><h4>师资队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_2_4">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">2.4教师承担教学研究与改革项目明细表</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="javascript:Zyselects();">
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
							<td colspan="9">教师承担教学研究与改革项目明细表</td>
						</tr>
						<tr>
							<td>项目名称</td>
							<td>立项编号或批准文号</td>
							<td>主持人</td>
							<td>主持人工号</td>
							<td>级别</td>
							<td>立项时间</td>
							<td>结题验收或鉴定时间</td>
							<td>经费（万元）</td>
							<td>参与教师数（人）</td>
						</tr>
					</thead>
					<tbody id="tbody">
						<!-- <tr>
							<td>访问学者</td>
							<td></td>
						</tr>
						<tr>
							<td>攻读学位</td>
							<td></td>
						</tr>
						<tr>
							<td>行业培训</td>
							<td></td>
						</tr>
						<tr>
							<td>新近教师校内培训</td>
							<td></td>
						</tr>
						<tr>
							<td>3个月以上进修人次</td>
							<td></td>
						</tr>
						<tr>
							<td>接受培训进修合计人次</td>
							<td></td>
						</tr> -->
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
