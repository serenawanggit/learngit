$(function(){
	showTable();
	validateLogin();
});

//初始化列表
function showTable(){
	var nowYear = "";
	//获取年份
	 var strCookie = document.cookie;
	 var cookies = strCookie.split("; ");
	 for(var i=0;i<cookies.length;i++){
	 	var cookie = cookies[i];
	 	var details = cookie.split("=");
	 	if(details[0] == "assessYear"){
	 		nowYear = eval(details[1]);
	 	}
	 }
	 $("#syear").html(nowYear);
	
	var syear=$("#syear").text();
	 $.ajax({
		   url:"/audit/assessmentTask/showAssessmentTask.do",
		   type:"POST",
		   data:{"syear":syear},
		   dataType:"json",
		   success: function(data){
			  /* var result=eval('('+data+')');*/
			   var str="";
			   var result=data.assessment;
			   for ( var int = 0; int < result.length; int++) {
				      str+="<tr>";
				        str+="<td>";
				        str+=result[int].academyName;
				        str+="</td>";
				        str+="<td>";
				        str+=result[int].pgzyName;
				        str+="</td>";
				        str+="<td>";
				        str+=result[int].userName;
				        str+="</td>";
				        str+="<td>";
				        str+=result[int].iscomplete==0?"未完成":"已完成";
				        str+="</td>";
				        str+="<td>";
				      //  str+="<a href=\"encodeURI(/audit/page/majorEvaluation/sinceScoreZJ.jsp?syear='"+syear+"'&specialtyname='"+result[int].pgzyName+"'&specialtyid='"+result[int].pgzyId+"')\">进入网评</a>";
				        str+="<a href='javascript:void(0)' onclick=\"showReport('"+syear+"','"+result[int].pgzyName+"','"+result[int].pgzyId+"','"+result[int].userId+"','"+result[int].pgtxId+"')\">进入网评</a>";
				        str+="</td>";
				      str+="</tr>";
		        }
			  $("#showTbody").html(str);
		      
		   },
		   error: function(){
			   alert("你不是网评专家");
		   }
	 });
	
}

function showReport(syear,name,id,userId,txId){
	 var url = "/audit/page/majorEvaluation/sinceScoreZJ.jsp";
	 window.location.href=url + "?syear=" + syear+"&sname="+encodeURI(name)+"&id="+id+"&userId="+userId+"&txId="+txId;
}

