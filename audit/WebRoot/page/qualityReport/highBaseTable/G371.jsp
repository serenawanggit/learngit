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
<input type="hidden" id="gjbs" value="g371"/>
<input type="hidden" id="isjc" value="1"/>
<input type="hidden" id="gjname" value="外国留学生情况"/>
<input type="hidden" id="inputWid" value="2-2-2-2-2-2-2-2-2-2" />
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
				<option value="2015">2015</option>
			</select>
				<form id="eform" style="display:none" action="" method="post" enctype="multipart/form-data">
				<input type="file"  id="ef"  name="ef"/>
				<input type="hidden" id="objclass" name="objclass" value="AS_GJ_WLSQK" />
				<input type="button" id="sbtn"/>
			</form>
			<input type="button" onclick="importData()" value="导入数据" style="margin-left:550px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="javascript:showgjjc(1)" value="编辑数据" id="bjButton" style="margin-left:10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="javascript:saveEditGJB(1)" value="保存" id="bcButton" style="margin-left:10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="exportToExcel()" value="导出为Excel" id="dcButton" style="margin-left: 10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="returnreporti()" value="返回" style="margin-left: 10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
		</td>
	</tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table id="planTB" border="1px"  style='width:100%;border-collapse:collapse;'>
			<tr>
				<td colspan="13" class="Gj_tab_title">外国留学生情况</td>
			</tr>
			<tr>
				<td colspan="12" class="Gj_tab_title3_left" style="border-right: 0px;">
				高基371
				</td>
				<td colspan="1" class="Gj_tab_title3_right" style="border-left: 0px;" >
				单位：人、人次
				</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td colspan="2" rowspan="2"> </td>
				<td rowspan="2">编号</td>
				<td rowspan="2">毕（结）业生数</td>
				<td rowspan="2">授予学位数</td>
				<td colspan="2">招生数</td>
				<td colspan="6">在校生数</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td>计</td>
				<td>其中：春季招生</td>
				<td>合计</td>
				<td>第一年</td>
				<td>第二年</td>
				<td>第三年</td>
				<td>第四年</td>
				<td>第五年及以上</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td colspan="2">甲</td>
				<td>乙</td>
				<td>1</td>
				<td>2</td>
				<td>3</td>
				<td>4</td>
				<td>5</td>
				<td>6</td>
				<td>7</td>
				<td>8</td>
				<td>9</td>
				<td>10</td>
			</tr>
			<tr id="1tr" class="Gj_tab_text" name="jctr">
				<td colspan="2" class="Gj_tab_title3">总计</td>
				<td class="Gj_tab_title3">1</td>
			</tr>
			<tr id="2tr" class="Gj_tab_text" name="jctr">
				<td colspan="2" class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">2</td>
			</tr>
			<tr id="3tr" class="Gj_tab_text" name="jctr">
				<td rowspan="5" class="Gj_tab_title3">按学历分</td>
				<td class="Gj_tab_title3">小计</td>
				<td class="Gj_tab_title3">3</td>
			</tr>
			<tr id="4tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">专科</td>
				<td class="Gj_tab_title3">4</td>
			</tr>
			<tr id="5tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">本科</td>
				<td class="Gj_tab_title3">5</td>
			</tr>
			<tr id="6tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">硕士研究生</td>
				<td class="Gj_tab_title3">6</td>
			</tr>
			<tr id="7tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">博士研究生</td>
				<td class="Gj_tab_title3">7</td>
			</tr>
			<tr id="8tr" class="Gj_tab_text" name="jctr">
				<td colspan="2" class="Gj_tab_title3">培训</td>
				<td class="Gj_tab_title3">8</td>
			</tr>
			<tr id="9tr" class="Gj_tab_text" name="jctr">
				<td rowspan="6" class="Gj_tab_title3">按大洲分</td>
				<td class="Gj_tab_title3">亚洲</td>
				<td class="Gj_tab_title3">9</td>
			</tr>
			<tr id="10tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">非洲</td>
				<td class="Gj_tab_title3">10</td>
			</tr>
			<tr id="11tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">欧洲</td>
				<td class="Gj_tab_title3">11</td>
			</tr>
			<tr  id="12tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">北美洲</td>
				<td class="Gj_tab_title3">12</td>
			</tr>
			<tr id="13tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">南美洲</td>
				<td class="Gj_tab_title3">13</td>
			</tr>
			<tr id="14tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">大洋洲</td>
				<td class="Gj_tab_title3">14</td>
			</tr>
			<tr id="15tr" class="Gj_tab_text" name="jctr">
				<td rowspan="5" class="Gj_tab_title3">按经费来源分</td>
				<td class="Gj_tab_title3">国际组织资助</td>
				<td class="Gj_tab_title3">15</td>
			</tr>
			<tr id="16tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">中国政府资助</td>
				<td class="Gj_tab_title3">16</td>
			</tr>
			<tr id="17tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">本国政府资助</td>
				<td class="Gj_tab_title3">17</td>
			</tr>
			<tr id="18tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">学校政府资助</td>
				<td class="Gj_tab_title3">18</td>
			</tr>
			<tr id="19tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">自费</td>
				<td class="Gj_tab_title3">19</td>
			</tr>
		</table>
	</td>
	</tr>
</table>

<form action="" id="exportForm" method="post">
        <input type="hidden" id="tabValue" name="tabValue">
</form>
</body>
</html>