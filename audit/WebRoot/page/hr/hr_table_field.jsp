<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>表字段</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" href="/audit/css/hr/hr_table_field.css" type="text/css"></link>
	<link rel="stylesheet" href="/TQCC/css/main.css" type="text/css"></link>
	<style type="text/css">
	*{margin:0px; padding: 0px; font-size: 12px;font-family:Arial, Helvetica, sans-serif;}
	html{width: 100%;height: 96%;}
	body{width: 100%;height: 100%;margin:0;border:none;
	background-repeat:repeat-x;font-size:12px;
	font-family:Arial, Helvetica, sans-serif;
	background:url(<%=basePath %>/images/centerbk.png);
	   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	   -moz-background-size:100% 100%;
	}
	*{margin: 0px; padding:0px; font-size:13px;}
	.rightMenu{
			background-color:white; border:1px solid #cccccc;  width:120px;
			position:absolute;
			z-index:99999;
			border: 1px solid #696;
			-webkit-border-radius: 8px;
			-moz-border-radius: 8px;
		     border-radius: 5px; 
			-webkit-box-shadow: #666 0px 0px 10px;
			-moz-box-shadow: #666 0px 0px 10px;
			 box-shadow: #666 0px 0px 10px;
			 left:0px;
			 top:0px;
			 display:none;
			}
	.opertion{width:110px;  margin:5px auto; border-bottom:1px solid #ccc; display:none;}
	.rightMenu li{list-style: none; height:25px; cursor: pointer; line-height: 25px; padding-left:4px;}
	.rightMenu li:hover{ background-color:#348CCC; color:white;}
	
	#showMsg{ height:35px; line-height: 35px; width:65px; margin: 0px auto;}
	</style>
	
	<script type="text/javascript" src="/audit/js/jquery.js"></script>
	<script type="text/javascript" src="/audit/js/hr/hr_table_field.js"></script>
	<script type="text/javascript" src="/TQCC/js/dataCheck/dataCeckDivPage.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
  </head>
  
  <body>
	<!-- 弹出层 -->
	<div id="mask" class="mask"></div>  
	<!-- 右边显示 -->
	<div style="background-color:#568E59; width:230px; height:28px; margin-left: 10px; margin-top: 10px;">
   		<span style='display:inline-block;height:28px;line-height:28px;color:white;padding-left:15px;'>历史数据 >> 表字段</span>
	</div>
	<table class="tab_top">
		<tr>
			<td align='left' colspan='2'>
			<table>
				<tr>
					<td colspan="2" align="left">
						<table style="margin: 15px 0px;">
							<tbody>
								<tr >
									<td>
									</td>
									<td align="right">
										<a href="javascript:void(0)" id="createTable" style="display: none;" onclick="createDataTable();">生成数据库表</a>&nbsp;&nbsp;
										<a href="javascript:void(0)" onclick="showOrHideIndexDetailDiv('updateTable');">在线编辑表格</a>&nbsp;&nbsp;
										<a href="javascript:void(0)" onclick="showOrHideIndexDetailDiv('add');">
											<img src="/audit/images/addnew.png" border="0">
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
				<tr> 
						<td colspan="2" >
		<!-- 内容 -->
		<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;">
  		<table id="hr_tab" class="tab_data"  cellpadding='0' cellspacing='0'>
  			<thead>
  				<tr>
  					<td>表字段名</td>
  					<td>数据表字段名</td>
  					<td>所属表id</td>
  					<td>字段类型</td>
  					<td>字段长度</td>
  					<td>指标代码</td>
  					<td>指标名</td>
  					<td>位置</td>
  					<td>备注</td>
  				</tr>
  			</thead>
  			<tbody>
  			<input id="isOnlyOne" type="hidden" value="${isOnlyOne}">
  			<input id="hrTableId" type="hidden" value="${hrTableId}">
  			<c:forEach items="${list}" var="var">
  				<tr>
  					<td><input id="tableId" type="hidden" value="${var.id}">${var.fieldName}</td>
  					<td>${var.fieldDataName}</td>
  					<td>${var.hrTableId}</td>
  					<td>
  						<c:if test="${var.fieldType=='0'}">整数</c:if>
  						<c:if test="${var.fieldType=='1'}">两位小数</c:if>
						<c:if test="${var.fieldType=='2'}">时间</c:if>
  						<c:if test="${var.fieldType=='3'}">文字</c:if>
  					</td>
  					<td>${var.fieldLength}</td>
  					<td><c:if test="${var.measureId=='0'}">无</c:if></td>
  					<td><c:if test="${var.measureName==''}">无</c:if></td>
  					<td>${var.position}</td>
  					<td><c:if test="${var.remark==''}">无</c:if></td>
  				</tr>
  			</c:forEach>
  			</tbody>
  		</table>
  		</div>
  		
  		<!-- 弹出层 新增 -->
  		<div id="addShow" class="add_show2">
  		<div class="id_title" style="margin-bottom: 10px;">
  			 新增字段
			<a class="close_btn" onclick="showOrHideIndexDetailDiv('add');" title="关闭窗口" href="javascript:void(0)">×</a>
  		</div>
  		<div class="id_content">
  			<table class="field_table"  cellpadding='0' cellspacing='0'>
  				<tr>
  					<td>表字段名:</td>
  					<td><input id="fieldName" type="text"><span id="fieldNameSpan"></span></td>
  				</tr>
  				<tr>
  					<td>数据表字段名:</td>
  					<td><input id="fieldDataName" type="text"><span id="fieldDataNameSpan"></span></td>
  				</tr>
  				<tr>
  					<td>字段类型:</td>
  					<td>
  						<select id="fieldType" style="width: 122px;" onchange="fieldTypeValue();">
  							<option value="" selected="selected">---请选择字段类型---</option>
  							<option value="0">整数</option>
  							<option value="1">两位小数</option>
  							<option value="2">时间</option>
  							<option value="3">文字</option>
  						</select><span id="fieldTypeSpan"></span>
  					</td>
  				</tr>
  				<tr id="valueLength" style="display: none;">
  					<td>字段长度:</td>
  					<td>
  						<select id="fieldLength" style="width: 122px;">
  						<option value="" selected="selected">---请选择类型长度---</option>
  							<option value="200">200</option>
  							<option value="4000">4000</option>
  							<option value="max">无限大</option>
  						</select><span id="fieldLengthSpan"></span>
  					</td>
  				</tr>
  				<tr>
  					<td>指标名:</td>
  					<td><input id="measureId" type="text"><input id="measureName" type="text">&nbsp;<a href='javascript:void(0);' onclick="showOrHideIndex();">选择指标</a><span id="measureNameSpan"></span></td>
  				</tr>
  				<tr>
  					<td>备注:</td>
  					<td><input id="remark" type="text"></td>
  				</tr>
  				<tr>
  					<td></td>
  					<td></td>
  				</tr>
  			</table>
  			<div class="add_show_footer">
  				<ul>
				<li>
					<a class="show_btn" id="addA" href="javascript:void(0)" onclick="addSave();">
						确定
					</a>
				</li>
				<li>
					<a class="show_btn" href="javascript:void(0)" onclick="showOrHideIndexDetailDiv('add');">
						取消
					</a>
				</li>
			</ul>
  			</div>
  			</div>
  		</div>
  		<!-- 新增结束 -->
  		<!-- 在线编辑table -->
  		<div id="onLineTableShow" class="add_show">
	  		<div class="id_title" style="margin-bottom: 10px;">
	  			在线编辑表格
				<a class="close_btn" onclick="showOrHideIndexDetailDiv('updateTable');" title="关闭窗口" href="javascript:void(0)">×</a>
	  		</div>
  			<span>表格初始化参数</span>
  			<table>
  				<tr><td colspan="1" rowspan="1">行数:</td><td><input id="trLine" type="text"></td></tr>
  				<tr><td>列数:</td><td><input id="tdLine" type="text"></td></tr>
  				<tr><td></td><td><a href="javascript:void(0);" onclick="onLineTable();">预览</a></td></tr>
  			</table>
  			<span>表格预览：</span>&nbsp;&nbsp;&nbsp;<span id="editTable" style="display: none;"><input type="button" onclick="updateTableStyle();" value="完成编辑"></span>
  			<div id="tablePreview" style="width:100%;">
  				
  			</div>
  		</div>
  		<!-- 在线编辑结束 -->
  		<div id='rightMenu' class='rightMenu'>
  		
	    <ul class='opertion' id='opertion'>
	    	 <!-- <li>关注指标</li>
		     <li>取消关注</li> -->
	    </ul>
		</div>
		<!-- 取值弹出层 -->
		<div id="valueDiv" class="add_show2">
			<div class="id_title" style="margin-bottom: 10px;">
	  			更新描述与位置
				<a class="close_btn" onclick="showOrHideIndexDetailDiv('value');" title="关闭窗口" href="javascript:void(0)">×</a>
	  		</div>
			<span>值所需:</span>
			<select id="valueField" onchange="fieldValue();">
				<option value="" selected="selected">---选择取值范围---</option>
				<c:forEach items="${list}" var="data">
				<option value="${data.fieldDataName}">${data.fieldName}</option>
				</c:forEach>
			</select>
		</div>
		<!-- 取值弹出层 结束 -->
		<!-- 描述弹出层 -->
		<div id="describeDiv" class="add_show2">
			<div class="id_title" style="margin-bottom: 10px;">
	  			更新描述与位置
				<a class="close_btn" onclick="showOrHideIndexDetailDiv('describe');" title="关闭窗口" href="javascript:void(0)">×</a>
	  		</div>
			<span>描述所需:</span>
			<select id="describeField" onchange="fieldDescribe();">
				<option value="" selected="selected">---选择描述---</option>
				<c:forEach items="${list}" var="data">
				<option value="${data.fieldDataName}">${data.fieldName}</option>
				</c:forEach>
			</select>
			<span>手动输入:<input type="button" value="手动输入" onclick="inputDescribeFieldName();"></span>
		</div>
		<!-- 描述弹出层结束 -->
  		<!-- 指标 -->
  		<div id="indexPool" class="index_pool">
		<div class="indexPool_head">
			<div class="id_title">
				<span>指标选择</span>
				<div class="close_icon">
					<img src="/TQCC/images/icon10.png" onclick="showOrHideIndex();"></img>
				</div>
			</div>
			
			<div class="choice">
				<ul>
					<li>指标分类：
<!-- 						<input id="zbfl" type="search" placeholder="请输入指标分类"/> -->
						<select id="zbfl" onchange="searchDataZB(true)">
							<option value="">---请选择---</option>
						</select>
					</li>
					<li>指标名称：<input id="zbName" type="search" placeholder="请输入指标名称"/></li>
				</ul>
			</div>
			<div class="search_icon">
				<a class="ss_btn01 f_l" id="searchZB" onclick="searchDataZB(true);"></a>
			</div>
		</div>
		
		<div class="index_pool_content">
			<table class="table">
				<thead>
					<tr>
						<td width="15%"><input id="selectAll" onclick="selectAll();" type="checkbox"/></td>
						<td width="27%">指标编码</td>
						<td width="27%">指标分类</td>
						<td width="27%">指标名称</td>
					</tr>
				</thead>
				<tbody id="zbtbody">
				</tbody>				
			</table>
		</div>
		
		<div class="index_pool_footer" id="zbPage">
		
		</div>
	</div>
  		<!-- 指标结束 -->
  </body>
</html>
