var start=1,pageSize = 6,count=0;//分页参数

/**
 * thisTD :获取 td 用于跨多行多列      
 * tdPosition:存储该td的位置 
 * trPosition:存储该td的父节点位置
 * isOnlyOneTdPosition: 非统计表 td 的位置
 */
var thisTD,tdPosition,trPosition,isOnlyOneTdPosition;
/** 右键事件开始 **/
$(function(){
	if(!$("#rightMenu")) {return;}
	// 鼠标离开事件
	$("#rightMenu").mouseleave(function(){
		$(this).hide();
		document.oncontextmenu='';
	});
	validateLogin();
});

function showRightMenu(obj,event){
	document.oncontextmenu = new Function("return false");
	
	event = arguments.callee.caller.arguments[0] || window.event;
	if (2 == event.button || 3 == event.button) {
		// 关闭右键菜单
		// closeContextMenu(event);
		thisTD = $(obj);
		var id=event.target.id;
		var div = $("#rightMenu");
		var ul = $("#opertion");
		ul.show();
		ul.html("<li onclick='rowspan();'>跨N行</li><li onclick='colspan();'>跨N列</li><li onclick=\"showOrHideIndexDetailDiv('describe');\">描述</li><li onclick=\"showOrHideIndexDetailDiv('value');\">取值</li>");
		var left=event.clientX+document.body.scrollLeft-2;
 		var top=event.clientY+document.body.scrollTop-2;
 		div.css("left",left);
 		div.css("top",top);
		$("#rightMenu").show();
		event.returnValue = false;
	}
}
	
function hideDivShowMsg(msg){
    $("#rightMenu ul").empty("");
    $("#rightMenu ul").hide();
	$("#rightMenu").prepend("<div id='showMsg'>"+msg+"</div>");
	$("#showMsg").fadeIn(100,function(){
		$("#rightMenu").fadeOut(1500,function(){
			$("#showMsg").remove();
		});
	});
}
/** 右键事件结束 **/

/**  js Init  **/
//显示或影藏(ADD)DIV
function showOrHideIndexDetailDiv(param){
	if(param=="add"){
		if(searchTab()){
			$("#addA").attr("onclick","addField()");
		}
		var indexDetailDiv = $("#addShow");
		if(indexDetailDiv.css("display") != "block"){
			indexDetailDiv.fadeIn();
			showOrHideMask();
		}else{
			indexDetailDiv.fadeOut();
			showOrHideMask();
			$("#indexPool").hide();
		}
	}
	if(param=="updateTable"){
		var indexDetailDiv = $("#onLineTableShow");
		if(indexDetailDiv.css("display") != "block"){
			indexDetailDiv.fadeIn();
			showOrHideMask();
		}else{
			indexDetailDiv.fadeOut();
			showOrHideMask();
		}
	}
	if(param=="describe"){
		var indexDetailDiv = $("#describeDiv");
		if(indexDetailDiv.css("display") != "block"){
			indexDetailDiv.fadeIn();
		}else{
			indexDetailDiv.fadeOut();
		}
	}
	if(param=="value"){
		var indexDetailDiv = $("#valueDiv");
		if(indexDetailDiv.css("display") != "block"){
			indexDetailDiv.fadeIn();
		}else{
			indexDetailDiv.fadeOut();
		}
	}
}
/** 查询该表是否存在 **/
function searchTab(){
	var data;
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		async : false,
		url:getRootPath()+"/audit/hrTableFieldController/searchTab.do",
		data:{
			 "tabID":$("#hrTableId").val()
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			data = eval("("+result+")");
		}
	});
	return data;
}
/**
 * 显示或影藏遮盖层DIV
 */
function showOrHideMask(){
	var div = $("#mask");
	if(div.css("display") != "block"){
		div.fadeIn();
	}else{
		div.fadeOut();
	}
}

/**
 * 获取项目路径
 * return 获取想要的项目路径
 */
function getRootPath() {
	//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
	var curWwwPath = window.document.location.href;
	//获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	//获取主机地址，如： http://localhost:8083
	var localhostPaht = curWwwPath.substring(0, pos);
	//获取带"/"的项目名，如：/uimcardprj
	var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	return localhostPaht;
}

/**
 * 获取id的html元素 同 $(‘#id")
 * @param {Object} id
 */
function $1(id) {
	return document.getElementById(id);
}
/** js Init  **/
/**
 * 新增
 */
function addSave(){
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		async : false,
		url:getRootPath()+"/audit/hrTableFieldController/insertSelective.do",
		data:{
			 hrTableId:$("#hrTableId").val(),	
			 fieldName:$("#fieldName").val(),
			 fieldDataName:$("#fieldDataName").val(),
			 fieldType:$("#fieldType").val(),
			 fieldLength:$("#fieldLength").val(),
			 measureId:$("#measureId").val(),
			 measureName:$("#measureName").val(),
			 remark:$("#remark").val()
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			if(data!="0"){
				alert("新增成功");
				location.reload();
			}else{
				alert("新增异常");
			}
		}
	});
}
/**
 * 表已经存在.新增列
 */
function addField(){//hrTableId fieldDataName fieldType fieldLength
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		async : false,
		url:getRootPath()+"/audit/hrTableFieldController/addField.do",
		data:{
			 hrTableId:$("#hrTableId").val(),	
			 fieldName:$("#fieldName").val(),
			 fieldDataName:$("#fieldDataName").val(),
			 fieldType:$("#fieldType").val(),
			 fieldLength:$("#fieldLength").val(),
			 measureId:$("#measureId").val(),
			 measureName:$("#measureName").val(),
			 remark:$("#remark").val()
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			if(data!="0"){
				alert("新增成功");
				location.reload();
			}else{
				alert("新增异常");
			}
		}
	});
}
/**
 * 在线编辑 Table 预览
 */
function onLineTable(){
	
	
	var trLine = $("#trLine").val();//行数
	var tdLine = $("#tdLine").val();//列数
	
		var initTableStr="<table border='1' id='tableModel'>";
		for ( var tr = 0; tr < trLine; tr++) {
			initTableStr+="<tr>";
			for ( var td = 0; td < tdLine; td++) {
				initTableStr+="<td  onmousedown='showRightMenu(this,event)' style='height:30px;'>"+(tr+1)+":"+(td+1)+"</td>";
			}
			initTableStr+="</tr>";
		}
		initTableStr += "</table>";
	$("#tablePreview").html(initTableStr);
	$("#editTable").show();
}

/**
 * 跨多行
 */
function rowspan(){
	
	var rowN = parseInt(prompt("输入行数",""));
	var position = $(thisTD).prevAll().length;//TD的位置
	var realPosition  = 0;
	for ( var i = 0; i < position; i++) {
		var colspan = $(thisTD).prevAll()[i].colSpan;
		realPosition += colspan;
	}
	var parentPosition = $(thisTD).parent().prevAll().length;//position(TD的位置) 的父节点 TR的位置
	
	for ( var j = 1; j < rowN; j++) {
		var rowspanNum = 0;//记录前面有几个TD有跨行
		var preTds = $(thisTD).parent().parent().find("tr").eq(parentPosition+j-1).find("td");
		for ( var i = 0; i < preTds.length; i++) {
			var rowspan = preTds[i].rowSpan;
			if(rowspan >1){
				rowspanNum +=1;
			}
		}
		
		var colspanNum = 0;//记录前面有几个TD有跨列
		var thisTds = $(thisTD).parent().parent().find("tr").eq(parentPosition+j).find("td");
		for ( var i = 0; i < thisTds.length; i++) {
			var colspan = thisTds[i].colSpan;
			if(colspan >1){
				colspanNum +=1;
			}
		}
		
		var colspan = $(thisTD)[0].colSpan;
		for ( var k = 0; k < colspan; k++) {
			var position2 = parseInt(realPosition) - parseInt(rowspanNum) - parseInt(colspanNum);
			$(thisTD).parent().parent().find("tr").eq(parentPosition+j).find("td").eq(position2).remove();
		}
	}
	$(thisTD).attr("rowspan",rowN);//修改跨多行
}
/**
 * 跨多列
 */
function colspan(){
	var colN = prompt("输入列数","");
	$(thisTD).attr("colspan",colN);//修改跨多列
	var tdPosition = $(thisTD).prevAll().length;//TD的位置
	for ( var i = 1; i < colN; i++) {
		$(thisTD).next().remove();
	}
}
/**
 * 描述 弹出层 下拉框 onchangge
 */
var describeField="";
function fieldDescribe(){
	describeField = $("#describeField").val();
	if(describeField!=""&&$("#isOnlyOne").val()=="1"){
		 var describeFieldName = $("#describeField").find("option:selected").text();
		 $(thisTD).html(describeFieldName);
		 //更新
		 tdPosition = parseInt($(thisTD).prevAll().length) + 1;//获取位置
		 updatePosition(tdPosition,describeField);
	}else{
		var describeFieldName = $("#describeField").find("option:selected").text();
		 $(thisTD).html(describeFieldName);
		 //更新
		 trPosition = parseInt($(thisTD).parent().prevAll().length) + 1;
		 tdPosition = parseInt($(thisTD).prevAll().length) + 1;//获取位置
		 var tr_td_position = trPosition+","+tdPosition;
		 updatePosition(tr_td_position,describeField);
	}
	$("#describeDiv").hide();
}
/**
 * 手动输入描述
 * 手动输入 仅限于统计表
 */
function inputDescribeFieldName(){
		var description = prompt("输入描述内容","");
		$(thisTD).html(description);
		trPosition = parseInt($(thisTD).parent().prevAll().length) + 1;
		tdPosition = parseInt($(thisTD).prevAll().length) + 1;//获取位置
		var tr_td_position = trPosition+","+tdPosition;
		//更新
		updatePosition(tr_td_position,describeField);
		$("#describeDiv").hide();
}
/**
 * 值
 */
function fieldValue(){
	var field = $("#valueField").val();
	var html="<input id='"+field+"' type='text' value=''>"
	$(thisTD).html(html);
	
	//如果是统计表
	if($("#isOnlyOne").val()=="0"&& $(thisTD).find("input").attr("id")!=""){
		//添加位置
		trPosition = parseInt($(thisTD).parent().prevAll().length) + 1;
		tdPosition = parseInt($(thisTD).prevAll().length) + 1;
		//开始执行 update 位置
		var position = trPosition+","+tdPosition;
		var updateConditions = $(thisTD).find("input").attr("id");
		updatePosition(position,updateConditions);
		//执行update 结束
	}
	$("#valueDiv").hide();
}

/**
 * 更新
 * @param postion  位置
 * @param updateConditions 更新条件 ($(thisTD+" input").attr("id"))
 */
function updatePosition(postion,updateConditions){
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		async : false,
		url:getRootPath()+"/audit/hrTableFieldController/updatePosition.do",
		data:{
			"position":postion,
			"where" : updateConditions
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			console.info("更新结果:"+data);
		}
	});
}
/**
 * 更新表样式
 */
function updateTableStyle(){
	var hrTableId = $("#hrTableId").val();
	if(hrTableId!=""){
		jQuery.ajax({
			type:"POST",
			dataType:"json",
			async : false,
			url:getRootPath()+"/audit/hrTableTotalController/updatetableStyle.do",
			data:{
				"id":hrTableId,
				"tableStyle":$("#tablePreview").html().replaceAll("showRightMenu\\(this,event\\)","")
			},
			errer:function(){
				alert("网络异常,请稍后再试...");
			},
			success:function(result){
				var data = eval("("+result+")");
				alert("编辑成功");
				$("#editTable").hide();
			}
		});
	}
	//动态生成数据库表
	$("#createTable").show();
}
String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {  
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {  
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);  
    } else {  
        return this.replace(reallyDo, replaceWith);  
    }  
};
function createDataTable(){
	var hrTableId = $("#hrTableId").val();
	if(hrTableId != ""){
		jQuery.ajax({
			type:"POST",
			dataType:"json",
			async : false,
			url:getRootPath()+"/audit/hrTableFieldController/createTable.do",
			data:{
				"hrTableId":hrTableId
			},
			errer:function(){
				alert("网络异常,请稍后再试...");
			},
			success : function (){
				alert("生成成功");
			}
		});
	}
}
/**
 * 如果等于文字
 */
function fieldTypeValue(){
	if($("#fieldType").val()=="3"){
		$("#valueLength").show();
	}else{
		$("#valueLength").hide();
		$("#fieldLength").attr("value","");
	}
}

/***
 * 弹出层指标分页显示
 */
function searchDataZB(){
	//加载指标数据
	searchALLZB(start,pageSize);
	pageHtml="";//分页html
	pageHtml+="<span class=\"page_txt f_l mg_top10 mg_l10\" id=\"total\">共<label id=\"tasktotalCount\">&nbsp;<span id=\"zbCount\"></span>&nbsp;</label>条数据	</span>";
	pageHtml+="<a class=\"last_btn f_r mg_top10 mg_r10\" href=\"javascript:void(0)\" onclick=\"lastPage();\"></a>";
	pageHtml+="<input id='pagenotext' class='page_input f_r mg_top10 mg_r5' type='text' value='1' name=''>";
    pageHtml+="<a class=\"next_btn f_r mg_top10 mg_r5\" href=\"javascript:void(0)\" onclick=\"nextPage()\"></a>";
    pageHtml+="<span class=\"page_txt f_r mg_r5 mg_top10\" id=\"rows\">/<label id=\"tasktotalPage\"></label></span>";
    pageHtml+="<a class=\"previous_btn f_r mg_top10 mg_r5\" href=\"javascript:void(0)\" onclick=\"prePage();\"></a>";
    pageHtml+="<a class=\"first_btn f_r mg_top10 mg_r5\" href=\"javascript:void(0)\" onclick=\"homePage();\"></a>";
	$("#zbPage").html(pageHtml);
}
/**
 * 总记录数
 */
function searchZBCount(){
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		url:getRootPath()+"/audit/hrTableTotalController/searchZBCount.do",
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			$("#zbCount").text(data[0]);
			count=parseInt((data[0]+10-1)/10);
			$("#rows").text(start+"/"+parseInt((data[0]+10-1)/10));
		}
	});
}
/**
 * 下一页
 */
function nextPage(){
	if(start==count){
		alert("已经最后一页");
		return;
	}
	start=(start+1);
	searchALLZB(start,pageSize)
}
/**
 * 上一页
 */
function prePage(){
	if(start=="1"){
		alert("已经是首页");
		return;
	}
	start=(start-1);
	searchALLZB(start,pageSize)
}
/**
 * 首页
 */
function homePage(){
	if(start=="1"){
		alert("已经是首页");
		return;
	}
	start=1;
	searchALLZB(start,pageSize)
}
/**
 * 选定页面,不选择就最后一页
 */
function lastPage(){
	var inputVal = $("#pagenotext").val();
	if(inputVal >= count){
		start=count;
		inputVal = count;
		$("#pagenotext").val(count);
	}else{
		start=inputVal;
//		$("#pagenotext").val();
	}
	if(inputVal != ""){
		searchALLZB(start,pageSize);
	}else{
		
	}
}
/**
 * 查询所有指标
 */
function searchALLZB(start,pageSize){
	var zbfl = $("#zbfl").val();//指标分类
	var zbName = $("#zbName").val();//指标名称
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		url:getRootPath()+"/audit/hrTableTotalController/searchAllZB.do",
		data:{
			"start":start,
			"pageSize":pageSize,
			"zbfl":zbfl,
			"zbName":zbName
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			console.info(data.length);
			var html="";
			for ( var i = 0; i < data.length; i++) {
				if(i%2==0){
					html+="<tr bgcolor='#F5F5F5'>";
					html+="<td><input id='subcheck' onclick='setSelectAll(this);' type='checkbox'/></td>";
					html+="<td>"+data[i].zbid+"</td>";
					html+="<td>"+data[i].zbfl+"</td>";
					html+="<td>"+data[i].zbname+"</td>";
					html+="</tr>";
				}else{
					html+="<tr bgcolor='white'>";
					html+="<td><input id='subcheck' onclick='setSelectAll(this);' type='checkbox'/></td>";
					html+="<td>"+data[i].zbid+"</td>";
					html+="<td>"+data[i].zbfl+"</td>";
					html+="<td>"+data[i].zbname+"</td>";
					html+="</tr>";
				}
				$("#zbtbody").html(html);
			}
		}
	});
	searchZBCount();
}
/*** 显示指标待选DIV */
function showOrHideIndex(){
	var indexPoolDiv = $("#indexPool");
	var addDwDataDiv = $("#addShow");
	if(indexPoolDiv.css("display") == "none"){
		indexPoolDiv.show();
		// -------------- 此处加载指标数据
		searchDataZB();
		
		// 指标ID动画
		indexPoolDiv.animate({
			left:'+=175px'
		});
		
		addDwDataDiv.animate({
			left:'-=175px'
		});
	}else{
		// 指标ID动画
		indexPoolDiv.animate({
			left:'-=175px'
		});
		
		addDwDataDiv.animate({
			left:'+=175px'
		});
		
		indexPoolDiv.hide();
	}
}
//复选框事件  
//全选、取消全选的事件  
function selectAll(){  
  if ($("#selectAll").attr("checked")) {  
      $(":checkbox").attr("checked", true);  
  } else {  
      $(":checkbox").attr("checked", false);  
  }  
}  
//子复选框的事件  
function setSelectAll(checkThis){  
  //当没有选中某个子复选框时，SelectAll取消选中  
  if (!$("#subcheck").checked) {  
      $("#selectAll").attr("checked", false);  
      $("#measureId").val($(checkThis).parent().parent().find("td").eq(1).text());
      $("#measureName").val($(checkThis).parent().parent().find("td").eq(3).text());
  }else{
	  $("#measureId").val("");
      $("#measureName").val("");
  } 
  var chsub = $("input[type='checkbox'][id='subcheck']").length; //获取subcheck的个数  
  var checkedsub = $("input[type='checkbox'][id='subcheck']:checked").length; //获取选中的subcheck的个数  
  if (checkedsub == chsub) {  
      $("#selectAll").attr("checked", true);  
  }  
 
}  