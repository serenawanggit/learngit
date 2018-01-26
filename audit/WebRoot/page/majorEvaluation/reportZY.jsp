<%@ page language="java" import="java.util.*,audit.util.Common" pageEncoding="UTF-8"%>
<%
// context比basePath少了一个"/"
String context = Common.AUDIT_SERVER;
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
   <head>
   <meta charset="utf-8">
   <title>专业自评~自评报告</title>
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/base.css"/>
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/reportZY.css"/>
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/report_tree.css"/>
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/kindeditor/themes/default/default.css" />
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/kindeditor/plugins/code/prettify.css" />
    <script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
    <script type="text/javascript" src="<%=basePath%>/kindeditor/kindeditor.js" ></script>
   <script type="text/javascript" src="<%=basePath%>/kindeditor/kindeditor.js"></script>
   <script type="text/javascript" src="<%=basePath%>/kindeditor/lang/zh_CN.js"></script>
   <script type="text/javascript" src="<%=basePath%>/kindeditor/plugins/code/prettify.js"></script>
   <script type="text/javascript" src="<%=basePath%>/js/common.js"></script>
   <script type="text/javascript" src="<%=basePath%>/js/assess/selfReport.js"></script>
   <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
   </head>
  <jsp:include page="contextMenu.jsp"></jsp:include>
<script>
	var editor;
	KindEditor.ready(function(K) {
	
		editor = K.create('textarea[name="content"]', {
			cssPath : '<%=basePath%>/kindeditor/plugins/code/prettify.css',
			uploadJson : '<%=basePath%>/kindeditor/jsp/upload_json.jsp',
			fileManagerJson : '<%=basePath%>/kindeditor/jsp/file_manager_json.jsp',
			allowFileManager : true,
			width: '100%'
		});
	});
		prettyPrint();
		validateLogin();
</script>
     <body>
     <c:set var="chartCtx" value="<%=context %>" />
	<input type="hidden" id="servUrl" value="${chartCtx}" />
     
           <div class="container">
                <div class="nav">
                     <ul>
                         <li><a href="<%=basePath%>/page/majorEvaluation/homePage.jsp">首页</a></li>
						<li><a href="<%=basePath%>/self/selfView.do?year=${year}">评估指标自评</a></li>
						<li class="nav-li-a"><a href="<%=basePath%>/self/selfReportView.do">自评报告</a></li>
						<li><a href="/audit/self/profile.do?year=${year}" >简况表</a></li>
						<li><a href="/audit/asAccessDataTableController/initMaterialLibraryZY.do">我的材料库</a></li>
					</ul>
                </div>
                <div class="main">
                     <div class="main-top-short">
                           <div class="main-top-left">
                                <ul>
                                     <li class="">
                                     	   <select class="main-top-select-one" style="width:60px" name="" id="yearList" onchange="getUserGroup(this.value)">
                                                
                                           </select>
                                           <select class="main-top-select-one" name="" id="orgList" onchange="getSpecialty()">
                                                
                                           </select>
                                           <select class="main-top-select-one" name="" id="specialtyList" onchange="standardRebuild()">
                                                
                                           </select>
                                     </li>
                                </ul>
                           </div>
                           <div class="main-top-center">
                                <ul>
                                     <li class="main-top-center-li">
                                          	 专业自评时间：<label id="times"></label>
                                     </li>
                                </ul>
                           </div>
                           <div class="main-top-right">
                                <ul>
                                     <li>
                                         	  还有：<label id="days"></label>天
                                     </li>
                                </ul>
                           </div>
                     </div>
                     <div class="main-center">
                           <div class="main-center-left">
                                <li class="main-center-li-one">标题</li>
                                <li><input type="text" id="title" value="" class="main-center-li-two"></li>
                           </div>
                           <div class="main-center-right">
                           		<span style="line-height: 27px;color: green;">温馨提示：编辑完成后，请保存当前进度！</span>
                           		<li class="main-center-li-three"><input type="button" onclick="changeStatus()" value="完成提交" /></li>
                                <li class="main-center-li-four"><input type="button" onclick="saveReport()" value="保存进度" /></li>
                          		<li class="main-center-li-four"><input type="button" onclick="updateDate()" value="数据更新" /></li>
                           </div>
                     </div>
                     <div class="main-bottom">
                           <div class="main-bottom-left" onmousedown="showRightMenu(this,event)">
                                <ul id="1">
                                     <li class="main-bottom-left-li-one">报告目录</li>
                                     <div class="tree_div" style="height: 565px;" id="menuList">
                                     </div>
                                </ul>
                           </div>
                           <div class="main-bottom-center">
						  	  <textarea name="content" id="content" rows="33"></textarea>
                           </div>
                           <div class="main-bottom-right">
                                <div class="main-bottom-right-top">
                                     <div class="top">
                                           <ul>
                                                <li class="top-li-one">插入指标</li>
                                                <li class="top-li-two">（请先在编辑器中选位置）</li>
                                           </ul>
                                     </div>
                                     <div class="center">
                                           <ul class="center-ul">
                                                <li class="center-li-one"><input type="text" name="" id="indexName" value="" /></li>
                                                
                                                <li class="center-li-two"><input type="button" name="" id="index" onclick="searchIndex()" value="搜索" />
                                           </ul>
                                           <ul class="center-ul-indexs" id="indexList">
<!--                                                 <li class="right_list_style"> -->
<!-- 												    <input type="checkbox" name="index" value="专任教师中，41-50岁的中年教师占比"></input> -->
<!-- 												    专任教师中，41-50岁的中年教师占比 -->
<!-- 												</li> -->
<!-- 												  <li class="right_list_style"> -->
<!-- 												    <input type="checkbox" name="index" value="专任教师中，41-50岁的中年教师占比"></input> -->
<!-- 												    专任教师中，4的中年教师占比 -->
<!-- 												</li> -->
                                           </ul>
                                     </div>
                                     <div class="bootom">
                                           <li class="center-li-two" style="  margin-left: 55px;padding-top: 8px;">
                                           	<input type="button" onclick="addIndex()" style="width: 105px;  height: 26px;" id="" value="插入指标链接" />
                                           </li>
                                     </div>
                                </div>
                                <div class="main-bottom-right-bottom">
                                     <div class="top">
                                           <ul>
                                                <li class="top-li-one">插入图片</li>
                                                <li class="top-li-two">（请先在编辑器中选位置）</li>
                                           </ul>
                                     </div>
                                     <div class="center">
                                           <ul class="center-ul">
                                                <li class="center-li-one"><input type="text" name="" id="imgName" value="" /></li>
                                                
                                                <li class="center-li-two"><input type="button" name="" onclick="searchImg()" id="" value="搜索" />
                                           </ul>
                                           <ul id="imgList">
                                           </ul>
                                     </div>
                                     <div class="bootom">
                                           <li class="center-li-two" style="  margin-left: 55px;padding-top: 8px;">
                                           	<input type="button" onclick="addImg()" style="width: 105px;  height: 26px;" id="" value="插入图片" />
                                           </li>
                                     </div>
                                </div>
                           </div>
                     </div>
                     
                </div>
                <div class="footer">
                     <div class="back">
                           <a href="javascript:scroll(0,0);"><img src="<%=basePath%>/img/majorEvaluation/back.png"/></a>
                     </div>
                </div>
           </div>
           <div class="div_cm" id="addDialog">	
           		<p class="close"><a href="#" onclick="closeDialog();">关闭</a></p> 
           		<div style="margin-left: 25px;margin-top: 50px;">
           			<ul>
           				<li style="margin-bottom:10px">父目录：<input type="text" id="parentListName" class="main-center-li-two"  readonly="readonly"></li>
           				<li >目录名：<input type="text" id="listName" class="main-center-li-two"></li>
           				<li class="center-li-two" style="margin-top: 40px;margin-left: 50px;width: 233px;">
           					<input type="button" style="width: 105px;  height: 26px;margin-right: 15px;" onclick="addChild()" value="确定" />
           					<input type="button" style="width: 105px;  height: 26px;" onclick="closeDialog()" value="取消" />
                        </li>
           			</ul>
           		</div>
           </div>
           <div class="div_cm" id="editDialog">
           		<p class="close"><a href="#" onclick="closeEditDialog();">关闭</a></p> 
           		<div style="margin-left: 75px;margin-top: 50px;">
           			<ul>
           				<li >目录名：<input style="width: 220px;" type="text" id="editListName" class="main-center-li-two"></li>
           				<li class="center-li-two" style="margin-top: 40px;margin-left: 10px;width: 233px;">
           					<input type="button" style="width: 105px;  height: 26px;margin-right: 15px;" onclick="editList()" value="确定" />
           					<input type="button" style="width: 105px;  height: 26px;" onclick="closeEditDialog()" value="取消" />
                        </li>
           			</ul>
           		</div>
           </div>
           <div class="black_overlay" id="overlay"></div>
     </body>
     
     <script type="text/javascript">
     $(document).ready(function () {
     var year = "${year}";
     
     //获取年份
    var strCookie = document.cookie;
    var cookies = strCookie.split("; ");
    for(var i=0;i<cookies.length;i++){
    	var cookie = cookies[i];
    	var details = cookie.split("=");
    	if(details[0] == "assessYear"){
    		year = details[1];
    	}
    }
     getUserGroup(year);
});
     </script>
</html>
