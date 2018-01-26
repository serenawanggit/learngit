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
<input type="hidden" id="gjname" value="高等教育学校（机构）统计报表"/>
<input type="hidden" id="inputWid" value="6-2-6" />
<!-- 右边显示 -->
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'><span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'><span id="topLable" style='display:inline-block;height:28px;line-height:28px;'>高基表列表</span></span></td><td style='height:40px;' align='right'>&nbsp;</td></tr>
	<tr><td colspan="2"><hr class="hr1"></td></tr>
	<tr>
		<td colspan="2" style="height: 40px;">
			<select  id="year" onchange="changeYear()">
				<option value="2012">2012</option>
				<option value="2013">2013</option>
				<option value="2014" selected="selected">2014</option>
				<option value="2015" >2015</option>
			</select>
			<form id="eform" style="display:none" action="" method="post" enctype="multipart/form-data">
				<input type="file"  id="ef"  name="ef"/>
				<input type="hidden" id="objclass" name="objclass" value="AS_GJ_GJXJTB" />
				<input type="button" id="sbtn"/>
			</form>
			<input type="button" onclick="javascript:showgjjc(1)" value="编辑数据" id="bjButton" style="margin-left:650px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="javascript:saveEditG111(1)" value="保存" id="bcButton" style="margin-left:700px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="exportToExcel()" value="导出为Excel" id="dcButton" style="margin-left: 10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
			<input type="button" onclick="returnreporti()" value="返回" style="margin-left: 10px;background-color: #4A8BC2;height: 25px;border: 0px;color: #FFF;"/>
		</td>
	</tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table id="planTB" border="1px"  style='width:100%;border-collapse:collapse;'>
			<tr>
				<td colspan="10" class="Gj_tab_title">高等教育学校（机构）统计报表</td>
			</tr>
			<tr>
				<td colspan="10" class="Gj_tab_title2">（20    /20    学年初）</td>
			</tr>
			<tr>
				<td colspan="10" class="Gj_tab_title3_fr_del_bottom" style="text-align: right;">
				制定机关：教   育   部
				</td>
			</tr>
			<tr>
				<td colspan="10" class="Gj_tab_title3_fr_del_tb" style="text-align: right;">
				批准机关：国 家 统 计 局
				</td>
			</tr>
			<tr>
				<td colspan="10" class="Gj_tab_title3_fr_del_top" style="text-align: right;">
				批准文号：国统制 【2013】78号
				</td>
			</tr>
			<tr>
				<td colspan="9" class="Gj_tab_title3_left" >
				高基111
				</td>
				<td colspan="1" class="Gj_tab_title3_right" >
				</td>
			</tr>
			<tr class="Gj_tab_title3">
				<td colspan="2">学校标识码</td>
				<td colspan="4">学校（机构）名称（章）</td>
				<td colspan="4">学校（机构）英文名称</td>
			</tr>
			<tr class="Gj_tab_text">
				<td colspan="2">4131011458</td>
				<td colspan="4">学校</td>
				<td colspan="4"></td>
			</tr>
			<tr class="Gj_tab_text">
				<td>续</td><td></td><td></td><td></td><td></td>
				<td></td><td></td><td></td><td></td><td></td>
			</tr>
			<!-- 第二行 -->
			<tr class="Gj_tab_title3">
				<td colspan="2"></td>
				<td colspan="3">学校（机构）地址</td>
				<td colspan="1">学校（机构）驻地城乡类型</td>
				<td colspan="4">学校（机构）属地管理教育行政部门</td>
			</tr>
			<tr class="Gj_tab_text">
				<td class="Gj_tab_title3" colspan="2">名称</td>
				<td colspan="3">上海市浦东新区南汇新城镇临港家园社区居委会</td>
				<td colspan="1">*</td>
				<td colspan="4">上海市教育委员会</td>
			</tr>
			<tr class="Gj_tab_text">
				<td class="Gj_tab_title3" colspan="2">代码</td>
				<td colspan="3">310115145001</td>
				<td colspan="1">*</td>
				<td colspan="4">310000000000</td>
			</tr>
			<tr class="Gj_tab_text">
				<td>续</td><td></td><td></td><td></td><td></td>
				<td></td><td></td><td></td><td></td><td></td>
			</tr>
			<!-- 第三行 -->
			<tr class="Gj_tab_title3">
				<td colspan="2"></td>
				<td colspan="1">学校（机构）办学类型</td>
				<td colspan="2">学校（机构）举办者</td>
				<td colspan="1">学校（机构）性质类别</td>
				<td colspan="2">规定年制</td>
				<td colspan="2">规定入学年龄</td>
			</tr>
			<tr class="Gj_tab_text">
				<td colspan="2">名称</td>
				<td colspan="1">学院</td>
				<td colspan="2">省级教育部门</td>
				<td colspan="1">理工院校</td>
				<td colspan="1">小学</td>
				<td colspan="1">*</td>
				<td colspan="1">小学</td>
				<td colspan="1">*</td>
			</tr>
			<tr class="Gj_tab_text">
				<td colspan="2">代码</td>
				<td colspan="1">412</td>
				<td colspan="2">811</td>
				<td colspan="1">2</td>
				<td colspan="1">初中</td>
				<td colspan="1">*</td>
				<td colspan="1">初中</td>
				<td colspan="1">*</td>
			</tr>
			<tr class="Gj_tab_text">
				<td>续</td><td></td><td></td><td></td><td></td>
				<td></td><td></td><td></td><td></td><td></td>
			</tr>
			
			<!-- 第四行 -->
			<tr>
				<td colspan="2" class="Gj_tab_title3">邮政编码</td>
				<td colspan="1" class="Gj_tab_text">201306</td>
				<td colspan="2" class="Gj_tab_title3">校园（局域）网域名</td>
				<td colspan="1" class="Gj_tab_text">www.sdju.edu.cn</td>
				<td colspan="1" class="Gj_tab_title3">校（园）长（签章）</td>
				<td colspan="1" class="Gj_tab_title3">填表人</td>
				<td colspan="2" class="Gj_tab_title3">学校（机构）所在地</td>
			</tr>
			<tr>
				<td colspan="2" class="Gj_tab_title3">办公电话</td>
				<td colspan="1" class="Gj_tab_text">38223336</td>
				<td colspan="2" class="Gj_tab_title3">单位电子信箱</td>
				<td colspan="1" class="Gj_tab_text">wangyao@sdju.edu.cn</td>
				<td colspan="1" rowspan="2" class="Gj_tab_text"></td>
				<td colspan="1" rowspan="2" class="Gj_tab_text"></td>
				<td colspan="1" class="Gj_tab_title3">经度</td>
				<td colspan="1" class="Gj_tab_title3">纬度</td>
			</tr>
			<tr>
				<td colspan="2" class="Gj_tab_title3">传真电话</td>
				<td colspan="1" class="Gj_tab_text">021-38223300</td>
				<td colspan="2" class="Gj_tab_title3">填表人电子信箱</td>
				<td colspan="1" class="Gj_tab_text"></td>
				<td colspan="1" class="Gj_tab_title3">121.89</td>
				<td colspan="1" class="Gj_tab_title3">30.8858</td>
			</tr>
			<tr class="Gj_tab_text">
				<td>续</td><td></td><td></td><td></td><td></td>
				<td></td><td></td><td></td><td></td><td></td>
			</tr>
			<!-- 第五行 -->
			<tr>
				<td colspan="2" class="Gj_tab_title3"></td>
				<td colspan="1" class="Gj_tab_title3">学校（机构）举办者</td>
				<td colspan="2" class="Gj_tab_title3">学校（机构）属地管理教育行政部门</td>
				<td colspan="1" class="Gj_tab_title3">学校（机构）地址</td>
				<td colspan="2" class="Gj_tab_title3">规定年制</td>
				<td colspan="2" class="Gj_tab_title3">规定入学年龄</td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">名称</td>
				<td colspan="1" class="Gj_tab_title3">附设幼儿班</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">代码</td>
				<td colspan="1" class="Gj_tab_title3">119</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">名称</td>
				<td colspan="1" class="Gj_tab_title3">附设小学班</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3"></td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3"></td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">代码</td>
				<td colspan="1" class="Gj_tab_title3">219</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">名称</td>
				<td colspan="1" class="Gj_tab_title3">附设普通初中班</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">代码</td>
				<td colspan="1" class="Gj_tab_title3">319</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3"> </td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">名称</td>
				<td colspan="1" class="Gj_tab_title3">附设职业初中班</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">代码</td>
				<td colspan="1" class="Gj_tab_title3">329</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3"> </td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">名称</td>
				<td colspan="1" class="Gj_tab_title3">附设普通高中班</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">代码</td>
				<td colspan="1" class="Gj_tab_title3">349</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">名称</td>
				<td colspan="1" class="Gj_tab_title3">附设特教班</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3"> </td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3"> </td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">代码</td>
				<td colspan="1" class="Gj_tab_title3">519</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3"> </td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">名称</td>
				<td colspan="1" class="Gj_tab_title3">附设中职班</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
				<td colspan="1" class="Gj_tab_title3">小学</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
			</tr>
			<tr>
				<td colspan="1" class="Gj_tab_title3">代码</td>
				<td colspan="1" class="Gj_tab_title3">368</td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="2" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_text"> </td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
				<td colspan="1" class="Gj_tab_title3">初中</td>
				<td colspan="1" class="Gj_tab_title3">*</td>
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