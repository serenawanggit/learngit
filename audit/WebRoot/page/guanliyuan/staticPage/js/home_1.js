$(function(){
	// 初始化
	divCss();
	arrowInit();
	getUserName();
	clickTab(0);
	//getAllData();
	validateLogin();
	if(zylxId==1){
		$("#titltes").text("学院质量报告");
	}else if(zylxId==4){
		$("#titltes").text("课程质量报告");
	}else{
		$("#titltes").text("专业质量报告");
	}
});

var request =GetRequest();
var zylxId=request.zylxId;
function getUserName(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getUserName.do",
		async:false,
		type:'POST',
		data:{},
		dataType:'json',
		success:function(data){
			$("#showUserName").html(data);
		}
	});
}
function GetRequest() { 
	var url = window.location.search; //获取url中"?"符后的字串 
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	} 
	return theRequest; 
}	
function divCss(){
	var iWidth = document.documentElement.clientWidth;
	var iHeight = document.documentElement.clientHeight;
	$("#div1").width(iWidth).height(iHeight);
	
}
var sContentPath = getContentPath();
var is_Engineering;
var dateReport;
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}

function getAllData(){
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	$.ajax({
		url: sContentPath+"/AssessmentSpecialtyInfoguanliyuanController/getAllData.do",
		async:false,
		type:'POST',
		data:{
			"specialtyId":specialtyId
		},
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
			is_Engineering = datas[0].is_engineering;
			dateReport = 	datas[0].self_assessment_date;
			$("#tab div:eq(0)").html("Self-Report");
			if(datas[0].is_rz==2){
				$("#tab div:eq(1)").hide();
				clickTab(0);
			}else if(datas[0].is_rz==1){
				$("#tab div:eq(1)").show();
				$("#tab div:eq(0)").html("整改报告");
				clickTab(0);
			}else if(datas[0].is_rz==3){
				$("#tab div:eq(1)").show();
				$("#tab div:eq(0)").hide();
				clickTab(1);
			}
			}
		}
	});
	
	
}
var index=-1;
var  oneId;
var  oneName;
function load(num){
	var parentData;
	$.ajax({
		url: sContentPath+"/asAssessReport/getSystemByType.do",
		data:{
			"id":is_Engineering
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				parentData = datas;
			}
			
		}
	});
	$.ajax({
		url: sContentPath+"/asAssessReport/getSystemSonByType.do",
		data:{
			"id":is_Engineering
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			array = [];
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				if(parentData!=null&&parentData!=""){
					for ( var i = 0; i < parentData.length; i++) {
						var obj =new Object();
						obj.id = parentData[i].id;
						obj.name = parentData[i].system_name;
						if(index==-1){
							oneId=obj.id;
							oneName=obj.name
							index=0;
						}
						var childrens = []
						for ( var j = 0; j < datas.length; j++) {
							if(datas[j].parent_id == parentData[i].id){
								childrens.push({id:datas[j].id,name:datas[j].system_name,url:"../page_"+4})
							}
						}
						if(childrens.length==0){
							obj.url="../page_"+4;
						}else{
							obj.children = childrens;	
						}
						array.push(obj);
					}
				}
			}
		
		}
	});
}
/**
 * 初始化各类东西
 */
function ASDSReportInit(num){
	$("#content").html("");
	//如果是现场考查
	if(num==2){
		var str="<li class='li1 arrow' ><a href=\"javascript:iframeTab('zhuanjiaxianchang')\">专家现场考查报告</a></li>"+
				"<li class='li1 arrow mySelect' ><a href=\"javascript:iframeTab('zhuanjiakaocha')\">专家考查报告</a></li>";
		$("#content").html(str);
	}
	// 菜单初始化
	$('#content').tendina({
        // This is a setup made only
        // to show which options you can use,
        // it doesn't actually make sense!
        animate: true,
        speed: 500,
        onHover: false,
        hoverDelay: 300
//        activeMenu: $('#deepest')
//        openCallback: function(clickedEl) {
//        },
//        closeCallback: function(clickedEl) {
//        }
  });
}

function menuStr(){
	//初始化菜单
	var str = "";
	$.each(array,function(i,obj){
		/*if(i==0){
			str += "<li class='li1'><a id='deepest' href='javascript:void(0);'";
		}else{
			str += "<li class='li1'><a href='javascript:void(0);'";
		}
		if(obj.url != null){
			str += "onclick=iframeTab('"+obj.url+"',"+obj.id+",'"+obj.name+"')";
		}
		str += " >"+obj.name+"</a>";*/
		// 二级菜单
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str += "<ul>";
			$.each(obj.children,function(j,obj2){
				if(obj2!=undefined){
					str += "<li class='li2'><a href='javascript:void(0);'";
					if(obj2.url!=null){
						
						str += " onclick=iframeTab('"+obj2.url+"',"+obj2.id+",'"+obj2.name+"')";
					}
				    str += ">"+ obj2.name +"</a>";
				    
					// 三级菜单
					if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
						str += "<ul>";
						$.each(obj2.children,function(k,obj3){
							if(obj3!=undefined){
								str += "<li class='li3'><a href='javascript:void(0);'";
								if(obj3.url != null){
									str += " onclick=iframeTab('"+obj3.url+"',"+obj3.id+",'"+obj3.name+"')";
								}
								str += ">"+ obj3.name +"</a>";
							}
						});
						str += "</ul>";
					}
				}f
			});
			str += "</ul>";
		}
		str += "</li>";
	});
	return str;
}
// 内嵌页面跳转
function iframeTab(url,id,name){
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var zg_task_id = $("#zg_task_id").val();
	var zy_task_id = $("#zy_task_id").val();
	if(name==undefined){
		name="";
	}
	if(id==undefined){
		id=0;
	}
	name=encodeURI(encodeURI(name));
	var iframe=$("#tempIframe");
	var path=$("#tempIframe").attr("src");
	var array=path.split("page");
	
	var specialtyId = $("#specialtyId").val();
	
	var ispass = $("#ispass").val();
	var path=array[0]+"page/guanliyuan/staticPage/ASDSReport3.0/"+url+".jsp?name='"+name+"'&specialtyId="+specialtyId+"&sysId="+id;
	if(url=="page_0"){
		if(name!="" && name!=undefined) path="/audit/page/guanliyuan/staticPage/mains_data.jsp?name='"+name+"'&specialty_id="+specialtyId+"&sysId="+id+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass+"&zylxId="+zylxId;
		else path="/audit/page/guanliyuan/staticPage/mains_data.jsp?specialty_id="+specialtyId+"&sysId="+id+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass+"&zylxId="+zylxId;
//		alert(path);
	}
	if(url=="page_1"||url=="../page_4"){
		path="/audit/page/guanliyuan/staticPage/page_4.jsp?name='"+name+"'&specialtyId="+specialtyId+"&sysId="+id+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass+"&dateYear="+dateYear;
	}
	if(url=="zhuanjiakaocha"){
		path="/audit/page/zenith/staticPage/captain.jsp?name='"+name+"'&specialtyId="+specialtyId+"&sysId="+id+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass+"&dateYear="+dateYear;
	}
	if(url=="zhuanjiaxianchang"){
		path="/audit/page/guanliyuan/staticPage/zhuanjiaxianchang.jsp?name='"+name+"'&specialtyId="+specialtyId+"&sysId="+id+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass+"&dateYear="+dateYear;
	}
	if(url=="zhenggaijihua"){
		path="/audit/page/guanliyuan/staticPage/zhenggaijihua.jsp?name='"+name+"'&specialtyId="+specialtyId+"&sysId="+id+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass+"&dateYear="+dateYear;
	}
	if(url=="jindugenzong"){
		path="/audit/page/guanliyuan/staticPage/jindugenzong.jsp?name='"+name+"'&specialtyId="+specialtyId+"&sysId="+id+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass+"&dateYear="+dateYear;
	}
	iframe.attr("src",path);
}

//菜单对象
var array=[];

function arrowInit(){
	$(".li1>a").addClass("arrow");
}
function clickTab(num){
//	$("tab div")
	$("#tab div:eq(0)").css("background-color","#034783");
	$("#tab div:eq(1)").css("background-color","#034783");
	$("#tab div:eq(2)").css("background-color","#034783");
	$("#tab div:eq(3)").css("background-color","#034783");
	$("#tab div:eq(4)").css("background-color","#034783");
	if(num==0){
		array=[{id:"1",name:"整改报告",
			   children:[],url:"page_0"
				}];
		$('#content').tendina('destroy');
		iframeTab('page_0');
		$("#dataReport").html("整改报告");
		$("#tab div:eq(0)").css("background-color","#46A3D1");
		ASDSReportInit();
		$('.li1').attr('class','lis mySelect');
	}else if(num==1){
		var iframe=$("#tempIframe");
//		load(num);
		$("#tab div:eq(1)").css("background-color","#46A3D1");
		$("#dataReport").html("专业质量报告");
		$('#content').tendina('destroy');
		ASDSReportInit();
		
//		$(".li1:eq(0)").attr("class","li1 mySelect");
		iframeTab("../page_4",oneId,oneName);
//		$(".li1:eq(1)").attr("class","li1 selected")
//		$(".li1>a:eq(1)").addClass("arrow_down");
//		$("ul").show();
	}else if(num==2){
		var iframe=$("#tempIframe");
//		load(num);
		$("#tab div:eq(2)").css("background-color","#46A3D1");
		$("#dataReport").html("现场考察");
		$('#content').tendina('destroy');
		ASDSReportInit(num);
		
//		$(".li1:eq(0)").attr("class","li1 mySelect");
		iframeTab("zhuanjiakaocha",oneId,oneName);
//		$(".li1:eq(2)").attr("class","li1 selected")
//		$(".li1>a:eq(2)").addClass("arrow_down");
//		$("ul").show();
	}else if(num==3){
		var iframe=$("#tempIframe");
		load(num);
		$("#tab div:eq(3)").css("background-color","#46A3D1");
		$("#dataReport").html("整改计划");
		$('#content').tendina('destroy');
		ASDSReportInit(num);
		
//		$(".li1:eq(0)").attr("class","li1 mySelect");
		iframeTab("zhenggaijihua",oneId,oneName);
//		$(".li1:eq(2)").attr("class","li1 selected")
//		$(".li1>a:eq(2)").addClass("arrow_down");
//		$("ul").show();
	}else if(num==4){
		var iframe=$("#tempIframe");
		load(num);
		$("#tab div:eq(4)").css("background-color","#46A3D1");
		$("#dataReport").html("进度跟踪");
		$('#content').tendina('destroy');
		ASDSReportInit(num);
//		
//		$(".li1:eq(0)").attr("class","li1 mySelect");
		iframeTab("jindugenzong",oneId,oneName);
//		$(".li1:eq(3)").attr("class","li1 selected")
//		$(".li1>a:eq(3)").addClass("arrow_down");
//		$("ul").show();
	}

	
}

function insertTaskInfo(item){
	
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	$.ajax({
		url :sContentPath+"/asAssessReport/insertTaskInfo.do",
		data:{
			"item":item,
			"specialtyId":specialtyId,
			"dateYear":dateYear
		},
		async:false,
		type:'POST',
		success:function(data){
			alert(data);
		}
		
	});
	
}


function black(){
	window.location.href="/audit/page/guanliyuan/staticPage/Specialty.jsp";
}
function logout(){
	window.location.href="/logout";
}

//领导驾驶舱页面点击领导按钮修改密码
function updatePassword(){
	var b = document.body;
	//设置边距为0，是为了全屏遮盖，否则上、右两边会留有边距，不能全屏遮盖
	b.style.margin=0;
	jQuery("body").append("<div id='mask'></div>");
	jQuery("#mask").addClass("mask").fadeIn("slow");
	jQuery("#pwdManageDiv").fadeIn("slow");
	//实现透明遮盖，如果不需要透明，不需要设置此属性
	var ie = !-[1,]; 
	var maskobj = document.getElementById("mask");
	if(ie){
		maskobj.style.filter="alpha(opacity=80)";
	}else{
		maskobj.style.opacity="0.8";
	}
	var sp_height = $(document).height()//获取当期窗口的高度  
	$(".sp_box").css({"opacity":"0.5","height":sp_height})//锁屏层高度采用获取窗口的高度，从而达到锁全屏的目的。  
	$(".sp_box").show()//显示锁屏层，此时锁屏层的宽在CSS里设置了100%  
}
jQuery(function (jQuery) {
	//关闭
	jQuery(".close_btn").hover(function () { jQuery(this).css({ color: 'black' }) }, function () { jQuery(this).css({ color: '#999' }) }).one('click', function () {
		jQuery("#pwdManageDiv").fadeOut("fast");
		jQuery("#mask").css({ display: 'none' });
		$(".sp_box").hide()//锁屏层消失 
	});
});

function closePswd(){
	jQuery("#pwdManageDiv").fadeOut("fast");
	jQuery("#mask").css({ display: 'none' });
	$(".sp_box").hide()//锁屏层消失 
}

function passwordWH(){
	var oldPassword = jQuery("#oldPassword").val();
	var newPassword = jQuery("#newPassword").val();
	var renewPassword = jQuery("#renewPassword").val();
	
	//验证密码
	if (oldPassword == null || isNull(oldPassword)) {
		alert("原密码不能为空");
		$("#oldPassword").focus();
		return;
	}
	//新密码
	var cat = /.{6,16}/g
	if (newPassword == null || isNull(newPassword)) {
		alert("新密码不能为空");
		$("#newPassword").focus();
		return;
	}
	if (!cat.test(newPassword)) {
		alert("新密码格式错误");
		$("#newPassword").focus();
		return;
	}
	//验证密码
	if (renewPassword != newPassword) {
		alert("两次密码输入不一致");
		$("#renewPassword").focus();
		return;
	}
	var url = "/CHART/home/passwordWH.htm?oldPassword="+oldPassword+"&newPassword="+newPassword;
    jQuery.ajax({
		type:'POST',
		dateType:'xml',
		url:url,
		async: false,
		success:function(data){
			if (data.saveStatic == null) {
				return;
			}
			var bl = data.saveStatic;
			if (bl) {
				alert("保存成功！系统即将退出！");
				closePswd();
				window.location.href="/";
			}else {
				alert("原密码错误，请重新输入！");
			}
		}
	});//ajax
	
}
function isNull( str ){ 
	if ( str == "" ) return true; 
	var regu = "^[ ]+$"; 
	var re = new RegExp(regu); 
	return re.test(str); 
} 

function nfocus() {
	jQuery('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
	jQuery('#newPassword').keyup();
}

function nkeyup() {
	var __th = $("#newPassword");
	
	if (!__th.val()) {
		Primary();
		return;
	}
	if (__th.val().length < 6) {
		Weak();
		return;
	}
	var _r = checkPassword(__th);
	if (_r < 1) {
		Primary();
		return;
	}

	if (_r > 0 && _r < 2) {
		Weak();
	} else if (_r >= 2 && _r < 4) {
		Medium();
	} else if (_r >= 4) {
		Tough();
	}

//	$('#pwd_tip').hide();
//	$('#pwd_err').hide();
}

function Primary() {
	$('#pwdLevel_1').attr('class', 'ywz_zhuce_huixian');
	$('#pwdLevel_2').attr('class', 'ywz_zhuce_huixian');
	$('#pwdLevel_3').attr('class', 'ywz_zhuce_huixian');
}

function Weak() {
	$('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
	$('#pwdLevel_2').attr('class', 'ywz_zhuce_huixian');
	$('#pwdLevel_3').attr('class', 'ywz_zhuce_huixian');
}

function Medium() {
	$('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
	$('#pwdLevel_2').attr('class', 'ywz_zhuce_hongxian2');
	$('#pwdLevel_3').attr('class', 'ywz_zhuce_huixian');
}

function Tough() {
	$('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
	$('#pwdLevel_2').attr('class', 'ywz_zhuce_hongxian2');
	$('#pwdLevel_3').attr('class', 'ywz_zhuce_hongxian3');
}
// 两次输入密码是否一致校验
function checkPassword(pwdinput) {
	var maths, smalls, bigs, corps, cat, num;
	var str = $("#newPassword").val()
	var len = str.length;

	var cat = /.{16}/g
	if (len == 0) return 1;
	if (len > 16) { $("#newPassword").val(str.match(cat)[0]); }
	cat = /.*[\u4e00-\u9fa5]+.*$/
	if (cat.test(str)) {
		return -1;
	}
	cat = /\d/;
	var maths = cat.test(str);
	cat = /[a-z]/;
	var smalls = cat.test(str);
	cat = /[A-Z]/;
	var bigs = cat.test(str);
	var corps = corpses(pwdinput);
	var num = maths + smalls + bigs + corps;

	if (len < 6) { return 1; }

	if (len >= 6 && len <= 8) {
		if (num == 1) return 1;
		if (num == 2 || num == 3) return 2;
		if (num == 4) return 3;
	}

	if (len > 8 && len <= 11) {
		if (num == 1) return 2;
		if (num == 2) return 3;
		if (num == 3) return 4;
		if (num == 4) return 5;
	}

	if (len > 11) {
		if (num == 1) return 3;
		if (num == 2) return 4;
		if (num > 2) return 5;
	}
}

function corpses(pwdinput) {
	var cat = /./g
	var str = $("#newPassword").val();
	var sz = str.match(cat)
	for (var i = 0; i < sz.length; i++) {
		cat = /\d/;
		maths_01 = cat.test(sz[i]);
		cat = /[a-z]/;
		smalls_01 = cat.test(sz[i]);
		cat = /[A-Z]/;
		bigs_01 = cat.test(sz[i]);
		if (!maths_01 && !smalls_01 && !bigs_01) { return true; }
	}
	return false;
}

function pop(){
	var b = document.body;
					
	//设置边距为0，是为了全屏遮盖，否则上、右两边会留有边距，不能全屏遮盖
	b.style.margin=0;
	$("md").style.display="block";
	$("md").style.height=getScrollHeight() +"px";
	
	var ie = !-[1,]; 
	//实现透明遮盖，如果不需要透明，不需要设置此属性
	if(ie){
		$("md").style.filter="alpha(opacity=80)";
	}else{
		$("md").style.opacity="0.8";
	}

}

