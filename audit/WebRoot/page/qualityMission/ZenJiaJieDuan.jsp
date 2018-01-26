<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
<title>增加阶段任务</title>
<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/json2.js"></script>
<style type="text/css">
* {
	margin: 0; /*上右下左*/
	padding: 0;
	font-family: Arial, Helvetica, sans-serif;
	list-style-type: none;
}

html {
	width: 100%;
	height: 98%;
	margin: 0;
}

body {
	width: 100%;
	height: 100%;
	margin: 0;
	border: none;
	background-color: #FFFFFF;
	/* background-repeat:repeat-x; */
	font-size: 12px;
	font-family: Arial, Helvetica, sans-serif;
	filter:
		"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	-moz-background-size: 100% 100%;
	margin-top: 0px;
}
div.main-title{float:left;width:100%;height:30px;margin:0px 0px 0px 0px;background-color: #F5F6F5;}
div.main-title-left{float:left;width:50%;height:30px;margin:0px 0px 0px 0px;border-right: 2px solid #DADADA;}
li.main-title-left{float:left;width:100%;height: 30px;margin:0px 0px 0px 0px;line-height:30px;vertical-align:middle;text-align: center;}
div.main-title-right{float:left;width:49%;height:30px;margin:0px 0px 0px 0px;}
li.main-title-right{float:left;width:190%;height: 30px;margin:0px 0px 0px 0px;line-height:30px;vertical-align:middle;text-align: center;}
hr{float:left;width:100%;height: 1px;}
a {
	text-decoration: none;
}

div .divClass{
	float: left;
	width: 96%;
	height: 24%;
	margin: 1% 0px 0px 2%;
}

ol {
	padding-left: 54px;
}

ol li {
	list-style-type: decimal;
	list-style-position: inside;
}

.top_s_z {
	width: 32%;
	height: 28%;
	margin: 1em 0em 0em 2em;
	float: left;
}

.top_s_y {
	float: left;
	width: 50%;
	height: 28%;
	margin: 1em 0em 0em 2em;
}

.task_score li {
	height: 25px;
	line-height: 25px;
}

.button1 {
	margin-left: 3em;
	margin-bottom: -3%;
}


.w10{width:10%;}
.w30{width:30%;}
.t_l{ text-align:left;}
.t_r{ text-align:right;}
.ss_input{ height:22px; line-height:22px; border-right:none; padding:0 10px; border-top:solid 1px #aaaaaa;border-bottom:solid 1px #aaaaaa;border-left:solid 1px #aaaaaa; margin-top:8px;}
.ss_btn{ height:24px; width:24px; background:url(<%=basePath%>/images/ss_btn01.png) no-repeat left center; margin-top:8px;}
.ss_btn:hover{ height:24px; width:24px; background:url(<%=basePath%>/images/ss_btn02.png) no-repeat left center;}
.ss_input11{ height:22px; line-height:22px; border-right:none; border-top:solid 1px #aaaaaa;border-bottom:solid 1px #aaaaaa;border-left:solid 1px #aaaaaa; background:#FFF; margin-top:2px;}
.ss_btn01{ height:24px; width:24px; background:url(<%=basePath%>/images/ss_btn01.png) no-repeat left center; margin-top:2px;}
.ss_btn01:hover{ height:24px; width:24px; background:url(<%=basePath%>/images/ss_btn02.png) no-repeat left center;}
.select_tips{ height:22px; border:none; background:#e6e6e6; width:60px; line-height:22px;}
.ss_input02{ height:22px; line-height:22px; border:none;}
.select_tips01{ height:22px; border:none; background:#ffffff;line-height:22px; border:solid 1px #aaaaaa;}
.input_tips1{ min-width:200px; height:22px; line-height:22px; border:solid 1px #cccccc; padding:0 10px;}

.lable_tips01 {
    height: 22px;
    border: medium none;
    background: none repeat scroll 0% 0% #F0F0F0;
    line-height: 22px;
}

.f_l {
    float: left;
}

</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
function hidebutton(){
    $("#divc").hide();
    $("#divcontent").hide();
   
}

function showdiv(){
 $("#divc").show();
 $("#divcontent").show();

}
</script>
<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/Calendar.js"></script>

</head>

<body>
	<div class="divClass" style="height:28px; margin-left: 10px; margin-top: 10px; ">
		<span
			style='background-color:#568E59;display:inline-block;height:28px;line-height:28px;color:white;padding:0px 15px;'>阶段任务新增</span>
	</div>
	<div class="divClass"
		style='width:92%; height: 86%;margin:2% 0px 0px 4%; border: 1px solid #dadada;'>
		<div class="top_s_z">
			<div class="divClass" style="margin: 2% 0px 0px 2%; ">
				阶段任务名称： <input type="text" id="jdRwName" name="" style="width: 68%;height: 80%;">
				<input type="hidden" id="zlRwId" value="${id}"/>
			</div>

			<div class="divClass" style="">
				<li style=" float:left;">任务开始时间： <input type="text" readonly="readonly" style="width:100px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" onclick="SelectDate(this)" id="jdRwStartTime" name=""></li>
			</div>

			<div class="task_score" style=" ">
				<li style=" float:left;margin-left:2%;">任务范围 ：&nbsp;&nbsp;</li>
				<li style=" float:left;">
					<input type="radio" name="fw" onclick="getUserGroupList(2)" value="2" style="vertical-align:middle;">&nbsp;&nbsp;院系&nbsp;&nbsp; 
					<input type="radio" name="fw" onclick="getUserGroupList(3)" value="3" style="vertical-align:middle;">&nbsp;&nbsp;&nbsp;专业&nbsp;&nbsp;
				</li>
			</div>
			
		</div>

		<div class="top_s_y">
			<ul>
				<li style=" float:left;width:100%; margin-top:8%;margin-left: 0em">
					任务截止时间：<input type="text" readonly="readonly" style="width:100px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" onclick="SelectDate(this)" id="jdRwEndTime" >
				</li>
				<li style=" float:left;width:610px; margin-top:2em;">人员：
					<select id="userGroup" onclick="getUserList()" style="width: 17%;">
						<option value="">--请选择--</option>
					</select>
					<select id="userList" style="width: 17%;">
						<option value="">--请选择--</option>
					</select>
					<input type="button" value="增加" onclick="addUser()" style="cursor:hand;color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;">
					<input type="button" value="重选" onclick="reduceUser()" style="cursor:hand;color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;">
					<input type="text" id="names" style="height:24px;margin-left:0%;" readonly="readonly"></li>
			</ul>
		</div>
		<div class="divClass"
			style=" float:left; width:948px; height:60%;border: 2px solid #dadada;">
			
			<div class="main-title">
<!-- 				<div class="divClass" class="main-title-left">
					<li class="main-title-left">主观指标</li>
				</div> -->
				<div class="main-title-right">
					<li class="main-title-right">客观指标</li>
				</div>
			</div>
			<hr color="#DADADA" style="hr"/>
			<div class="divClass"  style=" float:left; width:948px;/*  width:60%; */ height:80px;">
				<ul id="zbList">
					<li style="height:21px;margin-left:2%; line-height:25px;">
						监测指标&nbsp;
						<a href="javascript:void(0)"><img alt="" src="<%=basePath%>/images/add.png"style="vertical-align:middle;border:0px;"  onclick="showdiv()"></a>
					</li>
				</ul>
				</div>	
			</div>
			<div class="divClass" style="  float:left; width:80px; height:26px;margin-left:40% ">
				<li >
					<input type="botton" onclick="addJdRw()" value="增加" style="cursor:hand;color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;  text-align: center;">
				<li>
			</div> 
		</div>
		
			</div>
		
	   <!-- 弹出层 -->
       <div class="divClass" id="divc" style="margin:0;padding:0;border:none;width:100%;height:100%;background:#333;opacity:0.6;filter:alpha(opacity=60);z-index:99;position:fixed;top:0;left:0;display: none"></div>
       <!-- 弹出的内容 -->
      
       <div class="divClass" id="divcontent" style="background-color:white;height:80%;width:97%;z-index: 100;position: absolute; top: 10%;display: none;">
        <div class="divClass" id="xx" style="background-color:#4D8CC6;height:5%;width:100%;margin-left: 0px;margin-top: 0px ;padding-top: 5px">
             <input type="button" style=" border:0px; background-color:#4D8CC6; color:white; font-size: 15px;margin-left: 10px; " value="检测指标"/>
          <a  style="color:#FFF;text-decoration:none;padding:5px 5px 0 0;font-size:12px;" href="javascript:void(0)">
              <img  style="vertical-align:middle;border: 0px;float: right;height:31px;width:31px" src="<%=basePath%>/images/alertimg/alertclose.png" onclick="hidebutton()"></img>
          </a>
        </div>
        
        <div class="divClass" style="height:50px;position: relative;right:0%;top:1%;">
				    <form id="queryForm" style="position: relative;left:1%;top:5%;" method="post" action="">
				        <span class="lable_tips01 w10 f_l" style="width: 85px;">指标所属分类：</span>
				        <span class="ss_input11 w30 f_l" style="width: 150px;margin-top:0px;">
				            <select  class="select_tips01" style="width: 150px;height: 22px;" id="categoryList" onchange="getPage()">
				                <option selected="selected" value="">请选择</option>
				            </select>
				        </span>
				        <span class="lable_tips01 w10 f_l" style="width: 80px;text-align: right;">指标类别：</span>
				        <span class="ss_input11 w30 f_l" style="width: 120px;margin-top:0px;">
				            <select  class="select_tips01" style="width: 120px;height: 22px;" id="level" onchange="getPage()">
				                <option selected="selected" value="">请选择</option>
				                <option  value="一级">一级指标</option>
				                <option  value="二级">二级指标</option>
				                <option  value="三级">三级指标</option>
				            </select>
				        </span>
				        <span class="lable_tips01 w10 f_l" style="width: 80px;text-align: right;">指标层级：</span>
				        <span class="ss_input11 w30 f_l" style="width: 120px;margin-top:0px;">
				              <select  class="select_tips01" style="width: 120px;height: 22px;" id="type" onchange="getPage()">
				                <option selected="selected" value="">请选择</option>
				                <option  value="1">校级</option>
				                <option  value="2">院级</option>
				                <option  value="3">专业</option>
				                <option  value="4">评估</option>
				            </select>
				        </span>
				        <span class="ss_input11 w10 f_l" style="width: 80px;margin-top:0px;margin-left: 20px;">
				            <select  class="select_tips01" style="width: 80px;height: 22px;" id="checkType">
				                <option selected="selected" value="name">指标名称</option>
				                <option value="code">指标代码</option>
				            </select>
				        </span>
				        <script></script>
				        <input id="checkValue" onchange="getPage()" class="input_tips1 w10" type="text" style="width: 80px;" name="nameOrCodeVal"></input>
				          <a onclick="getPage()" class="ss_btn01 f_l" href="javascript:onChangeSelect();" style="position:absolute;z-index:1;margin-left: 0px;margin-top: 0px;"></a>
				      </form>
               <span style="display: block;text-align: right;margin-right: 40px;"></span>
          </div>
        
           <div class="divClass" style="padding: 5px 5px 5px 5px">
             <input type="hidden" id="rwid"/>
             <table style="font-size:12px;width:100%; border:#DADADA 1px solid;" cellpadding="0" cellspacing="0" id="content">
                      <thead id="tb_thead" class="tb_thead">
					<tr bgcolor="#E6E6E6">
						<td width="4%" height="30px" align='center'>
						    <input id="checkAll" type="checkbox" onclick="checkAllOrNot()" name="checkAll"></input>
						</td>
						<td width="12%" height="30px" align='center'>指标所属分类</td>
						<td width="33%" height="30px" align='center'>指标名称</td>
						<td width="7%" height="30px" align='center'>全校指标 	</td>
						<td width="6%" height="30px" align='center'>学院指标</td>
						<td width="6%" height="30px" align='center'>专业指标</td>
						<td width="6%" height="30px" align='center'>评估指标</td>
					</tr>
				</thead>
                      <tbody id="tb_tbody" class="tb_tbody">
                         
                      </tbody>
             </table>
             <table style='width:100%;' cellpadding='0' id="pageTb">
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:40px;'>
								<img value='1_"+json.totalPage+"' onclick='jumpToFirstPage();'
									src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='/audit/images/pgicon-first.png;'"
										onmouseout="this.src='/audit/images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='jumpToPreviousPage()'
									src='/audit/images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-pre.png;'"
										onmouseout="this.src='/audit/images/pgicon-pre_press.png;'">
								<span id="pageNumer" style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>${page.currentPage}/${page.countPage}页</span>
								<img value='3_"+json.totalPage+"' onclick='jumpToNextPage()'
										src='/audit/images/pgicon-next_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-next.png;'"
										onmouseout="this.src='/audit/images/pgicon-next_press.png;'">
								<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
								line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
								<img value='4_"+json.totalPage+"' onclick='jumpToPage()'
										src='/audit/images/pgicon-last_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-last.png'"
										onmouseout="this.src='/audit/images/pgicon-last_press.png'">
								</span>
								</td>
							</tr>
						</tbody>
					</table>
             
           </div>
             <div class="divClass" style="margin-top: 170px;  margin-left: 400px;width:50%">
		             <input type="button" value="确定" onclick="getCheckedZb()" id="subbutton" style="cursor:hand;color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;"/>
		             <input type="button" id="hidebutton" onclick="hidebutton()" value="取消" onclick="hidebutton()" style="cursor:hand;color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;"/>
		             <input type="hidden" id="currentPage" value="1"/>
             </div>
       </div>
</body>
<script type="text/javascript">
function getUserGroupList(level){
	$.ajax({
		 url:"<%=basePath%>/zlrwController/getUserGroup.do?level="+level,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	var list = data.data;
		 	var userGroup = $("#userGroup");
		 	userGroup.html("");
		 	for(var i = 0;i<list.length;i++){
		 		var record = list[i];
		 		var html ="<option value='"+record.id+"'>"+record.name+"</option>";
		 		userGroup.append(html);
		 	}
		 	getUserList();
		 }
	});
}
function getUserList(){
	var groupId = $("#userGroup").val();
	if(groupId == ""){
		return;
	}
	var level = $("input[name='fw']:checked").val();
	$.ajax({
		 url:"<%=basePath%>/zlrwController/userList.do?level="+level+"&id="+groupId,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("保存失败,未知原因");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	var list = data.data;
		 	var userList = $("#userList");
		 	userList.html("");
		 	for(var i = 0;i<list.length;i++){
		 		var record = list[i];
		 		var html ="<option value='"+record.userid+"'>"+record.userName+"</option>";
		 		userList.append(html);
		 	}
		 }
	});
}

var userIds = new Array();
var groupIds = new Array();
function addUser(){
	var groupId = $("#userGroup").val();
	var userId = $("#userList").val();
	for (var i = 0; i < groupIds.length; i++) { 
        if (groupIds[i] == groupId) { 
           	alert("该部门已选择");
			return; 
        } 
    } 
	groupIds.push(groupId);
	var userId = $("#userList").val();
	userIds.push(userId);
	var userName = $("#userList").find("option:selected").text();
	var usernames = $("#names").val();
	$("#names").val(usernames+userName+"、");
}
function reduceUser(){
	userIds = new Array();
	groupIds = new Array();
	$("#names").val("");
}

</script>

<script type="text/javascript">
$(document).ready(function () {
	//初始化
	getPage();
	
	//获取指标分类
	getZbCategory();
	
});
function getZbCategory(){
	$.ajax({
		 url:"<%=basePath%>/zlrwController/getIndicatorsCategory.do",
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("保存失败,未知原因");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	var list = data.data;
		 	var categoryList = $("#categoryList");
		 	for(var i =0; i<list.length;i++){
		 		var record = list[i];
		 		var html ="<option value='"+record.categoryCode+"'>"+record.categoryName+"</option>";
		 		categoryList.append(html);
		 	}
		 }
		});
}

function getPage(){
	var currentPage = $("#currentPage").val();
	var categoryId = $("#categoryList").val();
	var level = $("#level").val();
	var type = $("#type").val();
	var checkType = $("#checkType").val();
	var checkValue = $("#checkValue").val();
	var data = "currentPage="+currentPage+"&categoryId="+categoryId+"&level="+level;
	
	if(checkType == "name"){
		data = data+"&measureName="+checkValue;
	}else if(checkType == "code"){
		data = data+"&measureId="+checkValue;
	}
	if(type==1){
		data = data+"&isSchool="+"是";
	}else if(type==2){
		data = data+"&isDepartment="+"是";
	}else if(type==3){
		data = data+"&isProfession="+"是";
	}else if(type==4){
		data = data+"&isAssess="+"是";
	}
	
	$.ajax({
		 url:"<%=basePath%>/zlrwController/getObjectiveIndicators.do",
		 data:data,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	var list = data.data.list;
		 	$("#tb_tbody").html("");
		 	for(var i=0;i<list.length;i++){
		 		var record = list[i];
		 		var html= "";
		 		html +="<tr><td nowrap=‘nowrap’ style='width:5%;  height: 25px;border-top:#DADADA 1px solid;' align='center'><input  type='checkbox' name='zb' value='"+record.measureId+"'></input></td>";
		 		html +="<td nowrap=‘nowrap’ style='width:5%;  height: 25px;border-top:#DADADA 1px solid;' align='center'>"+record.categoryName+"</td>";
		 		html +="<td nowrap=‘nowrap’ style='width:5%;  height: 25px;border-top:#DADADA 1px solid;' align='center'>"+record.measureName+"</td>";
		 		html +="<td nowrap=‘nowrap’ style='width:5%;  height: 25px;border-top:#DADADA 1px solid;' align='center'>"+record.isSchool+"</td>";
		 		html +="<td nowrap=‘nowrap’ style='width:5%;  height: 25px;border-top:#DADADA 1px solid;' align='center'>"+record.isDepartment+"</td>";
		 		html +="<td nowrap=‘nowrap’ style='width:5%;  height: 25px;border-top:#DADADA 1px solid;' align='center'>"+record.isProfession+"</td>";
		 		html +="<td nowrap=‘nowrap’ style='width:5%;  height: 25px;border-top:#DADADA 1px solid;' align='center'>"+record.isAssess+"</td></tr>";
		 		$("#tb_tbody").append(html);
		 	}
		 	$("#pageNumer").html(data.data.currentPage+"/"+data.data.countPage+"页");
		 	$("#currentPage").val(data.data.currentPage);
		 }
	 });
	
}


function findPageByMC(){
	getPage();
}
//跳转方法
function jumpToFirstPage(){
	$("#currentPage").val("1");
	getPage();
}
function jumpToNextPage(){
	var thisPage = parseInt($("#currentPage").val(),10);
	$("#currentPage").val(thisPage+1);
	getPage();
}
function jumpToPreviousPage(){
	var page;
	var thisPage = parseInt($("#currentPage").val(),10);
	if(thisPage != 1){
		page = thisPage-1;
	}else{
		page = 1;
	}
	$("#currentPage").val(page);
	getPage();
}
function jumpToPage(){
	var page = $("#pagenotext").val();
	if(page == ''){
		alert("请输入跳转页面后再点击跳转按钮");
		return;
	}
	$("#currentPage").val(page);
	getPage();
}
var check = true;
function checkAllOrNot(){
	if(check){
		$("input[name='zb']").attr("checked","checked"); 
		check = false;
	}else{
		$("input[name='zb']").attr("checked",false); 
		check = true;
	}
	
}
var zbIds = new Array();
function getCheckedZb(){
	var zbList = $("#zbList");
<%-- 	zbList.html("");
	var head = "<li style='height:21px;margin-left:2%; line-height:25px;'>检测指标&nbsp;";
	head +="<a href='javascript:void(0)'><img alt='' src='<%=basePath%>/images/add.png' style='vertical-align:middle;border:0px;'  onclick='showdiv()'></a></li>";
	zbList.append(head); --%>
	$("input[name='zb']:checked").each(function(){
		var id = $(this).val();
		var flag = true;
		for(var i=0;i<zbIds.length;i++){
			if (zbIds[i] == id) { 
				flag = false;
        	}
		}
		zbIds.push(id);
		if(flag){
			var name = $(this).parent().next().next().html();
			var html ="";
			html += "<li id='"+id+"'><input type='text' value='"+name+"'  style='width: 28%;margin-left:2%;margin-top:1%;'> ";
	     	html += "     <select name='sfs'>";
	        html += "        <option value='>'>大于</option>";
	        html += "        <option value='<'>小于</option>";
	        html += "        <option value='='>等于</option>";
	        html += "        <option value='>='>大于等于</option>";
	        html += "        <option value='<='>小于等于</option></select>";
	        html += "    <input type='text' name='values' style='width: 16%;'> ";
	        html += "    <input type='hidden' name='ids' value='"+id+"' style='width: 16%;'> ";
	        html += "                <input type='button' onclick='deleteZb("+id+")' value='删除' style='color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;'></li>";
			zbList.append(html);
		}
	});
	hidebutton();
}

function deleteZb(id){
	$("#"+id).remove();
	for(var i=0;i<zbIds.length;i++){
		if (zbIds[i] == id) { 
			zbIds.splice(i,1);
       	}
	}
}


	var zlStartTime = "${zlRw.startTime}";
	var zlEndTime = "${zlRw.endTime}";
	var zlStart = new Date(zlStartTime);
	var zlEnd= new Date(zlEndTime);
	
function addJdRw(){
	$("input[name='values']").each(function(){
		if($(this) == ''){
			alert("请输入所有的期望值");
			return;
		}
	});
	
	var ids = new Array();
	$("input[name='ids']").each(function(){
		ids.push($(this).val());
	});
	var values = new Array();
	$("input[name='values']").each(function(){
		values.push($(this).val());
	});
	
	var sfs = new Array();
	$("select[name='sfs']").each(function(){
		sfs.push($(this).val());
	});
	
	for(var i=0;i<values.length;i++){
		if (values[i] == "") { 
			alert("请输入所有的期望值");
			return;
       	}
       	var idReg= /^[0-9]+.?[0-9]*$/;
		if(!idReg.test(values[i])){
			alert("期望值只能是数值");
			return;
		}
	}
	
	var zbs = {};
	zbs.ids = ids;
	zbs.values = values;
	zbs.sfs = sfs;
	
	var jdrw = {};
	jdrw.jdRwName = $("#jdRwName").val();
	jdrw.jdRwStartTime = $("#jdRwStartTime").val();
	jdrw.jdRwEndTime = $("#jdRwEndTime").val();
	jdrw.jdRwFw = $("input[name='fw']:checked").val();
	jdrw.zlRwId = $("#zlRwId").val();
	jdrw.userIds = userIds;
	jdrw.zbs = zbs;
	
	if($("#jdRwName").val() == ''){
		alert("请输入任务名称");
		return;
	}
	if($("#jdRwStartTime").val() == ''){
		alert("请输入开始时间");
		return;
	}
	if($("#jdRwEndTime").val() == ''){
		alert("请输入结束时间");
		return;
	}
	var jdStart = new Date($("#jdRwStartTime").val());
	var jdend = new Date($("#jdRwEndTime").val());
	//时间判断
	if(jdend < jdStart){
		alert("结束时间小于开始时间，请重设");
		return;
	}
	if(jdStart < zlStart){
		alert("阶段开始时间小于任务开始时间，请重设");
		return;
	}
	if(jdend > zlEnd){
		alert("阶段结束时间大于任务结束时间，请重设");
		return;
	}
	
	if($("input[name='fw']:checked").val() == ''){
		alert("请选择范围");
		return;
	}
	if(userIds.length ==0){
		alert("请选择填报人");
		return;
	}
	
	$.ajax({
		 url:"<%=basePath%>/zlrwController/addJdRw.do",
		 data:"str="+JSON.stringify(jdrw),
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	window.location.href="<%=basePath%>/zlrwController/updateZlRwView.do?id="+$("#zlRwId").val();
		 }
	});
	
	
}

</script>


</html>
