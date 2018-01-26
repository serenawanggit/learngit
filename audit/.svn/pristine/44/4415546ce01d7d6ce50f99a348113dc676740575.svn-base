var yearArr=new Array();
jQuery(document).ready(function(){
	jumpTo();
	validateLogin();
	
});
function jumpTo(){
	var type = getQueryString("mid");
	if(type == null || type == ""){
		// 获取已有年份存储到数组中
	    getYear();
	    //ajax获取专业评估年份--方法已经同步
		searchYear();
		 //检查年份选择或不可用  
		checkYaer();
		
		zhanbi();
		//初始化下载材料
		showData();
		return;
	}
	var year = getQueryString("year");
	if(type == 1){
		 window.location.href = "/audit/self/selfView.do?year="+year;
	 }else if (type == 2){
		 window.location.href = "/audit/page/majorEvaluation/commentZJ.jsp?year="+year;
	 }else if (type == 3){
		 window.location.href = "/audit/examineScene/siteVisitCommon.do?year="+year;
	 }else if (type == 4){
		 window.location.href = "/audit/page/majorEvaluation/conditionEstimationPG.jsp?year="+year;
	 }
	 document.cookie="assessYear="+year+";path=/";
}

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
} 

function zhanbi(){
	
	var statisticsTable = $("#statisticsTable");
	var oList=$("#oList li:eq(2)").text();
	jQuery.ajax({
		type: "POST", 
  		dataType:"JSON",
  		url:"/audit/asAccessInfoController/earchPipn.do?assessYear="+oList,
  		error:function(){
  			alert('初始化错误..homePage.js line：1');
  		},
  		success: function(result){
  			if (result==null) {
  				var html = "<tr class='table-tr'>"+
						"<td class='table-tr-th1'></td>"+
						"<td class='table-tr-th2'>专业自评</td>"+
						"<td class='table-tr-th3'>专家网评</td>"+
						"<td class='table-tr-th4'>现场考查</td>"+
					"</tr>"+
					"<tr>"+
						"<td class='table-tr-td1'>参与专业数</td>"+
						"<td class='table-tr-td234'>0</td>"+
						"<td class='table-tr-td234'>0</td>"+
						"<td class='table-tr-td234'>0</td>"+
					"</tr>"+
					"<tr>"+
						"<td class='table-tr-td1white'>已完成专业数</td>"+
						"<td class='table-tr-td234'>0</td>"+
						"<td class='table-tr-td234'>0</td>"+
						"<td class='table-tr-td234'>0</td>"+
					"</tr>"+
					"<tr>"+
						"<td class='table-tr-td1'>已完成占比</td>";
  				html+="  <td class='table-tr-td1'>0</td>";
  				html+="  <td class='table-tr-td1'>0</td>";
				html+="  <td class='table-tr-td234'>0</td>";
				html+="</tr>";
				statisticsTable.html(html);
				return;
			}
  			
  			var results = eval("("+result+")");
  			var data=results.data;
  			//求出各项 的占比
  			var zpWCzb = (data[0].zipingWC/data[0].ziping)*100;
  			var wpWCzb = (data[0].wangpingWC/data[0].wangping)*100;
  			var kcWCzb = (data[0].kaochaWC/data[0].kaocha)*100;

  			zpWCzb = isNaN(zpWCzb)?0:zpWCzb;
  			wpWCzb = isNaN(wpWCzb)?0:wpWCzb;
  			kcWCzb = isNaN(kcWCzb)?0:kcWCzb;
  			
  			var html = "<tr class='table-tr'>"+
							"<td class='table-tr-th1'></td>"+
							"<td class='table-tr-th2'>专业自评</td>"+
							"<td class='table-tr-th3'>专家网评</td>"+
							"<td class='table-tr-th4'>现场考查</td>"+
						"</tr>"+
						"<tr>"+
							"<td class='table-tr-td1'>参与专业数</td>"+
							"<td class='table-tr-td234'>"+data[0].ziping+"</td>"+
							"<td class='table-tr-td234'>"+data[0].wangping+"</td>"+
							"<td class='table-tr-td234'>"+data[0].kaocha+"</td>"+
						"</tr>"+
						"<tr>"+
							"<td class='table-tr-td1white'>已完成专业数</td>"+
							"<td class='table-tr-td234'>"+data[0].zipingWC+"</td>"+
							"<td class='table-tr-td234'>"+data[0].wangpingWC+"</td>"+
							"<td class='table-tr-td234'>"+data[0].kaochaWC+"</td>"+
						"</tr>"+
						"<tr>"+
							"<td class='table-tr-td1'>已完成占比</td>";
							if (zpWCzb==Infinity||zpWCzb<0) {
								html+="<td class='table-tr-td234'>0</td>";
							}if(zpWCzb==0){
								html+="<td class='table-tr-td234'>0</td>";
							}else{
								html+="<td class='table-tr-td234'>"+zpWCzb.toFixed(2)+"%</td>";
							}
  							if (wpWCzb==Infinity||wpWCzb<0) {
  								html+="<td class='table-tr-td234'>0</td>";
							}if(wpWCzb==0){
								html+="<td class='table-tr-td234'>0</td>";
							}else{
								html+="<td class='table-tr-td234'>"+wpWCzb.toFixed(2)+"%</td>";
							}
  							if (kcWCzb==Infinity||kcWCzb<0) {
  								html+="<td class='table-tr-td234'>0</td>";
							}if(kcWCzb==0){
								html+="<td class='table-tr-td234'>0</td>";
							}else{
								html+="<td class='table-tr-td234'>"+kcWCzb.toFixed(2)+"%</td>";
							}
  							html+="</tr>";
  				//给table加上数据
  	  			statisticsTable.html(html);
  		}
	});
	
}


//管理员上传的文件加在线预览

function showData(){
	$.ajax({
		 type:"POST",
		 url:"/audit/asAccessDataOnLineController/showData.do",
		 dataType:"json",
		 success:function(msg){
			 var result = msg.list;
			//'"+result[int].accessDataOnline+"'
			 var str="";
			 for ( var int = 0; int < result.length; int++) {
			    str+="<li><a href='javaScript:void(0)' onclick='showOnline(this)' style='font-size:14px;'>";
			    str+=result[int].name;
			    str+="</a><input type='hide' value='"+result[int].accessDataOnline+"'/> &nbsp;&nbsp;<span style='font-size:13px;color:blue;cursor:pointer;'  onclick=\"downFile('"+result[int].name+"','"+result[int].dataType+"')\" >下载</span></li>";
			 }
			 $("#clxz").html(str);
		 },
		 error:function(){
			 alert("加载专业评估材料失败！");
		 }
		
	});

}

function showOnline(element){
	 var input=$(element).parent().find("input").val();
	 window.open("page/majorEvaluation/readonline.jsp?wj="+input,null,"height=300, width=800, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}

function checkCouldIn(type){
	var oList=$("#oList li:eq(2)").text();
	
	if(oList == ""){
		return;
	}
	
	$.ajax({
		 type:"POST",
		 url:"/audit/self/checkCouldIn.do",
		 data: {
			year : oList,
			type : type,
		 },
		 dataType:"json",
		 success:function(dataString){
			 var data = eval("("+dataString+")");
			 var msg = data.comment;
			 if(data.ok){
				 if(type == 1){
					 window.location.href = "/audit/self/selfView.do?year="+oList+"&operateType="+data.data;
				 }else if (type == 2){
					 window.location.href = "/audit/page/majorEvaluation/commentZJ.jsp?year="+oList;
				 }else if (type == 3){
					 window.location.href = "/audit/examineScene/siteVisitCommon.do?year="+oList;
				 }else if (type == 4){
					 window.location.href = "/audit/page/majorEvaluation/conditionEstimationPG.jsp?year="+oList;
				 }
				 document.cookie="assessYear="+oList+";path=/";
			 }else{
				 alert(msg);
			 }
		}
	});
}


function getYear(){
    var d = new Date();
    nowYear = +d.getFullYear();
    
    //获取年份
    var strCookie = document.cookie;
    var cookies = strCookie.split("; ");
    for(var i=0;i<cookies.length;i++){
    	var cookie = cookies[i];
    	var details = cookie.split("=");
    	if(details[0] == "assessYear"){
    		if(details[1]!="")
    		nowYear = eval(details[1]);
    	}
    }
    var html ="<li id='year"+(nowYear-2)+"'>"+(nowYear-2)+"</li>";
        html+="<li id='year"+(nowYear-1)+"'>"+(nowYear-1)+"</li>";
        html+="<li id='year"+(nowYear)+"'>"+(nowYear)+"</li>";
        html+="<li id='year"+(nowYear+1)+"'>"+(nowYear+1)+"</li>";
        html+="<li id='year"+(nowYear+2)+"'>"+(nowYear+2)+"</li>";
    $("#oList").html(html);
}

/* 检查年份选择或不可用  */
function checkYaer(){
	$.each(yearArr,function(i,year){
		$("#oList li[id=year"+year+"]").css("color","black");
	});
	$("#oList li:eq(2)")[0].style.color == "black" ? $("#oList li:eq(2)").css("color","red") : 0;
}
/* 下一年  */
function nextYear(){
	//获取ul最后一个li的年份 +1
	var nextYear=parseInt($("#oList li").last().text());
	//最后一个li
	html="<li id='year"+(nextYear+1)+"'>"+(nextYear+1)+"</li>";
	//获取ul第一个li 删除
	$("#oList li").eq(0).remove();
	$("#oList").append(html);
	
	checkYaer();
	/* 查询占比  */
	zhanbi();
}
/* 上一年  */
function firstYear(){
	//获取ul第一个li的年份 -1
	var firstYear=parseInt($("#oList li").first().text());
	html="<li id='year"+(firstYear-1)+"'>"+(firstYear-1)+"</li>";
	//获取ul最后一年 删除
	$("#oList li").eq(4).remove();
	$("#oList").prepend(html);
	checkYaer();
	/* 查询占比  */
	zhanbi();
}

//获取专业评估所有年份
function searchYear(){
	jQuery.ajax({
		type: "POST", 
  		dataType:"JSON",
  		url:"/audit/asAccessInfoController/searchAllYear.do",
  		async: false,
  		success: function(result){
  			var results = eval("("+result+")");
  			var data = results.data;
  			if(results.ok){
  				for(var i=0;i<data.length;i++){
  		    		yearArr.push(data[i].accessYear);
  		    	}
  			}
  		},error:function(){
  			alert("专业评估-获取年份出现错误");
  		}
	});
}

function downFile(str,type){
	$("#filename").val(str);
	$("#datatype").val(type);
	document.getElementById("dataform").submit();
}