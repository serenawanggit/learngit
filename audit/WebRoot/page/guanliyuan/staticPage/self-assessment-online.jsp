<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	
<title></title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/page/zenith/staticPage/css/page_0.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/page/lzrPopWindow/css/lzrwindow.css" />
	
<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/page/lzrPopWindow/js/lzrWindow.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/page/xueyuan/staticPage/js/page_4.js" ></script>	
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery.form.js" ></script>	
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery.form.min.js" ></script>
<script type="text/javascript" src="/audit/commonjs/common1.js"></script>
<style type="text/css"></style>
<script type="text/javascript" src="/audit/FlexPaper/js/jquery.js"></script>
<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash.js"></script>
<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash_debug.js"></script>
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/base.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/inject.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
<%-- <script type="text/javascript" src="${pageContext.request.contextPath }/page/guanliyuan/staticPage/js/material.js"></script> --%>
   
   <style type="text/css">
   	font{font-size:15px}
	</style>
	
	<script type="text/javascript">
		$(function(){
			var request =GetRequest();
			var onlineurl=request.onlineFile;
			
			showzccl(onlineurl);
			
			function  showzccl(onlineurl){
				 var a="/audit/upload/"+onlineurl;
				 var fp = new FlexPaperViewer(    
			             '/audit/FlexPaper/swfFiles/FlexPaperViewer', 
			            //  对应于p 标签的id
			             'viewerPlaceHolder',   
			             { config : { 
			           //导入的.swf的路径,文件名称使用英语表示，中文时显示不出来，暂时未解决这个问题
			            SwfFile :escape(a),
			           //  SwfFile :escape('F:\\upload\\1431589237438.swf'),                
			             Scale : 1.6, 
			             ZoomTransition : 'easeOut',
			             ZoomTime : 0.5,
			             ZoomInterval : 0.2,
			             FitPageOnLoad : true,
			             FitWidthOnLoad : true,
			             PrintEnabled : true,// 是否可以打印  
			             FullScreenAsMaxWindow : false,
			             ProgressiveLoading : false,
			             MinZoomSize : 0.2,
			             MaxZoomSize : 10,
			             SearchMatchAll : false,
			             InitViewMode : 'Portrait',
			             
			             ViewModeToolsVisible : true,
			             ZoomToolsVisible : true,
			             NavToolsVisible : true,
			             CursorToolsVisible : true,
			             SearchToolsVisible : true,
			               localeChain: 'en_US'
			             }});
				 $("#midTablle1").hide();
				 $("#viewId").show();
			}
		
			function GetRequest() { 
				var url = window.location.search; //获取url中"?"符后的字串 
				var theRequest = new Object(); 
				if (url.indexOf("?") != -1) { 
					var str = url.substr(1); 
					strs = str.split("&"); 
					for(var i = 0; i < strs.length; i ++) { 
						theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
					} 
				} 
				return theRequest; 
			}
		});
	</script>
	
</head>

<body>

	</div>
	<div id="main_1" style="width:100%">
		<p id='viewerPlaceHolder'style='width:100%;height:100%;display:block;margin:0px;'></p>
	</div>
</body>
</html>
