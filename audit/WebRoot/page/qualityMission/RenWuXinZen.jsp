<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>新增任务</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<style type="text/css">
html{width: 100%;height: 98%;margin:0;}
body{width: 100%;height: 100%;margin:0;border:none;
background-color:#FFFFFF;
/* background-repeat:repeat-x; */font-size:12px;
font-family:Arial, Helvetica, sans-serif;
<%-- background:url(<%=basePath %>/images/centerbk.png); --%>
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
}
a{
text-decoration:none;
}
</style>

<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<%-- <script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/addTask.js"></script> --%>
<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/Calendar.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body >
<input type="hidden" id="rwid" value="${rwid}"/> 
<!-- 右边显示 -->
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<div style="height:28px; margin-left: 10px; margin-top: 10px; ">
   		<span style='background-color:#568E59;display:inline-block;height:28px;line-height:28px;color:white;padding:0px 15px;'>任务管理 >> 新增任务</span>
	</div>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			
			<tr>
				<td style="height:60px;border:#DADADA 0px solid;border-bottom:0px;" colspan="2" align="left">
					<table style="width:100%;" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<form id="addForm" action="<%=basePath %>/zlrwController/addRw.do" method="post">
								<td  style="width: 32%;">
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
									任务名称：
									</label>
									<input id="rwTitle" name="zlrwmc" style="width:240px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" type="text">
								</td>
								<td style="width: 22%;">
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
									任务开始时间：
									</label>
									<input id="fbTime" name="startTime" onclick="SelectDate(this)" readonly="readonly" style="width:100px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" type="text">
								</td>
								<td style="width: 22%;">
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
									任务截止时间：
									</label>
									<input id="jzTime" name="endTime" onclick="SelectDate(this)" readonly="readonly" style="width:100px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" type="text">
									<input type="reset" style="display:none;" />
								</td>
								</form>
								<td align="right">
									<li style="list-style:none;">
										<input type="submit" onclick="addBotton()" value="保存" style="cursor:hand;color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;">
										<input type="submit" onclick="reduceBotton()" value="清空" style="cursor:hand;color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;">
									</li>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td colspan="2" style='height:200px;width: 100%'>
				<!-- 内容 -->
					<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;overflow: auto;">
					<input class="txtValue" type="hidden" name="name" value="" />
						<table id="rwxzTable" class='tablist' style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style=' height:30px; background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap="nowrap" style='width:5%;border-top:#DADADA 1px solid;' align='center'>排序</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>阶段任务开始时间</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>阶段任务结束时间</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>阶段任务指标</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>任务范围</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>参与部门</td>
										<td nowrap="nowrap" style='width:5%;border-top:#DADADA 1px solid;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
						</table>
			<tr>
				<table style='width:100%;display:none' cellpadding='0' id="pageTb" >
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:0px;'>
								
								<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='../../images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='../../images/pgicon-first.png;'"
										onmouseout="this.src='../../images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='../../images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-pre.png;'"
										onmouseout="this.src='../../images/pgicon-pre_press.png;'">
								<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/10页</span>
								<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
										src='../../images/pgicon-next_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-next.png;'"
										onmouseout="this.src='../../images/pgicon-next_press.png;'">
								<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
								line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
								<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
										src='../../images/pgicon-last_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-last.png'"
										onmouseout="this.src='../../images/pgicon-last_press.png'">
								</span>
								</td>
							</tr>
						</tbody>
					</table>
			</tr>
			<tr style=' height:30px;color:#333333;font-weight:bold;font-family:Arial, Helvetica, sans-serif;'>
				<td>
					<li style="margin-left: 10px;margin-bottom:10px;font-size: 12px;list-style: none;">任务执行人</li>
				</td>
			</tr>
			<tr>
				<td colspan="2" style='height:146px;width: 100%'>
				<!-- 内容 -->
					<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;overflow: auto;">
					<input class="txtValue" type="hidden" name="name" value="" />
						<table id="rwxzTable" class='tablist' style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style=' height:30px; background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap="nowrap" style='width:5%;border-top:#DADADA 1px solid;' align='center'>姓名</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>学院</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>专业</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>阶段任务状态</td>
										<td nowrap="nowrap" style='width:5%;border-top:#DADADA 1px solid;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
						</table>
					</div>
					
					
				</td>
			</tr>
			<tr>
				<table style='width:100%;display:none' cellpadding='0' id="pageTb">
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:0px;'>
								
								<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='../../images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='../../images/pgicon-first.png;'"
										onmouseout="this.src='../../images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='../../images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-pre.png;'"
										onmouseout="this.src='../../images/pgicon-pre_press.png;'">
								<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/10页</span>
								<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
										src='../../images/pgicon-next_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-next.png;'"
										onmouseout="this.src='../../images/pgicon-next_press.png;'">
								<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
								line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
								<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
										src='../../images/pgicon-last_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-last.png'"
										onmouseout="this.src='../../images/pgicon-last_press.png'">
								</span>
								</td>
							</tr>
						</tbody>
					</table>
			</tr>
		</table>
		</td>
	</tr>
</table>
</body>
<script type="text/javascript">
validateLogin();
var flag = false;
function addBotton(){
      var name= $("#rwTitle" ).val();
      if (name.length >50){
           alert( "任务名称过长,请简化" );
            return ;
     } else if (name == '' ){
           alert( "请输入任务名称" );
            return ;
     }
/*       var now= $("#now" ).val();
      var nowTime = new Date(parseInt(now,10)); */
     
      var start = $("#fbTime" ).val();
      if(start ==''){
      		alert( "请输入开始时间" );
           	return ;
      }
      var startTime = new Date(start);
      var end = $("#jzTime" ).val();
      if(end ==''){
      		alert( "请输入结束时间" );
           	return ;
      }
      var endTime = new Date(end);
     
      /*if(startTime < nowTime){
           alert("开始时间小于当前时间，请重新选择");
           return;
     }*/
     if (startTime > endTime){
           alert( "结束时间小于开始时间，请重新选择" );
            return ;
     }
     if(!flag){
     	$("#addForm").submit();
     	flag = true;
     }
}
function reduceBotton(){
    // $( ':input' ,'#addForm').not( ':button, :submit, :reset, :hidden').val( '').removeAttr( 'checked').removeAttr( 'selected');
     
      $("input[type=reset]").trigger("click");//触发reset按钮 } 
}


</script>

</html>