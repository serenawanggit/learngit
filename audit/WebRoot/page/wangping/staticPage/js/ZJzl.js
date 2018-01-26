$(function(){
	// 初始化
	//divCss();
	arrowInit();
	getUserName();
	getAllData();
	ASDSReportInit();
	//初始化总意见
	getWangPingYijianZ();
	//专业名称
	initSpecialtyName();
	initOrganizationName();
	$(".li1:eq(1)").addClass("li1 selected");
	
	$(".li1>a:eq(1)").addClass("arrow_down");
	//默认展开列表
	$(".li1>ul:eq(0)").css("display","block");
	//跳转 sid
	validateLogin();
});
$(document).on('click',function(e){
	var x = $(e.target);
	if($("#contentAll2").find(x).length == 0 && !x.is($("#url"))){
		$("#contentAll2").hide(200);
	}
});
function jump(sid){
	document.getElementById(sid).scrollIntoView();
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
var request=GetRequest();
var dateYear=request.dateYear;
var specialtyId=request.specialtyId;
var ispass=request.ispass;
var sid=request.sid;
//初始化专业名字
function initSpecialtyName(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
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
}
//初始化学院名字
function  initOrganizationName(){
	var request=GetRequest();
	var specialtyId=request.specialtyId;
	$.ajax({
		url :"/audit/AssessmentSpecialtyInfoWangPingController/selectOrganizationName.do",
		data:{
			"sp_id":specialtyId
		},
		async:false,
		type:'POST',
		success:function(datas){
			$("#organizationName").val(datas);
		}
	});
	
}
//提交
function tijiao(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	var ispass=request.ispass;
	var t_task_id=request.t_task_id;
	if(ispass==1){
		lzrWindow.alert("该专业已过网评时间！");
	}else{
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
}
//初始化总意见
function  getWangPingYijianZ(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	var ispass=request.ispass;
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getWangPingZongComment.do",
		async:false,
		type:'POST',
		data:{
			"specialty_id":specialtyId
		},
		dataType:'json',
		success:function(data){
			$("#zYJ").html(data.comment_suggestions);
		}
	});
}

function jump(num){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	var ispass=request.ispass;
	var t_task_id=request.t_task_id;
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
/**
 * 拿到url上面的参数
 * @returns {Object}
 */

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
			is_Engineering = datas[0].is_engineering;
			$("#tab div:eq(0)").html("Self-Report");
			if(datas[0].is_rz==2){
				$("#tab div:eq(1)").hide();
			}else if(datas[0].is_rz==1){
				$("#tab div:eq(1)").show();
				$("#tab div:eq(0)").html("专业评估整改落实情况");
			}else if(datas[0].is_rz==3){
				$("#tab div:eq(1)").show();
				$("#tab div:eq(0)").hide();
			}
			}
		}
	});
}
function load(){
	var parentData;
	$.ajax({
		url: "/audit/asAssessReport/getSystemByType.do",
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
		url: "/audit/asAssessReport/getSystemSonByType.do",
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
						var childrens = []
						for ( var j = 0; j < datas.length; j++) {
							if(datas[j].parent_id == parentData[i].id){
								childrens.push({id:datas[j].id,name:datas[j].system_name,url:datas[j].id+"x"})
							}
						}
						if(childrens.length==0){
							obj.url=parentData[i].id;
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
function ASDSReportInit(){
//	load();
	$("#content").html(menuStr());
	// 菜单初始化
	$('#content').tendina({
        animate: true,
        speed: 500,
        onHover: false,
        hoverDelay: 300
	});
	
}

function menuStr(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	//初始化菜单
	var str = "";
	$.each(array,function(i,obj){
		//console.log(obj.id);
		if(i==0){
			str += "<li class='li1 arrow '><a id='deepest' href='javascript:showlist("+obj.id+")'" ;
		}else{
			str += "<li class='li1 '><a href='javascript:showlist("+obj.id+")' ";
		}
		if(obj.url != null){
			ajaxFindData(specialtyId,obj,dateYear);
		}
		str += " >"+obj.name+"</a>";
		// 二级菜单
	
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str += "<ul>";
			$.each(obj.children,function(j,obj2){
				if(obj2!=undefined){
					str += "<li class='li2 arrow' ><a href='javascript:showlist("+obj2.id+")' ";
					if(obj2.url!=null){
						ajaxFindData(specialtyId,obj2,dateYear);
					}
				    str += ">"+ obj2.name +"</a>";
					// 三级菜单
					if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
						str += "<ul>";
						$.each(obj2.children,function(k,obj3){
							if(obj3!=undefined){
								str += "<li class='li3 arrow'><a href='javascript:showlist("+obj3.id+")' ";
								if(obj3.url != null){
									ajaxFindData(specialtyId,obj3,dateYear);
								}
								str += ">"+ obj3.name +"</a>";
							}
						});
						str += "</ul>";
					}
				}
			});
			str += "</ul>";
		}
		str += "</li>";
	});
	$("#backbtn").hide();
	return str;
}

//菜单对象
var array=[];

function arrowInit(){
	$(".li1>a").addClass("arrow");
}
function clickTab(num){
	//跳整改
	if(num==0){
		location.href="/audit/page/wangping/staticPage/home_1.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass;
	}
	if(num==2){
		lzrWindow.alert("跳历史报告");
	}
	
}
var specialtyId = $("#specialtyId").val();
var dateYear = $("#dateYear").val();
function insertTaskInfo(item){
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
			lzrWindow.alert(data);
		}
		
	});
	
}
function ajaxFindData(specialty_id,obj,rYear){
	$.ajax({
		url :"/audit/AssessmentSpecialtyInfoWangPingController/findReport.do",
		data:{
			"specialty_id":specialty_id,
			"sysId":obj.id,
			"rYear":rYear
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(datas){
			alert(datas.enter_CONTENT);
			var html="";
				html+="<div id='"+obj.id+"' style='width:95%;float:left;margin-left:15px;margin-top:8px'>"
				//内容左边的
				html+="<div style='float:left;    width: 100%;'>"
				html+="<div style='background:#DCDBDB;font-weight: bold;height:34px;text-align: center;line-height: 31px;'>"+obj.name+"</div>"
					html+="<div style='border: 1px solid rgba(113, 113, 113, 0.56);margin-top:5px;'>"
					if(datas.enter_CONTENT==""&&datas.struts==2){
						html+="<div id='info'>注：如有乱码，请联系自评人，新建文件，重新上传</div>"
					}else{
						html+="<div id='info'></div>"
					}
					html+="  <div id='"+obj.id+"C' style='overflow :auto;overflow-y :auto;height:120px' name='Box'>" 
					//如果解析不了
					if(datas.struts==2){
						html+="请<a href='/audit/asAssessReport/downReport.do?id="+datas.report_id+"'>点击下载</a>预览";
					}else{
						if(datas.enter_CONTENT!=null&&datas.enter_CONTENT!=""){
							html+=datas.enter_CONTENT;
						}else if(datas.filePath!=null){
							html+="<iframe width=99% height=350 frameborder=0 scrolling=auto src='/audit/"+datas.filePath+"'></iframe>"
						}else {
							html+="自评人未提交信息";
						}
					}
					html+="</div>"
					html+="</div>"
					//ajax查询支撑材料
					html+="<div style='border: 1px solid rgba(113, 113, 113, 0.56);margin-top:5px'>"
					html+="		<div style='background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;'>"
					html+="  		<div style='float:left;text-align:center'>支撑材料</div>"
					html+="		</div>"
					html+="		<div id=\"textInfo\" style=\"overflow :auto;overflow-y :auto;height:120px;\">"
					$.ajax({
								url :"/audit/AssessmentSpecialtyInfoWangPingController/findAs_assess_support.do",
								data:{
									"Sysid":obj.id,
									"Ryear":rYear,
									"Specialty_id":specialty_id,
									//"Report_id":datas.report_id,
								},
								async:false,
								type:'POST',
								dataType:'json',
								success:function(data){
									var length=$(data).length;
									if(length>0){
										$(data).each(function(k,v){
											html+="<div style=\"padding: 10px;\"><span style='line-height:27px'>"+(k+1)+"."+v.support_NAME+"</span>"
											+"<a href=\"javascript:preLook('"+v.id+"')\" style='float:right;'><img src='/audit/page/wangping/staticPage/img/pre.png' /></a>"
											+"<a href='/audit/asAssessReport/downSupport.do?id="+v.id+"' style='float:right;margin-right:10px'><img src='/audit/page/wangping/staticPage/img/download_2.png' /></a></div>"
										})
									}else{
										html+="自评人未提交该信息";
									};
								},error:function(jqXHR, textStatus, errorThrown){
									lzrWindow.alert("解析错误！");
								}
							})
					html+="      </div>"
					html+="</div>"
				html+="</div>"
				//左边结束	
//				//右边的
//					//网评意见	
//					html+="	        <div style='width:22%;float:right;'>"
//					html+="				<div style=\"background: #DCDBDB;margin: 0 auto;margin-bottom:4px;line-height: 34px;text-align:center\">专家建议</div>"
//								
//					if(datas.blackcontent!=null&&datas.blackcontent!=undefined){
//								html+=" 		<textarea  id=\""+obj.id+"\"  class='messge' style=\"width: 100%; height: 278px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid rgba(113, 113, 113, 0.56);font-family: 'Microsoft YaHei';font-size: 16px;\">"+datas.blackcontent+"</textarea>"	
//					}else{
//								html+=" 		<textarea  id=\""+obj.id+"\"  class='messge' style=\"width: 100%; height: 278px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid rgba(113, 113, 113, 0.56);font-family: 'Microsoft YaHei';font-size: 16px;\"></textarea>"
//							}
//					html+="			</div>"
//					//右边结束			
			html+="</div>"
			
			html+="</div>"
				
			//打分+评论	
			html+="<div style='float:right;width:190px;margin-top:8px;margin-right: 10px;'>" 
			
			//打分
			html+="	<div style=\"background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;display:none\">"
			html+="			<div style=\"width:15% ;margin: 0 auto;\">打分</div>"
			html+="	</div>"
				
				
				
				
//				//网评意见	
//				html+="	        <div style='border:1px solid red'>"
//				html+="				<div style=\"background: #DCDBDB;margin: 0 auto;margin-bottom:4px;line-height: 34px;text-align:center\">专家建议</div>"
//					
//				if(datas.blackcontent!=null&&datas.blackcontent!=undefined){
//					html+=" 		<textarea  id=\""+obj.id+"\"  class='messge' style=\"width: 100%; height: 278px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid rgba(113, 113, 113, 0.56);font-family: 'Microsoft YaHei';font-size: 16px;\">"+datas.blackcontent+"</textarea>"	
//				}else{
//					html+=" 		<textarea  id=\""+obj.id+"\"  class='messge' style=\"width: 100%; height: 278px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid rgba(113, 113, 113, 0.56);font-family: 'Microsoft YaHei';font-size: 16px;\"></textarea>"
//				}
//				html+="			</div>"
				
			html+="</div>"	
				
			$("#imglodding").remove();
			$("#contentAll_one").append(html);
			//查询是否有
			isShowAllFile();	
		}
	});
	
}
function outfile(){
	//初始化表单
	var  spName=$("#name").html();
	//初始专业名字
	$("#speName").val(spName);
//	var  textarea=$("textarea");
//	console.log(textarea);
	var addBoxs=$("div[name='Box']");
	console.log(addBoxs.length);
	//清除以前的
	var adds=$("div[name='add']");
	$(adds).each(function(){
		$(this).remove();
	})
	//初始化模板
		$(addBoxs).each(function (k,v){
				var  msg=$(v).html();
				var id=$(v).attr("id");
				var id2=parseInt(id);
				var str="<div name='add'>";
				 str +="<div  class=MsoNormal align=left style='margin-top:7.8pt;text-align:left;line-height:150%'>" +
			 		"<b style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:\"Times New Roman\"'>" +
			 		""+msg+"</span></b><b style='mso-bidi-font-weight:normal'>"+
			 		"<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:黑体'><o:p></o:p></span>"+
					"</b></div>";
				 console.log(is_Engineering);
				console.log($("#organizationName").val());
				console.log($("#name").html());
				 //非工科
				if(is_Engineering==1){
					$("#"+id2+"B").after(str);
					$("#Bxueyuan").html($("#organizationName").val());
					$("#Bzhuanye").html($("#name").html());
				} else{
					//工科
					$("#"+id2+"A").after(str);
					$("#Axueyuan").html($("#organizationName").val());
					$("#Azhuanye").html($("#name").html());
				}
		})
//	//2工科
	if(is_Engineering==2){
		//模板
		var GkModle=$("#GkModle").html();
		$("#contentMold").val(GkModle);
		$('#myForm').submit();
		//lzrWindow.alert("工科导出完毕");
	}
	//1非工科
	if(is_Engineering==1){
		//模板
		var FgkModle=$("#FgkModle").html();
		console.log(FgkModle);
		$("#contentMold").val(FgkModle);
		$('#myForm').submit();
		//lzrWindow.alert("非工科导出完毕");
	}
}
function closeWindow(){
	$("#contentAll2").fadeOut(1000);
}
var support_id;
function download(){
	location.href="/audit/asAssessReport/downSupport.do?id="+support_id
}
function preLook(id){
	$("#title").html("");
	$("#contentThing").html("");
	$("#contentAll2").fadeIn(1000);
	//提供下载;
	support_id = id;
	$.ajax({
		url :"/audit/AssessmentSpecialtyInfoWangPingController/getAs_assess_supportById.do",
		data:{
			"supportId":id,
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(datas){
			var info=datas.coninfo;
			$("#title").html(datas.support_NAME);
			$("#down1").show();//显示下载
			//如果解析不了
			if(info.struts==2){
				lzrWindow.alert("该文件格式不支持预览,你可以进行下载");
			}else{
				if(info.contentMessge!=null){
					$("#contentThing").html("<div>"+info.contentMessge+"</div>");
				}else if(info.filePath!=null){
					$("#contentThing").html("<iframe  width=100% height=92% frameborder=0 scrolling=auto src=\"/audit/"+info.filePath+"\"></iframe>");
				}else{
					lzrWindow.alert("解析失败,你可以进行下载");
				}
			}
		},error:function(jqXHR, textStatus, errorThrown){
			lzrWindow.alert("预览失败,你可以进行下载");
		}
	});
	
}
function save1(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	var ispass=request.ispass;
	if(ispass==1){
		lzrWindow.alert("该专业已过网评时间！");
	}else{
		//保存总意见
		var content= $("#zYJ").val();
		if(content=="请输入你的意见"||content==""){
			lzrWindow.alert("您还未给出总意见");
		}else{
				$.ajax({
					url: "/audit/AssessmentSpecialtyInfoWangPingController/insertAssess_comment_rectification.do",
					type:'POST',
					async:false,
					data:{
						'SYSID':0,
						'COMMENT_CONTENT':"",
						'ITEM':2,
						'SYEAR':dateYear,
						'COMMENT_TYPE':2,
						'COMMENT_SUGGESTIONS':content,
						'specialty_id':specialtyId,
					},
					success:function(data){
						var messges=$(".messge");
						$(messges).each(function(k,v){
							var va=$(v).val();
							var sysid=$(v).attr("id");
							if(va!=null&&va!=""){
								$.ajax({
									url: "/audit/AssessmentSpecialtyInfoWangPingController/insertAssess_comment_rectification.do",
									type:'POST',
									async:false,
									data:{
										'SYSID':sysid,
										'COMMENT_CONTENT':va,
										'ITEM':2,
										'SYEAR':dateYear,
										'COMMENT_TYPE':1,
										'COMMENT_SUGGESTIONS':"",
										'specialty_id':specialtyId,
									},
									success:function(data){
		//								console.log("不错");
									},error:function(jqXHR, textStatus, errorThrown){
										lzrWindow.alert("保存失败");
									}
								});
							}
						});
						lzrWindow.alert("保存成功！");
					},error:function(jqXHR, textStatus, errorThrown){
						lzrWindow.alert("保存失败");
					}
				});
			
		}
	}
}
var  flag4=true
function outALL(){
	if(true){
		flag4=false;
		//初始化表单
		var  spName=$("#name").html();
		//初始专业名字
		$("#speName").val(spName);
		
		var str="";
		//获得报告内容
		var contentBox;
		var iframe=$("#iframe").contents().find("body").html();
		if(iframe!=undefined){
			contentBox=iframe;
		}else{
			contentBox=$("#contentBox").html();
		}
		 str +="<div>"+contentBox+"</div>"
		//获得总意见
		var html=$("#zYJ").val();
		 str +="<div style=''mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;color:red;mso-hansi-font-family:\"Times New Roman\"''>专家意见</div>";
		 str +="<div class=MsoNormal align=left style='margin-top:7.8pt;text-align:left;line-height:150%'>" +
		 		"<b style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:\"Times New Roman\"'>" +
		 		""+html+"</span></b><b style='mso-bidi-font-weight:normal'>"+
		 		"<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:黑体'><o:p></o:p></span>"+
				"</b></div></div>";
		 
		 $("#OllReport").after(str);
		//模板
		var GkModle=$("#allModel").html();
			$("#contentMold").val(GkModle);
			$('#myForm').submit();
	}
}
function downAll(){
	if(report_Id1==0){
		return ;
	}
	location.href="/audit/asAssessReport/downAllReport.do?id="+report_Id1;
}
var one=true;
var report_Id1=0;
//查询用户是否上传了总文件
function isShowAllFile(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getAllReports.do",
		type:'POST',
		async:false,
		data:{
			"specialty_id":specialtyId,
			"tYear":dateYear			
		},
		success:function(data){
			var datas = eval("("+data+")");
			var length=datas.length;
			//有文件
			if(length!=0){
				//显示全文预览按钮
				$("#showAllFile").show();
			}else{
				$("#showAllFile").hide();
			}
		}
	});
}
function showAll(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getAllReports.do",
		type:'POST',
		async:false,
		data:{
			"specialty_id":specialtyId,
			"tYear":dateYear			
		},
		success:function(data){
			var datas = eval("("+data+")");
			var length=datas.length;
			if(length!=0){
				$(datas).each(function (k,v){
					$.ajax({
							url: "/audit/AssessmentSpecialtyInfoXueYuanController/zhuanHuanHtml.do",
							type:'POST',
							async:false,
							data:{
								"addr":v.upload_address,
								"fileName":v.upload_files			
							},
							success:function(data){
								report_Id1=v.id;
								var datas1 = eval("("+data+")");
								var html="";
								html +="<div style=\"border: 1px solid rgba(113, 113, 113, 0.56);margin:13px;\">"
								html +="	<div style=\"background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;\">"
								html +="		<div style=\"margin: 0 auto;\">"+v.upload_files+"</div>"
								html +="	</div>"
						/*		html +="			注：如有乱码，请联系自评人，新建文件，重新上传"*/
								html +="	<div>"
								if(datas1.struts==2){
									html +="请<a href='/audit/asAssessReport/downAllReport.do?id="+v.id+"'>点击下载</a>预览";
								}else{
									if(datas1.contentMessge!=null){
										html +=datas1.contentMessge;
									}else{
										html +="<iframe id='iframe' width=100% height=350 frameborder=0 scrolling=auto src='/audit/"+datas1.filePath+"'></iframe>"
									}
								}
								html +="	</div>"
								html +="</div>	"	
								html +="<div style='height:10px'></div>"
								$("#contentAll_two").html(html);	
								$("#contentAll_one").html("");
								$("#outBtn").attr("href","javascript:downAll()")
							}
						});
				})
			}else{
				if(one){
					one=false;
					$("#contentAll").html("<div style='text-align:center'>自评人未上传总的预览文件</div>");	
				}
			}
			//全文预览按钮隐藏
			$("#showAllFile").hide();
			$("#backbtn").show();
		
		}
	});
}
function showlist(sid){
	$("#outBtn").show();
	$("#contentAll").show();
	$("#contentAll3").hide();
	document.getElementById(sid).scrollIntoView();
	
}
function black(){
	window.location.href="/audit/page/wangping/staticPage/Specialty.jsp";
}
function logout(){
	window.location.href="/logout";
}