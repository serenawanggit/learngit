/**
 * @author mooc
 * @content>ckeditor操作
 */
// 获取ckeditor里面的内容，获取的格式是html标签格式
// TextArea1 是textarea的id
// CKEDITOR.instances.TextArea1.getData()
// 往ckeditor里面插入内容，必须是html标签格式
// CKEDITOR.instances.TextArea1.insertHtml("<p>sad</p>");

// 保存ckeditor里面的内容
var pusharray = new Array();
function saveckeditor() {
	// 获取选中的节点
	var nodes = $.fn.zTree.getZTreeObj("treeDemo1").getSelectedNodes();
	var str = "";
	$("#md", parent.document).empty();
	if (nodes.length == 0) {
		str += "<table style='width:50%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>警告</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:100px;font-size:12px;text-align:center;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "请先选择一个节点";
		str += "</td></tr>";
		$("#md", parent.document).css("top", "80px");
		$("#md", parent.document).css("left", "550px");
		str += "</table>";
		$("#md", parent.document).css("width", "400px");
		$("#md", parent.document).append(str);
		$("body", parent.document).append("<div id='mask'></div>");
		$("#mask", parent.document).addClass("mask").fadeIn("slow");
		$("#md", parent.document).fadeIn("slow");
	}
	// 获取textarea内容
	var TextArea = editor.html();
	// 去双引号引起的部分值丢失问题
	// TextArea = TextArea.replace(/&?[a-zA-Z]+;/g, '"');
	// 去%引起的乱码问题
	TextArea = TextArea.replace(/%/g,'%25');
	if(TextArea.length == 0){
		return;
	}
	 var vstr = "eid=" + nodes[0].id +"&content=" + TextArea;
	 var url = getRootPath() + "asCkeditorContent/saveContent.do";
	 $.ajax({
		 url:url,
		 async : false,
		 dataType:'html',// 这一步很重要，不设置取不到全部内容
		 type : 'post',
		 data : {"eid":nodes[0].id,"content":TextArea},
		 error:function(){
			 alert("保存失败,未知原因");
		 },
		 success:function(msg){
			 if(msg==1){
				 alert("保存成功！");
			 }
		 }
	 });
}

// 预览preview
function preview(){
	$("#md", parent.document).empty();
		var str = "";
		str += "<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		str += "<tr style='height:25px;background-image:url(../../images/showtitlebk800.png);'>";
		str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>预览</span></td>";
		str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
		str += "<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>";
		str += "</td></tr>";
		str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:450px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
		str += "<div style='width:100%;height:100%;'>";
		str += "<div style='width:30%;height:450px;float:left;'>" ;
		str += "<div style='width:100%;height:450px;overflow:auto;border: solid 1px #ccc;'>";
		str += "<ul id='previewtree' class='ztree'>";
		str += "</ul>";
		str += "</div>";
		str += "</div>";
		str += "<div style='background-color:#FFFFFF;font-size:12px;width:65%;height:100%;margin-left:10px;float:left;' id='showarea'>" ;
		str += "</div>";
		str += "</div>";
		str += "</td></tr>";
		$("#md", parent.document).css("top", "10px");
		$("#md", parent.document).css("left", "200px");
		str += "</table>";
		$("#md", parent.document).css("width", "1000px");
		$("#md", parent.document).append(str);
		$("body", parent.document).append("<div id='mask'></div>");
		$("#mask", parent.document).addClass("mask").fadeIn("slow");
		$("#md", parent.document).fadeIn("slow");
		showpreviewEstimate();
}

var ztreeNodes ;
function showpreviewEstimate(){
	var url = getRootPath() + "asEstimate/showAsEstimates.do";
	$.ajax({
		async : false,
		type : 'get',
		dataType:"json",
		url : url,// 请求action地址
		error : function() {// 返回错误
			alert('请求失败');
		},
		success : function(data) { // 成功
			// json串转换为json对象(这一步很重要)
			ztreeNodes = eval('(' + data + ')');
		}
	});
	
	$.fn.zTree.init($("#previewtree",parent.document), setting2, ztreeNodes);
}
// update ckeditor content
function updateckeditor(){
	var nodes = $.fn.zTree.getZTreeObj("treeDemo1").getSelectedNodes();
	// 获取textarea内容
	var TextArea = editor.html();
		// 去双引号引起的部分值丢失问题
		// TextArea = TextArea.replace(/&?[a-zA-Z]+;/g, '"');
		// 去%引起的乱码问题
		TextArea = TextArea.replace(/%/g,'%25');
	if(TextArea.length == 0){
		return;
	}
	 var vstr = "eid=" + nodes[0].id +"&content=" + TextArea;
	 var url = getRootPath() + "asCkeditorContent/updateContent.do";
	 $.ajax({
		 url:url,
		 async : false,
		 dataType:'html',
		 type : 'post',
		 data : {"eid":nodes[0].id,"content":TextArea},
		 error:function(){
			 alert("更新失败,未知原因");
		 }, 	
		 success:function(msg){
			 if(msg == 1){
				 alert("编辑成功");
			 }
		 }
	 });
}

// 弹出选择插入指标对话框
// TODO
function insert_quota() {
	$("#md", parent.document).empty();
	var str = "";
	str += "<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
	str += "<tr style='height:25px;background-image:url(../../images/showtitlebk800.png);'>";
	str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>插入指标</span></td>";
	str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
	str += "<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>";
	str += "</td></tr>";
	str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:450px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
	str += "<div style='width:100%;height:85%;padding-left:15px;'>";
	str += "<div style='width:95%;height:10%;border-bottom:1px solid #ccc'>";
	str += "<span style='font-size:12px;width:10%;'>指标名称：<input id='zbname' type='text' style='width:100px;height:25px;'/>&nbsp;&nbsp;&nbsp;</span>";
	str += "<span style='font-size:12px;width:10%;'>院系：<input id='department' type='text' style='width:100px;height:25px;'/>&nbsp;&nbsp;&nbsp;</span>";
	str += "<span style='font-size:12px;width:10%;'>专业：<input id='profession' type='text' style='width:100px;height:25px;'/>&nbsp;&nbsp;&nbsp;</span>";
	str += "<span style='font-size:12px;width:10%;'>年份：<input id='syear' type='text' style='width:100px;height:25px;'/>&nbsp;&nbsp;&nbsp;</span>";
	str += "<span style='font-size:12px;width:10%;'><a onclick='rightbox.window.searchti()' href='#'><img src='/tqc/images/searchbtn.png' style='vertical-align:middle;margin-top:-2px;'></a></span>";
	str += "</div>";
	str += "<div style='width:95%;height:80%;padding-top:10px;'>";
	str += "<div style='width:100%;height:10%'>";
	str += "<label style='font-size:12px;float:left' id='totalcount'></label>";
	str += "<a onclick='rightbox.window.behinedpage();return false' href='#' style='float:right;font-size:12px;padding-right:20px;'>下一页</a>";
	str += "<a onclick='rightbox.window.beforepage();return false' href='#' style='float:right;font-size:12px;padding-right:10px;'>上一页</a>";
	str += "<label style='font-size:12px;float:right;padding-right:10px;' id='totalpage'>/10</label>";
	str += "<label style='font-size:12px;float:right' id='currentpage'>1</label>";
	str += "</div>";
	str += "<div style='width:100%;height:90%;overflow:auto'>";
	str += "<table style='width:100%;font-size:12px;border-collapse:collapse;'>";
	str += "<tr bgcolor='#E6E6E6' style='height:30px;border:solid 1px #cccccc;' >";
	str += "<td style='height:30px;border:solid 1px #cccccc;'><input type='checkbox'/></td><td style='height:30px;border:solid 1px #cccccc;width:25%;text-align:center;'>指标名</td><td style='height:30px;border:solid 1px #cccccc;width:25%;text-align:center;'>院系</td><td style='height:30px;border:solid 1px #cccccc;width:25%;text-align:center;'>专业</td><td style='height:30px;border:solid 1px #cccccc;width:10%;text-align:center;'>年份</td><td style='height:30px;border:solid 1px #cccccc;width:10%;text-align:center;'>值</td>";
	str += "</tr>";
	str += "</table>";
	str += "<table id='insertData' style='width:100%;font-size:12px;border-collapse:collapse;'>";
	str += "</table>";
	str += "</div>";
	str += "</div>";
	str += "<div style='width:100%;height:10%;font-size:12px;padding-left:200px;padding-top:5px;' class='buttom_tips01'>";
	str += "<a onclick='rightbox.window.setDatajd();return false'; href = '#' style = 'text-decoration: none; margin-right:20px;text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>确定</a>";
	str += "<a href = 'javascript:closeYS()' style = 'text-decoration: none; text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>取消</a>";
	str += "</div></td></tr>";
	str += "</table>";
	$("#md", parent.document).css("top", "30px");
	$("#md", parent.document).css("left", "300px");
	$("#md", parent.document).css("width", "720px");
	$("#md", parent.document).append(str);
	$("body", parent.document).append("<div id='mask'></div>");
	$("#mask", parent.document).addClass("mask").fadeIn("slow");
	$("#md", parent.document).fadeIn("slow");
	querycount();
	queryzbvalue(1);
}

// set data into ckeditor
function setDatajd(){
	var obj = $("input[name=zbcbox]:checked",parent.document);
	var strhtml = "";
	obj.each(function(){
		var arr = $(this).attr("value").split("-");
		pusharray.push($(this).attr("id"));
		strhtml += "指标【 " + arr[0] + " 】在" + arr[1] + "年值为:" + arr[2] +"<br />";
	});
	editor.insertHtml(strhtml);
	parent.closeYS();
}
// 指标查询
function searchti(){
	querycount();
	queryzbvalue(1);
};
// 指标总数
function querycount(){
	var zbname = $("#zbname",parent.document).val();
	var department = $("#department",parent.document).val();
	var profession = $("#profession",parent.document).val();
	var syear = $("#syear",parent.document).val();
	var datastr = "zbname=" + zbname
			+"&department=" + department + "&profession=" + profession
			+"&syear=" + syear;
	var url = getRootPath() + "dwVleadership/showCountDwvleaderships.do";
	$.ajax({
		async : false,
		url:url,
		type:'post',
		data:datastr,
		dataType:"json",
		error:function(){
			alert('请求失败');
		},
		success:function(data){
			$("#totalcount",parent.document).html("总数：" + data);
			// parseInt 取整
			var tp = data % 10 == 0 ? (data / 10) : (parseInt(data / 10) + 1);
			$("#totalpage",parent.document).html("/" + tp);
		}
	});
}

// 指标上一页
// TODO
function beforepage(){
	var currentpage = $("#currentpage",parent.document).html();
	currentpage--;
	$("#currentpage",parent.document).html(currentpage);
	queryzbvalue(currentpage);
}

// 指标下一页
// TODO
function behinedpage(){
	var currentpage = $("#currentpage",parent.document).html();
	currentpage++;
	$("#currentpage",parent.document).html(currentpage);
	queryzbvalue(currentpage);
}
// 列出指标list
function queryzbvalue(currentpage){
	if(currentpage == "" || currentpage == "null" || currentpage == undefined){
		currentpage = 1;
	}
	$("#currentpage",parent.document).html(currentpage);
	var zbname = $("#zbname",parent.document).val();
	var department = $("#department",parent.document).val();
	var profession = $("#profession",parent.document).val();
	var syear = $("#syear",parent.document).val();
	var datastr = "currentpage=" + currentpage + "&zbname=" + zbname
			+"&department=" + department + "&profession=" + profession
			+"&syear=" + syear;
	var url = getRootPath() + "dwVleadership/showDwvleaderships.do";
	$.ajax({
		async : false,
		url:url,
		type:'post',
		dataType:"json",
		data:datastr,
		error:function(){
			alert('请求失败');
		},
		success:function(data){
			$("#insertData",parent.document).empty();
			var trHtml = "";
			$.each(eval(data),function(i,value){
				trHtml += "<tr>";
				trHtml += "<td style='height:30px;border:solid 1px #cccccc;'>" ;
				trHtml += "<input type='checkbox' name='zbcbox' id='"+value.id+"' value='"+value.zb+"-"+value.syear+"-"+value.zhi+"'/></td>";
				trHtml += "<td style='height:30px;border:solid 1px #cccccc;width:25%;text-align:center;'>"+value.zb+"</td>" ;
				trHtml += "<td style='height:30px;border:solid 1px #cccccc;width:25%;text-align:center;'>"+value.department+"</td>" ;
				trHtml += "<td style='height:30px;border:solid 1px #cccccc;width:25%;text-align:center;'>"+value.profession+"</td>" ;
				trHtml += "<td style='height:30px;border:solid 1px #cccccc;width:10%;text-align:center;'>"+value.syear+"</td>" ;
				trHtml += "<td style='height:30px;border:solid 1px #cccccc;width:10%;text-align:center;'>"+value.zhi+"</td>";
			});
			$("#insertData",parent.document).append(trHtml);
			
			// 之前选中的呈现选中状态
			for(var i =0 ;i < pusharray.length; i++){
				$("#" + pusharray[i],parent.document).attr("checked","checked");
			}
		}
	});
};
// 弹出选择插入数据报表对话框
// TODO
function insert_datatable() {
	$("#md", parent.document).empty();
	var str = "";
	str += "<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
	str += "<tr style='height:25px;background-image:url(../../images/showtitlebk800.png);'>";
	str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>插入数据表</span></td>";
	str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
	str += "<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>";
	str += "</td></tr>";
	str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:350px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
	str += "<div style='width:100%;height:85%;padding-left:15px;'>";
	str += "<div style='width:95%;height:10%;border-bottom:1px solid #ccc'>";
	str += "<span style='font-size:12px;width:10%;'>数据表名：<input id='tab_name' type='text' style='width:100px;height:25px;'/>&nbsp;&nbsp;&nbsp;</span>";
/*
 * str += "<span style='font-size:12px;width:10%;'>级别：<input id='tab_level'
 * type='text' style='width:100px;height:25px;'/>&nbsp;&nbsp;&nbsp;</span>";
 * str += "<span style='font-size:12px;width:10%;'>年份：<input id='tab_year'
 * type='text' style='width:100px;height:25px;'/>&nbsp;&nbsp;&nbsp;</span>";
 */
	str += "<span style='font-size:12px;width:10%;'><a onclick='rightbox.window.search();return false' href='#'><img src='/tqc/images/searchbtn.png' style='vertical-align:middle;margin-top:-2px;'></a></span>";
	str += "</div>";
	str += "<div style='width:95%;height:80%;padding-top:10px;'>";
	str += "<div style='width:100%;height:10%'>";
	str += "<label style='font-size:12px;float:left' id='totalcount_tab'></label>";
	str += "<a onclick='rightbox.window.behinedtabpage();return false' href='#' style='float:right;font-size:12px;padding-right:20px;'>下一页</a>";
	str += "<a onclick='rightbox.window.beforetabpage();return false' href='#' style='float:right;font-size:12px;padding-right:10px;'>上一页</a>";
	str += "<label style='font-size:12px;float:right;padding-right:10px;' id='totalpage_tab'>10</label>";
	str += "<label style='font-size:12px;float:right;'>/</label>";
	str += "<label style='font-size:12px;float:right' id='tab_currentpage'>1</label>";
	str += "</div>";
	str += "<div style='width:100%;height:90%;overflow:auto'>";
	str += "<table style='width:100%;font-size:12px;border-collapse:collapse;'>";
	str += "<tr bgcolor='#E6E6E6' style='height:30px;border:solid 1px #cccccc;' >";
	str += "<td style='height:30px;border:solid 1px #cccccc;text-align:center;'><input type='checkbox'/></td><td style='height:30px;border:solid 1px #cccccc;width:30%;text-align:center;'>数据表名</td><td style='height:30px;border:solid 1px #cccccc;width:20%;text-align:center;'>年份</td><td style='height:30px;border:solid 1px #cccccc;width:20%;text-align:center;'>插入类型</td>";
	str += "</tr>";
	str += "</table>";
	str += "<table id='insertDatatable' style='width:100%;font-size:12px;border-collapse:collapse;cellpadding:0;cellspacing:0;'>";
	str += "</table>";
	str += "</div>";
	str += "</div>";
	str += "<div style='width:100%;height:10%;font-size:12px;padding-left:200px;padding-top:5px;' class='buttom_tips01'>";
	str += "<a onclick='rightbox.window.setDatatab();return false;'  href='javascript:void(0);' style='text-decoration: none; margin-right:20px;text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>确定</a>";
	// str += "<a onclick='rightbox.window.createpic();return false'; href = '#'
	// style = 'text-decoration: none; text-align:center;height:30px;
	// line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius:
	// 3px;-moz-border-radius: 3px; border-radius:
	// 3px;margin-right:15px;'>生成图片</a>";
	str += "<a href = 'javascript:closeYS()' style = 'text-decoration: none; text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>取消</a>";
	str += "</div></td></tr>";
	str += "</table>";
	$("#md", parent.document).css("top", "30px");
	$("#md", parent.document).css("left", "300px");
	$("#md", parent.document).css("width", "700px");
	$("#md", parent.document).append(str);
	$("body", parent.document).append("<div id='mask'></div>");
	$("#mask", parent.document).addClass("mask").fadeIn("slow");
	$("#md", parent.document).fadeIn("slow");
	querycount_tab();
	queryzbvalue_tab(1);
}


function setDatatab(){
	var datatabs = $("input[name=datatab]:checked",parent.document);
	datatabs.each(function(){
		var url = getRootPath() +"viewReportTab/showTabRowCols.do?rtid=" + $(this).attr("value");
		$.ajax({
			async : false,
			url:url,
			dataType:"json",
			type:'get',
			error:function(){
				alert('请求失败');
			},
			success:function(data){
				editor.insertHtml(data);
				parent.closeYS();
			}
		});
	});
}
// 数据表查询
function search(){
	querycount_tab();
	queryzbvalue_tab(1);
};
// 数据表总数
function querycount_tab(){
	var tab_name = $("#tab_name",parent.document).val();
	// var tab_level = $("#tab_level",parent.document).val();
	// var tab_year = $("#tab_year",parent.document).val();
	var datastr = "tab_name=" + tab_name;
			/* +"&tab_level=" + tab_level + "&tab_year=" + tab_year; */
	var url = getRootPath() + "/viewReportTab/showCountViewReportTabs.do";
	$.ajax({
		async : false,
		url:url,
		type:'post',
		dataType:"json",
		data:datastr,
		error:function(){
			alert('请求失败');
		},
		success:function(data){
			$("#totalcount_tab",parent.document).html("总数：" + data);
			// parseInt 取整
			var tp = data % 10 == 0 ? (data / 10) : (parseInt(data / 10) + 1);
			$("#totalpage_tab",parent.document).html(tp);
		}
	});
}

// 数据表上一页
// TODO
function beforetabpage(){
	var currentpage = $("#tab_currentpage",parent.document).html();
// if(currentpage == 1){
// return;
// }
	currentpage--;
	$("#tab_currentpage",parent.document).html(currentpage);
	queryzbvalue_tab(currentpage);
}

// 数据表下一页
// TODO
function behinedtabpage(){
	var currentpage = $("#tab_currentpage",parent.document).html();
	var totalpage = $("#totalpage_tab",parent.document).html();
	if(currentpage == totalpage){
		return;
	}
	currentpage++;
	$("#tab_currentpage",parent.document).html(currentpage);
	queryzbvalue_tab(currentpage);
}
// 列出数据表list
function queryzbvalue_tab(currentpage){
	if(currentpage == "" || currentpage == "null" || currentpage == undefined){
		currentpage = 1;
	}
	$("#tab_currentpage",parent.document).html(currentpage);
	var tab_name = $("#tab_name",parent.document).val();
	/*
	 * var tab_level = $("#tab_level",parent.document).val(); var tab_year =
	 * $("#tab_year",parent.document).val();
	 */
	var datastr = "currentpage=" + currentpage + "&tab_name=" + tab_name/*
																		 * +"&tab_level=" +
																		 * tab_level +
																		 * "&tab_year=" +
																		 * tab_year
																		 */;
	var url = getRootPath() + "viewReportTab/showViewReportTabs.do";
	$.ajax({
		async : false,
		url:url,
		type:'post',
		dataType:"json",
		data:datastr,
		error:function(){
			alert('请求失败');
		},
		success:function(data){
			$("#insertDatatable",parent.document).empty();
			var trHtml = "";
			$.each(eval(data),function(i,value){
				trHtml += "<tr>";
				trHtml += "<td style='height:30px;border:solid 1px #cccccc;text-align:center;'>" ;
				trHtml += "<input type='checkbox' name='datatab' value='"+value.tmid+"'/></td>";
				trHtml += "<td style='height:30px;border:solid 1px #cccccc;width:30%;text-align:center;'>"+value.tmName+"</td>" ;
				trHtml += "<td style='height:30px;border:solid 1px #cccccc;width:20%;text-align:center;'>"+value.showTime+"</td>" ;

				trHtml += "<td style='height:30px;border:solid 1px #cccccc;width:20%;text-align:center;'>";
//				trHtml += "<select style='font-size:12px;' id='"+value.tmid+"select'><option value='0'>---请选择---</option><option value='pie'>饼图</option><option value='bar'>柱状图</option><option value='line'>线图</option></select>";
				trHtml += "<select style='font-size:12px;' id='"+value.tmid+"select'><option value='0'>数据表</option>";
				trHtml += "<strong id='"+value.tmid+"warn' style='display:none;color:red'>&nbsp;&nbsp;&nbsp;!</strong></td>";
			});
			$("#insertDatatable",parent.document).append(trHtml);
		}
	});
};



// 弹出选择插入图片对话框
// TODO
function insert_picture() {
	var url =getRootPath() + "garphController/findPIC.do";
	$.ajax( {  
	    type : "post",  
	    url : url,
	    dataType:"json",
	    success : function(msg) { 
	        var jsons = eval('('+msg+')');
	        
	        var vps = jsons.vps;
	    	$("#md", parent.document).empty();
	    	var str = "";
	    	str += "<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
	    	str += "<tr style='height:25px;background-image:url(../../images/showtitlebk800.png);'>";
	    	str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'>插入图片</span></td>";
	    	str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
	    	str += "<img src='../../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>";
	    	str += "</td></tr>";
	    	str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:350px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
	    	str += "<div style='width:100%;height:85%;padding-left:15px;'>";
	    	str += "<div style='width:95%;height:10%;border-bottom:1px solid #ccc'>";
	    	str += "<span style='font-size:12px;width:10%;'>图片名：<input id='pic_name' type='text' style='width:100px;height:25px;'/>&nbsp;&nbsp;&nbsp;</span>";
	    	str += "<span style='font-size:12px;width:10%;'><a onclick='rightbox.window.pagefindindicator(3);' href='#'><img src='/tqc/images/searchbtn.png' style='vertical-align:middle;margin-top:-2px;'></a></span>";
	    	str += "</div>";
	    	str += "<div style='width:95%;height:80%;padding-top:10px;'>";
	    	str += "<div style='width:100%;height:10%'>";
	    	str += "<label style='font-size:12px;float:left' id='totalcount_tab'></label>";
	    	str += "<a onclick='rightbox.window.pagefindindicator(2);return false' href='#' style='float:right;font-size:12px;padding-right:20px;'>下一页</a>";
	    	str += "<a onclick='rightbox.window.pagefindindicator(1);return false' href='#' style='float:right;font-size:12px;padding-right:10px;'>上一页</a>";
	    	str += "<label style='font-size:12px;float:right;padding-right:10px;' id='totalpage_vp'>10</label>";
	    	str += "<label style='font-size:12px;float:right;'>/</label>";
	    	str += "<label style='font-size:12px;float:right' id='vp_currentpage'>1</label>";
	    	str += "</div>";
	    	str += "<div style='width:100%;height:90%;overflow:auto'>";
	    	str += "<table style='width:100%;font-size:12px;border-collapse:collapse;'>";
	    	str += "<tr bgcolor='#E6E6E6' style='height:30px;border:solid 1px #cccccc;' >";
	    	str += "<td style='height:30px;border:solid 1px #cccccc;'>" +
	    			"<input type='checkbox' onclick='rightbox.window.selectAll()' name='controlAll' id='controlAll'/></td>" +
	    			"<td style='height:30px;border:solid 1px #cccccc;width:60%;text-align:center;'>图片名称</td>" +
	    			"<td style='height:30px;border:solid 1px #cccccc;width:35%;text-align:center;'>图片类型</td>" ;
	    	str += "</tr>";
	    	str += "</table>";
	    	str += "<table id='insertDatatable' style='width:100%;font-size:12px;border-collapse:collapse;cellpadding:0;cellspacing:0;'>";
	    	if (vps != null) {
	    		for ( var j = 0; j < vps.length; j++) {
	    			var vp = vps[j];
	    			str += "<tr>";
	    			str += "<td style='height:30px;border:solid 1px #cccccc;'>" ;
	    			str += "<input type='checkbox' name='selected' value='"+vp.vpid+"' paths='"+vp.paths+"'/></td>";
	    			str += "<td style='height:30px;border:solid 1px #cccccc;width:60%;text-align:center;'>"+vp.picname+" </td>" ;
	    			str += "<td style='height:30px;border:solid 1px #cccccc;width:35%;text-align:center;'>"+vp.type+"</td>" ;
	    			str += "</tr>";
	    		}
	    	}
	    	str += "</table>";
	    	str += "</div>";
	    	str += "</div>";
	    	str += "<div style='width:100%;height:10%;font-size:12px;padding-left:250px;padding-top:5px;' class='buttom_tips01'>";
	    	str += "<a href = 'javascript:rightbox.window.setPic();' style = 'text-decoration: none; text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;margin-right:15px;'>插入</a>";
	    	str += "<a href = 'javascript:closeYS();' style = 'text-decoration: none; text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>取消</a>";
	    	str += "</div></td></tr>";
	    	str += "</table>";
	    	$("#md", parent.document).css("top", "30px");
	    	$("#md", parent.document).css("left", "300px");
	    	$("#md", parent.document).css("width", "700px");
	    	$("#md", parent.document).append(str);
	    	$("body", parent.document).append("<div id='mask'></div>");
	    	$("#mask", parent.document).addClass("mask").fadeIn("slow");
	    	$("#md", parent.document).fadeIn("slow");
	    	
	    	querycount_pic(jsons.count,jsons.totalPage,jsons.pageNo);
	    }
	});
}



var icp=1;
// 图片总数
function querycount_pic(count,totalPage,pageNo){
	$("#totalcount_tab",parent.document).html("总数：" + count);
	$("#totalpage_vp",parent.document).html(totalPage);
	$("#vp_currentpage",parent.document).html(pageNo);
}


// 分页查询指标项
function pagefindindicator(obj){
	if(obj=="1"){// 上一页
		if(icp=="1"){
			alert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		findPage();
	}else if(obj=="2"){// 下一页
		var zys = $("#totalpage_vp",parent.document).html();
		if(icp==zys){
			alert("已经是最后一页了!");
			return;
		}
		icp=parseInt(icp)+1;
 		findPage();
	}else if(obj=="3"){
		icp=1;
		findPage();
	}
}

function findPage() {
	var pic_name = $("#pic_name",parent.document).val();
	var pageNo = $("#totalpage_tab",parent.document).html();
	var url =getRootPath() + "/garphController/findPIC.do";
	$.ajax( {  
	    type : "post",  
	    url : url,
	    dataType:"json",
	    data:"pic_name="+pic_name+"&pageNo="+icp,
	    success : function(msg) { 
	        var jsons = eval('('+msg+')');
	        querycount_pic(jsons.count,jsons.totalPage,jsons.pageNo);
	        var vps = jsons.vps;
	        $("#insertDatatable",parent.document).empty();
			var str = "";
			if (vps != null) {
	    		for ( var j = 0; j < vps.length; j++) {
	    			var vp = vps[j];
	    			str += "<tr>";
	    			str += "<td style='height:30px;border:solid 1px #cccccc;'>" ;
	    			str += "<input type='checkbox' name='selected' value='"+vp.vpid+"' paths='"+vp.paths+"'/></td>";
	    			str += "<td style='height:30px;border:solid 1px #cccccc;width:60%;text-align:center;'>"+vp.picname+"</td>" ;
	    			str += "<td style='height:30px;border:solid 1px #cccccc;width:35%;text-align:center;'>"+vp.type+"</td>" ;
	    			str += "</tr>";
	    		}
	    	}
			$("#insertDatatable",parent.document).append(str);
	    }
	});
}

// 全选
function selectAll(){
	var checklist = parent.document.getElementsByName ("selected");
    if(parent.document.getElementById("controlAll").checked){
		for(var i=0;i<checklist.length;i++){
			checklist[i].checked = 1;
		} 
 	}else{
		for(var j=0;j<checklist.length;j++){
			if (checklist[j].disabled==false) {
				checklist[j].checked = 0;
			}
		}
 	}
}

// 把图片放到编辑器中
function setPic(){
	var obj = $("input[name=selected]:checked",parent.document);
	var strhtml = "";
	var url =getRootPath() + "/graphshow";
	obj.each(function(){
		var vpid = $(this).attr("value");
		var paths = $(this).attr("paths");
// strhtml += "指标【 " + vpid + " 】在" ;
		strhtml += "<img src='" +getRootPath()+ "/graphshow?id="+vpid+"'/>";
	});
	editor.insertHtml(strhtml);
	parent.closeYS();
}


function download(){
	var url = getRootPath() + "produce/word.do";
	$.ajax({  
	    type : "get",  
	    url : url,  
	    success : function(msg) { 
	    	window.location.href= getRootPath() + 'produce/downWord.do';
	    }
	});
}

Date.prototype.pattern=function(fmt) {           
    var o = {           
    "M+" : this.getMonth()+1, //月份           
    "d+" : this.getDate(), //日           
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时           
    "H+" : this.getHours(), //小时           
    "m+" : this.getMinutes(), //分           
    "s+" : this.getSeconds(), //秒           
    "q+" : Math.floor((this.getMonth()+3)/3), //季度           
    "S" : this.getMilliseconds() //毫秒           
    };           
    var week = {           
    "0" : "\u65e5",           
    "1" : "\u4e00",           
    "2" : "\u4e8c",           
    "3" : "\u4e09",           
    "4" : "\u56db",           
    "5" : "\u4e94",           
    "6" : "\u516d"          
    };           
    if(/(y+)/.test(fmt)){           
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));           
    }           
    if(/(E+)/.test(fmt)){           
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);           
    }           
    for(var k in o){           
        if(new RegExp("("+ k +")").test(fmt)){           
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));           
        }           
    }           
    return fmt;           
}      

function  insertAsEestimate(){
	if(confirm("更新将覆盖当前内容")){
		var urla = getRootPath() + "asEstimate/updateNowAsEstimate.do";
		$.ajax({
			 type:"POST",
			 url:urla,
			 success:function(){
				  showEstimateZtree();
				  alert("更新成功！");
				 
			 },
			 error:function(){
				  alert("更新失败！");
			 }
		});
	}
}