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
<input type="hidden" id="gjname" value="学校（机构）基本情况"/>
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
				<input type="hidden" id="objclass" name="objclass" value="AS_GJ_XXJQK" />
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
				<td colspan="5" class="Gj_tab_title">学校（机构）基本情况</td>
			</tr>
			<tr>
				<td colspan="3" class="Gj_tab_title3_left" style="border-right: 0px;">
				高基112
				</td>
				<td colspan="2" class="Gj_tab_title3_left" style="border-left: 0px;">
				单位：
				</td>
			</tr>
			
			<!-- 第一行 -->
			<tr>
				<td colspan="1" class="Gj_tab_title3_left">项目</td>
				<td colspan="1" class="Gj_tab_title3">编号</td>
				<td colspan="1" class="Gj_tab_title3">内容</td>
				<td colspan="1" class="Gj_tab_title3">单位</td>
				<td colspan="1" class="Gj_tab_title3">备注</td>
			</tr>
			<tr id="1tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">“985工程”院校</td>
				<td colspan="1" class="Gj_tab_title3">1</td>
			</tr>
			<tr id="2tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">“211工程”院校</td>
				<td colspan="1" class="Gj_tab_title3">2</td>
			</tr>
			<tr id="3tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">设立研究生院</td>
				<td colspan="1" class="Gj_tab_title3">3</td>
			</tr>
			<tr id="4tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">网络学院</td>
				<td colspan="1" class="Gj_tab_title3">4</td>
			</tr>
			<tr id="5tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">建立校园网</td>
				<td colspan="1" class="Gj_tab_title3">5</td>
			</tr>
			<tr id="6tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">接入互联网</td>
				<td colspan="1" class="Gj_tab_title3">6</td>
			</tr>
			<tr id="7tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">接入互联网出口带宽</td>
				<td colspan="1" class="Gj_tab_title3">7</td>
			</tr>
			<tr id="8tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">接入互联网出口带宽</td>
				<td colspan="1" class="Gj_tab_title3">8</td>
			</tr>
			<tr id="9tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">本科专业</td>
				<td colspan="1" class="Gj_tab_title3">9</td>
			</tr>
			<tr id="10tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">硕士学位授权一级学科点</td>
				<td colspan="1" class="Gj_tab_title3">10</td>
			</tr>
			<tr id="11tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">硕士学位授权二级学科点（不含一级学科覆盖点）</td>
				<td colspan="1" class="Gj_tab_title3">11</td>
			</tr>
			<tr id="12tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">博士学位授权一级学科点</td>
				<td colspan="1" class="Gj_tab_title3">12</td>
			</tr>
			<tr id="13tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">博士学位授权二级学科点（不含一级学科覆盖点）</td>
				<td colspan="1" class="Gj_tab_title3">13</td>
			</tr>
			<tr id="14tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">博士后科研流动站</td>
				<td colspan="1" class="Gj_tab_title3">14</td>
			</tr>
			<tr id="15tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">国家重点学科（一级）</td>
				<td colspan="1" class="Gj_tab_title3">15</td>
			</tr>
			<tr id="16tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">国家重点学科（二级）</td>
				<td colspan="1" class="Gj_tab_title3">16</td>
			</tr>
			<tr id="17tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">国家重点（培育）学科</td>
				<td colspan="1" class="Gj_tab_title3">17</td>
			</tr>
			<tr id="18tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">省、部级重点学科（一级）</td>
				<td colspan="1" class="Gj_tab_title3">18</td>
			<tr id="19tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">省、部级重点学科（二级）</td>
				<td colspan="1" class="Gj_tab_title3">19</td>
			</tr>
			<tr id="20tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">国家实验室</td>
				<td colspan="1" class="Gj_tab_title3">20</td>
			</tr>
			<tr id="21tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">国家重点实验室</td>
				<td colspan="1" class="Gj_tab_title3">21</td>
			</tr>
			<tr id="22tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">国家工程实验室</td>
				<td colspan="1" class="Gj_tab_title3">22</td>
			</tr>
			<tr id="23tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">国家工程研究中心</td>
				<td colspan="1" class="Gj_tab_title3">23</td>
			</tr>
			<tr id="24tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">国家工程技术研究中心</td>
				<td colspan="1" class="Gj_tab_title3">24</td>
			</tr>
			<tr  id="25tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">省、部级设置的研究（院、所、中心）、实验室</td>
				<td colspan="1" class="Gj_tab_title3">25</td>
			</tr>
			<tr id="26tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">定期公开出版的专业刊物数</td>
				<td colspan="1" class="Gj_tab_title3">26</td>
			</tr>
			<tr id="27tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">直属院（系）数</td>
				<td colspan="1" class="Gj_tab_title3">27</td>
			</tr>
			<tr id="28tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">普通本专科在校生中住宿生</td>
				<td colspan="1" class="Gj_tab_title3">28</td>
			</tr>
			<!-- duke -->
			<tr id="29tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">普通本专科毕业生一次就业率</td>
				<td colspan="1" class="Gj_tab_title3">29</td>
			</tr>
			<tr id=30tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">授予同等学力申请硕士学位人数</td>
				<td colspan="1" class="Gj_tab_title3">30</td>
			</tr>
			<tr id="31tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">授予同等学力申请博士学位人数</td>
				<td colspan="1" class="Gj_tab_title3">31</td>
			</tr>
			<tr id="32tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">上学年参加国家学生体质健康标准测试的人数</td>
				<td colspan="1" class="Gj_tab_title3">32</td>
			</tr>
			<tr id="33tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">优秀</td>
				<td colspan="1" class="Gj_tab_title3">33</td>
			</tr>
			<tr id="34tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">良好</td>
				<td colspan="1" class="Gj_tab_title3">34</td>
			</tr>
			<tr  id="35tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">及格</td>
				<td colspan="1" class="Gj_tab_title3">35</td>
			</tr>
			<tr id="36tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">不及格</td>
				<td colspan="1" class="Gj_tab_title3">36</td>
			</tr>
			<tr id="37tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">中国科学院院士（人事关系在本校）</td>
				<td colspan="1" class="Gj_tab_title3">37</td>
			</tr>
			<tr id="38tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">中国工程院院士（人事关系在本校）</td>
				<td colspan="1" class="Gj_tab_title3">38</td>
			</tr>
			<tr id="39tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">“千人计划”入选者</td>
				<td colspan="1" class="Gj_tab_title3">39</td>
			</tr>
			<tr id="40tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">“青年千人计划”入选者</td>
				<td colspan="1" class="Gj_tab_title3">40</td>
			</tr>
			<tr id="41tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">“长江学者奖励计划”讲座教授</td>
				<td colspan="1" class="Gj_tab_title3">41</td>
			</tr>
			<tr id="42tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">“长江学者奖励计划”特聘教授</td>
				<td colspan="1" class="Gj_tab_title3">42</td>
			</tr>
			<tr id="43tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">“国家杰出青年科学基金”获得者</td>
				<td colspan="1" class="Gj_tab_title3">43</td>
			</tr>
			<tr id="44tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">专任教师中有海（境）外经历累计一年以上的</td>
				<td colspan="1" class="Gj_tab_title3">44</td>
			</tr>
			<tr id="45tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">安全保卫人员</td>
				<td colspan="1" class="Gj_tab_title3">45</td>
			</tr>
			<tr id="46tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">学校附属医院</td>
				<td colspan="1" class="Gj_tab_title3">46</td>
			</tr>
			<tr id="47tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">建筑面积</td>
				<td colspan="1" class="Gj_tab_title3">47</td>
			</tr>
			<tr id="48tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">床位数</td>
				<td colspan="1" class="Gj_tab_title3">48</td>
			</tr>
			<tr id="49tr" class="Gj_tab_text" name="jctr">
				<td colspan="1" class="Gj_tab_title3_left">临床教师</td>
				<td colspan="1" class="Gj_tab_title3">49</td>
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