$(function(){
/*	load();
	getFiles();*/
	//显示数据
	ajaxFindContentInfo();
	validateLogin();
	
})		
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

function ajaxFindContentInfo(){
	var request =GetRequest();
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/getAllReports.do",
		type:'POST',
		async:false,
		dataType:'json',
		data:{
			"specialty_id":request.specialtyId,
			"tYear":request.dateYear			
		},
		success:function(datas){
			if(datas==null||datas==undefined||datas==""){
				$("#textInfo").html("自评人未提交该类型信息");
			}else{
				if(datas!=null){
					$("#filename").html(datas.upload_files);
//					$("#infoMessge").html(datas.blackcontent);
					$.ajax({
						url: "/audit/AssessmentSpecialtyInfoXueYuanController/zhuanHuanHtml.do",
						type:'POST',
						async:false,
						data:{
							"addr":datas.upload_address,
							"fileName":datas.upload_files			
						},
						success:function(data){
							var datas1 = eval("("+data+")");
							if(datas1.struts==2){
								var str1="请<a href='/audit/asAssessReport/downAllReport.do?id="+datas.id+"'>点击下载</a>预览";
								$("#textInfo").html(str1);
							}else{
								if(datas1.contentMessge!=null){
									$("#textInfo").html(datas1.contentMessge);
								}else{
									if(datas1.filePath!=null){
										$("#info1").show();
										var str1="<iframe width=100% height=350 frameborder=0 scrolling=auto src='"+datas1.filePath+"'></iframe>"
										$("#textInfo").html(str1);
									}
								}
							}
						}
					});
				}
			}
		}
	});
	//初始化意见
	initYiJian();
	var request=GetRequest();
	var ispass=request.ispass;
	var str=""
	if(ispass==1){
			str+="<div style='width:150px;float:right'><a href=\"javascript:alert('该专业已过审核时间！')\"><img src='/audit/page/xueyuan/staticPage/img/nopass.png' /></a></div>"
			str+="<div style='width:150px;float:right'><a href=\"javascript:alert('该专业已过审核时间！')\"><img src='/audit/page/xueyuan/staticPage/img/pass.png' /></a></div>"
	}else{
			str+="<div style='width:150px;float:right'><a href='javascript:void(0)'><img src='/audit/page/xueyuan/staticPage/img/nopass.png' onclick='assess(0,"+request.zy_task_id+")'/></a></div>"
			str+="<div style='width:150px;float:right'><a href='javascript:void(0)'><img src='/audit/page/xueyuan/staticPage/img/pass.png' onclick='assess(1,"+request.zy_task_id+")' /></a></div>"
	}
	$("#btn").html(str);
}

function assess(isPass,task_id){
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
			alert("审核提交成功！");
		}
	});
}
function back(){
	parent.history.go(-1);
}
function onDianJi(obj){
	if($(obj).val()=="请输入你的审核意见"){
		$(obj).val("");
	};
}

	
	