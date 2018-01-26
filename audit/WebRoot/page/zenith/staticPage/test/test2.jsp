<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title></title>
     <link rel="stylesheet" href="/TQCC/layer/css/layui.css/layui.css"  media="all">
    <link rel="stylesheet" href="<%=basePath%>css/ASDSReport.css" type="text/css"></link>
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/zenith/staticPage/css/home_1.css"/>
	<script type="text/javascript" src="/audit/js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath %>page/zenith/staticPage/test/js/test2.js"></script>
	<link href="style/mycss.css" rel="stylesheet" type="text/css" />
	<link href="style/texts.css" rel="stylesheet" type="text/css" />
	<link href="style/btn.css" rel="stylesheet" type="text/css" />
	<script src="laydate/laydate.js"></script>
	<script   language="javascript"> 
	  
	</script> 

</head>
  
  <body>
  
  		<div style="width: 100%;height: 97%;overflow:hidden ">
  	<!--top  -->
		<div style="background-color:white;margin-top:1%;height: 44%;width:98.5%;margin-left:10px;">
			<hr border="1px solid #eee">
			<div style="width: 5%;border:0px solid #ccc;height: 8%;float:right;margin-top:2px;"><img style="" src="/audit/page/analysisReport/img/export.jpg" width="50px" height="25px"></div>
			<div style="border:0px solid red;margin-left:10px;margin-top:10px;font-weight:bold;width: 90%;"><span><strong>教师基本信息</strong></span></div>
			<form action="" method="post">
			<div style="border:1px solid  	#00CACA;margin-top:3px;width: %;height: 86%;font-size: 13px;font-weight:bold;align:center">
				<div style="width: 97%;height: 10%;border: 0px solid red;margin-top: 10px;margin-left: 2%;">
					<span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名*</span>&nbsp;<input id="name">
				</div>
				<div style="width: 97%;height: 10%;border: 0px solid red;margin-top: 10px;margin-left: 2%;">
					<span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别*</span>&nbsp;<input id="sex">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span>出生年月*</span>&nbsp;<input id="syear" class="laydate-icon" onclick="laydate()" style="width: 155px">
				</div>
				<div style="width: 97%;height: 10%;border:0px solid red;margin-top: 10px;margin-left: 2%;">
					<span>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称*</span>&nbsp;<input id="title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span>所在单位*</span>&nbsp;<input id="Company" style="width: 155px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<span>所在专业*</span>&nbsp;<input id="major">
				</div>
				<div style="width: 97%;height: 52%;border: 0px solid red;margin-top: 10px;margin-left: 2%;">
					<span style="float:left;">教育经历*</span>&nbsp;<input style="width: 78%;height: 60%;"><!-- <textarea rows="3" cols="5" style="width: 90%"></textarea> -->
					<div style="float:left;width: 88%;margin-top: 10px;margin-left: 40%">
						<button style="width: 70px;height: 27px;background-color: #00b595;border: 1px solid #00b595;color:white">保存</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button style="width: 70px;height: 27px;background-color: white;color:#000000;border: 1px solid #000000;">取消</button>
					</div>
				</div>
			</div>
			</form>
		</div>
		
		<!--bottom  -->
		<div style="background-color:white;margin-top:2%;height: 48.0%;width:98.5%;margin-left:10px;">
			<div>
				<hr border="1px solid #eee">
			<div style="width: 5%;border:0px solid #ccc;height: 8%;float:right;margin-top:2px;"><img style="" src="/audit/page/analysisReport/img/export.jpg" width="50px" height="25px"></div>
			<div style="border:0px solid red;margin-left:10px;margin-top:10px;font-weight:bold;width: 90%;"><span><strong>教师相关信息</strong></span></div>
			<hr style="height:1px;border:none;border-top:1px solid #555555;">
			<div style="border:0px solid  #00CACA;margin-top:3px;width: %;height: 86%;font-size: 13px;font-weight:bold;align:center">
				<!--第一个  -->
				<div style="width: 31%;height: 90%;border:1px solid #00b595;float:left;margin-left:1.0%;margin-top:5px;border-radius:3px 4px 5px 6px">
					<div style="width: 100%;height: 20%;background-color:#00b595;">
						<div style="width: 30%;border:0px solid red;margin-top:0%;margin-left:5%;color:white;float:left;margin-top:2%;"><span>教师的教师理念</span></div>
						<div style="border:0px solid red;margin-top:0%;margin-left:47%;color:white;float:left;margin-top:2%;"><span><a href="javascript:;"><img src="/TQCC/images/bj_icon.png" width="20px" height="15px"></a></span></div>
						<div style="color:white;float:right;margin-top:2%;margin-right:8px;font-size:15px"><span>编辑</span></div>
					</div>
					<div style="overflow:auto;width: 100%;height: 80%; ">
						<textarea style="width: 100%;height: 100%;" >&nbsp;&nbsp;2016年1月初，艾瑞森校友网公布了全国大学排名情况，被全国各大媒体报道，但一直到2月才公布大学排名的一级指标得分情况，根据2016年艾瑞森校友网公布的全国大学排名情况分析，我校排名较2015年上升50名，从466名上升到416名。就2016年的一级指标的名次来看，我校都有不同程度的提升，在一级指标名次中，我校科学研究指标上升了9名，人才培养指标上升了33名，社会影响提升较快，提升80名，综合名次高于浙江科技学院、嘉兴学院、丽水学院。本文先详述艾瑞森校友会大学排行榜的指标体系，然后分析我校排名情况。</textarea>
					</div>
				</div>
					<!--第二个  -->
				<div style="width: 31%;height: 90%;border:1px solid #ff9d00;float:left;margin-left:2.3%;margin-top:5px;border-radius:3px 4px 5px 6px">
					<div style="width: 100%;height: 20%;background-color:#ff9d00; ">
						<div style="width: 50%;border:0px solid red;margin-top:0%;margin-left:5%;color:white;float:left;margin-top:2%;font-size:15px;"><span>教师对教学的思考和总结</span></div>
						<div style="border:0px solid red;margin-top:0%;margin-left:27%;color:white;float:left;margin-top:2%;"><span><a href="javascript:;"><img src="/TQCC/images/bj_icon.png" width="20px" height="15px"></a></span></div>
						<div style="color:white;float:right;margin-top:2%;margin-right:8px;font-size:15px"><span>编辑</span></div>
					</div>
					<div style="overflow:auto;width: 100%;height: 80%; ">
						<textarea style="width: 100%;height: 100%;" >&nbsp;&nbsp;2016年1月初，艾瑞森校友网公布了全国大学排名情况，被全国各大媒体报道，但一直到2月才公布大学排名的一级指标得分情况，根据2016年艾瑞森校友网公布的全国大学排名情况分析，我校排名较2015年上升50名，从466名上升到416名。就2016年的一级指标的名次来看，我校都有不同程度的提升，在一级指标名次中，我校科学研究指标上升了9名，人才培养指标上升了33名，社会影响提升较快，提升80名，综合名次高于浙江科技学院、嘉兴学院、丽水学院。本文先详述艾瑞森校友会大学排行榜的指标体系，然后分析我校排名情况。</textarea>
					</div>
				</div>
					<!--第三个  -->
				<div style="width: 31%;height: 90%;border:1px solid #32d3d3;float:left;margin-left:2.4%;margin-top:5px;border-radius:3px 4px 5px 6px;">
					<div style="width: 100%;height: 20%;background-color:#32d3d3; ">
						<div style="width: 30%;border:0px solid red;margin-top:0%;margin-left:5%;color:white;float:left;margin-top:2%;font-size:15px;"><span>自我评价</span></div>
						<div style="border:0px solid red;margin-top:0%;margin-left:47%;color:white;float:left;margin-top:2%;"><span><a href="javascript:;"><img src="/TQCC/images/bj_icon.png" width="20px" height="15px"></a></span></div>
						<div style="color:white;float:right;margin-top:2%;margin-right:8px;font-size:15px"><span>编辑</span></div>
					</div>
					<div style="overflow:auto;width: 100%;height: 80%; ">
						<textarea style="width: 100%;height: 100%;" >&nbsp;&nbsp;2016年1月初，艾瑞森校友网公布了全国大学排名情况，被全国各大媒体报道，但一直到2月才公布大学排名的一级指标得分情况，根据2016年艾瑞森校友网公布的全国大学排名情况分析，我校排名较2015年上升50名，从466名上升到416名。就2016年的一级指标的名次来看，我校都有不同程度的提升，在一级指标名次中，我校科学研究指标上升了9名，人才培养指标上升了33名，社会影响提升较快，提升80名，综合名次高于浙江科技学院、嘉兴学院、丽水学院。本文先详述艾瑞森校友会大学排行榜的指标体系，然后分析我校排名情况。</textarea>
					</div>
				</div>
			</div>
			</div>
		</div>
		
		</div>
  </body>
</html>
