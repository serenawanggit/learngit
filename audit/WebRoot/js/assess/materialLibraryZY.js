/**
 * 初始化 
 */
//初始化文件夹 和 文件
var count=0;//选中数量
var entrance=0;//总文件数量
// 用户文件存放路径
jQuery(document).ready(function(){
	// 初始化用户文件存放路径
	userFilePath = $("#userFilePath").val();
	var isExists = $("#isExist").val();//查看该用户是否在room表中存在
	var roomTableid = $("#roomTableid").val();//根目录id
//	if (0==isExists) {
//		alert("您暂时没有材料库权限,请为该用户添加材料库");
//		window.location.href="/audit/page/majorEvaluation/homePage.jsp";
//		return;
//	}
	// 默认初始化文件和文件夹
	searchDataTable(roomTableid,"");
	//初始化总加载文件数量显示
	$("#entranceCount").html("");
	$("#entranceCount").html(entrance);
	
});
//提交上传文件
var tableid=1;
function importFile(){
	$("#myform").ajaxSubmit({
		url :  "/audit/loadController/upload.do", // 请求的url  
		type : "POST", // 请求方式
		async :false, // 异步
		data:{"userFilePath":userFilePath,"tableid":tableid},
		error:function(){
			alert("提交的文件不对，请选择正确的文件提交！");
		},
		success : function(msg){
			var result = eval("("+msg+")");
			if (result=="count") {
				alert("文件重复");
			}else{
				alert("上传成功");
				searchDataTable(tableid,"");
			}
		},
	});
}
var userFilePath = "";

var parentId=1;

// 进去文件夹并查询该文件夹下面的文件夹和文件
// 查询父文件夹下的文件夹 dataTableI [对应的tableid = parentId]
function searchDataTable(dataTableId,dataTableName){
	// 点击文件夹后切换用户保存的路径
	tableid=dataTableId;
	if(dataTableName != undefined && dataTableName!=""){
	   userFilePath += "/" + dataTableName;
	}
	entrance=0;
	count=0;
	$("#labCount").html("");
	$("#labCount").html(count);
	parentId=dataTableId;
	$("#assessDataTableMain").html("");
	//查询父类id下面文件和文件
	jQuery.ajax({
		async: false,
		type: "POST", 
  		dataType:"JSON",
  		url:"/audit/asAccessDataTableController/searchDataTableTable.do",
  		data:{"dataTableId":dataTableId},
  		error:function(){
  			alert('初始化错误..materialLibraryZY.js line：116');
  		},
  		success: function(result){
  			var results = eval("("+result+")");
  			var data=results.data;
  			if (data==null) {
  				entrance+=0;
			}else{
				entrance+=data.length;
			}
  			var html="";
  			if (data!=null) {
  				formatData(data);
  			}else{
  			}
  		}
	});
	$("#entranceCount").html("");
	$("#entranceCount").html(entrance);
	//加载改文件夹下的 文件
	searchDataInfo(dataTableId);
	//添加上一层
	rollbackCount(dataTableId,dataTableName);
}

//查询父文件夹下的文件
function searchDataInfo(dataTableId){
	jQuery.ajax({
		async: false,
		type: "POST", 
  		dataType:"JSON",
  		url:"/audit/asAccessDataInfoController/searchAssessDataTableInfo.do",
  		data:{"dataTableId":dataTableId},
  		error:function(){
  			alert('初始化错误..materialLibraryZY.js line：125');
  		},
  		success: function(result){
  			var results = eval("("+result+")");
  			var data=results.data;
  			if (data==null) {
  				entrance+=0;
			}else{
				entrance+=data.length;
			}
  			var html="";
  			if (data!=null) {
	  			for ( var i = 0; i < data.length; i++) {
	  				html+="<div style='overflow: hidden;text-overflow:ellipsis;white-space:nowrap;' name=\"dataInfoName\" onmouseout=\"mouseoutImg(this);\" onmousemove='mousemoveImg(this);' class=\"bootom-div\">";
					html+=" 	<div class=\"bootom-div-no\">";
					html+="			<div id=\""+data[i].tableId+"\" onclick=\"clickDiv(this);\" style=\"cursor:pointer;width: 18px;height:18px;margin-left:1px;margin-top:2px;\">" +
					  	  "		<input type=\"hidden\" value=\""+data[i].id+"\"></input>	<img src=\"/audit/img/majorEvaluation/kongbai.png\" />" +
					      "			</div>";
					html+="		<div class=\"bootom-div-img\">";
					if (data[i].dataType=="doc" || data[i].dataType=="docx") {
						html+="			<img src=\"/audit/img/majorEvaluation/doc.png\" />";
					}else if(data[i].dataType=="xls" || data[i].dataType=="xlsx"){
						html+="			<img src=\"/audit/img/majorEvaluation/xls.png\" />";
					}else if(data[i].dataType=="ppt"){
						html+="			<img src=\"/audit/img/majorEvaluation/ppt.png\" />";
					}else if(data[i].dataType=="png" || data[i].dataType=="jpg"|| data[i].dataType=="pdf"|| data[i].dataType=="jpeg"){
						html+="			<img src=\"/audit/img/majorEvaluation/png.png\" />";
					}else if(data[i].dataType=="txt"){
						html+="			<img src=\"/audit/img/majorEvaluation/txt.png\" />";
					}else{
						html+="			<img src=\"/audit/img/majorEvaluation/kongwenjian.png\" />";
					}
					html+="		</div>";
					html+="		</div>";
					html+="		<div class=\"bootom-div-li\">";
					html+="			<li class=\"bootom-li\">" +
						  "			<input type=\"hidden\" name='datainfoid' value=\""+data[i].id+"\"></input>" +
						  "			<input type=\"hidden\" name=\"src\" value=\""+data[i].src+"\"></input>" +
						  "			<input type=\"hidden\" name=\"dataType\" value=\""+data[i].dataType+"\"></input>" +
						  "			<a  href=\"javascript:void(0)\" title=\""+data[i].name+"."+data[i].dataType+"\" value=\""+data[i].name+"\"><span style='overflow: hidden;text-overflow:ellipsis;white-space:nowrap;'>"+data[i].name+"."+data[i].dataType+"</span></a></li>";
					html+="		</div>";
					html+="</div>";
				}
	  			$("#assessDataTableMain").append(html);
	  			
  			}else{
  			}
  		}
	});
	$("#entranceCount").html("");
	$("#entranceCount").html(entrance);
}
//新建文件夹初始化  
function insertDataTableEntrance(){
	var html ="<div id=\"createDataTable\" class=\"bootom-div\">";
		html+="		<div class=\"bootom-div-no\" style='height:63px;'>";
		html+="		<div class=\"bootom-div-img\" style='margin:15px 25px 0 0'>";
		html+="			<img class='wenjianjia' src=\"/audit/img/majorEvaluation/wenjianjia.png\" />";
		html+="		</div>";
		html+="		</div>";
		html+="		<div class=\"bootom-div-li\">";
		html+="			<li class=\"bootom-li\"><input onkeyup=\"this.value=this.value.replace(' ','')\" value=\"请输入文件夹名称\" id=\"dataTableName\" onFocus=\"if(value==defaultValue){value='';this.style.color='#000'}\" onBlur=\"if(!value){value=defaultValue;this.style.color='#999'}\"  style=\"color:#999999;width:108px;height:24px;line-height:24px;vertical-align:middle;border:#DADADA 1px solid;padding-left:5px;\"  type=\"text\"> &nbsp;<a href=\"javascript:void(0)\" onclick=\"insertDataTable("+parentId+");\" >√</a>&nbsp;<a href=\"javascript:void(0)\" onclick=\"removeInsertTable();\">×</a></li>";
		html+="		</div>";
		html+="</div>";
		var createDataTable = $("#createDataTable").length;
		if (createDataTable>0) {
			return;
		}else{
			$("#assessDataTableMain").append(html);
		}
}
//取消新建文件夹
function removeInsertTable(){
	$("#createDataTable").remove();
}
//新建文件夹
function insertDataTable(parentId){
	var dataTableName = $("#dataTableName");
	if (dataTableName.val()==""||dataTableName.val()=='请输入文件夹名称') {
		dataTableName.focus();
		return;
	}
	var tableName = $("#dataTableName").val();
	var tableNameUpdate = $("#dataTableName");
	jQuery.ajax({
		async: false,
		type: "POST", 
  		dataType:"JSON",
  		url:"/audit/asAccessDataTableController/insertSelective.do",
  		data:{"parentId":parentId,"tableName":tableName,"userFilePath":userFilePath},
  		error:function(){
  			alert('初始化错误..materialLibraryZY.js line：190');
  		},
  		success: function(result){
  			var results = eval("("+result+")");
  			if (results!=0) {
  				$("#assessDataTableMain").html("");
  				searchDataTable(parentId,"");
  				
			}else{
				alert('文件夹名重复');
			}
  		}
	});
}

//鼠标移动到图片上面触发
function mousemoveImg(element){
	$(element).find(".bootom-div-no").css("background-image","url('/audit/img/majorEvaluation/beijingkuang.png')");
}
//鼠标移出该div触发
function mouseoutImg(element){
	var oDiv=$(element);
	var oBg = oDiv.find("img").attr("src");
	if (oBg=="/audit/img/majorEvaluation/kongbai.png") {
		$(element).find(".bootom-div-no").css("background-image","");
	}
}
//鼠标单击div左上角
function clickDiv(element){
	var oDiv=$(element);
	var oBg = oDiv.find("img").attr("src");
	
	if (oBg=="/audit/img/majorEvaluation/kongbai.png") {
		oDiv.find("img").attr("src","/audit/img/majorEvaluation/gou.png");
		oDiv.find("img").attr("isChecked","true");
		count=count+1;
	}else{
		kong = oDiv.attr("id");
		oDiv.find("img").attr("src","/audit/img/majorEvaluation/kongbai.png");
		oDiv.find("img").attr("isChecked","false");
		count=count-1;
	}
	$("#labCount").html("");
	$("#labCount").html(count);
}

//删除文件夹和文件夹下的文件夹
function deleteTableAndTable(dataTableid,dataTableNames,dataName){
	
	jQuery.ajax({
		type: "POST", 
  		dataType:"JSON",
  		url:"/audit/asAccessDataTableController/deleteDataTable.do",
  		data:{"tableids":dataTableid,"userFilePath":userFilePath,"dataName":dataName},
  		error:function(){
  			alert('初始化错误..materialLibraryZY.js line：322');
  		},
  		success: function(result){
  			var results = eval("("+result+")");
  			var data=results.data;
  			if (1==data) {
				alert("删除成功");
				eval($("#filePath label:last a").attr("onclick"));
			}else{
				alert("网络堵塞...请稍后再试");
			}
  		}
	});
}
//删除，选中的文件删除
function deleteBatch(){
	//选中的图片id
	var filepath = "";
	var dataName="";
	var dataTableid="";
	var gouimg = $("#assessDataTableMain").find("div[name=dataTableName]");
	for ( var j = 0; j < gouimg.length; j++) {
		var gouLength=$(gouimg[j]).find("img").attr("src");
		if (gouLength=="/audit/img/majorEvaluation/gou.png") {
			filepath += $(gouimg[j]).find("input[name=src]").attr("value")+",";
			dataName += $(gouimg[j]).find("input[name=dataName]").attr("value")+",";
			dataTableid+=$(gouimg[j]).find("input[name=name]").attr("value")+",";
		}
	}
	
	//选中的文件
	var dataType="";
	var dataInfoNames="";
	var datainfoid="";
	var gouInfo = $("#assessDataTableMain").find("div[name=dataInfoName]");
	for ( var i = 0; i < gouInfo.length; i++) {
		var gouInfoLength=$(gouInfo[i]).find("img").attr("src");
		if (gouInfoLength=="/audit/img/majorEvaluation/gou.png") {
			dataType+=$(gouInfo[i]).find("input[name=dataType]").attr("value")+",";
			datainfoid+=$(gouInfo[i]).find("input[name=datainfoid]").attr("value")+",";
			dataInfoNames+=$(gouInfo[i]).find("a").attr("value")+",";
		}
	}
	if (filepath==""&&datainfoid=="") {
		alert("请选择文件夹或文件");
		return;
	}
	//如果选中的图片id不是空的 	删除文件夹，文件夹下的文件夹，文件夹下面的文件
	if (filepath!="") {
		if (confirm("确定删除吗,删除后数据不可恢复！！")) {
			deleteTableAndTable(dataTableid,filepath,dataName);
		}
	}
	//文件id不是是空的 	删除文件
	if (datainfoid!="") {
		if (confirm("确定删除吗,删除后数据不可恢复！！")) {
			deleteDataInfo(datainfoid,dataInfoNames,dataType);
		}
	}
}
//删除文件夹下的文件
function deleteDataInfo(dataInfoIds,dataInfoNames,dataType){
	jQuery.ajax({
		type: "POST", 
  		dataType:"JSON",
  		url:"/audit/asAccessDataInfoController/deleteDataInfoByKey.do",
  		data:{"infoIds":dataInfoIds,"dataInfoNames":dataInfoNames,"userFilePath":userFilePath,"dataType":dataType},
  		error:function(){
  			alert('初始化错误..materialLibraryZY.js line：347');
  		},
  		success: function(result){
  			var results = eval("("+result+")");
  			var data=results.data;
  			if (0!=data) {
  				eval($("#filePath label:last a").attr("onclick"));
				alert("删除成功");
			}
  		}
	});
}

//记录路径 实现返回
function rollbackCount(dataTableId,dataTableName){
	if(dataTableName == undefined || dataTableName == ""){
		return;
	}
	var labelFilePath = $("#filePath");
	//返回
	rollback="";
	rollback+="<label muluid='muluid"+dataTableId+"'><span>--></span> <a href=\"javascript:void(0)\" value=\""+dataTableName+"\" onclick=\"searchDataTable("+dataTableId+",'"+dataTableName+"');\">"+dataTableName+"</a></label>";
	labelFilePath.append(rollback);
	labelFilePath.find("label[muluid=muluid"+dataTableId+"]").nextAll().remove();
}

/**
 * 文件夹显示格式化
 * @param data
 */
function formatData(data){
	var html = "";
	for ( var i = 0; i < data.length; i++) {
		html+="<div style='overflow: hidden;text-overflow:ellipsis;white-space:nowrap;' name=\"dataTableName\" onmouseout=\"mouseoutImg(this);\" onmousemove='mousemoveImg(this);' class=\"bootom-div\" id=\"ddddd\">";
		html+="		<div class=\"bootom-div-no\">";
		html+="			<div id=\""+data[i].tableId+"\" onclick=\"clickDiv(this);\" style=\"cursor:pointer;width: 18px;height:18px;margin-left:1px;margin-top:2px;\">" +
			  "				<img src=\"/audit/img/majorEvaluation/kongbai.png\" />" +
			  "			</div>";
		html+="			<div class=\"bootom-div-img\">";
		html+="				<img style='cursor:pointer;' class='wenjianjia' onclick=\"searchDataTable("+data[i].tableId+",'"+data[i].tablbName+"');\" src=\"/audit/img/majorEvaluation/wenjianjia.png\" />";
		html+="			</div>";
		html+="		</div>";
		html+="		<div class=\"bootom-div-li\">";
		
		html+="			<li class=\"bootom-li\">" +
		  "			<input type=\"hidden\" name='name' value=\""+data[i].tableId+"\"></input>" +
		  "			<input type=\"hidden\" name=\"src\" value=\""+data[i].filePath+"\"></input>" +
		  "			<a href=\"javascript:void(0)\" value="+data[i].tableId+" onclick=\"searchDataTable("+data[i].tableId+",'"+data[i].tablbName+"'); \">"+data[i].tablbName+"</a>" +
		  		"	<input type=\"hidden\" title=\""+data[i].tablbName+"\" value=\""+data[i].name+"\" name=\"dataName\" value=\""+data[i].tablbName+"\"></input>" +
		  		"</li>";
		html+="		</div>";
		
		html+="</div>";
	}
	$("#assessDataTableMain").append(html);
}


//下载打包
function downLoadZip(){
	userFilePath = $("#userFilePath").val();
	
	var dataTables = [];
	var gouimg = $("#assessDataTableMain").find("div[name=dataTableName] img[isChecked=true]");
	gouimg.each(function(i,img){
		var div = $(img).parent().parent().next();
		
		var dataTable = {};
		dataTable.tableId = div.find("li input:eq(0)").val();
		dataTable.filePath = div.find("li input:eq(1)").val();
		dataTable.fileName = div.find("li a").text();
		
		dataTables.push(dataTable);
	});
	
	//选中的文件
	var dataInfoNames="";//文件名
	var houzhui=".";//后缀
	var src="";
	var gouInfo = $("#assessDataTableMain").find("div[name=dataInfoName] img[isChecked=true]");
	var pathStrs = [];
	gouInfo.each(function(i,img){
		var div = $(img).parent().parent().next();
		
		var pathStr = {};
		pathStr.id = div.find("li input:eq(0)").val();
		pathStr.path = div.find("li input:eq(1)").val();
		pathStr.dataType = div.find("li input:eq(2)").val();
		pathStr.fileName = div.find("li a").text();
		
		pathStrs.push(pathStr);
	});
	if (gouInfo.length==0 && gouimg.length==0 || gouimg == undefined && gouInfo == undefined || gouInfo.length > 0 && gouimg.length > 0 || gouimg.length == 0 && gouInfo.length > 1 || gouInfo.length == 0 && gouimg.length > 1) {
		alert("请选择单个文件夹，或单个文件下载！");
		return;
	}
	if (gouInfo.length > 0) {
		var downLoadPath = "";
		$.each(pathStrs,function(i,obj){
			downLoadPath += obj.path + "/" + obj.fileName;
		});
		downLoadInfo(downLoadPath);
	}else{
		var downLoadPath = "";
		var zip="";
		var path="";
		$.each(dataTables,function(i,obj){
			downLoadPath += obj.filePath + "/" + obj.fileName;
			path=downLoadPath + ",";
			zip=obj.fileName;
		});
		downLoadtable(path,zip);
	}
}

//下载一个文件
function downLoadInfo(filepath){
	var str = "<form id='downLoadZip' action='/audit/loadController/download.do' method='post'>" +
		"<input type='hidden' value='"+filepath+"' name='filepath'/>" +
		"</form>";
	$("body").append(str);
	$("#downLoadZip").submit();
	$("#downLoadZip").remove();
}

//下载文件夹
function  downLoadtable(filepath,zip){
	var str = "<form id='downLoadZip' action='/audit/asAccessDataTableController/downLoadZip.do' method='post'>" +
			  		"<input type='hidden' value='"+filepath+"' name='filepath'/>" +
			  		"<input type='hidden' value='"+zip+"' name='zip'/>" +
			  "</form>";
	$("body").append(str);
	$("#downLoadZip").submit();
	$("#downLoadZip").remove();
}