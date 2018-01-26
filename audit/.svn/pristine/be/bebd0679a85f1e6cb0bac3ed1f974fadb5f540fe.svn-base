$(function(){
	// 初始化目录
	validateLogin();
	initMenu();
	initMenuSe();
});

function returnNav(){
	window.location.href = '/CHART';
}

//菜单对象
var array=new Array();
//所有的分类
var list = new Array();
//表结构
var tables = new Array();
function initMenu(){
	$.ajax({
		url : "/audit/hrImport/getAllCategory.do",
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			var data = eval("("+dataString+")");
			list = data.data;
		},
	});
	createArray();
}

function createArray(){
	//先查父级的数量
	var parents = new Array();
	for (var i = 0; i < list.length; i++) {
		if (list[i].parentId == 0) {
			parents.push(list[i]);
		}
	}
	for (var i = 0; i < parents.length; i++) {
		var record = {};
		record.id = parents[i].id;
		record.name = parents[i].categoryName;
		var children = new Array();
		children = createArrayChild(parents[i],children);
		record.children = children;
		record.tables = parents[i].list;
		for ( var j = 0; j < parents[i].list.length; j++) {
			tables.push(parents[i].list[j]);
		}
		array[i] = record;
	}
}

function createArrayChild(parent,childArray){
	var childList = new Array();
	for (var i = 0; i < list.length; i++) {
		if(list[i].parentId == parent.id){
			childList.push(list[i]);
		}
	}
	if(childList.length == 0){
		return null;
	}
	for (var i = 0; i < childList.length; i++) {
		var record = {};
		record.id = childList[i].id;
		record.name = childList[i].categoryName;
		var children = new Array();
		children = createArrayChild(childList[i],children);
		record.children = children;
		record.tables = childList[i].list;
		for ( var j = 0; j < childList[i].list.length; j++) {
			tables.push(childList[i].list[j]);
		}
		childArray[i] = record;
	}

	return childArray;
}
/**
 * 初始化目录
 */
function initMenuSe(){
	//初始化菜单
	var str = "";
	$.each(array,function(i,obj){
		str += "<li id='category_"+obj.id+"' onclick=getTableByCategory("+obj.id+")";
		str+="><span title='"+obj.name +"' href='javascript:void(0);' >"+obj.name+"</span>";
		// 多级菜单
		str += "<ul>";
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str = getChildTr(obj,str);
		}
		if(obj.tables != null && obj.tables != undefined && obj.tables.length > 0){
			for ( var j = 0; j < obj.tables.length; j++) {
				str += "<li onclick=checkTab('"+obj.tables[j].tableName+"',"+obj.tables[j].id+","+obj.tables[j].isOnlyOne+",this)";
				str +="><span class='table_color' title='"+obj.tables[j].tableName +"'>"+ obj.tables[j].tableName+"</span></li>";
			}
		}
		str += "</ul>";
		str += "</li>";
	});
	$("#left_menu").html(str);
	
	// 菜单初始化
	$('.dropdown').tendina({
        // This is a setup made only
        // to show which options you can use,
        // it doesn't actually make sense!
        animate: true,
        speed: 500,
        onHover: false,
        hoverDelay: 300,
        activeMenu: $('#deepest'),
	});
	$("#category_4").hide();
	$("#category_36").hide();
}

function getChildTr(obj, str){
	$.each(obj.children,function(j,obj2){
		str += "<li id='category_"+obj2.id+"' onclick=getTableByCategory("+obj2.id+")"
		str += "><span title='"+obj2.name +"'>"+ obj2.name+"</span>";
		str += "<ul>";
		if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
			str = getChildTr(obj2,str);
		}
		if(obj2.tables != null && obj2.tables != undefined && obj2.tables.length > 0){
			for ( var j = 0; j < obj2.tables.length; j++) {
				str += "<li onclick=checkTab('"+obj2.tables[j].tableName+"',"+obj2.tables[j].id+","+obj2.tables[j].isOnlyOne+",this)";
				str +="><span class='table_color' title='"+obj2.tables[j].tableName +"'>"+ obj2.tables[j].tableName+"</span></li>";
			}
		}
		str += "</ul>";
		str +="</li>";
	});
	return str;
}
var isClose = true;
function getTableByCategory(id){
	var ul = $("#category_"+id).find("ul").eq(0);
	if($(ul).html() == ""){
		alert("该分类下没有数据表及子分类");
		isClose = false;
	}
}
var nowTable = null;
/**
 * 点击表名,显示历史
 */ 
function checkTab(showName, id, isOnlyOne, obj){
	$(".check_li").attr('class', '');
	$(obj).attr("class","check_li");
	$("#right_tab_name").html("当前：" + showName);
	$("#right_tab_name").prop("title","当前：" + showName);
	for ( var i = 0; i < tables.length; i++) {
		if(id == tables[i].id){
			nowTable = tables[i];
		}
	}
	getHistoryLog();
	hiddenAll();
	//按钮显示
	$("#addNew").show().attr("onclick","addNew()");
	$("#copyData").show();
	$("#editData").show();
	$(".right_tab_menu").show();
	//$("#subStatus").show();
	$("#subup").show();
	$("#subup").val("数据上报");
	$("#subup").attr("onclick","subup()");
	$("#deleteData").show().attr("onclick","deleteRecord()");
	isEdit = 0;
	$("#stime").val("");
	$("#stime").attr("readonly",false);
	$("#checkloadModel").show();
}

/**
 * 根据选中表获取历史导入记录
 */
var historyList = new Array();
function getHistoryLog(){
	$.ajax({
		url : "/audit/hrImport/getImportHistory.do",
		data : {
			tableId : nowTable.id
		},
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			var data = eval("("+dataString+")");
			var list = data.data;
			historyList = new Array();
			if(list.length == 0){
				var html = "<div class='table_class'><table><thead><tr><th>" +
						"<input type='checkbox' id='check_all' class='chk_1' onclick='checkAll(this)'/>" +
						"<label for='check_all'></label>" +
						"</th><th>编号</th><th>填报日期</th><th>填报人</th><th>统计时间</th>";
				html+= "<th>状态</th><th>错误记录（个数）</th><th>操作明细</th></tr></thead><tbody>";
				html+= "<tr><td colspan='8'>暂无导入记录</td></tr>";
				html+= "</tbody></table></div>";
				$(".right_tab").html(html);
			}else{
				var html = "<div class='table_class'><table><thead><tr><th>" +
						"<input type='checkbox' id='check_all' class='chk_1' onclick='checkAll(this)'/>" +
						"<label for='check_all'></label>" +
						"</th><th>编号</th><th>填报日期</th><th>填报人</th><th>统计时间</th>";
				html+= "<th>状态</th><th>错误记录（个数）</th><th>操作明细</th></tr></thead><tbody>";
				for ( var i = 0; i < list.length; i++) {
					historyList.push(list[i]);
					html += "<tr><td><input type='checkbox' id='record_"+i+"' class='chk_1' name='check_row' value='"+list[i].id+"'>";
					html += "<label for='record_"+i+"'></label></td>";
					html += "<td>"+(i+1)+"</td>";
					html += "<td>"+formatDate(list[i].createDatetime)+"</td>";
					html += "<td>"+list[i].userName+"</td>";
					html +="<td><a href='javascript:void(0)' onclick='showDetail("+list[i].id+")'>"+list[i].operationYear+"</a></td>";
					if(list[i].status==1){
						html +="<td id='statuss' zhi='0'>校验未通过";
					}else if(list[i].status==2){
						html +="<td id='statuss' zhi='1'>校验通过";
					}else if(list[i].status==3){
						html +="<td id='statuss' zhi='2'>已提交";
					}else{
						html +="<td id='statuss' zhi='3'>待校验"; 
					}
					html +="</td>";
					html +="<td> ";
					html += list[i].errorRecord==undefined?'':list[i].errorRecord;
					html +=" </td>";
					html +="<td>导入成功，插入"+list[i].rowsNumber+"条记录。</td></tr>";
				}
				html+= "</tbody></table></div>";
				$(".right_tab").html(html);
			}
		}
	});
}

/**
 * 下载模板
 */
function downloadModel(){
	$("#tableName").val(nowTable.tableName);
	var zbTable = $("#tableModel");
	var trs = [];
	$.each($(zbTable).find("tr"),function(i,element){
		var tr = {};
		tr.tds = [];
		tr.ths = [];
		$.each($(element).find("td"),function(j,tdElement){
			if(nowTable.isOnlyOne == 1){
				if($("#check_all").length != 0 && j == 0){
					return true;
				}
			}
			var style = window.getComputedStyle ? 
						window.getComputedStyle(tdElement, "") : 
						tdElement.currentStyle;
			var td = {};
			if($(tdElement).find("input").length != 0){
				td.text = "";
			}else{
				td.text = tdElement.innerHTML;
			}
			td.style = {};
			td.style.width =  $(tdElement).width();
			td.style.backgroundColor = style.backgroundColor.split(/\D+/);
			td.style.font = {};
			td.style.font.align = style.textAlign;
			var sizes = style.fontSize.split("px");
			td.style.font.size = sizes[0];
			td.style.font.color = style.color.split(/\D+/);
			td.rowspan = tdElement.rowSpan;
			td.colspan = tdElement.colSpan;
			tr.tds.push(td);
		});
		if(nowTable.isOnlyOne == 1){
			trs.push(tr);
			return false;
		}else{
			trs.push(tr);
		}
		
	});
	$("#tableHTML").val(JSON.stringify(trs));
	$("#downloadModelForm").submit();
}

/**
 * 新建
 */
var style = "word-break: keep-all; white-space: nowrap; height: 30px; border: 1px solid #19C6A1;"+
			"min-width: 60px;  background-color: lightseagreen; font-weight: bold;"+
			" text-align: center; color : white;vertical-align: middle;";
function addNew(){
	if(nowTable.tableStyle == ""|| nowTable.tableStyle == null){
		alert("暂无表样,请联系管理员维护");
		return;
	}
	hiddenAll();
	var tableStyle = CheckTextOut(nowTable.tableStyle);
	console.info(tableStyle);
	$(".right_tab").html(tableStyle);
	if(nowTable.isOnlyOne == 1){
		$("#addNew").show().attr("onclick","addNewRow()");
		$("#deleteData").show().attr("onclick","deleteData()");
		$(".right_tab").append("<div class='pageClass'></div>");
		nowRowsNum = 0;
		rowsDatas = new Array();
		nowPage = 1;
		var tds = $(".right_tab").find("table").eq(0).find("tr").eq(0).find("td");
		for ( var i = 0; i < tds.length; i++) {
			$(tds[i]).attr("style",style);
		}
	}
	$("#addNew").val("新建行");
	$(".yearDiv").show();
	$("#year").show();
	$("#saveData").show();
	$("#returnHistory").show();
	$("#importData").show();
	$("#downloadModel").show();
	//$("#checkloadModel").show();
}

/**
 * 导入模板数据
 */

function clickFile(){
	var ie=navigator.appName=="Microsoft Internet Explorer" ? true : false; 
	if(ie){ 
		document.getElementById("importFile").click(); 
	}else{
		var a=document.createEvent("MouseEvents");//FF的处理 
		a.initEvent("click", true, true);  
		document.getElementById("importFile").dispatchEvent(a); 
	} 
}

/**
 * 提交文件
 */
function submitImportFile(){
	var fileName = $("#importFile").val();
	
	var ldot = fileName.lastIndexOf(".");
	var type = fileName.substring(ldot + 1);
	if(type != "xls" && type != "docx"){
		alert("不是excel格式,请重新上传");
		return;
	}
	var t1 = fileName.lastIndexOf("\\");  
	var t2 = fileName.lastIndexOf(".");  
    if(t1 >= 0 && t1 < t2 && t1 < fileName.length){  
       var name = fileName.substring(t1 + 1, t2);
       if(name != nowTable.tableName){
    	    alert("导入模板文件名与当前表名不符，请重新导入模板");
   			return;
       }
    } 
	$("#importFileForm").submit();
}

$("#importFileForm").ajaxForm({
    dataType: "json",
    success:  importResult
});


var nowRowsNum;
var rowsDatas = new Array();
var nowPage;
/**
 * 提交文件返回数据
 * @param dataString
 */
function importResult(dataString){
	var modelData = eval("("+dataString+")");
	if(nowTable.isOnlyOne == 1){
		var html = "";
		if(modelData.length > 1){
			var tr = $("#tableModel").find("tr").eq(0);
			if($("#check_all").length == 0 ){
				tr.prepend("<td><input type='checkbox' class='chk_1' id='check_all' onclick='checkAll(this)'/>" +
						"<label for='check_all'></label></td>");
			}
		}
		for ( var i = 2; i < modelData.length; i++) {
			var data = new Array();
			if(modelData[i] == null){
				continue;
			}
			for ( var j = 1; j < modelData[i].length; j++) {
				data[j] =modelData[i][j];
			}
			rowsDatas.push(data);
		}
		
		nowRowsNum += modelData.length-1;
		jumpToLast();
	}else{
		for ( var i = 0; i < nowTable.list.length; i++) {
			var fieldDataName = nowTable.list[i].fieldDataName;
			var positions = nowTable.list[i].position.split(",");
			var row = parseInt(positions[0]);
			var col = parseInt(positions[1]);
			$("#"+fieldDataName).val(modelData[row][col]);
		}
	}
	
	//文件清空
	var file = $("#importFile") ;
	file.after(file.clone().val(""));      
	file.remove();  
}

/**
 * 显示数据
 */
function showDataForPage(){
	var tr = $("#tableModel").find("tr").eq(0);
	if($("#check_all").length == 0 && nowRowsNum > 0){
		tr.prepend("<td style='"+style+"'><input type='checkbox' id='check_all' class='chk_1' onclick='checkAll(this)'/>" +
				"<label for='check_all'></label></td>");
	}
	//先把以前的保存后删除
	var trs= $("#tableModel").find("tr");
    console.info(trs);
	for ( var i = 1; i < trs.length; i++) {
		var rowNum_id = $(trs[i]).attr("id");
		var id = parseInt(rowNum_id.split("rowNum_")[1]);
		var tds = $(trs[i]).find("td");
		
		for ( var j = 1; j < tds.length; j++) {
			rowsDatas[id][j] = $(tds[j]).find("input").eq(0).val();
		}
		$(trs[i]).remove();
	}
	var newRowsData = new Array();
	for ( var i = 0; i < rowsDatas.length; i++) {
		if(rowsDatas[i] != null){
			newRowsData.push(rowsDatas[i]);
		}
	}
	rowsDatas = newRowsData;
	
	if(nowPage == 0){
		nowPage = 1;
	}
	var pageNum = nowRowsNum%7 > 0 ? parseInt(nowRowsNum/7)+1 : parseInt(nowRowsNum/7);
	if(nowPage > pageNum){
		nowPage = pageNum;
	}
	
	var endIndex = 7*nowPage > rowsDatas.length ? rowsDatas.length : 7*nowPage;
	var html ="";
	
	if(endIndex > 0){
		for ( var i = 7*(nowPage-1); i < endIndex; i++) {
			html += "<tr id='rowNum_"+i+"' ><td><input type='checkbox' id='check_"+i+"' class='chk_1' name='check_row' class='checkbox'/>" +
					"<label for='check_"+i+"'></label></td>";
			// console.info(rowsDatas[i]);
			for ( var j = 1; j < rowsDatas[i].length; j++) {
				
				html += "<td><input type='text' class='tdInput' value='" + rowsDatas[i][j] + "' /></td>";
			}
			html += "</tr>";
		}
	}
	$("#tableModel").append("");
	$("#tableModel").append(html);
	pageDivShow();
}


/**
 * 显示分页
 */
function pageDivShow(){
	var pageNum = nowRowsNum%7 > 0 ? parseInt(nowRowsNum/7)+1 : parseInt(nowRowsNum/7);
	if(pageNum <= 0){
		pageNum = 1;
	}
	var pageHtml = "";
	pageHtml +="<input type='button' value='首页' onclick='jumpToFirst()'/>";
	pageHtml +="<input type='button' value='上一页' onclick='jumpToBefore()'/>";
	pageHtml +="<select onchange='changePage(this)'>";
	for ( var i = 1; i <= pageNum; i++) {
		pageHtml += "<option value='"+i+"' "+ (i == nowPage ? "selected='selected'":"")+">第"+i+"页</option>";
	}

	pageHtml +="</select>";
	pageHtml +="<input type='button' value='下一页' onclick='jumpToAfter()'/>";
	pageHtml +="<input type='button' value='尾页' onclick='jumpToLast()'/>";
	$(".pageClass").html(pageHtml);
}

function changePage(obj){
	nowPage = parseInt($(obj).val());
	showDataForPage();
}
function changePage2(page){
	nowPage = page;
	showDataForPage();
}
function jumpToFirst(){
	nowPage = 1;
	showDataForPage();
}
function jumpToBefore(){
	nowPage -=1;
	showDataForPage();
}
function jumpToAfter(){
	nowPage +=1;
	showDataForPage();
}
function jumpToLast(){
	var pageNum = nowRowsNum%7 > 0 ? parseInt(nowRowsNum/7)+1 : parseInt(nowRowsNum/7);
	nowPage = pageNum;
	showDataForPage();
}

/**
 * 编辑数据
 */
var isEdit = 0;
function editData(){
	var checks = $("input[name='check_row']:checked");
	if(checks.length != 1){
		alert("请选择一条记录");
		return;
	}
	var historyId = $(checks[0]).val();
	for ( var i = 0; i < historyList.length; i++) {
		if(historyId == historyList[i].id){
			$("#stime").val(historyList[i].operationYear);
			$("#stime").attr("readonly",true);
		}
	}
	isEdit = 1;
	copyData();
}

/**
 * 查看
 * @param id
 */
function showDetail(id){
	for ( var i = 0; i < historyList.length; i++) {
		if(id == historyList[i].id){
			$("#stime").val(historyList[i].operationYear);
			$("#stime").attr("readonly",true);
		}
	}
	if(nowTable.tableStyle == ""|| nowTable.tableStyle == null){
		alert("暂无表样,请联系管理员维护");
		return;
	}
	hiddenAll();
	var tableStyle = CheckTextOut(nowTable.tableStyle);
	$(".right_tab").html(tableStyle);
	if(nowTable.isOnlyOne == 1){
		$(".right_tab").append("<div class='pageClass'></div>");
		nowRowsNum = 0;
		rowsDatas = new Array();
		nowPage = 1;
		var tds = $(".right_tab").find("table").eq(0).find("tr").eq(0).find("td");
		for ( var i = 0; i < tds.length; i++) {
			$(tds[i]).attr("style",style);
		}
	}
	
	
	$.ajax({
		url : "/audit/hrImport/getDataByHistoryId.do",
		data : {
			id : id,
		},
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			var data = eval("("+dataString+")");
			if(nowTable.isOnlyOne == 1){
				var list = data.data;
				for ( var i = 0; i < list.length; i++) {
					var record = new Array();
					record.push("");
					for ( var j = 0; j < nowTable.list.length; j++) {
						var fieldDataName = nowTable.list[j].fieldDataName;
						record.push(list[i][fieldDataName]);
					}
					rowsDatas.push(record);
				}
				nowRowsNum = list.length;
				showDataForPage();
			}else{
				var obj = data.data;
				for ( var i = 0; i < nowTable.list.length; i++) {
					var fieldDataName = nowTable.list[i].fieldDataName;
					$("#"+fieldDataName).val(obj[fieldDataName]);
				}
			}
		}
	});
	hiddenAll();
	$("#returnHistory").show();
	var input = $("#tableModel").find("input");
	for ( var i = 0; i < input.length; i++) {
		$(input[i]).attr("readonly",true);
	}
}


/**
 * 复制数据
 */
function copyData(){
	var checks = $("input[name='check_row']:checked");
	if(checks.length != 1){
		alert("请选择一条记录");
		return;
	}
	$("#checkloadModel").attr("mb",$(checks[0]).val());
	addNew();
	$.ajax({
		url : "/audit/hrImport/getDataByHistoryId.do",
		data : {
			id : $(checks[0]).val(),
		},
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			var data = eval("("+dataString+")");
			if(nowTable.isOnlyOne == 1){
				var list = data.data;
				for ( var i = 0; i < list.length; i++) {
					var record = new Array();
					record.push("");
					for ( var j = 0; j < nowTable.list.length; j++) {
						var fieldDataName = nowTable.list[j].fieldDataName;
						record.push(list[i][fieldDataName]);
					}
					rowsDatas.push(record);
				}
				nowRowsNum = list.length;
				showDataForPage();
			}else{
				var obj = data.data;
				for ( var i = 0; i < nowTable.list.length; i++) {
					var fieldDataName = nowTable.list[i].fieldDataName;
					$("#"+fieldDataName).val(obj[fieldDataName]);
				}
			}
		}
	});
}
/**
 * 新增一行
 */
function addNewRow(){
	var tr = $("#tableModel").find("tr").eq(0);
	if($("#check_all").length == 0 ){
		tr.prepend("<td style='"+style+"'><input type='checkbox' class='chk_1' id='check_all' onclick='checkAll(this)'/>" +
				"<label for='check_all'></label></td>");
	}
	var data = new Array();
	data[0] ="";
	for ( var j = 0; j < nowTable.list.length; j++) {
		data[j+1] = "";
	}
	rowsDatas.push(data);
	nowRowsNum +=1;
	var trs = $("#tableModel").find("tr");
	if(trs.length == 8){
		jumpToLast();
	}else{
		showDataForPage();
	}
}

/**
 * 保存数据
 */
function saveData(){
	var stime = $("#stime").val();
	if(stime == ""){
		alert("请输入统计时间");
		return;
	}
	
	var test1 = /^[1-9][0-9][0-9][0-9]$/;//自然年
	var test2 = /^[1-9][0-9][0-9][0-9]-[1-9][0-9][0-9][0-9]$/;//学年
	var test3 = /^[1-9][0-9][0-9][0-9]-[0-1][1-9]-[0-3][0-9]$/;//学年
/*	if(stime.match(test1) || stime.match(test2) || stime.match(test3)){
	}else{
		alert("统计时间格式不符,请重新填写");
		return;
	}*/
	
	if(isEdit == 1){
		editSaveData();
		return;
	}
	
	for ( var i = 0; i < historyList.length; i++) {
		if(stime == historyList[i].operationYear){
			alert("统计时间："+stime+"已存在,请返回编辑");
			return;
		}
	}
	var data ="";
	if(nowTable.isOnlyOne == 0){
		var record = {};
		var list = nowTable.list;
		for ( var i = 0; i < list.length; i++) {
			var value = $("#"+list[i].fieldDataName).val();
			var type = list[i].fieldType;
			var length = list[i].fieldLength;
			if(!checkType(type, value, length)){
				alert(list[i].fieldName+"填写格式错误,请重新输入");
				return;
			}
			record[list[i].fieldDataName] = value.trim();
		}
		var statistics_time ="statistics_time";
		record[statistics_time] = stime;
		data = JSON.stringify(record);
	}else{
		var records = new Array();
		var trs = $("#tableModel").find("tr");
		if(trs.length == 1){
			alert("请新建一条数据再保存");
			return;
		}
		showDataForPage();
		var list = nowTable.list;
		for ( var j = 0; j < rowsDatas.length; j++) {
			var record = {};
			for ( var i = 0; i < list.length; i++) {
				var value = rowsDatas[j][i+1];
				var type = list[i].fieldType;
				var length = list[i].fieldLength;
			/*	if(!checkType(type, value, length)){
					alert(list[i].fieldName+"填写错误,请重新输入");
					return;
				}*/
				
				record[list[i].fieldDataName] = value.trim();
			}
			var statistics_time ="statistics_time";
			record[statistics_time] = stime;
			records.push(record);
		}
		data = JSON.stringify(records);
	}
	$.ajax({
		url : "/audit/hrImport/saveData.do",
		data : {
			tableId : nowTable.id,
			statisticsTime : stime,
			dataStr : data
		},
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			var data = eval("("+dataString+")");
			if(data.ok){
				alert("数据保存成功");
				returnBack();
			}else{
				alert(data.comment);
			}
		}
	});
}

/**
 * 编辑时保存数据
 */
function editSaveData(){
	var stime = $("#stime").val();
	var historyId;
	var historyListP = new Array();
	for ( var i = 0; i < historyList.length; i++) {
		if(stime == historyList[i].operationYear){
			historyId = historyList[i].id;
		}else{
			historyListP.push(historyList[i]);
		}
	}
	historyList = historyListP;
	isEdit = 0;
	$("#stime").attr("readonly",false);
	$.ajax({
		url : "/audit/hrImport/deleteData.do",
		data : {
			ids: historyId
		},
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			var data = eval("("+dataString+")");
			if(data.ok){
				saveData();
			}else{
				alert(data.comment);
			}
		}
	});
}

/**
 * 删除选中行
 */
function deleteData(){
	var checks = $("input[name='check_row']:checked");
	if(checks.length == 0){
		alert("请选择至少一行操作");
		return;
	}
	var flag = confirm("确认删除？");
	if(!flag){
		return;
	}
	for (var i = 0; i < checks.length; i++) {
		var row = checks[i];
		$(row).parent().parent().remove();
		var id = parseInt($(row).parent().parent().attr("id").split("rowNum_")[1]);
		rowsDatas[id] = null;
	}
	$("#check_all").attr("checked",false);
	nowRowsNum -= checks.length;
	showDataForPage();
}

/**
 * 删除导入记录及数据
 */
function deleteRecord(){
	var checks = $("input[name='check_row']:checked");
	if(checks.length == 0){
		alert("请选择至少一行操作");
		return;
	}
	var flag = confirm("确认删除这条数据？删除后不可恢复！！！");
	if(!flag){
		return;
	}
	
	var ids = "";
	for (var i = 0; i < checks.length; i++) {
		var row = checks[i];
		ids +=$(row).val()+",";
		$(row).parent().parent().remove();
	}
	$.ajax({
		url : "/audit/hrImport/deleteData.do",
		data : {
			ids: ids
		},
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			var data = eval("("+dataString+")");
			if(data.ok){
				alert("数据删除成功");
				returnBack();
			}else{
				alert(data.comment);
			}
		}
	});
	$("#check_all").attr("checked",false);
}
/**
 * 返回上一步(其实就是跳到记录页)
 */
function returnBack(){
	hiddenAll();
	getHistoryLog();
	isEdit = 0;
	$("#stime").val("");
	$("#stime").attr("readonly",false);
	//按钮显示
	$("#addNew").show().attr("onclick","addNew()");
	$("#addNew").val("新建");
	$("#copyData").show();
	$("#editData").show();
	$("#deleteData").show().attr("onclick","deleteRecord()");
	$("#checkloadModel").show();
	//$("#subStatus").show();
	$("#subup").show();
	$("#subup").val("数据上报");
	$("#subup").attr("onclick","subup()");
}

/**
 * 隐藏所有的按钮
 */
function hiddenAll(){
	$("#year").hide();
	$("#editData").hide();
	$("#addNew").hide();
	$("#returnHistory").hide();
	$("#copyData").hide();
	$("#showHistory").hide();
	$("#saveData").hide();
	$("#deleteData").hide();
	$("#importData").hide();
	$("#downloadModel").hide();
	$("#checkloadModel").hide();
	//$("#subStatus").hide();
	$("#subup").hide();
}

/**
 * 格式验证
 * @param type 0：整数 1：两位小数 2：时间 3：文字
 * @param value 值
 * @param length 规定长度
 */
function checkType(type, value, length){
	if(value.trim() == ""){
		return true;
	}
	
	switch(type){
		case 0 :
			var re = /^[1-9]\d*$/;
			var flag = re.test(value);
			return flag;
		case 1 :
			var re = /^[0-9]+\.{0,1}[0-9]{0,2}$/;
			var flag = re.test(value);
			return flag;
		case 2 :
			
			return true;
		case 3 :
			if(value.length > length){
				return false;
			}
			return true;
	}
	return false;
}


/**
 * 日期格式转换
 * @param date
 * @returns
 */
var formatDate = function (date) {  
	date = new Date(date);
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? '0' + m : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    return y + '-' + m + '-' + d;  
}; 

/**
 * 页面滚动
 */
$(function(){ 
	//获取要定位元素距离浏览器顶部的距离
	var navH = $(".left").offset().top;
	//滚动条事件
	$(window).scroll(function(){
		//获取滚动条的滑动距离
		var scroH = $(this).scrollTop();
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if(scroH>=navH){
			$(".left").css({"position":"static","top":0,"width":"20%"});
		}else if(scroH<navH){
			$(".left").css({"position":"static"});
		}
	})
});
/**
 * 全选或全不选
 */
function checkAll(obj){
	var checked = obj.checked;
	if(checked){
		 $("input[name='check_row']").each(function () {
             $(this).prop("checked", true);
         });
	}else{
		$("input[name='check_row']").each(function () {
            $(this).prop("checked", false);
        });
	}
}

function CheckTextDanger(checkText){
    var str = checkText.trim();  //去掉头尾空格
	str = str.replaceAll("'", "''");            
	str = str.replaceAll("\"", "&quot;");            
	str = str.replaceAll("<", "&lt;");            
	str = str.replaceAll(">", "&gt;");            
	str = str.replaceAll("\n", "<br>");            
	str = str.replaceAll("“", "&ldquo;");            
	str = str.replaceAll("”", "&rdquo;");  
    return str;
}

function CheckTextOut(checkText){
    var str = checkText.trim();  //去掉头尾空格
	str = str.replaceAll("&rdquo;", "”");            
	str = str.replaceAll("&ldquo;", "“");            
	str = str.replaceAll("<br>", "\n");            
	str = str.replaceAll("&gt;", ">");            
	str = str.replaceAll("&lt;", "<");            
	str = str.replaceAll("&quot;", "\"");            
	str = str.replaceAll("''", "'");        
    return str;
}

String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {  
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {  
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);  
    } else {  
        return this.replace(reallyDo, replaceWith);  
    }  
};


function checkloadModel(){
	var checks = $("input[name='check_row']:checked");
	if(checks.length != 1){
		alert("请选择一条记录");
		return;
	}
	//$("#checkloadModel").attr("mb",$(checks[0]).val());
	$.ajax({
		url : "/audit/hrImport/checkDataByHistoryId.do",
		data : {
			id :$(checks[0]).val(),
		},
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			getHistoryLog();
			alert("校验完成");
		}
	});
}
//确认提交
function subStatus(){
	var checks = $("input[name='check_row']:checked");
	if(checks.length != 1){
		alert("请选择一条记录");
		return;
	}
    var tdval= $(checks[0]).parent().parent().children('td').eq(5).text();
    if(tdval=="已提交"){
    	alert("数据已提交，无法再次提交！");
    	return;
    }
    if(tdval!="校验通过"){
    	alert("请先校验！");
    	return;
    }
	$.ajax({
		url : "/audit/hrImport/subDataStatusByHistoryId.do",
		data : {
			id :$(checks[0]).val(),
		},
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			alert("提交成功！");
		},
		error: function (){
			alert("提交失败！");
		}
	});
}
//课表信息
var kcxx="<table id='tableModel' border='1'><tbody><tr><td onmousedown='' style='height:30px;'>开课院系</td><td onmousedown='' style='height:30px;'>课程名称</td><td onmousedown='' style='height:30px;'>课程代码</td><td onmousedown='' style='height:30px;'>课程类型</td><td onmousedown='' style='height:30px;'>课时总数</td><td onmousedown='' style='height:30px;'>开课号</td><td onmousedown='' style='height:30px;'>上课时间</td><td onmousedown='' style='height:30px;'>校区</td><td onmousedown='' style='height:30px;'>上课地点</td><td onmousedown='' style='height:30px;'>选课人数</td><td onmousedown='' style='height:30px;'>所在班级</td><td onmousedown='' style='height:30px;'>任课教师</td><td onmousedown='' style='height:30px;'>任课教师工号</td><td onmousedown='' style='height:30px;'>任课教师专业技术职称</td><td onmousedown='' style='height:30px;'>任课教师承担课时</td><td onmousedown='' style='height:30px;'>教师属性</td><td onmousedown='' style='height:30px;'>备注</td><td onmousedown='' style='height:30px;'>统计时间</td></tr>"
//答疑信息
var dyxx="<table id='tableModel' border='1'><tbody><tr><td onmousedown='' style='height:30px;'>开课院系</td><td onmousedown='' style='height:30px;'>课程名称</td><td onmousedown='' style='height:30px;'>课程代码</td><td onmousedown='' style='height:30px;'>本学期答疑总时数</td><td onmousedown='' style='height:30px;'>答疑时间</td><td onmousedown='' style='height:30px;'>校区</td><td onmousedown='' style='height:30px;'>答疑地点</td><td onmousedown='' style='height:30px;'>答疑教师</td><td onmousedown='' style='height:30px;'>答疑教师工号</td><td onmousedown='' style='height:30px;'>答疑教师专业技术职称</td><td onmousedown='' style='height:30px;'>答疑时间地点公布形式</td><td onmousedown='' style='height:30px;'>备注</td><td onmousedown='' style='height:30px;'>统计时间</td></tr>";
//自习辅导信息
var zxfdxx="<table id='tableModel' border='1'><tbody><tr><td onmousedown='' style='height:30px;'>开课院系</td><td onmousedown='' style='height:30px;'>课程名称</td><td onmousedown='' style='height:30px;'>课程代码</td><td onmousedown='' style='height:30px;'>本学期辅导总时数</td><td onmousedown='' style='height:30px;'>辅导时间</td><td onmousedown='' style='height:30px;'>校区</td><td onmousedown=''style='height:30px;'>辅导地点</td><td onmousedown='' style='height:30px;'>辅导教师</td><td onmousedown='' style='height:30px;'>辅导教师工号</td><td onmousedown=' style='height:30px;'>辅导教师专业技术职称</td><td onmousedown='' style='height:30px;'>辅导时间地点公布形式</td><td onmousedown='' style='height:30px;'>备注</td><td onmousedown='' style='height:30px;'>统计时间</td></tr>";
//教师信息（基础表）
var jsxx="<table id='tableModel' border='1'><tbody><tr><td onmousedown='' style='height:30px;'>教师工号</td><td onmousedown='' style='height:30px;'>教师姓名</td><td onmousedown='' style='height:30px;'>性别</td><td onmousedown='' style='height:30px;'>教师属性</td><td onmousedown='' style='height:30px;'>出生日期</td><td onmousedown='' style='height:30px;'>入校日期</td><td onmousedown='' style='height:30px;'>所属院系</td><td onmousedown='' style='height:30px;'>学历</td><td onmousedown='' style='height:30px;'>最高学位</td><td onmousedown='' style='height:30px;'>学缘</td><td onmousedown='' style='height:30px;'>专业技术职称</td><td onmousedown='' style='height:30px;'>最近晋升日期</td><td onmousedown='' style='height:30px;'>学科门类</td><td onmousedown='' style='height:30px;'>备注</td><td onmousedown='' style='height:30px;'>统计时间</td></tr>";

function subup(){
	var checks = $("input[name='check_row']:checked");
	if(checks.length != 1){
		alert("请选择一条记录");
		return;
	}
    var tdval= $(checks[0]).parent().parent().children('td').eq(5).text();
    var tdtime= $(checks[0]).parent().parent().children('td').eq(4).text();
    $("#stime").val(tdtime);
    if(tdval=="待校验"){
    	alert("请先校验数据！");
    	return;
    }
    if(tdval=="校验未通过"){
    	alert("请先修改异常数据,无错误数据后再上报！");
    	return;
    }
	hiddenAll();
	var tableStyle = CheckTextOut(nowTable.tableStyle);
	if(nowTable.tableName=="答疑信息"){
		$(".right_tab").html(dyxx);
	}
	if(nowTable.tableName=="自习辅导信息"){
		$(".right_tab").html(zxfdxx);
	}
	if(nowTable.tableName=="教师信息（基础表）"){
		$(".right_tab").html(jsxx);
	}
	//$(".yearDiv").show();
	$("#year").show();
	//$("#saveData").show();
	$("#returnHistory").show();
	$("#subup").val("确认上报");
	$("#subup").show().attr("onclick","showUpDiv()");
	$("#subup").show();
	//$("#importData").show();
	//$("#downloadModel").show();
	//$("#checkloadModel").show();
	
	$.ajax({
		 url:"/audit/hrImport/subup.do",
		 data : {
				tablename :nowTable.tableName,
				tdtime:tdtime,
			},
		 type : "post",
		 dataType : "json",
		 success:function(data){
			 var result = eval("("+data+")");
			 var str="";
			 var newStr="";
			 console.info(result);
			  var rs=result.data;
			 if(result.msgCode=="课表信息"){
				 newStr=kcxx;
				 for ( var i = 0; i < rs.length; i++) {
					  str+="<tr>";
					  str+="<td>"+rs[i].course_department+"</td>";
					  str+="<td>"+rs[i].curriculum_name+"</td>";
					  str+="<td>"+rs[i].curriculum_num+"</td>";
					  str+="<td>"+rs[i].curriculum_type+"</td>";
					  str+="<td>"+rs[i].class_hour+"</td>";
					  str+="<td>"+rs[i].class_num+"</td>";
					  str+="<td>"+rs[i].hebingzhi+"</td>";
					  str+="<td>"+rs[i].campus+"</td>";
					  str+="<td>"+rs[i].class_place+"</td>";
					  str+="<td>"+rs[i].students_num+"</td>";
					  str+="<td>"+rs[i].student_class+"</td>";
					  str+="<td>"+rs[i].class_teacher+"</td>";
					  str+="<td>"+rs[i].class_teacher_num+"</td>";
					  str+="<td>"+rs[i].technical_titles+"</td>";
					  str+="<td>"+rs[i].take_class+"</td>";
					  str+="<td>"+rs[i].teachers_attribute+"</td>";
					  str+="<td>"+rs[i].remarks+"</td>";
					  str+="<td>"+rs[i].statistics_time+"</td>";
					  str+="</tr>";
				 }
			 }
			 if(result.msgCode=="答疑信息"){
				 newStr=dyxx;
				 for ( var i = 0; i < rs.length; i++) {
					  str+="<tr>";
					  str+="<td>"+rs[i].course_department+"</td>";
					  str+="<td>"+rs[i].curriculum_name+"</td>";
					  str+="<td>"+rs[i].curriculum_num+"</td>";
					  str+="<td>"+rs[i].answer_time_zc+"</td>";
					  str+="<td>"+rs[i].hebingzhi+"</td>";
					  str+="<td>"+rs[i].campus+"</td>";
					  str+="<td>"+rs[i].answer_place+"</td>";
					  str+="<td>"+rs[i].answer_teacher+"</td>";
					  str+="<td>"+rs[i].answer_teacher_num 	+"</td>";
					  str+="<td>"+rs[i].technical_titles+"</td>";
					  str+="<td>"+rs[i].report_form+"</td>";
					 // str+="<td>"+rs[i].teachers_attribute+"</td>";
					  str+="<td>"+rs[i].remarks+"</td>";
					  str+="<td>"+rs[i].statistics_time+"</td>";
					  str+="</tr>";
				 }
			 }
			 if(result.msgCode=="自习辅导信息"){
				 newStr=zxfdxx;
				 for ( var i = 0; i < rs.length; i++) {
					  str+="<tr>";
					  str+="<td>"+rs[i].course_department+"</td>";
					  str+="<td>"+rs[i].curriculum_name+"</td>";
					  str+="<td>"+rs[i].curriculum_num+"</td>";
					  str+="<td>"+rs[i].coach_hour+"</td>";
					  str+="<td>"+rs[i].hebingzhi+"</td>";
					  str+="<td>"+rs[i].campus+"</td>";
					  str+="<td>"+rs[i].coach_place+"</td>";
					  str+="<td>"+rs[i].coach_teacher+"</td>";
					  str+="<td>"+rs[i].coach_teacher_num+"</td>";
					  str+="<td>"+rs[i].technical_titles+"</td>";
					  str+="<td>"+rs[i].report_form+"</td>";
					  str+="<td>"+rs[i].remarks+"</td>";
					  str+="<td>"+rs[i].statistics_time+"</td>";
					  str+="</tr>";
				 }
			 }
			 if(result.msgCode=="教师信息（基础表）"){
				 newStr=jsxx;
				 for ( var i = 0; i < rs.length; i++) {
					  str+="<tr>";
					  str+="<td>"+rs[i].teacher_num+"</td>";
					  str+="<td>"+rs[i].teacher_name+"</td>";
					  str+="<td>"+rs[i].sex+"</td>";
					  str+="<td>"+rs[i].teachers_attribute+"</td>";
					  str+="<td>"+rs[i].birthdate+"</td>";
					  str+="<td>"+rs[i].entrance_date+"</td>";
					  str+="<td>"+rs[i].departments+"</td>";
					  str+="<td>"+rs[i].academic_background+"</td>";
					  str+="<td>"+rs[i].highest_degree+"</td>";
					  str+="<td>"+rs[i].xy+"</td>";
					  str+="<td>"+rs[i].technical_titles+"</td>";
					  str+="<td>"+rs[i].latest_promote_date+"</td>";
					  str+="<td>"+rs[i].discipline+"</td>";
					  str+="<td>"+rs[i].remarks+"</td>";
					  str+="<td>"+rs[i].statistics_time+"</td>";
					  str+="</tr>";
				 }
			 }
			 newStr+=str;
			 newStr+="</tbody></table>";
			 $(".right_tab").html(newStr);
			 if(nowTable.isOnlyOne == 1){
					$(".right_tab").append("<div class='pageClass'></div>");
					nowRowsNum = 0;
					rowsDatas = new Array();
					nowPage = 1;
					var tds = $(".right_tab").find("table").eq(0).find("tr").eq(0).find("td");
					for ( var i = 0; i < tds.length; i++) {
						$(tds[i]).attr("style",style);
					}
			 }
			 
		 },
		 error:function(){
			 
		 }
	});
	
}

var sbHtml="<div id='right_sb' style='width:600px;height:300px;border: 1px solid #22BE9E;background-color: #FDFDFD;z-index: 100;position: absolute;'>";
	sbHtml+="<div style='height:32px;width:100%;background-color:#20B2AA'>"
	sbHtml+="<input type='button' id='subStatus' class='inputClass1' style=' cursor: pointer;' value='关闭' onclick='onclose()'/>"
	sbHtml+="</div>"

function showUpDiv(){
	$("#right_sb").show();
}

function onclose(){
	$("#right_sb").hide();
}

function loginyz(){
	$.ajax({
		type:"POST",
	    url:"/audit/hrImport/loginyz.do",
	    data : {
			username :$("#username").val(),pwd:$("#pwd").val(),
		},
	    dataType : "json",
	    success:function(data){
	    	var result = eval("("+data+")");
	    	var flag=result.ok;
	    	    result=eval(result.data);
	    	    console.info(result);
	    	    if(flag){
	    	    	$("#ison").show();
	    	    	$("#isout").hide();
	    	    	var str="";
	    	    	     str+="<option>--请选择--</option>";
	    	    	for ( var i = 0; i < result.length; i++) {
	    	    		var a=result[i].xid+"#"+result[i].schoolid+"#"+result[i].userid;
						str+="<option style='text-overflow:ellipsis;width:100px; ' value='"+a+"' >"+result[i].xname+"</option>"
					}
	    	    	$("#xl").html(str);
	    	    }else{
	    	    	$("#isout").show();
	    	    	$("#ison").hide();
	    	    }
	    	
	    },
	    error:function(){
	    	
	    }
	});
}

function confirmationReport(){
	$.ajax({
		type:"POST",
	    url:"/audit/hrImport/confirmation.do",
	    data : {
			userxx:$("#xl").val(),
			tablename:nowTable.tableName,
            tdtime:$("#stime").val(),
		},
	    dataType : "json",
	    success:function(data){
	    	 var result = eval("("+data+")");
	    	 if (result.data="success") {
	    		 $("#iss").show();
	    	     $("#ise").hide();
			 }else{
				 $("#iss").hide();
	    	     $("#ise").show();
			 }
	    },
	    error:function(){
	    	
	    }
	});
}
