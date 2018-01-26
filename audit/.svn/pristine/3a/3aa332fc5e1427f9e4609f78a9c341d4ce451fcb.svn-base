/**
 * 初始化时间
 * @returns
 */
function showYear(){
	$.ajax({
		url:'/audit/examineScene/scheduleAccessYear.do',
		type:'POST',
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessYearList = dataObj.data.accessYearList;
			var nowYear = "";
			//获取年份
		    var strCookie = document.cookie;
		    var cookies = strCookie.split("; ");
		    for(var i=0;i<cookies.length;i++){
		    	var cookie = cookies[i];
		    	var details = cookie.split("=");
		    	if(details[0] == "assessYear"){
		    		nowYear = eval(details[1]);
		    	}
		    }
			for(var i=0;i<accessYearList.length;i++){
				if(accessYearList[i].accessYear == nowYear){
					$("#schedule_year_select").append("<option value='"+accessYearList[i].id+"' selected='selected'>"+accessYearList[i].accessYear+"</option>");
				}else{
					$("#schedule_year_select").append("<option value='"+accessYearList[i].id+"'>"+accessYearList[i].accessYear+"</option>");
				}
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
	
}
 function getAcademyOption(){//查询学院option
	var accessId = $("#schedule_year_select").val();
	
	//设置当前年份
	var year = $("#schedule_year_select option:selected").text();
	document.cookie="assessYear="+year+";path=/";
	
    $("#schedule_academy_select").empty();
    $("#schedule_academy_select").append("<option value='0'>--请选择--</option>");
    $("#schedule_specialty_select").empty();
    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
	if(accessId==0){
		return;
	}
	$.ajax({
		url:'/audit/examineScene/scheduleAccessSpecialty.do',
		type:'POST',
		data:{"accessId":accessId},
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessSpecialtyList = dataObj.data.accessSpecialtyList;
		    var result = [], hash = {};
		    for (var i = 0,elem;i<accessSpecialtyList.length; i++) {
		    	elem = accessSpecialtyList[i].academyId;
		        if (!hash[elem]) {
		            result.push(accessSpecialtyList[i]);
		            hash[elem] = true;
		        }
		    }
		    $("#schedule_academy_select").empty();
		    $("#schedule_academy_select").append("<option value='0'>--请选择--</option>");
			for(var i=0;i<result.length;i++){
				$("#schedule_academy_select").append("<option value='"+result[i].academyId+"' >"+result[i].academyName+"</option>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}

function getSpecialtyOption(){//查询专业的option
	var accessId = $("#schedule_year_select").val();
	var academyId = $("#schedule_academy_select").val();
    $("#schedule_specialty_select").empty();
    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
	if(academyId==0){
		return;
	}
	$.ajax({
		url:'/audit/examineScene/scheduleAccessSpecialty.do',
		type:'POST',
		data:{"accessId":accessId,"academyId":academyId},
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessSpecialtyList = dataObj.data.accessSpecialtyList;
		    var result = [], hash = {};
		    for (var i = 0,elem;i<accessSpecialtyList.length; i++) {
		    	elem = accessSpecialtyList[i].specialtyId;
		        if (!hash[elem]) {
		            result.push(accessSpecialtyList[i]);
		            hash[elem] = true;
		        }
		    }
		    $("#schedule_specialty_select").empty();
		    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
			for(var i=0;i<result.length;i++){
				$("#schedule_specialty_select").append("<option value='"+result[i].specialtyId+"' defaultStandartId='"+result[i].defaultStandartId+"'>"+result[i].specialtyName+"</option>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}