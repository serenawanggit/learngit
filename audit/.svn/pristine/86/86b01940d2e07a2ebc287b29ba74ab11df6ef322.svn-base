$(function(){
	validateLogin();
	findData();
	initSpecialtyName();
	initSite_visits();
	
})
function initBoxListen(){
	//找到所有的checkbox
	var checkboxs=$(":checkbox");
	console.log(checkboxs);
	//遍历加事件
	$(checkboxs).each(function (k,v){
		$(v).click( function () { 
			$(this).attr("checked",true);
			$(this).siblings().each(function (){
				$(this).attr("checked",false);
			});
		});
	})
}
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
var zongId;
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
function findData(){  
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXianchangController/selectAssess_lecture_tableVo.do",
		type:'POST',
		async:false,
		dataType:'json',
		data: {
			"sYEAR":dateYear,"oBJECT_ID":specialtyId,"tYPE":1
		},
		success:function(data){
			if(data!=null){
				var list = data.list;
				if(list.length==0){
					var str="<tr >"
						str+="<td class=\"td1\"  align=\"center\">"
						str+="<input class=\"input\" type=\"checkbox\" id='0' />"
						str+="</td>"
						str+="<td class=\"index\"  align=\"center\">"
						str+=1
						str+="</td>"
						str+="<td class=\"td1\" align=\"center\">"
						str+="<input type=\"text\" />"
						str+="</td>"
						str+="<td class=\"td1\" align=\"center\">"
						str+="<input class=\"input\" type=\"text\" />"
						str+="</td>"
						str+="<td class=\"td1\"class=\"td\" align=\"center\">"
						str+="<input class=\"input\" type=\"text\" />"
						str+="</td>"
						str+="<td class=\"td1\" align=\"center\">"
						str+="<input class=\"input2\" type=\"checkbox\"  value='90' checked=\"checked\" />好"
						str+="<input class=\"input2\" type=\"checkbox\"  value='85' />较好"
						str+="<input class=\"input2\" type=\"checkbox\"  value='75' />一般"
						str+="<input class=\"input2\" type=\"checkbox\"  value='65' />较差"
						str+="</td>"
						str+="</tr>"
					$("#lastTr").before(str);
				}
				var zong = data.zong;
				if(zong!=null){
					$("#zong").html(zong.problems_AND_SUGGESTTIONS);
					zongId=zong.id;
				}else{
					zongId=0;
				}
				$(list).each(function(k,v){
					var str="<tr >"
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
			}else{
				var str="<tr >"
					str+="<td class=\"td1\"  align=\"center\">"
					str+="<input class=\"input\" type=\"checkbox\" id='0' />"
					str+="</td>"
					str+="<td class=\"index\"  align=\"center\">"
					str+=1
					str+="</td>"
					str+="<td class=\"td1\" align=\"center\">"
					str+="<input type=\"text\" />"
					str+="</td>"
					str+="<td class=\"td1\" align=\"center\">"
					str+="<input class=\"input\" type=\"text\" />"
					str+="</td>"
					str+="<td class=\"td1\"class=\"td\" align=\"center\">"
					str+="<input class=\"input\" type=\"text\" />"
					str+="</td>"
					str+="<td class=\"td1\" align=\"center\">"
					str+="<input class=\"input2\" type=\"checkbox\"  value=\"90\" checked=\"checked\"  />好"
					str+="<input class=\"input2\" type=\"checkbox\"  value=\"85\" />较好"
					str+="<input class=\"input2\" type=\"checkbox\"  value=\"75\" />一般"
					str+="<input class=\"input2\" type=\"checkbox\"  value=\"65\" />较差"
					str+="</td>"
					str+="</tr>"
				$("#lastTr").before(str);
			}
			//填序号
			initIndex();
		}
	});
	//checkBox绑定事件
	initBoxListen()
}
function deleteline(){
	if(flag1){
		var boxs=$("input:checked");
		var len2=boxs.length;
		if(len2!=0){
			if(confirm("确定要进行此操作吗？")){
				$(boxs).each(function(k,v){
					var id=$(this).attr("id");
					if(id!=undefined){
						$.ajax({
							url: "/audit/AssessmentSpecialtyInfoXianchangController/deleteAssess_lecture_tableById.do",
							type:'POST',
							async:true,
							dataType:'json',
							data: {"alt_id":id},
							success:function(data){
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
		str+="<input class=\"input\" type=\"checkbox\" id='0' />"
		str+="</td>"
		str+="<td class=\"index\"  align=\"center\">"
		str+="</td>"
		str+="<td class=\"td1\" align=\"center\">"
		str+="<input type=\"text\"/>"
		str+="</td>"
		str+="<td class=\"td1\" align=\"center\">"
		str+="<input class=\"input\" type=\"text\"/>"
		str+="</td>"
		str+="<td class=\"td1\"class=\"td\" align=\"center\">"
		str+="<input class=\"input\" type=\"text\"/>"
		str+="</td>"
		str+="<td class=\"td1\" align=\"center\">"
		str+="<input class=\"input2\" type=\"checkbox\"  value=\"90\" checked=\"checked\"  />好"
		str+="<input class=\"input2\" type=\"checkbox\"  value=\"85\" />较好"
		str+="<input class=\"input2\" type=\"checkbox\"  value=\"75\" />一般"
		str+="<input class=\"input2\" type=\"checkbox\"  value=\"65\" />较差"
		str+="</td>"
		str+="</tr>"
	$("#lastTr").before(str);
	initIndex();
	//checkBox绑定事件
	initBoxListen()
}
function initIndex(){
	var index=$(".index");
	var len=index.length;
	$(index).each(function (k,v){
		$(v).html(k+1);
	});
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
		falg=false;
		$(trs).each(function (k,v){
			//不等于第一行，也不要等于最后一行
			if(k>0&&(len-1)!=k){
				var inputs=$(v).find("input");
				var id=$(inputs[0]).attr("id");
				var xuhao=$(v).find("td")[1];
				
				var course_SHITUATION=$(inputs[1]).val();//课程情况
				var teacher_SHITUATION=$(inputs[2]).val();//授课教师情况
				var from_INSPECTION=$(inputs[3]).val();//考察形式
				var overall_EVALUA=$(inputs[4]).val();//总体评价
				var str=""
					str+="<tr style='mso-yfti-irow:1;height:40.5pt' name='add'>"+
					" <td width=102 valign=center style='width:76.6pt;border:solid windowtext 1.0pt;"+
					"  border-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;"+
					"  padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>"+
					"   <p class=MsoListParagraph style='text-indent:0cm;mso-char-indent-count:0'><span"+
					"  lang=EN-US><o:p>&nbsp;</o:p>"+$(xuhao).html()+"</span></p>"+
					"  </td>"+
					"   <td width=104 valign=center style='width:78.0pt;border-top:none;border-left:"+
					"  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;"+
					"  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;"+
					"   mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>"+
					"  <p class=MsoListParagraph style='text-indent:0cm;mso-char-indent-count:0'><span"+
					"   lang=EN-US><o:p>&nbsp;</o:p>"+course_SHITUATION+"</span></p>"+
					"  </td>"+
					"   <td width=104 valign=center style='width:78.0pt;border-top:none;border-left:"+
					"  none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;"+
					"  mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;"+
					"  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>"+
					" <p class=MsoListParagraph style='text-indent:0cm;mso-char-indent-count:0'><span"+
					"  lang=EN-US><o:p>&nbsp;</o:p>"+teacher_SHITUATION+"</span></p>"+
					"   </td>"+
					"  <td width=104 valign=center style='width:78.05pt;border-top:none;border-left:"+
					"   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;"+
					"   mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;"+
					"  mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>"+
					"   <p class=MsoListParagraph style='text-indent:0cm;mso-char-indent-count:0'><span"+
					"   lang=EN-US><o:p>&nbsp;</o:p>"+from_INSPECTION+"</span></p>"+
					"   </td>"+
					"   <td width=106 valign=center style='width:79.45pt;border-top:none;border-left:"+
					"   none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;"+
					"   mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;"+
					"   mso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:40.5pt'>"+
					"   <p class=MsoListParagraph style='text-indent:0cm;mso-char-indent-count:0'><span"+
					"   lang=EN-US><o:p>&nbsp;</o:p>"+overall_EVALUA+"</span></p>"+
					"   </td>"+
					"  </tr>";
					$("#last_tr").before(str);
			}
		});
	var zongMessge=$("#zong").val();
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
				url: "/audit/AssessmentSpecialtyInfoXianchangController/insertAssess_lecture_table.do",
				type:'POST',
				async:false,
				data: {
					   "PROBLEMS_AND_SUGGESTTIONS":zongMessge,
					   "SYEAR":dateYear,
					   "OBJECT_ID":specialtyId,
					   "TYPE":2,
					   "zId":zongId1
				},
				success:function(data){
					
				}
			});
		
		//获得每一行的
		var trs=$("table:eq(0)").find("tr");
		var len=trs.length;
		$(trs).each(function (k,v){
			//不等于第一行，也不要等于最后一行
			if(k>0&&(len-1)!=k){
				var inputs=$(v).find("input");
				var id=$(inputs[0]).attr("id");
				
				var course_SHITUATION=$(inputs[1]).val();//课程情况
				var teacher_SHITUATION=$(inputs[2]).val();//授课教师情况
				var from_INSPECTION=$(inputs[3]).val();//考察形式
				
				
				var overall_EVALUA=$(v).find(":checked").val();//总体评价
				if(course_SHITUATION!=""&&teacher_SHITUATION!=""&&from_INSPECTION!=""&&overall_EVALUA!=""){
					$.ajax({
						url: "/audit/AssessmentSpecialtyInfoXianchangController/insertAssess_lecture_table.do",
						type:'POST',
						async:false,
						data: {
							   "COURSE_SHITUATION" :course_SHITUATION,
							   "TEACHER_SHITUATION":teacher_SHITUATION,
							   "FROM_INSPECTION":from_INSPECTION,
							   "OVERALL_EVALUA":overall_EVALUA,
							   "SYEAR":dateYear,
							   "OBJECT_ID":specialtyId,
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