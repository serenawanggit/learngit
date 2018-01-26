
$(document).ready(function(obj){
	validateLogin();
	showInfo();
});

function showInfo(){

	if ($("#rwid").val()=="0") {
		//新增
	}else {
		//编辑
		document.getElementById("title_span").innerHTML="修改任务";
		var url = "/audit/rwxxController/findRwById.do";
		$.ajax( {  
	        type : "post",  
	        url : url,  
	        async: false,
	        dataType:"json",
	        data:"rwid="+$("#rwid").val(),
	        success : function(msg) { 
	        	var json = eval('('+msg+')');
	        	if (json.rwList != null) {
	        		var rws = json.rwList;
	        		$("#rwTitle").val(rws[0].cjrwmc);
	        		$("#fbTime").val(rws[0].fbsj);
	        		$("#jzTime").val(rws[0].jzsj);
//	        		$("#fbTime").val(new Date(rws[0].fbsj).pattern("yyyy-MM-dd"));
//	        		$("#jzTime").val(rws[0].jzsj);
	        		//(new Date()).pattern("yyyy-MM-dd hh:mm:ss.S")
	        		var tbHtml = "";
	        		var bmryList = json.bmryList;
	        		console.info(bmryList);
	        		jQuery.each(rws, function(i, v) {
	        			if (v.zid != null) {
	        				tbHtml+="<tr style='background-color:#FFF;color:#333333;font-size:12px;'>"+
	        				"	<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+
	        				"		<input type='checkbox'  name='ckBut' value='"+v.zid+"' deleteid='"+v.ztbid+"'/>"+
	        				"	</td>"+
	        				"	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+v.category_name+"</td>"+
	        				"<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+v.sjbmc+"</td>"+
	        				"<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+v.cjbmmc+"</td>"+
	        				"<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
	        				"	<select name='cjr' onchange='' class='select_tips01'>";
	        				if (bmryList != null) {
	        		    		jQuery.each(bmryList, function(i, value) {
	        		    			if(value!=null){
	        		    				var cjbmmc = value.name;
	        		    				var bmryjs = value.bmryjs;
		        		    			if (cjbmmc==v.cjbmmc && bmryjs==1) {
		        		    				tbHtml+="<option value='"+value.userid+""+(value.userid==v.cjr?"'selected='selected":"")+"' >"+value.showName+"</option>";
		        						}
	        		    			}
	        		    		});
	        				}
	        				tbHtml+="	</select>"+
	        				"</td>"+
	        				"<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
	        				"	<select name='shr' onchange='' class='select_tips01'>";
	        				if (bmryList != null) {
	        		    		jQuery.each(bmryList, function(i, value) {
	        		    			if(value!=null){
	        		    			var cjbmmc =value.name;
	        		    			var bmryjs = value.bmryjs;
		        		    			if (cjbmmc==v.shbmdm && bmryjs==2) {
		        		    				tbHtml+="<option value='"+value.userid+""+(value.userid==v.shr?"'selected='selected":"")+"' >"+value.showName+"</option>";
		        						}
	        		    			}
	        		    		});
	        				}
							/*<input style='width:100px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;' value='"+v.cjrwnf+"'  type='text'>*/
	        				tbHtml+="	</select>"+
	        				"</td>"+
	        				"<td nowrap='nowrap' style='width:110px;border-top:#DADADA 1px solid;' align='center'>"+v.time_type+"</td>"+
	        				"<td nowrap='nowrap' style='width:120px;border-top:#DADADA 1px solid;' align='center'>"+
	        				"<input style='width:100px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;' value='"+v.cjrwnf+"'  type='text'>"+
	        				"</td>"+
	        				"<td nowrap='nowrap' style='width:60px;border-top:#DADADA 1px solid;' align='center'>"+
	        				"	<a href='#' onclick='deleteRW("+v.ztbid+")' value='10' style='margin-left: 0px;'>"+
	        				"	<img src='../images/sc_icon.png' style='vertical-align:middle;border:0px;'></a>"+
	        				"</td>"+
	        				"</tr>";
	        			}
	        		});
	        		$('#rwxzTable tbody').html(tbHtml);
				}
//	        	showPageManage(json,html);
	        }
		});
	}

	
}
//show增加状态数据表
function findPageZTSJB(syfwId){
	var sid = (syfwId==null?0:syfwId);
	var url = "/audit/rwxxController/selectZtsjBySyfwId.do";
	$.ajax( {  
        type : "post",  
        url : url,  
        async: false,
        dataType:"json",
        data:"syfwdm="+sid,
        success : function(msg) { 
        	var json = eval('('+msg+')');
        	var html = "<option value='0' selected='selected'>---请选择---</option>";
        	if (json.syfwList != null) {
        		jQuery.each(json.syfwList, function(i, value) {
        			html +="<option value='"+value.id+"' "+(json.syfwdm != null && json.syfwdm == value.id ? 'selected=&quot;selected&quot;':'')+">"+value.syfwmc+"</option>";
        		});
			}
        	showPageManage(json,html);
        }
	});
}

function showPageManage(json,html){
	
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(../../images/showtitlebk800.png);'>" +
				"<td align='left'>" +
				"<span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>增加状态数据表</span>" +
				"</td>" +
				"<td align='right'>" +
				"<a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:12px;' onclick='closeYS(&quot;md&quot;);'>" +
				"<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>" +
				"</td>" +
				"</tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr style='height:55px;'>";
			shtml+="<td colspan='2' valign='top' align='left' style='background-color:#FFFFFF;height:415px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
				shtml+="<div id='ireportpdfdiv' style='overflow: auto;width:100%;height:100%;font-size:12px;'>";
		shtml+="<div style='height:35px;margin-top:5px;'><span style='display:inline-block;padding-left:10px;'>选择状态数据表适用范围：</span>&nbsp;&nbsp;" +
				"<select id = 'syfw' onchange='rightbox.window.findPageZTSJB(this.value)' class='select_tips01'>"+
				html+
				"</select>" +
				"</div>";
shtml+="<table id='zbTable' style='font-size:12px;border:#DADADA 1px solid;width:100%;'" +
		"	cellpadding='0' cellspacing='0'>" +
		"	<tbody>" +
		"		<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>" +
		"			<td style='width:40px;height:30px;border-right:#DADADA 1px solid;'" +
		"				align='center'><input onclick='rightbox.window.selectAll()' name='controlAll'" +
		"				style='controlAll' id='controlAll' type='checkbox'>" +
		"			</td>" +
		"			<td style='width:80px;height:30px;' align='center'>数据分类</td>" +
		"			<td style='width:180px;height:30px;' align='center'>状态库表名</td>" +
		"			<td style='width:180px;height:30px;' align='center'>数据采集单位</td>" +
		"			<td style='width:80px;height:30px;' align='center'>数据审核单位</td>" +
		"		</tr>" ;
		if (json != null) {
			var ztsj = json.ztsjList;
			for ( var i = 0; i < ztsj.length; i++) {
				var sjflmc = ztsj[i].syfwmc;
				var cjbmmc = (ztsj[i].cjBmName);
				var timeType = (ztsj[i].timeType);
				var cjbmdm = (ztsj[i].jgid);
				var shbmdm = (ztsj[i].shbmdm);
				shtml+="<tr style='background-color:#FFF;'>" +
				"			<td style='width:40px;height:30px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'" +
				"				align='center'><input name='selected' " +
				"value='"+ztsj[i].id+"|"+(sjflmc==null?"&nbsp;":sjflmc)+"|"+(ztsj[i].sjbmc==null?"&nbsp;":ztsj[i].sjbmc)+"|"+(cjbmmc==null?"&nbsp;":cjbmmc)+"|"+(timeType==null?"&nbsp;":timeType)+"|"+cjbmdm+"|"+(shbmdm==null?"&nbsp;":shbmdm)+"'" ;
//				for ( var cv = 0,len = json.ckQuota.length; cv < len; cv++) {
//					if (json.ckQuota[cv].qid==ztsj[i].measureId) {
//						shtml+=" disabled='disabled' checked='true' ";
//					}
//				}
				shtml+="	type='checkbox'>" +
				"			</td>" +	
				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+(sjflmc==null?"":sjflmc)+"</td>" +
				"			<td style='width:180px;border-top:#DADADA 1px solid;'" +
				"				align='center'>" +(ztsj[i].sjbmc==null?"":ztsj[i].sjbmc)+
				"			</td>" +
				"			<td style='width:180px;border-top:#DADADA 1px solid;' align='center' name='cjbmmc'>"+(cjbmmc==null?"&nbsp;":cjbmmc)+"</td>" +
				
				"			<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+(shbmdm==null?"&nbsp;":shbmdm)+"</td>" +
				"		</tr>";
			}
		
		}				
 shtml+="	</tbody>" +
		"</table>";
 
 
				shtml+="</div>";//div结束
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr height='30px'><td colspan='5' align='center' style='width:100%;height:30px;background-color:#FFFFFF;border:#DADADA 0px solid;'>" +
		"<div class='buttom_tips01'>" +
		"<a href='javascript:void(0)' onclick='rightbox.window.saveZtsjb();' >保存</a>&nbsp;&nbsp;&nbsp;&nbsp;" +
		"<a href='javascript:void(0)' onclick='closeYS(&quot;md&quot;);' >取消</a>" +
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

function saveZtsjb(){
	var html = "<option value='0' selected='selected'>---请选择---</option>";
	var bmryList = null;
	var bmryList1= null;
	//查询人员
	var url = "/audit/rwxxController/selectBmry.do";
	$.ajax( {  
        type : "post",  
        url : url,  
        dataType:"json",
        async: false,
        success : function(msg) { 
        	var json = eval('('+msg+')');
        	bmryList = json.bmryList;
        	bmryList1= json.bmryList1;
        }
	});
	
	var checklist = parent.document.getElementsByName ("selected");
	var allid="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked && checklist[i].disabled==false){
			allid+=checklist[i].value+"&";
		}
	}
	if(allid.length<1){
		alert("请选择要保存的状态数据表");
		return;
	}
	var newalle=allid.substring(0,allid.length-1);
	var ztsjbArr = newalle.split("&");
	
//	var rwxzTable = $('#rwxzTable', parent.document);
	var tbHtml = "";
	for ( var i = 0; i < ztsjbArr.length; i++) {
		var ztsj = ztsjbArr[i].split("|");
		tbHtml+="<tr style='background-color:#FFF;color:#333333;font-size:12px;'>"+
		"	<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+
		"		<input type='checkbox'  name='ckBut' value='"+ztsj[0]+"'/>"+
		"	</td>"+
		"	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+ztsj[1]+"</td>"+
		"<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+ztsj[2]+"</td>"+
		"<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+ztsj[3]+"</td>"+
		"<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
		"	<select name='cjr' onchange='' class='select_tips01'>";
		if (bmryList1 != null) {
    		jQuery.each(bmryList1, function(i, value) {
//    			var cj=value.asCjBmxxs;
//    			var cjbmmc = value.asCjBmxxs.cjbmmc;
   			if (value.name==ztsj[3]&& value.bmryjs==1) {
   				tbHtml+="<option value='"+value.userid+"' >"+value.showName+"</option>";
				}
    		});
		}
		tbHtml+="	</select>"+
		"</td>"+
		"<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
		"	<select name='shr' onchange='' class='select_tips01'>";
		if (bmryList1 != null) {
    		jQuery.each(bmryList1, function(i, value) {
    			//value.name==ztsj[3]&& value.bmryjs==2
    			if (value.name==ztsj[6]&& value.bmryjs==2) {
       				tbHtml+="<option value='"+value.userid+"' >"+value.showName+"</option>";
    				}
    		});
		}
		tbHtml+="	</select>"+
		"</td>"+
		"<td nowrap='nowrap' style='width:110px;border-top:#DADADA 1px solid;' align='center'>"+ztsj[4]+"</td>"+
		"<td nowrap='nowrap' style='width:120px;border-top:#DADADA 1px solid;' align='center'>"+
		"	<input style='width:100px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;'  type='text'>"+
		"</td>"+
		"<td nowrap='nowrap' style='width:60px;border-top:#DADADA 1px solid;' align='center'>"+
		"	<a href='#' onclick='del(this);' value='10' style='margin-left: 0px;'>"+
		"	<img src='../images/sc_icon.png' style='vertical-align:middle;border:0px;'></a>"+
		"</td>"+
		"</tr>";
	}
	$('#rwxzTable tbody').append(tbHtml);
	parent.closeYS("md");
}

//Delete TR
function del(o){
	var oTB = document.getElementById("rwxzTable");
	var oInpt = oTB.getElementsByTagName("input");
	if (o == 'chk')
	{
		for (var i=1; i<oInpt.length-1 ; i++)
		{
			if (oInpt[i].type == 'checkbox' && oInpt[i].checked)
			{
				var oRow = oInpt[i].parentNode.parentNode.sectionRowIndex;
				oTB.deleteRow(oRow);
				i--;
			}
		}
	}else{
		var oDel = o.parentNode.parentNode.sectionRowIndex+1;
		oTB.deleteRow(oDel);
	}
}

function deleteRW(id){
	if(confirm("是否删除此数据？")){
		$.ajax({
			 url:"/audit/rwxxController/deleteRW.do",
			 type:"POST",
			 data:{"ztbid":id},
			 success:function(data){
				 alert("删除成功！");
				 //window.location.href="/audit/rwxxController/findRwById.do";
				 showInfo();
			 },
			 error:function(){
				 alert("删除失败！");
			 }
		});
	}
}


//保存新增任务
function saveRw(){
	var rwid = $("#rwid").val();
	var rwTitle = $("#rwTitle").val();
	var fbTime = $("#fbTime").val();
	var jzTime = $("#jzTime").val();
	var ztsjArr = new Array();
	var checklist = document.getElementsByName ("ckBut");
	var allid="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked && checklist[i].disabled==false){
//			allid+=checklist[i].value+"&";
			allid+=i+"&";
		}
	}
	if (rwTitle=="") {
		alert("请填写任务名称!");
		return;
	}
	if (fbTime=="") {
		alert("请填写任务发起时间!");
		return;
	}
	if (jzTime=="") {
		alert("请填写任务截止时间!");
		return;
	}
	/*if (allid=="") {
		alert("请填选择状态数据表!");
		return;
	}*/
	if(fbTime>jzTime){
		alert("发布时间大于截止时间");
		return;
	}
	var tbr="";
	var shr="";
	var err = "";
	var arrCk = allid.split("&");
	var rwidarray = new Array();
	jQuery("#rwxzTable tbody tr").each(function(j){
			var tds = jQuery(this).find('td');
			var trValue = "";
			
			tds.each(function(i){
					if (i==0) {
						trValue+=jQuery(this).find("input").val();
						trValue+="$";
						rwidarray.push(jQuery(this).find("input").val());
					}
					if (i==4) {
						trValue+=jQuery(this).find("select").val();
						trValue+="$";
						tbr+=jQuery(this).find("select").val();
					}
					if (i==5) {
						trValue+=jQuery(this).find("select").val();
						trValue+="$";
						shr=jQuery(this).find("select").val();
					}
					if (i==7) {
						trValue+=jQuery(this).find("input").val();
						if (jQuery(this).find("input").val() == "") {
							err+="请填写统计时间!";
							return;
						}
					}
			});
			ztsjArr.push(trValue);
        
    });
	
	if (err!="") {
		alert("请填写统计时间!");
		return;
	}
	if(tbr==null|| shr==null){
		alert("填报人或审核人不能为空！");
		return;
	}
	var nary=rwidarray.sort();
	for(var i=0;i<rwidarray.length;i++){
		if (nary[i]==nary[i+1]){
		    alert("状态库表名重复，请删除一个在保存！");
	        return;
		} 
	}
	var url = "/audit/rwxxController/saveRw.do";
	$.ajax( {  
        type : "post",  
        url : url, 
        dataType:"json",
        async: false,
        data:"rwTitle="+rwTitle+"&fbTime="+fbTime+"&jzTime="+jzTime+"&ztsjArr="+ztsjArr+"&rwid="+rwid,
        success : function(msg) { 
        	alert("保存成功！");
        	showInfo();
//        	var json = eval('('+msg+')');
        	//window.location.href="../page/dataAcquisition/taskManage.jsp";
        },
	    error : function(){
	    	alert("保存失败！");
	    }
	});
	
}

/**
 * 全选
 */
function onchecked(){
	var tr= $("#dataTable").find("tr input");
	if($("#checkbox").attr("checked")){
		tr.attr("checked",true);
	}else{
		tr.attr("checked",false);
	}
}
/**
 * 取消全选的状态
 */
function outChecked(){
	$("#checkbox").attr("checked",false);
}

function deleteztb(){
	var checklist = document.getElementsByName ("ckBut");
	var allid="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked && checklist[i].disabled==false){
			allid+=$(checklist[i]).attr("deleteid")+"&";
		}
	}
	if(allid.length<=0){
		alert("请选择要删除的状态数据表！");
		return;
	}
	if(confirm("是否删除选中数据？")){
		$.ajax({
			 url:"/audit/rwxxController/deleteRWpl.do",
			 type:"POST",
			 data:{"ztbid":allid},
			 success:function(data){
				 alert("删除成功！");
				 //window.location.href="/audit/rwxxController/findRwById.do";
				 showInfo();
			 },
			 error:function(){
				 alert("删除失败！");
			 }
		});
	}
}