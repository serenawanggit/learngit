$(function(){
	load();
})
var sContentPath;
var speName;
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
}
function load(){
	sContentPath = getContentPath();
	var dataReport;
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var type = $("#type").val();
	$.ajax({
		url: sContentPath+"/asAssessReport/getAllReportBySpeId.do",
		type:'POST',
		dataType:'json',
		async:false,
		data:{
			"specialtyId":specialtyId,
			"dateYear":dateYear,
			"type":type
		},
		success:function(data){
			var datas = eval("("+data+")");
			dataReport = datas;
			
			var htmls = "";
			if(dataReport.length > 0){
				var m = 1;
				var n = 1;
				htmls+="<div ><center><table cellspacing='0' cellpadding='0' style='width:90%;border:1px solid white'>" +
						"<tr><td style='text-align:center;border:1px solid white' colspan='4'><img src='images/photo.png'/></td></tr>" +
						"<tr><td style='text-align:center;border:1px solid white' colspan='4'><span style='font-size:52px;font-weight:bold'>本科专业质量报告</span></td></tr>" +
				"<tr><td style='width:20%;border:1px solid white'></td><td style='text-align:right;border:1px solid white;height:35px'>学院:</td><td style='width:37%;border:1px solid white;border-bottom:2px solid black;text-align:center' id='college'></td><td style='width:28%;border:1px solid white'></td></tr>" +
				"<tr><td style='width:20%;border:1px solid white'></td><td style='text-align:right;border:1px solid white;height:35px'>专业:</td><td style='width:37%;border:1px solid white;border-bottom:2px solid black;text-align:center' id='specialtys'></td><td style='width:28%;border:1px solid white' ></td></tr>" +
				"<tr><td style='width:20%;border:1px solid white'> </td><td style='text-align:right;border:1px solid white;height:35px'>完成时间:</td><td style='width:37%;border:1px solid white;border-bottom:2px solid black;text-align:center' id='completeTime'></td><td style='width:28%;border:1px solid white' ></td></tr>" +
				"<tr><td style='width:20%;border:1px solid white'></td><td style='text-align:right;border:1px solid white;height:35px'>专业负责人:</td><td style='width:37%;border:1px solid white;border-bottom:2px solid black;text-align:center' id='headPeople'></td><td style='width:28%;border:1px solid white' ></td></tr>" +
				"<tr><td style='width:20%;border:1px solid white'></td><td style='text-align:right;border:1px solid white;height:35px'>联系电话:</td><td style='width:37%;border:1px solid white;border-bottom:2px solid black;text-align:center'  id='phoneNum'></td><td style='width:28%;border:1px solid white'></td></tr>" +
				"<tr><td style='width:20%;border:1px solid white'></td><td style='text-align:right;border:1px solid white;height:35px'>学院负责人签字:</td><td style='width:37%;border:1px solid white;border-bottom:2px solid black;text-align:center' id='sign'></td ><td style='width:28%;border:1px solid white' ></td></tr>" +
				"<tr><td style='width:20%;border:1px solid white'></td><td style='text-align:right;border:1px solid white;height:35px'>学院盖章:</td><td style='width:37%;border:1px solid white;border-bottom:2px solid black;text-align:center' id='seal'></td><td style='width:28%;border:1px solid white' ></td></tr></table></center></div>";
				for ( var i = 0; i < dataReport.length; i++) {
					if(dataReport[i].parent_id==0){
						htmls+="<div style='list-style-type:none' ><div><div style='height:50px;'><h2 style='line-height:50px;'>";if(m==1){htmls+="一、";}else if(m==2){htmls+="二、";}else if(m==3){htmls+="三、";}htmls+=dataReport[i].system_name+"</h2></div>";
						if(dataReport[i].enter_content!=null&&dataReport[i].enter_content!=undefined&&dataReport[i].enter_content!=""){
							htmls+=dataReport[i].enter_content+"</div><div id='system"+dataReport[i].id+"'></div></div>"
						}else{
							if(dataReport[i].upload_content!=null&&dataReport[i].upload_content!=undefined&&dataReport[i].upload_content!=""){
								htmls+=dataReport[i].upload_content+"</div><div id='system"+dataReport[i].id+"'></div><div>"
							}else{
								htmls+="</div><div id='system"+dataReport[i].id+"'></div></div>";
							}
						}
						m++
						}
					}	
				}
			
			htmls+="</div>";
			$("#showReport").html(htmls);
			}	
		
	})
	var n = 1;
	
	for ( var i = 0; i < dataReport.length; i++) {
				if(dataReport[i].parent_id!=0){
					var htmls = "<div style='list-style-type:none'><h2>"+n+"."+dataReport[i].system_name+"</h2>";
					if(dataReport[i].enter_content!=null&&dataReport[i].enter_content!=undefined&&dataReport[i].enter_content!=""){
						htmls += dataReport[i].enter_content+"</div>"
					}else{
						if(dataReport[i].upload_content!=null&&dataReport[i].upload_content!=undefined&&dataReport[i].upload_content!=""){
							htmls+=dataReport[i].upload_content+"</div>"
						}
					}
					$("#system"+dataReport[i].parent_id).append(htmls);
					n++;
				}
	}
	$.ajax({
		url: sContentPath+"/asAssessReport/getAllData.do",
		type:'POST',
		data:{
			"specialtyId":specialtyId
		},
		async:false,
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				speName = 	datas[0].specialty_name;
				$("#speName").val(speName);
				$("#specialtys").html(speName);
				$("#college").html(datas[0].name);
				var html = $("#showReport").html();
				$("#contents").val(html);
			}
		}
	});
}

function downHtmlToWord(){
	$("#downWordHtml").submit();
}

