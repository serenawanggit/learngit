$(function(){
	validateLogin();
	// 初始化
	ReportInit();
});

/**
 * 初始化各类东西
 */
function ReportInit(){
	//初始化菜单
	var str = "";
	$.each(array,function(i,obj){
		if(i==0){
			str += "<li><a id='deepest' href='javascript:void(0);'";
		}else{
			str += "<li><a href='javascript:void(0);'";
		}
		if(obj.url != null){
			str += "onclick=iframeTab('"+obj.url+"')";
		}
		str += " >"+obj.name+"</a>";
		// 二级菜单
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str += "<ul>";
			$.each(obj.children,function(j,obj2){
				str += "<li><a href='javascript:void(0);'";
				if(obj2.url != null){
					str += " onclick=iframeTab('"+obj2.url+"')";
				}
				str += ">"+ obj2.name +"</a>";
				// 三级菜单
				if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
					str += "<ul>";
					$.each(obj2.children,function(k,obj3){
						str += "<li><a href='javascript:void(0);'";
						if(obj3.url != null){
							str += " onclick=iframeTab('"+obj3.url+"')";
						}
						str += ">"+ obj3.name +"</a>";
					})
					str += "</ul>";
				}
			})
			str += "</ul>";
		}
		str += "</li>";
	});
	$("#asdsNav").html(str);
	
	// 菜单初始化
	$('.dropdown').tendina({
        // This is a setup made only
        // to show which options you can use,
        // it doesn't actually make sense!
        animate: true,
        speed: 500,
        onHover: false,
        hoverDelay: 300,
        activeMenu: $('#deepest')
//        openCallback: function(clickedEl) {
//        },
//        closeCallback: function(clickedEl) {
//        }
  });
}

// 内嵌页面跳转
function iframeTab(url){
	window.location.hash = url;
}

$(function(){ 
	//获取要定位元素距离浏览器顶部的距离
	var navH = $(".asds_left").offset().top;
	//滚动条事件
	$(window).scroll(function(){
	//获取滚动条的滑动距离
	var scroH = $(this).scrollTop();
	//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
	if(scroH>=navH){
	$(".asds_left").css({"position":"fixed","top":0,"width":"17%"});
	}else if(scroH<navH){
	$(".asds_left").css({"position":"static"});
	}
	})
});

//菜单对象
var array=[
   	/* 主表 */
   {id:"0",name:"封面及说明",
	   children:[{id:"1",name:"封面",url:"face"},
	             {id:"1",name:"说明",url:"explain"}]},
   {id:"1",name:"一、专业概况",url:"table1"},
   {id:"2",name:"二、专业基本状态数据表", children:[
                {id:"1",name:"1.师资队伍",url:"table2-1"},
	            {id:"1",name:"2.在校生情况",url:"table2-2"},
	            {id:"1",name:"3.本专业带头人基本情况",url:"table2-3"},
	            {id:"1",name:"4.教学和科学研究",children:[
                     {id:"1",name:"4.1近三年本专业教师的教学研究论文（限填6篇）",url:"table2-4-1"},
                     {id:"1",name:"4.2近三年本专业教师的科研论文",url:"table2-4-2"},
                     {id:"1",name:"4.3近三年本专业教师的教学、科研获奖情况（论文、专利、专著、鉴定、获奖等，限填10项）",url:"table2-4-3"} ]},
	            {id:"1",name:"5.主要建设成效",children:[
                     {id:"1",name:"5.1近三年本专业获国家级、市级和校级精品课程、重点课程建设情况",url:"table2-5-1"},
                     {id:"1",name:"5.2近二届（2005、2009）三年本专业获省部级及以上优秀教学成果、近三年教材奖及“质量工程”项目情况",url:"table2-5-2"},
                     {id:"1",name:"5.3近三年本专业出版本科教学用教材及参考书情况",url:"table2-5-3"},
                     {id:"1",name:"5.4近三年本专业学生国际交流情况",url:"table2-5-4"},
                     {id:"1",name:"5.5近三年本专业学生一志愿录取率",url:"table2-5-5"},
                     {id:"1",name:"5.6近三年本专业毕业生就业率",url:"table2-5-6"}]},
		         {id:"1",name:"6.基本办学条件",children:[
                     {id:"1",name:"6.1本专业开设的主要实践环节（包括独立开设的实验课及实习）",url:"table2-6-1"},
                     {id:"1",name:"6.2本专业开设的主要实验",url:"table2-6-2"},
                     {id:"1",name:"6.3校外实习实践基地（限填5项，有固定合作关系）",url:"table2-6-3"},
                     {id:"1",name:"6.4图书资源概况 ",url:"table2-6-4"},
                     {id:"1",name:"6.5近三年专业办学经费",url:"table2-6-5"}]}
	]},
	{id:"3",name:"三、其他实证材料（另附）",children:[
         {id:"1",name:"1.专业培养方案",url:"table3"},
         {id:"1",name:"2.最新一届在校生主干专业课程教学大纲",url:"table3"},
         {id:"1",name:"3.最新一届毕业设计（论文）情况表（格式附后）",url:"table3"}]},
   {id:"4",name:"四、教学管理和质量保障体系（300-500字）",url:"table4"},
   {id:"5",name:"五、单位审核意见",url:"table5"}
];


function getUserGroup(year){
	$.ajax({
		url:"/audit/self/getUserGroup.do",
		data : "year="+year,
		type : "post",
		dataType : "json",
		async:"false",
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			var list = data.data;
			$("#orgList").html("");
			for ( var i = 0; i < list.length; i++) {
				var org = list[i];
				var html = "<option value='"+org.academy_id+"'>"+org.academy_name+"</option>";
				$("#orgList").append(html);
			}
			getSpecialty(year);
			//设置年份
			document.cookie="assessYear="+year+";path=/";
		}
	});
}

//专业
var specialtys = new Array();
function getSpecialty(year){
	if(year == null){
		year =$("#yearList").val();
	}
	var org = $("#orgList").val();
     $.ajax({
           url:"/audit/self/getAssessSpecialty.do",
	   	   data : {
				year : year,
				orgId : org
	   	   },
           type : "post",
           dataType : "json",
           async:"false",
           error:function(){
                 alert("网络异常，请重试");
           },
           success:function(dataString){
                var data = eval("("+dataString+")");

                //专业
                var specialtyList = data.data.specialtyList;
                var html ="";
                $("#specialtyList").html("");
                for(var i=0;i<specialtyList.length;i++){
                     var specialty = specialtyList[i];
                     specialtys.push(specialty);
                     html ="<option class='main-top-option-one' value='"+specialty.id+"'>"+specialty.specialty_name+"</option>";
                     $("#specialtyList").append(html);
                }
                //年份
    			var infoList = data.data.infoList;
    			html ="";
    			$("#yearList").html("");
    			for(var i=0;i<infoList.length;i++){
    				var info = infoList[i];
    				if(info.accessYear == year){
    					html ="<option class='main-top-option-two' value='"+info.accessYear+"' selected='selected'>"+info.accessYear+"</option>";
    				}else{
    					html ="<option class='main-top-option-two' value='"+info.accessYear+"'>"+info.accessYear+"</option>";
    				}
    				$("#yearList").append(html);
    			}
    			
    			getAllVersion();
           }
     });
}

function getAllVersion(){
	var specialtyId = $("#specialtyList").val();
	var year = $("#yearList").val();
	$.ajax({
        url:"/audit/self/getAllVersion.do",
	   	   data : {
	   		   accessSpecialtyId : specialtyId,
	   		   year : year
	   	   },
        type : "post",
        dataType : "json",
        async:"false",
        error:function(){
              alert("网络异常，请重试");
        },
        success:function(dataString){
        	var data = eval("("+dataString+")");
        	$("#versionList").html("");
        	if(data.ok){
        		var list = data.data;
        		
        		var times = [];
        		
        		for ( var i = 0; i < list.length; i++) {
					var record = list[i];
					var saveTime = record.saveTime;
					var date = new Date(saveTime.time);
					var str = date.Format("yyyy-MM-dd");
					
					var flag = false;
					for ( var j = 0; j < times.length; j++) {
						if(times[j].str == str){
							str = str+"("+times[j].num+")";
							times[j].num += parseInt(1);
							flag = true;
						}
					}
					if(!flag){
						var time = {};
						time.str = str;
						time.num = 1;
						times.push(time);
					}
					
					html ="<option class='main-top-option-one' value='"+record.id+"'>"+str+"</option>";
                    $("#versionList").append(html);
				}
        		getAllData();
        	}else{
        		html ="<option class='main-top-option-one' value=''>暂无</option>";
                $("#versionList").append(html);
                getAllData();
        	}
        	
        }
   });
}

//对Date的扩展，将 Date 转化为指定格式的String   
//月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，   
//年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)   
//例子：   
//(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423   
//(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18   
Date.prototype.Format = function(fmt){ //author: meizz   
	var o = {   
	 "M+" : this.getMonth()+1,                 //月份   
	 "d+" : this.getDate(),                    //日   
	 "h+" : this.getHours(),                   //小时   
	 "m+" : this.getMinutes(),                 //分   
	 "s+" : this.getSeconds(),                 //秒   
	 "q+" : Math.floor((this.getMonth()+3)/3), //季度   
	 "S"  : this.getMilliseconds()             //毫秒   
	};   
	if(/(y+)/.test(fmt))   
	 fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
	for(var k in o)   
	 if(new RegExp("("+ k +")").test(fmt))   
	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
	return fmt;   
}  


function getAllData(){
	var versionId = $("#versionList").val();
	if(versionId == ""){
		var inputs = $(".box input");
		for ( var i = 0; i < inputs.length; i++) {
			if(inputs[i].type == "text"){
				$(inputs[i]).val("");
			}
		}
		$("#face_gz").val("(公章)");
		var textareas = $(".box textarea");
		for ( var i = 0; i < textareas.length; i++) {
			$(textareas[i]).val("");
		}
		$("#tbody2_4_1").html("");
		$("#tbody2_4_3").html("");
		$("#tbody2_5_1").html("");
		$("#tbody2_5_2").html("");
		$("#tbody2_5_3").html("");
		$("#tbody2_5_4").html("");
		$("#tbody2_6_1").html("");
		$("#tbody2_6_2").html("");
		$("#tbody2_6_3").html("");
		return;
	}
	$.ajax({
        url:"/audit/self/getProfileDataDetail.do",
	   	   data : {
	   		versionId : versionId,
	   	   },
        type : "post",
        dataType : "json",
        async:"false",
        error:function(){
              alert("网络异常，请重试");
        },
        success:function(dataString){
        	var data = eval("("+dataString+")");
        	if(!data.ok){
        		var inputs = $(".box input");
        		for ( var i = 0; i < inputs.length; i++) {
					if(inputs[i].type == "text"){
						$(inputs[i]).val("");
					}
				}
        		$("#face_gz").val("(公章)");
        		var textareas = $(".box textarea");
        		for ( var i = 0; i < textareas.length; i++) {
					$(textareas[i]).val("");
				}
        		$("#tbody2_4_1").html("");
        		$("#tbody2_4_3").html("");
        		$("#tbody2_5_1").html("");
        		$("#tbody2_5_2").html("");
        		$("#tbody2_5_3").html("");
        		$("#tbody2_5_4").html("");
        		$("#tbody2_6_1").html("");
        		$("#tbody2_6_2").html("");
        		$("#tbody2_6_3").html("");

        		return;
        	}
        	var list = data.data;
        	for ( var i = 0; i < list.length; i++) {
				var record = list[i];
				var sqlData = record.data;
				switch(record.title){
	        		case "face" :
	        			$("#face_dw").val(sqlData.face_dw);
	        			$("#face_type").val(sqlData.face_type);
	        			$("#face_code").val(sqlData.face_code);
	        			$("#face_name").val(sqlData.face_name);
	        			$("#face_year").val(sqlData.face_year);
	        			$("#face_month").val(sqlData.face_month);
	        			$("#face_day").val(sqlData.face_day);
	        			$("#face_year2").val(sqlData.face_year2);
	        			$("#face_month2").val(sqlData.face_month2);
	        			continue;
	        		case "table1":
	        			$("#table1_res1").val(sqlData.res1);
	        			$("#table1_res2").val(sqlData.res2);
	        			$("#table1_res3").val(sqlData.res3);
	        			$("#table1_res4").val(sqlData.res4);
	        			$("#table1_res5").val(sqlData.res5);
	        			$("#table1_res6").val(sqlData.res6);
	        			continue;
	        		case "table2_1":
	        			$("#table2_1_res1").val(sqlData.res1);
	        			$("#table2_1_res2").val(sqlData.res2);
	        			$("#table2_1_res3").val(sqlData.res3);
	        			$("#table2_1_res4").val(sqlData.res4);
	        			$("#table2_1_res5").val(sqlData.res5);
	        			$("#table2_1_res6").val(sqlData.res6);
	        			$("#table2_1_res7").val(sqlData.res7);
	        			$("#table2_1_res8").val(sqlData.res8);
	        			$("#table2_1_res9").val(sqlData.res9);
	        			$("#table2_1_res10").val(sqlData.res10);
	        			$("#table2_1_res11").val(sqlData.res11);
	        			$("#table2_1_res12").val(sqlData.res12);
	        			$("#table2_1_res13").val(sqlData.res13);
	        			$("#table2_1_res14").val(sqlData.res14);
	        			$("#table2_1_res15").val(sqlData.res15);
	        			$("#table2_1_res16").val(sqlData.res16);
	        			$("#table2_1_res17").val(sqlData.res17);
	        			$("#table2_1_res18").val(sqlData.res18);
	        			$("#table2_1_res19").val(sqlData.res19);
	        			$("#table2_1_res20").val(sqlData.res20);
	        			$("#table2_1_res21").val(sqlData.res21);
	        			$("#table2_1_res22").val(sqlData.res22);
	        			$("#table2_1_res23").val(sqlData.res23);
	        			$("#table2_1_res24").val(sqlData.res24);
	        			$("#table2_1_res25").val(sqlData.res25);
	        			$("#table2_1_res26").val(sqlData.res26);
	        			$("#table2_1_res27").val(sqlData.res27);
	        			$("#table2_1_res28").val(sqlData.res28);
	        			$("#table2_1_res29").val(sqlData.res29);
	        			$("#table2_1_res30").val(sqlData.res30);
	        			$("#table2_1_res31").val(sqlData.res31);
	        			$("#table2_1_res32").val(sqlData.res32);
	        			$("#table2_1_res33").val(sqlData.res33);
	        			$("#table2_1_res34").val(sqlData.res34);
	        			$("#table2_1_res35").val(sqlData.res35);
	        			$("#table2_1_res36").val(sqlData.res36);
	        			$("#table2_1_res37").val(sqlData.res37);
	        			$("#table2_1_res38").val(sqlData.res38);
	        			$("#table2_1_res39").val(sqlData.res39);
	        			$("#table2_1_res40").val(sqlData.res40);
	        			$("#table2_1_res41").val(sqlData.res41);
	        			$("#table2_1_res42").val(sqlData.res42);
	        			$("#table2_1_res43").val(sqlData.res43 );
	        			$("#table2_1_res44").val(sqlData.res44);
	        			$("#table2_1_res45").val(sqlData.res45);
	        			$("#table2_1_res46").val(sqlData.res46);
	        			$("#table2_1_res47").val(sqlData.res47);
	        			$("#table2_1_res48").val(sqlData.res48);
	        			$("#table2_1_res49").val(sqlData.res49);
	        			$("#table2_1_res50").val(sqlData.res50);
	        			$("#table2_1_res51").val(sqlData.res51);
	        			$("#table2_1_res52").val(sqlData.res52);
	        			$("#table2_1_res53").val(sqlData.res53);
	        			$("#table2_1_res54").val(sqlData.res54);
	        			$("#table2_1_res55").val(sqlData.res55);
	        			$("#table2_1_res56").val(sqlData.res56);
	        			$("#table2_1_res57").val(sqlData.res57);
	        			$("#table2_1_res58").val(sqlData.res58);
	        			$("#table2_1_res59").val(sqlData.res59);
	        			$("#table2_1_res60").val(sqlData.res60);
	        			$("#table2_1_res61").val(sqlData.res61);
	        			$("#table2_1_res62").val(sqlData.res62);
	        			$("#table2_1_res63").val(sqlData.res63);
	        			$("#table2_1_res64").val(sqlData.res64);
	        			$("#table2_1_res65").val(sqlData.res65);
	        			$("#table2_1_res66").val(sqlData.res66);
	        			$("#table2_1_res67").val(sqlData.res67);
	        			$("#table2_1_res68").val(sqlData.res68);
	        			$("#table2_1_res69").val(sqlData.res69);
	        			$("#table2_1_res70").val(sqlData.res70);
	        			$("#table2_1_res71").val(sqlData.res71);
	        			$("#table2_1_res72").val(sqlData.res72);
	        			$("#table2_1_res73").val(sqlData.res73);
	        			$("#table2_1_res74").val(sqlData.res74);
	        			$("#table2_1_res75").val(sqlData.res75);
	        			$("#table2_1_res76").val(sqlData.res76);
	        			$("#table2_1_res77").val(sqlData.res77);
	        			$("#table2_1_res78").val(sqlData.res78);
	        			$("#table2_1_res79").val(sqlData.res79);
	        			$("#table2_1_res80").val(sqlData.res80);
	        			$("#table2_1_res81").val(sqlData.res81);
	        			$("#table2_1_res82").val(sqlData.res82);
	        			$("#table2_1_res83").val(sqlData.res83);
	        			continue;
	        		case "table2_2" :
	        			$("#table2_2_res1").val(sqlData.res1);
	        			$("#table2_2_res2").val(sqlData.res2);
	        			$("#table2_2_res3").val(sqlData.res3);
	        			$("#table2_2_res4").val(sqlData.res4);
	        			$("#table2_2_res5").val(sqlData.res5);
	        			$("#table2_2_res6").val(sqlData.res6);
	        			$("#table2_2_res7").val(sqlData.res7);
	        			$("#table2_2_res8").val(sqlData.res8);
	        			$("#table2_2_res9").val(sqlData.res9);
	        			$("#table2_2_res10").val(sqlData.res10);
	        			$("#table2_2_res11").val(sqlData.res11);
	        			$("#table2_2_res12").val(sqlData.res12);
	        			$("#table2_2_res13").val(sqlData.res13);
	        			$("#table2_2_res14").val(sqlData.res14);
	        			$("#table2_2_res15").val(sqlData.res15);
	        			continue;
	        		case "table2_3" :
	        			$("#table2_3_res1").val(sqlData.res1);
	        			$("#table2_3_res2").val(sqlData.res2);
	        			$("#table2_3_res3").val(sqlData.res3);
	        			$("#table2_3_res4").val(sqlData.res4);
	        			$("#table2_3_res5").val(sqlData.res5);
	        			$("#table2_3_res6").val(sqlData.res6);
	        			$("#table2_3_res7").val(sqlData.res7);
	        			$("#table2_3_res8").val(sqlData.res8);
	        			$("#table2_3_res9").val(sqlData.res9);
	        			$("#table2_3_res10").val(sqlData.res10);
	        			$("#table2_3_res11").val(sqlData.res11);
	        			$("#table2_3_res12").val(sqlData.res12);
	        			$("#table2_3_res13").val(sqlData.res13);
	        			$("#table2_3_res14").val(sqlData.res14);
	        			$("#table2_3_res15").val(sqlData.res15);
	        			$("#table2_3_res16").val(sqlData.res16);
	        			$("#table2_3_res17").val(sqlData.res17);
	        			$("#table2_3_res18").val(sqlData.res18);
	        			$("#table2_3_res19").val(sqlData.res19);
	        			$("#table2_3_res20").val(sqlData.res20);
	        			$("#table2_3_res21").val(sqlData.res21);
	        			$("#table2_3_res22").val(sqlData.res22);
	        			$("#table2_3_res23").val(sqlData.res23);
	        			$("#table2_3_res24").val(sqlData.res24);
	        			$("#table2_3_res25").val(sqlData.res25);
	        			$("#table2_3_res26").val(sqlData.res26);
	        			$("#table2_3_res27").val(sqlData.res27);
	        			$("#table2_3_res28").val(sqlData.res28);
	        			$("#table2_3_res29").val(sqlData.res29);
	        			$("#table2_3_res30").val(sqlData.res30);
	        			$("#table2_3_res31").val(sqlData.res31);
	        			$("#table2_3_res32").val(sqlData.res32);
	        			$("#table2_3_res33").val(sqlData.res33);
	        			$("#table2_3_res34").val(sqlData.res34);
	        			$("#table2_3_res35").val(sqlData.res35);
	        			$("#table2_3_res36").val(sqlData.res36);
	        			$("#table2_3_res37").val(sqlData.res37);
	        			$("#table2_3_res38").val(sqlData.res38);
	        			$("#table2_3_res39").val(sqlData.res39);
	        			$("#table2_3_res40").val(sqlData.res40);
	        			$("#table2_3_res41").val(sqlData.res41);
	        			$("#table2_3_res42").val(sqlData.res42);
	        			$("#table2_3_res43").val(sqlData.res43 );
	        			$("#table2_3_res44").val(sqlData.res44);
	        			$("#table2_3_res45").val(sqlData.res45);
	        			$("#table2_3_res46").val(sqlData.res46);
	        			$("#table2_3_res47").val(sqlData.res47);
	        			$("#table2_3_res48").val(sqlData.res48);
	        			$("#table2_3_res49").val(sqlData.res49);
	        			$("#table2_3_res50").val(sqlData.res50);
	        			$("#table2_3_res51").val(sqlData.res51);
	        			$("#table2_3_res52").val(sqlData.res52);
	        			$("#table2_3_res53").val(sqlData.res53);
	        			$("#table2_3_res54").val(sqlData.res54);
	        			$("#table2_3_res55").val(sqlData.res55);
	        			$("#table2_3_res56").val(sqlData.res56);
	        			$("#table2_3_res57").val(sqlData.res57);
	        			continue;
	        		case "table2_4_1":
	        			var html="";
	        			for ( var j = 0; j < sqlData.length; j++) {
	        				var record = sqlData[j];
							html +="<tr><td>"+(j+1)+"</td>" +
									"<td><input type='text' value='"+record.res1+"'/></td>" +
									"<td><input type='text' value='"+record.res2+"'/></td>" +
									"<td><input type='text' value='"+record.res3+"'/></td>" +
									"<td><input type='text' value='"+record.res4+"'/></td></tr>";
						}
	        			$("#tbody2_4_1").html(html);
        				continue;
	        		case "table2_4_2":
	        			$("#table2_4_2_res1").val(sqlData.res1);
	        			$("#table2_4_2_res2").val(sqlData.res2);
	        			$("#table2_4_2_res3").val(sqlData.res3);
	        			$("#table2_4_2_res4").val(sqlData.res4);
	        			$("#table2_4_2_res5").val(sqlData.res5);
	        			$("#table2_4_2_res6").val(sqlData.res6);
	        			$("#table2_4_2_res7").val(sqlData.res7);
	        			$("#table2_4_2_res8").val(sqlData.res8);
	        			$("#table2_4_2_res9").val(sqlData.res9);
	        			$("#table2_4_2_res10").val(sqlData.res10);
	        			continue;
	        		case "table2_4_3":
	        			var html="";
	        			for ( var j = 0; j < sqlData.length; j++) {
	        				var record = sqlData[j];
							html +="<tr><td>"+(j+1)+"</td>" +
									"<td><input type='text' value='"+record.res1+"'/></td>" +
									"<td><input type='text' value='"+record.res2+"'/></td>" +
									"<td><input type='text' value='"+record.res3+"'/></td>" +
									"<td><input type='text' value='"+record.res4+"'/></td></tr>";
						}
	        			$("#tbody2_4_3").html(html);
        				continue;
	        		case "table2_5_1":
	        			var html="";
	        			for ( var j = 0; j < sqlData.length; j++) {
	        				var record = sqlData[j];
							html +="<tr><td>"+(j+1)+"</td>" +
									"<td><input type='text' value='"+record.res1+"'/></td>" +
									"<td><input type='text' value='"+record.res2+"'/></td>" +
									"<td><input type='text' value='"+record.res3+"'/></td>" +
									"<td><input type='text' value='"+record.res4+"'/></td>" +
									"<td><input type='text' value='"+record.res5+"'/></td></tr>";
						}
	        			$("#tbody2_5_1").html(html);
        				continue;
	        		case "table2_5_2":
	        			var html="";
	        			for ( var j = 0; j < sqlData.length; j++) {
	        				var record = sqlData[j];
							html +="<tr><td>"+(j+1)+"</td>" +
									"<td><input type='text' value='"+record.res1+"'/></td>" +
									"<td><input type='text' value='"+record.res2+"'/></td>" +
									"<td><input type='text' value='"+record.res3+"'/></td></tr>";
						}
	        			$("#tbody2_5_2").html(html);
        				continue;
	        		case "table2_5_3":
	        			var html="";
	        			for ( var j = 0; j < sqlData.length; j++) {
	        				var record = sqlData[j];
							html +="<tr><td>"+(j+1)+"</td>" +
									"<td><input type='text' value='"+record.res1+"'/></td>" +
									"<td><input type='text' value='"+record.res2+"'/></td>" +
									"<td><input type='text' value='"+record.res3+"'/></td>" +
									"<td><input type='text' value='"+record.res4+"'/></td>" +
									"<td><input type='text' value='"+record.res5+"'/></td></tr>";
						}
	        			$("#tbody2_5_3").html(html);
	        			continue;
	        		case "table2_5_4":
	        			var html="";
	        			for ( var j = 0; j < sqlData.length; j++) {
	        				var record = sqlData[j];
							html +="<tr><td>"+(j+1)+"</td>" +
									"<td><input type='text' value='"+record.res1+"'/></td>" +
									"<td><input type='text' value='"+record.res2+"'/></td>" +
									"<td><input type='text' value='"+record.res3+"'/></td>" +
									"<td><input type='text' value='"+record.res4+"'/></td>" +
									"<td><input type='text' value='"+record.res5+"'/></td></tr>";
						}
	        			$("#tbody2_5_4").html(html);
        				continue;
	        		case "table2_5_5":
	        			$("#table2_5_5_res1").val(sqlData.res1);
	        			$("#table2_5_5_res2").val(sqlData.res2);
	        			$("#table2_5_5_res3").val(sqlData.res3);
	        			$("#table2_5_5_res4").val(sqlData.res4);
	        			$("#table2_5_5_res5").val(sqlData.res5);
	        			$("#table2_5_5_res6").val(sqlData.res6);
	    			 	continue;
	        		case "table2_5_6":
	        			$("#table2_5_6_res1").val(sqlData.res1);
	        			$("#table2_5_6_res2").val(sqlData.res2);
	        			$("#table2_5_6_res3").val(sqlData.res3);
	        			$("#table2_5_6_res4").val(sqlData.res4);
	        			$("#table2_5_6_res5").val(sqlData.res5);
	        			$("#table2_5_6_res6").val(sqlData.res6);
	        			continue;
	        		case "table2_6_1":
	        			var html="";
	        			for ( var j = 0; j < sqlData.length; j++) {
	        				var record = sqlData[j];
							html +="<tr><td><input type='text' value='"+record.res1+"'/></td>" +
									"<td><input type='text' value='"+record.res2+"'/></td>" +
									"<td><input type='text' value='"+record.res3+"'/></td>" +
									"<td><input type='text' value='"+record.res4+"'/></td></tr>";
						}
	        			$("#tbody2_6_1").html(html);
	    				continue;
	        		case "table2_6_2":
	        			var html="";
	        			for ( var j = 0; j < sqlData.length; j++) {
	        				var record = sqlData[j];
							html +="<tr><td><input type='text' value='"+record.res1+"'/></td>" +
									"<td><input type='text' value='"+record.res2+"'/></td>" +
									"<td><input type='text' value='"+record.res3+"'/></td>" +
									"<td><input type='text' value='"+record.res4+"'/></td></tr>";
						}
	        			$("#tbody2_6_2").html(html);
	    			 	continue;
	        		case "table2_6_3":
	        			var html="";
	        			for ( var j = 0; j < sqlData.length; j++) {
	        				var record = sqlData[j];
							html +="<tr><td>"+(j+1)+"</td>" +
									"<td><input type='text' value='"+record.res1+"'/></td>" +
									"<td><input type='text' value='"+record.res2+"'/></td>" +
									"<td><input type='text' value='"+record.res3+"'/></td>" +
									"<td><input type='text' value='"+record.res4+"'/></td>" +
									"<td><input type='text' value='"+record.res5+"'/></td></tr>";
						}
	        			$("#tbody2_6_3").html(html);
	        			continue;
	        		case "table2_6_4":
	        			$("#table2_6_4_res1").val(sqlData.res1);
	        			$("#table2_6_4_res2").val(sqlData.res2);
	        			$("#table2_6_4_res3").val(sqlData.res3);
	        			$("#table2_6_4_res4").val(sqlData.res4);
	        			$("#table2_6_4_res5").val(sqlData.res5);
	        			$("#table2_6_4_res6").val(sqlData.res6);
	        			$("#table2_6_4_res7").val(sqlData.res7);
	        			$("#table2_6_4_res8").val(sqlData.res8);
	    				continue;
	        		case "table2_6_5":
	        			$("#table2_6_5_res1").val(sqlData.res1);
	        			$("#table2_6_5_res2").val(sqlData.res2);
	        			$("#table2_6_5_res3").val(sqlData.res3);
	        			$("#table2_6_5_res4").val(sqlData.res4);
	        			$("#table2_6_5_res5").val(sqlData.res5);
	        			$("#table2_6_5_res6").val(sqlData.res6);
	        			$("#table2_6_5_res7").val(sqlData.res7);
	        			$("#table2_6_5_res8").val(sqlData.res8);
	        			$("#table2_6_5_res9").val(sqlData.res9);
	        			$("#table2_6_5_res10").val(sqlData.res10);
	        			$("#table2_6_5_res11").val(sqlData.res11);
	        			$("#table2_6_5_res12").val(sqlData.res12);
	        			$("#table2_6_5_res13").val(sqlData.res13);
	        			$("#table2_6_5_res14").val(sqlData.res14);
	        			$("#table2_6_5_res15").val(sqlData.res15);
	        			$("#table2_6_5_res16").val(sqlData.res16);
	        			$("#table2_6_5_res17").val(sqlData.res17);
	        			$("#table2_6_5_res18").val(sqlData.res18);
	        			$("#table2_6_5_res19").val(sqlData.res19);
	        			$("#table2_6_5_res20").val(sqlData.res20);
	        			$("#table2_6_5_res21").val(sqlData.res21);
	        			$("#table2_6_5_res22").val(sqlData.res22);
	        			$("#table2_6_5_res23").val(sqlData.res23);
	        			$("#table2_6_5_res24").val(sqlData.res24);
	        			$("#table2_6_5_res25").val(sqlData.res25);
	        			$("#table2_6_5_res26").val(sqlData.res26);
	        			$("#table2_6_5_res27").val(sqlData.res27);
	        			$("#table2_6_5_res28").val(sqlData.res28);
	        			$("#table2_6_5_res29").val(sqlData.res29);
	        			$("#table2_6_5_res30").val(sqlData.res30);
	        			$("#table2_6_5_res31").val(sqlData.res31);
	        			$("#table2_6_5_res32").val(sqlData.res32);
	        			$("#table2_6_5_res33").val(sqlData.res33);
	        			$("#table2_6_5_res34").val(sqlData.res34);
	        			$("#table2_6_5_res35").val(sqlData.res35);
	        			$("#table2_6_5_res36").val(sqlData.res36);
	        			$("#table2_6_5_res37").val(sqlData.res37);
	    			 	continue;
	        		case "table4":
	        			$("#table4_res1").val(sqlData.res1);
	    				continue;
	        		case "table5":
	        			$("#table5_res1").val(sqlData.res1);
	        			$("#table5_res2").val(sqlData.res2);
	        			$("#table5_res3").val(sqlData.res3);
	        			$("#table5_res4").val(sqlData.res4);
	        			$("#table5_res5").val(sqlData.res5);
	        			$("#table5_res6").val(sqlData.res6);
	        			$("#table5_res7").val(sqlData.res7);
	        			$("#table5_res8").val(sqlData.res8);
	        			$("#table5_res9").val(sqlData.res9);
	    			 	continue;
	        	}
			}
        	
        }
   });
	getSpecialtyMsg();
}

function getSpecialtyMsg(){
	var specialtyId = $("#specialtyList").val();
	$.ajax({
        url:"/audit/self/getSpecialtyMsg.do",
	   	   data : {
	   		   accessSpecialtyId : specialtyId,
	   	   },
        type : "post",
        dataType : "json",
        async:"false",
        error:function(){
              alert("网络异常，请重试");
        },
        success:function(dataString){
        	var data = eval("("+dataString+")");
        	if(data.ok){
        		var record = data.data;
        		if($("#face_code").val() == ""){
        			$("#face_code").val(record.specialtyCode);
        		}
        		if($("#face_name").val() == ""){
        			$("#face_name").val(record.specialtyName);
        		}
        		//
        		if($("#table1_res2").val() == ""){
        			$("#table1_res2").val(record.orgName);
        		}
        		if($("#table1_res1").val() == ""){
        			$("#table1_res1").val(record.specialtyName);
        		}
        	}
        }
	});
}

function addTr(name){
	var html ="";
	switch(name){
		case "table2_5_1":
			var trs = $("#tbody2_5_1").find("tr");
			html +="<tr><td>"+(trs.length+1)+"</td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td></tr>"; 
			$("#tbody2_5_1").append(html);
			return;
		case "table2_4_1":
			var trs = $("#tbody2_4_1").find("tr");
			html +="<tr><td>"+(trs.length+1)+"</td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td></tr>"; 
			$("#tbody2_4_1").append(html);
			return;
		case "table2_4_3":
			var trs = $("#tbody2_4_3").find("tr");
			html +="<tr><td>"+(trs.length+1)+"</td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td></tr>"; 
			$("#tbody2_4_3").append(html);
			return;
		case "table2_5_2":
			var trs = $("#tbody2_5_2").find("tr");
			html +="<tr><td>"+(trs.length+1)+"</td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td></tr>"; 
			$("#tbody2_5_2").append(html);
			return;
		case "table2_5_3":
			var trs = $("#tbody2_5_3").find("tr");
			html +="<tr><td>"+(trs.length+1)+"</td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td></tr>"; 
			$("#tbody2_5_3").append(html);
			return;
		case "table2_5_4":
			var trs = $("#tbody2_5_4").find("tr");
			html +="<tr><td>"+(trs.length+1)+"</td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td></tr>"; 
			$("#tbody2_5_4").append(html);
			return;
		case "table2_6_1":
			html +="<tr><td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td></tr>"; 
			$("#tbody2_6_1").append(html);
			return;
		case "table2_6_2":
			html +="<tr><td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td></tr>"; 
			$("#tbody2_6_2").append(html);
			return;
		case "table2_6_3":
			var trs = $("#tbody2_6_3").find("tr");
			html +="<tr><td>"+(trs.length+1)+"</td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td>" +
					"<td><input type='text'/></td></tr>"; 
			$("#tbody2_6_3").append(html);
			return;
	}
	
}

function createNewVersion(){
	var specialtyId = $("#specialtyList").val();
	var year = $("#yearList").val();
	var specialtyName = $("#specialtyList").find("option:selected").text(); 
	$.ajax({
        url:"/audit/self/createNewVersion.do",
	   	   data : {
	   		   accessSpecialtyId : specialtyId,
	   		   year : year,
	   		   specialtyName : specialtyName
	   	   },
        type : "post",
        dataType : "json",
        async:"false",
        error:function(){
              alert("网络异常，请重试");
        },
        success:function(dataString){
        	alert("生成成功");
        	getAllVersion();
        }
   });
}

function deleteVersion(){
	var versionId = $("#versionList").val();
	$.ajax({
        url:"/audit/self/deleteProfile.do",
	   	   data : {
	   		versionId : versionId
	   	   },
        type : "post",
        dataType : "json",
        async:"fasle",
        error:function(){
              alert("网络异常，请重试");
        },
        success:function(dataString){
        	alert("删除成功");
        	getAllVersion();
        }
   });
}

function updateVersion(){
	var versionId = $("#versionList").val();
	if(versionId == ""){
		var specialtyId = $("#specialtyList").val();
		var year = $("#yearList").val();
		var specialtyName = $("#specialtyList").find("option:selected").text(); 
		$.ajax({
	        url:"/audit/self/createNewVersion.do",
		   	   data : {
		   		   accessSpecialtyId : specialtyId,
		   		   year : year,
		   		   specialtyName : specialtyName
		   	   },
	        type : "post",
	        dataType : "json",
	        async:"true",
	        error:function(){
	              alert("网络异常，请重试");
	        },
	        success:function(dataString){
	        	var data = eval('('+dataString+')');
	        	if(data.ok){
	        		var date = new Date();
					var str = date.Format("yyyy-MM-dd");
					html ="<option class='main-top-option-one' value='"+data.data+"'>"+str+"</option>";
					$("#versionList").html("");
	                $("#versionList").append(html);
	                updateVersion2();
	        	}
	        }
	   });
	}else{
		updateVersion2();
	}
}


function updateVersion2(){
	saveFaceData();
	saveTable1();
	saveTable2_1();
	saveTable2_2();
	saveTable2_3();
	saveTable2_4_1();
	saveTable2_4_2();
	saveTable2_4_3();
	saveTable2_5_1();
	saveTable2_5_2();
	saveTable2_5_3();
	saveTable2_5_4();
	saveTable2_5_5();
	saveTable2_5_6();
	saveTable2_6_1();
	saveTable2_6_2();
	saveTable2_6_3();
	saveTable2_6_4();
	saveTable2_6_5();
	saveTable4();
	saveTable5();
	alert("保存成功");
	getAllData();
}

function saveData(title,data){
	var versionId = $("#versionList").val();
	$.ajax({
        url:"/audit/self/saveProfileData.do",
   	    data : {
   		   title : title,
   		   versionId : versionId,
   		   data : JSON.stringify(data)
   	    },
        type : "post",
        dataType : "json",
        async:"false",
        error:function(){
              alert("网络异常，请重试");
        },
        success:function(dataString){
        }
   });
	
}

function saveFaceData(){
	var title="face";
	var data = {};
	data.face_dw = $("#face_dw").val();
	data.face_name = $("#face_name").val();
	data.face_code = $("#face_code").val();
	data.face_type = $("#face_type").val();
	data.face_year = $("#face_year").val();
	data.face_month = $("#face_month").val();
	data.face_day = $("#face_day").val();
	data.face_year2 = $("#face_year2").val();
	data.face_month2 = $("#face_month2").val();
	
	saveData(title,data);
}

function saveTable1(){
	var title="table1";
	var data = {};
	data.res1 = $("#table1_res1").val();
	data.res2 = $("#table1_res2").val();
	data.res3 = $("#table1_res3").val();
	data.res4 = $("#table1_res4").val();
	data.res5 = $("#table1_res5").val();
	data.res6 = $("#table1_res6").val();
	saveData(title,data);
}

function saveTable2_1(){
	var title="table2_1";
	var data = {};
	data.res1 = $("#table2_1_res1").val();
	data.res2 = $("#table2_1_res2").val();
	data.res3 = $("#table2_1_res3").val();
	data.res4 = $("#table2_1_res4").val();
	data.res5 = $("#table2_1_res5").val();
	data.res6 = $("#table2_1_res6").val();
	data.res7 = $("#table2_1_res7").val();
	data.res8 = $("#table2_1_res8").val();
	data.res9 = $("#table2_1_res9").val();
	data.res10 = $("#table2_1_res10").val();
	data.res11 = $("#table2_1_res11").val();
	data.res12 = $("#table2_1_res12").val();
	data.res13 = $("#table2_1_res13").val();
	data.res14 = $("#table2_1_res14").val();
	data.res15 = $("#table2_1_res15").val();
	data.res16 = $("#table2_1_res16").val();
	data.res17 = $("#table2_1_res17").val();
	data.res18 = $("#table2_1_res18").val();
	data.res19 = $("#table2_1_res19").val();
	data.res20 = $("#table2_1_res20").val();
	data.res21 = $("#table2_1_res21").val();
	data.res22 = $("#table2_1_res22").val();
	data.res23 = $("#table2_1_res23").val();
	data.res24 = $("#table2_1_res24").val();
	data.res25 = $("#table2_1_res25").val();
	data.res26 = $("#table2_1_res26").val();
	data.res27 = $("#table2_1_res27").val();
	data.res28 = $("#table2_1_res28").val();
	data.res29 = $("#table2_1_res29").val();
	data.res30 = $("#table2_1_res30").val();
	data.res31 = $("#table2_1_res31").val();
	data.res32 = $("#table2_1_res32").val();
	data.res33 = $("#table2_1_res33").val();
	data.res34 = $("#table2_1_res34").val();
	data.res35 = $("#table2_1_res35").val();
	data.res36 = $("#table2_1_res36").val();
	data.res37 = $("#table2_1_res37").val();
	data.res38 = $("#table2_1_res38").val();
	data.res39 = $("#table2_1_res39").val();
	data.res40 = $("#table2_1_res40").val();
	data.res41 = $("#table2_1_res41").val();
	data.res42 = $("#table2_1_res42").val();
	data.res43 = $("#table2_1_res43").val();
	data.res44 = $("#table2_1_res44").val();
	data.res45 = $("#table2_1_res45").val();
	data.res46 = $("#table2_1_res46").val();
	data.res47 = $("#table2_1_res47").val();
	data.res48 = $("#table2_1_res48").val();
	data.res49 = $("#table2_1_res49").val();
	data.res50 = $("#table2_1_res50").val();
	data.res51 = $("#table2_1_res51").val();
	data.res52 = $("#table2_1_res52").val();
	data.res53 = $("#table2_1_res53").val();
	data.res54 = $("#table2_1_res54").val();
	data.res55 = $("#table2_1_res55").val();
	data.res56 = $("#table2_1_res56").val();
	data.res57 = $("#table2_1_res57").val();
	data.res58 = $("#table2_1_res58").val();
	data.res59 = $("#table2_1_res59").val();
	data.res60 = $("#table2_1_res60").val();
	data.res61 = $("#table2_1_res61").val();
	data.res62 = $("#table2_1_res62").val();
	data.res63 = $("#table2_1_res63").val();
	data.res64 = $("#table2_1_res64").val();
	data.res65 = $("#table2_1_res65").val();
	data.res66 = $("#table2_1_res66").val();
	data.res67 = $("#table2_1_res67").val();
	data.res68 = $("#table2_1_res68").val();
	data.res69 = $("#table2_1_res69").val();
	data.res70 = $("#table2_1_res70").val();
	data.res71 = $("#table2_1_res71").val();
	data.res72 = $("#table2_1_res72").val();
	data.res73 = $("#table2_1_res73").val();
	data.res74 = $("#table2_1_res74").val();
	data.res75 = $("#table2_1_res75").val();
	data.res76 = $("#table2_1_res76").val();
	data.res77 = $("#table2_1_res77").val();
	data.res78 = $("#table2_1_res78").val();
	data.res79 = $("#table2_1_res79").val();
	data.res80 = $("#table2_1_res80").val();
	data.res81 = $("#table2_1_res81").val();
	data.res82 = $("#table2_1_res82").val();
	data.res83 = $("#table2_1_res83").val();
	saveData(title,data)
}

function saveTable2_2(){
	var title="table2_2";
	var data = {};
	data.res1 = $("#table2_2_res1").val();
	data.res2 = $("#table2_2_res2").val();
	data.res3 = $("#table2_2_res3").val();
	data.res4 = $("#table2_2_res4").val();
	data.res5 = $("#table2_2_res5").val();
	data.res6 = $("#table2_2_res6").val();
	data.res7 = $("#table2_2_res7").val();
	data.res8 = $("#table2_2_res8").val();
	data.res9 = $("#table2_2_res9").val();
	data.res10 = $("#table2_2_res10").val();
	data.res11 = $("#table2_2_res11").val();
	data.res12 = $("#table2_2_res12").val();
	data.res13 = $("#table2_2_res13").val();
	data.res14 = $("#table2_2_res14").val();
	data.res15 = $("#table2_2_res15").val();
	saveData(title,data);
}

function saveTable2_3(){
	var title="table2_3";
	var data = {};
	data.res1 = $("#table2_3_res1").val();
	data.res2 = $("#table2_3_res2").val();
	data.res3 = $("#table2_3_res3").val();
	data.res4 = $("#table2_3_res4").val();
	data.res5 = $("#table2_3_res5").val();
	data.res6 = $("#table2_3_res6").val();
	data.res7 = $("#table2_3_res7").val();
	data.res8 = $("#table2_3_res8").val();
	data.res9 = $("#table2_3_res9").val();
	data.res10 = $("#table2_3_res10").val();
	data.res11 = $("#table2_3_res11").val();
	data.res12 = $("#table2_3_res12").val();
	data.res13 = $("#table2_3_res13").val();
	data.res14 = $("#table2_3_res14").val();
	data.res15 = $("#table2_3_res15").val();
	data.res16 = $("#table2_3_res16").val();
	data.res17 = $("#table2_3_res17").val();
	data.res18 = $("#table2_3_res18").val();
	data.res19 = $("#table2_3_res19").val();
	data.res20 = $("#table2_3_res20").val();
	data.res21 = $("#table2_3_res21").val();
	data.res22 = $("#table2_3_res22").val();
	data.res23 = $("#table2_3_res23").val();
	data.res24 = $("#table2_3_res24").val();
	data.res25 = $("#table2_3_res25").val();
	data.res26 = $("#table2_3_res26").val();
	data.res27 = $("#table2_3_res27").val();
	data.res28 = $("#table2_3_res28").val();
	data.res29 = $("#table2_3_res29").val();
	data.res30 = $("#table2_3_res30").val();
	data.res31 = $("#table2_3_res31").val();
	data.res32 = $("#table2_3_res32").val();
	data.res33 = $("#table2_3_res33").val();
	data.res34 = $("#table2_3_res34").val();
	data.res35 = $("#table2_3_res35").val();
	data.res36 = $("#table2_3_res36").val();
	data.res37 = $("#table2_3_res37").val();
	data.res38 = $("#table2_3_res38").val();
	data.res39 = $("#table2_3_res39").val();
	data.res40 = $("#table2_3_res40").val();
	data.res41 = $("#table2_3_res41").val();
	data.res42 = $("#table2_3_res42").val();
	data.res43 = $("#table2_3_res43").val();
	data.res44 = $("#table2_3_res44").val();
	data.res45 = $("#table2_3_res45").val();
	data.res46 = $("#table2_3_res46").val();
	data.res47 = $("#table2_3_res47").val();
	data.res48 = $("#table2_3_res48").val();
	data.res49 = $("#table2_3_res49").val();
	data.res50 = $("#table2_3_res50").val();
	data.res51 = $("#table2_3_res51").val();
	data.res52 = $("#table2_3_res52").val();
	data.res53 = $("#table2_3_res53").val();
	data.res54 = $("#table2_3_res54").val();
	data.res55 = $("#table2_3_res55").val();
	data.res56 = $("#table2_3_res56").val();
	data.res57 = $("#table2_3_res57").val();
	saveData(title,data);
}

function saveTable2_4_1(){

	var title="table2_4_1";
	var data = [];
	
	var trs = $("#tbody2_4_1").find("tr");
	for ( var i = 0; i < trs.length; i++) {
		var tr = trs[i];
		var inputs = $(tr).find("input");
		if(inputs[0].value == "" && inputs[1].value == "" 
			&& inputs[2].value == "" && inputs[3].value == ""){
			continue;
		}
		
		var record = {};
		record.res1 = inputs[0].value;
		record.res2 = inputs[1].value;
		record.res3 = inputs[2].value;
		record.res4 = inputs[3].value;
		data.push(record);
	}
	saveData(title,data);
}

function saveTable2_4_2(){
	var title="table2_4_2";
	var data = {};
	data.res1 = $("#table2_4_2_res1").val();
	data.res2 = $("#table2_4_2_res2").val();
	data.res3 = $("#table2_4_2_res3").val();
	data.res4 = $("#table2_4_2_res4").val();
	data.res5 = $("#table2_4_2_res5").val();
	data.res6 = $("#table2_4_2_res6").val();
	data.res7 = $("#table2_4_2_res7").val();
	data.res8 = $("#table2_4_2_res8").val();
	data.res9 = $("#table2_4_2_res9").val();
	data.res10 = $("#table2_4_2_res10").val();
	saveData(title,data);
}

function saveTable2_4_3(){
	var title="table2_4_3";
	var data = [];
	
	var trs = $("#tbody2_4_3").find("tr");
	for ( var i = 0; i < trs.length; i++) {
		var tr = trs[i];
		var inputs = $(tr).find("input");
		if(inputs[0].value == "" && inputs[1].value == "" 
			&& inputs[2].value == "" && inputs[3].value == ""){
			continue;
		}
		var record = {};
		record.res1 = inputs[0].value;
		record.res2 = inputs[1].value;
		record.res3 = inputs[2].value;
		record.res4 = inputs[3].value;
		data.push(record);
	}
	saveData(title,data);
}

function saveTable2_5_1(){
	var title="table2_5_1";
	var data = [];
	
	var trs = $("#tbody2_5_1").find("tr");
	for ( var i = 0; i < trs.length; i++) {
		var tr = trs[i];
		var inputs = $(tr).find("input");
		if(inputs[0].value == "" && inputs[1].value == "" 
			&& inputs[2].value == "" && inputs[3].value == "" && inputs[4].value == ""){
			continue;
		}
		var record = {};
		record.res1 = inputs[0].value;
		record.res2 = inputs[1].value;
		record.res3 = inputs[2].value;
		record.res4 = inputs[3].value;
		record.res5 = inputs[4].value;
		data.push(record);
	}
	saveData(title,data);
}

function saveTable2_5_2(){
	var title="table2_5_2";
	var data = [];
	
	var trs = $("#tbody2_5_2").find("tr");
	for ( var i = 0; i < trs.length; i++) {
		var tr = trs[i];
		var inputs = $(tr).find("input");
		if(inputs[0].value == "" && inputs[1].value == "" 
			&& inputs[2].value == "" ){
			continue;
		}
		var record = {};
		record.res1 = inputs[0].value;
		record.res2 = inputs[1].value;
		record.res3 = inputs[2].value;
		data.push(record);
	}
	saveData(title,data);
}

function saveTable2_5_3(){
	var title="table2_5_3";
	var data = [];
	
	var trs = $("#tbody2_5_3").find("tr");
	for ( var i = 0; i < trs.length; i++) {
		var tr = trs[i];
		var inputs = $(tr).find("input");
		if(inputs[0].value == "" && inputs[1].value == "" 
			&& inputs[2].value == "" && inputs[3].value == "" && inputs[4].value == ""){
			continue;
		}
		var record = {};
		record.res1 = inputs[0].value;
		record.res2 = inputs[1].value;
		record.res3 = inputs[2].value;
		record.res4 = inputs[3].value;
		record.res5 = inputs[4].value;
		data.push(record);
	}
	saveData(title,data);
}

function saveTable2_5_4(){
	var title="table2_5_4";
	var data = [];
	
	var trs = $("#tbody2_5_4").find("tr");
	for ( var i = 0; i < trs.length; i++) {
		var tr = trs[i];
		var inputs = $(tr).find("input");
		if(inputs[0].value == "" && inputs[1].value == "" 
			&& inputs[2].value == "" && inputs[3].value == "" && inputs[4].value == ""){
			continue;
		}
		var record = {};
		record.res1 = inputs[0].value;
		record.res2 = inputs[1].value;
		record.res3 = inputs[2].value;
		record.res4 = inputs[3].value;
		record.res5 = inputs[4].value;
		data.push(record);
	}
	saveData(title,data);
}

function saveTable2_5_5(){
	var title="table2_5_5";
	var data = {};
	data.res1 = $("#table2_5_5_res1").val();
	data.res2 = $("#table2_5_5_res2").val();
	data.res3 = $("#table2_5_5_res3").val();
	data.res4 = $("#table2_5_5_res4").val();
	data.res5 = $("#table2_5_5_res5").val();
	data.res6 = $("#table2_5_5_res6").val();
	saveData(title,data);
}

function saveTable2_5_6(){
	var title="table2_5_6";
	var data = {};
	data.res1 = $("#table2_5_6_res1").val();
	data.res2 = $("#table2_5_6_res2").val();
	data.res3 = $("#table2_5_6_res3").val();
	data.res4 = $("#table2_5_6_res4").val();
	data.res5 = $("#table2_5_6_res5").val();
	data.res6 = $("#table2_5_6_res6").val();
	saveData(title,data);
}

function saveTable2_6_1(){
	var title="table2_6_1";
	var data = [];
	
	var trs = $("#tbody2_6_1").find("tr");
	for ( var i = 0; i < trs.length; i++) {
		var tr = trs[i];
		var inputs = $(tr).find("input");
		if(inputs[0].value == "" && inputs[1].value == "" 
			&& inputs[2].value == "" && inputs[3].value == "" ){
			continue;
		}
		var record = {};
		record.res1 = inputs[0].value;
		record.res2 = inputs[1].value;
		record.res3 = inputs[2].value;
		record.res4 = inputs[3].value;
		data.push(record);
	}
	saveData(title,data);
}

function saveTable2_6_2(){
	var title="table2_6_2";
	var data = [];
	
	var trs = $("#tbody2_6_2").find("tr");
	for ( var i = 0; i < trs.length; i++) {
		var tr = trs[i];
		var inputs = $(tr).find("input");
		if(inputs[0].value == "" && inputs[1].value == "" 
			&& inputs[2].value == "" && inputs[3].value == ""){
			continue;
		}
		var record = {};
		record.res1 = inputs[0].value;
		record.res2 = inputs[1].value;
		record.res3 = inputs[2].value;
		record.res4 = inputs[3].value;
		data.push(record);
	}
	saveData(title,data);
}

function saveTable2_6_3(){
	var title="table2_6_3";
	var data = [];
	
	var trs = $("#tbody2_6_3").find("tr");
	for ( var i = 0; i < trs.length; i++) {
		var tr = trs[i];
		var inputs = $(tr).find("input");
		if(inputs[0].value == "" && inputs[1].value == "" 
			&& inputs[2].value == "" && inputs[3].value == "" && inputs[4].value == ""){
			continue;
		}
		
		var record = {};
		record.res1 = inputs[0].value;
		record.res2 = inputs[1].value;
		record.res3 = inputs[2].value;
		record.res4 = inputs[3].value;
		record.res5 = inputs[4].value;
		data.push(record);
	}
	saveData(title,data);
}

function saveTable2_6_4(){
	var title="table2_6_4";
	var data = {};
	data.res1 = $("#table2_6_4_res1").val();
	data.res2 = $("#table2_6_4_res2").val();
	data.res3 = $("#table2_6_4_res3").val();
	data.res4 = $("#table2_6_4_res4").val();
	data.res5 = $("#table2_6_4_res5").val();
	data.res6 = $("#table2_6_4_res6").val();
	data.res7 = $("#table2_6_4_res7").val();
	data.res8 = $("#table2_6_4_res8").val();
	saveData(title,data);
}

function saveTable2_6_5(){
	var title="table2_6_5";
	var data = {};
	data.res1 = $("#table2_6_5_res1").val();
	data.res2 = $("#table2_6_5_res2").val();
	data.res3 = $("#table2_6_5_res3").val();
	data.res4 = $("#table2_6_5_res4").val();
	data.res5 = $("#table2_6_5_res5").val();
	data.res6 = $("#table2_6_5_res6").val();
	data.res7 = $("#table2_6_5_res7").val();
	data.res8 = $("#table2_6_5_res8").val();
	data.res9 = $("#table2_6_5_res9").val();
	data.res10 = $("#table2_6_5_res10").val();
	data.res11 = $("#table2_6_5_res11").val();
	data.res12 = $("#table2_6_5_res12").val();
	data.res13 = $("#table2_6_5_res13").val();
	data.res14 = $("#table2_6_5_res14").val();
	data.res15 = $("#table2_6_5_res15").val();
	data.res16 = $("#table2_6_5_res16").val();
	data.res17 = $("#table2_6_5_res17").val();
	data.res18 = $("#table2_6_5_res18").val();
	data.res19 = $("#table2_6_5_res19").val();
	data.res20 = $("#table2_6_5_res20").val();
	data.res21 = $("#table2_6_5_res21").val();
	data.res22 = $("#table2_6_5_res22").val();
	data.res23 = $("#table2_6_5_res23").val();
	data.res24 = $("#table2_6_5_res24").val();
	data.res25 = $("#table2_6_5_res25").val();
	data.res26 = $("#table2_6_5_res26").val();
	data.res27 = $("#table2_6_5_res27").val();
	data.res28 = $("#table2_6_5_res28").val();
	data.res29 = $("#table2_6_5_res29").val();
	data.res30 = $("#table2_6_5_res30").val();
	data.res31 = $("#table2_6_5_res31").val();
	data.res32 = $("#table2_6_5_res32").val();
	data.res33 = $("#table2_6_5_res33").val();
	data.res34 = $("#table2_6_5_res34").val();
	data.res35 = $("#table2_6_5_res35").val();
	data.res36 = $("#table2_6_5_res36").val();
	data.res37 = $("#table2_6_5_res37").val();
	saveData(title,data);
}

function saveTable4(){
	var title="table4";
	var data = {};
	data.res1 = $("#table4_res1").val();
	saveData(title,data);
}

function saveTable5(){
	var title="table5";
	var data = {};
	data.res1 = $("#table5_res1").val();
	data.res2 = $("#table5_res2").val();
	data.res3 = $("#table5_res3").val();
	data.res4 = $("#table5_res4").val();
	data.res5 = $("#table5_res5").val();
	data.res6 = $("#table5_res6").val();
	data.res7 = $("#table5_res7").val();
	data.res8 = $("#table5_res8").val();
	data.res9 = $("#table5_res9").val();
	saveData(title,data);
}

function getSqlData(name,year,sort){
	var specialtyId = $("#specialtyList").val();
	if(year == null || year == ""){
		year = $("#yearList").val();
	}
	if(sort == null){
		sort = 1;
	}
	console.info("++"+year+"--"+sort+"--"+name);
	$.ajax({
        url:"/audit/self/getProfileDataBySql.do",
	   	   data : {
	   		   accessSpecialtyId : specialtyId,
	   		   year : year-1,
	   		   title : name
	   	   },
        type : "post",
        dataType : "json",
        async : "false",
        error:function(){
              alert("网络异常，请重试");
        },
        success:function(dataString){
        	var data = eval("("+dataString+")");
        	if(data.ok){
        		var list = data.data;
        		console.info(list);
        		
        		if(list == null){
        			alert("暂无数据");
        			return;
        		}
        		for ( var i = 0; i < list.length; i++) {
					var record = list[i];
					switch (name) {
					case "table2_1_1":
						$("#table2_1_res1").val(record.res1);
						$("#table2_1_res2").val(record.res2);
						$("#table2_1_res3").val(record.res3);
						getSqlData("table2_1_2");
						break;
					case "table2_1_2":
						$("#table2_1_res4").val(record.res4);
						$("#table2_1_res5").val(record.res5);
						$("#table2_1_res6").val(record.res6);
						$("#table2_1_res7").val(record.res7);
						$("#table2_1_res8").val(record.res8);
						$("#table2_1_res32").val(record.res33);
						$("#table2_1_res33").val(record.res34);
						$("#table2_1_res34").val(record.res35);
						$("#table2_1_res35").val(record.res36);
						$("#table2_1_res36").val(record.res37);
						$("#table2_1_res39").val(record.res39);
						$("#table2_1_res40").val(record.res40);
						$("#table2_1_res41").val(record.res41);
						$("#table2_1_res42").val(record.res42);
						$("#table2_1_res43").val(record.res43);
						$("#table2_1_res46").val(record.res46);
						$("#table2_1_res47").val(record.res47);
						$("#table2_1_res48").val(record.res48);
						$("#table2_1_res49").val(record.res49);
						$("#table2_1_res50").val(record.res50);
						$("#table2_1_res53").val(record.res53);
						$("#table2_1_res54").val(record.res54);
						$("#table2_1_res55").val(record.res55);
						$("#table2_1_res56").val(record.res56);
						$("#table2_1_res57").val(record.res57);
						$("#table2_1_res60").val(record.res60);
						$("#table2_1_res61").val(record.res61);
						$("#table2_1_res62").val(record.res62);
						$("#table2_1_res63").val(record.res63);
						$("#table2_1_res64").val(record.res64);
						$("#table2_1_res67").val(record.res67);
						$("#table2_1_res68").val(record.res68);
						$("#table2_1_res69").val(record.res69);
						$("#table2_1_res70").val(record.res70);
						$("#table2_1_res71").val(record.res71);
						$("#table2_1_res74").val(record.res74);
						$("#table2_1_res75").val(record.res75);
						$("#table2_1_res76").val(record.res76);
						$("#table2_1_res77").val(record.res77);
						$("#table2_1_res78").val(record.res78);
						$("#table2_1_res81").val(record.res81);
						break;
					case "table2_2":
						if(sort == 1){
							$("#table2_2_res1").val(year-1);
							$("#table2_2_res4").val(record.res1);
							$("#table2_2_res7").val(record.res2);
							$("#table2_2_res10").val(record.res3);
							$("#table2_2_res13").val(record.res4);
							getSqlData(name,year-1,sort+1);
						}else if(sort == 2){
							$("#table2_2_res2").val(year-1);
							$("#table2_2_res5").val(record.res1);
							$("#table2_2_res8").val(record.res2);
							$("#table2_2_res11").val(record.res3);
							$("#table2_2_res14").val(record.res4);
							getSqlData(name,year-1,sort+1);
						}else if(sort == 3){
							$("#table2_2_res3").val(year-1);
							$("#table2_2_res6").val(record.res1);
							$("#table2_2_res9").val(record.res2);
							$("#table2_2_res12").val(record.res3);
							$("#table2_2_res15").val(record.res4);
						}
						break;
					case "table2_3_1":
						$("#table2_3_res1").val(record.res1);
						$("#table2_3_res2").val(record.res2);
						$("#table2_3_res3").val(record.res3);
						$("#table2_3_res5").val(record.res5);
						$("#table2_3_res6").val(record.res6);
						$("#table2_3_res8").val(record.res8);
						$("#table2_3_res9").val(record.res9);
						$("#table2_3_res10").val(record.res10);
						$("#table2_3_res12").val(record.res12);
						$("#table2_3_res13").val(record.res13);
						$("#table2_3_res14").val(record.res14);
						$("#table2_3_res15").val(record.res15);
						$("#table2_3_res16").val(record.res16);
						$("#table2_3_res17").val(record.res17);
						$("#table2_3_res18").val(record.res18);
						$("#table2_3_res19").val(record.res19);
						$("#table2_3_res20").val(record.res20);
						$("#table2_3_res21").val(record.res21);
						getSqlData("table2_3_2");
						break;
					case "table2_3_2":
						//教，科
						
						break;
					case "table2_4_1":
						var html = "";
						html+="<tr><td>"+(i+1)+"</td>";
						html+="<td><input type='text' value='"+record.res1+"' /></td>";
						html+="<td><input type='text' value='"+record.res2+"' /></td>";
						html+="<td><input type='text' value='"+record.res3+"' /></td>";
						html+="<td><input type='text' value=''/></td></tr>";
						$("#tbody2_4_1").append(html);
						continue;
					case "table2_4_2":
						
						break;
					case "table2_4_3":
						var html = "";
						html+="<tr><td>"+(i+1)+"</td>";
						html+="<td><input type='text' value='"+record.res1+"' /></td>";
						html+="<td><input type='text' value='"+record.res2+"' /></td>";
						html+="<td><input type='text' value='"+record.res3+"' /></td>";
						html+="<td><input type='text' value='"+record.res4+"' /></td></tr>";
						$("#tbody2_4_3").append(html);
						continue;
					case "table2_5_1":
						var html = "";
						html+="<tr><td>"+(i+1)+"</td>";
						html+="<td><input type='text' value='"+record.res1+"' /></td>";
						html+="<td><input type='text' value='"+record.res2+"' /></td>";
						html+="<td><input type='text' value='"+record.res3+"' /></td>";
						html+="<td><input type='text' value='"+record.res4+"' /></td>";
						html+="<td><input type='text' value='"+record.res5+"' /></td></tr>";
						$("#tbody2_5_1").append(html);
						continue;
					case "table2_5_2":
						var html = "";
						html+="<tr><td>"+(i+1)+"</td>";
						html+="<td><input type='text' value='"+record.res1+"' /></td>";
						html+="<td><input type='text' value='"+record.res2+"' /></td>";
						html+="<td><input type='text' value='"+record.res3+"' /></td></tr>";
						$("#tbody2_5_2").append(html);
						continue;
					case "table2_5_3":
						var html = "";
						html+="<tr><td>"+(i+1)+"</td>";
						html+="<td><input type='text' value='"+record.res1+"' /></td>";
						html+="<td><input type='text' value='"+record.res2+"' /></td>";
						html+="<td><input type='text' value='"+record.res3+"' /></td>";
						html+="<td><input type='text' value='"+record.res4+"' /></td></tr>";
						$("#tbody2_5_3").append(html);
						continue;
					case "table2_5_4":
						var html = "";
						html+="<tr><td>"+(i+1)+"</td>";
						html+="<td><input type='text' value='"+record.res1+"' /></td>";
						html+="<td><input type='text' value='"+record.res2+"' /></td>";
						html+="<td><input type='text' value='"+record.res3+"' /></td>";
						html+="<td><input type='text' value='"+record.res4+"' /></td>";
						html+="<td><input type='text' value='"+record.res5+"' /></td></tr>";
						$("#tbody2_5_4").append(html);
						continue;
					case "table2_5_5":
						if(sort == 1){
							$("#table2_5_5_res1").val(year-1);
							$("#table2_2_res4").val(record.res1);
							getSqlData(name,year-1,sort+1);
						}else if(sort == 2){
							$("#table2_5_5_res2").val(year-1);
							$("#table2_2_res5").val(record.res1);
							getSqlData(name,year-1,sort+1);
						}else if(sort == 3){
							$("#table2_5_5_res3").val(year-1);
							$("#table2_2_res6").val(record.res1);
						}
						break;
					case "table2_5_6":
						if(sort == 1){
							$("#table2_5_5_res1").val(year-1);
							$("#table2_5_5_res4").val(record.res1);
							getSqlData(name,year-1,sort+1);
						}else if(sort == 2){
							$("#table2_5_5_res2").val(year-1);
							$("#table2_5_5_res5").val(record.res1);
							getSqlData(name,year-1,sort+1);
						}else if(sort == 3){
							$("#table2_5_5_res3").val(year-1);
							$("#table2_5_5_res6").val(record.res1);
						}
						break;
					case "table2_6_1":
						
						break;
					case "table2_6_2":
						
						break;
					case "table2_6_3":
						var html = "";
						html+="<tr><td>"+(i+1)+"</td>";
						html+="<td><input type='text' value='"+record.res1+"' /></td>";
						html+="<td><input type='text' value='"+record.res2+"' /></td>";
						html+="<td><input type='text' value='"+record.res3+"' /></td>";
						html+="<td><input type='text' value='"+record.res4+"' /></td>";
						html+="<td><input type='text' value='"+record.res5+"' /></td></tr>";
						$("#tbody2_6_3").append(html);
						continue;
					case "table2_6_4":
						$("#table2_6_4_res1").val(record.res1);
						$("#table2_6_4_res3").val(record.res3);
						$("#table2_6_4_res5").val(record.res5);
						$("#table2_6_4_res7").val(record.res7);
						break;
					case "table2_6_5":
						if(sort == 1){
							$("#table2_6_5_res1").val(year-1);
							if(record != null){
								$("#table2_6_5_res4").val(record.res1);
								$("#table2_6_5_res7").val(record.res2);
								$("#table2_6_5_res10").val(record.res3);
								$("#table2_6_5_res13").val(record.res4);
								$("#table2_6_5_res16").val(record.res5);
								$("#table2_6_5_res19").val(record.res6);
							}
							getSqlData(name,year-1,sort+1);
						}else if(sort == 2){
							$("#table2_6_5_res2").val(year-1);
							if(record != null){
								$("#table2_6_5_res5").val(record.res1);
								$("#table2_6_5_res8").val(record.res2);
								$("#table2_6_5_res11").val(record.res3);
								$("#table2_6_5_res14").val(record.res4);
								$("#table2_6_5_res17").val(record.res5);
								$("#table2_6_5_res20").val(record.res6);
							}	
							getSqlData(name,year-1,sort+1);
						}else if(sort == 3){
							$("#table2_6_5_res3").val(year-1);
							if(record != null){
								$("#table2_6_5_res6").val(record.res1);
								$("#table2_6_5_res9").val(record.res2);
								$("#table2_6_5_res12").val(record.res3);
								$("#table2_6_5_res15").val(record.res4);
								$("#table2_6_5_res18").val(record.res5);
								$("#table2_6_5_res21").val(record.res6);
							}
						}
						break;
					default:
						break;
					}
				}
        	}else{
        		alert("暂无数据")
        		return;
        	}
        }
   });
}

