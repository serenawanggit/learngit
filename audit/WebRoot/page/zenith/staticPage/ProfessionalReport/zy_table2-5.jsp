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
			hideLodding();
		});
		function Zyselects(){
			hideLodding();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2_5",
						year : $("#year").val(),
						//num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						console.info(result);
						if(result.length>0){
							//总体情况		
							$.each(result,function(i,obj){
								html+="<tr><td>"+(obj[1])+"</td>"+
								"<td></td>"+
								"<td>"+(obj[2])+"</td>"+
								"<td>"+(obj[3])+"</td>"+
								"<td>"+(obj[4])+"</td>"+
								"<td>"+(obj[5])+"</td>"+
								"<td>"+(obj[6])+"</td>"+
								"<td>"+(obj[7])+"</td>"+
								"<td>"+(obj[8])+"</td>"+
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
			<table border="1" id="table_2_5">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">2.5教师发表教学研究论文</h4>
								<!-- <h4 id="filename">2.5近三年专任教师的教学科学研究项目、获奖和成果情况汇总</h4> -->
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
							<td colspan="8">教师发表教学研究论文</td>
						</tr>
						<tr>
							<td>工号</td>
							<td>数量</td>
							<td>教师姓名</td>
							<td>论文名称</td>
							<td>论文类别</td>
							<td>发表期刊</td>
							<td>发表时间</td>
							<td>本人排序</td>
						</tr>
						
					</thead>
					
					<tbody id="tbody">
						<!-- <tr>
							<td rowspan="3" width="400">专任教师承担教学研究项目</td>
							<td >项目总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：国家级</td>
							<td></td>
						</tr>
						<tr>
							<td>省部级</td>
							<td></td>
						</tr>
						
						<tr>
							<td rowspan="3">专任教师教学获奖</td>
							<td>获奖总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：国家级</td>
							<td></td>
						</tr>
						<tr>
							<td>省部级</td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">专任教师教学研究成果</td>
							<td>成果总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：出版专著数</td>
							<td></td>
						</tr>
						<tr>
							<td>发表论文数</td>
							<td></td>
						</tr>
						<tr>
							<td>其他</td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">专任教师承担科学研究项目</td>
							<td>项目总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：国家级</td>
							<td></td>
						</tr>
						<tr>
							<td>省部级</td>
							<td></td>
						</tr>
						<tr>
							<td>横向</td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="3">专任教师科学研究获奖</td>
							<td>获奖总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：国家级</td>
							<td></td>
						</tr>
						<tr>
							<td>省部级</td>
							<td></td>
						</tr>
						<tr>
							<td rowspan="4">专任教师科学研究成果</td>
							<td>成果总数</td>
							<td></td>
						</tr>
						<tr>
							<td>其中：出版专著数</td>
							<td></td>
						</tr>
						<tr>
							<td>发表论文数</td>
							<td></td>
						</tr>
						<tr>
							<td>其他</td>
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
