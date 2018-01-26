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
						key : "ASDS_table2_9",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						var html="";
						console.info(result);
						if(result.length>0){
							//总体情况		
							$.each(result,function(i,obj){
								html+="<tr>"+
								"<td>"+(obj[1])+"</td>"+
								"<td>"+(obj[2])+"</td>"+
								"<td>"+(obj[3])+"</td>"+
								"<td>"+(obj[4])+"</td>"+
								"<td>"+(obj[5])+"</td>"+
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
			<table border="1" id="table_2_2">
					<thead>
						<tr>
							<td colspan="22">
								<!-- <h4 id="filename">2.2 专业教师队伍结构</h4> -->
								<h4 id="filename">2.9高层次教学、研究团队</h4>
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
							<!-- <td colspan="2" rowspan="2"></td> -->
							<td colspan="5">高层次教学、研究团队</td>
						</tr>
						<!-- <tr>
							<td>人数</td>
							<td>比例</td>
						</tr> -->
						<tr>
							<td>团队名称</td>
							<td>负责人</td>
							<td>负责人工号</td>
							<td>类型</td>
							<td>获得时间</td>
						</tr>
					</thead>
					
					<tbody id="tbody">
						<!-- <tr>
							<td colspan="2">总体情况</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">职称</td>
							<td>正高级</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>副高级</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>中级</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>初级及以下</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="3">学位</td>
							<td>博士</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>硕士</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>学士及以下</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">年龄</td>
							<td>35岁及以下</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>36-45岁</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>46-55岁</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>56岁及以上</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="3">学缘</td>
							<td>本校</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>外校(境内)</td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>外校(境外)</td>
							<td></td>
							<td></td>
						</tr> -->
					</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	<!-- <div style="width:100%;height:1400px;margin-left:20px;">
			<div  style="width:48%;height:25%;border:1px solid #7B7B7B;float:left;text-align:center;">
				<div style="width:100%;height:30px;border:1px solid #7B7B7B;text-align:center;"><h1 style="font-size:20px">职称结构</h1></div>
				<div id="ASDS_table2_2_zc" style="width:100%;height:350px;text-align:center;"></div>
			</div>
			<div  style="width:48%;height:25%;border:1px solid #7B7B7B;float:left;text-align:center;">
				<div style="width:100%;height:30px;border:1px solid #7B7B7B;text-align:center;"><h1 style="font-size:20px">学位结构</h1></div>
				<div id="ASDS_table2_2_xw" style="width:100%;height:350px;text-align:center;"></div>
			</div>
			<div  style="width:48%;height:25%;border:1px solid #7B7B7B;float:left;text-align:center;">
				<div style="width:100%;height:30px;border:1px solid #7B7B7B;text-align:center;"><h1 style="font-size:20px">年龄结构</h1></div>
				<div id="ASDS_table2_2_nl" style="width:100%;height:350px;text-align:center;"></div>
			</div>
			<div  style="width:48%;height:25%;border:1px solid #7B7B7B;float:left;text-align:center;">
				<div style="width:100%;height:30px;border:1px solid #7B7B7B;text-align:center;"><h1 style="font-size:20px">学缘结构</h1></div>
				<div id="ASDS_table2_2_xy" style="width:100%;height:350px;text-align:center;"></div>
			</div>
		</div> -->
</body>
</html>
