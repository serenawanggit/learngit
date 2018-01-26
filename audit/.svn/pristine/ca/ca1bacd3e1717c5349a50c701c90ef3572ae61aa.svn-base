<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="/WEB-INF/struts-tags.tld" prefix="s"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="/page/common/lib.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<head>
<link href="${chartCtx}/css/main.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${chartCtx}/js/jquery.js"></script>
<script type="text/javascript" src="${chartCtx}/js/echarts/echarts-all.js"></script>
<script type="text/javascript" src="${chartCtx}/js/home/home_detail2.js"></script>
<script type="text/javascript" src="${chartCtx}/js/qualityData/indexODSDetail/indexODSDetail.js"></script>
<link rel="stylesheet" href="${chartCtx}/css/home_detail2.css" type="text/css"></link>
</head>
<body style="overflow:auto">
	<div id="detailMask" class="mask"></div>
	
    <!-- 时点 -->
    <input type="hidden" value="${state }" id="shidian"/>
	<!-- 指标ID -->
	<input type="hidden" value="${asm.measureId }" id="mId"/>
	<input type="hidden" value="${asm.measureName }" id="mName"/>
	<input type="hidden" value="${asm.categoryId }" id="cId"/>
	<div class="nav_con home_detail_header">
		<a href="javascript:void(0);" onclick="goBackHome();" target="conbar">首页</a> &gt; ${asm.measureName }
	</div>
	<!-- 显示图形 -->
	<div class="center_chart">
		<div class="chart_title">
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
				<li>
					<a href="javascript:void(0);" id="showDepartmentLayer">选择学院</a>
					<!-- 学院显示层 -->
					<div class="department_pool" id="departmentLayer">
						<div class="dp_head">
							<div class="dp_head_title">
								<p>选择学院</p>
								<i>点击学院查看专业数据</i>
							</div>
							<div class="dp_head_button">
								<button id="closeDpLayer">
									关闭
								</button>
							</div>
						</div>
						<div class="dp_departments">
							<ul id="departments">
<!-- 								<li>化工学院</li> -->
<!-- 								<li>生物工程学院</li> -->
<!-- 								<li>化学与分子工程学院</li> -->
<!-- 								<li>材料工程学院</li> -->
<!-- 								<li>机械与动力工程学院</li> -->
<!-- 								<li>信息科学与工程学院</li> -->
<!-- 								<li>资源与环境工程学院</li> -->
<!-- 								<li>理学院</li> -->
<!-- 								<li>商学院</li> -->
<!-- 								<li>社会与公共管理学院</li> -->
<!-- 								<li>人文科学研究院</li> -->
							</ul>
						</div>
					</div>
				</li>
				<li><a href="javascript:void(0);" onclick="tabChartTable();">图表切换</a></li>
				<li><a href="javascript:void(0);" onclick="goBackHome();">返回上层</a></li>
			</ul>
		</div>
		<div class="chart_content" id="depatmentsChart">
			
		</div>
		<div class="table_content" id="departmentTable">
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
	
	 <!-- 弹出层 -->
     <%-- <a  style="color:#FFF;text-decoration:none;padding:5px 5px 0 0;font-size:12px;" href="javascript:void(0)">
              <img  style="vertical-align:middle;border: 0px;float: right;height:31px;width:31px" src="<%=basePath%>/images/alertimg/alertclose.png" onclick="hidebutton()"></img>
          </a> --%>
       <div id="divc" style="margin:0;padding:0;border:none;width:100%;height:100%;background:#333;opacity:0.6;filter:alpha(opacity=60);z-index:99;position:fixed;top:0;left:0;display: none"></div>
       <!-- 弹出的内容 -->
        <div id="divclose" style="background-color:#4C8AC4;height:6%;width:85%;z-index: 100;position: absolute; top: 4%;left:8%;display: none;">
               <img border="0" style="vertical-align:middle;float: right;" src="<%=basePath%>/images/alertimg/alertclose.png " onclick="hidebutton()"></img>
        </div>
       <div id="divcontent" style="background-color:white;height:80%;width:85%;z-index: 100;position: absolute; top: 10%;left:8%;display: none;overflow-x:auto;">
           <div style="padding: 5px 5px 5px 5px">
             <input type="hidden" id="rwid"/>
             <table style="font-size:12px;width:100%; border:#DADADA 1px solid;" cellpadding="0" cellspacing="0" id="content">
                      <thead id="tb_thead" class="tb_thead">
                          <tr></tr>
                      </thead>
                      <tbody id="tb_tbody">
                         <tr>
                         </tr>
                      </tbody>
             </table>
           </div>
             <div id="Wjyxx" style="width:100%;"></div>
             <div><span id="zs" style="margin-left: 10px;color:green;font-size: 14px;"></span></div>
             
</body>
</html>