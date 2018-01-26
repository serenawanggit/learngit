<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
 <% String a= request.getSession().getServletContext().getRealPath("/");%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">	
  <head>
    <title>在线预览</title>
<script type="text/javascript" src="/audit/FlexPaper/js/jquery.js"></script>
<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash.js"></script>
<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash_debug.js"></script>
 <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
  </head>
  <%--  <%=(String)session.getAttribute("fileName")%>  --%>
  <body style="width:98%;height:98%"> 
        <div style="text-align: center; ">
        	<%-- 指定flexPaper的宽度和高度  --%>   
            <p id="viewerPlaceHolder" style="width:95%;height:95%;display:block;"> </p>  
            <script type="text/javascript"> 
               <%-- var a=escape('upload/<%=(String)session.getAttribute("fileName")%>');
               console.info(a); --%>
      /*          function getQueryString(name) {
		               var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		               var r = window.location.search.substr(1).match(reg);
		               if (r != null) return unescape(r[2]); return null;
               } 
                console.info(getQueryString("wj")); */
                validateLogin();
                var fp = new FlexPaperViewer(    
                         '/audit/FlexPaper/swfFiles/FlexPaperViewer', 
                        //  对应于p 标签的id
                         'viewerPlaceHolder',   
                         { config : { 
                       //导入的.swf的路径,文件名称使用英语表示，中文时显示不出来，暂时未解决这个问题
                        SwfFile :escape('/audit/upload/<%=(String)request.getParameter("wj")%>'), 
                       //  SwfFile :escape('F:\\upload\\1431589237438.swf'),                
                         Scale : 1, 
                         ZoomTransition : 'easeOut',
                         ZoomTime : 0.5,
                         ZoomInterval : 0.2,
                         FitPageOnLoad : true,
                         FitWidthOnLoad : false,
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
            </script>
        </div>
</body>
</html>
