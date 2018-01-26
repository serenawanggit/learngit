$(function(){
	// 初始化
	divCss();
	getAllData();
	getUserName();
	ajaxFindContentInfo();
	validateLogin();
});
function divCss(){
	var iWidth = document.documentElement.clientWidth;
	var iHeight = document.documentElement.clientHeight;
	$("#div1").width(iWidth).height(iHeight);
}
/**
 * 拿到url上面的参数
 * @returns {Object}
 */
var request=GetRequest();
var t_task_id=request.t_task_id;
var dateYear=request.dateYear;
var specialtyId=request.specialtyId;
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
function getAllData(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getAllData.do",
		async:false,
		type:'POST',
		data:{
			"specialtyId":specialtyId
		},
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
			
			$("#tab div:eq(0)").html("Self-Report");
			$("#dataReport").html("Self-Report");
			if(datas[0].is_rz==2){
				$("#tab div:eq(1)").hide();
			}else if(datas[0].is_rz==1){
				$("#tab div:eq(1)").show();
				$("#tab div:eq(0)").html("整改报告");
				$("#dataReport").html("整改报告");
			}else if(datas[0].is_rz==3){
				$("#tab div:eq(1)").show();
				$("#tab div:eq(0)").hide();
			}
			}
		}
	});
}
function jump(num){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	var ispass=request.ispass;
	//跳专业质量报告
	if(num==1){
		location.href="/audit/page/wangping/staticPage/zhuanYeZhiLiangBaoGao.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id;
	}
	if(num==0){
		location.href="/audit/page/wangping/staticPage/home_1.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id;
	}
	//跳历史报告
	if(num==2){
		lzrWindow.alert("跳历史报告");
	}
}
var  rectification_id;
function ajaxFindContentInfo(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	var ispass=request.ispass;
	$.ajax({
		url :"/audit/AssessmentSpecialtyInfoXueYuanController/findAssessment_specialty_info_Name.do",
		data:{
			"specialty_id":specialtyId,
		},
		async:true,
		type:'POST',
		dataType:'json',
		success:function(datas){
			$("#name").html(datas);
		}
	});
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/findRectificationConentInfo.do",
		type:'POST',
		async:false,
		data:{
			'specialty_id':specialtyId,
			'dateYear':dateYear
		},
		success:function(data){
			$("#imglodding").fadeOut(1000);
			var datas = eval("("+data+")");
			if(datas.length==0){
				$("#content1").html("未查询出数据");
			}else{
				$(datas).each(function(k,v){
					rectification_id=v.rectification_id;
					var html=""
						html+="<div style=\"border: 1px solid rgba(113, 113, 113, 0.56);height: 436px;overflow: auto;\">"
						html+="	<div style=\"background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;\">"
						html+="		<div style=\"margin: 0 auto;\">"+v.files_NAME+"</div>"
						html+="	</div>"	
						html+="	<div style=\"height:400px\">"
						if(v.struts==2){
							html+="请<a href='/audit/asAssessRetification/downRectification.do?id="+v.rectification_id+"'>点击下载</a>预览";
						}else{
							//如果是excl 
							if(v.contentMessge!=""&&v.contentMessge!=null&&v.contentMessge!=undefined){
								html+=v.contentMessge;
							}else{
								html+="<iframe width=100% height=100% frameborder=0 scrolling=auto src='/audit/"+v.filePath+"'></iframe>"
							}
						}
						html+="</div>"
						$("#content1").html(html);
						$("#messge").html(v.contentblack);
				})
			}
		},error:function(jqXHR, textStatus, errorThrown){
			$("#content1").html("系统错误");
		}
	})
	var str="";
	//提交按钮
	str+="<div style=\"width:100px;float:right\"><a href=\"javascript:tijiao()\"><img src=\"img/submit.png\"></img></a></div>"
	//过期
	if(ispass==1){
		str+="<div style='width:95px;float:right'><a href=\"javascript:lzrWindow.alert('该专业已过网评时间！')\"><img src='/audit/page/xueyuan/staticPage/img/baocun.png'/></a></div>"
	}else{
		str+="<div style='width:95px;float:right'><a href='javascript:void(0)'><img src='/audit/page/xueyuan/staticPage/img/baocun.png' onclick='save("+specialtyId+","+dateYear+")' /></a></div>"
	}
	$("#midle3").html(str);
}
//导出
function  outfile(){
	if(rectification_id==0){
		lzrWindow.alert("无文件");
	}else{
		location.href="/audit/asAssessRetification/downRectification.do?id="+rectification_id
	};
}

//提交
function tijiao(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/updateAssessment_task_pass.do",
		type:'POST',
		async:false,
		data:{
			"task_id":t_task_id
		},
		success:function(data){
			lzrWindow.alert("提交成功！");
		}
	})
}



function  save(specialty_id,dateYear){
	var content= $("#messge").val();
	if(content=="请输入你的意见"||content==""){
		lzrWindow.alert("您还未给出意见");
	}else{
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoWangPingController/insertAssess_comment_rectification.do",
			type:'POST',
			async:false,
			data:{
				'SYSID':0,
				'ITEM':1,
				'SYEAR':dateYear,
				'COMMENT_TYPE':2,
				'COMMENT_SUGGESTIONS':content,
				'specialty_id':specialtyId,
			},
			success:function(data){
				lzrWindow.alert("保存成功！");
			},error:function(jqXHR, textStatus, errorThrown){
				lzrWindow.alert("保存失败");
			}
		})
	}
	
	
	
}
function black(){
	window.location.href="/audit/page/wangping/staticPage/Specialty.jsp";
}
function logout(){
	window.location.href="/logout";
}