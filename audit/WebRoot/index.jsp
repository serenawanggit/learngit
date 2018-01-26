<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style>
		.mask{
		    background:#000;
		    bottom: 0;
		    display: none;
		    left: 0;
		    opacity: 0.3;
		    position: absolute;
		    right: 0;
		    top: 0;
		    z-index: 999;
		}
		.ts_box{
			position:absolute;
			left:151px;
			top:60px;
			min-width:70%;
			padding-bottom:20px;
			background:#FFF;
			z-index:9999;
			-webkit-border-radius: 5px;
			-moz-border-radius: 5px;
			border-radius: 5px;
			background-color: #fff;
			border: solid 1px #999;
			height: 80%;
		}
	</style>
	
	<style type="text/css" media="screen">   
            html, body  { height:100%; }  
            body { margin:0; padding:0; overflow:auto; }     
            #flashContent { display:none; }  
        </style> 
	<script src="js/jquery.js"></script>
	<script type="text/javascript" src="js/flexpaper_flash.js"></script>  
	<script type="text/javascript" src="js/flexpaper_flash_debug.js"></script> 
	<script type="text/javascript" src="/CHART/commonjs/common.js"></script> 
  </head>
  
  <body>
  	<div class="mask" style="display:block">
  	</div>
  	<div class="ts_box">
  		<a id="viewerPlaceHolder" style="overflow:hidden; width:100%;height:100%;display:block"></a>
  			<script type="text/javascript">   
                var fp = new FlexPaperViewer(     
                         'FlexPaperViewer',  
                         'viewerPlaceHolder', { config : {  
                         SwfFile : escape('/audit/fileshow?id=1'),  
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
                         
            </script>
  	
  	</div>
    <a href = "/preview/index.jsp?id=9">preview9</a>
    <a href = "/preview/index.jsp?id=10">preview10</a>
    <a href = "/preview/index.jsp?id=11">preview11</a>
    <a href = "/audit/fileshow?id=12">preview12</a>
    <!-- 
      <div style="position:absolute;left:250px;top:10px;">  
            <a id="viewerPlaceHolder" style="width:820px;height:650px;display:block"></a>  
            <script type="text/javascript">   
                var fp = new FlexPaperViewer(     
                         'FlexPaperViewer',  
                         'viewerPlaceHolder', { config : {  
                         SwfFile : escape('/audit/fileshow?id=11'),  
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
            </script>              
        </div> -->
  </body>
</html>
