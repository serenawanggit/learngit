// 机构 代码
var updateCjbmdm = 0;

/**
 * 初始化
 */
jQuery(document).ready(function(){
	jQuery.ajax({
  		type: "POST", 
  		dataType:"JSON",
  		url:"/audit/asZlZlrwbmryController/selectAllAsZLZLrwmry.do",
  		success: function(msg){
  			 var results=eval("("+msg+")");
  			 
  			 var resultslist=results.list;
//  			 var usernameLevel=results.usernameLevel;
//  			 var usernameLevel3=results.usernameLevel3;
 			 var str="";
 			 for ( var i = 0; i < resultslist.length; i++) {
 				var str="";
				str += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'><td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'><input type='checkbox' name='ckBut' value='"+resultslist[i].zzid+"'/></td>";
				str += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+resultslist[i].zlname+"</td>";
				str += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+resultslist[i].name+"</td>";
				str += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'><input type='hidden' value='"+resultslist[i].zzid+"'>" +
					   "<a href='javascript:void(0)'>" +
					   "<img src='/audit/images/bj_icon.png' onclick='addTaskUpdate(this,"+resultslist[i].cjbmdm+");' style='cursor: hand; vertical-align:middle;' border='0'></a> &nbsp;&nbsp; " +
					   "<a href='javascript:void(0)'><img onclick='deleteByzid("+resultslist[i].zzid+")' src='/audit/images/sc_icon.png' style='cursor: hand;vertical-align:middle;border:0px;'></a></td></tr>";
				 $("#tbody").append(str);	
			}
  		},error:function(){
  			alert('网络异常');
  		}
  		});
});

/**
 * 单个删除
 */
function deleteByzid(zid){
	if (confirm("确定删除吗,删除后数据不可恢复")) {
		jQuery.ajax({
			url:"/audit/asZlZlrwbmryController/deleteRWBMRY.do",
			type:"POST",
			dataType:"JSON",
			data:{"id":zid},
			success:function(result){
			if (result!=0) {
				alert("删除成功");
				window.location.href="/audit/page/qualityMission/bumenAndrenyuan.jsp";
			}else{
				alert("网络异常");
			}
		}
	});
	}
	
}
/**
 * 删除所有
 */
function deleteMultiple(){
	var ids = $("#rwTable input[name='ckBut']:checked");//质量任务部门人员中间表id
	if(ids.length==0){
		alert("请选择");
		return;
	}
	var id= '';
	if(confirm("确认删除这"+ids.length+"条数据吗")){
		for(var i=0;i<ids.length;i++){
			id +=ids[i].value+",";
		}
	}
	jQuery.ajax({
		url:"/audit/asZlZlrwbmryController/deleteMultiple.do",
		type:"POST",
		data:{"ids":id},
		success:function(data){
			var results=eval("("+data+")");
			if (results!=0) {
				alert("删除成功");
				window.location.href="/audit/page/qualityMission/bumenAndrenyuan.jsp";
			}else{
				alert("网络异常");
			}
		},error:function(){
  			alert('网络异常');
  		}
		
	});
}
/**
 * 获取专业
 */
function selectZhuanYe(){
	//获取机构id
	var oraganizationId=$("#organizationName").val().trim();
	if(oraganizationId == ""){
		getAllUser();
		$("#specialtyName").html("<option value='' >--请选择专业--</option>");
		return;
	}
	jQuery.ajax({
		url:"/audit/specialtyController/selecSpecialtytByid.do",
		data:"oraganizationId="+oraganizationId,
		type:"POST",
		success:function(result){
			var results=eval("("+result+")");
			if (results.length!=0) {
				var html;
				html+="<option value=\"\" >--请选择专业--</option>";
				for ( var i = 0; i < results.length; i++) {
					if (results[i].name!=null) {
						html =html+"<option value='"+results[i].id+"' >"+results[i].name+"</option>";
					}else{
						$("#specialtyName").html("");
						html+="<option value=\"0\" >---请选择专业---</option>";
					}
				}
				//获取专业下拉框
				$("#specialtyName").html(html);
			}else{
				$("#specialtyName").html("");
				html+="<option value=\"0\">--没有专业--</option>";
				$("#specialtyName").html(html);
			}
		}
	});
	
	//获取该专业下所有用户
	jQuery.ajax({
		url:"/audit/userinfoController/selectAllUserinfoByorid.do",
		type:"POST",
		dataType:"JSON",
		data:{"oraganizationId":oraganizationId},
		async: false,
		success:function(result){
			var results=eval("("+result+")");
			var str="";
			if (results.length==0) {
				$("#daixuanrenyuan").html("<div style='margin-top:11px;margin-left:11px'><font id=\"fontId\" color='red'>该学院下没有用户</font></div>");
			}else{
				for ( var i = 0; i < results.length; i++) {
					str = str + "<span id='"+results[i].id+"'><ul name='ulname'>";
					str = str + "	<li  class='name-left'>"+results[i].showname+"</li>";
					str = str + "	<li class='add-left'><img src='/audit/images/add.png' onclick='daixuanrenyuan("+results[i].id+")'></li>";
					str = str + "</ul></span>";
				}
				$("#daixuanrenyuan").html("");
				$("#daixuanrenyuan").html(str);
			}
		}
	});
}
/**
 * 获取专业 修改弹出层
 */
function selectZhuanYeUpdate(){
	//获取机构id
	var oraganizationId=$("#organizationNameUpdate").val();
	jQuery.ajax({
		url:"/audit/specialtyController/selecSpecialtytByid.do",
		data:{"oraganizationId":oraganizationId},
		type:"POST",
		success:function(result){
			var results=eval("("+result+")");
			if (results.length!=0) {
				var html;
				html+="<option value=\"\" >--请选择专业--</option>";
				for ( var i = 0; i < results.length; i++) {
					if (results[i].name!=null) {
						html =html+"<option value='"+results[i].id+"' >"+results[i].name+"</option>";
					}else{
						$("#specialtyNameUpdate").html("");
						html+="<option value=\"\" >---请选择专业---</option>";
					}
				}
				//获取专业下拉框
				$("#specialtyNameUpdate").html(html);
			}else{
				$("#specialtyNameUpdate").html("");
				html+="<option value=\"0\">--没有专业--</option>";
				$("#specialtyNameUpdate").html(html);
			}
		}
	});
	
	//获取该专业下所有用户
	jQuery.ajax({
		url:"/audit/userinfoController/selectAllUserinfoByorid.do",
		type:"POST",
		dataType:"JSON",
		data:{"oraganizationId":oraganizationId},
		async: false,
		success:function(result){
			var results=eval("("+result+")");
			var str="";
			if (results.length==0) {
				$("#daixuanrenyuanUpdate").html("<div style='margin-top:11px;margin-left:11px'><font id=\"fontIdUpdate\" color='red'>该学院下没有用户</font></div>");
			}else{
				for ( var i = 0; i < results.length; i++) {
					str = str + "<span id='"+results[i].id+"'><ul name='ulname'>";
					str = str + "	<li  class='name-left'>"+results[i].showname+"</li>";
					str = str + "	<li class='add-left'><a ><img style='cursor: hand;' src='/audit/images/add.png' onclick='daixuanrenyuan("+results[i].id+")'></a></li>";
					str = str + "</ul></span>";
				}
				$("#daixuanrenyuanUpdate").html("");
				$("#daixuanrenyuanUpdate").html(str);
			}
		}
	});
}

$(function(){
	
});
/**
 * 删除已选人员
 * @param ulid
 */
function deleteUl(ulid){
	$("ul[name="+ulid+"] ").parent().remove();
}
/**
 * 已选人员
 * @param userid
 */
function daixuanrenyuan(userid){
	if ($("#organizationName").val()=="") {
		alert("请选择学院");
		return;
	}
	var username=$("#"+userid).text();
	var str="";
	str = str + "<span id='"+userid+"'><ul id='"+userid+"' name='"+userid+"'>";
	str = str + "	<li class='name-right'>"+username+"</li>";
	str = str + "	<li class='add-right'><input name='inputuserID' type=\"hidden\" value='"+userid+"'/><a href='javascript:void(0)'><img src='/audit/images/del.png' onclick='deleteUl("+userid+");' ></a></li>";
	str = str + "</ul></span>";
	var yixuanry=$("#yixuanrenyuan span[id="+userid+"]").length;
	if (yixuanry==0) {
		$("#yixuanrenyuan").append(str);
	}else{
		alert("已添加 或 该学院下已经存在该用户");
	}
	
}


function getAllUser(){
	//用户初始化
	jQuery.ajax({
		url:"/audit/userinfoController/selectAllUserinfo.do",
		type:"POST",
		dataType:"JSON",
		success:function(result){
			var results=eval("("+result+")");
			var str = "";
			for(var i=0; i<results.length; i++){
				str = str + "<ul name='ulname'>";
				str = str + "	<li id='"+results[i].id+"' class='name-left'>"+results[i].showname+"</li>";
				str = str + "	<li class='add-left'><a href='javascript:void(0)'><img style='cursor: hand;' src='/audit/images/add.png' onclick='daixuanrenyuan("+results[i].id+")'></a></li>";
				str = str + "</ul>";
			}
			//console.info("onclick='daixuanrenyuan("+results[0].id+",'"+results[0].showname+"')");
			$("#daixuanrenyuan").html(str);
		}
	});
	
}
/**
 * 新增 显示弹出层
 */
 function addTask(){
	$("#divc").show();
	$("#divcontent").show();
	
	getAllUser();
	//查询所有学院
	jQuery.ajax({
			url:"/audit/organizationController/selectAllOrganization.do?updateCjbmdm="+updateCjbmdm,
			type:"POST",
			dataType:"JSON",
			success:function(results){
			 var resultss=eval("("+results+")");
				if (resultss.list.length!=0) {
					var html;
					$("#organizationName").html("");
					html="<option value=\"\" >---请选择学院---</option>";
					for ( var i = 1; i < resultss.list.length; i++) {
							html =html+"<option value='"+resultss.list[i].id+"' >"+resultss.list[i].name+"</option>";
					}
					//给学院下拉框zhi
					$("#organizationName").html(html);
				}else{
					$("#organizationName").html("");
					html+="<option value=\"0\">--没有专业--</option>";
					$("#organizationName").html(html);
				}
			}			
	});
 }
 /**
  * 新增 隐藏弹出层
  */
 function hidebutton(){
	 $("#yixuanrenyuan").html("");
	 $("#divc").hide();
	 $("#divcontent").hide();
 }
 
 
 /**
  * 已选人员
  * 修改
  * @param userid
  */
 function daixuanrenyuanUpdate(userid){
	 var organizationValue = $("#organizationNameUpdate").val();
	if (organizationValue==""||organizationValue==0) {
		alert("请选择学院");
		return;
	}
 	var username=$("#"+userid).text();
 	var str="";
 	str = str + "<span id='"+userid+"'><ul id='"+userid+"' name='"+userid+"'>";
 	str = str + "	<li class='name-right'>"+username+"</li>";
 	str = str + "	<li class='add-right'><input name='inputuserID' type=\"hidden\" value='"+userid+"'/><a href='javascript:void(0)'><img src='/audit/images/del.png' onclick='deleteUl("+userid+");' ></a></li>";
 	str = str + "</ul></span>";
 	var yixuanry=$("#yixuanrenyuanUpdate span[id="+userid+"]").length;
	if (yixuanry==0) {
		$("#yixuanrenyuanUpdate").append(str);
	}else{
		alert("已添加 或 该学院下已经存在该用户");
	}
 }
 
 /**
  * 隐藏弹出层
  * 修改
  */
 function hidebuttonUpdate(){
	 $("#yixuanrenyuanUpdate").html("");
	 $("#divcUpdate").hide();
	 $("#divcontentUpdate").hide();
 }
var zzid="";//记忆zzid 用于update初始化
 /**
  * 显示弹出层
  * 修改  
  */
 function addTaskUpdate(obj,cjbmdm){
	 zzid = $(obj).parent().parent().find("input").val();
	 
	 // 显示弹出成的时候将机构代码保存 修改的时候用
	$("#divcUpdate").show();
	$("#divcontentUpdate").show();
	jQuery.ajax({
		url:"/audit/userinfoController/selectAllUserinfo.do",
		type:"POST",
		dataType:"JSON",
		success:function(result){
			var results=eval("("+result+")");
			var str = "";
			for(var i=0; i<results.length; i++){
				str = str + "<ul>";
				str = str + "	<li id='"+results[i].id+"' class='name-left'>"+results[i].showname+"</li>";
				str = str + "	<li class='add-left'><a href='javascript:void(0)'><img src='/audit/images/add.png' onclick='daixuanrenyuanUpdate("+results[i].id+")'></a></li>";
				str = str + "</ul>";
			}
			//console.info("onclick='daixuanrenyuan("+results[0].id+",'"+results[0].showname+"')");
			$("#daixuanrenyuanUpdate").html(str);
		}
	});
	
	//查询机构
	searchOrg(cjbmdm);
 }	
 
 function searchData(){
	 jQuery.ajax({
			url:"/audit/organizationController/selectOrganizationById.do?zzid="+zzid,
			type:"POST",
			dataType:"JSON",
			async:false, 
			success:function(data){
			 var result=eval("("+data+")");
			 orgName=result.name;
			}
	});
 }
 /**
  * 查询所有机构
  * @param cjbmdm
  */
 function searchOrg(cjbmdm){
	 searchOrgByOrgID(cjbmdm);
	 jQuery.ajax({
			url:"/audit/organizationController/selectAllOrganization.do",
			type:"POST",
			dataType:"JSON",
			async:false,
			success:function(results){
			 var resultss=eval("("+results+")");
				if (resultss.list.length!=0) {
					var html;
					$("#organizationNameUpdate").html("");
					html="<option value=\"\" >---请选择学院---</option>";
					for ( var i = 1; i < resultss.list.length; i++) {
						if(orgName==resultss.list[i].name){
							html =html+"<option selected='selected' value='"+resultss.list[i].id+"' >"+resultss.list[i].name+"</option>";
						}else{
							html =html+"<option value='"+resultss.list[i].id+"' >"+resultss.list[i].name+"</option>";
						}
					}
					//给学院下拉框zhi
					$("#organizationNameUpdate").html(html);
					selectZhuanYeUpdate();//修改  默认选择以前的机构
				}else{
					$("#organizationNameUpdate").html("");
					html+="<option value=\"0\">--没有专业--</option>";
					$("#organizationNameUpdate").html(html);
				}
			}			
	});
	
 }
 var orgName="";
 /**
  * 获取之前的机构
  * @param cjbmdm 机构代码
  */
 function searchOrgByOrgID(cjbmdm){
	 jQuery.ajax({
			url:"/audit/organizationController/selectOrganizationById.do?oid="+cjbmdm,
			type:"POST",
			dataType:"JSON",
			async:false, 
			success:function(data){
			 var result=eval("("+data+")");
			 orgName=result.name;
			}
	});
 }
	
 
 /**
  * 新增保存
  */
 function sbt(){
	 var inputuserID = document.getElementsByName("inputuserID");
	 var useridList="";//选中userid
	 for(var i=0;i<inputuserID.length;i++){
		 useridList+=inputuserID[i].value+",";
	 }
	 
	 var specialtyid = $("#specialtyName").val();//专业id
	 if (specialtyid=="") {
		 specialtyid=0;
	 }
	 var organizationid = $("#organizationName").val();//学院id
	 if (organizationid==0) {
		alert("请选择学院");
		return;
	 }
	 if ($("#fontId").html()=="该学院下没有用户") {
		alert("请重新选择学院");
		return;
	}
	 /**
	  * 新增
	  */
	 jQuery.ajax({
		 url:"/audit/asZlZlrwbmryController/insertRWBMRY.do",
		 type:"POST",
		 data:{"useridList":useridList,"specialtyid":specialtyid,"organizationid":organizationid},
		 async: false,
		 success:function(result){
			 if (result!=0) {
				alert("新增成功");
				$("#yixuanrenyuan").html("");
				window.location.href="/audit/page/qualityMission/bumenAndrenyuan.jsp";
			}else{
				alert("数据已存在");
			}
			 
		 },error:function(){
	  		alert('网络异常');
	  	}
	 });
 }
 /**
  * 修改 保存
  */
function update(){
	var specialtyid = $("#specialtyNameUpdate").val();//专业id
	var organizationid = $("#organizationNameUpdate").val();//学院id
	var inputuserID = $("#yixuanrenyuanUpdate input[name='inputuserID']");
	var useridList="";//选中userid
	
	 if (organizationid==0||organizationid=="") {
			alert("请选择学院");
			return;
	 }
	 var font=$("#fontIdUpdate").html();
	 if (font=="该学院下没有用户") {
			alert("请重新选择学院");
			return;
		}
	for(var i=0;i<inputuserID.length;i++){
		useridList+=inputuserID[i].value+",";
	}
	jQuery.ajax({
		url:"/audit/asZlZlrwbmryController/updateRWBMRY.do",
		type:"POST",
		dataType:"JSON",
		async: false,
		data:{"updateCjbmdm":updateCjbmdm,"useridList":useridList,"specialtyid":specialtyid,"organizationid":organizationid},
		success:function(result){
			 if (result!=0) {
					alert("修改成功");
					$("#yixuanrenyuanUpdate").html("");
					window.location.href="/audit/page/qualityMission/bumenAndrenyuan.jsp";
				}else{
					alert("数据已存在");
				}
		},error:function(){
			alert('网络异常');
		}
	});
}

/**
 * 搜索功能
 */
function seleLikeName(){
	var likeName = $("#rName").val().trim();
	if (likeName=="请输入任务单位") {
		likeName="";
	}
	jQuery.ajax({
		url:"/audit/asZlZlrwbmryController/selectByid.do",
		type:"POST",
		dataType:"JSON",
		data:{"likeName":likeName},
		success:function(result){
			 var results=eval("("+result+")");
			var resultslist=results.list;
 			 var username12=results.usernameLevel12;
 			 var username3=results.usernameLevel3;
 			$("#tbody").html("");
 			for(var i=0; i<resultslist.length; i++){
 				var str="";
 				str += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'><td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'><input type='checkbox' name='ckBut' value='"+resultslist[i].zzid+"'/></td>";
 				str += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+resultslist[i].zlname+"</td>";
 				str += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+resultslist[i].name+"</td>";
 				str += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'><input type='hidden' value='"+resultslist[i].zzid+"'>" +
				"<a href='javascript:void(0)'>" +
				"<img src='/audit/images/bj_icon.png' onclick='addTaskUpdate(this,"+resultslist[i].cjbmdm+");' style='cursor: hand; vertical-align:middle;' border='0'></a> &nbsp;&nbsp; " +
				"<a href='javascript:void(0)'><img onclick='deleteByzid("+resultslist[i].zzid+")' src='/audit/images/sc_icon.png' style='cursor: hand;vertical-align:middle;border:0px;'></a></td></tr>";
 				$("#tbody").append(str);
 			}
		},error:function(){
			alert('网络异常');
		}
	});
	
}