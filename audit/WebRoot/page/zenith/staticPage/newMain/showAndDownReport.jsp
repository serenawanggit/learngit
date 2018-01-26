<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@taglib uri="/WEB-INF/struts-tags.tld" prefix="s"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" import="audit.util.Common" contentType="text/html; charset=UTF-8"%> 
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@include file="../../../common/lib.jsp"%>
<link href="/CHART/css/tsk.css" rel="stylesheet" type="text/css" />
<link href="/CHART/css/style.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="/CHART/css/bootstrap.min.css" />
<link href="/CHART/css/pw.css" rel="stylesheet" type="text/css" />
<script src="/CHART/js/jquery-1.9.1.min.js" type="text/javascript"></script>
 <script src="/CHART/js/bootstrap.min.js" type="text/javascript"></script> 
<script type="text/javascript" src="/CHART/js/indexTop.js"></script>
<script type="text/javascript"
	src="/CHART/js/uesrMenuPermission.js"></script>
<script type="text/javascript">
  		$(function(){
  			var cookie = document.cookie;
  			if(cookie && cookie != ""){
  				var cookies = cookie.split(";");
  				for(var i = 0 ; i < cookies.length; i++){
		  			var index = cookies[i].lastIndexOf("=");
		  			var cookiename = cookies[i].substring(0,index);
		  			if(myTrim(cookiename) == "uvocookie"){
		  				var value = cookies[i].substring(index+1,cookies[i].length);
		  				var array = value.split("&");
			  			var url = getDlyzPath() + "/login?name=" + array[1] + "&password="+array[2];
			  			$.getJSON(url,function(data){
			  				$("#showname").html(eval(data).showname);	
			  			});
		  			}
  				}
  			}else{
  				window.location.href = getDlyzPath();
  			}
  		});
  		
  		$('#exampleModal').on('show.bs.modal', function(event) {
		var button = $(event.relatedTarget); // Button that triggered the modal
		var recipient = button.data('whatever'); // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this);
		modal.find('.modal-title').text('New message to ' + recipient);
		modal.find('.modal-body input').val(recipient);
	});
	
	function downReport(element){
	 var name= $(element).parent().parent().children("td").eq(1).text();
	 $("#filename").val(name);
	 $("#downform").submit();
	}
  	</script>
<link rel="shortcut icon" href="" type="image/x-icon" />
<title><%=Common.TITLE%></title>
<link href="css/main.css" rel="stylesheet" type="text/css" />
<link href="css/showAndDownReport.css" rel="stylesheet" type="text/css" />
<style type="text/css">
body,html {
	width: 100%;
	height: 100%;
	margin: 0;
	border: none;
	background-repeat: repeat-x;
	font-size: 12px;
	font-family: Arial, Helvetica, sans-serif;
}
</style>
<!-- 导航 -->
<style type="text/css">
.chart_nva {
	margin-top: 12px;
}

.chart_nva strong {
	font-weight: bold;
	line-height: 30px;
	margin-right: 15px;
	float: right;
}

.chart_nva strong a {
	color: white;
}

.chart_nva strong a img {
	width: 16px;
	height: 16px;
	vertical-align: middle;
}
</style>
</head>
<body>
	<div class="top" style="display:none">
		<div class="logoclass" onclick="javascript:window.location.href='/CHART';">
			<img src=<%=System.getProperty("logoUrl")%>></img>
		</div>
		<div class="topnav hide" style="min-width:550px;">
			<ul id="jsddm" style="display:none;">
				<li>
					<a href="page/home/home.jsp" target="conbar" id="chartIndex"><span>教学状态</span></a>
				</li>
				<li>
					<a href="javascript:void(0)" class="tips" id="chartXueYuan">学院简况</a>
					<dl class="db_menu" name="orgMenu" style="overflow: auto;width: 764px;max-height: 400px;">
					</dl>
				</li>
				<li style="display:none">
					<a href="javascript:void(0)" class="tips" id="chartZhuanYe">专业简况</a>
					<dl class="db_menu" name="speMenu" style="overflow: auto;width: 764px;max-height: 400px;"></dl>
				</li>
				<li>
					<a href="page/qualityMonitoring/zhiliangjiance.jsp" target="conbar" id="chartJianChe"><span>质量监测</span></a>
				</li>
				<li>
					<a href="page/qualitydata/zhiliangbaogao.jsp" target="conbar" id="chartShuJu"><span>质量数据</span>				</a>
				</li>
				<li>
					<a href="page/qualityReport/qualityReport.jsp" target="conbar" id="chartHuiBian"><span>核心数据</span></a>
				</li>
				<li>
					<a href="page/ASDSReport/ASDSReport.jsp" target="conbar" id="chartShenHePingGuShuJuFenXi"><span>审核评估数据分析</span></a>
				</li>
			</ul>

			<ul id="jsddm_v2" style="display:none;">
				<li style="display: block;" name="selectMenu">
					<a href="javascript:void(0)" class="tips"><span>数据看板</span></a>
					<dl class="db_menu_v2" style="overflow: auto;max-height: 400px; display: block;">
						<dd style='border-top:none;'><a href="page/home/home.jsp" target="conbar" id="chartIndex">学校数据</a></dd>
						<dd style='border-top:none;'><a href="page/qualityMonitoring/zhiliangjiance.jsp" target="conbar" id="chartJianChe">二级学院</a></dd>
					</dl>
				</li>
				<li style="display: block;" name="selectMenu">
					<a href="javascript:void(0)" class="tips">数据报表</a>
					<dl class="db_menu_v2" style="overflow: auto;max-height: 400px;">
						<dd style='border-top:none;'><a href="page/ASDSReport/ASDSReport.jsp" target="conbar" id="chartShenHePingGuShuJuFenXi">审核评估数据分析</a></dd>
						<dd style='border-top:none;'><a href='javascript:void(0);'>高基报表</a></dd>
						<dd style='border-top:none;'><a href="page/qualitydata/zhiliangbaogao.jsp" target="conbar" id="chartShuJu">质量数据</a></dd>
					</dl>
				</li>
				<li style="display: block;" name="selectMenu">
					<a href="javascript:void(0)" class="tips">报告浏览</a>
					<dl class="db_menu_v2" style="overflow: auto;max-height: 400px;">
						<dd style='border-top:none;'><a href='javascript:void(0);'>本科教学质量</a></dd>
						<dd style='border-top:none;'><a href='javascript:void(0);'>本科专业质量</a></dd>
						<dd style='border-top:none;'><a href='javascript:void(0);'>达标评估</a></dd>
						<dd style='border-top:none;'><a href='javascript:void(0);'>教学基本状态</a></dd>
					</dl>
				</li>
				<li style="display: block;" name="selectMenu">
					<a href="javascript:void(0)" class="tips">学院简况</a>
					<dl class="db_menu" name="orgMenu" style="overflow: auto;max-height: 400px;"></dl>
				</li>
			</ul>
		</div>
		<!-- 返回导航 -->
		<div class="chart_nva">
			<strong> 
				<a href="javascript:void(0);" onclick="javascript:window.location.href = '/CHART/leaderShipV2.jsp'">返回导航&nbsp;<img src="/CHART/images/nva_back.png" /> </a> 
			</strong>
		</div>
	</div>
	<!-- <div class="" style="height:150px;width:500px;border:1px solid red;">
	   
    </div> -->
    
    <div class="dowmreport">
        <form action="/CHART/report/report_downreport.htm"  method="post" id="downform" style="display: none;">
           <input type="text" id="filename" name="filename" />
        </form>
        <div style="width:100%;height:100%;">
          <div class="reportdiv"  >
		           <div class="col-md-10 button-znj" >
		               <ul class="nav nav-tabs nav-justified tab-znj" role="tablist"
							id="tabul">
							<li role="presentation" class="active" tab="1">
								<a href="#two" aria-controls="home" role="tab" data-toggle="tab">教育部教学基本状态数据</a>
							</li>
							<li role="presentation" class="" tab="2" onclick="">
								<a href="#three" aria-controls="profile" role="tab" data-toggle="tab">上海市本科教学质量报告</a>
							</li>
							<li role="presentation" class="" tab="3" onclick="">
								<a href="#four" aria-controls="messages" role="tab" data-toggle="tab" >专业达标评估报告</a>
							</li>
							<li role="presentation" class="" tab="4" onclick="">
								<a href="#five" aria-controls="settings" role="tab" data-toggle="tab">专业年度质量报告</a>
							</li>
							<li role="presentation" class="" tab="5" onclick="">
								<a href="#six" aria-controls="settings" role="tab" data-toggle="tab">标准质量报告</a>
							</li>
						</ul>
						
						<div class="tab-content">
							   <div role="tabpanel" class="tab-pane active" id="two" style="height:550px;width:100%;overflow-y:auto ">
									<table class="table table-bordered table-znj" >
										<thead>
											<tr>
												<th class="th-1">序号</th>
												<th class="th-2">名称</th>
												<th class="th-3">操作</th>
												
											</tr>
										</thead>
			
										<tbody id="tbody">
											<tr>
											<td>1</td>
											<td>2010-2011学年教学基本状态数据.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>2</td>
											<td>2011-2012学年教学基本状态数据.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>3</td>
											<td>2012-2013学年教学基本状态数据.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>4</td>
											<td>2013-2014学年教学基本状态数据.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>5</td>
											<td>2014-2015学年教学基本状态数据.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											<tr>
											<td>6</td>
											<td>2009-2010学年状态数据（20110328统计）.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
										</tbody>
									</table>
								</div>
								
								
								  <div role="tabpanel" class="tab-pane" id="three" style="height:550px;width:100%;overflow-y:auto ">
										<table class="table table-bordered table-znj" >
										<thead>
											<tr>
												<th class="th-1">序号</th>
												<th class="th-2">名称</th>
												<th class="th-3">操作</th>
												
											</tr>
										</thead>
			
										<tbody id="tbody">
											<tr>
											<td>1</td>
											<td>2011-2012学年本科教学质量报告.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>2</td>
											<td>2012-2013学年本科教学质量报告.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>3</td>
											<td>2013-2014学年本科教学质量报告.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
										</tbody>
									</table>
								</div>
								
								  <div role="tabpanel" class="tab-pane" id="four" style="height:550px;width:100%;overflow-y:auto ">
										<table class="table table-bordered table-znj" >
										<thead>
											<tr>
												<th class="th-1">序号</th>
												<th class="th-2">名称</th>
												<th class="th-3">操作</th>
												
											</tr>
										</thead>
			
										<tbody id="tbody">
											<tr>
											<td>1</td>
											<td>01电气工程及其自动化专业达标评估报告（韦钢）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>2</td>
											<td>02测控技术与仪器专业达标评估报告（顾幸生）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>3</td>
											<td>03自动化专业达标评估报告（刘富强）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>4</td>
											<td>04电子信息工程专业达标评估报告（朱煜）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>5</td>
											<td>05网络工程专业达标评估报告（史有群）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>6</td>
											<td>06计算机科学与技术专业达标评估报告（曾卫明）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>7</td>
											<td>07软件工程专业达标评估报告（蒋建伟）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>8</td>
											<td>08材料成型及控制工程专业达标评估报告（阚树林）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>9</td>
											<td>08机械设计制造及其自动化专业达标评估报告（陈关龙）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>10</td>
											<td>10车辆工程专业达标评估报告（王岩松）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>11</td>
											<td>11物流管理专业达标评估报（刘伟）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>12</td>
											<td>12市场营销专业达标评估报告（江若尘）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>13</td>
											<td>13机械电子工程专业达标评估报告(陈关龙）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>14</td>
											<td>14通信工程专业达标评估报告（陈强璋）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>15</td>
											<td>15汽车服务工程专业达标评估报告.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>16</td>
											<td>16财务管理专业专业达标评估报告（朱建国）.docx</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>17</td>
											<td>17工业工程专业达标评估报告（蒋祖华）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>18</td>
											<td>18德语专业达标评估报告（赵劲）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>19</td>
											<td>19英语专业达标评估报告（冯奇）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>20</td>
											<td>20国际经济与贸易专业达标评估报告（强永昌）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>21</td>
											<td>21质量管理工程专业达标评估报告（尤建新）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>22</td>
											<td>22工业设计专业达标评估报告(吴翔）.doc</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
											<tr>
											<td>23</td>
											<td>2013-2015专业评估专业评估得分分析.docx</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
											
										</tbody>
									</table>
								</div>
								
								  <div role="tabpanel" class="tab-pane" id="five" style="height:550px;width:100%;overflow-y:auto ">
										<table class="table table-bordered table-znj"  >
										<thead>
											<tr>
												<th class="th-1">序号</th>
												<th class="th-2">名称</th>
												<th class="th-3">操作</th>
												
											</tr>
										</thead>
			
										<tbody id="tbody" >
											<tr>
											<td>1</td>
											<td>本科专业年度质量报告（2013-2014学年）.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
										</tbody>
									</table>
								</div>
								
								<div role="tabpanel" class="tab-pane" id="six" style="height:550px;width:100%;overflow-y:auto ">
										<table class="table table-bordered table-znj"  >
										<thead>
											<tr>
												<th class="th-1">序号</th>
												<th class="th-2">名称</th>
												<th class="th-3">操作</th>
												
											</tr>
										</thead>
			
										<tbody id="tbody" >
											<tr>
											<td>1</td>
											<td>上海电机学院教学质量保障体系.pdf</td>
											<td><a onclick="downReport(this)">下载</a></td>
											</tr>
										</tbody>
									</table>
							   </div>
						</div>
		           </div>
          </div>
        </div>
        
	</div>
</body>
</html>