<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<html>
<head>
<!-- 引入css文件 -->
<link rel="stylesheet" type="text/css"href="<%=basePath%>uploadify/uploadify.css" />
<title>Insert title here</title>
<script type="text/javascript" src="<%=basePath%>js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>uploadify/jquery.uploadify.min.js"></script>
<script type="text/javascript">
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

</script>
</head>

<body bgcolor="#ffffff">

	<input type="file" name="file_upload" id="file_upload" />
	<a class="upload-button" href="javascript:$('#file_upload').uploadify('upload','*')">上传文件</a>
</body>
</html>