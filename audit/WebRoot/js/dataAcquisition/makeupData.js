$(function(){
	validateLogin();
	showData();
});

 var icp=1;
function showData(){
	$.ajax({
		  type:"POST",
		  url:"/audit/odsTTeachStatusController/showOdsTTeachInfo.do",
		  dataType:"json",
		  data:{"pageNo":icp},
          success:function(data){
        	  var result=eval("("+data+")");
        	  res=result.odstteachlists;
        	  var odsProfession=result.odsProfessionlists;
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
				      str+="<select style='width:250px;text-align: center'><option id='0' >--请选择--</option>";
				         for ( var j = 0; j < odsProfession.length; j++) {
							str+="<option id='"+odsProfession[j].profession_id+"' ";
							    if(odsProfession[j].profession_id==res[i].profession_id){
							    	str+="selected='selected' ";
							    }
							str+=">"+odsProfession[j].profession_name+"</optipn>";
				         }
				      str+="</select>";
				    str+="</td>";
				 str+="</tr>";
			  }
        	  if(str==""){
        		  str+="<tr><td colspan='4'><center style='color:red;font-size:14px'>无数据</center></td></tr>";
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
        	 if(res[0]!=undefined){
        		 $("#academeName").html(res[0].department_name);
            	 $("#syear").html(res[0].insert_version);
        	 }
        	
          },
          error: function (){
        	  alert("你不是补录人员无法查看！");
          }
	});
}


//分页查询
function pagefindindicator(obj){
	var p=obj.getAttribute("value").split("_");
	if(p[0]=="1"){//首页
	    icp="1";
	    showData();
		return;
	}else if(p[0]=="2"){//上一页
		if(icp=="1"){
			alert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		 showData();
	}else if(p[0]=="3"){//下一页
		
		if(icp==p[1]){
			alert("已经是最后一页了!");
			return;
		}
		icp=parseInt(icp)+1;
		showData();
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
				showData();
			}
		}
	}
}

function saveData(){
	var dataTr= $("#dataTable").find("tr");
	var array = new Array();
	for ( var i = 0; i < dataTr.length; i++) {
		var select = $(dataTr[i]).find("select");
		var object = {};
		
		object.id = $(dataTr[i]).find("td").attr("id");
		object.specailtyName = $(dataTr[i]).find("select").val();
		object.specailtyId = $(select).find("option:selected").attr("id");
		array.push(object);
	}
	$.ajax({
		 type:"POST",
		 url:"/audit/odsTTeachStatusController/saveOdsTTeachInfo.do",
		 data:{"data":JSON.stringify(array)},
		 dataType:"json",
		 success:function(){
			 alert("保存成功！");
		 },
		 error:function(){
			 alert("保存失败！");
		 }
	});
}

function submitData(){
	if(confirm("数据是否已全部修改完成并保存？")){
		$.ajax({
			 type:"POST",
			 url:"/audit/odsTTeachStatusController/submitOdsTTeachInfo.do",
			 data:{},
			 dataType:"json",
			 success:function(){
				 alert("提交成功！");
				 showData();
			 },
			 error:function(){
				 alert("提交失败！");
			 }
		});
	}
}

