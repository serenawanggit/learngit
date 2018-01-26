$(function(){
	/*var type = eval("("+$("#inspectTypeId").val()+")");
	var sceneType = type.data.asAccessSystemCode;
	$("#sceneTypeId").empty();
		var selectedTypeId = $("#selectedTypeId").val();
		var str = "";
		for(var i=0;i<sceneType.length;i++){
			str +="<label>"
				+"<input type='radio' name='optionsRadios' id='radios"+sceneType[i].id+"' value='"+sceneType[i].id+"' "+(selectedTypeId==sceneType[i].id?"checked='true'":"")+">"
		        +sceneType[i].codeValueName
		        +"</label>"
		}
		$("#sceneTypeId").append(str);*/
	    $("#sceneTypeId").empty();
		var selectedTypeName = $("#selectedTypeName").val();
		$("#sceneTypeId").append(selectedTypeName);
		
		var inspectContent= $("#inspectContentId").val();
		$("#sceneRecordId").val(inspectContent);
});
function saveSceneRecord(){//保存现场考查记录
	//var inspectId = $('input[name=optionsRadios]:checked').val();
	if(confirm("确定保存数据吗？")){
		$("#inspectContent").val(editor.html());
	    $("#sceneRecordId").submit();
	}
	 /*
	  var sceneRecord = $("#sceneRecordId").val();
	   var sceneId = $("#sceneId").val();
	   $.ajax({
		 type:'post',
		 url:'/audit/examineScene/sceneUpdateSceneTasks.do',
		 data:{"inspectContent":sceneRecord,"id":sceneId},
		 dataType:'json',
		 success:function(result){
			 if(result==1){
				 alert("保存成功！");
			 }
			 backScene();
		 },
		 error:function(){
			 alert("系统繁忙，请稍后重试！");
		 }
	 });*/
}
function backScene(){//返回现场考查初始页面
	var xckcYearId=$("#xckcYearId").attr("xckc");
	var xckcAcademyId=$("#xckcAcademyId").attr("xckc");
	var xckcSpcialtyId=$("#xckcSpcialtyId").attr("xckc");
	var isback = "true";
	window.location.href = "/audit/page/majorEvaluation/siteVisitMyInspection.jsp?" +
			"xckcYearId="+xckcYearId+"&xckcAcademyId="+xckcAcademyId+"&xckcSpcialtyId="+xckcSpcialtyId+"&isback="+isback;
}