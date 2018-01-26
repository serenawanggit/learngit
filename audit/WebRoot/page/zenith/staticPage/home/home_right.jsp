<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
   <title>喆思教学-首页</title>
<link href="css/main.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/jquery-1.4.2.min.js"></script>
<script type="text/javascript">
validateLogin();
</script>
</head>

<body style="overflow:auto">
  <div class="box_tips">
  	<ul id="uldk">
    	
    	<!-- <li id="li_1">
    		<span class="title" id="tsp1"><i class="icon_red mg_top10 mg_r10"></i>
    		<a href="page/home/home_detail.jsp" target="conbar" >专任教师职称比例</a>
    		</span>
    		<span class="shuju" id="main1" style="height:200px;border:1px solid #ccc;padding:0px;"></span>
    	</li>
    	<li  id="li_2">
    		<span class="title" id="tsp2"><i class="icon_gree mg_top10 mg_r10"></i>
    		<a href="page/home/home_detail.jsp" target="conbar" >专任教师职称比例</a>
    		</span>
    		<span class="shuju" id="main2" style="height:200px;border:1px solid #ccc;padding:0px;"></span>
    	</li>
    	<li  id="li_3">
    		<span class="title" id="tsp3"><i class="icon_yellow mg_top10 mg_r10"></i>
    		<a href="page/home/home_detail.jsp" target="conbar" >专任教师职称比例</a>
    		</span>
    		<span class="shuju" id="main3" style="height:200px;border:1px solid #ccc;padding:0px;"></span>
    	</li>
    	<li  id="li_4">
    		<span class="title" id="tsp4"><i class="icon_red mg_top10 mg_r10"></i>
    		<a href="page/home/home_detail.jsp" target="conbar" >专任教师职称比例</a>
    		</span>
    		<span class="shuju" id="main4" style="height:200px;border:1px solid #ccc;padding:0px;"></span>
    	</li>
    	
    	<li  id="li_5">
    		<span class="title" id="tsp5"><i class="icon_yellow mg_top10 mg_r10"></i>
    		<a href="page/home/home_detail.jsp" target="conbar" >专任教师职称比例</a>
    		</span>
    		<span class="shuju" id="main5" style="height:200px;border:1px solid #ccc;padding:0px;"></span>
    	</li>
    	<li  id="li_6">
    		<span class="title" id="tsp6"><i class="icon_red mg_top10 mg_r10"></i>
    		<a href="page/home/home_detail.jsp" target="conbar" >专任教师职称比例</a>
    		</span>
    		<span class="shuju" id="main6" style="height:200px;border:1px solid #ccc;padding:0px;"></span>
    	</li>
    	<li  id="li_7">
    		<span class="title" id="tsp7"><i class="icon_gree mg_top10 mg_r10"></i>
    		<a href="page/home/home_detail.jsp" target="conbar" >专任教师职称比例</a>
    		</span>
    		<span class="shuju" id="main7" style="height:200px;border:1px solid #ccc;padding:0px;"></span>
    	</li>
    	<li  id="li_8">
    		<span class="title" id="tsp8"><i class="icon_red mg_top10 mg_r10"></i>
    		<a href="page/home/home_detail.jsp" target="conbar" >专任教师职称比例</a>
    		</span>
    		<span class="shuju" id="main8" style="height:200px;border:1px solid #ccc;padding:0px;"></span>
    	</li>
    	<li  id="li_9">
    		<span class="title" id="tsp9"><i class="icon_gree mg_top10 mg_r10"></i>
    		<a href="page/home/home_detail.jsp" target="conbar" >专任教师职称比例</a>
    		</span>
    		<span class="shuju" id="main9" style="height:200px;border:1px solid #ccc;padding:0px;"></span>
    	</li> -->
    </ul>
  </div>
 </body>
</html>
