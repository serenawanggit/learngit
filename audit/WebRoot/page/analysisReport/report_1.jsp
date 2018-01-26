<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>

<title>My JSP 'showZhuzhuangtu.jsp' starting page</title>

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
	<script src="${pageContext.request.contextPath }/page/analysisReport/js/zhuzhuangtu.js" type="text/javascript"></script>
	<script src="${pageContext.request.contextPath }/page/analysisReport/js/reportUpdate.js" type="text/javascript"></script>
	<%-- <script type="text/javascript" src="${pageContext.request.contextPath }/page/analysisReport/js/loadDiv.js"></script> --%>
	
	<style type="text/css">
		body{
			line-height:150%;
		}
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
			font-family:宋体;
		}
	</style>
</head>

<body>
	<div>
		<div style="width:100%;height:40px;font-weight:bold;text-align:center;background:#4D99AE;font-size:20px;padding-top:10px;color:#fff;margin-top:10px;">
			<span id="span_1" class="current">2015-2016学年第二学期</span>本科教学学生评教数据统计分析报告</div>
		  <center>
			<div style="width:80%;align:center;margin-top:6px;">
				<div style="margin-top:8px;text-align:left;">
					<font style="font-weight:bold;">当前时间：</font>
					<font id="showDate" style="color:red;font-weight:bold;">2017年6月17日</font>&nbsp;&nbsp;&nbsp;&nbsp;
					<font style="font-weight:bold;">选择学期：</font>
					<select id="year">
						<option>2014-2015学年</option>
						<option selected="selected">2015-2016学年</option>
						<option>2016-2017学年</option>
						<option>2017-2018学年</option>
					</select>
					<select id="xueqi">
						<option value="1">第一学期</option>
						<option value="2">第二学期</option>
					</select>
					<!-- <div style="margin-left:25%;"> -->
					<img id="upload_img" style="display: none;" src="/CHART/images/dengdai_lv_se.gif"></img>
					<!-- </div> -->
					<div style="float:right;">
						<a href="javascript:void(0);" onclick="downupload();"><img src="${pageContext.request.contextPath }/page/analysisReport/img/export.jpg"></a>
					</div>
				</div>
			</div>
			<div id="bodyDiv1">
			<!-- <div style="display: none;">
			</div> -->
			<div style="display: none;">
				<table style="width:100%;text-align:left;">
					<tr height="100px"><td style="text-align:left;"><img src="/audit/page/analysisReport/img/bgd002.png" style="width:320;left:100px;"/><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td><font style="font-size:18px;"><font style="font-size:28px;font-weight:bold;text-align:center;">本科教学学生评教数据统计分析报告</font><br></font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td><font style="font-size:18px;"><font style="font-size:24px;font-weight:bold;text-align:center;" id="yearString_1">（2015-2016学年第二学期）</font><br><br></font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td><font style="font-size:18px;"><font style="font-size:24px;font-weight:bold;text-align:center;">北京工业大学教务处</font><br></font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td><font style="font-size:18px;"><font style="font-size:26px;font-weight:bold;text-align:center;" id="yearString_2">2016年9月</font></font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
					<tr height="80px"><td></td></tr>
				</table>
				
				<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman"; mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
				mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
				</span>
			
				<table style="width:100%;text-align:left;">
					<tr height="100px"><th><font style="font-size:26px;font-weight:bold;text-align:center;">目录</font><br></th></tr>
					<tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">1、学生评教参与情况分析</font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">2、学生评教指标体系与结果</font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">3、学院得分情况分析</font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">4、全校范围内学生评教得分后50名的课堂</font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">5、全校范围内学生评教得分满分的课堂（6名）</font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">6、<font id="titleXq">2015-2016学年第一学期</font>学生评教后50名课堂的持续改进情况</font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">7、基于课程性质/类别的学生评价分析</font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">8、最喜爱教师的评教情况</font><br></td></tr>
					<tr height="80px"><td></td></tr>
					<tr style="height:80px;"><td style="text-align:left;"><font style="font-size:18px;">9、主要结论与建议</font><br></td></tr>
					<tr height="80px"><td></td></tr>
				</table>
			</div>
			<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:"Times New Roman"; mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;
				mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'>
			</span>
			<div id="updateTab">
			<div style="width:80%;align:center;margin-top:6px;">
				<!-- 1 -->
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<%-- <img src="${pageContext.request.contextPath }/page/analysisReport/img/one.png"> --%>
					<font style="font-size:22px;font-weight:bold;">1、学生评教参与情况分析  </font><div class="removeDiv" style="float:right;"><a href="javascript:xiugaiTxt1();" style="text-size:10px;margin-right:3px;">修改</a><a href="javascript:saveTxt1();">保存</a></div>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<div id="divTxt1">
						校本部&nbsp;<font id="font_1_1" style="color:red;font-weight:bold;"> 15 </font>&nbsp;个学院（部），应参加评价人数&nbsp;<font id="font_1_2" style="color:red;font-weight:bold;">6866</font>&nbsp;人，完全评价人数&nbsp;<font id="font_1_3" style="color:red;font-weight:bold;">6670</font>&nbsp;人，评教率为<font id="font_1_4" style="color:red;font-weight:bold;">97.15%</font>，各学院（部）学生参评率详见表1。本学期评教率与<font id="font_1_5" style="color:red;font-weight:bold;" class="thePre">2015-2016学年第一学期</font>都稳定在95%以上。学生的高度参与主要依靠各学院（部）教务科、班主任和学生科动员学生参与评教，教务处积极组织宣传。实验学院按照北工大评教指标体系独立评教，学生参与评教率均在90%以上。参评学生数量多，大的样本采集数据为评价数据的分析提供保障。
					</div>
					<div style="width:100%;text-align:center;margin-top:0px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>表1 <span id="span_2" class="current">2015-2016学年第二学期</span>校本部各学院（部）学生评教参评率</u>
						</font>
					</div>
					<table id="tab_1" class="tab-1" style="width:100%;text-align:center;margin-top:6px;" border="0" cellspacing="0" cellpadding="0">
						<!-- <tr style="background:#DCDBDB;">
							<td>序号</td>
							<td>学院</td>
							<td>需评人数</td>
							<td>完全评价<br>人数</td>
							<td>部分评价<br>人数</td>
							<td>完全未评价<br>人数</td>
							<td>评教率(%)</td>
						</tr>
						<tr>
							<td>1</td>
							<td>电控学院</td>
							<td>792</td>
							<td>792</td>
							<td>0</td>
							<td>0</td>
							<td>100.00%</td>
						</tr>
						<tr style="background:#F7F7F7;">
							<td>2</td>
							<td>电控学院</td>
							<td>792</td>
							<td>792</td>
							<td>0</td>
							<td>0</td>
							<td>100.00%</td>
						</tr>
						<tr>
							<td>3</td>
							<td>电控学院</td>
							<td>792</td>
							<td>792</td>
							<td>0</td>
							<td>0</td>
							<td>100.00%</td>
						</tr>
						<tr style="background:#F7F7F7;">
							<td>4</td>
							<td>电控学院</td>
							<td>792</td>
							<td>792</td>
							<td>0</td>
							<td>0</td>
							<td>100.00%</td>
						</tr>
						<tr>
							<td>5</td>
							<td>樊恭烋学院</td>
							<td>792</td>
							<td>792</td>
							<td>0</td>
							<td>0</td>
							<td>100.00%</td>
						</tr>
						<tr style="background:#F7F7F7;">
							<td>6</td>
							<td>樊恭烋学院</td>
							<td>792</td>
							<td>792</td>
							<td>0</td>
							<td>0</td>
							<td>100.00%</td>
						</tr>
						<tr>
							<td>7</td>
							<td>樊恭烋学院</td>
							<td>792</td>
							<td>792</td>
							<td>0</td>
							<td>0</td>
							<td>100.00%</td>
						</tr> -->
					</table>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u><span id="span_3" class="current">2015-2016学年第二学期</span>校本部各学院学生评教参评率%</u></font>
						<div id='table_1_3_bt_zc' style='width: 90%;height:400px;padding:20px;margin:45px;margin-top:-10px;'>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 2 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<!-- <br> -->
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">2、学生评教指标体系与结果</font>
					<div class="removeDiv" style="float:right;"><a href="javascript:xiugaiTxt2();" style="text-size:10px;margin-right:3px;">修改</a><a href="javascript:saveTxt2();">保存</a></div>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<div id="divTxt2_1">
						<fort class="current">2015-2016学年第二学期</fort>继续采用的新评教体系（表2），并在评教系统中限定了学生评价课堂优秀率的百分比为40%。在系统的设置和管理中保证教师在确定学生分数前无法看到学生评价情况，学生评教完课程后可以查看该门课程的得分情况，从而减少主观评价的几率。新的指标体系完成了对学评教的持续改进，建立发现问题并持续改进评教体系。新评价体系除了学生评价为主外，还将学生评选喜爱教师作为必选项。此外，督导专家对评教后50名课堂进行专项评价，从而保障教师课堂评价的多视角比较。
					</div>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表2 课程教学评价量表（学生）</u>
						</font>
						<table id="tab_2_1_" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="2" style="width:45%;">评价指标</td><td colspan="5">评价等级</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td width="70px">优</td><td width="70px">良</td><td width="70px">中</td><td width="70px">可</td><td width="70px">差</td>
							</tr>
							<tr>
								<td>总体上我对这门课的教学评价为</td><td></td><td></td><td></td><td></td><td></td>
							</tr>
						</table>
						<!-- <table id="tab_2_1_" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td rowspan="2" colspan="2">评价指标</td><td rowspan="2" width="720px">指标细化</td><td colspan="5">评价等级</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td width="70px">优</td><td width="70px">良</td><td width="70px">中</td><td width="70px">可</td><td width="70px">差</td>
							</tr>
							<tr>
								<td rowspan="2" colspan="2">总体评价</td>
								<td style="text-align:left;padding:5px;">1．总体上我对这门课的教学评价为</td>
								<td id="tr_1_td_1"></td><td id="tr_1_td_2"></td><td id="tr_1_td_3"></td><td id="tr_1_td_4"></td><td id="tr_1_td_5"></td>
							</tr>
							<tr>
								<td style="text-align:left;padding:5px;">2．总体上我对这门课的任课教师评价为</td>
								<td id="tr_2_td_1"></td><td id="tr_2_td_2"></td><td id="tr_2_td_3"></td><td id="tr_2_td_4"></td><td id="tr_2_td_5"></td>
							</tr>
							<tr>
								<td rowspan="2"><div style="padding:8px">课程组织</div></td>
								<td>课程设计</td>
								<td style="text-align:left;padding:5px;">3．教师备课和课堂授课准备充分，并明确告知了我们课程学习目标</td>
								<td id="tr_3_td_1"></td><td id="tr_3_td_2"></td><td id="tr_3_td_3"></td><td id="tr_3_td_4"></td><td id="tr_3_td_5"></td>
							</tr>
							<tr>
								<td>课堂组织</td>
								<td style="text-align:left;padding:5px;">4．教师课堂教学脱稿授课，教学时间分配合理</td>
								<td id="tr_4_td_1"></td><td id="tr_4_td_2"></td><td id="tr_4_td_3"></td><td id="tr_4_td_4"></td><td id="tr_4_td_5"></td>
							</tr>
							<tr>
								<td rowspan="4"><div style="padding:8px">教学内容</div></td>
								<td>目标相关度</td>
								<td style="text-align:left;padding:5px;">5．课堂教学内容与公布的课程学习目标相符</td>
								<td id="tr_5_td_1"></td><td id="tr_5_td_2"></td><td id="tr_5_td_3"></td><td id="tr_5_td_4"></td><td id="tr_5_td_5"></td>
							</tr>
							<tr>
								<td>阅读</td>
								<td style="text-align:left;padding:5px;">6．学习用教材和教师要求课外学习的材料合适，对课程学习很有帮助</td>
								<td id="tr_6_td_1"></td><td id="tr_6_td_2"></td><td id="tr_6_td_3"></td><td id="tr_6_td_4"></td><td id="tr_6_td_5"></td>
							</tr>
							<tr>
								<td>作业</td>
								<td style="text-align:left;padding:5px;">7．课程作业难度和数量合适，有助于学习和掌握课程相关内容</td>
								<td id="tr_7_td_1"></td><td id="tr_7_td_2"></td><td id="tr_7_td_3"></td><td id="tr_7_td_4"></td><td id="tr_7_td_5"></td>
							</tr>
							<tr>
								<td>挑战度</td>
								<td style="text-align:left;padding:5px;">8．教师教学能够及时吸收新成果、反映新信息，课程学习要求对我们富有启发性和挑战性</td>
								<td id="tr_8_td_1"></td><td id="tr_8_td_2"></td><td id="tr_8_td_3"></td><td id="tr_8_td_4"></td><td id="tr_8_td_5"></td>
							</tr>
							<tr>
								<td rowspan="2"><div style="padding:8px">教学方法</div></td>
								<td>教学过程</td>
								<td style="text-align:left;padding:5px;">9．教师能很好地激发我在课堂上自由提出问题，经常鼓励我对学习内容进行批判性思考</td>
								<td id="tr_9_td_1"></td><td id="tr_9_td_2"></td><td id="tr_9_td_3"></td><td id="tr_9_td_4"></td><td id="tr_9_td_5"></td>
							</tr>
							<tr>
								<td>评价与反馈</td>
								<td style="text-align:left;padding:5px;">10．教师能及时反馈作业情况，并通过课堂提问、作业、小测验、考查、考试等多种方法来综合评价学习成绩</td>
								<td id="tr_10_td_1"></td><td id="tr_10_td_2"></td><td id="tr_10_td_3"></td><td id="tr_10_td_4"></td><td id="tr_10_td_5"></td>
							</tr>
							<tr>
								<td rowspan="2"><div style="padding:8px">师生关系</div></td>
								<td>教学态度</td>
								<td style="text-align:left;padding:5px;">11．教师对教学满怀激情，对待学生公平、公正</td>
								<td id="tr_11_td_1"></td><td id="tr_11_td_2"></td><td id="tr_11_td_3"></td><td id="tr_11_td_4"></td><td id="tr_11_td_5"></td>
							</tr>
							<tr>
								<td>师生互动</td>
								<td style="text-align:left;padding:5px;">12．教师十分了解我们学习中的困难和学习需求，在需要时总能从教师那获得有效帮助和解答</td>
								<td id="tr_12_td_1"></td><td id="tr_12_td_2"></td><td id="tr_12_td_3"></td><td id="tr_12_td_4"></td><td id="tr_12_td_5"></td>
							</tr>
							<tr>
								<td rowspan="3"><div style="padding:8px">学生发展</div></td>
								<td>兴趣培养</td>
								<td style="text-align:left;padding:5px;"">13．通过学习我增加了对本课程内容学习的兴趣</td>
								<td id="tr_13_td_1"></td><td id="tr_13_td_2"></td><td id="tr_13_td_3"></td><td id="tr_13_td_4"></td><td id="tr_13_td_5"></td>
							</tr>
							<tr>
								<td>知识与技能掌握</td>
								<td style="text-align:left;padding:5px;">14．我现在能够阐述该课程的主要内容和中心问题，熟练运用相关（实验）技能与方法</td>
								<td id="tr_14_td_1"></td><td id="tr_14_td_2"></td><td id="tr_14_td_3"></td><td id="tr_14_td_4"></td><td id="tr_14_td_5"></td>
							</tr>
							<tr>
								<td>能力发展</td>
								<td style="text-align:left;padding:5px;">15．我解决本课程领域问题的能力得到了提高</td>
								<td id="tr_15_td_1"></td><td id="tr_15_td_2"></td><td id="tr_15_td_3"></td><td id="tr_15_td_4"></td><td id="tr_15_td_5"></td>
							</tr>
							<tr>
								<td colspan="2">开放性评价问题</td>
								<td colspan="6" style="text-align:left;padding:5px;">16．我最喜欢或最不喜欢该课或该教师的什么？<br>17．我认为本课程或任课教师的教学还需要做哪些方面的改进？<br>18．其他评价意见与建议</td>
							</tr>
						</table> -->
					</div>
					<br>
					<div id="divTxt2_2">
						表3中给出了<font id="font_2_1" class="current">2015-2016学年第二学期</font>校本部学生评价结果。学生评价全校课堂得分平均
						<font id="font_2_2" style="color:red;font-weight:bold;">87.81</font>分。这一分数与<font id="font_2_3" style="color:red;font-weight:bold;" class="thePre">2015-2016学年第一学期</font>
						的平均评教分数基本持平，较<font id="font_2_4" class="current">2014-2015学年第二学期</font>和<font class="thePre">2014-2015学年第一学期</font>两个学期的平均得分有所下降。
						这可能是由于在评教系统中限定了学生评价课堂优秀率的百分比为40%的原因，实现了对优秀率的分布要求，确保学生作为评判个体对所上课程的打分有区分，对课堂质量有思考。评教结果表明学生对我校本科教学总体状况评价比较满意。
						这是对我校教师在教学能力、职业操守和师德师风等诸多方面的综合肯定。表4所示为近三年校本部学生评教得分情况。
					</div>
					<div style="width:100%;text-align:center;margin-top:15px;">
					<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>表3 <span id="span_4" class="current">2015-2016学年第二学期</span>校本部学生评教得分情况</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td>评价指标</td><td>平均得分</td>
							</tr>
							<tr>
								<td>总体上我对这门课的教学评价为</td><td id="tab_2_td_1"></td>
							</tr>
							<!-- <tr>
								<td>2</td><td style="text-align:left;padding:8px;">总体上我对这门课的任课教师评价为</td><td id="tab_2_td_2"></td>
							</tr>
							<tr>
								<td>3</td><td style="text-align:left;padding:8px;">教师备课和课堂授课准备充分，并明确告知了我们课程学习目标</td><td id="tab_2_td_3"></td>
							</tr>
							<tr>
								<td>4</td><td style="text-align:left;padding:8px;">教师课堂教学脱稿授课，教学时间分配合理</td><td id="tab_2_td_4"></td>
							</tr>
							<tr>
								<td>5</td><td style="text-align:left;padding:8px;">课堂教学内容与公布的课程学习目标相符</td><td id="tab_2_td_5"></td>
							</tr>
							<tr>
								<td>6</td><td style="text-align:left;padding:8px;">学习用教材和教师要求课外学习的材料合适，对课程学习很有帮助</td><td id="tab_2_td_6"></td>
							</tr>
							<tr>
								<td>7</td><td style="text-align:left;padding:8px;">课程作业难度和数量合适，有助于学习和掌握课程相关内容</td><td id="tab_2_td_7"></td>
							</tr>
							<tr>
								<td>8</td><td style="text-align:left;padding:8px;">教师教学能够及时吸收新成果、反映新信息，课程学习要求对我们富有启发性和挑战性</td><td id="tab_2_td_8"></td>
							</tr>
							<tr>
								<td>9</td><td style="text-align:left;padding:8px;">教师能很好地激发我在课堂上自由提出问题，经常鼓励我对学习内容进行批判性思考</td><td id="tab_2_td_9"></td>
							</tr>
							<tr>
								<td>10</td><td style="text-align:left;padding:8px;">教师能及时反馈作业情况，并通过课堂提问、作业、小测验、考查、考试等多种方法来综合评价学习成绩</td><td id="tab_2_td_10"></td>
							</tr>
							<tr>
								<td>11</td><td style="text-align:left;padding:8px;">教师对教学满怀激情，对待学生公平、公正</td><td id="tab_2_td_11"></td>
							</tr>
							<tr>
								<td>12</td><td style="text-align:left;padding:8px;">教师十分了解我们学习中的困难和学习需求，在需要时总能从教师那获得有效帮助和解答</td><td id="tab_2_td_12"></td>
							</tr>
							<tr>
								<td>13</td><td style="text-align:left;padding:8px;">通过学习我增加了对本课程内容学习的兴趣</td><td id="tab_2_td_13"></td>
							</tr>
							<tr>
								<td>14</td><td style="text-align:left;padding:8px;">我现在能够阐述该课程的主要内容和中心问题，熟练运用相关（实验）技能与方法</td><td id="tab_2_td_14"></td>
							</tr>
							<tr>
								<td>15</td><td style="text-align:left;padding:8px;">我解决本课程领域问题的能力得到了提高</td><td id="tab_2_td_15"></td>
							</tr>
							<tr>
								<td colspan="2">综合评价均分</td><td id="tab_2_td_16"></td>
							</tr> -->
						</table>
					</div>
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>表4 近三年校本部学生评教得分情况</u>
						</font>
						<table id="tab_2_3" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<!-- <tr style="background:#DCDBDB;">
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
							</tr>-->						
						</table>
					</div>
					
					<br>
						<div id="divTxt2_3">
							按照分数考察课堂数量的分布情况见图1。<font id="font_2_5" class="current">2015-2016学年第二学期</font>学生有效评价课堂数
							<font id="font_2_6" style="color:red;font-weight:bold;">1271</font>个，涉及<font id="font_2_7" style="color:red;font-weight:bold;">864</font>位任课教师。
							<font id="font_2_8" style="color:red;font-weight:bold;">评价得分≥90分课堂数321个，占有效评价课堂数25.25%；得分<90且≥85分课堂数782个，占有效评价课堂数61.53%，
							得分<85分课堂数168个，占有效评价课堂数13.22%。</font>课堂评价在85分区间呈现出正态分布的峰值，表明学生评教结果在课堂上呈现出很好的正态分布。修订后的学生评价体系和优秀课堂百分比的限定将课堂评分拉开，
							解决了历年来评教中突出的学生评教结果差异较小的问题，促进了学生的对课堂教学质量的比较性思考。
						</div>
					<br>
					
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;padding-bottom:14px;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>图1 <span id="span_5" current="current">2015-2016学年第二学期</span>学生评教评分分布情况</u></font>
						<div id='container_1' style='width: 90%;height:400px;padding:20px;margin-top:-10px;'>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 3 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">3、学院（部）得分情况分析</font>
					<div class="removeDiv" style="float:right;"><a href="javascript:xiugaiTxt3();" style="text-size:10px;margin-right:3px;">修改</a><a href="javascript:saveTxt3();">保存</a></div>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<div id="divTxt3">
						<span id="span_6" class="current">2015-2016学年第二学期学生</span>评教结果按照学院（部）平均分统计见表5。本学期全校平均分<font id="font_3_1" style="color:red;font-weight:bold;">87.81</font>分。学生评价平均分高于全校平均分的学院（部）有：体育部、外语学院、人文学院、建规学院、数理学院和建工学院。从学院（部）分布看，学生对基础课学院的评价较高。学生评教低于平均分的学院（部）有11个。
					</div>
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表5 <span id="span_7" class="current">2015-2016学年第二学期学生</span>评教各学院（部）得分情况</u>
						</font>
						<table id="tab_3" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
						</table>
					</div>
				</div>
			</div>
			
			<!-- 4 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">4、全校范围内学生评教得分后50名的课堂</font>
					<div class="removeDiv" style="float:right;"><a href="javascript:xiugaiTxt4();" style="text-size:10px;margin-right:3px;">修改</a>
					<a href="javascript:saveTxt4();">保存</a></div>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<div id="divTxt4_1">
						<font class="current">2015-2016学年第二学期</font>学生评教全校后50名课堂在学院（部）的分布情况见图2。得分在<font id="font_4_1" style="color:red;font-weight:bold;">83.58~74.655</font>分为本次评教全校后50名课堂。在基础课教学学院中马克主义学院的50名课堂相对较多。<font class="current">2015-2016学年第二学期</font>学生评教后50名课堂情况及其学生主要评价总结在表6中。其中2位老师有两个课堂学生评分都在后50名课堂之内。
					</div>
					<br>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>图2 <span id="span_8" class="current">2015-2016学年第二学期</span>学生评教后50名课堂分布情况</u></font>
						<div id='container_2' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'></div>
						<!-- <table></table> -->
					</div>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表6 <font class="current">2015-2016学年第二学期</font>学生评教后50名课堂情况统计表</u>
						</font>
						<table id="tab_4_1" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
						</table>
					</div>
					<br>
					<div id="divTxt4_2">
						与<font class="thePre">2015-2016学年第一学期</font>学生评教后50名课堂的分布情况对比，两个学期学生评教均在后50名课堂的任课教师有：电控学院李家军老师（表7）。两学期的对比表明教师很重视学生的反馈，并在课堂教学中积极做出了改革，促进了课堂质量的持续建设。
					</div>
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表7 两个学期学生评教均在后50名课堂情况统计表</u>
						</font>
						<table id="tab_4_2" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
						</table>
					</div>
				</div>
			</div>
			
			<!-- 5 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">5、全校范围内学生评教得分满分的课堂</font>
					<div class="removeDiv" style="float:right;"><a href="javascript:xiugaiTxt5();" style="text-size:10px;margin-right:3px;">修改</a><a href="javascript:saveTxt5();">保存</a></div>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<div id="divTxt5">
					表8列出了<font class="current">2015-2016学年第二学期</font>学生评教得分满分的课堂。在全校1271门课堂中，有<font id="font_5_1" style="color:red;font-weight:bold;">6门</font>课堂获得满分评价，其中外语学院山下纯市老师已经连续四个学期均有课堂获得满分评价
					<!-- 在<font id="font_5_2" style="color:red;font-weight:bold;">6门</font>满分课堂中，经管学院有2门，占33% -->（图3）。
					</div>
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表8 <span id="span_9" class="current">2015-2016学年第二学期</span>学生评教得分满分的课堂（6名）统计表</u>
						</font>
						<table id="tab_5_1" class="tab-2_1" align="center" style="text-align:center;margin-top:15px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<!-- <tr style="background:#DCDBDB;">
								<td>序号</td>
								<td>教师姓名</td>
								<td>课程代码</td>
								<td>课程名称</td>
								<td>对教师评分</td>
								<td>学院</td>
							</tr>
							<tr>
								<td>1</td>
								<td>张印春</td>
								<td>0001208</td>
								<td>电子工程设计Ⅰ-3</td>
								<td>95.00</td>
								<td>电子信息与控制工程学院</td>
							</tr>
							<tr>
								<td>2</td>
								<td>吕元</td>
								<td>0008282</td>
								<td>建筑设计初步I-2</td>
								<td>95.00</td>
								<td>建筑与城市规划学院</td>
							</tr>
							<tr>
								<td>3</td>
								<td>洪涓</td>
								<td>0007623</td>
								<td>国际贸易实务模拟</td>
								<td>95.00</td>
								<td>经济与管理学院</td>
							</tr>
							<tr>
								<td>4</td>
								<td>张艾莉</td>
								<td>0003733</td>
								<td>SAS应用</td>
								<td>95.00</td>
								<td>经济与管理学院</td>
							</tr> -->
						</table>
					</div>
					
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;padding-bottom:14px;">
					<br>
					<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>图3 <font class="current">2015-2016学年第二学期</font>学生评教得分满分的课堂（6名）各学院分布情况</u></font>
						<div id='container_4' style='width: 90%;height:400px;padding:20px;margin-top:-15px;margin-left:30px;'>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 6 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">6、<font id="xqSix">2015-2016学年第一学期</font>学生评教后50名课堂的持续改进情况</font>
					<div class="removeDiv" style="float:right;"><a href="javascript:xiugaiTxt6();" style="text-size:10px;margin-right:3px;">修改</a><a href="javascript:saveTxt6();">保存</a></div>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<div id="divTxt6_1">
						在<font class="current">2015-2016学年第二学期</font>继续完善多元互补的教师教学评教机制，督导专家以重点课堂作为专项，基于<font class="thePre">2015-2016学年第一学期</font>学生评教后50名课程专项听课，为提高课堂教学提出建设意见，并直接反馈任课教师。
						<font class="thePre">2015-2016学年第一学期</font>学生评教后50名课堂的任课教师中有13名教师在<font class="current">2015-2016学年第二学期</font>有督导专家专项听课，<font class="thePre">2015-2016学年第一学期</font>学生评教后50名课堂部分任课教师本学期评价对照见表9。
					</div>
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表9 <span id="span_10" class="thePre">2015-2016学年第一学期</span>学生评教后50名课堂部分任课教师本学期督导专家评价情况</u>
						</font>
						<table id="tab_6_1" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
						</table>
					</div>
					<br>
						<div id="divTxt6_2">
						从表9中可以看出，<font class="thePre">2015-2016学年第一学期</font>学生评教后50名课堂督导专家专项听课的13名任课教师中有12名教师本学期学生评教的评分已不在后50名课堂之内，只有1门课程仍在后50名的评价中，持续改进效果明显。表10所示为<font class="thePre">2015-2016学年第一学期</font>学生评教后50名课堂部分任课教师本学期督导专家评语。从评语中体现督导组专家对教师做出的改进给予了很高的评价。从学生评价角度也证明学生对教师教学质量得到认可。
						</div>
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表10 <span id="span_11" class="thePre">2015-2016学年第一学期</span>学生评教后50名课堂部分任课教师本学期督导专家评语</u>
						</font>
						<table id="tab_6_2" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
						</table>
					</div>
				</div>
			</div>
			
			<!-- 7 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">7、基于课程性质/类别的学生评价分析</font>
					<div class="removeDiv" style="float:right;"><a href="javascript:xiugaiTxt7();" style="text-size:10px;margin-right:3px;">修改</a><a href="javascript:saveTxt7();">保存</a></div>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<div id="divTxt7_1">
						<font class="current">2015-2016学年第二学期</font>学生有效评价课堂数1271个，其中公共基础课171门，学科基础课467门，专业课303门，通识教育选修课/校选课164门，实践环节166门，双语课程30门（只占全部课堂的2.4%，其中学科基础课13门，专业课17门）。<font class="current">2015-2016学年第二学期</font>基于课程性质/类别的学生评价分析见图4。
					</div>
					<br>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;padding-bottom:14px;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>图4 <font class="current">2015-2016学年第二学期</font>基于课程性质/类别的学生评价分析</u></font>
						<div id='container_5' style='width: 90%;height:400px;padding:20px;margin-top:-15px;margin-left:30px;'>
						</div>
					</div>
					<br>
					<div id="divTxt7_2">
						从图4中可以看出，公共基础课评分（89.23）明显高于本学期学生评教平均分，学科基础课评分（88.04）稍高于本学期学生评教平均分，而专业课评分（87.46）、实践环节评分（87.09）和通识教育选修课/校选课评分（87.07）均明显低于本学期学生评教平均分。这与上学期各学院后10名课堂课程性质分析基本一致，应更加关注专业课、实践环节和通识教育选修课的课堂质量持续改进。另外，双语课程评分（87.66）略低于本学期学生评教的平均分，各学院应更加关注专业需要和学生需求，提高双语课程的教学质量。
					</div>
				</div>
			</div>
			
			<!-- 8 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">8、最喜爱教师的评教情况</font>
					<div class="removeDiv" style="float:right;"><a href="javascript:xiugaiTxt8();" style="text-size:10px;margin-right:3px;">修改</a><a href="javascript:saveTxt8();">保存</a></div>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<div id="divTxt8_1">
						在<font class="current">2015-2016学年第二学期</font>的学生评教中，继续将“喜爱教师”的评价指标纳入评价体系，旨在选出授课有特色，受到学生喜爱的教师。<font class="current">2015-2016学年第二学期</font>学生评教最喜爱教师情况如表11所示。
					</div>
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表11 <span id="span_12" class="current">2015-2016学年第二学期</span>学生评教最喜爱教师情况</u>
						</font>
						<table id="tab_8" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td>排序</td>
								<td>姓名</td>
								<td>所在学院</td>
								<td>课程</td>
								<td>学生评分</td>
							</tr>
						</table>
					</div>
					<br>
					<div id="divTxt8_2">
						从表11中可以看出，最喜爱教师授课的10门课均超过本学期学生评教的平均分，且集中在90分以上，并有2门满分课堂（全校6门）。在这10位教师中，既然授课多年，有丰富教学经验的老教师，也有中青年骨干教师。从这10位教师的讲授课程上看，主要为公共基础课和学科基础课。这类课程上课人数较多，学生基数大，投票人群面广的特点可能对这一结果起到的积极的贡献。
					</div>
					<br>
				</div>
			</div>
			
			<!-- 9 -->
			<div style="width:80%;align:center;margin-top:6px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">9、主要结论与建议</font>
					<div class="removeDiv" style="float:right;"><a href="javascript:xiugaiTxt9();" style="text-size:10px;margin-right:3px;">修改</a><a href="javascript:saveTxt9();">保存</a></div>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<div id="divTxt9">
						<font class="current">2015-2016学年第二学期</font>继续采用的新评教体系，在评教系统中限定了学生评价课堂优秀率的百分比为40%，并在学生评教完课程后可以查看该门课程的实时评教情况，
						完成了对学评教的持续改进，建立发现问题并持续改进评教体系。学生综合评价得分87.81分，与<font class="thePre">2015-2016学年第一学期</font>基本持平，较<font id="preXN">2014-2015学年第二学期和2014-2015学年第一学期</font>两个学期的平均得分有所下降。
						这体现出新体系对学生客观评价课程，比较思考课堂质量的积极作用。学生评价呈现正态分布，在85分呈现峰值。表明我校课堂教学质量整体较好。
						<font class="thePre">2015-2016学年第一学期</font>学生评教后50名课堂督导专家专项听课的13名任课教师中有12名教师本学期学生评教的评分已不在后50名课堂之内，持续改进效果明显。这一举措，促进了教师对课堂教学的反思和总结，
						促进了课堂教学质量的持续提高。
						<font class="current">2015-2016学年第二学期</font>的学生评教中最喜爱教师授课的10门课均超过本学期学生评教的平均分，且集中在90分以上，并有2门满分课堂（全校6门）。
						目前，学生评价结果从数据采集，评价机制和结果分析都已经平稳。根据近几年的学生评教结果分析，建议二级学院（部）深化对专业和学科的数据分析，从而充分了解本学院（部）在学生评教中反映出的问题，
						指导本科培养和本科教学质量的持续改进和提高。在此基础上，进一步细致分析本学院（部）教学状况，利用学生评教手段找出教学中的不足，及时解决学生评价得分较低课堂中的问题，促进学院教师教学水平整体提高。
						今后将持续加强课堂质量监控，以OBE为导向关注学生对课堂教学的需求。充分利用教师教学发展中心平台提高广大教师教学能力与水平，持续推进本科教学工程建设，夯实学校“十三五”建设规划目标，切实提高本科教学水平。
					</div>
					<br>
				</div>
			</div>
			</div>
		   </div>		
		</center>
	</div>
	<br><br><br><br>
</body>
</html>

