$(function(){
	//显示专家列表
	initZjName();
	//查询默认专业列表
	initZyName();
	validateLogin();
})	
var	sContentPath;
var choosess;
var num = 2;
//传进来
function toggleMenu(obj){
	$.each($(obj).siblings(),function (){
		$(this).css("background","url('/audit/page/guanliyuan/images/backgroundout.png') round")
		$("#"+$(this).attr("name")).hide();
	});
	$(obj).css("background","url('/audit/page/guanliyuan/images/backgroundin.png') round");
	$("#"+$(obj).attr("name")).show();
	if($(obj).html()=="现场考查反馈意见(个人)"){
		choosess = $(obj).html();
	}else if($(obj).html()=="现场考查工作记录表"){
		choosess = $(obj).html();
	}else if($(obj).html()=="听课看课表"){
		choosess = $(obj).html();
	}else if($(obj).html()=="学生毕业论文(设计)情况"){
		choosess = $(obj).html();
	}else if($(obj).html()=="试卷评价表"){
		choosess = $(obj).html();
	}
}
//显示专家
function initZjName(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoGuanliyuanController/selectZjName.do",
		type:'POST',
		async:false,
		data:{},
		dataType:'json',
		success:function(data){
			var str="";
			$(data).each(function(k,v){
				str+="<li style=\"padding:5px\" onclick=\"choose(this)\">"+v+"</li>"
			})
			$("#yijian_ul1_zj").html(str);
			$("#yijian_ul1_jl").html(str);
			$("#yijian_ul1_sj").html(str);
			$("#yijian_ul1_kk").html(str);
			$("#yijian_ul1_pj").html(str);
		}
	})
	choosess = '现场考查反馈意见(个人)';
	sContentPath = getContentPath();
}
//序号
function initIndex(){
	var index=$(".index");
	var len=index.length;
	$(index).each(function (k,v){
		$(v).html(k+1);
	});
}
//显示专业
function initZyName(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/selectZyName.do",
		type:'POST',
		async:false,
		data:{},
		dataType:'json',
		success:function(data){
			var str="";
			$(data).each(function(k,v){
				str+="<li style=\"padding:5px\" onclick=\"choose(this)\">"+v+"</li>"
			})
			$("#yijian_ul2_zy").html(str);
			$("#yijian_ul2_jl").html(str);
			$("#yijian_ul2_sj").html(str);
			$("#yijian_ul2_pj").html(str);
			$("#yijian_ul2_kk").html(str);
		}
	})
}

//下拉切换
function xiala(id){	
	$("#"+id).toggle(200);
}

//选择
function choose(obj){
		var id=$(obj).parent().parent().siblings(":input").val($(obj).html());
		$(obj).parent().parent().toggle(200);
}

//试卷评价查询
function getSjPj(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXianchangController/select_assessment_examination_paper_situation_Vo.do",
		type:'POST',
		async:true,
		dataType:'json',
		data: {
			"user_name":$("#sp_name1_zj").val(),"sp_name":$("#sp_name2_zy").val(),"sYEAR":$("#rYear_pj").val()
		},
		success:function(data){
			$.each($(".newadd"),function(){
				$(this).remove();
			})
			
			var list = data.list;
			var assess = data.assess;
			//试卷审阅总体评价
			if(assess!=null){
				general_evaluation_examination_id=assess.id;
				var general_evaluation_examination=assess.general_EVALUATION_EXAMINATION
				if(general_evaluation_examination=="90"){
					$("#1x").attr("checked","checked");
				}else if(general_evaluation_examination=="85"){
					$("#2x").attr("checked","checked");		
				}else if(general_evaluation_examination=="75"){
					$("#3x").attr("checked","checked");
				}else if(general_evaluation_examination=="65"){
					$("#4x").attr("checked","checked");
				}
			}
			var suggest = data.suggest
			if(suggest!=null){
				$("#zong3").html(suggest.problems_AND_SUGGESTTIONS);
			}
			
			if(list.length!=0){
				$(list).each(function(k,v){
					var str="<tr class=\"newadd\" >"
						str+="<td class=\"td1\"  align=\"center\">"
						str+="<input class=\"input\" type=\"checkbox\" id="+v.id+"  name=\"caozuoCheckbox\"/>"
						str+="</td>"
						str+="<td class=\"index\"  align=\"center\">"
						str+="</td>"
						str+="<td class=\"td1\" align=\"center\">"
						str+="<input type=\"text\" value="+v.examination_PAPER_SITUATION+" />"
						str+="</td>"
						str+="<td class=\"td1\" align=\"center\" colspan=\"2\" >"
						str+="<input class=\"input\" type=\"text\" value="+v.ways_READING+" />"
						str+="</td>"
						str+="</tr>"
					$("#lastTr3").before(str);
				})
				$("#yuliu3").remove();
			}
			initIndex();
		}
	});

}
//听课看课表查询
function getTkKk(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXianchangController/selectAssess_lecture_tableVo.do",
		type:'POST',
		async:false,
		dataType:'json',
		data: {
			"user_name":$("#kanke_name1_zj").val(),
			"sp_name":$("#kanke_name2_zy").val(),
			"sYEAR":$("#rYear_kk").val(),
			"tYPE":1
		},
		success:function(data){
			console.log(data);
			$.each($(".newadd"),function(){
				$(this).remove();
			})
			var list = data.list;
			if(list.length!=0){
					$(list).each(function(k,v){
						var str="<tr class=\"newadd\" >"
							str+="<td class=\"td1\"  align=\"center\">"
							str+="<input class=\"input\" type=\"checkbox\" id="+v.id+" />"
							str+="</td>"
						    str+="<td class=\"index\"  align=\"center\">"
							str+="</td>"
							str+="<td class=\"td1\" align=\"center\">"
							str+="<input type=\"text\" value="+v.course_SHITUATION+" />"
							str+="</td>"
							str+="<td class=\"td1\" align=\"center\">"
							str+="<input class=\"input\" type=\"text\" value="+v.teacher_SHITUATION+" />"
							str+="</td>"
							str+="<td class=\"td1\"class=\"td\" align=\"center\">"
							str+="<input class=\"input\" type=\"text\" value="+v.from_INSPECTION+" />"
							str+="</td>"
							str+="<td class=\"td1\" align=\"center\">"
							if(v.overall_EVALUA==90){
									str+="<input class=\"input2\" type=\"checkbox\"  value='90' checked=\"checked\" />好"
							}else{
						            str+="<input class=\"input2\" type=\"checkbox\"  value='90'  />好"
							}	
						if(v.overall_EVALUA==85){
							str+="<input class=\"input2\" type=\"checkbox\"  value='85' checked=\"checked\" />较好"
						}else{
							str+="<input class=\"input2\" type=\"checkbox\"  value='85'  />较好"
						}
						if(v.overall_EVALUA==75){
							str+="<input class=\"input2\" type=\"checkbox\"  value='75'  checked=\"checked\" />一般"
						}else{
							str+="<input class=\"input2\" type=\"checkbox\"  value='75'  />一般"
						}
						if(v.overall_EVALUA==65){
							str+="<input class=\"input2\" type=\"checkbox\"  value=\"65\" checked=\"checked\" />较差"
						}else{
							str+="<input class=\"input2\" type=\"checkbox\"  value=\"65\" />较差"
						}
						str+="</td>"
						str+="</tr>"
						
						$("#lastTr").before(str);
					})
					
					$("#yuliu").remove();
					
				}
				
				var zong = data.zong;
				if(zong!=null){
					$("#zong2").html(zong.problems_AND_SUGGESTTIONS);
				}
			
			//填序号
			initIndex();
		}
	});
}

//===============================学生论文==================================================
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}

function selectLoad(){
	var specialtyName= $("#xs_name2_zy").val();	
	var userName=$("#xs_name1_zj").val();
	var dateYear = $("#rYear_xs").val();
	num = 2
	alert(userName);
	$.ajax({
		url: sContentPath +"/assessInspect/selectGraduation.do",
		type:'POST',
		dataType:'json',
		data:{
			"specialtyName":specialtyName,
			"userName":userName,
			"syear":dateYear
		},
		success:function(data){
			var datas = eval("("+data+")");
			dataGra =datas;
			if(datas!=null&&datas.length>0){
				var ss = 1;
				$("#specialty1_xs").html(datas[0].SPECIALTY_NAME);
				for ( var j = 2; j < datas.length; j++) {
					addAssessShow(datas[0].SPECIALTY_NAME);
				}
				for ( var i = 0; i < datas.length; i++) {
					if(datas[i].TYPE==1){
						$("#grade"+ss).val(datas[i].GRADE);
						$("#num"+ss).val(datas[i].NUM);
						$("#assessData"+ss).val(datas[i].CONTENT);
						$("#assessProblem"+ss).val(datas[i].EXISTING_PROBLEMS);
						ss++;
					}else{
						$("#assessSug").val(datas[i].PROPOSAL);
						$("input[name=assessAll1][value="+datas[i].OVERALL_EVALUATION_REVIEW+"]").attr("checked",true);
					}
				}
			}else{
				var ss =1;
				$("#grade1").val("");
				$("#num"+ss).val("")
				$("#assessData"+ss).val("");
				$("#assessProblem"+ss).val("");
				$("#assessSug").val("");
				$("input[name=assessAll1][value='90']").attr("checked",true);
			}
		}
	})
}
function addAssessShow(speName){
	var htmls="<div id='content"+num+"' style='width:100%;height:300px;border:0px solid;'><div style='font-size:16px;'>"

    +"阅读了<span id='gradeSpan"+num+"'></span><input id='grade"+num+"' style='border-top:0 solid;border-left:0 solid;border-right:0 solid;width:50px;'/>年级 "
    +speName+" 专业毕业论文（"
    +"<span id='numSpan"+num+"'></span><input id='num"+num+"' style='border-top:0 solid;border-left:0 solid;border-right:0 solid;width:50px;'/>份），总体评价如下：</div>"

+"<textarea id='assessData"+num+"' style='width:100%;height:36%;margin-top:1px;'></textarea>"
+"<span style='font-size:16px;'>存在的问题：</span><br>"
+"<textarea id='assessProblem"+num+"' style='width:100%;height:48.5%;margin-top:1px;'></textarea></div>";
	$("#tableDiv_xs table tr:eq(0) td").append(htmls);
	num=num+1;
}



//========================现场考察记录表=====================

function getData1(){
	$("#selects1").html("");
	$.ajax({
		url: sContentPath +"/assessInspect/selectExpedition.do",
		type:'POST',
		dataType:'json',
		async:false,
		success:function(data){
				var datas = eval("("+data+")");
				if(datas!=null&&datas.length>0){
					for ( var i = 0; i < datas.length; i++) {
						$("#selects1").append("<option value='"+datas[i].id+"'>"+datas[i].act_name+"</option>")
					}
				}
				$("#tableData_jl table tr:eq(0) td:eq(1)").html($("#selects1 option:checked").text());
			/*$("#selects2").ligerDateEditor({
              	format: "yyyy/MM/dd",
              	label: '时间',
              	labelWidth: 35,
              	cancelable : false,
              	onChangeDate:dateChange
              });*/
		}
	})
}

function getData(){
	var specialtyName= $("#jl_name2_zy").val();	
	var userName=$("#sp_name1_jl").val();
	var dateYear = $("#rYear_jl").val();
	
	$.ajax({
		url:sContentPath +"/assessInspect/selectFieldRecord.do",
		type:'POST',
		async:false,
		dataType:'json',
		data:{
			"rid":$("#selects1").val(),
			"specialtyName":specialtyName,
			"syear":dateYear,
			"userName":userName
		},
		success:function(data){
			var datas = eval("("+data+")");
			dataRecord = datas;
			if(datas!=null&&datas.length>0){
				$("#tableData_jl table tr:eq(2) td:eq(1)").html(datas[0].showname);
				$("#tableData_jl table tr:eq(1) td:eq(1)").html(datas[0].FIELD_TEST_RECORD_DATE);
				$("#selects2").val(datas[0].FIELD_TEST_RECORD_DATE);
				$("#jl_content").val(datas[0].content);
			}else{
				$("#jl_content").val("");
				$("#tableData_jl table tr:eq(2) td:eq(1)").html("");
				$("#tableData_jl table tr:eq(1) td:eq(1)").html("");
				$("#selects2").val("")
			}
		}
	})
}
function dateChange(){
	var dateTime = $("#selects2").val();
	$("#tableData_jl table tr:eq(1) td:eq(1)").html(dateTime);
	}
function activityChange(){
	getData();
	$("#tableData_jl table tr:eq(0) td:eq(1)").html($("#selects1 option:checked").text());
}
//===================反馈意见====================

function load(){
var specialtyName= $("#sp_name2_zy").val();	
var userName=$("#sp_name1_zj").val();
var dateYear = $("#rYear_yijian").val();
var is_Engineering;
	$.ajax({
		url: sContentPath+"/assessInspect/getAllData1.do",
		type:'POST',
		data:{
			"specialtyName":specialtyName
		},
		async:false,
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				//$("#assess_self").html("提交报告时间:"+datas[0].site_visits);
				//$("#specialtys").html(datas[0].specialty_name);
				is_Engineering = datas[0].is_engineering;
				/*if(datas[0].site_visits!=null&&datas[0].site_visits!="~"){
					var date = new Date();
					var dates = datas[0].site_visits.split("~");
					var nowDate = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
					if(Date.parse(dates[0].replace('-','/').replace('-','/'))<=Date.parse(nowDate)&&Date.parse(nowDate)<=Date.parse(dates[1].replace('-','/').replace('-','/'))){
						$("#submit1").show();
					}else{
						$("#submit1").hide();
					}
				}else{
					$("#submit1").hide();
				}*/
			}
		}
	});
	var type=3;
	if(is_Engineering==2){
		type=4;
	}
	$.ajax({
		url: sContentPath+"/assessInspect/getInspectSysInfo.do",
		type:'POST',
		async:false,
		data:{
			"stype":type
		},
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			var htmls = "";
			//$("#showName").html('现场考查反馈意见');
			for ( var i = 0; i < datas.length; i++) {
				if(datas[i].remark!=null&&datas[i].remark!=undefined&&datas[i].remark!=""){
					var remarks = 	datas[i].remark.split("&&")
					for ( var j = 0; j < remarks.length; j++) {
						htmls+="<tr>"
						if(j==0){
						htmls+="<td  style='padding:0 20px;width:6px; border:#D1D1D1 1px solid;word-wrap:break-word;' align='center' rowspan='"+remarks.length+"'>"+datas[i].SYSTEM_NAME+"</td>"	
						}
						htmls +="<td  style='padding:0 20px;width:350px;border:#D1D1D1 1px solid;word-wrap:break-word;' align='center'>"+remarks[j]+"</td>";
						htmls += "<td  style='padding:0; width:350px;border:#D1D1D1 1px solid;word-wrap:break-word;' align='center' id='achieve"+datas[i].ID+"_"+(j+1)+"' ></td>" +
								"<td  style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' id='score"+datas[i].ID+"_"+(j+1)+"' ></td>";
						if(j!=0){
							htmls+="</tr>"
						}
					}
						$("#tb_tbody2").html(htmls);
					}
			}
		}
	});
	$.ajax({
		url: sContentPath+"/assessInspect/getInspectBySysId.do",
		type:'POST',
		async:false,
		dataType:'json',
		data:{
			"syear":dateYear,
			"specialtyName":specialtyName,
			"userName":userName
		},
		success:function(data){
			if(data!=null&& data!=""&&data!="null"){
			var datas = eval("("+data+")");
				for ( var i = 0; i < datas.length; i++) {
					if(datas[i].ACHIEVE_SITUATION!=null&&datas[i].ACHIEVE_SITUATION!=""&&datas[i].ACHIEVE_SITUATION!="null"){
						$("#achieve"+datas[i].SYSID+"_"+datas[i].SYSTYPE).html(datas[i].ACHIEVE_SITUATION);
					}
					if(datas[i].SCORE!=null&&datas[i].SCORE!=""&&datas[i].SCORE!="null"){
						var scoress=0;
						if(datas[i].SCORE==90){
							scoress = '好';
						}else if(datas[i].SCORE==85){
							scoress = '较好';
						}else if(datas[i].SCORE==75){
							scoress = '一般';
						}else if(datas[i].SCORE==65){
							scoress = '较差';
						}
						$("#score"+datas[i].SYSID+"_"+datas[i].SYSTYPE).html(scoress);
					}
				}
			}
		}
	});
}


function changeData(){
	if(choosess=="现场考查反馈意见(个人)"){
		load();
	}else if(choosess=="现场考查工作记录表"){
		getData1();
		getData();
	}else if(choosess=="听课看课表"){
		
	}else if(choosess=="学生毕业论文(设计)情况"){
		selectLoad();
	}else if(choosess=="试卷评价表"){
		
	}
	
}



















