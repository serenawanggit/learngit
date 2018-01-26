
var setting = {
	view: {
	showIcon: true
	},
	check: {
		enable: false
	},
	data: {
		simpleData: {
			enable: true
		}
	},
	callback: {
		onCheck: onMouseDown,
		onClick: onMouseDown
	}
};

var zNodes =[
	{ id:1, pId:0, name:"定位与目标", open:true,icon:'../../css/zTreeStyle/img/diy/green.png'},
	{ id:2, pId:1, name:"办学定位", open:false,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:3, pId:1, name:"培养目标", nocheck:true,open:false,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:4, pId:1, name:"教学中心定位",open:false,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:5, pId:0, name:"师资队伍", nocheck:true, open:false,icon:'../../css/zTreeStyle/img/diy/green.png'},
	{ id:6, pId:5, name:"数量与结构",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:7, pId:5, name:"教育教学水平",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:8, pId:5, name:"教师教学投入", open:false,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:9, pId:5, name:"教师发展与服务",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:10, pId:0, name:"教学资源", open:false,icon:'../../css/zTreeStyle/img/diy/green.png'},
	{ id:11, pId:10, name:"教学经费", checked:true,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:12, pId:10, name:"教学设施",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:13, pId:10, name:"专业设置与培养方案",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:14, pId:10, name:"课程资源",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:15, pId:10, name:"社会资源",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:16, pId:0, name:"培养过程", open:false,icon:'../../css/zTreeStyle/img/diy/green.png'},
	{ id:17, pId:16, name:"课堂教学", checked:true,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:18, pId:16, name:"实践教学",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:19, pId:16, name:"第二课堂",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:20, pId:16, name:"教学改革",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	
	{ id:21, pId:0, name:"学生发展", open:false,icon:'../../css/zTreeStyle/img/diy/green.png'},
	{ id:22, pId:21, name:"学生发展", open:false,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:23, pId:21, name:"学生指导与服务", nocheck:true,open:false,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:24, pId:21, name:"学风与学习效果",open:false,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:25, pId:21, name:"就业与发展",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:26, pId:0, name:"质量保障", nocheck:true, open:false,icon:'../../css/zTreeStyle/img/diy/green.png'},
	{ id:27, pId:26, name:"教学质量保障体系",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:28, pId:26, name:"质量监控", open:false,icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:29, pId:26, name:"质量信息及利用",icon:'../../css/zTreeStyle/img/diy/p1.png'},
	{ id:30, pId:26, name:"质量改进", checked:true,icon:'../../css/zTreeStyle/img/diy/p1.png'}
 ];

$(document).ready(function(){
	validateLogin();
	//查询全部指标树
	var url = "/audit/statusDataController/findModuleTree.do";
	$.ajax( {  
	    type : "post",  
	    dataType : "JSON",
	    url : url,  
	    success : function(msg) { 
	        var ztr = eval("("+msg+")");
	        var zNodes = ztr.ztree;
	        $.fn.zTree.init($("#treeDemo"), setting, zNodes);
	        //默认选择
	        var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
	        var node = treeObj.getNodeByParam("id", "1");
	        treeObj.selectNode(node,false);
	        
	        //查询默认选中的方案值
	        defaultPlan(1);
	    }
	});
	
});

//初始化树菜单
function defaultPlan(pid) {
	var year1 = $("#syear1").val();
	var year2 = $("#syear2").val();
	$("#pid").val(pid);
	var url = "/audit/statusDataController/findZBorCL.do";
	$.ajax( {  
	    type : "post",  
	    url : url,
	    dataType:"json",
	    data:"pid="+pid+"&year1="+year1+"&year2="+year2,
	    success : function(msg) { 
	        var jsons = eval('('+msg+')');
	        var asPlan=jsons.asPlan;
	        jQuery("#sflileTB tbody").empty();
	        if(jsons == null || jsons.zbz == null){
				jQuery("#zbTable thead").empty();
				jQuery("#zbTable tbody").empty();
				jQuery("#zbTable").append("<tr style='text-align:center;background-color:#FFF;'><td>该方案暂无观测指标</td></tr>");
			}else {
			       //显示指标数据
		        showCenter(jsons.zbz);
			}
	        //显示支撑材料
	        showSFlile(jsons.sflile)
	        jQuery("#pgfasj").html(asPlan.content);
	    }
	});
}

//点击树菜单
function onMouseDown(event, treeId, treeNode) {
//	alert("22[ "+treeNode.id+" onMouseDown ]&nbsp;&nbsp;" + (treeNode?treeNode.name:"root"), "down" );
	var year1 = $("#syear1").val();
	var year2 = $("#syear2").val();
	$("#pid").val(treeNode.id);
	var url = "/audit/statusDataController/findZBorCL.do";
	$.ajax( {  
	    type : "post",  
	    url : url,  
	    dataType:"json",
	    data:"pid="+treeNode.id+"&year1="+year1+"&year2="+year2,
	    success : function(msg) { 
	        var jsons = eval('('+msg+')');
	        jQuery("#sflileTB tbody").empty();
	        var asPlan=jsons.asPlan;
	        if(jsons == null || jsons.zbz == null){
				jQuery("#zbTable thead").empty();
				jQuery("#zbTable tbody").empty();
				jQuery("#zbTable").append("<tr style='text-align:center;background-color:#FFF;'><td>该方案暂无观测指标</td></tr>");
			}else{
			    //显示指标数据
		        showCenter(jsons.zbz);
			}
	        //显示支撑材料
	        showSFlile(jsons.sflile);
	        jQuery("#pgfasj").html(asPlan.content);
	    }
	});
}


//显示指标数据
function showCenter(zbz){
	var timearray = new Array();
	var namearray = new Array();
	//将数值装进数组
	jQuery.each(zbz, function(i, value) {
		timearray.push(value.year);
		namearray.push(value.zbid + "&" + value.name);
	});
	//年份指标名称去重复
	timearray = getArray(timearray);
	namearray = getArray(namearray);
	
	jQuery("#zbTable thead").empty();
	//拼装列头
	var html = "";
	html += "<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>"
			+ "<td nowrap='nowrap' style='width:220px;height:30px;padding-left: 5px;' align='left'>指标</td>";

	for ( var i = 0; i < timearray.length; i++) {
		html += "<td nowrap='nowrap' style='width:85px;height:30px;' align='center'>"
				+ timearray[i] + "</td>";
	}
	//输出html
	html += "</tr>";
	jQuery("#zbTable thead").append(html);
	
	jQuery("#zbTable tbody").empty();
	var nhtml = "";
	//拼装数据
	for ( var i = 0; i < namearray.length; i++) {
		var zb = namearray[i];
		var id = zb.substring(0, zb.lastIndexOf("&"));
		var name = zb.substring(zb.lastIndexOf("&") + 1, zb.length);
		nhtml += "<tr style='background-color:#FFF;'>" +
				"<td nowrap='nowrap' style='width:220px;height:30px;border-top:#DADADA 1px solid;padding-left: 5px;' align='left' zbid='"+id+"'>" + name+ "</td>";
		
		for ( var k = 0; k < timearray.length; k++) {
		
			for ( var j = 0; j < zbz.length; j++) {
				var zhi = zbz[j];
				if (zhi.zbid == id && zhi.year == timearray[k]) {
					var vale = zhi.zhi;
					if (vale == "" || vale == null || vale == "null") {
						nhtml += "<td nowrap='nowrap' style='width:85px;height:30px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>";
					}else{
						nhtml += "<td nowrap='nowrap' style='width:85px;height:30px;border-top:#DADADA 1px solid;' align='center'>" + vale
								+ "</td>";
					}
				}
			}//zbz循环结束
		
		}//timearray年份结束
		nhtml += "</tr>";
	}//namearray循环结束----拼装数据结束
	
	jQuery("#zbTable tbody").append(nhtml);
}

//数组去重复
function getArray(a) {
	var hash = {}, len = a.length, result = [];

	for ( var i = 0; i < len; i++) {
		if (!hash[a[i]]) {
			hash[a[i]] = true;
			result.push(a[i]);
		}
	}
	return result;
}

//显示支撑材料
function showSFlile(sflile){
	var html = "";
	if (sflile != null) {
		jQuery.each(sflile, function(i, value) {
			html += "<tr style='background-color:#FFF;'>"+
			"	<td style='width:30px;height:30px;border-top:#DADADA 1px solid;padding-left: 5px;' align='left'>"+value.id+"</td>"+
			"	<td style='width:150px;height:30px;border-top:#DADADA 1px solid;' align='center'>" +
			"	<a href='javascript:preview("+value.id+","+value.flag+")'>"+value.filename+"</a>" +
			"   </td>"+
			"   <td style='width:150px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+
			"	<a href='javascript:void(0)' onclick='downFile("+value.id+","+value.flag+")'>下载</a>" +
			"   </td>"+
			"</tr>";
		});
		jQuery("#sflileTB tbody").append(html);
	}
}

//选择年份
function onChangeYear() {
	var year1 = $("#syear1").val();
	var year2 = $("#syear2").val();
	if (year1>year2) {
		alert("开始年份不能大于结束年份！");
		return;
	}
	var pid = $("#pid").val();
	
	var url = "/audit/statusDataController/findZBorCL.do";
	$.ajax( {  
	    type : "post",  
	    url : url,
	    dataType:"json",
	    data:"pid="+pid+"&year1="+year1+"&year2="+year2,
	    success : function(msg) { 
	        var jsons = eval('('+msg+')');
	        jQuery("#sflileTB tbody").empty();
	        if(jsons == null || jsons.zbz == null){
				jQuery("#zbTable thead").empty();
				jQuery("#zbTable tbody").empty();
				jQuery("#zbTable").append("<tr style='text-align:center;background-color:#FFF;'><td>该指标暂无数据</td></tr>");
			}else{
		        //显示指标数据
		        showCenter(jsons.zbz);
			}
//	        //显示支撑材料
	        showSFlile(jsons.sflile)
	    }
	});
}

//parent.parent.tck("温馨提示","已经是最前面的节点",'300px','200px');

function downFile(sid,flag){
	$("#sid").val(sid);
	$("#flag").val(flag);
	$("#shpgDowFile").submit();
	
}