<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%String path = request.getContextPath();String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";%>
<!DOCTYPE html>
<html>
	<head>
		<base href="<%=basePath%>">
		<meta charset="utf-8">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		
		<title>现场考查~记录考查内容</title>
		
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/siteVisitRecord.css" />
		<script src="<%=basePath%>js/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="<%=basePath%>js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
	   <script type="text/javascript" src="<%=basePath%>/kindeditor/kindeditor.js"></script>
	   <script type="text/javascript" src="<%=basePath%>/kindeditor/lang/zh_CN.js"></script>
	   <script type="text/javascript" src="<%=basePath%>/kindeditor/plugins/code/prettify.js"></script>
	    <script src="<%=basePath%>js/majorEvaluation/siteVisitRecord.js" type="text/javascript" charset="utf-8"></script>
	    <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	   <script>
	   validateLogin();
			var editor;
			KindEditor.ready(function(K) {
				editor = K.create('textarea[name="content"]', {
					cssPath : '<%=basePath%>/kindeditor/plugins/code/prettify.css',
					uploadJson : '<%=basePath%>/kindeditor/jsp/upload_json.jsp',
					fileManagerJson : '<%=basePath%>/kindeditor/jsp/file_manager_json.jsp',
					allowFileManager : true,
					width: '100%'
				});
				var inspectContent= $("#inspectContentId").val();
				editor.html(inspectContent);
			});
			prettyPrint();
		</script>
	</head>
	<body>
	   <input type="hidden" value='${inspectTypes}' id="inspectTypeId"/>
	   <input type="hidden" value='${sceneId }' id='sceneId'/>
	   <input type="hidden" value="${inspectTypeId}" id="selectedTypeId"/>
	   <input type="hidden" value="${inspectTypeName}" id="selectedTypeName"/>
	   <input type="hidden" value='${inspectContent }' id="inspectContentId"/>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-11 top-znj">
					<li class="top-li-1-znj">评估年度
						<label xckc="${accessYearId}" id="xckcYearId">${accessYear }</label>
					</li>
					<li class="top-li-2-znj">学院：
						<label xckc="${accessAcademyId}" id="xckcAcademyId">${accessAcademy }</label>
						</form>
					</li>
					<li class="top-li-3-znj">专业：
						<label xckc="${accessSpcialtyId}" id="xckcSpcialtyId">${accessSpcialty}</label>
					</li>
				</div>
				<div class="col-md-10 button-znj">
					<div class="col-md-4 main-1-znj">
						<p class="text-left">现场考查时间：<label>${inspectStartTime }~${inspectEndTime }</label></p>
						<p class="text-left">现场考查方式：<label id="sceneTypeId"></label></p>
					</div>
					<!-- <div class="col-md-10 main-1-znj">
						<div class="col-md-12 main-2-znj" id="sceneTypeId">
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1">专业自评汇报
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">专家听课
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">实验室实地考查
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4">教师座谈会
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios5" value="option5">新生座谈会
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios6" value="option6">毕业生座谈会
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios7" value="option7">管理人员座谈会
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios8" value="option8">查阅教学计划、课程大纲、教材等教学档案
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios9" value="option9">查阅学生课外科技活动材料
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios10" value="option10">查阅就业指导材料
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios11" value="option11">查阅管理文件
							</label>
							<label>
							    <input type="radio" name="optionsRadios" id="optionsRadios12" value="option12">资料调阅（试题试卷、毕业设计（论文）、课程设计和实验实习报告等）
							</label> 
						</div>
					</div>-->
					<div class="col-md-4 main-1-znj">
						<p class="text-left">现场考查记录：</p>
					</div>
					<div class="main-1-znj" style="margin-bottom: 20px;">
<!-- 						<textarea name="content" class="form-control" rows="30" id="sceneRecordId"></textarea> -->
						<form action="/audit/examineScene/sceneUpdateSceneTasks2.do" id='sceneRecordId' method="post">
						    <input type="hidden" value='${sceneId}' name='id'/>
						    <input type="hidden" value='' name='inspectContent' id="inspectContent"/>
							<input type="hidden" name="xckcYearId" value="${accessYearId}"/>
							<input type="hidden" name="xckcAcademyId" value="${accessAcademyId}"/>
							<input type="hidden" name="xckcSpcialtyId" value="${accessSpcialtyId}"/>
							<input type="hidden" name="isback" value="true"/>
							<div class="col-md-10 main-1-znj">
								  <textarea  name="content" id="content" rows="8"></textarea>
		                    </div>
	                    </form>
					</div>
					
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" onclick="saveSceneRecord();">保存</button>
						<button type="button" class="btn btn-default" data-dismiss="modal" onclick="backScene();">返回</button>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>