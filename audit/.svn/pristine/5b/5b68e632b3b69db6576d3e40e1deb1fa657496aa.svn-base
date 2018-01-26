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
<!--编辑器基本配置-->
<script type="text/javascript" charset="UTF-8"
	src="<%=basePath%>ueditor/utf8-jsp/ueditor.config.js"></script>
<!--编辑器完整代码 -->
<script type="text/javascript" charset="UTF-8"
	src="<%=basePath%>ueditor/utf8-jsp/ueditor.all.js"> </script>
<script type="text/javascript" src="<%=basePath%>js/jquery.form.js" ></script>	
<script type="text/javascript" src="<%=basePath%>js/jquery.form.min.js" ></script>
 <%-- <script src="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>  --%>
       
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/base.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/inject.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
<script type="text/javascript" src="js/latool.js"></script>

<link rel="stylesheet" type="text/css" href="<%=basePath%>ueditor/utf8-jsp/themes/default/css/ueditor.css" />
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	
	<script type="text/javascript" src="/audit/page/zenith/staticPage/js/page_1.js"></script>

	<style type="text/css">
		.div_tab table{border-collapse:collapse;border:none;}
		.div_tab table td{border:solid #BDBCBC 1px;height:40px;line-height:25px;font-size:15px}
		.div_tab table th{border:solid #BDBCBC 1px;height:40px;line-height:25px;font-size:15px;text-align:center}
	</style>
	
	<style type="text/css">
		.schoolData-div table{border-collapse:collapse;border:none;}
		.schoolData-div table td{border:solid #804040 1px;line-height:25px;font-size:15px;text-align:center;height:40px}
	</style>
	
</head>

<body >
<input id= "sysId" type="hidden" value="<%=request.getParameter("sysId")%>"/>
<input id= "specialtyId" type="hidden" value="<%=request.getParameter("specialtyId")%>"/>
<input id= "dateYear" type="hidden" value="<%=request.getParameter("dateYear")%>"/>
	<div id="main" style="Z-index:1">
		<div id="top">
			<div><span id="specialty_name"></span> <span id="specialtys"></span></div>
		</div>
		<div id="midle">
			<div class="div_tab" style="width:100%;" id="tab1">
				<table style="text-align:center;width:100%;" id="systemInfo">
					<tr bgcolor="#DCDBDB" id="target">
						<td rowspan="2" width="10%">一级指标</td>
						<td rowspan="2" width="10%">二级指标</td>
						<td rowspan="2" width="4%">分值</td>
						<td colspan="2" width="32%">等级标准</td>
						<td rowspan="2" width="22%">评估方式</td>
						<td rowspan="2" width="22%">说明</td>
					</tr>
					<tr bgcolor="#DCDBDB"  style="height:40px;font-size:15px">
						<td width="16%">A</td>
						<td width="16%">C</td>
					</tr>
				</table>
			</div>
			<div id="eval" style="width:100%;padding-top:15px;">
				<table style="width:50%;">
					<tr>
						<td>&nbsp; <span style="font-weight:bold;color:#C12625;font-size:18px">输入自评等级：</span> 
							<input id="grade" style="width:25%;height:35px;font-size:17px;text-align:center;color:#C12625;font-weight:bold;">
						</td>
						<td><span style="font-weight:bold;color:#C12625;font-size:18px">输入自评分数：</span> 
							<input id="score" style="width:25%;height:35px;font-size:17px;text-align:center;color:#C12625;font-weight:bold;">
						</td>
					</tr>
				</table>
				<div style="padding:10px;border:solid #BDBCBC 1px;margin-top:13px;line-height:22px;"><span style="font-size:12px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评估等级说明：评估等级分为A，B，C，D四级，评估标准给出A，C两级，介于A，C级之间的为B，低于C级的为D。指标体系满分为110分（含特色附加分10分），
					各项二级指标中，A，B，C，D四级的权重分别为1.0、0.8、0.6、0.4。各二说明：1.本方案二级指标共22项，评估等级分为A，B，C，D四级，评估标准给出A，C两级，介于A，C级之间的为B，低于C级的为D。
					指标体系满分为110分（含特色附加分10分），各项二级指标中，A，B，C，D四级的权重分别为1.0、0.8、0.6、0.4。各二级指标得分的计算公式为：各二级指标得分的计算公式为：1.0×a+0.8×b+0.6×c+0.4×d,
					其中， a、b、c、d分别表示各二级指标所对应的分值。级指标得分的计算公式为：各二级指标得分的计算公式为：1.0×a+0.8×b+0.6×c+0.4×d,其中， a、b、c、d分别表示各二级指标所对应的分值。
				</span></div>
			</div>
			
			<!-- 提交材料 -->
			<div id="subMaterial" style="width:100%;padding-top:20px;">
				<table width="100%"><tr>
						<td colspan="2">&nbsp;<span style="font-weight:bold;color:#C12625;font-size:18px">提交材料</span></td>
						<td colspan="2" align="right">
							<a href="javascript:void(0)" onclick="doSubmitData()"><img src="page/zenith/staticPage/img/upload.png" style="float:right"></a>
						</td></tr>
				</table>
				<div class="div_tab">
					<table style="text-align:center;width:100%;" id="selfDataFile">
						<tr bgcolor="#DCDBDB" style="height:40px">
							<th width="25%">材料名称</th>
							<th width="25%">上传时间</th>
							<th width="25%">状态</th>
							<th width="25%">操作</th>
						</tr>
					</table>
				</div>
			</div>
			<!-- 提交数据表 -->
		<!-- 	<div id="subData" style="width:100%;padding-top:25px;">
				&nbsp;<span style="font-weight:bold;color:#C12625;font-size:18px">提交数据表</span>
				<div class="div_tab">
					<table style="text-align:center;width:100%;" id="dataSheet">
						<tr bgcolor="#DCDBDB" style="height:40px">
							<th width="25%">数据表名</th>
							<th width="25%">提交时间</th>
							<th width="25%">提交状态</th>
							<th width="25%">操作</th>
						</tr>
						<tr>
							<td>tableName</td>
							<td>dateFormat(dom.INSERT_VSERSION)</td>
							<td>state</td>
							<td>
								<a href="#" id="aaaaaaa" target='_top' title='提交'>
								<img src='page/zenith/staticPage/img/submit_1.png'></a>
							</td>
						</tr>
					</table>
				</div>
			</div> -->
			<!-- 查看校级数据表 -->
		<!-- 	<div id="lookData" style="width:100%;padding-top:25px;">
				&nbsp;<span style="font-weight:bold;color:#C12625;font-size:18px">查看校级数据表</span>
				<div class="div_tab">
					<table style="text-align:center;width:100%;" id="schoolDataReport">
						<tr bgcolor="#DCDBDB" style="height:40px">
							<th width="25%">数据表名</th>
							<th width="25%">上传时间</th>
							<th width="25%">上传状态</th>
							<th width="25%">操作</th>
						</tr>
						<tr>
							<td>1</td>
							<td>2</td>
							<td>3</td>
							<td><a href='javascript:void(0)' onclick="lookSystem(22)" title="查看"><img src="page/zenith/staticPage/img/look.png"></a></td>
						</tr>
					</table>
				</div>
			</div> -->

				
			<!-- <div style="width:100%;padding-top:20px;"> -->
			<!-- 自评报告填写要求 -->		
			<div style="width:100%;padding-top:20px;">
				<span style="font-weight:bold;color:#C12625;font-size:18px">自评报告填写要求</span>
				<div style="width:100%;border:1px solid #C12625;height:0px;margin-top:5px;"></div>
				<div style="padding:8px">
					<span style="font-weight:bold;">学院根据学校有关教学管理办法，为保证教学质量而制定的各种规章制度、各主要教学环节的质量标准、教学评估及执行情况总结等每缺1份扣0.2分</span>
				</div>
				<textarea name="content" id="myEditor">
					<span style="font-weight:bold;text-align:center;font-size:16px"></span>
				</textarea>
			</div>
			<!-- 内容上传 -->
			<div id="contentUpload" style="padding-top:20px;width:100%">
				&nbsp;<span style="font-weight:bold;color:#C12625;font-size:18px">上传内容</span>
				<a href="javascript:void(0)" onclick="showUpload(1)" id="uploadContent"><img src="page/zenith/staticPage/img/upload.png" style="float:right"></a>
				<div class="div_tab" style="margin-top:8px;width:100%">
					<table style="text-align:center;width:100%;" id="contentUpload-str">
						<tr bgcolor="#DCDBDB" style="height:40px">
							<th width="25%">文件名</th>
							<th width="25%">大小</th>
							<th width="25%">状态</th>
							<th width="25%">操作</th>
						</tr>
					</table>
				</div>
			</div>
			
			<!-- 问题和不足 -->
			<div style="margin-top:20px;width:100%">
				&nbsp;<span style="font-weight:bold;color:#C12625;font-size:18px">存在的主要问题和不足</span>
				<div style="margin-top:5px;width:100%">
					<textarea id="problem" rows="6" style="width:100%;border:1px solid #BDBCBC;"></textarea>
				</div>
			</div>
			<div style="padding:20px;float:right">
				<table style="align:right;width:200px">
					<tr>
						<td><a href="javascript:void(0)" onclick="saveContent(0)" id ="saveContent"><img src="page/zenith/staticPage/img/save.png" style="float:right"></a></td>
						<!-- <td><a href="javascript:void(0)" onclick="submitContent(0)" id ="saveContent"><img src="page/zenith/staticPage/img/submit.png" style="float:right"></a></td> -->
					</tr>
				</table>
				&nbsp;&nbsp;
				 
			</div>
		</div>
		 
		 <!-- 内容 上传窗体 -->
		<div id="" style="display:none;Z-index:999">
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
		
		<!-- 材料上传 -->
		<div id="" style="display:none;Z-index:999">
			<form action="" method="post" enctype="multipart/form-data" id="uploadDataForm">
				<div>
					<div>
						<div>
							<div><input type="file" id="submitFile" name="fileData" onchange="uploadData()"/></div>
						</div>
					</div>
				</div>
			</form>
		</div>
		
		<!-- 材料查看校级数据窗体 -->
		<div id="downHide" style="display:none;Z-index:999" class="schoolData-div">
			<center>
				<table id="scoolData-table" width="96%" height="88%" align="center">
					<!-- <tr>
						<td>状态数据库名</td><input disabled="disabled" style="width:95%;height:80%;background-gcolor:#fff" id="tableName">
						<td id="tableName"></td>
					</tr>
					<tr>
						<td>时间类型</td>
						<td id="timeType"></td>
					</tr>
					<tr>
						<td>数据表来源</td>
						<td id="dataSource"></td>
					</tr>
					<tr>
						<td>数据表类型</td>
						<td id="dataType"></td>
					</tr>
					<tr>
						<td>表样</td>
						<td id="tableStyle"></td>
					</tr>
					<tr height="70px">
						<td>备注</td>
						<td id="remark"></td>
					</tr> -->
				</table>
			</center>
		</div>
		
	</div>
</body>
<script type="text/javascript">  
	UEDITOR_CONFIG.UEDITOR_HOME_URL = '/audit/page/zenith/staticPage/js/utf8-jsp/';
 //一定要用这句话，否则你需要去ueditor.config.js修改路径的配置信息  
	UE.getEditor('myEditor');  
</script>
</html>
