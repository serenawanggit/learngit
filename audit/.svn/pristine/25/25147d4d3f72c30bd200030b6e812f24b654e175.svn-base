function getReport(){
	var accessSpecialtyId = $("#accessSpecialtyId").val();
	if(accessSpecialtyId == ""){
		return;
	}
	$.ajax({
		 url:"/audit/siteCheck/findReport.do",
		 data:{
			id:  accessSpecialtyId
		 },
		 type : "post",
		 dataType : "json",
		 async:false,
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			 var data = eval("("+dataString+")");
			 reportArray = new Array();
			 var list = data.data;
			 for ( var i = 0; i < list.length; i++) {
				var record = list[i];
				var html="<tr><td align='left' id='maodian_"+record.id+"' name='maodian_"+record.id+"' style='border-top:#DADADA 1px dotted;'>";
				html +="<h3>"+record.nodeName+"</h3><br>"+record.content+"<td></tr>";
				$("#contentList").append(html);
				
				html = "<tr><td align='center' style='padding:5px;border-bottom:#F1F1F1 1px dotted;'>";
				html+="<a href='#maodian_"+record.id+"' style='display:inline-block;width:100px;height:;line-height:;color:#CCCCCC;text-decoration:none;text-align:left;'>"+record.nodeName+"</a></td></tr>"
				$("#maodianList").append(html);
			 }
		 }
	});
	var isExport = $("#isExport").val();
	if(isExport == 1){
		saveHTMLFile();
	}
}

function saveHTMLFile(){
    var fileInfo = document.documentElement.outerHTML;
    fileInfo = fileInfo.replace("isExport","isExportP");
    fileInfo = fileInfo.replace("getReport();","");
    $("#fileInfo").val(fileInfo);
    $("#download").submit();
}
