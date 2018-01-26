	var request;
	var dateYear;
	var specialtyId;
	var ispass;
	var t_task_id;
	var date;
	var taskInfoToWp;
	var taskInfoToSH;
	var indexs=-1;
	$(function(){
		
		$("#zgbg").hide();
		//获取值
		request=GetRequest();
		dateYear=request.dateYear;
		specialtyId=request.specialtyId;
		ispass=request.ispass;
		t_task_id=request.t_task_id;
		date=request.date;
		date=decodeURI(date);
		
		validateLogin();
		// 初始化
		//divCss();
		arrowInit();
		getUserName();
		getAllData();
		ASDSReportInit();
		//初始化总意见
		getWangPingYijianZ();
		//专业名称
		initSpecialtyName();
		initOrganizationName();
		
		if(parent.window.location.toString().split("/")[5]!="wangping"){
			parent.document.getElementById("down").style.display = "none";
			parent.document.getElementById("middle").style.display = "none";
			parent.document.getElementById("left").style.height="10%";
			parent.document.getElementById("upper").style.height="100%";
			parent.document.getElementById("main").style.margin="0 0 0 -22%"
			$("#left").show();
		}
		$(".li1:eq(0)").addClass("li1 selected");
	
		$(".li1>a:eq(0)").addClass("arrow_down");
		//默认展开列表
		$(".li1>ul:eq(0)").css("display","block");
		
		getTaskToWangping();
		
		//改变iframe的src
		var path = "/audit/page/wangping/staticPage/page_4.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id+"&date="+date+"&zyId=0";
		$("#tempIframe").attr("src",path);
		if(indexs==-1){
			indexs=0;
			$("#content li ul .li2:eq(0)").find("a").attr("style","background: #0080FF none repeat scroll 0% 0%;");
		}
		
		$("#deepest").attr("style","background-color:#0080FF;border:1px solid #999;border-right:none; width:100%;");
		$(".li").click(function(){
			$(".li").attr("style","none");
			$(this).attr("style","background-color:#0080FF;border:1px solid #999;border-right:none; width:100%;");
		});
		
	});
	
	//查询审核人和网评人是否已经提交
	function getTaskToWangping(){
		//审核人是否已经提交
		$.ajax({
			url:sContentPath+"/asAssessReport/getTaskToShenheOrWangping.do",
			type:'POST',
			async:false,
			dataType:'json',
			data:{
				"itemId":0,
				"dateYear":dateYear,
				"specialtyId":specialtyId,
				"shId":1
			},success:function(data){
				var datas = eval("("+data+")");
				taskInfoToSH = data;
			}
		});
		
		//网评人是否已经提交
		$.ajax({
			url:sContentPath+"/asAssessReport/getTaskToShenheOrWangping.do",
			type:'POST',
			async:false,
			dataType:'json',
			data:{
				"itemId":0,
				"dateYear":dateYear,
				"specialtyId":specialtyId,
				"wpId":1
			},success:function(data){
//				alert(data);
				var datas = eval("("+data+")");
				taskInfoToWp = data;
//				alert(taskInfoToWp);
			}
		});
	}


$(document).on('click',function(e){
	var x = $(e.target);
	if($("#contentAll2").find(x).length == 0 && !x.is($("#url"))){
		$("#contentAll2").hide(200);
	}
});

function getUserName(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getUserName.do",
		async:false,
		type:'POST',
		data:{},
		dataType:'json',
		success:function(data){
			$("#showUserName").html(data);
		}
	});
}
function divCss(){
	var iWidth = document.documentElement.clientWidth;
	var iHeight = document.documentElement.clientHeight;
	$("#div1").width(iWidth).height(iHeight);

}
	var sContentPath = getContentPath();
	var is_Engineering;
	var dateReport;
	function getContentPath(){
		var pathName = document.location.pathname;
		var index = pathName.substr(1).indexOf("/");
		var result = pathName.substr(0, index + 1);
		return result;
	
	}

	//初始化专业名字
	function initSpecialtyName(){
		var request=GetRequest();
		var dateYear=request.dateYear;
		var specialtyId=request.specialtyId;
		$.ajax({
			url :"/audit/AssessmentSpecialtyInfoXueYuanController/findAssessment_specialty_info_Name.do",
			data:{
				"specialty_id":specialtyId,
			},
			async:true,
			type:'POST',
			dataType:'json',
			success:function(datas){
				$("#name").html(datas);
			}
		});
	}
	//初始化学院名字
	function  initOrganizationName(){
		var request=GetRequest();
		var specialtyId=request.specialtyId;
		$.ajax({
			url :"/audit/AssessmentSpecialtyInfoWangPingController/selectOrganizationName.do",
			data:{
				"sp_id":specialtyId
			},
			async:false,
			type:'POST',
			dataType:'json',
			success:function(datas){
				$("#organizationName").val(datas);
			}
		});
	}
	//提交
	function tijiao(){
		var request=GetRequest();
		var dateYear=request.dateYear;
		var specialtyId=request.specialtyId;
		var ispass=request.ispass;
		var date=request.date;
		date=decodeURI(date);
		if(ispass==1){
			var messg="<div style='height:115px;line-height:19px;padding:10px'>" +
					"该专业网评时间为：<br/><br/><p style='color:red'>"+date+"</p><br/><span stype='font-size:13px;color:a8a8a8'>目前已过网评时间!</span><span style='font-size:14px;color:3d8bd3'>请联系管理人员</span>" +
				  "</div>"
			lzrWindow.alert({
			type:1,
			messge:messg,
			clickClose:true,
			width:350,
			bottom:56,
			left:33,
			});
		}else{
			$.ajax({
				url: "/audit/AssessmentSpecialtyInfoWangPingController/updateAssessment_task_pass.do",
				type:'POST',
				async:false,
				data:{
					"struts" : 1,
					"specialty_id" :specialtyId
				},
				success:function(data){
					lzrWindow.alert("提交成功！");
				}
			})
		}
	}

function closeMywindow(){
	$("#mywindow").hide();
}
//初始化总意见
function  getWangPingYijianZ(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	var ispass=request.ispass;
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getWangPingZongComment.do",
		async:false,
		type:'POST',
		data:{
			"specialty_id":specialtyId
		},
		dataType:'json',
		success:function(data){
			
			$("#zYJ").html(data.comment_suggestions);
		}
	});
}


function jump(num){
//	alert
//	var request=GetRequest();
//	var dateYear=request.dateYear;
//	var specialtyId=request.specialtyId;
//	var ispass=request.ispass;
//	var t_task_id=request.t_task_id;
//	var date=request.date;
//	date=decodeURI(date);
	//跳专业质量报告
	if(num==1){
//		location.href="/audit/page/wangping/staticPage/zhuanYeZhiLiangBaoGao.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id+"&date="+date;
//		location.href="/audit/page/xueyuan/staticPage/page_4.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id+"&date="+date;
		var path = "/audit/page/wangping/staticPage/page_4.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id+"&date="+date;
		$("#tempIframe").attr("src",path);
	}
	if(num==0){
		location.href="/audit/page/wangping/staticPage/home_1.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id+"&date="+date;
	}
	//跳历史报告
	if(num==2){
		lzrWindow.alert("跳历史报告");
	}
}
/**
 * 拿到url上面的参数
 * @returns {Object}
 */

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
function getAllData(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/getAllData.do",
		async:false,
		type:'POST',
		data:{
			"specialtyId":specialtyId
		},
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				is_Engineering = datas[0].is_engineering;
//				$("#tab div:eq(0)").html("Self-Report");
				$("#tab div:eq(0)").html("专家网评");
				if(datas[0].is_rz==2){

				}else if(datas[0].is_rz==1){
					$("#tab div:eq(0)").show();
					$("#tab div:eq(0)").html("专家网评");
//					$("#dataReport").html("专业质量报告");
					$("#dataReport").html("专家网评");
				}else if(datas[0].is_rz==3){
//					$("#tab div:eq(1)").show();
					$("#tab div:eq(0)").show();
				}
			}
		}
	});
}

var array3 = [];
function load(){
	var dateYear=request.dateYear;
	var parentData;
	$.ajax({
		url: "/audit/asAssessReport/getSystemByType.do",
		data:{
			"id":is_Engineering,
			"syear":dateYear
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				parentData = datas;
			}
		}
	});
	$.ajax({
		url: "/audit/asAssessReport/getSystemSonByType.do",
		data:{
			"id":is_Engineering,
			"syear":dateYear
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			array = [];
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				if(parentData!=null&&parentData!=""){
					for ( var i = 0; i < parentData.length; i++) {
						var obj =new Object();
						obj.id = parentData[i].id;
						obj.name = parentData[i].system_name;
						var childrens = []
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
	$.ajax({
		url: sContentPath+"/asAssessReport/getSystemThreeByType.do",
		data:{
			"id":is_Engineering
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
		   if(datas!=null && datas.length>0){
			   var obj;
			   //一级
			   $.each(array,function(index,dom){
				   //二级
				   if(dom.children!=null && dom.children!=""){
					   $.each(dom.children,function(int,doc){
						   array3=[];
						   //三级
						   for ( var i = 0; i < datas.length; i++) {
							   obj = new Object();
							   obj.id = datas[i].id;
							   obj.name = datas[i].system_name;
							   obj.url = datas[i].id+"x";
							   if(doc.id==datas[i].parent_id){
								   array3.push(obj);
							   }
						   }
						   doc.children = array3;
					   })
				   }
			   })	
		   }
//		   ASDSReportInit();
		}
	});
}
/**
 * 初始化各类东西
 */
function ASDSReportInit(){
	load();
	$("#content").html(menuStr());
	// 菜单初始化
	$('#content').tendina({
		animate: true,
		speed: 500,
		onHover: false,
		hoverDelay: 300
	});

}

function menuStr(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	//初始化菜单
	var str = "";
	$.each(array,function(i,obj){
		//console.log(obj.id);
		if(i==0){
			str += "<li class='li1' style='padding:5px;'><a class='li' id='deepest' href='javascript:showlist("+obj.id+")'" ;
		}else{
			str += "<li class='li1' style='padding:5px;'><a class='li' href='javascript:showlist("+obj.id+")' ";
		}
		if(obj.url != null){
			ajaxFindData(specialtyId,obj,dateYear);
		}
		str += " ><div style='padding:5px;'>"+obj.name+"</div></a>";
		// 二级菜单

		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str += "<ul>";
			$.each(obj.children,function(j,obj2){
				
				if(obj2!=undefined){
					str += "<li class='li1' style='padding:5px;' onclick='change(this);'><a class='li' href='javascript:showlist("+obj2.id+",this)' ";
					if(obj2.url!=null){
						ajaxFindData(specialtyId,obj2,dateYear);
					}
					str += "><div style='padding:5px;'>"+ obj2.name +"</div></a>";
					// 三级菜单
					if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
						str += "<ul>";
						$.each(obj2.children,function(k,obj3){
							if(obj3!=undefined){
								str += "<li style='list-style:none;width:100%;padding:5px;'><a style='width:100%; height:40px;' class='li' href='javascript:showlist("+obj3.id+",this)' ";
								if(obj3.url != null){
									ajaxFindData(specialtyId,obj3,dateYear);
								}
								str += "><div style='padding:10px;'>"+ obj3.name +"</div></a>";
							}
						});
						str += "</ul>";
					}
				}
			});
			str += "</ul>";
		}
		str += "</li>";
	});
	str +=
		"<li class='li1' id='yuelan' style='margin-top:10px'><a href='javascript:void(0)' onclick='showAll("+specialtyId+","+dateYear+")'><img src='img/allread.png' style='margin:0% 30%;'></a></li>"
		str +=
		"<li class='li1' id='yuelan' style='margin-top:4px;'><a href='javascript:void(0)' onclick='insertTaskInfo(0)'><img src='/audit/page/wangping/staticPage/img/submit.png' style='margin:0% 30%;'/></a></li>"
		return str;
}

//菜单对象
var array=[
           {id:"1",name:"一、学校概要数据",
        	   children:[
        	             //	             {id:"1",name:"1.1 办学指标思想",url:"asds_error"},
        	             {id:"1",name:"  学位点概况",url:"ASDS_tableG-2"},
        	             {id:"1",name:"学校《本科教学质量报告》支撑数据指标比较",url:"ASDS_tableG-3"},
        	             ]
           },
           /* 主表 */
           {id:"1",name:"1. 定位与目标",
        	   children:[
//{id:"1",name:"1.1 办学指标思想",url:"asds_error"},
{id:"1",name:"1.2 校领导年龄和学位结构",url:"ASDS_table1-2"},
{id:"1",name:"1.3 校级教学管理人员结构",url:"ASDS_table1-3"},
{id:"1",name:"1.4 教育教学改革与成果",url:"ASDS_table1-4"},
{id:"1",name:"1.5 专业布局概览",url:"ASDS_table1-5"},
//{id:"1",name:"1.6 教学单位学科专业概览",url:"ASDS_table1-6"},
]
           },
           {id:"2",name:"2. 教师队伍",
        	   children:[
        	             {id:"1",name:"2.1 学校生师比及教师情况",url:"ASDS_table2-1"},
        	             {id:"1",name:"2.2  教师队伍结构",url:"ASDS_table2-2"},
        	             {id:"1",name:"2.3 各教学单位教师与本科生情况",url:"ASDS_table2-3"},
        	             {id:"1",name:"2.4 主讲教师本科授课情况",url:"ASDS_table2-4"},
        	             {id:"1",name:"2.5 教授、副教授讲授本科课程比例",url:"ASDS_table2-5"},
        	             {id:"1",name:"2.6 教师培养培训情况",url:"ASDS_table2-6"},
        	             {id:"1",name:"2.7 专业带头人情况",url:"ASDS_table2-7"},
        	             {id:"1",name:"2.8 学校实验系列人员结构",url:"ASDS_table2-8"},
        	             {id:"1",name:"2.9 教师教育教学改革与成果",url:"ASDS_table2-9"}
        	             ]
           },
           {id:"3",name:"3. 教学资源",
        	   children:[
        	           {id:"1",name:"3.1 教学经费投入情况",url:"ASDS_table3-1"},
        	           {id:"1",name:"3.2 教学基本设施情况",children:[{name:"3.2.1 教学行政用房情况",url:"ASDS_table3-2-1"},
        	                                                   {name:"3.2.2 教学、科研仪器情况",url:"ASDS_table3-2-2"},
        	                                                   {name:"3.2.3 本科实验、实习、实训场所情况",url:"ASDS_table3-2-3"},
        	                                                   {name:"3.2.4 校园网、图书情况",url:"ASDS_table3-2-4"}]},
                       {id:"1",name:"3.3 专业概况预览",url:"ASDS_table3-3"},
                       {id:"1",name:"3.4 优势专业概览",url:"ASDS_table3-4"},
                       {id:"1",name:"3.5 新设专业概览",url:"ASDS_table3-5"},
                       {id:"1",name:"3.6 各教学单位课程开设情况",url:"ASDS_table3-6"},
                       {id:"1",name:"3.7 各专业实践教学情况",url:"ASDS_table3-7"},
                       {id:"1",name:"3.8 全校课程开设情况",url:"ASDS_table3-8"},
                       {id:"1",name:"3.9 精品（优秀）课程（群）建设",url:"ASDS_table3-9"},
                       {id:"1",name:"3.10 合作办学情况",url:"ASDS_table3-10"}
                       ]
           },
           {id:"4",name:"4. 培养过程",
        	   children:[
        	             {id:"1",name:"4.1 专业培养课程学分结构",url:"ASDS_table4-1"},
        	             {id:"1",name:"4.2 人才培养模式创新区情况",url:"ASDS_table4-2"},
        	             {id:"1",name:"4.3 实验教学示范中心",url:"ASDS_table4-3"},
        	             {id:"1",name:"4.4 毕业综合训练情况",url:"ASDS_table4-4"},
        	             {id:"1",name:"4.5 校园文化活动情况",url:"ASDS_table4-5"},
        	             {id:"1",name:"4.6 学生社团情况",url:"ASDS_table4-6"},
        	             {id:"1",name:"4.7 学生国际交流情况",url:"ASDS_table4-7"},
        	             {id:"1",name:"4.8 各教学单位教育教学研究与改革情况",url:"ASDS_table4-8"}
        	             ]
           },
           {id:"5",name:"5. 学生发展",
        	   children:[
        	             {id:"1",name:"5.1 生源情况",url:"ASDS_table5-1"},
        	             {id:"1",name:"5.2 各专业（大类）本科生招生报到情况",url:"ASDS_table5-2"},
        	             {id:"1",name:"5.3 学生管理人员结构",url:"ASDS_table5-3"},
        	             {id:"1",name:"5.4 各教学单位学生管理人员与学生情况",url:"ASDS_table5-4"},
        	             {id:"1",name:"5.5 本科生奖贷补情况",url:"ASDS_table5-5"},
        	             {id:"1",name:"5.6 学生发展情况",url:"ASDS_table5-6"},
        	             {id:"1",name:"5.7 各专业毕业生情况",url:"ASDS_table5-7"},
        	             {id:"1",name:"5.8 毕业生就业去向分布情况",url:"ASDS_table5-8"}
        	             ]},
        	             {id:"6",name:"6. 质量保障",
        	            	 children:[
        	            	           {id:"1",name:"6.1 评教信息",url:"ASDS_table6-1"},
        	            	           {id:"1",name:"6.2 教学质量管理队伍结构",url:"ASDS_table6-2"},
        	            	           {id:"1",name:"6.3 教学管理队伍教学研究情况",url:"ASDS_table6-3"}
        	            	           ]},
        	            	           {id:"7",name:"7. 详细数据附表",
        	            	        	   children:[
        	            	        	             {id:"1",name:"7.1 校领导情况",url:"ASDS_tableF-1"},
        	            	        	             {id:"1",name:"7.2 校级教学管理人员基本信息",url:"ASDS_tableF-2"},
        	            	        	             {id:"1",name:"7.3 各教学单位专任教师结构",url:"ASDS_tableF-3"},
        	            	        	             {id:"1",name:"7.4 各教学单位专业带头人情况",url:"ASDS_tableF-4"},
        	            	        	             {id:"1",name:"7.5 各教学单位实验系列职称人员结构",url:"ASDS_tableF-5"},
        	            	        	             {id:"1",name:"7.6 各专业授课教师结构",url:"ASDS_tableF-6"},
        	            	        	             {id:"1",name:"7.7 各专业授课教师授课情况",url:"ASDS_tableF-7"},
        	            	        	             {id:"1",name:"7.8 各专业教师、学生情况概览",url:"ASDS_tableF-8"},
        	            	        	             {id:"1",name:"7.9 校内实验实习实训场所情况",url:"ASDS_tableF-9"},
        	            	        	             {id:"1",name:"7.10 各专业实践教学情况",url:"ASDS_tableF-10"},
        	            	        	             {id:"1",name:"7.11 各专业教学情况一览表",url:"ASDS_tableF-11"},
        	            	        	             {id:"1",name:"7.12 毕业综合训练情况",url:"ASDS_tableF-12"},
        	            	        	             {id:"1",name:"7.13 各专业（大类）本科生招生情况",url:"ASDS_tableF-13"},
        	            	        	             {id:"1",name:"7.14 各专业毕业生情况",url:"ASDS_tableF-14"}
        	            	        	             ]},
        	            	        	             {id:"8",name:"8. 状态分析报告",
        	            	        	            	 children:[
        	            	        	            	           {id:"1",name:"8.1 状态分析报告(new)",url:"ASDS_table_main"},
        	            	        	            	           {id:"1",name:"8.2 状态分析报告记录",url:"ASDS_table_history"}
        	            	        	            	           ]}

        	            	        	             ];

function arrowInit(){
	$(".li1>a").addClass("arrow");
}
function clickTab(num){
	//跳整改
	if(num==0){
		location.href="/audit/page/wangping/staticPage/home_1.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass;
	}
	if(num==2){
		lzrWindow.alert("跳历史报告");
	}

}


	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	function insertTaskInfo(item){
		if(taskInfoToSH==null && taskInfoToSH.length<0){
			alert("审核人未提交审核数据！")
		}else if(taskInfoToWp!=null && taskInfoToWp!="" && taskInfoToWp!="[null]"){
			alert("网评人已提交数据，不能再修改！")
		}else{
			var taskId = taskInfoToSH.split(",")[0].split(":")[1];
			$.ajax({
				url :sContentPath+"/asAssessReport/updateTaskInfoToWangping.do",
				data:{
					"item":item,
					"specialtyId":specialtyId,
					"dateYear":dateYear,
					"taskId":taskId
				},
				async:false,
				type:'POST',
				success:function(data){
					lzrWindow.alert(data);
				}
			});
		}
		
		
	//	$.ajax({
	//		url:sContentPath+"/asAssessReport/selectTask.do",
	//		type:'POST',
	//		async:false,
	//		dataType:'json',
	//		data:{
	//			"itemId":item,
	//			"dateYear":dateYear,
	//			"specialtyId":specialtyId
	//		},success:function(data){
	//			var datas = eval("("+data+")");
	//			taskInfo = datas;
	//			alert(taskInfo.id);
	//			if(taskInfo!=null && taskInfo.length>0){
	//				alert("自评人未提交审核！");
	//			}else{
	//				
	//			}
	//		}
	//	});
	}

function ajaxFindData(specialty_id,obj,rYear){
	$.ajax({
		url :"/audit/AssessmentSpecialtyInfoWangPingController/findReport.do",
		data:{
			"specialty_id":specialty_id,
			"sysId":obj.id,
			"rYear":rYear
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(datas){
			var html="";
			html+="<div style='width:95%;margin-left:15px;margin-top:8px'>"
				//内容左边的
				html+="<div style='float:left;width:73%'>"
					html+="<div id='"+obj.id+"' style='background:#DCDBDB;font-weight: bold;height:34px;text-align: center;line-height: 31px;'>"+obj.name+"</div>"
					html+="<div style='border: 1px solid rgba(113, 113, 113, 0.56);margin-top:5px;'>"
						if(datas.enter_CONTENT==""&&datas.struts==2){
							html+="<div id='info'>注：如有乱码，请联系自评人，新建文件，重新上传</div>"
						}else{
							html+="<div id='info'></div>"
						}
			html+="  <div id='"+obj.id+"C' style='overflow :auto;overflow-y :auto;height:120px'>" 
			//如果解析不了
			if(datas.struts==2){
				html+="请<a href='/audit/asAssessReport/downReport.do?id="+datas.report_id+"'>点击下载</a>预览";
			}else{
				if(datas.enter_CONTENT!=null&&datas.enter_CONTENT!=""){
					html+=datas.enter_CONTENT;
				}else if(datas.filePath!=null){
					html+="<iframe width=99% height=350 frameborder=0 scrolling=auto src='/audit/"+datas.filePath+"'></iframe>"
				}else {
					html+="自评人未提交信息";
				}
			}
			html+="</div>"
				html+="</div>"
					//ajax查询支撑材料
					html+="<div style='border: 1px solid rgba(113, 113, 113, 0.56);margin-top:5px'>"
						html+="		<div style='background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;'>"
							html+="  		<div style='float:left;text-align:center'>支撑材料</div>"
								html+="		</div>"
									html+="		<div id=\"textInfo\" style=\"overflow :auto;overflow-y :auto;height:120px;\">"
										$.ajax({
											url :"/audit/AssessmentSpecialtyInfoWangPingController/findAs_assess_support.do",
											data:{
												"Sysid":obj.id,
												"Ryear":rYear,
												"Specialty_id":specialty_id,
												//"Report_id":datas.report_id,
											},
											async:false,
											type:'POST',
											dataType:'json',
											success:function(data){
												var length=$(data).length;
												if(length>0){
													$(data).each(function(k,v){
														html+="<div style=\"padding: 10px;\"><span style='line-height:27px'>"+(k+1)+"."+v.support_NAME+"</span>"
														+"<a href=\"javascript:preLook('"+v.id+"')\" style='float:right;'><img src='/audit/page/wangping/staticPage/img/pre.png' /></a>"
														+"<a href='/audit/asAssessReport/downSupport.do?id="+v.id+"' style='float:right;margin-right:10px'><img src='/audit/page/wangping/staticPage/img/download_2.png' /></a></div>"
													})
												}else{
													html+="自评人未提交该信息";
												};
											},error:function(jqXHR, textStatus, errorThrown){
												lzrWindow.alert("解析错误！");
											}
										})
										html+="      </div>"
											html+="</div>"
												html+="</div>"
													//左边结束	
													//右边的
													//网评意见	
													html+="	        <div style='width:22%;float:right;'>"
														html+="				<div style=\"background: #DCDBDB;margin: 0 auto;margin-bottom:4px;line-height: 34px;text-align:center\">专家建议</div>"
															
															if(datas.blackcontent!=null&&datas.blackcontent!=undefined){
																html+=" 		<textarea  id=\""+obj.id+"\"  class='messge' style=\"width: 100%; height: 278px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid rgba(113, 113, 113, 0.56);font-family: 'Microsoft YaHei';font-size: 16px;\">"+datas.blackcontent+"</textarea>"	
															}else{
																html+=" 		<textarea  id=\""+obj.id+"\"  class='messge' style=\"width: 100%; height: 278px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid rgba(113, 113, 113, 0.56);font-family: 'Microsoft YaHei';font-size: 16px;\"></textarea>"
															}
			html+="			</div>"
				//右边结束			
				html+="</div>"

					html+="</div>"

						//打分+评论	
						html+="<div style='float:right;width:190px;margin-top:8px;margin-right: 10px;'>" 

							//打分
							html+="	<div style=\"background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;display:none\">"
								html+="			<div style=\"width:15% ;margin: 0 auto;\">打分</div>"
									html+="	</div>"




//										//网评意见	
//										html+="	        <div style='border:1px solid red'>"
//										html+="				<div style=\"background: #DCDBDB;margin: 0 auto;margin-bottom:4px;line-height: 34px;text-align:center\">专家建议</div>"

//										if(datas.blackcontent!=null&&datas.blackcontent!=undefined){
//										html+=" 		<textarea  id=\""+obj.id+"\"  class='messge' style=\"width: 100%; height: 278px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid rgba(113, 113, 113, 0.56);font-family: 'Microsoft YaHei';font-size: 16px;\">"+datas.blackcontent+"</textarea>"	
//										}else{
//										html+=" 		<textarea  id=\""+obj.id+"\"  class='messge' style=\"width: 100%; height: 278px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid rgba(113, 113, 113, 0.56);font-family: 'Microsoft YaHei';font-size: 16px;\"></textarea>"
//										}
//										html+="			</div>"

										html+="</div>"	


											$("#imglodding").hide();
			$("#contentAll").append(html);
		}
	});

}
function outfile(){
	//初始化表单
	var  spName=$("#name").html();
	//初始专业名字
	$("#speName").val(spName);
	var  textarea=$("textarea");
	//清除以前的
	var adds=$("div[name='add']");
	$(adds).each(function(){
		$(this).remove();
	})
	//初始化模板
	$(textarea).each(function (k,v){
		var html=$(v).val();
		var id=$(v).prop("id");
		var msg=$("#"+id+"C").html();
		var str="<div name='add'>";
		str +="<div  class=MsoNormal align=left style='margin-top:7.8pt;text-align:left;line-height:150%'>" +
		"<b style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:\"Times New Roman\"'>" +
		""+msg+"</span></b><b style='mso-bidi-font-weight:normal'>"+
		"<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:黑体'><o:p></o:p></span>"+
		"</b></div>";
		str +="<div style=''mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;color:red;mso-hansi-font-family:\"Times New Roman\"''>专家意见</div>";
		str +="<div class=MsoNormal align=left style='margin-top:7.8pt;text-align:left;line-height:150%'>" +
		"<b style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:\"Times New Roman\"'>" +
		""+html+"</span></b><b style='mso-bidi-font-weight:normal'>"+
		"<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:黑体'><o:p></o:p></span>"+
		"</b></div></div>";


		//非工科
		if(is_Engineering==1){
			$("#"+id+"B").after(str);
			$("#Bxueyuan").html($("#organizationName").val());
			$("#Bzhuanye").html($("#name").html());
		} else{
			//工科
			$("#"+id+"A").after(str);
			$("#Axueyuan").html($("#organizationName").val());
			$("#Azhuanye").html($("#name").html());
		}
	})
	//2工科
	if(is_Engineering==2){
		//模板
		var GkModle=$("#GkModle").html();
		$("#contentMold").val(GkModle);
		$('#myForm').submit();
		//lzrWindow.alert("工科导出完毕");
	}
	//1非工科
	if(is_Engineering==1){
		//模板
		var FgkModle=$("#FgkModle").html();
		$("#contentMold").val(FgkModle);
		$('#myForm').submit();
		//lzrWindow.alert("非工科导出完毕");
	}
}
function closeWindow(){
	$("#contentAll2").fadeOut(1000);
}
var support_id;
function download(){
	location.href="/audit/asAssessReport/downSupport.do?id="+support_id
}
function preLook(id){
	$("#title").html("");
	$("#contentThing").html("");
	$("#contentAll2").fadeIn(1000);
	
	//提供下载;
	support_id = id;
	$.ajax({
		url :"/audit/AssessmentSpecialtyInfoWangPingController/getAs_assess_supportById.do",
		data:{
			"supportId":id,
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(datas){
			var info=datas.coninfo;
			$("#title").html(datas.support_NAME);
			$("#down1").show();//显示下载
			//如果解析不了
			if(info.struts==2){
				lzrWindow.alert("该文件格式不支持预览,你可以进行下载");
			}else{
				if(info.contentMessge!=null){
					$("#contentThing").html("<div>"+info.contentMessge+"</div>");
				}else if(info.filePath!=null){
					$("#contentThing").html("<iframe  width=100% height=92% frameborder=0 scrolling=auto src=\"/audit/"+info.filePath+"\"></iframe>");
				}else{
					lzrWindow.alert("解析失败,你可以进行下载");
				}
			}
		},error:function(jqXHR, textStatus, errorThrown){
			lzrWindow.alert("预览失败,你可以进行下载");
		}
	});

}
function save1(){
	var request=GetRequest();
	var dateYear=request.dateYear;
	var specialtyId=request.specialtyId;
	var date = request.date;
	var ispass=request.ispass;
	//保存总意见
	var content= $("#zYJ").val();
	if(ispass==1){
		var messg="<div style='height:115px;line-height:19px;padding:10px'>" +
				"该专业网评时间为：<br/><br/><p style='color:red'>"+date+"</p><br/><span stype='font-size:13px;color:a8a8a8'>目前已过网评时间!</span><span style='font-size:14px;color:3d8bd3'>请联系管理人员</span>" +
			  "</div>"
		lzrWindow.alert({
		type:1,
		messge:messg,
		clickClose:true,
		width:350,
		bottom:56,
		left:33,
		});
	}else{
	if(content=="请输入你的意见"||content==""){
		lzrWindow.alert("您还未给出总意见");
	}else{
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoWangPingController/insertAssess_comment_rectification.do",
			type:'POST',
			async:false,
			data:{
				'SYSID':0,
				'COMMENT_CONTENT':"",
				'ITEM':2,
				'SYEAR':dateYear,
				'COMMENT_TYPE':2,
				'COMMENT_SUGGESTIONS':content,
				'specialty_id':specialtyId,
			},
			success:function(data){
				var messges=$(".messge");
				$(messges).each(function(k,v){
					var va=$(v).val();
					var sysid=$(v).attr("id");
					if(va!=null&&va!=""){
						$.ajax({
							url: "/audit/AssessmentSpecialtyInfoWangPingController/insertAssess_comment_rectification.do",
							type:'POST',
							async:false,
							data:{
								'SYSID':sysid,
								'COMMENT_CONTENT':va,
								'ITEM':2,
								'SYEAR':dateYear,
								'COMMENT_TYPE':1,
								'COMMENT_SUGGESTIONS':"",
								'specialty_id':specialtyId,
							},
							success:function(data){
								//								console.log("不错");
							},error:function(jqXHR, textStatus, errorThrown){
								lzrWindow.alert("保存失败");
							}
						});
					}
				});
				lzrWindow.alert(
					"保存成功!"
				);
			},error:function(jqXHR, textStatus, errorThrown){
				lzrWindow.alert("保存失败");
			}
		});
	 	}
	}
}
var  flag4=true
function outALL(){
	if(true){
		flag4=false;
		//初始化表单
		var  spName=$("#name").html();
		//初始专业名字
		$("#speName").val(spName);

		var str="";
		//获得报告内容
		var contentBox;
		var iframe=$("#iframe").contents().find("body").html();
		if(iframe!=undefined){
			contentBox=iframe;
		}else{
			contentBox=$("#contentBox").html();
		}
		str +="<div>"+contentBox+"</div>"
		//获得总意见
		var html=$("#zYJ").val();
		str +="<div style=''mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;color:red;mso-hansi-font-family:\"Times New Roman\"''>专家意见</div>";
		str +="<div class=MsoNormal align=left style='margin-top:7.8pt;text-align:left;line-height:150%'>" +
		"<b style='mso-bidi-font-weight:normal'><span style='font-size:12.0pt;line-height:150%;font-family:黑体;mso-hansi-font-family:\"Times New Roman\"'>" +
		""+html+"</span></b><b style='mso-bidi-font-weight:normal'>"+
		"<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:黑体'><o:p></o:p></span>"+
		"</b></div></div>";

		$("#OllReport").after(str);
		//模板
		var GkModle=$("#allModel").html();
		$("#contentMold").val(GkModle);
		$('#myForm').submit();
	}
}
	function downAll(){
		console.log(report_Id1);
		if(report_Id1==0){
			return ;
		}
		location.href="/audit/asAssessReport/downAllReport.do?id="+report_Id1;
	}

	var one=true;
	var report_Id1=0;
	function showAll(specialtyId,dateYear){
		
		//改变iframe的src
		var path = "/audit/page/wangping/staticPage/allTextPreview.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id+"&date="+date+"&zyId=0";
		$("#tempIframe").attr("src",path);
		
		$("#outBtn").hide();
		$("#contentAll").hide();
		$("#contentAll3").show();
		$("#yuelan").addClass("arrow mySelect");
		//跳顶部
		document.getElementById("ii").scrollIntoView();
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoWangPingController/getAllReports.do",
			type:'POST',
			async:false,
			data:{
				"specialty_id":specialtyId,
				"tYear":dateYear			
			},
			success:function(data){
				var datas = eval("("+data+")");
				var length=datas.length;
				if(length!=0){
					$(datas).each(function (k,v){
						$.ajax({
							url: "/audit/AssessmentSpecialtyInfoXueYuanController/zhuanHuanHtml.do",
							type:'POST',
							async:false,
							data:{
								"addr":v.upload_address,
								"fileName":v.upload_files			
							},
							success:function(data){
								report_Id1=v.id;
								var datas1 = eval("("+data+")");
								var html="";
								html +="<div style=\"border: 1px solid rgba(113, 113, 113, 0.56);margin:13px;\">"
									html +="	<div style=\"background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;\">"
										html +="		<div style=\"margin: 0 auto;\">"+v.upload_files+"</div>"
										html +="	</div>"
											/*		html +="			注：如有乱码，请联系自评人，新建文件，重新上传"*/
											html +="	<div style=\"height:260px;\">"
												if(datas1.struts==2){
													html +="请<a href='/audit/asAssessReport/downAllReport.do?id="+v.id+"'>点击下载</a>预览";
												}else{
													if(datas1.contentMessge!=null){
														html +=datas1.contentMessge;
													}else{
														html +="<iframe id='iframe' width=100% height=350 frameborder=0 scrolling=auto src='/audit/"+datas1.filePath+"'></iframe>"
													}
												}
								html +="	</div>"
									html +="</div>	"	
										html +="<div style='height:10px'></div>"
											$("#contentBox").html(html);	
							}
						});
					})
				}else{
					$("#outAll").hide();
					if(one){
						one=false;
						$("#contentBox").html("<div style='text-align:center'>自评人未提交该类型信息</div>");	
					}
				}
				//$("#outAll").html("<a href=\"javascript:outALL()\" style=\"float:right;margin-right: 4%;\"><img src=\"img/out.png\"></img></a>");
				$("#imglodding2").fadeOut(1000);
			}
		});
	}
function showlist(sid,obj){
	var path = "/audit/page/wangping/staticPage/page_4.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id+"&date="+date+"&zyId="+sid;
	$("#tempIframe").attr("src",path);
}
function black(){
	window.location.href="/audit/page/wangping/staticPage/Specialty.jsp";
}
function logout(){
	window.location.href="/logout";
}

function change(obj){
	
//	$("#ss").attr("style","background-color:white;border:1px solid #999;border-right:none; width:100%;");
//	$(".li").click(function(){
//		//alert(1425);
//		$(".li").attr("style","none");
//		$(this).attr("style","background-color:0080FF;border:1px solid #999;border-right:none; width:100%;");
//	});
	
    /*var arr = document.getElementById("ul").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++) {
        var a = arr[i];
        a.style.background = "grey";
    };*/
//	$("#content ul").children().each(function(i,objs){
//		$(objs).css("background","black");  
//	 });
//    obj.style.background = "#0080FF";
//	$("#content ul").children().each(function(i,objs){
//		$(objs).css("background","black");  
//	 });
//	$("#content li ul .li2:eq(0)").find("a").attr("style","background: black none repeat scroll 0% 0%;");
//    	obj.style.background = "#0080FF";
}