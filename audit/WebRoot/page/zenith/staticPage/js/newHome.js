
$(function(){
	//ASDSReportInit();
	validateLogin();
	// 初始化
	divCss();
	arrowInit();
	//clickTab(0);
	getAllData();
//	eventBind();
	//load();
	clickTab(0);
	//alert(zylxId);
	if(zylxId=="1"){
		$("#dynamic").text("学院评估");
		document.title="学院评估";
	}else if(zylxId=="4"){
		$("#dynamic").text("课程评估");
		document.title="课程评估";
	}else if(zylxId=="5"){
		$("#dynamic").text("专业评估");
		document.title="专业评估";
	}
});
function divCss(){
	var iWidth = document.documentElement.clientWidth;
	var iHeight = document.documentElement.clientHeight;
	$("#div1").width(iWidth).height(iHeight);
	//zylxId=$("#zylxId").val();
	
}

var request =GetRequest();
var zylxId=request.zylxId;
var zyId=request.zyId;
var taskInfo;
var sContentPath = getContentPath();
var is_Engineering;
var dateReport;
var itemId;
var isTeamer = 0;
var ssid;

//记录第一次值，做左边树的初始化
var oneID;
var oneURL;
var oneindex=0;
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
}

/*function getTaskInfo(){
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
}*/

function getInspectSysInfo(){
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var type=3;
	if(is_Engineering==2){
		type=4;
	}
	array=[];
	$.ajax({
		url:sContentPath+"/assessInspect/getInspectSysInfo.do",
		type:'POST',
		async:false,
		/*data:{"stype":type},*/
		data:{"stype":is_Engineering},
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			var array1 = []
			ssid = 	datas[1].ID;
			for ( var i = 0; i < datas.length; i++) {
				var obj = new Object();
				if(datas[i].LEVEL==2){
					obj.id = datas[i].ID;
					obj.parentId = datas[i].PARENT_ID;
					obj.name = datas[i].SYSTEM_NAME;
					obj.url="inspect1";
					array1.push(obj);
				}
			}	
			for ( var i = 0; i < datas.length; i++) {
				var obj = new Object();
				if(datas[i].LEVEL==1){
					if(array1.length>0){
						if(datas[i].ID == array1[0].parentId){
							obj.id = datas[i].ID;
							obj.name = datas[i].SYSTEM_NAME;
							obj.children = array1;
							array.push(obj);
						}else{
							obj.id = datas[i].ID;
							obj.name = datas[i].SYSTEM_NAME;
							obj.children = [];
							obj.url="inspect1";
							if(datas[i].SYSTEM_NAME=="听课看课表"){
								obj.url="/audit/page/xianchangkaocha/listenClass.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&zylxId="+zylxId+"&zyId="+zyId;
							}else if(datas[i].SYSTEM_NAME=="现场考察工作记录表"){
								obj.url="inspect2";
							}else if(datas[i].SYSTEM_NAME=="学生毕业论文(设计)情况表"){
								obj.url="inspect3";
							}else if(datas[i].SYSTEM_NAME=="试卷评价表"){
								obj.url="/audit/page/xianchangkaocha/shiJuanInfo.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&zylxId="+zylxId+"&zyId="+zyId;
							}
							array.push(obj);
						}
					}else{
						obj.id = datas[i].ID;
						obj.name = datas[i].SYSTEM_NAME;
						obj.children = [];
						obj.url="inspect1";
						if(datas[i].SYSTEM_NAME=="听课看课表"){
							obj.url="/audit/page/xianchangkaocha/listenClass.jsp";
						}else if(datas[i].SYSTEM_NAME=="现场考察工作记录表"){
							obj.url="inspect2";
						}else if(datas[i].SYSTEM_NAME=="学生毕业论文(设计)情况表"){
							obj.url="inspect3";
						}else if(datas[i].SYSTEM_NAME=="试卷评价表"){
							obj.url="/audit/page/xianchangkaocha/shiJuanInfo.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&zylxId="+zylxId+"&zyId="+zyId;
						}
						array.push(obj);
					}
				}
			}
			
		}
	});
}
function getAllData(){
	var specialtyId = $("#specialtyId").val();
	$.ajax({
		url: sContentPath+"/assessInspect/getAllData.do",
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
				//$("#tab div:eq(2)").html("Self-Report");
				if(datas[0].is_rz==2){
					$("#tab div:eq(3)").hide();
					
					clickTab(0);
				}else if(datas[0].is_rz==1){
					$("#tab div:eq(3)").show();
					//$("#tab div:eq(2)").html("整改报告");
					clickTab(0);
				}else if(datas[0].is_rz==3){
					$("#tab div:eq(3)").show();
					//$("#tab div:eq(2)").hide();
					clickTab(0);
				}
				var date = new Date();
				var dates	= datas[0].site_visits;
				var nowDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
				if(Date.parse(dates.split("~")[0])<=Date.parse(nowDate)&&Date.parse(nowDate)<=Date.parse(dates.split("~")[1])){
					var date1 = new Date(dates.split("~")[1]);
					var date2 = new Date(nowDate);
					var date3 = date1.getTime()-date2.getTime();
					var days=Math.floor(date3/(24*3600*1000));
					if(parseInt(days)<=20){
						$("#warningData").html("距离考察任务结束还有"+days+"天");
						$("#loading").show();
						setTimeout(function(){
							$("#loading").hide();
						},2000);
					}
				}
			}
		}
	});
	$.ajax({
		url:sContentPath+"/assessInspect/getRole.do",
		type:'POST',
		dataType:'json',
		data:{"specialtyId":specialtyId},
		async:false,
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=null&&datas.length>0){
				var m = 0;
				for ( var i = 0; i < datas.length; i++) {
					if(datas[i].assess_type==5){
						m++;
					}
				}
				if(m>0){
					isTeamer =1;
				}
			}
		}
	});
}
var array3=[];
function load(num){
	var parentData;
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
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
		url:"/audit/asAssessReport/getSystemSonByType.do",
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
							//childrens.push({id:datas[j].id,name:datas[j].system_name,url:"/audit/page/wangping/staticPage/Zjzl.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear})
								childrens.push({id:datas[j].id,name:datas[j].system_name,url:"/audit/page/zenith/staticPage/inspect1.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&sid="+datas[j].id})
								/*if(j==0){
									alert(oneId);
									oneId=datas[j].id;
									}*/
							}
							if(i==0&&j==3){
								oneId=datas[j].id;
							}
						}
						if(childrens.length==0){
							obj.url=	"/audit/page/zenith/staticPage/inspect1.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&sid="+oneId+"&zylxId="+zylxId;
						}else{
							obj.children = childrens;	
						}
						array.push(obj);
						//iframeTab("/audit/page/wangping/staticPage/Zjzl.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear,oneId);
					}
				}
			}
		}
	});
	
	$.ajax({
		url:"/audit/asAssessReport/getSystemThreeByType.do",
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
							   obj.url = "/audit/page/zenith/staticPage/inspect1.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&sid="+oneId+"&zylxId="+zylxId;;
							   if(doc.id==datas[i].parent_id){
								   array3.push(obj);
							   }
						   }
						   doc.children = array3;
					   })
				   }
			   })	
		   }
		   ASDSReportInit();
		}
	});
	//alert(oneURL,oneID);
	//iframeTab(oneURL,oneID);
}
/**
 * 初始化各类东西
 */
function ASDSReportInit(){
	//alert("我是初始化"+oneindex);
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
			str += "<li class='li1 selected' ><a id='deepest' href='javascript:void(0);'";
		}else{
			str += "<li  class='li1 selected' ><a class='arrow_down' href='javascript:void(0);'";
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
					if(j==0){
							ssid=obj2.id;
						}
						str += "<li class='li2'><a href='javascript:void(0);'";
					if(obj2.url!=null){
						
						str += " onclick=iframeTab('"+obj2.url+"',"+obj2.id+",this)";
					}
				    str += ">"+ obj2.name +"</a>";
				    
					// 三级菜单
					if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
						str += "<ul>";
						$.each(obj2.children,function(k,obj3){
							if(obj3!=undefined){
								str += "<li class='li3'><a href='javascript:void(0);'";
								if(obj3.url != null){
									str += " onclick=iframeTab('"+obj3.url+"',"+obj3.id+",this)";
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
	/*var name=decodeURI(theRequest.name);
	name=name.split("'");
	$("#text").html(name[1]);*/
	return theRequest; 
	
}	





// 内嵌页面跳转
function iframeTab(url,id,obj){
	 $("#content ul li").children().each(function(i,objs){
		 $(objs).css("background","black"); 
		// alert($(objs).html());
	 });
	 if(obj!=undefined&&obj!=null){
		 $(obj).css("background","#0080FF"); 
	 }
	var iframe=$("#tempIframe");
	var path=$("#tempIframe").attr("src");
	var array=path.split("page");
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var path=""
	if(url.length>20){
		path =url;
		if(id!=null&&id!=""&&id!=undefined){
			path += "&sid="+id+"&zylxId="+zylxId;
		}
	}else{
		 path="/audit/page/zenith/staticPage/"+url+".jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&sid="+id+"&zylxId="+zylxId+"&zyId="+zyId;
	}
	iframe.attr("src",path);
	if(indexs==-1){
		indexs=0;
		$("#content li ul .li1:eq(0) a:eq(0)").attr("style","background: #0080FF none repeat scroll 0% 0%;");
	}
}
var indexs=-1;
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
	if(document.getElementById("down").style.display=="none"){
		document.getElementById("down").style.display = "block";
		document.getElementById("middle").style.display = "block";
		document.getElementById("left").style.height="100%";
		document.getElementById("upper").style.height="10%";
		document.getElementById("main").style.margin="0"
	}
	if(num==0){
		$('#content').tendina('destroy');
		$("#dataReport").html($("#tab div:eq(0)").html());
		$("#tab div:eq(0)").css("background-color","#46A3D1");
		getInspectSysInfo();
		//ASDSReportInit();
		load(2);
		//getTaskInfo();
		$('.li2:eq(0)').attr('class','li1 mySelect');
		$("ul").show();
		iframeTab('inspect1',oneId);
		$(".li1:eq(0)").attr("class","li1 selected")
		$(".li1>a:eq(0)").addClass("arrow_down");
		
		var appendStr="<div><a href='javascript:void(0)' onclick='allLook()'><img src='/audit/page/zenith/staticPage/img/readAll.png' style='margin-top:10%'/></a></div>";
		$("#content").append(appendStr)
	}else if(num==1){
	if(isTeamer==1){
		array=[{id:"1",name:"现场考查工作记录表",url:"inspect2"},
				{id:"1",name:"听课看课表",url:"/audit/page/xianchangkaocha/listenClass.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear},
				{id:"1",name:"学生毕业论文(设计)情况表",url:"inspect3"},
				{id:"1",name:"试卷评价表",url:"/audit/page/xianchangkaocha/shiJuanInfo.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear},
				{id:"1",name:"专家组考察报告",url:"captain"}];
	}else{
		array=[{id:"1",name:"现场考查工作记录表",url:"inspect2"},
				{id:"1",name:"听课看课表",url:"/audit/page/xianchangkaocha/listenClass.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear},
				{id:"1",name:"学生毕业论文(设计)情况表",url:"inspect3"},
				{id:"1",name:"试卷评价表",url:"/audit/page/xianchangkaocha/shiJuanInfo.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear}];
	}
		
		$("#tab div:eq(1)").css("background-color","#46A3D1");
		$("#dataReport").html($("#tab div:eq(1)").html());
		$('#content').tendina('destroy');
		itemId = 2;
		ASDSReportInit();
		//getTaskInfo();
		iframeTab("inspect2");
		$(".li1:eq(0)").attr("class","li1 mySelect")
		/*var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
	
		$("#content").append(appendStr);*/
	
		
	}else if(num==2){
	
		itemId = 1;
		array=[{id:"1",name:$("#tab div:eq(2)").html(),
			   children:[],url:"/audit/page/wangping/staticPage/ZJzg.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear
				}];
		//$("#tab div:eq(2)").html("整改报告");
		$("#dataReport").html($("#tab div:eq(2)").html());
		$('#content').tendina('destroy');
		$("#tab div:eq(2)").css("background-color","#46A3D1");
		ASDSReportInit();
		$('.li1').attr('class','li1 mySelect');
		iframeTab("/audit/page/wangping/staticPage/ZJzg.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear);
	}else if(num==3){
		$("#tab div:eq(3)").css("background-color","#46A3D1");
		$("#dataReport").html("专业质量报告");
		$('#content').tendina('destroy');
		itemId = 2;
		//load(num);
		array=[{id:"1",name:"全文预览",
			   children:[],url:"/audit/page/wangping/staticPage/ZJPower.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear
				}];
		ASDSReportInit();
		$('.li1').attr('class','li1 mySelect');
		iframeTab("/audit/page/wangping/staticPage/ZJPower.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear);
	}
	
}

function insertTaskInfo(item){
	
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var date = new Date();
	var nowDate = parseInt(date.getFullYear());
	var dates = dateReport.split("~");
	var nowDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
	if(taskInfo.length==0){
		if(Date.parse(dates[0])<=Date.parse(nowDate)<=Date.parse(dates[1])){
			$.ajax({
				url :sContentPath+"/asAssessReport/insertTaskInfo.do",
				data:{
					"item":item,
					"specialtyId":specialtyId,
					"dateYear":dateYear
				},
				async:false,
				type:'POST',
				success:function(data){
					alert(data);
					//getTaskInfo();
				}
				
			});
			
		}else{
			alert("当前时间不在任务时间内");
		}
		
	}else{
		 if(taskInfo[0].self_assess_zt==2){
			 if(Date.parse(dates[0])<=Date.parse(nowDate)<=Date.parse(dates[1])){
				 
				 $.ajax({
						url :sContentPath+"/asAssessReport/updateTaskInfo.do",
						data:{
							"id":taskInfo[0].id
						},
						async:false,
						type:'POST',
						success:function(data){
							alert(data);
							//getTaskInfo();
						}
						
					});
				}else{
					alert("当前时间不在任务时间内");
				}
		}else{
			alert("自评人已提交审核");
		}
	}
}

function logout(){
	window.location.href="/logout";
}

function allLook(){
	//alert($("#zylxId").val());
	var iframe=$("#tempIframe");
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var path = "/audit/page/zenith/staticPage/inspect4.jsp?specialtyId="+specialtyId+"&dateYear="+dateYear+"&zylxId="+zylxId;
	iframe.attr("src",path);
	$("#content").attr("class","dropdown tendina");
}

function allLooks(){
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var zongyijian=$("#zongyijian").val();
	//alert(zongyijian);
}


