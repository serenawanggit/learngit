<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<title>校友会大学排名</title>

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
	<script src="${pageContext.request.contextPath }/page/analysisReport/js/report-xyh.js" type="text/javascript"></script>
	
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
			2012-2016年 校友会大学在省内高校排名情况分析
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
			<div style="width:96%;align:center;margin-top:10px;">
				<div style="width:95%;text-align:left;">
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>校友会大学排名</u>
						</font>
						<table id="tab_2_1_" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
							<td>学校名称</td><td>全国排名	</td><td>省内排名</td><td>师范类全国排名</td><td>师范类全省排名</td>
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
								<td>浙江工商大学<br>....</td>
								<td></td><td></td><td></td><td></td>
							</tr>
						</table>
					</div>
					<br>
					<font style="font-size:16px;font-weight:bold;">全部数据如下：</font>
					<div style="width:100%;text-align:center;margin-top:3px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>表2  校友会网浙江省高校在全国总排名、省内排名情况</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="2">学校名称</td><td colspan="2">2013年</td><td colspan="2">2014年</td><td colspan="2">2015年</td><td colspan="2">2016年</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>全国排名</td><td>省内排名</td>
								<td>全国排名</td><td>省内排名</td>
								<td>全国排名</td><td>省内排名</td>
								<td>全国排名</td><td>省内排名</td>
							</tr>
							<tr>
								<td>浙江大学</td><td>4</td><td>1</td><td>6</td><td>1</td><td>6</td><td>1</td><td>5</td><td>1</td>
							</tr>
							<tr>
								<td>浙江工业大学</td><td>98</td><td>2</td><td>93</td><td>2</td><td>99</td><td>2</td><td>93</td><td>2</td>
							</tr>
							<tr>
								<td>浙江师范大学</td><td>133</td><td>3</td><td>115</td><td>3</td><td>105</td><td>3</td><td>96</td><td>3</td>
							</tr>
							<tr>
								<td>宁波大学</td><td>140</td><td>4</td><td>161</td><td>4</td><td>179</td><td>5</td><td>134</td><td>5</td>
							</tr>
							<tr>
								<td>浙江理工大学</td><td>166</td><td>5</td><td>166</td><td>5</td><td>189</td><td>6</td><td>188</td><td>7</td>
							</tr>
							<tr>
								<td>杭州师范大学</td><td>196</td><td>7</td><td>176</td><td>6</td><td>193</td><td>8</td><td>185</td><td>6</td>
							</tr>
						</table>
					</div>
					
					<div style="width:100%;text-align:center;margin-top:15px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>校友会网浙江省高校一级指标在全国、省内排情况</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="2" width="16%">学校名称</td><td colspan="3">XXXX年全国排名</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>科学研究</td><td>人才培养</td><td>综合声誉</td>
							</tr>
							<tr>
								<td>浙江大学</td>
								<td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td></td><td></td><td></td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td></td><td></td><td></td>
							</tr>
							<tr>
								<td>杭州电子科技大学</td>
								<td></td><td></td><td></td>
							</tr>
							<tr>
								<td>温州大学</td>
								<td></td><td></td><td></td>
							</tr>
						</table>
					</div>
					<br>
					<font style="text-align:left;font-weight:bold;">数据如下：</font>
					<div style="width:100%;text-align:center;margin-top:3px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>表4 校友会网浙江省高校一级指标在全国、省内排情况</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="2" width="16%">学校名称</td><td colspan="3">2013年全国排名</td><td colspan="3">2013年省内排名</td>
								<td colspan="3">2014年全国排名</td><td colspan="3">2014年省内排名</td>
								<td colspan="3">2015年全国排名</td><td colspan="3">2015年省内排名</td>
								<td colspan="3">2016年全国排名</td><td colspan="3">2016年省内排名</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td style="padding:6px;">科学研究</td><td style="padding:6px;">人才培养</td><td style="padding:6px;">综合声誉</td><td style="padding:6px;">科学研究</td><td style="padding:6px;">人才培养</td><td style="padding:6px;">综合声誉</td>
								<td style="padding:6px;">科学研究</td><td style="padding:6px;">人才培养</td><td style="padding:6px;">综合声誉</td><td style="padding:6px;">科学研究</td><td style="padding:6px;">人才培养</td><td style="padding:6px;">综合声誉</td>
								<td style="padding:6px;">科学研究</td><td style="padding:6px;">人才培养</td><td style="padding:6px;">综合声誉</td><td style="padding:6px;">科学研究</td><td style="padding:6px;">人才培养</td><td style="padding:6px;">综合声誉</td>
								<td style="padding:6px;">科学研究</td><td style="padding:6px;">人才培养</td><td style="padding:6px;">综合声誉</td><td style="padding:6px;">科学研究</td><td style="padding:6px;">人才培养</td><td style="padding:6px;">综合声誉</td>
							</tr>
							<tr>
								<td>浙江大学</td>
								<td>5</td><td>4</td><td>3</td><td>1</td><td>1</td><td>1</td><td>4</td><td>7</td><td>5</td><td>1</td><td>1</td><td>1</td><td>3</td><td>7</td><td>7</td><td>1</td><td>1</td><td>1</td><td>4</td><td>4</td><td>6</td><td>1</td><td>1</td><td>1</td>
							</tr>
							<tr>
								<td>浙江工业大学</td>
								<td>84</td><td>105</td><td>118</td><td>2</td><td>2</td><td>2</td><td>65</td><td>107</td><td>199</td><td>2</td><td>3</td><td>2</td><td>90</td><td>86</td><td>150</td><td>2</td><td>2</td><td>4</td><td>86</td><td>82</td><td>121</td><td>2</td><td>2</td><td>5</td>
							</tr>
							<tr>
								<td>浙江师范大学</td>
								<td>117</td><td>128</td><td>145</td><td>5</td><td>3</td><td>4</td><td>99</td><td>99</td><td>212</td><td>3</td><td>2</td><td>4</td><td>106</td><td>130</td><td>60</td><td>3</td><td>4</td><td>2</td><td>96</td><td>129</td><td>71</td><td>3</td><td>4</td><td>2</td>
							</tr>
							<tr>
								<td>宁波大学</td>
								<td>153</td><td>239</td><td>176</td><td>7</td><td>8</td><td>8</td><td>129</td><td>212</td><td>216</td><td>7</td><td>3</td><td>6</td><td>157</td><td>243</td><td>176</td><td>6</td><td>10</td><td>5</td><td>155</td><td>234</td><td>143</td><td>7</td><td>10</td><td>6</td>
							</tr>
							<tr>
								<td>浙江理工大学</td>
								<td>103</td><td>225</td><td>131</td><td>3</td><td>6</td><td>3</td><td>116</td><td>212</td><td>214</td><td>4</td><td>3</td><td>5</td><td>153</td><td>195</td><td>190</td><td>5</td><td>7</td><td>6</td><td>132</td><td>164</td><td>94</td><td>5</td><td>6</td><td>3</td>
							</tr>
							<tr>
								<td>湖州师范学院</td>
								<td>188</td><td>221</td><td>219</td><td>10</td><td>5</td><td>10</td><td>179</td><td>237</td><td>262</td><td>10</td><td>8</td><td>10</td><td>142</td><td>124</td><td>74</td><td>4</td><td>3</td><td>3</td><td>105</td><td>109</td><td>99</td><td>4</td><td>3</td><td>4</td>
							</tr>
						</table>
					</div>
					<br>
					要做到把选取6所学校数据做折线图<br>如下：
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:0px;text-align:center;">
						<!-- <font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>2012-2015年 6所高校科学研究一级指标名次升降表（草绿色为湖州师院）</u></font> -->
						<div id='container_1' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'>
						</div>
						<div id='container_2' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'>
						</div>
					</div>
					
					
					
					
					
				</div>
			</div>
			
		   </div>		
		</center>
	</div>
	<br><br><br><br>
</body>
</html>

