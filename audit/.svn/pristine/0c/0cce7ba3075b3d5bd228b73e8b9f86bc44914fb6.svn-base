$(function(){
	getOrg();
	getContent();
	
})
var sContentPath;
function getOrg(){
	sContentPath = getContentPath();
	$.ajax({
		url: sContentPath+"/asAssessReport/getOrg.do",
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			$("#orgSelect").html("<option value='全校'>全校</option>");
			if(datas!=null&&datas.length>0){
				for ( var i = 0; i < datas.length; i++) {
					$("#orgSelect").append("<option value='"+datas[i].name+"'>"+datas[i].name+"</option>")
				}	
			}
		}
	});
	var date = new Date();
	for ( var i = 2013; i <= date.getFullYear(); i++) {
		
		if(i==date.getFullYear()){
			$("#dateSelect").append("<option value='"+i+"' selected>"+i+"</option>");
		}else{
			$("#dateSelect").append("<option value='"+i+"'>"+i+"</option>");
		}
	}
}
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}


function getContent(){
	var syear = $("#dateSelect").val();
	var depart = $("#orgSelect").val();
	var aid = $("#aid").val();
	var bname;
	var aurl = sContentPath+"/asAssessAnalysis/getZRJSQKB.do";
	$("#remark_tab").html("");
	$("#tb_thead").html("");
	var htmls ="";
	if(aid==1){
		bname='ZRJSQKB'
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学院</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教师总数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专任教师数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专任教师中承担教学任务的人数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专任教师中未承担教学任务的人数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专任教师数占教师总数的比例</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专任教师中教授、副教授数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专任教师中教授、副教授数占教师总数的比例</td>"+
									"</tr>"
	//	$("#tb_thead").append(htmls);
	}else if(aid==2){
		bname="ZRJSMXB"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学院</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教师工号</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教师姓名</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业技术职称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px 	solid;'"+
						"align='center' colspan='1'>任教类型</td>"+
									"</tr>"
	//	$("#tb_thead").append(htmls);
	}else if(aid==3){
		//bname="SKJSMXB"
		bname="CDJXRWDZRJSMD";
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学院</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教师工号</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教师姓名</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业技术职称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>课程号</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>课程名称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>授课课时</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
	//	$("#remark_tab").html("备注：只统计1-6-1表的授课教师，不包含外聘教师")
	}else if(aid==4){
		bname="WCDJXRWDZRJSMD"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学院</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教师工号</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教师姓名</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业技术职称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>任教专业代码</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>任教专业名称</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
	}else if(aid==5){
		bname="JSZCJG"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
/*		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>所属机构</td>"+*/
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>类别</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>总数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>正高级</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>副高级</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>中级</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>初级</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>未评级</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
	}else if(aid==6){
		bname="JSXWJG"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
/*		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>所属机构</td>"+*/
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>类别</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>总数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>博士</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>硕士</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学士</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>无学位</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
	}else if(aid==7){
		bname="JSXYJG"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		/*"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>所属机构</td>"+*/
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>类别</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>总数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>外校(境内)</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>外校(境外)</td>"+
									"</tr>"
	//	$("#tb_thead").append(htmls);
	}else if(aid==8){
		bname="JSNLJG"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>类别</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>总数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>35岁及以下</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>36-45岁</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>46-55岁</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>56岁及以上</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
	}else if(aid==9){
		bname="JSBJQK"
			 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>类别</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>总数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>双师型</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>工程背景</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>行业背景</td>"+
										"</tr>"
			//$("#tb_thead").append(htmls);
		}else if(aid==10){
			bname="SKJSMXB"
				 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>学院</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>教师工号</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>教师姓名</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>专业技术职称</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>双肩挑情况</td>"+
								"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>课程号</td>"+
								"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>课程名称</td>"+
								"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>授课课时</td>"+
											"</tr>"
				//$("#tb_thead").append(htmls);
			}else if(aid==11){
			bname="JSFJSSKKSQK"
			 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>学院</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>在编教授、副教授总人数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>在编教授、副教授授课总人数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>在编教授、副教授未授课总人数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>在编教授、副教授未授课人数占在编教授、副教授总人数的比例</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>教授、副教授总授课课时数超过108课时的人数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>教授、副教授总授课课时未超过108课时的人数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>教授、副教授总授课课时超过108课时的人数占教授、副教授授课总人数的比例</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>双肩挑超过54课时的教授、副教授的人数 </td>"+					
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>双肩挑未超过54课时的教授、副教授的人数</td>"+							
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>双肩挑超过54课时的教授、副教授人数占教授、副教授授课总人数的比例</td>"+								
										"</tr>"
				//$("#tb_thead").append(htmls);
		}else if(aid==12){
				bname="JSFJSZJSKQK"
					 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>学院</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>授课教师总数</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>教授、副教授授课人数</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>教授、副教授授课人数占授课教师总数的比例</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>助教授课人数</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>助教授课人数占授课教师总数的比例</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>总课程门次数</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>教授、副教授授课门次数</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>教授、副教授授课门次数占总课程门次数的比例</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>助教授课门次数</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>助教授课门次数占总课程门次数的比例</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>总课时数</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>教授、副教授授课课时总数</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>教授、副教授授课课时总数占总课时数的比例</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>助教授课课时总数</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>助教授课课时总数占总课时数的比例</td>"+
												"</tr>"
							//		$("#tb_thead").append(htmls);
		}else if(aid==13){
					bname="JSSKKCMD"
						 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
										"align='center' colspan='1'>学院</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
										"align='center' colspan='1'>教师工号</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
										"align='center' colspan='1'>教师姓名</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
										"align='center' colspan='1'>课程号</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
										"align='center' colspan='1'>课程名称</td>"+
													"</tr>"
						//$("#tb_thead").append(htmls);
			}else if(aid==14){
				bname="JSGDNJBKSSKMD"
					 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>学院</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>教师工号</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>教师姓名</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>课程号</td>"+
					"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
									"align='center' colspan='1'>课程名称</td>"+
						$("#remark_tab").html("备注:只统计专业课")
				//	$("#tb_thead").append(htmls);
		}else if(aid==21){
			bname="JSJBKS"
				 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		/*		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1' rowspan='3'>序号</td>"+*/
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1' >学院</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>专任教师总数</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1' >专任教师中高级职称教师</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>专任教师中高级职称教师占比</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1' >35岁以下青年教师数</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>35岁以下青年教师占比</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>双师型</td>"+
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>双师型占比</td>"+					
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>近五年新增教师数</td>"+							
				"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>近五年新增教师数占比</td>"+
								"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>外聘教师数</td>"+
								"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>本科生数</td>"+
								"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
								"align='center' colspan='1'>生师比</td>"+
			    "</tr>"
			//	$("#tb_thead").append(htmls);
	}else if(aid==22){
		bname="ZYDTR"
			 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		/*	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1' rowspan='3'>序号</td>"+*/
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1' >单位</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1' >院系专业数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' >总人数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>高级职称人数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>专业带头人高级职称教师数百分比</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
							"align='center' colspan='1'>获得博士学位人数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
			"align='center' colspan='1'>专业带头人博士学位教师数百分比</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
			"align='center' colspan='1'>学缘为外校人数</td>"+
			"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
			"align='center' colspan='1'>专业带头人外校(境外)学缘教师数百分比</td>"+
										"</tr>"
		//	$("#tb_thead").append(htmls);
}else if(aid==23){
	bname="SYJSRY"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>院系名称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>实验技术人员总数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>正高职称数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>副高职称数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>中级职称数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>初级职称数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>无职称数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>博士学位数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>硕士学位数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学士学位数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>无学位数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>35岁及以下</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>36-45岁</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>46-55岁</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>56岁以上</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==24){
	bname="JYJXYJYGGQK"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1' >单位</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教育教学研究与改革项目-项目总数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教育教学研究与改革项目-国家级</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1' >教育教学研究与改革项目-省部级</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教育教学研究与改革项目-当年经费</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教学成果奖-总数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1' >教学成果奖-国家级</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教学成果奖-省部级</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==25){
	bname="XSGLRYYXSQK"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>单位</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学生管理人员数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>本科在校生数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>辅导员数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>本科在校生数与辅导员比例</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>本科在校生数与学生管理人员比例</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==26){
	bname="KCKSQK"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>单位</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>开设双语课程教师数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业课平均学生数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教授、副教授人均授课学时数</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==31){
	bname="SKJS"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1' >专业名称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业设置年限</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>授课教师总数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>授课教师-本学院授课教师数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>授课教师-外学院授课教师数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>教授职称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>副教授职称</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>其他职称</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>博士学位</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>硕士学位</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>学士学位</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>其他学位</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>35岁及以下</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>36-45岁</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>46-55岁</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>56岁及以上</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>其中为低年级授课教授</td>"+
	"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
	"align='center' colspan='1'>其中为低年级授课教授占比</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==32){
	bname="ZYFX_ZYDTR"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>所在院系</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>姓名</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>出生年月</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学位</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业技术职称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学缘</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==33){
	bname="ZYFX_ZSBDQK"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业(大类)</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>所在院系</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>招生计划数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>实际录取数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>实际报到数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>报到率</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==34){
	bname="ZYFX_BYJYQK"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业名称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>所属院系</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>应届毕业生数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>应届生中未按时毕业数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>毕业率</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学位授予数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学位授予率</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>应届就业人数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>初次就业率</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==35){
	bname="ZYFX_ZYPYFAXFJG"
		 htmls = "<tr style='background-color:#58b957;color:#fff;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>学科门类</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>所含专业数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业平均总学分</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业平均实践教学环节学分比例</td>"+

									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==36){
	bname="ZYFX_KCXFQK"
		 htmls = "<tr style='background-color:#58b957;color:#FFF;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业名称</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>优势专业</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>专业设置时间(年)</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>总学时</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>总学分</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>集中性实践教学环节学分</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>课内教学学分</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>课外科技活动学分</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>实践教学学分</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>实践教学学分占总学分比例</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>实验教学学分</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>实验教学学分占总学分比例</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>实验开出率</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>综合性、设计性实验教学门数</td>"+
									"</tr>"
		//$("#tb_thead").append(htmls);
}else if(aid==37){
	bname="ZYFX_BYZHXLQK"
		 htmls = "<tr style='background-color:#58b957;color:#FFF;font-weight:bold;font-size:12px;'>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1' >专业</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1' >毕业综合训练-课题数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' >毕业综合训练-在实验、实习、工程实践和社会调查等社会实践中完成数</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' >毕业综合训练-在实验、实习、工程实践和社会调查等社会实践中完成数比例</td>"+
		"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' colspan='1'>毕业综合训练-专任教师数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center'  >毕业综合训练-外聘教师数</td>"+
						"<td  style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'"+
						"align='center' >每名教师平均指导毕业生数</td>"+
	    "</tr>"
		//$("#tb_thead").append(htmls);
}
	$("#tb_thead").html("<tr style='background-color:#58b957;color:#FFF;font-weight:bold;font-size:12px;' ><td style='padding:0 10px;height:30px;border:#D1D1D1 1px solid;'  align='center'>正在查询请稍候...</td></tr>");
	$.ajax({
		url: aurl,
		type:'POST',
		async:false,
		dataType:'json',
		data:{"syear":syear,"depart":depart,"bname":bname},
		success:function(data){
			var htmlss = "";
			var datas = eval("("+data+")");
			$("#tb_thead").html("");
			$("#tb_thead").append(htmls);
			if(datas!=null&&datas.length>0){
				for ( var i = 0; i < datas.length; i++) {
					htmlss+="<tr>";
						for ( var j = 0; j < $("#tb_thead tr td").length; j++) {
							$.each(datas[i],function(index,value){
								//console.info(index+"--"+$("#tb_thead tr td:eq("+j+")").html())
								if(index.trim()==$("#tb_thead tr td:eq("+j+")").html().trim()){
									value=value==null?"":value;
								/*	if(!isNaN(value)){
										value=value.toFixed(2);
									}*/
									htmlss+="<td  style='padding:0 20px;width:400px;height:30px;border:#D1D1D1 1px solid;'"
									+	"align='center' colspan='1'>"+value+"</td>";
								}
							})
						}
					htmlss+="</tr>";
				}
				$("#tb_tbody2").html(htmlss);
			}else{
				$("#tb_tbody2").html("");
				$("#remark_tab").html("查询没有结果");
			}
			
		},error:function(){
			$("#remark_tab").html("查询没有结果");
		}
	});
}