<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>定位与目标</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<style type="text/css">
body, html{width: 100%;height: 100%;margin:0;border:none;
background-repeat:repeat-x;font-size:12px;
font-family:Arial, Helvetica, sans-serif;
background:url(<%=basePath %>/images/centerbk.png);
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
  
}
.hr1{ height:1px;border:none;border-top:1px solid #DADADA;}

</style>
<script type="text/javascript" src="<%=basePath %>/js/estimate/ckeditor_action.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/estimate/createpic.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>uploadify/jquery.uploadify.min.js"></script>
<script type="text/javascript" src="<%=basePath %>kindeditor/kindeditor.js"></script>
<script type="text/javascript" src="<%=basePath %>kindeditor/lang/zh_CN.js"></script>
<script type="text/javascript" src="<%=basePath %>kindeditor/plugins/code/prettify.js"></script>	
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>

<%-- <script type="text/javascript">
$(function() {
    $('#file_upload').uploadify({
    	'multi'    : true,//是否多文件
    	'method'   : 'post',
    	'buttonText' : '选择文件',
        'formData'      : {'path' : '办学定位2', 'someOtherKey' : 1},//参数
    	'auto'     : false,//是否自动上传
    	'queueSizeLimit' : 10,//是否自动上传
        'swf'      : '<%=basePath%>uploadify/uploadify.swf',
        'uploader' : '<%=basePath%>designController/uploadFile.do',
        'onUploadStart' : function(file) {
            $("#file_upload").uploadify("settings", "someOtherKey", 2);
        },
        'onUploadSuccess' : function(file, data, response) {
            alert('文件保存到: ' + data);
        }
    });
});


</script> --%>
<script type="text/javascript" src="<%=basePath %>/js/design.js"></script>

</head>
<body>
<input type="hidden" id="pid" value="1234567"/>
<!-- 右边显示 -->
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'><span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'><span id="topLable" style='display:inline-block;height:28px;line-height:28px;'>评估方案设计 >> 定位与目标</span></span></td><td style='height:40px;' align='right'>&nbsp;</td></tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table id="planTB" cellpadding='0' cellspacing='0' style='width:100%;'>
			<tr><td colspan="2"><hr class="hr1"></td></tr>
			
			<!-- 结束 -->
		</table>
	</td>
	</tr>
</table>
</body>
</html>