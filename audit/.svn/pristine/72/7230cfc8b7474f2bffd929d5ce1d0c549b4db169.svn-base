<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title></title>
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/zenith/staticPage/css/home_1.css"/>
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/js/mains.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	  <link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
   	  <link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/core/base.js" type="text/javascript"></script>
 <script src="<%=basePath%>js/ligerui/lib/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>
 <script src="<%=basePath%>js/ligerui/lib/ligerUI/js/core/inject.js" type="text/javascript"></script>
 <script src="<%=basePath%>js/ligerui/lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
 <script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/js/College.js"></script>
  </head>
  
  <body>
    <!-- 弹出层  -->
  <div id="mask" class="mask"></div>
  <div class="sp_box"></div>
  <input type="hidden" value="<%=request.getParameter("cid")%>" id='cid'/>
    <div id="div1">
    	<div id="left"  style="height:75px;width:13.4%">
    		<div id="upper" style="height:100%;">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div id = "dynamic" style="width:44%;margin-top:4%">领导驾驶舱</div>
    		</div>
    	
    	</div>
    	<div id="right" style="height:75px;width:86.6%">
    		<div id="top" style="height:100%">
    			<div id="left1">
    				<div >
    					<ul id="tab" style="margin-top:-5px;border:1px solid red;">
    						<!--	< li><div onclick="clickTab(0)" style="cursor:pointer">核心数据</div></li> -->
    						<!-- <li><div onclick="clickTab(1)" style="cursor:pointer">数据分析报告</div></li>  -->
    						<!-- <li><div onclick="clickTab(2)" style="cursor:pointer">专业整改计划</div></li>
    						<li><div onclick="clickTab(3)"style="cursor:pointer">历史记录</div></li> -->
    					</ul>
    				</div>
    			</div>
    			<div id="right1">
    				<div>
    					<ul id="tab2">
    					<li><div><a href="javascript:void(0)" onclick="logout();" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/exit.png" style="width:25px;;"></a></div></li>
    					<li><div><a href="javascript:;" onclick="BackTo()"  style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/back.png"></a></div></li>
    					<li><div><a href="javascript:void(0)" onclick="javascript:location.reload();" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/refresh.png"></a></div></li>
    					<li><div onclick="javascript:updatePassword()"><span id="showUserName" style="color:white;line-height:25px;cursor:pointer"></span></div></li>
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img></div></li>
    						
    						<%-- <li><div><img src="<%=basePath%>page/zenith/staticPage/img/problem.png"></div></li> --%>
    						
    					</ul>
    				</div>
    			</div>
    		</div>
    	
    	</div>
    	<div id="bottom">
    		<div id="leftTree" style="width:13.5%;float:left;">
    		<div id="middle" style="height:49px;" >
    			<span id ="dataReport">教学状态</span>
    		</div>
    		<div id="down">
    			<div id="content" class="dropdown">
    			</div>
    		</div>
    		</div>
    		
    		<div id="main" style="float:left;width:85%">
  				<iframe style="display:block;" id="tempIframe" frameborder="0" scrolling="auto" name="hello" src=""></iframe>
    		    <div id="collegeContent" style="display:none;margin-left:10px;">
					<!-- <div style="margin-top:8px;">时间：<select  id="collegeId" onchange="selectChilds(this.value);" autofocus="autofocus" style="height:20px;width: 150px;display:none"></select>&nbsp;&nbsp;学科类别:<select id="collegeChildId" onchange="selectTable(this.value)" autofocus="autofocus" style="height:20px;width: 150px;"></select>
				    </div> -->
				    <div style="margin-top:8px;text-align:right;margin-right:8px;">时间：
						<select  id="year" onchange="selectTable(this.value)" autofocus="autofocus" style="height:20px;width: 150px;">
							<option>2017/09/30</option>
							<option selected="selected">2016/09/30</option>
							<option>2015/09/30</option>
							<option>2014/09/30</option>
							<option>2013/09/30</option>
						</select>
				    </div>
			    	<div  id="templist" style="margin-top:8px;display:none" ></div>
			   		<div  style="padding: 5px 5px 5px 5px;font-size:12px;">
						<div style="padding:5px;overflow:auto;scrollbar:scroll;height:90%;">
							<table style="font-size:12px;width:100%; border:#D1D1D1 2px solid;" cellpadding="10" cellspacing="0" id="contenttable">
								<thead id="tb_thead" >
									<tr style='background-color:#58b957;color:white;font-weight:bold;font-size:12px;'>
										<td nowrap='nowrap'
											style='height:20px;border:#DADADA 1px solid;padding-top:8px'
											align='center' >专业名称</td>
										<td nowrap='nowrap' id="assessName1"
											style=' height:20px;border:#DADADA 1px solid;'
											align='center' >专业代码</td>
										<td nowrap='nowrap' id="assessName1"
											style=' height:20px;border:#DADADA 1px solid;'
											align='center' >专业设置年份</td>
										<td nowrap='nowrap' id="assessName1"
											style=' height:20px;border:#DADADA 1px solid;'
											align='center' >所属学院</td>
											<td nowrap='nowrap' id="assessName1"
											style=' height:20px;border:#DADADA 1px solid;'
											align='center' >专业负责人</td>
											<td nowrap='nowrap' id="assessName1"
											style=' height:20px;border:#DADADA 1px solid;'
											align='center' >授予学科门类</td>
										<td nowrap='nowrap'
											style=' height:20px;border:#DADADA 1px solid;'
											align='center'>操作</td>
									</tr>
								</thead>
								<tbody id="tb_tbody2">
								</tbody>
							</table>
						</div>
						<br/>
						<!-- <div style="text-align:right;font-size:13px;">
							<span ><a href="javascript:;" onclick="selectPages(1);"><img src="img/homePage.png" style="width:30px;height:30px;"></a></span>&nbsp;
							<span ><a href="javascript:;" onclick="selectPages(2);"><img src="img/prevPage.png" style="width:30px;height:30px;"></a></span>&nbsp;
							<span ><a href="javascript:;" onclick="selectPages(3);"><img src="img/nextPage.png" style="width:30px;height:30px;"></a></span>&nbsp;
							<span ><a href="javascript:;" onclick="selectPages(4);"><img src="img/lastPage.png" style="width:30px;height:30px;"></a></span>&nbsp;
							<span style="float:right;margin-top:10xp;"><br>当前页数<span id="pageNum"></span>&nbsp;/&nbsp;<span id="pages"></span></span>&nbsp;
							<input type="hidden" id="homePage" value="1">
							<input type="hidden" id="prevPage">
							<input type="hidden" id="nextPage">
							<input type="hidden" id="lastPage">
						</div> -->
					</div> 
   				 </div>
   		</div>
    	</div>
    </div>
    <!-- 密码维护 -->
	<div id="pwdManageDiv" style="">
		<div class="row1">
			密码维护<a href="javascript:closePswd();" title="关闭窗口" class="close_btn"
				id="closeBtn" style="text-decoration:none;">×</a>
		</div>
		<div class="office" align="center">
			<table class="tabPass" id="table" align="center"
				style="margin-top: 20px;width:100%">
				<tr>
					<td style="width: 30%;text-align: right;">输入原密码(<font
						class="font-style">*</font>):</td>
					<td><input type="password" name="oldPassword" id="oldPassword"
						maxlength="16" Class="txt" /></td>
				</tr>
				<tr style="height: 80px;">
					<td style="width: 30%;text-align: right;">输入新密码(<span
						class="req">*</span>):</td>
					<td><input style="margin-top: 15px;" type="password"
						name="newPassword" id="newPassword" maxlength="16" Class="txt"
						onkeyup="nkeyup();" onfocus="nfocus();" /> <br /> <span>由6-16位，由字母（区分大小写）、数字、符号组成</span>
					</td>
				</tr>

				<tr>
					<td style="width: 30%;text-align: right;">密码强度:</td>
					<td>
						<div class="ywz_zhuce_huixian" id='pwdLevel_1'></div>
						<div class="ywz_zhuce_huixian" id='pwdLevel_2'></div>
						<div class="ywz_zhuce_huixian" id='pwdLevel_3'></div> <br />
						<div class="ywz_zhuce_hongxianwenzi">弱</div>
						<div class="ywz_zhuce_hongxianwenzi">中</div>
						<div class="ywz_zhuce_hongxianwenzi">强</div></td>
				</tr>

				<tr style="height: 60px;">
					<td style="width: 30%;text-align: right;">确认新密码(<span
						class="req">*</span>):</td>
					<td><input type="password" name="renewPassword"
						id="renewPassword" maxlength="16" Class="txt" /></td>
				</tr>
				<tr>
					<td colspan="2" align="center" style="padding-top: 20px;"><input
						type="button" value="保存" class="bt" onclick="passwordWH();" />&nbsp;&nbsp;
						<input type="button" value="取消" class="bt" onclick="closePswd();" />
					</td>
				</tr>
			</table>
		</div>
	</div>
	</div>
  </body>
</html>
