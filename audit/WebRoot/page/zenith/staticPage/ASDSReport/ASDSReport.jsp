<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" />
  	<link rel="stylesheet" href="${chartCtx }/tendina-master/demo/css/demo.css" type="text/css"></link>
  	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
  
  	<script type="text/javascript" src="${chartCtx }/js/jquery-1.11.0.min.js"></script>
  	<script type="text/javascript" src="${chartCtx }/tendina-master/dist/tendina.js"></script>
  	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReport.js"></script>
    <style type="text/css">
    	.class1{
    		background-color: #4A8BC2;
    	}
    	.class2{
    		background-color: #F1F1F1;
    	}
    	#asdsNav input{
    		cursor: pointer;
    	}
    </style>
   </head>
  
  <body>
  	<div class="box">
  		<!-- 左侧菜单 -->
  		<div class="asds_left" >
  		
  			<ul id="asdsNav" class="dropdown" style=" width:250px;margin-top:-10px;">
  				<!-- <div id="muban2" class="class1" style="width:120px;height:30px;" onclick="selectMuban(2)">模板2.0</div>
  				<div id="muban3" class="class2" style="width:120px;height:30px;margin-left:-5px;" onclick="selectMuban(3)">模板3.0</div> -->
  				<input id="muban2" class="class1" type="button" value="模板2.0" style="width:120px;height:30px;" onclick="selectMuban(2)">
  				<input id="muban3" class="class2" type="button" value="模板3.0" style="width:120px;height:30px;margin-left:-5px;" onclick="selectMuban(3)">
		  		<div id="content">
		  			
		  		</div>
  			</ul>
  		
<!-- 		      <li> -->
<!-- 		        <a id="deepest" class="" href="#">Snacks</a> -->
<!-- 		        <ul> -->
<!-- 		          <li><a class="" href="#">Snickers</a></li> -->
<!-- 		        </ul> -->
<!-- 		      </li> -->
<!-- 		      <li> -->
<!-- 		        <a class="" href="#">Drinks</a> -->
<!-- 		        <ul> -->
<!-- 		          <li><a class="" href="#">Coca Cola111</a></li> -->
<!-- 		          <li><a class="" href="#">Fanta222</a></li> -->
<!-- 		          <li><a class="" href="#">Cocktails333</a> -->
<!-- 		            <ul> -->
<!-- 		              <li><a id="" href="#">Long Island Ice Tea</a></li> -->
<!-- 		              <li><a class="" href="#">Gin Lemon</a> -->
<!-- 		              </li> -->
<!-- 		              <li><a class="" href="#">Non alcoholic</a> -->
<!-- 		                <ul> -->
<!-- 		                  <li><a href="#">With Milk</a> -->
<!-- 		                    <ul> -->
<!-- 		                      <li><a href="#">Almond Milk Cooler</a></li> -->
<!-- 		                      <li><a href="#">Banana Milk Shake</a></li> -->
<!-- 		                    </ul> -->
<!-- 		                  </li> -->
<!-- 		                  <li><a href="#">Almond Iced Coffee</a></li> -->
<!-- 		                </ul> -->
<!-- 		              </li> -->
<!-- 		            </ul> -->
<!-- 		          </li> -->
<!-- 		        </ul> -->
<!-- 		      </li> -->
<!-- 		      <li> -->
<!-- 		        <a class="" href="#">Mea321t</a> -->
<!-- 		        <ul> -->
<!-- 		          <li><a class="" href="#">Bee321f</a></li> -->
<!-- 		          <li><a class="" href="#">321</a></li> -->
<!-- 		        </ul> -->
<!-- 		      </li> -->
		    
  		</div>
  		<!-- 右侧内容 -->
  		<div class="asds_right" style=" height:100%">
  			<iframe id="tempIframe" frameborder="0" scrolling="auto" name="hello" src="${chartCtx}/page/ASDSReport/ASDS_table2-1.jsp"></iframe>
  		</div>
  	</div>
  </body>
</html>
