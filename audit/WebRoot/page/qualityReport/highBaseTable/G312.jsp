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
<title>高基表</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath%>/css/gjb.css" rel="stylesheet" type="text/css" />
<style type="text/css">
body, html{width: 100%;height: 100%;margin:0;border:none;
background-repeat:repeat-x;font-size:12px;
font-family:Arial, Helvetica, sans-serif;
background:url(<%=basePath %>/images/centerbk.png);
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
  
}
.hr1{ height:1px;border:none;border-top:1px solid #DADADA;}
</style>

<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/jquery.form.js"></script>
<script type="text/javascript" src="<%=basePath %>js/report/gjreport.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/exportExcel.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
</script>
</head>
<body>
<input type="hidden" id="pid" value="1234567"/>
<input type="hidden" id="gjbs" value="g312"/>
<input type="hidden" id="isjc" value="0"/>
<input type="hidden" id="gjname" value="普通本科分专业学生数"/>
<input type="hidden" id="inputWid" value="3-3-3-3-3-1-1-2-2-2-2-2-2-2-2-2-2-2-2-2" />
<!-- 右边显示 -->
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'><span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'><span id="topLable" style='display:inline-block;height:28px;line-height:28px;'>高基表列表</span></span></td><td style='height:40px;' align='right'>&nbsp;</td></tr>
	<tr><td colspan="2"><hr class="hr1"></td></tr>
	<tr>
		<td colspan="2" style="height: 40px;">
			<select id="year" onchange="changeYear()">
				<option value="2012">2012</option>
				<option value="2013">2013</option>
				<option value="2014" selected="selected">2014</option>
				<option value="2015" >2015</option>
			</select>
			<form id="eform" style="display:none" action="" method="post" enctype="multipart/form-data">
				<input type="file"  id="ef"  name="ef"/>
				<input type="hidden" id="objclass" name="objclass" value="AS_GJ_PBFX" />
				<input type="button" id="sbtn"/>
			</form>
			<input type="button" onclick="importData()" value="导入数据" style="margin-left:550px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="javascript:showgj(1)" value="编辑数据" id="bjButton" style="margin-left:10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="javascript:saveEditGJB(0)" value="保存" id="bcButton" style="margin-left:10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="exportToExcel()" value="导出为Excel" id="dcButton" style="margin-left: 10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="returnreporti()" value="返回" style="margin-left: 10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
		</td>
	</tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table id="planTB" border="1px"  style='width:100%;border-collapse:collapse;'>
			<tr>
				<td colspan="20" class="Gj_tab_title">普通本科分专业学生数</td>
			</tr>
			<tr>
				<td colspan="19" class="Gj_tab_title3_left" style="border-right: 0px;">
				高基312
				</td>
				<td colspan="1" class="Gj_tab_title3_right" style="border-left: 0px;">
				单位：人
				</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td colspan="1" rowspan="3">学科</td>
				<td colspan="1" rowspan="3">专业分类</td>
				<td colspan="1" rowspan="3">专业名称</td>
				<td colspan="1" rowspan="3">自主专业名称</td>
				<td colspan="1" rowspan="3">专业代码</td>
				<td colspan="1" rowspan="3">是否师范专业</td>
				<td colspan="1" rowspan="3">年制</td>
				<td colspan="1" rowspan="3">毕业生数</td>
				<td colspan="1" rowspan="3">授予学位数</td>
				<td colspan="4">招生数</td>
				<td colspan="6">在校生数</td>
				<td colspan="1" rowspan="3">预计毕业生数</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td colspan="1" rowspan="2">计</td>
				<td colspan="3">其中:</td>
				<td colspan="1" rowspan="2">合计</td>
				<td colspan="1" rowspan="2">一年级</td>
				<td colspan="1" rowspan="2">二年级</td>
				<td colspan="1" rowspan="2">三年级</td>
				<td colspan="1" rowspan="2">四年级</td>
				<td colspan="1" rowspan="2">五年级及以上</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td colspan="1" >应届毕业生</td>
				<td colspan="1" >春季招生</td>
				<td colspan="1" >预科生转入</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td colspan="1" > </td>
				<td colspan="1" > </td>
				<td colspan="1" >甲</td>
				<td colspan="1" >乙</td>
				<td colspan="1" >丙</td>
				<td colspan="1" > </td>
				<td colspan="1" >丁</td>
				<td colspan="1" >1</td>
				<td colspan="1" >2</td>
				<td colspan="1" >3</td>
				<td colspan="1" >4</td>
				<td colspan="1" >5</td>
				<td colspan="1" >6</td>
				<td colspan="1" >7</td>
				<td colspan="1" >8</td>
				<td colspan="1" >9</td>
				<td colspan="1" >10</td>
				<td colspan="1" >11</td>
				<td colspan="1" >12</td>
				<td colspan="1" >13</td>
			</tr>
		</table>
	</td>
	</tr>
</table>
<div id="cus_ser" ><input type='button' value='新增' onclick='CreateTB()'></div>
<form action="" id="exportForm" method="post">
        <input type="hidden" id="tabValue" name="tabValue">
</form>

</body>
</html>