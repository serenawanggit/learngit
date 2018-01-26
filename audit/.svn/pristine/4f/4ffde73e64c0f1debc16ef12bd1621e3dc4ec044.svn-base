<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML >
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>现场考察报告报告预览</title>
<style type="text/css">
body, html{
	width: 100%;height: 100%;margin:0;background-color:#F7F7F7;
	font: 12px  Arial, Lucida Grande, Tahoma, sans-serif;
}
</style>
<script type="text/javascript" src="<%=basePath %>/js/majorEvaluation/jquery-1.7.2.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/majorEvaluation/siteReportShow.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body>
<input type="hidden" id="accessSpecialtyId" value="${accessSpecialtyId}"/>
<input type="hidden" id="isExport" value="${isExport}"/>
<form action="/audit/siteCheck/download.do" method="post" id="download">
	<input type="hidden" value="" name="fileInfo" id="fileInfo">
</form>

<table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
	
    <tr style="background-color:#2E8AE6;background-image:url(images/banner.png);background-position:center;background-repeat:no-repeat;">
        <!--问卷内容显示区域开始-->
        <td style="width:100%;height:206px;" align="center" valign="top">&nbsp;</td>
        <!--问卷内容显示区域结束-->
    </tr>   
                
	<tr>
    	<td align="center">
        	<table cellpadding="0" cellspacing="0" style="width:960px;margin-top:0px;border:#DADADA 1px solid;background-color:#FFF;border-top:0px;">
            	<tr>
                	<!--问卷内容显示区域开始-->
                    <td style="width:960px;" align="center" valign="top">
                    	<div id="wenjuanbasediv" style="width:960px;"></div>
                    </td>
                    <!--问卷内容显示区域结束-->
                </tr>
        	
          	 	<tr>
                    <td style="width:960px;" valign="top" align="center">
                    	<div id="wenjuancontentdiv" style="width:960px;min-height:500px;padding:20px;">
                    	<div style="width:800px;overflow-x:hidden;">
						
						<table style="width:800px;background-color:#FFFFFF;" cellpadding="0" cellspacing="0">
							<tbody id="contentList">
								
							</tbody>
						</table>
                    	</div>
                    </td>	
                </tr> 
                
            </table>
        </td>
    </tr>
    <tr><td align="center" style="height:100px;">&nbsp;</td></tr>
</table>
<div id="mulushowdivid" style="border: 1px solid rgb(218, 218, 218); position: fixed; top: 338px; right: 6px; height: 240px; width: 140px; z-index: 2000; background-color: rgb(255, 255, 255);">
<table style="width:100%;background-color:#FFFFFF;" cellpadding="0" cellspacing="0" border="0">
	<tbody>
	<tr><td colspan="2" valign="top" align="left" style="background-color:#FFFFFF;">
	<div style="width:140px;height:240px;overflow-x:hidden;overflow-y:auto;">
	<table style="width:140px;background-color:#FFFFFF;padding-top:15px;" cellpadding="0" cellspacing="0">
	<tbody id="maodianList">
		<tr>
			<td align="center" style="padding:5px;border-bottom:#F1F1F1 1px dotted;">
				<a href="" style="display:inline-block;width:100px;height:;line-height:;color:#CCCCCC;text-decoration:none;text-align:left;">首页</a>
			</td>
		</tr>
	</tbody>
	</table>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<script type="text/javascript">

$(document).ready(function () {
validateLogin();
	getReport();
});

</script>
</body>
</html>