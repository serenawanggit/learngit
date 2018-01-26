var pgid;
$(function(){
	pgid = window.location.href.split("=")[1];
	
	load("");
	/*validateLogin();*/
});


function load(searchvalue){
	$.ajax({
		  type:"post",
		  url:"/audit/assessmentSpecialtyInfoController/findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor.do",
		  dataType:"json",
		  async:false,
		  data:{"searchvalue":$("#searchvalue").val(),"pgid":pgid},
		  success:function(data){
			  
			  var a= eval("("+data+")");
			  console.info(a);
			  showdata(a);
		  },
		  error:function(){
			  alert("数据查询异常。。。");
		  }
	});
}


function showdata(data){
	manager = $("#datatable").ligerGrid({
		data: data,
		hideLoadButton:true, 
		columns : [ {
			display : '学院名称',
			name : 'SPECIALTY_NAME',
			minWidth : 150
		},{
			display : '自评人',
			name : 'ASSESS_REMARK_USER',
			minWidth : 120
		},{
			display : '审核人',
			name : 'ASSESS_USER_ASSESSOR',
			minWidth : 120
		},{
			display : '网评专家',
			name : 'wangPingZhuanJiaName',
			minWidth : 120
		},{
			display : '现场考察专家',
			name : 'xianChangKaoChaZhuanJiaName',
			minWidth : 130
		},{
			display : '现场考察组长',
			name : 'xianChangKaoChaZuZhangName',
			minWidth : 130
		},{
			display : '操作',
			name : 'caozuo',
			minWidth : 100,
			render: function(row){
				   /*"<a  href='javascript:void(0)' style='margin-right:15px;border: none;cursor:pointer;' onclick=\"updatespecialty('"+row.SID+"','"+row.ZID+"','"+row.ASSESS_REMARK_USER+"','"+row.ASSESS_USER_ASSESSOR+"')\"><img src='/TQCC/page/roleDataShow/images/edit.png' title='修改' style='margin-top:5px;'/></a>"*/
				return "<a  href='javascript:void(0)' style='margin-right:15px;border: none;cursor:pointer;' " +
						"onclick=\"addbtn("+row.DATE_SPECIALTY_ID+","+row.SID+","+row.ZID+","+row.s_u_id+","+row.z_u_id+",-1,'"+row.wangPingZhuanJiaId+"','"+row.w_u_id+"','"+row.xianChangKaoChaZhuanJiaId+"','"+row.xckc_u_id+"','"+row.xianChangKaoChaZuZhangId+"','"+row.xckczj_u_id+"','"+row.SPECIALTY_NAME+"')\">" +
						"<img src='/TQCC/page/roleDataShow/images/edit.png' title='添加' style='margin-top:5px;'/></a>"
				        /*"<a  href='javascript:void(0)' style='border:none;cursor:pointer;margin-left:15px;' onclick=\"delSpecialtyInfo('"+row.ID+"')\"><img src='/TQCC/page/roleDataShow/images/delete.png' style='margin-top:5px;' title='删除'/></a>"*/;
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


//sid 审核人 id  zid自评人id
function updatespecialty(sid,zid,assess_remark_user,assess_user_assessor){
	var table=
	  "<table  style='margin: 0 auto;border-collapse:separate;border-spacing:10px;'><tr style=''><td >自评人：</td><td><input type='text' value="+assess_remark_user+" id='ASSESS_REMARK_USER' /></td></tr>" +
	  "<tr style=''><td >审核人：</td><td><input type='text' id='ASSESS_USER_ASSESSOR'  value="+assess_user_assessor+" /></td></tr>" +
	  "</table>";
$.ligerDialog.open({
height : 200,
width : 450,
content :table,
title :'修改界面',
buttons : [ {
	text : '确定',
	onclick : function(item, dialog) {
		var assess_remark_user=$("#ASSESS_REMARK_USER").val().trim();
		var assess_user_assessor=$("#ASSESS_USER_ASSESSOR").val().trim();
		var a=assess_remark_user.length;
		var b=assess_user_assessor.length;
		//==============================
		
		if(a>0 && b>0){
			$.ajax({
				url:"/audit/assessmentSpecialtyInfoController/updateSpecialtyInfoBySelfAndAssessor.do",
				type:"post",
				dataType:"json",
				data:{"ASSESS_REMARK_USER":assess_remark_user,"ASSESS_USER_ASSESSOR":assess_user_assessor,"SID":sid,"ZID":zid},
				success:function (data){
					var result=eval("("+data+")");
				    load("");
					alert(result.message);
					dialog.close();
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
$("input[type=radio][name=sfgk][value="+is_sfgk+"]").attr("checked",true);  
$("input[type=radio][name=rz][value="+is_rz+"]").attr("checked",true); 
$("#rolename").val(name);
$("#remarkcontent").val(code);
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
					  url:"/audit/assessmentSpecialtyInfoController/delSpecialtyInfo.do",
					  data:{"id":id},
					  dataType:"json",
					  success:function(data){
						  var result=eval("("+data+")");
						  load("");
						  alert(result.message);
					  },
					  error:function(){
						  alert("删除失败！");
					  }
			      });
			  }
	});
}
//界面一
//======================================================================================================================
//界面二
/**
 * 点击添加按钮
 */
var date_specialty_id;
var s_u_id1;
var z_u_id1;
//用户的id
var SID1;
var ZID1;
var old_w_id1;
var w_u_id1;

//网评 
var old_w_id1;
var w_u_id1;
//现场考察
var old_x_id1;
var xckc_u_id1;
//现场考察组长
var old_x_zz_id1;
var xckczj_u_id1;
//专业名字
var SPECIALTY_NAME1;
function addbtn(DATE_SPECIALTY_ID,SID,ZID,s_u_id,z_u_id,type,old_w_id,w_u_id,old_x_id,xckc_u_id,old_x_zz_id,xckczj_u_id,SPECIALTY_NAME){
	$("#ImgBtn").hide();
	$("#datatable").hide();
	$("#datetable2").show();
	$("#backBtn").show();
	$("#Type").show();
	$("#saveBtn").show();
	$("#index").hide();
	$("#index2").show();
	$("#indexGG").show();
	//把专业名称弄上标题
	if(SPECIALTY_NAME1==undefined){
		SPECIALTY_NAME1=SPECIALTY_NAME
		$("#top_title_zy").html(SPECIALTY_NAME);
	}else{
		$("#top_title_zy").html(SPECIALTY_NAME1);
	}
	$("#tb_tbody2").html("");//清空一下
	
	$("#searchvalue2").val("");//搜索框清空
	$("#searchvalue3").val("");//搜索框清空
	date_specialty_id=DATE_SPECIALTY_ID;
	//自评人
	z_u_id1=z_u_id;
	ZID1=ZID;
	//审核人
	s_u_id1=s_u_id;
	SID1=SID;
	//网评 
	old_w_id1=old_w_id;
	w_u_id1=w_u_id;
	//现场考察
	old_x_id1=old_x_id;
	xckc_u_id1=xckc_u_id;
	
	//现场考察组长
	old_x_zz_id1=old_x_zz_id;
	xckczj_u_id1=xckczj_u_id;
	//发送ajax  请求
	$.ajax({
		  type:"post",
		  url:"/audit/assessmentSpecialtyInfoController/findUserInfo.do",
		  dataType:"json",
		  success:function(data){
			  var a= eval("("+data+")");
			  //如果type等于空 默认为1.
			  if(type==-1){
				  type=1;
				  $(".selector").val("1");
			  }
			  showUserInfo(a,type,SID,ZID,s_u_id,z_u_id,0,old_w_id);
		  },
		  error:function(){
			  alert("数据查询异常。。。");
		  }
	});
}
function showUserInfo(data,type,SID,ZID,s_u_id,z_u_id,isSearch,old_w_id){
	//alert("查询完毕显示左边数据");
	var  rows=data.Rows;
	var  str=$("#tb_tbody1").html("");
	//右边已选框
	var  tbodys=$("#tb_tbody2");
	$.each(rows,function(k,v){
		str+="<tr>"
		str+="<td nowrap='nowrap'"
		str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
		if(v.name==null){
			str+="align='center'></td>"
		}else{
			str+="align='center'>"+v.name+"</td>"
		}
	    str+="<td nowrap='nowrap'"
	    str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
		str+="align='center'>"+v.showname+"</td>"
	
		
		if(type==1){
			//查询出如果是自评人
			if(v.id==ZID){
					str+="<td nowrap='nowrap'"
					str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
					str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
					str+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;display:none'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: block;'></img></td>"
					//如果不是搜索，就往右边放数据， 如果是搜索 右边数据就不变
					if(isSearch!=1){
						insertAddedPersonBox(v.id,v.showname);
					}
			}else{
				str+="<td nowrap='nowrap'"
				str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				str+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: none;'></img></td>"
			}
		}else if(type==2){
			//查询出如果是审核人
				if(v.id==SID){
					//alert("进来了SID");
					str+="<td nowrap='nowrap'"
					str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
					str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
					str+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;display:none'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: block;'></img></td>"
					//如果不是搜索，就往右边放数据， 如果是搜索 右边数据就不变
					if(isSearch!=1){
						//alert("有审核人右边");
						insertAddedPersonBox(v.id,v.showname);
					}
				}else{
					str+="<td nowrap='nowrap'"
						str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
						str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
					str+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: none;'></img></td>"
					
				}
		}else if(type==3){
			var  ids=old_w_id1.split(",");
			var  strl="";
			$.each(ids,function(k,id){
					if(v.id==id){
						//alert("进来了SID");
						str+="<td nowrap='nowrap'"
						str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
						str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
						str+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;display:none'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: block;'></img></td>"
						//如果不是搜索，就往右边放数据， 如果是搜索 右边数据就不变
						if(isSearch!=1){
							//alert("有审核人右边");
							insertAddedPersonBox(v.id,v.showname);
						}
						strl="";
						return false;
					}else{
						if(k==0){
							strl+="<td nowrap='nowrap'"
							strl+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
							strl+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
							strl+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: none;'></img></td>"
						}
					}
				})
				str+=strl;
		}else if(type==4){
			//alert("现场考察专家");
			//现场考察专家
			
			var  ids=old_x_id1.split(",");
			var  strl="";
			$.each(ids,function(k,id){
					if(v.id==id){
						str+="<td nowrap='nowrap'"
						str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
						str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
						str+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;display:none'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: block;'></img></td>"
						//如果不是搜索，就往右边放数据， 如果是搜索 右边数据就不变
						if(isSearch!=1){
							//alert("有审核人右边");
							insertAddedPersonBox(v.id,v.showname);
						}
						strl="";
						return false;
					}else{
						if(k==0){
							strl+="<td nowrap='nowrap'"
							strl+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
							strl+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
							strl+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: none;'></img></td>"
						}
					}
				})
				str+=strl;
		}else if(type==5){
			//现场考察专家组长
			var  ids=old_x_zz_id1.split(",");
			var  strl="";
			$.each(ids,function(k,id){
					if(v.id==id){
						//alert("进来了SID");
						str+="<td nowrap='nowrap'"
						str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
						str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
						str+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;display:none'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: block;'></img></td>"
						//如果不是搜索，就往右边放数据， 如果是搜索 右边数据就不变
						if(isSearch!=1){
							//alert("有审核人右边");
							insertAddedPersonBox(v.id,v.showname);
						}
						strl="";
						return false;
					}else{
						if(k==0){
							strl+="<td nowrap='nowrap'"
							strl+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
							strl+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
							strl+="align='center'><img id='add"+v.id+"' onclick=\"addPseron("+v.id+",'"+v.showname+"')\" src='/audit/images/zypg/add.png' style='cursor:pointer;margin-right: 5px;'></img><img id='yadd"+v.id+"' src='/audit/images/zypg/yadd.png' style='cursor:pointer;display: none;'></img></td>"
						}
					}
				})
				str+=strl;
		}
		

		str+="</tr>"
	})
	$("#tb_tbody1").html(str);
}
//ajax 通过类型查已经添加的用户
function  findUserAdded(type){
	//发送ajax  请求
	$.ajax({
		  type:"POST",
		  url:"/audit/assessmentSpecialtyInfoController/findUserInfoByType.do",
		  dataType:"json",
		  data:{"assess_type":type},
		  success:function(data){
			  var a= eval("("+data+")");
			  //alert("查询类型为"+type+"的数据");
			  //清空右边数据
			  $("#tb_tbody2").html("");
			  //更新左边用户
			  $("#tb_tbody1").html("");
			  
			  addbtn(date_specialty_id,SID1,ZID1,s_u_id1,z_u_id1,type,old_w_id1,w_u_id1,old_x_id1,xckc_u_id1,old_x_zz_id1,xckczj_u_id1,"");
		  },
		  error:function(){
			  alert("数据查询异常。。。");
		  }
	});
	
}

function showUserInfoByType(data){
	//alert("查询完毕显示右边数据");
	manager = $("#UserInfoListTypeList").ligerGrid({
		data: data,
		hideLoadButton:true, 
		columns : [ {
			display : '姓名',
			name : 'showname',
			minWidth : 200
		},{
			display : '操作',
			name : 'caozuo',
			minWidth : 100,
			render: function(row){
				  return "<img id='ImgBtn' onclick=\"addPseron("+row.id+",'"+row.showname+"')\" src='<%=basePath%>images/zypg/add.png' 'style='cursor:pointer;margin-right: 5px;display:block;'></img>"
				  		+"<img id='yadd' src='<%=basePath%>images/zypg/yadd.png' style='cursor:pointer;display: none;'></img>";
			}
		}],
		pageSizeOptions: [15, 20, 30, 40, 50],
		checkbox : false,
		usePager : true, // 服务器分页
		pageSize : 15,
		rownumbers : true,
		width : '40%',
		height: 500
	});
}

/**
 * 点击返按钮
 */
function blackIndex(){
	$("#addDiv").hide();
	$("#backBtn").hide();
	$("#ImgBtn").show();
	$("#datatable").show();
	$("#Type").hide();
	$("#saveBtn").hide();
	$("#index").show();
	$("#index2").hide();
	$("#indexGG").hide();
	$("#datetable2").hide();
	$("#top_title_zy").html("评估人员设置");
	load("");
}
/**
 * 添加人
 */


function addPseron(id,showname){
	$("#add"+id).hide();
	$("#yadd"+id).show();
	insertAddedPersonBox(id,showname);
}

function  insertAddedPersonBox(id,showname){
	var str="";
	var  tbodys=$("#tb_tbody2");
		 str+="<tr>"
	     str+="<td nowrap='nowrap'"
	     str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
		 str+="align='center'>"+showname
		 str+="<input type='hidden' value="+id+" name='ids' />"
		 str+="</td>"
		 str+="<td nowrap='nowrap'"
	 	 str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
	 	 str+="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
		 str+="align='center'><img id='yadd"+id+"' onclick=\"yaddPerson("+id+",'"+showname+"',this)\" src='/audit/images/zypg/delete.png' style='cursor:pointer;display: block;'></img></td>"
		 str+="</tr>"
	tbodys.append(str);
}
function  yaddPerson(k,mshowname,element){
	$("#add"+k).show();
	$("#yadd"+k).hide();
	$(element).parent().parent().remove();
}
//保存数据
function  saveDate(){
	SPECIALTY_NAME1=undefined;
	//找类型
	var type=$("#typeUser").val();
	//获得数据
	var  ids=$("#tb_tbody2").find("tr");
	
	var trid=$(ids[0]).find("input").val();
	
	//如果是自评
	if(type==1){
		if(ids.length>1){
			alert("自评人只能有一个人");
		}else{
			$.ajax({
				url:"/audit/assessmentSpecialtyInfoController/saveUserAndSpecialty.do",
				data:{"date_specialty_id":date_specialty_id,"SID":SID1,"ZID":ZID1,"s_u_id":s_u_id1,"z_u_id":z_u_id1,"saveUserid":trid,"type":type},
				type:"POST",
				async:false,
			    dataType:"json",
			    success:function(data){
			    	alert("恭喜你保存成功！");
			    	//blackIndex();
			    },
			    error:function(){
			    	alert("你保存失败！");
			    }
			})
		}
		//如果是审核
	}else if(type==2){
		if(ids.length>1){
			alert("审核人只能有一个人");
		}else{
			$.ajax({
				url:"/audit/assessmentSpecialtyInfoController/saveUserAndSpecialty.do",
				data:{"date_specialty_id":date_specialty_id,"SID":SID1,"ZID":ZID1,"s_u_id":s_u_id1,"z_u_id":z_u_id1,"saveUserid":trid,"type":type},
				type:"POST",
			    dataType:"json",
			    success:function(data){
			    	alert("恭喜你保存成功！");
			    	//blackIndex();
			    },
			    error:function(){
			    	alert("你保存失败！");
			    }
			})
		}
	}else if(type==3){
		var newW_id=new Array(); 
		$.each(ids,function(k,v){
			newW_id.push($(v).find("input").val());  
		});
		
		if(confirm("你将保存"+ids.length+"个网评人,请确认此操作！")){
			$.ajax({
				url:"/audit/assessmentSpecialtyInfoController/saveUserAndSpecialty.do",
				data:{"date_specialty_id":date_specialty_id,
					"SID":SID1,
					"ZID":ZID1,
					"s_u_id":s_u_id1,
					"z_u_id":z_u_id1,
					"saveUserid":trid,
					"type":type,
					"old_id":old_w_id1,
					"new_id":newW_id.toString(),
					"_u_id":w_u_id1
				},
				type:"POST",
			    dataType:"json",
			    success:function(data){
			    	alert("恭喜你保存成功！");
			    	//blackIndex();
			    },
			    error:function(){
			    	alert("你保存失败！");
			    }
			})
	    }
	}else if(type==4){
		var newX_id=new Array(); 
		$.each(ids,function(k,v){
			newX_id.push($(v).find("input").val());  
		});
		
		if(confirm("你将保存"+ids.length+"个现场考察专家,请确认此操作！")){
			$.ajax({
				url:"/audit/assessmentSpecialtyInfoController/saveUserAndSpecialty.do",
				data:{"date_specialty_id":date_specialty_id,
					"SID":SID1,
					"ZID":ZID1,
					"s_u_id":s_u_id1,
					"z_u_id":z_u_id1,
					"saveUserid":trid,
					"type":type,
					"old_id":old_x_id1,
					"new_id":newX_id.toString(),
					"_u_id":xckc_u_id1
				},
				type:"POST",
			    dataType:"json",
			    success:function(data){
			    	alert("恭喜你保存成功！");
			    	//blackIndex();
			    },
			    error:function(){
			    	alert("你保存失败！");
			    }
			})
	    }
	}else if(type==5){
		var newX_zz_id=new Array(); 
		$.each(ids,function(k,v){
			newX_zz_id.push($(v).find("input").val());  
		});
		
		if(confirm("你将保存"+ids.length+"个现场考察专家组长,请确认此操作！")){
			$.ajax({
				url:"/audit/assessmentSpecialtyInfoController/saveUserAndSpecialty.do",
				data:{"date_specialty_id":date_specialty_id,
					"SID":SID1,
					"ZID":ZID1,
					"s_u_id":s_u_id1,
					"z_u_id":z_u_id1,
					"saveUserid":trid,
					"type":type,
					"old_id":old_x_zz_id1,
					"new_id":newX_zz_id.toString(),
					"_u_id":xckczj_u_id1
				},
				type:"POST",
			    dataType:"json",
			    success:function(data){
			    	alert("恭喜你保存成功！");
			    	//blackIndex();
			    },
			    error:function(){
			    	alert("你保存失败！");
			    }
			})
	    }
	}
}


//查询评估人员列表
function searchstart(){
	var searchvalue= $("#searchvalue").val();
	load(searchvalue);
}
function searchstart2(){
	//发送ajax  请求
	$.ajax({
		  type:"post",
		  url:"/audit/assessmentSpecialtyInfoController/findUserInfo.do",
		  dataType:"json",
		  data:{"searchvalue":$("#searchvalue2").val()},
		  success:function(data){
			  var a= eval("("+data+")");
			  //找到type
			  var type =$("#typeUser").val();
			  showUserInfo(a,type,SID1,ZID1,s_u_id1,z_u_id1,1);
		  },
		  error:function(){
			  alert("数据查询异常。。。");
		  }
	});
}
function searchstart3(){
	//发送ajax  请求
	$.ajax({
		  type:"post",
		  url:"/audit/assessmentSpecialtyInfoController/findUserInfo.do",
		  dataType:"json",
		  data:{"searchvalue3":$("#searchvalue3").val()},
		  success:function(data){
			  var a= eval("("+data+")");
			  //找到type
			  var type =$("#typeUser").val();
			  showUserInfo(a,type,SID1,ZID1,s_u_id1,z_u_id1,1);
		  },
		  error:function(){
			  alert("数据查询异常。。。");
		  }
	});
}
