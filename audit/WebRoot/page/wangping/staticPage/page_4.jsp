<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
	
<title></title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_0.css">
<link rel="stylesheet" type="text/css"
	href="<%=basePath%>page/lzrPopWindow/css/lzrwindow.css" />
	
<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript"
	src="<%=basePath%>page/lzrPopWindow/js/lzrWindow.js"></script>
<script type="text/javascript" src="/audit/page/wangping/staticPage/js/page_4.js" ></script>	
<script type="text/javascript" src="js/jquery.form.js" ></script>	
<script type="text/javascript" src="js/jquery.form.min.js" ></script>
<script type="text/javascript" src="/audit/commonjs/common1.js"></script>
<style type="text/css">
		#table1{border-collapse:collapse;border:none;width: 100%;}
		#table1 td{border:solid #BDBCBC 1px;height:30px;width: 10%;font-size:10px;text-align: center;}
		#table1 th{border:solid #BDBCBC 1px;height:30px;width:10%;border-color:#BDBCBC;font-size:15px;text-align: center;}
		.score table {border-collapse:collapse;border:none;width: 100%;}
		.score table td{font-weight: 600;color: #C12625;}
		#score table td{width: 100px; }
		.score{margin-left: 13px;}
		/* .score table td u{ text-decoration: underline;text-align: center;border-color: black;} */
		#top_table table td{font-size:13px; font-weight: bold;}
		#showCailiao a{text-decoration: none;font-weight: 600;color: blue;margin: 20px;}
		.main{width:100%;height: 30px;overflow:auto; margin: 15px;border:solid #138b8a 1px;margin-left:0px;}
		.cell {width:25%; float:left; height:100%;text-decoration: none;font-weight: 600;text-align: center;}
		.c:HOVER {cursor: pointer;/* background:#138b8a; */text-align: center;}
		.main a{text-decoration: none;color:#138b8a;font-size: 15px;}
		.lianghua table {border-collapse:collapse;border:none;width: 100%;text-align: center; }
		.lianghua table th{border:solid #BDBCBC 1px;height:40px;border-color:#BDBCBC;font-size:15px;text-align: center;}
		.lianghua table td{border:solid #BDBCBC 1px;height:40px;border-color:#BDBCBC;font-size:12px;font-weight: 600;color:#797979;text-align: center;}
		.midt  {border-collapse:collapse;border:none;width: 100%;}
	    .midt td{border:solid #BDBCBC 1px;height:40px;width: 10%;border-color:#BDBCBC;font-size:12px;text-align: center;}
	    .midt  th{border:solid #BDBCBC 1px;height:40px;width:10%;border-color:#BDBCBC;font-size:15px;text-align: center;}
	    #scoolData-table{
	    	border-top:1px #cdcdcd solid;
	    	border-left:1px #cdcdcd solid;
	    	text-align:center;
	    }
	    #scoolData-table td{
	    	border-bottom:1px #cdcdcd solid;
	    	border-right:1px #cdcdcd solid;
	    }
	    
	</style>
       <script type="text/javascript" src="/audit/FlexPaper/js/jquery.js"></script>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash.js"></script>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash_debug.js"></script>
		<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
		<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
		<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/base.js" type="text/javascript"></script>
		<script src="/audit/page/zenith/staticPage/js/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>
		<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/inject.js" type="text/javascript"></script>
		<script src="/audit/page/zenith/staticPage/js/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
</head>

<body>
<input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>
	<div id="main">
		<div id="top">
			<div id="text" margin-left: 20px;>
				专业情况概要
			</div>
		</div>
		<div class="div_table" id="top_table" style="max-height:50.5%;overflow:auto;min-height:80px; margin: 15px;width: 100%;margin-left:0px">
		     <table id="table1">
		        <tr style="background-color: #DCDBDB;">
		            <th rowspan="2" >一级指标</th>
		            <th rowspan="2">二级指标</th>
		            <th rowspan="2">分值</th>
		            <th colspan="2">
		                                 等级标准
		            </th>
		            <th rowspan="2">评估方式</th>
		            <th rowspan="2">说明</th>
		            
		        </tr>
		        <tr style="background-color: #DCDBDB;">
		           <td >A</td>
		           <td >C</td>
		        </tr>
		        <tr id="top_tr">
		            <td>1教学规范</td>
		            <td>制度建设</td>
		            <td>5分</td>
		            <td>定位准确方法，但是这种方法在传递this等参数的时候很容易</td>
		            <td>定位较准确方法，但是这种方法在传递this等参数的时候很容易出问题，</td>
		            <td>查阅院系方法，但是这种方法在传递this</td>
		            <td>能根拒收国家但是这种方法在传递this等参数的时候很容易出问题</td>
		        </tr>
		     </table>
		</div>
		<div id="score2" class="score" style="text-align:center; max-height:50.5%;overflow:auto;min-height:30px;width: 100%; padding-top: 15px;margin-left:3px;" >
		    <table>
		        <tr>
				    <td><label style="font-size: 15px"/>自评等级:<input id="grade1" readonly="readonly" style="border-left: none;border-right: none;font-size:17px;border-top: none;text-align: center; width: 60px;border-color:#4b4b4b;color:#c12625;font-weight: 600"/></td>
				    <td><label style="font-size: 15px"/>自评分数:<input id="grade2" readonly="readonly" style="border-left: none;border-right: none;font-size:17px;border-top: none;text-align: center;width: 60px;border-color:#4b4b4b;color:#c12625;font-weight: 600"/></td>
				    <td><label style="font-size: 15px"/>学院评价等级:<input id="college_grade" readonly="readonly" style="border-left: none;border-right: none;font-size:17px;border-top: none;text-align: center;width: 60px;border-color:#4b4b4b;color:#c12625;font-weight: 600"/></td>
				    <td><label style="font-size: 15px"/>学院评价分数:<input id="college_score" readonly="readonly" style="border-left: none;border-right: none;font-size:17px;border-top: none;text-align: center;width: 60px;border-color:#4b4b4b;color:#c12625;font-weight: 600"/></td>
				</tr>
		    </table>
		</div>
		<div id="score1" class="score" style="text-align:center; max-height:50.5%;overflow:auto;min-height:30px;width: 100%; padding-top: 15px;margin-left:3px;" >
			<table>
				<tr>
					<td><label style="font-size: 15px"/>输入网评等级:<input type="text" name="Lever"  id="shLever1" onblur="checkGrade()" style="width: 70px;height: 30px;font-size:17px; color:#C12625;text-align: center;font-weight: 600"></td>
					<td><label style="font-size: 15px"/>输入网评分数：<input type="text" name="grades"  id="shLever2" onblur="checkScore()" style="width: 70px;height: 30px;font-size:17px; color:#C12625;text-align: center;font-weight: 600 "></td>
					<!-- <td><label style="font-size: 15px"/>系统得分:<input readonly="readonly" id="grade3" value="" style="border-left: none;border-right: none;border-top: none;font-size:17px;border-color: #4b4b4b;text-align: center; width: 60px;color:#c12625;font-weight: 600"/><a href="javascript:void(0);" onclick="showDetail();" style="color: #fe8a39;text-decoration: none;">查看量化分值</a></td>
				</tr> -->
			</table>
			<div style="padding:10px;border:solid #BDBCBC 1px;margin-top:13px;line-height:22px;overflow:auto;text-align: left;width:98%"><span style="font-size:12px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评估等级说明：评估等级分为A，B，C，D四级，评估标准给出A，C两级，介于A，C级之间的为B，低于C级的为D。指标体系满分为110分（含特色附加分10分），
				各项二级指标中，A，B，C，D四级的权重分别为1.0、0.8、0.6、0.4。各二说明：1.本方案二级指标共22项，评估等级分为A，B，C，D四级，评估标准给出A，C两级，介于A，C级之间的为B，低于C级的为D。
				指标体系满分为110分（含特色附加分10分），各项二级指标中，A，B，C，D四级的权重分别为1.0、0.8、0.6、0.4。各二级指标得分的计算公式为：各二级指标得分的计算公式为：1.0×a+0.8×b+0.6×c+0.4×d,
				其中， a、b、c、d分别表示各二级指标所对应的分值。级指标得分的计算公式为：各二级指标得分的计算公式为：1.0×a+0.8×b+0.6×c+0.4×d,其中， a、b、c、d分别表示各二级指标所对应的分值。
			</span></div>
		</div>
		<div id="lianghua" style="width: 100%;height:80%;border:1px solid #fe8a39;background-color: #fffdc4; display: none;margin: 15px;margin-left:0px">
			<div id="divclose" style="text-align:center;line-height:33px;font-size:16px;background-color:#fe8a39; height: 6%; width: 100%; z-index: 100; /* position: absolute; top: 4%; left: 5%; */ display: block;">
	             <img style="vertical-align:middle;float: right;" height="100%" src="/audit/page/xueyuan/staticPage/img/tab_close1.png " onclick="hidebutton()" border="0">
	        </div>
	        <div class="lianghua" id="linghua_table1" style="overflow:auto;margin-bottom: 5px;">
		 <span style="width: 100%;font-weight: 600;color: black;">量化计算公式</span>
		    <table id="linghuaTable">
		    </table>
		 </div>
		 
		 <div class="lianghua" id="linghua_table2" style="overflow:auto; margin-top: 15px;">
		<span style="width: 100%;font-weight: 600;color: black;">量化指标</span>
		    <table id="LHZB" >
		    </table>
		 </div>
		
		</div>
		 <div id="mains" style="display: block;">
		 <div class="main">
				<div class="cell c" id="c1"><a href="javascript:void(0);" class="a">自评报告</a></div>
				<div class="cell c" id="c2"><a href="javascript:void(0);" class="a">定量数据表</a></div>
				<div class="cell c" id="c3"><a href="javascript:void(0);" class="a">支撑材料</a></div>
				<div class="cell c" id="c4"><a href="javascript:void(0);" class="a">全校数据表</a></div>
         </div>
		  <div id="shyq" style="max-height:50.5%;overflow:auto; width: 100%;margin: 15px;margin-left:0px">
		      <div id="cailiao" style="width: 100%;height: 75%;border:1px solid #DCDBDB;background-color:#f9f9f9 ">
		       <div id="viewId" style='width:100%;height:550px;display:none;margin-left: 14px;'>预览
	                  <p id='viewerPlaceHolder'style='width:95%;height:550px;display:block;margin-left: 14px;'></p>
               	  </div>
		              <div id="midTablle4" style="width: 100%;height: 75%;display: none"></div>
				      <div id="midTablle1" style="max-height:50.5%;overflow:auto;min-height:120px; display: none;">
				 	    <span style="width: 100%;font-weight: 600;color: #C12625;font-size: 15px;">审核材料</span>
					    <table  class="midt" id="ZCCL" >
					    </table>
				   </div>
				   <!-- 预览材料播放器 -->
				   <!-- <div  id="viewerPlaceHolder" style="max-height:50.5%;overflow:auto;min-height:300px; display: none;"></div> -->
				  
				    <div id="midTablle2" style="max-height:50.5%;overflow:auto;min-height:120px;display: none;">
						 <span style="width: 100%;font-weight: 600;color: #C12625;font-size: 15px">审核数据表</span>
						    <table class="midt" id="SHSJB">
						    </table>
		               </div>
					 <div id="midTablle3" style="max-height:50.5%;overflow:auto;min-height:120px;display: none;">
					 <span style="width: 100%;font-weight: 600;color: #C12625;font-size: 15px">查看校级数据表</span>
					    <table class="midt" id="XJSJB">
					    </table>
					 </div>
		  </div>
		  </div>
			<div id="down" style="width: 100%;margin: 15px;margin-left:0px;">
			<span style="width: 100%;font-weight: 600;color: #C12625;font-size:16px;">专家网评意见</span>
			<textarea rows="" cols="" id="zYJ" onclick="onDianJi(this)"  style="width: 100%; height: 80px; resize: none;font-size:18px; color:rgba(33, 33, 33, 0.95);padding: 5px;font-family: 'Microsoft YaHei';
   						font-size: 14px;">审核意见说明</textarea>
		</div>
		
		<div id="midle3" style="width:100%;"margin-top: 5px;>
			<div style="width:100%;;margin-top: 5px;" id="btn">
				<!-- <div style="width:100px;float:right"><a href="javascript:tijiao()"><img style="float:right;margin-top: 9px;margin-right: 9px;" src='/audit/page/wangping/staticPage/img/submit.png'></img></a></div> -->
				<div style="width:100%"><a href="javascript:void(0)" onclick="save1()"><img style="float:right;margin-top: 9px;margin-right: 9px;" src='/audit/page/wangping/staticPage/img/baocun.png'/></a></div>
			</div>
		</div>
	</div>
	
		<!-- 材料查看校级数据窗体 -->
		<div id="downHide" style="display:none;Z-index:999" class="schoolData-div">
			<center>
				<table id="scoolData-table" width="96%" height="88%" align="center">
					<!-- <tr>
						<td>状态数据库名</td><input disabled="disabled" style="width:95%;height:80%;background-gcolor:#fff" id="tableName">
						<td id="tableName"></td>
					</tr>
					<tr>
						<td>时间类型</td>
						<td id="timeType"></td>
					</tr>
					<tr>
						<td>数据表来源</td>
						<td id="dataSource"></td>
					</tr>
					<tr>
						<td>数据表类型</td>
						<td id="dataType"></td>
					</tr>
					<tr>
						<td>表样</td>
						<td id="tableStyle"></td>
					</tr>
					<tr height="70px">
						<td>备注</td>
						<td id="remark"></td>
					</tr> -->
				</table>
			</center>
		</div>
</div>
</body>
</html>
