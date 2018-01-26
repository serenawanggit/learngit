<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<script>
	
	validateLogin();
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
			var a = $(obj);
			var id=event.target.parentNode.id;
			var div = $("#rightMenu");
			var ul = $("#opertion");
			ul.show();
			ul.html("<li onclick='deleteThis(\""+id+"\")'>删除</li><li onclick='addChildView(\""+id+"\")'>增加子目录</li>");
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
	
/* 	function clickIE4(){
        if (event.button==2){
                return false;
        }
	}
 
	function clickNS4(e){
        if (document.layers||document.getElementById&&!document.all){
                if (e.which==2||e.which==3){
                        return false;
                }
        }
	}
	 
	function OnDeny(){
        if(event.ctrlKey || event.keyCode==78 && event.ctrlKey || event.altKey || event.altKey && event.keyCode==115){
                return false;
        }
	} */
</script>
<style type="text/css">
	*{margin: 0px; padding:0px; font-size:13px;}
	.rightMenu{
			background-color:white; border:1px solid #cccccc;  width:120px;
			position:absolute;
			z-index:999;
			border: 1px solid #696;
			-webkit-border-radius: 8px;
			-moz-border-radius: 8px;
		     border-radius: 5px; 
			-webkit-box-shadow: #666 0px 0px 10px;
			-moz-box-shadow: #666 0px 0px 10px;
			 box-shadow: #666 0px 0px 10px;
			 left:0px;
			 top:0px;
			 display:none;
			}
	.opertion{width:110px;  margin:5px auto; border-bottom:1px solid #ccc; display:none;}
	.rightMenu li{list-style: none; height:25px; cursor: pointer; line-height: 25px; padding-left:4px;}
	.rightMenu li:hover{ background-color:#348CCC; color:white;}
	
	#showMsg{ height:35px; line-height: 35px; width:65px; margin: 0px auto;}
</style>
</head>

<body>
	<!-- <a href='javascript:void(0);' indexId='1001010' onmousedown='showRightMenu(this,event)'>测试测试</a> -->
	<div id='rightMenu' class='rightMenu'>
	    <ul class='opertion' id='opertion'>
	    	 <!-- <li>关注指标</li>
		     <li>取消关注</li> -->
	    </ul>
	</div>
</body>
</html>
