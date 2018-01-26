<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<title>武书连大选排名</title>

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
	<script src="${pageContext.request.contextPath }/page/analysisReport/js/report-wsl.js" type="text/javascript"></script>
	
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
			2012-2016年 武书连大学在省内高校排名情况分析
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
			<div style="width:96%;align:center;margin-top:6px;">
				<font style="text-align:left;font-size:20px;font-weight:bold;">
					武书连大学排名：XXX
				</font>
			</div>
			<div style="width:96%;align:center;margin-top:10px;">
				<div style="width:95%;text-align:left;">
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>2012-2016年大学全国及省内综合实力排名情况表</u>
						</font>
						<table id="tab_2_1_" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td>省内学校</td><td>全国排名</td><td>总共几所</td><td>省内排名</td><td>省内几所</td>
							</tr>
							<tr>
								<td>武书连大学</td><td></td><td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td></td><td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td></td><td></td><td></td><td></td>
							</tr>
							<tr>
								<td>宁波大学</td>
								<td></td><td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江理工大学</td>
								<td></td><td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江工商大学</td>
								<td></td><td></td><td></td><td></td>
							</tr>
						</table>
					</div>
					<br>
					<font style="font-size:16px;font-weight:bold;">数据如下：</font>
					<div style="width:100%;text-align:center;margin-top:3px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2016年大学全国及省内综合实力排名情况表</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3" width="16%">省内学校</td><td colspan="5">全国排名</td><td colspan="5" rowspan="2">省内排名（28所）</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>705所</td><td>704所</td><td>734所</td><td>734所</td><td>721所</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>2012</td><td>2013</td><td>2014</td><td>2015</td><td>2016</td>
								<td>2012</td><td>2013</td><td>2014</td><td>2015</td><td>2016</td>
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
					</div>
					
					<div style="width:100%;text-align:center;margin-top:15px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>武书连一级指标排名表（当前年为2017年）</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3" width="16%">省内学校</td><td colspan="4">2017</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td colspan="2">人才培养</td><td colspan="2">科学研究</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td>
							</tr>
							<tr>
								<td>浙江大学</td>
								<td></td><td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td></td><td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td></td><td></td><td></td><td></td>
							</tr>
						</table>
					</div>
					<br>
					<font style="text-align:left;font-weight:bold;">数据如下：</font>
					<div style="width:100%;text-align:center;margin-top:3px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2016年浙江省大学一级指标排名表</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3" width="16%">省内学校</td><td colspan="4">2012</td><td colspan="4">2013</td>
								<td colspan="4">2014</td><td colspan="4">2015</td><td colspan="4">2016</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td colspan="2">人才培养</td><td colspan="2">科学研究</td>
								<td colspan="2">人才培养</td><td colspan="2">科学研究</td>
								<td colspan="2">人才培养</td><td colspan="2">科学研究</td>
								<td colspan="2">人才培养</td><td colspan="2">科学研究</td>
								<td colspan="2">人才培养</td><td colspan="2">科学研究</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>全国</td><td>省内</td><td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td><td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td><td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td><td>全国</td><td>省内</td>
								<td>全国</td><td>省内</td><td>全国</td><td>省内</td>
							</tr>
							<tr>
								<td>浙江大学</td>
								<td>1</td><td>1</td><td>2</td><td>2</td>
								<td>1</td><td>1</td><td>1</td><td>1</td>
								<td>1</td><td>1</td><td>2</td><td>2</td>
								<td>1</td><td>1</td><td>1</td><td>1</td>
								<td>1</td><td>1</td><td>1</td><td>1</td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td>71</td><td>69</td><td>65</td><td>63</td>
								<td>2</td><td>2</td><td>2</td><td>2</td>
								<td>71</td><td>69</td><td>65</td><td>63</td>
								<td>2</td><td>2</td><td>2</td><td>2</td>
								<td>2</td><td>2</td><td>2</td><td>2</td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td>97</td><td>94</td><td>85</td><td>80</td>
								<td>3</td><td>3</td><td>3</td><td>3</td>
								<td>97</td><td>94</td><td>85</td><td>80</td>
								<td>3</td><td>3</td><td>3</td><td>3</td>
								<td>3</td><td>3</td><td>3</td><td>3</td>
							</tr>
							<tr>
								<td>宁波大学</td>
								<td>99</td><td>95</td><td>91</td><td>90</td>
								<td>4</td><td>4</td><td>4</td><td>4</td>
								<td>99</td><td>95</td><td>91</td><td>90</td>
								<td>4</td><td>4</td><td>4</td><td>4</td>
								<td>4</td><td>4</td><td>4</td><td>4</td>
							</tr>
							<tr>
								<td>浙江理工大学</td>
								<td>143</td><td>128</td><td>123</td><td>117</td>
								<td>5</td><td>5</td><td>5</td><td>5</td>
								<td>143</td><td>128</td><td>123</td><td>117</td>
								<td>5</td><td>5</td><td>5</td><td>5</td>
								<td>5</td><td>5</td><td>5</td><td>5</td>
							</tr>
							<tr>
								<td>湖州师范学院</td>
								<td>31</td><td>23</td><td>-34</td><td>-22</td>
								<td>1</td><td>1</td><td>-2</td><td>-3</td>
								<td>31</td><td>23</td><td>-34</td><td>-22</td>
								<td>1</td><td>1</td><td>-2</td><td>-3</td>
								<td>1</td><td>1</td><td>-2</td><td>-3</td>
							</tr>
							<tr>
								<td>浙江万里学院</td>
								<td>31</td><td>23</td><td>-34</td><td>-22</td>
								<td>1</td><td>1</td><td>-2</td><td>-3</td>
								<td>31</td><td>23</td><td>-34</td><td>-22</td>
								<td>1</td><td>1</td><td>-2</td><td>-3</td>
								<td>1</td><td>1</td><td>-2</td><td>-3</td>
							</tr>
						</table>
					</div>
					
					<div style="width:100%;text-align:center;margin-top:15px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>武书连大学排名各项得分表</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3" width="16%">学  校</td><td rowspan="3">总得分</td><td colspan="3">人才培养</td><td colspan="3">科学研究</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td rowspan="2">得分</td><td>研究生</td><td>本科生</td>
								<td rowspan="2">得分</td><td>自然科学</td><td>社会科学</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>培养</td><td>培养</td><td>研究</td><td>研究</td>
							</tr>
							<tr>
								<td>浙江大学</td>
								<td></td>
								<td></td><td></td><td></td>
								<td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td></td><td></td><td></td><td></td>
								<td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td></td><td></td><td></td><td></td>
								<td></td><td></td><td></td>
							</tr>
							<tr>
								<td>宁波大学</td>
								<td></td><td></td><td></td><td></td>
								<td></td><td></td><td></td>
							</tr>
						</table>
					</div>
					<br>
					<font>全部数据如下</font>
					<div style="width:100%;text-align:center;margin-top:3px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2016年 浙江省内高校得分表</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="3" width="16%">学  校</td><td rowspan="3">总得分</td><td colspan="3">人才培养</td><td colspan="3">科学研究</td><td rowspan="3">时间</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td rowspan="2">得分</td><td>研究生</td><td>本科生</td>
								<td rowspan="2">得分</td><td>自然科学</td><td>社会科学</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>培养</td><td>培养</td><td>研究</td><td>研究</td>
							</tr>
							<tr>
								<td rowspan="5">浙江大学</td>
								<td>209.62</td><td>89.49</td><td>65.88</td><td>23.61</td><td>120.13</td><td>102.79</td><td>17.33</td><td>2012</td>
							</tr>
							<tr>
								<td>196.71</td><td>82.65</td><td>59.73</td><td>22.92</td><td>114.06</td><td>99.11</td><td>14.96</td><td>2013</td>
								</tr>
							<tr>
								<td>200.54</td><td>84.18</td><td>59.01</td><td>25.17</td><td>116.36</td><td>99.98</td><td>16.38</td><td>2014</td>
							</tr>
							<tr>
								<td>202.25</td><td>87.28</td><td>61.4</td><td>25.88</td><td>114.97</td><td>98.45</td><td>16.52</td><td>2015</td>
							</tr>
							<tr>
								<td>221.02</td><td>96.24</td><td>69.87</td><td>26.37</td><td>124.78</td><td>106.85</td><td>17.92</td><td>2016</td>
							</tr>
							<tr>
								<td rowspan="5">浙江工业大学</td>
								<td>209.62</td><td>89.49</td><td>65.88</td><td>23.61</td><td>120.13</td><td>102.79</td><td>17.33</td><td>2012</td>
							</tr>
							<tr>
								<td>196.71</td><td>82.65</td><td>59.73</td><td>22.92</td><td>114.06</td><td>99.11</td><td>14.96</td><td>2013</td>
								</tr>
							<tr>
								<td>200.54</td><td>84.18</td><td>59.01</td><td>25.17</td><td>116.36</td><td>99.98</td><td>16.38</td><td>2014</td>
							</tr>
							<tr>
								<td>202.25</td><td>87.28</td><td>61.4</td><td>25.88</td><td>114.97</td><td>98.45</td><td>16.52</td><td>2015</td>
							</tr>
							<tr>
								<td>221.02</td><td>96.24</td><td>69.87</td><td>26.37</td><td>124.78</td><td>106.85</td><td>17.92</td><td>2016</td>
							</tr>
							<tr>
								<td rowspan="5">浙江师范大学</td>
								<td>209.62</td><td>89.49</td><td>65.88</td><td>23.61</td><td>120.13</td><td>102.79</td><td>17.33</td><td>2012</td>
							</tr>
							<tr>
								<td>196.71</td><td>82.65</td><td>59.73</td><td>22.92</td><td>114.06</td><td>99.11</td><td>14.96</td><td>2013</td>
								</tr>
							<tr>
								<td>200.54</td><td>84.18</td><td>59.01</td><td>25.17</td><td>116.36</td><td>99.98</td><td>16.38</td><td>2014</td>
							</tr>
							<tr>
								<td>202.25</td><td>87.28</td><td>61.4</td><td>25.88</td><td>114.97</td><td>98.45</td><td>16.52</td><td>2015</td>
							</tr>
							<tr>
								<td>221.02</td><td>96.24</td><td>69.87</td><td>26.37</td><td>124.78</td><td>106.85</td><td>17.92</td><td>2016</td>
							</tr>
						</table>
					</div>
					
					
					
					
				</div>
			</div>
			
		   </div>		
		</center>
	</div>
	<br><br><br><br>
</body>
</html>

