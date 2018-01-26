/**
 * @author mooc  
 * @content>自我评估方案树
 */
//初始化树状
var setting = {
	view : {
		showIcon : true
	},
	check : {
		enable : false
	},
	edit: {
		drag: {
			isCopy: true,
			isMove: true
		}
	},
	data : {
		simpleData : {
			enable : true,
			idKey: "id",
			pIdKey: "pId",
			rootPId: 0

		}
	},
	callback : {
		onClick : zTreeClick
	}
};
//预览树状配置
var setting2 = {
		view : {
			showIcon : true
		},
		check : {
			enable : false
		},
		data : {
			simpleData : {
				enable : true
			}
		},
		callback : {
			onClick : clickObj
		}
};

var treeNodes;
var zTree = $.fn.zTree.getZTreeObj("treeDemo1");
function reset(){
	CKEDITOR.instances.TextArea1.setData(' ');
}


$(function as(){
	
	
});
//预览点击节点事件
function clickObj(event, treeId, treeNode){
	var url = "/TQCC" + "/supportFile/filemanage_findSupportFile.htm?id="+treeNode.id;
	$.ajax({
		async : false,
		url:url,
		type:'get',
		dataType:"json",
		error:function(){
			alert('获取节点信息失败，程序本身原因');
		},
		success:function(data){
			$("#showarea",parent.document).html("");
			var o = eval('(' + data +')');
			var asccurl = "/TQCC" + "asCkeditorContent/findascc.do?eid=" + o.id;
			$.ajax({
				async:false,
				url:asccurl,
				dataType:"json",
				type:'POST',
				error:function(){
					alert("获取ckeditor内容失败，程序本身原因");
				},
				success:function(data){
					if(data == null || data.length == 0 ){
						return;
					}
					
					var ascc = eval('('+data+')');
					if(ascc.content == null || ascc.content == undefined){
						$("#showarea",parent.document).html("");
					}else{
						$("#showarea",parent.document).html(ascc.content);
					}
				}
			});
		}
	});
}

//初始化页面点击事件
function zTreeClick(event, treeId, treeNode){
	 treeNodeId=treeNode.id;
	var url = "/TQCC" + "/supportFile/filemanage_findSupportFile.htm?id="+treeNode.id;
	$.ajax({
		url:url,
		dataType:"json",
		type:'post',
		error:function(){
			alert('获取节点信息失败，程序本身原因');
		},
		success:function(data){
			if(data == null || data.length == 0 ){
				return;
			}
				$("#rightbar").show();
				
				showMaterials(1,treeNodeId);
				$("#tableEnd").show();
//				alert($("#treetableId").val());
			
			
//			alert(data)
//			var o = eval('(' + data +')');
//			alert(o)
//			var asccurl = "/TQCC" + "asCkeditorContent/findascc.do?eid=" + o.id;
	/*		$.ajax({
				async:false,
				url:asccurl,
				dataType:"json",
				type:'POST',
				error:function(){
					alert("获取ckeditor内容失败，程序本身原因");
				},
				success:function(data){
					if(data == null || data.length == 0 ){
						return;
					}
					var ascc = eval('('+data+')');
					var content = ascc.content;
					if(content == null || undefined == content){
						editor.html("");
						document.getElementById("suckeditor").href="javascript:saveckeditor()";
					}else{
						editor.html(content);
						document.getElementById("suckeditor").href="javascript:updateckeditor()";
					}
					
				}
			});*/
		}
	});
	
}

//初始化树状
function showEstimateZtree() {
	$("#rightbar").show();
	
	var url = "/TQCC" + "/supportFile/filemanage_showFileTree.htm";
	$.ajax({
		async : false,
		type : 'get',
		url : url,// 请求action地址
		dataType:"json",
		error : function() {// 返回错误
			alert('请求失败');
		},
		success : function(data) { // 成功
			// json串转换为json对象(这一步很重要)
			treeNodes = eval(data);
		}
	});
	$.fn.zTree.init($("#treeDemo1"), setting, treeNodes);
}

function nocheckNode(e) {
	var zTree = $.fn.zTree.getZTreeObj("treeDemo1"), nocheck = e.data.nocheck, nodes = zTree
			.getSelectedNodes();
	if (nodes.length == 0) {
		alert("请选择");
	}

	for ( var i = 0, l = nodes.length; i < l; i++) {
		nodes[i].nocheck = nocheck;
		zTree.updateNode(nodes[i]);
	}
}

// 增加新节点
function addjd() {
	var nodes = $.fn.zTree.getZTreeObj("treeDemo1").getSelectedNodes();
	var str = "";
	$("#md", parent.document).empty();
	if (nodes.length == 0) {
		str += "<table style='width:50%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>警告</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../images/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:100px;font-size:12px;text-align:center;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "请先选择一个节点";
		str += "</td></tr>";
		$("#md", parent.document).css("top", "179px");
		$("#md", parent.document).css("left", "314px");
	} else {

		str += "<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>新增</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../images/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:150px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "<div style='width:100%;height:75%;padding-top:10px;padding-left:10px;'>";
		str += "<div style='width:10%;height:100%;float:left'>";
		str += "<span style='float:right; line-height:106px;font-size:12px;'>名称:&nbsp;&nbsp;</span>";
		str += "</div>";
		str += "<div style='width:70%;height:100%;float:left'>";
		str += "<input onclick='window.clickjdname();return false';type='text' id='jdname' style='margin-top:41px;border:1px #BEBEBE solid;width:90%;height:28px;font-size:12px;'/>";
		str += "</div>";
		str += "<div style='width:20%;height:100%;float:left'>";
		str += "<span id='jdnameerror' style='line-height:28px;font-size:12px;color:red;display:none'>名称不能空</span>";
		str += "</div>";
		str += "</div>";
		str += "<div style='width:100%;height:20%;font-size:12px;padding-left:125px;padding-top:5px;' class='buttom_tips01'>";
		str += "<a onclick='window.savejd("+nodes[0].id+","+nodes[0].level+");return false'; href = '#' style = 'text-decoration: none; margin-right:20px;text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>保存</a>";
		str += "<a href = 'javascript:closeYS()' style = 'text-decoration: none; text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>取消</a>";
		str += "</div></td></tr>";
		$("#md", parent.document).css("top", "165px");
		$("#md", parent.document).css("left", "232px");
	}
	str += "</table>";
	$("#md", parent.document).css("width", "400px");
	$("#md", parent.document).append(str);
	$("body", parent.document).append("<div id='mask'></div>");
	$("#mask", parent.document).addClass("mask").fadeIn("slow");
	$("#md", parent.document).fadeIn("slow");
}

function clickjdname(){
	$("#jdnameerror",parent.document).hide();
}

function clickjdms(){
	$("#jdmserror",parent.document).hide();
}

function clickjdname_u(){
	$("#jdnameerror_u",parent.document).hide();
}

function clickjdms_u(){
	$("#jdmserror_u",parent.document).hide();
}

//保存新节点
function savejd(id,level){
	var jdname = $("#jdname",parent.document).val();
	if(jdname.length == 0){
		$("#jdnameerror",parent.document).show();
		return;
	}
	var str = "level="+level+"&parent="+id+"&name="+jdname+"&isenabled=1";
	var url = "/TQCC" + "/supportFile/filemanage_saveSupportFile.htm";
		 $.ajax({
			 url:url,
			 async : false,
			 type : 'post',
			 data : str,
			 error:function(){
			 	alert("请求失败");
			 },
			 success:function(msg){
				 
			 	showEstimateZtree();
			 	parent.closeYS();
			 }
			});
}
// dialog更新节点
function editjd() {
	var nodes = $.fn.zTree.getZTreeObj("treeDemo1").getSelectedNodes();
	var str = "";
	$("#md", parent.document).empty();
	if (nodes.length == 0) {
		str += "<table style='width:50%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>警告</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../images/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:100px;font-size:12px;text-align:center;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "请先选择一个节点";
		str += "</td></tr>";
		$("#md", parent.document).css("top", "179px");
		$("#md", parent.document).css("left", "314px");
	} else {
		str += "<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>修改</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../images/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:150px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "<div style='width:100%;height:75%;padding-top:10px;padding-left:10px;'>";
		str += "<div style='width:10%;height:100%;float:left'>";
		str += "<span style='float:right; line-height:106px;font-size:12px;'>名称:&nbsp;&nbsp;</span>";
		str += "</div>";
		str += "<div style='width:70%;height:100%;float:left'>";
		str += "<input onclick='window.clickjdname_u();return false'; value='"+nodes[0].name+"' type='text' id='jdname_u' style='margin-top:41px;border:1px #BEBEBE solid;width:90%;height:28px;font-size:12px;'/>";
		str += "</div>";
		str += "<div style='width:20%;height:100%;float:left'>";
		str += "<span id='jdnameerror_u' style='line-height:28px;font-size:12px;color:red;display:none'>名称不能空</span>";
		str += "</div>";
		str += "</div>";
		str += "<div style='width:100%;height:20%;font-size:12px;padding-left:173px;padding-top:5px;' class='buttom_tips01'>";
		str += "<a onclick='window.updatejd("+nodes[0].id+","+nodes[0].level+","+nodes[0].pId+");return false'; href = '#' style = 'text-decoration: none; margin-right:20px;text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>保存</a>";
		str += "<a href = 'javascript:closeYS()' style = 'text-decoration: none; text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>取消</a>";
		str += "</div></td></tr>";
		$("#md", parent.document).css("top", "165px");
		$("#md", parent.document).css("left", "232px");
	}
	str += "</table>";
	$("#md", parent.document).css("width", "500px");
	$("#md", parent.document).append(str);
	$("body", parent.document).append("<div id='mask'></div>");
	$("#mask", parent.document).addClass("mask").fadeIn("slow");
	$("#md", parent.document).fadeIn("slow");
}

//更新节点数据
function updatejd(id,level,pId){
	if(pId == null){
		pId = 0;
	}
	var jdname_u = $("#jdname_u",parent.document).val();
	if(jdname_u.length == 0){
		$("#jdnameerror_u",parent.document).show();
		return;
	}
	var str = "id="+id+"&level="+level+"&parent="+pId+"&name="+jdname_u+"&isenabled=1";
	var url = "/TQCC" + "/supportFile/filemanage_updateSupportFile.htm";
		 $.ajax({
			 url:url,
			 async : false,
			 type : 'post',
			 data : str,
			 error:function(){
			 	alert("请求失败");
			 },
			 success:function(msg){
			 	showEstimateZtree();
			 	parent.closeYS();
			 }
			});
		 	

}

//dialog删除节点
function deletejd(){
	var nodes = $.fn.zTree.getZTreeObj("treeDemo1").getSelectedNodes();
	var str = "";
	$("#md", parent.document).empty();
	if (nodes.length == 0) {
		str += "<table style='width:50%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>警告</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../images/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:100px;font-size:12px;text-align:center;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "请先选择一个节点";
		str += "</td></tr>";
		$("#md", parent.document).css("top", "179px");
		$("#md", parent.document).css("left", "314px");
	}else{
		str += "<table style='width:50%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>警告</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../images/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:100px;font-size:12px;text-align:center;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "<div style='width:100%;height:25%;padding-top:10px;padding-left:10px;'>";
		str += "<label style='color:red'>确定要是删除吗</a>";
		str += "</div>";
		str += "<div style='width:100%;height:70%;font-size:12px;padding-left:15px;padding-top:15px;' class='buttom_tips01'>";
		str += "<a onclick='window.deletejd_action("+nodes[0].id+");return false'; href = '#' style = 'text-decoration: none; margin-right:77px;text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>确定</a>";
		str += "<a href = 'javascript:closeYS()' style = 'text-decoration: none; text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>取消</a>";
		str += "</div>";
		str += "</td></tr>";
		$("#md", parent.document).css("top", "165px");
		$("#md", parent.document).css("left", "232px");
	}
	str += "</table>";
	$("#md", parent.document).css("width", "500px");
	$("#md", parent.document).append(str);
	$("body", parent.document).append("<div id='mask'></div>");
	$("#mask", parent.document).addClass("mask").fadeIn("slow");
	$("#md", parent.document).fadeIn("slow");
}



//删除节点
function deletejd_action(id){
	var url = "/TQCC" + "/supportFile/filemanage_deleteSupportFile.htm?id=" + id;
	$.get(url,function(data){
		if(data == 1){
			parent.closeYS();
			showEstimateZtree();
		}else{
			
			alert("请先删除材料！");
		}
		if(data == 0){
			var str = "";
			$("#md", parent.document).empty();
			str += "<table style='width:50%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
			str += "<tr style='height:25px;background-image:url(../images/showtitlebk800.png);'>";
			str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>警告</span></td>";
			str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
			str += "<img src='../images/alertclose.png' border='0' style='vertical-align:middle;'></a>";
			str += "</td></tr>";
			str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:100px;font-size:12px;text-align:center;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
			str += "删除失败";
			str += "</td></tr>";
			$("#md", parent.document).css("top", "165px");
			$("#md", parent.document).css("left", "550px");
			str += "</table>";
			$("#md", parent.document).css("width", "500px");
			$("#md", parent.document).append(str);
			$("body", parent.document).append("<div id='mask'></div>");
			$("#mask", parent.document).addClass("mask").fadeIn("slow");
			$("#md", parent.document).fadeIn("slow");
			
		}
	});
	
}
//-------------------------------------上移下移----------------start
function tdShift(obj){
	var treeObj = $.fn.zTree.getZTreeObj("treeDemo1");

	var nodes = treeObj.getSelectedNodes();
	var str = "";
	$("#md", parent.document).empty();
	if (nodes.length == 0) {
		str += "<table style='width:50%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>警告</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../images/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:100px;font-size:12px;text-align:center;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "请先选择一个节点";
		str += "</td></tr>";
		$("#md", parent.document).css("top", "80px");
		$("#md", parent.document).css("left", "550px");
		
		str += "</table>";
		$("#md", parent.document).css("width", "400px");
		$("#md", parent.document).append(str);
		$("body", parent.document).append("<div id='mask'></div>");
		$("#mask", parent.document).addClass("mask").fadeIn("slow");
		$("#md", parent.document).fadeIn("slow");
	}else{
		//判断是上移还是下移
		if (obj === "s") {
			var strs = nodes[0].getPreNode();
			if (strs == null) {
				alert("已经是最前面的节点");
				return;
			}
			var fhz = treeObj.moveNode(strs, nodes[0], "prev");
		}else {
			var strs = nodes[0].getNextNode();
			if (strs == null) {
				alert("已经是最下面的节点");
				return;
			}
			var fhz = treeObj.moveNode(strs, nodes[0], "next");
		}
	}
}
//-------------------------------------上移下移----------------end

//-------------------------------------左移又移----------------start
function lrShift(obj){
	var treeObj = $.fn.zTree.getZTreeObj("treeDemo1");

	var nodes = treeObj.getSelectedNodes();
	var str = "";
	$("#md", parent.document).empty();
	if (nodes.length == 0) {
		str += "<table style='width:50%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>警告</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../images/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:100px;font-size:12px;text-align:center;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "请先选择一个节点";
		str += "</td></tr>";
		$("#md", parent.document).css("top", "80px");
		$("#md", parent.document).css("left", "550px");
		
		str += "</table>";
		$("#md", parent.document).css("width", "400px");
		$("#md", parent.document).append(str);
		$("body", parent.document).append("<div id='mask'></div>");
		$("#mask", parent.document).addClass("mask").fadeIn("slow");
		$("#md", parent.document).fadeIn("slow");
	}else{
		//判断是左还是右移
		if (obj === "l") {
			var strs = nodes[0].getParentNode();
			if (strs == null) {
				alert("已经是根节点");
				return;
			}
			var fhz = treeObj.moveNode(strs, nodes[0], "prev");
		}else {
			var strs = nodes[0].getNextNode();
			if (strs == null) {
				alert("已经是最下面的节点");
				return;
			}
			
			var fhz = treeObj.moveNode(strs, nodes[0], "inner");
		}
	}
}

//-------------------------------------左移又移----------------end

$(function() {
	//初始化树状数据
	showEstimateZtree();
	var jdname = $("#jdname",parent.document);
	var jdms = $("#jdms",parent.document);
});

