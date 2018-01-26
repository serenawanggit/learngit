<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>状态数据表定义</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath%>/css/gjb.css" rel="stylesheet" type="text/css" />
<style type="text/css">
body,html {
	width: 100%;
	height: 100%;
	margin: 0;
	border: none;
	background-repeat: repeat-x;
	font-size: 12px;
	font-family: Arial, Helvetica, sans-serif;
	background: url(<%=basePath%>/images/centerbk.png);
	filter:
		"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	-moz-background-size: 100% 100%;
}

.hr1 {
	height: 1px;
	border: none;
	border-top: 1px solid #DADADA;
}
</style>

<script type="text/javascript" src="<%=basePath%>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>

<script>
	$(document).ready(function(){
	    validateLogin();
		$("#addZtsjb").click(function(){
			$("#ztsjbmc", parent.document).val("");
			$("#ztsjbmd",parent.document).css("width","500px");
			$("#ztsjbmd",parent.document).css("top","10px");
			$("body",parent.document).append("<div id='mask'></div>");
			$("#mask",parent.document).addClass("mask").fadeIn("slow");
			$("#ztsjbmd",parent.document).fadeIn("slow");
			showDefines("zdymb");
			showSyfws("syfwsj");
			showcjbm("cjbmsj");
			showshbm("shbmsj");
		    $("#zdymb",parent.document).change();
		});
		
		showZtsjbs();
		  $("#zdymb",parent.document).change(function(){
					var str= $("#zdymb option:selected",parent.document).text();
					 $("#ztsjbmc",parent.document).val(str.trim());
		  });
	});
	
	
	function showDefines(resource){
		var url = "/audit/asDefineTemplateController/findAllDefine.do";
		$.ajax({
			async:false,
			url:url,
			dataType:'json',
			type:'POST',
			error:function(){
				alert("系统故障");
			},
			success:function(data){
				var o = eval(data);
				var str = "";
				$("#zdymb",parent.document).empty();
				if(o.length != 0){
					for(var i = 0; i < o.length; i++){
						str += "<option value='"+o[i].CTEMPLATE_ID+"'>" + o[i].CTEMPLATE_NAME + "</option>";
					}
				}
				
				$("#"+resource,parent.document).append(str);
			},
		});
	}
	
	
	function showSyfws(resource){
		var url = "/audit/asCjSyfwController/findAllSyfws.do";
		$.ajax({
			async:false,
			url:url,
			type:'POST',
			dataType:'json',
			error:function(){
				alert("系统故障");
			},
			success:function(data){
				var o = eval(data);
				var str = "";
				$("#syfwsj",parent.document).empty();
				if(o.length != 0){
					for(var i = 0; i < o.length; i++){
						str += "<option value='"+o[i].id+"'>" + o[i].syfwmc + "</option>";
					}
				}
				$("#"+resource,parent.document).html(str);
			},
		});
	}
	
	function showcjbm(resource){
		var url = "/audit/asCjBmxxController/findAllCjBmxxs.do";
		$.ajax({
			async:false,
			url:url,
			type:'POST',
			dataType:'json',
			error:function(){
				alert("系统故障");
			},
			success:function(data){
				var o = eval(data);
				var str = "";
				$("#cjbmsj",parent.document).empty();
				if(o.length != 0){
					for(var i = 0; i < o.length; i++){
						str += "<option value='"+o[i].acb.id+"'>" + o[i].acb.name + "</option>";
					}
				}
				$("#"+resource,parent.document).append(str);
			},
		});
	}
	
	function showshbm(resource){
		var url = "/audit/asCjBmxxController/findAllCjBmxxs.do";
		$.ajax({
			async:false,
			url:url,
			type:'POST',
			dataType:'json',
			error:function(){
				alert("系统故障");
			},
			success:function(data){
				var o = eval(data);
				var str = "";
				$("#"+resource,parent.document).empty();
				if(o.length != 0){
					for(var i = 0; i < o.length; i++){
						str += "<option value='"+o[i].acb.id+"'>" + o[i].acb.name + "</option>";
					}
				}
				$("#"+resource,parent.document).append(str);
			},
		});
	}
	
	function saveZtsjb(){
		var ztsjbmc = $("#ztsjbmc",parent.document).val();
		var cjbmsj = $("#cjbmsj",parent.document).val();
		var syfwsj = $("#syfwsj",parent.document).val();
		var shbmsj = $("#shbmsj",parent.document).val();
		var zdymb = $("#zdymb",parent.document).val();
		if(ztsjbmc.trim().length == 0){
		    alert("请填写状态库表名！");
			return;
		}
		var url = "/audit/asCjZtsjbController/saveAsCjZtsjb.do";
		$.ajax({
			url:url,
			async:false,
			type:'POST',
			dataType:'json',
			data:{"sjbmc":ztsjbmc,"cjbmdm":cjbmsj,"cjmbdm":zdymb,"syfwdm":syfwsj,"shbmdm":shbmsj},
			error:function(){
				alert("系统故障");
			},
			success:function(data){
				if(data > 0){
					parent.closeYS("ztsjbmd");
					showZtsjbs();
				}
			}
		
		});
	}
	
	//初始化分页查询指标
	var icp=1;
	
	 function searchData(){
	    var flag = $("#flag").val();
		var param = $("#param").val();
		var countpage=$("#countpage").text();
		var mpage=  $("#mpage").text();
		if(mpage>=countpage){
		  icp=1;
		}
		$("#mpage").html(icp);
		showZtsjbs();
	}
	function showZtsjbs(){
		var url = "/audit/asCjZtsjbController/findAllAsCjZtsjb.do";
		var flag = $("#flag").val();
		var param = $("#param").val();
		var countpage=$("#countpage").text();
	/* 	alert(countpage);
		if(icp>countpage){
		  icp=countpage;
		} */
		$.ajax({
			url:url,
			async:false,
			type:'POST',
			dataType:'json',
			data:{"flag":flag.trim(),"param":param.trim(),"pageNo":icp},
			error:function(){
				alert("系统故障");
			},
			
			success:function(data){
				$("#ztsjshow tbody").empty();
				 var jo = eval('('+data+')');
				 var str = "";
				 console.info(jo.ztsjbs);
				 for(var i = 0; i < jo.ztsjbs.length; i++){
						str += "<tr style='font-size:12px;height:40px;'>";
						str += "<td style='width:60px;height:30px;' align='center'><input type='checkbox' name='ckBut' id='"+jo.ztsjbs[i].id+"'/></td>";
						str += "<td style='width:200px;height:30px;' align='center'>"+ jo.ztsjbs[i].categoryName+"</td>";
						str += "<td style='width:300px;height:30px;' align='center'>"+ jo.ztsjbs[i].sjbmc+"</td>";
						if(jo.ztsjbs[i].cjBmName!=null){
						 str += "<td style='width:200px;height:30px;' align='center'>"+ jo.ztsjbs[i].cjBmName+"</td>";
						}else{
						 str += "<td style='width:200px;height:30px;' align='center'></td>";
						}
						if(jo.ztsjbs[i].shbmdm!=null){
						 str += "<td style='width:200px;height:30px;' align='center'>"+ jo.ztsjbs[i].shbmdm+"</td>";
						}else{
						 str += "<td style='width:200px;height:30px;' align='center'></td>";
						}
						str += "<td style='width:300px;height:30px;' align='center'>"+ jo.ztsjbs[i].ctemplateName+"</td>";
						str += "<td style='width:300px;height:30px;' align='center'>"+ jo.ztsjbs[i].syfwmc+"</td>";
						str += "<td style='width:100px;height:30px;' align='center'><a href='javascript:void(0)' onclick='cksjb("+ jo.ztsjbs[i].id+")'><img src='../../images/bj_icon.png' style='vertical-align:middle;' border='0'></a>&nbsp;&nbsp;<a href='javascript:void(0)' onclick='deleteZtsjb("+ jo.ztsjbs[i].id+")'><img src='../../images/sc_icon.png' style='vertical-align:middle;border:0px;'></a></td>";
						str += "</tr>";
				};
				$("#ztsjshow tbody").append(str);
				var pageHtml = "<tr>"+
	        "	<td align='left'>"+
	        "	<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>"+
	        "	</td>"+
	        "	<td align='right'>"+
	        "	<span style='display:inline-block;margin-right:40px;'>"+
	        "	<img value='1_"+jo.totalPage+"' onclick='pagefindindicator(this);'"+
	        "		src='../../images/pgicon-first_press.png' style='vertical-align:middle;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-first.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-first_press.png;&quot;'>"+
	        "	<img value='2_"+jo.totalPage+"' onclick='pagefindindicator(this);'"+
	        "		src='../../images/pgicon-pre_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-pre.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-pre_press.png;&quot;'>"+
	        "	<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'> <span id='mpage'>"+
	        jo.pageNo+"</span>/<span id='countpage'>"+jo.totalPage+"</span>页</span>"+
	        "	<img value='3_"+jo.totalPage+"' onclick='pagefindindicator(this);'"+
	        "			src='../../images/pgicon-next_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-next.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-next_press.png;&quot;'>"+
	        "	<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;"+
	        "	line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>"+
	        "	<img value='4_"+jo.totalPage+"' onclick='pagefindindicator(this);'"+
	        "			src='../../images/pgicon-last_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-last.png&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-last_press.png&quot;'>"+
	        "	</span>"+
	        "	</td>"+
	        "</tr>";	 
	        
				$("#sjfy").empty();
				$("#sjfy").append(pageHtml);
			 }
		});
	}
	
	
	function deleteZtsjb(id){
		var url = "/audit/asCjZtsjbController/deleteAsCjZtsjb.do?id="+id;
		if(confirm("确认要删除？")){
			$.ajax({
				url:url,
				async:false,
				type:'POST',
				dataType:'json',
				error:function(){
					alert("该状态数据表已被使用不能删除！");
				},
				success:function(data){
					if(data > 0){
						showZtsjbs();
					}
				}
			});
		  }
	}
	
	
	//查看
	function cksjb(id){
		$("#ztsjbmd_edit",parent.document).css("width","500px");
		$("#ztsjbmd_edit",parent.document).css("top","10px");
		$("body",parent.document).append("<div id='mask'></div>");
		$("#mask",parent.document).addClass("mask").fadeIn("slow");
		$("#ztsjbmd_edit",parent.document).fadeIn("slow");
		showDefines("zdymb_edit");
		showSyfws("syfwsj_edit");
		showcjbm("cjbmsj_edit");
		showshbm("shbmsj_edit");
		var url = "/audit/asCjZtsjbController/findAsCjZtsjb.do?id="+id;
		$.ajax({
			url:url,
			async:false,
			type:'POST',
			dataType:'json',
			error:
			function(){
				alert("系统故障");
			},
			success:function(data){
				var jo = eval('('+data+')');
				$("#id_edit",parent.document).val(jo.id);
				$("#ztsjbmc_edit",parent.document).val(jo.sjbmc);
				$("#cjbmsj_edit option[value = " + jo.cjbmdm + "]",parent.document).attr("selected","selected");
				$("#shbmsj_edit option[value = " + jo.shbmdm + "]",parent.document).attr("selected","selected");
				$("#syfwsj_edit option[value = " + jo.syfwdm + "]",parent.document).attr("selected","selected");
				$("#zdymb_edit option[value = " + jo.cjmbdm + "]",parent.document).attr("selected","selected");
			},
		
		});
	}


	function updateSjb(){
		var id = $("#id_edit",parent.document).val();
		var ztsjbmc = $("#ztsjbmc_edit",parent.document).val();
		var cjbmsj = $("#cjbmsj_edit",parent.document).val();
		var shbmsj = $("#shbmsj_edit",parent.document).val();
		var syfwsj = $("#syfwsj_edit",parent.document).val();
		var zdymb = $("#zdymb_edit",parent.document).val();
		if(ztsjbmc.length == 0){
			return;
		}
		var url = "/audit/asCjZtsjbController/updateAsCjZtsjb.do";
		$.ajax({
			url:url,
			async:false,
			type:'POST',
			dataType:'json',
			data:{"id":id,"sjbmc":ztsjbmc,"cjbmdm":cjbmsj,"cjmbdm":zdymb,"syfwdm":syfwsj,"shbmdm":shbmsj},
			error:function(){
				alert("系统故障");
			},
			success:function(data){
				if(data > 0){
					parent.closeYS("ztsjbmd_edit");
					showZtsjbs();
				}
			}
		
		});
 }
   /**
 * 全选
 */
function onchecked(){
	var tr= $("#dataTable").find("tr input");
	if($("#checkbox").attr("checked")){
		tr.attr("checked",true);
	}else{
		tr.attr("checked",false);
		
	}
}
/**
 * 取消全选按钮选中
 */
function outChecked(){
	$("#checkbox").attr("checked",false)
}
	//分页查询指标项
function pagefindindicator(obj){
	var p=obj.getAttribute("value").split("_");
	if(p[0]=="1"){//首页
	    icp="1";
		showZtsjbs();
		return;
	}else if(p[0]=="2"){//上一页
		if(icp=="1"){
			alert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		showZtsjbs();
	}else if(p[0]=="3"){//下一页
		
		if(icp==p[1]){
			alert("已经是最后一页了!");
			return;
		}
		icp=parseInt(icp)+1;
 		showZtsjbs();
	}else if(p[0]=="4"){//下一页
		var pnos=$("#pagenotext").val();
		if(pnos.length<1){
			alert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			alert("输入非页码数字");
			return;
		}else{
			if(pnums>parseInt(p[1])){
				alert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
				icp=pnos;
				showZtsjbs();
			}
		}
	}
}

function importData(){
  if(confirm("确认要删除？")){
  var input= $("input[name='ckBut']:checked");
  var id="";
  for ( var i = 0; i < input.length; i++) {
	 id+=$(input[i]).attr("id")+"#";
  }
  $.ajax({
       type:"POST",
       url:"/audit/asCjZtsjbController/deleteChecked.do",
       data:{"id":id},
       success:function(){
	       alert("删除成功！");
	       $("#checkbox").attr("checked",false)
	       showZtsjbs();
       },
       error:function(){
         alert("有任务正在使用此表，不能删除！");
       }
  });
  
  }
 
}
</script>
</head>
<body>
	<!-- 右边显示 -->
	<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0'
		cellspacing='0'>
		<tr>
			<td style='height:40px;' align='left'><span
				style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath%>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'><span
					id="topLable"
					style='display:inline-block;height:28px;line-height:28px;'>状态数据表定义</span>
			</span></td>
			<td style='height:40px;' align='right'>&nbsp;</td>
		</tr>
		<tr>
			<td colspan="2"><hr class="hr1"></td>
		</tr>
		<tr>
			<td colspan="2" style="height: 40px;"><select id="flag"
				style="height: 25px;">
					<option value="SJFL">数据分类</option>
					<option value="SJBM">数据表名</option>
					<option value="CJDW">采集单位</option>
					<option value="SJMB">数据模板</option>
					<option value="SYFW">适用范围</option>
			</select> <input type="text" value="" id="param" style="height: 25px; " /> <input
				type="button" onclick="searchData()" value="搜索"
				style="background-color: #568E59;height: 25px;border: 0px;color: #FFF;" />
				<input type="button" onclick="importData()" value="删除"
				style="margin-left:10px;background-color: #568E59;height: 25px;border: 0px;color: #FFF;float:right" />
				<input type="button" id="addZtsjb" value="添加"
				style="background-color: #568E59;height: 25px;border: 0px;color: #FFF;float:right" />
		</tr>
		<br />
		<tr>
			<table style="font-size:12px;width:98%;margin: 0 auto;"
				cellpadding="0" cellspacing="0" id="ztsjshow">
				<thead>
					<tr
						style="background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;height:40px;">
						<td style="width:60px;height:30px;" align="center"><input
							type="checkbox" id="checkbox" onclick="onchecked()" /></td>
						<td style="width:200px;height:30px;" align="center">数据分类</td>
						<td style="width:300px;height:30px;" align="center">数据表名</td>
						<td style="width:200px;height:30px;" align="center">数据采集单位</td>
						<td style="width:200px;height:30px;" align="center">数据审核单位</td>
						<td style="width:300px;height:30px;" align="center">数据采集模板</td>
						<td style="width:300px;height:30px;" align="center">适用范围</td>
						<td style="width:100px;height:30px;" align="center">操作</td>
					</tr>
				</thead>
				<tbody id="dataTable">
					<!-- <tr style="font-size:12px;height:40px;">
												<td style="width:60px;height:30px;" align="center"><input type="checkbox" /></td>
												<td style="width:200px;height:30px;" align="center">学校基本信息</td>
												<td style="width:300px;height:30px;" align="center">表1-1 学校行政单位信息</td>
												<td style="width:200px;height:30px;" align="center">校办</td>
												<td style="width:300px;height:30px;" align="center">学校行政单位信息</td>
												<td style="width:300px;height:30px;" align="center">审核评估数据采集工作</td>
												<td style="width:100px;height:30px;" align="center">操作</td>
											</tr> -->
					<!-- <tr style="font-size:12px;height:40px;">
												<td style="width:60px;height:30px;" align="center"><input type="checkbox" /></td>
												<td style="width:200px;height:30px;" align="center">学校基本信息</td>
												<td style="width:300px;height:30px;" align="center">表1-2 实验室与科研单位</td>
												<td style="width:200px;height:30px;" align="center">校办</td>
												<td style="width:300px;height:30px;" align="center">实验室与科研单位</td>
												<td style="width:300px;height:30px;" align="center">审核评估数据采集工作</td>
												<td style="width:100px;height:30px;" align="center">操作</td>
											</tr> -->
				</tbody>
			</table>
			<table id="sjfy" style="float: right">
				<tr style="font-size:12px;height:40px;">
					<td colspan="4" style="height:40px;" align="center"><a><img
							value="1_"
							+ztr.totalPage+"' onclick='pagefindindicator(this);" onclick="rightbox.window.pagefindindicator(this);" src="../../images/pgicon-first_press.png"  style="vertical-align:middle;"></a>
														<a href='' ><img value="2_56" onclick="rightbox.window.pagefindindicator(this);" src="../../images/pgicon-pre_press.png"  style="margin-left:5px;margin-right:15px;vertical-align:middle;"></a>
														<span  style="vertical-align:middle;">1/10</span>
														<a  href='#'  ><img value="2_56" onclick="rightbox.window.pagefindindicator(this);" src="../../images/pgicon-next_press.png" style="margin-left:15px;vertical-align:middle;" ></a>
														<a><img value="1_56" onclick="rightbox.window.pagefindindicator(this);" src="../../images/pgicon-last_press.png"  style="vertical-align:middle;margin-left:5px;"></a>
													</td>
												</tr>
							      </table>
	</tr>
</table>
</body>
</html>