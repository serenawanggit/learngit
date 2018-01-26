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
	</style>
</head>

<body>

	<div>
		<div
			style="width:100%;height:40px;font-weight:bold;text-align:center;background:#4D99AE;font-size:20px;padding-top:10px;color:#fff;margin-top:10px;">
			2015-2016学年第二学期本科教学学生评教数据统计分析报告</div>
		  <center>
			<div style="width:80%;align:center;margin-top:6px;">
				<div style="margin-top:8px;text-align:left;">
					<font style="font-weight:bold;">当前时间：</font>
					<font id="showDate" style="color:red;font-weight:bold;">2017年6月17日</font>&nbsp;&nbsp;&nbsp;&nbsp;
					<font style="font-weight:bold;">选择学期：</font>
					<select id="year">
						<option value="2015/09/30">2014-2015学年第一学期</option>
						<option selected="selected" value="2016/09/30">2015-2016学年第一学期</option>
						<option value="2017/09/30">2016-2017学年第一学期</option>
						<option value="2018/09/30">2017-2018学年第一学期</option>
					</select>
					<div style="float:right;">
						<a href="javascript:void(0);" onclick="downupload();"><img src="${pageContext.request.contextPath }/page/analysisReport/img/export.jpg"></a>
					</div>
				</div>
			</div>
			<div id="bodyDiv1">
			<div style="width:80%;align:center;margin-top:6px;">
				<!-- 1 -->
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<%-- <img src="${pageContext.request.contextPath }/page/analysisReport/img/one.png"> --%>
					<font style="font-size:22px;font-weight:bold;">1、学生评教参与情况分析</font>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					校本部&nbsp;<font id="font_1_1" style="color:red;font-weight:bold;">15</font>&nbsp;个学院，应参加评价人数&nbsp;<font id="font_1_2" style="color:red;font-weight:bold;">6866</font>&nbsp;人，完全评价人数&nbsp;<font id="font_1_3" style="color:red;font-weight:bold;">6670</font>&nbsp;人，评教率为<font id="font_1_4" style="color:red;font-weight:bold;">97.15%</font>，各学院学生参评率详见表1。本学期评教率与<font id="font_1_5" style="color:red;font-weight:bold;">2015-2016第一学期</font>都稳定在95%以上。学生的高度参与主要依靠各学院教务科、班主任和学生科动员学生参与评教，教务处积极组织宣传。实验学院、艺术学院按照北工大评教指标体系独立评教，学生参与评教率均在90%以上。参评学生数量多，大的样本采集数据为评价数据的分析提供保障。
					<div style="width:100%;text-align:center;margin-top:0px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>表1 2015-2016学年第二学期校本部各学院学生评教参评率</u>
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
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>2015-2016学年第二学期校本部各学院学生评教参评率%</u></font>
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
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					2015-2016学年第二学期继续采用的新评教体系（表2），并在评教系统中限定了学生评价课堂优秀率的百分比为40%。在系统的设置和管理中保证教师在确定学生分数前无法看到学生评价情况，学生评教完课程后可以查看该门课程的得分情况，从而减少主观评价的几率。新的指标体系完成了对学评教的持续改进，建立发现问题并持续改进评教体系。新评价体系除了学生评价为主外，还将学生评选喜爱教师作为必选项。此外，督导专家对评教后50名课堂进行专项评价，从而保障教师课堂评价的多视角比较。
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表2 北京工业大学课程教学评价量表（学生）</u>
						</font>
						<table id="tab_2_1" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<!-- <tr style="background:#DCDBDB;">
								<td rowspan="2" style="width:50%;">评价指标</td>
								<td colspan="5" style="width:50%;">评价等级</td>
							</tr>
							<tr style="background:#DCDBDB;">
								<td>优</td>
								<td>良</td>
								<td>中</td>
								<td>可</td>
								<td>差</td>
							</tr>
							<tr>
								<td>总体上我对这门课的教学评价为	</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr> -->
						</table>
					</div>
					<br>
					表3中给出了<font id="font_2_1" style="color:red;font-weight:bold;">2015-2016学年第二学期</font>校本部学生评价结果。学生评价全校课堂得分平均<font id="font_2_2" style="color:red;font-weight:bold;">87.81</font>分。这一分数与<font id="font_2_3" style="color:red;font-weight:bold;">2015-2016学年第一学期</font>的平均评教分数基本持平，较<font id="font_2_4" style="color:red;font-weight:bold;">2014-2015学年第二学期和2014-2015学年第一学期</font>两个学期的平均得分有所下降。
					这可能是由于在评教系统中限定了学生评价课堂优秀率的百分比为40%的原因，实现了对优秀率的分布要求，确保学生作为评判个体对所上课程的打分有区分，对课堂质量有思考。评教结果表明学生对我校本科教学总体状况评价比较满意。这是对我校教师在教学能力、职业操守和师德师风等诸多方面的综合肯定。表4所示为近三年校本部学生评教得分情况。
					<div style="width:100%;text-align:center;margin-top:15px;">
					<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;">
							<u>表3 2015-2016学年第二学期校本部学生评教得分情况</u>
						</font>
						<table class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td style="width:300px;">评价指标</td>
								<td width="160px;">平均得分</td>
							</tr>
							<tr>
								<td>总体上我对这门课的教学评价为</td>
								<td id="tab_2_2">0</td>
							</tr>
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
						按照分数考察课堂数量的分布情况见图1。<font id="font_2_5" style="color:red;font-weight:bold;">2015-2016学年第二学期</font>学生有效评价课堂数<font id="font_2_6" style="color:red;font-weight:bold;">1271</font>个，涉及<font id="font_2_7" style="color:red;font-weight:bold;">864</font>位任课教师。
						<font id="font_2_8" style="color:red;font-weight:bold;">评价得分≥90分课堂数321个，占有效评价课堂数25.25%；得分<90且≥85分课堂数782个，占有效评价课堂数61.53%，得分<85分课堂数168个，占有效评价课堂数13.22%。</font>课堂评价在85分区间呈现出正态分布的峰值，表明学生评教结果在课堂上呈现出很好的正态分布。修订后的学生评价体系和优秀课堂百分比的限定将课堂评分拉开，解决了历年来评教中突出的学生评教结果差异较小的问题，促进了学生的对课堂教学质量的比较性思考。
					<br>
					
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;padding-bottom:14px;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>图1 2015-2016学年第二学期学生评教评分分布情况</u></font>
						<div id='container_1' style='width: 90%;height:400px;padding:20px;margin-top:-10px;'>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 3 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">3、学院得分情况分析</font>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					2015-2016学年第二学期学生评教结果按照学院平均分统计见表5。本学期全校平均分<font id="font_3_1" style="color:red;font-weight:bold;">87.81</font>分。学生评价平均分高于全校平均分的学院有：体育部、外语学院、人文学院、建规学院、数理学院和建工学院。从学院分布看，学生对基础课学院的评价较高。学生评教低于平均分的学院有11个。
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表5 2015-2016学年第二学期学生评教各学院得分情况</u>
						</font>
						<table id="tab_3" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<!-- <tr style="background:#DCDBDB;">
								<td>序号</td>
								<td>学院</td>
								<td>平均得分</td>
							</tr>
							<tr>
								<td width="50px">1</td>
								<td width="50px">体育部</td>
								<td width="50px">89.83</td>
							</tr>
							<tr>
								<td width="50px">2</td>
								<td width="50px">外语学院</td>
								<td width="50px">88.68</td>
							</tr>
							<tr>
								<td width="50px">3</td>
								<td width="50px">人文学院</td>
								<td width="50px">87.10</td>
							</tr>
							<tr>
								<td width="50px">4</td>
								<td width="50px">建规学院</td>
								<td width="50px">86.56</td>
							</tr>
							<tr>
								<td width="50px">5</td>
								<td width="50px">马克思主义学院</td>
								<td width="50px">85.80</td>
							</tr>
							<tr>
								<td width="50px">6</td>
								<td width="50px">循环院</td>
								<td width="50px">84.62</td>
							</tr> -->
						</table>
					</div>
				</div>
			</div>
			
			<!-- 4 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">4、全校范围内学生评教得分后50名的课堂</font>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					<!-- 2015-2016学年第二学期 -->学生评教全校后50名课堂在学院的分布情况见图2。得分在<font id="font_4_1" style="color:red;font-weight:bold;">83.58~74.655</font>分为本次评教全校后50名课堂。在基础课教学学院中马克主义学院的50名课堂相对较多。2015-2016学年第二学期学生评教后50名课堂情况及其学生主要评价总结在表6中。其中2位老师有两个课堂学生评分都在后50名课堂之内。
					<br>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>图2 2015-2016学年第二学期学生评教后50名课堂分布情况</u></font>
						<div id='container_2' style='width: 90%;height:460px;padding:20px;margin:45px;margin-bottom:-18px;margin-top:-10px;'>
						</div>
						<table></table>
					</div>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表6 <!-- 2015-2016学年第二学期 -->学生评教后50名课堂情况统计表</u>
						</font>
						<table id="tab_4_1" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<!-- <tr style="background:#DCDBDB;">
								<td>倒数排序</td>
								<td>教师姓名</td>
								<td>课程名称</td>
								<td>教师得分</td>
								<td width="370px">学生评语中的主要问题</td>
								<td>所在学院</td>
							</tr>
							<tr>
								<td>50</td>
								<td>姜海山</td>
								<td>毛泽东思想和中国特色社会主义理论体系概论</td>
								<td>83.58</td>
								<td><div style="margin:5px;">老师上课认真。老师在评价时事这一块安排得很好，不过书本上的内容应该适当增多。老师上课只是画书，看视频。有些枯燥，课前演讲部分本来是好的方式，可是同学们要牵强地与课本联系，并不妥当，还容易造成更多压力和负面影响。希望老师上课的知识点多联系实际中的实例这样更容易理解。</div></td>
								<td>马克思主义学院</td>
							</tr>
							<tr>
								<td>49</td>
								<td>尹素菊</td>
								<td>回归分析与实验</td>
								<td>83.58</td>
								<td><div style="margin:5px;">老师教的很好，风格很另辟蹊径，负责任，批改作业及时，但作业留的时间太紧，规定不够细化。有时候听不太清，课件对作业帮助不大，建议课堂理论与实例或例题联系起来。老师说得不太细致，纯理论讲的太多了，更应该考虑一下如何使用的问题。 </div></td>
								<td>应用数学学院</td>
							</tr>
							<tr>
								<td>48</td>
								<td>高峰</td>
								<td>马克思主义基础原理</td>
								<td>83.58</td>
								<td><div style="margin:5px;">老师耐心认真，关心同学，老师的气质中正威严，只是大多数课时没有意思，老师教学方式像教初中生，教师知识面广阔，课堂氛围融洽。老师要是更有意思就好了，本来课的内容对于理科生就很陌生无聊，不喜欢这种课，但是我觉得这个老师讲的很好，确实可以学到一些知识。老师讲课很生动，将难理解的理论解释得很清楚。</div></td>
								<td>马克思主义学院</td>
							</tr>
							<tr>
								<td>47</td>
								<td>杨旭东</td>
								<td>文科物理趣味延时演示</td>
								<td>83.58</td>
								<td><div style="margin:5px;">课程生动有趣，老师很细心，讲的很耐心。少做一些实验，期末要求太多；真的没怎么听懂，希望老师能多讲一些内容，实验要求量大多，对文科生来说有些困难。感觉老师不用备课，讲的东西少还听不懂，自己花钱准备器材。实验给分忽高忽低，有的同学讲错了是90，有的同学讲对了却是80。笔记给分挺合理的。有时候老师提的问题很奇怪，而且无法给出解答。 </div></td>
								<td>应用数理学院</td>
							</tr> -->
						</table>
					</div>
					<br>
					与2015-2016学年第一学期学生评教后50名课堂的分布情况对比，两个学期学生评教均在后50名课堂的任课教师有：电控学院李家军老师（表7）。两学期的对比表明教师很重视学生的反馈，并在课堂教学中积极做出了改革，促进了课堂质量的持续建设。
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表7 两个学期学生评教均在后50名课堂情况统计表</u>
						</font>
						<table id="tab_4_2" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<!-- <tr style="background:#DCDBDB;">
								<td>学院</td>
								<td>教师姓名</td>
								<td>课程名称</td>
								<td>教师得分</td>
								<td>学生评语中的主要问题</td>
							</tr>
							<tr>
								<td rowspan="2">电控学院</td>
								<td rowspan="2">李家军</td>
								<td>C#程序设计基础</td>
								<td>82.391</td>
								<td rowspan="2" width="470px"><div style="margin:5px;">教学认真负责。或许有一点是大家都要提的吧，没有课间休息，拖堂有时候挺严重的。老师可以增加同学的操作实践的次数，上课所讲内容枯燥，拖堂相当严重。上课内容大都英文，说的不太清楚，听不懂。增加一些实践机会；老师题外话较多，导致经常拖堂，才能讲完课程内容，希望改正；难度太大，听不太懂，老师语速太快；授课方式太单调；讲解的东西太基础。教学的内容重复太多次数，而且经常容易跑题。</div></td>
							</tr>
							<tr>
								<td>C++程序设计基础</td>
								<td>82.833</td>
							</tr> -->
						</table>
					</div>
				</div>
			</div>
			
			<!-- 5 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">5、全校范围内学生评教得分满分的课堂</font>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					表8列出了<!-- 2015-2016学年第二学期 -->学生评教得分满分的课堂。在全校1271门课堂中，有<font id="font_5_1" style="color:red;font-weight:bold;">6门</font>课堂获得满分评价，其中外语学院山下纯市老师已经连续四个学期均有课堂获得满分评价。在<font id="font_5_2" style="color:red;font-weight:bold;">6门</font>满分课堂中，经管学院有2门，占33%（图3）。
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表8 2015-2016学年第二学期学生评教得分满分的课堂（6名）统计表</u>
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
					<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>图3 <!-- 2015-2016学年第二学期 -->学生评教得分满分的课堂（6名）各学院分布情况</u></font>
						<div id='container_4' style='width: 90%;height:400px;padding:20px;margin-top:-15px;margin-left:30px;'>
						</div>
					</div>
				</div>
			</div>
			
			<!-- 6 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">6、<!-- 2015-2016学年第一学期 -->学生评教后50名课堂的持续改进情况</font>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					在<!-- 2015-2016学年第二学期 -->继续完善多元互补的教师教学评教机制，督导专家以重点课堂作为专项，基于2015-2016学年第一学期学生评教后50名课程专项听课，为提高课堂教学提出建设意见，并直接反馈任课教师。2015-2016学年第一学期学生评教后50名课堂的任课教师中有13名教师在2015-2016学年第二学期有督导专家专项听课，2015-2016学年第一学期学生评教后50名课堂部分任课教师本学期评价对照见表9。
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表9 2015-2016学年第一学期学生评教后50名课堂部分任课教师本学期督导专家评价情况</u>
						</font>
						<table id="tab_6_1" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<!-- <tr style="background:#DCDBDB;">
								<td>教师所在部门</td>
								<td>教师姓名</td>
								<td>课程名称</td>
								<td>2015-2016学年第一学期学生评教</td>
								<td>2015-2016学年第二学期学生评教</td>
								<td>是否在2015-2016学年第二学期学生评教后50名</td>
							</tr>
							<tr>
								<td>电控学院</td>
								<td>张国英</td>
								<td>电子技术实验-2</td>
								<td>73.39（电路与电子技术实验）</td>
								<td>86.979</td>
								<td>否</td>
							</tr>
							<tr>
								<td>电控学院</td>
								<td>张国英</td>
								<td>电子技术实验-2</td>
								<td>73.39（电路与电子技术实验）</td>
								<td>86.979</td>
								<td>否</td>
							</tr>
							<tr>
								<td rowspan="2">电控学院</td>
								<td rowspan="2">张国英</td>
								<td>网球</td>
								<td>73.39（电路与电子技术实验）</td>
								<td>94.333/92.593</td>
								<td rowspan="2">否</td>
							</tr>
							<tr>
								<td>羽毛球</td>
								<td>79.783</td>
								<td>95.00</td>
							</tr> -->
						</table>
					</div>
					<br>
						从表9中可以看出，2015-2016学年第一学期学生评教后50名课堂督导专家专项听课的13名任课教师中有12名教师本学期学生评教的评分已不在后50名课堂之内，只有1门课程仍在后50名的评价中，持续改进效果明显。表10所示为2015-2016学年第一学期学生评教后50名课堂部分任课教师本学期督导专家评语。从评语中体现督导组专家对教师做出的改进给予了很高的评价。从学生评价角度也证明学生对教师教学质量得到认可。
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表10 2015-2016学年第一学期学生评教后50名课堂部分任课教师本学期督导专家评语</u>
						</font>
						<table id="tab_6_2" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<!-- <tr style="background:#DCDBDB;">			
								<td>学院</td>
								<td>教师姓名</td>
								<td>课课程名称</td>
								<td width="500px">主要问题与建议</td>
							</tr>
							<tr>
								<td>电控学院</td>
								<td>张国英</td>
								<td>电子技术实验-2	</td>
								<td><div style="padding:5px;">学生完成本学期实验内容，在提交实验报告的基础上吗，为对学生实践能力的检验，特增加“答辩”环节，每两人一组，任选模式或教学内容。老师提问，学生作答。对教师而言是个创新，对学生而言促进了综合能力的提问，做到学与用相结合，效果良好。</div></td>
							</tr>
							<tr>
								<td>经管学院</td>
								<td>吴菲菲</td>
								<td>团队管理</td>
								<td><div style="padding:5px;">开学第一周学生出勤情况较好，上课注意力集中，精神状态好，学习热情较高涨。课堂气氛活跃，师生互动较默契。教师备课充分，熟悉所讲授的内容，课程介绍详细，课程要求明确，授课重点较突出，语言表达准确，授课方法灵活多样。教师能够采用启发式教学方式，组织小组活动，通过学生讨论，培养学生的团队意识和组织能力，效果较好。建议：设计分组活动的指令，任务应再具体、明确，以便课堂活动的节奏更加紧凑。</div></td>
							</tr>
							<tr>
								<td>环能学院</td>
								<td>赵旭峰</td>
								<td>绿色化学概论</td>
								<td><div style="padding:5px;">1. 课前18分钟到位准备，学生出勤率高，认真听课率高。2. 教学准备充分，过程规范，讲课内容娴熟，脱稿讲授，讲授知识面较广，但语速相对偏快，影响效果。3. 讲授表达的条理性可更清晰些，适当增加些“互动”环节，可更进一步。4. 绿色化学，化学的适用面广，影响大。从不同角度分析或提出的“新”知识，“发展”可多些介绍，并能引导学生学习及今后工作的发展多结合些，课更能提高水平。</div></td>
							</tr>
							<tr>
								<td>计算机学院</td>
								<td>苏航</td>
								<td>数据结构</td>
								<td><div style="padding:5px;">内容熟练，投入认真，对问题有分析，有过程推理，有激情。能够通过提问督促学生。多数学生注意听讲，跟随老师思路。<br>建议：<br>1）突出设计思路<br>2）优化算法描述</div></td>
							</tr> -->
						</table>
					</div>
				</div>
			</div>
			
			<!-- 7 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">7、基于课程性质/类别的学生评价分析</font>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					2015-2016学年第二学期学生有效评价课堂数1271个，其中公共基础课171门，学科基础课467门，专业课303门，通识教育选修课/校选课164门，实践环节166门，双语课程30门（只占全部课堂的2.4%，其中学科基础课13门，专业课17门）。2015-2016学年第二学期基于课程性质/类别的学生评价分析见图4。
					<br>
					<div style="border:1px solid #D7D7D7;width:100%;margin-top:20px;text-align:center;padding-bottom:14px;">
						<br>
						<font style="color:#FF0D0D;font-weight:bold;width:100%;text-align:center;font-size:18px;"><u>图4 2015-2016学年第二学期基于课程性质/类别的学生评价分析</u></font>
						<div id='container_5' style='width: 90%;height:400px;padding:20px;margin-top:-15px;margin-left:30px;'>
						</div>
					</div>
					<br>
					从图4中可以看出，公共基础课评分（89.23）明显高于本学期学生评教平均分，学科基础课评分（88.04）稍高于本学期学生评教平均分，而专业课评分（87.46）、实践环节评分（87.09）和通识教育选修课/校选课评分（87.07）均明显低于本学期学生评教平均分。这与上学期各学院后10名课堂课程性质分析基本一致，应更加关注专业课、实践环节和通识教育选修课的课堂质量持续改进。另外，双语课程评分（87.66）略低于本学期学生评教的平均分，各学院应更加关注专业需要和学生需求，提高双语课程的教学质量。
				</div>
			</div>
			
			<!-- 8 -->
			<div style="width:80%;align:center;margin-top:10px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">8、最喜爱教师的评教情况</font>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					在2015-2016学年第二学期的学生评教中，继续将“喜爱教师”的评价指标纳入评价体系，旨在选出授课有特色，受到学生喜爱的教师。2015-2016学年第二学期学生评教最喜爱教师情况如表11所示。
					<br>
					<div style="width:100%;text-align:center;margin-top:15px;">
						<br>
						<font style="color:red;font-weight:bold;width:100%;text-align:center;font-size:18px;margin-top:15px;">
							<u>表11 2015-2016学年第二学期学生评教最喜爱教师情况</u>
						</font>
						<table id="tab_8" class="tab-2_1" align="center" style="text-align:center;margin-top:8px;width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr style="background:#DCDBDB;">
								<td>排序</td>
								<td>姓名</td>
								<td>所在学院</td>
								<td>课程</td>
								<td>学生评分</td>
							</tr>
							<tr>
								<td>1</td>
								<td>付旭光</td>
								<td>数理学院</td>
								<td>高等数学（管）-2</td>
								<td>91.402</td>
							</tr>
							<tr>
								<td>2</td>
								<td>王建华</td>
								<td>机电学院</td>
								<td>工程图学实践Ⅳ</td>
								<td>90.636</td>
							</tr>
							<tr>
								<td>3</td>
								<td>皇甫平</td>
								<td>机电学院</td>
								<td>建筑艺术图形手工绘制</td>
								<td>88.548</td>
							</tr>
							<tr>
								<td>4</td>
								<td>魏  佳</td>
								<td>环能学院</td>
								<td>水分析化学	</td>
								<td>92.241</td>
							</tr>
							<tr>
								<td>5</td>
								<td>郭  福	</td>
								<td>材料学院</td>
								<td>材料科学基础（双语）</td>
								<td>94.275</td>
							</tr>
						</table>
					</div>
					<br>
					从表11中可以看出，最喜爱教师授课的10门课均超过本学期学生评教的平均分，且集中在90分以上，并有2门满分课堂（全校6门）。在这10位教师中，既然授课多年，有丰富教学经验的老教师，也有中青年骨干教师。从这10位教师的讲授课程上看，主要为公共基础课和学科基础课。这类课程上课人数较多，学生基数大，投票人群面广的特点可能对这一结果起到的积极的贡献。
					<br>
				</div>
			</div>
			
			<!-- 9 -->
			<div style="width:80%;align:center;margin-top:6px;">
				<br>
				<div style="margin-top:25px;text-align:left;border-bottom:1px solid red;margin-left:12px;padding-left:4px;">
					<font style="font-size:22px;font-weight:bold;">9、主要结论与建议</font>
				</div>
				<!-- <div style="border:1px solid red;margin:0px;width:98%;"></div> -->
				<br>
				<div style="width:95%;text-align:left;">
					2015-2016学年第二学期继续采用的新评教体系，在评教系统中限定了学生评价课堂优秀率的百分比为40%，并在学生评教完课程后可以查看该门课程的实时评教情况，完成了对学评教的持续改进，建立发现问题并持续改进评教体系。学生综合评价得分87.81分，与2015-2016学年第一学期基本持平，较2014-2015学年第二学期和2014-2015学年第一学期两个学期的平均得分有所下降。这体现出新体系对学生客观评价课程，比较思考课堂质量的积极作用。学生评价呈现正态分布，在85分呈现峰值。表明我校课堂教学质量整体较好。
					2015-2016学年第一学期学生评教后50名课堂督导专家专项听课的13名任课教师中有12名教师本学期学生评教的评分已不在后50名课堂之内，持续改进效果明显。这一举措，促进了教师对课堂教学的反思和总结，促进了课堂教学质量的持续提高。
					2015-2016学年第二学期的学生评教中最喜爱教师授课的10门课均超过本学期学生评教的平均分，且集中在90分以上，并有2门满分课堂（全校6门）。
					目前，学生评价结果从数据采集，评价机制和结果分析都已经平稳。根据近几年的学生评教结果分析，建议二级学院深化对专业和学科的数据分析，从而充分了解本学院在学生评教中反映出的问题，指导本科培养和本科教学质量的持续改进和提高。在此基础上，进一步细致分析本学院教学状况，利用学生评教手段找出教学中的不足，及时解决学生评价得分较低课堂中的问题，促进学院教师教学水平整体提高。
					今后将持续加强课堂质量监控，以OBE为导向关注学生对课堂教学的需求。充分利用教师教学发展中心平台提高广大教师教学能力与水平，持续推进本科教学工程建设，夯实学校“十三五”建设规划目标，切实提高本科教学水平。
					<br>
				</div>
			</div>
		   </div>		
		</center>
	</div>
	<br><br><br><br>
</body>
</html>

