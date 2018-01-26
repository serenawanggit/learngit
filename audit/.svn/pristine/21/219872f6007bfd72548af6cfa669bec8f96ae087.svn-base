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
			 $("#table_3_2 tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table3-2",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							$("#test_3_2_t1").text(result[0][0]);
							$("#test_3_2_t2").text(result[0][1]);
							$("#test_3_2_t3").text(result[0][2]);
							$("#test_3_2_t4").text(result[0][3]);
							$("#test_3_2_t5").text(result[0][4]);
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
			<div class="tb_title"><h4>教学条件与利用</h4>
			</div>
		</div>
		<div class="tb_main">
		<span>
			2013财政年度，经常性预算内教育事业费拨款额为<u><span id="test_3_2_t1"></span></u>     万元，学费收入为 <u><span id="test_3_2_t2"></span></u>   万元，教学日常运行支出总额为   <u><span id="test_3_2_t3"></span></u> 万元，教学日常运行支出占经常性预算内教育事业费拨款额（205类教育拨款扣除专项拨款）与学费收入之和的比例为  <u><span id="test_3_2_t4"></span></u>  %，生均年教学日常运行支出为   <u><span id="test_3_2_t5"></span></u> 元。
		</span>
		<br>
		【注】<br>
		1.生均年教学日常运行支出=年教学日常运行支出总额/折合在校生数。
		<br>2.“经常性预算内教育事业费拨款（205类教育拨款扣除专项拨款）与学费收入之和”中学费收入为“本科学费收入”与“高职高专学费收入”之和。
		<br>※	以上数据来源：表2-9-2.教育经费收支情况。
			<!--< table border="1" id="table_3_2">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">1.1本专业在校生数</h4>
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
							<td>年级</td>
							<td>学生数</td>
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
