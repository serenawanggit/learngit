<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css"href="<%=basePath%>uploadify/uploadify.css" />
<link rel="stylesheet" href="<%=basePath %>/css/zTreeStyle/zTreeStyle.css" type="text/css">
<style type="text/css">
body,html {
	width: 100%;
	height: 100%;
	margin: 0;
	border: none;
	background-image: url(<%=basePath%>/images/centerbk.png);
	background-repeat: repeat-x;
	font-size: 12px;
	font-family: Arial, Helvetica, sans-serif;
}

</style>

<script type="text/javascript" src="<%=basePath%>js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/ztree/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/ztree/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript" src="<%=basePath%>uploadify/jquery.uploadify.min.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/flexpaper_flash.js"></script>  
<script type="text/javascript" src="<%=basePath %>/js/flexpaper_flash_debug.js"></script> 
<script type="text/javascript" src="<%=basePath %>/ckplayer/jwplayer.js"></script>
<script type="text/javascript" src="<%=basePath %>/ckplayer/ckplayer.js"></script>
<script type="text/javascript" src="<%=basePath %>/ckplayer/play.js"></script>



<script type="text/javascript">

var menuID = 2;
var menuLable = "定位与目标";
//切换目录
function selectMenu(mid,mName){
	menuID = mid;
	menuLable = mName;
}
var setting = {
		view: {
			showIcon: true
		},
		check: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true
			}
		}
};

//初始化
function treeReady(zNodes){
	$.fn.zTree.init($("#treeDemo"), setting, zNodes);
}
//获取选择的指标
function onChangeTree() {
	var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
	nodes = zTree.getCheckedNodes(true),
	v = "";
	for (var i=0, l=nodes.length; i<l; i++) {
		v += "'"+nodes[i].id+"'";
		if (i<(l-1)) {
			v += ",";
		}
	}
	return v;
}

//读取COOKIES 
function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

//初始化上传文件
function sUpload(pid,pname){
    $("#file_upload").uploadify({
    	'height'    : 25,//是否多文件
    	'multi'    : true,//是否多文件
    	'method'   : 'post',
    	'buttonText' : '选择文件',
        'formData'      : {'pid' : pid, 'pname' : pname},//参数
    	'auto'     : false,//是否自动上传
    	'queueSizeLimit' : 10,//上传文件数
        'swf'      : '/audit/uploadify/uploadify.swf',
        'uploader' : "/audit/designController/uploadFile.do?userId="+getCookie("uvocookie").split("&")[0] + "&userName="+getCookie("uvocookie").split("&")[1],
//         'uploader' : "/audit/designController/uploadFile.do",
//         "scriptData" : {userId:getCookie("uvocookie").split("&")[0],userName:getCookie("uvocookie").split("&")[1]},
        'onUploadStart' : function(file) {
            //$("#file_upload").uploadify("settings", "pid", 2);
        },
        'onUploadSuccess' : function(file, data, response) {
            //alert('文件保存到: ' + data);
        }
    });
}

//设置高度
function setheight() {
	var w = document.body.clientWidth;
	var h = document.body.clientHeight;
	var sbd = document.getElementById("submenudiv");
	sbd.style.height = (h) + "px";
}

function menuexpand(obj){
	var menuid=obj.getAttribute("value");
	var mid = document.getElementById(menuid);
	var dshow=mid.style.display;
	if(dshow=="none"){
		mid.style.display="";
		//obj.src="images/menu_expand.png";
	}else{
		mid.style.display="none";
		//obj.src="images/menu_flod.png";
	}
}

//---关闭
function closeYS(){
	$("#md").fadeOut("fast");
	$("#mask").css({ display: 'none' });
}


function closeYS2(){
	$("#mdn").fadeOut("fast");
	$("#mask").css({ display: 'none' });
}
</script>
<script type="text/javascript" src="<%=basePath %>/js/homeCenter.js"></script>
<script type="text/javascript" src="/audit/js/userChildrenMenuPermission.js"></script>

</head>
<body style="overflow:auto;height: 100%;">
<!-- 遮盖层 -->
<input type="hidden" value="" id="swfvalue"/>

<div id="md" class="mymd"></div>

<div id="mdn" class="mymd">
	<table style="width:100%;" cellpadding='0' cellspacing='0' border='0' valign='top'>
		<tr style='height:25px;background-image:url(../../images/showtitlebk800.png);'>
			<td align='left'><span style='color:#FFF;font-size:12px;'>文件预览</span></td>
			<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS2();'>
				<img src='/audit/images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>
			</td>
		</tr>
		<tr>
			<td colspan='2' id="std" valign='top' align='center' style='background-color:#FFFFFF;height:460px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>
				<div id='ireportpdfdiv' style='width:100%;height:70%;font-size:12px;'>
					<img style="width:80%;height:90%;margin-top:30px;display:none" src='' id="ts"/>
					<a id="viewerPlaceHolder" style="overflow:hidden; width:100%;height:100%;display:block"></a>
			  			<script type="text/javascript"> 
			  				function sw(id,flag){
			  					$("#ts").hide();
			  					var url = "/audit/fileshow?id=" + id;
			  					if(flag == 1){
			  					//显示办公文件 doc/excel/pdf
			  						$("#std").show();
			  						$("#ttd").hide();
			  						$("#ts").hide();
			  						$("#viewerPlaceHolder").show();
			  						$("#ireportpdfdiv").css("height","100%");
			  						new FlexPaperViewer(     
			                         'FlexPaperViewer',  
			                         'viewerPlaceHolder', { config : {  
				                         SwfFile : escape(url),  
				                         Scale : 0.6,   
				                         ZoomTransition : 'easeOut',  
				                         ZoomTime : 0.5,  
				                         ZoomInterval : 0.2,  
				                         FitPageOnLoad : true,  
				                         FitWidthOnLoad : true,  
				                         FullScreenAsMaxWindow : false,  
				                         ProgressiveLoading : false,  
				                         MinZoomSize : 0.2,  
				                         MaxZoomSize : 5,  
				                         SearchMatchAll : false,  
				                         InitViewMode : 'SinglePage',  
				                         ViewModeToolsVisible : true,  
				                         ZoomToolsVisible : true,  
				                         NavToolsVisible : true,  
				                         CursorToolsVisible : true,  
				                         SearchToolsVisible : true,  
				                         localeChain: 'zh_CN'  
			                         }}); 
			  					}
			  					
			  					if(flag == 2){
			  					//显示图片
			  						$("#std").show();
			  						$("#ttd").hide();
			  						$("#ireportpdfdiv").css("height","90%");
			  						$("#ts").show();
			  						$("#viewerPlaceHolder").hide();
			  						$("#ts").attr("src",url);
			  					}
			  					
			  					if(flag == 3){
			  						// init(
						        	//	url,
						        	//	'',
						        	//	'',
						        	//	'',
						        	//	'',
						        	//	'',
						        	//	''
        							// );
        							//显示视频文件
        							$("#std").hide();
        							$("#ttd").show();
        							 jwplayer("playbox").setup(
						                {
						                    flashplayer: "<%=basePath%>swf/player.swf",
						                    file: url,
						                   	provider: "http", 
						                    image: '',
						                    skin: "<%=basePath%>swf/stylish.swf",
						                    width: "100%",
						                    height: "100%",
						                    backcolor: "111111",
						                    frontcolor: "cccccc",
						                    lightcolor: "66cc00"
						                 }
						             );
			  					}
			  				}
			            </script>
				</div>
			</td>
		</tr>
		
		<tr>
			<td colspan='2' id="ttd" valign='top' align='center' style='background-color:#FFFFFF;height:460px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>
				<div id='playbox' style='width:100%;height:70%;font-size:12px;display:none'>
				</div>
			</td>
		</tr>
	</table>
</div>

	<div id="centerdiv" style="width:100%;height: 100%;">
		<table cellpadding="0" cellspacing="0" style="width:100%;height: 100%;">
			<tr>
				<td style="width:212px;background-image:url(<%=basePath%>/images/submenubk.png);" valign="top">
					<table cellpadding="0" cellspacing="0" style="width:212px;background-color:#DDE2E6;">
						<tr>
							<td height="100%;">
								<div id="submenudiv" style="width:212px;background-image:url(<%=basePath%>/images/submenubk.png);height:100%;background-color:#DDE2E6;vertical-align:top;" >
								<%--左边菜单--%>
								<table id="moduleTB" style="width:212px;height:100%;" celladding="0" cellspacing="0">
<!-- 									<tr> -->
<!-- 									<td valign="left" style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;" -->
<!-- 											colspan="2" onclick="menuexpand(this);" value="submenu001"> -->
<!-- 										<table cellpadding="0" cellspacing="0" style="width:212px;"> -->
<!-- 											<tr> -->
<!-- 												<td align="left"> -->
<!-- 												<span style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;"><img -->
<!-- 													src="<%=basePath%>/images/icon001.png" -->
<!-- 													style="vertical-align:middle;margin-left:10px;margin-right:5px;"> -->
<!-- 													<a href="javascript:void(0);" style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">评估方案设计</a> -->
<!-- 												</span> -->
<!-- 												</td> -->

<!-- 												<td align="right"> -->
<!-- 												<img src="<%=basePath%>/images/menu_expand.png" style="vertical-align:middle;margin-right:20px;"> -->
<!-- 												</td> -->

<!-- 											</tr> -->
<!-- 										</table> -->
<!-- 									</td> -->
<!-- 									</tr> -->

<!-- 									<tr id="submenu001" class="submenu001" style=""> -->
<!-- 										<td align="left" colspan="2"> -->
<!-- 											<table cellpadding="0" cellspacing="0" style="width:212px;"> -->
<!-- 												<tr> -->
<!-- 													<td align="left" onclick="selectMenu(1,'定位与目标');" style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);"> -->
<!-- 														<img src="<%=basePath%>/images/status_green.png" style="vertical-align:middle;margin-left:26px;"> -->
<!-- 														<a href="<%=basePath%>/page/auditing/goal.jsp" target="rightbox"  style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" id="datasbitem016" > -->
<!-- 															定位与目标</a> -->
<!-- 														</td> -->
<!-- 												</tr> -->

<!-- 												<tr> -->
<!-- 													<td align="left" onclick="selectMenu(2,'师资队伍');" -->
<!-- 															style="height:40px;background-image:url(<%=basePath%>/images/secondflm_bk002.png);"><img -->
<!-- 															src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 														<a href="<%=basePath%>/page/auditing/goal.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem017" >师资队伍</a> -->
<!-- 													</td> -->
<!-- 												</tr> -->

<!-- 												<tr> -->
<!-- 													<td align="left" onclick="selectMenu(3,'教学资源');" -->
<!-- 															style="height:40px;background-image:url(<%=basePath%>/images/secondflm_bk002.png);"><img -->
<!-- 															src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/goal.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem018" >教学资源</a></td> -->
<!-- 												</tr> -->

<!-- 												<tr> -->
<!-- 													<td align="left" onclick="selectMenu(4,'培养过程');" -->
<!-- 															style="height:40px;background-image:url(<%=basePath%>/images/secondflm_bk002.png);"><img -->
<!-- 															src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/goal.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem019" >培养过程</a></td> -->
<!-- 												</tr> -->

<!-- 												<tr> -->
<!-- 													<td align="left" onclick="selectMenu(5,'学生发展');" -->
<!-- 															style="height:40px;background-image:url(<%=basePath%>/images/secondflm_bk002.png);"><img -->
<!-- 															src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/goal.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem020" >学生发展</a></td> -->
<!-- 												</tr> -->

<!-- 												<tr> -->
<!-- 													<td align="left" onclick="selectMenu(6,'质量保障');" -->
<!-- 															style="height:40px;background-image:url(<%=basePath%>/images/secondflm_bk002.png);"><img -->
<!-- 															src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/goal.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem021" >质量保障</a></td> -->
<!-- 												</tr> -->

<!-- 												<tr> -->
<!-- 													<td align="left" onclick="selectMenu(7,'自选特色项目');" -->
<!-- 															style="height:40px;background-image:url(<%=basePath%>/images/secondflm_bk002.png);"><img -->
<!-- 															src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/zxFeature.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem022" >自选特色项目</a></td> -->
<!-- 												</tr> -->
<!-- 											</table> -->
<!-- 										</td> -->
<!-- 									</tr> -->
<!-- 									<%--//评估方案查看--%> -->
<!-- 									<tr> -->
<!-- 										<td valign="left" -->
<!-- 												style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;" -->
<!-- 												colspan="2" onclick="menuexpand(this);" value="submenu002"> -->
<!-- 											<table cellpadding="0" cellspacing="0" style="width:212px;"> -->
<!-- 												<tr> -->
<!-- 													<td align="left"><span -->
<!-- 															style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;"><img -->
<!-- 																src="<%=basePath%>/images/icon002.png" -->
<!-- 																style="vertical-align:middle;margin-left:10px;margin-right:5px;"> -->
<!-- 																<a href="<%=basePath%>/page/auditing/lookPlan.jsp" target="rightbox"  -->
<!-- 																style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">评估方案查看</a> -->
<!-- 													</span> -->
<!-- 													</td> -->

<!-- 													<td align="right"><img -->
<!-- 															src="<%=basePath%>/images/menu_flod.png" -->
<!-- 															style="vertical-align:middle;margin-right:20px;"> -->
<!-- 													</td> -->

<!-- 												</tr> -->
<!-- 											</table> -->
<!-- 										</td> -->
<!-- 									</tr> -->
<!-- 									<%--//自我评估--%> -->
<!-- 									<tr> -->
<!-- 										<td valign="left" -->
<!-- 												style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;" -->
<!-- 												colspan="2" onclick="menuexpand(this);" value="submenu003"> -->
<!-- 											<table cellpadding="0" cellspacing="0" style="width:212px;"> -->
<!-- 												<tr> -->
<!-- 													<td align="left"><span -->
<!-- 															style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;"><img -->
<!-- 																src="<%=basePath%>/images/icon002.png" -->
<!-- 																style="vertical-align:middle;margin-left:10px;margin-right:5px;"> -->
<!-- 																<a href="javascript:void(0);" style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">自我评估</a> -->
<!-- 													</span> -->
<!-- 													</td> -->

<!-- 													<td align="right"><img -->
<!-- 															src="<%=basePath%>/images/menu_flod.png" -->
<!-- 															style="vertical-align:middle;margin-right:20px;"> -->
<!-- 													</td> -->

<!-- 												</tr> -->
<!-- 											</table> -->
<!-- 										</td> -->
<!-- 									</tr> -->

<!-- 									<tr id="submenu003" class="submenu002" style="display:none;"> -->
<!-- 										<td align="left" colspan="2"> -->
<!-- 											<table cellpadding="0" cellspacing="0"> -->
<!-- 												<tr> -->
<!-- 													<td align="left" -->
<!-- 															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);"><img -->
<!-- 															src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/statusData.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem023" >状态数据</a></td> -->
<!-- 												</tr> -->


<!-- 												<tr> -->
<!-- 													<td align="left" -->
<!-- 															style="height:40px;background-image:url(<%=basePath%>/images/secondflm_bk002.png);"><img -->
<!-- 															src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/estimate/estimatebyself.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem024" >自评报告</a></td> -->
<!-- 												</tr> -->

<!-- 											</table> -->
<!-- 										</td> -->
<!-- 									</tr> -->
<!-- 									<%-- -->
<!-- 												//专家评估 -->
<!-- 												--%> -->
<!-- 									<tr> -->
<!-- 										<td valign="left" -->
<!-- 												style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;" -->
<!-- 												colspan="2" onclick="menuexpand(this);" value="submenu004"> -->
<!-- 											<table cellpadding="0" cellspacing="0" style="width:212px;"> -->
<!-- 												<tr> -->
<!-- 													<td align="left"><span -->
<!-- 															style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;"><img -->
<!-- 																src="<%=basePath%>/images/icon002.png" -->
<!-- 																style="vertical-align:middle;margin-left:10px;margin-right:5px;"> -->
<!-- 																<a href="javascript:void(0);" style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">专家评估</a> -->
<!-- 													</span> -->
<!-- 													</td> -->

<!-- 													<td align="right"><img -->
<!-- 															src="<%=basePath%>/images/menu_flod.png" -->
<!-- 															style="vertical-align:middle;margin-right:20px;"> -->
<!-- 													</td> -->

<!-- 												</tr> -->
<!-- 											</table> -->
<!-- 										</td> -->
<!-- 									</tr> -->

<!-- 									<tr id="submenu004" class="submenu002" style="display:none;"> -->
<!-- 										<td align="left" colspan="2"> -->
<!-- 											<table cellpadding="0" cellspacing="0"> -->
<!-- 												<tr> -->
<!-- 													<td align="left" -->
<!-- 															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);"> -->
<!-- 															<img src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/teaching.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem025" >专家评估情况</a></td> -->
<!-- 												</tr> -->
<!-- 											</table> -->
<!-- 										</td> -->
<!-- 									</tr> -->
									<!-- 评估报告 -->
<!-- 									<tr> -->
<!-- 										<td valign="left" -->
<!-- 												style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;" -->
<!-- 												colspan="2" onclick="menuexpand(this);" value="submenu005"> -->
<!-- 											<table cellpadding="0" cellspacing="0" style="width:212px;"> -->
<!-- 												<tr> -->
<!-- 													<td align="left"><span -->
<!-- 															style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;"><img -->
<!-- 																src="<%=basePath%>/images/icon002.png" -->
<!-- 																style="vertical-align:middle;margin-left:10px;margin-right:5px;"> -->
<!-- 																<a href="javascript:void(0);" style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">评估报告</a> -->
<!-- 													</span> -->
<!-- 													</td> -->

<!-- 													<td align="right"><img -->
<!-- 															src="<%=basePath%>/images/menu_flod.png" -->
<!-- 															style="vertical-align:middle;margin-right:20px;"> -->
<!-- 													</td> -->

<!-- 												</tr> -->
<!-- 											</table> -->
<!-- 										</td> -->
<!-- 									</tr> -->

<!-- 									<tr id="submenu005" class="submenu002" style="display:none;"> -->
<!-- 										<td align="left" colspan="2"> -->
<!-- 											<table cellpadding="0" cellspacing="0"> -->
<!-- 												<tr> -->
<!-- 													<td align="left" -->
<!-- 															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);"> -->
<!-- 															<img src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/teaching.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem026" >总体评价</a></td> -->
<!-- 												</tr> -->
<!-- 												<tr> -->
<!-- 													<td align="left" -->
<!-- 															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);"> -->
<!-- 															<img src="<%=basePath%>/images/status_green.png" -->
<!-- 															style="vertical-align:middle;margin-left:26px;"> -->
<!-- 															<a href="<%=basePath%>/page/auditing/teaching.jsp" target="rightbox"  -->
<!-- 															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" -->
<!-- 															id="datasbitem027" >结果描述</a></td> -->
<!-- 												</tr> -->
<!-- 											</table> -->
<!-- 										</td> -->
<!-- 									</tr> -->
								</table>
								</div>
							</td>
						</tr>
					</table>
			</td>

			<td style="" align="left" valign="top">
				<div style="width:100%;height: 100%;" id="container">
					<%--<img src="<%=basePath %>/images/center.png">
								--%>
					<iframe src="<%=basePath%>/page/auditing/goal.jsp" name="rightbox"
							frameborder=0 id="rightbox" border=0 / width="100%" height="100%"></iframe>
				</div>
			</td>
		</tr>
	</table>
</div>

</body>
</html>