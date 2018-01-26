$(function(){
	/*$("#tabbox").hide();
	 $("#divcontent1").hide();
	$("#divc").hide();
	$("#divcontent").hide();
	$("#divclose").hide();*/
//	showMaterials(1);

	//修改
	$("#img3 img").click(function as(){
		var obj = $(":input[name=checkAccessSupportMaterials]:checked");
		if(obj.length==0){
			alert("请选择要修改的记录！");
			return;
		}
		if(obj.length==1){
			
			 $("#divc").show();
				$("#divcontent").show();
				$("#divclose").show();
				showdepart();
			$("#checkbox").checked=true;
			obj.each(function a(){
				var filename=$(this).attr("value");
				$("#upFileName").val(filename);
				$("#modNames").val(filename);
			});
			$("#chosefile").hide();
			 $("#modify").show();
			 $("#keep").hide();
		}else{
			alert("只能选择一项修改");
			return;
		}
//		alert(treeNodeId)
		
		
	});
	
	//删除
	$("#img2 img").click(function as(){
		
		var obj = $(":input[name=checkAccessSupportMaterials]:checked");
		
		if(obj.length==0){
			alert("请选择要删除的数据！");
			return;
		}
		//利用对话框返回的值 （true 或者 false）
		if (!confirm("确定删除所选项吗？")) {
			return;
		}
		var i = 0,names='';
		$("#checkbox").checked=true;
		obj.each(function(){
			i++;
			var nvalue = $(this).attr("value");//文件名称(包含后缀)
			if(i == obj.length){
				
				names +=nvalue;
			}else{
				
				names +=nvalue+ ",";
			}
		});
		var delurl =  "/TQCC" + "/supportFile/upfile_delSupportfile.htm";
		$.ajax({
			url:delurl,
			type:'POST',
			dataType:'text',
			data:{"names":names},
		    success:function(data){
		    	if(data==0){
		    		alert("删除成功！");
		    	}
		    	showMaterials(1,treeNodeId);
		    },
		    error:function(){
				alert("系统繁忙，请稍后重试！");
				showMaterials(1,treeNodeId);
		    }
		});
	});
	
	
	$("#img1 img").click(function as(){
		var treeNodeId=$("#treetableId").val();
		if(treeNodeId==""){
			alert("请选择节点上传！");
			return
		}
//		alert(id);
		 $("#divc").show();
			$("#divcontent").show();
			$("#divclose").show();
			$("#msg").html("");
			$("#upFileName").val("");
			$("#chosefile").show();
			 $("#modify").hide();
			 $("#keep").show();
			
			showdepart();
			
			$("#upFile").change(function (){
				var name=$("#upFile").val();
				$("#upFileName").val(name);
				var fileName = name.substring(name.lastIndexOf(".")+1).toLowerCase();
			    if(fileName !="xlsx" && fileName !="doc" && fileName !="pdf" && fileName !="png" && fileName !="xls" && fileName !="ppt"
			        && fileName !="docx"&&fileName !="bmp"&&fileName !="jpeg"&&fileName !="gif"&&fileName !="tiff"&&fileName !="jpg") {
			        $("#msg").text("上传格式为doc、xlsx、xls、ppt、png、docx、pdf、bmp、jpeg、gif、tiff、jpg！");
			        $(this).val("");
			        return
			    }
			});	
	});
	
	//下载
	$("#img4 img").click(function (){
		
		var obj = $(":input[name=checkAccessSupportMaterials]:checked");
		
		if(obj.length==0){
			alert("请选择要下载的数据！");
			return;
		}
		
		var i = 0,names='';
		$("#checkbox").checked=true;
		obj.each(function(){
			i++;
			var nvalue = $(this).attr("value");//文件名称(包含后缀)
			if(i == obj.length){
				
				names +=nvalue;
			}else{
				
				names +=nvalue+ ",";
			}
		});
//		var downurl =  "/TQCC" + "/supportFile/upfile_downFile.htm";
		window.location="/TQCC" + "/supportFile/upfile_downFile.htm"+"?names="+names;
		/*$.ajax({
			url:delurl,
			type:'POST',
			dataType:'text',
			data:{"names":names},
		    success:function(data){
		    	
		    },
		    error:function(){
				alert("系统繁忙，请稍后重试！");
				showMaterials(1,treeNodeId);
		    }
		});*/
	});
});	
//修改支撑材料弹出框
function fileModify(){
	var treeNodeId=$("#treetableId").val();
	var formData = new FormData($( "#formupload" )[0]); 
	$.ajax({
		  url: "/TQCC" + "/supportFile/upfile_changeSupportFile.htm",  
    type: 'POST',  
    data: formData,  
    async: false,  
    cache: false,  
    contentType: false,  
    processData: false,  
    success: function (returndata) {
//    	alert(returndata);
  	  if(returndata==1){
  		$("#divcontent").hide();
  	  $("#divcontent1").show();
  		$("#divcontent1").text("修改成功！"); 
  		
      	  showMaterials(1,treeNodeId);
  	  }else{
  		  alert(returndata);
  	  }
    },  
    error: function (returndata) { 
    	$("#divcontent").hide();
    	  $("#divcontent1").show();
    		$("#divcontent1").text("修改失败！！"); 
  	 
  	  showMaterials(1,treeNodeId);
      },
   });
 }	

function showdepart(){
	$.ajax({
		url: "/TQCC" + "/supportFile/upfile_showdepartment.htm",  
		async:false,
		dataType:"json",
		type:'POST',
    success: function (data) {
  	     var a =data.names;
  	    var str="";
  	    for ( var j = 0; j < a.length; j++) {
  	    	 str+="<option>"+a[j]+"</option>";
		}
  	    $("#upDepart").html(str);
    },  
    error: function (returndata) {  
    }  ,
});
	
}
function hidebutton() {
	$("#divc").hide();
	$("#divcontent").hide();
	$("#divclose").hide();
	$("#divcontent1").hide();
}
 
var treeNodeId;
function upLoadfile(){
	treeNodeId=$("#treetableId").val();
	var upFileName=$("#upFileName").val();
	var upDepart=$("#upDepart").val();
	var file =$("#upFile").val();
	if(file==""){
		$("#msg").text("上传资料不能为空！");
		return
	}else if(upFileName==""){
		$("#msg1").text("不能为空");
		return
	}else if(upDepart==""){
		$("#msg2").text("不能为空！");
		return
	}else{
		var formData = new FormData($( "#formupload" )[0]);  
		var str2="正在上传请稍等...";
		 $("#divcontent").hide();
   	  $("#divcontent1").show();
   	$("#divcontent1").text(str2);
   	
		$.ajax({
				  url: "/TQCC" + "/supportFile/upfile_upSupportFile.htm",  
	          type: 'POST',  
	          data: formData,  
	          async: false,  
	          cache: false,  
	          contentType: false,  
	          processData: false,  
	          success: function (returndata) {
	        	  if(returndata==""){
	        		  $("#divcontent").hide();
		        	  $("#divcontent1").show();
		        	  $("#divcontent1").text("上传成功！");
		        	  showMaterials(1,treeNodeId);
	        	  }else{
	        		  alert(returndata);
	        		  $("#divcontent").show();
	        		  
	        	  }
	          },  
	          error: function (returndata) { 
	        	  $("#divcontent").hide();
	        	  $("#divcontent1").show();
	        	  $("#divcontent1").text("上传失败！");
	          }  ,
		});
	}
}


function showMaterials(currentpage,treeNodeId){
	var checkAll = document.getElementById("checkAll");
	if (checkAll != null) {
		checkAll.checked = false;
	}
	var page ="";
	if(currentpage == 0 || currentpage == 1){
		page = 0;
	}else{
		page = currentpage - 1;
	}
	//var str = $("#queryForm").serialize();"&treeNodeId="+treeNodeId
	var url = "/TQCC" + "/supportFile/upfile_querySupportfile.htm";
	$.ajax({
		type:'POST',
		dateType:'text',
		url:url,
		data:{"currentpage":page,"treeid":treeNodeId},
		//data:str,
		success:function(data){ 
			var dataJson = eval("("+data+")");
			var pageBean = dataJson.pageBean;
			
			var aasmList = dataJson.aasmList;
			var a= pageBean.totalCount!=null? pageBean.totalCount:0;
			$("#total1").html("共"+a+"条数据");
		
			$("#currentpage").val(pageBean.currentpage);
			$("#totalPage").html(pageBean.totalpage);
			$("#dataTable").empty();
			if(aasmList==""||aasmList==null){
				$("#dataTable").append("<tr class='bai_tips'><td width='100%' colspan='5' style='text-align:center;'>无数据</td></tr>");
			}
			
			$.each(aasmList,function(j,value){
//				alert(value);
				if(value!=null){
					var str = "";
					if(j % 2 == 0){
						str = "<tr class='bai_tips'>";
					}else{
						str = "<tr class='hui_tips'>";
					}
					if(value[6]==1){
						value[6]="审核";
					}else{
						value[6]="未审核";
					}
					$("#dataTable").append(str+
						//	onclick='zxyl(this)'
							" <td width='80px' height='30px' style='text-align:center;'><input id='checkbox' type='checkbox' name='checkAccessSupportMaterials' value='"+value[0]+"' nvalue='"+value[1]+"' nvalue2='"+value[2]+"' nvalue5='"+value[5]+"' nvalue3='"+value[3]+"' nvalue='"+value[4]+"'/></td>"+
							" <td width='250px' height='30px' style='text-align:center;'><a href='#' onclick=\"alertWin('"+value[0]+"','',1200,550);showOnline(this);\" surl='"+value[9]+"' onlineurl='"+value[10]+"'>"+value[0]+"</a></td>"+
							" <td width='100px' height='30px' style='text-align:center;'>"+value[1]+"</td>"+
							" <td width='150px' height='30px' style='text-align:center;'>"+value[2]+"</td>"+
							" <td width='200px' height='30px' style='text-align:center;'>"+value[3]+"</td>"+
							" <td width='100px' height='30px' style='text-align:center;'>"+value[4]+"</td>"+
							" <td width='100px' height='30px' style='text-align:center;'>"+value[5]+"</td>"+
							" <td width='90px' height='30px' style='text-align:center;'>"+value[6]+"</td>"+
							" <td width='90px' height='30px' style='text-align:center;'>"+value[7]+"</td>"+
							" <td width='150px' height='30px' style='text-align:center;'>"+value[8]+"</td>"+
						    
							"</tr>"
					);
					
				}
				
			});
			
		}
		
	
	});
	
}
function explore(){
	var treeNodeId=$("#treetableId").val();
	if(treeNodeId==""){
		alert("请选择节点！");
		return
	}
	var ii=$("#termid").val(treeNodeId);
	
	var formData = new FormData($( "#explore" )[0]); 
	$.ajax({
		  url: "/TQCC" + "/supportFile/upfile_exploreSupportFile.htm",  
    type: 'POST',  
    data: formData,  
    async: false,  
    cache: false,  
    contentType: false,  
    processData: false,  
    success: function (data) {
    	$("#total1").hide();
//    	alert(returndata);
    	var dataJson = eval("("+data+")");
    	var amtrlist = dataJson.amtrlist;
    	$("#dataTable").empty();
		if(amtrlist==""||amtrlist==null){
			$("#dataTable").append("<tr class='bai_tips'><td width='100%' colspan='5' style='text-align:center;'>无数据</td></tr>");
		}
		
		$.each(amtrlist,function(j,value){
//			alert(value);
			if(value!=null){
				var str = "";
				if(j % 2 == 0){
					str = "<tr class='bai_tips'>";
				}else{
					str = "<tr class='hui_tips'>";
				}
				$("#dataTable").append(str+
						
						" <td width='80px' height='30px' style='text-align:center;'><input id='checkbox' type='checkbox' name='checkAccessSupportMaterials' value='"+value[0]+"' nvalue='"+value[1]+"' nvalue2='"+value[2]+"' nvalue5='"+value[5]+"' nvalue3='"+value[3]+"' nvalue='"+value[4]+"'/></td>"+
						" <td width='250px' height='30px' style='text-align:center;'>"+value[0]+"</td>"+
						" <td width='100px' height='30px' style='text-align:center;'>"+value[1]+"</td>"+
						" <td width='150px' height='30px' style='text-align:center;'>"+value[2]+"</td>"+
						" <td width='200px' height='30px' style='text-align:center;'>"+value[3]+"</td>"+
						" <td width='100px' height='30px' style='text-align:center;'>"+value[4]+"</td>"+
						" <td width='100px' height='30px' style='text-align:center;'>"+value[5]+"</td>"+
						" <td width='90px' height='30px' style='text-align:center;'>"+value[6]+"</td>"+
						" <td width='90px' height='30px' style='text-align:center;'>"+value[7]+"</td>"+
						" <td width='150px' height='30px' style='text-align:center;'>"+value[8]+"</td>"+
						
					    
						"</tr>"
				);
				$(".page_txt f_l mg_top10 mg_l10").hide();
			}
			
		});
//		showUserMenuOperation(2,$('#sid').val());
		
	},
    error: function (returndata) {  
  	  $("#msg").text("系统忙"); 
  	  showMaterials(1,treeNodeId);
      },
   });
}
		
//前一页
function forward(){
	var totalpage = $("#totalPage").html();
	var currentpage = $("#currentpage").val();
	if(parseInt(currentpage) >= parseInt(totalpage)){
		$("#currentpage").val(totalpage);
		showMaterials(totalpage);
	}else{
		$("#currentpage").val(parseInt(currentpage) + 1);
		showMaterials($("#currentpage").val());
	}
}
//后一页
function back(){
	var currentpage = $("#currentpage").val();
	if(currentpage <= 1){
		$("#currentpage").val(1);
		showMaterials(0);
	}else{
		$("#currentpage").val(parseInt(currentpage) - 1);
		showMaterials(parseInt(currentpage) - 1);
	}
	
}
//首页
function forwardtop(){
	var totalPage = $("#totalPage").html();
	$("#totalPage").val(totalPage);
	showMaterials(totalPage);
}
//最后一页
function backtop(){
	$("#currentpage").val(1);
	showMaterials(0);
}
//---------------------------全选
function checkedAllbox(){
	var checkAlls = document.getElementsByName("checkAccessSupportMaterials");
	var checkAll = document.getElementById("checkAll");
	if(checkAll.checked == true){
		for(var i = 0;i<checkAlls.length;i++){
			checkAlls[i].checked = true;
		}
	}else {
		for(var i = 0;i<checkAlls.length;i++){
			checkAlls[i].checked = false;
		}
	}
}
//在线预览
function zxyl(a){
	var onlineurl = $(a).attr("onlineurl");
	$("#userOnlineId").attr("value",onlineurl);
	layer.open({
		  type: 2,
		  title: false,
		  area: ['1100px', '600px'],
		  shade: 0.8,
		  closeBtn: 1,
		  shadeClose: true,
		  content: '/audit/page/zenith/staticPage/zxyl.html'
	});
	 
 };
function getFindSupport(a){
	var furl = $(a).attr("surl");
	var fname = $(a).html()
	//window.location.href="/audit/asAssessReport/downTQCCSupport.do?furl="+encodeURI(furl)+"&fname="+encodeURI(fname);
	$("#loading").show();
	$.ajax({
		url :"/audit/asAssessReport/getFileContent.do",
		data:{
			"furl":furl,
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(datas){
			var info = datas;
			//var info = eval("("+datas+")");
			$("#fileTitle").html(fname)
			//如果解析不了
			if(info.struts==2){
				$("#fileContent").html("该文件格式不支持预览,你可以进行<a href='/audit/asAssessReport/downTQCCSupport.do?furl="+encodeURI(furl)+"&fname="+encodeURI(fname)+"'>点击下载</a>");
			}else{
				if(info.contentMessge!=null){
					$("#fileContent").html("<div style='width:96%;height:98%'>"+info.contentMessge+"</div>");
				}else if(info.filePath!=null){
					$("#fileContent").html("<iframe  width=100% height=92% frameborder=0 scrolling=auto src=\"/audit/"+info.filePath+"\"></iframe>");
				}else{
					$("#fileContent").html("解析失败,你可以进行<a href='/audit/asAssessReport/downTQCCSupport.do?furl="+encodeURI(furl)+"&fname="+encodeURI(fname)+"'>点击下载</a>");
				}
			}
		},error:function(){
			$("#fileContent").html("预览失败,你可以进行<a href='/audit/asAssessReport/downTQCCSupport.do?furl="+encodeURI(furl)+"&fname="+encodeURI(fname)+"'>点击下载</a>");
		}
	});
	$("#loading").hide();
	$("#fileShow").fadeIn(1000);
}

function closeFile(){
	$("#fileShow").hide();
}


function alertWin(title, msg, w, h){
	var titleheight = "22px"; // 提示窗口标题高度
	var bordercolor = "#666699"; // 提示窗口的边框颜色
	var titlecolor = "#FFFFFF"; // 提示窗口的标题颜色
	var titlebgcolor = "#1F76BB"; // 提示窗口的标题背景色
	var bgcolor = "#FFFFFF"; // 提示内容的背景色

	var iWidth = document.documentElement.clientWidth;
	var iHeight = document.documentElement.clientHeight;
	var bgObj = document.createElement("div");
	bgObj.style.cssText = "position:absolute;left:0px;top:0px;width:"+iWidth+"px;height:"+Math.max(document.body.clientHeight, iHeight)+"px;filter:Alpha(Opacity=30);opacity:0.3;background-color:#000000;z-index:101;";
	document.body.appendChild(bgObj);

	var msgObj=document.createElement("div");
	msgObj.style.cssText = "position:absolute;font:11px '宋体';top:"+(iHeight-h)/2+"px;left:"+(iWidth-w)/2+"px;width:"+w+"px;height:"+h+"px;text-align:center;border:1px solid "+bordercolor+";background-color:"+bgcolor+";padding:1px;line-height:22px;z-index:102;";
	document.body.appendChild(msgObj);

	var table = document.createElement("table"); //www.divcss5.com divcss5
	msgObj.appendChild(table);
	table.style.cssText = "margin:0px;border:0px;padding:0px;";
	table.cellSpacing = 0;
	var tr = table.insertRow(-1);
	var titleBar = tr.insertCell(-1);
	titleBar.style.cssText = "width:100%;height:"+titleheight+"px;text-align:left;padding:3px;margin:0px;font:bold 13px '宋体';color:"+titlecolor+";border:0px solid " + bordercolor + ";cursor:move;background-color:" + titlebgcolor;
	titleBar.style.paddingLeft = "10px";
	titleBar.innerHTML = title;
	
/*	var nr = document.createElement("div");
	msgObj.appendChild(nr);
	nr.style.cssText="width:20%;height:94%;float:left;overflow:auto;margin-top:5px;border:1px solid #E7E7E7";
	$(nr).attr("id","onlinezccl");*/
	
	var nr1 = document.createElement("div");
	msgObj.appendChild(nr1);
	nr1.style.cssText="width:99%;height:96%;float:left;margin-top:5px;";
	$(nr1).attr("id","onlinezcclnr");
	var moveX = 0;
	var moveY = 0;
	var moveTop = 0;
	var moveLeft = 0;
	var moveable = false;
	var docMouseMoveEvent = document.onmousemove; //www.divcss5.com divcss5
	var docMouseUpEvent = document.onmouseup;
	titleBar.onmousedown = function() {
	var evt = getEvent();
	moveable = true;
	moveX = evt.clientX;
	moveY = evt.clientY;
	moveTop = parseInt(msgObj.style.top);
	moveLeft = parseInt(msgObj.style.left);

	document.onmousemove = function() {
	if (moveable) {
	var evt = getEvent();
	var x = moveLeft + evt.clientX - moveX; //www.divcss5.com divcss5
	var y = moveTop + evt.clientY - moveY;
	//x > 0 &&( x + w < iWidth) && y > 0 && (y + h < iHeight) 
	if ( ( x + w < iWidth) && y > 0  ) {
	msgObj.style.left = x + "px";
	msgObj.style.top = y + "px";
	}
	}
	};
	document.onmouseup = function () {
	if (moveable) {
	document.onmousemove = docMouseMoveEvent; //www.divcss5.com divcss5
	document.onmouseup = docMouseUpEvent;
	moveable = false;
	moveX = 0;
	moveY = 0;
	moveTop = 0;
	moveLeft = 0;
	}
	};
	}

	var closeBtn = tr.insertCell(-1);
	closeBtn.style.cssText = "cursor:pointer; padding:2px;background-color:" + titlebgcolor;
	closeBtn.innerHTML = "<div style='font-size:15pt; color:"+titlecolor+";height:28px'>×</div>";
	
	closeBtn.onclick = function(){
	document.body.removeChild(bgObj);
	document.body.removeChild(msgObj);
	}
	var msgBox = table.insertRow(-1).insertCell(-1);
	msgBox.style.cssText = "font:10pt '宋体';";
	msgBox.colSpan = 2;
	msgBox.innerHTML = msg;
	// 获得事件Event对象，用于兼容IE和FireFox
		function getEvent() {
		return window.event || arguments.callee.caller.arguments[0];
		}
}

function showOnline(a){
	 $("#onlinezcclnr").html("<p id='viewerPlaceHolder'style='width:99%;height:95%;display:block;margin-left: 14px;'></p>");
	 var onlineurl = $(a).attr("onlineurl");
	// var onlineurl =$('#userOnlineId').val();
	 var filetype=onlineurl.substring(onlineurl.lastIndexOf(".")+1);
	 var a="/audit/upload/"+onlineurl;
	 if(filetype=="jpg" || filetype=="png" || filetype=="JPG" || filetype=="bmp"){
		 var str="<img src='/audit/upload/"+onlineurl+"' style='height:500px;width:900px'></img>";
		 $("#viewerPlaceHolder").html(str);
	 }else{
		 var a="/audit/upload/"+onlineurl;
		// var a="/audit/upload/1494612113207.swf"; 
		 var fp = new FlexPaperViewer(    
	             '/audit/FlexPaper/swfFiles/FlexPaperViewer', 
	            //  对应于p 标签的id
	             'viewerPlaceHolder',   
	             { config : { 
	           //导入的.swf的路径,文件名称使用英语表示，中文时显示不出来，暂时未解决这个问题
	            SwfFile :escape(a),
	           //  SwfFile :escape('F:\\upload\\1431589237438.swf'),                
	             Scale : 1.6, 
	             ZoomTransition : 'easeOut',
	             ZoomTime : 0.5,
	             ZoomInterval : 0.2,
	             FitPageOnLoad : true,
	             FitWidthOnLoad : true,
	             PrintEnabled : true,// 是否可以打印  
	             FullScreenAsMaxWindow : false,
	             ProgressiveLoading : false,
	             MinZoomSize : 0.2,
	             MaxZoomSize : 10,
	             SearchMatchAll : false,
	             InitViewMode : 'Portrait',
	             
	             ViewModeToolsVisible : true,
	             ZoomToolsVisible : true,
	             NavToolsVisible : true,
	             CursorToolsVisible : true,
	             SearchToolsVisible : true,
	               localeChain: 'en_US'
	             }});
	 }
	 
	 
}

