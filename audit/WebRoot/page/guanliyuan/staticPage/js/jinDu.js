$(function(){
	//查询默认专业列表
	initZyName();
	//查询默认学院列表
	initXueYuan();
	//初始化列表数据
	init();
	validateLogin();
})		
function initZyName(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/selectZyName.do",
		type:'POST',
		async:false,
		data:{},
		dataType:'json',
		success:function(data){
			var str="";
			$(data).each(function(k,v){
				str+="<li style=\"padding:5px\" onclick=\"choose(this)\">"+v+"</li>"
			})
			$("#ul2").html(str);
		}
	})
}
function initXueYuan(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoGuanliyuanController/selectOrganization.do",
		type:'POST',
		async:false,
		data:{},
		dataType:'json',
		success:function(data){
			var str="";
			$(data).each(function(k,v){
				str+="<li style=\"padding:5px\" onclick=\"choose(this)\">"+v+"</li>"
			})
			$("#ul1").html(str);
		}
	})
}

//给body 事件 点击其他  让隐藏
$(document).on('click',function(e){
		var x = $(e.target);
		if($("#2").find(x).length == 0 && !x.is($("#url"))){
			$("#2").hide(200);
		}
		if($("#2").find(x).length == 0 && !x.is($("#url"))){
			$("#2").hide(200);
		}
	});
//下拉切换
function xiala(id){	
	$("#"+id).toggle(200);
}
function choose(obj){
	var val=$(obj).html();
	$(obj).parent().parent().parent().find(":input").eq(0).val(val);
	$(obj).parent().parent().toggle();
}

$(document).on('click',function(e){
	var x = $(e.target);
	if($("#contentAll2").find(x).length == 0 && !x.is($("#url"))){
		$("#contentAll2").hide(200);
	}
});
//查询列表数据
function init(){
	$("tbody").html("");
	$.ajax({
		   type: "POST",
		   url: "/audit/AssessmentSpecialtyInfoGuanliyuanController/selectJdlt.do",
		   data: {
			   "oName":$("#oName").val(),
			   "sp_name":$("#sp_name").val()
		   },
		   dataType:"json",
		   success: function(data){
		   		var str=""; 
		   		if(data!=null&&data!=""&&data.length>0){
		   			$(data).each(function (k, v){
				   		 var struts1=v.zgStruts;
				   		 var struts2=v.zlStruts;
				   		 var struts3=v.xcStruts;
				   		 if(struts1==null||struts1=='null'){
				   			v.zgStruts='';
				   		 }
				   		 if(struts2==null||struts2=='null'){
					   			v.zlStruts='';
					   		}
				   		 	/*//整改
				   		 	if(struts1==null||struts1==0){
					   			v.zgStruts="未提交";
					   		}else{
					   			if(struts1==1){
					   					v.zgStruts="通过";
					   			}
					   			if(struts1==2){
					   					v.zgStruts="未通过";
					   			}
					   		}
					   		//质量
					   		if(struts2==null||struts2==0){
					   			v.zlStruts="未提交";
					   		}else{
					   			if(struts2==1){
					   				v.zlStruts="通过";
					   			}
					   			if(struts2==2){
					   				v.zlStruts="未通过";
					   			}
					   		}*/
					   		//网评
					   		if(v.struts==null||v.struts==0){
					   			v.struts="未提交";
					   		}else{
					   			v.struts="已提交";
					   		}
					   		
					   		//现场
					   		if(struts3==null||struts3==0){
					   			v.xcStruts="未设定时间";
					   		}else{
					   			if(struts3==1){
					   				v.xcStruts="未开始";
					   			}
					   			if(struts3==2){
					   				v.xcStruts="进行中";
					   			}
					   			if(struts3==3){
					   				v.xcStruts="已结束";
					   			}
					   		}
					   		
				   			if(k%2==0){
				   				str+="<tr style='background:#F9F9F9' onmouseover='onHover(this)' onmouseout='outHover(this)'>"+
						   				"<td align='center'>";
				   				if(v.oName!=null&&v.oName!='null'){
				   					str+=v.oName
				   				}
				   				str+="</td> "+
						   				"<td align='center'>"+v.sp_name+"</td> "  +		
										"<td align='center'>"+v.zgStruts+"</td> "  +				
										"<td align='center'>"+v.zlStruts+"</td> "  +				
										"<td align='center'>"+v.struts+"</td> "  +
										"<td align='center'>"+v.xcStruts+"</td> "  +
										"<td align='center'></td> "  
					   			str+=	"</tr>";
				   			}else{
				   				str+="<tr style='background:#FFFFFF' onmouseover='onHover(this)' onmouseout='outHover(this)'>"+
					   					"<td align='center'>";
				   				if(v.oName!=null&&v.oName!='null'){
				   					str+=v.oName
				   				}
				   				str+="</td> "+	
					   					"<td align='center'>"+v.sp_name+"</td> "  +		
										"<td align='center'>"+v.zgStruts+"</td> "  +				
										"<td align='center'>"+v.zlStruts+"</td> "  +				
										"<td align='center'>"+v.struts+"</td> "  	+
										"<td align='center'>"+v.xcStruts+"</td> "  	+
										"<td align='center'></td> "  	
					   			str+=	"</tr>";
				   			} 
				   		});	
						$("#table").append(str); 	
		   		}else{
		   			$("#table").append("<tr ><td colspan='7' align='center'>查询没有结果</td></tr>")
		   		}
		   		 
		   }
		});
}
var oldBackground;
function  onHover(obj){
	oldBackground=$(obj).css("background");
	$(obj).css("background","#d2c6c6");
}
function outHover(obj){
	$(obj).css("background",oldBackground);
}
/**
 * 拿到url 的参数
 */
var request=GetRequest();
var dateYear=request.dateYear;
var specialtyId=request.specialtyId;
var ispass=request.ispass;

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
//提交
function tijiao(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	var ispass=request.ispass;
	var t_task_id=request.t_task_id;
	if(ispass==1){
		alert("该专业已过网评时间！");
	}else{
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoWangPingController/updateAssessment_task_pass.do",
			type:'POST',
			async:false,
			data:{
				"task_id":t_task_id
			},
			success:function(data){
				alert("提交成功！");
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

function getAllData(){
	//隐藏返回键
	$("#backbtn").hide();
	var sp_name=$("#sp_name").val();
	if(sp_name==""){
		alert("请选择专业");
		return;
	}
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getAllData.do",
		async:false,
		type:'POST',
		data:{
			"specialty_name":sp_name,
			"SYEAR":$("#rYear").val()
		},
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				is_Engineering = datas[0].is_engineering;
				load();
			}else{
				$("#contentAll").html("自评人未提交类型信息");
			}
		}
	});
	isShowAllFile();
}
//查询用户是否上传了总文件
function isShowAllFile(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getAllReports.do",
		type:'POST',
		async:false,
		data:{
			"specialty_name":$("#sp_name").val(),
			"tYear":$("#rYear").val()			
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
	var sp_name=$("#sp_name").val();
	if(sp_name==""){
		alert("请选择专业");
		return;
	}
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getAllReports.do",
		type:'POST',
		async:false,
		data:{
			"specialty_name":$("#sp_name").val(),
			"tYear":$("#rYear").val()		
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
								html +="	<div style=\"height:330px;\">"
								if(datas1.struts==2){
									html +="请<a href='/audit/asAssessReport/downAllReport.do?id="+v.id+"'>点击下载</a>预览";
								}else{
									if(datas1.contentMessge!=null){
										html +=datas1.contentMessge;
									}else{
										html +="<iframe id='iframe' width=100% height=320 frameborder=0 scrolling=auto src='/audit/"+datas1.filePath+"'></iframe>"
									}
								}
								html +="	</div>"
								html +="</div>	"	
								html +="<div style='height:10px'></div>"
								$("#contentAll").html(html);	
								//全文预览按钮隐藏
								$("#showAllFile").hide();
								$("#backbtn").show();
							}
						});
				})
			}else{
				if(one){
					one=false;
					$("#contentAll").html("<div style='text-align:center'>自评人未上传总的预览文件</div>");	
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
	menuStr();
}

function menuStr(){
	//清空记录
	html="";
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
			ajaxFindData(obj);
		}
		str += " >"+obj.name+"</a>";
		// 二级菜单
	
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str += "<ul>";
			$.each(obj.children,function(j,obj2){
				if(obj2!=undefined){
					str += "<li class='li2 arrow' ><a href='javascript:showlist("+obj2.id+")' ";
					if(obj2.url!=null){
						ajaxFindData(obj2);
					}
				    str += ">"+ obj2.name +"</a>";
					// 三级菜单
					if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
						str += "<ul>";
						$.each(obj2.children,function(k,obj3){
							if(obj3!=undefined){
								str += "<li class='li3 arrow'><a href='javascript:showlist("+obj3.id+")' ";
								if(obj3.url != null){
									ajaxFindData(obj3);
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
}

//菜单对象
var array=[];

function arrowInit(){
	$(".li1>a").addClass("arrow");
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
			alert(data);
		}
		
	});
	
}

var html="";
function ajaxFindData(obj){
	$.ajax({
		url :"/audit/AssessmentSpecialtyInfoWangPingController/findReport.do",
		data:{
			"specialty_name":$("#sp_name").val(),
			"sysId":obj.id,
			"rYear":$("#rYear").val()
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(datas){
				html+="<div id='"+obj.id+"' style='width:98%;float:left;margin-left:15px;margin-top:8px'>"
				//内容左边的
				html+="<div style='float:left;width:100%'>"
				html+="<div style='background:#DCDBDB;font-weight: bold;height:34px;text-align: center;line-height: 31px;'>"+obj.name+"</div>"
					html+="<div style='border: 1px solid rgba(113, 113, 113, 0.56);margin-top:5px;'>"
					if(datas.enter_CONTENT==""&&datas.struts==2){
						html+="<div id='info'>注：如有乱码，请联系自评人，新建文件，重新上传</div>"
					}else{
						html+="<div id='info'></div>"
					}
					html+="  <div id='"+obj.id+"C' style='overflow :auto;overflow-y :auto;height:120px'>" 
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
									"Ryear":$("#rYear").val(),
									"specialty_name":$("#sp_name").val(),
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
									alert("解析错误！");
								}
							})
					html+="      </div>"
					html+="</div>"
				html+="</div>"
				//左边结束	
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
				
				
			$("#imglodding").fadeOut(1000);
			$("#midle2").css("border","none");
			//查询是否有
			isShowAllFile();
		}
	});
	$("#contentAll").html(html);
}
function outfile(){
	//初始化表单
	var  spName=$("#name").html();
	//初始专业名字
	$("#speName").val(spName);
	var  textarea=$("textarea");
	//清除以前的
	var adds=$("div[name='add']");
	$(adds).each(function(){
		$(this).remove();
	})
	//初始化模板
		$(textarea).each(function (k,v){
			var html=$(v).val();
				var id=$(v).prop("id");
				var msg=$("#"+id+"C").html();
				var str="<div name='add'>";
				 str +="<div  class=MsoNormal align=left style='margin-top:7.8pt;text-align:left;line-height:150%'>" +
			 		"<b style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:\"Times New Roman\"'>" +
			 		""+msg+"</span></b><b style='mso-bidi-font-weight:normal'>"+
			 		"<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:黑体'><o:p></o:p></span>"+
					"</b></div>";
				 str +="<div style=''mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;color:red;mso-hansi-font-family:\"Times New Roman\"''>专家意见</div>";
				 str +="<div class=MsoNormal align=left style='margin-top:7.8pt;text-align:left;line-height:150%'>" +
				 		"<b style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:\"Times New Roman\"'>" +
				 		""+html+"</span></b><b style='mso-bidi-font-weight:normal'>"+
				 		"<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:黑体'><o:p></o:p></span>"+
						"</b></div></div>";
				 
				 
				 //非工科
				if(is_Engineering==1){
					$("#"+id+"B").after(str);
					$("#Bxueyuan").html($("#organizationName").val());
					$("#Bzhuanye").html($("#name").html());
				} else{
					//工科
					$("#"+id+"A").after(str);
					$("#Axueyuan").html($("#organizationName").val());
					$("#Azhuanye").html($("#name").html());
				}
		})
	//2工科
	if(is_Engineering==2){
		//模板
		var GkModle=$("#GkModle").html();
		$("#contentMold").val(GkModle);
		$('#myForm').submit();
		//alert("工科导出完毕");
	}
	//1非工科
	if(is_Engineering==1){
		//模板
		var FgkModle=$("#FgkModle").html();
		$("#contentMold").val(FgkModle);
		$('#myForm').submit();
		//alert("非工科导出完毕");
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
		async:true,
		type:'POST',
		dataType:'json',
		success:function(datas){
			var info=datas.coninfo;
			$("#title").html(datas.support_NAME);
			$("#down1").show();//显示下载
			//如果解析不了
			if(info.struts==2){
				alert("该文件格式不支持预览,你可以进行下载");
			}else{
				if(info.contentMessge!=null){
					$("#contentThing").html("<div>"+info.contentMessge+"</div>");
				}else if(info.filePath!=null){
					$("#contentThing").html("<iframe  width=100% height=92% frameborder=0 scrolling=auto src=\"/audit/"+info.filePath+"\"></iframe>");
				}else{
					alert("解析失败,你可以进行下载");
				}
			}
		},error:function(jqXHR, textStatus, errorThrown){
			alert("预览失败,你可以进行下载");
		}
	});
	
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

function black(){
	window.location.href="/audit/page/wangping/staticPage/Specialty.jsp";
}
function logout(){
	window.location.href="/logout";
}