$(function(){
	initIF();
	initBJ();
});

//初始化条件
function initIF(){
	validateLogin();
	$.ajaxSetup({ cache: false });
	var mid = parent.menuID;
	var mName = parent.menuLable;
	$("#topLable").html("评估方案设计 >> "+mName);
	var url = "/audit/designController/findplan.do?mid="+mid;
	$.ajax( {  
        type : "get",  
        url : url,  
        dataType:"json", 
        async:false,
        success : function(msg) { 
			var json = eval(msg);
			
			if (json == null) {
				return;
			}
			$("#planTB").empty();
			var tbStr = "";
        	for ( var i = 0; i < json.length; i++) {
				tbStr +="<tr><td colspan='2'><hr class='hr1'></td></tr>";
				tbStr +="<tr>"+
							"<td style='width: 80%'>"+
							"<table cellpadding='0' cellspacing='0' style='width:100%;margin:5px 0px 5px 0px;border:#DADADA 0px solid;height:60px;'>"+
								"<tr>"+
									"<td style='height:30px;'>"+
									"<span style='font-size:12px;display:inline-block;margin-left:2px;'>"+json[i].asplan.no+json[i].asplan.name+"</span>"+
									"</td>"+
									"<td style='float: center;' width='20%;'>"+
									"</td>"+
									"<td style='float: right;line-height: 30px;'width='110px;'>"+
									"<a href='javascript:void(0)' onclick='clickSave("+json[i].asplan.id+")' style='font-size:12px;display:inline-block;margin-right: 10px;'>保存</a>"+
									"<a href='javascript:void(0);' id='ysjs"+json[i].asplan.no+"' onclick='clickYSJS(&quot;"+json[i].asplan.name+"&quot; , &quot;"+json[i].asplan.description+"&quot;);' style='font-size:12px;display:inline-block;'>要素解释</a>"+
									"<div id='ysjsDiv"+json[i].asplan.no+"' class='ysjs' > "+json[i].asplan.description+
									"</div>"+
									"</td>"+
								"</tr>"+
								"<tr>"+
									"<td colspan='3' style='height:102px;'>" +
									"<input type='hidden' id='pid"+json[i].asplan.id+"' value='"+json[i].asplan.pid+"'/>"+
/* --------------编辑器 ---------------*/	"<textarea class='ckeditor' name='content' id='content"+json[i].asplan.id+"' style='padding:5px;font-size:12px;height: 100%;width: 100%;resize:none;border:#DADADA 1px solid;'>"+json[i].asplan.content+"</textarea>"+
									"</td>"+
								"</tr>"+
							"</table>"+
						"</td>"+
						"<td>"+
							"<table cellpadding='0' cellspacing='0' style='width:182px;margin:5px 0px 5px 0px;border:#DADADA 0px solid;height:60px;margin-left: 20px;'>"+
								"<tr>"+
									"<td style='height:30px;'>"+
									"<span style='font-size:12px;display:inline-block;margin-left:2px;'>考察重点</span>"+
									"</td>"+
								"</tr>"+
								"<tr>"+
									"<td style='height:100px;font-size:12px;'>"+
									"<div style='overflow: auto;height: 100%;width: 100%;border:#DADADA 1px solid;padding-left: 10px;padding-top: 10px;'>";
									if (json[i].asplan.inspectpoints!=null) {
										for ( var ins = 0; ins < json[i].asplan.inspectpoints.length; ins++) {
											var insp = json[i].asplan.inspectpoints[ins];
											if (insp!=null && insp.id!=0) {
												tbStr +="<a onclick='showKCZD(&quot;"+json[i].asplan.inspectpoints[ins].icontent+"&quot;,&quot;"+insp.title+"&quot;);' href='javascript:void(0)'>"+insp.title+"</a><br/>";	
											}
										}
									}
							tbStr +="</div>"+
									"</td>"+
								"</tr>"+
							"</table>"+
						"</td>"+
						"</tr>";
//				<!-- 支撑材料上传 -->
				tbStr +="<tr>"+
						"	<td style='width: 80%;'>"+
						"	<table cellpadding='0' cellspacing='0' style='width:100%;margin:5px 0px 5px 0px;border:#DADADA 0px solid;'>"+
						"		<tr>"+
						"			<td style='height:30px;width: 92%;'>"+
						"			<span style='font-size:12px;display:inline-block;margin-left:2px;'>[支撑材料上传]</span>"+
						"			</td>"+
						"			<td style='float: right;line-height: 30px;font-size:12px' width='60px;'>"+
						"			<a href='javascript:void(0)' onclick='showUpload(&quot;"+json[i].asplan.id+"&quot;,&quot;"+json[i].asplan.name+"&quot;);'>上传文件</a>"+
						"			</td>"+
						"		</tr>"+
						"		<tr>"+
						"			<td colspan='2' >"+
						"				<div style='height: 100%;overflow: auto;'>"+
						"				<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>"+
						"					<tbody>"+
						"						<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>"+
						"							<td style='width:60px;height:30px;' align='center'>序号</td>"+
						"							<td style='width:160px;height:30px;' align='center'>文件名</td>"+
						"							<td style='width:100px;height:30px;' align='center'>上传人</td>"+
						"							<td style='width:160px;height:30px;' align='center'>上传时间</td>"+
						"							<td style='width:60px;height:30px;' align='center'>操作</td>"+
						"						</tr>";
						if (json[i].asplan.supportfiles!=null) {
							for ( var z = 0; z < json[i].asplan.supportfiles.length; z++) {
								var sup = json[i].asplan.supportfiles[z];
								if (sup.id==0 && sup.filename == null) {
									continue;
								}
								var now = new Date(sup.uploadtime); 
								var nowStr = now.format("yyyy-MM-dd hh:mm:ss"); 
								tbStr +="				<tr style='background-color:#FFF;'>"+
								"							<td style='width:60px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+sup.id+"</td>"+
								"							<td style='width:160px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+sup.filename+"</td>"+
								"							<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+sup.uploadername+"</td>"+
								"							<td style='width:160px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+nowStr+"</td>"+
								"							<td style='width:60px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+
								"								<a href='javascript:void(0)' onclick='delZCCL(&quot;"+sup.id+"&quot;)' >删除</a>"+
								"							</td>"+
								"						</tr>";
							}
						}
						
				tbStr +="					</tbody>"+
						"				</table>"+
						"				</div>"+
						"			</td>"+
						"		</tr>"+
						"	</table>";
				
						//[观测指标项]
						if (json[i].asplan.isrelate==1) {
						tbStr +="<table cellpadding='0' cellspacing='0' style='width:100%;margin:5px 0px 5px 0px;border:#DADADA 0px solid;'>"+
								"	<tr>"+
								"		<td style='height:30px;width: 92%;'>"+
								"		<span style='font-size:12px;display:inline-block;margin-left:2px;'>[观测指标项]</span>"+
								"		</td>"+
								"		<td style='float: right;line-height: 30px;font-size:12px' width='60px;'>"+
								"		<a href='javascript:void(0)' onclick='findPageManage(&quot;"+json[i].asplan.id+"&quot;,&quot;"+json[i].asplan.name+"&quot;);'>选择指标</a>"+
								"		</td>"+
								"	</tr>"+
								"	<tr>"+
								"		<td colspan='2' >"+
								"			<div style='height: 100%;overflow: auto;'>"+
								"			<table  id='pgczbTB"+json[i].asplan.id+"' style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>"+
								"				<tbody>"+
								"					<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>"+
								"						<td style='width:60px;height:30px;' align='center'>序号</td>"+
								"						<td style='width:160px;height:30px;' align='center'>指标名称</td>"+
								"					    <td style='width:120px;height:30px;' align='center'>指标所属分类</td>"+
								"						<td style='width:100px;height:30px;' align='center'>指标分类</td>"+
								"						<td style='width:60px;height:30px;' align='center'>操作</td>"+
								"					</tr>";
								if (json[i].asplan.viewQuota!=null) {
									for ( var v = 0; v < json[i].asplan.viewQuota.length; v++) {
										var vquo = json[i].asplan.viewQuota[v];
										if (vquo.vid==0 && vquo.qname == null) {
											continue;
										}
										
										tbStr +="				<tr style='background-color:#FFF;'>"+
										"							<td style='width:60px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquo.vid+"</td>"+
										"							<td style='width:150px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquo.qname+"</td>"+
										"							<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquo.qcategory+"</td>"+
										"							<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquo.qtype+"</td>"+
										"							<td style='width:60px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+
										"								<a href='javascript:void(0)' onclick='delGCZB("+vquo.vid+");' >删除</a>"+
										"							</td>"+
										"						</tr>";
									}
								}
								
						tbStr +="			</table>"+
								"			</div>"+
								"		</td>"+
								"	</tr>"+
								"</table>";
						}
						
			   tbStr += "</td>"+
						"<td>"+
						"	<table cellpadding='0' cellspacing='0' style='width:182px;margin:5px 0px 5px 0px;border:#DADADA 0px solid;margin-left: 20px;'>"+
						"		<tr>"+
						"			<td style='height:30px;'>"+
						"			<span style='font-size:12px;display:inline-block;margin-left:2px;'>[ 关联项目 ]</span>"+
						"			</td>"+
						"			<td style='height:30px;width:70px;'>"+
						"			<span style='font-size:12px;display:inline-block;margin-right:2px;'>" +
						"			<a href='javascript:void(0)' onclick='findPageRelevance(&quot;"+json[i].asplan.id+"&quot;,&quot;"+json[i].asplan.name+"&quot;,1);'>添加</a>&nbsp;&nbsp;&nbsp;&nbsp;"+
						"			<a href='javascript:void(0)' onclick='findPageRelevance(&quot;"+json[i].asplan.id+"&quot;,&quot;"+json[i].asplan.name+"&quot;,2);'>删除</a></span>"+
						"			</td>"+
						"		</tr>"+
						"		<tr>"+
						"			<td colspan='2' style='height:141px;border:#DADADA 0px solid;'>"+
						"			<div id='glxmDiv"+json[i].asplan.id+"' style='overflow: auto;height: 100%;width: 100%;resize:none;border:#DADADA 1px solid; font-size: 12px;padding: 5px;'>";
						if (json[i].asplan.relevanceItem!=null) {
							var rpArr = qcf(json[i].asplan.relevanceItem);
							var rvArr = json[i].asplan.relevanceItem;
							for ( var ri = 0; ri < rpArr.length; ri++) {
								var releva = rpArr[ri];
								if (releva!=null && releva.rpname!=null) {
									tbStr += releva.rpname+"<br/>";
									for ( var vi = 0; vi < rvArr.length; vi++) {
										if (rvArr[vi].rpid == rpArr[ri].rpid && rvArr[vi].rpid!=0) {
											tbStr += "  >"+rvArr[vi].rvqname+"<br/>";
										}
									}
								}
							}
						}
						
			   tbStr += "			</div>"+
						"			</td>"+
						"		</tr>"+
						"	</table>"+
						"</td>"+
						"</tr>";
				
			}//for 结束
        	$("#planTB").append(tbStr);
//        	initBJ();
		}
	});
			
};



//时间格式化函数

Date.prototype.format = function (format) {

  var o = {

      "M+": this.getMonth() + 1, //month

      "d+": this.getDate(), //day

      "h+": this.getHours(), //hour

      "m+": this.getMinutes(), //minute

      "s+": this.getSeconds(), //second

      "q+": Math.floor((this.getMonth() + 3) / 3), //quarter

      "S": this.getMilliseconds() //millisecond

  }

  if (/(y+)/.test(format)) format = format.replace(RegExp.$1,(this.getFullYear() + "").substr(4 - RegExp.$1.length));

  for (var k in o) if (new RegExp("(" + k + ")").test(format))format = format.replace(RegExp.$1,RegExp.$1.length == 1 ? o[k] :("00" + o[k]).substr(("" + o[k]).length));

  return format;

}


//关联项目去重复
function qcf(res) {
    var temp = new Array();
    res.sort();
    if (res!=null && res.length>1) {
    	for(var i = 0; i < res.length; i++) {
    		
    		if(res[i+1]!=null && res[i].rpid == res[i+1].rpid) {
    			continue;
    		}
    		temp[temp.length]=res[i];
    	}
    	return temp;
	}else {
		return res;
	}
}


//考察重点
function showKCZD(obj,tit){
	var title = "<span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>考察重点 【"+tit+"】</span>";
	parent.parent.tsk1(title,obj,'650','350');
	return;
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(../../images/showtitlebk800.png);'>" +
				"<td align='left'>" +
				"<span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>考察重点 【"+tit+"】</span>" +
				"</td>" +
				"<td align='right'>" +
				"<a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:12px;' onclick='closeYS();'>" +
				"<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>" +
				"</td>" +
				"</tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr>";
			shtml+="<td colspan='2' valign='top' align='center' style='background-color:#FFFFFF;height:260px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
				shtml+="<div id='ireportpdfdiv' style='width:100%;height:100%;font-size:12px;'>" +
				obj +
						"</div>";
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr><td colspan='2' style='height:20px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>&nbsp;</td></tr>";
	shtml+="</table>";
	
	$('#md', parent.document).empty();
	var md=$('#md', parent.document).append(shtml);
	$('#md', parent.document).css("width","550px");
	$('#md', parent.document).css("left","410px");
	$("body",parent.document).append("<div id='mask'></div>");
	$("#mask",parent.document).addClass("mask").fadeIn("slow");
	$("#md",parent.document).fadeIn("slow");
				
}

//要素解释
function clickYSJS(tit,obj){
//	var ysd = document.getElementById("ysjsDiv"+obj);
	var title = "<span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>要素解释 【"+tit+"】</span>";
	parent.parent.tsk1(title,obj,'650','350');
//	var disp = ysd.style.display;
//	if (disp=="none" || disp=="") {
//		ysd.style.display="block";
//	}else{
//		ysd.style.display="none";
//	}
}

//保存
function clickSave(pid){
	var content =  $("#content"+pid).val();
	var url = "/audit/designController/savePlan.do";
	$.ajax( {  
        type : "post",  
        url : url,  
        dataType:"json",
        data : "pid="+pid+"&content="+encodeURIComponent(content),
        success : function(msg) { 
        	alert(msg);
//        	var content = "<div style='width:100%;height:100%;text-align:center;'>"+msg+"</div>";
//        	parent.parent.tsk1('温馨提示',content,'300','150');
        }
	});
}

//上传文件
function showUpload(pid,pname){
	var shtml="<table style='width:93%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(../../images/showtitlebk800.png);'>" +
				"<td align='left'>" +
				"<span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>【"+pname+"】支撑材料上传</span>" +
				"</td>" +
				"<td align='right'>" +
				"<a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:12px;' onclick='rightbox.window.closeUpload();'>" +
				"<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>" +
				"</td>" +
				"</tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr style='height:55px;'>";
			shtml+="<td colspan='2' valign='top' align='left' style='background-color:#FFFFFF;height:300px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
				shtml+="<div id='ireportpdfdiv' style='overflow: auto;width:100%;height:100%;font-size:12px;'>" +
						"<input type='file' name='file_upload' id='file_upload' />"+

						"</div>";
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr><td colspan='2' align='center' style='height:30px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>" +
		"<div class='buttom_tips01'>" +
		"<a href='javascript:$(&quot;#file_upload&quot;).uploadify(&quot;upload&quot;,&quot;*&quot;)' >上传</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
		"<a href='javascript:void(0)' onclick='rightbox.window.closeUpload();' >取消</a>" +
		"</div>" +
		/*"<a href='javascript:$(&quot;#file_upload&quot;).uploadify(&quot;upload&quot;,&quot;*&quot;)'><img src='../../images/scwj.png' border='0'></a>" +*/
		"&nbsp;</td></tr>";
	shtml+="</table>";
	
	$('#md', parent.document).empty();
	var md=$('#md', parent.document).append(shtml);
	$('#md', parent.document).css("width","400px");
	$('#md', parent.document).css("left","480px");
	parent.sUpload(pid,pname);
	$("body",parent.document).append("<div id='mask'></div>");
	$("#mask",parent.document).addClass("mask").fadeIn("slow");
	$("#md",parent.document).fadeIn("slow");
}
//关闭上传文件
function closeUpload(){
	initIF();
	parent.closeYS();
}

//删除支撑材料
function delZCCL(sid){
	var content =  $("#content").val();
	var url = "/audit/designController/delPlanSupport.do";
	$.ajax( {  
        type : "post",  
        url : url,  
        dataType:"json",
        data : "sid="+sid,
        success : function(msg) { 
        	initIF();
        	alert(msg);
//        	location.reload(true);
        }
	});
}


//查询全部指标树
function findManage(pid,pname){
	var url = "/audit/designController/findAllManage.do";
	$.ajax( {  
        type : "post",  
        url : url,
        dataType:"json",
        success : function(msg) { 
        	var ztrees = eval('('+msg+')');
        	showXZZB(pid,pname,ztrees);
        	
        }
	});
}

function showXZZB(pid,pname,znod){
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(../../images/showtitlebk800.png);'>" +
				"<td align='left'>" +
				"<span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>【"+pname+"】选择观测指标项</span>" +
				"</td>" +
				"<td align='right'>" +
				"<a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:12px;' onclick='closeYS();'>" +
				"<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>" +
				"</td>" +
				"</tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr style='height:55px;'>";
			shtml+="<td colspan='2' valign='top' align='left' style='background-color:#FFFFFF;height:300px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
				shtml+="<div id='ireportpdfdiv' style='overflow: auto;width:100%;height:100%;font-size:12px;'>" +
						"<div class='zTreeDemoBackground left'>"+
						"<ul id='treeDemo' class='ztree'></ul>"+
						"</div>"+
						"<input type='hidden' id='gcPid'  value='"+pid+"'/>" +
						/*
						"<iframe src='../../page/auditing/auditing.jsp' name='treebox' "+
						"frameborder=0 id='treebox' border=0 / width='100%' height='100%'></iframe>"+
						 */
						"</div>";
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr><td colspan='2' align='center' style='height:30px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>" +
		"<div class='buttom_tips01'>" +
		"<a href='javascript:void(0)' onclick='rightbox.window.saveGCZB();' >保存</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
		"<a href='javascript:void(0)' onclick='closeYS();' >取消</a>" +
		"</div>" +
		"&nbsp;</td></tr>";
	shtml+="</table>";	

	$('#md', parent.document).empty();
	var md=$('#md', parent.document).append(shtml);
	parent.treeReady(znod.ztree);
	$('#md', parent.document).css("width","400px");
	$('#md', parent.document).css("left","480px");
	$('#md', parent.document).css("top","50px");
	$("body",parent.document).append("<div id='mask'></div>");
	$("#mask",parent.document).addClass("mask").fadeIn("slow");
	$("#md",parent.document).fadeIn("slow");
}

//保存观测指标
function saveGCZB(){
var checklist = parent.document.getElementsByName ("selected");
	
	var allid="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked && checklist[i].disabled==false){
			allid+=checklist[i].value+",";
		}
	}
	if(allid.length<1){
		alert("请选择要保存的指标");
		return;
	}
	
	var newalle=allid.substring(0,allid.length-1);
	var d=new Date();
	var pid = $('#gcPid', parent.document).val();
	
	var url = "/audit/designController/saveGCZB.do";
	$.ajax( {  
        type : "post",  
        url : url,
        dataType:"json",
        data : "vids="+newalle+"&pid="+pid+"&time="+d.getTime(),
        success : function(msg) { 
        	if (msg != null) {
        		var json = eval('('+msg+')');
        		$("#pgczbTB"+pid).empty();
      var tbStr="				<tbody>"+
				"					<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>"+
				"						<td style='width:60px;height:30px;' align='center'>序号</td>"+
				"						<td style='width:160px;height:30px;' align='center'>指标名称</td>"+
				"					    <td style='width:120px;height:30px;' align='center'>指标所属分类</td>"+
				"						<td style='width:100px;height:30px;' align='center'>指标分类</td>"+
				"						<td style='width:60px;height:30px;' align='center'>操作</td>"+
				"					</tr>";
				if (json.viewQuota!=null) {
					for ( var v = 0; v < json.viewQuota.length; v++) {
						var vquo = json.viewQuota[v];
						if (vquo.vid==0 && vquo.qname == null) {
							continue;
						}
						
						tbStr +="				<tr style='background-color:#FFF;'>"+
						"							<td style='width:60px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquo.vid+"</td>"+
						"							<td style='width:150px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquo.qname+"</td>"+
						"							<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquo.qcategory+"</td>"+
						"							<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquo.qtype+"</td>"+
						"							<td style='width:60px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+
						"								<a href='javascript:void(0)' onclick='delGCZB("+vquo.vid+");' value='2'>删除</a>"+
						"							</td>"+
						"						</tr>";
					}
				}
        		
				$("#pgczbTB"+pid).append(tbStr);
        		alert("保存成功");
        		parent.closeYS();
			}
        }
	});
	
}

//初始化分页查询指标
var icp=1;
function findPageManage(pid,pname){
	var qName = $("#qName").val();
	var url = "/audit/designController/findPageManage.do";
	$.ajax( {  
        type : "post",  
        url : url, 
        dataType:"json",
        data : "pid="+pid+"&qName="+(qName==null?'':qName)+"&pageNo="+icp,
        success : function(msg) { 
        	var json = eval('('+msg+')');
        	showPageManage(pid,pname,json);
        	
        }
	});
}

function showPageManage(pid,pname,json){
	
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(../../images/showtitlebk800.png);'>" +
				"<td align='left'>" +
				"<span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>【"+pname+"】选择观测指标项</span>" +
				"<input type='hidden' id='gcPid' value='"+pid+"' />" +
				"</td>" +
				"<td align='right'>" +
				"<a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:12px;' onclick='closeYS();'>" +
				"<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>" +
				"</td>" +
				"</tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr style='height:55px;'>";
			shtml+="<td colspan='2' valign='top' align='left' style='background-color:#FFFFFF;height:415px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
				shtml+="<div id='ireportpdfdiv' style='overflow: auto;width:100%;height:100%;font-size:12px;'>";
		shtml+="<div style='height:35px;margin-top:5px;'><span style='display:inline-block;padding-left:10px;'>指标名称：</span>&nbsp;&nbsp;" +
				"<input id='qName' value='"+json.qName+"' style='display:inline-block;border:#CCCCCC 1px solid;width:140px;height:23px;line-height:23px;vertical-align:middle;padding-left:5px;padding-right:5px;' type='text'>&nbsp;" +
				"<a href='#' onclick='icp=1;rightbox.window.findPageSS();return false;'><img src='../../images/searchbtn.png' style='vertical-align:middle;margin-left:5px;' border='0px'></a></div>";
shtml+="<table id='zbTable' style='font-size:12px;border:#DADADA 1px solid;width:100%;'" +
		"	cellpadding='0' cellspacing='0'>" +
		"	<tbody>" +
		"		<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>" +
		"			<td style='width:40px;height:30px;border-right:#DADADA 1px solid;'" +
		"				align='center'><input onclick='rightbox.window.selectAll()' name='controlAll'" +
		"				style='controlAll' id='controlAll' type='checkbox'>" +
		"			</td>" +
		"			<td style='width:80px;height:30px;' align='center'>指标编码</td>" +
		"			<td style='width:180px;height:30px;' align='center'>指标名称</td>" +
		"			<td style='width:100px;height:30px;' align='center'>所属分类</td>" +
		"			<td style='width:80px;height:30px;' align='center'>指标分类</td>" +
		"		</tr>" ;
		if (json != null) {
			var manages = json.manages;
			for ( var i = 0; i < manages.length; i++) {
				shtml+="<tr style='background-color:#FFF;'>" +
				"			<td style='width:40px;height:30px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'" +
				"				align='center'><input name='selected' value='"+manages[i].measureId+"'" ;
				for ( var cv = 0,len = json.ckQuota.length; cv < len; cv++) {
					if (json.ckQuota[cv].qid==manages[i].measureId) {
						shtml+=" disabled='disabled' checked='true' ";
					}
				}
				shtml+="				type='checkbox'>" +
				"			</td>" +
				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].measureId+"</td>" +
				"			<td style='width:180px;border-top:#DADADA 1px solid;'" +
				"				align='center'>" +
				"				<span style='display:inline-block;width:180px;text-align:left;'>"+manages[i].measureName+"</span>" +
				"			</td>" +
				"			<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+(manages[i].indexClassFication==undefined?"":manages[i].indexClassFication.indexName)+"</td>" +
				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].classify+"</td>" +
				"		</tr>";
			}
		}
 shtml+="		<tr style='background-color:#FFF;color:#333333;'>" +
		"			<td style='width:100%;height:30px;border-top:#DADADA 1px solid;'" +
		"				colspan='9'>" +
		"				<table style='width:100%;' cellpadding='0'>" +
		"					<tbody>" +
		"						<tr>" +
		"							<td align='left'>" +
		"							<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>" +
		"							</td>" +
		"							<td align='right'>" +
		"							<span style='display:inline-block;margin-right:40px;'>" +
		"							<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'" +
		"								src='../../images/pgicon-first_press.png' style='vertical-align:middle;'" +
		"									onmouseover='this.src=&quot;../../images/pgicon-first.png&quot;;'" +
		"									onmouseout='this.src=&quot;../../images/pgicon-first_press.png&quot;;'>" +
		"							<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'" +
		"								src='../../images/pgicon-pre_press.png'" +
		"									style='vertical-align:middle;margin-left:5px;'" +
		"									onmouseover='this.src=&quot;../../images/pgicon-pre.png&quot;;'" +
		"									onmouseout='this.src=&quot;../../images/pgicon-pre_press.png&quot;;'>" +
		"							<span style='display:inline-block;height:24px;line-height:24px;text-align:center;" +
		"							margin-left:5px;vertical-align:middle;font-size:16px;'>"+json.pageNo+"/"+json.totalPage+"页</span>" +
		"							<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'" +
		"									src='../../images/pgicon-next_press.png'" +
		"									style='vertical-align:middle;margin-left:5px;'" +
		"									onmouseover='this.src=&quot;../../images/pgicon-next.png&quot;;'" +
		"									onmouseout='this.src=&quot;../../images/pgicon-next_press.png&quot;;'>" +
		"							<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;" +
		"							line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>" +
		"							<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'" +
		"									src='../../images/pgicon-last_press.png'" +
		"									style='vertical-align:middle;margin-left:5px;'" +
		"									onmouseover='this.src=&quot;../../images/pgicon-last.png&quot;;'" +
		"									onmouseout='this.src=&quot;../../images/pgicon-last_press.png&quot;;'>" +
		"							</span>" +
		"							</td>" +
		"						</tr>" +
		"					</tbody>" +
		"				</table>" +
		"			</td>" +
		"		</tr>" +
		"	</tbody>" +
		"</table>";
						
				shtml+="</div>";//div结束
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr height='30px'><td colspan='2' align='center' style='width:100%;height:30px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>" +
		"<div class='buttom_tips01'>" +
		"<a href='javascript:void(0)' onclick='rightbox.window.saveGCZB();' >保存</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
		"<a href='javascript:void(0)' onclick='closeYS();' >取消</a>" +
		"</div>" +
		"&nbsp;</td></tr>";
	shtml+="</table>";	
	
	$('#md', parent.document).empty();
	var md=$('#md', parent.document).append(shtml);
	$('#md', parent.document).css("width","800px");
	$('#md', parent.document).css("left","280px");
	$('#md', parent.document).css("top","10px");
	$("body",parent.document).append("<div id='mask'></div>");
	$("#mask",parent.document).addClass("mask").fadeIn("slow");
	$("#md",parent.document).fadeIn("slow");
}

//分页查询指标项
function pagefindindicator(obj){
	var p=obj.getAttribute("value").split("_");
	if(p[0]=="1"){//首页
	    icp="1";
		findPage();
	}else if(p[0]=="2"){//上一页
		if(icp=="1"){
			alert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		findPage();
	}else if(p[0]=="3"){//下一页
		
		if(icp==p[1]){
			alert("已经是最后一页了!");
			return;
		}
		icp=parseInt(icp)+1;
 		findPage();
	}else if(p[0]=="4"){//下一页
		var pnos=$("#pagenotext", parent.document).val();
		if(pnos.length<1){
			alert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			alert("输入非页码数字");
			return;
		}else{
			if(pnums>parseInt(p[1])){
				alert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
				icp=pnos;
				findPage();
			}
		}
	}
}

//上一页、下一页
function findPage(){
	var pid = $('#gcPid', parent.document).val();
	var qName = $("#qName", parent.document).val();
	var url = "/audit/designController/findPageManage.do";
	$.ajax( {  
        type : "post",  
        url : url,
        dataType:"json",
        data : "pid="+pid+"&qName="+(qName==null?'':qName)+"&pageNo="+icp,
        success : function(msg) { 
        	var json = eval('('+msg+')');
        	$("#zbTable", parent.document).empty();
        	var shtml = "";
        	shtml+="<tbody>" +
    		"		<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>" +
    		"			<td style='width:40px;height:30px;border-right:#DADADA 1px solid;'" +
    		"				align='center'><input onclick='rightbox.window.selectAll()' name='controlAll'" +
    		"				style='controlAll' id='controlAll' type='checkbox'>" +
    		"			</td>" +
    		"			<td style='width:80px;height:30px;' align='center'>指标编码</td>" +
    		"			<td style='width:180px;height:30px;' align='center'>指标名称</td>" +
    		"			<td style='width:100px;height:30px;' align='center'>所属分类</td>" +
    		"			<td style='width:80px;height:30px;' align='center'>指标分类</td>" +
    		"		</tr>" ;
        	if (json != null) {
    			var manages = json.manages;
    			for ( var i = 0; i < manages.length; i++) {
    				shtml+="<tr style='background-color:#FFF;'>" +
    				"			<td style='width:40px;height:30px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'" +
    				"				align='center'><input name='selected' value='"+manages[i].measureId+"'" ;
    				for ( var cv = 0,len = json.ckQuota.length; cv < len; cv++) {
    					if (json.ckQuota[cv].qid==manages[i].measureId) {
    						shtml+=" disabled='disabled' checked='true' ";
    					}
    				}
    				shtml+="				type='checkbox'>" +
    				"			</td>" +
    				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].measureId+"</td>" +
    				"			<td style='width:180px;border-top:#DADADA 1px solid;'" +
    				"				align='center'>" +
    				"				<span style='display:inline-block;width:180px;text-align:left;'>"+manages[i].measureName+"</span>" +
    				"			</td>" +
    				"			<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+(manages[i].indexClassFication==null?"":manages[i].indexClassFication.indexName)+"</td>" +
    				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].classify+"</td>" +
    				"		</tr>";
    			}
    		}
     shtml+="		<tr style='background-color:#FFF;color:#333333;'>" +
    		"			<td style='width:100%;height:30px;border-top:#DADADA 1px solid;'" +
    		"				colspan='9'>" +
    		"				<table style='width:100%;' cellpadding='0'>" +
    		"					<tbody>" +
    		"						<tr>" +
    		"							<td align='left'>" +
    		"							<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>" +
    		"							</td>" +
    		"							<td align='right'>" +
    		"							<span style='display:inline-block;margin-right:40px;'>" +
    		"							<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'" +
    		"								src='../../images/pgicon-first_press.png' style='vertical-align:middle;'" +
    		"									onmouseover='this.src=&quot;../../images/pgicon-first.png&quot;;'" +
    		"									onmouseout='this.src=&quot;../../images/pgicon-first_press.png&quot;;'>" +
    		"							<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'" +
    		"								src='../../images/pgicon-pre_press.png'" +
    		"									style='vertical-align:middle;margin-left:5px;'" +
    		"									onmouseover='this.src=&quot;../../images/pgicon-pre.png&quot;;'" +
    		"									onmouseout='this.src=&quot;../../images/pgicon-pre_press.png&quot;;'>" +
    		"							<span style='display:inline-block;height:24px;line-height:24px;text-align:center;" +
    		"							margin-left:5px;vertical-align:middle;font-size:16px;'>"+json.pageNo+"/"+json.totalPage+"页</span>" +
    		"							<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'" +
    		"									src='../../images/pgicon-next_press.png'" +
    		"									style='vertical-align:middle;margin-left:5px;'" +
    		"									onmouseover='this.src=&quot;../../images/pgicon-next.png&quot;;'" +
    		"									onmouseout='this.src=&quot;../../images/pgicon-next_press.png&quot;;'>" +
    		"							<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;" +
    		"							line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>" +
    		"							<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'" +
    		"									src='../../images/pgicon-last_press.png'" +
    		"									style='vertical-align:middle;margin-left:5px;'" +
    		"									onmouseover='this.src=&quot;../../images/pgicon-last.png&quot;;'" +
    		"									onmouseout='this.src=&quot;../../images/pgicon-last_press.png&quot;;'>" +
    		"							</span>" +
    		"							</td>" +
    		"						</tr>" +
    		"					</tbody>" +
    		"				</table>" +
    		"			</td>" +
    		"		</tr>" +
    		"	</tbody>";
     	
     $("#zbTable", parent.document).append(shtml);
        }
	});
}

//搜索
function findPageSS(){
	icp=1;
	findPage();
}

//全选
function selectAll(){
	var checklist = parent.document.getElementsByName ("selected");
    if(parent.document.getElementById("controlAll").checked){
		for(var i=0;i<checklist.length;i++){
			checklist[i].checked = 1;
		} 
 	}else{
		for(var j=0;j<checklist.length;j++){
			if (checklist[j].disabled==false) {
				checklist[j].checked = 0;
			}
		}
 	}
}

//删除观测指标
function delGCZB(vid){
	
	var url = "/audit/designController/delViewQuota.do";
	$.ajax( {  
        type : "post",  
        url : url,  
        data : "vid="+vid,
        success : function(msg) { 
        	initIF();
        }
	});
}


//初始化分页查询关联项目------------------------------------关联项目-------------------------------
var pageNo=1;
function findPageRelevance(pid,pname,add){
	var qName = $("#qName").val();
	var url = "/audit/designController/findPageRelevanceItem.do";
	$.ajax( {  
        type : "post",  
        url : url,
        dataType:"json",
        data : "pid="+pid+"&qName="+(qName==null?'':qName)+"&pageNo="+pageNo,
        success : function(msg) { 
        	var json = eval('('+msg+')');
        	if (add==1) {
        		showPageView(pid,pname,json);
			}else {
				showdelGLXM(pid,pname,json);
			}
        }
	});
}
//删除关联项目页面
function showdelGLXM(pid,pname,json){
	
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(../../images/showtitlebk800.png);'>" +
				"<td align='left'>" +
				"<span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>【"+pname+"】关联项目删除</span>" +
				"<input type='hidden' id='gcPid' value='"+pid+"' />" +
				"</td>" +
				"<td align='right'>" +
				"<a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:12px;' onclick='closeYS();'>" +
				"<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>" +
				"</td>" +
				"</tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr style='height:55px;'>";
			shtml+="<td colspan='2' valign='top' align='left' style='background-color:#FFFFFF;height:415px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
				shtml+="<div id='ireportpdfdiv' style='overflow: auto;width:100%;height:100%;font-size:12px;'>";
shtml+="<table id='zbTable' style='font-size:12px;border:#DADADA 1px solid;width:100%;'" +
		"	cellpadding='0' cellspacing='0'>" +
		"	<tbody>" +
		"		<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>" +
		"			<td style='width:40px;height:30px;border-right:#DADADA 1px solid;'" +
		"				align='center'><input onclick='rightbox.window.selectAll()' name='controlAll'" +
		"				style='controlAll' id='controlAll' type='checkbox'>" +
		"			</td>" +
		"			<td style='width:80px;height:30px;' align='center'>编号</td>" +
		"			<td style='width:180px;height:30px;' align='center'>方案名称</td>" +
		"			<td style='width:180px;height:30px;' align='center'>指标名称</td>" +
		"		</tr>" ;
		if (json != null) {
			var qu = json.ckQuota;
			for ( var i = 0,len = qu.length; i < len; i++) {
				shtml+="<tr style='background-color:#FFF;'>" +
				"			<td style='width:40px;height:30px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'" +
				"				align='center'><input name='selected' value='"+qu[i].rid+"'" ;
				shtml+="				type='checkbox'>" +
				"			</td>" +
				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+qu[i].rid+"</td>" +
				"			<td style='width:180px;border-top:#DADADA 1px solid;'" +
				"				align='center'>" +
				"				<span style='display:inline-block;width:180px;text-align:left;'>"+qu[i].rpname+"</span>" +
				"			</td>" +
				"			<td style='width:180px;border-top:#DADADA 1px solid;' align='center'>"+qu[i].rvqname+"</td>" +
				"		</tr>";
			}
		}
 shtml+="	</tbody>" +
		"</table>";
						
				shtml+="</div>";//div结束
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr height='30px'><td colspan='2' align='center' style='width:100%;height:30px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>" +
		"<div class='buttom_tips01'>" +
		"<a href='javascript:void(0)' onclick='rightbox.window.delGLXM();' >删除</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
		"<a href='javascript:void(0)' onclick='closeYS();' >取消</a>" +
		"</div>" +
		"&nbsp;</td></tr>";
	shtml+="</table>";	
	
	$('#md', parent.document).empty();
	var md=$('#md', parent.document).append(shtml);
	$('#md', parent.document).css("width","800px");
	$('#md', parent.document).css("left","280px");
	$('#md', parent.document).css("top","10px");
	$("body",parent.document).append("<div id='mask'></div>");
	$("#mask",parent.document).addClass("mask").fadeIn("slow");
	$("#md",parent.document).fadeIn("slow");
}
//显示关联项目添加页面
function showPageView(pid,pname,json){
	
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(../../images/showtitlebk800.png);'>" +
				"<td align='left'>" +
				"<span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>【"+pname+"】关联项目管理</span>" +
				"<input type='hidden' id='gcPid' value='"+pid+"' />" +
				"</td>" +
				"<td align='right'>" +
				"<a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:12px;' onclick='closeYS();'>" +
				"<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>" +
				"</td>" +
				"</tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr style='height:55px;'>";
			shtml+="<td colspan='2' valign='top' align='left' style='background-color:#FFFFFF;height:415px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
				shtml+="<div id='ireportpdfdiv' style='overflow: auto;width:100%;height:100%;font-size:12px;'>";
		shtml+="<div style='height:35px;margin-top:5px;'><span style='display:inline-block;padding-left:10px;'>指标名称：</span>&nbsp;&nbsp;" +
				"<input id='qName' value='"+json.qName+"' style='display:inline-block;border:#CCCCCC 1px solid;width:140px;height:23px;line-height:23px;vertical-align:middle;padding-left:5px;padding-right:5px;' type='text'>&nbsp;" +
				"<a href='#' onclick='icp=1;rightbox.window.findPageGLSS();return false;'><img src='../../images/searchbtn.png' style='vertical-align:middle;margin-left:5px;' border='0px'></a></div>";
shtml+="<table id='zbTable' style='font-size:12px;border:#DADADA 1px solid;width:100%;'" +
		"	cellpadding='0' cellspacing='0'>" +
		"	<tbody>" +
		"		<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>" +
		"			<td style='width:40px;height:30px;border-right:#DADADA 1px solid;'" +
		"				align='center'><input onclick='rightbox.window.selectAll()' name='controlAll'" +
		"				style='controlAll' id='controlAll' type='checkbox'>" +
		"			</td>" +
		"			<td style='width:80px;height:30px;' align='center'>方案名称</td>" +
		"			<td style='width:180px;height:30px;' align='center'>指标名称</td>" +
		"			<td style='width:100px;height:30px;' align='center'>所属分类</td>" +
		"			<td style='width:80px;height:30px;' align='center'>指标分类</td>" +
		"		</tr>" ;
		if (json != null) {
			var manages = json.manages;
			for ( var i = 0; i < manages.length; i++) {
				shtml+="<tr style='background-color:#FFF;'>" +
				"			<td style='width:40px;height:30px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'" +
				"				align='center'><input name='selected' value='"+manages[i].vid+"_"+manages[i].pid+"'" ;
				for ( var cv = 0,len = json.ckQuota.length; cv < len; cv++) {
					if (json.ckQuota[cv].rvid==manages[i].vid) {
						shtml+=" disabled='disabled' checked='true' ";
					}
				}
				shtml+="				type='checkbox'>" +
				"			</td>" +
				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].rpname+"</td>" +
				"			<td style='width:180px;border-top:#DADADA 1px solid;'" +
				"				align='center'>" +
				"				<span style='display:inline-block;width:180px;text-align:left;'>"+manages[i].qname+"</span>" +
				"			</td>" +
				"			<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].qcategory+"</td>" +
				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].qtype+"</td>" +
				"		</tr>";
			}
		}
 shtml+="		<tr style='background-color:#FFF;color:#333333;'>" +
		"			<td style='width:100%;height:30px;border-top:#DADADA 1px solid;'" +
		"				colspan='9'>" +
		"				<table style='width:100%;' cellpadding='0'>" +
		"					<tbody>" +
		"						<tr>" +
		"							<td align='left'>" +
		"							<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>" +
		"							</td>" +
		"							<td align='right'>" +
		"							<span style='display:inline-block;margin-right:40px;'>" +
		"							<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindViewQuota(this);'" +
		"								src='../../images/pgicon-first_press.png' style='vertical-align:middle;'" +
		"									onmouseover='this.src=&quot;../../images/pgicon-first.png&quot;;'" +
		"									onmouseout='this.src=&quot;../../images/pgicon-first_press.png&quot;;'>" +
		"							<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindViewQuota(this);'" +
		"								src='../../images/pgicon-pre_press.png'" +
		"									style='vertical-align:middle;margin-left:5px;'" +
		"									onmouseover='this.src=&quot;../../images/pgicon-pre.png&quot;;'" +
		"									onmouseout='this.src=&quot;../../images/pgicon-pre_press.png&quot;;'>" +
		"							<span style='display:inline-block;height:24px;line-height:24px;text-align:center;" +
		"							margin-left:5px;vertical-align:middle;font-size:16px;'>"+json.pageNo+"/"+json.totalPage+"页</span>" +
		"							<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindViewQuota(this);'" +
		"									src='../../images/pgicon-next_press.png'" +
		"									style='vertical-align:middle;margin-left:5px;'" +
		"									onmouseover='this.src=&quot;../../images/pgicon-next.png&quot;;'" +
		"									onmouseout='this.src=&quot;../../images/pgicon-next_press.png&quot;;'>" +
		"							<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;" +
		"							line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>" +
		"							<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindViewQuota(this);'" +
		"									src='../../images/pgicon-last_press.png'" +
		"									style='vertical-align:middle;margin-left:5px;'" +
		"									onmouseover='this.src=&quot;../../images/pgicon-last.png&quot;;'" +
		"									onmouseout='this.src=&quot;../../images/pgicon-last_press.png&quot;;'>" +
		"							</span>" +
		"							</td>" +
		"						</tr>" +
		"					</tbody>" +
		"				</table>" +
		"			</td>" +
		"		</tr>" +
		"	</tbody>" +
		"</table>";
						
				shtml+="</div>";//div结束
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr height='30px'><td colspan='2' align='center' style='width:100%;height:30px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>" +
		"<div class='buttom_tips01'>" +
		"<a href='javascript:void(0)' onclick='rightbox.window.saveGLXM();' >保存</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
		"<a href='javascript:void(0)' onclick='closeYS();' >取消</a>" +
		"</div>" +
		"&nbsp;</td></tr>";
	shtml+="</table>";	
	
	$('#md', parent.document).empty();
	var md=$('#md', parent.document).append(shtml);
	$('#md', parent.document).css("width","800px");
	$('#md', parent.document).css("left","280px");
	$('#md', parent.document).css("top","10px");
	$("body",parent.document).append("<div id='mask'></div>");
	$("#mask",parent.document).addClass("mask").fadeIn("slow");
	$("#md",parent.document).fadeIn("slow");
}

//搜索
function findPageGLSS(){
	pageNo=1;
	findPageGL();
}

//上一页、下一页-------------关联项目 管理
function findPageGL(){
	var pid = $('#gcPid', parent.document).val();
	var qName = $("#qName", parent.document).val();
	var url = "/audit/designController/findPageRelevanceItem.do";
	$.ajax( {  
        type : "post",  
        url : url,
        dataType:"json",
        data : "pid="+pid+"&qName="+(qName==null?'':qName)+"&pageNo="+icp,
        success : function(msg) { 
        	var json = eval('('+msg+')');
        	$("#zbTable", parent.document).empty();
        	var shtml = "";
        	shtml+="<tbody>" +
    		"		<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>" +
    		"			<td style='width:40px;height:30px;border-right:#DADADA 1px solid;'" +
    		"				align='center'><input onclick='rightbox.window.selectAll()' name='controlAll'" +
    		"				style='controlAll' id='controlAll' type='checkbox'>" +
    		"			</td>" +
    		"			<td style='width:80px;height:30px;' align='center'>方案名称</td>" +
    		"			<td style='width:180px;height:30px;' align='center'>指标名称</td>" +
    		"			<td style='width:100px;height:30px;' align='center'>所属分类</td>" +
    		"			<td style='width:80px;height:30px;' align='center'>指标分类</td>" +
    		"		</tr>" ;
        	if (json != null) {
    			var manages = json.manages;
    			for ( var i = 0; i < manages.length; i++) {
    				shtml+="<tr style='background-color:#FFF;'>" +
    				"			<td style='width:40px;height:30px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'" +
    				"				align='center'><input name='selected' value='"+manages[i].vid+"_"+manages[i].pid+"'" ;
    				for ( var cv = 0,len = json.ckQuota.length; cv < len; cv++) {
    					if (json.ckQuota[cv].rvid==manages[i].vid) {
    						shtml+=" disabled='disabled' checked='true' ";
    					}
    				}
    				shtml+="				type='checkbox'>" +
    				"			</td>" +
    				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].rpname+"</td>" +
    				"			<td style='width:180px;border-top:#DADADA 1px solid;'" +
    				"				align='center'>" +
    				"				<span style='display:inline-block;width:180px;text-align:left;'>"+manages[i].qname+"</span>" +
    				"			</td>" +
    				"			<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].qcategory+"</td>" +
    				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+manages[i].qtype+"</td>" +
    				"		</tr>";
    			}
    		}
     shtml+="		<tr style='background-color:#FFF;color:#333333;'>" +
    		"			<td style='width:100%;height:30px;border-top:#DADADA 1px solid;'" +
    		"				colspan='9'>" +
    		"				<table style='width:100%;' cellpadding='0'>" +
    		"					<tbody>" +
    		"						<tr>" +
    		"							<td align='left'>" +
    		"							<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>" +
    		"							</td>" +
    		"							<td align='right'>" +
    		"							<span style='display:inline-block;margin-right:40px;'>" +
    		"							<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindViewQuota(this);'" +
    		"								src='../../images/pgicon-first_press.png' style='vertical-align:middle;'" +
    		"									onmouseover='this.src=&quot;../../images/pgicon-first.png&quot;;'" +
    		"									onmouseout='this.src=&quot;../../images/pgicon-first_press.png&quot;;'>" +
    		"							<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindViewQuota(this);'" +
    		"								src='../../images/pgicon-pre_press.png'" +
    		"									style='vertical-align:middle;margin-left:5px;'" +
    		"									onmouseover='this.src=&quot;../../images/pgicon-pre.png&quot;;'" +
    		"									onmouseout='this.src=&quot;../../images/pgicon-pre_press.png&quot;;'>" +
    		"							<span style='display:inline-block;height:24px;line-height:24px;text-align:center;" +
    		"							margin-left:5px;vertical-align:middle;font-size:16px;'>"+json.pageNo+"/"+json.totalPage+"页</span>" +
    		"							<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindViewQuota(this);'" +
    		"									src='../../images/pgicon-next_press.png'" +
    		"									style='vertical-align:middle;margin-left:5px;'" +
    		"									onmouseover='this.src=&quot;../../images/pgicon-next.png&quot;;'" +
    		"									onmouseout='this.src=&quot;../../images/pgicon-next_press.png&quot;;'>" +
    		"							<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;" +
    		"							line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>" +
    		"							<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindViewQuota(this);'" +
    		"									src='../../images/pgicon-last_press.png'" +
    		"									style='vertical-align:middle;margin-left:5px;'" +
    		"									onmouseover='this.src=&quot;../../images/pgicon-last.png&quot;;'" +
    		"									onmouseout='this.src=&quot;../../images/pgicon-last_press.png&quot;;'>" +
    		"							</span>" +
    		"							</td>" +
    		"						</tr>" +
    		"					</tbody>" +
    		"				</table>" +
    		"			</td>" +
    		"		</tr>" +
    		"	</tbody>";
     	
     $("#zbTable", parent.document).append(shtml);
        }
	});
}

//分页关联指标
function pagefindViewQuota(obj){
	var p=obj.getAttribute("value").split("_");
	if(p[0]=="1"){//首页
	    icp="1";
	    findPageGL();
	}else if(p[0]=="2"){//上一页
		if(icp=="1"){
			alert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		findPageGL();
	}else if(p[0]=="3"){//下一页
		
		if(icp==p[1]){
			alert("已经是最后一页了!");
			return;
		}
		icp=parseInt(icp)+1;
		findPageGL();
	}else if(p[0]=="4"){//下一页
		var pnos=$("#pagenotext", parent.document).val();
		if(pnos.length<1){
			alert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			alert("输入非页码数字");
			return;
		}else{
			if(pnums>parseInt(p[1])){
				alert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
				icp=pnos;
				findPageGL();
			}
		}
	}
}

//保存关联指标项-----------------------------------------------------------------------
function saveGLXM(){
var checklist = parent.document.getElementsByName ("selected");
	
	var allid="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked && checklist[i].disabled==false){
			allid+=checklist[i].value+",";
		}
	}
	if(allid.length<1){
		alert("请选择要保存的关联项目");
		return;
	}
	
	var newalle=allid.substring(0,allid.length-1);
	var d=new Date();
	var pid = $('#gcPid', parent.document).val();
	
	var url = "/audit/designController/saveGLXM.do";
	$.ajax( {  
        type : "post",  
        url : url,
        dataType:"json",
        data : "vids="+newalle+"&pid="+pid+"&time="+d.getTime(),
        success : function(msg) { 
        	if (msg != null) {
        		var json = eval('('+msg+')');
        		$("#glxmDiv"+pid).empty();
        		var tbStr = "";
				if (json.relevance!=null) {
					var rpArr = qcf(json.relevance);
					var rvArr = json.relevance;
					for ( var ri = 0; ri < rpArr.length; ri++) {
						var releva = rpArr[ri];
						if (releva!=null && releva.rpname!=null) {
							tbStr += releva.rpname+"<br/>";
							for ( var vi = 0; vi < rvArr.length; vi++) {
								if (rvArr[vi].rpid == rpArr[ri].rpid && rvArr[vi].rpid!=0) {
									tbStr += "  >"+rvArr[vi].rvqname+"<br/>";
								}
							}
						}
					}
				}
        		
				$("#glxmDiv"+pid).append(tbStr);
        		alert("保存成功");
        		icp=1;
        		parent.closeYS();
			}
        }
	});
	
}

//删除关联项目-----------------------------------------------------------------------
function delGLXM(){
var checklist = parent.document.getElementsByName ("selected");
	
	var allid="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked){
			allid+=checklist[i].value+",";
		}
	}
	if(allid.length<1){
		alert("请选择要删除的关联项目");
		return;
	}
	
	var newalle=allid.substring(0,allid.length-1);
	var d=new Date();
	var pid = $('#gcPid', parent.document).val();
	
	var url = "/audit/designController/delGlxms.do";
	$.ajax( {  
        type : "post",  
        url : url,
        dataType:"json",
        data : "rids="+newalle+"&pid="+pid+"&time="+d.getTime(),
        success : function(msg) { 
        	if (msg != null) {
        		var json = eval('('+msg+')');
        		$("#glxmDiv"+pid).empty();
        		var tbStr = "";
				if (json.relevance!=null) {
					var rpArr = qcf(json.relevance);
					var rvArr = json.relevance;
					for ( var ri = 0; ri < rpArr.length; ri++) {
						var releva = rpArr[ri];
						if (releva!=null && releva.rpname!=null) {
							tbStr += releva.rpname+"<br/>";
							for ( var vi = 0; vi < rvArr.length; vi++) {
								if (rvArr[vi].rpid == rpArr[ri].rpid && rvArr[vi].rpid!=0) {
									tbStr += "  >"+rvArr[vi].rvqname+"<br/>";
								}
							}
						}
					}
				}
        		
				$("#glxmDiv"+pid).append(tbStr);
        		alert("删除成功");
        		parent.closeYS();
			}
        }
	});
}

 function initBJ(){
     //初始化编辑器
		var editor;
		KindEditor.ready(function(K) {
			editor = K.create('textarea[name="content"]', {
	        			afterBlur: function(){
	        				this.sync();
	        			}
		       });
		   	 		K('input[name=getHtml]').click(function(e) {
						alert(editor.html());
					});
					K('input[name=isEmpty]').click(function(e) {
						alert(editor.isEmpty());
					});
					K('input[name=getText]').click(function(e) {
						alert(editor.text());
					});
					K('input[name=selectedHtml]').click(function(e) {
						alert(editor.selectedHtml());
					});
					K('input[name=setHtml]').click(function(e) {
						editor.html('<h3>Hello KindEditor</h3>');
					});
					K('input[name=setText]').click(function(e) {
						editor.text('<h3>Hello KindEditor</h3>');
					});
					K('input[name=insertHtml]').click(function(e) {
						editor.insertHtml('<strong>插入HTML</strong>');
					});
					K('input[name=appendHtml]').click(function(e) {
						editor.appendHtml('<strong>添加HTML</strong>');
					});
					K('input[name=clear]').click(function(e) {
						editor.html('');
					});
					K('input[name=suckeditor]').click(function(e) {
					});
		 });
 }