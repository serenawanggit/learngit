var id;
var pgid;
$(function(){
	pgid = window.location.href.split("=")[1];
	loadtitle();
	
})

function gogo(){
	window.location.href="/audit/page/zenith/newMainKG.jsp";
}

function loadtitle(){	
	$.ajax({
		  type:"post",
		  url:"/audit/assessmentSpecialtyInfoController/loadtitle.do",
		  type:"post",
		  dataType:"json",
		  success:function (data){
			var obj=eval('('+data+')');
			var result=obj.message;
			var str="";
			//result.length
			for ( var i = 0; i < result.length; i++) {
				str+="<li><div id='xx"+result[i].id+"' onclick=\"clickTab("+result[i].id+",'"+result[i].TYPE_NAME+"',this)\" style='font-size:14px;cursor: pointer;'>"+result[i].TYPE_NAME+"</div></li>";
			}
			$("#tab").html(str);
			$("#xx"+pgid).click();
			$("#xx"+pgid).css("background-color","#46A3D1");
		/*	$("#tab").children("li").first().find("div").click();
			$("#tab").children("li").first().find("div").css("background-color","#46A3D1");*/
			id=pgid;
		  }
		});
	
}
function showpage(element,num){
	$(element).attr("class","li1 mySelect");
    $(element).siblings().attr("class","li1");
    var dxsz=  $(element).attr("type");
    if(num==1 && dxsz=="学院评估"){
    	 $("#tempIframe").attr("src","/audit/page/SpecialtyManage/SpecialtyInstall.jsp?id="+id);
    }
    if(num==2 && dxsz=="学院评估"){
   	 $("#tempIframe").attr("src","/audit/page/SpecialtyManage/installDataAndSpecialty.jsp?id="+id);
    }
    if(num==3 && dxsz=="学院评估"){
   	 $("#tempIframe").attr("src","/audit/page/SpecialtyManage/installUserForSperialty.jsp?id="+id);
    }	
    
    
    if(num==1 && dxsz=="课程评估"){
   	 $("#tempIframe").attr("src","/audit/page/SpecialtyManage/SpecialtyInstallK.jsp?id="+id);
   }
   if(num==2 && dxsz=="课程评估"){
  	 $("#tempIframe").attr("src","/audit/page/SpecialtyManage/installDataAndSpecialtyK.jsp?id="+id);
   }
   if(num==3 && dxsz=="课程评估"){
  	 $("#tempIframe").attr("src","/audit/page/SpecialtyManage/installUserForSperialtyK.jsp?id="+id);
   }
   
   if(num==1 && dxsz=="专业评估"){
  	 $("#tempIframe").attr("src","/audit/page/SpecialtyManage/SpecialtyInstallZ.jsp?id="+id);
  }
  if(num==2 && dxsz=="专业评估"){
 	 $("#tempIframe").attr("src","/audit/page/SpecialtyManage/installDataAndSpecialtyZ.jsp?id="+id);
  }
  if(num==3 && dxsz=="专业评估"){
 	 $("#tempIframe").attr("src","/audit/page/SpecialtyManage/installUserForSperialtyZ.jsp?id="+id);
  }
       
}
 
function tuichu(){
	window.location.href='/logout';
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

function clickTab(pgid,name,element){
	$("#tab").children("li").find("div").css("background-color","#034783");
	id=pgid;
	 $(element).css("background-color","#46A3D1");
   if(name=="学院评估"){
	   $("#dxsz").attr("type",name);
	   $("#pgsjsz").attr("type",name);
	   $("#pgrysz").attr("type",name);
	   $("#deepest1").text("学院设置");
	   
	   $("#tempIframe").attr("src","/audit/page/SpecialtyManage/SpecialtyInstall.jsp?id="+id);
   }
   
   if(name=="课程评估"){
	   $("#dxsz").attr("type",name);
	   $("#pgsjsz").attr("type",name);
	   $("#pgrysz").attr("type",name);
	   $("#deepest1").text("课程设置");
	  
	   $("#tempIframe").attr("src","/audit/page/SpecialtyManage/SpecialtyInstallK.jsp?id="+id);
   }
   
   if(name=="专业评估"){
	   $("#dxsz").attr("type",name);
	   $("#pgsjsz").attr("type",name);
	   $("#pgrysz").attr("type",name);
	   $("#deepest1").text("专业设置");
	   $("#tempIframe").attr("src","/audit/page/SpecialtyManage/SpecialtyInstallZ.jsp?id="+id);
   }
   $("#dxsz").click();
}