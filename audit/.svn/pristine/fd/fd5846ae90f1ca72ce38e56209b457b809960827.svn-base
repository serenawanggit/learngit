<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

 <!DOCTYPE html>
<html>
  <head>
    <base href="<%=basePath%>">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
		<meta charset="utf-8">
		<title>专业自评~我的材料库</title>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/base.css"/>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/materialLibraryZY.css"/>
		<script type="text/javascript" src="<%=basePath %>js/jquery.js"></script>
 		<script type="text/javascript" src="<%=basePath%>/js/assess/materialLibraryZY.js"></script>
 		<script type="text/javascript" src="<%=basePath %>/js/ajaxfileupload.js"></script>
 		<script type="text/javascript" src="<%=basePath %>/js/jquery.form.min.js"></script>
 			<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
 	<script type="text/javascript">
	validateLogin();
	</script>
 	</head>
 	
	<body>
		<input type="hidden" id="roomTableid" value="${roomTableid}"/>
		<input type="hidden" id="isExist" value="${isExist}"/>
		<input type="hidden" id="userFilePath" value="<%=System.getProperty("accessFileUser") %>"/> 
		<div class="container">
			<div class="nav">
				<ul>
					<li><a href="<%=basePath%>/page/majorEvaluation/homePage.jsp">首页</a></li>
					<li><a href="<%=basePath%>self/selfView.do?year=2015">评估指标自评</a></li>
					<li><a href="<%=basePath%>self/selfReportView.do">自评报告</a></li>
					<li><a href="/audit/self/profile.do?year=${year}" >简况表</a></li>
					<li class="nav-li-a"><a href="/audit/asAccessDataTableController/initMaterialLibraryZY.do">我的材料库</a></li>
				</ul>
			</div>
			<div class="main">
				<div class="main-top-short">
					<div class="main-top-img">
					<form id="myform" name="form1" action="" method="post" enctype="multipart/form-data">
				   		<input type="file" id="upload" style="display:none;" onchange="importFile();" name="file"/>
				   		<img style='cursor:pointer;' onclick="document.form1.file.click();" src="/audit/img/majorEvaluation/shangchuan.png"/>
				    </form>  
					</div>
					<div class="main-top-img">
						<img onclick="insertDataTableEntrance()" src="/audit/img/majorEvaluation/xinjian.png"/>
					</div>
				</div>
				<div class="main-bottom">
					<div id="callback" class="main-bottom-top">
						<ul>
							<li class="top-li-one">全部文件 </li>
							
							<li class="top-li-file-path">
								<label class="dsc">
									当前位置：
								</label>
								<label id="filePath">
									<label>
										<a href="javascript:void(0);" onclick="javascript:window.location.href = '/audit/asAccessDataTableController/initMaterialLibraryZY.do'">我的材料库</a>
									</label>
								</label>
							</li>
							
							<li class="top-li-two">已全部加载，共<label id="entranceCount">0</label>个</li>
						</ul>
					</div>
					<div id="returnTop" class="main-bottom-center">
						<ul>
							<li class="center-li-two">已选择<label id="labCount">0</label>个文件/文件夹</li>
							<li class="center-li-three"><img style='cursor:pointer;' onclick="downLoadZip();" src="/audit/img/majorEvaluation/xiazai.png" /></li>
							<li class="center-li-three"><img style='cursor:pointer;' onclick="deleteBatch();" src="/audit/img/majorEvaluation/shanchu.png" /></li>
							<!-- <li class="center-li-four"><img src="/audit/img/majorEvaluation/fuzhi.png" /></li>
							<li class="center-li-four"><img src="/audit/img/majorEvaluation/yidong.png" /></li> -->
						</ul>
					</div>
					<div id="assessDataTableMain" style="table-layout:fixed;" class="main-bottom-bottom">
						<!-- 
						<div class="bootom-div">
							<div class="bootom-div-weigoubeijing">
								<div class="bootom-div-img">
									<img src="/audit/img/majorEvaluation/wenjianjia.png" />
								</div>
							</div>
							<div class="bootom-div-li">
								<li class="bootom-li">培养目标与方案</li>
							</div>
						</div>
						<div class="bootom-div">
							<div class="bootom-div-yigoubeijing">
								<div class="bootom-div-img">
									<img src="/audit/img/majorEvaluation/wenjianjia.png" />
								</div>
							</div>
							<div class="bootom-div-li">
								<li class="bootom-li">培养目标与方案</li>
							</div>
						</div>
						<div class="bootom-div">
							<div class="bootom-div-no">
								<div class="bootom-div-img">
									<img src="/audit/img/majorEvaluation/doc.png" />
								</div>
							</div>
							<div class="bootom-div-li">
								<li class="bootom-li">培养目标与方案</li>
							</div>
						</div>
						<div class="bootom-div">
							<div class="bootom-div-no">
								<div class="bootom-div-img">
									<img src="/audit/img/majorEvaluation/xls.png" />
								</div>
							</div>
							<div class="bootom-div-li">
								<li class="bootom-li">培养目标与方案</li>
							</div>
						</div>
						<div class="bootom-div">
							<div class="bootom-div-no">
								<div class="bootom-div-img">
									<img src="/audit/img/majorEvaluation/kongwenjian.png" />
								</div>
							</div>
							<div class="bootom-div-li">
								<li class="bootom-li">培养目标与方案</li>
							</div>
						</div>
						<div class="bootom-div">
							<div class="bootom-div-no">
								<div class="bootom-div-img">
									<img src="/audit/img/majorEvaluation/kongwenjian.png" />
								</div>
							</div>
							<div class="bootom-div-li">
								<li class="bootom-li">培养目标与方案</li>
							</div>
						</div> -->
					</div>
				</div>
			</div>
			<div class="footer">
				<div class="back">
					<a href="javascript:scroll(0,0);"><img src="/audit/img/majorEvaluation/back.png"/></a>
				</div>
			</div>
		</div>
	</body>
</html>
