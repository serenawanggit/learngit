var fieldList = [];
var tableName = "";
$(function(){
	tableName = decodeURI(getQueryString('tableName'),"UTF-8");
	var str = "";
	//查询表头
	$.ajax({
    	url:"/audit/shutcmDataTemplate/findFieldBySdtid.do",
    	type:"post",
    	dataType:"json",
    	async:false,
    	data:{"tableName":tableName},
    	success:function(data){
    		fieldList = [];
    		str += "<tr>";
    		$.each(data,function(i,dom){
//    			alert(dom.FIELD_CNAME);
    			if(dom.FIELD_CNAME!="主键" && dom.FIELD_CNAME!="错误信息"){
    				str += "<th>" + dom.FIELD_CNAME + "</th>";
    				fieldList.push(dom.FIELD_ENAME);
    			}
    		})
    		str += "</tr>";
    	},
    	error:function(){
    		alert("加载失败！");
    	}
    });
	
	addTableData(str);
	
	$("#year").change(function(){
		addTableData(str);
	});
	
})

function addTableData(str){
	if(tableName=="表1_4学校教学科研单位" || tableName=="表1_5_1专业基本情况" || tableName=="表1_5_2专业大类情况表" || tableName=="表1_6_1教职工基本信息" || tableName=="表1_6_2外聘教师基本信息" 
		|| tableName=="表1_6_3附属医院师资情况" || tableName=="表1_8_1本科实验场所" || tableName=="表1_8_2科研基地" || tableName=="表2_4校外实习_实训基地" || tableName=="表3_2相关管理人员基本信息" || tableName=="表4_1_2博士后流动点" 
			|| tableName=="表4_1_3博士点_硕士点" || tableName=="表4_1_4重点学科" || tableName=="表5_1_1开课情况" ){
	    str += getTableData1(tableName);
	}else if(tableName=="表2_7本科实验设备情况"){
		str += getTableData2(tableName);
	}else if(tableName=="表3_3_1高层次人才" || tableName=="表3_3_2高层次教学_研究团队"  || tableName=="表3_4_2教师培训进修_交流情况"  || tableName=="表3_5_1教师主持科研项目情况"  
		|| tableName=="表3_5_2教师获得科研奖励情况"  || tableName=="表3_5_3教师发表的论文情况" || tableName=="表3_5_4教师出版专著情况"  || tableName=="表3_5_5教师专利_著作权_授权情况"  || tableName=="表3_5_6教师主编本专业教材情况"  
			|| tableName=="表7_3_1教育教学研究与改革项目" || tableName=="表7_3_2教学成果奖" || tableName=="表7_3_3省级及以上本科教学工程项目情况" ){
		str += getTableData3(tableName);
	}else if(tableName=="表4_2专业培养计划表" || tableName=="表5_2_1分专业毕业综合训练情况" || tableName=="表5_2_2分专业教师指导学生毕业综合训练情况" || tableName=="表6_2_2本科生辅修_双学位情况"
		|| tableName=="表6_5_2应届本科毕业生分专业毕业就业情况" || tableName=="表5_1_2专业课教学实施情况"){
		str += getTableData4(tableName);
	}else if(tableName=="表5_1_3专业核心课程情况" || tableName=="表5_1_4分专业_大类_专业实验课情况" || tableName=="表5_3_2本科教学信息化"){
		str += getTableData5(tableName);
	}else if(tableName=="表6_6_1学生参加大学生创新创业训练计划情况" || tableName=="表6_6_2学生参与教师科研项目情况" || tableName=="表6_6_3学生获省级及以上各类竞赛奖励情况" || tableName=="表6_6_4学生获专业比赛奖励情况" 
		|| tableName=="表6_6_5学生发表学术论文情况" || tableName=="表6_6_6学生创作_表演的代表性作品" || tableName=="表6_6_7学生专利_著作权_授权情况"){
		str += getTableData6(tableName);
	}else if(tableName=="表6_3_4近一届各专业_大类_招生报到情况" || tableName=="表6_7本科生交流情况"){
		getTableData7(tableName);
	}else if(tableName=="表6_2_1本科生转专业情况"){
		getTableData6_2_1(tableName);
	}
	$("#table_data").html(str);
}

function getTableData1(tname){
	var dateStr = "";
	var fieldName = "";
	if(tname=="表1_4学校教学科研单位"){
		fieldName = "FIELD2";
	}else if(tname=="表1_5_1专业基本情况"){
		fieldName = "FIELD7";
	}else if(tname=="表1_5_2专业大类情况表"){
		fieldName = "FIELD4";
	}else if(tname=="表1_6_1教职工基本信息"){
		fieldName = "FIELD7";
	}else if(tname=="表1_6_2外聘教师基本信息"){
		fieldName = "FIELD8";
	}else if(tname=="表1_6_3附属医院师资情况"){
		fieldName = "FIELD7";
	}else if(tname=="表1_8_1本科实验场所"){
		fieldName = "FIELD4";
	}else if(tname=="表1_8_2科研基地"){
		fieldName = "FIELD3";
	}else if(tname=="表2_4校外实习_实训基地"){
		fieldName = "FIELD3";
	}else if(tname=="表3_2相关管理人员基本信息"){
		fieldName = "FIELD4";
	}else if(tname=="表4_1_2博士后流动点"){
		fieldName = "FIELD1";
	}else if(tname=="表4_1_3博士点_硕士点"){
		fieldName = "FIELD4";
	}else if(tname=="表4_1_4重点学科"){
		fieldName = "FIELD4";
	}else if(tname=="表5_1_1开课情况"){
		fieldName = "FIELD10";
	}
	//查询数据
	$.ajax({
    	url:"/audit/shutcmDataTemplate/findTableDataByXY.do",
    	type:"post",
    	dataType:"json",
    	async:false,
    	data:{
    		"tableName":tname,
    		"field":fieldName,
    		"reportDate" : $("#year").val()
//    		"fieldValue":,
//    		"reportDate":
    	},
    	success:function(data){
    		$("#tableCount").html(data.length);
    		$.each(data,function(i,dom){
    			dateStr += "<tr>";
    			$.each(fieldList,function(m,doc){
					var count = 1, count1 = 0;
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG") count1++;
					})
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG"){
							if(k==doc){
	    						dateStr += "<td>" + obj + "</td>";
	    						return false;
	    					}else{
	    						count++;
	    					}
						}
    				})
    				if(count1!=fieldList.length && count==fieldList.length) dateStr += "<td></td>";
    			})
        		dateStr += "</tr>";
    		})
    	},
    	error:function(){
    		alert("加载失败！");
    	}
    })
    return dateStr;
}

//1-8-1和2-7
function getTableData2(tname){
	var dateStr = "";
	//查询数据
	$.ajax({
    	url:"/audit/shutcmDataTemplate/findTableDataBySY.do",
    	type:"post",
    	dataType:"json",
    	async:false,
    	data:{
    		"tableName":tname,
    		"reportDate" : $("#year").val()
    	},
    	success:function(data){
    		$("#tableCount").html(data.length);
    		$.each(data,function(i,dom){
    			dateStr += "<tr>";
    			$.each(fieldList,function(m,doc){
					var count = 1, count1 = 0;
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG") count1++;
					})
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG"){
							if(k==doc){
	    						dateStr += "<td>" + obj + "</td>";
	    						return false;
	    					}else{
	    						count++;
	    					}
						}
    				})
    				if(count1!=fieldList.length && count==fieldList.length) dateStr += "<td></td>";
    			})
        		dateStr += "</tr>";
    		})
    	},
    	error:function(){
    		alert("加载失败！");
    	}
    })
    return dateStr;
}

function getTableData3(tname){
	var dateStr = "";
	var fieldName = "";
	if(tname=="表3_3_1高层次人才"){
		fieldName = "FIELD1";
	}else if(tname=="表3_3_2高层次教学_研究团队"){
		fieldName = "FIELD3";
	}else if(tname=="表3_4_2教师培训进修_交流情况"){
		fieldName = "FIELD1";
	}else if(tname=="表3_5_1教师主持科研项目情况"){
		fieldName = "FIELD1";
	}else if(tname=="表3_5_2教师获得科研奖励情况"){
		fieldName = "FIELD1";
	}else if(tname=="表3_5_3教师发表的论文情况"){
		fieldName = "FIELD1";
	}else if(tname=="表3_5_4教师出版专著情况"){
		fieldName = "FIELD1";
	}else if(tname=="表3_5_5教师专利_著作权_授权情况"){
		fieldName = "FIELD1";
	}else if(tname=="表3_5_6教师主编本专业教材情况"){
		fieldName = "FIELD1";
	}else if(tname=="表7_3_1教育教学研究与改革项目"){
		fieldName = "FIELD4";
	}else if(tname=="表7_3_2教学成果奖"){
		fieldName = "FIELD1";
	}else if(tname=="表7_3_3省级及以上本科教学工程项目情况"){
		fieldName = "FIELD4";
	}
	//查询数据
	$.ajax({
    	url:"/audit/shutcmDataTemplate/findTableDataByGH.do",
    	type:"post",
    	dataType:"json",
    	async:false,
    	data:{
    		"tableName":tname,
    		"field":fieldName,
    		"reportDate" : $("#year").val()
    	},
    	success:function(data){
    		$("#tableCount").html(data.length);
    		$.each(data,function(i,dom){
    			dateStr += "<tr>";
				$.each(fieldList,function(m,doc){
					var count = 1, count1 = 0;
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG") count1++;
					})
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG"){
							if(k==doc){
	    						dateStr += "<td>" + obj + "</td>";
	    						return false;
	    					}else{
	    						count++;
	    					}
						}
    				})
    				if(count1!=fieldList.length && count==fieldList.length) dateStr += "<td></td>";
    			})
        		dateStr += "</tr>";
    		})
    	},
    	error:function(){
    		alert("加载失败！");
    	}
    })
    return dateStr;
}

function getTableData4(tname){
	var dateStr = "";
	var fieldName = "";
	if(tname=="表4_2专业培养计划表"){
		fieldName = "FIELD1";
	}else if(tname=="表5_2_1分专业毕业综合训练情况"){
		fieldName = "FIELD1";
	}else if(tname=="表5_2_2分专业教师指导学生毕业综合训练情况"){
		fieldName = "FIELD1";
	}else if(tname=="表6_2_2本科生辅修_双学位情况"){
		fieldName = "FIELD4";
	}else if(tname=="表6_5_2应届本科毕业生分专业毕业就业情况"){
		fieldName = "FIELD1";
	}else if(tname=="表5_1_2专业课教学实施情况"){
		fieldName = "FIELD2";
	}
	//查询数据
	$.ajax({
    	url:"/audit/shutcmDataTemplate/findTableDataByZYDM.do",
    	type:"post",
    	dataType:"json",
    	async:false,
    	data:{
    		"tableName":tname,
    		"field":fieldName,
    		"reportDate" : $("#year").val()
    	},
    	success:function(data){
    		$("#tableCount").html(data.length);
    		$.each(data,function(i,dom){
    			dateStr += "<tr>";
    			$.each(fieldList,function(m,doc){
					var count = 1, count1 = 0;
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG") count1++;
					})
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG"){
							if(k==doc){
	    						dateStr += "<td>" + obj + "</td>";
	    						return false;
	    					}else{
	    						count++;
	    					}
						}
    				})
    				if(count1!=fieldList.length && count==fieldList.length) dateStr += "<td></td>";
    			})
        		dateStr += "</tr>";
    		})
    	},
    	error:function(){
    		alert("加载失败！");
    	}
    })
    return dateStr;
}

function getTableData5(tname){
	var dateStr = "";
	var fieldName = "";
	if(tname=="表5_1_3专业核心课程情况"){
		fieldName = "FIELD3";
	}else if(tname=="表5_1_4分专业_大类_专业实验课情况"){
		fieldName = "FIELD3";
	}else if(tname=="表5_3_2本科教学信息化"){
		fieldName = "FIELD2";
	}
	//查询数据
	$.ajax({
    	url:"/audit/shutcmDataTemplate/findTableDataByKCH.do",
    	type:"post",
    	dataType:"json",
    	async:false,
    	data:{
    		"tableName":tname,
    		"field":fieldName,
    		"reportDate" : $("#year").val()
    	},
    	success:function(data){
    		$("#tableCount").html(data.length);
    		$.each(data,function(i,dom){
    			dateStr += "<tr>";
    			$.each(fieldList,function(m,doc){
					var count = 1, count1 = 0;
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG") count1++;
					})
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG"){
							if(k==doc){
	    						dateStr += "<td>" + obj + "</td>";
	    						return false;
	    					}else{
	    						count++;
	    					}
						}
    				})
    				if(count1!=fieldList.length && count==fieldList.length) dateStr += "<td></td>";
    			})
        		dateStr += "</tr>";
    		})
    	},
    	error:function(){
    		alert("加载失败！");
    	}
    })
    return dateStr;
}

function getTableData6(tname){
	var dateStr = "";
	var fieldName = "";
	if(tname=="表6_6_1学生参加大学生创新创业训练计划情况"){
		fieldName = "FIELD1";
	}else if(tname=="表6_6_2学生参与教师科研项目情况"){
		fieldName = "FIELD1";
	}else if(tname=="表6_6_3学生获省级及以上各类竞赛奖励情况"){
		fieldName = "FIELD1";
	}else if(tname=="表6_6_4学生获专业比赛奖励情况"){
		fieldName = "FIELD1";
	}else if(tname=="表6_6_5学生发表学术论文情况"){
		fieldName = "FIELD1";
	}else if(tname=="表6_6_6学生创作_表演的代表性作品"){
		fieldName = "FIELD1";
	}else if(tname=="表6_6_7学生专利_著作权_授权情况"){
		fieldName = "FIELD1";
	}
	//查询数据
	$.ajax({
    	url:"/audit/shutcmDataTemplate/findTableDataByXH.do",
    	type:"post",
    	dataType:"json",
    	async:false,
    	data:{
    		"tableName":tname,
    		"field":fieldName,
    		"reportDate" : $("#year").val()
    	},
    	success:function(data){
    		$("#tableCount").html(data.length);
    		$.each(data,function(i,dom){
    			dateStr += "<tr>";
    			$.each(fieldList,function(m,doc){
					var count = 1, count1 = 0;
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG") count1++;
					})
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG"){
							if(k==doc){
	    						dateStr += "<td>" + obj + "</td>";
	    						return false;
	    					}else{
	    						count++;
	    					}
						}
    				})
    				if(count1!=fieldList.length && count==fieldList.length) dateStr += "<td></td>";
    			})
        		dateStr += "</tr>";
    		})
    	},
    	error:function(){
    		alert("加载失败！");
    	}
    })
    return dateStr;
}

function getTableData7(tname){
	var dateStr = "";
	var fieldName = "FIELD1";
	//查询数据
	$.ajax({
    	url:"/audit/shutcmDataTemplate/findTableDataByZYTo1_5.do",
    	type:"post",
    	dataType:"json",
    	async:false,
    	data:{
    		"tableName":tname,
    		"field":fieldName,
    		"reportDate" : $("#year").val()
    	},
    	success:function(data){
    		$("#tableCount").html(data.length);
    		$.each(data,function(i,dom){
    			dateStr += "<tr>";
    			$.each(fieldList,function(m,doc){
					var count = 1, count1 = 0;
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG") count1++;
					})
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG"){
							if(k==doc){
	    						dateStr += "<td>" + obj + "</td>";
	    						return false;
	    					}else{
	    						count++;
	    					}
						}
    				})
    				if(count1!=fieldList.length && count==fieldList.length) dateStr += "<td></td>";
    			})
        		dateStr += "</tr>";
    		})
    	},
    	error:function(){
    		alert("加载失败！");
    	}
    })
    return dateStr;
}

function getTableData6_2_1(tname){
	var dateStr = "";
	//查询数据
	$.ajax({
    	url:"/audit/shutcmDataTemplate/findTableDataByZYTo1_5And6_2_1.do",
    	type:"post",
    	dataType:"json",
    	async:false,
    	data:{
//    		"tableName":tname,
//    		"field":fieldName,
    		"reportDate" : $("#year").val()
    	},
    	success:function(data){
    		$("#tableCount").html(data.length);
    		$.each(data,function(i,dom){
    			dateStr += "<tr>";
    			$.each(fieldList,function(m,doc){
					var count = 1, count1 = 0;
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG") count1++;
					})
					$.each(dom,function(k,obj){
						if(k!="ID" && k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG"){
							if(k==doc){
	    						dateStr += "<td>" + obj + "</td>";
	    						return false;
	    					}else{
	    						count++;
	    					}
						}
    				})
    				if(count1!=fieldList.length && count==fieldList.length) dateStr += "<td></td>";
    			})
        		dateStr += "</tr>";
    		})
    	},
    	error:function(){
    		alert("加载失败！");
    	}
    })
    return dateStr;
}

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
}