<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page contentType="text/html; charset=UTF-8"%>
<%@taglib uri="/WEB-INF/struts-tags.tld" prefix="s"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<%@include file="/page/common/lib.jsp" %>
<title>喆思教学-指标详细</title>
<link href="${chartCtx}/css/main.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${chartCtx}/js/jquery.js"></script>
<script src="${chartCtx}/js/echarts/echarts-all.js"></script>
<script type="text/javascript" src="${chartCtx}/js/home/showdetail.js"></script>
</head>

<body style="overflow:auto">
<input type="hidden" value="${asm.measureId}" id="mid" />
<input type="hidden" value="${asm.measureName}" id="mName" />
<input type="hidden" value="" id="oflag" />
<div class="nav_con"><a href="${chartCtx}/page/home/home.jsp" target="conbar">首页</a> &gt; ${asm.measureName }</div>
<div class="conbox">
  <div class="tabbox">
  	<ul id="organlist">
    	${htmlstr}
    </ul>
  </div>
  <div class="fenge"><img src="${chartCtx}/images/jiaotou.png" width="40" height="20" />
  	
  </div>
  <div class="box_tips" id="tbsdiv">
  	<div style="height:24px;">
	  <span class="f_r" style="line-height:24px;width:60px;">
	  	<a class="shuaxin_btn f_r" href="javascript:reflush()" id="reflush">刷新</a>
	  </span>
	  <span class="f_r" style="line-height:24px; width:90px;">
	  	<select style="height:24px; line-height:24px; min-width:80px;" id="syear2">
	  		${sdatestr}
	  	</select>
	  </span>
	  <span class="f_r" style="margin-bottom:20px;width:90px;">
	  	<select style="height:24px; line-height:24px; min-width:80px;" id="syear1">
	  		${sdatebstr}
	  	</select>
	  </span>
	   <span class="f_r" style="line-height:24px; width:30px;">时间:</span>
  </div>
  <table width="100%" border="0" id="showgltable">
  	<tr>
	    <td colspan="3">
	    	<div class="box_con">
	      		<div class="title"><span class="box30 mg_l10" id="mname">${asm.measureName}</span></div>
	      		<div class="shuju01">
	      			<span class="f_l">总数：</span>
	      			<span class="f_l shuzi" id="${asm.measureId}count"></span>
	      			<div id="warea" class="f_r" style="width: 500px;height: 180px;">
	      		<!--  <span class="f_r"><img src="${chartCtx}/images/shuju02.png"  height="100" /></span>-->
	     			</div>
	      		</div>
	    	</div>
	    </td>
    </tr>
   <!-- <tr id="showgl0">
    </tr>-->
</table>

<table width="100%" border="0" id="showt">
  	<tr id="showgl0">
	    
    </tr>
</table>

<!--<ul id="showgl0">
</ul>-->

  </div>
</div>

<script>
$('.tabbox ul li a').click(function(){
  $(this).parent().addClass('on').siblings().removeClass('on');
});
</script>

</body>
</html>