$(function(){
/*	load();
	getFiles();*/
	//显示数据
	ajaxFindContentInfo();
	validateLogin();
})		
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
var rectification_id;
var request =GetRequest();
var ispass = request.ispass;
var specialty_id= request.specialty_id;
var item = request.item;
var date = request.date;
date=decodeURI(date);
function ajaxFindContentInfo(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/findConentInfo.do",
		type:'POST',
		async:false,
		data:{
			'specialty_id':specialty_id,
			'item':item,
			'ASSESS_TYPE':2 //审核
		},
		success:function(data){
			var datas = eval("("+data+")");
			if(datas.length!=0){
				$(datas).each(function(k,v){
					$("#specialtys").html(v.specialty_NAME);
					rectification_id=v.rectification_id;
					var html=""
						html+="<div style=\"border: 1px solid rgba(113, 113, 113, 0.56);\">"
						html+="	<div style=\"background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;\">"
						html+="		<div style=\"margin: 0 auto;\">"+v.files_NAME+" " +
							  "     <div style='width: 338px;float: right;color: red;font-size: 14px;'>注：如有乱码，请联系自评人，新建文件，重新上传</div>" +
							  "</div>"
						html+="	</div>"	
						html+="	<div style=\"min-height:25%;max-height:43%;\">"
						if(v.struts==2){
							html+="请<a href='/audit/asAssessRetification/downRectification.do?id="+v.rectification_id+"'>点击下载</a>预览";
						}else{
							//如果是excl 
							if(v.contentMessge!=""&&v.contentMessge!=null){
								html+=v.contentMessge;
							}else{
								html+="<iframe width=100% height=100% frameborder=0 scrolling=auto src='"+v.filePath+"'></iframe>"
							}
						}
						html+="</div>"
						html+="<div style='height:10px'></div>"
						$("#content").append(html);
						$("#messge").html(v.blackcontent);
				})
			}else{
				$("#content").html("自评人未提交类型信息");
			}
		},error:function(){
			$("#content").html("系统错误");
		}
	});
	var str=""
	if(ispass==1){
			str+="<div style='width:150px;float:right'><a href=\"javascript:open();\"><img src='/audit/page/xueyuan/staticPage/img/nopass.png'/></a></div>"
			str+="<div style='width:150px;float:right'><a href=\"javascript:open();\"><img src='/audit/page/xueyuan/staticPage/img/pass.png'  /></a></div>"
	}else{
			str+="<div style='width:150px;float:right'><a href=\"javascript:void(0)\"><img src='/audit/page/xueyuan/staticPage/img/nopass.png' onclick='assess(0,"+specialty_id+","+rectification_id+")'/></a></div>"
			str+="<div style='width:150px;float:right'><a href=\"javascript:void(0)\"><img src='/audit/page/xueyuan/staticPage/img/pass.png' onclick='assess(1,"+specialty_id+","+rectification_id+")' /></a></div>"
	}
	$("#midle3").html(str);
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
/*审核*/
function assess(isPass,specialty_id,rectification_id){
	var self_assess_zt;
	var audit_zt;
	if(isPass==1){
		self_assess_zt=3;
		audit_zt=1;
	}else{
		self_assess_zt=2;
		audit_zt=0;
	}
	var blackcontent = $("#messge").val();
	if(blackcontent==""||blackcontent=="请输入你的审核意见"){
		 //if(rectification_id==null||rectification_id==undefined){
						//console.log("无文件内容， 无法保存意见");
			//}
		  if(confirm("您未给出审核意见,确认提交吗？")){
			  ajaxAssess(specialty_id,self_assess_zt,audit_zt,blackcontent,rectification_id,item);
		  }
	}else{
		ajaxAssess(specialty_id,self_assess_zt,audit_zt,blackcontent,rectification_id,item);
	}
	
}
function onDianJi(obj){
	if($(obj).val()=="请输入你的审核意见"){
		$(obj).val("");
	};
}
function ajaxAssess(specialty_id,self_assess_zt,audit_zt,blackcontent,rectification_id,item){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/updateAssessment_task.do",
		type:'POST',
		async:false,
		data:{
			'specialty_id':specialty_id,
			'self_assess_zt':self_assess_zt,
			'audit_zt':audit_zt,
			'blackcontent':blackcontent,
			'rectification_id':rectification_id,
			'item':item
		},
		success:function(data){
				lzrWindow.alert("审核成功!");
		},error:function(){
			alert("error");
		}
	})
}

function back(){
	parent.history.go(-1);
}

	
	