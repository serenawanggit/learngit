<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html >
	<head>
		<%-- <base href="<%=basePath%>"> --%>
		<meta charset="utf-8">
		<title>专家网评~自评分</title>
		   <script src="<%=basePath%>js/jquery-1.9.1.min.js" type="text/javascript"></script>
	<script src="/audit/jwplayer-7.6.1/jwplayer.js" type="text/javascript"></script> 
		<%-- <script type="text/javascript" src="<%=basePath %>js/jquery.js"></script> --%>
		<script type="text/javascript" src="<%=basePath %>js/assess/selfReport.js"></script>
		<script type="text/javascript" src="<%=basePath %>js/majorEvaluation/sinceScoreZJ.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/report_tree.css"/>
		<script type="text/javascript" src="<%=basePath %>js/majorEvaluation/merge.js"></script>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/base.css"/>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/sinceScoreZJ.css"/>
		  
     <script src="<%=basePath%>js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
         <script type="text/javascript" src="/audit/FlexPaper/js/jquery.js"></script>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash.js"></script>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash_debug.js"></script>
     <link rel="stylesheet" type="text/css" href="<%=basePath%>/css/bootstrap.min.css" />
     <script type="text/javascript" src="/audit/FlexPaper/js/jquery.js"></script>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash.js"></script>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash_debug.js"></script>
	    <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	
	</head>
	<body >
		<div class="container" >
			<div class="nav">
				<ul>
					<li><a href="<%=basePath%>/page/majorEvaluation/homePage.jsp">首页</a></li>
					<li class="nav-li-a"><a href="<%=basePath%>/page/majorEvaluation/commentZJ.jsp">专家网评</a></li>
				</ul>
			</div>
			<div class="main">
				<div class="main-top-short">
					<ul>
						<li class="main-top-li">专业评估年度：<span id="syear"></span></li>
						<li class="main-top-litwo">网评专业：<span id="name"></span>
						                                   <span id="id" style="display: none;"></span>
						                                   <span id="userId" style="display: none;"></span>
						                                   <span id="txId" style="display: none"></span>
						                                   
						</li>
					</ul>
				</div>
				<div class="main-bottom">
					<div class="main-bottom-container">
						<div class="main-bottom-top">
							<ul>
								<li class="main-bottom-li-one" id="left"  type="1" onclick="changeZPTap(1);">
									自评分
								</li>
								<li class="main-bottom-li-two" id="right" type="2" onclick="changeZPTap(2);">
									自评报告
								</li>
								<li class="main-bottom-li-three" id="right1" type="3" onclick="changeZPTap(3);">
									支撑数据表
								</li>
								<li class="main-bottom-li-four" id="right2" type="4" onclick="changeZPTap(4);">
									支撑材料
								</li>
							</ul>	
						</div>
						<div class="main-bottom-div-one">
							<table>
								<thead>
								<tr>
									<th class="th-one">一级指标</th>
									<th class="th-two">二级指标</th>
									<th class="th-three">观测点</th>
									<th class="th-four">状态数据<p></p></th>
									<!-- <th class="th-five">满分</th> -->
									<th class="th-six">自评分</th>
								<!-- 	<th class="th-seven">支持材料<p></p></th> -->
								</tr>
								</thead>
								<tbody id="tbody">
								
								</tbody>
							</table>
						</div>
						<div class="main-bottom-div-two" style="overflow: scroll">
							<div class="left">
							<!-- 标题 -->
								 <div class="report_title" id="title">
	                             </div>
							<!-- 树状菜单 -->
                                 <div class="report_list" id="menuList">
                                 </div>
							</div>
							<div class="right" >
							<!-- 文本域 -->
								 <div class="report_content" id="content">
		                         </div>
							</div>
						</div>
						
						<div class="main-bottom-div-three" id="main-bottom-div-three" style="overflow:scroll;">
							<div style="margin-left: 10px;margin-top: 10px;margin-bottom: 5px" id="table_title"></div>
							<table style="margin-left: 10px"> <thead>
							<!-- 	<tr>
									<th class="th-one">一级指标</th>
									<th class="th-two">二级指标</th>
									<th class="th-three">观测点</th>
									<th class="th-four">状态数据</th>
									<th class="th-six">自评分</th>
								</tr> -->
								</thead> <tbody >
								
								</tbody>
							</table>
							
						</div>

					<div class="main-bottom-div-four">
                         <div class="main-bottom-top">
							<ul id="div-four-ul">
								<li class="main-bottom-li-one"   onclick="showZCCL(this);">
								</li>
							</ul>	
						</div>
						
						<div style="width:100%;height:450px;margin-top: 5px">
						   <p id='viewerPlaceHolder'style='width:100%;height:100%;display:block;'>

						   </p>
						</div>
						
					</div>

					<div class="main-bottom-position">
							<div class="position-top" onclick="PopupZPDiv(1);">
								<ul>
									<li>自评考核意见表</li>
								</ul>
							</div>
							<div class="position-center" onclick="PopupZPDiv(2);">
								<ul>
									<li>自评分和支撑材料相符审核意见表</li>
								</ul>
							</div>
							<div class="position-bottom" onclick="PopupZPDiv(3);">
								<ul>
									<li>建议实地考查重点</li>
								</ul>
							</div>
						</div>
					</div>
				    <div class="main-bottom-container_right">
<!-- 				         			<div class="popups" id="popups1" style="display: none;">
 -->		<!-- 		<div class="popups-head" id="popupshead" >
					<ul>
						<li accessselfid="" id="save" onclick="savaAllScore()">保存</li>
						<li onclick="PopupZPDiv(0);">返回</li>
					</ul>
				</div>	 -->
				
				<div class="popups-main" style="margin-top: 9px">
			<!-- 	<table style="border: 1px solid black;width:100%;height:100%;">
				   <tr>
				      <thead>
							<tr>
								<th class="popups-main-th-one">基本内容</th>
								<th class="popups-main-th-two">观测点</th>
								<th class="popups-main-th-three">阐述情况</th>
								<th class="popups-main-th-four">得分</th>
							</tr>
						</thead>
						<tbody id="popupsTbody" class="popups-tbody" >
						
						</tbody>
                        <tfoot>
						<tr>
						    <td style="text-align: center;font-size: 14px;font-weight: 600;">合计</td>
						    <td colspan="2"></td>
						    <td style="text-align: center;height:50px;"><input type="text" style="width:60px;padding-left: 35px;" id="hjScore" readonly="readonly"/></td>
						</tr>
						<tr>
						     <td colspan="4">
						       <span style="padding-left: 5px;font-size: 14px;font-weight: 600;">综合评价意见：</span><br/>
						       <span id="spanyj" style="font-size:12px;padding-left: 45px;"></span>
						     </td>
						</tr>
						<tr>
						     <td colspan="4" style="width:100%">
						         <textarea  style="resize:none;border:0px;width: 100%;" rows="10" id="yjtext" ></textarea>
						         <div style="height:50px;margin-top: 5px">
							         <div style="float:left; width:100%; font-size: 12px;font-weight: 500;height:25px;left:200px;">
							         	<li style="float: right; width: 150px">专家签字:<input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px"/></li>
							         </div>
							         <div style="float:right;width:300px;font-size: 12px;height:25px;"> 
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="year"/>年
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="month"/>月
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="day"/>日
							         </div>
						         </div>
						     </td>
						</tr>
						</tfoot>
				   </tr>
				</table> -->
				<div style="width:100%; height:38px;background:#EAEAEA;font-size: 20px;text-align: center;border-bottom: 3px solid #19C6A1;margin-bottom: 2px">
				  <div class="popups-head" id="popupshead" >
				            <span style="">专家打分</span>
					        <span style="float: right;font-size: 15px;border: 3px solid white;margin-right: 10px;margin-top: 2px;padding: 2px;border-radius:3px;cursor: pointer;" onclick="saveAllScore()">保存</span>
				</div>	
				</div>
				<div class="main-bottom-div-one-one">
							<table>
								<thead>
								<tr>
									<th  style="width:15%">一级指标</th>
									<th  style="width:15%">二级指标</th>
									<th  style="width:15%">观测点</th>
									<th  style="width:40%">评分标准</th>
									<th  style="width:15%">得分</th>
								<!-- 	<th class="th-seven">支持材料<p></p></th> -->
								</tr>
								</thead>
								<tbody id="tbodyright">
								
								</tbody>
								
								   <tfoot>
						<tr>
						    <td style="text-align: center;font-size: 14px;font-weight: 600;">合计</td>
						    <td colspan="3"></td>
						    <td style="text-align: center;height:50px;"><input type="text" style="width:35px;" id="ffff" value="" /></td>
						</tr>
						<tr>
						     <td colspan="5">
						       <span style="padding-left: 5px;font-size: 14px;font-weight: 600;">综合评价意见：</span><br/>
						       <span id="spanyj" style="font-size:12px;padding-left: 45px;"></span>
						     </td>
						</tr>
						<tr>
						     <td colspan="5" style="width:100%">
						         <textarea rows="10" cols="57%" style="resize:none;border:0px" id="yjtext" ></textarea>
						         <div style="height:50px;margin-top: 5px">
							         <div style="float:left; width:100%; font-size: 12px;font-weight: 500;height:25px;left:200px;">
							         	<li style="float: right; width: 150px">专家签字:<input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px" id="zjqm"/></li>
							         </div>
							         <div style="float:right;width:300px;font-size: 12px;height:25px;"> 
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="year"/>年
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="month"/>月
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="day"/>日
							         </div>
						         </div>
						     </td>
						</tr>
						</tfoot>
							</table>
						</div>
				
					<!-- <table>
					   <thead>
							<tr>
								<th class="popups-main-th-one">基本内容</th>
								<th class="popups-main-th-two">观测点</th>
								<th class="popups-main-th-three">阐述情况</th>
								<th class="popups-main-th-four">得分</th>
							</tr>
						</thead>
						<tbody id="popupsTbody" class="popups-tbody" >
						
						</tbody>
                        <tfoot>
						<tr>
						    <td style="text-align: center;font-size: 14px;font-weight: 600;">合计</td>
						    <td colspan="2"></td>
						    <td style="text-align: center;height:50px;"><input type="text" style="width:60px;padding-left: 35px;" id="hjScore" readonly="readonly"/></td>
						</tr>
						<tr>
						     <td colspan="4">
						       <span style="padding-left: 5px;font-size: 14px;font-weight: 600;">综合评价意见：</span><br/>
						       <span id="spanyj" style="font-size:12px;padding-left: 45px;"></span>
						     </td>
						</tr>
						<tr>
						     <td colspan="4" style="width:100%">
						         <textarea rows="10" cols="114%" style="resize:none;border:0px" id="yjtext" ></textarea>
						         <div style="height:50px;margin-top: 5px">
							         <div style="float:left; width:100%; font-size: 12px;font-weight: 500;height:25px;left:200px;">
							         	<li style="float: right; width: 150px">专家签字:<input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px"/></li>
							         </div>
							         <div style="float:right;width:300px;font-size: 12px;height:25px;"> 
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="year"/>年
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="month"/>月
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="day"/>日
							         </div>
						         </div>
						     </td>
						</tr>
						</tfoot>
					</table>
 -->				</div>
				    </div>
				</div>
			</div>
			<div class="footer" style="display: none;">
				<div class="back">
					<a href="javascript:scroll(0,0);"><img src="<%=basePath%>/img/majorEvaluation/back.png"/></a>
				</div>
			</div>
		</div>
<!-- ------自评考核意见表弹出层  start----- -->
			<!-- <div class="popups" id="popups1" style="display: none;">
				<div class="popups-head" id="popupshead" >
					<ul>
						<li accessselfid="" id="save" onclick="savaAllScore()">保存</li>
						<li onclick="PopupZPDiv(0);">返回</li>
					</ul>
				</div>	
				
				<div class="popups-main">
					<table>
					   <thead>
							<tr>
								<th class="popups-main-th-one">基本内容</th>
								<th class="popups-main-th-two">观测点</th>
								<th class="popups-main-th-three">阐述情况</th>
								<th class="popups-main-th-four">得分</th>
							</tr>
						</thead>
						<tbody id="popupsTbody" class="popups-tbody" >
						
						</tbody>
                        <tfoot>
						<tr>
						    <td style="text-align: center;font-size: 14px;font-weight: 600;">合计</td>
						    <td colspan="2"></td>
						    <td style="text-align: center;height:50px;"><input type="text" style="width:60px;padding-left: 35px;" id="hjScore" readonly="readonly"/></td>
						</tr>
						<tr>
						     <td colspan="4">
						       <span style="padding-left: 5px;font-size: 14px;font-weight: 600;">综合评价意见：</span><br/>
						       <span id="spanyj" style="font-size:12px;padding-left: 45px;"></span>
						     </td>
						</tr>
						<tr>
						     <td colspan="4" style="width:100%">
						         <textarea rows="10" cols="114%" style="resize:none;border:0px" id="yjtext" ></textarea>
						         <div style="height:50px;margin-top: 5px">
							         <div style="float:left; width:100%; font-size: 12px;font-weight: 500;height:25px;left:200px;">
							         	<li style="float: right; width: 150px">专家签字:<input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px"/></li>
							         </div>
							         <div style="float:right;width:300px;font-size: 12px;height:25px;"> 
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="year"/>年
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="month"/>月
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="day"/>日
							         </div>
						         </div>
						     </td>
						</tr>
						</tfoot>
					</table>
				</div>
			</div> -->
<!-- ------自评考核意见表弹出层  end----- -->

	<!-- 自评分和支撑材料相符审核意见表 start -->
	<div class="popups" id="popups2">
		<div class="popups-head">
		<!--  <span class="titlename">自评分和支撑材料相符审核意见表</span> -->
			<ul>
				<li onclick="saveAllPeneralScore()">保存</li>
				<li onclick="PopupZPDiv(0);">返回</li>
			</ul>
		</div>

        	<div class="popups_main">
		        <table>
		            <thead>
		                <tr>
		                    <th class="one">评价指标</th>
		                    <th class="two">审核项目</th>
		                    <th class="three">自评分</th>
		                    <th class="four">满分值</th>
		                    <th class="five">支撑材料与自评分的相符性</th>
		                    <th class="six">应得分</th>
		                </tr>
		            </thead>
		             <tbody id="cltable">
		             </tbody>
		             <tfoot>
						<tr>
		                    <td>合计</td>
		                    <td colspan="2"></td>
		                    <td ><span id="xitScore"></span></td>
		                    <td ></td>
		                    <td ><input type="text" style="width:60px;padding-left: 35px;" id="peneralhjScore" readonly="readonly"/></td>
						</tr>
						<tr>
					        <td colspan="6">
					           <span style="float: left;">&nbsp;&nbsp;总体评价意见：</span><br/>
					           <textarea rows="10" cols="109%" style="resize:none;border:0px;margin-left: 35px" id="peneralyjtext"  ></textarea>
						         <div style="height:50px;margin-top: 5px">
							         <div style="float:left; width:100%; font-size: 12px;font-weight: 500;height:25px;left:200px;">
							         	<!-- <li style="float: right; width: 150px">专家签字:<input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px"/></li> -->
							         </div>
							         <div style="float:right;width:300px;font-size: 12px;height:25px;"> 
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="peneralyear"/>年
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="peneralmonth"/>月
							           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="peneralday"/>日
							         </div>
						         </div>
					        </td>
						</tr>
					 </tfoot>
		        </table>
		    </div>


	</div>
	<!-- 自评分和支撑材料相符审核意见表 end -->
	<!-- 建议实地考查重点弹出层 start -->
	<div class="popups" id="popups3">
		<div class="popups-head">
			<ul>
				<li onclick="postFileInvestPointContent()">保存</li>
				<li onclick="PopupZPDiv(0);">返回</li>
			</ul>
		</div>
		<div class="popups-main">
			<table class="popups3-table" id="popups3Table">
			<thead>
				<tr>
					<th class="popups3-main-th-one">指标</th>
					<th class="popups3-main-th-two">建议实地考查重点内容</th>

				</tr>
				</thead>
				<tbody id="popups3Tbody" class="popups-tbody" >
						
				</tbody>

			</table>
		</div>
	</div>
	<!-- 建议实地考查重点 end -->

<!-- 灰色遮罩层 start -->
			<div class="cover-layer"></div>
<!-- 灰色遮罩层 end -->
	</body>
</html>
<style>
 .popups-main-div{
	height:100%;
	width:100%;
}
.popups-main-div li{
	float:left;
	margin:0px 5px;
}
.popups-main-div li:nth-child(2),.popups-main-div li:nth-child(4),.popups-main-div li:nth-child(6),.popups-main-div li:nth-child(8){
	margin-right:10px;
}
.popups-main-div li:nth-child(1),.popups-main-div li:nth-child(3),.popups-main-div li:nth-child(5),.popups-main-div li:nth-child(7){
	background-color:#B8B8B8;
	border-radius:5px;
	width:20px;
	height:20px;
} 
</style>
<script type="text/javascript">
 validateLogin();
  var urlinfo = window.location.href;
  var name = urlinfo.split("?")[1].split("&")[1].split("=")[1];
  var syear= <%=(String)request.getParameter("syear")%>;
  var id= <%=(String)request.getParameter("id")%>;
  var userId= <%=(String)request.getParameter("userId")%>;
  var txId= <%=(String)request.getParameter("txId")%>;
  $("#syear").html(syear);
  $("#name").html(decodeURI(name));
  $("#id").html(id);
  $("#userId").html(userId);
  $("#txId").html(txId);
 
</script>