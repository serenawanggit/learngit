<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>高基表</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<link href="<%=basePath%>/css/gjb.css" rel="stylesheet" type="text/css" />
<style type="text/css">
body, html{width: 100%;height: 100%;margin:0;border:none;
background-repeat:repeat-x;font-size:12px;
font-family:Arial, Helvetica, sans-serif;
background:url(<%=basePath %>/images/centerbk.png);
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
  
}
.hr1{ height:1px;border:none;border-top:1px solid #DADADA;}
</style>

<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script>


$(document).ready(function(){
    validateLogin();
	showBmJqJs();
	$("#addBmRy").click(function(){
		$("#yxcjr",parent.document).html("");
		$("#yxshr",parent.document).html("");
		$("#bmmd",parent.document).css("width","800px");
		$("#bmmd",parent.document).css("top","10px");
		$("#bmmd",parent.document).css("left","350px");
		$("body",parent.document).append("<div id='mask'></div>");
		$("#mask",parent.document).addClass("mask").fadeIn("slow");
		$("#bmmd",parent.document).fadeIn("slow");
		//默认显示所有采集部门
		showCjBms();
		//默认显示当前选择的采集部门用户
		changeBmYh();
		
		//保存采集人与审核人
		$("#addBmBtn",parent.document).click(function(){
			var cjdm = $("#cjbm",parent.document).val();
			var yxcjrObjs = $("#yxcjr tr",parent.document);
			
			var i = 0;
			var yxcjrstr = "";
		    var yxshrstr = "";
			
			yxcjrObjs.each(function(){
				i++;
				if(i != yxcjrObjs.length - 1){
					yxcjrstr += $(this).attr("zhi")+"-1"+ ";";
				}else{
					yxcjrstr += $(this).attr("zhi")+"-1" + ";";
				}
				
			});
			
			var yxshrObjs = $("#yxshr tr",parent.document);
			var i = 0;
		
			yxshrObjs.each(function(){
				i++;
				if(i != yxshrObjs.length - 1){
					yxshrstr += $(this).attr("zhi")+"-2" + ";";
				}else{
					yxshrstr += $(this).attr("zhi")+"-2" + ";";
				}
				
			});
			console.info("cjbmdm:"+cjdm+"cjrstr:"+yxcjrstr+"shrstr:"+yxshrstr);
			var url = "/audit/asBmyBmryController/saveAsBmyBmry.do";
			$.ajax({
				url:url,
				async:false,
				type:'POST',
				dataType:'json',
				data:{"cjbmdm":cjdm,"cjrstr":yxcjrstr,"shrstr":yxshrstr},
				error:function(){
					alert("系统故障");
				},
				success:function(data){
					if(data == "ok"){
							parent.closeYS('bmmd');
						showBmJqJs();
					    $("#addBmBtn",parent.document).unbind("click");
						$("#yxcjr",parent.document).html("");
						$("#yxshr",parent.document).html("");
					}else{
					    if(data!=""){
					       alert(data);
					    }
					    parent.closeYS('bmmd');
						showBmJqJs();
					    $("#addBmBtn",parent.document).unbind("click");
						$("#yxcjr",parent.document).html("");
						$("#yxshr",parent.document).html("");
					}
				},
			});
		});
	});
});

//部门不同变换用户
function changeBmYh(){
		var cjbmdm = $("#cjbm",parent.document).val();
		var url = "/audit/asCjBmxxController/findAllCjBmxxUsers.do";
		$.ajax({
			url:url,
			async:false,
			type:'POST',
			dataType:'json',
			data:{"cjbmdm":cjbmdm},
			error:
				function(){
					alert("系统故障");
				},		
			success:function(data){
				var jo = eval(data);
				$("#cjyh",parent.document).empty();
				
				if(jo.length != 0){
					var str = "";
					for(var i = 0; i < jo.length; i++){
						if(jo[i].acb.showName.length != 0){
								str +="<tr style='height:30px;width:100%;' >";
								str += "<td colspan='3'>";
								str += "<span style='padding-left:5px;'>"+jo[i].acb.showName+"</span>";
								str += "<a id='"+jo[i].acb.organization+"shr-a' href='javascript:void(0)' onclick='rightbox.window.setShr("+jo[i].acb.id+",&quot;"+jo[i].acb.showName+"&quot;)' style='text-decoration:none;float:right;margin-left:5px;'>审核人</a>";
								str += "<a id='"+jo[i].acb.organization+"cjr-a' href='javascript:void(0)' onclick='rightbox.window.setCjr("+jo[i].acb.id+",&quot;"+jo[i].acb.showName+"&quot;)' style='text-decoration:none;float:right;'>采集人</a>";
								str += "</td>";
								str += "</tr>";
						}
					}
					
					$("#cjyh",parent.document).append(str);
				}
			},
		});
	}

//显示采集部门函数
function showCjBms(){
	var url = "/audit/asCjBmxxController/findAllCjBmxxs.do";
	
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
			$("#cjbm",parent.document).empty();
			var jo = eval(data);
			if(jo.length != 0){
				var str = "";
				for(var i = 0; i < jo.length; i++){
					str += "<option value='"+jo[i].acb.id+"'>" + jo[i].acb.name + "</option>";
				}
				$("#cjbm",parent.document).append(str);
			};
		},
	});
}

function setCjr(id,name){
		$("#" + id + "cjtr",parent.document).remove();
		var str ="<tr id='"+id+"cjtr' zhi='"+id+"' style='height:30px;width:100%;' >";
		str += "<td colspan='3'>";
		str += "<span style='padding-left:5px;'>"+name+"</span>";
		str += "<a href='javascript:void(0)' onclick='rightbox.window.qxCjr("+id+")' style='text-decoration:none;float:right;margin-left:5px;'>取消</a>";
		str += "</td>";
		str += "</tr>";
		$("#yxcjr",parent.document).append(str);
}

function setShr(id,name){
		$("#" + id + "shtr",parent.document).remove();
		var str ="<tr id='"+id+"shtr' zhi='"+id+"' style='height:30px;width:100%;' >";
		str += "<td colspan='3'>";
		str += "<span style='padding-left:5px;'>"+name+"</span>";
		str += "<a href='javascript:void(0)' onclick='rightbox.window.qxShr("+id+")' style='text-decoration:none;float:right;margin-left:5px;'>取消</a>";
		str += "</td>";
		str += "</tr>";
		$("#yxshr",parent.document).append(str);
}

function qxCjr(id){
	$("#" + id + "cjtr",parent.document).remove();
}

function qxShr(id){
	$("#" + id + "shtr",parent.document).remove();
}


//显示所有部门及角色
var icp=1;
function showBmJqJs(){
	var url = "/audit/asBmyBmryController/selectJsUsers.do";
	$.ajax({
		url:url,
		async:false,
		type:'POST',
		dataType:'json',
		data:{"cjbm":$("#searchValue").val(),"pageNo":icp},
		error:
			function(){
				alert("系统故障");
			},
		success:function(data){
			var jo = eval('('+data+')');	
		    var result=jo.asCjShxxs;
		    console.info(result);
			$("#rtshow tbody").empty();
			if(jo.length != 0){
				var str = "";
				//console.info(jo);
				for(var i =0; i<result.length; i++){
			      // console.info(jo[i].cju);
					str += "<tr style='font-size:12px;height:40px; '>";
					str += "<td style='width:60px;height:30px;' align='center'><input type='checkbox' name='ckbox' value='"+result[i].id+"' /></td>";
					str += "<td style='width:200px;height:30px;' align='center'>"+result[i].name+"</td>";
					str += "<td style='width:300px;height:30px;' align='center'> "+result[i].showName+"</td>";
					str += "<td style='width:300px;height:30px;' align='center'>";
					str += result[i].bmryjs==1?"采集人":"审核人";
					str +="</td>";
					str += "<td style='width:100px;height:30px;' align='center'>";
					str +="	<a href='#' onclick='deleteBmyBmry("+result[i].id+")' value='10' style='margin-left: 10px;'>";
		        	str +="		<img src='../../images/sc_icon.png' style='vertical-align:middle;border:0px;'>";
		        	str +="	</a>";
					//<a style='text-decoration:none' href='javascript:void(0)' onclick='deleteBmyBmry("+jo[i].cju.id+")'>删除</a>
					str += "</td>";
					str += "</tr>";
				}
				$("#rtshow tbody").append(str);
													//分页此功能在不开放 
			$("#pageTb");	
			$("#pageTb tbody").empty();
			var totalPage=jo.totalPage==0?1:jo.totalPage;
	        var pageHtml = "<tr>"+
	        "	<td align='left'>"+
	        "	<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>"+
	        "	</td>"+
	        "	<td align='right'>"+
	        "	<span style='display:inline-block;margin-right:40px;'>"+
	        "	<img value='1_"+totalPage+"' onclick='pagefindindicator(this);'"+
	        "		src='../../images/pgicon-first_press.png' style='vertical-align:middle;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-first.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-first_press.png;&quot;'>"+
	        "	<img value='2_"+totalPage+"' onclick='pagefindindicator(this);'"+
	        "		src='../../images/pgicon-pre_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-pre.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-pre_press.png;&quot;'>"+
	        "	<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>"+
	        jo.pageNo+"/"+totalPage+"页</span>"+
	        "	<img value='3_"+totalPage+"' onclick='pagefindindicator(this);'"+
	        "			src='../../images/pgicon-next_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-next.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-next_press.png;&quot;'>"+
	        "	<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;"+
	        "	line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>"+
	        "	<img value='4_"+totalPage+"' onclick='pagefindindicator(this);'"+
	        "			src='../../images/pgicon-last_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-last.png&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-last_press.png&quot;'>"+
	        "	</span>"+
	        "	</td>"+
	        "</tr>";	        
	       $("#pageTb tbody").append(pageHtml);
			}
		}
	});
}

//删除设置的部门及其设置的人员
function deleteBmyBmry(id){
//console.info(id);
  if(confirm("确认要删除？")){
   var url = "/audit/asBmyBmryController/deleteJsUsers.do?id="+id;
	$.ajax({
		url:url,
		async:false,
		type:'get',
		dataType:'json',
		error:function(){
			alert("系统故障");
		},
		success:function(data){
			if(data != -1){
				showBmJqJs();
			};
		}
	 });
  }
}

	//分页查询
function pagefindindicator(obj){
     outChecked();
	var p=obj.getAttribute("value").split("_");
	if(p[0]=="1"){//首页
	    icp="1";
		showBmJqJs();
		return;
	}else if(p[0]=="2"){//上一页
		if(icp=="1"){
			alert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		showBmJqJs();
	}else if(p[0]=="3"){//下一页
		
		if(icp==p[1]){
			alert("已经是最后一页了!");
			return;
		}
		icp=parseInt(icp)+1;
 		showBmJqJs();
	}else if(p[0]=="4"){//下一页
		var pnos=$("#pagenotext").val();
		if(pnos.length<1){
			alert("请输入您要跳转的页码!");
			return;
		}
		showBmJqJs();
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
				showBmJqJs();
			}
		}
	}
}
 //搜索
 function searchData(){
     icp=1;
    showBmJqJs();
 }
  //删除
   function delryData(){
        var allid="";
        
        $("#rtshow tbody tr td input[name=ckbox]:checked");
    	//var checklist = document.getElementsByName("ckbox");
    	var checklist = $("#rtshow tbody tr td input[name=ckbox]:checked");
        for(var i=0;i<checklist.length;i++){
			if(checklist[i].checked){
				allid+=checklist[i].value+"$";
			}
			if(allid.length<1){
				alert("请选择要删除的人员");
				return;
		    }
	    }
			if (confirm("确认要删除？")) {
							var url = "/audit/asBmyBmryController/deleteSomeUsers.do?id="+allid;
								$.ajax({
										url : url,
										async : false,
										type : 'POST',
										dataType : 'json',
										error : function() {
										   alert("系统故障");
									    },
										success : function(data) {
											if (data != -1) {
													showBmJqJs();
										    };
										}
								});

				}

	}
	function allckbox(){
	   var isChecked = $("#allckbox").attr("checked");
	   $("#rtshow tbody tr td input[name=ckbox]").attr("checked",isChecked == "checked" ? true : false);
	}
	function outChecked(){
	  $("#allckbox").attr("checked",false);
	}
</script>
</head>
<body>
<!-- 右边显示 -->
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'><span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'><span id="topLable" style='display:inline-block;height:28px;line-height:28px;'>采集部门和人员管理</span></span></td><td style='height:40px;' align='right'>&nbsp;</td></tr>
	<tr><td colspan="2"><hr class="hr1"></td></tr>
	<tr>
		<td colspan="2" style="height: 40px;">
			<select id="cjbm"  style="height: 25px;">
				<option value="2012">采集部门</option>
			</select>
			<input id="searchValue" type="text" value=""  style="height: 25px; "/>
			<input type="button" onclick="searchData()" value="搜索" style="background-color: #568E59;height: 25px;border: 0px;color: #FFF;"/>
						<input type="button" onclick="delryData()" value="删除" style="margin-left:10px;background-color: #568E59;height: 25px;border: 0px;color: #FFF;float:right"/>
			<input type="button"  id="addBmRy" value="添加" style="background-color: #568E59;height: 25px;border: 0px;color: #FFF;float:right"/>
	</tr>
	<br />
	<tr>
		<table style="font-size:12px;width:98%;margin: 0 auto;" cellpadding="0" cellspacing="0" id="rtshow">
							<thead>
								<tr style="background-color:#e6e6e6;color:#333333;font-weight:bold;font-size:12px;height:40px;">
									<td style="width:60px;height:30px;" align="center"><input type="checkbox" id="allckbox" onclick="allckbox()"/></td>
									<td style="width:200px;height:30px;" align="center">数据采集部门</td>
									<td style="width:300px;height:30px;" align="center">部门人员</td>
									<td style="width:300px;height:30px;" align="center">角色</td>
									<td style="width:100px;height:30px;" align="center">操作</td>
								</tr>
							</thead>
							<tbody>
							</tbody>
				      </table>
				   <table style='width:100%;margin-top: 50px' cellpadding='0' id="pageTb">
			<tbody>
				<tr>
					<td align='left'>
					<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
					</td>
					<td align='right'>
					<span style='display:inline-block;margin-right:40px;'>
					
					<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
						src='../../images/pgicon-first_press.png' style='vertical-align:middle;'
							onmouseover="this.src='../../images/pgicon-first.png;'"
							onmouseout="this.src='../../images/pgicon-first_press.png;'">
					<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
						src='../../images/pgicon-pre_press.png'
							style='vertical-align:middle;margin-left:5px;'
							onmouseover="this.src='../../images/pgicon-pre.png;'"
							onmouseout="this.src='../../images/pgicon-pre_press.png;'">
					<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/1页</span>
					<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
							src='../../images/pgicon-next_press.png'
							style='vertical-align:middle;margin-left:5px;'
							onmouseover="this.src='../../images/pgicon-next.png;'"
							onmouseout="this.src='../../images/pgicon-next_press.png;'">
					<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
					line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
					<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
							src='../../images/pgicon-last_press.png'
							style='vertical-align:middle;margin-left:5px;'
							onmouseover="this.src='../../images/pgicon-last.png'"
							onmouseout="this.src='../../images/pgicon-last_press.png'">
					</span>
					</td>
				</tr>
			</tbody>
		</table>
	</tr>
</table>

<form action="" id="exportForm" method="post">
        <input type="hidden" id="tabValue" name="tabValue">
</form>
</body>
</html>