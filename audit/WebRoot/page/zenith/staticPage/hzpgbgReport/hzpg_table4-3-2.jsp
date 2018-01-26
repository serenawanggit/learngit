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
			  $("#table_4_3_2  tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table4-3-2",
						year : $("#year").val(),
					},
					success : function(data){
					var result=eval("("+data+")");
				if(data.length>2){
						var html="";
							$.each(result,function(i,obj){
								html=html+"<tr><td>"+
								(i+1)+"</td><td>"+
								(obj[0]==''?0:obj[0])+"</td><td>"+
								(obj[1]==''?0:obj[1])+"</td><td>"+
								(obj[2]==''?0:obj[2])+"</td><td>"+
								(obj[3]==''?0:obj[3])+"</td><td>"+
								(obj[4]==''?0:obj[4])+"</td><td>"+
								(obj[5]==''?0:obj[5])+"</td><td>"+
								(obj[6]==''?0:obj[6])+"</td><td>"+
								(obj[7]==''?0:obj[7])+"</td><td>"+
								(obj[8]==''?0:obj[8])+"</td><td>"+
								(obj[9]==''?0:obj[9])+"</td><td>"+
								(obj[10]==''?0:obj[10])+"</td><td>"+
								(obj[11]==''?0:obj[11])+"</td><td>"+
								(obj[12]==''?0:obj[12])+"</td><td>"+
								(obj[13]==''?0:obj[13])+"</td><td>"+
								(obj[14]==''?0:obj[14])+"</td><td>"+
								"</tr>";
							});
							$("#table_4_3_2 tbody").html(html);
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
			<table border="1" id="table_4_3_2">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">4.3.2.院系实验技术人员职称、学位、年龄分布情况</h4>
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
							<td rowspan="2">序号</td>
							<td rowspan="2">院系名称</td>
							<td rowspan="2">实验员总数</td>
							<td colspan="5">职称</td>
							<td colspan="4">学位</td>
							<td colspan="4">年龄</td>
						</tr>
						<tr>
							<td>正高</td>
							<td>副高</td>
							<td>中级</td>
							<td>初级</td>
							<td>无职称</td>
							<td>博士</td>
							<td>硕士</td>
							<td>学士</td>
							<td>无</td>
							<td>35岁以下</td>
							<td>36-46</td>
							<td>46-56</td>
							<td>56岁以上</td>
						</tr>
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				<tr>
							<td colspan="16">※以上数据来源：表1-6-1.教职工基本信息，表1-4.学校教学科研单位</td>
						</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
