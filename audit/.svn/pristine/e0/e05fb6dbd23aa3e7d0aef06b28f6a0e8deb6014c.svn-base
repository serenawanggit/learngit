<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
  <head>
    <base href="<%=basePath%>">
    
    <title>审核评估支撑材料</title>
    
	<!-- <meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page"> -->
	
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
     <link rel="stylesheet" href="././css/lookreport/lookreport.css" type="text/css"></link>
     <script src="<%=basePath%>js/jquery-1.9.1.min.js" type="text/javascript"></script>
     <script src="<%=basePath%>js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
     <link rel="stylesheet" type="text/css" href="<%=basePath%>/css/bootstrap.min.css" />
     <script type="text/javascript" src="/audit/layer/mobile/layer.js"></script>
	<link rel="stylesheet" href="/audit/layer/mobile/need/layer.css" type="text/css"></link>
	<script type="text/javascript" src="/audit/layer/layer.js"></script>
     
     <script type="text/javascript" src="/audit/FlexPaper/js/jquery.js"></script>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash.js"></script>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash_debug.js"></script>
    
     <script type="text/javascript">
/* 	$('#exampleModal').on('show.bs.modal', function(event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var recipient = button.data('whatever') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		modal.find('.modal-title').text('New message to ' + recipient)
		modal.find('.modal-body input').val(recipient)
	}) */
</script>
  <script type="text/javascript" src="<%=basePath%>/js/lookreport/lookreport.js"></script>
  <script type="text/javascript" src="../../js/lookreport/html5shiv.js"></script>
  <script type="text/javascript" src="../../js/lookreport/html5shiv.min.js"></script>
  <script type="text/javascript" src="../../js/lookreport/respond.min.js"></script>
  <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
  </head>
  <body>
  
    <div class="top">
       <div class="top_left">
       <img src="././img/lookreport/liye.png" style="margin-top: 7px;margin-left: 48px"></img></div>
       <div class="top_right">
         <ul>
            <li><img src="././img/lookreport/user.png"></img></li>
            <li>${usename}</li>
            <li style="margin-left: 20px"><img src="././img/lookreport/tuichu.png"></img></li>
            <li onclick="tuichu()" style="cursor: pointer;">注销</li>
            <li style="margin-left: 10px"><img src="/audit/img/lookreport/back.png" onclick="goback()" style="cursor: pointer;height:30px;"></img></li>
         </ul>
       </div>
    </div>
    <div class="main">
       <div class="main_left">
          <div class="main_left_top">
             <div class="main_left_top_left" ></div>
             <div  class="main_left_top_right" >
                <span  id="onename">定位与目标</span><input type="text" value="${id}" id="thisid" style="display: none;"/>
             </div>
          </div>
          <div class="main_left_conter" id="main_left_conter">
           <!--  <div><span>办学定位</span></div>
            <div><span>培养目标</span></div>
            <div><span>人才培养教育中心</span></div> -->
          </div>
          <div class="main_left_down" >
             <img src="././img/lookreport/back.png" onclick="goback()" style="cursor: pointer;" ></img>
          </div>
       </div>
       <div class="main_right">
             <div class="col-md-10 button-znj" style="padding-top: 5px" >
		               <ul class="nav nav-tabs nav-justified tab-znj" role="tablist"
							id="tabul">
						</ul>
		       </div>
		       
		       <div style="width:99%;height:800px;border:1px solid #F2F2F2;margin-top: 46px;margin-left: 15px; background-color: #F2F2F2">
				   <div style="height:40px;width:99%;margin-left: 15px; font-size: 14px" class="main_right_top">
				      <ul>
				         <li id="therename"></li>
				         <li><img src="././img/lookreport/diandian.png" style="margin-top: 5px"></img></li>
				      </ul>
				   </div>
				     <div role="tabpanel" class="tab-pane active" id="two" style="height:550px;width:98%;overflow-y:auto;margin-left: 10px">
							<table class="table table-bordered table-znj" id="fourtable">
							</table>
					 </div>	
			  </div>
       </div>
    </div>
    <form action="" method="post" style="display: none;" id="zcclDown">
    </form>
  </body>
</html>
