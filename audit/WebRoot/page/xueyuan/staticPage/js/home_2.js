
$(function(){
	
	// 初始化
	divCss();
	arrowInit();
	getAllData();
//	eventBind();
	validateLogin();
});
function divCss(){
	var iWidth = document.documentElement.clientWidth;
	var iHeight = document.documentElement.clientHeight;
	$("#div1").width(iWidth).height(iHeight);
	
}
var taskInfo;
var sContentPath = getContentPath();
var is_Engineering;
var dateReport;
var itemId;
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}

function getTaskInfo(){
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	$.ajax({
		url:sContentPath+"/asAssessReport/selectTask.do",
		type:'POST',
		async:false,
		dataType:'json',
		data:{
			"itemId":itemId,
			"dateYear":dateYear,
			"specialtyId":specialtyId
		},success:function(data){
			var datas = eval("("+data+")");
			taskInfo = datas;
		}
	});
}
function getAllData(){
	var specialtyId = $("#specialtyId").val();
	$.ajax({
		url: sContentPath+"/asAssessReport/getAllData.do",
		async:false,
		type:'POST',
		data:{
			"specialtyId":specialtyId
		},
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				is_Engineering = datas[0].is_engineering;
				$("#showUserName").html(datas[0].showName);
				dateReport = 	datas[0].self_assessment_date;
				clickTab(0);
			}
		}
	});
}

function load(num){
	var parentData;
	$.ajax({
		url: sContentPath+"/asAssessReport/getSystemByType.do",
		data:{
			"id":is_Engineering
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
		url: sContentPath+"/asAssessReport/getSystemSonByType.do",
		data:{
			"id":is_Engineering
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
								childrens.push({id:datas[j].id,name:datas[j].system_name,url:"../page_"+num})
							}
						}
						if(childrens.length==0){
							obj.url=	"../page_"+num;
						}else{
							obj.children = childrens;	
						}
						array.push(obj);
						iframeTab("../page_1",array[0].id);
					}
				}
			}
			ASDSReportInit();
		}
	});
	
}
/**
 * 初始化各类东西
 */
function ASDSReportInit(){

	$("#content").html(menuStr());
	// 菜单初始化
	$('#content').tendina({
        // This is a setup made only
        // to show which options you can use,
        // it doesn't actually make sense!
        animate: true,
        speed: 500,
        onHover: false,
        hoverDelay: 300
//        activeMenu: $('#deepest')
//        openCallback: function(clickedEl) {
//        },
//        closeCallback: function(clickedEl) {
//        }
  });
}
function menuStr(){
	
	//初始化菜单
	var str = "";
	$.each(array,function(i,obj){
		if(i==0){
			str += "<li class='li1'><a id='deepest' href='javascript:void(0);'";
		}else{
			str += "<li class='li1'><a href='javascript:void(0);'";
		}
		if(obj.url != null){
			str += "onclick=iframeTab('"+obj.url+"',"+obj.id+")";
		}
		str += " >"+obj.name+"</a>";
		// 二级菜单
	
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str += "<ul>";
			$.each(obj.children,function(j,obj2){
				if(obj2!=undefined){
					str += "<li class='li2'><a href='javascript:void(0);'";
					if(obj2.url!=null){
						str += " onclick=iframeTab('"+obj2.url+"',"+obj2.id+")";
					}
				    str += ">"+ obj2.name +"</a>";
				    
					// 三级菜单
					if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
						str += "<ul>";
						$.each(obj2.children,function(k,obj3){
							if(obj3!=undefined){
								str += "<li class='li3'><a href='javascript:void(0);'";
								if(obj3.url != null){
									str += " onclick=iframeTab('"+obj3.url+"',"+obj3.id+")";
								}
								str += ">"+ obj3.name +"</a>";
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
	return str;
}
// 内嵌页面跳转
function iframeTab(url,id){
	var iframe=$("#tempIframe");
	var path=$("#tempIframe").attr("src");
	var array=path.split("page");
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var path=array[0]+"page/zenith/staticPage/ASDSReport3.0/"+url+".jsp?sysId="+id+"&specialtyId="+specialtyId+"&dateYear="+dateYear;
	if(url.length>20){
		path = url;
	}else{
		if(url=="page_0"){
			path=array[0]+"page/zenith/staticPage/"+url+".jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&sysId="+id;
		}
	}
	iframe.attr("src",path);
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
//	             {id:"1",name:"1.1 办学指标思想",url:"asds_error"},
	             {id:"1",name:"1.2 校领导年龄和学位结构",url:"ASDS_table1-2"},
	             {id:"1",name:"1.3 校级教学管理人员结构",url:"ASDS_table1-3"},
	             {id:"1",name:"1.4 教育教学改革与成果",url:"ASDS_table1-4"},
	             {id:"1",name:"1.5 专业布局概览",url:"ASDS_table1-5"},
	            // {id:"1",name:"1.6 教学单位学科专业概览",url:"ASDS_table1-6"},
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
	             {id:"1",name:"3.2 教学基本设施情况",children:[
	                                                   	{name:"3.2.1 教学行政用房情况",url:"ASDS_table3-2-1"},
	                                                   	{name:"3.2.2 教学、科研仪器情况",url:"ASDS_table3-2-2"},
	                                                   	{name:"3.2.3 本科实验、实习、实训场所情况",url:"ASDS_table3-2-3"},
	                                                   	{name:"3.2.4 校园网、图书情况",url:"ASDS_table3-2-4"},
	                                                   ]},
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
/*function eventBind(){
//	console.log($("#tab div").get(0));
	var objs=$("#tab div");
	objs[0].click=function(){
		alert(0);
	};
	objs[0].click=function(){
		alert(1);
	};
	objs[0].click=function(){
		alert(2);
	};
	objs[0].click=function(){
		alert(3);
	};
	$("#tab div").get(1).bind("click",{num:1},clickTab);
	$("#tab div").get(2).bind("click",{num:2},clickTab);
	$("#tab div").get(3).bind("click",{num:3},clickTab);
	$("#tab div").get(0).click(function(){
		alert(0);
	});
	$("#tab div").get(1).click(function(){
		alert(1);
	});
	$("#tab div").get(2).click(function(){
		alert(2);
	});
	$("#tab div").get(3).click(function(){
		alert(3);
	});
}*/
function clickTab(num){
//	$("tab div")
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	$("#tab div:eq(0)").css("background-color","#034783");
	$("#tab div:eq(1)").css("background-color","#034783");
	$("#tab div:eq(2)").css("background-color","#034783");
	$("#tab div:eq(3)").css("background-color","#034783");
	if(num==0){
		var appendStr="<div><a href='javascript:void(0)'";
	
		array=[{id:"1",name:"专家反馈报告",
			   children:[],url:"/audit/page/zenith/staticPage/captain.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&state=selfer&readRole=2"
				}];
		$('#content').tendina('destroy');
		$("#dataReport").html($("#tab div:eq(0)").html());
		$("#tab div:eq(0)").css("background-color","#46A3D1");
		ASDSReportInit();
		$('.li1').attr('class','li1 mySelect');
		iframeTab("/audit/page/zenith/staticPage/captain.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&state=selfer&readRole=2");
		$("#content").append(appendStr)
	}else if(num==1){
		/*array=[{id:"1",name:"专业情况概要",
			   children:[
			             {id:"1",name:"  专业情况概要_1",url:"../page_1"},
			             {id:"1",name:"  专业情况概要_2",url:""},
			             {id:"1",name:"  专业情况概要_3",url:""},
			             {id:"1",name:"  专业情况概要_4",url:""}
			             ]
				}];*/
		$("#tab div:eq(1)").css("background-color","#46A3D1");
		$("#dataReport").html("专业质量报告");
		$('#content').tendina('destroy');
		itemId = 2;
		load(num);
		getTaskInfo();
		if(taskInfo!=null&&taskInfo.length>0){
			if(taskInfo[0].audit_zt!=null&&taskInfo[0].audit_zt==1){
				$("#tab div:eq(1)").html("专业质量报告<span style='color:red'>(院审核已通过)</span>")
			}
		}
		var specialtyId = $("#specialtyId").val();
		var dateYear = $("#dateYear").val();
		var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
		//appendStr+="<a href='javascript:void(0)' onclick=\"iframeTab('page_0',0)\"><img src='/audit/page/zenith/staticPage/img/uploadAndLook.png' style='margin-top:2%'/><br/></a>"
		 appendStr+="<a href='javascript:void(0)' onclick='allLook()' ><img src='/audit/page/zenith/staticPage/img/readAll.png' style='margin-top:2%'></a></div>";
		
		$("#content").append(appendStr);
		$(".li1:eq(1)").attr("class","li1 selected")
		$(".li1>a:eq(1)").addClass("arrow_down");
		$("ul").show();
	
	}else if(num==2){
		
		array=[{id:"1",name:"专业整改计划",url:"../RecPlan"
				}];
		$("#dataReport").html("专业整改计划");
		$("#tab div:eq(2)").css("background-color","#46A3D1");
		$('#content').tendina('destroy');
		ASDSReportInit();
		iframeTab("../RecPlan");
		$(".li1:eq(0)").attr("class","li1 mySelect")
	}else if(num==3){
		
		array=[{id:"1",name:"专家反馈报告",url:"/audit/page/zenith/staticPage/captain.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&state=selfer"}];
		$("#dataReport").html("专家反馈报告");
		$("#tab div:eq(3)").css("background-color","#46A3D1");
		$('#content').tendina('destroy');
		ASDSReportInit();
		iframeTab("/audit/page/zenith/staticPage/captain.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&state=selfer");
		$(".li1:eq(0)").attr("class","li1 mySelect")
	}
}


function logout(){
	window.location.href="/logout";
}

