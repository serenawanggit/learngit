$(function(){
	validateLogin();
	//$("#loading1").show();
	load();
	getFiles();
	//alert("我是page0.js");
	//$("#loading1").hide();
})	
var  sysid;
var is_rz;
var specialtyId;
var dateYear;
var sContentPath = getContentPath();
var taskInfo;
var fileInfo;
var taskInfos;
var zylxId;

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
		url: sContentPath+"/asAssessReport/getAllData.do",
		async:false,
		type:'POST',
		data:{
			"specialtyId":specialtyId
		},
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				$("#assess_self").html("提交报告时间:"+datas[0].self_assessment_date);
				$("#specialtys").html(datas[0].specialty_name);
				is_rz = datas[0].is_rz
			}
		}
	});
	$("#stateIn").html("");
	$.ajax({
		url:sContentPath+"/asAssessReport/selectTask.do",
		type:'POST',
		async:false,
		dataType:'json',
		data:{
			"itemId":1,
			"dateYear":dateYear,
			"specialtyId":specialtyId
		},success:function(data){
			var datas = eval("("+data+")");
			taskInfo = datas;
			if(taskInfo!=null&&taskInfo.length>0){
				if(taskInfo[0].audit_zt!=null&&taskInfo[0].audit_zt==1){
					$("#stateIn").html("状态:校级审核已通过！")
				}
			}
		}
	});
	
	$.ajax({
		url:sContentPath+"/asAssessReport/selectTask.do",
		type:'POST',
		async:false,
		dataType:'json',
		data:{
			"itemId":2,
			"dateYear":dateYear,
			"specialtyId":specialtyId
		},success:function(data){
			var datas = eval("("+data+")");
			taskInfos = datas;
			if($("#sysId").val()==0){
				$("#stateIn").html("");
			if(taskInfos!=null&&taskInfos.length>0){
				if(taskInfos[0].audit_zt!=null&&taskInfos[0].audit_zt==1){
						$("#stateIn").html("状态:校级审核已通过！")
					}
				}
			}
		}
	});
}

function upload(){
	$("#down").hide();
	$("#downHide").show();
}
	
	function submitFile(){
		 dateYear = $("#dateYear").val();
		
			// $("#loading1").show();
			 if(fileInfo!=null&&fileInfo.length==0){
				 if(sysid!=0){
					 if(is_rz==2){
						 if(taskInfos.length==0||taskInfos[0].self_assess_zt==2){
								$("#uploadForm").attr("action","/audit/asAssessRetification/upload.do")
								if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
									$("#uploadForm").ajaxSubmit({
										data:{
											"rYear":dateYear,
											"specialtyId":specialtyId
										},
								        success: function (data) {
								           alert("上传成功");
								           getFiles();
								           closed();
								       }
								        })
								}else{
									alert("上传文件不能为空！");
								}
							 }else{
								 alert("自评人已提交审核");
							 }
					 }else{
						 if(taskInfo.length==0||taskInfo[0].self_assess_zt==2){
								$("#uploadForm").attr("action","/audit/asAssessRetification/upload.do")
								if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
									$("#uploadForm").ajaxSubmit({
										data:{
											"rYear":dateYear,
											"specialtyId":specialtyId
										},
								        success: function (data) {
								           alert("上传成功");
								           getFiles();
								           closed();
								       }
								        })
									
								}else{
									alert("上传文件不能为空！");
								}
							 }else{
								 alert("自评人已提交审核");
							 }
					 }
					 
					}else{
						 if(taskInfos.length==0||taskInfos[0].self_assess_zt==2){
						$("#uploadForm").attr("action","/audit/asAssessReport/uploadAllReports.do")
						if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
							$("#uploadForm").ajaxSubmit({
								data:{
									"dateYear":dateYear,
									"specialtyId":specialtyId
								},
						        success: function (data) {
						           alert(data);
						           getFiles();
						           closed();
						        }
						        })
							
						}else{
							alert("上传文件不能为空！");
						}
						
					
					}else{
						 alert("自评人已提交审核");
					 }
					}
			
			 //$("#loading1").hide();
		
	} else{
		 alert("最多只能上传一个文件");
	 }
	}
	function closed(){
		$("#downHide").hide();
		$("#down").show();
			
	}
	var indexss=0;
	function getFiles(){
		 specialtyId = $("#specialtyId").val();
		 dateYear = $("#dateYear").val();
		 sysid = $("#sysId").val();
		
		 indexss++;
		if(sysid!=0){
			$.ajax({
				url: sContentPath+ "/asAssessRetification/getAllFiles.do",
				type:'POST',
				async:false,
				data:{
					"specialtyId":specialtyId,
					"rYear":dateYear			
				},
				dataType:'json',
				success:function(data){
					var datas = eval("("+data+")");
					fileInfo = datas;
					var htmls = "<tr ><td colspan='3'>文件</td></tr>";
						if(datas!=null&&datas!=""&&datas!=undefined){
							parent.document.getElementById("jugeSave").value = 1;
							if(datas[0].blackContent!=null&&datas[0].blackContent!=""&&datas[0].blackContent!=undefined){
								$("#returnAssess").html("<span style='color:red;font-size:18px;margin-top:5%;'>审核意见:</span><br/>"+datas[0].blackContent)
							}
							for ( var i = 0; i < datas.length; i++) {
								if(i%2==1){
									htmls+="<tr style='background:#F8F8F8'><td>"+(i+1)+"."+datas[i].filesName+"</td>" ;
								}else{
									htmls+="<tr ><td>"+(i+1)+"."+datas[i].filesName+"</td>" ;
								}
							
								htmls+=	"<td>"+datas[i].uploadTime+"</td>" +
									"<td><a href='javascript:void(0)' onclick='deleteFiles("+datas[i].id+")'><img src='page/zenith/staticPage/img/delete.png'></a>" +
											"<a href='/audit/asAssessRetification/downRectification.do?id="+datas[i].id+"' ><img src='page/zenith/staticPage/img/download.png' style='margin-left:10px;'></a></td></tr>"
							}
					
							
						}else{
							parent.document.getElementById("jugeSave").value = 0;
						}
						$("#showFiles").html("");
						$("#showFiles").html(htmls)
				}
			});
		}else{
			$.ajax({
				url: sContentPath+ "/asAssessReport/getAllReports.do",
				type:'POST',
				async:false,
				data:{
					"specialtyId":specialtyId,
					"dateYear":dateYear			
				},
				dataType:'json',
				success:function(data){
					var datas = eval("("+data+")");
					fileInfo = datas;
					if(datas!=null&&datas!=""&&datas!=undefined){
						parent.document.getElementById("jugeSave").value = 1;
					}else{
						parent.document.getElementById("jugeSave").value = 0;
					}
					var htmls = "<tr ><td colspan='3'>文件</td></tr>";
						
					for ( var i = 0; i < datas.length; i++) {
						if(i%2==1){
							htmls+="<tr style='background:#F8F8F8'><td>"+(i+1)+"."+datas[i].upload_files+"</td>" ;
						}else{
							htmls+="<tr ><td>"+(i+1)+"."+datas[i].upload_files+"</td>" ;
						}
					
						htmls+=	"<td>"+datas[i].upload_time+"</td>" +
							"<td><a href='javascript:void(0)' onclick='deleteFiles("+datas[i].id+")'><img src='page/zenith/staticPage/img/delete.png'></a>" +
									"<a href='/audit/asAssessReport/downAllReport.do?id="+datas[i].id+"'><img src='page/zenith/staticPage/img/download.png' style='margin-left:10px;'></a></td></tr>"
					}
					$("#showFiles").html("");
					$("#showFiles").html(htmls);
					
				}
			});
		}
	}
	
	function deleteFiles(id){
		if(confirm("确认要删除吗")){
			if(sysid!=0){
				if(taskInfo.length==0||taskInfo[0].self_assess_zt==2){
				$.ajax({
					url: sContentPath+ "/asAssessRetification/deleteFile.do",
					type:'POST',
					async:false,
					data:{
						'id':id
					},
					success:function(data){
						alert("删除成功");
						getFiles();
					},error:function(){
						alert("error");
					}
				})
				}else{
					alert("自评人已提交审核");
				}
			}else{
				if(taskInfos.length==0||taskInfos[0].self_assess_zt==2){
				$.ajax({
					url: sContentPath+ "/asAssessReport/deletetAllReports.do",
					type:'POST',
					async:false,
					data:{
						'id':id
					},
					success:function(data){
						alert("删除成功");
						getFiles();
					},error:function(){
						alert("error");
					}
				})
				}else{
					alert("自评人已提交审核");
				}
			}
		}
	}
	
	