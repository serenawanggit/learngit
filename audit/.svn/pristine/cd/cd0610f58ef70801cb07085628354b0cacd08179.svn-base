$(function(){
	validateLogin();
	showCheckData();
});

var icp=1;
function showCheckData(){
	$.ajax({
		type:"POST",
		url:"/audit/odsTTeachStatusController/showCheckOdsTTeachInfo.do",
		dataType:"json",
		data:{"pageNo":icp},
		success:function(data){
		    var result=eval("("+data+")");
		    res=result.odstteachlists;
	      	  var str="";
	    	  for ( var i = 0; i < res.length; i++) {
				 str+="<tr>";
				    str+="<td id='"+res[i].id+"'>";
				      str+=res[i].teacher_num;
				    str+="</td>";
				    str+="<td>";
				      str+=res[i].teacher_name;
				    str+="</td>";
				    str+="<td>";
				      str+=res[i].department_name;
				    str+="</td>";
				    str+="<td>";
				      /*str+="<select style='width:250px;text-align: center'><option id='0' >--请选择--</option>";
				         for ( var j = 0; j < odsProfession.length; j++) {
							str+="<option id='"+odsProfession[j].profession_id+"' ";
							    if(odsProfession[j].profession_id==res[i].profession_id){
							    	str+="selected='selected' ";
							    }
							str+=">"+odsProfession[j].profession_name+"</optipn>";
				         }
				      str+="</select>";*/
				    str+=res[i].profession_name;
				    str+="</td>";
				    str+="<td>";
				       if(res[i].examine_status==2 || res[i].examine_status==1){
				    	   str+="<input type='checkbox' onclick=\"checkedChoiceAll('tableId','dataTable','checkbox');\"/>";
				       }else if(res[i].examine_status==3){
				    	   str+="已通过";
				       }
				    str+="</td>";
				 str+="</tr>";
			  }
	    	  
	    	  if(str==""){
        		  str+="<tr><td colspan='5'><center style='color:red;font-size:14px'>无数据</center></td></tr>";
        	  }
	    	  $("#dataTable").html(str);
	    	  
	    	  var totalPage=result.totalPage==0?1:result.totalPage;
	  	        var pageHtml = "<tr>"+
	  	        "	<td align='left'>"+
	  	        "	<span style='display:inline-block;margin-left:40px;font-size:13px;'>&nbsp;共 <span id='count'></span>&nbsp;条</span>"+
	  	        "	</td>"+
	  	        "	<td align='right'>"+
	  	        "	<span style='display:inline-block;margin-right:40px;'>"+
	  	        "	<img value='1_"+totalPage+"' onclick='pagefindindicator(this);'"+
	  	        "		src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'"+
	  	        "			onmouseover='this.src=&quot;/audit/images/pgicon-first.png;&quot;'"+
	  	        "			onmouseout='this.src=&quot;/audit/images/pgicon-first_press.png;&quot;'>"+
	  	        "	<img value='2_"+totalPage+"' onclick='pagefindindicator(this);'"+
	  	        "		src='/audit/images/pgicon-pre_press.png'"+
	  	        "			style='vertical-align:middle;margin-left:5px;'"+
	  	        "			onmouseover='this.src=&quot;/audit/images/pgicon-pre.png;&quot;'"+
	  	        "			onmouseout='this.src=&quot;/audit/images/pgicon-pre_press.png;&quot;'>"+
	  	        "	<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>"+
	  	      result.pageNo+"/"+totalPage+"页</span>"+
	  	        "	<img value='3_"+totalPage+"' onclick='pagefindindicator(this);'"+
	  	        "			src='/audit/images/pgicon-next_press.png'"+
	  	        "			style='vertical-align:middle;margin-left:5px;'"+
	  	        "			onmouseover='this.src=&quot;/audit/images/pgicon-next.png;&quot;'"+
	  	        "			onmouseout='this.src=&quot;/audit/images/pgicon-next_press.png;&quot;'>"+
	  	        "	<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;"+
	  	        "	line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>"+
	  	        "	<img value='4_"+totalPage+"' onclick='pagefindindicator(this);'"+
	  	        "			src='/audit/images/pgicon-last_press.png'"+
	  	        "			style='vertical-align:middle;margin-left:5px;'"+
	  	        "			onmouseover='this.src=&quot;/audit/images/pgicon-last.png&quot;'"+
	  	        "			onmouseout='this.src=&quot;/audit/images/pgicon-last_press.png&quot;'>"+
	  	        "	</span>"+
	  	        "	</td>"+
	  	        "</tr>";	        
	  	         $("#pageTb tbody").html(pageHtml);
	        	 $("#count").html(result.count); 
	    	  $("#academeName").html(res[0].department_name);
	          $("#syear").html(res[0].insert_version);
	          $("#passState").val(result.passState);
		},
		error:function(){
			alert("你不是审核人无法查看！");
		}
	});
}

 /**
 * 审核通过
 */
function approvedBy(){
	// 院级时 passState 为2。 校级时passState 为3
	var passState=$("#passState").val();
	var tr= $("#dataTable").find("tr input:checked");
	var array = new Array();
    for ( var i = 0; i < tr.length; i++) {
    	var teacher={};
    	teacher.id=  $(tr[i]).parent().parent().find("td:first").text();
	    array.push(teacher);
	}
	if(confirm("确认通过？")){
		$.ajax({
			type:"POST",
			url:"/audit/odsTTeachStatusController/approvedBy.do",
			data:{"passState":passState,"teacher":JSON.stringify(array)},
			success:function (){
				alert("审批成功！");
				showCheckData();
			},
			error:function(){
				alert("审批失败！");
			}
		});
	}
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
/**
 * 未通过
 */
function notPass(){
	var tr= $("#dataTable").find("tr input:checked");
	var array = new Array();
    for ( var i = 0; i < tr.length; i++) {
    	var teacher={};
    	teacher.id=  $(tr[i]).parent().parent().find("td:first").text();
	    array.push(teacher);
	}
	$.ajax({
		 type:"POST",
		 url:"/audit/odsTTeachStatusController/notPass.do",
		 data:{"teacher":JSON.stringify(array)},
		 success:function(){
			 alert("审批成功！");
				showCheckData();
		 },
		 error:function(){
			 alert("审批失败！");
		 }
	});
}


//分页查询
function pagefindindicator(obj){
	outChecked();
	var p=obj.getAttribute("value").split("_");
	if(p[0]=="1"){//首页
	    icp="1";
	    showCheckData();
		return;
	}else if(p[0]=="2"){//上一页
		if(icp=="1"){
			alert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		showCheckData();
	}else if(p[0]=="3"){//下一页
		
		if(icp==p[1]){
			alert("已经是最后一页了!");
			return;
		}
		icp=parseInt(icp)+1;
		showCheckData();
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
				showCheckData();
			}
		}
	}
}
