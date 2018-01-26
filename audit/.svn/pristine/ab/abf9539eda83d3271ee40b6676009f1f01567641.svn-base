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
<title></title>
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
.tb_thead tr td{white-space: nowrap;}
.ul li{
  list-style-type:none;
}
</style>
<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/json2.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/rwcx.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
	    validateLogin();
		showShztbs();
	});
	
	//初始化分页查询指标
	var icp=1;
	function showShztbs(){
		var flag = $("#flag").val();
		var param = $("#param").val();
		var datatype= $("#showRwData input[name='data']:checked ").val(); 
		var url = "/audit/asShZtsjbController/selectCjZtSjbs.do";
		$.ajax({ 
			url:url,
			async:false,
			type:'POST',
			dataType:"json",
			data:{"flag":flag,"param":param,"pageNo":icp,"datatype":datatype},
			error:
				function(){
					alert("系统故障");
				},
			success:
				function(data){
					var o = eval('(' + data + ')');
					var str = "";
					var str2="";
					if(o == null){
						return;
					}
					if(o.list.length==0 ){
					//console.info( $("#tishixx"));
					    str2+="<center style='color:red;font-size:15px'>没找到该任务！</center>";
					     $("#tishixx").html(str2);
					}else{
					   $("#tishixx").html("");
					}
				//	console.info(o.list[0]);
					$("#shztsjbshow tbody").empty();
					 //console.info( o.list);
					for(var i = 0; i < o.list.length; i++){
						  str+="<tr style='background-color:#FFF;color:#333333;font-size:12px;border:1px solid #DADADA'>";
						  	 str+="<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
						       str+="<input type='checkbox' name='ckBut' onclick='outChecked()' rwid='"+o.list[i][0]+"' cname='"+o.list[i][1]+"'/>";
						     str+="</td>";
						     str+="<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
						       str+=o.list[i][1];
						     str+="</td>";
						     str+="<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
						       str+=o.list[i][2];
						     str+="</td>";
						     str+="<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
						       str+=o.list[i][3];
						     str+="</td>";
						     str+="<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
						       str+=o.list[i][4];
						     str+="</td>";
						     str+="<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
						      if(o.list[i][6]==3 && o.list[i][7]==0){
						          str+="未审批";
						      }else if(o.list[i][6]==1 && o.list[i][7]==1){
  						          str+="已审批";
						      }
						     str+="</td>";
						     str+="<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
						       str+="<input type='button' style='border:0px;background-color: #568E59; color:white;' value='批阅' onclick='showBdxx(this,"+o.list[i][0]+","+o.list[i][5]+","+o.list[i][6]+","+o.list[i][7]+")'/>";
						     str+="</td>";
						  str+="</tr>";
					}
					$("#shztsjbshow tbody").html(str);
					//console.info("o.totalPage:"+o.totalPage);
					$("#totalPage").text(o.totalPage);
					
								//分页	   
			$("#pageTb tbody").empty();
			var totalPage=o.totalPage==0?1:o.totalPage;
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
	        "	<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'><span id='pageno'>"+
	        o.pageNo+"</span>/<span id='totalpage'>"+totalPage+"</span>页</span>"+
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

function outChecked(){
	  $("#checkbox").attr("checked",false);
	}
	//查看审核信息
	function showBdxx(element,rwid,cjmbdm,cjzt,shzt){
		$("#liyoutext").show();
		$("#wtgContent").show();
	   var state=2;
	  if(cjzt==0&&shzt==0){
	      alert("该任务未提交！请查看未审批的任务！");
	      return;
	  }
	  if(cjzt==0&&shzt==2){
	      alert("任务已被打回请等待提交！");
	      return;
	  }
	   $("#tb_tbody").empty();
	  $("#tb_thead").empty();
	  $("#zs").empty();
	  var str2=" <tr style='text-align: center; font-size:14px;color:green' ><td>正在查询数据请稍等...</td></tr>";
	  $("#tb_tbody").html(str2);
	  if(cjzt==1&&shzt==1){
	    $("#divc").show();
		$("#divcontent").show();
		$("#divclose").show();
		$("#liyou").hide();
		$("#liyoutext").hide();
             $.ajax({
					async : false,
					type : "POST",
					dataType : "text",
					url : "/audit/asShZtsjbController/selectPassrwxx.do",
					data : {
						"rwid" : rwid,
						"cjmbdm" : cjmbdm,
					},
					success : function(data) {
						var result = eval('(' + data + ')');
						var title = result.title;
						var content = result.content;
						var bhly = result.bhly;
						var size= result.size;
						// console.info(bhly);
						var str1 = "";
						if (cjzt == 1 && shzt == 1) {
							$("#subbutton").hide();
							$("#wtg").hide();
						}
						if (cjzt == 0 && shzt == 2) {
							$("#subbutton").hide();
							$("#wtg").hide();
						}
						if (cjzt == 1 && shzt == 0) {
							$("#subbutton").show();
							$("#wtg").show();
						}
						if (content.length == 0) {
						} else {
							$("#Wjyxx").html("");
						}
						var str = "";
						str += "<tr style='background-color:#ccc;color:#333333;font-weight:bold;font-size:12px;'>";
						for ( var i = 0; i < title.length; i++) {
							//console.info(title[i]);
							str += "<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >";
							str += title[i];
							str += "</td>";
						}
						str += "</tr>";
						$("#tb_thead").html(str);
						$("#wtgContent").val(bhly);
						var str1 = "";
						for ( var i = 0; i < content.length; i++) {
							str1 += "<tr>";
							for ( var j = 0; j < content[i].length; j++) {
								str1 += "<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>";
								str1 += content[i][j];
								str1 += "</td>";
							}
							str1 += "</tr>";
						}
						// console.info(str1);
						$("#tb_tbody").html(str1);
						$("#rwid").val(rwid);
						//$("#cname").val(cname);
						$("#cjmbdm").val(cjmbdm);
						//alert(cname);
						$("#zs").html("共"+size+"页数据");
						// console.info(cjzt+"--"+shzt);

					},
					error : function() {
						alert("数据查询出错！");
					}
				});
				return;
         }
         
		$("#divc").show();
		$("#divcontent").show();
		$("#divclose").show();
		$.ajax({
					async : false,
					type : "POST",
					dataType : "text",
					url : "/audit/asShZtsjbController/selectCjrwxx.do",
					data : {
						"rwid" : rwid,
						"cjmbdm" : cjmbdm,
						"state" : state
					},
					success : function(data) {
						var result = eval('(' + data + ')');
						//console.info(result.list);
						var title = result.title;
						var content = result.content;
						var bhly = result.bhly;
						var cname = result.cname;
						var size=result.size;
						var str1 = "";
						if (cjzt == 1 && shzt == 1) {
							$("#subbutton").hide();
							$("#wtg").hide();
						}
						if (cjzt == 0 && shzt == 2) {
							$("#subbutton").hide();
							$("#wtg").hide();
						}
						if (cjzt == 1 && shzt == 0) {
							$("#subbutton").show();
							$("#wtg").show();
						}
						if (cjzt == 3 && shzt == 0) {
							$("#subbutton").show();
							$("#wtg").show();
							$("#wtgContent").show();
							$("#liyou").show();
						}
						if (content.length == 0) {
							$("#subbutton").hide();
							$("#wtg").hide();
							str1 += "<center style='color:red;font-size:12px'>数据为空，请通知采集人重新提交！</center>";
							$("#Wjyxx").html(str1);
							//console.info($("#subbutton"));
							// console.info($("#wtg"));
							$("#wtgContent").hide();
							$("#liyou").hide();

						} else {
							$("#Wjyxx").html("");
						}
						var str = "";
						str += "<tr style='background-color:#ccc;color:#333333;font-weight:bold;font-size:12px;'>";
						for ( var i = 0; i < title.length; i++) {
							//console.info(title[i]);
							str += "<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center' >";
							str += title[i];
							str += "</td>";
						}
						str += "</tr>";
						$("#tb_thead").html(str);
						$("#wtgContent").val(bhly);
						var str1 = "";
						for ( var i = 0; i < content.length; i++) {
							str1 += "<tr>";
							for ( var j = 0; j < content[i].length; j++) {
								str1 += "<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>";
								str1 += content[i][j];
								str1 += "</td>";
							}
							str1 += "</tr>";
						}
						// console.info(str1);
						$("#tb_tbody").html(str1);
						$("#rwid").val(rwid);
						$("#cname").val(cname);
						$("#cjmbdm").val(cjmbdm);
						$("#zs").html("共"+size+"条数据");
						//console.info($("#zs"));
						// console.info(cjzt+"--"+shzt);

					},
					error : function() {
						alert("数据查询出错！");
					}
				});
	}
	//分页查询
	function pagefindindicator(obj) {
		var p = obj.getAttribute("value").split("_");
		if (p[0] == "1") {//首页
			icp = "1";
			showShztbs();
			return;
		} else if (p[0] == "2") {//上一页
			if (icp == "1") {
				alert("当前页已经是第一页了");
				return;
			} else {
				icp = parseInt(icp) - 1;
			}
			showShztbs();
		} else if (p[0] == "3") {//下一页

			if (icp == p[1]) {
				alert("已经是最后一页了!");
				return;
			}
			icp = parseInt(icp) + 1;
			showShztbs(icp);
		} else if (p[0] == "4") {//下一页
			var pnos = $("#pagenotext").val();
			if (pnos.length < 1) {
				alert("请输入您要跳转的页码!");
				return;
			}
			var pnums = parseInt(pnos);
			if (isNaN(pnums)) {
				alert("输入非页码数字");
				return;
			} else {
				if (pnums > parseInt(p[1])) {
					alert("记录只有" + p[1] + "页,你输入的页码" + pnums + "超出范围");
					return;
				} else {
					icp = pnos;
					showShztbs();
				}
			}
		}
	}

	function hidebutton() {
		$("#divc").hide();
		$("#divcontent").hide();
		$("#divclose").hide();
	}

	function sbt() {
		$.ajax({
			type : "POST",
			url : "/audit/asShZtsjbController/updateCjRwPass.do",
			data : {
				"rwid" : $("#rwid").val(),
				"cname" : $("#cname").val(),
				"cjmbdm":$("#cjmbdm").val()
			},
			success : function(data) {
			    showShztbs();
				alert(eval(data));
			},
			error : function() {
				alert("审批失败！");
			}
		});

	}

	function clickwtg() {
		$.ajax({
			type : "POST",
			url : "/audit/asShZtsjbController/updateCjRwNoPass.do",
			data : {
				"rwid" : $("#rwid").val(),
				"wtgContent" : $("#wtgContent").val(),
				"cjmbdm":$("#cjmbdm").val()
			},
			success : function() {
				showShztbs();
				alert("审批成功！");

			},
			error : function() {
				alert("审批失败！");
			}
		});
	}

	function importData() {
	     icp=1;
		showShztbs();
		
	}
	
	function selectType(){
	    showShztbs();
	}
	
	function allPass(){
	/* $("#messagebox").animate({
      height:'toggle'
    }); */
	var inpcheck= $("#dataTable").find("tr input[name='ckBut']:checked");
	var arr=new Array();
	for ( var i = 0; i < inpcheck.length; i++) {
		var object={};
		object.rwid= $(inpcheck[i]).attr("rwid");
		object.cname=$(inpcheck[i]).attr("cname");
		arr.push(object);
	}
	$.ajax({
		 url:"/audit/asShZtsjbController/allTaskPass.do",
		 type:"POST",
		 data:{"arr":JSON.stringify(arr)},
	     success:function(data){
	    	 showShztbs();
			// alert(eval(data));
			var str=eval(data);
			console.info(eval(data));
			console.info(str.split("#"));
			str=str.split("#");
			var str1="";
			for (var j = 0; j < str.length; j++){
			   str1+="<li>"+str[j]+"</li>";
			}
			$("#messagebox").slideDown();
			$("#messagecontent").html(str1);
	     },
	     error:function(){
	    	 
	     }
	});
}

 function messageboxhidden(){
     $("#messagebox").slideUp();
 }
</script>
</head>
<body>
<!-- 右边显示 -->
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'><span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'><span id="topLable" style='display:inline-block;height:28px;line-height:28px;'>任务查询</span></span></td><td style='height:40px;' align='right'>&nbsp;</td></tr>
	<tr><td colspan="2"><hr class="hr1"></td></tr>
	<tr>
		<td colspan="2" style="height: 40px;line-height: 40px" id="showRwData">
			<select id="flag"  style="height: 25px;">
				<option value="SJBM">数据表名</option>
				<option value="CJBM">采集部门</option>
				<option value="CJR">采集人</option>
				<option value="RWMC">任务名称</option>
			</select>
			<input type="text" value="" id="param" style="height: 25px; "/>
			<input type="button" onclick="importData()" value="搜索" style="background-color: #568E59;height: 25px;border: 0px;color: #FFF;"/>
			<div style="float: right">
				<input type="radio" name="data" value="1" onclick="selectType()" />&nbsp;&nbsp;<span style="font-size: 13px; ">已审批&nbsp;&nbsp;</span>
				<input type="radio" name="data" value="2" onclick="selectType()"/>&nbsp;&nbsp;<span style="font-size: 13px; ">未审批</span>
				<input type="radio" name="data" value="3" checked="checked" onclick="selectType()"/>&nbsp;&nbsp;<span style="font-size: 13px; ">全部</span>
			    <input type="button" onclick="allPass()" value="全部通过" style="background-color: #568E59;height: 23px;border: 0px;color: #FFF;margin-left: 5px;"/>
			</div>
		</td>
	</tr>
	<br />
	<tr>
		     <table style="font-size:12px;width:100%; border:#DADADA 1px solid;" cellpadding="0" cellspacing="0" id="shztsjbshow">
				<thead>
					<tr style="background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;height:40px;">
						<td style="width:200px;height:30px;" align="center"><input type="checkbox" id="checkbox" onclick="onchecked();"></td>
						<td style="width:200px;height:30px;" align="center">状态库数据表</td>
						<td style="width:200px;height:30px;" align="center">数据采集单位</td>
						<td style="width:200px;height:30px;" align="center">数据采集人</td>
						<td style="width:200px;height:30px;" align="center">所属任务</td>
						<td style="width:200px;height:30px;" align="center">审核状态</td>
						<td style="width:100px;height:30px;" align="center">操作</td>
					</tr>
				</thead>
				<tbody id="dataTable"> 
				</tbody>
			 </table>
			     <div id="tishixx" style="width:100%;"></div>
					<table style='width:100%;margin-top: 20px' cellpadding='0' id="pageTb">
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
								<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/10页</span>
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
			 </table>
	</tr>
</table>

<form action="" id="exportForm" method="post">
        <input type="hidden" id="tabValue" name="tabValue">
</form>
   <!-- 弹出层 -->
     <%-- <a  style="color:#FFF;text-decoration:none;padding:5px 5px 0 0;font-size:12px;" href="javascript:void(0)">
              <img  style="vertical-align:middle;border: 0px;float: right;height:31px;width:31px" src="<%=basePath%>/images/alertimg/alertclose.png" onclick="hidebutton()"></img>
          </a> --%>
       <div id="divc" style="margin:0;padding:0;border:none;width:100%;height:100%;background:#333;opacity:0.6;filter:alpha(opacity=60);z-index:99;position:fixed;top:0;left:0;display: none"></div>
       <!-- 弹出的内容 -->
        <div id="divclose" style="background-color:#4C8AC4;height:6%;width:85%;z-index: 100;position: absolute; top: 4%;left:8%;display: none;">
               <img border="0" style="vertical-align:middle;float: right;" src="<%=basePath%>/images/alertimg/alertclose.png " onclick="hidebutton()"></img>
        </div>
       <div id="divcontent" style="background-color:white;height:80%;width:85%;z-index: 100;position: absolute; top: 10%;left:8%;display: none;overflow-x:auto;">
           <div style="padding: 5px 5px 5px 5px">
             <input type="hidden" id="rwid"/>
             <table style="font-size:12px;width:100%; border:#DADADA 1px solid;" cellpadding="0" cellspacing="0" id="content">
                      <thead id="tb_thead" class="tb_thead">
                          <tr></tr>
                      </thead>
                      <tbody id="tb_tbody">
                         <tr>
                         </tr>
                      </tbody>
             </table>
           </div>
             <div id="Wjyxx" style="width:100%;"></div>
             <div><span id="zs" style="margin-left: 10px;color:green;font-size: 14px;"></span></div>
             <label style="margin-left: 10px;color:red;" id="liyou">未通过理由：</label>
             <div style="margin-left: 10px" id="liyoutext"><textarea  cols="45%" style="resize: none;" id="wtgContent" ></textarea></div>
             <div style="margin-left: 50%"><input type="button" value="通过" onclick="sbt()" id="subbutton"/><input id="wtg" onclick="clickwtg()" type="button" value="未通过" /> <input type="button" id="hidebutton" value="取消" onclick="hidebutton()"/> </div>
               <input type="text" style="display: none;" value="" id="cname"/>
               <input type="text" style="display: none;" value="" id="cjmbdm"/>
       </div>
       
        <div id="messagebox" style="background-color:#F0F0F0;height:30%;width:25%;z-index: 100;position: absolute; top: 68%;left:74.5%;display: none;">
          <div id="divclose" style="background-color:#4C8AC4;height:14%;width:100%;position: absolute; ">
               <img border="0" style="vertical-align:middle;float: right;" src="<%=basePath%>/images/alertimg/alertclose.png " onclick="messageboxhidden()"></img>
          </div>
          <div style="margin-top:9%; ">
            <ul class="ul" id="messagecontent">
            </ul>
          </div>
        </div>
</body>
</html>