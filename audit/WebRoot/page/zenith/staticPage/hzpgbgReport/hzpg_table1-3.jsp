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
			 $("#table_1_3 tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1-3",
						year : $("#year").val(),
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							$("#test_1_3_t1").text(result[0][0]);
							$("#test_1_3_t2").text(result[0][1]);
							$("#test_1_3_t3").text(result[0][2]);
							$("#test_1_3_t4").text(result[0][3]);
							$("#test_1_3_t5").text(result[0][4]);
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
			<div class="tb_title"><h4>办学思路与领导作用</h4>
			</div>
		</div>
		<div class="tb_main">
		<u><span id="test_1_3_t1">xx学院</span> </u>与<u><span id="test_1_3_t2"></span></u>家机构签订有合作协议，其中学术机构    <u><span id="test_1_3_t3"></span></u>家、企业 <u><span id="test_1_3_t4"></span></u>家、地方政府<u><span id="test_1_3_t5"></span></u>家。
		<br>
		※以上数据来源：表1-10.校友会与社会合作。
			<!-- <table border="1" id="table_1_3">
					<thead>
						<tr>
							<td colspan="9">
								<h4 id="filename">1.3人才培养模式</h4>
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
							<td rowspan="2">总计</td>
							<td colspan="4">学位</td>
							<td colspan="4">年龄</td>
						</tr>
						<tr>
							<td>博士</td>
							<td>硕士</td>
							<td>学士</td>
							<td>无学位</td>
							<td>35岁及以下</td>
							<td>36-45</td>
							<td>46-55</td>
							<td>56岁及上</td>
						</tr>
					</thead>
					
					<tbody>
					</tbody>
				
				<tfoot>
				</tfoot>
			</table> -->
		</div>
	</div>
	
</body>
</html>
