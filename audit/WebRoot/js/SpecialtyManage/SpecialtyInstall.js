var pgid;
$(function(){
	
	/*validateLogin();*/
	pgid = window.location.href.split("=")[1];
	load();
	selecttype_name(pgid);
	
//	alert(id);
});
//查询学院评估
var nums = []; 
function selecttype_name(id){
	$.ajax({
		  type:"post",
		  url:"/audit/assessmentSpecialtyInfoController/selecttype_name.do",
		  type:"post",
		  async:false,
		  data:{"id":id},
		  dataType:"json",
		  success:function (data){
			var obj=eval('('+data+')');
			var one=obj.one;	
		    for ( var i = 0; i < one.length; i++) {	
		    	var a=new Object();
		    	a.name=one[i].TYPE_NAME;
		    	a.id=one[i].id;
		    	nums.push(a);  }
		}
		});
	}

function load(){
	$.ajax({
		  type:"post",
		  url:"/audit/assessmentSpecialtyInfoController/findSpecialtyInfo.do",
		  dataType:"json",
		  async:false,
		  data:{"searchvalue":$("#searchvalue").val(),"id":pgid},
		  success:function(data){
			  var a= eval("("+data+")");
			  showdata(a);
		  },
		  error:function(){			  
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
			minWidth : 200
		},{
			display : '学院代码',
			name : 'SPECIALTY_CODE',
			minWidth : 200
		},{
			display : '学院类别',
			name : 'TYPE_NAME',
			minWidth : 200,
		/*	render: function(row){
				if(row.IS_ENGINEERING==1){
					return "否";
				}else{
					return "是";
				}
			}*/
		},/*{
			display : '工科通过认证',
			name : 'IS_RZ',
			minWidth : 200,
			render: function(row){
				if(row.IS_RZ==1){
					return "否";
				}else{
					return "是";
				}
			}
		},*/{
			display : '操作',
			name : 'id',
			minWidth : 100,
			render: function(row){
				 return "<a  href='javascript:void(0)' style='margin-right:15px;border: none;cursor:pointer;' onclick=\"updatespecialty('"+row.ID+"','"+row.SPECIALTY_NAME+"','"+row.SPECIALTY_CODE+"','"+row.TYPE_NAME+"','"+row.IS_RZ+"')\"><img src='/TQCC/page/roleDataShow/images/edit.png' title='修改' style='margin-top:5px;'/></a>"
				/* +"<a  href='javascript:void(0)'  style='border:none;cursor:pointer;' onclick=\"showUserInfo('"+row.id+"','"+row.name+"')\" ><img src='/TQCC/page/roleDataShow/images/icon04.png' style='' title='关联用户'/></a>"*/
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




function addspecialty() {
	var table="<table  style='margin: 0 auto;border-collapse:   separate;   border-spacing:   10px; '>" +
	  "<tr style=''><td>学校：</td><td><select id='schoolid' name=''>" +
	  
	  "</select></td></tr>"+"<tr style=''><td >学院名称：</td><td><input type='text' id='rolename'/></td></tr>" +
	  "<tr style=''><td >学院代码：</td><td><input type='text' id='remarkcontent'/></td></tr>"+
	  "<tr style='' id='tablewrap'><td>学院类别：<td><select id='test' name='sfgk'>";
	  for(var i=0;i<nums.length;i++){// 是 2 
		// table +="<td ><input type='radio' value='"+(nums.length-i)+"' name='sfgk' >"+nums[i];
		  table +="<option value="+(nums[i].id)+">"+nums[i].name+"</option>"; 
	  }
	//  "</select>"+
	  table +="</td></td></tr>";
/*	  table +="<tr style='' id='tblewrap'><td ><input type='radio' value=1 name='rz' checked='checked'>工科未认证</td><td><input type='radio' value=2 name='rz'>通过ABET认证</td><td><input type='radio' value=3 name='rz'>通过CEEAA认证</td></tr>" +
	  "</table>";*/
	$.ligerDialog.open({
		height : 200,
		width : 450,
		content :table,
		title :'添加学院',
		buttons : [ {
			text : '确定',
			onclick : function(item, dialog) {
				var rolename=$("#rolename").val().trim();
				var remarkcontent=$("#remarkcontent").val();
				var sfgk=$('#test').val();
				var rz=$('#tblewrap input[name="rz"]:checked').val();
				var schoolid=$("#schoolid").val();
				var a=rolename.length;
				var b=remarkcontent.length;
				if(a>0 && b>0){
					$.ajax({
						url:"/audit/assessmentSpecialtyInfoController/addSpecialtyInfo.do",
						type:"post",
						dataType:"json",
						data:{"sName":rolename,"sCode":remarkcontent,"sfgk":sfgk,"rz":rz,"id":pgid,"schoolid":schoolid},
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
					alert("请输入学院名称和学院代码！");
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
	selectSchoolid();
}

function selectSchoolid(){
	$.ajax({
		url:'/TQCC/accessSpecialty/ajax_findAllCollege.htm',
		type : "post",
		data : {
			type : "3",
			str : "1"
		},
		async : false,
		error:function(){
			alert("网络异常，请重试");
		},
		success:function(data){
	       var allSchool=data.json.data;
	       console.info(allSchool);
		   var str="";
		   for ( var i = 0; i < allSchool.length; i++) {
			   str+="<option value="+allSchool[i].id+">"+allSchool[i].name+"</option>";
		   }
		   $("#schoolid").html(str);
		}
	});
}
function updatespecialty(id,name,code,is_sfgk,is_rz){
	var table="<table  style='margin: 0 auto;border-collapse:   separate;   border-spacing:   10px; '><tr style=''><td >学院名称：</td><td><input type='text' id='rolename'/></td></tr>" +
	  "<tr style=''><td >学院代码：</td><td><input type='text' id='remarkcontent'/></td></tr>"+
	  "<tr style='' id='tablewrap'><td>学院类别：<td><select id='test' name='sfgk'>";
	  for(var i=0;i<nums.length;i++){
		  if(nums[i].name == is_sfgk){
			  table +="<option value="+(nums[i].id)+" selected='selected'>"+nums[i].name+"</option>"; 
		  }else{
			  table +="<option value="+(nums[i].id)+">"+nums[i].name+"</option>";  
		  }
	  }
	  table +="</td></tr>";
	  "</table>";
$.ligerDialog.open({
height : 200,
width : 450,
content :table,
title :'修改学院',
buttons : [ {
	text : '确定',
	onclick : function(item, dialog) {
		var rolename=$("#rolename").val().trim();
		var remarkcontent=$("#remarkcontent").val().trim();
		var sfgk=$('#test').val();
		var rz=$('#tblewrap input[name="rz"]:checked').val();
		var a=rolename.length;
		var b=remarkcontent.length;
		if(a>0 && b>0){
			//alert(id);
			$.ajax({
				url:"/audit/assessmentSpecialtyInfoController/updateSpecialtyInfo.do",
				type:"post",
				dataType:"json",
				data:{"sName":rolename,"sCode":remarkcontent,"sfgk":sfgk,"rz":rz,"id":id},
				success:function (data){
				 var result=eval("("+data+")");
				    load();
					alert(result.message);
					dialog.close();
				},
				error:function(){
					alert("修改失败！");
				}
			});
		}else{
			alert("请输入学院名称和学院代码！");
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
				//  alert(id);
				  $.ajax({
					  type:"post",
					  url:"/audit/assessmentSpecialtyInfoController/delSpecialtyInfo.do",
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





