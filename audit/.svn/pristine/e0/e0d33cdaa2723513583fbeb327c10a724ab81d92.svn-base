<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	<script type="text/javascript" src="${chartCtx }/js/echarts/echarts-all.js"></script>
	<script type="text/javascript" src="js/ZYReportFormat2.js"></script>
	
	<script type="text/javascript">
		$(function(){
			formatEndYear("year");
			Zyselects();
		});
		function Zyselects(){
			hideLodding();
		 	 $("#table_7_5_3 tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table7-5-3",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						//alert(data);
						if(data.length>2){
							var html="";
							$.each(result,function(i,obj){
								html=html+"<tr><td>"+
								(obj[0]==''?0:obj[0])+"</td><td>"+
								(obj[1]==''?0:obj[1])+"</td><td>"+
								(obj[2]==''?0:obj[2])+"</td><td>"+
								(obj[3]==''?0:obj[3])+"</td><td>"+
								(obj[4]==''?0:obj[4])+"</td><td>"+
								(obj[5]==''?0:obj[5])+"</td><td>"+
								(obj[6]==''?0:obj[6])+"</td><td>"+
								(obj[7]==''?0:obj[7])+"</td><td>"+
								(obj[8]==''?0:obj[8])+"</td>"+
								"</tr>";
							});
							$("#table_7_5_3 tbody").html(html);
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
			<div class="tb_title"><h4>教学质量</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_7_5_3">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">7.5.3毕业生就业去向分布情况</h4>
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
							<td>总数</td>
							<td>政府机构</td>
							<td>事业单位</td>
							<td>企业</td>
							<td>部队</td>
							<td>灵活就业</td>
							<td>升学</td>
							<td>参加国家地方项目就业</td>
							<td>其他</td>
						</tr>
					</thead>
					
					<tbody>
					</tbody>
				
				<tfoot>
				<tr>
					<td colspan="9">※	以上数据来源：表6-5-1.应届本科毕业生就业情况。
附件：
					</td>
				</tr>
				</tfoot>
			</table>
		</div>
	</div>
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/HZPG_7-5-3_echarts.js"></script>
		<div id="hzpg_table7_5_3_JY" style="width:90%;height:350px;text-align:center;margin-left:20px"></div>
</body>
</html>
