$(function(){
	validateLogin();
	findData();
	initBoxListen();
	initSpecialtyName();
	initSite_visits();
})
var flag1=false;
//查询现场考察时间
function initSite_visits(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXianchangController/selectSite_visits.do",
		type:'POST',
		async:false,
		dataType:'json',
		data: {
			"specialty_id":specialtyId
		},
		success:function (data){
					$("#assess_self").append(data);
					// 时间判断
					var date = new Date();
					var nowDate = parseInt(date.getFullYear());
					var dates = data.split("~");
					
					var nowDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
					if(Date.parse(dates[0].replace('-','/').replace("-","/"))<=Date.parse(nowDate)&&Date.parse(nowDate)<=Date.parse(dates[1])){
						 flag1=true;
					}
		}
	})
}
function  initSpecialtyName(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/findAssessment_specialty_info_Name.do",
		type:'POST',
		async:true,
		dataType:'json',
		data: {
			"specialty_id":specialtyId
		},
		success:function (data){
			$("#specialtys").html(data);
		}
	})
}
function initBoxListen(){
	var checkboxs=$("#lastTr").find(":checkbox");
	$(checkboxs).each(function (k,v){
		$(v).click( function () { 
			var id=$(this).attr("id"); 
			checkBoxListen(id);
		});
	})
}
function  checkBoxListen(id){
	var  checkboxs=$("#lastTr").find(":checkbox");
	$(checkboxs).each(function(){
		if($(this).attr("id")!=id){
			$(this).attr("checked",false);
		}
	});
}
function initIndex(){
	var index=$(".index");
	var len=index.length;
	$(index).each(function (k,v){
		$(v).html(k+1);
	});
}
var request=GetRequest();
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
var specialtyId=request.specialtyId;
var dateYear=request.dateYear;
var zongId;
var general_evaluation_examination_id;
function findData(){  
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXianchangController/select_assessment_examination_paper_situation_Vo.do",
		type:'POST',
		async:true,
		dataType:'json',
		data: {
			"sYEAR":dateYear,"OBJECTID":specialtyId
		},
		success:function(data){
			var list = data.list;
			var assess = data.assess;
			//试卷审阅总体评价
			if(assess!=null){
				general_evaluation_examination_id=assess.id;
				var general_evaluation_examination=assess.general_EVALUATION_EXAMINATION
				if(general_evaluation_examination=="90"){
					$("#1").attr("checked","checked");
				}else if(general_evaluation_examination=="85"){
					$("#2").attr("checked","checked");		
				}else if(general_evaluation_examination=="75"){
					$("#3").attr("checked","checked");
				}else if(general_evaluation_examination=="65"){
					$("#4").attr("checked","checked");
				}
			}else{
				$("#1").attr("checked","checked");
			}
			var suggest = data.suggest
			if(suggest!=null){
				if(zong!=null){
					$("#zong").html(suggest.problems_AND_SUGGESTTIONS);
					zongId=suggest.id;
				}else{
					zongId=0;
				}
			}
			
			if(list.length!=0){
				$(list).each(function(k,v){
					var str="<tr >"
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
					$("#lastTr").before(str);
				})
			}else{
				var str="<tr >"
					str+="<td class=\"td1\"  align=\"center\">"
					str+="<input class=\"index\" type=\"checkbox\" id='0'  name=\"caozuoCheckbox\"/>"
					str+="</td>"
					str+="<td class=\"td1\"  align=\"center\">1"
					str+="</td>"
					str+="<td class=\"td1\" align=\"center\">"
					str+="<input type=\"text\" />"
					str+="</td>"
					str+="<td class=\"td1\" align=\"center\" colspan=\"2\" >"
					str+="<input class=\"input\" type=\"text\"  />"
					str+="</td>"
					str+="</tr>"
				$("#lastTr").before(str);
			}
			initIndex();
		}
	});
}
function deleteline(){
	if(flag1){
		var boxs=$("input[name='caozuoCheckbox']:checked");
		var len2=boxs.length;
		if(len2!=0){
			if(confirm("确定要进行此操作吗？")){
				$(boxs).each(function(k,v){
						var id=$(this).attr("id");
						if(id!=undefined){
							$.ajax({
								url: "/audit/AssessmentSpecialtyInfoXianchangController/deleteAssess_examination_paper_situation.do",
								type:'POST',
								async:true,
								dataType:'json',
								data: {"id":id},
								success:function(data){
									//lzrWindow.alert(data);
								}
							});
						}
						$(this).parent().parent().remove();
				})
				lzrWindow.alert("删除成功！");
			}
		}
		initIndex();
	}else{
		lzrWindow.alert("已经超过现场考察时间！");
	}
	
}

function addline(){
	var str="<tr >"
		str+="<td class=\"td1\"  align=\"center\">"
		str+="<input class=\"input\" type=\"checkbox\" name=\"caozuoCheckbox\" value=''>"
		str+="</td>"
		str+="<td class=\"index\"  align=\"center\">"
		str+="</td>"
		str+="<td class=\"td1\" align=\"center\">"
		str+="<input type=\"text\" value='' >"
		str+="</td>"
		str+="<td class=\"td1\" align=\"center\" colspan=\"2\">"
		str+="<input class=\"input\" type=\"text\" value='' >"
		str+="</td>"
		str+="</tr>"
	$("#lastTr").before(str);
	initIndex();
}

var falg=true;
function out(){
	var trs=$("table:eq(0)").find("tr");
	var len=trs.length;
	//清除以前的
	var adds=$("tr[name='add']");
	$(adds).each(function(){
		$(this).remove();
	})
		$(trs).each(function (k,v){
			//不等于第一行，也不要等于最后两行
			if(k>0&&(len-2)>k){
				var inputs=$(v).find("input");
				var id=$(inputs[0]).attr("id");
				var xuhao=$(v).find("td")[1];// 序号
				
				var examination_PAPER_SITUATION=$(inputs[1]).val();//试卷情况
				var ways_READING=$(inputs[2]).val();//审读方式
//				console.log($(xuhao).html());
//				console.log(examination_PAPER_SITUATION);
//				console.log(ways_READING);
				var str=""
					str+="<tr name='add'>"+
					  "<td width=73 valign=top  style='width:55.05pt;border:solid windowtext 1.0pt;"+
						  "border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;"+
						 " padding:0cm 5.4pt 0cm 5.4pt'>"+
						 " <p class=MsoNormal align=center style='text-align:center'><b"+
						"  style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:15.0pt'><o:p>&nbsp;</o:p>"+$(xuhao).html()+"</span></b></p>"+
						"  </td>"+
						 " <td width=331 colspan=4 valign=top style='width:248.05pt;border-top:none;"+
						"  border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;"+
						 " mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;"+
						 " mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>"+
						 " <p class=MsoNormal align=center style='text-align:center'><b"+
						 " style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:15.0pt'><o:p>&nbsp;</o:p>"+examination_PAPER_SITUATION+"</span></b></p>"+
						  "</td>"+
						 " <td width=164 colspan=2 valign=top style='width:123.0pt;border-top:none;"+
						 " border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;"+
						 " mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;"+
						 " mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt'>"+
						  "<p class=MsoNormal align=center style='text-align:center'><b"+
						 " style='mso-bidi-font-weight:normal'><span lang=EN-US style='font-size:15.0pt'><o:p>&nbsp;</o:p>"+ways_READING+"</span></b></p>"+
						"  </td>"+
						" </tr>"
					$("#last_tr_1").before(str);
			}
		});
	var zongMessge=$("#zong").val();
	var checkbox1=$("#lastTr").find(":checkbox");
	$(checkbox1).each(function (k,v){
		if($(v).prop("checked")){
			var id =$(v).attr("id");
			console.log($("#"+id+"s").css("background","red"));
		}
	})
	
	$("#zongMM").html(zongMessge);
	var text=$("#muban").html();
	$("#contentMold").val(text);
	$('#myForm').submit();
	//lzrWindow.alert("导出成功！");	
}
function tijiao(){
	if(flag1){
		// 获得总意见
		var zongMessge=$("#zong").val();
		var zongId1=zongId;
			//保存总意见 
			$.ajax({
				url: "/audit/AssessmentSpecialtyInfoXianchangController/insertAssessment_examination_paper_situation.do",
				type:'POST',
				async:false,
				data: {
					   "PROBLEMS_AND_SUGGESTTIONS":zongMessge,
					   "SYEAR":dateYear,
					   "OBJECTID":specialtyId,
					   "TYPE":3,
					   "id":zongId1
				},
				success:function(data){
					
				}
			});
		//保存试卷审阅情况总体评价	
			var checkBox=$("#lastTr").find("input:checked");
			$.ajax({
				url: "/audit/AssessmentSpecialtyInfoXianchangController/insertAssessment_examination_paper_situation.do",
				type:'POST',
				async:false,
				data: {
					   "GENERAL_EVALUATION_EXAMINATION":checkBox.val(),
					   "SYEAR":dateYear,
					   "OBJECTID":specialtyId,
					   "TYPE":2,
					   "id":general_evaluation_examination_id
				},
				success:function(data){
					
				}
			});
			
		//获得每一行的
		var trs=$("table:eq(0)").find("tr");
		var len=trs.length;
		$(trs).each(function (k,v){
//			console.log(k);
			//不等于第一行，也不要等于最后一行
			if(k>0&&(len-2)>k){
//				lzrWindow.alert(k);
				var inputs=$(v).find("input");
				
				var id=$(inputs[0]).attr("id");
				
				var examination_PAPER_SITUATION=$(inputs[1]).val();//试卷情况
				var ways_READING=$(inputs[2]).val();//审读方式
//				console.log(examination_PAPER_SITUATION);
//				console.log(ways_READING);
				if(ways_READING!=""&&examination_PAPER_SITUATION!=""){
					$.ajax({
						url: "/audit/AssessmentSpecialtyInfoXianchangController/insertAssessment_examination_paper_situation.do",
						type:'POST',
						async:false,
						data: {
							   "EXAMINATION_PAPER_SITUATION" :examination_PAPER_SITUATION,
							   "WAYS_READING":ways_READING,
							   "SYEAR":dateYear,
							   "OBJECTID":specialtyId,
							   "TYPE":1,
							   "id":id
						},
						success:function(data){
							//lzrWindow.alert("保存成功");
						}
					});
				}else{
					//获得序号 ，提示用户 信息未填写完整
					var xuhao=$(v).find("td")[1];
					lzrWindow.alert("序号"+$(xuhao).html()+"信息保存不完整,将不被保存！");
				}
			}
		});
		//刷新界面
		//location.reload();
		lzrWindow.alert("提交成功！");
	}else{
		lzrWindow.alert("已经超过现场考察时间！");
	}
	
}