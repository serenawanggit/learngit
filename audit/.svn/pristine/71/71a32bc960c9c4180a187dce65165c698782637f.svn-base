var taskInfo;
var report_id;
var request =GetRequest();
var ispass=request.ispass;
var dateYear=request.dateYear;
var specialtyId=request.specialtyId;
var id =request.sysId;
var date=request.date;
var _syscore="";
var zyId = request.zyId;
var zylxId = request.zylxId;
var name = request.name;
var zg_task_id = request.zg_task_id;
var zy_task_id = request.zy_task_id;
var sContentPath = getContentPath();


$(function(){
/*	load();
	getFiles();*/
	//显示数据
//	ajaxFindContentInfo();	
	GetRequest();
	validateLogin();
//	mouseIn();
	lookcailiao();
	initlookcailiao();
	addData();
	addZPDJ();
	addLianghua();
	getSystemPoint();
	initLHZB();
	initSHRdata();
	
});

function initSHRdata(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/initSHRdata.do",
		type:'POST',
		async:true,
		data:{
			'dateYear':dateYear,
			'sysId':id,
			'specialtyId':specialtyId
		},
		success : function(oData) {
			var datalist=eval(oData);
			if(datalist.length>0){
				$("#messge").val(datalist[0].BLACKCONTENT);
				$("#shLever1").val(datalist[0].SHgrade);
				$("#shLever2").val(datalist[0].SHscore);
			}
		},
		error:function(){
			
		}
	});
}

var taskStatusList = {
		'00' : '未提交',
		'01' : '已提交未校验',
		'02' : '校验未通过',
		'03' : '校验通过',
		'13' :'已提交院级审核',
		'22' :'院级未通过，校验未通过',
		'21' :'院级未通过，未校验',
		'23' :'院级未通过',
		'33':'已提交校级审核',
		'43':'校级未通过',
		'42':'校级未通过，校验未通过',
		'41':'校级未通过，未校验',
		'53':'校级已通过',
		'63':'已提交上报平台',
};

/**
 * 初始化查看材料
 * 
 */
function initlookcailiao(){
	$("#c1").css("background","#138b8a");
	$("#c1 a").css("color","#ffffff");
	backHidden();
	getZPBG();
	 $("#midTablle4").show();
}
function getZPBG(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataGrade.do",
		type:'POST',
		async:true,
		data:{
			'id':id,
			'dateYear':dateYear,
			'specialtyId':specialtyId
		},
		success : function(oData) {
			var datalist=eval(oData);
			if(datalist==null){
				alert("数据库没有相关数据");
			   }else{
					   for ( var int = 0; int < datalist.length; int++) {
						   var enterContent=datalist[int].ENTER_CONTENT;
						   var uploadFiles=datalist[int].FILE_ONLINE_URL;
						  if((enterContent==null||enterContent=="")&&(uploadFiles!=null||uploadFiles!="")){
							  var onlineurls=uploadFiles.split("\\"); 
							   var onlineurl=onlineurls[onlineurls.length-1];
							   showzccl(onlineurl);
						  }else if((enterContent!=null||enterContent!="")&&(uploadFiles==null||uploadFiles=="")){
							  $("#midTablle4").html(enterContent);
						  }else{
								lzrWindow.alert("自评报告没有输入以及是上传！");  
						  }
					  
			           }
			        }
			},
		error : function(oData) {
			alert("数据加载失败");
		}
	});
}
/**
 * 查看材料的点击事件
 */
function lookcailiao(){
	$("#c1").click(function() {
		backBackColor();
		$(this).css("background","#138b8a");
		$("#c1 a").css("color","#ffffff");
		backHidden();
		getZPBG();
		 $("#midTablle4").show();
	});
	$("#c2").click(function(){
		backBackColor();
		$(this).css("background","#138b8a");
		$("#c2 a").css("color","#ffffff");
		backHidden();
		$("#midTablle2").show();
		/* alert(id);
		 alert(dateYear);
		 return;*/
		
		var rootId = 1;
		$.ajax({
			url:sContentPath + "/asAssessReport/getAssessmentTypeById.do",
			type:'POST',
			async:false,
			data:{
				"id":zylxId
			},
			success:function(data){
				var datas = eval("("+data+")");
				if(datas.trim()=="学院评估"){
					rootId = 2;
				}else if(datas.trim()=="课程评估"){
					rootId = 4;
				}else{
					rootId = 3;
				}
			}
		});
		 
//		var rootId = 1;
//		$.ajax({
//			url:"/audit/asAssessReport/getAssessmentTypeById.do",
//			type:'POST',
//			async:false,
//			data:{
//				"id":zylxId
//			},
//			success:function(data){
//				alert(data);
//				var datas = eval("("+data+")");
//				if(datas.trim()=="学院评估"){
//					rootId = 2;
//				}else if(datas.trim()=="课程评估"){
//					rootId = 4;
//				}else{
//					rootId = 3;
//				}
//			}
//		})
		 
		 $.ajax({
				url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataDLSJB.do",
				type:'POST',
				async:true,
				data:{
					'id':id,
					'dateYear':dateYear
				},
				success : function(oData) {
					var datalist=eval(oData);
					var str="<tr style='background-color: #DCDBDB;'>"
						           +"<th>数据表名</th>"
						           +"<th>提交时间</th>"
						           +"<th>提交状态</th>"
						           +"<th>操作</th>"
						        +"</tr>"
						        +"<tr>"
						        /*if(datalist[int].TBZT==0&&datalist[int].SHZT){
						        	datalist[int].TBZT="未提交"
						        }*/
						    if(datalist.length>0){
						    	var path = "/datareport_platform/page/datareport/dataReportIndex.jsp?rootId="+rootId+"&page_type=1"
						    	+"&specialtyId="+specialtyId+"&systemId="+id+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass
						    	+"&dateYear="+dateYear+"&date="+date+"&remavkeId=1&reportYear=" + dateYear + "&zylxId=" + zylxId;
						    	
							   for ( var int = 0; int < datalist.length; int++) {
								   var state = taskStatusList[datalist[int].SHZT + '' + datalist[int].TBZT];
								   var templateId=datalist[int].TEMPLATEID
								   str+="<td>"+datalist[int].TABLE_NAME+"</td>"+"<td>"+datalist[int].INSERT_VSERSION+"</td>"+"<td>"+state+"</td>"
								   +"<td><a target='_top' href='" + path + "' ><img src='/audit/page/xueyuan/staticPage/img/operate.png' " +
							   		" style='width:20px;height: 20px;' title='查看' /></a></td></tr>";
//								   +"<td><a href='javascript:void(0);' ><img src='/audit/page/xueyuan/staticPage/img/operate.png' " +
//								   		"onclick=\"operate1('"+templateId+"');\" style='width:20px;height: 20px;' title='查看' /></a></td></tr>"
					           }
					        }
					$("#SHSJB").html(str);
					},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
	});
	$("#c3").click(function(){
		backBackColor();
		$(this).css("background","#138b8a");
		$("#c3 a").css("color","#ffffff");
		backHidden();
		 $("#midTablle1").show();
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataCailiao.do",
			type:'POST',
			async:true,
			data:{
				'id':id,
				'dateYear':dateYear,
				'specialtyId':specialtyId
			},
			success : function(oData) {
				var datalist=eval(oData);
				var str="<tr style='background-color: #DCDBDB;'>"
					          +"<th>材料名称</th>"
					          +"<th>上传时间</th>"
					          +"<th>操作</th>"
					          +"</tr>" 
					          +"<tr>"
					          if(datalist.length>0){
						   for ( var int = 0; int < datalist.length; int++) {
							   var onlineurl1=datalist[int].FILE_ONLINE_URL;
							   var onlineurls=onlineurl1.split("\\"); 
							   var onlineurl=onlineurls[onlineurls.length-1];
						   str+="<td>"+datalist[int].FILE_NAME+"</td>"+"<td>"+datalist[int].UPLOAD_TIME+"</td>"+"<td><a href='javascript:void(0);' ><img src='/audit/page/xueyuan/staticPage/img/operate.png' onclick=\"showzccl('"+onlineurl+"');\" style='width:20px;height: 20px;' title='预览' /></a></td></tr>"
				           }
				        }
				$("#ZCCL").html(str);
				},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		
	});
	$("#c4").click(function(){
		backBackColor();
		$(this).css("background","#138b8a");
		$("#c4 a").css("color","#ffffff");
		backHidden();
		 $("#midTablle3").show();
		 $.ajax({
				url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataQXSJB.do",
				type:'POST',
				async:true,
				data:{
					'id':id,
					'dateYear':dateYear
				},
				success : function(oData) {
					var datalist=eval(oData);
					var str="<tr style='background-color: #DCDBDB;'>"
						           +"<th>数据表名</th>"
						           +"<th>上传时间</th>"
//						           +"<th>上传状态</th>"
						           +"<th>操作</th>"
						        +"</tr>"
						        +"<tr>"
//						        alert(datalist);
					     if(datalist.length>0){
							   for ( var int = 0; int < datalist.length; int++) {
//								   var state = taskStatusList[datalist[int].SHZT + '' + datalist[int].TBZT];
								   var templateId=datalist[int].TEMPLATEID
							   str+="<td>"+datalist[int].TABLE_NAME+"</td>"+"<td>"+datalist[int].INSERT_VSERSION+"</td>"+/*"<td>"+state+"</td>"+*/"<td><a href='javascript:void(0);' ><img src='/audit/page/xueyuan/staticPage/img/operate.png' onclick=\"operate2('"+templateId+"');\" style='width:20px;height: 20px;' title='查看' /></a></td></tr>"
					           }
					        }
					$("#XJSJB").html(str);
					},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
	});
}
/**
 * 改变table的显示状态
 */
 function backHidden(){
	 $("#midTablle1").hide();
	 
	 $("#midTablle2").hide();
	 
	 $("#midTablle3").hide();
	 
	 $("#midTablle4").hide();
	 $("#viewId").hide();
 }  

/**
 * 还原源背景颜色
 * 
 */
function backBackColor(){
	$("#c1").css("background","#ffffff");
	$("#c1 a").css("color","#138b8a");
	$("#c2").css("background","#ffffff");
	$("#c2 a").css("color","#138b8a");
	$("#c3").css("background","#ffffff");
	$("#c3 a").css("color","#138b8a");
	$("#c4").css("background","#ffffff");
	$("#c4 a").css("color","#138b8a");
}
/**
 * 
 * 点击查看量化事件
 */
showDetail= function (){
	$("#mains").hide();
	$("#lianghua").show();
}

 hidebutton=function(){
	 $("#mains").show();
	$("#lianghua").hide();
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
	var name=decodeURI(theRequest.name);
	name=name.split("'");
	$("#text").html(name[1]);
	return theRequest; 
}	



/**
 * 审核通过不通过
 */
/*function ajaxFindContentInfo(){
	
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/findReportConentInfo.do",
		type:'POST',
		async:false,
		data:{
			'Specialty_id':request.specialtyId,
			'Sysid':request.sysId,
			'tYear':dateYear,
		},
		success:function(data){
			if(data==null||data==undefined||data==""){
				$("#textInfo").html("自评人未提交该类型信息");
			}else{
				var datas = eval("("+data+")");
				//如果输入的内容不等空
				if(datas.struts==2){
					var str1="请<a href='/audit/asAssessReport/downReport.do?id="+datas.report_id+"'>点击下载</a>预览";
					$("#textInfo").html(str1);
				}else{
					if(datas.filePath!=null){
						$("#info").html("注：如有乱码，请联系自评人，新建文件，重新上传");
						var str1="<iframe width=100% height=350 frameborder=0 scrolling=auto src='"+datas.filePath+"'></iframe>"
						$("#textInfo").html(str1);
						$("#filename").html(datas.upload_FILES);
					}else{
						$("#textInfo").html(datas.enter_CONTENT);
						$("#filename").html("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp报告内容");
					}
				}
			
				report_id=datas.report_id;
				$("#messge").html(datas.blackcontent);
			}
		},error:function(){
			$("#textInfo").html("未查询出数据");
		}
	});
	var str="<div style='width:150px;float:right'><a href='javascript:void(0);'><img src='/audit/page/xueyuan/staticPage/img/baocun.png' onclick='assess1()'/></a></div>"
	if(ispass==1){
		str+="<div style='width:150px;float:right'><a href=\"javascript:open();\"><img src='/audit/page/xueyuan/staticPage/img/baocun.png' /></a></div>"
			str+="<div style='width:150px;float:right'><a href=\"javascript:open();\"><img src='/audit/page/xueyuan/staticPage/img/pass.png'  /></a></div>"
		    str+="<div style='width:150px;float:right'><a href=\"javascript:open();\"><img src='/audit/page/xueyuan/staticPage/img/nopass.png'/></a></div>"
		    		
	}else{  
		     str+=+""
		     str+= +"<div style='width:150px;float:right'><a href=\"javascript:void(0);\"><img src='/audit/page/xueyuan/staticPage/img/pass.png' onclick='assess2(1,"+specialty_id+","+rectification_id+")' /></a></div>"
		    str+="<div style='width:150px;float:right'><a href=\"javascript:void(0);\"><img src='/audit/page/xueyuan/staticPage/img/nopass.png' onclick='assess2(0,"+specialty_id+","+rectification_id+")'/></a></div>"
		    
	}
	$("#btn").html(str);
}*/

/*function open(){
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
}*/
/*审核*/
/*function assess2(isPass,specialty_id,rectification_id){
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
	
}*/

/*function ajaxAssess(specialty_id,self_assess_zt,audit_zt,blackcontent,rectification_id,item){
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
}*/



function onDianJi(obj){
	if($(obj).val()=="请输入你的审核意见"){
		$(obj).val("");
	};
}
/**
 * 给指标规则赋值
 * 
 */
function addData(){
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataInfo.do",
			type:'POST',
			async:false,
			data:{
				'id':id,
				'dateYear':dateYear
			},
			success : function(oData) {
				var datalist=eval(oData);
				var str="";
				for ( var int = 0; int < datalist.length; int++) {
					_syscore=datalist[int].score;
					if(datalist[int].score==null||datalist[int].score==undefined||datalist[int].score==""){
						datalist[int].score="数据未定义";	
					}
					if(datalist[int].level_a==null||datalist[int].level_a==undefined||datalist[int].level_a==""){
						datalist[int].level_a="数据未定义";	
					}
					if(datalist[int].level_c==null||datalist[int].level_c==undefined||datalist[int].level_c==""){
						datalist[int].level_c="数据未定义";	
					}
					if(datalist[int].total==null||datalist[int].total==undefined||datalist[int].total==""){
						datalist[int].total="数据未定义";	
					}
					if(datalist[int].ratio==null||datalist[int].ratio==undefined||datalist[int].ratio==""){
						datalist[int].ratio="数据未定义";	
					}
					if(datalist[int].pname==null){
						/*str+="<td>教学规范</td>"+"<td>制度建设</td>"+"<td>5分</td>"+"<td>定位准确方法，但是这种方法在传递this等参数的时候很容易</td>"
						+"<td>定位较准确方法，但是这种方法在传递this等参数的时候很容易出问题</td>"+"<td>查阅院系方法，但是这种方法在传递this定位较准确方法，但是这种方法在传递this等参数的时候很容易出问题</td>"+"<td>能根拒收国家但是这种方法在传递this等参数的时候很容易出问题定位较准确方法，但是这种方法在传递this等参数的时候很容易出问题</td>"*/
					}else{
						str+="<td>"+datalist[int].pname+"</td>"+"<td>"+datalist[int].SYSTEM_NAME+"</td>"+"<td>"+datalist[int].score+"</td>"+"<td>"+datalist[int].level_a+"</td>"
						+"<td>"+datalist[int].level_c+"</td>"+"<td>"+datalist[int].total+"</td>"+"<td>"+datalist[int].ratio+"</td>"
					}
				}
				$("#top_tr").html(str);
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoXueYuanController/getASSESSMENT_TASK.do",
			type:'POST',
			async:false,
			data:{
				'dateYear':dateYear,
				'specialtyId':specialtyId
			},
			success : function(oData) {
				var name=$("#text").html();
				var datalist=eval(oData);
				taskInfo=datalist;
			      if ( taskInfo!=null && taskInfo!="" && taskInfo.length>0) {
			    	  if(taskInfo[0].audit_zt!=null &&taskInfo[0].audit_zt==1){
							$("#text").html(name+"(审核已提交)");
						}else{
							$("#text").html(name+"(审核未提交)");
						}
				}
				
			},
			error : function(oData) {
				lzrWindow.alert("数据加载失败");
			}
		});
		
}
/**
 * 自评等级及分数
 * 
 */
function addZPDJ(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataGrade.do",
		type:'POST',
		async:false,
		data:{
			'id':id,
			'dateYear':dateYear,
			'specialtyId':specialtyId
		},
		success : function(oData) {
			var datalist=eval(oData);
			if(datalist==null){
				alert("数据库没有相关数据");
			   }else{
					   for ( var int = 0; int < datalist.length; int++) {
					   $("#grade1").val(datalist[int].grade);
					   $("#grade2").val(datalist[int].score);
			           }
			        }
			},
		error : function(oData) {
			alert("数据加载失败");
		}
	});
}
/**
 * 给出能否进行审核判断
 */
function open1(){
	var messg="<div style='height:115px;line-height:19px;padding:10px'>" +
				"审核状态：<br/><br/><span stype='font-size:13px;color:a8a8a8'><p style='color:red'>自评人未提交不能进行审核！</p><br/></span><span style='font-size:14px;color:3d8bd3'>请联系管理人员</span>" +
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



///**
// * 
// * 审核通过
// */
//function assess2(){
//	if(taskInfo.length==0||taskInfo[0].audit_zt!=1){
//		$.ajax({
//			url: "/audit/AssessmentSpecialtyInfoXueYuanController/UpdateASSESSMENT_TASKPass.do",
//			type:'POST',
//			async:false,
//			data:{
//				'audit_zt':1,
//				'dateYear':dateYear,
//				'specialtyId':specialtyId
//			},
//			success : function(oData) {
//				lzrWindow.alert("审核成功!");
//			},
//			error : function(oData) {
//				lzrWindow.alert("审核失败");
//			}
//		});
//	}else{
//		lzrWindow.alert("审核人已提交");
//	}
//}
///**
// * 未通过
// */
//function assess3(){
//	if(taskInfo.length==0||taskInfo[0].audit_zt!=1){
//		$.ajax({
//			url: "/audit/AssessmentSpecialtyInfoXueYuanController/UpdateASSESSMENT_TASKNoPass.do",
//			type:'POST',
//			async:false,
//			data:{
//				'dateYear':dateYear,
//				'specialtyId':specialtyId
//			},
//			success : function(oData) {
//				lzrWindow.alert("审核成功！");
//			},
//			error : function(oData) {
//				lzrWindow.alert("审核失败");
//			}
//		});
//	}else{
//		lzrWindow.alert("审核人已提交");
//	}
//}
function addLianghua(){
	
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/getAS_ASSESS_INDEX_FORMULA.do",
		type:'POST',
		async:false,
		data:{
			'dateYear':dateYear,
			'Sysid':id
		},
		success : function(oData) {
			var list =eval(oData);
			var str=" <tr style='background-color: #DCDBDB;'>"
		          +" <th>变量</th>"
		          +" <th>公式</th>"
		          +" <th>计算顺序</th>"
		          + "</tr>";
			for ( var int = 0; int < list.length; int++) {
			//除去公式里面的#
             var formula=list[int].formula.replace(/#/g,"");
//             map.put(list[int].variables, formula);
			 str+="<tr>" +
			 		"<td>"+list[int].variables+"</td>"
			 		+"<td>"+formula+"</td>"
			 		+"<td>"+list[int].num+"</td>" +
			 				"\<tr/>"
			}
			$("#linghuaTable").html(str);
		},
		error : function(oData) {
			lzrWindow.alert("量化数据加载失败");
		}
	});
}
/**
 * 查询  DW_V_LEADERSHIP
 * 
 */
//查看数据表信息
function operate1(tableid){
	var str="";
	//查询表头
	$.ajax({
		url: "/audit/asAssessReport/findFieldByTemplateid.do",
		async:false,
		type:'POST',
		data:{
			"id":tableid
		},
		dataType:'json',
		success:function(data){
//			var str = "<tr>";
			str += "<tr>";
			$.each(data,function(i,dom){
				if(dom.FIELD_ENAME != "ERROR_MSG" && dom.FIELD_ENAME != "ID"){
					str += "<td>" + dom.FIELD_CNAME + "</td>";
				}
			});
			str += "</tr>";
//			$("#scoolData-table").append(str);
		}
	});
//	var tableData_1 = null;
	//查询表格数据
	$.ajax({
		url: "/audit/asAssessReport/findTableData.do",
		async:false,
		type:'POST',
		data:{
			"id":tableid,
			"year":dateYear
		},
		dataType:'json',
		success:function(data){
//			tableData_1 = data;
//			var str = "";
			$.each(data,function(i,dom){
				str += "<tr>";
				$.each(dom,function(index,doc){
					str += "<td>" + doc + "</td>";
				});
				str += "</tr>";
			});
//			$("#scoolData-table").append(str);
		}
	});
	$("#scoolData-table").html(str);
	   var downHide=$("#downHide");
		var winWidth = window.innerWidth;
		var leftWidth = winWidth/2-580;
		$.ligerDialog.open({
			target : downHide,
			height : 400,
			width : 870,
			top : 50,
			left : leftWidth,
			title : '查看表格数据',
			showMax : false,
			showToggle : true,
			showMin : false,
			isResize : true,
			slide : false,
			isHidden:true,
			fixedType:'se',
			buttons:[{text:'关闭',
				onclick:function(item, dialog){
//					dialog.close();
					dialog.hide();
				}
			}],
		});
	
	
}	
/**
 * 
 * 查看校级数据
 */
function operate2(tableid){
	var str="";
	//查询表头
	$.ajax({
		url: "/audit/asAssessReport/findFieldByTemplateid.do",
		async:false,
		type:'POST',
		data:{
			"id":tableid
		},
		dataType:'json',
		success:function(data){
			 str += "<tr>";
			$.each(data,function(i,dom){
				if(dom.FIELD_ENAME != "ERROR_MSG" && dom.FIELD_ENAME != "ID"){
					str += "<td>" + dom.FIELD_CNAME + "</td>";
				}
			});
			str += "</tr>";
//			$("#scoolData-table1").append(str);
		}
	});
//	var tableData_1 = null;
	//查询表格数据
	$.ajax({
		url: "/audit/asAssessReport/findTableData.do",
		async:false,
		type:'POST',
		data:{
			"id":tableid,
			"year":dateYear
		},
		dataType:'json',
		success:function(data){
//			tableData_1 = data;
//			var str = "";
			$.each(data,function(i,dom){
				str += "<tr>";
				$.each(dom,function(index,doc){
					str += "<td>" + doc + "</td>";
				});
				str += "</tr>";
			});
//			$("#scoolData-table1").append(str);
		}
	});
	   $("#scoolData-table1").html(str);
	   var downHide1=$("#downHide1");
		var winWidth = window.innerWidth;
		var leftWidth = winWidth/2-580;
		$.ligerDialog.open({
			target : downHide1,
			height : 400,
			width : 870,
			top : 50,
			left : leftWidth,
			title : '查看校级表格数据',
			showMax : false,
			showToggle : true,
			showMin : false,
			isResize : true,
			slide : false,
			isHidden:true,
			fixedType:'se',
			buttons:[{text:'关闭',
				onclick:function(item, dialog){
//					dialog.close();
					dialog.hide();
				}
			}],
		});
}
/**
 * 保存按钮
 */
function assess1(){
	var SHDJ=$("#shLever1").val();
	var SHFS=$("#shLever2").val();
	var blackcontent = $("#messge").val();
	var match = SHFS.match(/^\d+$/); 
//	var check=(SHDJSHDJ==""||SHFS==""||blackcontent=""||blackcontent=="审核意见说明");
	if(taskInfo.length==0||taskInfo[0].audit_zt!=1){
	if(SHDJ=="A" || SHDJ=="C" || SHDJ=="B" || SHDJ=="D" || SHDJ=="a" || SHDJ=="b" || SHDJ=="c" || SHDJ=="d"){
		 lzrWindow.alert("等级正确");
		if(match && SHFS<=parseInt(_syscore)){
//			lzrWindow.alert("审核分数输入正确");
			if(blackcontent==""||blackcontent=="审核意见说明"){
				lzrWindow.alert("你没有输入审核意见");
				return;
			}else{
				ajaxBaoCun(SHDJ,SHFS,blackcontent);
			}
		}else{
			lzrWindow.alert("审核分数必须是数字且必须小于总分数！");
			return;
		}
	}else{
		lzrWindow.alert("评分等级请输入正确的值：A或B或C或D！");
		return;
	 }
	}else{
		lzrWindow.alert("审核人已提交审核！");
	}
}
function ajaxBaoCun(SHDJ,SHFS,blackcontent){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/getAssessmentReportInfo.do",
		type:'POST',
		dataType:'json',
		async:false,
		data:{
			'dateYear':dateYear,
			'sysId':id,
			'specialtyId':specialtyId
		},
		success:function(data){
			if(data){//有记录，修改
				$.ajax({
					url: "/audit/AssessmentSpecialtyInfoXueYuanController/updateAs_assess_report_blackcontent1.do",
					type:'POST',
					dataType:'json',
					async:false,
					data:{
						'dateYear':dateYear,
						'sysId':id,
						'specialtyId':specialtyId,
						'SHDJ':SHDJ,
						'SHFS':SHFS,
						'blackcontent':blackcontent
					},
					success:function(data){
						if(data=='1'){
							lzrWindow.alert("保存成功！");
						}else{
							lzrWindow.alert("保存失败！");
						}
					},error:function(){
						lzrWindow.alert("数据加载失败");
					}
				});
			}else{//没记录，插入   
				$.ajax({
					url: "/audit/AssessmentSpecialtyInfoXueYuanController/insertReportBlackcontent.do",
					type:'POST',
					dataType:'json',
					async:false,
					data:{
						'dateYear':dateYear,
						'sysId':id,
						'specialtyId':specialtyId,
						'SHDJ':SHDJ,
						'SHFS':SHFS,
						'blackcontent':blackcontent
					},
					success:function(data){
						if(data=='1'){
							lzrWindow.alert("保存成功！");
						}else{
							lzrWindow.alert("保存失败！");
						}
					},error:function(){
						lzrWindow.alert("数据加载失败");
					}
				});
			}
		},error:function(){
			lzrWindow.alert("数据加载失败");
		}
	});
}
/*保存意见*/
/*function BCYJ(){
		var blackcontent = $("#messge").val();
		alert(blackcontent);
		if(blackcontent=""||blackcontent=="审核意见说明"){
			if(confirm("审核没有输入确认保存吗？")){
				ajaxBaoCunYJ(blackcontent);
			  }
		}else{
			ajaxBaoCunYJ(blackcontent);
		}
}*/
/*function ajaxBaoCunYJ(blackcontent){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/updateAs_assess_report_blackcontent1.do",
		type:'POST',
		dataType:'json',
		async:true,
		data:{
			'sysId':id,
			'specialtyId':specialtyId,
			'blackcontent':blackcontent,
			'dateYear':dateYear
		},
		success:function(data){
			if(data==1){
				lzrWindow.alert("保存成功！");
			}else{
				lzrWindow.alert("意见保存失败！");
			}
		},error:function(){
			lzrWindow.alert("数据加载失败");
		}
	});
}*/

/**
 * 预览材料
 */
function  showzccl(onlineurl){
		 var a="/audit/upload/"+onlineurl;
		 var fp = new FlexPaperViewer(    
	             '/audit/FlexPaper/swfFiles/FlexPaperViewer', 
	            //  对应于p 标签的id
	             'viewerPlaceHolder',   
	             { config : { 
	           //导入的.swf的路径,文件名称使用英语表示，中文时显示不出来，暂时未解决这个问题
	            SwfFile :escape(a),
	           //  SwfFile :escape('F:\\upload\\1431589237438.swf'),                
	             Scale : 1.6, 
	             ZoomTransition : 'easeOut',
	             ZoomTime : 0.5,
	             ZoomInterval : 0.2,
	             FitPageOnLoad : true,
	             FitWidthOnLoad : true,
	             PrintEnabled : true,// 是否可以打印  
	             FullScreenAsMaxWindow : false,
	             ProgressiveLoading : false,
	             MinZoomSize : 0.2,
	             MaxZoomSize : 10,
	             SearchMatchAll : false,
	             InitViewMode : 'Portrait',
	             
	             ViewModeToolsVisible : true,
	             ZoomToolsVisible : true,
	             NavToolsVisible : true,
	             CursorToolsVisible : true,
	             SearchToolsVisible : true,
	               localeChain: 'en_US'
	             }});
		 $("#midTablle1").hide();
		 $("#viewId").show();
}
/**
 * 计算系统得分
 */

function getSystemPoint(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/getAS_ASSESS_INDEX_FORMULA1.do",
		type:'POST',
		async:false,
		data:{
			'dateYear':dateYear,
			'Sysid':id,
			'specialtyId':specialtyId
		},
		success : function(oData) {
			var grade_ = 1;
			if($("#grade1").val()=="A" || $("#grade1").val()=="a") grade_ = 1;
			if($("#grade1").val()=="B" || $("#grade1").val()=="b") grade_ = 0.8;
			if($("#grade1").val()=="C" || $("#grade1").val()=="c") grade_ = 0.6;
			if($("#grade1").val()=="D" || $("#grade1").val()=="d") grade_ = 0.4;
			var _syscore1=oData;
//			alert(_syscore1);
			if(_syscore!=null ||_syscore!=undefined||_syscore!=""){
				if(_syscore1>_syscore){
					$("#grade3").val(_syscore*grade_);
				}else if(_syscore1<0){
					$("#grade3").val(0*grade_);
				}else{
					$("#grade3").val(_syscore1*grade_);
				}
			}else{
				lzrWindow.alert("没有设置分值");
			}
		},
		error : function(oData) {
			lzrWindow.alert("量化数据加载失败");
		}
	});
}
/**
 * 量化指标
 * 
 */

function initLHZB(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/getAS_ASSESS_INDEX_FORMULA2.do",
		type:'POST',
		async:false,
		data:{
			'dateYear':dateYear,
			'Sysid':id,
			'specialtyId':specialtyId
		},
		success : function(oData) {
			var list=eval(oData);
		var str="<tr style='background-color: #DCDBDB;'>"
		           +"<th>指标名称</th>"
		           +"<th>指标值</th>"
		           +"<th>操作</th>"
		           +"</tr>";
               for ( var int = 0; int < list.length; int++) {
//            	   alert(list[int].name);
            	   str+="<tr><td>"+list[int].name+"</td>"+"<td>"+list[int].value+"</td>"+"<td><a href='javascript:void(0);'><img src='/audit/page/xueyuan/staticPage/img/operate.png' onclick='operate2();' style='width:20px;height: 20px;' title='查看数据源'/></a></td></tr>"
			}
			$("#LHZB").html(str);
		},
		error : function(oData) {
			lzrWindow.alert("量化数据加载失败");
		}
	});
	
	
}

function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
}

