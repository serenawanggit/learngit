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

	validateLogin();
	$("#navigation").hide();
	getSkip(5);
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
	$.ajax({
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
	})
}
 function getCookie(cookie_name){
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
}  
var datas = [{id:1,name:"captain"},{id:2,name:"data"},{id:3,name:"analysis"},{id:4,name:"report"},{id:5,name:"assessment"},{id:6,name:"more"}];
function getSkip(a){
	len = datas.length;
	for ( var i = 0; i < datas.length; i++) {
		if(datas[i].id==a){
			$("#index1Body").attr("style","background:url(images/"+datas[i].name+".png) no-repeat;background-size:"+winWidth+"px "+winHeight+"px;height:95%");
			$("#navigation li").attr("style","height:"+(parseInt(winHeight)-290)/len+"px");
			$("#navigation li:eq(0)").attr("style","height:"+(parseInt(winHeight)-290)/len+"px;padding-top:55%");
			$("#navigation div").css("height",(parseInt(winHeight)-290)/len+"px");
			$("#navigation li a img").hide();
			$("#navigation li a span").attr("style","color:#FFF");
			if(datas[i].id==1){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:60px;'><span style='color:#C22120'>领导</span>驾驶舱</td></tr>" +
						"<tr><td style='color:#FFFFFF;font-size:20px;'>决策&nbsp;集合&nbsp;关键指标&nbsp;洞察<td></tr><tr><td><a href='javaScript:void(0)' onclick='getContentTable(1)'><img src='images/captaincheck.png' /></a></td></tr></table>";
				$("#entry").html(shtml);
				showCheck(1);
				$("#navigation li a span:eq(0)").attr("style","margin-left:-68%");
				$("#entry").css("padding-top","13%");
				$("#entry").css("margin-right","-3%");
			}else if(datas[i].id==2){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:60px;'><span style='color:#ED0706'>数据</span>统计</td></tr>" +
				"<tr><td style='color:#FFFFFF;font-size:20px;'>复杂报表&nbsp;统计分析&nbsp;数据查询&nbsp;呈现最清晰的数据平台<td></tr><tr><td><a href='javaScript:void(0)' onclick='getContentTable(2)'><img src='images/datacheck.png' /></a></td></tr></table>"
				$("#entry").html(shtml);
				showCheck(2);
				$("#navigation li a span:eq(1)").attr("style","margin-left:-68%");
				$("#entry").css("margin-right","40%");
				$("#entry").css("padding-top","18%");
			}else if(datas[i].id==3){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:60px;'><span style='color:#78430B'>多维</span>分析</td></tr>" +
				"<tr><td style='color:#FFFFFF;font-size:20px;'>拖拽操作&nbsp;多角度分析<td></tr><tr><td><a href='javaScript:void(0)' onclick='getContentTable(3)'><img src='images/analysischeck.png' /></a></td></tr></table>"
				$("#entry").html(shtml);
				showCheck(3);
				$("#navigation li a span:eq(2)").attr("style","margin-left:-68%");
				$("#entry").css("margin-right","34%");
				$("#entry").css("padding-top","18%");
			}else if(datas[i].id==4){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:60px;'><span style='color:#FFFFFF'>质量</span>报告</td></tr>" +
				"<tr><td style='color:#FFFFFF;font-size:20px;'>直观&nbsp;清晰&nbsp;变化&nbsp;趋势<td></tr><tr><td><a href='javaScript:void(0)' onclick='getContentTable(4)'><img src='images/reportcheck.png' /></a></td></tr></table>"
				$("#entry").html(shtml);
				showCheck(4);
				$("#navigation li a span:eq(3)").attr("style","margin-left:-68%");
				$("#entry").css("margin-right","-4%");
				$("#entry").css("padding-top","13%");
				$("#entry").css("width","400");
			}else if(datas[i].id==5){
				$("#entry").html("");
				var shtml = "<table style='width:100%'><tr><td style='color:#FFFFFF;font-size:60px;'><span style='color:#EB4E4E'>专业评估</span>整改</td></tr>" +
				"<tr><td style='color:#FFFFFF;font-size:20px;'>专家网上评估&nbsp;进场考察&nbsp;整改落实&nbsp;进度报告<td></tr><tr><td><a href='javaScript:void(0)' onclick='getContentTable(5)'><img src='images/assessmentcheck.png' style='padding-left:10%' /></a></td></tr></table>"
				$("#entry").html(shtml);
				showCheck(5);
				$("#navigation li a span:eq(4)").attr("style","margin-left:-68%;;");
				$("#entry").css("margin-right","20%");
				$("#entry").css("padding-top","14%");
			}else if(datas[i].id==6){
				$("#entry").html("");
				var shtml ="<table><tr><td></td><td><a href='javaScript:void(0); onclick='getContentTable()''><img src='images/dataCircle.png'/></a></td><td></td><tr>" +
						"<tr><td ><a href='javaScript:void(0)' onclick='getContentTable();'><img src='images/reportCircle.png' style='margin-left:-80%'/></a></td><td></td><td><a href='javaScript:void(0)' onclick='getContentTable()'><img src='images/tianCircle.png' style='margin-left:38%'/></a></td><tr></table>";
				$("#entry").html(shtml);
				showCheck(6);
				$("#navigation li a span").attr("style","color:#000");
				$("#navigation li a span:eq(5)").attr("style","margin-left:-68%;color:#FFF");
				$("#entry").css("margin-right","10%");
				$("#entry").css("padding-top","12%");
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
		$("#navigation li img:eq(5)").show();
	}
	
}


function getContentTable(id){
	var cookie = getCookie("uvocookie");
	var cookies = cookie.split("&");
	var userId = cookies[0];
	if(id == 5){
		if(range == 9){
			window.location.href = sContentPath+"/page/SpecialtyManage/SpecialtyManageMain.jsp";
		}else{
			if(type == 1){
				window.location.href = sContentPath+"/page/zenith/staticPage/Specialty.jsp";
			}else{
				window.location.href = sContentPath+"/page/zenith/staticPage/Specialty.jsp"	
			}
		} 
		
	}else{
		window.location.href = sContentPath+"/page/zenith/staticPage/Specialty.jsp"	
	}
	
		
}