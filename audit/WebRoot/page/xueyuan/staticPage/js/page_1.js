$(function(){
	load();
	validateLogin();
});

function initYiJian(){
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/selectAssessment_allreport.do",
		async:false,
		type:'POST',
		dataType:'json',
		data:{
			"sp_id":specialtyId,
			"tYear":dateYear
		},
		success:function(data){
			$("#infoMessge").html(data);
		}
	});
}
var sContentPath = getContentPath();
var report_Id ;
var choose;
var sysid;
var dateYear;
var  request=GetRequest();
var  ispass=request.ispass;
var date = request.date;
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
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}

function load(){
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/findMessge.do",
		async:false,
		type:'POST',
		data:{
			"specialty_id":specialtyId
		},
		success:function(data){
			var datas = eval("("+data+")");
			var  zyqkgy =datas.zyqkgy;
			if(zyqkgy.length!=0){
				$(zyqkgy).each(function (k,v){
					var str="	<li style=\"height: 45px;list-style: none;\">"+
							"	<div style=\"line-height: 45px;\">"+
							"		<div style=\"border:1px solid #CCCCCC;float: right;width: 100%;height:100%\">"+
							"			<textarea type=\"text\" id="+v.id+" style=\"height: 100%;width: 100%;font-size: 16px;padding-left: 22px;outline:none;resize:none \" value="+v.remark+">"+v.remark+"</textarea>"
							"		</div>"+
							"	</div>"+
							"	</li>";
					$("#ul1").append(str);	
				})
			}else{
				$("#ZYQKGY").html("未查询到专业情况概要报告");
			}
			
			var  zyjsxq=datas.zyjsxq;
			if(zyjsxq.length!=0){
				$(zyjsxq).each(function(k,v){
					var str="	<li style=\"height: 45px;list-style: none;margin-bottom: 5px;\">"+
							"	<div style=\"line-height: 45px;\">"+
							"		<div style=\"width:140px;float:left;margin-left: 35px;\">"+
							"		    <img src=\"/audit/page/xueyuan/staticPage/img/file.png\" style=\"vertical-align: middle;\">"+
							"				<strong>"+v.system_NAME+"</strong> "+
							"			</img> "+
							"		</div>"+
							"		<div style=\"border:1px solid #CCCCCC;float: right;width: 80%;height:100%\">"+
							"			<textarea type=\"text\" id="+v.id+" style=\"height: 100%;width: 100%;font-size: 16px;padding-left: 22px;outline:none;resize:none \" value="+v.remark+">"+v.remark+"</textarea>"
							"		</div>"+
							"	</div>"+
							"	</li>";
					$("#ul2").append(str);		
				})
			}else{
				$("#ZYJSXQ").html("未查询到专业建设详情报告");
			}
			var zyjsxp=	datas.zyjsxp;
			if(zyjsxp.length!=0){
				$(zyjsxp).each(function(k,v){
					var str="	<li style=\"height: 45px;list-style: none;\">"+
							"	<div style=\"line-height: 45px;\">"+
							"		<div style=\"border:1px solid #CCCCCC;float: right;width: 100%;height:100%\">"+
							"			<textarea type=\"text\" id="+v.id+" style=\"height: 100%;width: 100%;font-size: 16px;padding-left: 22px;outline:none;resize:none\" value="+v.remark+">"+v.remark+"</textarea>"
							"		</div>"+
							"	</div>"+
							"	</li>";
					$("#ul3").append(str);		
				})
			}else{
				$("#ZYJSXP").html("未查询到专业建设存在的问题与改进方向报告");
			}
			$("#specialtys").html(datas.specialty_name);
		$("#infoMessge").html(datas.blackcontent);
		}
	});
	//初始化意见
	initYiJian();

	var str=""
	if(ispass==1){
		str+="<div style='width:150px;float:right'><a href=\"javascript:open()\"><img src='/audit/page/xueyuan/staticPage/img/nopass.png'/></a></div>"
		str+="<div style='width:150px;float:right'><a href=\"javascript:open()\"><img src='/audit/page/xueyuan/staticPage/img/pass.png' /></a></div>"
	}else{
		str+="<div style='width:150px;float:right'><a href='javascript:void(0)'><img src='/audit/page/xueyuan/staticPage/img/nopass.png' onclick='assess(0,"+request.zy_task_id+")'/></a></div>"
		str+="<div style='width:150px;float:right'><a href='javascript:void(0)'><img src='/audit/page/xueyuan/staticPage/img/pass.png' onclick='assess(1,"+request.zy_task_id+")' /></a></div>"
	}
	$("#btns").html(str);
}
function open(){
	var messg="<div style='height:115px;line-height:19px;padding:10px'>" +
				"该专业审核时间为：<br/><br/><p style='color:red'>"+date+"</p><br/><span stype='font-size:13px;color:a8a8a8'>目前已过审核时间!</span><span style='font-size:14px;color:3d8bd3'>请联系管理人员</span>" +
			  "</div>"
			lzrWindow.alert({
			type:1,
			messge:messg,
			clickClose:true,
			width:350,
			bottom:56,
			left:33,
			});
}

function assess(isPass,task_id){
	//修改意见
	var textareas= $("textarea");
	var textareasLength=textareas.length;
	$(textareas).each(function (k,v){
		//修改
		var id=$(v).attr("id");
		console.log((textareasLength-1)<k);
		console.log("infoMessge"==id);
		if("infoMessge"!=id){
			$.ajax({
				url: "/audit/AssessmentSpecialtyInfoXueYuanController/updateAs_assess_report_blackcontent.do",
				async:false,
				type:'POST',
				data:{
					"blackcontent":$(v).val(),
					"report_id":id
				},
				success:function(data){
				}
			});
		}
		
	})
	//保存审读意见
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var infoMessge =$("#infoMessge").val();
	//审核 是否成功
	var self_assess_zt;
	var audit_zt;
	if(isPass==1){
		self_assess_zt=3;
		audit_zt=1;
	}else{
		self_assess_zt=2;
		audit_zt=0;
	}
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/saveAssessment_allreport.do",
		async:false,
		type:'POST',
		data:{
			"specialty_id":specialtyId,
			"tYear":dateYear,
			"BLACKCONTENT":infoMessge,
			"task_id":task_id,
			"self_assess_zt":self_assess_zt,
			"audit_zt":audit_zt
		},
		success:function(data){
			lzrWindow.alert("审核成功!");
		}
	});
}



