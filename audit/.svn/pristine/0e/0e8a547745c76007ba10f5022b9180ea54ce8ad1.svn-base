<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<title>湖州师范学院在省内高校排名情况分析</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script src="${pageContext.request.contextPath }/js/ligerui/lib/jquery/jquery-1.9.0.min.js" type="text/javascript"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/echarts/echarts-all.js"></script>
	<script src="${pageContext.request.contextPath }/page/analysisReport/js/report-hzsf.js" type="text/javascript"></script>
	<%-- <script src="${pageContext.request.contextPath }/page/analysisReport/js/zhuzhuangtu.js" type="text/javascript"></script> --%>
	
	<style type="text/css">
		.tab-1 tr {
			height: 40px;
		}
		
		.tab-1{
			border-top:1px  solid #D4D4D4;
			border-left:1px  solid #D4D4D4;
		}
		
		.tab-1 td {
			border-right: 0.5px solid #D4D4D4;
			border-bottom: 0.5px solid #D4D4D4;
		}
		.tab-2_1{
			border-top:1px  solid #ccc;
			border-left:1px  solid #ccc;
		}
		.tab-2_1 td{
			border-right: 0.5px solid #ccc;
			border-bottom: 0.5px solid #ccc;
			height:40px;
		}
		body{
			line-height:160%;
			font-size:15px;
		}
	</style>
</head>

<body>
	<div>
		<div style="width:100%;height:30px;font-weight:bold;text-align:center;background:#4D99AE;font-size:20px;padding-top:10px;color:#fff;margin-top:10px;">
			2012-2016年 湖州师范学院在省内高校排名情况分析
		</div>
		<div style="width:100%;height:30px;font-weight:bold;text-align:right;background:#4D99AE;padding-top:5px;margin-top:0px;">
			 ——基于中国管理科学研究院武书连大学排名表&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		</div>
		  <center>
			<div style="width:96%;align:center;margin-top:6px;">
				<div style="margin-top:8px;text-align:left;">
					<font style="font-weight:bold;">当前时间：</font>
					<font id="showDate" style="color:red;font-weight:bold;">2017年6月17日</font>&nbsp;&nbsp;&nbsp;&nbsp;
					<font style="font-weight:bold;">选择学期：</font>
					<select id="year">
						<option value="2015/09/30">2014-2015学年第二学期</option>
						<option selected="selected" value="2016/09/30">2015-2016学年第二学期</option>
						<option value="2017/09/30">2016-2017学年第二学期</option>
						<option value="2018/09/30">2017-2018学年第二学期</option>
					</select>
					<img id="upload_img" style="display: none;" src="/CHART/images/dengdai_lv_se.gif"></img>
					<div style="float:right;">
						<a href="javascript:void(0);" onclick="downupload();"><img src="${pageContext.request.contextPath }/page/analysisReport/img/export.jpg"></a>
					</div>
				</div>
		  	</div>
		  <div id="bodyDiv1">
			<div style="display: none;">
				<table style="width:100%;text-align:left;">
					<tr height="100px"><td style="text-align:left;"><img src="/audit/page/analysisReport/img/bjgy_report.png" style="width:800px;height:260px;" /><br></td></tr>
					<tr height="80px"><td><font style="font-size:18px;"><font style="font-size:24px;font-weight:bold;text-align:center;">本科教学学生评教数据统计分析报告</font><br></font><br></td></tr><tr height="80px"><td></td></tr>
					<tr height="80px"><td><font style="font-size:18px;"><font style="font-size:20px;font-weight:bold;text-align:center;" id="yearString_1">（2015-2016学年第二学期）</font><br><br></font><br></td></tr><tr height="80px"><td></td></tr><tr height="80px"><td></td></tr><tr height="80px"><td></td></tr><tr height="80px"><td></td></tr><tr height="80px"><td></td></tr><tr height="80px"><td></td></tr><tr height="80px"><td></td></tr>
					<tr height="80px"><td><font style="font-size:18px;"><font style="font-size:20px;font-weight:bold;text-align:center;">北京工业大学教务处</font><br></font><br></td></tr><tr height="80px"><td></td></tr>
					<tr height="80px"><td><font style="font-size:18px;"><font style="font-size:20px;font-weight:bold;text-align:center;" id="yearString_2">2016年9月</font></font><br></td></tr><tr height="80px"><td></td></tr><tr height="80px"><td></td></tr>
				</table>
				
				<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman"; mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
				mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
				</span>

				<table style="width:100%;text-align:left;">
					<tr height="100px"><th><font style="font-size:26px;font-weight:bold;text-align:center;">目录</font><br></th></tr><tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">1、学生评教参与情况分析</font><br></td></tr><tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">2、学生评教指标体系与结果</font><br></td></tr><tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">3、学院得分情况分析</font><br></td></tr><tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">4、全校范围内学生评教得分后50名的课堂</font><br></td></tr><tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">5、全校范围内学生评教得分满分的课堂（6名）</font><br></td></tr><tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">6、<!-- 2015-2016学年第一学期 -->学生评教后50名课堂的持续改进情况</font><br></td></tr><tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">7、基于课程性质/类别的学生评价分析</font><br></td></tr><tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">8、最喜爱教师的评教情况</font><br></td></tr><tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">9、主要结论与建议</font><br></td></tr><tr height="80px"><td></td></tr>
				</table>
			</div>
			<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman"; mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
				mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
			</span>
			
			<div style="width:96%;align:center;margin-top:6px;">
				<div style="text-align:left;">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;摘  要：2015年武书连中国大学排行榜于2015年1月公布，排名指标包括大学综合实力排名（总排名）、一级、二级指标排名和得分。四项单列排名，即教师水平排名、教师绩效排名、新生质量排名、毕业生质量排名在2012年才新增，因此本研究以2012年为研究起始年。经对排名结果分析，湖州师范学院在2015年全国高校排名为359名，
					比2014年下降34名；省内排名为18名，比2014年下降2名。省内排名被绍兴文理学院和浙江科技学院赶超。从得分来看，2015年湖州师范学院各项得分都出现下滑，总得分降0.4分， 人才培养得分降低较快（降0.21分，现为1.7分），科学研究得分（降0.19分，现为1.82分）被绍兴文理学院（2.11分）超越。科学研究得分中自然科学
					（降0.07分）和社会科学（降0.13分）都出现下降，其中社会科学得分下降快于自然科学得分，而绍兴文理学院、浙江科技学院的自然科学得分的提升（绍兴文理学院和浙江科技学院分别提升0.39分和0.18分，总得分提升分别为0.44分和0.3分）成为其综合实力迅速提升并超越湖州师范学院排名的主要原因。
				</div>
			
				<!-- 1 -->
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">一、指标体系的调整和变化</font>
				</div>
				<br>
				<div style="width:95%;text-align:left;">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）2015年《中国大学评价》课题组不再使用SCI、SSCI、A&HCI作为国际期刊论文的数据来源。2013、2014年，《中国大学评价》课题组对全世界约40000种期刊重新筛选，原SCI、SSCI、A&HCI的12000多种期刊中，有5000种左右没有入选，有2000种左右非SCI、SSCI、A&HCI源期刊进入《中国大学评价》源期刊。这意味着武书连大学排名自设期刊标准作为高校论文的数据来源。
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）专利技术转让进入《中国大学评价》指标体系。专利转让是指专利权人作为转让方，将其发明创造专利的所有权或将持有权移转受让方，受让方支付约定价款所订立的合同。通过专利权转让合同取得专利权的当事人，即成为新的合法专利权人，同样也可以与他人订立专利转让合同，专利实施许可合同，包括专利申请权转让。此项指标限在国家专利局备案的专利技术转让。没有在国家专利局备案的专利技术转让因数据无法公开获得，不计入。
				</div>
			</div>
			
			<!-- 2 -->
			<div style="width:96%;align:center;margin-top:10px;">
				<!-- <br> -->
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">二、2012-2016年浙江省大学综合实力排名（总排名）比较</font>
				</div>
				<br>
				<div style="width:95%;text-align:left;">
					先收据数据得以下两表：
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>2012-2016年大学全国及省内综合实力排名情况表</u>
						</font>
						<table id="tab_2_1_" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3" width="20%">省内学校</td><td colspan="5">全国排名</td><td colspan="5" rowspan="2">省内排名（28所）</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td width="70px">705所</td><td width="70px">704所</td><td width="70px">734所</td><td width="70px">734所</td><td width="70px">721所</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td width="70px">2012</td><td width="70px">2013</td><td width="70px">2014</td><td width="70px">2015</td><td width="70px">2016</td>
								<td width="70px">2012</td><td width="70px">2013</td><td width="70px">2014</td><td width="70px">2015</td><td width="70px">2016</td>
							</tr>
							<tr>
								<td>浙江大学</td>
								<td>1</td><td>1</td><td>2</td><td>2</td><td>1</td>
								<td>1</td><td>1</td><td>1</td><td>1</td><td>1</td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td>71</td><td>69</td><td>65</td><td>63</td><td>62</td>
								<td>2</td><td>2</td><td>2</td><td>2</td><td>2</td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td>97</td><td>94</td><td>85</td><td>80</td><td>79</td>
								<td>3</td><td>3</td><td>3</td><td>3</td><td>3</td>
							</tr>
							<tr>
								<td>宁波大学</td>
								<td>99</td><td>95</td><td>91</td><td>90</td><td>88</td>
								<td>4</td><td>4</td><td>4</td><td>4</td><td>4</td>
							</tr>
							<tr>
								<td>浙江理工大学</td>
								<td>143</td><td>128</td><td>123</td><td>117</td><td>116</td>
								<td>5</td><td>5</td><td>5</td><td>5</td><td>5</td>
							</tr>
							<tr>
								<td>浙江工商大学</td>
								<td>129</td><td>125</td><td>129</td><td>124</td><td>132</td>
								<td>6</td><td>6</td><td>6</td><td>6</td><td>6</td>
							</tr>
						</table>
					</div>
					<br>
					由上表经过计算，可得出下表：
					<div style="width:100%;text-align:center;margin-top:15px;">
					<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2016年浙江省大学全国及省内综合实力排名升降情况表</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="2" width="16%">省内学校</td><td colspan="5">全国</td><td colspan="5">省内</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td><div style="padding:8px;">2012-2013年升降</div></td><td><div style="padding:8px;">2013-2014年升降</div></td><td><div style="padding:8px;">2014-2015年升降</div></td><td><div style="padding:8px;">2015-2016年升降</div></td><td><div style="padding:8px;">总升降</div></td>
								<td><div style="padding:8px;">2012-2013年升降</div></td><td><div style="padding:8px;">2013-2014年升降</div></td><td><div style="padding:8px;">2014-2015年升降</div></td><td><div style="padding:8px;">2015-2016年升降</div></td><td><div style="padding:8px;">总升降</div></td>
							</tr>
							<tr>
								<td>浙江大学</td>
								<td>1</td><td>1</td><td>2</td><td>2</td><td>1</td>
								<td>1</td><td>1</td><td>1</td><td>1</td><td>1</td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td>71</td><td>69</td><td>65</td><td>63</td><td>62</td>
								<td>2</td><td>2</td><td>2</td><td>2</td><td>2</td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td>97</td><td>94</td><td>85</td><td>80</td><td>79</td>
								<td>3</td><td>3</td><td>3</td><td>3</td><td>3</td>
							</tr>
							<tr>
								<td>宁波大学</td>
								<td>99</td><td>95</td><td>91</td><td>90</td><td>88</td>
								<td>4</td><td>4</td><td>4</td><td>4</td><td>4</td>
							</tr>
							<tr>
								<td>浙江理工大学</td>
								<td>143</td><td>128</td><td>123</td><td>117</td><td>116</td>
								<td>5</td><td>5</td><td>5</td><td>5</td><td>5</td>
							</tr>
							<tr>
								<td>湖州师范学院</td>
								<td>31</td><td>23</td><td>-34</td><td>-22</td><td>-2</td>
								<td>1</td><td>1</td><td>-2</td><td>-3</td><td>-3</td>
							</tr>
							<tr>
								<td>浙江万里学院</td>
								<td>31</td><td>23</td><td>-34</td><td>-22</td><td>-2</td>
								<td>1</td><td>1</td><td>-2</td><td>-3</td><td>-3</td>
							</tr>
						</table>
						<div style="text-align:left;margin-top:5px;">注：空白处为学校排在500名以外，排名不分先后。</div>
					</div>
					<br>
					<div style="text-align:left;">为更清楚的了解排名变化，选取省内与湖州师范学院名次最近的5所高校共6所学校，做排名升降折线图。</div>
					<!-- <div style="width:100%;text-align:center;margin-top:15px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2015年 六所学校综合实力排名升降图(草绿色为湖州师范学院)</u>
						</font>
						<table id="tab_2_3" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td style="width:300px;">学年学期</td>
								<td width="160px;">平均得分</td>
							</tr>
							<tr>
								<td>2015-2016学年第二学期</td>
								<td>87.81</td>
							</tr>
							<tr>
								<td>2015-2016学年第二学期</td>
								<td>87.81</td>
							</tr>
							<tr>
								<td>2015-2016学年第二学期</td>
								<td>87.81</td>
							</tr>
							<tr>
								<td>2015-2016学年第二学期</td>
								<td>87.81</td>
							</tr>						
						</table>
					</div> -->
					
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;padding-bottom:14px;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>2012-2015年 六所学校综合实力排名升降图(草绿色为湖州师范学院)</u></font>
						<div id='container_1' style='width: 90%;height:400px;padding:20px;margin-top:-10px;'>
						</div>
					</div>
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font style="font-weight:bold;">1.从全国排名来说：</font>湖州师范学院2012-2014年一直保持着较强的上升趋势，两年来分别上升31和23名，2015年至2016年连续下降，从2014年的325名下降至2016年的381名，名次跌至比2012年（379名）还低。2016年浙江海洋学院和浙江中医药大学，分别以上升33名和上升31名，成为全省跃升速度最快的两所高校。绍兴文理学院下降16名(全国338名)，嘉兴学院上升13名（全国376名）。
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font style="font-weight:bold;">2.从浙江省内排名来说，</font>尽管2013年和2014年湖州师范学院分别超越了嘉兴学院和绍兴文理学院，省内名次上升两名为16名，但2015年湖州师范学院被绍兴文理学院和浙江科技学院赶上，省内名次下降2名，又降为18名。2016年湖州师范学院持续下降，已降至21名。
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font style="font-weight:bold;">3.从五年来总排名上升趋势变化来说，</font>尽管湖州师范学院2016年下降22名，但前几年一直在迅速上升，因此与2012年名次相比只下降2名。与2012年相比省内名次下降3名。6所学校中，浙江科技学院和台州学院成为2012-2016年名次上升最快的高校，五年上升了88名，台州学院上升了88名。其次是浙江科技学院上升了57名。
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;padding-bottom:14px;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>2012-2015年 湖州师范学院综合实力全国名次排名变化表</u></font>
						<div id='container_1_1' style='width: 90%;height:400px;padding:20px;margin-top:-10px;'>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 3 -->
			<div style="width:96%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">三、2012-2016年浙江省大学一级指标排名比较</font>
				</div>
				<div style="width:95%;text-align:left;">
					<div style="width:100%;text-align:center;margin-top:15px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>2012-2016年浙江省大学一级指标排名表</u>
						</font>
						<table id="tab_3" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3">省内学校</td>
								<td colspan="4">2012年</td>
								<td colspan="4">2013年</td>
								<td colspan="4">2014年</td>
								<td colspan="4">2015年</td>
								<td colspan="4">2016年</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td width="60px" colspan="2">人才培养</td>
								<td width="60px" colspan="2">科学研究</td>
								<td width="60px" colspan="2">人才培养</td>
								<td width="60px" colspan="2">科学研究</td>
								<td width="60px" colspan="2">人才培养</td>
								<td width="60px" colspan="2">科学研究</td>
								<td width="60px" colspan="2">人才培养</td>
								<td width="60px" colspan="2">科学研究</td>
								<td width="60px" colspan="2">人才培养</td>
								<td width="60px" colspan="2">科学研究</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
							</tr>
							<tr>
								<td>浙江大学</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>3</td><td>2</td>
								<td>4</td><td>2</td>
								<td>2</td><td>2</td>
								<td>1</td><td>2</td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
							</tr>
							<tr>
								<td>宁波大学</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
							</tr>
							<tr>
								<td>浙江理工大学</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
							</tr>
						</table>
						<div style="text-align:left;padding:5px;">注：空白处为学校在500名以外，排名不分先后。</div>
					</div>
					<div style="text-align:left;">由上表经过计算可得出下表：</div>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>2012-2016年浙江省大学一级指标排名升降表</u>
						</font>
						<table id="tab_3" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3">省内学校</td>
								<td colspan="4">2012年-2013年升降</td>
								<td colspan="4">2013年-2014年升降</td>
								<td colspan="4">2014年-2015年升降</td>
								<td colspan="4">2015年-2016年升降</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td width="60px" colspan="2">人才培养</td>
								<td width="60px" colspan="2">科学研究</td>
								<td width="60px" colspan="2">人才培养</td>
								<td width="60px" colspan="2">科学研究</td>
								<td width="60px" colspan="2">人才培养</td>
								<td width="60px" colspan="2">科学研究</td>
								<td width="60px" colspan="2">人才培养</td>
								<td width="60px" colspan="2">科学研究</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
							</tr>
							<tr>
								<td>浙江大学</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>1</td><td>2</td>
								<td>3</td><td>2</td>
								<td>4</td><td>2</td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
								<td>77</td><td>2</td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
								<td>126</td><td>22</td>
							</tr>
							<tr>
								<td>宁波大学</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
								<td>122</td><td>6</td>
							</tr>
							<tr>
								<td>浙江理工大学</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
								<td>159</td><td>8</td>
							</tr>
						</table>
					</div>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2015年 6所高校人才培养一级指标名次升降表（草绿色为湖州师院）</u></font>
						<div id='container_2' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'>
						</div>
					</div>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2015年 6所高校科学研究一级指标名次升降表（草绿色为湖州师院）</u></font>
						<div id='container_3' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'>
						</div>
					</div>
					<div style="text-align:left;padding:8px;">
						从一级指标排名来看，我校人才培养和科学研究排名的升降情况如下：
						<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font style="font-weight:bold;">1.全国名次：</font>2015年我校人才培养指标全国名次从全国446名降为全国476名，下降30名，在浙江省全国500名名次内的高校人才培养名次中位列最后；科学研究指标名次也呈现下降趋势，从全国218名降为259名，下降41名。2016年我校人才培养指标全国名次从全国476名升为全国462名，上升14名，在浙江省全国500名名次内的高校人才培养名次中位列倒数第二；科学研究指标名次也呈现下降趋势，从全国259名降为291名，下降32名。从6所排名相近的高校来看，浙江科技学院和嘉兴学院的科学研究指标较强，与其他几所高校相比，具有一定的优势。
						<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font style="font-weight:bold;">2.省内名次：</font>我校人才培养指标从省内23名升为22名，升1名，被浙江海洋学院、嘉兴学院、浙江传媒学院赶上；科学研究指标省内从15名降为19名，下降4名，被绍兴文理学院和浙江财经大学赶上。
					</div>
				</div>
			</div>
			
			<!-- 4 -->
			<div style="width:96%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">四、2012-2016年 浙江省内大学排名得分比较</font>
				</div>
				<br>
				<div style="width:95%;text-align:left;">
					<div style="width:100%;text-align:center;margin-top:15px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:12px;">
							<u>2012-2016年 浙江省内高校得分表</u>
						</font>
						<table id="tab_4_1" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3">学  校</td>
								<td rowspan="3">总得分</td>
								<td colspan="3">人才培养</td>
								<td colspan="3">科学研究</td>
								<td rowspan="3">时间</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td rowspan="2">得分</td>
								<td>研究生</td>
								<td>本科生</td>
								<td rowspan="2">得分</td>
								<td>自然科学</td>
								<td>社会科学</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>培养</td>
								<td>培养</td>
								<td>研究</td>
								<td>研究</td>
							</tr>
							<tr>
								<td rowspan="5">浙江大学</td>
								<td>209.62</td><td>89.49</td><td>65.88</td><td>23.61</td><td>120.13</td><td>102.79</td><td>17.33</td><td>2012</td>
							</tr>
							<tr><td>196.71</td><td>82.65</td><td>59.73</td><td>22.92</td><td>114.06</td><td>99.11</td><td>14.96</td><td>2013</td></tr>
							<tr><td>200.54</td><td>84.18</td><td>59.01</td><td>25.17</td><td>116.36</td><td>99.98</td><td>16.38</td><td>2014</td></tr>
							<tr><td>202.25</td><td>87.28</td><td>61.4</td><td>25.88</td><td>114.97</td><td>98.45</td><td>16.52</td><td>2015</td></tr>
							<tr><td>221.02</td><td>96.24</td><td>69.87</td><td>26.37</td><td>124.78</td><td>106.85</td><td>17.92</td><td>2016</td></tr>
						</table>
					</div>
					<div style="padding:5px;text-align:left;">
						资料来源：《上大学 选专业》 武书连 2015年<br>
						从上表通过计算得出下表
					</div>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>2012-2016年  浙江省内高校得分差值表</u>
						</font>
						<table id="tab_4_2" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3">学  校</td>
								<td rowspan="3">总得分差</td>
								<td colspan="3">人才培养</td>
								<td colspan="3">科学研究</td>
								<td rowspan="3">时间</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td rowspan="2">得分差</td>
								<td>研究生</td>
								<td>本科生</td>
								<td rowspan="2">得分差</td>
								<td>自然科学</td>
								<td>社会科学</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>培养得分差</td>
								<td>培养得分差</td>
								<td>研究得分差</td>
								<td>研究得分差</td>
							</tr>
							<tr>
								<td rowspan="4">浙江大学</td>
							<td>-12.91</td><td>-6.84</td><td>-6.15</td><td>-0.69</td><td>-6.07</td><td>-3.68</td><td>-2.37</td><td>2012-2013</td>
							</tr>
							<tr><td>3.83</td><td>1.53</td><td>-0.72</td><td>2.25</td><td>2.3</td><td>0.87</td><td>1.42</td><td>2013-2014</td></tr>
							<tr><td>1.71</td><td>3.1</td><td>2.39</td><td>0.71</td><td>-1.39</td><td>-1.53</td><td>0.14</td><td>2014-2015</td></tr>
							<tr><td>18.77</td><td>8.96</td><td>8.47</td><td>0.49</td><td>9.81</td><td>8.4</td><td>1.4</td><td>2015-2016</td></tr>
						</table>
					</div>
					<div style="text-align:left;">
						由上述表格制作2012-2015年  6所高校人才培养和科学研究得分折线图
					</div>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2015年  6所高校一级指标人才培养得分折线图</u></font>
						<div id='container_4' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'>
						</div>
					</div>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2015年  6所高校一级指标科学研究得分折线图</u></font>
						<div id='container_5' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'>
						</div>
					</div>
					<div style="text-align:left;padding:7px;">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于得分与排名相对应，因此人才培养和科学研究两个一级指标得分表与其排名表非常相似。人才培养下二级指标只有本科生培养，研究生培养这几所高校都无得分，因此本科生培养三级指标折线图与人才培养指标折线图完全一致，不再作图。以下为科学研究的三级指标自然科学得分和社会科学得分的折线图。
					</div>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>6所高校科学研究下二级指标——自然科学研究得分折线图</u></font>
						<div id='container_6' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'>
						</div>
					</div>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>6所高校科学研究下二级指标——社会科学研究得分折线图</u></font>
						<div id='container_7' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'>
						</div>
					</div>
					<div style="padding:7px; line-height:150%">
						从上述表格和图表可以看出：<br>
						<font style="font-weight:bold;">1.人才培养得分增幅</font><br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从省内高校来看，2015年一级指标中，浙江大学、浙江工业大学、浙江师范大学、杭州师范大学人才培养得分分别以增长3.1分、1.28分、1.18分、1.35，成为浙江省人才培养得分增长最快的三所高校。前三所高校得分增长的主要原因是研究生培养得分获得显著增长，本科生培养得分增长不明显，浙江大学研究生培养得分增2.39、本科生培养得分只增0.71，浙江工业大学研究生培养增1分，本科生培养只增0.29分，浙江师范大学研究生培养增0.91分，本科生培养只增0.27分，而杭州师范大学是本科生培养得分（增0.62分）和研究生培养得分（增0.73）都有较快增长。2015年湖州师范学院本科生培养得分却降0.21分，负值最大，应引起重视。
						从6所高校来说，人才培养得分中浙江科技学院、绍兴文理学院、嘉兴学院、浙江海洋学院分别增长0.1分、0.09分、0.08分、0.05分，增加值全部来自本科生培养得分。湖州师范学院和台州学院则分别降低0.21分、0.09分。<br>
						<font style="font-weight:bold;">2.科学研究得分增幅</font><br>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;从省内高校来看，2015年一级指标中，浙江省不少高校科学研究总得分都有了大幅度的增长，如：浙江工业大学（增1.56分）、浙江师范大学（增1.53分）、浙江理工大学（增1分）、浙江工商大学（增1.25分）、浙江医科大学（增1分）、杭州师范大学（增1.22分）、温州大学（增1分）。从这些高校的科学研究下的二级指标来看，大部分以自然科学研究得分明显增长为主，比如：浙江工业大学（自然科学增1.35分，社会科学增0.21分）、浙江师范大学（自然科学增1.37分，社会科学增0.16分）、浙江理工大学（自然科学增0.92分，社会科学增0.08分）、浙江医科大学（自然科学增0.94分，社会科学增0.06分）、杭州师范大学（自然科学增0.93分，社会科学增0.29分）、温州大学（自然科学增0.6分，社会科学增0.4分），只有浙江工商大学的社会科学得分增长较快（自然科学增0.37分，社会科学增0.88分）。
						但浙江大学（降1.39分）、浙江中医药大学(降0.01分)、湖州师范学院（降0.19分）三所高校科学研究总得分出现了下滑。其中浙江大学的自然科学得分下滑在全省高校最快，降了1.53分。湖州师范学院两项得分同时降低（自然科学降0.07分，社会科学降0.13分），社会科学得分降低值明显快于自然科学得分。
						从6所高校来说，2015年一级指标科学研究总得分除湖州师范学院出现下降以外，其他5所高校都上升，其中嘉兴学院增长缓慢（增0.04分），其他四所高校都有0.2分以上的增长，速度还是较快的。从科学研究下的二级指标来看这些高校也都是自然科学得分增长明显快于社会科学得分增长。自然科学得分中，绍兴文理学院（增0.39分）增长最为迅速，其次是浙江海洋学院（增0.28分）、浙江科技学院（增0.18）、台州学院（增0.17分）、嘉兴学院（增0.05分）；社会科学得分中，6所高校不仅增长缓慢（增0.05分及以下）甚至出现下滑，其中台州学院（增0.05分）、浙江科技学院（增0.04分）、浙江海洋学院（增0.03分）增长较快，而嘉兴学院（降0.01分）、绍兴文理学院（降0.03分）、湖州师范学院（降0.13分）。
						绍兴文理学院和浙江科技学院总得分的增长原因主要来自自然科学得分的增长。6所高校中4所自然科学得分都有迅速提升，绍兴文理学院总得分增长的0.44分竟有88.6%来自自然科学得分增长。而浙江科技学院总得分增长的0.3分也有60%来自自然科学得分增长。6所高校中其他2所提升迅速的高校也有相同的原因，浙江海洋学院有77.8%，台州学院更是如此，因为被人才培养得分的负值抵消，出现其自然科学增长得分还高于其总得分的增长的现象。
					</div>
				</div>
			</div>
			
			<!-- 5 -->
			<div style="width:96%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">五、总结</font>
				</div>
				<br>
				<div style="width:95%;text-align:left; line-height:150%;">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上数据都来自中国管理科学研究院《中国大学评价》课题组组长武书连主持的《2015中国大学评价》，该书于2014年12月结稿，2015年一月出版。武书连宣称指标体系有了两项较大改动，其中一项是国际期刊论文来源做了改变，但是作为大学排名的研究组去研究并自设期刊入选标准，且又不公布入选期刊，是否能做到公正公平存疑，笔者认为还不如像原来选取SCI、SSCI、A&HCI作为国际期刊论文的数据来源，能保证数据公开透明。湖州师范学院在SCI、SSCI、A&HCI作为国际期刊论文中的得分是比较高的，今年综合实力突然出现较快下降（降0.4分），排除一半是人才培养得分（降0.21分）的下降，另一半自然科学得分（降0.07分）和社会科学的得分（降0.13分）下降是否与此有关，还有待进一步证实。<br>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;另一个变化是专利转让，专利转让进入大学排名，专利转让属于专利转移转化的一种，专利转移转化问题较复杂，专利转移转化包括自行实施、许可和转让三种方式。由于自行实施需要较大的人力、物力和财力支撑，目前我国高校和科研机构专利转移转化主要涉及许可和转让两种方式。专利许可模式中除包括单纯签订专利实施许可合同外，还包括通过专利实施许可与企业共建研发平台或中试基地等。在高校和科研机构中，专利转化也出现了专利拍卖、专利直接入股企业等多种模式。因此武书连的大学排名只在网上公布了前十名，目前不清楚其具体数据来源和计算标准。但是专利转让进入大学排名，其积极意义也是明显的，可以推进高校专利成果转化，充分发挥高校在实施创新驱动发展、加快创新型国家建设中的重要作用。
				</div>
			</div>
			
		   </div>		
		</center>
	</div>
	<br><br><br><br>
</body>
</html>

