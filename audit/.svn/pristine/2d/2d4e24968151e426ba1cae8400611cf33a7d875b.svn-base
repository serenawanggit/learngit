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
			//formatDate("year");
			Zyselects();
		});
		
		function Zyselects(){
			hideLodding();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToFour.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table1_3",
						endYear : $("#endYear").val(),
						beginYear : $("#beginYear").val(),
						//num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(result.length>0){
							$("#td_1").html(result[0][0]==""?"/":result[0][0]);
							$("#td_2").html(result[0][1]==""?"0":result[0][1]);
							$("#td_3").html(result[0][2]==""?"0":result[0][2]);
						}else{
							$("#td_1").html("/");
							$("#td_2").html("0");
							$("#td_3").html("0");
						}
					},error:function(){
						alert("加载失败");
					}
			});
		}
		
		/* function Zyselects(){
		$("#table_1_3 tbody").empty();
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
						 var html="";
							$.each(result,function(i,obj){
								html+="<tr><td>"+(obj[0]==''?'/':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'/':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'/':obj[2])+"</td>"+
								"<td>"+(obj[3]==''?'/':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'/':obj[4])+"</td>"+
								"<td>"+(obj[5]==''?'/':obj[5])+"</td>"+
								"<td>"+(obj[6]==''?'/':obj[6])+"</td>"+
								"<td>"+(obj[7]==''?'/':obj[7])+"</td>"+
								"<td>"+(obj[8]==''?'/':obj[8])+"</td>"+
								"<td>"+(obj[9]==''?'/':obj[9])+"</td>"+
								"<td>"+(obj[10]==''?'/':obj[10])+"</td>"+
								"</tr>";
							});
							$("#table_1_3 tbody").html(html); 
						}
					},error:function(){
						alert("加载失败");
					}
			});
		} */
	</script>
</head>

<body>
<%-- 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
 --%> 	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>学生</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_3">
				<thead>
					<tr>
						<td colspan="15">
							<h4>1.3 本专业学生转入及转出情况</h4>
							<div class="chocieYear">
								<ul>
									<li>开始年份：
										<select class="select_tips tb_select" id="beginYear" onchange="Zyselects()">
											<!-- <option>2018/09/30-2017/09/30</option>
												<option selected="selected">2017/09/30-2016/09/30</option>
												<option>2016/09/30-2015/09/30</option>
												<option>2015/09/30-2014/09/30</option>
												<option>2014/09/30-2013/09/30</option> -->
											<option>2018/09/30</option>
											<option>2017/09/30</option>
											<option selected="selected">2016/09/30</option>
											<option>2015/09/30</option>
											<option>2014/09/30</option>
										</select>
										结束年份：
										<select class="select_tips tb_select" id="endYear" onchange="Zyselects()">
											<option>2018/09/30</option>
											<option selected="selected">2017/09/30</option>
											<option>2016/09/30</option>
											<option>2015/09/30</option>
											<option>2014/09/30</option>
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<!-- <tr>
						<td align="center" colspan="2">本专业学生转入及转出情况</td>
					</tr> -->
				</thead>
				
				<tbody>
					
					<tr>
						<td width="60%">年份：</td> 
						<td id="td_1"></td>
					</tr>
					<tr>
						<td>转入学生数：</td> 
						<td id="td_2"></td>
					</tr>
					<tr>
						<td>转出学生数：</td> 
						<td id="td_3"></td>
					</tr>
					
				</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	
</body>
</html>
