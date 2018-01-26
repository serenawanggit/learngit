<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>发布配置</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/ajaxfileupload.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/jquery.form.min.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>

<script type="text/javascript">

validateLogin();
function showImg(){
	$.ajaxFileUpload({  
            url:'<%=basePath%>/logo/showLogo.do',  
            secureuri:false,  
            fileElementId:"img",//file标签的id  
            dataType: 'json',//返回数据的类型  
            success: function (data) {  
            	alert(data);
            }
         });
}
	function importFile(){
		$("#imgForm").submit();
	}

	$("#imgForm").ajaxForm({
        dataType: 'json',
        success:  getImg
    });
	function getImg(data){
		if(data !="success"){
			$("#showimg").attr("src","<%=basePath%>"+data);
		}else{
			alert("logo替换成功");
		}
	}
	
	function submitForm(){
		var value = $("#page").val();
		var html="<input type='hidden' name='page' value='"+value+"'>";
		$("#imgForm").append(html);
		$("#imgForm").attr("action","<%=basePath%>/logo/changeLogo.do");
		$("#imgForm").submit();
		$("#imgForm").attr("action","<%=basePath%>/logo/showLogo.do");
	}

</script>
  </head>
  <body>
    <div>
   		<ul>
   			<li>
   				所在页面：
   				<select id="page">
					<option value="1">应用平台</option>
					<option value="2">登陆页面</option>   
					<option value="3">教学状态</option>   
					<option value="4">导航页面</option>   
					<option value="5">后台管理</option>   
   				</select>
   			</li>
   			<li>
   				<form id="imgForm" action="<%=basePath%>/logo/showLogo.do" method="post" enctype="multipart/form-data">
					<input  name="file" type="file" id="img" onchange="importFile()"/>
				</form>
			</li>
			<li>
				<img id="showimg" style="width:200px;height:200px;">  
			</li>
   			<li>
   				<input type="submit" value="上传按钮" onclick="submitForm()"/>
   			</li>
   		</ul>
   		
    </div>
  </body>
</html>
