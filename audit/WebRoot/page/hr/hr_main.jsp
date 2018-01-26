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
    
    <title>主表</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<link rel="stylesheet" href="/audit/css/hr/hr_main.css" type="text/css"></link>
	
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
	.rightMenu{
			background-color:white; border:1px solid #cccccc;  width:120px;
			position:absolute;
			z-index:10002;
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
	.opertion{width:110px;  margin:5px auto; border-bottom:1px solid #ccc; display:none;z-index:10003;}
	.rightMenu li{list-style: none; height:25px; cursor: pointer; line-height: 25px; padding-left:4px;}
	.rightMenu li:hover{ background-color:#348CCC; color:white;}
	
	#showMsg{ height:35px; line-height: 35px; width:65px; margin: 0px auto;}
	</style>
	<script type="text/javascript" src="/audit/js/jquery.js"></script>
	<script type="text/javascript" src="/audit/js/hr/tendina.js"></script>
	<script type="text/javascript" src="/audit/js/hr/hr_main.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	
  </head>
  
  <body>
  
  	<!-- 弹出层 -->
	<div id="mask" class="mask"></div>
	<!-- 右边显示 -->
	<div style="background-color:#568E59; width:230px; height:28px; margin-left: 10px; margin-top: 10px;">
   		<span style='display:inline-block;height:28px;line-height:28px;color:white;padding-left:15px;'>历史数据 >> 主表</span>
	</div>
	<input type="hidden" id ="pid" value="" />
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
										<input id='tabName' value="请输入表名" onFocus="if(value==defaultValue){value='';this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}"  style="color:#999999;width:200px;height:24px;line-height:24px;vertical-align:middle;margin-left:10px;border:#DADADA 1px solid;padding-left:5px;" id="plannameinput" type="text">
										<a href="javascript:void(0)">
											<img src="/audit/images/searchbtn.png" onclick="search(1,10);" style="vertical-align:middle;height:24px;line-height:24px;border:0px;">
										</a>
									</td>
									<td align="right">
										<a href="javascript:void(0)" onclick="showOrHideIndexDetailDiv('add','')">
											<img src="/audit/images/addnew.png" border="0"></a>
										<a href="javascript:void(0)" onclick="deleteMore();" style="display:inline-block;padding-right:5px;">
											<img src="/audit/images/deletept.png" style="margin-left:10px;border:0px;">
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
							<table id="hr_main_table" class="tab_data" cellpadding='0' cellspacing='0'>
									<thead>
										<tr>
											<td align="center"><input type="checkbox" onclick="selectAll();" id="SelectAll"></td>
											<td align='center'>序号</td>
											<td align='center'>表名</td>
											<td align='center'>数据表名</td>
											<td align='center'>所属类型</td>
											<td align='center'>是否必须</td>
											<td align='center'>分类</td>
											<td align='center'>是否原始表</td>
											<td align='center'>是否统计表</td>
											<td align='center'>表样</td>
											<td align='center'>备注</td>
											<td align='center'>操作</td>
										</tr>
									</thead>
									<tbody id="tbody">
										<tr>
											<td align="center"><input type="checkbox" name="ck_box"></td>
											<td align='center'>序号</td>
											<td align='center'>中文名</td>
											<td align='center'>英文名</td>
											<td align='center'>所属类型</td>
											<td align='center'>必须</td>
											<td align='center'>分类</td>
											<td align='center'>原始表</td>
											<td align='center'>操作</td>
										</tr>
									</tbody>
							</table>
							
						</div>
						<table style='width:100%;' cellpadding='0'>
							<tbody>
								<tr>
							  	<page:pager url="audit/asZlZlrwbmryController/selectAllAsZLZLrwmry.do" count="${count}" page="1"/>
								<td align='left'>
									<span id="pageCount" style='display:inline-block;margin-left:40px;'>&nbsp;</span>
									</td>
									<td align='right'>
									 <span style='display:inline-block;margin-right:40px;'>
									<tag:pager url="/page/qualityMission/bumenAndrenyuan.jsp" count="100" page="1"/>
									 <img value='1_"+json.totalPage+"' onclick='homePage();'
										src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'
											onmouseover="this.src='/audit/images/pgicon-first.png;'"
											onmouseout="this.src='/audit/images/pgicon-first_press.png;'">
									<img value='2_"+json.totalPage+"' onclick='prePage();'
										src='/audit/images/pgicon-pre_press.png'
											style='vertical-align:middle;margin-left:5px;'
											onmouseover="this.src='/audit/images/pgicon-pre.png;'"
											onmouseout="this.src='/audit/images/pgicon-pre_press.png;'">
									<span id="count" style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/10页</span>
									<img value='3_"+json.totalPage+"' onclick='nextPage();'
											src='/audit/images/pgicon-next_press.png'
											style='vertical-align:middle;margin-left:5px;'
											onmouseover="this.src='/audit/images/pgicon-next.png;'"
											onmouseout="this.src='/audit/images/pgicon-next_press.png;'">
									<input id='pagenotext'  style='width:30px;margin-left:5px;height:20px;
									line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
									<img value='4_"+json.totalPage+"' onclick='lastPage();'
											src='/audit/images/pgicon-last_press.png'
											style='vertical-align:middle;margin-left:5px;'
											onmouseover="this.src='/audit/images/pgicon-last.png'"
											onmouseout="this.src='/audit/images/pgicon-last_press.png'">
									</span>  
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</table>
			</td>
		</tr>
	</table>
	<!-- 添加弹出层 -->
	<div id="updateDIv" class="add_show">
			<div class="id_title" style="margin-bottom: 10px;">
	  			<label id="addSaveOrUPdateInit"></label>
				<a class="close_btn" onclick="showOrHideIndexDetailDiv('','');" title="关闭窗口" href="javascript:void(0)">×</a>
	  		</div>
		<form action="" id="myForm">
			<center>
				<table class="tab_data2" cellpadding="0" cellspacing='0'>
					<tr><td>表名:</td><td><input id="hr_tablename" type="text"><span><font id="hr_tablenameSpan" color="red"></font></span><input id="hr_id" type="hidden"></td></tr>
					<tr><td>数据表名:</td><td><input id="hr_tabledataname" type="text"><span><font id="hr_tabledatanameSpan" color="red"></font></span></td></tr>
					<tr><td>所属类型:</td><td><input type="radio" id="jyb_radio" name="radio" value="0" > 教育部&nbsp;<input id="jw_radio" name="radio" type="radio" value="1"> 教委  <span><font id="radioSpan" color="red"></font></span></td></tr>
					<tr><td>是否必须:</td><td><input type="radio" id="is_must" name="radio2" value="0" > 是&nbsp;<input type="radio" id="is_must2" name="radio2" value="1" > 不是 <span><font id="radio2Span" color="red"></font></span></td></tr>
					<tr><td>分类:</td><td>
						<select id="hr_categoryid">
							<option value="" selected="selected">---请选择分类---</option>
							<c:forEach items="${categoryList}" var="val">
								<option value="${val.id}">${val.categoryName}</option>
							</c:forEach>
						</select>&nbsp;<a href="javascript:void(0)" onclick="showOrHideIndexDetailDiv('compileCategory','')">编辑分类</a> <span><font id="hr_categoryidSpan" color="red"></font></span></td></tr>
					<tr><td>是否原始表:</td><td><input type="radio" id="is_original" name="radio3" value="0" > 原始表&nbsp;<input type="radio" id="is_original2" name="radio3" value="1" > 衍生表 <span><font id="radio3Span" color="red"></font></span></td></tr>
					<tr><td>是否统计表:</td><td><input type="radio" id="is_only_one" name="radio4" value="0" > 是&nbsp;<input type="radio" id="is_only_one2" name="radio4" value="1" > 不是 <span><font id="radio4Span" color="red"></font></span></td></tr>
					<tr><td>备注:</td><td><input id="hr_remark" type="text"></td></tr>
					<tr><td></td><td><a id="addSaveA" href='javascript:void(0)' style="display: none;" onclick="save();">新增</a><a id="updateA" href='javascript:void(0)' style="display: none;" onclick="update(this)">修改</a></td></tr>
				</table>
			</center>
		</form>
	</div>
	<div id="compileCategory" class="add_show2">
		<div class="id_title" style="margin-bottom: 10px;">
  			<label>编辑分类</label>
			<a class="close_btn" onclick="showOrHideIndexDetailDiv('compileCategory','');" title="关闭窗口" href="javascript:void(0)">×</a>
	  	</div>
	  	<table style="margin: 15px 0px;">
			<tbody>
				<tr >
					<td>
					</td>
					<td align="right">
						<a href="javascript:void(0)" onclick="addCategoryShow();">
							<img src="/audit/images/addnew.png" border="0"></a>
						<a href="javascript:void(0)" onclick="" style="display:inline-block;padding-right:5px;">
							<img src="/audit/images/deletept.png" style="margin-left:10px;border:0px;">
						</a>
					</td>
				</tr>
			</tbody>
		</table>
		
			<div id="addCategoryDiv" style="display:none" class="add_div">
				<span style="font-size: 18px">添加分类</span>
				<div id="addCategory_treeDiv" class="dropdown tendina">
					
				</div>
				<div id='rightMenu' class='rightMenu'>
	 		
				    <ul class='opertion' id='opertion'>
				    	 <!-- <li>关注指标</li>
					     <li>取消关注</li> -->
				    </ul>
				</div>
			</div>
			
			<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;display :none">
					<table class="tab_data" cellpadding="0" cellspacing='0'>
						<thead>
							<tr>
								<td>序号</td>
								<td>父级代码</td>
								<td>分类名</td>
								<td>所属类型</td>
								<td>备注</td>
								<td>操作</td>
							</tr>
						</thead>
						<tbody>
						<c:forEach items="${categoryList}" var="var">
							<tr>
								<td>${var.id}</td>
								<td>${var.parentId}</td>
								<td>${var.categoryName}</td>
								<td>${var.isUse}</td>
								<td>${var.remark}</td>
								<td>操作</td>
							</tr>
						</c:forEach>
						</tbody>
				</table>
			</div>
	</div>
  </body>
</html>
