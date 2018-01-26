$(function() {
	// 调用初始化方法
	$.ajaxSetup({ cache: false });
	init();
});




var userrole="";
var userlist;

function getDlyzPath(){
	var base = document.getElementById('dlyzserver');
    return base.value;
}

function backPrevious(){
	$("#newBuild").hide();
	$("#index_page").show();
}

function myTrim(str){
	for ( var i = 0; i < str.length; i++) {
		var star = str.substring(0, 1);
		if (star == " ") {
			str = str.substring(1, str.length);
		}
		var end = str.substring(str.length-1, str.length);
		if (end == " ") {
			str = str.substring(0, str.length-1);
		}
	}
	return str;
}

function init(){
	var cookie = document.cookie;
    if (cookie && cookie != "") {
        var cookies = cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var index = cookies[i].lastIndexOf("=");
            var cookiename = cookies[i].substring(0, index);
            if (myTrim(cookiename) == "uvocookie") {
                var value = cookies[i].substring(index + 1, cookies[i].length);
                var array = value.split("&");
                var url = getDlyzPath() + "/login?name=" + array[1] + "&password=" + array[2];
                $.getJSON(url,
                function(data) {
                    $("#showname").html(eval(data).showname);
                });
            }
        }
    } else {
        window.location.href = getDlyzPath();
    }
	
}

$(function(){
	// 初始化目录
	initMenu();
	initMenuSe();
});

function newBuild(){
	$("#index_page").hide();
	$("#newBuild").show();
}

//横头TAB切换
function changeCss(obj){
	var content=$("#"+obj).attr("he");
	var str=$("#"+obj).attr("style");
	str=str.substring(str.indexOf(":")+1);
	var str1='url(\'/audit/images/button_blue.png\');';
	var str2='url(\'/audit/images/button_dark.png\');';
	if(content=="数据填报"){
			 var tbr=$("#left_menu").find("li[class=check_li]").attr("tbr");
			 if(tbr==0){
				
				 showData();
			 }else{
				 alert("非填报人员无法查看");
			 }
		}else if(content=="数据审核"){
			var shr=$("#left_menu").find("li[class=check_li]").attr("shr");
			if(shr==1){
				
				showSubmitPage();
			}else{
				alert("非审核人员无法查看");
			}
		}
		else if(content=="数据上报"){
		//	var shr=$("#left_menu").find("li[class=check_li]").attr("shr");
			if(userrole=="校级管理员"){
				$("#leftsb").attr("style","background-image:url(\'/audit/images/button_dark.png\'); left:46%;cursor:pointer;");
				$("#lefttb").attr("style",'background-image:url(\'/audit/images/button_blue.png\');cursor:pointer;');
				$("#leftsh").attr("style",'background-image:url(\'/audit/images/button_blue.png\');cursor:pointer;');
				showsbdata();
			}else{
				alert("非校级管理员不能查看");
			}
		}
}

$(function(){
	$("span").click(function (e) {
		var id=$(e.target).attr('id');
		if(id!=null&&id!=undefined){
		var str=id.substring(0,3);
		if(str=="img"){
			var src=$("#"+id).attr('src');
			if(src=="/audit/images/add1.png"){
				document.getElementById(id).src="/audit/images/reduce1.png";
			}else{
				document.getElementById(id).src="/audit/images/add1.png";
			}
		}else if(str="spa"){
			var src=$(e.target).find("img").attr('src');
			
			if(src=="/audit/images/add1.png"){
				var arr=$("#"+id).find("img");
				arr[0].src="/audit/images/reduce1.png";
			}else if(src=="/audit/images/reduce1.png"){
				var arr=$("#"+id).find("img");
				arr[0].src="/audit/images/add1.png";
			}
		}
		
		if(id=="img_1"||id=="span_1"){
			var str2=$("#ul_2").css("display");
			var str3=$("#ul_3").css("display");
			
			var str31=$("#ul_31").css("display");
			var str32=$("#ul_32").css("display");
			var str33=$("#ul_33").css("display");
			var str34=$("#ul_34").css("display");
			var str35=$("#ul_35").css("display");
			if(str2="block"){
				document.getElementById("img_2").src="/audit/images/add1.png";
			}
			if(str3="block"){
				document.getElementById("img_3").src="/audit/images/add1.png";
			}
			if(str31="block"){
				document.getElementById("img_31").src="/audit/images/add1.png";
			}
			if(str32="block"){
				document.getElementById("img_32").src="/audit/images/add1.png";
			}
			if(str33="block"){
				document.getElementById("img_33").src="/audit/images/add1.png";
			}
			if(str34="block"){
				document.getElementById("img_34").src="/audit/images/add1.png";
			}
			if(str35="block"){
				document.getElementById("img_35").src="/audit/images/add1.png";
			}
		}
		/*		var arr= $("#span_1").find("img");
				arr[0].src="/audit/images/reduce1.png";
*/		
		/*
		var id=$(e.target).attr('id');
		var src=$(e.target).attr('src');
		 var id1=id.replace(/img/, "ul");
		alert(src+","+id);
		if(src=="/audit/images/reduce1.png"){
			alert(id1);
		  document.getElementById(id).src="/audit/images/add1.png";
		  document.getElementById(id1).style.display='none';
		  var liarr=document.getElementById(id1).getElementsByTagName("ul");
		  liarr[0].style.display='none';
		}else if(src=="/audit/images/add1.png"){
			alert(id1);
		  document.getElementById(id).src="/audit/images/reduce1.png";
		  document.getElementById(id1).style.display='block';
		  var liarr=document.getElementById(id1).getElementsByTagName("ul");
		  liarr[0].style.display='block';
		}
	*/
		}
	})
})

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
/*	$.each(array,function(i,obj){
		str += "<li  onclick=getTableByCategory("+obj.id+")";
		str+="> <span id='span_"+obj.id+"' title='"+obj.name +"' href='javascript:void(0);' ><img id='img_"+obj.id+"' src='/audit/images/add1.png' class='img_add_reduce' />"+obj.name+"</span>";
		// 多级菜单
		str += "<ul id='ul_"+obj.id +"' style='overflow:hidden; white-space:nowrap; width:100%; text-overflow: ellipsis;'>";
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str = getChildTr(obj,str);
		}
		if(obj.tables != null && obj.tables != undefined && obj.tables.length > 0){
			for ( var j = 0; j < obj.tables.length; j++) {
				str += "<li onclick=checkTab('"+obj.tables[j].tableName+"',"+obj.tables[j].id+","+obj.tables[j].isOnlyOne+",this)";
				str +="><span  title='"+obj.tables[j].tableName +"'>"+ obj.tables[j].tableName+"</span></li>";
			}
		}
		str += "</ul>";
		str += "</li>";
	});*/
	 $.ajax({
		  type:"POST",
		  url:"/audit/moeImport/showPage.do",
		  dataType:"json",
		  async: false,
		  success:function(data){
			 var result=eval("("+data+")"); 
			 var a= result.data;
			 var b=eval("("+a+")");
			 var c=b.content;
			 userrole=b.userRole;
			 str += "<li onclick=tabimg(this)";
			 str+="> <span  href='javascript:void(0);' ><img  src='/audit/images/add1.png' class='img_add_reduce' />教师激励计划</span>";
			   str += "<ul  style='overflow:hidden; white-space:nowrap; width:100%; text-overflow: ellipsis;'>";
				 for ( var i = 0; i < c.length; i++) {
					// 多级菜单
					str +="<li template_id="+c[i].ID+" ctemid="+c[i].CTEMPLATE_ID+" shr="+b.shr+" tbr="+b.tbr+" onclick=checkTab('"+c[i].TEMPLATE_NAME+"',"+c[i].ID+",this);><span>"+c[i].TEMPLATE_NAME+"</span></li>";
				 }
			   str += "</ul>";
			 str += "</li>";
			 $("#left_menu").html(str);
			 if(userrole=="校级管理员"){
				/* $("#leftsh").hide();
				 $("#lefttb").hide();
				 $("#leftsb").show();*/
			 }
		  },
		  error:function(){
			  
		  }
	 });
	 /*str += "<li onclick=tabimg(this)";
		str+="> <span  href='javascript:void(0);' ><img  src='/audit/images/add1.png' class='img_add_reduce' />教师激励计划</span>";
		// 多级菜单
		str += "<ul  style='overflow:hidden; white-space:nowrap; width:100%; text-overflow: ellipsis;'>";
				str += "<li ";
				str +="><span >测试测试</span></li>";
			
		str += "</ul>";
		str += "</li>";
	 $("#left_menu").html(str);*/
	
	
	
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
}

function getChildTr(obj, str){
	$.each(obj.children,function(j,obj2){
		str += "<li  onclick=getTableByCategory("+obj2.id+")"
		str += ">  <span  id='span_"+obj2.id+"' title='"+obj2.name +"'> <img id='img_"+obj2.id+"' src='/audit/images/add1.png' class='img_add_reduce' />"+ obj2.name+"</span>";
		str += "<ul id='ul_"+obj2.id+"'>";
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
function checkTab(showName, id, obj){
	$(".check_li").attr('class', '');
	$(obj).attr("class","check_li");
	
	var tbr= $(obj).attr("tbr");
	var shr= $(obj).attr("shr");
	if(tbr==0){
		//如果是填报人 
		showData();
		return;
	}
	if(shr==1){
		//如果是审核人
		changeCss("leftsh");

	/*	$("#leftsh").click();
		$("#leftsh").unbind();*/
		
//		$("#leftsh").live("click",function(){
//		});	
	}
	if(userrole=="校级管理员"){
		$("#leftsb").click();
	}
	/*
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
	$("#checkloadModel").show();*/
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
var kcxx="<table id='tableModel' border='1' class='table_style'  style='border-collapse:collapse;'><tbody><tr style='background-color:#d6dfe5'><td onmousedown='' style='height:30px;'>开课院系</td><td onmousedown='' style='height:30px;'>课程名称</td><td onmousedown='' style='height:30px;'>课程代码</td><td onmousedown='' style='height:30px;'>课程类型</td><td onmousedown='' style='height:30px;'>课时总数</td><td onmousedown='' style='height:30px;'>开课号</td><td onmousedown='' style='height:30px;'>上课时间</td><td onmousedown='' style='height:30px;'>校区</td><td onmousedown='' style='height:30px;'>上课地点</td><td onmousedown='' style='height:30px;'>选课人数</td><td onmousedown='' style='height:30px;'>所在班级</td><td onmousedown='' style='height:30px;'>任课教师</td><td onmousedown='' style='height:30px;'>任课教师工号</td><td onmousedown='' style='height:30px;'>任课教师专业技术职称</td><td onmousedown='' style='height:30px;'>任课教师承担课时</td><td onmousedown='' style='height:30px;'>教师属性</td><td onmousedown='' style='height:30px;'>备注</td><td onmousedown='' style='height:30px;'>统计时间</td></tr>"
//答疑信息
var dyxx="<table id='tableModel' border='1' class='table_style'  style='border-collapse:collapse;'><tbody><tr style='background-color:#d6dfe5'><td onmousedown='' style='height:30px;'>开课院系</td><td onmousedown='' style='height:30px;'>课程名称</td><td onmousedown='' style='height:30px;'>课程代码</td><td onmousedown='' style='height:30px;'>本学期答疑总时数</td><td onmousedown='' style='height:30px;'>答疑时间</td><td onmousedown='' style='height:30px;'>校区</td><td onmousedown='' style='height:30px;'>答疑地点</td><td onmousedown='' style='height:30px;'>答疑教师</td><td onmousedown='' style='height:30px;'>答疑教师工号</td><td onmousedown='' style='height:30px;'>答疑教师专业技术职称</td><td onmousedown='' style='height:30px;'>答疑时间地点公布形式</td><td onmousedown='' style='height:30px;'>备注</td><td onmousedown='' style='height:30px;'>统计时间</td></tr>";
//自习辅导信息
var zxfdxx="<table id='tableModel' border='1' class='table_style'  style='border-collapse:collapse;'><tbody><tr style='background-color:#d6dfe5'><td onmousedown='' style='height:30px;'>开课院系</td><td onmousedown='' style='height:30px;'>课程名称</td><td onmousedown='' style='height:30px;'>课程代码</td><td onmousedown='' style='height:30px;'>本学期辅导总时数</td><td onmousedown='' style='height:30px;'>辅导时间</td><td onmousedown='' style='height:30px;'>校区</td><td onmousedown=''style='height:30px;'>辅导地点</td><td onmousedown='' style='height:30px;'>辅导教师</td><td onmousedown='' style='height:30px;'>辅导教师工号</td><td onmousedown=' style='height:30px;'>辅导教师专业技术职称</td><td onmousedown='' style='height:30px;'>辅导时间地点公布形式</td><td onmousedown='' style='height:30px;'>备注</td><td onmousedown='' style='height:30px;'>统计时间</td></tr>";
//教师信息（基础表）
var jsxx="<table id='tableModel' border='1' class='table_style'  style='border-collapse:collapse;'><tbody><tr style='background-color:#d6dfe5'><td onmousedown='' style='height:30px;'>教师工号</td><td onmousedown='' style='height:30px;'>教师姓名</td><td onmousedown='' style='height:30px;'>性别</td><td onmousedown='' style='height:30px;'>教师属性</td><td onmousedown='' style='height:30px;'>出生日期</td><td onmousedown='' style='height:30px;'>入校日期</td><td onmousedown='' style='height:30px;'>所属院系</td><td onmousedown='' style='height:30px;'>学历</td><td onmousedown='' style='height:30px;'>最高学位</td><td onmousedown='' style='height:30px;'>学缘</td><td onmousedown='' style='height:30px;'>专业技术职称</td><td onmousedown='' style='height:30px;'>最近晋升日期</td><td onmousedown='' style='height:30px;'>学科门类</td><td onmousedown='' style='height:30px;'>备注</td><td onmousedown='' style='height:30px;'>统计时间</td></tr>";

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
					  str+="<td>"+rs[i].answer_hour+"</td>";
					  str+="<td>"+rs[i].hebingzhi+"</td>";
					  str+="<td>"+rs[i].campus+"</td>";
					  str+="<td>"+rs[i].answer_place+"</td>";
					  str+="<td>"+rs[i].answer_teacher+"</td>";
					  str+="<td>"+rs[i].answer_teacher_num 	+"</td>";
					  str+="<td>"+rs[i].technical_titles+"</td>";
					  str+="<td>"+rs[i].report_form+"</td>";
					  str+="<td>"+rs[i].teachers_attribute+"</td>";
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
	    	    if(flag==true){
	    	    	var b=result.data;
	    	        var rs=eval(b);
	    	    	$("#ison").show();
	    	    	$("#isout").hide();
	    	    	var str="<option>--请选择--</option>";
	    	    	for ( var i = 0; i < rs.length; i++) {
	    	    		var a=rs[i].xid+"#"+rs[i].schoolid+"#"+rs[i].userid;
						str+="<option style='text-overflow:ellipsis;width:100px;' value='"+a+"' >"+rs[i].xname+"</option>";
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
	var hehe=$("#left_menu").find("li[class=check_li]").find("span").text();
	var id=  $("#left_menu").find("li[class=check_li]").attr("template_id");
	$.ajax({
		type:"POST",
	    url:"/audit/hrImport/confirmation.do",
	    data : {
			userxx :$("#xl").val(),
			tablename:hehe,
            tdtime:$("#showSBTime").val(),
            id:id
		},
	    dataType : "json",
	    success:function(data){
	    	 var result = eval("("+data+")");
	    	 var a=result.data
	    	 console.info(a);
	    	 if (a=="success") {
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

function tabimg(element){
	 var src =$(element).find("img").attr("src");
	 if(src=="/audit/images/add1.png"){
		 $(element).find("img").attr("src","/audit/images/reduce1.png")
	 }else{
		 $(element).find("img").attr("src","/audit/images/add1.png")
	 }
}

function findSelectNode(){
    var id= $("#left_menu").find("li[class=check_li]").attr("template_id");
    $("#insert_version").val($("#importMoeTime").val());
    $("#MOEid").val(id);
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
	if(type != "xls" && type != "xlsx"){
		alert("不是excel格式,请重新上传");
		return;
	}
	$("#importFileForm").submit();
	
}

$("#importFileForm").ajaxForm({
    dataType: "json",
    success:  importResult
});

function importResult(data){
	
}
var tbzt;
var shzt;
function showData(){
	 $("#lefttb").attr("style","background-image:url(\'/audit/images/button_dark.png\');cursor:pointer;");
	 $("#leftsh").attr("style",'background-image:url(\'/audit/images/button_blue.png\');cursor:pointer;');
	 $("#leftsb").attr("style",'background-image:url(\'/audit/images/button_blue.png\');left:46%;cursor:pointer;');
	var showName=$("#left_menu").find("li[class=check_li]").find("span").text();
	var str=$("#showname").html();
	$("#current_name").append(str);
	$("#newBuild").hide();
	//统计表界面
	$("#index_page").hide();
	$("#MXpage").show();
	$("#SBpage").show();
	$("#tab_name").html("当前位置：" + showName);
	$("#tab_name").prop("title","当前位置：" + showName);
	
	 var Tid= $("#left_menu").find("li[class=check_li]").attr("template_id");
	 var Tinsert_version=$("#importMoeTime").val();
	 
	 $("#waiting").show();
	$.ajax({
		type:"POST",
	    url:"/audit/moeImport/showData.do",
	    dataType : "json",
	    async: false,
	    data:{
	    	"id":Tid,
	    	"insert_version":Tinsert_version,
		},
         success:function(data){
        	 var a = eval("("+data+")");
        	 var result=eval("("+a.data+")")
        	 //excel表头
	            title=result.title;
	            //excel内容
	            var contenttbody=result.content;
	            //驳回理由
	            var bhly=result.bhly;
	            //自定义模版名
	            var cname=result.cname;
	            var size=result.size;
	            var userstate=result.userstate;
	            if(userstate[0]!=undefined){
	            	 tbzt= userstate[0].TBZT;
		             shzt= userstate[0].SHZT;
		             $("#userState").attr("tbztid",userstate[0].ID);
		             var ccc=false;
			           
		                if(tbzt==0&&shzt==0){
			            	$("#userState").text("数据未导入！");
			            	ccc=false;
			            }
			            if(tbzt==1&&shzt==0){
			            	$("#userState").text("数据已导入，未校验！");
			            	ccc=true;
			            }
			            if(tbzt==2&&shzt==0){
			            	$("#userState").text("校验未通过！");
			            	ccc=true;
			            }
			            if(tbzt==3&&shzt==0){
			            	$("#userState").text("校验通过！");
			            	ccc=false;
			            }
			            if(tbzt==4&&shzt==0){
			            	$("#userState").text("数据已提交！");
			            	ccc=false;
			            }
			            if(tbzt==4&&shzt==1){
			            	$("#userState").text("审批未通过！");
			            	ccc=false;
			            }
			            if(tbzt==4&&shzt==2){
			            	$("#userState").text("审批通过！");
			            	ccc=false;
			            }
			            if(tbzt==4&&shzt==3){
			            	$("#userState").text("数据已入库！");
			            	ccc=false;
			            }
		             
		             
	            }else{
	            	$("#userState").text("暂无数据！");
	            }
	            
	            var str="";
	                str+="<tr style='background-color: #d6dfe5;height: 30px;'  valign='middle'>";
	                str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>序号</td>"
	            for ( var i = 0; i < title.length; i++) {
	            	//nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' 
					  str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>";
					   str+=title[i];
					  str+="</td>";
				}
				str+="</tr>";
				$("#tb_thead").html(str);
				  var str1="";
				  for(var i = 0; i < contenttbody.length; i++){
					  //nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'
				        str1+="<tr>";
				        str1+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+(i+1)+"</td>"
				        for(var j = 0; j < contenttbody[i].length-1; j++){
				          str1+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>";
				           if(ccc){
				        	      str1+="<input  thisid='"+contenttbody[i][0]+"' value='"+contenttbody[i][j+1]+"' dataname='"+title[j]+"' onblur='editdata(this)' >";
				           }else{
				        	   str1+=contenttbody[i][j+1];
				           }
				          str1+="</td>";
				        }
			           str1+="</tr>";
				   }
				   $("#tb_tbody").html(str1);
				   $("#waiting").hide();
         }
	});
}

//在线修改
function editdata(element){
   var value=	$(element).val();
   var dataid=$(element).attr("thisid");
   var dataname=$(element).attr("dataname");
   var tablename=  $("#left_menu").find("li[class=check_li]").attr("template_id");
   $.ajax({
	    type:"post",
	    url:"/audit/moeImport/editdata.do",
	    data:{"value":value,"dataid":dataid,"tablename":tablename,"dataname":dataname},
	    dataType:"json",
	    success:function(){
	    	
	    },
	    error:function(){
	    	
	    }
   })
}
 //数据审核页面
 function showSubmitPage(){
	 
/*	 $("#lefttb").attr("style","background-image:url(\'/audit/images/button_dark.png\');cursor:pointer;");
	 $("#leftsh").attr("style",'background-image:url(\'/audit/images/button_blue.png\');cursor:pointer;');
	 $("#leftsb").attr("style",'background-image:url(\'/audit/images/button_blue.png\');left:46%;cursor:pointer;');*/
	 
	    $("#lefttb").attr("style",'background-image:url(\'/audit/images/button_blue.png\'); cursor:pointer;');
		$("#leftsh").attr("style","background-image:url(\'/audit/images/button_dark.png\');cursor:pointer;");
		$("#leftsb").attr("style",'background-image:url(\'/audit/images/button_blue.png\'); left:46%;cursor:pointer;');
	    /*$("#lefttb").attr("class",'tab_label_unchoose');
		$("#leftsh").attr("class",'tab_label_choose');
		$("#leftsb").attr("class",'tab_label_unchoose');*/
	  var shr=  $("#left_menu").find("li[class=check_li]").attr("shr");
	    if(shr==1){
	    	var showName=$("#left_menu").find("li[class=check_li]").find("span").text();
	  	    var tableid=$("#left_menu").find("li[class=check_li]").attr("template_id");
	    	var str=$("#showname").html();
			$("#current_name").append(str);
			$("#newBuild").hide();
			//统计表界面
			//$("#index_page").show();
			$("#MXpage").hide();
			$("#index_page").show();
			$("#SBpage").hide();
			$("#tab_name").html("当前位置：" + showName);
			$("#tab_name").prop("title","当前位置：" + showName);
			var insert_version= $("#shrlookdate").val();
			$("#notpass").hide();
			$("#pass").hide();
			$("#goback").hide();
			$("#confirmPass").show();
			$("#SHdataImport").hide();
			showSHRfirstdata(tableid,insert_version);
			
	    }else{
	    	alert("您不是审核人员！无法查看！");
	    }
 }
 //填报人提交数据
 function submitData(){
		var tr=$("#tb_tbody").find("tr");
		var tdvalue;
		for ( var i = 0; i < tr.length; i++) {
			 tdvalue=$(tr[i]).find("td:last").text();
			 if(tdvalue==undefined){
				 
			 }else{
				 if(tdvalue.trim()!=""){
					 alert("有错误数据不能提交！");
					 return;
				 }
			 }
		}
		 if(tbzt==3&&shzt==0){
				$.ajax({
					type:"POST",
					url:"/audit/moeImport/TBRsubmitData.do",
					data:{"tbztid":$("#userState").attr("tbztid")},
					success:function(){
						alert("提交成功！");
						showData();
					},
					error:function(){
						alert("提交失败！");
					}
				});
         }else{
        	 alert("当前状态不能提交！");
          	return;
         }
	
 }
 
function showSHRfirstdata(tableid,insert_version){
	$("#datatable1").show();
	$("#datatable2").hide();
	 $("#waiting").show();
	$.ajax({
		type:"POST",
		url:"/audit/moeImport/SHRLookFirstData.do",
		data:{"tableid":tableid,"insert_version":insert_version},
		dataType : "json",
		success:function(data){
			var result=eval("("+data+")");
			var a=result.data;
			var str="";
			var list=new Array();
			for ( var i = 0; i < a.length; i++) {
				 str+="<tr style='background-color: #ffffff;height: 30px;text-align: center;' valign='middle'>";
				 str+="<td>"+a[i].name+"</td>";
				 str+="<td>"+a[i].showname+"</td>";
				 str+="<td>"+a[i].insert_version+"</td>";
		            if(a[i].TBZT==4&&a[i].SHZT==0){
		            	 str+="<td>未审批</td>";
		            } else
		            if(a[i].TBZT==4&&a[i].SHZT==1){
		            	 str+="<td>审批未通过</td>";
		            }else
		            if(a[i].TBZT==4&&a[i].SHZT==2){
		            	 str+="<td>审批通过</td>";
		            	 list.push(a[i].tbr);
		            }else
		            if(a[i].TBZT==4&&a[i].SHZT==3){
		            	 str+="<td>数据已入库</td>";
		            }else{
		            	 str+="<td>未提交</td>";
		            }
				 str+="<td style='cursor:pointer;' onclick=\"isPassBySHR("+a[i].TBZT+","+a[i].SHZT+","+a[i].ID+","+a[i].TABLE_ID+",'"+a[i].insert_version+"',"+a[i].tbr+")\">审批</td>";
				 str+="</tr>";
				
			}
			userlist=list;
			$("#SHRtbody").html(str);
			 $("#waiting").hide();
		},
		error:function(){
			alert("数据查询失败！");
		}
	})
}
function isPassBySHR(tb,sh,id,tableid,insert_version,tbr){
/*	var flag=false;
	if(){
		
	}*/
	if(tb==4&& sh==0 || tb==4 && sh==2 ||  tb==4 && sh==3){
		$("#notpass").show();
		$("#pass").show();
		$("#pass").attr("updateid",id);
		$("#goback").show();
		$("#notpass").attr("updateid",id);
		$("#SHdataImport").show();
		$("#confirmPass").hide();
		$("#datatable1").hide();
		$("#datatable2").show();
		$.ajax({
			 type:"POST",
			 url:"/audit/moeImport/SHRLooksecondData.do",
			 data:{"tableid":tableid,"insert_version":insert_version,"tbr":tbr},
			 dataType:"json",
			 success:function(data){

	        	 var a = eval("("+data+")");
	        	 var result=eval("("+a.data+")")
	        	 console.info(result);
	        	 //excel表头
		            title=result.title;
		            //excel内容
		            var contenttbody=result.content;
		            //驳回理由
		            var bhly=result.bhly;
		            //自定义模版名
		            var cname=result.cname;
		            var size=result.size;
		            var userstate=result.userstate;
		          //  $("#userState").attr("tbztid",userstate[0].ID);
		            var str="";
		                str+="<tr style='background-color: #d6dfe5;height: 30px;'  valign='middle'>";
		                str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>序号</td>"
		            for ( var i = 0; i < title.length; i++) {
		            	//nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' 
						  str+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>";
						   str+=title[i];
						  str+="</td>";
					}
					str+="</tr>";
					$("#tb_theadshr").html(str);
					  var str1="";
					  for(var i = 0; i < contenttbody.length; i++){
						  //nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'
					        str1+="<tr>";
					        str1+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+(i+1)+"</td>"
					        for(var j = 0; j < contenttbody[i].length-1; j++){
					          str1+="<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>";
					          str1+=contenttbody[i][j+1]; 
					          str1+="</td>";
					        }
				           str1+="</tr>";
					   }
					   $("#tb_tbodyshr").html(str1);
					   $("#SHdataImport").attr("thisid",tbr);
					   if(userstate[0]!=undefined){
						   var tbzt=userstate[0].TBZT;
				           var shzt= userstate[0].SHZT;
					   }
					   
			 },
			 error:function(){
				 
			 }
		});
	}else{
		alert("未提交状态无法查看");
	}
}
//返回
function  isgouback(){
	showSubmitPage();
}

//通过和未通过
function passOrNotPass(state,element){
	$.ajax({
		type:"POST",
		url:"/audit/moeImport/passOrNotPass.do",
		data:{"state":state,"id":$(element).attr("updateid")},
		success:function(){
			alert("审批成功！");
		},
		error:function(){
			alert("审批失败！");
		}
	});
}


//课表信息
var kcxx="<tr style='background-color: #d6dfe5;height: 30px;'  valign='middle'>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >开课院系</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >课程名称</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >课程代码</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >课程类型</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >课时总数</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >开课号</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >上课时间</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >校区</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >上课地点</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >选课人数</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >所在班级</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >任课教师</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >任课教师工号</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >任课教师专业技术职称</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >任课教师承担课时</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >教师属性</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >备注</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >统计时间</td></tr>"
//答疑信息
var dyxx="<tr style='background-color: #d6dfe5;height: 30px;'  valign='middle'>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >开课院系</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>课程名称</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>课程代码</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>本学期答疑总时数</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>答疑时间</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>校区</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>答疑地点</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>答疑教师</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>答疑教师工号</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>答疑教师专业技术职称</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>答疑时间地点公布形式</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>备注</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>统计时间</td></tr>";
//自习辅导信息
var zxfdxx="<tr style='background-color: #d6dfe5;height: 30px;'  valign='middle'>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>开课院系</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>课程名称</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>课程代码</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>本学期辅导总时数</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>辅导时间</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>校区</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>辅导地点</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>辅导教师</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>辅导教师工号</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>辅导教师专业技术职称</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>辅导时间地点公布形式</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>备注</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>统计时间</td>" +
		"</tr>";
//教师信息（基础表）
var jsxx="<tr style='background-color: #d6dfe5;height: 30px;'  valign='middle'>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >教师工号</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>教师姓名</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>性别</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>教师属性</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>出生日期</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>入校日期</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>所属院系</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>学历</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>最高学位</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>学缘</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>专业技术职称</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>最近晋升日期</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>学科门类</td>" +
		"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>备注</td></tr>";


function showsbdata(){
	
	var showName=$("#left_menu").find("li[class=check_li]").find("span").text();
	var str=$("#showname").html();
	$("#current_name").append(str);
	$("#newBuild").hide();
	//统计表界面
	$("#tab_name").html("当前位置：" + showName);
	$("#tab_name").prop("title","当前位置：" + showName);
	
	$("#MXpage").hide();
	$("#index_page").hide();
	$("#SBpage").show();
     var time=$("#showSBTime").val();
     var id= $("#left_menu").find("li[class=check_li]").attr("template_id");
     var tablename= $("#left_menu").find("li[class=check_li]").find("span").text();
      $("#waiting").show();
		$.ajax({
			type:"POST",
			url:"/audit/moeImport/showsbdata.do",
			data:{"time":time,"id":id},
			dataType:"json",
			success:function(data){
				var a=eval("("+data+")");
			    var rs=a.data;
			    var newStr="";
			    var str="";
			    if(tablename=="坐班答疑信息表"){
			    	 newStr=dyxx;
					 for ( var i = 0; i < rs.length; i++) {
						  str+="<tr  style='height: 30px;'  valign='middle'>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].course_department+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].curriculum_name+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].curriculum_num+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].answer_hour_sum+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].hebingzhi+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].answer_campus+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].answer_place+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].answer_teacher+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].answer_teacher_num 	+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].technical_titles+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].report_form+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >"+rs[i].remarks+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].insert_version+"</td>";
						  str+="</tr>";
					 }
			    }
			    
			    if(tablename=="教师信息"){
			    	newStr=jsxx;
			    	 for ( var i = 0; i < rs.length; i++) {
						  str+="<tr  style='height: 30px;'  valign='middle'>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].teacher_num+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].teacher_name+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].sex+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].teachers_attribute+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].birthdate+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].entrance_date+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].departments+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].academic_background+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].highest_degree+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].xy+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].technical_titles+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >"+rs[i].latest_promote_date+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].discipline+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].remarks+"</td>";
						  str+="</tr>";
					 }
			    }
			    
			    if(tablename=="自习辅导信息"){
			    	newStr=zxfdxx;
			    	 for ( var i = 0; i < rs.length; i++) {
			    		  var a= rs[i].curriculum_num==undefined?" ":rs[i].curriculum_num
						  str+="<tr  style='height: 30px;'  valign='middle'>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].course_department+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].curriculum_name+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+a+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].cocah_last_total+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].hebingzhi+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].campus+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].cocah_place+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].cocah_teacher+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].cocah_teacher_num+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].technical_titles+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'></td>"; //"+rs[i].report_form+"
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >"+rs[i].remarks+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].insert_version+"</td>";
						  str+="</tr>";
					 }
			    }
			    
			    if(tablename=="课表信息"){
			    	newStr=kcxx;
			    	 for ( var i = 0; i < rs.length; i++) {
						  str+="<tr  style='height: 30px;'  valign='middle'>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].course_department+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].curriculum_name+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].curriculum_num+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].curriculum_type+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].class_hour+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].class_num+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].hebingzhi+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].campus+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].class_place+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].students_num+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].student_class+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >"+rs[i].class_teacher+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].class_teacher_num+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].technical_titles+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].take_class+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].teachers_attribute+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >"+rs[i].remarks+"</td>";
						  str+="<td  nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+rs[i].insert_version+"</td>";
						  str+="</tr>";
					 }
			    }
			    
			    $("#tb_theadsb").html(newStr);
			    $("#tb_tbodysb").html(str);
			    $("#waiting").hide();
			},
			error:function(){
				alert("查询出错！");
			}
		});
}
 

function confirmPass(element){
	var tr=$("#SHRtbody").find("tr");
	for ( var i = 0; i < tr.length; i++) {
		 var tdvalue=$(tr[i]).find("td").eq(3).text();
	/*	 if(tdvalue.trim()=="数据已入库"){
			 alert("数据已入库！");
			 return;
		 }*/
		 if(tdvalue.trim()=="未审批" || tdvalue.trim()=="审批未通过" || tdvalue.trim()=="审批未通过" || tdvalue.trim()=="未提交"){
			 alert("该学院数据没有全部通过无法提交！");
			 return;
		 }
	}
	var hehe=$("#left_menu").find("li[class=check_li]").find("span").text();
	var tableid=$("#left_menu").find("li[class=check_li]").attr("template_id");
	var time=$("#shrlookdate").val();
/*	for ( var i = 0; i < userlist.length; i++) {
		console.info(userlist[i]);
		$.ajax({
			type:"POST",
			url:"/audit/moeImport/confirmPass.do",
			data:{"userlist":userlist[i],"time":time,"showname":hehe},
		    dataType:"json",
		    success:function(data){
		    	
		    },
		    error:function(){
		    	
		    }
		});
	}*/
	
	$.ajax({
		type:"POST",
		url:"/audit/moeImport/confirmPass.do",
		data:{"userlist":JSON.stringify(userlist),"time":time,"showname":hehe,"tableid":tableid},
	    dataType:"json",
	    success:function(data){
	    	var result=eval("("+data+")");
	    	showSubmitPage();
	    	alert(result.msgCode);
	    },
	    error:function(){
	    	
	    }
	});

}


function  sx(){
	 showData();
}

//导出数据到excel
function exportTable(){
	var Tid= $("#left_menu").find("li[class=check_li]").attr("template_id");
	var Tinsert_version=$("#importMoeTime").val();
	document.getElementById("exportform").action = "/audit/moeImport/downdata.do?id="+Tid+"&Tinsert_version="+Tinsert_version;
	document.getElementById("exportform").submit();

}
//下载模板
function downmb(){
	var id= $("#left_menu").find("li[class=check_li]").attr("ctemid");
	if(id!="undefined"){
		var url ="/TQCC/excel/downDefineTemplate.htm?defineId=" + id;
		window.location.href = url;
	}
}

//显示
function showUpDiv(){
	 $("#iss").hide();
     $("#ise").hide();
	$("#right_sb").show();
	
}
//关闭
function onclose(){
	$("#right_sb").hide();
}

function newCheck(){
	 var id= $("#left_menu").find("li[class=check_li]").attr("template_id");
	 var insert_version=$("#importMoeTime").val();
	$.ajax({
		 type:"POST",
		 url:"/audit/moeImport/newCheck.do",
		 data:{"id":id,"version":insert_version},
		 success:function(data){
			 showData();
			 alert("校验完成");
		 },
		 error:function(){
			 
		 }
	})
}

function qk(){
	var id= $("#left_menu").find("li[class=check_li]").attr("template_id");
	var insert_version=$("#importMoeTime").val();
	$.ajax({
		 type:"POST",
		 url:"/audit/moeImport/cleanData.do",
		 data:{"id":id,"version":insert_version},
		 success:function(data){
			 showData();
			 alert("清除成功！");
		 },
		 error:function(){
			 
		 }
	})
}

function sbdataImport(){
	var Tid= $("#left_menu").find("li[class=check_li]").attr("template_id");
	var Tinsert_version=$("#showSBTime").val();
	document.getElementById("exportformSB").action = "/audit/moeImport/importdowndata.do?id="+Tid+"&Tinsert_version="+Tinsert_version;
	document.getElementById("exportformSB").submit();

}

function SHdataImport(element){
	var Tinsert_version=$("#shrlookdate").val();
	var Tid= $("#left_menu").find("li[class=check_li]").attr("template_id");
	var tbr= $(element).attr("thisid");
	document.getElementById("exportformSB").action = "/audit/moeImport/shDataImport.do?id="+Tid+"&Tinsert_version="+Tinsert_version+"&tbr="+tbr;
	document.getElementById("exportformSB").submit();
}
