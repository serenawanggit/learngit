<%@ page language="java" import="com.zenith.tqcc.util.Common" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
// context比basePath少了一个"/"
String context = Common.TQCC_SERVER_NAME;
String dlyzserver = Common.DLYZ_SERVER_NAME;
String chartserver = Common.CHART_SERVER_NAME;
String basePath = context+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="TqccName" value="<%=Common.TITLE%>"/>
<c:set var="tqccCtx" value="<%=context %>" />

<input type="hidden" id="servUrl" value="${tqccCtx}" />
<input type="hidden" id="dlyzserver" value="<%=dlyzserver%>">
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<META HTTP-EQUIV="expires" CONTENT="Wed, 26 Feb 1997 08:21:57 GMT"> 
<meta name="author" content="${tqccCtx}" />
<%-- 公共css --%>
<link href="<%=basePath %>css/main.css" type="text/css"  rel="stylesheet" />
<%-- jquery --%>
<script type="text/javascript" src="<%=basePath %>js/jquery.js"></script>
<%-- 工具 --%>
<script type="text/javascript" src="<%=basePath %>js/common.js"></script>
<!-- 菜单操作权限  -->
<script type="text/javascript" src="<%=basePath %>js/permission/userMenuOperation.js"></script>