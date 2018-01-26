<%@ page language="java" import="audit.util.Common" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
// context比basePath少了一个"/"
String context = Common.AUDIT_SERVER;
String basePath = context+"/";
String tqccserver = Common.TQCC_SERVER;
String dlyzserver = Common.DLYZ_SERVER;
String chartserver = Common.AUDIT_SERVER;
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="chartCtx" value="<%=context %>" />
<input type="hidden" id="dlyzserver" value="<%=dlyzserver%>"/>
<input type="hidden" id="tqccserver" value="<%=tqccserver%>"/>
<input type="hidden" id="servUrl" value="<%=context %>" />

<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="Cache-Control" content="no-cache"/>
<meta http-equiv="expires" content="0"/>
<meta name="author" content="<%=context %>" />
<script type="text/javascript" src="<%=context %>/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="<%=basePath %>js/common.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<%@include file="/page/contextMenu.jsp" %>
