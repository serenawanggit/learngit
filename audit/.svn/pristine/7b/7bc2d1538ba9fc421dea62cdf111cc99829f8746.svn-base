var start = 1 ,pageSize = 10,count=0;
var thisObj;
var hr_id=0;//用做修改id的记载
//菜单对象
var array=new Array();
//所有的分类
var list = new Array();
//表结构
var tables = new Array();
$(function(){
	search(start,pageSize);
	validateLogin();
});
//显示或影藏(ADD)DIV
function showOrHideIndexDetailDiv(param,param2){
	if(param=="add"){
		var indexDetailDiv = $("#updateDIv");
		$("#addSaveOrUPdateInit").text("新增表");
	    $("#myForm")[0].reset();  
		$("#addSaveA").show();
		$("#updateA").hide();
		$("#updateDIv").hide();
		
		if(indexDetailDiv.css("display") != "block"){
			indexDetailDiv.fadeIn();
			showOrHideMask();
		}else{
			indexDetailDiv.fadeOut();
			showOrHideMask();
		}
	}else if(param=="update"){
		var indexDetailDiv = $("#updateDIv");
		$("#addSaveOrUPdateInit").text("修改表");
		$("#updateA").show();
		$("#addSaveA").hide();
		$("#updateDIv").hide();
		if(indexDetailDiv.css("display") != "block"){
			indexDetailDiv.fadeIn();
			showOrHideMask();
		}else{
			indexDetailDiv.fadeOut();
			showOrHideMask();
		}
		updateInit(param2);
	}else if(param=="compileCategory"){
		var indexDetailDiv = $("#compileCategory");
		if(indexDetailDiv.css("display") != "block"){
			indexDetailDiv.fadeIn();
			addCategoryHide();
		}else{
			indexDetailDiv.fadeOut();
			addCategoryHide();
		}
	}else{
		$("#updateDIv").hide();
		$("#mask").hide();
	}
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

//复选框事件  
//全选、取消全选的事件  
function selectAll(){  
    if ($("#SelectAll").attr("checked")) {  
        $(":checkbox").attr("checked", true);  
    } else {  
        $(":checkbox").attr("checked", false);  
    }  
}  
//子复选框的事件  
function setSelectAll(){  
    //当没有选中某个子复选框时，SelectAll取消选中  
    if (!$("#subcheck").checked) {  
        $("#SelectAll").attr("checked", false);  
    }  
    var chsub = $("input[type='checkbox'][id='subcheck']").length; //获取subcheck的个数  
    var checkedsub = $("input[type='checkbox'][id='subcheck']:checked").length; //获取选中的subcheck的个数  
    if (checkedsub == chsub) {  
        $("#SelectAll").attr("checked", true);  
    }  
}  

function save(){
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		async : false,
		url:getRootPath()+"/audit/hrTableTotalController/insertSelective.do",
		data:{
			"tablename" : $("#hr_tablename").val(), 
			"tabledataname" : $("#hr_tabledataname").val(), 
			"belongtype" : $("input[name='radio']:checked").val(), 
			"ismust" : $("input[name='radio2']:checked").val(), 
			"categoryid" : $("#hr_categoryid").val(), 
			"isoriginal" : $("input[name='radio3']:checked").val(), 
			"remark" : $("#hr_remark").val(), 
			"isonlyone" : $("input[name='radio4']:checked").val()
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			if(data!="0"){
				alert("新增成功");
				search(start,pageSize);
				showOrHideIndexDetailDiv('','');
			}else{
				alert("新增异常");
			}
		}
	});
}
/**
 * 修改 的时候把原来的数据调出来显示
 * @param id
 */
function updateInit(id){
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		url:getRootPath()+"/audit/hrTableTotalController/selectByPrimaryKey.do",
		data:{
			"id" : id
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			hr_id=id;
			$("#hr_tablename").val(data.tableName);
			$("#hr_tabledataname").val(data.tableDataName);
			if(data.belongType=="0"){
				$("#jyb_radio").attr("checked","checked");
			}else{
				$("#jw_radio").attr("checked","checked");
			}
			if(data.isMust=="0"){
				$("#is_must").attr("checked","checked");
			}else{
				$("#is_must2").attr("checked","checked");
			}
			$("#hr_categoryid").val(data.categoryId);
			if(data.isOriginal=="0"){
				$("#is_original").attr("checked","checked");
			}else{
				$("#is_original2").attr("checked","checked");
			}
			$("#hr_remark").val(data.remark);
			if(data.isOnlyOne=="0"){
				$("#is_only_one").attr("checked","checked");
			}else{
				$("#is_only_one2").attr("checked","checked");
			}
			$("#hr_tablestyle").val(data.tableStyle);
		}
	});
}
/**
 * 修改
 * @param id
 */
function update(){
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		url:getRootPath()+"/audit/hrTableTotalController/updateByPrimaryKeySelective.do",
		data:{
			"id" : hr_id, 
			"tablename" : $("#hr_tablename").val(), 
			"tabledataname" : $("#hr_tabledataname").val(), 
			"belongtype" : $("input[name='radio']:checked").val(), 
			"ismust" : $("input[name='radio2']:checked").val(), 
			"categoryid" : $("#hr_categoryid").val(), 
			"isoriginal" : $("input[name='radio3']:checked").val(), 
			"remark" : $("#hr_remark").val(), 
			"isonlyone" : $("input[name='radio4']:checked").val()
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			if(data!="0"){
				alert("修改成功");
				search(start,pageSize);
				showOrHideIndexDetailDiv("");
			}else{
				alert("错误的修改");
			}
			hr_id=0;
		}
	});
}
/**
 * 查询记录
 * @param start 开始页
 * @param pageSize 每页多少条
 */
function search(start,pageSize){
	var tabName=$("#tabName").val();
	if(tabName=="请输入表名")tabName="";
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		url:getRootPath()+"/audit/hrTableTotalController/searchAll.do",
		data:{
			  "start":start,
			  "pageSize":pageSize,
			  "tabName":tabName
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			var html="";
			for(var i=0;i<data.length;i++){
				html += "<tr>";
				html += "<td align='center'><input type='checkbox' name='check_box' onclick='setSelectAll()' value='"+data[i].id+"' id='subcheck'></td>";
				html += "<td align='center'>"+data[i].id+"</td>";
				html += "<td align='center'><a href='javascript:void(0)' onclick='details("+data[i].id+","+data[i].isOnlyOne+");'>"+data[i].tableName+"</a></td>";
				html += "<td align='center'>"+data[i].tableDataName+"</td>";
				if(data[i].belongType=="0"){//所属类型 （0,教育部;1,上海教委）
					html += "<td align='center'>教育部</td>";
				}else{
					html += "<td align='center'>上海教委</td>";
				}
				if(data[i].isMust=="0"){//是否必须 （0,必须;1,不必须）
					html += "<td align='center'>必须</td>";
				}else{
					html += "<td align='center'>不必须</td>";
				}
				html += "<td align='center'>"+data[i].categoryId+"</td>";
				if(data[i].isOriginal=="0"){//是否原始表 （0,原始表;1,衍生表）
					html += "<td align='center'>原始表</td>";
				}else{
					html += "<td align='center'>衍生表</td>";
				}
				if(data[i].isOnlyOne=="0"){
					html += "<td align='center'>是</td>";
				}else{
					html += "<td align='center'>不是</td>";//是否存储一条记录 （0,是;1,不是）
				}
				if(data[i].tableStyle!=""){
					html += "<td align='center'>有</td>";
				}else{
					html += "<td align='center'>无</td>";
				}
				html += "<td align='center'>"+data[i].remark+"</td>";
				html += "<td align='center'><a href='javascript:void(0)' onclick=\"showOrHideIndexDetailDiv('update',"+data[i].id+")\");'>修改</a>&nbsp;<a href='javascript:void(0)' onclick='deleteOne("+data[i].id+");'>删除</a></td>";
				html += "</tr>";
			}
			$("#hr_main_table tbody").html(html);
			//总记录条数
			$("#pageCount").text(searchPageCount());
		}
	});
}
/**
 * 详细情况
 */
function details(id,isOnlyOne){
	window.location.href=getRootPath()+"/audit/hrTableFieldController/selectByTableId.do?hrtableid="+id+"&isOnlyOne="+isOnlyOne;
}
/**
 * 删除单条记录
 */
function deleteOne(id){
	if (confirm("确定删除吗,删除后数据不可恢复")) {
		jQuery.ajax({
			type:"POST",
			dataType:"json",
			async : false,
			url:getRootPath()+"/audit/hrTableTotalController/deleteByPrimaryKey.do",
			data:{
				"id":id
			},
			errer:function(){
				alert("网络异常,请稍后再试...");
			},
			success:function(result){
				var data = eval("("+result+")");
				if(data!="0"){
					alert("删除成功");
					search(start,pageSize);
				}else{
					alert("删除异常");
				}
			}
		});
	}
	
}
/**
 * 批量删除
 */
function deleteMore(){
	var ids=$("input[name='check_box']:checked");
	if(ids.length==0){
		alert("请选择左侧复选框");
		return;
	}
	var id= '';
	if(confirm("确认删除这"+ids.length+"条数据吗")){
		for(var i=0;i<ids.length;i++){
			id +=ids[i].value+",";
		}
		jQuery.ajax({
			type:"POST",
			dataType:"json",
			async : false,
			url:getRootPath()+"/audit/hrTableTotalController/deleteMore.do",
			data:{
				"id":id
			},
			errer:function(){
				alert("网络异常,请稍后再试...");
			},
			success:function(result){
				var data = eval("("+result+")");
				if(data!="0"){
					alert("删除成功");
					search(start,pageSize);
				}else{
					alert("删除异常");
				}
			}
		});
	}
}
/**
 * 查询总记录数
 */
function searchPageCount(){
	var tabName=$("#tabName").val();
	if(tabName=="请输入表名")tabName="";
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		async : false,
		url:getRootPath()+"/audit/hrTableTotalController/searchPageCount.do",
		data:{
			"tabName":tabName
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			$("#pageCount").text("总记录条数:"+data[0]);
			count=parseInt((data[0]+10-1)/10);
			$("#count").text(start+"/"+parseInt((data[0]+10-1)/10));
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
	search(start,pageSize);
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
	search(start,pageSize);
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
	search(start,pageSize);
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
//		$("#pagenotext").val(count);
	}
	if(inputVal != ""){
		search(inputVal,pageSize);
	}else{
		
	}
}
/**
 * 获取所有分类信息
 */
function initMenu(){
	$.ajax({
		url : getRootPath()+"/audit/hrImport/getAllCategory.do",
		async : false,
		type : "post",
		dataType : "json",
		success : function (dataString){
			var data = eval("("+dataString+")");
			list = data.data;
		}
	});
	createArray();
}
/**
 * 创建数组
 */
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
		str+="><span title='"+obj.name +"' cid='"+obj.id+"' onmousedown='showRightMenu(this,event)' href='javascript:void(0);' >"+obj.name+"</span>";
		// 多级菜单
		str += "<ul>";
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str = getChildTr(obj,str);
		}
		/*if(obj.tables != null && obj.tables != undefined && obj.tables.length > 0){
			for ( var j = 0; j < obj.tables.length; j++) {
				str += "<li>";
				str +="<span style='color:blue' cid='"+obj.id+"' onmousedown='showRightMenu(this,event)' title='"+obj.tables[j].tableName +"'>"+ obj.tables[j].tableName+"</span></li>";
			}
		}*/
		str += "</ul>";
		str += "</li>";
	});
	$("#addCategory_treeDiv").html(str);
	
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
		str += "<li id='category_"+obj2.id+"' onclick=getTableByCategory("+obj2.id+")"
		str += "><span title='"+obj2.name +"' cid='"+obj2.id+"' onmousedown='showRightMenu(this,event)'>"+ obj2.name+"</span>";
		str += "<ul>";
		if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
			str = getChildTr(obj2,str);
		}
		/*if(obj2.tables != null && obj2.tables != undefined && obj2.tables.length > 0){
			for ( var j = 0; j < obj2.tables.length; j++) {
				str += "<li onclick=checkTab('"+obj2.tables[j].tableName+"',"+obj2.tables[j].id+","+obj2.tables[j].isOnlyOne+",this)";
				str +="><span style='color:blue' title='"+obj2.tables[j].tableName +"'>"+ obj2.tables[j].tableName+"</span></li>";
			}
		}*/
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
/**
 * 新增分类  显示
 */
function addCategoryShow(){
	$("#addCategoryDiv").attr("style","");
	initMenu();
	initMenuSe();
}
/**
 * 新增分类 隐藏
 */
function addCategoryHide(){
	$("#addCategoryDiv").attr("style","display:none");
	$("#addCategory_treeDiv").html("");
}
/**
 * 添加父级
 */
function addParent(){
	var parentCategory = prompt("请输入父节点名","");
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		async : false,
		url:getRootPath()+"/audit/hrTableCategoryController/insertSelective.do",
		data:{
			"parentCategory":parentCategory,
			"parentId":"0"
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			if(data!="0"){
				alert("新增成功");
				addCategoryHide();
			}else{
				alert("新增异常");
			}
		}
	});
}
/**
 * 新增子级
 */
function addChild(){
	var childCategory = prompt("请输入子级名","");
	jQuery.ajax({
		type:"POST",
		dataType:"json",
		async : false,
		url:getRootPath()+"/audit/hrTableCategoryController/insertSelective.do",
		data:{
			"parentCategory":childCategory,
			"parentId":$(thisObj).attr("cid")
		},
		errer:function(){
			alert("网络异常,请稍后再试...");
		},
		success:function(result){
			var data = eval("("+result+")");
			if(data!="0"){
				alert("新增成功");
				addCategoryHide();
			}else{
				alert("新增异常");
			}
		}
	});
}



/** 右键事件开始 **/
$(function(){
	if(!$("#rightMenu")) {return;}
	// 鼠标离开事件
	$("#rightMenu").mouseleave(function(){
		$(this).hide();
		document.oncontextmenu='';
	});
});

function showRightMenu(obj,event){
	document.oncontextmenu = new Function("return false");
	
	event = arguments.callee.caller.arguments[0] || window.event;
	if (2 == event.button || 3 == event.button) {
		// 关闭右键菜单
		// closeContextMenu(event);
		thisObj = $(obj);
		var id=event.target.id;
		var div = $("#rightMenu");
		var ul = $("#opertion");
		ul.show();
		ul.html("<li onclick='addParent();'>新增父级</li><li onclick='addChild();'>添加子级</li>");
		var left=300;
 		var top=100;
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

