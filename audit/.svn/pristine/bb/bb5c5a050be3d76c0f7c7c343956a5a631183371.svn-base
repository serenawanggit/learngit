<%@page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
  	<title>学院-专业</title>
  	<link rel="stylesheet" href="${chartCtx}/css/main.css" rel="stylesheet" type="text/css" />
  	<link rel="stylesheet" href="${chartCtx}/css/homeDetailSpecialty.css" type="text/css"></link>
  	
	<script type="text/javascript" src="${chartCtx}/js/jquery.js"></script>
	<script type="text/javascript" src="${chartCtx}/js/echarts/echarts-all.js"></script>
	<script type="text/javascript" src="${chartCtx}/js/home/homeDetailSpecialty.js"></script>
	<script type="text/javascript" src="${chartCtx}/js/qualityData/indexODSDetail/indexODSDetail.js"></script>
  </head>
  <body>
  		<div id="detailMask" class="mask"></div>
  	
  		<!-- 隐藏数据 -->
  		<input type="hidden" value="${departmentCode}" id="departmentCode"/>
  		<input type="hidden" value="${departmentName}" id="departmentName"/>
  		<input type="hidden" value="${indexId}" id="indexId"/>
  		<input type="hidden" value="${indexName}" id="indexName"/>
  
  		<div class="box">
  			<div class="header">
  				<div class="nav_con">
  					<a href="${chartCtx}/page/home/home.jsp" target="conbar">首页</a>&nbsp;&gt;
  					${indexName}&nbsp;&gt;
  					${departmentName}
  				</div>
  			</div>
  			
  			<div class="center">
  				<div class="center_title">
  					<div class="by_year">
						<select id="startYear">
							${startYear}
						</select>
						<label>~</label>
						<select id="endYear">
							${endYear}
						</select>
					</div>
					<i id="dataMsg">空白框，或无边框代表无数据，点击数值可查看明细。</i>
					<ul class="ht_opertions">
<!-- 					<li><a href="javascript:void(0);" id="showDepartmentLayer">选择学院</a></li> -->
					<li><a href="javascript:void(0);" onclick="tabChartTable();">图表切换</a></li>
					<li><a href="javascript:history.back();">返回上层</a></li>
  				</div>
  				<!-- 专业大图 -->
  				<div class="specialty_chart" id="specialtyChart">
  				
  				</div>
  				<div class="table_content" id="specialtyTable">
  					<table>
						<thead>
							<tr>
								<td>123</td>
								<td>123</td>
								<td>123</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>321</td>
								<td>321</td>
								<td>321</td>
							</tr>
						</tbody>
					</table>    
  			</div>
  		</div>
  		
  		<div id="indexDetailDiv" class="index_detail_div">
			<div class="id_title" style="margin-bottom: 10px;">
		       	   显示指标明细
		       	 <a href="javascript:void(0)" title="关闭窗口" class="close_btn" onclick="showOrHideIndexDetailDiv();">×</a>
		     </div>
		     <div class="id_content">
		     	<div class="id_table">
		     		<table id="indexDetailTable">
		     			<thead>
		     				<tr>
	<!-- 	     					<td>123</td> -->
	<!-- 	     					<td>321</td> -->
	<!-- 	     					<td>645</td> -->
		     				</tr>
		     			</thead>
		     			<tbody>
	<!-- 	     				<tr> -->
	<!-- 	     					<td>123</td> -->
	<!-- 	     					<td>321</td> -->
	<!-- 	     					<td>645</td> -->
	<!-- 	     				</tr> -->
	<!-- 	     				<tr> -->
	<!-- 	     					<td>123</td> -->
	<!-- 	     					<td>321</td> -->
	<!-- 	     					<td>645</td> -->
	<!-- 	     				</tr> -->
	<!-- 	     				<tr> -->
	<!-- 	     					<td>123</td> -->
	<!-- 	     					<td>321</td> -->
	<!-- 	     					<td>645</td> -->
	<!-- 	     				</tr> -->
		     			</tbody>
		     		</table>
		     	</div>
		     </div>
		</div>
  </body>
</html>
