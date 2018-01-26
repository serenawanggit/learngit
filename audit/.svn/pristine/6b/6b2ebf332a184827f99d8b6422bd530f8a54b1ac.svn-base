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
<title></title>
<link href="<%=basePath%>css/tsk.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="<%=basePath %>css/zTreeStyle/zTreeStyle.css" type="text/css">
<script type="text/javascript" src="<%=basePath %>js/base.js"></script>	
<!--  <script type="text/javascript" src="<%=basePath %>ckeditor/ckeditor.js"></script>	-->
	<script type="text/javascript" src="<%=basePath %>kindeditor/kindeditor.js"></script>
	<script type="text/javascript" src="<%=basePath %>kindeditor/lang/zh_CN.js"></script>
	<script type="text/javascript" src="<%=basePath %>kindeditor/plugins/code/prettify.js"></script>	
	<script type="text/javascript" src="<%=basePath %>js/echarts-all.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	
<style type="text/css">
body,html {
	width: 100%;
	height: 100%;
	margin: 0;
	border: none;
	background-repeat: repeat-x;
	font-size: 12px;
	font-family: Arial, Helvetica, sans-serif;
	background: url(<%=basePath%>images/centerbk.png);
	filter:
		"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	-moz-background-size: 100% 100%;
}
.jjh{
	float:left; height:11px; line-height:11px; width:11px; background:#92b8df; color:#FFF; margin-right:5px;margin-top:2px;  text-align:center;
}
.hr1 {
	height: 1px;
	border: none;
	border-top: 1px solid #DADADA;
}


</style>
  <style>
	table{
		border-collapse:collapse;
		cellpadding:0;
		cellspacing:0;
	}
	td{
		border:solid 1px #cccccc;
		height:30px;
	}
	
</style>
<style type="text/css" mce_bogus="1">  
  table.tab_css_1 th{
            
        }
        table.tab_css_1 td{
            white-space: nowrap;
        }
        body,table{
         font-size:12px;
        }
  table.tab_css_1{
         empty-cells:show; 
         border-collapse: collapse;
         margin:0 auto;
        }
 

  
  table.tab_css_1 th {
   
   background-repeat:repeat-x;
   height:30px;
  }
  table.tab_css_1 td,table.tab_css_1 th{
   padding:0 1em 0;
  }
  table.tab_css_1 tr.tr_css{
  
   height:30px;
  }
    </style>
<script type="text/javascript" src="<%=basePath%>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/ztree/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/ztree/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/ztree/jquery.ztree.exedit-3.5.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/estimate/estimate_action.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/estimate/ckeditor_action.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/estimate/createpic.js"></script>
</head>
<body>
<input type="hidden" value="<%=basePath%>" id="servUrl" />
	<!-- 右边显示 
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	
</table>-->
	<div style="width:98%;height:100%">
		<div style="height:10%;margin-left:10px;padding-top:5px;">
			<span
				style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath%>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'><span
				id="topLable"
				style='display:inline-block;height:28px;line-height:28px;'>自我评估
					>> 自评报告</span>
			</span>
			<hr style="color: #DADADA">
		</div>
		<div style="width:100%;height:85%;margin-left:10px;">
			<div style="width:28%;height:100%;float:left">
				<div style="width:102%;height:8%;">
					<span style="float:left;">审核性评估内容</span> <a  href="javascript:deletejd()"
						 style="width:30px;height:25px;background:url(<%=basePath%>images/e7.png) no-repeat center center;float:right"></a>
					<a href="javascript:lrShift('r');"
						style="width:30px;height:25px;background:url(<%=basePath%>images/e6.png) no-repeat center center;float:right"></a>
					<a href="javascript:lrShift('l');"
						style="width:30px;height:25px;background:url(<%=basePath%>images/e5.png) no-repeat center center;float:right"></a>
					<a href="javascript:tdShift('x');"
						style="width:30px;height:25px;background:url(<%=basePath%>images/e4.png) no-repeat center center;float:right"></a>
					<a href="javascript:tdShift('s');"
						style="width:30px;height:25px;background:url(<%=basePath%>images/e3.png) no-repeat center center;float:right"></a>
					<a href="javascript:editjd()"
						style="width:30px;height:25px;background:url(<%=basePath%>images/e2.png) no-repeat center center;float:right"></a> 
						<a href="javascript:addjd()"
						style="width:30px;height:25px;background:url(<%=basePath%>images/e1.png) no-repeat center center;float:right"></a>
				</div>
				
			
				<div style="background-color:white;width:100%;height:90%;overflow:auto;border: solid 1px #ccc;">
					<ul id="treeDemo1" class="ztree" style="">
					</ul>
				</div>
			</div>

			<div style="width:68%;height:100%;float:left;">
				<div style="width:100%;height:8%;">
				   <a href="javascript:download()" style = 'float:right;text-decoration: none; text-align:center;width:100px;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;margin-right:2px;margin-left:3px;'>下载</a>
					<a id='suckeditor' name='suckeditor' href = 'javascript:saveckeditor()' style = 'float:right;text-decoration: none; text-align:center;width:100px;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>保存</a>
<!-- 					<a id='previewckeditor' href = 'javascript:preview()' style = 'float:right;text-decoration: none; text-align:center;width:100px;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;margin-right:2px;'>预览</a> -->
					<a href="javascript:insert_quota()" style = 'float:right;text-decoration: none; text-align:center;width:100px;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;margin-right:2px;'>插入指标</a>
					<a href="javascript:insert_datatable()" style = 'float:right;text-decoration: none; text-align:center;width:100px;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;margin-right:2px;'>插入数据表</a>
					<a href="javascript:void(0)" onclick="insertAsEestimate()" style = 'float:right;text-decoration: none; text-align:center;width:100px;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;margin-right:2px;'>更新评估内容</a>
<!-- 				 	<a href="javascript:insert_picture()" style = 'float:right;text-decoration: none; text-align:center;width:100px;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;margin-right:2px;'>插入图片</a> -->
				</div>
				 
				 <script>
				 	// CKEDITOR.replace('TextArea1');
				 	var editor;
	KindEditor.ready(function(K) {
		editor = K.create('textarea[name="content"]', {
        			afterBlur: function(){
        				this.sync();
        			}
	       });
	       validateLogin();
	   	 		K('input[name=getHtml]').click(function(e) {
					alert(editor.html());
				});
				K('input[name=isEmpty]').click(function(e) {
					alert(editor.isEmpty());
				});
				K('input[name=getText]').click(function(e) {
					alert(editor.text());
				});
				K('input[name=selectedHtml]').click(function(e) {
					alert(editor.selectedHtml());
				});
				K('input[name=setHtml]').click(function(e) {
					editor.html('<h3>Hello KindEditor</h3>');
				});
				K('input[name=setText]').click(function(e) {
					editor.text('<h3>Hello KindEditor</h3>');
				});
				K('input[name=insertHtml]').click(function(e) {
					editor.insertHtml('<strong>插入HTML</strong>');
				});
				K('input[name=appendHtml]').click(function(e) {
					editor.appendHtml('<strong>添加HTML</strong>');
				});
				K('input[name=clear]').click(function(e) {
					editor.html('');
				});
				K('input[name=suckeditor]').click(function(e) {
				});
	 });
				 </script>
				<div style="background-color:white;width:100%;height:90%;margin-left:20px;overflow: auto">
						<textarea id="TextArea1" name="content" style="width:750px;height:410px;"  class="ckeditor">
						</textarea>
					</div>
					
			</div>
		</div>
	</div>
</body>
</html>