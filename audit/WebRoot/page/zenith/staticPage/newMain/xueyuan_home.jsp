<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page contentType="text/html; charset=UTF-8"%>
<%@taglib uri="/WEB-INF/struts-tags.tld" prefix="s"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<%@include file="../../../common/lib.jsp"%>
<title>喆思教学-首页-学院首页</title>
<link href="/CHART/css/main.css" rel="stylesheet" type="text/css" />
<link href="/audit/css/academe.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="/CHART/js/jquery.js"></script>
<script type="text/javascript" src="/CHART/js/echarts/echarts-all.js"></script>
<script type="text/javascript" src="/CHART/js/indexTop.js"></script>
<script type="text/javascript" src="/CHART/js/specialty/majorh.js"></script>
<script type="text/javascript" src="/audit/page/zenith/staticPage/newMain/js/academe.js"></script>

<%-- <script type="text/javascript" src="${chartCtx}/js/academe/academeEcharts.js"></script> --%>
</head>
<body style="overflow:auto">
<input type="hidden" id="zyId" name="zyId"/>
<%-- 	<div class="nav_con">
		<a href="/CHART/page/home/home.jsp">首页</a> &gt; <span id="academeName" class="academeName"></span>
	</div> --%>
	<div class="conbox">
		<div class="xy_box">
			<!-- <h2><span class="academeName"></span></h2> -->
			<div class="xy_top">
				<table width="100%" border="0">
					<tr>
						<td width="60%">
							<div class="box_con mg_r10">
								<div class="title"  id="major_evaluation" style="display:none">
									<span class="box30 mg_l10" onclick="tabChart('academy_radar_chart');">核心指标</span>
									<span class="box30 mg_l10" onclick="tabChart('evaluationRankingChart');">学院评估</span>
									<span class="box30 mg_l10" ">
									 <select id="professionalData" style="margin-left:10px" onchange="displayMajor()">
										
									</select>
									</span>
								</div>
								<div  style="margin:10px;color:#4A9AD2">
									<span id="name_specialty" class="specialtyName"></span>
								</div>
								<div id="majordata" style="margin-left:170px" >
									<ul>
										<li >
											<dl class="db_menu" id="majordata" style="overflow: auto;width: 764px;max-height: 400px;"></dl>
										</li>
									</ul>
								</div>
								<div class="shuju02" style="height:470px;">
									<!-- 切换指标 -->
									<div id="zbqh" style="display: none;">选择总指标: <select id="zbqhSelect" onchange="showEvaluationRanking();"></select>
									<span style="margin-left:10px">年份：</span ><select id="dateYear" onchange="getRaderByYearAndTab()" style="width:60px;height:22px;">
									<option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option>
									<option value="2013">2013</option>
									</select>
									</div>
									<!-- 核心指标雷达图 -->
									<div id="academy_radar_chart" ></div>
									<!-- 院系考评排名图 -->
									<div id="evaluationRankingChart" style="display: none;"></div>
									<%-- <p class="txt_c"><img src="${chartCtx}/images/shuju10.png" width="540" height="360" /></p> --%>
								</div>
							</div></td>
						<td width="40%" style="display:none">
							<div class="box_con">
								<div class="pad_menu">
									<ul>
										<li class="padMenu"><a id="tabName" onclick="NextPad();"  href="javascript:void(0);">该院核心指标：</a>
										</li>
									<!--  	<li class=""><a onclick="NextPad();"
											href="javascript:void(0);">我的关注指标</a>
										</li>-->
										<span class="f_r mg_r10" style="margin:0px;margin-left: 124px; margin-top: 3px; font-weight:bold;">时间：<select
											class="select_tips" name="academeTime" id="radarTime"
											onchange="getRaderByYearAndTab()">
										</select>
										</span>
									</ul>
								</div>
								<div class="pad_box shuju02">
									<div class="sDiv">
										<div class="li_tips li_tips2">
											<!-- <li><span class="box40 bg_red f_l tbg_box">生师比</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_red f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_yellow f_l tbg_box">教授上课率</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_yellow f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_yellow f_l tbg_box">有专业背景专任教师比例</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_yellow f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_gree f_l tbg_box">师均教学研究经费</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_gree f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_gree f_l tbg_box">最受学生欢迎的教师比例</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_gree f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_gree f_l tbg_box">获优秀绩点学生比例</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_gree f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_gree f_l tbg_box">最受学生欢迎的教师比例</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_gree f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_gree f_l tbg_box">获优秀绩点学生比例</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_gree f_r mg_r10 mg_top23"></span>
											</li> -->
										</div>
									</div>
									<div class="hDiv">
										<div class="li_tips li_tips2">
											<!-- <li><span class="box40 bg_red f_l tbg_box">生师比</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_red f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_yellow f_l tbg_box">教授上课率</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_yellow f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_yellow f_l tbg_box">有专业背景专任教师比例</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_yellow f_r mg_r10 mg_top23"></span>
											</li>
											<li><span class="box40 bg_gree f_l tbg_box">师均教学研究经费</span><span
												class="box30 f_l font_blue txt_c">23%</span><span
												class="icon_gree f_r mg_r10 mg_top23"></span>
											</li> -->
										</div>
									</div>
								</div>
							</div></td>
					</tr>
				</table>
			</div>
		</div>
		<div class="fenge"></div>
		
		<div id="allDiv"  class="box_con shuju_head" style="display:none" >
			<div id="zbdb" >
				<div id="zbdb01" style="background: #efefef none repeat scroll 0 0;border-bottom: 1px solid #cdcdcd;font-weight: bold; height: 32px;line-height: 32px;">
					&nbsp;&nbsp;
					<!-- <a href="javascript:void(0)" onclick="showProTable()">全院状态数据表</a>&nbsp;&nbsp; -->
					<a href="javascript:void(0)" onclick="showyxsj()">院系数据</a>&nbsp;&nbsp;
					<a href="javascript:void(0)" onclick="initOne()">院系一级指标对比</a>&nbsp;&nbsp;
					<span class="f_r mg_r10" style="margin:0px;margin-left: 124px; margin-top: 3px; font-weight:bold;">时间：<select
						class="select_tips" name="academeTime" id="radarTime2"
						onchange="isOChecked();">
					</select>
					</span>
				</div>
				<!--专业年度状态数据表  -->
				
	<div id="zyndztsjb" style="margin:5px;width:100%;height:100%;background:#ffffff;display :none">
		<div  style="margin-right:5px;margin-top:20px;float:left" >
		</div>
			<table  >
				<thead style="background:#c3c3c3">
					<tr id="majorid">
						<td width="2%" height="8%" style="text-align:center;">编号</td>
						<td width="12%" height="8%" style="text-align:center;">内容</td>
						<td colspan="3" height="8%" style="text-align:center;">数据或比例</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>实践教学学分占总学分比例</td>
						<td> <input type="text" id="1.1.1" style="width:40px;border:none;;border:none;"/>级实践教学学分数:<input type="text" id="1.1.2" style="width:40px;border:none;"/></td>
						<td><input type="text"  id="1.2.1" style="width:40px;border:none;"/>级教学计划总学分:<input type="text"  id="1.2.2" style="width:40px;border:none;"/></td>
						<td>比例(%):<input type="text" id="1.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>2</td>
						<td>专业选修课开出率</td>
						<td> <input type="text"  id="2.1.1" style="width:40px;border:none;"/>级专业选修课开出门数:<input type="text" id="2.1.2" style="width:40px;border:none;"/></td>
						<td><input type="text" id="2.2.1" style="width:40px;border:none;"/>级教学计划专业选修课总门数:<input type="text" id="2.2.2" style="width:40px;border:none;"/></td>
						<td>比例(%):<input type="text" id="2.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td rowspan="5">3</td>
						<td>专任教师</td>
						<td>人数：<input type="text"  id="3.1" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：教授</td>
						<td>人数：<input type="text" id="3.2" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>副教授</td>
						<td>人数：<input type="text" id="3.3" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>有硕士学位教师</td>
						<td>人数：<input type="text" id="3.4" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>有行业经历教师</td>
						<td>人数：<input type="text" id="3.4" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="2">4</td>
						<td>兼职教师</td>
						<td>人数：<input type="text" id="4.1" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：有实践经验的行业专家</td>
						<td>人数：<input type="text"  id="4.2" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="3">5</td>
						<td>专业课和专业基础课主讲教师</td>
						<td>人数：<input type="text"  id="5.1" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：有讲师职称或硕士学位教师</td>
						<td>人数：<input type="text" id="5.2" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>有副高及以上职称教师</td>
						<td>人数：<input type="text" id="5.3" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="2">6</td>
						<td>学年内教师参与专业相关的科学研究</td>
						<td>人数：<input type="text"  id="6.1.1" style="width:40px;border:none;"/></td>
						<td>校级以上或横向课题数：<input type="text" id="6.1.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td>发表论文数：<input id="6.2" type="text"  style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="2">7</td>
						<td>学年内教师海外研修</td>
						<td>人数：<input type="text" id="7.1" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>实践锻炼</td>
						<td>人数：<input type="text"  id="7.2" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
						
					</tr>
					<tr>
						<td rowspan="3">8</td>
						<td rowspan="3">专业实验室</td>
						<td>数量：<input type="text" id="8.1.1" style="width:40px;border:none;"/></td>
						<td>面积：<input type="text"  id="8.1.2" style="width:40px;border:none;"/>平方米</td>
						<td></td>
					</tr>
					<tr>
						<td>台套数：<input type="text" id="8.2.1" style="width:40px;border:none;"/></td>
						<td>管理人员数：<input type="text"  id="8.2.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td>开设实验的课程数量：<input type="text" id="8.3" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td >9</td>
						<td >实习基地</td>
						<td>数量：<input type="text"  id="9.1" style="width:40px;border:none;"/></td>
						<td>每学期接受学生人数：<input type="text" id="9.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="7">10</td>
						<td>专业期刊</td>
						<td>种类数：<input type="text" id="10.1.1" style="width:40px;border:none;"/></td>
						<td>专业图书数：<input type="text"  id="10.1.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td>5本专业主要参考书</td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>书名：<input type="text"  id="10.3.3" style="width:40px;border:none"/></td>
						<td>复本数：<input type="text"  id="10.3.1" style="width:40px;border:none;"/></td>
						<td><input type="text" id="10.3.4" style="width:40px;border:none"/>年借阅人次数：<input type="text" id="10.3.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td>书名：<input type="text"  id="10.4.3" style="width:40px;border:none"/></td>
						<td>复本数：<input type="text" id="10.4.1" style="width:40px;border:none;"/></td>
						<td><input type="text" id="10.4.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td>书名：<input type="text"  id="10.5.3" style="width:40px;border:none"/></td>
						<td>复本数：<input type="text" id="10.5.1" style="width:40px;border:none;"/></td>
						<td><input type="text"  id="10.5.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td>书名：<input type="text"  id="10.6.3" style="width:40px;border:none"/></td>
						<td>复本数：<input type="text" id="10.6.1" style="width:40px;border:none;"/></td>
						<td><input type="text"  id="10.6.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td>书名：<input type="text"  id="10.7.3" style="width:40px;border:none"/></td>
						<td>复本数：<input type="text" id="10.7.1" style="width:40px;border:none;"/></td>
						<td><input type="text" id="10.7.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="4">11</td>
						<td>生均日常教学经费</td>
						<td>标准：<input type="text" id="11.1" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：生均实验经费</td>
						<td>数量：<input type="text"  id="11.2" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>生均实习经费</td>
						<td>数量：<input type="text"  id="11.3" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>毕业设计（论文）经费</td>
						<td>数量：<input type="text"  id="11.4" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>12</td>
						<td>专业建设专项经费</td>
						<td>数量：<input type="text" id="12.1" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="2">13</td>
						<td rowspan="2">根据培养方案，实验开出率</td>
						<td rowspan="2"><input type="text" id="13.1.1" style="width:40px;border:none;"/>级实际开出实验个数：<input type="text"  id="13.1.2"  style="width:40px;border:none;"/><br>其中设计性、综合性实验个数：<input type="text"  id="13.1.3"  style="width:40px;border:none;"/></td>
						<td><input type="text"   id="13.2.1" style="width:40px;border:none;"/>级大纲规定实验总数：<input type="text"   id="13.2.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text"  id="13.1.6"  style="width:40px;border:none;"/></td>
						
					</tr>
					<tr>
						<td style="height:20px"></td>
						<td style="height:20px"></td>
					</tr>
					<tr>
						<td>14</td>
						<td>学年内教师参与教学研究</td>
						<td>人数：<input type="text" id="14.1" style="width:40px;border:none;"/></td>
						<td>发表论文数：<input type="text"  id="14.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="7">15</td>
						<td>教改或质量工程建设项目</td>
						<td>数量：<input type="text" id="15.1.1" style="width:40px;border:none;"/></td>
						<td>获校级及以上奖励数：<input type="text" id="15.1.2" style="width:40px;border:none;"/></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：校级及以上教学名师</td>
						<td>数量：<input type="text"  id="15.2" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>校级及以上教学团队</td>
						<td>数量：<input type="text"  id="15.3" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>校级及以上精品课程</td>
						<td>数量：<input type="text" id="15.4" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>校级及以上重点课程</td>
						<td>数量：<input type="text" id="15.5" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>校级及以上双语课程</td>
						<td>数量：<input type="text" id="15.6" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>校级及以上全英语课程</td>
						<td>数量：<input type="text" id="15.7" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="3">16</td>
						<td>网络课程</td>
						<td>数量：<input type="text" id="16.1" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>外教</td>
						<td>数量：<input type="text" id="16.2" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>原版教材</td>
						<td>数量：<input type="text" id="16.3" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="3">17</td>
						<td rowspan="2"><input type="text" id="17.1.4" style="width:40px;border:none;"/>级毕业设计（论文）结合实际的选题比例</td>
						<td>结合实际的选题数：<input type="text" id="17.1.1" style="width:40px;border:none;"/></td>
						<td>毕业设计（论文）总数：<input type="text" id="17.1.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="17.1.3" style="width:40px;border:none;"/></td>
						
					</tr>
					<tr>
						<td>在实践环境中完成的选题数：<input type="text" id="17.2.1" style="width:40px;border:none;"/></td>
						<td></td>
						<td>比例：<input type="text" id="17.2.2" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>每位教师最多指导学生</td>
						<td>数量：<input type="text" id="17.3.1" style="width:40px;border:none;"/></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>18</td>
						<td>教学管理人员数</td>
						<td>院级：<input type="text" id="18.1" style="width:40px;border:none;"/></td>
						<td>系或专业：<input type="text" id="18.2" style="width:40px;border:none;"/></td>
						<td></td>	
					</tr>
					<tr>
						<td rowspan="2">19</td>
						<td rowspan="2"><input type="text" id="19.1.4" style="width:40px;border:none;"/>级学生<input type="text" id="19.1.5" style="width:40px;border:none;"/>时段</td>
						<td>出勤人数：<input type="text" id="19.1.1" style="width:40px;border:none;"/></td>
						<td>总人数：<input type="text" id="19.1.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="19.1.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>迟到人数：<input type="text" id="19.2.1" style="width:40px;border:none;"/></td>
						<td>出勤人数：<input type="text"  id="19.2.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="19.2.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>20</td>
						<td>学生参加专业学习之外其它学习项目</td>
						<td>参与人数：<input type="text" id="20.1" style="width:40px;border:none;"/></td>
						<td>总人数：<input type="text"  id="20.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="20.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>21</td>
						<td>学生参与各种志愿者行动</td>
						<td>参与人数：<input type="text" id="21.1" style="width:40px;border:none;"/></td>
						<td>总人数：<input type="text" id="21.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="21.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td rowspan="6">22</td>
						<td><input type="text" id="22.0.1" style="width:40px;border:none;"/>级5门主要专业课程考核</td>
						<td>补考人数</td>
						<td>重修人数</td>
						<td>总人数</td>
					</tr>
					<tr>
						<td>课程名：<input type="text" id="22.1.4" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.1.1" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.1.2" style="width:40px;border:none;"/></td>
						<td><input type="text"  id="22.1.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>课程名：<input type="text" id="22.2.4" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.2.1" style="width:40px;border:none;"/></td>
						<td><input type="text"  id="22.2.2" style="width:40px;border:none;"/></td>
						<td><input type="text"  id="22.2.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>课程名：<input type="text" id="22.3.4" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.3.1" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.3.2" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.3.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>课程名：<input type="text" id="22.4.4" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.4.1" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.4.2" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.4.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>课程名：<input type="text" id="22.5.4" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.5.1" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.5.2" style="width:40px;border:none;"/></td>
						<td><input type="text" id="22.5.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>23</td>
						<td>学生参与学科竞赛、课外兴趣小组、教师科研等</td>
						<td>参与人数：<input type="text" id="23.1" style="width:40px;border:none;"/></td>
						<td>总人数：<input type="text" id="23.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text"  id="23.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td rowspan="3">24</td>
						<td rowspan="3"><input type="text" id="24.1.4" style="width:40px;border:none;"/>级学生毕业状况</td>
						<td>毕业人数：<input type="text" id="24.1.1" style="width:40px;border:none;"/></td>
						<td>总人数：<input type="text" id="24.1.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="24.1.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>获学位人数：<input type="text" id="24.2.1" style="width:40px;border:none;"/></td>
						<td>毕业人数：<input type="text" id="24.2.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="24.2.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>就业人数：<input type="text" id="24.3.1" style="width:40px;border:none;"/></td>
						<td>毕业人数：<input type="text" id="24.3.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="24.3.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td >25</td>
						<td ><input type="text" id="25.4" style="width:40px;border:none;"/>学年，学生对本专业教师评教情况</td>
						<td>评为优良课程数：<input type="text" id="25.1" style="width:40px;border:none;"/></td>
						<td>本专业教师开设课程总数：<input type="text" id="25.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="25.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td rowspan="2">26</td>
						<td rowspan="2"><input type="text" id="26.1.4" style="width:40px;border:none;"/>级专业学生入学情况</td>
						<td>以第一志愿报考本专业人数：<input type="text" id="26.1.1" style="width:40px;border:none;"/></td>
						<td>录取本专业总人数：<input type="text" id="26.1.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="26.1.3" style="width:40px;border:none;"/></td>
					</tr>
					<tr>
						<td>该专业报到人数：<input type="text" id="26.2.1" style="width:40px;border:none;"/></td>
						<td>录取本专业总人数：<input type="text" id="26.2.2" style="width:40px;border:none;"/></td>
						<td>比例：<input type="text" id="26.2.3" style="width:40px;border:none;"/></td>
					</tr>
				</tbody>
			</table>
		
		</div>
				
				<!-- 起始位置  -->
				<div id="yxsj" style="display: none;">
					<div class="box_tips shuju_box">
						<div class="box_con shuju_head">
							<div class="title" fenleiId="101">
								<span class="box30 f_l"><img class="f_l"
									src="${chartCtx }/images/jbxx_icon.png" width="32" height="32" />基本信息</span>
								<span class="f_r mg_r10 zhankai_fuhao">+</span><span
									class="f_r mg_r10">时间：<select class="select_tips"
									name="bj_time">
								</select>
								</span><span class="f_r mg_r10">比较：<select class="select_tips" id=""
									name="xueyuan">
										<option>选择条件001</option>
										<option>选择条件002</option>
										<option>选择条件003</option>
										<option>选择条件004</option>
								</select>
								</span>
							</div>
							<div class="shuju_body">
								<ul style="height:280px;">
								
								</ul>
								<!-- <ul>
									<li>
										<div class="title01 mg_r10 fenlei_title"><span class="mg_l10">政府单位</span></div>
										<dl>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
										</dl>
									</li>
									<li>
										<div class="title01 mg_r10 fenlei_title"><span class="mg_l10">政府单位</span></div>
										<dl>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
										</dl>
									</li>
									<li>
										<div class="title01 mg_r10 fenlei_title"><span class="mg_l10">政府单位</span></div>
										<dl>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
										</dl>
									</li>
									<li>
										<div class="title01 mg_r10 fenlei_title"><span class="mg_l10">政府单位</span></div>
										<dl>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
										</dl>
									</li>
									<li>
										<div class="title01 mg_r10 fenlei_title"><span class="mg_l10">政府单位</span></div>
										<dl>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
										</dl>
									</li>
									<li>
										<div class="title01 mg_r10 fenlei_title"><span class="mg_l10">政府单位</span></div>
										<dl>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
										</dl>
									</li>
									<li class="shuju_group4">
										<div class="title01 mg_r10 fenlei_title"><span class="mg_l10">政府单位</span></div>
										<dl>
											<dt>学校</dt>
											<dd>1</dd>
										</dl>
									</li>
									<li>
										<div class="title01 mg_r10 fenlei_title"><span class="mg_l10">政府单位</span></div>
										<dl>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
											<dt>学校</dt>
											<dd>1</dd>
										</dl>
									</li>
								</ul> -->
							</div>
						</div>
					</div> 
			
					<div class="box_tips shuju_box">
						<div class="box_con shuju_head">
							<div class="title" fenleiId="102">
								<span class="box30 f_l"><img class="f_l"
									src="${chartCtx }/images/jbxx_icon.png" width="32" height="32" />基本条件</span>
								<span class="f_r mg_r10 zhankai_fuhao">+</span><span
									class="f_r mg_r10">时间：<select class="select_tips"
									name="bj_time">
								</select>
								</span> <span class="f_r mg_r10">比较：<select class="select_tips" id=""
									name="xueyuan">
										<option>选择条件001</option>
										<option>选择条件002</option>
										<option>选择条件003</option>
										<option>选择条件004</option>
								</select>
								</span>
							</div>
							<div class="shuju_body">
								<ul style="height:280px;">
								
								</ul>
							</div>
						</div>
					</div>
			
					<div class="box_tips shuju_box">
						<div class="box_con shuju_head">
							<div class="title" fenleiId="103">
								<span class="box30 f_l"><img class="f_l"
									src="${chartCtx }/images/jbtj_icon.png" width="32" height="32" />学科专业</span>
								<span class="f_r mg_r10 zhankai_fuhao">+</span> <span
									class="f_r mg_r10">时间：<select class="select_tips"
									name="bj_time">
								</select>
								</span> <span class="f_r mg_r10">比较：<select class="select_tips" id=""
									name="xueyuan">
										<option>选择条件001</option>
										<option>选择条件002</option>
										<option>选择条件003</option>
										<option>选择条件004</option>
								</select>
								</span>
							</div>
							<div class="shuju_body">
								<ul style="height:280px;">
								
								</ul>
							</div>
						</div>
					</div>
			
					<div class="box_tips shuju_box">
						<div class="box_con shuju_head">
							<div class="title" fenleiId="104">
								<span class="box30 f_l"><img class="f_l"
									src="${chartCtx }/images/jbtj_icon.png" width="32" height="32" />教师信息</span>
								<span class="f_r mg_r10 zhankai_fuhao">+</span> <span
									class="f_r mg_r10">时间：<select class="select_tips"
									name="bj_time">
								</select>
								</span> <span class="f_r mg_r10">比较：<select class="select_tips" id=""
									name="xueyuan">
										<option>选择条件001</option>
										<option>选择条件002</option>
										<option>选择条件003</option>
										<option>选择条件004</option>
								</select>
								</span>
							</div>
							<div class="shuju_body">
								<ul style="height:280px;">
								
								</ul>
							</div>
						</div>
					</div>
			
					<div class="box_tips shuju_box">
						<div class="box_con shuju_head">
							<div class="title" fenleiId="105">
								<span class="box30 f_l"><img class="f_l"
									src="${chartCtx }/images/jbtj_icon.png" width="32" height="32" />人才培养</span>
								<span class="f_r mg_r10 zhankai_fuhao">+</span> <span
									class="f_r mg_r10">时间：<select class="select_tips"
									name="bj_time">
								</select>
								</span> <span class="f_r mg_r10">比较：<select class="select_tips" id=""
									name="xueyuan">
										<option>选择条件001</option>
										<option>选择条件002</option>
										<option>选择条件003</option>
										<option>选择条件004</option>
								</select>
								</span>
							</div>
							<div class="shuju_body">
								<ul style="height:280px;">
								
								</ul>
							</div>
						</div>
					</div>
			
					<div class="box_tips shuju_box">
						<div class="box_con shuju_head">
							<div class="title" fenleiId="106">
								<span class="box30 f_l"><img class="f_l"
									src="${chartCtx }/images/jbtj_icon.png" width="32" height="32" />学生信息</span>
								<span class="f_r mg_r10 zhankai_fuhao">+</span> <span
									class="f_r mg_r10">时间：<select class="select_tips"
									name="bj_time">
								</select>
								</span> <span class="f_r mg_r10">比较：<select class="select_tips" id=""
									name="xueyuan">
										<option>选择条件001</option>
										<option>选择条件002</option>
										<option>选择条件003</option>
										<option>选择条件004</option>
								</select>
								</span>
							</div>
							<div class="shuju_body">
								<ul style="height:280px;">
								
								</ul>
							</div>
						</div>
					</div>
			
					<div class="box_tips shuju_box">
						<div class="box_con shuju_head">
							<div class="title" fenleiId="107">
								<span class="box30 f_l"><img class="f_l"
									src="${chartCtx }/images/jbtj_icon.png" width="32" height="32" />教学管理与质量监控</span>
								<span class="f_r mg_r10 zhankai_fuhao">+</span> <span
									class="f_r mg_r10">时间：<select class="select_tips"
									name="bj_time">
								</select>
								</span> <span class="f_r mg_r10">比较：<select class="select_tips" id=""
									name="xueyuan">
										<option>选择条件001</option>
										<option>选择条件002</option>
										<option>选择条件003</option>
										<option>选择条件004</option>
								</select>
								</span>
							</div>
							<div class="shuju_body">
								<ul style="height:280px;">
								
								</ul>
							</div>
						</div>
					</div>
			
					<div class="box_tips shuju_box">
						<div class="box_con shuju_head">
							<div class="title" fenleiId="108">
								<span class="box30 f_l"><img class="f_l"
									src="${chartCtx }/images/jbtj_icon.png" width="32" height="32" />其他</span>
								<span class="f_r mg_r10 zhankai_fuhao">+</span> <span
									class="f_r mg_r10">时间：<select class="select_tips"
									name="bj_time">
								</select>
								</span> <span class="f_r mg_r10">比较：<select class="select_tips" id=""
									name="xueyuan">
										<option>选择条件001</option>
										<option>选择条件002</option>
										<option>选择条件003</option>
										<option>选择条件004</option>
								</select>
								</span>
							</div>
							<div class="shuju_body">
								<ul style="height:280px;">
								
								</ul>
							</div>
						</div>
					</div>
				</div>
				<!-- 院系数据 结束位置 -->
				<!-- 院系一二及指标 -->
				<div id="oneTwoZBDiv" style="display: none;">
					<!-- 指标罗列 -->
					<div id="zbData">
					</div>
					<div style="float:inherit; width: 100%">
					</div>
					<!-- 学院罗列 -->
					<div id="orgList">
					</div>
					<div style="float:inherit; width: 100%">
					</div>
				</div>
				<!-- 院系一二及指标 结束 -->
			</div>
			<!-- 数据写在这上面.图不能动 -->
			<div id="zb_contrast" style="float: left;width:99%;height:400px;margin: 5px;"></div>
			
		</div>
	</div>
	<script type="text/javascript" src="${chartCtx}/js/tabs.js"></script>

	<script>
		$('.tabbox ul li').click(function() {
			$(this).addClass('on').siblings().removeClass('on');
		});
	</script>
	
</body>
</html>