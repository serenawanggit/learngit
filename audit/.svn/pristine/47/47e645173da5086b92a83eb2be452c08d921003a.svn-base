   var sContentPath = getContentPath();
     function getContentPath(){
        	var pathName = document.location.pathname;
        	var index = pathName.substr(1).indexOf("/");
        	var result = pathName.substr(0, index + 1);
        	return result;
        	
      }
     var nowChos;
     var zylxIds;
$(function(){
	zylxIds=window.location.href;
	zylxIds="&"+zylxIds.substring(zylxIds.indexOf('?')+1);
	var date = new Date();
	var nowDate = parseInt(date.getFullYear());
	 var len =  nowDate - 2013; 
    for(var i = 0; i < len; i++) {
     	$("#dateYear").append("<option value='"+(2013+i)+"' >" + (2013+i)+"</option>");
     	$("#dateYear_course").append("<option value='"+(2013+i)+"' >" + (2013+i)+"</option>");
     	$("#dateYear_major").append("<option value='"+(2013+i)+"' >" + (2013+i)+"</option>");
	}
        for ( var i = 0; i < 4; i++){
     	if(i==0){
     		$("#dateYear").append("<option value='"+(nowDate+i)+"' selected='selected' >" + (nowDate+i)+"</option>");
     		$("#dateYear_course").append("<option value='"+(nowDate+i)+"' selected='selected' >" + (nowDate+i)+"</option>");
     		$("#dateYear_major").append("<option value='"+(nowDate+i)+"' selected='selected' >" + (nowDate+i)+"</option>");
     	}else{
     		$("#dateYear").append("<option value='"+(nowDate+i)+"' >"+ (nowDate+i)+"</option>");
     		$("#dateYear_course").append("<option value='"+(nowDate+i)+"' >"+ (nowDate+i)+"</option>");
     		$("#dateYear_major").append("<option value='"+(nowDate+i)+"' >"+ (nowDate+i)+"</option>");
     	}
     }
      
        var nowDates = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
        if(Date.parse(nowDates)<Date.parse(date.getFullYear()+"/03/01")){
        	$("#dateYear").val(date.getFullYear()-1);
        	$("#dateYear_course").val(date.getFullYear()-1);
        	$("#dateYear_major").val(date.getFullYear()-1);
        }
        if($.cookie("date-chos")){
        	 nowChos =  JSON.parse($.cookie("date-chos"));
        	 $("#dateYear").val(nowChos);
        	 $("#dateYear_course").val(nowChos);
        	 $("#dateYear_major").val(nowChos);
        }
        load();
})


	function load(){
	//alert("我是zenith"+window.location.href);
		getCollegerOrCourse();
		var pgid = $("#zylxId").val();
	   	var syear =  $("#dateYear").val();
		$.ajax({
			url: sContentPath+"/assessmentSpecialtyInfoController/getAllSpecialty.do",
			async:false,
			type:'POST',
			data:{
				"syear":syear,
				"pgid":pgid
			},
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
					var dateYear =$("#dateYear").val();
					var htmls = "";
						for ( var i = 0; i < datas.length; i++) {
							htmls += "<tr><td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+datas[i].specialty_code+"</td><td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+datas[i].specialty_name+"</td>";
							htmls+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'><a href='javascript:void(0)' onclick=\"changeLocation("+datas[i].id+",'"+dateYear+"',"+datas[i].zylxId+")\"><img src='page/zenith/staticPage/img/assess.png' title='审核'/></a></td></tr>";
						}
					$("#tb_tbody2").html(htmls);
			}
		});//
		var syear_c =  $("#dateYear_course").val();
		$.ajax({
			url: sContentPath+"/assessmentSpecialtyInfoController/getAllSpecialty.do",
			async:false,
			type:'POST',
			data:{
				"syear":syear_c,
				"pgid":pgid
			},
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
					var dateYear =$("#dateYear_course").val();
					var htmls = "";
						for ( var i = 0; i < datas.length; i++) {
							htmls += "<tr><td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+datas[i].specialty_code+"</td><td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+datas[i].specialty_name+"</td>";
							htmls+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'><a href='javascript:void(0)' onclick=\"changeLocation("+datas[i].id+",'"+dateYear+"',"+datas[i].zylxId+")\"><img src='page/zenith/staticPage/img/assess.png' title='审核'/></a></td></tr>";
						}
					$("#course_tbody2").html(htmls);
			}
		});
		
		var syear_m =  $("#dateYear_major").val();
		$.ajax({
			url: sContentPath+"/assessmentSpecialtyInfoController/getAllSpecialty.do",
			async:false,
			type:'POST',
			data:{
				"syear":syear_m,
				"pgid":pgid
			},
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
					var dateYear =$("#dateYear_major").val();
					var htmls = "";
						for ( var i = 0; i < datas.length; i++) {
							htmls += "<tr><td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+datas[i].specialty_code+"</td><td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+datas[i].specialty_name+"</td>";
							htmls+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'><a href='javascript:void(0)' onclick=\"changeLocation("+datas[i].id+",'"+dateYear+"',"+datas[i].zylxId+")\"><img src='page/zenith/staticPage/img/assess.png' title='审核'/></a></td></tr>";
						}
					$("#major_tbody2").html(htmls);
			}
		});
	}

function changeLocation(id,dateYear,zyId){
	//alert(zyId); 
	window.parent.location.href=sContentPath+"/page/zenith/staticPage/home_1.jsp?specialtyId="+id+"&dateYear="+dateYear+zylxIds+"&zyId="+zyId;
}

function getCookie(cookie_name){
	var allcookies = document.cookie;
	var cookie_pos = allcookies.indexOf(cookie_name); //索引的长度  
	// 如果找到了索引，就代表cookie存在，  
	// 反之，就说明不存在。  
	if (cookie_pos != -1){
		// 把cookie_pos放在值的开始，只要给值加1即可。  
		cookie_pos += cookie_name.length + 1; 
		var cookie_end = allcookies.indexOf(";", cookie_pos);
		if (cookie_end == -1)
		{
			cookie_end = allcookies.length;
		}
		var value = unescape(allcookies.substring(cookie_pos, cookie_end)); 
	}
	return value;
}  

function logout(){
	window.location.href="/logout";
}

function getDate(){
	nowChos = $("#dateYear").val();
	$.cookie("date-chos",JSON.stringify(nowChos))
	load();
}


function getCollegerOrCourse(){
	var zylxId = $("#zylxId").val();
	$.ajax({
		url:sContentPath+"/asAssessReport/getAssessmentTypeById.do",
		type:'POST',
		async:false,
		data:{
			"id":zylxId
		},
		success:function(data){
			var datas = eval("("+data+")");
			if(datas=="学院评估"){
				$("#assess_college").show();
				$("#assess_course").hide();
				$("#assess_major").hide();
				$("#assessName").html("学院评估");
			}else if(datas=="课程评估"){
				$("#assess_college").hide();
				$("#assess_course").show();
				$("#assess_major").hide();
				$("#assessName").html("课程评估");
			}else{
				$("#assess_college").hide();
				$("#assess_course").hide();
				$("#assess_major").show();
				$("#assessName").html("专业评估");
			}
		}
	})
}