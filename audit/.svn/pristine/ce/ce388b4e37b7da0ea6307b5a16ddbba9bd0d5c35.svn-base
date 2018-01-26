var request =GetRequest();
var sysid=request.sysid;
var specialtyId=request.specialtyId;
var syear=request.syear;

$(function(){
	
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoXueYuanController/getDataCailiao.do",
		type:'POST',
		async:false,
		data:{
			'id':sysid,
			'dateYear':syear,
			'specialtyId':specialtyId
		},
		success : function(oData) {
			var datas=eval(oData);
			var urls = datas[0].FILE_ONLINE_URL.split("\\");
			var url = urls[urls.length-1];
			showzccl(url);
			var str = "";
			$.each(datas,function(i,dom){
				var urls = dom.FILE_ONLINE_URL.split("\\");
				var url = urls[urls.length-1];
				
				if(i==0){
					str += "<li id='fir'  style='width:100%'><a class='li' id='ss' href='javascript:void(0);' onclick=\"lookSystem('"+url+"');\" >" +
					"<div class='fir_div'>"+dom.FILE_NAME+"</div></a></li>";
				}else{
					str += "<li id='fir'  style='width:100%'><a class='li' href='javascript:void(0);' onclick=\"lookSystem('"+url+"');\" >" +
							"<div class='fir_div'>"+dom.FILE_NAME+"</div></a></li>";
				}
			})
			$("#tab1").html(str);
		},
		error : function(oData) {
			alert("数据加载失败");
		}
	});
})

function  showzccl(onlineurl){
		 var a="/audit/upload/"+onlineurl;
		 var fp = new FlexPaperViewer(    
	             '/audit/FlexPaper/swfFiles/FlexPaperViewer', 
	            //  对应于p 标签的id
	             'viewerPlaceHolder',   
	             { config : { 
	           //导入的.swf的路径,文件名称使用英语表示，中文时显示不出来，暂时未解决这个问题
	            SwfFile :escape(a),
	           //  SwfFile :escape('F:\\upload\\1431589237438.swf'),                
	             Scale : 1.6, 
	             ZoomTransition : 'easeOut',
	             ZoomTime : 0.5,
	             ZoomInterval : 0.2,
	             FitPageOnLoad : true,
	             FitWidthOnLoad : true,
	             PrintEnabled : true,// 是否可以打印  
	             FullScreenAsMaxWindow : false,
	             ProgressiveLoading : false,
	             MinZoomSize : 0.2,
	             MaxZoomSize : 10,
	             SearchMatchAll : false,
	             InitViewMode : 'Portrait',
	             
	             ViewModeToolsVisible : true,
	             ZoomToolsVisible : true,
	             NavToolsVisible : true,
	             CursorToolsVisible : true,
	             SearchToolsVisible : true,
	               localeChain: 'en_US'
	             }});
		 $("#midTablle1").hide();
		 $("#viewId").show();
}

function getQueryString(name) { 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) return unescape(r[2]); return null; 
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
	return theRequest; 
}