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
<input type="hidden" id="gjbs" value="g424"/>
<input type="hidden" id="isjc" value="1"/>
<input type="hidden" id="gjname" value="在校生分年龄情况"/>
<input type="hidden" id="inputWid" value="2-2-2-2-2-2-2-2-2-2-2-2-2-2-2-2" />
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
				<input type="hidden" id="objclass" name="objclass" value="AS_GJ_XSNLQK" />
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
				<td colspan="18" class="Gj_tab_title">在校生分年龄情况</td>
			</tr>
			<tr>
				<td colspan="17" class="Gj_tab_title3_left" style="border-right: 0px;">
				高基321
				</td>
				<td colspan="1" class="Gj_tab_title3_left" style="border-left: 0px;" >
				单位：人
				</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td> </td>
				<td>编号</td>
				<td>合计</td>
				<td>17岁及以下</td>
				<td>18岁</td>
				<td>19岁</td>
				<td>20岁</td>
				<td>21岁</td>
				<td>22岁</td>
				<td>23岁</td>
				<td>24岁</td>
				<td>25岁</td>
				<td>26岁</td>
				<td>27岁</td>
				<td>28岁</td>
				<td>29岁</td>
				<td>30岁</td>
				<td>31岁及以上</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td>甲</td>
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
				<td>11</td>
				<td>12</td>
				<td>13</td>
				<td>14</td>
				<td>15</td>
				<td>16</td>
			</tr>
			<tr id="1tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">总 计</td>
				<td class="Gj_tab_title3">1</td>
			</tr>
			<tr id="2tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">2</td>
			</tr>
			<tr id="3tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">普通专科生</td>
				<td class="Gj_tab_title3">3</td>
			</tr>
			<tr id="4tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">4</td>
			</tr>
			<tr id="5tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">普通本科生</td>
				<td class="Gj_tab_title3">5</td>
			</tr>
			<tr id="6tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">6</td>
			</tr>
			<tr id="7tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">成人专科生</td>
				<td class="Gj_tab_title3">7</td>
			</tr>
			<tr id="8tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">8</td>
			</tr>
			<tr id="9tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">成人本科生</td>
				<td class="Gj_tab_title3">9</td>
			</tr>
			<tr id="10tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">10</td>
			</tr>
			<tr id="11tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">网络专科生</td>
				<td class="Gj_tab_title3">11</td>
			</tr>
			<tr id="12tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">12</td>
			</tr>
			<tr id="13tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">网络本科生</td>
				<td class="Gj_tab_title3">13</td>
			</tr>
			<tr id="14tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">14</td>
			</tr>
			<tr id="15tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">硕士研究所</td>
				<td class="Gj_tab_title3">15</td>
			</tr>
			<tr id="16tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">16</td>
			</tr>
			<tr id="17tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">博士研究所</td>
				<td class="Gj_tab_title3">17</td>
			</tr>
			<tr id="18tr" class="Gj_tab_text" name="jctr">
				<td class="Gj_tab_title3">其中：女</td>
				<td class="Gj_tab_title3">18</td>
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