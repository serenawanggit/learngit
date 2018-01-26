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
	href="page/zenith/staticPage/css/page_1.css">
<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>page/xueyuan/staticPage/js/recPlan.js"></script>
<!--编辑器基本配置-->
<script type="text/javascript" charset="UTF-8"
	src="<%=basePath%>ueditor/utf8-jsp/ueditor.config.js"></script>
<!--编辑器完整代码 -->
<script type="text/javascript" charset="UTF-8"
	src="<%=basePath%>ueditor/utf8-jsp/ueditor.all.js"> </script>
<script type="text/javascript" src="<%=basePath%>js/jquery.form.js" ></script>	
<script type="text/javascript" src="<%=basePath%>js/jquery.form.min.js" ></script>	

<link rel="stylesheet" type="text/css"
	href="<%=basePath%>ueditor/utf8-jsp/themes/default/css/ueditor.css" />
</head>s

<body>
<input id= "sysId" type="hidden" value="<%=request.getParameter("sysId")%>"/>
<input id= "specialtyId" type="hidden" value="<%=request.getParameter("specialtyId")%>"/>
<input id= "dateYear" type="hidden" value="<%=request.getParameter("dateYear")%>"/>
	<div id="main" style="Z-index:1">
		<div id="top">
			<div><span id="specialtys">机械工程专业</span></div>
		</div>
		<div id="midle">
		<div id = "mids" style="display:none;height:50px;margin-top:20px;">
			<!-- 专家名专业名称 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>请选择专业:</strong> <input type="text" style="height: 32px;"
										id="sp_name2_zy" placeholder="请选择专业" /> 
										<a
										href="javascript:xiala(2)"><img
										src="/audit/page/guanliyuan/staticPage/img/xiala.png"
										style="float:right" />
									</a>
									<div id="2" name="xialaBox2"
										style="height:231%;border:1px solid #eeeeee;width: 134px;position: absolute;left: 34%;z-index:100;display:none;overflow:auto;">
										<ul class="xialaUl" id='yijian_ul2_zy'>
											<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
										</ul>
									</div>
								</div>
								<!-- 时间 -->
								<div style="float:left;margin-left:27px;position: relative;">
									<strong>时间:</strong> <select style="height:32px;width:134px"
										id="rYear_yijian">
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
									</select> <a href="javascript:changeData()"><img title="点击搜索"
										src="/audit/page/guanliyuan/staticPage/img/search.png"
										style="float:right" />
									</a>
								</div>
			
			</div>
			<div id="mid">
				<div id = "showName">专业整改计划</div>
				<div id="right">
					<span id ="assess_self">报告提交时间：</span>
				</div>
				<div id="left">
					—————————————————————————————————————————————————————————</div>
			</div>
			
			
			<div >
			 <a href="javascript:void(0)" onclick="saveContent(0)" id ="saveContent"><img src="page/zenith/staticPage/img/save.png" style="float:right;"></a>
				<textarea name="content" id="myEditor" style="padding-top:58px;" ></textarea>
				<div id="opration">
					
					<a href="javascript:void(0)" onclick="showUpload(1)" id="uploadContent"><img src="page/zenith/staticPage/img/upload.png" style="float:right;margin-right:-24%"></a>
				<!-- <a href="javascript:void(0)" onclick="saveContent(0)" id ="saveContent"><img src="page/zenith/staticPage/img/save.png" style="float:right"></a>  -->
				</div>
				<div id="down" >
			<div class="tableCom">
				<div>内容上传</div>
				<table id = "showReport">
				<!-- 	<tr>
						<td>文件名</td>
						<td>大小</td>
						<td>状态</td>
						<td>操作</td>
					</tr>
					<tr>
						<td>校园网.doc</td>
						<td>36KB</td>
						<td>上传成功</td>
						<td><img src="page/zenith/staticPage/img/delete.png">&nbsp;&nbsp;
							<img src="page/zenith/staticPage/img/download.png"></td>
					</tr> -->
				</table>
			</div>
				<div id="opration1" style="margin-top:5px;">
					
				</div>
			<div class="tableCom">
				
				<!-- <div>支撑材料上传 <a href="javascript:void(0)" onclick="showUpload(2)" ><img src="page/zenith/staticPage/img/upload.png" style="margint-top:1%;margin-bottom:0px;vertical-align:middle"></a></div>
				<table id = "showSupport">
					<tr>
						<td>文件名</td>
						<td>大小</td>
						<td>状态</td>
						<td>操作</td>
					</tr>
					<tr>
						<td>校园网.doc</td>
						<td>36KB</td>
						<td>上传成功</td>
						<td><img src="page/zenith/staticPage/img/delete.png">&nbsp;&nbsp;
							<img src="page/zenith/staticPage/img/download.png"></td>
					</tr>
				</table>
			</div> -->
			<div id="returnAssess" style="margin-top:5%"></div>
		<!-- 	<div id="remarks" style="margin-top:5%"><span style='color:red'>备注：</span></div> -->
		</div>
			</div>
		</div>
		<!-- <div id= 'loading1' style='Z-index:999;background:#F0F0F0';display:none;width:100%;height:100%>正在加载中...</div> -->
		<div id="downHide" style="display:none;Z-index:999">
			<form action="" method="post" enctype="multipart/form-data" id="uploadForm">
				<div>选择文件</div>
				<div>
					<div>
						<div>
							<div><input type="file" id="uploadFile" name="file" onchange="checkFile()"/></div>
						</div>
					</div>
				</div>
				<div id="opration">
					<div>
						<div><input type="button" style="width:66px;height:30px;" onclick="submitFile()" value="上传文件"/></div>
						<div><input type="button" style="width:66px;height:30px;" onclick="closed()" value="取消"/></div>
					</div>
				</div>
			</form>
		</div>
	</div>
	<div id = "loading" style="margin: 0px; padding: 0px; width: 10%; height: 10%;  z-index: 999; position: absolute; top: 35%; left: 42%;border:2px solid #E8E8E8;background: rgb(255, 255, 255) none repeat;display:none">
<center style="line-height:55px;">正在加载中...</center>
</div>	
</body>
<script type="text/javascript">  
	UEDITOR_CONFIG.UEDITOR_HOME_URL = '/audit/page/zenith/staticPage/js/utf8-jsp/';
 //一定要用这句话，否则你需要去ueditor.config.js修改路径的配置信息  
	UE.getEditor('myEditor');  
</script>

</html>
