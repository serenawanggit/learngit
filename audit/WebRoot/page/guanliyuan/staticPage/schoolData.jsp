<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	
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
	href="${pageContext.request.contextPath }/page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/page/zenith/staticPage/css/page_0.css">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/page/lzrPopWindow/css/lzrwindow.css" />
	
<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath }/page/lzrPopWindow/js/lzrWindow.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/page/xueyuan/staticPage/js/page_4.js" ></script>	
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery.form.js" ></script>	
<script type="text/javascript" src="${pageContext.request.contextPath }/js/jquery.form.min.js" ></script>
<script type="text/javascript" src="/audit/commonjs/common1.js"></script>
<style type="text/css"></style>
<script type="text/javascript" src="/audit/FlexPaper/js/jquery.js"></script>
<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash.js"></script>
<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash_debug.js"></script>
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/base.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/inject.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
<script type="text/javascript" src="${pageContext.request.contextPath }/page/guanliyuan/staticPage/js/schoolData.js"></script>
   
   <style type="text/css">
		body{font:12px arial;color:#000;background:#fff;margin:0}
		#content{width:100%;color:#fff;float:left;margin:0px;padding:0px;}
		#content_inner{height:100%;background:#666;margin:0px;padding:0px;}
		#side{width:230px;height:100%;color:#fff;background:#666;float:left}
		.clear{clear:both}
		.fir_div{padding-left:30px;padding-top:10px;}
	</style>
	
	<style type="text/css">
		li{ list-style:none;width:106px; height:40px; }
		a{width:100%; height:40px; display:block;padding-left:40px;font-size:13px;  color:#333; text-decoration:none;text-align:left;}
		a:hover{width:100%; height:40px; display:block;padding-left:30px; font-size:13px; color:#333; text-decoration:none; border:1px solid #999;line-height:34px; border-right:none; }
	</style>
	
	<script type="text/javascript">
	//a   border:1px solid #ECF1F4; 
	
		$(function(){
			//alert(123);
			$("#ss").attr("style","background-color:white;border:1px solid #999;border-right:none; width:100%;");
			$(".li").click(function(){
				//alert(1425);
				$(".li").attr("style","none");
				$(this).attr("style","background-color:white;border:1px solid #999;border-right:none; width:100%;");
			});
		});
	</script>
   
</head>

<body>

	</div>
	<div id="main_1" style="width:100%">
		<table style="width:100%;height:100%" border="1">
			<tr>
				<td width="300px">
					<div style="width:100%;height:755px;overflow-y:scroll;scrollbar-face-color: #CDCDCD;background:#E6E6E6;">
						<ul id="tab1" style="width:100%;background:#E6E6E6;">
							<li id="fir"  style="width:100%"><a id="ss" href="basic.html" class="li" target="cont">个人中心</a></li> 
	                  	 	<li style="width:100%" ><a href="fabiao.html" class="li" target="cont">发表帖子</a></li>             
	                 	    <li  style="width:100%"><a href="tiezi.html" class="li" target="cont">我的帖子</a></li>
	                 		<li  style="width:100%"><a href="myhuifu.html" class="li" target="cont">我的回复</a></li>
		                 	<li  style="width:100%"><a href="tuijiantiezi.html" class="li" target="cont">推荐帖子</a></li>
		                 	<li style="width:100%" ><a href="zuixintiezi.html" class="li" target="cont">最新帖子</a></li>
		                 	<li style="width:100%" ><a href="updatebasicdata.html" class="li" target="cont">修改资料</a></li>
						</ul>
						<!-- <table id="tab1" style="width:100%;">
							<tr style="height:40px;background:#E7E7E7;"><td><div style="margin-left:30px"><a href='javascript:void(0);' onclick='showzccl(111)'>2017机械工程支撑材料</a></div></td></tr>
							<tr style="height:40px"><td><div style="margin-left:30px"><a href='' onclick='showzccl(111)'>2017机械工程支撑材料</a></div></td></tr>
							<tr style="height:40px;background:#E7E7E7;"><td><div style="margin-left:30px"><a href='javascript:void(0);' onclick='showzccl(111)'>2017机械工程支撑材料</a></div></td></tr>
							<tr style="height:40px"><td><div style="margin-left:30px"><a href='' onclick='showzccl(111)'>2017机械工程支撑材料</a></div></td></tr>
							<tr style="height:40px;background:#E7E7E7;"><td><div style="margin-left:30px"><a href='javascript:void(0);' onclick='showzccl(111)'>2017机械工程支撑材料</a></div></td></tr>
							<tr style="height:40px"><td><div style="margin-left:30px"><a href='' onclick='showzccl(111)'>2017机械工程支撑材料</a></div></td></tr>
							<tr style="height:40px;background:#E7E7E7;"><td><div style="margin-left:30px"><a href='javascript:void(0);' onclick='showzccl(111)'>2017机械工程支撑材料</a></div></td></tr>
							<tr style="height:40px"><td><div style="margin-left:30px"><a href='' onclick='showzccl(111)'>2017机械工程支撑材料</a></div></td></tr>
						</table> -->
					</div>
				</td>
				<td align="center">
				<div style="width:100%;height:755px;background:#E6E6E6;overflow-y:scroll;">
					<table id="school_tab" style="height:100%;width:100%;text-align:center;" border="1">
						
					</table>
				</div></td>
			</tr>
		</table>
	</div>
</body>
</html>
