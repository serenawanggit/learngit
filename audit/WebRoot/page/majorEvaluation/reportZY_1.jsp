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
   <script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/test/js/jquery-1.4.4.min.js"></script>
   <link rel="stylesheet" href="<%=basePath%>page/zenith/staticPage/test/css/demo.css" type="text/css">
	<link rel="stylesheet" href="<%=basePath%>page/zenith/staticPage/test/css/zTreeStyle/zTreeStyle.css" type="text/css">
	<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/test/js/jquery.ztree.core.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/test/js/jquery.ztree.excheck.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/test/js/jquery.ztree.exedit.js"></script>
   
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/base.css"/>
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/reportZY.css"/>
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/report_tree.css"/>
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/kindeditor/themes/default/default.css" />
   <link rel="stylesheet" type="text/css" href="<%=basePath%>/kindeditor/plugins/code/prettify.css" />
<%--    <script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
 --%>   <script type="text/javascript" src="<%=basePath%>/kindeditor/kindeditor.js" ></script>
   <script type="text/javascript" src="<%=basePath%>/kindeditor/kindeditor.js"></script>
   <script type="text/javascript" src="<%=basePath%>/kindeditor/lang/zh_CN.js"></script>
   <script type="text/javascript" src="<%=basePath%>/kindeditor/plugins/code/prettify.js"></script>
   <script type="text/javascript" src="<%=basePath%>/js/assess/selfReport_1.js"></script>
   <style type="text/css">
.ztree li span.button.add {margin-left:5px; margin-right: -1px; background-position:-144px 0; vertical-align:top; *vertical-align:middle}
	</style>
   	</head>
<script>
	var editor;
	KindEditor.ready(function(K) {
		editor = K.create('textarea[name="content"]', {
			cssPath : '<%=basePath%>/kindeditor/plugins/code/prettify.css',
			uploadJson : '<%=basePath%>/kindeditor/jsp/upload_json.jsp',
			fileManagerJson : '<%=basePath%>/kindeditor/jsp/file_manager_json.jsp',
			allowFileManager : true,
			width: '100%',
			height:610
		});
	});
</script>
     <body>
     
           <div class="container">
                <div class="main">
                     <div class="main-center">
                           <div class="main-center-right">
                           		<span style="line-height: 27px;color: green;">温馨提示：编辑完成后，请保存当前进度！</span>
                           		<li class="main-center-li-three"><input type="button" onclick="changeStatus()" value="完成提交" /></li>
                                <li class="main-center-li-four"><input type="button" onclick="saveReport()" value="保存进度" /></li>
                          		<li class="main-center-li-four"><input type="button" onclick="updateDate()" value="数据更新" /></li>
                           </div>
                     </div>
                     <div class="main-bottom">
                           <div class="main-bottom-left">
                                <ul id="1">
                                     <li class="main-bottom-left-li-one">报告目录</li>
                                     <div style="height: 565px;" id="menuList">
                                     	<ul id="treeDemo" class="ztree" style="overflow:auto;border:0px;background:white"></ul>
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
                                     <div class="top" style="margin-top:20px;">
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
</html>
 