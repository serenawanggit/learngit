<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
	
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
	href="page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_0.css">
	
<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript" src="page/zenith/staticPage/js/page_0.js" ></script>	
<script type="text/javascript" src="js/jquery.form.js" ></script>	
<script type="text/javascript" src="js/jquery.form.min.js" ></script>	
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body>
<input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>
<input type="hidden" id="sysId" value="<%=request.getParameter("sysId")%>"/>
<input type="hidden" id="zylxId" value="<%=request.getParameter("zylxId")%>"/>
	<div id="main" style="-ixdex:1">
		<div id="top">
			<div>
				<span id="specialtys">机械工程专业</span>
			</div>
		</div>
		<div id="midle" >
			<div id="mid">
				<div id="left">
					<img src="page/zenith/staticPage/img/selectFile.png" onclick="upload()" style="cursor:pointer">
				</div>
				<div id="right">
					<span id="assess_self">报告提交时间：2016-10-5——2016-11-6</span>
				</div>
			</div>

		</div>
		<span style="color:red" id="stateIn" ></span>
		<div id="down" >
			<table id = "showFiles">
				<tr>
					<td colspan="3">文件</td>
				</tr>
				<tr>
					<td>1.专业评估整改落实进展报告</td>
					<td>2016-10-23</td>
					<td><a href="javascript:void(0)" onclick="deleteFiles(this)"><img src="page/zenith/staticPage/img/delete.png" style="cursor:pointer"></a></td>
				</tr>
			</table>
		</div>
		<div id="downHide" style="display:none">
			<form action="" method="post" enctype="multipart/form-data" id="uploadForm">
				<div>选择文件</div>
				<div>
					<div>
						<div>
							<div><input type="file" id="uploadFile" name="file" style="cursor:pointer"/><br/>
								<span style="color:red;">备注：最好上传doc格式的word文档,docx在线预览可能会错行！暂不支持pdf格式！<br/></span>
							</div>
						</div>
					</div>
				</div>
				<div id="opration">
					<div>
						<div><input type="button" style="width:66px;height:30px;cursor:pointer" onclick="submitFile()" value="上传文件"/></div>
						<div><input type="button" style="width:66px;height:30px;cursor:pointer" onclick="closed()" value="取消"/></div>
					</div>
				</div>
			</form>
		</div>
		<div id="returnAssess" style='margin-top:5%'>

		
		</div>
		<div id= 'loading1' style='Z-index:999;background:#F0F0F0;display:none'>正在加载中...</div>
	</div> 
	
</body>

</html>
