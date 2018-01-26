$(function(){
	validateLogin();
	showDataManagement();
});
var icp=1;
function showDataManagement(){
	var flag = $("#flag").val();
	var param = $("#param").val();
	$.ajax({
		type:"POST",
		url:"/audit/auditDataManagementController/showAuditData.do",
		dataType:"json",
		data:{"flag":flag,"param":param,"pageNo":icp},
		success: function(data){
			var result=eval("("+data+")");
			var  re=result.auditData;
			var str="";
			for ( var i = 0; i < re.length; i++) {
				str+="<tr>";
				  str+="<td>"+re[i].sjbmc+"</td>";
				  str+="<td>"+re[i].cjbmmc+"</td>";
				  str+="<td>"+re[i].showname+"</td>";
				  str+="<td>"+re[i].cjrwmc+"</td>";
				  str+="<td>";
				  if(re[i].cjzt==1 && re[i].shzt==1){
					   str+="已审批";
				  }
				  str+="</td>";
				  str+="<td>  " +
				        "<img title='查看' border='0' onclick='showBdxx(this,"+re[i].id+","+re[i].cjmbdm+","+re[i].cjzt+","+re[i].shzt+")' style='vertical-align:middle;cursor: pointer;' src='/audit/images/bj_icon.png'></img>"+
				  		"<img title='退回'  onclick='deletePassData("+re[i].id+","+re[i].cjmbdm+");' style='vertical-align:middle;border:0px;margin-left:5px;cursor: pointer;' src='/audit/images/nopass.png'></img></td>";
				str+="</tr>";
			}
			$("#dataTable").html(str);
			
			$("#pageTb tbody").empty();
			var totalPage=result.totalPage==0?1:result.totalPage;
	        var pageHtml = "<tr>"+
	        "	<td align='left'>"+
	        "	<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>"+
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
	        "	<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'><span id='pageno'>"+
	        result.pageNo+"</span>/<span id='totalpage'>"+totalPage+"</span>页</span>"+
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
	       $("#pageTb tbody").append(pageHtml);
			
		},
		error:function(){
			alert("数据加载失败！");
		}
	});
}
function deletePassData(rwid,cjmbdm){
	if(confirm("是否回退此任务？")){
		$.ajax({
			 type:"POST",
			 url:"/audit/auditDataManagementController/deleteAuditData.do",
			 data:{"rwid":rwid,"cjmbdm":cjmbdm},
		     success:function(){
		    	 showDataManagement();
		    	 alert("取消成功！");
		     },
	         error:function(){
	        	 alert("取消失败！");
		     }
		});
	}
}

function showBdxx(element,rwid,cjmbdm,cjzt,shzt){
	    $("#divc").show();
		$("#divcontent").show();
		$("#divclose").show();
		 $("#tb_tbody").empty();
		  $("#tb_thead").empty();
		  $("#zs").empty();
		  var str2=" <tr style='text-align: center; font-size:14px;color:green' ><td>正在查询数据请稍等...</td></tr>";
		  $("#tb_tbody").html(str2);
        $.ajax({
        	type : "POST",
        	dataType : "json",
        	url : "/audit/asShZtsjbController/selectPassrwxx.do",
        	data : {
        		"rwid" : rwid,
        		"cjmbdm" : cjmbdm,
        	},
        	success : function(data) {
        		//var result = eval('(' + data + ')');
        		var title = data.title;
				var content = data.content;
				var size=data.size;
				var str = "";
				str += "<tr style='background-color:#ccc;color:#333333;font-weight:bold;font-size:12px;'>";
				for ( var i = 0; i < title.length; i++) {
					str += "<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >";
					str += title[i];
					str += "</td>";
				}
				str += "</tr>";
				$("#tb_thead").html(str);
				
				var str1 = "";
				for ( var i = 0; i < content.length; i++) {
					str1 += "<tr>";
					for ( var j = 0; j < content[i].length; j++) {
						str1 += "<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>";
						str1 += content[i][j];
						str1 += "</td>";
					}
					str1 += "</tr>";
				}
				$("#tb_tbody").html(str1);
				$("#rwid").val(rwid);
				$("#cjmbdm").val(cjmbdm);
				$("#zs").html("共"+size+"条数据");
        	},
        	error : function() {
        		alert("数据查询出错！");
        	}
        });
}


function hidebutton() {
	$("#divc").hide();
	$("#divcontent").hide();
	$("#divclose").hide();
}

	//导出数据到excel
	function exportPassExcel() {
	     var rwid=$("#rwid").val();
	     var cjmbdm=$("#cjmbdm").val();
		document.getElementById("exportform").action = "/audit/asShZtsjbController/exportPassExcel.do?cjmbdm="+cjmbdm+"&rwid="+rwid;
		document.getElementById("exportform").submit();

	}
	
	
	//分页查询
	function pagefindindicator(obj) {
		var p = obj.getAttribute("value").split("_");
		if (p[0] == "1") {//首页
			icp = "1";
			showDataManagement();
			return;
		} else if (p[0] == "2") {//上一页
			if (icp == "1") {
				alert("当前页已经是第一页了");
				return;
			} else {
				icp = parseInt(icp) - 1;
			}
			showDataManagement();
		} else if (p[0] == "3") {//下一页

			if (icp == p[1]) {
				alert("已经是最后一页了!");
				return;
			}
			icp = parseInt(icp) + 1;
			showDataManagement();
		} else if (p[0] == "4") {//下一页
			var pnos = $("#pagenotext").val();
			if (pnos.length < 1) {
				alert("请输入您要跳转的页码!");
				return;
			}
			var pnums = parseInt(pnos);
			if (isNaN(pnums)) {
				alert("输入非页码数字");
				return;
			} else {
				if (pnums > parseInt(p[1])) {
					alert("记录只有" + p[1] + "页,你输入的页码" + pnums + "超出范围");
					return;
				} else {
					icp = pnos;
					showDataManagement();
				}
			}
		}
	}

	
	function showPageDate(){
		icp=1;
		showDataManagement();
	}