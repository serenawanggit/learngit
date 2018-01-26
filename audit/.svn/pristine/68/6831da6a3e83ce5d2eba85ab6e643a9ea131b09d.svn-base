<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="audit.util.PropertiesUtil"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>


<html>
<title></title>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
var attachname = "attach";
var i=1;
function   addInput(){
if(i>0){
var attach = attachname + i ;
if(createInput(attach))
                      i=i+1;
              }
          } 
function deleteInput(){
if(i>1){
                    i=i-1;
if(!removeInput())
                        i=i+1;
                }
          } 
function createInput(nm){   
var  aElement=document.createElement("input");   
             aElement.name=nm;
             aElement.id=nm;
             aElement.type="file";
             aElement.size="50";
//aElement.value="thanks";   
//aElement.onclick=Function("asdf()");  
if(document.getElementById("upload").appendChild(aElement) == null)
return false;
return true;
          }  
function removeInput(nm){
var aElement = document.getElementById("upload");
if(aElement.removeChild(aElement.lastChild) == null)
return false;
return true;   
}  
</script>
<body>

	<form action="<%=basePath %>designController/uploadFile.do" method="post" enctype="multipart/form-data">
	<%-- 类型enctype用multipart/form-data，这样可以把文件中的数据作为流式数据上传，不管是什么文件类型，均可上传。--%>
	请选择要上传的文件
	<input type="file" name="uploadFile" size="50"/>
	<input type="submit" value="提交">
	</form>
	
	<input type="button" name="button" value="添加附件" onclick="addInput()">
	<input type="button" name="button" value="删除附件" onclick="deleteInput()">
	<span id="upload"></span>
</body>
</html>