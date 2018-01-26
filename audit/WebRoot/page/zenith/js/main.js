	var winWidth;
	var winHeight;
	var len;
$(function(){
	if (window.innerWidth){
		winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		winWidth = document.body.clientWidth;
	}
	if (window.innerHeight){
		winHeight = window.innerHeight;
	}else if ((document.body) && (document.body.clientHeight)){
		winHeight = document.body.clientHeight;
	}
	//$("#navigation").hide();
	var urls = location.href;
	var ccid = urls.toString().split("?");
	if(ccid.length>1){
		getSkip(ccid[1].split("=")[1]);
	}else{
		getSkip(1);
	}
	//validateLogin();
	load();
})
var type;
var range;
var sContentPath = getContentPath();
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
}
function load(){
	/*$.ajax({
		url: sContentPath+"/asAssessReport/getUserInfo.do",
		dataType:'json',
		async:false,
		type:'POST',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=null&&datas!=undefined&&datas!=""){
				type = datas[0].assess_type;	
			}
		}
	})
	$.ajax({
		url: sContentPath+"/asAssessReport/getRolecategoryByUserId.do",
		dataType:'json',
		async:false,
		type:'POST',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=null&&datas!=undefined&&datas!=""){
			range = datas[0].show_range;
			}
		}
	})*/
}
 /*function getCookie(cookie_name){
	var allcookies = document.cookie;
	var cookie_pos = allcookies.indexOf(cookie_name); //索引的长度  
	// 如果找到了索引，就代表cookie存在，  
	// 反之，就说明不存在。  
	if (cookie_pos != -1){
		// 把cookie_pos放在值的开始，只要给值加1即可。  
		cookie_pos += cookie_name.length + 1; 
		var cookie_end = allcookies.indexOf(";", cookie_pos);
		if (cookie_end == -1)
		{
			cookie_end = allcookies.length;
		}
		var value = unescape(allcookies.substring(cookie_pos, cookie_end)); 
	}
	return value;
} */ 
var datas = [{id:1,name:"captain"},{id:2,name:"data"},{id:3,name:"analysis"},{id:4,name:"retrieval"},{id:5,name:"subject"},{id:6,name:"security"},{id:7,name:"schedule"},{id:8,name:"corseAssess"}];
function getSkip(a){
	len = datas.length;
	for ( var i = 0; i < datas.length; i++) {
		if(datas[i].id==a){
			$("#index1Body").attr("style","background:url(images/"+datas[i].name+".png) no-repeat;background-size:"+winWidth+"px "+winHeight+"px;height:84%");
			$("#navigation li").attr("style","height:72px");
			$("#navigation li:eq(0)").attr("style","height:72px;padding-top:0%");
			$("#navigation div").css("height","72px");
			//$("#navigation li a img").hide();
			$("#navigation li a span").attr("style","color:#FFF;margin-left:15px;");
			if(datas[i].id==1){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:48px;'><span style='color:#C22120'>领导</span>驾驶舱</td></tr>" +
						"<tr><td style='color:#FFFFFF;font-size:20px;'>决策&nbsp;&nbsp;集合&nbsp;&nbsp;关键指标&nbsp;&nbsp;洞察<td></tr><tr><td><a href='javaScript:void(0)' onclick='getContentTable(1)'><img src='images/captaincheck.png' /></a></td></tr></table>";
				$("#entry").html(shtml);
				showCheck(1);
				$("#navigation li a span:eq(0)").attr("style","margin-left:-68%;color:#FFF");
				$("#entry").css("padding-top","11%");
				$("#entry").css("margin-right","2%");
			}else if(datas[i].id==2){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:48px;'><span style='color:#ED0706'>数据</span>统计</td></tr>" +
				"<tr><td style='color:#FFFFFF;font-size:20px;'>复杂报表&nbsp;&nbsp;统计分析&nbsp;&nbsp;数据查询&nbsp;&nbsp;呈现最清晰的数据平台<td></tr><tr><td><a href='javaScript:void(0)' onclick='getContentTable(2)'><img src='images/datacheck.png' /></a></td></tr></table>"
				$("#entry").html(shtml);
				showCheck(2);
				$("#navigation li a span:eq(1)").attr("style","margin-left:-68%;color:#FFF");
				$("#entry").css("margin-right","26%");
				$("#entry").css("padding-top","12%");
			}else if(datas[i].id==3){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:48px;'><span style='color:#0537f2'>分析</span>报告</td></tr>" +
				"<tr><td style='color:#FFFFFF;font-size:20px;'>数据分析及展现&nbsp;&nbsp;数据应用&nbsp;&nbsp;图文报告<td></tr><tr><td><a href='javaScript:void(0)' onclick='getContentTable(3)'><img src='images/analysischeck.png' /></a></td></tr></table>"
				$("#entry").html(shtml);
				showCheck(3);
				$("#navigation li a span:eq(2)").attr("style","margin-left:-68%;color:#FFF");
				$("#entry").css("margin-right","1%");
				$("#entry").css("padding-top","11%");
			}else if(datas[i].id==4){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:48px;'><span style='color:#fdee02'>全文检索</td></tr>" +
				"<tr><td style='color:#000;font-size:20px;font-weight:bold'>信息采集&nbsp;&nbsp;实时检索&nbsp;&nbsp;自主查询&nbsp;&nbsp;丰富展示<td></tr><tr><td><a href='javaScript:void(0)' onclick='getContentTable(4)'><img src='images/retrievalCheck.png' /></a></td></tr></table>"
				$("#entry").html(shtml);
				showCheck(4);
				$("#navigation li a span:eq(3)").attr("style","margin-left:-68%;color:#FFF");
				$("#entry").css("margin-right","3%");
				$("#entry").css("padding-top","9%");
			}else if(datas[i].id==5){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:48px;'><span style='color:#78430B'>主题</span>分析</td></tr>" +
				"<tr><td style='color:#FFFFFF;font-size:20px;'>多维度分析&nbsp;&nbsp;直观&nbsp;&nbsp;清晰&nbsp;&nbsp;变化&nbsp;&nbsp;趋势<td></tr><tr><td><a href='javascript:void(0)' onclick='getContentTable(5)'><img src='images/jubjectCheck.png'/></a></td></tr></table>"
				$("#entry").html(shtml);
				showCheck(5);
				$("#navigation li a span:eq(4)").attr("style","margin-left:-68%;color:#FFF");
				$("#entry").css("margin-right","18%");
				$("#entry").css("padding-top","10%");
			}else if(datas[i].id==6){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:48px;'><span style='color:#053df2'>保障体系</span>文档</td></tr>" +
				"<tr><td style='color:#FFFFFF;font-size:20px;'>从人才培养输入到输出&nbsp;&nbsp;校院两级&nbsp;&nbsp;资源统筹<td></tr><tr><td><a href='javascript:void(0)' onclick='getContentTable(6)'><img src='images/securityCheck.png'  /></a></td></tr></table>"
				$("#entry").html(shtml);
				showCheck(6);
				$("#navigation li a span:eq(6)").attr("style","margin-left:-68%;color:#FFF");
				$("#entry").css("margin-right","5%");
				$("#entry").css("padding-top","10%");
			}else if(datas[i].id==7){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:48px;'><span style='color:#21e700'>工作</span>进度</td></tr>" +
				"<tr><td style='color:#FFFFFF;font-size:20px;'>数据采集&nbsp;&nbsp;评估任务&nbsp;&nbsp;项目跟踪<td></tr><tr><td><a href='javascript:void(0)' onclick='getContentTable(7)'><img src='images/scheduleCheck.png'  /></a></td></tr></table>"
				$("#entry").html(shtml);
				$("#navigation li a span:eq(7)").attr("style","margin-left:-68%;color:#FFF");
				$("#entry").css("margin-right","3%");
				$("#entry").css("padding-top","10%");
				showCheck(7);
				
			}else if(datas[i].id==8){
				$("#entry").html("");
				var shtml ="<table><tr><td></td><td><a href='javaScript:void(0)' onclick='getContentTable(8);'><img src='images/dataCircle.png'/></a></td><td></td><tr>" +
						"<tr><td ><a href='javaScript:void(0)' onclick='getContentTable(9);'><img src='images/reportCircle.png' style='margin-left:-80%'/></a></td><td></td><td><a href='javaScript:void(0)' onclick='getContentTable(10)'><img src='images/tianCircle.png' style='margin-left:38%'/></a></td><tr></table>";
				$("#entry").html(shtml);
				showCheck(8);
				$("#navigation li a span").attr("style","color:#000;margin-left:15px;");
				$("#navigation li a span:eq(5)").attr("style","margin-left:-68%;color:#FFF");
				$("#entry").css("margin-right","5%");
				$("#entry").css("padding-top","14%");
			}
		}
	}
}

function showCheck(id){
	$("#navigation li img").hide();
	if(id ==1){
		$("#navigation li img:eq(0)").show();
	}else if(id==2){
		$("#navigation li img:eq(1)").show();
	}else if(id==3){
		$("#navigation li img:eq(2)").show();
	}else if(id==4){
		$("#navigation li img:eq(3)").show();
	}else if(id==5){
		$("#navigation li img:eq(4)").show();
	}else if(id==6){
		$("#navigation li img:eq(6)").show();
	}else if(id==7){
		$("#navigation li img:eq(7)").show();
	}else if(id==8){
		$("#navigation li img:eq(5)").show();
	}
	
}


function getContentTable(id){
/*	var cookie = getCookie("uvocookie");
	var cookies = cookie.split("&");
	var userId = cookies[0]*/;
	if(id == 5){
		window.location.href = sContentPath+"/page/zenith/staticPage/Mains.jsp?cid=5"
	}else if(id==1){
		window.location.href = sContentPath+"/page/zenith/staticPage/Mains.jsp?cid=1"	
	}else if(id==2){
		window.location.href = sContentPath+"/page/zenith/staticPage/Mains.jsp?cid=2"	
	}else if(id==3){
		window.location.href = sContentPath+"/page/zenith/staticPage/Mains.jsp?cid=3"	
	}else if(id==4){
		window.location.href = sContentPath+"/page/zenith/staticPage/Mains.jsp?cid=4"	
	}else if(id==6){
		window.location.href = sContentPath+"/page/zenith/staticPage/Mains.jsp?cid=6"	
	}else if(id==7){
		window.location.href = sContentPath+"/page/zenith/staticPage/Mains.jsp?cid=7"	
	}else if(id==8){
		//window.location.href = sContentPath+"/page/zenith/staticPage/Mains.jsp?cid=7"	
		window.location.href = sContentPath+"/page/guanliyuan/staticPage/home_1.jsp?cid=8&zylxId=1"	
	}else if(id==9){
		window.location.href = sContentPath+"/page/guanliyuan/staticPage/home_1.jsp?cid=9&zylxId=5"	
	}else if(id==10){
		//window.location.href = sContentPath+"/page/zenith/staticPage/Mains.jsp?cid=7"	
		window.location.href = sContentPath+"/page/guanliyuan/staticPage/home_1.jsp?cid=10&zylxId=4"	
	}
}