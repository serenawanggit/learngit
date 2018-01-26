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

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
}

var sContentPath = getContentPath();
var report_Id =0;
var choose;
var sysid;
var dateYear;
var taskInfo;
var syscore;
var zylxId = getQueryString('zylxId');
var zyId = getQueryString('zyId');
var rootId;

var pgType = "学院";


$(function(){
	sysid = $("#sysId").val();
	var specialtyId = $("#specialtyId").val();
	validateLogin();
	// $("#loading1").show();
	load();
	getAllReport();
	// $("#loading1").hide();
	
	
//	alert("abc");
//	var zylxId = $("#zylxId").val();
	rootId = 1;
	$.ajax({
		url:sContentPath+"/asAssessReport/getAssessmentTypeById.do",
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
	})
	
	var path = "/datareport_platform/page/datareport/dataReportIndex.jsp?rootId="+rootId+"&reportYear=" + dateYear + "&page_type=1&specialtyId="+specialtyId
			+"&dateYear="+dateYear+"&zylxId="+zylxId+"&zyId="+zyId+"&systemId="+sysid+"&remavkeId=2";
	$("#aaaaaaa").attr("href",path); 
});


function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}
function load(){
	sysid = $("#sysId").val();
	dateYear = $("#dateYear").val();
	var specialtyId = $("#specialtyId").val();
	parent.document.getElementById("jugeSave").value = 1;
	//指标信息
	$.ajax({
		url: sContentPath+"/asAssessReport/getSystemById.do",
		type:'POST',
		data:{
			"id":sysid,
			"dateYear":dateYear
		},
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			var pname = "";
			var sysName = "";
			var levelA = "";
			var levelC = "";
			var ratio = "";
			var meaning = "";
			var _syscore = "";
			if(datas[0].pname != null && datas[0].pname != undefined){ pname=datas[0].pname }
			if(datas[0].system_name != null && datas[0].system_name != undefined){ sysName=datas[0].system_name }
			if(datas[0].syscore != null && datas[0].syscore != undefined){ 
				syscore=datas[0].syscore;
				_syscore = datas[0].syscore;
			}
			if(datas[0].level_a != null && datas[0].level_a != undefined){ levelA=datas[0].level_a; }
			if(datas[0].level_c != null && datas[0].level_c != undefined){ levelC=datas[0].level_c; }
			if(datas[0].total != null && datas[0].total != undefined){ ratio=datas[0].total; }
			if(datas[0].ratio != null && datas[0].ratio != undefined){ meaning=datas[0].ratio; }
			
			var str = "<tr><th>"+pname+"</th><th>"+sysName+"</th><th>"+_syscore+"</th><th>"+levelA+"</th>" +
					"<th>"+levelC+"</th><th>"+ratio+"</th><th>"+meaning+"</th></tr>";
			$("#systemInfo tr:eq(2)").remove();
			$("#systemInfo").append(str);
		}
	});
	
	rootId = 1;
	$.ajax({
		url:sContentPath+"/asAssessReport/getAssessmentTypeById.do",
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
	})
	
	//提交数据表信息
	$.ajax({
		url: sContentPath+"/asAssessReport/findTemplateAndTaskInfo.do",
		type:'POST',
		data:{
			"id":sysid,
			"dateYear":dateYear,
			"type":1
		},
		dataType:'json',
		success:function(data){
			//TEMPLATEID为模板id，TASKID为任务详情id
			console.info("提交数据表");
			console.info(data);
			var str = "";
			$.each(data,function(index,dom){
				var tableName = "";
				if(dom.TABLE_NAME != null && dom.TABLE_NAME != undefined){ tableName = dom.TABLE_NAME }
				
				var state = taskStatusList[dom.SHZT + '' + dom.TBZT];
				//page_type=1页面判断  specialtyId=27&dateYear=2016&zylxId=1&zyId=2
//				/datareport_platform/page/datareport/home.jsp?page_type=1&specialtyId="+specialtyId+"&dateYear="+dateYear+
//					"&zylxId="+zylxId+"&zyId="+zyId+"
				var path = "/datareport_platform/page/datareport/dataReportIndex.jsp?rootId="+rootId+"&reportYear=" + dateYear + "&page_type=1&specialtyId="
					+specialtyId+"&dateYear="+dateYear+"&zylxId="+zylxId+"&zyId="+zyId+"&systemId="+sysid+"&remavkeId=2";
				
//				rootId=1&reportYear=2017&page_type=1&specialtyId=36&dateYear=2017&zylxId=5&zyId=6
//				dataReportIndex.jsp?rootId=1&reportYear=2017&page_type=1&specialtyId=36&dateYear=2017&zylxId=5&zyId=6
				str += "<tr><td>" + tableName + "</td><td>" + dateFormat(dom.INSERT_VSERSION) + "</td><td>" + state + "</td>" +
				"<td><a id='aaaaaaa' href='"+path+"' target='_top' title='提交'><img src='page/zenith/staticPage/img/submit_1.png'></a></td></tr>";
			});
			$("#dataSheet tr:not(:first)").empty(); //清空table
			$("#dataSheet").append(str);
		}
	});
	
	//校级数据表信息
	$.ajax({
		url: sContentPath+"/asAssessReport/findTemplateAndTaskInfo.do",
		type:'POST',
		data:{
			"id":sysid,
			"dateYear":dateYear,
			"type":2
		},
		dataType:'json',
		success:function(data){
			var str = "";
			$.each(data,function(index,dom){
				var tableName = "";
				if(dom.TABLE_NAME != null && dom.TABLE_NAME != undefined){ tableName = dom.TABLE_NAME }
				
				var state = taskStatusList[dom.SHZT + '' + dom.TBZT];
				str += "<tr><td>" + tableName + "</td><td>" + dateFormat(dom.INSERT_VSERSION) + "</td>" +
//						"<td>" + state + "</td>" +
				"<td><a href='javascript:void(0)' onclick='lookSystem("+dom.TEMPLATEID+")' title='查看'><img src='page/zenith/staticPage/img/look.png'></a></td></tr>";
			});
			$("#schoolDataReport tr:not(:first)").empty(); //清空table
			$("#schoolDataReport").append(str);
		}
	});
	
	//上传内容的显示(查询专业建设报告内容表)
	$.ajax({
		url: sContentPath+"/asAssessReport/getAssessReportBySysid.do",
		type:'POST',
		data:{
			"sysid":sysid,
			"ryear":dateYear,
			"specialtyId":specialtyId
		},
		dataType:'json',
		success:function(data){
			var str = "";
			$.each(data,function(index,dom){
				var fileName = "";
				var size = "";
				if(dom.UPLOAD_FILES != null && dom.UPLOAD_FILES != undefined){ fileName=dom.UPLOAD_FILES }
				if(dom.size != null && dom.size != undefined){ size=dom.size }
				
				if(dom.grade!=null && dom.grade!= undefined){ $("#grade").val(dom.grade); }
				if(dom.score!=null && dom.score!= undefined){ $("#score").val(dom.score); }
				if(dom.problem!=null && dom.problem!= undefined){ $("#problem").val(dom.problem); }
				
				if(dom.UPLOAD_FILES!=null && dom.UPLOAD_FILES!=undefined){
					str += "<tr><td>" + fileName + "</td><td>" + size + "</td><td>上传成功 </td>" +
					"<td><a href='javascript:void(0)' onclick='deleteReport("+dom.ID+")' id='deleteContent' title='删除'><img src='page/zenith/staticPage/img/delete.png'></a>" +
					"<a href='/audit/asAssessReport/downloadReport.do?id="+dom.ID+"' title='下载'><img src='page/zenith/staticPage/img/download.png'></a></td></tr>";
				}else{
					UE.getEditor('myEditor').value=dom.ENTER_CONTENT;
				}
			});
			$("#contentUpload-str tr:not(:first)").empty(); //清空table
			$("#contentUpload-str").append(str);
		}
	});
	
	//上传材料的显示(查询自评得分表)
	findSelfDataFileBySysid();
	
}
	//上传材料的显示(查询自评得分表)
	function findSelfDataFileBySysid(){
		var specialtyId = $("#specialtyId").val();
		$.ajax({
			url: sContentPath+"/asAssessReport/findSelfDataFileBySysid.do",
			type:'POST',
			data:{
				"sysid":sysid,
				"specialtyId":specialtyId
			},
			dataType:'json',
			success:function(data){
				var str = "";
				$.each(data,function(index,dom){
					var fileName = "";
					var time = "";
					if(dom.FILE_NAME != null && dom.FILE_NAME != undefined){ fileName=dom.FILE_NAME }
					if(dom.UPLOAD_TIME != null && dom.UPLOAD_TIME != undefined){ time=dom.UPLOAD_TIME }
					
					str += "<tr><td>" + dom.FILE_NAME + "</td><td>" + time + "</td><td>上传成功 </td>" +
					"<td><a href='javascript:void(0)' onclick='deleteSelfDataFile("+dom.ID+")' title='删除'><img src='page/zenith/staticPage/img/delete.png'></a>" +
					"<a href='/audit/asAssessReport/downloadSelfData.do?id="+dom.ID+"' title='下载'><img src='page/zenith/staticPage/img/download.png'></a></td></tr>";
				});
				$("#selfDataFile tr:not(:first)").empty(); //清空table
				$("#selfDataFile").append(str);
			}
		});
	}
	
	function deleteSelfDataFile(id){
		if(taskInfo.length==0||taskInfo[0].self_assess_zt==2){
			if(confirm("确认要删除吗")){
				$.ajax({
					url:sContentPath+"/asAssessReport/deleteSelfDataFileById.do",
					type:'POST',
					async:false,
					data:{
						"id":id
					},
					success:function(data){
						 alert("修改成功");
						 getAllReport();
						 load();
					}
				})
			}
		}else{
			alert("自评人已提交审核！");
		}
	}
	
	
//	function lookSystem(id){
//		$.ajax({
//			url: sContentPath+"/asAssessReport/getDataTemplateById.do",
//			type:'POST',
//			data:{
//				"id":id
//			},
//			dataType:'json',
//			success:function(data){
//				
//			}
//		});

	//查看校级数据表信息
	function lookSystem(id){
		//查询表头
		$.ajax({
			url: sContentPath+"/asAssessReport/findFieldByTemplateid.do",
			async:false,
			type:'POST',
			data:{
				"id":id
			},
			dataType:'json',
			success:function(data){
				var str = "<tr>";
				$.each(data,function(i,dom){
					if(dom.FIELD_ENAME != "ERROR_MSG" && dom.FIELD_ENAME != "ID"){
						str += "<td>" + dom.FIELD_CNAME + "</td>";
					}
				})
				str += "</tr>";
				$("#scoolData-table").append(str);
			}
		});
		var tableData_1 = null;
		//查询表格数据
		$.ajax({
			url: sContentPath+"/asAssessReport/findTableData.do",
			async:false,
			type:'POST',
			data:{
				"id":id,
				"year":dateYear
			},
			dataType:'json',
			success:function(data){
				tableData_1 = data;
				var str = "";
				$.each(data,function(i,dom){
					str += "<tr>";
					$.each(dom,function(index,doc){
						str += "<td>" + doc + "</td>";
					})
					str += "</tr>";
				})
				$("#scoolData-table").append(str);
			}
		});
		
		if(tableData_1==null || tableData_1.length<=0){
			/*alert("该自评人没有数据可以查看！");*/

			//获取窗体的宽度
			var winWidth = window.innerWidth;
			var leftWidth = winWidth/2-580;
			$.ligerDialog.open({
				target : $("#downHide"),
				height : 400,
				width : 870,
				top : 50,
				left : leftWidth,
				title : '查看校级数据',
				showMax : false,
				showToggle : true,
				showMin : false,
				isResize : true,
				slide : false,
				isHidden:false,
	//			fixedType:'se',
				buttons:[{text:'关闭',
					onclick:function(item, dialog){
						dialog.close();
					}
				}]
			});
		
		}else{
			//获取窗体的宽度
			var winWidth = window.innerWidth;
			var leftWidth = winWidth/2-580;
			$.ligerDialog.open({
				target : $("#downHide"),
				height : 400,
				width : 870,
				top : 50,
				left : leftWidth,
				title : '查看校级数据',
				showMax : false,
				showToggle : true,
				showMin : false,
				isResize : true,
				slide : false,
				isHidden:false,
	//			fixedType:'se',
				buttons:[{text:'关闭',
					onclick:function(item, dialog){
						dialog.close();
					}
				}]
			});
		}
	}

	function getAllReport(){
		var specialtyId = $("#specialtyId").val();
		var id = 0;
		$.ajax({
			url:sContentPath+"/asAssessReport/getAllReport.do",
			type:'POST',
			async:false,
			data:{
				"specialtyId":specialtyId,
				"rYear":dateYear,
				"sysid":sysid
			},
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
				var htmls = "<tr><td>文件名</td><td>类型</td><td>状态</td><td>操作</td></tr>";
				if(datas!=null && datas!="" && datas!=undefined){
					id = datas[0].id;
					report_Id = datas[0].id;
//					if(datas[0].enterContent!=null && datas[0].enterContent!=""){
					setContent(datas[0].enterContent,false);
					$("#saveContent").attr("onclick","saveContent("+id+")");	
					$("#showReport").html(htmls);
//					}else{
//						var address = datas[0].uploadAddress.split(".");
//						htmls+="<td>"+datas[0].uploadFiles+"</td><td>"+address[address.length-1]+"</td><td>上传成功</td>";
//						htmls+="<td><a href='javascript:void(0)' onclick='deleteReport("+datas[0].id+");'><img src='page/zenith/staticPage/img/delete.png'></a>&nbsp;&nbsp;"+
//								"<a href='/audit/asAssessReport/downReport.do?id="+datas[0].id+"'><img src='page/zenith/staticPage/img/download.png'></a></td></tr>";
//						$("#showReport").html("");
//						$("#showReport").html(htmls);
//					
//					}
					if(datas[0].blackContent!=null&&datas[0].blackContent!=""&&datas[0].blackContent!=undefined){
						$("#returnAssess").html("<span style='color:red;font-size:18px;margin-top:5%;'>审核意见:</span><br/>"+datas[0].blackContent)
					}		
				}else{
					$("#saveContent").attr("onclick","saveContent("+0+")");	
					$("#showReport").html(htmls);
					report_Id = 0;
				}
			}
		})
		$.ajax({
			url:sContentPath+"/asAssessReport/getAllSupportById.do",
			type:'POST',
			async:false,
			data:{
				"specialtyId":specialtyId,
				"rYear":dateYear,
				"sysid":sysid
			},
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
				var htmls = "<tr><td>序号</td><td>文件名</td><td>状态</td><td>操作</td>/tr>";
				if(datas!=null&&datas!=""){
					for ( var i = 0; i < datas.length; i++) {
						var address = datas[i].support_address.split(".");
					if(i%2==1){
						htmls+="<tr style='background:#F8F8F8'><td>"+(i+1)+"</td><td>"+datas[i].support_name+"</td>" ;
					}else{
						htmls+="<tr ><td>"+(i+1)+"</td><td>"+datas[i].support_name+"</td>" ;
					}
					htmls+="<td>上传成功</td>" +
							"<td><a href='javascript:void(0)' onclick='deleteSupport("+datas[i].id+");'><img src='page/zenith/staticPage/img/delete.png'></a>&nbsp;&nbsp;"+
							"<a href='/audit/asAssessReport/downSupport.do?id="+datas[i].id+"' ><img src='page/zenith/staticPage/img/download.png'></a></td></tr>";
				}
				}
				
				$("#showSupport").html(htmls);
			}
		})
		$.ajax({
			url: sContentPath+"/asAssessReport/getAllData.do",
			async:false,
			type:'POST',
			data:{
				"specialtyId":specialtyId
			},
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
				if(datas!="" && datas != null){
					$("#specialty_name").html(datas[0].specialty_name);
				}
			}
		});
			
		$.ajax({
			url:sContentPath+"/asAssessReport/selectTask.do",
			type:'POST',
			async:false,
			dataType:'json',
			data:{
				"itemId":0,
				"dateYear":dateYear,
				"specialtyId":specialtyId
			},success:function(data){
				var datas = eval("("+data+")")
				taskInfo = datas;
				if(taskInfo!=null&&taskInfo!=""&&taskInfo.length>0){
					if(taskInfo[0].self_assess_zt!=null && taskInfo[0].self_assess_zt==1){
//							var htmls = $("#specialtys").html();
						$("#specialtys").html("(已提交审核)");
					}
				}
			}
		});
}


function deleteReport(id){
	if(taskInfo.length==0||taskInfo[0].self_assess_zt==2){
		if(confirm("确认要删除吗")){
			$.ajax({
				url:sContentPath+"/asAssessReport/deleteReportById.do",
				type:'POST',
				async:false,
				data:{
					"id":id
				},
				success:function(data){
					 alert("修改成功");
					 getAllReport();
					 load();
				}
			})
		}
	}else{
		alert("自评人已提交审核！");
	}
	
}

function deleteSupport(id){
	if(taskInfo.length==0||taskInfo[0].self_assess_zt==2){
		if(confirm("确认要删除吗")){
			$.ajax({
				url:sContentPath+"/asAssessReport/DeleteSupById.do",
				type:'POST',
				async:false,
				data:{
					"id":id
				},
				success:function(data){
					alert("修改成功");
					getAllReport();
				}
				
			})
		}
	}else{
		alert("自评人已提交审核！");
	}
}
	function setContent(content,ss){
		var ueditor = 	UE.getEditor('myEditor');
		ueditor.addListener("ready", function () {
	        // editor准备好之后才可以使用
	        ueditor.setContent(content,ss);
	        //ueditor.setDisabled();
		});
		
	}

	//上传内容
	function checkFile(){
		if(taskInfo.length==0||taskInfo[0].self_assess_zt==2){
			var specialtyId = $("#specialtyId").val();
//			if(choose==1){//uploadData
				$("#uploadForm").attr("action","/audit/asAssessReport/uploadReport.do");
//			}else{
//				$("#uploadForm").attr("action","/audit/asAssessReport/uploadSupport.do");
//			}
		
			if($("#uploadFile").val()!=null && $("#uploadFile").val()!=""){
				$("#uploadForm").ajaxSubmit({
					data:{
						"uids":report_Id,
						"sysId":sysid,
						"specialtyId":specialtyId,
						"reportId":report_Id,
						"dateYear":dateYear
					},
			        success: function (data) {
	//		           alert("-----------上传成功");
			           alert(data);
			           getAllReport();
			           load();
			           closed();
			        }
			    })
			}else{
				alert("上传文件不能为空！");
			}
		}else{
			alert("自评人已提交审核")
		}
	}
	
function showUpload(id){
//	alert("上传内容");
	choose =id;
	if(taskInfo.length==0||taskInfo[0].self_assess_zt==2){
		if(id==1){
			if(UE.getEditor('myEditor').getContent().length>0){
				alert("文本框内已有内容,禁止上传文件!");
				return;
			}else{
				if(report_Id==0){
					$("#uploadFile").click();
				}else{
					alert("该体系已有文件或文本框内有内容或修改未保存！")
				}
			}
		}else{
			$("#uploadFile").click();
		}
	}else{
		alert("自评人已提交审核")
	}
	
	/*if(id==1){
		$("#uploadForm").attr("action","/audit/asAssessRetification/upload.do")

		if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
			$("#uploadForm").ajaxSubmit({
		        success: function (data) {
		           alert(data);
		           getAllReport();
		           closed();
		        
		        }
		        })
			
		}else{
			alert("上传文件不能为空！");
		}
	}else if(id==2){
		$("#uploadForm").attr("action","/audit/asAssessRetification/upload.do")
		if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
			$("#uploadForm").ajaxSubmit({
		        success: function (data) {
		           alert(data);
		           getAllReport();
		           closed();
		        
		        }
		        })
			
		}else{
			alert("上传文件不能为空！");
		}
	}*/
	/*var table ="<form action='' method='post' enctype='multipart/form-data' id='uploadForm'>" +
			"<input type='file' id ='uploadFrom' style='margin-top:20%'/></form>";
	$.ligerDialog.open({
		height : 300,
		width : 450,
		top : 20,
		title : '上传文件',
		content: table,
//		url : sContextPath + '/page/roleDataShow/addTask.htm',
		showMax : false,
		showToggle : true,
		showMin : false,
		isResize : true,
		slide : false,
		isHidden:false,
		buttons:[{text:"确认",
			onclick:function(item,dialog){
			
			
			
		}},{
			text:'取消',
			onclick:function(item, dialog){
				dialog.close();
			}
		}]
	});*/
}

	//提交材料的上传按钮
	function doSubmitData(){
		if(taskInfo.length==0||taskInfo[0].self_assess_zt==2){
			$("#submitFile").click();
		}else{
			alert("自评人已提交审核！");
		}
	}

	//上传材料
	function uploadData(){
		var specialtyId = $("#specialtyId").val();//专业id
		$("#uploadDataForm").attr("action","/audit/asAssessReport/uploadData.do");
		if($("#submitFile").val()!=null && $("#submitFile").val()!=""){
			$("#uploadDataForm").ajaxSubmit({
				data:{
					"SYSID":sysid,
					"SPECIALTYID":specialtyId,
					"year":dateYear
				},
		        success: function (data) {
		           alert(data);
		           getAllReport();
		           load();
		           closed();
		        }
		    })
		}else{
			alert("上传文件不能为空！");
		}
	}

function dateFormat(date){
	var dates = date.split("/");
	var str = "";
	$.each(dates,function(index,dom){
		str += dom + "-";
	});
	str = str.substring(0, str.length-1);
	return str;
}



//function uploadReport(){
//// $("#loading1").show();
//$("#uploadForm").attr("action","/audit/asAssessRetification/uploadRequest.do")
//if($("#uploadFile").val()!=null && $("#uploadFile").val()!=""){
//	$("#uploadForm").ajaxSubmit({
//        success: function (data) {
//           alert(data);
//           getAllReport();
//           $("#downHide").hide();
//        }
//    })
//}else{
//	alert("上传文件不能为空！");
//}
//}

//function uploadSupport(){
////$("#loading1").show();
//$("#downHide").show();
//$("#uploadForm").attr("action","/audit/asAssessRetification/uploadSupport.do")
//if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
//	$("#uploadForm").ajaxSubmit({
//		data:{
//			"reportId":reportId
//		},
//       success: function (data) {
//          alert(data);
//          getAllReport();
//          $("#downHide").hide();
//       }
//       })
//	
//}else{
//	alert("上传文件不能为空！");
//}
////$("#loading1").hide();
//}
//function closed(){
//$("#downHide").hide();
//}

	//保存内容
	function saveContent(id){
		if(syscore==null || syscore==undefined || syscore==""){
			syscore = 0;
		}
		
		var specialtyId = $("#specialtyId").val();
		var grade = $("#grade").val();
		var score = $("#score").val();
		var problem = $("#problem").val();
		var content = UE.getEditor('myEditor').getContent();
		if(taskInfo.length==0||taskInfo[0].self_assess_zt==2){
//			alert(syscore);
			//判断等级和分数文本框
			if(!($("#grade").val()=="A" || $("#grade").val()=="a" || $("#grade").val()=="C" || $("#grade").val()=="c" ||
				$("#grade").val()=="B" || $("#grade").val()=="b" || $("#grade").val()=="D" || $("#grade").val()=="d")){
				alert("请输入正确的自评等级！只能输入A或C等级"); 
			}else if(isNaN(parseInt($("#score").val()))){
				alert("分数只能填数字！");
			}else if(parseInt($("#score").val())>parseInt(syscore)){
				alert("输入分数必须小于总分值！");
			}else{
				if(id==0){
					if($("#contentUpload tr").length>1){
						$.ajax({
							url:sContentPath+"/asAssessReport/saveReport.do",
							type:'POST',
							async:false,
							data:{
								"sysId":sysid,
								"enterContent":content,
								"specialtyId":specialtyId,
								"id":id,
								"dateYear":dateYear,
								"grade":grade,
								"score":score,
								"problem":problem
							},
							success:function(data){
								alert(data);
								getAllReport();
							}
						})
					}else{
						if(content!=null && content!=undefined && content!=""){
							$.ajax({
								url:sContentPath+"/asAssessReport/saveReport.do",
								type:'POST',
								async:false,
								data:{
									"sysId":sysid,
									"enterContent":content,
									"specialtyId":specialtyId,
									"id":id,
									"dateYear":dateYear,
									"grade":grade,
									"score":score,
									"problem":problem
								},
								success:function(data){
									alert(data);
									getAllReport();
								}
							})
						}else{
							alert("文本框不能为空!");
						}
					}
				}else{
					if($("#contentUpload tr").length>1){
						$.ajax({
							url:sContentPath+"/asAssessReport/saveReport.do",
							type:'POST',
							async:false,
							data:{
								"sysId":sysid,
								"enterContent":content,
								"specialtyId":specialtyId,
								"id":id,
								"dateYear":dateYear,
								"grade":grade,
								"score":score,
								"problem":problem
							},
							success:function(data){
								alert("修改成功");
								getAllReport();
							}
						})
					}else{
						if(content!=null&&content!=undefined&&content!=""){
							$.ajax({
								url:sContentPath+"/asAssessReport/saveReport.do",
								type:'POST',
								async:false,
								data:{
									"sysId":sysid,
									"enterContent":content,
									"specialtyId":specialtyId,
									"id":id,
									"dateYear":dateYear,
									"grade":grade,
									"score":score,
									"problem":problem
								},
								success:function(data){
									alert("修改成功");
									getAllReport();
								}
							})
						}else{
							alert("文本框不能为空！");
						}
					}
				}
			}
		}else{
			alert("自评人已提交审核");
		
		}
		
	}

	//下载专业建设报告内容表信息
	function downloadReport(id){
		$.ajax({
			url: sContentPath+"/asAssessReport/downloadReport.do",
			type:'POST',
			data:{
				"id":id
			},
			dataType:'json',
			success:function(data){
				alert(data);
			}
		});
	}
	
	//提交自评报告
	function submitContent(id){
		var specialtyId = $("#specialtyId").val();
		$.ajax({
			url: sContentPath+"/asAssessReport/submitAssessmentTask.do",
			type:'POST',
			data:{
				"tYear":dateYear,
				"specialtyId":specialtyId
			},
			dataType:'json',
			success:function(data){
				alert(data);
			}
		});
	}
	
	
	//文本框失焦聚焦事件
	function checkGrade(){
		if(!($("#grade").val()=="A" || $("#grade").val()=="a" || $("#grade").val()=="C" || $("#grade").val()=="c" ||
				$("#grade").val()=="B" || $("#grade").val()=="b" || $("#grade").val()=="D" || $("#grade").val()=="d")){
			alert("请输入正确的自评等级！只能输入A或C等级");
		}
	}
	
	function checkScore(){//syscore
		if(syscore==null || syscore==undefined || syscore==""){
			syscore = 0;
		}
		
		var score = $("#score").val();
		
		if(isNaN(parseInt(score))){
			alert("分数只能填数字！");
		}
		
		if(parseInt(score) > parseInt(syscore)){
			alert("输入分数必须小于总分值！");
		}
	}
	
	
	
	
	
	
	
	
