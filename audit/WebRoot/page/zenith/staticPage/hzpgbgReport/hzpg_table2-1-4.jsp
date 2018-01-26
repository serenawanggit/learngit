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
			  $("#table_2_1_4 tbody").empty();
			 $.ajax({
					url : "/CHART/hzpgbgReport/hzpgbgReport_hzpgbgGetListByYear.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2-1-4",
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
								(obj[0]==''?'/':obj[0])+"</td><td>"+
								(obj[1]==''?'/':obj[1])+"</td><td>"+
								(obj[2]==''?'/':obj[2])+"</td><td>"+
								(obj[3]==''?'/':obj[3])+"</td><td>"+
								(obj[4]==''?0:obj[4])+"</td><td>"+
								(obj[5]==''?0:obj[5])+"</td><td>"+
								(obj[6]==''?0:obj[6])+"</td><td>"+
								(obj[7]==''?0:obj[7])+"</td><td>"+
								(obj[8]==''?0:obj[8])+"</td><td>"+
								(obj[9]==''?0:obj[9])+"</td><td>"+
								(obj[10]==''?0:obj[10])+"</td><td>"+
								"</tr>";
							});
							$("#table_2_1_4 tbody").html(html);
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
			<div class="tb_title"><h4>教师队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_2_1_4">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">2.1.4各专业授课教师数及职称、学位、年龄分布</h4>
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
						<td rowspan="2">专业</td>
						<td rowspan="2">专业设置年限</td> 
						<td colspan="3">授课教师数</td>
						<td colspan="2">具有高级职称</td> 
						<td colspan="2">具有硕士、博士学位</td> 
						<td colspan="2">35岁以下青年教师</td>
					</tr>
					
					<tr>
						<td>总数</td>
						<td>本学院授课教师数</td>
						<td>外学院授课教师数</td>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
						<td>数量</td>
						<td>比例(%)</td>
					</tr>
					</thead>
					
					<tbody>
					</tbody>
				
				<tfoot>
					<tr>
						<td colspan="12">
						【注】：<br>
1.专业授课教师，指按照学校近一学年课程记录，给相关专业开设过专业课的教师。
<br>
2.本表格只统计专业课的授课情况、不含外聘教师统计。<br>
※ 以上数据来源：表1-4.学校教学科研单位，表1-6-1.教职工基本信息，表5-1-1.开课情况，表5-1-2.专业课教学实施情况，表1-5-1.专业基本情况，表1-5-2.专业大类情况表。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
