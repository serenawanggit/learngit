
$(document).ready(function(){
	validateLogin();
	findPageByMC();
});

//初始化分页查询指标
var icp=1;
function findPageByMC(){
	//查询全部指标树
	var rName = $("#rName").val();
	var url = "/audit/rwxxController/selectRwByMC.do";
	$.ajax( {  
	    type : "post",  
	    url : url, 
	    dataType:"json",
	    data:"rName="+(rName.trim()==null?'':rName.trim())+"&pageNo="+icp,
	    success : function(msg) {
	        var ztr = eval('('+msg+')');
//	        var rwxxs = ztr.rwxxs;
	        if (ztr == null) {
				return;
			}
	        $("#rName").val(ztr.rName);
	        jQuery("#rwTable tbody").empty();
	        var html = "";
	        jQuery.each(ztr.rwList, function(i, value) {
	        	html += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'>";
	        	html +="	<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
	        	html +="	<input type='checkbox' name='ckBut' value='"+value.id+"' />";
	        	html +="	</td>";
	        	html +="	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>";
	        	html +="<a href='javascript:void(0)' onclick='taskSchedule("+value.id+")'  value='"+value.id+"' style='margin-left: 10px;text-decoration:none;'>";
	        	html +=value.cjrwmc+"</a>";
	        	html +="   </td>";
	        	html +="	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+value.fbsj+"</td>";
	        	html +="	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+value.jzsj+"</td>";
	        	html +="	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>";
	        	/*html += value.rwzt;*/
	        	if(value.rwzt==0){
	        		html += "未通过";
	        	}
	        	if(value.rwzt==1){
	        		html += "通过";
	        	}
	        	html +=     "</td>";
	        	html +="	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>";
	        	html +="	<a href='#' onclick='addTask("+value.id+");' value='1'>";
	        	html +="	<img src='../../images/bj_icon.png' style='vertical-align:middle;' border='0'></a>";
	        	html +="	<a href='#' onclick='deleteRwxx("+value.id+");' value='10' style='margin-left: 10px;'>";
	        	html +="		<img src='../../images/sc_icon.png' style='vertical-align:middle;border:0px;'>";
	        	html +="	</a>";
	        	html +="	</td>";
	        	html +="</tr>";
	    	});
	        
	        jQuery("#rwTable tbody").append(html);
	        
	        jQuery("#pageTb tbody").empty();
	        var pageHtml = "<tr>"+
	        "	<td align='left'>"+
	        "	<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>"+
	        "	</td>"+
	        "	<td align='right'>"+
	        "	<span style='display:inline-block;margin-right:40px;'>"+
	        "	<img value='1_"+ztr.totalPage+"' onclick='pagefindindicator(this);'"+
	        "		src='../../images/pgicon-first_press.png' style='vertical-align:middle;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-first.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-first_press.png;&quot;'>"+
	        "	<img value='2_"+ztr.totalPage+"' onclick='pagefindindicator(this);'"+
	        "		src='../../images/pgicon-pre_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-pre.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-pre_press.png;&quot;'>"+
	        "	<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>"+
	        ztr.pageNo+"/"+ztr.totalPage+"页</span>"+
	        "	<img value='3_"+ztr.totalPage+"' onclick='pagefindindicator(this);'"+
	        "			src='../../images/pgicon-next_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-next.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-next_press.png;&quot;'>"+
	        "	<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;"+
	        "	line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>"+
	        "	<img value='4_"+ztr.totalPage+"' onclick='pagefindindicator(this);'"+
	        "			src='../../images/pgicon-last_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-last.png&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-last_press.png&quot;'>"+
	        "	</span>"+
	        "	</td>"+
	        "</tr>";	        
	        jQuery("#pageTb tbody").append(pageHtml);
	    }
	});
	
}

//数组去重复
function getArray(a) {
	var hash = {}, len = a.length, result = [];

	for ( var i = 0; i < len; i++) {
		if (!hash[a[i]]) {
			hash[a[i]] = true;
			result.push(a[i]);
		}
	}
	return result;
}


//parent.parent.tck("温馨提示","已经是最前面的节点",'300px','200px');

//新增
function addTask(rwid){
//	window.location.href="addTask.jsp?rwid="+1;
	document.getElementById("bjForm").action = "/audit/rwxxController/bjRwxx.do?id="+rwid;
	document.getElementById("bjForm").submit();
}

//分页查询指标项
function pagefindindicator(obj){
	outChecked();
	var p=obj.getAttribute("value").split("_");
	if(p[0]=="1"){//首页
	    icp="1";
		findPageByMC();
		return;
	}else if(p[0]=="2"){//上一页
		if(icp=="1"){
			alert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		findPageByMC();
	}else if(p[0]=="3"){//下一页
		if(icp==p[1]){
			alert("已经是最后一页了!");
			return;
		}
		icp=parseInt(icp)+1;
 		findPageByMC();
	}else if(p[0]=="4"){//下一页
		var pnos=$("#pagenotext").val();
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
				findPageByMC();
			}
		}
	}
}


function deleteRwxx(rwId){
	//查询全部指标树
	if(confirm("确认要删除？")){
		var url = "/audit/rwxxController/deleteRwxx.do";
		$.ajax( {  
		    type : "post",  
		    url : url,  
		    data:"rwId="+rwId,
		    success : function(msg) {
		    	findPageByMC();
		    },
		    error: function(){
		    	alert("有未完成的任务,无法删除该任务！");
		    }
		    
		});
	}
	
}

function plDeleteRwxx(){
	var checklist = document.getElementsByName ("ckBut");
	var allid="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked){
			allid+=checklist[i].value+"$";
		}
	}
	if(allid.length<1){
		alert("请选择要删除的任务");
		return;
	}
	var newalle=allid.substring(0,allid.length-1);
	//查询全部指标树
	var url = "/audit/rwxxController/plDeleteRwxx.do";
	$.ajax( {  
	    type : "post",  
	    url : url,  
	    data:"rwIds="+newalle,
	    success : function(msg) {
	    	findPageByMC();
	    },
	    error:function(){
	    	alert("有任务正在进行中无法删除！");
	    }
	});
}

//任务进度
function showRwjd(rwid){
	document.getElementById("bjForm").action = "/audit/rwxxController/showRwjd.do?id="+rwid;
	document.getElementById("bjForm").submit();
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
 * 取消全选按钮选中
 */
function outChecked(){
	$("#checkbox").attr("checked",false)
}

/**
 * 根据任务id查询子任务进度
 * @param id
 */
function taskSchedule(id){
	$("#tablecontent").hide();
	$("#tableSchedule").show();
	$("#back").show();
	$.ajax({
		type:"POST",
		url:"/audit/rwxxController/showTaskSchedule.do",
		data:{"id":id},
		dataType:"json",
		success:function(data){
			var result=eval("("+data+")");
			result=result.list;
			var str="";
			for ( var i = 0; i < result.length; i++) {
				var str1="";
				var str2="";
				 if(result[i].cjzt==0 && result[i].shzt==0){
					   str1+="数据提交&nbsp;&nbsp;<img src='/audit/images/wrong.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
					   str2+="数据审核&nbsp;&nbsp;<img src='/audit/images/wrong.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
				   }
				 if(result[i].cjzt==1 && result[i].shzt==0){
					   str1+="未校验&nbsp;&nbsp;<img src='/audit/images/wrong.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
					   str2+="数据审核&nbsp;&nbsp;<img src='/audit/images/wrong.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
				   }
				 if(result[i].cjzt==2 && result[i].shzt==0){
					   str1+="已校验&nbsp;&nbsp;<img src='/audit/images/wrong.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
					   str2+="数据审核&nbsp;&nbsp;<img src='/audit/images/wrong.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
				   }
				   if(result[i].cjzt==3 && result[i].shzt==0){
					   str1+="数据提交&nbsp;&nbsp;<img src='/audit/images/correct.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
					   str2+="数据审核&nbsp;&nbsp;<img src='/audit/images/wrong.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
				   }
				   if(result[i].cjzt==1 && result[i].shzt==1){
					   str1+="数据提交&nbsp;&nbsp;<img src='/audit/images/correct.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
					   str2+="数据审核&nbsp;&nbsp;<img src='/audit/images/correct.png' style='vertical-align:middle;height:12px;width:12px;' border='0';>";
				   }
			   str+="<tr>";
				   str+="<td style='width:160px;height:40px;border-top:#DADADA 1px solid;' align='center' >"+result[i].sjbmc+"</td>";
				   str+="<td style='width:160px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+result[i].cjrm+"</td>";
				   str+="<td style='width:160px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+str1+"</td>";
				   str+="<td style='width:160px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+result[i].shrm+"</td>";
				   str+="<td style='width:160px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+str2+"</td>";
				  /* str+="<td style='width:160px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
				   if(result[i].cjzt==0 && result[i].shzt==0){
					   str+="数据提交x &nbsp;&nbsp;&nbsp; 数据审核x";
				   }
				   if(result[i].cjzt==3 && result[i].shzt==0){
					   str+="数据提交√ &nbsp;&nbsp;&nbsp; 数据审核x";
				   }
				   if(result[i].cjzt==1 && result[i].shzt==1){
					   str+="数据提交√ &nbsp;&nbsp;&nbsp; 数据审核√";
				   }</td>*/
			   str+="</tr>";
			}
			$("#tableSchedule_tbody").html(str);
		},
		error:function(){
			
		}
	});
	
}

function goback(){
	$("#tablecontent").show();
	$("#tableSchedule").hide();
	$("#back").hide();
}
