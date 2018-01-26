var dataresult;
var id;
$(function(){
	/*validateLogin();*/
	id = window.location.href.split("=")[1];
	load();
	  $("#f111").ligerDateEditor();
	  $("#f112").ligerDateEditor();
	  $("#f113").ligerDateEditor();
	  $("#f114").ligerDateEditor();
	  $("#f115").ligerDateEditor();
	  $("#f116").ligerDateEditor();
	  $("#f117").ligerDateEditor();
});


function load(){
	$.ajax({
		  type:"post",
		  url:"/audit/assessmentSpecialtyInfoController/findSpecialtyAndDate.do",
		  async : false,
		  dataType:"json",
		  data:{"searchvalue":$("#searchvalue").val(),"pgid":id},
		  success:function(data){
			  var a= eval("("+data+")");
			  console.info(a);
			  showdata(a);
		  },
		  error:function(){
			  
		  }
	});
}

function showdata(data){
	manager = $("#datetable").ligerGrid({
		data: data,
		hideLoadButton:true, 
		columns : [ {
			display : '评估年度',
			name : 'SYEAR',
		},{
			display : '课程名称',
			name : 'SPECIALTY_NAME',
		},{
			display : '课程代码',
			name : 'SPECIALTY_CODE',
		},{
			display : '自评时间',
			name : 'SELF_ASSESSMENT_DATE',
		},{
			display : '网评时间',
			name : 'COMMENT_DATE',
/*			render: function(row){
				if(row.IS_ENGINEERING==1){
					return "否";
				}else{
					return "是";
				}
			}
*/		},{
			display : '现场考察时间',
			name : 'SITE_VISITS',
	/*		render: function(row){
				if(row.IS_RZ==1){
					return "否";
				}else{
					return "是";
				}
			}*/
		},{
			display : '操作',
			name : 'id',
			minWidth : 100,
			render: function(row){
				 return "<a  href='javascript:void(0)' style='margin-right:15px;border: none;cursor:pointer;' onclick=\"updatespecialty('"+row.ID+"','"+row.SPECIALTY_NAME+"','"+row.SELF_ASSESSMENT_DATE+"','"+row.COMMENT_DATE+"','"+row.SITE_VISITS+"','"+row.SYEAR+"')\"><img src='/TQCC/page/roleDataShow/images/edit.png' title='修改' style='margin-top:5px;'/></a>"
					+"<a  href='javascript:void(0)' style='border:none;cursor:pointer;margin-left:15px;' onclick=\"delSpecialtyInfo('"+row.ID+"')\"><img src='/TQCC/page/roleDataShow/images/delete.png' style='margin-top:5px;' title='删除'/></a>";
	        	   
/*					var html = '<a href="'+sContextPath +'/page/datareport/selectTypeItemList.jsp?id='+row.id+'" style="margin-top: 5px;"  class="btn-small btn-icon"><img src="img/edit.png" title="编辑"/></a> ';
				html += '<a href="#" class="btn-small btn-icon" data-click-data="'+row.id+'" data-click="delete"><img src="img/delete1.png" title="删除"/></a>';
				return html;*/
			}
		}],
		pageSizeOptions: [15, 20, 30, 40, 50],
		checkbox : false,
		usePager : true, // 服务器分页
		pageSize : 15,
		rownumbers : true,
		width : '96%'
	});
}

function addDateForSpecialty(){
	$("#tb_tbody2").html("");
	$("#top_zy_1").hide();
	$("#datetable").hide();
	$("#top_zy_2").show();
	$("#datetable2").show();
	$.ajax({
		 url:"/audit/assessmentSpecialtyInfoController/findSpecialtyInfo.do",
		 dataType:"json",
		 type:"post",
		 data:{"searchvalue":"","id":id},
		 success:function(data){
			  var a= eval("("+data+")");
			  var result=a.Rows;
			  dataresult=a.Rows;
			  var str="";
			  console.info(result);
			  for ( var i = 0; i < result.length; i++) {
				  var b="";
				  var c="";
				  if(result[i].IS_ENGINEERING==1){
					  b= "否";
					}else{
					  b=  "是";
					}
				  if(result[i].IS_RZ==1){
					  c= "否";
					}else{
					  c= "是";
					}
				str+="<tr>";
				str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>"+result[i].SPECIALTY_NAME+"</td>";
				str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>"+result[i].SPECIALTY_CODE+"</td>";
				str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>"+result[i].TYPE_NAME+"</td>";
/*				str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>"+c+"</td>";*/
				str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>" +
						"<img id='add"+result[i].ID+"' src='/audit/images/zypg/add.png' style='cursor:pointer;' onclick=\"addToRight('add"+result[i].ID+"',"+i+")\"></img><img id='yadd"+result[i].ID+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: none;'></img>" +
						"</td>";
				str+="</tr>";
		      }
			  $("#tb_tbody1").html(str);
		 },
		 error:function(){
			 
		 }
		 
	});
	
}


function gouback(){
	$("#top_zy_1").show();
	$("#datetable").show();
	$("#top_zy_2").hide();
	$("#datetable2").hide();
	load();
	
}

function addToRight(id,num){
	var str="";
	  var b="";
	  var c="";
/*	  if(dataresult[num].IS_ENGINEERING==1){
		  b= "否";
		}else{
		  b=  "是";
		}
	  if(dataresult[num].IS_RZ==1){
		  c= "是";
		}else{
		  c= "否";
		}*/
	str+="<tr aa='"+dataresult[num].ID+"'>";
	str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>"+dataresult[num].SPECIALTY_NAME+"</td>";
	str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>"+dataresult[num].SPECIALTY_CODE+"</td>";
/*	str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>"+b+"</td>";
	str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center'>"+c+"</td>";*/
	str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;'align='center' >" +
			"<img id='addx"+dataresult[num].ID+"' src='/audit/images/zypg/delete.png' style='cursor:pointer;margin-right: 5px' onclick=\"delToLeft(this,'"+dataresult[num].ID+"')\"></img>" +
			"</td>";
	str+="</tr>";
	if($("#addx"+dataresult[num].ID).length>0){
		alert("该专业已添加！");
	}else{
		$("#add"+dataresult[num].ID).hide();
		$("#yadd"+dataresult[num].ID).show();
		$("#tb_tbody2").append(str);
	}
	
}
function delToLeft(element,id){
	$("#add"+id).show();
	$("#yadd"+id).hide();
	$(element).parent().parent().remove();
}

function confirmAdd(){
	var zsdate=$("#f112").val();
	var zedate=$("#f113").val();
	var d1=new Date(zsdate.replace(/\-/g,'/'));
	var d2=new Date(zedate.replace(/\-/g,'/'));
	if(d1>d2){
		alert("自评开始时间大于结束时间！");
		return;
	}
	if(zsdate.length>0 && zedate.length<=0){
		alert("自评结束时间不能为空！");
		return;
	}
	if(zsdate.length<=0 && zedate.length>0){
		alert("自评开始时间不能为空！");
		return;
	}
	var wsdate=$("#f114").val();
	var wedate=$("#f115").val();
	var d3=new Date(wsdate.replace(/\-/g,'/'));
	var d4=new Date(wedate.replace(/\-/g,'/'));
	if(d3>d4){
		alert("网评开始时间大于结束时间！");
		return;
	}
	if(wsdate.length>0 && wedate.length<=0){
		alert("网评结束时间不能为空！");
		return;
	}
	if(wsdate.length<=0 && wedate.length>0){
		alert("网评开始时间不能为空！");
		return;
	}
	
	var xsdate=$("#f116").val();
	var xedate=$("#f117").val();
	var d5=new Date(xsdate.replace(/\-/g,'/'));
	var d6=new Date(xedate.replace(/\-/g,'/'));
	if(d5>d6){
		alert("现场考查开始时间大于结束时间！");
		return;
	}
	if(xsdate.length>0 && xedate.length<=0){
		alert("现场考查结束时间不能为空！");
		return;
	}
	if(xsdate.length<=0 && xedate.length>0){
		alert("现场考查开始时间不能为空！");
		return;
	}
	if(wsdate.length==0 && wedate.length==0 && zsdate.length==0 && zedate.length==0 && xsdate.length==0 && xedate.length==0){
		alert("时间不能为空！");
		return;
	}
	var syear=$("#syear").val();
    var trlist=	$("#tb_tbody2").find("tr");
    var datalist=new Array();
    for ( var i = 0; i < trlist.length; i++) {
     var dd=new Object()
     dd.zyid=$(trlist[i]).attr("aa");
     dd.syear=syear;
     dd.zpdate=zsdate+"~"+zedate;
     dd.wpdate=wsdate+"~"+wedate;
     dd.xcksdate=xsdate+"~"+xedate;
     dd.pgtype=id
     datalist.push(dd);
	}
         $.ajax({
    	 url:"/audit/assessmentSpecialtyInfoController/insertAssessDate.do",
    	 type:"post",
    	 data:{"datastring":JSON.stringify(datalist)},
         success:function(data){
        	 alert(eval(data));
         },
         error:function(){
        	 alert("保存失败！");
         }
     })
}




function addspecialty() {
	var table="<table  style='margin: 0 auto;border-collapse:   separate;   border-spacing:   10px; '><tr style=''><td >专业名称：</td><td><input type='text' id='rolename'/></td></tr>" +
			  "<tr style=''><td >专业代码：</td><td><input type='text' id='remarkcontent'/></td></tr>" +
			  "<tr style='' id='tablewrap'><td ><input type='radio' value=1 name='sfgk' checked='checked'>非工科</td><td><input type='radio' value=2 name='sfgk'>工科</td></tr>" +
			  "<tr style='' id='tblewrap'><td ><input type='radio' value=1 name='rz' checked='checked'>工科未认证</td><td><input type='radio' value=2 name='rz'>通过ABET认证</td><td><input type='radio' value=3 name='rz'>通过CEEAA认证</td></tr>" +
			  "</table>";
	$.ligerDialog.open({
		height : 200,
		width : 450,
		content :table,
		title :'添加专业',
		buttons : [ {
			text : '确定',
			onclick : function(item, dialog) {
				var rolename=$("#rolename").val().trim();
				var remarkcontent=$("#remarkcontent").val();
				var sfgk=$('#tablewrap input[name="sfgk"]:checked').val();
				var rz=$('#tblewrap input[name="rz"]:checked').val();
				var a=rolename.length;
				var b=remarkcontent.length;
				if(a>0 && b>0){
					$.ajax({
						url:"/audit/assessmentSpecialtyInfoController/addSpecialtyInfo.do",
						type:"post",
						dataType:"json",
						data:{"sName":rolename,"sCode":remarkcontent,"sfgk":sfgk,"rz":rz},
						success:function (data){
						 var result=eval("("+data+")");
						  load();
							alert(result.isok.message);
						},
						error:function(){
							alert("添加失败！");
						}
					});
				}else{
					alert("请输入专业名称和专业代码！");
					return ;
				}
			}
		}, {
			text : '取消',
			onclick : function(item, dialog) {
				dialog.close();
			}
		} ]
	});
}


function updatespecialty(ID,SPECIALTY_NAME,SELF_ASSESSMENT_DATE,COMMENT_DATE,SITE_VISITS,syear){
	var table="  <table class='dateDiv_table1'  style='margin-top: 11px;'>"+
    "     <tr  style='margin-top: 5px;'><td style='text-align:right;font-size: 14px;'>年份 :</td><td style='text-align:right;font-size: 14px;'></td><td><select style='width:131px' id='syearh'><option>2017</option><option>2016</option><option>2015</option><option>2014</option></select></td></tr>"+
    "    <tr style='margin-top: 5px;'><td style='text-align:right;font-size: 14px;'>自评时间 :</td><td style='text-align:right;font-size: 14px;'>开始时间:</td><td ><input type='text' id='f121'/></td><td style='text-align:right;font-size: 14px;'>结束时间:</td><td><input type='text' id='f122'/></td></tr>"+
   "     <tr style='margin-top: 5px;'><td style='text-align:right;font-size: 14px;'>网评时间 :</td><td style='text-align:right;font-size: 14px;'>开始时间:</td><td><input type='text'  id='f123' /></td><td style='text-align:right;font-size: 14px;'>结束时间:</td><td><input type='text'  id='f124'/></td></tr>"+
  "      <tr style='margin-top: 5px;	'><td style='text-align:right;font-size: 14px;'>现场考查时间 :</td><td style='text-align:right;font-size: 14px;'>开始时间:</td><td><input type='text'  id='f125' /></td><td style='text-align:right;font-size: 14px;'>结束时间:</td><td><input type='text'  id='f126'/></td></tr>"+
    "  </table>"
  
$.ligerDialog.open({
height : 200,
width : 700,
content :table,
title :'修改时间 >> '+SPECIALTY_NAME,
buttons : [ {
	text : '确定',
	onclick : function(item, dialog) {
		var zsdate=$("#f121").val();
		var zedate=$("#f122").val();
		var d1=new Date(zsdate.replace(/\-/g,'/'));
		var d2=new Date(zedate.replace(/\-/g,'/'));
		if(d1>d2){
			alert("自评开始时间大于结束时间！");
			return;
		}
		if(zsdate.length>0 && zedate.length<=0){
			alert("自评结束时间不能为空！");
			return;
		}
		if(zsdate.length<=0 && zedate.length>0){
			alert("自评开始时间不能为空！");
			return;
		}
		var wsdate=$("#f123").val();
		var wedate=$("#f124").val();
		var d3=new Date(wsdate.replace(/\-/g,'/'));
		var d4=new Date(wedate.replace(/\-/g,'/'));
		if(d3>d4){
			alert("网评开始时间大于结束时间！");
			return;
		}
		if(wsdate.length>0 && wedate.length<=0){
			alert("网评结束时间不能为空！");
			return;
		}
		if(wsdate.length<=0 && wedate.length>0){
			alert("网评开始时间不能为空！");
			return;
		}
		
		var xsdate=$("#f125").val();
		var xedate=$("#f126").val();
		var d5=new Date(xsdate.replace(/\-/g,'/'));
		var d6=new Date(xedate.replace(/\-/g,'/'));
		if(d5>d6){
			alert("现场考查开始时间大于结束时间！");
			return;
		}
		if(xsdate.length>0 && xedate.length<=0){
			alert("现场考查结束时间不能为空！");
			return;
		}
		if(xsdate.length<=0 && xedate.length>0){
			alert("现场考查开始时间不能为空！");
			return;
		}
		if(wsdate.length==0 && wedate.length==0 && zsdate.length==0 && zedate.length==0 && xsdate.length==0 && xedate.length==0){
			alert("时间不能为空！");
			return;
		}
		
	    var zpdate=zsdate+"~"+zedate;
	    var wpdate=wsdate+"~"+wedate;
	    var xcksdate=xsdate+"~"+xedate;
		
			$.ajax({
				url:"/audit/assessmentSpecialtyInfoController/updateSpecialtyAndDateInfo.do",
				type:"post",
				dataType:"json",
				async: false,
				data:{"zpdate":zpdate,"wpdate":wpdate,"xcksdate":xcksdate,"syearh":$("#syearh").val(),"id":ID,"pgid":id},
				success:function (data){
				 var result=eval("("+data+")");
				    load();
					alert(result.message);
					dialog.close();
				},
				error:function(){
					alert("添加失败！");
				}
			});

	}
}, {
	text : '取消',
	onclick : function(item, dialog) {
		dialog.close(ID);
	}
} ]
});
	  $("#f121").ligerDateEditor();
	  $("#f122").ligerDateEditor();
	  $("#f123").ligerDateEditor();
	  $("#f124").ligerDateEditor();
	  $("#f125").ligerDateEditor();
	  $("#f126").ligerDateEditor();
	  $("#f127").ligerDateEditor();
	  
	    var z=	SELF_ASSESSMENT_DATE.split("~");
	    var w=	COMMENT_DATE.split("~");
	    var x= SITE_VISITS.split("~");
	  $("#f121").val(z[0]);
	  $("#f122").val(z[1]);
	  $("#f123").val(w[0]);
	  $("#f124").val(w[1]);
	  $("#f125").val(x[0]);
	  $("#f126").val(x[1]);
	  $("#syearh").val(syear);
}


/**
 * 单个删除
 * @param id
 */
function delSpecialtyInfo(id){
	$.ligerDialog.confirm('是否确认删除！', function (yes){
			  if(yes){
				  $.ajax({
					  type:"post",
					  url:"/audit/assessmentSpecialtyInfoController/delSpecialtyAndDateInfo.do",
					  data:{"id":id},
					  dataType:"json",
					  success:function(data){
						  var result=eval("("+data+")");
						  load();
						  alert(result.message);
						
					  },
					  error:function(){
						  alert("删除失败！");
					  }
			      });
			  }
	});
}

function searchstart(){
	load();
}