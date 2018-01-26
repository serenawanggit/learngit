var request =GetRequest();
var sysid=request.sysid;
var specialtyId=request.specialtyId;
var syear=request.syear;
var type = request.type;

$(function(){
	
	//提交数据表信息
	$.ajax({
		url: "/audit/asAssessReport/findTemplateAndTaskInfo.do",
		type:'POST',
		async:false,
		data:{
			"id":sysid,
			"dateYear":syear,
			"type":type
		},
		dataType:'json',
		success:function(data){
			var str = "";
			$.each(data,function(i,dom){
				if(i==0){
					str += "<li id='fir'  style='width:100%'><a class='li' id='ss' href='javascript:void(0);' onclick=\"lookSystem('"+dom.TEMPLATEID+"');\" >" +
					"<div class='fir_div'>"+dom.TABLE_NAME+"</div></a></li>";
				}else{
					str += "<li id='fir'  style='width:100%'><a class='li' href='javascript:void(0);' onclick=\"lookSystem('"+dom.TEMPLATEID+"');\" >" +
							"<div class='fir_div'>"+dom.TABLE_NAME+"</div></a></li>";
				}
			})
			
			$("#tab1").html(str);
			
			if(data!=null && data!="" && data!=undefined){
				lookSystem(data[0].TEMPLATEID);
			}else{
//				lookSystem(22);
				alert("没有可以查看的数据表！");
			}
		}
	});
})

//查看校级数据表信息
	function lookSystem(id){
		var headData = [];
		//查询表头
		$.ajax({
			url: "/audit/asAssessReport/findFieldByTemplateid.do",
			async:false,
			type:'POST',
			data:{
				"id":id
			},
			dataType:'json',
			success:function(data){
				headData = data;
			}
		});
		var tableData_1 = null;
		//查询表格数据
		$.ajax({
			url: "/audit/asAssessReport/findTableData.do",
			async:false,
			type:'POST',
			data:{
				"id":id,
				"year":syear
			},
			dataType:'json',
			success:function(data){
				tableData_1 = data;
				
				//表头
				var str = "<tr style='height:40px;background:#64A4D1;text-align:center;'>";
				$.each(headData,function(i,dom){
					if(dom.FIELD_ENAME != "ERROR_MSG" && dom.FIELD_ENAME != "ID"){
						str += "<td><div style='padding:15px;'>" + dom.FIELD_CNAME + "</div></td>";
					}
				})
				str += "</tr>";
				
//				var str = "";
				$.each(data,function(i,dom){
					str += "<tr>";
					$.each(dom,function(index,doc){
						str += "<td><div style='padding:10px;'>" + doc + "</div></td>";
					})
					str += "</tr>";
				})
				
				
				$("#school_tab").html(str);
			}
		});
		
//		if(tableData_1==null || tableData_1.length<=0){
//			/*alert("该自评人没有数据可以查看！");*/
//
//			//获取窗体的宽度
//			var winWidth = window.innerWidth;
//			var leftWidth = winWidth/2-580;
//			$.ligerDialog.open({
//				target : $("#downHide"),
//				height : 400,
//				width : 870,
//				top : 50,
//				left : leftWidth,
//				title : '查看校级数据',
//				showMax : false,
//				showToggle : true,
//				showMin : false,
//				isResize : true,
//				slide : false,
//				isHidden:false,
//	//			fixedType:'se',
//				buttons:[{text:'关闭',
//					onclick:function(item, dialog){
//						dialog.close();
//					}
//				}]
//			});
//		
//		}else{
//			//获取窗体的宽度
//			var winWidth = window.innerWidth;
//			var leftWidth = winWidth/2-580;
//			$.ligerDialog.open({
//				target : $("#downHide"),
//				height : 400,
//				width : 870,
//				top : 50,
//				left : leftWidth,
//				title : '查看校级数据',
//				showMax : false,
//				showToggle : true,
//				showMin : false,
//				isResize : true,
//				slide : false,
//				isHidden:false,
//	//			fixedType:'se',
//				buttons:[{text:'关闭',
//					onclick:function(item, dialog){
//						dialog.close();
//					}
//				}]
//			});
//		}
	}


function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
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