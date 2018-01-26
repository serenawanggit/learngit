<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>数据补录任务</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath%>/css/ods/dataMakeUpTask.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/ods/dataMakeUpTask.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body >
<!-- 右边显示 -->
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'>
		<span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
			<span style='display:inline-block;height:28px;line-height:28px;'>
			数据补录任务
			</span>
		</span>
		</td>
		<td style='height:40px;' align='right'>&nbsp;</td>
	</tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			<tr>
				<td style="height:60px;border:#DADADA 0px solid;border-bottom:0px;" colspan="2" align="left">
					<table style="width:100%;" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<td>
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
										年份
									</label>
									<select id="year" style="width:120px" onchange="getPage()">
										<option value="">--请选择年份--</option>
									</select>
									
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
										学院
									</label>
									<select id="org" style="width:200px" onchange="getPage()">
										<option value="">--请选择学院--</option>
									</select>
									<a href="#" onclick="findPageByMC();">
										<img src="../../images/searchbtn.png" style="vertical-align:middle;height:24px;line-height:24px;border:0px;">
									</a>
								</td>
								<td align="right">
									<a href="#" onclick="showDiaLog();">
										<img src="../../images/addnew.png" style="vertical-align:middle;height:24px;line-height:24px;border:0px;">
									</a>
							  </td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td colspan="2" style='height:390px;width: 100%'>
				<!-- 内容 -->
					<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;">
						<table id="rwTable" style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<!-- <td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">选择</td>
										 --><td nowrap="nowrap" style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>任务年份</td>
										<td nowrap="nowrap" style='width:200px;border-top:#DADADA 1px solid;' align='center'>学院</td>
										<td nowrap="nowrap" style='width:110px;border-top:#DADADA 1px solid;' align='center'>模板</td>
										<td nowrap="nowrap" style='width:110px;border-top:#DADADA 1px solid;' align='center'>补录人员</td>
										<td nowrap="nowrap" style='width:110px;border-top:#DADADA 1px solid;' align='center'>院级审核</td>
										<td nowrap="nowrap" style='width:110px;border-top:#DADADA 1px solid;' align='center'>校级审核</td>
										<td nowrap="nowrap" style='width:110px;border-top:#DADADA 1px solid;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody id="taskList">
									<!-- <tr style='background-color:#FFF;color:#333333;font-size:12px;'>
										<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">
											<input type="checkbox" name="ckBut"/>
										</td>
										<td nowrap="nowrap" style='width:160px;height:40px;border-top:#DADADA 1px solid;' align='center'>2014</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>化工学院</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>刘备</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>孙权</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>曹操</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
											<a href="#" onclick="editedudptplanthml(this);" value="1">
											<img src="../../images/bj_icon.png" style="vertical-align:middle;" border="0"></a>
											<a href="#" onclick="deleteRwxx(this);" value="10" style="margin-left: 10px;">
											<img src="../../images/sc_icon.png" style="vertical-align:middle;border:0px;"></a>
										</td>
									</tr> -->
								</tbody>
						</table>
						
					</div>
					<table style='width:100%;' cellpadding='0' id="pageTb">
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								<input type="hidden" id="currentPage" value="1"/>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:40px;'>
								<img value='1_"+json.totalPage+"' onclick='jumpToFirstPage();'
									src='../../images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='../../images/pgicon-first.png;'"
										onmouseout="this.src='../../images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='jumpToPreviousPage();'
									src='../../images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-pre.png;'"
										onmouseout="this.src='../../images/pgicon-pre_press.png;'">
								<span id="pageNumer" style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/1页</span>
								<img value='3_"+json.totalPage+"' onclick='jumpToNextPage();'
										src='../../images/pgicon-next_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-next.png;'"
										onmouseout="this.src='../../images/pgicon-next_press.png;'">
								<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
								line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
								<img value='4_"+json.totalPage+"' onclick='jumpToPage();'
										src='../../images/pgicon-last_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-last.png'"
										onmouseout="this.src='../../images/pgicon-last_press.png'">
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
  		<div class="div_cm" id="addDialog">
      		<p class="close"><a href="#" onclick="closeDialog();">关闭</a></p> 
      		<div style="margin-left: 50px;margin-top: 50px;font-size: 12px;">
      			<ul>
      				<li style="margin-bottom: 12px;"><span style="margin-left: 24px;">年份：</span>
      					<select id="addYear">
      						<option value=''>--请选择年份--</option>
      					</select>
      				</li>
      				<li style="margin-bottom: 12px;"><span style="margin-left: 27px;">学院：</span>
      					<select id="addOrg1" style="width:111px" onchange="getUser('addOrg1','addOrg1')">
      						<option value=''>--请选择学院--</option>
      					</select>
      				</li>
      				<li style="margin-bottom: 12px;"><span style="margin-left: 27px;">模板：</span>
      					<select id="addTemp" style="width:111px">
      						<option value=''>--请选择模板--</option>
      					</select>
      				</li>
      				<li style="margin-bottom: 12px;"><span>补录人员：</span>
      					<select id="addUser2" style="width:111px">
      						<option value=''>--请选择人员--</option>
      					</select>
      				</li>
      				<li style="margin-bottom: 12px;"><span>院级审核：</span>
      					<select id="addUser3" style="width:111px">
      						<option value=''>--请选择人员--</option>
      					</select>
      				</li>
      				<li style="margin-bottom: 12px;"><span>校级审核：</span>
      					<select id="addOrg4" onchange="getUser('addOrg4','addUser4')" style="width:111px">
      						<option value=''>--请选择学院--</option>
      					</select>
      					<select id="addUser4">
      						<option value=''>--请选择人员--</option>
      					</select>
      				</li>
      				<li class="center-li-two" style="margin-top: 50px;margin-left: 10px;width: 233px;">
      					<input type="button" class="search_input" style="width: 105px;margin-left: 0px;  height: 26px;margin-right: 15px;" onclick="addTask()" value="确定" />
      					<input type="button" class="search_input" style="width: 105px;margin-left: 0px;  height: 26px;" onclick="closeDialog()" value="取消" />
                   </li>
      			</ul>
      		</div>
        </div>
        <div class="div_cm" id="editDialog">
      		<p class="close"><a href="#" onclick="closeEditDialog();">关闭</a></p> 
      		<div style="margin-left: 50px;margin-top: 50px;font-size: 12px;">
      			<ul>
      				<li style="margin-bottom: 12px;"><span style="margin-left: 24px;">年份：</span>
      					<select id="editYear">
      					</select>
      				</li>
      				<li style="margin-bottom: 12px;"><span style="margin-left: 24px;">学院：</span>
      					<select id="editOrg1" style="width:111px">
      					</select>
      					<input type="hidden" id="editOrg"/>
      				</li>
      				<li style="margin-bottom: 12px;"><span style="margin-left: 24px;">模板：</span>
      					<select id="editTemp" style="width:111px">
      					</select>
      				</li>
      				<li style="margin-bottom: 12px;"><span>补录人员：</span>
      					<select id="editUser2">
      						<option value=''>--请选择人员--</option>
      					</select>
      				</li>
      				<li style="margin-bottom: 12px;"><span>院级审核：</span>
      					<select id="editUser3">
      						<option value=''>--请选择人员--</option>
      					</select>
      				</li>
      				<li style="margin-bottom: 12px;"><span>校级审核：</span>
      					<select id="editOrg4" onchange="getUser('editOrg4','editUser4')" style="width:111px">
      						<option value=''>--请选择学院--</option>
      					</select>
      					<select id="editUser4">
      						<option value=''>--请选择人员--</option>
      					</select>
      				</li>
      				<li class="center-li-two" style="margin-top: 50px;margin-left: 10px;width: 233px;">
      					<input type="hidden" id="editId"/>
      					<input type="button" class="search_input" style="width: 105px;margin-left: 0px;  height: 26px;margin-right: 15px;" onclick="editTask()" value="确定" />
      					<input type="button" class="search_input" style="width: 105px;margin-left: 0px;  height: 26px;" onclick="closeEditDialog()" value="取消" />
                   </li>
      			</ul>
      		</div>
        </div>
        <div class="black_overlay" id="overlay"></div>
        <script type="text/javascript">
        $(document).ready(function () {
            validateLogin();
        	getYearAndOrg();
        });
        </script>
</body>
</html>