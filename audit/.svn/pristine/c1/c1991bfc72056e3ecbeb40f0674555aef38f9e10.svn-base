$(function(){
/*	load();
	getFiles();*/
	//显示数据
	//查询默认专业列表
	initZyName();
	validateLogin();
	
}) 
var request =GetRequest();
var zylxIds=request.zylxId;
function initZyName(){
	$("#xhnl").attr("display","none");
	if(zylxIds==1){
		$("#biaoti").text("学院：");
		$("#specialtys").text("学院质量报告");
	}else if(zylxIds==4){
		$("#biaoti").text("课程：");
		$("#specialtys").text("课程质量报告");
	}else{
		$("#biaoti").text("专业：");
		$("#specialtys").text("专业质量报告");
	}
	$.ajax({
		  type:"post",
		  url:"/audit/assessmentSpecialtyInfoController/findSpecialtyAndDate.do",
		  async : false,
		  dataType:"json",
		  data:{"pgid":zylxIds},
		success:function(data){
			var str="";
			var result=eval("("+data+")");
			$(result.Rows).each(function(k,v){
				str+="<li style=\"padding:5px\" onclick=\"choose(this)\" >"+result.Rows[k].SPECIALTY_NAME+"</li>"
			})
			$("#ul2").html(str);
		}
	})
}

/*$.ajax({
	  type:"post",
	  url:"/audit/assessmentSpecialtyInfoController/findSpecialtyAndDate.do",
	  async : false,
	  dataType:"json",
	  data:{"searchvalue":$("#searchvalue").val(),"pgid":id},
	  success:function(data){
		  var a= eval("("+data+")");
		  showdata(a);
	  },
	  error:function(){
		  
	  }
});*/
function GetRequest() { 
	var url = window.location.search; //获取url中"?"符后的字串 
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	} 
	return theRequest; 
}
//给body 事件 点击其他  让隐藏
$(document).on('click',function(e){
		var x = $(e.target);
		if($("#2").find(x).length == 0 && !x.is($("#url"))){
			$("#2").hide(200);
		}
		if($("#2").find(x).length == 0 && !x.is($("#url"))){
			$("#2").hide(200);
		}
	});
//下拉切换
function xiala(id){	
	$("#"+id).toggle(200);
}
function choose(obj){
	var val=$(obj).html();
	$(obj).parent().parent().parent().find(":input").eq(0).val(val);
	$(obj).parent().parent().toggle();
}
var rectification_id;
var dateYear;//时间
var specialtyId;//专业ID
var array;//节点数值
var is_Engineering;
var wpInfo = [];


var zzId;
var zyId=[];
var zpId;
var wpId=[];
var shId;
var wpName=[];
var zyName=[];
function ajaxFindContentInfo(){
	//先清除
	$("#xckcSelect").empty();
	$("#wangpingren").empty();
	$("#wpyijian").val("");
	$("#xcmessge").val("");
	$("#shmessge").val("");
	$("#xckczzyj").val("");
	$("input[name='strContent']").val("");
	dateYear=$("#rYear").val();
	specialtyId=0;
	var zyLxId=0;
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/selectSpecialtyInfoByname.do",
		type:'POST',
		async:false,
		data:{
			'name':$("#sp_name").val(),
		},
		success:function(data){
			var result=eval("("+data+")");
			specialtyId=result[0].ID;
			zyLxId=result[0].PG_TYPE;
			//alert(result[0].IS_ENGINEERING);
			is_Engineering=result[0].IS_ENGINEERING;
		}
	});
		//audit/assessmentSpecialtyInfoController/findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor.do
		$.ajax({
			  type:"post",
			  url:"/audit/assessmentSpecialtyInfoController/findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor.do",
			  dataType:"json",
			  async:false,
			  data:{"searchvalue":$("#sp_name").val(),"pgid":zyLxId},
			  success:function(data){
				  var result= eval("("+data+")");
				  //alert("组长"+result.Rows[0].xianChangKaoChaZuZhangId+"--网评"+result.Rows[0].wangPingZhuanJiaId+"--自评人"+result.Rows[0].ZID+"--审核人"+result.Rows[0].SID+"--现场考查人"+result.Rows[0].xianChangKaoChaZhuanJiaId+"--网评人"+result.Rows[0].wangPingZhuanJiaName+"---考查人名"+result.Rows[0].xianChangKaoChaZhuanJiaName+"--专业ID"+specialtyId);
				  zzId=result.Rows[0].xianChangKaoChaZuZhangId.replace(",","");
				  zyId=result.Rows[0].xianChangKaoChaZhuanJiaId.split(",");
				  wpId=result.Rows[0].wangPingZhuanJiaId.split(",");
				  zpId=result.Rows[0].ZID;
				  shId=result.Rows[0].SID;
				  wpName=result.Rows[0].wangPingZhuanJiaName.split(",");
				  zyName=result.Rows[0].xianChangKaoChaZhuanJiaName.split(",");
				  for ( var i = 0; i < zyId.length; i++) {
					  $("#xckcSelect").append("<option value='"+zyId[i]+"'>"+zyName[i]+"</option>");
				  }
				  for ( var i = 0; i < wpId.length; i++) {
					  $("#wangpingren").append("<option value='"+wpId[i]+"'>"+wpName[i]+"</option>");
				  }
			  },
			  error:function(){
				  alert("数据查询异常。。。");
			  }
		});
		//网评人总意见
		$.ajax({
			  type:"post",
			  url:"/audit/AssessmentSpecialtyInfoXueYuanController/selectwpzyj.do",
			  async:false,
			  data:{"syear":dateYear,"zyId":specialtyId,"wpId": $("#wangpingren").val()},
			  success:function(data){
				  var result=eval("("+data+")");
				  if(result.length>0){
					  $("#wpyijian").val(result[0].COMMENT_SUGGESTIONS);
				  }
			  }
		});
		//考查专家
		$.ajax({
			  type:"post",
			  url:"/audit/AssessmentSpecialtyInfoXueYuanController/selectxckczjzyj.do",
			  async:false,
			  data:{"syear":dateYear,"zyId":specialtyId,"zysId": $("#xckcSelect").val()},
			  success:function(data){
				  var result=eval("("+data+")");
				  if(result.length>0){
					  $("#xcmessge").val(result[0].kc_suggestions);
					  $("input:radio[value='"+result[0].ranks+"']").attr('checked','true');
				  }
			  }
		});
		//审核总意见
		$.ajax({
			  type:"post",
			  url:"/audit/AssessmentSpecialtyInfoXueYuanController/selectshzyj.do",
			  async:false,
			  data:{"syear":dateYear,"zyId":specialtyId,"shId": shId},
			  success:function(data){
				  var result=eval("("+data+")");
				  if(result.length>0){
				  $("#shmessge").val(result[0].BLACKCONTENT);
				  }
			  }
		});
		//现场考查组长
		$.ajax({
			  type:"post",
			  url:"/audit/AssessmentSpecialtyInfoXueYuanController/selectXckcZyj.do",
			  async:false,
			  data:{"syear":dateYear,"zyId":specialtyId,"zzId": zzId},
			  success:function(data){
				  var result=eval("("+data+")");
				  if(result.length>0){
					  $("#xckczzyj").val(result[0].kc_suggestions);
					  $("input:radio[value='"+result[0].ranks+"']").attr('checked','true');
				  }
			  }
		});
		getAllWangping();
		load();
		$("#content1").show();
}
//下拉网评人
function selectwpId(id){
	$.ajax({
		  type:"post",
		  url:"/audit/AssessmentSpecialtyInfoXueYuanController/selectwpzyj.do",
		  async:false,
		  data:{"syear":dateYear,"zyId":specialtyId,"wpId":id},
		  success:function(data){
			  var result=eval("("+data+")");
			  if(result.length>0){
				  $("#wpyijian").val(result[0].COMMENT_SUGGESTIONS);
			  }
		  }
	});
}

//下拉现场考查
function xckcSelect(id){
	$.ajax({
		  type:"post",
		  url:"/audit/AssessmentSpecialtyInfoXueYuanController/selectxckczjzyj.do",
		  async:false,
		  data:{"syear":dateYear,"zyId":specialtyId,"zysId": id},
		  success:function(data){
			  var result=eval("("+data+")");
			  if(result.length>0){
				  $("#xcmessge").val(result[0].kc_suggestions);
			  }
		  }
	});
}
function ajaxAssess(task_id,self_assess_zt,audit_zt,blackcontent,rectification_id){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/updateAssessment_task.do",
		type:'POST',
		async:false,
		data:{
			'task_id':task_id,
			'self_assess_zt':self_assess_zt,
			'audit_zt':audit_zt,
			'blackcontent':blackcontent,
			'rectification_id':rectification_id
		},
		success:function(data){
				alert("审核提交成功！");
		},error:function(){
			alert("error");
		}
	})
}

function back(){
	parent.history.go(-1);
}


function load(){
	var parentData;
	$.ajax({
		url: "/audit/asAssessReport/getSystemByType.do",
		data:{
			"id":is_Engineering
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!="" && datas!=null){
				parentData = datas;
			}
		}
	});
	$.ajax({
		url: "/audit/asAssessReport/getSystemSonByType.do",
		data:{
			"id":is_Engineering
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			array = [];
			var datas = eval("("+data+")");
			if(datas!="" && datas!=null){
				if(parentData!=null && parentData!=""){
					for ( var i = 0; i < parentData.length; i++) {
						var obj =new Object();
						obj.id = parentData[i].id;
						obj.name = parentData[i].system_name;
						var childrens = [];
						for ( var j = 0; j < datas.length; j++) {
							if(datas[j].parent_id == parentData[i].id){
								childrens.push({id:datas[j].id,name:datas[j].system_name,url:datas[j].id+"x"})
							}
						}
						if(childrens.length==0){
							obj.url=parentData[i].id;
						}else{
							obj.children = childrens;	
						}
						array.push(obj);
					}
				}
			}

		}
	});
	showAllTextPreview();
}
function showAllTextPreview(){
	var wpStr = "";
	var str = "";
	var a = "";
	$.each(array,function(i,obj){
		if((i+1)==1) a = "一、";
		if((i+1)==2) a = "二、";
		if((i+1)==3) a = "三、";
		if((i+1)==4) a = "四、";
		if((i+1)==5) a = "五、";
		if((i+1)==6) a = "六、";
		if((i+1)==7) a = "七、";
		if((i+1)==8) a = "八、";
		if((i+1)==9) a = "九、";
		if((i+1)==10) a = "十、";
		wpStr = "没有意见";

			$.each(wpInfo,function(m,wpObj){
				if(obj.id == wpObj.sysid){
					wpStr = wpObj.comment_content;
					if(wpStr==undefined || wpStr=="") wpStr="没有意见"
						return false;
					}
			});

		
		//一级菜单
		str += "<div style='padding-top:20px'> <font style='color:#C73D3C;font-size:22px;font-weight:bold;'>" + a + obj.name + "</font> <div style='width:100%;height:0px;border:1px solid #C73D3C;'></div> <br>";
		
		// 二级菜单
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str += "<div id='buttons'>&nbsp;&nbsp;&nbsp;<img src='/audit/page/wangping/staticPage/img/files.png'>&nbsp;&nbsp;<font style='font-weight:bold;font-size:16px;'>" + obj.name + "详情</font><table style='width:100%;margin-top:10px;'>";
			$.each(obj.children,function(j,obj2){
				if(wpInfo.length<1){
					wpStr="没有意见";
					ranks="未评级";
				}
				$.each(wpInfo,function(m,wpObj){
					if(obj2.id == wpObj.sysid ){
						wpStr = wpObj.kc_content;
						//alert( wpObj.kc_content+"--"+wpObj.ranks); 
						if(wpObj.ranks!=undefined)
							ranks=wpObj.ranks;
						else
							ranks="未评级";
						return false;
					}else{
						wpStr = "没有意见";
						ranks="未评级";
					}
				})
				
				if(obj2!=undefined){
					str += "<tr><td style='width:5%'></td>" +
							"<td width='20%' height='50px'><img src='/audit/page/wangping/staticPage/img/file.png'>&nbsp;&nbsp;<font style='font-size:14px;font-weight:bold'>" + (j+1) + "." + obj2.name + "&nbsp;&nbsp;评分等级(&nbsp;"+ranks+"&nbsp;)</font></td>" +
							"<td align='left'><input name='strContent'  disabled='disabled' style='border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:40px;width:100%;margin-left:50px;' readonly='readonly' value='"+wpStr+"'> </td></tr>";
					// 三级菜单
					if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
						$.each(obj2.children,function(k,obj3){
							if(obj3!=undefined){
								str += (k+1) + "." + obj3.name + "<br>";
							}
						});
					}
				}
			});
		}else{
			str += "<input  disabled='disabled' style='border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:60px;width:100%;font-size:15px' readonly='readonly' value='"+wpStr+"'>"
		}
		str += "</table> </div></div>";
	});
	
//	var str = "";
//	$.each(array,function(index,dom){
//		str = "";
//		$.each(array.children,function(){
//			
//		})
//	})
	$("#showContext1").html(str);
}

function getAllWangping(){
	$.ajax({
		//url: "/audit/AssessmentSpecialtyInfoWangPingController/findAllWangpingInfo.do",
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/selectzjdyj.do",
		async:false,
		type:'POST',
		data:{
			"zzId":zzId,
			"syear":dateYear
		},
		success:function(data){
			var datas = eval("("+data+")");
			//alert("datas:"+datas);
			wpInfo = datas;
		//	alert("wpInfo:"+wpInfo);
		},error:function(){
			alert("我是错误信息");
		}
	});
}
	
	