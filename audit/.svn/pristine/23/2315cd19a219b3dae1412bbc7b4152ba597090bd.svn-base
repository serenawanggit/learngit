var request =GetRequest();
var pgType=request.zylxId;

var sysids = [];

var zpr;
var shr;
var wpr = [];
var kcr = [];
var kczz = [];

var zprid;
var shrid;
var wprid = [];
var kcrid = [];
var kczzid = [];

var shArray = [];
var wpArray = [];
var kcArray = [];
var kczzArray = [];

var contextFile = [];

var tsys;

var zbtx_str;

$(function(){
	getCollegerOrCourse();
	
	//专业下拉框的查询
	$.ajax({
		url:"/audit/assessmentTeach/findAllSpecialtyInfoList.do",
		type:'POST',
		async:false,
		data:{"pgType":pgType},
		success:function(data){
			var datas = eval("("+data+")");
			var str = "";
			$.each(datas,function(i,dom){
				str += "<option value='"+dom.ID+"'>"+dom.SPECIALTY_NAME+"</option>";
			});
			$("#parentType").html(str);
		}
	});
	
	//查询评估人员和评估类别
	getSpecialtyId($("#parentType").val());
	
	//合并内容相同的单元格
	_w_table_rowspan("#tab1",1);
	_w_table_rowspan("#tab1",2);
	
//	getSuggestion();
	
	//下拉框的点击事件
	$("#parentType").change(function(){
		getSpecialtyId($(this).val());
		//合并内容相同的单元格
		_w_table_rowspan("#tab1",1);
		_w_table_rowspan("#tab1",2);
		getSuggestion();
	})
	
	$("#txt2").change(function(){
		$("#fixedLayer").show();
		if($("#pgry").val()=="考察专家"){
			findKCRInfo(sysids);
		}else if($("#pgry").val()=="网评人"){
			findWPRInfo(sysids);
		}else if($("#pgry").val()=="审核人"){
			findSHRInfo(sysids);
		}else if($("#pgry").val()=="考察组长"){
			findKCZZInfo(sysids);
		}else if($("#pgry").val()=="自评人"){
			findZPRInfo(sysids);
		}
		changeTr();
		$("#fixedLayer").hide();
	})
	
	$("#pgry").change(function(){
		$("#fixedLayer").show();
		if($("#pgry").val()=="考察专家"){
			findKCRInfo(sysids);
		}else if($("#pgry").val()=="网评人"){
			findWPRInfo(sysids);
		}else if($("#pgry").val()=="审核人"){
			findSHRInfo(sysids);
		}else if($("#pgry").val()=="考察组长"){
			findKCZZInfo(sysids);
		}else if($("#pgry").val()=="自评人"){
			findZPRInfo(sysids);
		}
		changeTr();
		$("#fixedLayer").hide();
	})
})

	function getCollegerOrCourse(){
		$.ajax({
			url:"/audit/asAssessReport/getAssessmentTypeById.do",
			type:'POST',
			async:false,
			data:{
				"id":pgType
			},
			success:function(data){
				var datas = eval("("+data+")");
				if(datas.trim()=="学院评估"){
					$("#fName").html("学院：");
					$("#zbtx").html("学院");
					zbtx_str = "学院";
				}else if(datas.trim()=="课程评估"){
					$("#fName").html("课程：");
					$("#zbtx").html("课程");
					zbtx_str = "课程";
				}else{
					$("#fName").html("专业：");
					$("#zbtx").html("专业");
					zbtx_str = "专业";
				}
			}
		})
	}

function getThreeSystemLevel(stype){
	//查询是否有三级指标
	$.ajax({
		url:"/audit/assessmentTeach/findThreeSystemByStype.do",
		type:'POST',
		async:false,
		data:{"pgType":stype},
		success:function(data){
			tsys = data;//1表示有三级指标，0表示没有
		}
	});
	
	$.ajax({
		url: "/audit/assessmentTeach/findSystemInfoAndReportByStype.do",
		type:'POST',
		async:false,
		data:{
			"pgType":stype,
			"tsys":tsys,
			"syear":$("#txt2").val(),
			"specialtyId":$("#parentType").val(),
			"userId":zprid
		},
		dataType:'json',
		success:function(data){
			sysids = [];
			var str = "";
			var headStr;
			var datas = data;
			if(zpr==undefined || zpr==null || zpr=="") zpr="暂无";
			if(tsys==1){
				
				headStr = "<tr style='background-color:#E6E6E6;height:80px;text-align:center;'><th colspan='3' width='100%'>" + zbtx_str + "评估指标体系</th><tr>";
				headStr += "<tr style='background-color:#E6E6E6;height:40px;' id='tr_tab1_1'>" +
						"<td width='290px'>一级指标</td>" +
						"<td width='290px'>二级指标</td>" +
						"<td width='290px'>三级指标</td>" +
						"</tr>";
				$.each(data,function(i,dom){
					
					var gname = "";var pname = "";var sysName = "";
//					
					if(dom.sysid!=null && dom.sysid != undefined && dom.sysid!=""){ systemId=dom.sysid; }
					else{ systemId=dom.pid; }
					sysids.push(systemId);
					if(dom.gname != null && dom.gname != undefined){ gname=dom.gname; }
					if(dom.pname != null && dom.pname != undefined){ pname=dom.pname; }
					if(dom.SYSTEM_NAME != null && dom.SYSTEM_NAME != undefined){ sysName=dom.SYSTEM_NAME; }
					
					str += "<tr id='tab1_tr"+i+"'>" +
							"<td style='font-weight:normal;'><div style='padding:10px;word-wrap: break-word'>"+gname+"</div></td>" +
							"<td style='font-weight:normal;'><div style='padding:10px;word-wrap: break-word'>"+pname+"</div></td>" +
							"<td style='font-weight:normal;'><div style='padding:10px;'>"+sysName+"</div></td>" +
							"</tr>";
				})
			}else if(tsys==0){
//				$("#table1_tr1").attr("colspan","7");
				
				headStr = "<tr style='background-color:#E6E6E6;height:80px;text-align:center;'><th colspan='2' width='100%'>" + zbtx_str + "评估指标体系</th></tr>" +
						"<tr style='background-color:#E6E6E6;height:40px;' id='tr_tab1_1'>" +
						"<td width='450px'>一级指标</td>" +
						"<td width='450px'>二级指标</td>" +
						"</tr>";
				$.each(data,function(i,dom){
					var gname = "";var pname = "";var sysName = "";
					
					if(dom.pid!=null && dom.pid != undefined && dom.pid != ""){ systemId = dom.pid; }
					else{ systemId = dom.gid; }
					sysids.push(systemId);
					if(dom.gname != null && dom.gname != undefined){ gname=dom.gname; }
					if(dom.pname != null && dom.pname != undefined){ pname=dom.pname }
					
					str += "<tr id='tab1_tr"+i+"'><td style='font-weight:normal;'><div style='padding:10px;word-wrap: break-word'>"+gname+"</div></td>" +
							"<td style='font-weight:normal;'><div style='padding:10px;word-wrap: break-word'>"+pname+"</div></td></tr>";
				})
			}
			$("#tab1 thead").html(headStr);
			$("#tab1 tbody").html(str);
		}
	});
	
	if($("#pgry").val()=="审核人"){
		findSHRInfo(sysids);
	}
	
	if($("#pgry").val()=="考察专家"){
		findKCRInfo(sysids);
	}else if($("#pgry").val()=="网评人"){
		findWPRInfo(sysids);
	}else if($("#pgry").val()=="审核人"){
		findSHRInfo(sysids);
	}else if($("#pgry").val()=="考察组长"){
		findKCZZInfo(sysids);
	}else if($("#pgry").val()=="自评人"){
		findZPRInfo(sysids);
	}
	changeTr();
}



function getSpecialtyId(id){
	//根据专业类型查询对应的评估人员
	$.ajax({
		url:"/audit/assessmentTeach/findSpecialtyInfoBySpecialtyId.do",
		type:'POST',
		async:false,
		data:{"id":id},
		success:function(data){
			var datas = eval("("+data+")");
			wpr = [];
			kcr = [];
			kczz = [];
			
			wprid = [];
			kcrid = [];
			kczzid = [];
			$.each(datas,function(i,dom){
				if(dom.ASSESS_TYPE==1){
					zprid = dom.UID;
					zpr = dom.showname;
					$("#zpr").html(zpr);
				}else if(dom.ASSESS_TYPE==2){
					shrid = dom.UID;
					if(dom.showname!="" && dom.showname!=undefined && dom.showname!=null) shr = dom.showname;
				}else if(dom.ASSESS_TYPE==3){
					wprid.push(dom.UID);
					if(dom.showname!="" && dom.showname!=undefined && dom.showname!=null) wpr.push(dom.showname);
				}else if(dom.ASSESS_TYPE==4){
					kcrid.push(dom.UID);
//					alert(dom.showname);
					if(dom.showname!="" && dom.showname!=undefined && dom.showname!=null) kcr.push(dom.showname);
				}else if(dom.ASSESS_TYPE==5){
					kczzid.push(dom.UID);
					if(dom.showname!="" && dom.showname!=undefined && dom.showname!=null) kczz.push(dom.showname);
				}
			})
		}
	});
	
	//根据专业id查询评估类别
	var IS_ENGINEERING = 0;
	$.ajax({
		url:"/audit/assessmentTeach/getSpecialtyById.do",
		type:'POST',
		async:false,
		data:{"id":id},
		success:function(data){
			var datas = eval("("+data+")");
			$.each(datas,function(i,dom){
				IS_ENGINEERING = dom.IS_ENGINEERING;
			})
		}
	});
	getThreeSystemLevel(IS_ENGINEERING);
}

//id是对应的评估类别
function getSytemInfo(id){
	sysids = [];
}


//自评人的评估内容
function findZPRInfo(sids){
//	var levelA = "";var levelC = "";var systemId = 0;
//	var ratio = "";var meaning = "";var _syscore = "";
	var grade = "";var score = "";var problem = "";
//	$("#sh_tab3").width(307*2);
	if(zpr==undefined || zpr==null || zpr=="") {zpr="暂无";}
	var sh_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='7'>自评人</th></tr>" +
	"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='7' style='color:#000;'>"+zpr+"</th></tr>" +
	"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'>" +
	"<th width='100px' style='color:#000;'>等级</th>" +
	"<th width='100px' style='color:#000;'>自评分</th>" +
	"<th width='100px' style='color:#000;'>支撑材料</th>" +
	"<th width='100px' style='color:#000;'>专业数据表</th>" +
	"<th width='100px' style='color:#000;'>校级数据表</th>" +
	"<th width='100px' style='color:#000;'>自评报告内容</th>" +
	"<th width='270px' style='color:#000;'>存在的问题和不足</th>" +
	"</tr>";
	
	if(zpr!=undefined && zpr!=null && zpr!="" && zpr!="暂无"){
		$.each(sids,function(i,dom){
			$.ajax({
				url: "/audit/assessmentTeach/findZPRInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysId':dom,
					'syear':$("#txt2").val(),
					'specialty':$("#parentType").val(),
					'userId':zprid
				},
				success : function(oData) {
					if(oData!=null && oData!=""){
						var datas = eval("("+oData+")");
						if(datas.grade != null && datas.grade != undefined){
							grade=datas.grade;
						}
						if(datas.score != null && datas.score != undefined){ score=datas.score+"分"; }
						if(datas.problem != null && datas.problem != undefined){ problem=datas.problem; }
						
						var context_self = "暂无内容";
						if(datas.UPLOAD_FILES!=null && datas.UPLOAD_FILES!=undefined && datas.UPLOAD_FILES!=""  
							&& datas.FILE_ONLINE_URL!=null && datas.FILE_ONLINE_URL!=undefined && datas.FILE_ONLINE_URL!=""){
							var urls = datas.FILE_ONLINE_URL.split("\\");
							var url = urls[urls.length-1];
							context_self = "<a href='javascript:;' onclick=\"getContentFile('"+url+"');\">"+datas.UPLOAD_FILES+"</a>";
						}else if(datas.ENTER_CONTENT!=null && datas.ENTER_CONTENT!=undefined && datas.ENTER_CONTENT!=""){
							contextFile.push(datas.ENTER_CONTENT);
							context_self = "<a href='javascript:;' onclick=\"getContent("+i+");\">查看内容</a>";
						}
						
						var imgAaaa = "没有数据";
						var imgLookData = "没有数据";
						var imgSchool = "没有数据";
						$.ajax({
							url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataCailiao.do",
							type:'POST',
							async:false,
							data:{
								'id':systemId,
								'dateYear':$("#txt2").val(),
								'specialtyId':$("#parentType").val()
							},
							success : function(oData) {
								var datas=eval(oData);
								if(datas!=null && datas.length>0) imgAaaa = "<a href='javascript:;' onclick='aaaa("+systemId+")'><img src='/audit/page/guanliyuan/staticPage/img/look.png'></a>";
							}
						});
						//提交数据表信息
						$.ajax({
							url: "/audit/asAssessReport/findTemplateAndTaskInfo.do",
							type:'POST',
							async:false,
							data:{
								"id":systemId,
								"dateYear":$("#txt2").val(),
								"type":1
							},
							dataType:'json',
							success:function(data){
								var datas=eval(data);
								if(datas!=null && datas.length>0) imgLookData = "<a href='javascript:;' onclick='lookData("+systemId+")'><img src='/audit/page/guanliyuan/staticPage/img/look.png'></a>";
							}
						});
						//提交数据表信息
						$.ajax({
							url: "/audit/asAssessReport/findTemplateAndTaskInfo.do",
							type:'POST',
							async:false,
							data:{
								"id":systemId,
								"dateYear":$("#txt2").val(),
								"type":2
							},
							dataType:'json',
							success:function(data){
								var datas=eval(data);
								if(datas!=null && datas.length>0) imgSchool = "<a href='javascript:;' onclick='schoolData("+systemId+")'><img src='/audit/page/guanliyuan/staticPage/img/look.png'></a>";
							}
						});
						sh_str += "<tr  id='tab3_tr"+i+"'><td>"+grade+"</td>" +
								  "<td>"+score+"</td>" +
								  "<td style='font-weight:normal;'>"+imgAaaa+"</td>" +
								  "<td style='font-weight:normal;'>"+imgLookData+"</td>" +
								  "<td style='font-weight:normal;'>"+imgSchool+"</td>" +
								  "<td style='font-weight:normal;'>" + context_self + "</td>" +
								  "<td><div style='padding:5px;text-align:left;'>"+problem+"</div></td></tr>";
					}else{
						sh_str += "<tr  id='tab3_tr"+i+"'><td></td>" +
						  "<td>"+0+"</td>" +
						  "<td style='font-weight:normal;'>暂无数据</td>" +
						  "<td style='font-weight:normal;'>暂无数据</td>" +
						  "<td style='font-weight:normal;'>暂无数据</td>" +
						  "<td style='font-weight:normal;'>暂无数据</td>" +
						  "<td><div style='padding:5px;text-align:left;'>暂无数据</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}else{
		$.each(sids,function(i,dom){
			sh_str += "<tr  id='tab3_tr"+i+"'><td></td>" +
			  "<td>"+0+"</td>" +
			  "<td style='font-weight:normal;'>没有数据</td>" +
			  "<td style='font-weight:normal;'>没有数据</td>" +
			  "<td style='font-weight:normal;'>没有数据</td>" +
			  "<td style='font-weight:normal;'>没有数据</td>" +
			  "<td><div style='padding:5px;text-align:left;'>没有数据</div></td></tr>";
		});
	}
	$("#sh_tab3").html(sh_str);
}

//审核人的评估内容
function findSHRInfo(sids){
//	$("#sh_tab3").width(307*2);
	if(shr==undefined || shr==null || shr=="") {shr="暂无";}
	var sh_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='4'>审核人</th></tr>" +
	"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='4' style='color:#000;'>"+shr+"</th></tr>" +
	"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='100px' style='color:#000;'>等级</th>" +
	"<th width='130px' style='color:#000;'>系统分</th>" +
	"<th width='144px' style='color:#000;'>专家打分</th>" +
	"<th width='270px' style='color:#000;'>意见</th></tr>";

	if(shr!=undefined && shr!=null && shr!="" && shr!="暂无"){
		$.each(sids,function(i,dom){
			var aaaa = "#score_td"+i;
			var aaa = $(aaaa).text().split("分")[0];
			if(aaa=="" || aaa==null || aaa==undefined) aaa=0;
			
			var bbbb = "#grade_td"+i;
			var bbb = $(bbbb).text();
			
			var aa = 1;
			if(bbb=="b" || bbb=="B") aa = 0.8;
			if(bbb=="c" || bbb=="C") aa = 0.6;
			if(bbb=="d" || bbb=="D") aa = 0.4;
			$.ajax({
				url: "/audit/assessmentTeach/getSHReportBySysid.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'ryear':$("#txt2").val(),
					'specialtyId':$("#parentType").val(),
					'shrid':shrid
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){
							sh_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.SHgrade+"</td><td>"+parseInt(aaa)*parseInt(aa)+"</td><td>"+obj.SHscore+"</td><td><div style='padding:5px;text-align:left;'>"+obj.BLACKCONTENT+"</div></td></tr>";
						})
					}else{
						sh_str += "<tr id='tab3_tr"+i+"'><td></td><td>"+parseInt(aaa)*parseInt(aa)+"</td><td></td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}else{
		$.each(sids,function(i,dom){
			var aaaa = "#score_td"+i;
			var aaa = $(aaaa).text().split("分")[0];
			if(aaa=="" || aaa==null || aaa==undefined) aaa=0;
			
			var bbbb = "#grade_td"+i;
			var bbb = $(bbbb).text();
			
			var aa = 1;
			if(bbb=="b" || bbb=="B") aa = 0.8;
			if(bbb=="c" || bbb=="C") aa = 0.6;
			if(bbb=="d" || bbb=="D") aa = 0.4;
			sh_str += "<tr id='tab3_tr"+i+"'><td></td><td>"+parseInt(aaa)*parseInt(aa)+"</td><td></td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
		});
	}
	$("#sh_tab3").html(sh_str);
}

//网评人的评估内容
function findWPRInfo(sids){
	var wp_str = "";
	if(wpr.length==0){
		wp_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='4'>网评人</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='4' style='color:#000;'>暂无</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='100px' style='color:#000;'>等级</th>" +
		"<th width='130px' style='color:#000;'>系统分</th><th width='144px' style='color:#000;'>专家打分</th>" +
		"<th width='270px' style='color:#000;'>意见</th></tr>";
	
		$.each(sids,function(i,dom){
			wp_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td></td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
		});
	}else if(wpr.length==1){
//		$("#sh_tab3").width(307*2);
		wp_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='4'>网评人</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='4' style='color:#000;'>"+wpr[0]+"</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='100px' style='color:#000;'>等级</th>" +
		"<th width='130px' style='color:#000;'>系统分</th><th width='144px' style='color:#000;'>专家打分</th>" +
		"<th width='270px' style='color:#000;'>意见</th></tr>";

		$.each(sids,function(i,dom){
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'wprid':wprid[0]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){
							wp_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.grade+"</td><td>无</td><td>"+obj.syscore+"</td><td><div style='padding:5px;text-align:left;'>"+obj.COMMENT_CONTENT+"</div></td></tr>";
						})
					}else{
						wp_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td></td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}else if(wpr.length==2){
//		$("#sh_tab3").width(307*2);
		wp_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='8'>网评人</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='4' style='color:#000;'>"+wpr[0]+"</th><th colspan='4' style='color:#000;'>"+wpr[1]+"</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='50px' style='color:#000;'>等级</th><th width='50px' style='color:#000;'>系<br>统<br>分</th>" +
		"<th width='72px' style='color:#000;'>专家打分</th><th width='135px' style='color:#000;'>意见</th>" +
		"<th width='80px' style='color:#000;'>等级</th><th width='50px' style='color:#000;'>系统分</th>" +
		"<th width='72px' style='color:#000;'>专家打分</th>" +
		"<th width='135px' style='color:#000;'>意见</th></tr>";
		
		$.each(sids,function(i,dom){
			var rectification_1 = [];
			//第一个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'wprid':wprid[0]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					rectification_1 = datas;
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
			//第二个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'wprid':wprid[1]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(rectification_1!=null && rectification_1!="" && rectification_1!=undefined){
						$.each(rectification_1,function(index,obj){
							wp_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.grade+"</td><td>无</td><td>"+obj.syscore+"</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.COMMENT_CONTENT+"</div></td>";
						})
					}else{
						wp_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td></td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td>";
					}
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){
							wp_str += "<td>"+obj.grade+"</td><td>无</td><td>"+obj.syscore+"</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.COMMENT_CONTENT+"</div></td></tr>";
						})
					}else{
						wp_str += "<td></td><td>无</td><td></td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}else if(wpr.length==3){
//		$("#sh_tab3").width(307*3);
		wp_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='12'>网评人</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='4' style='color:#000;'>"+wpr[0]+"</th><th colspan='4' style='color:#000;'>"+wpr[1]+"</th><th colspan='4' style='color:#000;'>"+wpr[2]+"</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='50px' style='color:#000;'>等级</th><th width='50px' style='color:#000;'>系<br>统<br>分</th>" +
		"<th width='72px'>专家打分</th><th width='135px' style='color:#000;'>意见</th>" +
		"<th width='50px' style='color:#000;'>等级</th><th width='50px' style='color:#000;'>系统分</th><th width='72px' style='color:#000;'>专家打分</th><th width='135px' style='color:#000;'>意见</th>" +
		"<th width='50px' style='color:#000;'>等级</th><th width='50px' style='color:#000;'>系统分</th><th width='72px' style='color:#000;'>专家打分</th><th width='135px' style='color:#000;'>意见</th></tr>";
		
		$.each(sids,function(i,dom){
			var rectification_1 = [];
			var rectification_2 = [];
			//第一个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'wprid':wprid[0]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					rectification_1 = datas;
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
			//第er个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'wprid':wprid[1]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					rectification_2 = datas;
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
			//第三个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'wprid':wprid[2]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(rectification_1!=null && rectification_1!="" && rectification_1!=undefined){
						$.each(rectification_1,function(index,obj){
							wp_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.grade+"</td><td>无</td><td>"+obj.syscore+"</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.COMMENT_CONTENT+"</div></td>";
						})
					}else{
						wp_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td></td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td>";
					}
					if(rectification_2!=null && rectification_2!="" && rectification_2!=undefined){
						$.each(rectification_2,function(index,obj){
							wp_str += "<td>"+obj.grade+"</td><td>无</td><td>"+obj.syscore+"</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.COMMENT_CONTENT+"</div></td>";
						})
					}else{
						wp_str += "<td></td><td>无</td><td></td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td>";
					}
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){
							wp_str += "<td>"+obj.grade+"</td><td>无</td><td>"+obj.syscore+"</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.COMMENT_CONTENT+"</div></td></tr>";
						})
					}else{
						wp_str += "<td></td><td>无</td><td></td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}
	$("#sh_tab3").html(wp_str);
}

//考察人的评估内容
function findKCRInfo(sids){
	var kc_str = "";
	if(kcr.length==0){
		kc_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='3'>考察专家</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='3' style='color:#000;'>暂无</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th style='color:#000;' width='148px'>等级</th><th style='color:#000;' width='148px'>系统分</th><th width='318px' style='color:#000;'>意见</th></tr>";
		
		$.each(sids,function(i,dom){
			kc_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
		});
	}else if(kcr.length==1){
//		$("#sh_tab3").width(307*2);
		kc_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='3'>考察专家</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='3' style='color:#000;'>"+kcr[0]+"</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='148px' style='color:#000;'>等级</th><th width='148px' style='color:#000;'>系统分</th><th width='318px' style='color:#000;'>意见</th></tr>";
//		<th width='144px'>专家打分</th>  48
		
		$.each(sids,function(i,dom){
			$.ajax({
				url: "/audit/assessmentTeach/findKCRecordInfoBySysid.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kcrid[0]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){//<td>"+obj.syscore+"</td>
							kc_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.ranks+"</td><td>无</td><td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td></tr>";
						})
					}else{//<td></td>
						kc_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}else if(kcr.length==2){
//		$("#sh_tab3").width(307*2);
		kc_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='6'>考察专家</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='3' style='color:#000;'>"+kcr[0]+"</th><th colspan='3'>"+kcr[1]+"</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='74px' style='color:#000;'>等级</th><th width='74px' style='color:#000;'>系统分</th><th width='159px' style='color:#000;'>意见</th><th width='74px'>等级</th>" +
		"<th width='74px' style='color:#000;'>系统分</th><th width='159px' style='color:#000;'>意见</th></tr>";
		
		$.each(sids,function(i,dom){
			var rectification_1 = [];
			//第一个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kcrid[0]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					rectification_1 = datas;
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
			//第二个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kcrid[1]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(rectification_1!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){//<td>"+obj.syscore+"</td>
							kc_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td>";
						})
					}else{//<td></td>
						kc_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td>";
					}
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){//<td>"+obj.syscore+"</td>
							kc_str += "<td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td></tr>";
						})
					}else{//<td></td>
						kc_str += "<td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}else if(kcr.length==3){
//		$("#sh_tab3").width(307*3);
		kc_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='9'>考察专家</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='3' style='color:#000;'>"+kcr[0]+"</th><th colspan='3'>"+kcr[1]+"</th><th colspan='3'>"+kcr[2]+"</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='74px' style='color:#000;'>等级</th><th width='74px' style='color:#000;'>系统分</th><th width='159px' style='color:#000;'>意见</th>" +
		"<th width='74px' style='color:#000;'>等级</th><th width='74px' style='color:#000;'>系统分</th><th width='159px' style='color:#000;'>意见</th>" +
		"<th width='74px' style='color:#000;'>等级</th><th width='74px' style='color:#000;'>系统分</th><th width='159px' style='color:#000;'>意见</th></tr>";
		//<td width='72px'>专家打分</td>
		
		$.each(sids,function(i,dom){
			var rectification_1 = [];
			var rectification_2 = [];
			//第一个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kcrid[0]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					rectification_1 = datas;
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
			//第er个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kcrid[1]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					rectification_2 = datas;
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
			//第三个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kcrid[2]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(rectification_1!=null && rectification_1!="" && rectification_1!=undefined){
						$.each(rectification_1,function(index,obj){//<td>"+obj.syscore+"</td>
							kc_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td>";
						})
					}else{//<td></td>
						kc_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td>";
					}
					if(rectification_2!=null && rectification_2!="" && rectification_2!=undefined){
						$.each(rectification_2,function(index,obj){//<td>"+obj.syscore+"</td>
							kc_str += "<td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td>";
						})
					}else{//<td></td>
						kc_str += "<td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td>";
					}
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){//<td>"+obj.syscore+"</td>
							kc_str += "<td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td></tr>";
						})
					}else{//<td></td>
						kc_str += "<td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}
	$("#sh_tab3").html(kc_str);
}

//考察组长的评估内容
function findKCZZInfo(sids){
	var kczz_str = "";
	if(kczz.length==0){
		kczz_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='3'>考察组长</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='3' style='color:#000;'>暂无</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='148px' style='color:#000;'>等级</th><th width='148px' style='color:#000;'>系统分</th><th width='318px' style='color:#000;'>意见</th></tr>";
		
		$.each(sids,function(i,dom){
			kczz_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
		});
	}else if(kczz.length==1){
//		$("#sh_tab3").width(307*2);
		kczz_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='3'>考察专家</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='3' style='color:#000;'>"+kczz[0]+"</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='148px' style='color:#000;'>等级</th><th width='148px' style='color:#000;'>系统分</th><th width='318px' style='color:#000;'>意见</th></tr>";
//		<td width='144px'>专家打分</td>  48
		
		$.each(sids,function(i,dom){
			$.ajax({
				url: "/audit/assessmentTeach/findKCRecordInfoBySysid.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
//					'specialtyId':$("#parentType").val(),
					'kcrid':kczzid[0]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){//<td>"+obj.syscore+"</td>
							kczz_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.ranks+"</td><td>无</td><td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td></tr>";
						})
					}else{//<td></td>
						kczz_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}else if(kczz.length==2){
//		$("#sh_tab3").width(307*2);
		kczz_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='6'>考察专家</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='3' style='color:#000;'>"+kczz[0]+"</th><th colspan='3' style='color:#000;'>"+kcr[1]+"</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='74px' style='color:#000;'>等级</th><th width='74px' style='color:#000;'>系统分</th><th width='159px' style='color:#000;'>意见</th>" +
		"<th width='74px' style='color:#000;'>等级</th><th width='74px' style='color:#000;'>系统分</th><th width='159px' style='color:#000;'>意见</th></tr>";
//		<td width='72px'>专家打分</td>  24
		
		$.each(sids,function(i,dom){
			var rectification_1 = [];
			//第一个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kczzid[0]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					rectification_1 = datas;
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
			//第二个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kczzid[1]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(rectification_1!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){//<td>"+obj.syscore+"</td>
							kczz_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td>";
						})
					}else{//<td></td>
						kczz_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td>";
					}
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){//<td>"+obj.syscore+"</td>
							kczz_str += "<td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td></tr>";
						})
					}else{//<td></td>
						kczz_str += "<td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}else if(kczz.length==3){
//		$("#sh_tab3").width(307*3);
		kczz_str = "<tr id='tab3_tr' style='background-color:#E6E6E6;height:40px;'><th colspan='9'>考察专家</th></tr>" +
		"<tr style='background-color:#E6E6E6;height:40px;'><th colspan='3' style='color:#000;'>"+kczz[0]+"</th><th colspan='3' style='color:#000;'>"+kczz[1]+"</th><th colspan='3' style='color:#000;'>"+kczz[2]+"</th></tr>" +
		"<tr style='background-color:#E6E6E6' height='40px' id='tr_tab3_1'><th width='74px' style='color:#000;'>等级</th><th width='74px' style='color:#000;'>系统分</th><th width='159px' style='color:#000;'>意见</td>" +
		"<th width='74px' style='color:#000;'>等级</th><th width='74px' style='color:#000;'>系统分</th><th width='159px' style='color:#000;'>意见</th>" +
		"<th width='74px' style='color:#000;'>等级</th><th width='74px' style='color:#000;'>系统<br>分</th><th width='159px' style='color:#000;'>意见</th></tr>";
		//<th width='72px'>专家打分</td>
		
		$.each(sids,function(i,dom){
			var rectification_1 = [];
			var rectification_2 = [];
			//第一个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kczzid[0]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					rectification_1 = datas;
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
			//第er个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kczzid[1]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					rectification_2 = datas;
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
			//第三个人
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
					'kcrid':kczzid[2]
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					if(rectification_1!=null && rectification_1!="" && rectification_1!=undefined){
						$.each(rectification_1,function(index,obj){//<td>"+obj.syscore+"</td>
							kczz_str += "<tr  id='tab3_tr"+i+"'><td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td>";
						})
					}else{//<td></td>
						kczz_str += "<tr id='tab3_tr"+i+"'><td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td>";
					}
					if(rectification_2!=null && rectification_2!="" && rectification_2!=undefined){
						$.each(rectification_2,function(index,obj){//<td>"+obj.syscore+"</td>
							kczz_str += "<td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td>";
						})
					}else{//<td></td>
						kczz_str += "<td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td>";
					}
					if(datas!=null && datas!="" && datas!=undefined){
						$.each(datas,function(index,obj){//<td>"+obj.syscore+"</td>
							kczz_str += "<td>"+obj.ranks+"</td><td>无</td>" +
									"<td><div style='padding:5px;text-align:left;'>"+obj.kc_content+"</div></td></tr>";
						})
					}else{//<td></td>
						kczz_str += "<td></td><td>无</td><td><div style='padding:5px;text-align:left;'>暂无意见</div></td></tr>";
					}
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	}
	$("#sh_tab3").html(kczz_str);
}

function getSuggestion(){
	var sum_shscore = 0;
	var str = "<tr style='background-color:#E6E6E6;height:40px;width:100%;font-weight:bold;'><td colspan='5' width='100%'>总意见</td></tr>";
	
	//获取审核人的总分数
	$.each(sysids,function(i,dom){
		$.ajax({
			url: "/audit/assessmentTeach/getSHReportBySysid.do",
			type:'POST',
			async:false,
			data:{
				'sysid':dom,
				'ryear':$("#txt2").val(),
				'specialtyId':$("#parentType").val(),
				'shrid':shrid
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					sum_shscore += parseInt(obj.SHscore);
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	});
	//获取审核人的总意见
	$.ajax({
		url: "/audit/assessmentTeach/getAllreportToSHR.do",
		type:'POST',
		async:false,
		data:{
			'shrid':shrid,
			'syear':$("#txt2").val(),
			'specialtyId':$("#parentType").val()
		},
		success : function(oData) {
			var datas = eval("("+oData+")");
			if(datas!=null && datas!=undefined && datas!=""){
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'><td width='15%'>审核人</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+shr+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_shscore)+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_shscore+"分</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;'><div style='padding:15px;text-align:left;'>"+obj.BLACKCONTENT+"</tr>"
				})
			}else{
				str += "<tr width='100%' height='100px' id='tr1'><td width='15%'>审核人</td>" +
				"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
				"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+shr+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_shscore)+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_shscore+"分</font> </td>" +
				"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
				"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;'><div style='padding:15px;text-align:left;'>暂无</tr>";
			}
		},
		error : function(oData) {
			alert("数据加载失败");
		}
	});
	
	var sum_wpScore = [];
	//获取网评人的总分数
	$.each(wprid,function(wi,wdom){
		var a = 0;
		$.each(sysids,function(i,dom){
			$.ajax({
				url: "/audit/assessmentTeach/getWPRectificationInfo.do",
				type:'POST',
				async:false,
				data:{
					'sysid':dom,
					'syear':$("#txt2").val(),
//					'specialtyId':$("#parentType").val(),
					'wprid':wdom
				},
				success : function(oData) {
					var datas = eval("("+oData+")");
					$.each(datas,function(index,obj){
						a += parseInt(obj.grade);
					})
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
		sum_wpScore.push(a);
	})
	//获取网评人的总意见
	if(wprid.length==1){
		$.ajax({
			url: "/audit/assessmentTeach/getWPRectificationToSuggestion.do",
			type:'POST',
			async:false,
			data:{
				'wprid':wprid[0],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				if(datas!=null && datas!="" && datas!=undefined){
					$.each(datas,function(index,obj){
						str += "<tr width='100%' height='100px' id='tr1'><td width='15%'>网评人</td>" +
						"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
						"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_wpScore[0])+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[0]+"分</font> </td>" +
						"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
						"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;'><div style='padding:15px;text-align:left;'>"+obj.COMMENT_SUGGESTIONS+"</tr>"
					})
				}else{
					str += "<tr width='100%' height='100px' id='tr1'><td width='15%'>网评人</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_wpScore[0])+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[0]+"分</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;'><div style='padding:15px;text-align:left;'>暂无</tr>"
				}
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	}else if(wprid.length==2){
		$.ajax({
			url: "/audit/assessmentTeach/getWPRectificationToSuggestion.do",
			type:'POST',
			async:false,
			data:{
				'wprid':wprid[0],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				if(datas!=null && datas!="" && datas!=undefined){
					$.each(datas,function(index,obj){
						str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>网评人</td>" +
						"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-bottom:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
						"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_wpScore[0])+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[0]+"分</font> </td>" +
						"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
						"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-BOTTOM:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.COMMENT_SUGGESTIONS+"</tr>"
					})
				}else{
					str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>网评人</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-bottom:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_wpScore[0])+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[0]+"分</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-BOTTOM:#fff 0px solid;'><div style='padding:15px;text-align:left;'>暂无</tr>"
				}
				
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		$.ajax({
			url: "/audit/assessmentTeach/getWPRectificationToSuggestion.do",
			type:'POST',
			async:false,
			data:{
				'wprid':wprid[1],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				if(datas!=null && datas!="" && datas!=undefined){
					$.each(datas,function(index,obj){
						str += "<tr width='100%' height='100px' id='tr1'>" +
						"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
						"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[1]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_wpScore[1])+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[1]+"分</font> </td>" +
						"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
						"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.COMMENT_SUGGESTIONS+"</tr>"
					})
				}else{
					str += "<tr width='100%' height='100px' id='tr1'>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[1]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_wpScore[1])+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[1]+"分</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>暂无</tr>"
				}
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	}else if(wpr.length==3){
		$.ajax({
			url: "/audit/assessmentTeach/getWPRectificationToSuggestion.do",
			type:'POST',
			async:false,
			data:{
				'wprid':wprid[0],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				if(datas!=null && datas!="" && datas!=undefined){
					$.each(datas,function(index,obj){
						str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>网评人</td>" +
						"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-bottom:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
						"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(parseInt(sum_wpScore[0]))+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[0]+"分</font> </td>" +
						"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
						"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-BOTTOM:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.COMMENT_SUGGESTIONS+"</tr>"
					})
				}else{
					str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>网评人</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-bottom:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(parseInt(sum_wpScore[0]))+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[0]+"分</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-BOTTOM:#fff 0px solid;'><div style='padding:15px;text-align:left;'>暂无</tr>"
				}
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		
		$.ajax({
			url: "/audit/assessmentTeach/getWPRectificationToSuggestion.do",
			type:'POST',
			async:false,
			data:{
				'wprid':wprid[1],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				if(datas!=null && datas!="" && datas!=undefined){
					$.each(datas,function(index,obj){
						str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>网评人</td>" +
						"<td width='7%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
						"<td width='7%' style='BORDER-BOTTOM:#fff 0px solid;text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[1]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(parseInt(sum_wpScore[1]))+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[1]+"分</font> </td>" +
						"<td width='1%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
						"<td width='70%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.COMMENT_SUGGESTIONS+"</tr>"
					})
				}else{
					str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>网评人</td>" +
					"<td width='7%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='BORDER-BOTTOM:#fff 0px solid;text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[1]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(parseInt(sum_wpScore[1]))+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[1]+"分</font> </td>" +
					"<td width='1%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>暂无</tr>"
				}
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		$.ajax({
			url: "/audit/assessmentTeach/getWPRectificationToSuggestion.do",
			type:'POST',
			async:false,
			data:{
				'wprid':wprid[2],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				if(datas!=null && datas!="" && datas!=undefined){
					$.each(datas,function(index,obj){
						str += "<tr width='100%' height='100px' id='tr1'>" +
						"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
						"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[2]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_wpScore[2])+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[2]+"分</font> </td>" +
						"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
						"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.COMMENT_SUGGESTIONS+"</tr>"
					})
				}else{
					str += "<tr width='100%' height='100px' id='tr1'>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+wpr[2]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+getGrade(sum_wpScore[2])+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[2]+"分</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>暂无</tr>"
				}
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	}
	
	//获取考察专家的总意见
	if(kcr.length==1){
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kcrid[0],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'><td width='15%'>考察专家</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kcr[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	}else if(kcr.length==2){
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kcrid[0],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>考察专家</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-bottom:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kcr[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[0]+"分</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-BOTTOM:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kcrid[1],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kcr[1]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	}else if(kcr.length==3){
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kcrid[0],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>考察专家</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-bottom:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kcr[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-BOTTOM:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kcrid[1],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>网评人</td>" +
					"<td width='7%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='BORDER-BOTTOM:#fff 0px solid;text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kcr[1]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kcrid[2],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kcr[2]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	}
	
	//获取考察组长的总意见
	if(kczz.length==1){
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kczzid[0],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'><td width='15%'>考察专家</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kczz[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	}else if(kczz.length==2){
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kczzid[0],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>考察专家</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-bottom:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kczz[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>"+sum_wpScore[0]+"分</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-BOTTOM:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kczzid[1],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kczz[1]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	}else if(kczz.length==3){
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kczzid[0],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>考察专家</td>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-bottom:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kczz[0]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-BOTTOM:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-BOTTOM:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kczzid[1],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'><td rowspan='2' width='15%'>网评人</td>" +
					"<td width='7%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='BORDER-BOTTOM:#fff 0px solid;text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kczz[1]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-BOTTOM:#fff 0px solid;BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
		$.ajax({
			url: "/audit/assessmentTeach/getAllreportToSHR.do",
			type:'POST',
			async:false,
			data:{
				'wprid':kczzid[2],
				'syear':$("#txt2").val(),
				'specialtyId':$("#parentType").val()
			},
			success : function(oData) {
				var datas = eval("("+oData+")");
				$.each(datas,function(index,obj){
					str += "<tr width='100%' height='100px' id='tr1'>" +
					"<td width='7%' style='BORDER-RIGHT:#fff 0px solid;BORDER-TOP:#fff 0px solid;'><img src='/audit/page/guanliyuan/staticPage/img/head_portrait.png'> </td>" +
					"<td width='7%' style='text-align:left;BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><font style='color:red' id='zpr'>"+kczz[2]+"</font><br>等级：<font style='color:red' id='zpGrade'>"+obj.ranks+"</font><br>总等分：<font style='color:red' id='zpScore'>无</font> </td>" +
					"<td width='1%' style='BORDER-left:#fff 0px solid;BORDER-right:#fff 0px solid;BORDER-TOP:#fff 0px solid;' align='left'><div style='border:1px solid red;height:70px;width:0px' id='div1' class='redline'></div></td>" +
					"<td width='70%' style='BORDER-left:#fff 0px solid;text-align:left;BORDER-TOP:#fff 0px solid;'><div style='padding:15px;text-align:left;'>"+obj.kc_suggestions+"</tr>"
				})
			},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
	}
	
	$("#suggestion").html(str);
}

function getGrade(ScoreSum){
	var grade = "A";
	if(ScoreSum>=90 && ScoreSum<=100){
		grade = "A"
	}else if(ScoreSum>=80 && ScoreSum<90){
		grade = "B";
	}
	else if(ScoreSum>=60 && ScoreSum<70){
		grade = "C";
	}
	else if(ScoreSum<60){
		grade = "D";
	}
	return grade;
}

function checkSpecialty(){
	$("#lookData").val();
}

function getSHR(){
	$.each(wprid,function(index,obj){
		$.each(sysids,function(i,dom){
			$.ajax({
				url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataGrade.do",
				type:'POST',
				async:false,
				data:{
					'id':id,
					'dateYear':2016,
					'specialtyId':specialtyId
				},
				success : function(oData) {
				},
				error : function(oData) {
					alert("数据加载失败");
				}
			});
		});
	})
}

function getReport(){
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataGrade.do",
			type:'POST',
			async:false,
			data:{
				'id':id,
				'dateYear':2016,
				'specialtyId':specialtyId
			},
			success : function(oData) {
				var datalist=eval(oData);
				if(datalist==null){
					alert("数据库没有相关数据");
				   }else{
						   for ( var int = 0; int < datalist.length; int++) {
						   $("#grade1").val(datalist[int].grade);
						   $("#grade2").val(datalist[int].score);
				           }
				        }
				},
			error : function(oData) {
				alert("数据加载失败");
			}
		});
}

//getContentFile

function getContentFile(url){
	$.ligerDialog.open({
		height : 600,
		width : 940,
		top : 50,
		left:400,
		title : '查看自评报告',
		url :   '/audit/page/guanliyuan/staticPage/self-assessment-online.jsp?type=1&onlineFile='+url+'&specialtyId='+$("#parentType").val()+'&syear='+$("#txt2").val(),
		isDrag:true,
		showMax : false,
		showToggle : true,
		showMin : false,
		isResize : false,
		slide : false,
		fixedType :"nw",
		isHidden:false
	});
}

function getContent(i){
	$.ligerDialog.open({
		height : 600,
		width : 940,
		top : 50,
		left:400,
		content : contextFile[i],
		title : '查看自评报告',
//		url :   '/audit/page/guanliyuan/staticPage/self-assessment.jsp?type=2&sysid='+sysid+"&specialtyId="+$("#parentType").val()+"&syear="+$("#txt2").val(),
		isDrag:true,
		showMax : false,
		showToggle : true,
		showMin : false,
		isResize : false,
		slide : false,
		fixedType :"nw",
		isHidden:false
	});
}

function aaaa(sysid){
	var width_dialog = $(window).width()*0.96;
	
	$.ligerDialog.open({
		height : 830,
		width : width_dialog,
		top : 20,
		title : '查看支撑材料',
	//	content: table,
		url :   '/audit/page/guanliyuan/staticPage/material.jsp?sysid='+sysid+"&specialtyId="+$("#parentType").val()+"&syear="+$("#txt2").val(),
		isDrag:true,
		showMax : false,
		showToggle : true,
		showMin : false,
		isResize : true,
		slide : false,
		fixedType :"nw",
		isHidden:false
		/*buttons:[{
			text:'确认',
			onclick:function(item,dialog){
				
			}
		},{
			text:'取消',
			onclick:function(item, dialog){
				dialog.close();
			}
		}]*/

	});
}

//校级数据表
function schoolData(sysid){
	var width_dialog = $(window).width()*0.96;
	
	$.ligerDialog.open({
		height : 830,
		width : width_dialog,
		top : 20,
		title : '查看数据表',
	//	content: table,
		url :   '/audit/page/guanliyuan/staticPage/schoolData.jsp?sysid='+sysid+"&type=2&syear="+$("#txt2").val(),
		isDrag:true,
		showMax : false,
		showToggle : true,
		showMin : false,
		isResize : true,
		slide : false,
		fixedType :"nw",
		isHidden:false
	});
}

//专业数据表
function lookData(sysid){
	var width_dialog = $(window).width()*0.96;
	
	$.ligerDialog.open({
		height : 830,
		width : width_dialog,
		top : 20,
		title : '查看数据表',
	//	content: table,
		url :   '/audit/page/guanliyuan/staticPage/schoolData.jsp?sysid='+sysid+"&type=1&syear="+$("#txt2").val(),
		isDrag:true,
		showMax : false,
		showToggle : true,
		showMin : false,
		isResize : true,
		slide : false,
		fixedType :"nw",
		isHidden:false
	});
}

function changeTr(){
//	alert("行数:"+());
	
	var line = parseInt($("#tab1 tr").length)-4;
	for ( var i = 0; i <= line+5; i++) {
		var tab3_trStr = "#tab3_tr"+i;
		var tab1_trStr = "#tab1_tr"+i;
		
		var tab1_height = $(tab1_trStr).height();
		var tab3_height = $(tab3_trStr).height();
		
		if(parseInt(tab1_height)>parseInt(tab3_height)){
			$(tab3_trStr).height(tab1_height);
			$(tab1_trStr).height(tab1_height);
		}else{
			$(tab3_trStr).height(tab3_height);
			$(tab1_trStr).height(tab3_height);
		}
	}
	
	var tr1_height = parseInt($("#tr_tab1_1").height());// + parseInt($("#tr_tab1_2").height());
	var tr3_height = $("#tr_tab3_1").height();
	
	if(parseInt(tr1_height)>parseInt(tr3_height)){
		$("#tr_tab3_1").height(tr1_height);
	}else{
		$("#tr_tab1_1").height(tr3_height);
//		$("#tr_tab1_2").height(tr3_height/2);
	}
	
	$("#div1").height(parseInt($("#tr1").height())*0.80);
	$("#div3").height(parseInt($("#tr3").height())*0.80);
	$("#div2").height(parseInt($("#tr2").height())*0.80);
	$("#div4").height(parseInt($("#tr4").height())*0.80);
	$("#div5").height(parseInt($("#tr5").height())*0.80);
	$("#div6").height(parseInt($("#tr6").height())*0.80);
}

//合并内容相同的单元格
function _w_table_rowspan(_w_table_id,_w_table_colnum){
    _w_table_firsttd = "";
    _w_table_currenttd = "";
    _w_table_SpanNum = 0;
    _w_table_Obj = $(_w_table_id + " tr td:nth-child(" + _w_table_colnum + ")");
    _w_table_Obj.each(function(i){
        if(i==0){
            _w_table_firsttd = $(this);
            _w_table_SpanNum = 1;
        }else{
            _w_table_currenttd = $(this);
            if(_w_table_firsttd.text()==_w_table_currenttd.text()){
                _w_table_SpanNum++;
                _w_table_currenttd.hide();
                _w_table_firsttd.attr("rowSpan",_w_table_SpanNum);
            }else{
                _w_table_firsttd = $(this);
                _w_table_SpanNum = 1;
            }
        }
    }); 
}
function _w_table_colspan(_w_table_id,_w_table_rownum,_w_table_maxcolnum){
    if(_w_table_maxcolnum == void 0){_w_table_maxcolnum=0;}
    _w_table_firsttd = "";
    _w_table_currenttd = "";
    _w_table_SpanNum = 0;
    $(_w_table_id + " tr:nth-child(" + _w_table_rownum + ")").each(function(i){
        _w_table_Obj = $(this).children();
        _w_table_Obj.each(function(i){
            if(i==0){
                _w_table_firsttd = $(this);
                _w_table_SpanNum = 1;
            }else if((_w_table_maxcolnum>0)&&(i>_w_table_maxcolnum)){
                return "";
            }else{
                _w_table_currenttd = $(this);
                if(_w_table_firsttd.text()==_w_table_currenttd.text()){
                    _w_table_SpanNum++;
                    _w_table_currenttd.hide(); //remove();
                    _w_table_firsttd.attr("colSpan",_w_table_SpanNum);
                }else{
                    _w_table_firsttd = $(this);
                    _w_table_SpanNum = 1;
                }
            }
        });
    });
}



function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
}

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