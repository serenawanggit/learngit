
$(document).ready(function(){
	validateLogin();
	findRwJd();
});
var condition=null;
var title=null;
var icp=1;
function findRwJd(){
	var url = "/audit/rwxxController/showTianbao.do";
	$.ajax( {  
		type : "post",  
		url : url,
		dataType:"json",
		async: false,
		data:"rwid="+$("#rwid").val(),
		success : function(msg) { 
			var json = eval('('+msg+')');
			var rw = json.rw;
			var jd=json.jd.toFixed(2);
			document.getElementById('rwmc').innerHTML=rw.cjrwmc;
			document.getElementById('jzTime').innerHTML=rw.jzsj;
			document.getElementById('jd').innerHTML=jd+"%";
			$('#dwcTable tbody').empty();
			$('#ysbTable tbody').empty();
			$('#yshTable tbody').empty();
			$('#bhTable tbody').empty();
			if (json.ztsj != null) {
				var zt = json.ztsj;
				var dwcHtml = "";
				var ysbHtml = "";
				var yshHtml = "";
				var bhHtml = "";
				for ( var i = 0; i < zt.length; i++){
					if (zt[i].cjzt==0 && zt[i].shzt==0) {
						dwcHtml +=
						"<tr style='background-color:#FFF;color:#333333;font-size:12px;'>"+
						"	<td nowrap='nowrap' style='width:138px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+
						zt[i].sjbmc+"</td>"+
						"	<td nowrap='nowrap' style='width:169px;border-top:#DADADA 1px solid;' align='center'>"+
						"   未导入</td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<a href='#' onclick='getExcle("+zt[i].cjmbdm+");'>"+
						"		模版下载"+
						"	</a>"+
						"	</td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"	</td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"   <form action='' id='eform"+i+"' method='post' enctype='multipart/form-data'>"+
						"		<input name='file' id='eff"+i+"'  style='margin-top:11px;width:180px' type='file' accept='.xls;*.xlsx'>"+
						"   </form>"+
						"	</td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'> <input type='text' id='id"+i+"' value='"+zt[i].id+"' style='display:none'><input type='button' id='"+zt[i].cjmbdm+"'  value='提交审核' onclick='submitExcel("+i+",this,"+rw.id+")'/></td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>"+
						"</tr>";
					}else if (zt[i].cjzt==1 && zt[i].shzt==0) {
						ysbHtml += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'>"+
						"	<td nowrap='nowrap' style='width:138px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+
						zt[i].sjbmc+"</td>"+
						"	<td nowrap='nowrap' style='width:169px;border-top:#DADADA 1px solid;' align='center'>"+
						"   未校验</td>"+
				/*		"	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<a href='#' onclick='getExcle("+zt[i].cjmbdm+");'>"+
						"		模版下载"+
						"	</a>"+
						"	</td>"+*/
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"   <a href='#' onclick=\"checkExcel('"+zt[i].sjbmc+"',"+zt[i].cjmbdm+","+zt[i].rwid+","+zt[i].cjzt+")\">校验</a></td>"+
						"	<td nowrap='nowrap'  style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<input type='button' onclick='showContent("+zt[i].cjmbdm+","+zt[i].rwid+","+zt[i].cjzt+");' value='查看' /></td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'><input type='button'   value='取消提交' onclick='cancelSubmit("+zt[i].rwid+","+zt[i].cjmbdm+")' /></td>"+
						"</tr>";
					}else if (zt[i].cjzt==2 && zt[i].shzt==0) {
						ysbHtml += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'>"+
						"	<td nowrap='nowrap' style='width:138px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+
						zt[i].sjbmc+"</td>"+
						"	<td nowrap='nowrap' style='width:169px;border-top:#DADADA 1px solid;' align='center'>"+
						"   校验完成</td>"+
				/*		"	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<a href='#' onclick='getExcle("+zt[i].cjmbdm+");'>"+
						"		模版下载"+
						"	</a>"+
						"	</td>"+*/
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"   <a href='#' onclick=\"checkExcel('"+zt[i].sjbmc+"',"+zt[i].cjmbdm+","+zt[i].rwid+")\">校验</a></td>"+
						"	<td nowrap='nowrap'  style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<input type='button' onclick='showContent("+zt[i].cjmbdm+","+zt[i].rwid+","+zt[i].cjzt+");' value='查看' /></td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'><input type='button'   value='取消提交' onclick='cancelSubmit("+zt[i].rwid+","+zt[i].cjmbdm+")' /></td>"+
						"</tr>";
					}else if (zt[i].cjzt==3 && zt[i].shzt==0) {
						ysbHtml += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'>"+
						"	<td nowrap='nowrap' style='width:138px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+
						zt[i].sjbmc+"</td>"+
						"	<td nowrap='nowrap' style='width:169px;border-top:#DADADA 1px solid;' align='center'>"+
						"   数据已提交等待审核</td>"+
				/*		"	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<a href='#' onclick='getExcle("+zt[i].cjmbdm+");'>"+
						"		模版下载"+
						"	</a>"+
						"	</td>"+*/
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<td nowrap='nowrap'  style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<a href='#' onclick='showContent("+zt[i].cjmbdm+","+zt[i].rwid+","+zt[i].cjzt+");'>查看</a></td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'><input type='button'   value='取消提交' onclick='cancelSubmit("+zt[i].rwid+","+zt[i].cjmbdm+")' /></td>"+
						"</tr>";
					}
					else if (zt[i].cjzt==1 && zt[i].shzt==1) {
						yshHtml += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'>"+
						"	<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+
						zt[i].sjbmc+"</td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
						"   已审核</td>"+
						"	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' >"+
						"	<a href='#'style='float: right' onclick='exportTable("+zt[i].cjmbdm+","+zt[i].rwid+",2);'>"+
						"		下载"+
						"	</a>"+
						"	</td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>&nbsp;"+
						"   <a href='#' onclick='showPassData("+zt[i].cjmbdm+","+zt[i].rwid+","+zt[i].cjzt+");'>查看</a>";
						"	</td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>"+
						"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>"+
						"</tr>";
					}else if (zt[i].cjzt==0 && zt[i].shzt==2) {
						bhHtml += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'>"+
						"	<td nowrap='nowrap' style='width:80px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+
						zt[i].sjbmc+"</td>"+
						"	<td nowrap='nowrap' style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+
						"   未通过</td>"+
						"	<td nowrap='nowrap' style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<a href='#' onclick='downNoPassData("+zt[i].cjmbdm+","+zt[i].rwid+")'>"+
						"		下载未通过数据"+
						"	</a>"+
						"   </td>"+
						"	<td nowrap='nowrap' style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+
						"	<a href='#' onclick='getExcle("+zt[i].cjmbdm+");'>"+
						"		模版下载"+
						"	</a>"+
						"	</td>"+
						"	<td nowrap='nowrap' style='width:80px;border-top:#DADADA 1px solid;' align='center'><label style='color:red'>未通过理由 :  </label><span>"+zt[i].bhly+"<span>"+
						"	</td>"+
						"	<td nowrap='nowrap' style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+
						"   <form action='' id='eform"+i+"' method='post' enctype='multipart/form-data'>"+
						"		<input name='file' id='eff"+i+"'  style=' margin-top:11px;width:180px' type='file' accept='.xls,.xlsx'>"+
						"   </form>"+
						"	</td>"+
						"	<td nowrap='nowrap' style='width:80px;border-top:#DADADA 1px solid;' align='center'> <input type='text' id='id"+i+"' value='"+zt[i].id+"' style='display:none'><input type='button' id='"+zt[i].cjmbdm+"'  value='提交审核' onclick='submitExcel("+i+",this,"+rw.id+")'/></td>"+
						/*"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>"+*/
						"</tr>";
					}else if (zt[i].cjzt==1 && zt[i].shzt==3) {
						//管理员取消的任务
						dwcHtml +=
							"<tr style='background-color:#FFF;color:#333333;font-size:12px;'>"+
							"	<td nowrap='nowrap' style='width:138px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+
							zt[i].sjbmc+"</td>"+
							"	<td nowrap='nowrap' style='width:169px;border-top:#DADADA 1px solid;' align='center'>"+
							"   未导入</td>"+
							"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
							"	<a href='#' onclick='getExcle("+zt[i].cjmbdm+");'>"+
							"		模版下载"+
							"	</a>"+
							"	</td>"+
							"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
							"	</td>"+
							"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+
							"   <form action='' id='eform"+i+"' method='post' enctype='multipart/form-data'>"+
							"		<input name='file' id='eff"+i+"'  style='margin-top:11px;width:180px' type='file' accept='.xls;*.xlsx'>"+
							"   </form>"+
							"	</td>"+
							"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'> <input type='text' id='id"+i+"' value='"+zt[i].id+"' style='display:none'><input type='button' id='"+zt[i].cjmbdm+"'  value='提交审核' onclick='submitExcel("+i+",this,"+rw.id+")'/></td>"+
							"	<td nowrap='nowrap' style='width:100px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>"+
							"</tr>";
					}
				}
				$('#dwcTable tbody').append(dwcHtml);
				$('#ysbTable tbody').append(ysbHtml);
				$('#yshTable tbody').append(yshHtml);
				$('#dwcTable tbody').append(bhHtml);
				
			}

		}
	});
}




//下载模版
function getExcle(mbid){
	/*document.getElementById("exportform").action = "/audit/rwxxController/exportMB.do?mbid="+mbid;
	document.getElementById("exportform").submit();*/
	
	var url ="/TQCC/excel/downDefineTemplate.htm?defineId=" + mbid;
	window.location.href = url;
}

//数据提交
function submitExcel(xh,element,rwid){
	 $("#loadGif").show();
/*	 $("#eform"+xh).submit();*/
//	var suffix = excelfile.substring(excelfile.lastIndexOf(".")+1);
	 var fileName =$("#eff"+xh).val();
	 if(fileName==""){
		 $("#loadGif").hide();
		 alert("请先上传文件!");
		 return;
	 }
	 var ldot = fileName.lastIndexOf(".");
	 var type = fileName.substring(ldot + 1);
	 if(type=="xls" || type=="xlsx"){
			$("#eform"+xh).ajaxSubmit({
				url :  "/audit/uploadFile/updateExcel.do", // 请求的url  
				type : "post", // 请求方式
				async :false, // 异步
				data:{"cjmbdm":$(element).attr("id"),"ztbdm":$("#id"+xh).val(),"cjrwdm":rwid},
				error:function(){
					$("#loadGif").hide();
					alert("提交的内容有符号的错误,或者列名不对！");
				},
				success : function(msg){
					$(element).parent().parent().remove(); 
					findRwJd();
					$("#loadGif").hide();
					alert(eval(msg));
				},
		    });
	 }else{
		 $("#loadGif").hide();
		 alert("请上传EXCEL文件!");
		 return;
		 
	 }
	 

}

function hidebutton(){
    $("#divc").hide();
    $("#divcontent").hide();
    $("#divclose").hide();
}


	//查看审核信息
function showContent(cjmbdm,rwid,cjzt){
	  var state=1;
	  $("#divc").show();
	  $("#divcontent").show();
	  $("#divclose").show();
	  $("#tb_tbody").empty();
	  $("#tb_thead").empty();
	  $("#zs").empty();
	  var str2=" <tr style='text-align: center; font-size:14px;color:green' ><td>正在查询数据请稍等...</td></tr>";
	  $("#tb_tbody").html(str2);
	  $.ajax({
	       async:false,
	       type:"post",
	       dataType:"text",
	       url:"/audit/asShZtsjbController/selectCjrwxx.do",
	       data:{"rwid":rwid,"cjmbdm":cjmbdm,"state":state},
	       success:function(data){
	    	  
	            var result=eval('('+data+')');
	            //excel表头
	            title=result.title;
	            //excel内容
	            var contenttbody=result.content;
	            //驳回理由
	            var bhly=result.bhly;
	            //自定义模版名
	            var cname=result.cname;
	            var size=result.size;
	            var str="";
	                str+="<tr style='background-color:#ccc;color:#333333;font-weight:bold;font-size:12px;'>";
	            for ( var i = 0; i < title.length; i++) {
					  str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >";
					   str+=title[i];
					  str+="</td>";
				}
				str+="</tr>";
				$("#tb_thead").html(str);
			    $("#wtgContent").val(bhly);
				  var str1="";
				  for(var i = 0; i < contenttbody.length; i++){
				        str1+="<tr>";
				        for(var j = 0; j < contenttbody[i].length; j++){
				          str1+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>";
				            str1+=contenttbody[i][j];
				          str1+="</td>";
				        }
			           str1+="</tr>";
				   }
				   $("#tb_tbody").html(str1);
				   var str3="";
				      str3+="<input type='button'   value='确认提交' onclick='confirmSubmit("+rwid+","+cjmbdm+","+cjzt+")'/>";
					  str3+="<input id='downExcel' onclick=\"exportTable("+cjmbdm+","+rwid+",1)\" type='button' value='下载' /> <input type='button' id='hidebutton' value='取消' onclick='hidebutton()'/>"
				      str3+="<input id='cjzt' value='"+cjzt+"' style='display:none'/>";
					  $('#divcheck').html(str3);
					  var tdlast=$("#tb_tbody tr td:last-child");
					  for ( var i = 0; i < tdlast.length; i++) {
						 if($(tdlast[i]).text()==null || $(tdlast[i]).text()=="" || $(tdlast[i]).text()==" "){
							 $(tdlast[i]).parent().css({"background-color":"white"});
						 }else{
							 $(tdlast[i]).parent().css({"background-color":"red"});
						 }
					  }
					  $("#cname").val(cname);
					  $("#zs").html("共"+size+"条数据");
	       },
	       error:function(){
	          alert("数据出错，未找到未通过理由！");
	       }
	  });
}

//excel校验内容的正确性
function checkExcel(sjbmc,cjmbdm,rwid,cjzt){
	$("#loadGif").show();
	  $.ajax({
		  url:"/audit/asShZtsjbController/checkExcel.do",
		  type:"post",
		  dataType:"json",
		  data:{"sjbmc":sjbmc,"cjmbdm":cjmbdm,"rwid":rwid},
		  success:function(data){
			  var result=eval('('+data+')');
			  $("#loadGif").hide();
			  alert("校验完成！");
			  $("#checksuccess").val(result.success);
			  findRwJd();
		  },
		  error: function(){
			  $("#loadGif").hide();
			  alert("校验失败！");
		  }
		  
	  });
}
//任务取消  cjmbdm
function cancelSubmit(rwidg,cjmbdm){
	if(confirm("是否已下载校验后的文件？")){
		 $.ajax({
	         type:"post",
	         url:"/audit/asShZtsjbController/updateCjRwCancel.do",
	         data:{"rwidg":rwidg,"cjmbdm":cjmbdm},
	         success:function(){
	             alert("取消成功！");
	             findRwJd();
	         },
	         error:function(){
	             alert("取消失败！");
	         }
	    });
	}
}
//导出数据到excel
function exportTable(cjmbdm,rwid,state) {
//	var state=1;
	document.getElementById("exportform").action = "/audit/asShZtsjbController/exportExcel.do?cjmbdm="+cjmbdm+"&rwid="+rwid+"&state="+state;
	document.getElementById("exportform").submit();

}

function confirmSubmit(rwid,cjmbdm,cjzt){
	var a=  $("#checksuccess").val();
	var tr=$("#tb_tbody").find("tr");
	for ( var i = 0; i < tr.length; i++) {
		 var tdvalue=$(tr[i]).find("td:last").text();
		 if(tdvalue.trim()!=""){
			 alert("有错误数据不能提交！");
			 return;
		 }
	}
	if(cjzt!=2){
		alert("任务尚未校验不能提交！");
		return;
	}
	if(cjzt==3){
		alert("任务已提交！");
		return;
	}
	if(confirm("确定提交？")){
		 $("#loadGif").show();
		 $.ajax({
	         type:"post",
	         url:"/audit/asShZtsjbController/confirmSubmit.do",
	         data:{"rwid":rwid,"cjmbdm":cjmbdm},
	         success:function(){
	        	 findRwJd();
	        	 $("#loadGif").hide();
	             alert("提交成功！");
	         },
	         error:function(){
	             alert("提交失败，请稍候再试。");
	         }
	    });
	}
}

function showPassData(cjmbdm,rwid){
	  $("#divc").show();
	  $("#divcontent").show();
	  $("#divclose").show();
	  $("#tb_tbody").empty();
	  $("#tb_thead").empty();
	  $("#zs").empty();
	  var str2=" <tr style='text-align: center; font-size:14px;color:green' ><td>正在查询数据请稍等...</td></tr>";
	  $("#tb_tbody").html(str2);
	$.ajax({
		async : false,
		type : "POST",
		dataType : "json",
		url : "/audit/asShZtsjbController/selectPassrwxx.do",
		data : {
			"rwid" : rwid,
			"cjmbdm" : cjmbdm,
		},
		success : function(data) {
			/*console.info(data);
			var result=eval('('+data+')');*/
			var result=data;
            //excel表头
            title=result.title;
            //excel内容
            var contenttbody=result.content;
            //自定义模版名
            var cname=result.cname;
            var size=result.size;
            var str="";
                str+="<tr style='background-color:#ccc;color:#333333;font-weight:bold;font-size:12px;'>";
            for ( var i = 0; i < title.length; i++) {
				  str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >";
				   str+=title[i];
				  str+="</td>";
			}
			str+="</tr>";
			$("#tb_thead").html(str);
			  var str1="";
			  for(var i = 0; i < contenttbody.length; i++){
			        str1+="<tr>";
			        for(var j = 0; j < contenttbody[i].length; j++){
			          str1+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>";
			            str1+=contenttbody[i][j];
			          str1+="</td>";
			        }
		           str1+="</tr>";
			   }
			   $("#tb_tbody").html(str1);
			   $("#zs").html("共"+size+"条数据");

		},
		error : function() {
			alert("数据查询出错！");
		}
	})
}

function downNoPassData(cjmbdm,rwid){
	document.getElementById("downNoPassData").action = "/audit/asShZtsjbController/downNoPassData.do?cjmbdm="+cjmbdm+"&rwid="+rwid;
	document.getElementById("downNoPassData").submit();
}