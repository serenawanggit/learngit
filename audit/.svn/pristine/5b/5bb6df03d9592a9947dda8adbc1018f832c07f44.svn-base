<%@ page contentType="text/html; charset=UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">
<html>
<head>
	<base href="<%=basePath%>"/>
	<meta http-equiv="pragma" content="no-cache"/>
	<meta http-equiv="cache-control" content="no-cache"/>
	<meta http-equiv="expires" content="0"/>    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3"/>
	<meta http-equiv="description" content="This is my page"/>
		
  	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/base.css"/>
	<link rel="stylesheet" href="<%=basePath%>/tendina-master/demo/css/demo.css" type="text/css"></link>
  	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/reportZY.css"/>
  	<link rel="stylesheet" href="<%=basePath%>/css/majorEvaluation/profile_table.css" type="text/css"></link>
  	<script type="text/javascript" src="<%=basePath%>/js/jquery.js"></script>
  	<script type="text/javascript" src="<%=basePath%>/js/jquery-1.9.1.min.js"></script>
  	<script type="text/javascript" src="<%=basePath%>/tendina-master/dist/tendina.js"></script>
  	<script type="text/javascript" src="<%=basePath%>/js/majorEvaluation/profile_table.js"></script>
  	
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
  	<script>
  validateLogin();
  	function textToWord(){
		window.open("/audit/self/exportProfile.do?versionId="+$("#versionList").val())  		
  	}
  	</script>
   </head>
  
  <body>
  <form id="htmlForm" action="/TQCC/htmlToWord/service" method="post">
  <input type="hidden" name="html" id="html"/>
  
  </form>
             <div class="container">
                <div class="nav">
                     <ul>
                         <li><a href="<%=basePath%>/page/majorEvaluation/homePage.jsp">首页</a></li>
						<li><a href="<%=basePath%>/self/selfView.do?year=${year}">评估指标自评</a></li>
						<li><a href="<%=basePath%>/self/selfReportView.do">自评报告</a></li>
						<li  class="nav-li-a"><a href="/audit/self/profile.do?year=${year}" >简况表</a></li>
						<li><a href="/audit/asAccessDataTableController/initMaterialLibraryZY.do">我的材料库</a></li>
					</ul>
                </div>
                <div class="main">
                     <div class="main-top-short" >
                          <div class="main-top-left">
                                <ul>
                                     <li>
                                     	   <select class="main-top-select-one" style="width:60px" name="" id="yearList" onchange="getUserGroup(this.value)">
                                           </select>
                                           <select class="main-top-select-one" name="" id="orgList" onchange="getSpecialty()">
                                           </select>
                                           <select class="main-top-select-one" style="width:180px" name="" id="specialtyList" onchange="standardRebuild()">
                                           </select>
                                     </li>
                                </ul>
                           </div>
                           <div class="main-top-right" style="margin-top: -7px;">
                           		<ul>
                           			<li style="font-size: 13px;">温馨提示：编辑前,请选择版本</li>
                           		</ul>
                           		<ul>
                                     <li>
                                     	   版本号：<select class="main-top-select-one" onchange="getAllData()" style="width:100px" name="" id="versionList" onchange="getUserGroup(this.value)">
                                           </select>
                                           <input type="button" title="以当前日期为版本号" class="button_input" value="生成版本" onclick="createNewVersion()"/>
                                     		<input type="button" class="button_input" value="删除版本" onclick="deleteVersion()"/>
                                     		<input type="button" class="button_input" value="保存版本" onclick="updateVersion()"/>
                                     		<input type="button" class="button_input" value="导出版本" onclick="textToWord()"/>
                                     </li>
                                </ul>
                           </div>
                     </div>
  	<div class="box">
  		<!-- 左侧菜单 -->
  		<div class="asds_left">
  			<ul id="asdsNav" class="dropdown" style="position: static;width: 100%;">
		    </ul>
		    <ul>
		    	<li>
		    	<div><input type="button" class="button_input" value="保存版本" style="width: 100%;" onclick="updateVersion()"/></div>
		    	</li>
		    </ul>
  		</div>
  		<!-- 右侧内容 -->
  		<div class="asds_right">
  			<!-- 封面 -->
  		  <a name="face" ></a>
		  <div class="face_title1">高校本科专业达标评估
		  </div>
		  <div class="face_title2">简况表</div>
		  <div class="face_input" style="margin-top: 70px;">
		  		<div style="float: left;margin-left: 25%;">申 请 单 位:</div>
		  		<div style="float: left;"><input type="text" id="face_dw" style="width: 63%;float: left;"/>
		  		<input type="text" id="face_gz" value="（公章）" style="margin-left: 0px;width: 20%;float: left;" readonly="readonly"/></div>
		  </div>
		  <div class="face_input">
		  		<div style="float: left;margin-left: 25%;">专 业 类:</div>
		  		<div style="float: left;margin-left: 3%;"><input type="text" id="face_type"/></div>
		  </div>
		  <div class="face_input">
		  		<div style="float: left;margin-left: 25%;">专 业 代 码:</div>
		  		<div style="float: left;"><input type="text" id="face_code"/></div>
		  </div>
		  <div class="face_input">
		  		<div style="float: left;margin-left: 25%;">专 业 名 称:</div>
		  		<div style="float: left;"><input type="text" id="face_name"/></div>
		  </div>
		  <div class="face_input" style="padding-bottom: 30px;">
		  		<div style="float: left;margin-left: 25%;">填 表 日 期:</div>
		  		<div style="float: left;"><input type="text" style="width:100px" id="face_year"/>年</div>
		  		<div style="float: left;"><input type="text" style="width:100px" id="face_month"/>月</div>
		  		<div style="float: left;"><input type="text" style="width:100px" id="face_day"/>日</div>
		  </div>
		  <div class="face_foot">教务处<br/><br/><input type="text" style="width:104px;font-size: large;" id="face_year2"/ >年<input type="text" style="width:50px;font-size: large;" id="face_month2"/>月</div>
		  <!-- 说明 -->
		  <a name="explain"></a>
		  <div class="explain_title">填表说明</div>
		  <div class="explain_content">
		  	<span style="font-size: large;font-weight: bold;">&nbsp;&nbsp;一、关于统计时间</span>
		  	<span >&nbsp;&nbsp;除特别说明外，本表填写中涉及积累信息的数据（如科研奖励、科研项目、专项经费等），统计时间段均为评估当前年的前三年；</span>
		  	<span >&nbsp;&nbsp;涉及状态信息的数据（如专职教师数、在校生数等），统计时间段为评估当年的前一年。</span>
		  </div>
		  <div class="explain_content">
		  	<span style="font-size: large;font-weight: bold;">&nbsp;&nbsp;二、关于人员界定</span>
		  	<span >&nbsp;&nbsp;除特别说明外，本表中填写的专职人员信息，应确保其人事关系在统计时间段为本单位本专业的专职教师或研究人员。</span>
		  	<span >&nbsp;&nbsp;人员信息不能多专业重复填写，对于跨专业人员，应填写其主要从事的专业。</span>
		  </div>
		  <div class="explain_content">
		  	<span style="font-size: large;font-weight: bold;">&nbsp;&nbsp;三、关于成果界定</span>
		  	<span >&nbsp;&nbsp;1.本表填写的所有成果应确保“产权归属本单位、内涵归属本专业领域”。</span>
		  	<span >&nbsp;&nbsp;2.本表所涉及的“论文”、“专利”、“专著”、“教材”等，除特别说明外，不能在多个专业领域重复计算。</span>
		  </div>
		  <div class="explain_content">
		  	<span style="font-size: large;font-weight: bold;">&nbsp;&nbsp;四、其他说明</span>
		  	<span >&nbsp;&nbsp;本表需保持原格式不变，请用A4规格纸双面打印，中缝装订。</span>
		  	<span >&nbsp;&nbsp;本表封面之上不另加其它封面，封面须加盖单位公章。</span>
		  </div>
		  <!-- 表1 -->
		  <a name="table1"></a>
		  <div class="tb_box">
			<div class="tb_top">
				<div class="tb_title">
					<h4>一、专业概况</h4>
				<!-- 	<span style="float: right;"><input type="button" onclick="getSqlData('table1_1')" class="button_input" value="获取数据"/></span>
				 --></div>
			</div>
			<div class="tb_main">
				<table id="table_1_2">
					<thead>
						<tr>
							<td style="width: 20%;">专业名称</td>
							<td colspan="2"><input type="text" style="" id="table1_res1"/></td>
							<td>所在院系</td>
							<td style="width: 20%;"><input type="text" style="" id="table1_res2"/></td>
						</tr> 
						<tr>
							<td rowspan="2">专业负责人</td>
							<td style="width: 20%;">姓名</td>
							<td style="width: 20%;"><input type="text" style="" id="table1_res3"/></td>
							<td style="width: 20%;">联系电话</td>
							<td style="width: 20%;"><input type="text" style="" id="table1_res4"/></td>
						</tr>
						<tr>
							<td>邮箱</td>
							<td colspan="3"><input type="text" style="" id="table1_res5"/></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>专业简介</td> 
							<td colspan="4" style="height:700px"><textarea id="table1_res6">（不超过1500字）</textarea></td>
						</tr>
					</tbody>
				 	<tfoot>
						<tr>
							<td colspan="5">
							说明：不易定量评价的指标可通过“专业简介”定性描述，所填内容不与“专业基本状态数据表”重复。
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
		<!-- 表2-1 -->
		<a name="table2-1"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<h4>二、专业基本状态数据表</h4>
				<h6>1.师资队伍
			  	<span style="float: right;"><input type="button" onclick="getSqlData('table2_1_1')" class="button_input" value="获取数据"/></span>
			  </h6></div>
		</div>
		<div class="tb_main">
			<table id="table2_1">
				<thead>
					<tr>
						<td colspan="2" style="width:30%">教师总数（人）</td>
						<td  style="width:10%"><input type="text" style="" id="table2_1_res1"/></td>
						<td colspan="6" style="width:60%">其中：属本专业专职： <input type="text" style="width:7%" id="table2_1_res2"/>（人） 其他： <input type="text" style="width:7%;" id="table2_1_res3"/> （人）</td>
					</tr> 
					<tr>
						<td colspan="2" rowspan="2">本专业教师结构分布</td>
						<td colspan="5">属本专业专职（人）</td>
						<td colspan="2">其他 （人）</td>
					</tr>
					<tr>
						<td style="width:10%">人数</td>
						<td style="width:10%">35岁及以下</td>
						<td style="width:10%">36至50岁</td>
						<td style="width:10%">51至60岁</td>
						<td style="width:10%">61岁及以上</td>
						<td style="width:10%">本校</td>
						<td style="width:10%">外校</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowspan="4">岗位结构</td> 
						<td>教学人员</td>
						<td><input type="text" id="table2_1_res4"/></td>
						<td><input type="text" id="table2_1_res5"/></td>
						<td><input type="text" id="table2_1_res6"/></td>
						<td><input type="text" id="table2_1_res7"/></td>
						<td><input type="text" id="table2_1_res8"/></td>
						<td><input type="text" id="table2_1_res9"/></td>
						<td><input type="text" id="table2_1_res10"/></td>
					</tr>
					<tr>
						<td>科研人员</td><td><input type="text" id="table2_1_res11"/></td>
						<td><input type="text" id="table2_1_res12"/></td>
						<td><input type="text" id="table2_1_res13"/></td>
						<td><input type="text" id="table2_1_res14"/></td>
						<td><input type="text" id="table2_1_res15"/></td>
						<td><input type="text" id="table2_1_res16"/></td>
						<td><input type="text"id="table2_1_res17"/></td>
					</tr>
					<tr>
						<td>管理人员</td><td><input type="text" id="table2_1_res18"/></td>
						<td><input type="text" id="table2_1_res19"/></td>
						<td><input type="text" id="table2_1_res20"/></td>
						<td><input type="text" id="table2_1_res21"/></td>
						<td><input type="text" id="table2_1_res22"/></td>
						<td><input type="text" id="table2_1_res23"/></td>
						<td><input type="text" id="table2_1_res24"/></td>
					</tr>
					<tr>
						<td>实验室技术人员</td><td><input type="text" id="table2_1_res25"/></td>
						<td><input type="text" id="table2_1_res26"/></td>
						<td><input type="text" id="table2_1_res27"/></td>
						<td><input type="text" id="table2_1_res28"/></td>
						<td><input type="text" id="table2_1_res29"/></td>
						<td><input type="text" id="table2_1_res30"/></td>
						<td><input type="text" id="table2_1_res31"/></td>
					</tr>
					<tr>
						<td rowspan="4">职称结构</td> 
						<td>教授（或相当专业技术职务者）</td><td><input type="text" id="table2_1_res32"/></td>
						<td><input type="text" id="table2_1_res33"/></td>
						<td><input type="text" id="table2_1_res34"/></td>
						<td><input type="text" id="table2_1_res35"/></td>
						<td><input type="text" id="table2_1_res36"/></td>
						<td><input type="text" id="table2_1_res37"/></td>
						<td><input type="text" id="table2_1_res38"/></td>
					</tr>
					<tr>
						<td>副教授（或相当专业技术职务者）</td><td><input type="text" id="table2_1_res39"/></td>
						<td><input type="text" id="table2_1_res40"/></td>
						<td><input type="text" id="table2_1_res41"/></td>
						<td><input type="text" id="table2_1_res42"/></td>
						<td><input type="text" id="table2_1_res43"/></td>
						<td><input type="text" id="table2_1_res44"/></td>
						<td><input type="text" id="table2_1_res45"/></td>
					</tr>
					<tr>
						<td>讲师（或相当专业技术职务者）</td><td><input type="text" id="table2_1_res46"/></td>
						<td><input type="text" id="table2_1_res47"/></td>
						<td><input type="text" id="table2_1_res48"/></td>
						<td><input type="text" id="table2_1_res49"/></td>
						<td><input type="text" id="table2_1_res50"/></td>
						<td><input type="text" id="table2_1_res51"/></td>
						<td><input type="text" id="table2_1_res52"/></td>
					</tr>
					<tr>
						<td>助教及其他（或相当专业技术职务者）</td><td><input type="text" id="table2_1_res53"/></td>
						<td><input type="text" id="table2_1_res54"/></td>
						<td><input type="text" id="table2_1_res55"/></td>
						<td><input type="text" id="table2_1_res56"/></td>
						<td><input type="text" id="table2_1_res57"/></td>
						<td><input type="text" id="table2_1_res58"/></td>
						<td><input type="text" id="table2_1_res59"/></td>
					</tr>
					<tr>
						<td rowspan="3">学历结构</td> 
						<td>具有博士学位人员</td><td><input type="text" id="table2_1_res60"/></td>
						<td><input type="text" id="table2_1_res61"/></td>
						<td><input type="text" id="table2_1_res62"/></td>
						<td><input type="text" id="table2_1_res63"/></td>
						<td><input type="text" id="table2_1_res64"/></td>
						<td><input type="text" id="table2_1_res65"/></td>
						<td><input type="text" id="table2_1_res66"/></td>
					</tr>
					<tr>
						<td>具有硕士学位人员</td><td><input type="text" id="table2_1_res67"/></td>
						<td><input type="text" id="table2_1_res68"/></td>
						<td><input type="text" id="table2_1_res69"/></td>
						<td><input type="text" id="table2_1_res70"/></td>
						<td><input type="text" id="table2_1_res71"/></td>
						<td><input type="text" id="table2_1_res72"/></td>
						<td><input type="text" id="table2_1_res73"/></td>
					</tr>
					<tr>
						<td>具有学士学位或其他学位人员</td><td><input type="text" id="table2_1_res74"/></td>
						<td><input type="text" id="table2_1_res75"/></td>
						<td><input type="text" id="table2_1_res76"/></td>
						<td><input type="text" id="table2_1_res77"/></td>
						<td><input type="text" id="table2_1_res78"/></td>
						<td><input type="text" id="table2_1_res79"/></td>
						<td><input type="text" id="table2_1_res80"/></td>
					</tr>
					<tr>
						<td colspan="2" rowspan="2">有企业（行业）背景教师人数（人）</td>
						<td colspan="2" rowspan="2"><input type="text" id="table2_1_res81"/></td>
						<td colspan="3">有海外背景教师人数（人）</td>
						<td colspan="2"><input type="text" id="table2_1_res82"/></td>
					</tr>
					<tr>
						<td colspan="3">其中：外教（人）</td>
						<td colspan="2"><input type="text" id="table2_1_res83"/></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
		<!-- 表2-2 -->
		<a name="table2-2"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<h6>2.在校生情况
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_2')" class="button_input" value="获取数据"/></span>
			</h6></div>
		</div>
		<div class="tb_main">
			<table id="table_2_2">
				<thead>
					<tr>
						<td style="width: 25%;">类型\年度</td>
						<td style="width: 25%;"><input type="text" style="" id="table2_2_res1"/></td>
						<td style="width: 25%;"><input type="text" style="" id="table2_2_res2"/></td>
						<td style="width: 25%;"><input type="text" style="" id="table2_2_res3"/></td>
					</tr> 
				</thead>
				<tbody>
					
					<tr>
						<td >招生数（人）</td>
						<td ><input type="text" style=""id="table2_2_res4"/></td>
						<td ><input type="text" style="" id="table2_2_res5"/></td>
						<td ><input type="text" style="" id="table2_2_res6"/></td>
					</tr>
					<tr>
						<td >在校生数（人）</td>
						<td ><input type="text" style="" id="table2_2_res7"/></td>
						<td ><input type="text" style="" id="table2_2_res8"/></td>
						<td ><input type="text" style="" id="table2_2_res9"/></td>
					</tr>
					<tr>
						<td >毕业生数（人）</td>
						<td ><input type="text" style="" id="table2_2_res10"/></td>
						<td ><input type="text" style="" id="table2_2_res11"/></td>
						<td ><input type="text" style="" id="table2_2_res12"/></td>
					</tr>
					<tr>
						<td >授予学位数（人）</td>
						<td ><input type="text" style="" id="table2_2_res13"/></td>
						<td ><input type="text" style="" id="table2_2_res14"/></td>
						<td ><input type="text" style="" id="table2_2_res15"/></td>
					</tr>
					
				</tbody>
				
			 	<tfoot>
					<tr>
						<td colspan="4">
						说明：“在校生数”是指统计时间段学籍在本校的本专业全日制本科生。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
		<!-- 表2-3 -->
		<a name="table2-3"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h6>3. 本专业带头人基本情况</h6>
				<!-- <span style="float: right;"><input type="button" onclick="getSqlData('table2_3')" class="button_input" value="获取数据"/></span>
			 --></div>
		</div>
		<div class="tb_main">
			<table id="table2_3">
				<thead>
					<tr>
						<td colspan="2" rowspan="2">姓 名</td>
						<td rowspan="2" style="width:20%"><input type="text" id="table2_3_res1"/></td>
						<td style="width:10%">性 别</td>
						<td style="width:10%"><input type="text" id="table2_3_res2"/></td>
						<td style="width:10%">专业技术职务</td>
						<td style="width:10%"><input type="text" id="table2_3_res3"/></td>
						<td  rowspan="2" style="width:10%">是否属本专业专职</td>
						<td  rowspan="2" style="width:10%"><input type="text" id="table2_3_res4"/></td>
					</tr> 
					<tr>
						<td>出生年月</td>
						<td><input type="text" id="table2_3_res5"/></td>
						<td>定 职 时 间</td>
						<td><input type="text" id="table2_3_res6"/></td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="3">最高学位或最后学历（包括毕业时间、学校、系科）</td>
						<td colspan="6"><input type="text" id="table2_3_res7"/></td>
					</tr>
					<tr>
						<td colspan="3">工作单位(至系、所)</td>
						<td colspan="6"><input type="text" id="table2_3_res8"/></td>
					</tr>
					<tr>
						<td colspan="3">主要研究方向</td>
						<td colspan="6"><input type="text" id="table2_3_res9"/></td>
					</tr>
					<tr>
						<td colspan="9">近三年本人的教学、科研成果</td>
					</tr>
					<tr>
						<td colspan="9">在国内外重要学术刊物上发表论文共<input type="text" style="width:5%" id="table2_3_res10"/>篇；出版专著（译著等） <input type="text" style="width:5%"id="table2_3_res11"/>  部。</td>
					</tr>
					<tr>
						<td colspan="9">获教学科研成果奖共 <input type="text" style="width:5%" id="table2_3_res12"/> 项；其中：国家级  <input type="text" style="width:5%" id="table2_3_res13"/>项，省部级  <input type="text" style="width:5%" id="table2_3_res14"/>项。</td>
					</tr>
					<tr>
						<td colspan="9">目前承担教学科研项目共<input type="text" style="width:5%" id="table2_3_res15"/>  项；其中：国家级项目 <input type="text" style="width:5%" id="table2_3_res16"/>项，省部级项目 <input type="text" style="width:5%" id="table2_3_res17"/> 项。</td>
					</tr>
					<tr>
						<td colspan="9">近三年拥有教学科研经费共<input type="text" style="width:5%" id="table2_3_res18"/>万元，年均<input type="text" style="width:5%" id="table2_3_res19"/>万元。</td>
					</tr>
					<tr>
						<td colspan="9">近三年给本科生授课（理论教学）共<input type="text" style="width:5%" id="table2_3_res20"/>学时；指导本科毕业设计共<input type="text" style="width:5%" id="table2_3_res21"/>人次。</td>
					</tr>
					<tr>
						<td rowspan="7">最具代表性的教学、科研成果(近三年，各限填3项)</td>
						<td>序</td>
						<td colspan="3">成果名称</td>
						<td colspan="3">获得地点、时间</td>
						<td >本人署名位次</td>
					</tr>
					<tr>
						<td>教1</td>
						<td colspan="3"><input type="text" id="table2_3_res22"/></td>
						<td colspan="3"><input type="text" id="table2_3_res23"/></td>
						<td ><input type="text" id="table2_3_res24"/></td>
					</tr>
					<tr>
						<td>教2</td>
						<td colspan="3"><input type="text" id="table2_3_res25"/></td>
						<td colspan="3"><input type="text" id="table2_3_res26"/></td>
						<td ><input type="text" id="table2_3_res27"/></td>
					</tr>
					<tr>
						<td>教3</td>
						<td colspan="3"><input type="text" id="table2_3_res28"/></td>
						<td colspan="3"><input type="text" id="table2_3_res29"/></td>
						<td ><input type="text" id="table2_3_res30"/></td>
					</tr>
					<tr>
						<td>科1</td>
						<td colspan="3"><input type="text" id="table2_3_res31"/></td>
						<td colspan="3"><input type="text" id="table2_3_res32"/></td>
						<td ><input type="text" id="table2_3_res33"/></td>
					</tr>
					<tr>
						<td>科2</td>
						<td colspan="3"><input type="text" id="table2_3_res34"/></td>
						<td colspan="3"><input type="text" id="table2_3_res35"/></td>
						<td ><input type="text" id="table2_3_res36"/></td>
					</tr>
					<tr>
						<td>科3</td>
						<td colspan="3"><input type="text" id="table2_3_res37"/></td>
						<td colspan="3"><input type="text" id="table2_3_res38"/></td>
						<td ><input type="text" id="table2_3_res39"/></td>
					</tr>
					<tr>
						<td rowspan="7">最具代表性的教学、科研成果(近三年，各限填3项)</td>
						<td style="width:10%">序</td>
						<td colspan="3">项目名称</td>
						<td style="width:10%">项目来源</td>
						<td style="width:10%">起讫时间</td>
						<td style="width:10%">经费（万元）</td>
						<td style="width:10%">本人承担工作</td>
					</tr>
					<tr>
						<td>教1</td>
						<td colspan="3"><input type="text" id="table2_3_res40"/></td>
						<td colspan="3"><input type="text" id="table2_3_res41"/></td>
						<td ><input type="text" id="table2_3_res42"/></td>
					</tr>
					<tr>
						<td>教2</td>
						<td colspan="3"><input type="text" id="table2_3_res43"/></td>
						<td colspan="3"><input type="text" id="table2_3_res44"/></td>
						<td ><input type="text" id="table2_3_res45"/></td>
					</tr>
					<tr>
						<td>教3</td>
						<td colspan="3"><input type="text" id="table2_3_res46"/></td>
						<td colspan="3"><input type="text" id="table2_3_res47"/></td>
						<td ><input type="text" id="table2_3_res48"/></td>
					</tr>
					<tr>
						<td>科1</td>
						<td colspan="3"><input type="text" id="table2_3_res49"/></td>
						<td colspan="3"><input type="text" id="table2_3_res50"/></td>
						<td ><input type="text" id="table2_3_res51"/></td>
					</tr>
					<tr>
						<td>科2</td>
						<td colspan="3"><input type="text" id="table2_3_res52"/></td>
						<td colspan="3"><input type="text" id="table2_3_res53"/></td>
						<td ><input type="text" id="table2_3_res54"/></td>
					</tr>
					<tr>
						<td>科3</td>
						<td colspan="3"><input type="text" id="table2_3_res55"/></td>
						<td colspan="3"><input type="text" id="table2_3_res56"/></td>
						<td ><input type="text" id="table2_3_res57"/></td>
					</tr>
				</tbody>
				
			 	<tfoot>
					<tr>
						<td colspan="9">
						说明：获得地点指所获成果的出处，如发表刊物、出版单位、鉴定单位等。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
		<!-- 表2-4-1 -->
		<a name="table2-4-1"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<h6>4.教学和科学研究
				<span style="float: right;"><input type="button" onclick="addTr('table2_4_1')" class="button_input" value="新增一行"/></span>
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_4_1')" class="button_input" value="获取数据"/></span>
			</h6></div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="5" class="table_tr_title" style="text-align:left">4.1近三年本专业教师的教学研究论文（限填6篇）</td></tr>
					<tr>
						<td style="width: 10%;">序号</td>
						<td style="width: 20%;">论文名称</td>
						<td style="width: 25%;">何时何刊物发表或出版社出版</td>
						<td style="width: 20%;">书刊登记号</td>
						<td style="width: 25%;">本人承担部分、排序</td>
					</tr> 
				</thead>
				<tbody id="tbody2_4_1">
					
				</tbody>
				
			 	<!-- <tfoot>
					<tr>
						<td colspan="4">
						</td>
					</tr>
				</tfoot> -->
			</table>
		</div>
	</div>
		<!-- 表2-4-2 -->
		<a name="table2-4-2"></a>
		<div class="tb_box">
		<!--  <div class="tb_top">
			<div class="tb_title">
					<span style="float: right;"><input type="button" onclick="getSqlData('table2_4_2')" class="button_input" value="获取数据"/></span>
			</div>
		</div> -->
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="14" class="table_tr_title" style="text-align:left">4.2近三年本专业教师的科研论文</td></tr>
					<tr>
						<td style="width: 30%;" colspan="4">发表学术论文数（不重复计算）</td>
						<td style="width: 70%;" colspan="10">以第一作者/通讯作者发表论文被收录数（不重复计算）</td>
					</tr> 
				</thead>
				
				<tbody>
					<tr>
						<td style="width:8%">第一作者/通讯作者</td>
						<td style="width:7%"><input type="text" id="table2_4_2_res1"/></td>
						<td style="width:8%">第二作者</td>
						<td style="width:7%"><input type="text" id="table2_4_2_res2"/></td>
						
						<td style="width:7%">SCI</td>
						<td style="width:7%"><input type="text" id="table2_4_2_res3"/></td>
						<td style="width:7%">EI</td>
						<td style="width:7%"><input type="text" id="table2_4_2_res4"/></td>
						<td style="width:7%">SSCI</td>
						<td style="width:7%"><input type="text" id="table2_4_2_res5"/></td>
						<td style="width:7%">A&HCI</td>
						<td style="width:7%"><input type="text" id="table2_4_2_res6"/></td>
						<td style="width:7%">ISTP</td>
						<td style="width:7%"><input type="text" id="table2_4_2_res7"/></td>
					</tr>
					<tr>
						<td colspan="4">以第一作者/通讯作者发表的最具有代表性论文的影响因子（索引或数据库名称）</td>
						<td colspan="5"><input type="text" style="width:70%" id="table2_4_2_res8"/>(<input type="text" style="width:10%" id="table2_4_2_res9"/>)</td>
						<td colspan="3">已获发明或实用新型专利数</td>
						<td colspan="2"><input type="text" id="table2_4_2_res10"/></td>
					</tr>	
				</tbody>
			 <!-- 	<tfoot>
					<tr>
						<td colspan="4">
						</td>
					</tr>
				</tfoot> -->
			</table>
		</div>
	</div>
		<!-- 表2-4-3 -->
		<a name="table2-4-3"></a>		
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<h6>4.教学和科学研究
				<span style="float: right;"><input type="button" onclick="addTr('table2_4_3')" class="button_input" value="新增一行"/></span>
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_4_3')" class="button_input" value="获取数据"/></span>
			</h6></div>
		</div>
		<div class="tb_main">
			<table id="table2_4_3">
				<thead>
					<tr><td colspan="5"  class="table_tr_title" style="text-align:left">4.3近三年本专业教师的教学、科研获奖情况（论文、专利、专著、鉴定、获奖等，限填10项）</td></tr>
					<tr>
						<td style="width: 10%;">序号</td>
						<td style="width: 30%;">成 果 名 称</td>
						<td style="width: 20%;">作者（*）</td>
						<td style="width: 15%;">获得时间</td>
						<td style="width: 25%;">获得地点</td>
					</tr> 
				</thead>
				
				<tbody id="tbody2_4_3">
					
				</tbody>
				
			 	<tfoot>
					<tr>
						<td colspan="5">
						说明：1.限填本专业教师获得的科研成果，（*）作者姓名后括号内填写署名次序；<br/>
      					2.获得地点指获得成果的出处，如发表刊物、出版单位、鉴定单位等。</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
		<!-- 表2-5-1 -->
		<a name="table2-5-1"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<h6>5.主要建设成效
				<span style="float: right;"><input type="button" onclick="addTr('table2_5_1')" class="button_input" value="新增一行"/></span>
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_5_1')" class="button_input" value="获取数据"/></span>
			</h6></div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="6"  class="table_tr_title" style="text-align:left">5.1近三年本专业获国家级、市级和校级精品课程、重点课程建设情况</td></tr>
					<tr>
						<td style="width: 10%;">序号</td>
						<td style="width: 30%;">课程名称</td>
						<td style="width: 15%;">责任人</td>
						<td style="width: 15%;">级别、性质</td>
						<td style="width: 15%;">起讫时间</td>
						<td style="width: 15%;">经费</td>
					</tr> 
				</thead>
				
				<tbody id="tbody2_5_1">
					
				</tbody>
				
			 	<tfoot>
					<tr>
						<td colspan="6">
						说明：“性质”指课程属精品课程还是重点课程；“经费”指学校的投入经费。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
		<!-- 表2-5-2 -->
		<a name="table2-5-2"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<span style="float: right;"><input type="button" onclick="addTr('table2_5_2')" class="button_input" value="新增一行"/></span>
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_5_2')" class="button_input" value="获取数据"/></span>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="4"  class="table_tr_title" style="text-align:left">5.2近二届（2005、2009）三年本专业获省部级及以上优秀教学成果、近三年教材奖及“质量工程”项目情况</td></tr>
					<tr>
						<td style="width: 10%;">序号</td>
						<td style="width: 40%;">项目名称</td>
						<td style="width: 20%;">获奖人(*)</td>
						<td style="width: 30%;">获奖名称、等级、时间</td>
					</tr> 
				</thead>
				
				<tbody id="tbody2_5_2">
					
				</tbody>
				
			 	<tfoot>
					<tr>
						<td colspan="4">
						说明：选择获奖级别和影响面大的填写。获奖人(*)括号内填写署名次序。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
		<!-- 表2-5-3 -->
		<a name="table2-5-3"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<span style="float: right;">
					<input type="button" onclick="addTr('table2_5_3')" class="button_input" value="新增一行"/>
				</span>
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_5_3')" class="button_input" value="获取数据"/></span>
			
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="6"  class="table_tr_title" style="text-align:left">5.3近三年本专业出版本科教学用教材及参考书情况</td></tr>
					<tr>
						<td style="width: 10%;">序号</td>
						<td style="width: 30%;">教材（教学用书）名称</td>
						<td style="width: 15%;">作者（*）</td>
						<td style="width: 15%;">出版日期</td>
						<td style="width: 15%;">出版单位</td>
						<td style="width: 15%;">其他单位采用情况</td>
					</tr> 
				</thead>
				
				<tbody id="tbody2_5_3">
					
				</tbody>
				
			 	<tfoot>
					<tr>
						<td colspan="6">
						说明：作者(*)括号内填写署名次序。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
		<!-- 表2-5-4 -->
		<a name="table2-5-4"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<span style="float: right;">
					<input type="button" onclick="addTr('table2_5_4')" class="button_input" value="新增一行"/>
				</span>
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_5_4')" class="button_input" value="获取数据"/></span>
			
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="6"  class="table_tr_title" style="text-align:left">5.4近三年本专业学生国际交流情况</td></tr>
					<tr>
						<td style="width: 10%;">序号</td>
						<td style="width: 15%;">姓名</td>
						<td style="width: 15%;">出国（境）时间	</td>
						<td style="width: 15%;">回国（境）时间</td>
						<td style="width: 15%;">地点（国家及高校）</td>
						<td style="width: 30%;">国际交流项目名称或主要交流目的</td>
					</tr> 
				</thead>
				
				<tbody id="tbody2_5_4">
				</tbody>
				
			 	<tfoot>
					<tr>
						<td colspan="6">
						说明：1.限填在校生赴境外交流学习或联合培养（时间超过三个月）的情况，出国（境）期间学籍需在本单位。<br/>
						2.“出国（境）时间”和“回国（境）时间”应填写到“日”。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
		<!-- 表2-5-5 -->
		<a name="table2-5-5"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_5_5')" class="button_input" value="获取数据"/></span>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="4"  class="table_tr_title" style="text-align:left">5.5近三年本专业学生一志愿录取率</td></tr>
					<tr>
						<td style="width: 25%;">年度</td>
						<td style="width: 25%;"><input type="text" value="" id="table2_5_5_res1"/></td>
						<td style="width: 25%;"><input type="text" value="" id="table2_5_5_res2"/></td>
						<td style="width: 25%;"><input type="text" value="" id="table2_5_5_res3"/></td>
					</tr> 
				</thead>
				
				<tbody>
					<tr>
						<td >报到率（％）</td>
						<td><input type="text" value="" id="table2_5_5_res4"/></td>
						<td><input type="text" value="" id="table2_5_5_res5"/></td>
						<td><input type="text" value="" id="table2_5_5_res6"/></td>
					</tr>
				</tbody>
				
			 	<!-- <tfoot>
					<tr>
						<td colspan="4">
						</td>
					</tr>
				</tfoot> -->
			</table>
		</div>
	</div>
		<!-- 表2-5-6 -->
		<a name="table2-5-6"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_5_6')" class="button_input" value="获取数据"/></span>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="4"  class="table_tr_title" style="text-align:left">5.6近三年本专业毕业生就业率</td></tr>
					<tr>
						<td style="width: 25%;">年度</td>
						<td style="width: 25%;"><input type="text" value="" id="table2_5_6_res1"/></td>
						<td style="width: 25%;"><input type="text" value="" id="table2_5_6_res2"/></td>
						<td style="width: 25%;"><input type="text" value="" id="table2_5_6_res3"/></td>
					</tr> 
				</thead>
				
				<tbody>
					<tr>
						<td >就业率（％）</td>
						<td><input type="text" value="" id="table2_5_6_res4"/></td>
						<td><input type="text" value="" id="table2_5_6_res5"/></td>
						<td><input type="text" value="" id="table2_5_6_res6"/></td>
					</tr>
				</tbody>
				
			 	<!-- <tfoot>
					<tr>
						<td colspan="4">
						</td>
					</tr>
				</tfoot> -->
			</table>
		</div>
	</div>
		<!-- 表2-6-1 -->
		<a name="table2-6-1"></a>
		<div class="tb_box">
		
		<div class="tb_top">
			<div class="tb_title">
				<h6>6.基本办学条件
				<span style="float: right;">
					<input type="button" onclick="addTr('table2_6_1')" class="button_input" value="新增一行"/>
				</span></h6>
				<!-- <span style="float: right;"><input type="button" onclick="getSqlData('table2_6_1')" class="button_input" value="获取数据"/></span>
			 -->
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="4"  class="table_tr_title" style="text-align:left">6.1本专业开设的主要实践环节（包括独立开设的实验课及实习）</td></tr>
					<tr>
						<td style="width: 25%;">实 践 环 节 名 称</td>
						<td style="width: 25%;">主  要  实  践  内  容</td>
						<td style="width: 25%;">实 践 地 点</td>
						<td style="width: 25%;">学时或周数</td>
					</tr> 
				</thead>
				
				<tbody id="tbody2_6_1">
					
				</tbody>
				
			 	<tfoot>
					<tr>
						<td colspan="4">
						说明：按为最近一届毕业生开设的实践环节情况据实填写。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
		<!-- 表2-6-2 -->
		<a name="table2-6-2"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<span style="float: right;">
					<input type="button" onclick="addTr('table2_6_2')" class="button_input" value="新增一行"/>
				</span>
				<!-- <span style="float: right;"><input type="button" onclick="getSqlData('table2_6_2')" class="button_input" value="获取数据"/></span>
			 -->
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="4" class="table_tr_title" style="text-align:left">6.2本专业开设的主要实验</td></tr>
					<tr>
						<td style="width: 25%;">实 验 名 称</td>
						<td style="width: 25%;">主  要  内  容</td>
						<td style="width: 25%;">对 象</td>
						<td style="width: 25%;">学时或周数</td>
					</tr> 
				</thead>
				
				<tbody id="tbody2_6_2">
				</tbody>
				
			 	<tfoot>
					<tr>
						<td colspan="4">
						说明：按为最近一届毕业生开设的专业实验情况据实填写。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
		<!-- 表2-6-3 -->
		<a name="table2-6-3"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<span style="float: right;">
					<input type="button" onclick="addTr('table2_6_3')" class="button_input" value="新增一行"/>
				</span>
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_6_3')" class="button_input" value="获取数据"/></span>
			
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="6" class="table_tr_title" style="text-align:left">6.3校外实习实践基地（限填5项，有固定合作关系）</td></tr>
					<tr>
						<td style="width: 10%;" rowspan="2">序号</td>
						<td style="width: 30%;" rowspan="2">单  位  名  称</td>
						<td style="width: 30%;" rowspan="2">承担的教学任务</td>
						<td colspan="3">接受学生人数（近三年）</td>
					</tr> 
					<tr>
						<td style="width:10%"></td>
						<td style="width:10%"></td>
						<td style="width:10%"></td>
					</tr>
				</thead>
				
				<tbody id="tbody2_6_3">
					
				</tbody>
				
			 	<!-- <tfoot>
					<tr>
						<td colspan="4">
						说明：按为最近一届毕业生开设的专业实验情况据实填写。
						</td>
					</tr>
				</tfoot> -->
			</table>
		</div>
	</div>
		<!-- 表2-6-4 -->
		<a name="table2-6-4"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_6_4')" class="button_input" value="获取数据"/></span>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="3" class="table_tr_title" style="text-align:left">6.4 图书资源概况</td></tr>
					<tr>
						<td style="width: 30%;" ></td>
						<td style="width: 35%;" >学校藏</td>
						<td style="width: 35%;" >院（系）藏</td>
					</tr> 
				</thead>
				
				<tbody>
					<tr>
						<td>纸质图书数（本）</td>
						<td><input type="text" id="table2_6_4_res1"/></td>
						<td><input type="text" id="table2_6_4_res2"/></td>
					</tr>
					<tr>
						<td>纸质期刊数（册）</td>
						<td><input type="text" id="table2_6_4_res3"/></td>
						<td><input type="text" id="table2_6_4_res4"/></td>
					</tr>
					<tr>
						<td>电子期刊数（册）</td>
						<td><input type="text" id="table2_6_4_res5"/></td>
						<td><input type="text" id="table2_6_4_res6"/></td>
					</tr>
					<tr>
						<td>专业数据库（个）</td>
						<td><input type="text" id="table2_6_4_res7"/></td>
						<td><input type="text" id="table2_6_4_res8"/></td>
					</tr>
				</tbody>
				
			 	<!-- <tfoot>
					<tr>
						<td colspan="4">
						说明：按为最近一届毕业生开设的专业实验情况据实填写。
						</td>
					</tr>
				</tfoot> -->
			</table>
		</div>
	</div>
		<!-- 表2-6-5 -->
		<a name="table2-6-5"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title">
				<span style="float: right;"><input type="button" onclick="getSqlData('table2_6_5')" class="button_input" value="获取数据"/></span>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_1_2">
				<thead>
					<tr><td colspan="6" class="table_tr_title" style="text-align:left">6.5近三年专业办学经费</td></tr>
					<tr>
						<td style="width: 55%;" colspan="3">类别\年度</td>
						<td style="width: 15%;" ><input type="text" id="table2_6_5_res1"/></td>
						<td style="width: 15%;" ><input type="text" id="table2_6_5_res2"/></td>
						<td style="width: 15%;" ><input type="text" id="table2_6_5_res3"/></td>
					</tr> 
				</thead>
				
				<tbody>
					<tr>
						<td rowspan="8">教学经费</td>
						<td rowspan="2" style="width:15%">来源</td>
						<td style="width:30%">校方拨款（万元）</td>
						<td><input type="text" id="table2_6_5_res4"/></td>
						<td><input type="text" id="table2_6_5_res5"/></td>
						<td><input type="text" id="table2_6_5_res6"/></td>
					</tr>
					<tr>
						<td>其他来源（万元）</td>
						<td><input type="text" id="table2_6_5_res7"/></td>
						<td><input type="text" id="table2_6_5_res8"/></td>
						<td><input type="text" id="table2_6_5_res9"/></td>
					</tr>
					<tr>
						<td rowspan="6">支出</td>
						<td>生均日常教学经费（元）</td>
						<td><input type="text" id="table2_6_5_res10"/></td>
						<td><input type="text" id="table2_6_5_res11"/></td>
						<td><input type="text" id="table2_6_5_res12"/></td>
					</tr>
					<tr>
						<td>其中：生均实习实践经费（元）</td>
						<td><input type="text" id="table2_6_5_res13"/></td>
						<td><input type="text" id="table2_6_5_res14"/></td>
						<td><input type="text" id="table2_6_5_res15"/></td>
					</tr>
					<tr>
						<td>生均毕业设计（论文）经费（元）</td>
						<td><input type="text" id="table2_6_5_res16"/></td>
						<td><input type="text" id="table2_6_5_res17"/></td>
						<td><input type="text" id="table2_6_5_res18"/></td>
					</tr>
					<tr>
						<td>生均实验教学维持费（元）</td>
						<td><input type="text" id="table2_6_5_res19"/></td>
						<td><input type="text" id="table2_6_5_res20"/></td>
						<td><input type="text" id="table2_6_5_res21"/></td>
					</tr>
					<tr>
						<td>教学设备仪器维护费用（万元）</td>
						<td><input type="text" id="table2_6_5_res22"/></td>
						<td><input type="text" id="table2_6_5_res23"/></td>
						<td><input type="text" id="table2_6_5_res24"/></td>
					</tr>
					<tr>
						<td>图书资料购买费用（万元）</td>
						<td><input type="text" id="table2_6_5_res25"/></td>
						<td><input type="text" id="table2_6_5_res26"/></td>
						<td><input type="text" id="table2_6_5_res27"/></td>
					</tr>
					<tr>
						<td rowspan="3">科研经费</td>
						<td rowspan="3">来源</td>
						<td >纵向课题经费（万元）</td>
						<td><input type="text" id="table2_6_5_res28"/></td>
						<td><input type="text" id="table2_6_5_res29"/></td>
						<td><input type="text" id="table2_6_5_res30"/></td>
					</tr>
					<tr>
						<td >横向课题经费（万元）</td>
						<td><input type="text" id="table2_6_5_res31"/></td>
						<td><input type="text" id="table2_6_5_res32"/></td>
						<td><input type="text" id="table2_6_5_res33"/></td>
					</tr>
					<tr>
						<td >其他收入（万元）</td>
						<td><input type="text" id="table2_6_5_res33"/></td>
						<td><input type="text" id="table2_6_5_res35"/></td>
						<td><input type="text" id="table2_6_5_res36"/></td>
					</tr>
					<tr>
						<td style="height:100px">上述数据中的问题和说明</td>
						<td colspan="6"><textarea id="table2_6_5_res37"></textarea></td>
					</tr>
				</tbody>
				
			 	<!-- <tfoot>
					<tr>
						<td colspan="4">
						说明：按为最近一届毕业生开设的专业实验情况据实填写。
						</td>
					</tr>
				</tfoot> -->
			</table>
		</div>
	</div>
		<!-- 表3 -->
		<a name="table3"></a>
		<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>三、其他实证材料（另附）</h4>
			<div style="font-weight: 100;font-size: large;">1.专业培养方案</div>
			<div style="font-weight: 100;font-size: large;">2.最新一届在校生主干专业课程教学大纲</div>
			<div style="font-weight: 100;font-size: large;">3.最新一届毕业设计（论文）情况表（格式附后）</div>
			</div>
		</div>
		<div class="tb_main" style="margin-top: 60px;">
			<table id="table_3">
				<thead>
					<tr><td colspan="11" class="table_tr_title">毕业设计（论文）情况表</td></tr>
					<tr>
						<td >序号</td>
						<td >学号</td>
						<td >姓名</td>
						<td >专业</td>
						<td >题目</td>
						<td >选题来源</td>
						<td >指导教师</td>
						<td >教师职称</td>	
						<td >教师学历</td>
						<td >答辩时间</td>
						<td >答辩地点</td>
					</tr> 
				</thead>
				<tbody>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="11">
						说明：选题来源为科研课题、生产社会实际、自选,三选一。
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
		</div>
		
		<!-- 表4 -->
		<a name="table4"></a>
			<div class="table4_title">四、教学管理和质量保障体系（300-500字）</div>
   <div class="table_content">
   	<textarea id="table4_res1"></textarea>
   </div>
		<!-- 表5 -->
		<a name="table5"></a>
		<div class="table5_title">五、单位审核意见</div>
		
    <div class="table5_div" style="margin-top: 20px;">
    	<div style="float: left; margin-left: 10px; ">院系审核意见:</div>
	    <textarea id="table5_res1"></textarea>
	    <div>
			<span>负责人（签字）:</span><input type="text" style="width:20%;" id="table5_res2"/>
			<span>日期：</span><input type="text" style="width:20%;" id="table5_res3"/>
		</div>
	</div>
    <div class="table5_div" style="margin-top: 20px;">
    	<div style="float: left; margin-left: 10px; ">校教学主管部门审核意见:</div>
	    <textarea id="table5_res4" style="width:68%"></textarea>
	    <div>
		<span>负责人（签字）:</span><input type="text" style="width:20%;" id="table5_res5"/>
		<span>日期:</span><input type="text" style=" width:20%; " id="table5_res6"/></div>
	</div>
    <div class="table5_div" style="height:40% ;margin-top: 20px;">
    	<div style="float: left; margin-left: 10px; ">校审核意见:</div>
	    <textarea style="height:60%;" id="table5_res7"></textarea>
	    <span style="margin-left:5px;">&nbsp;&nbsp;&nbsp;&nbsp;本单位承诺，以上各项所填内容、数据均准确无误，真实可靠，并附相关材料的复印件。如有需要，本单位将提供材料的原件以供核实。若有虚报或隐瞒重要事实，所造成的后果由本单位负责。</span>
		<div><span>负责人（签字）： </span><input type="text" style="width:20%;" id="table5_res8"/>
		<span>日期：</span><input type="text" style="width:20%;" id="table5_res9"/></div>
	</div>
		<!--  -->
  		</div>
  	</div>
  	</div>
  	</div>
  <script type="text/javascript">
     $(document).ready(function () {
		    var year = "${year}";
		     
		    //获取年份
		    var strCookie = document.cookie;
		    var cookies = strCookie.split("; ");
		    for(var i=0;i<cookies.length;i++){
		    	var cookie = cookies[i];
		    	var details = cookie.split("=");
		    	if(details[0] == "assessYear"){
		    		year = details[1];
		    	}
		    }
		     getUserGroup(year);
		});
     </script>
  	
  </body>
</html>
