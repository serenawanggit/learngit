var levelid;

$(function(){
	validateLogin();
	/*alert("温馨提示：IE浏览器版本低于IE9时，会造成部分功能无法使用！。");*/
	levelid=$("#thisid").val();
	showlookreportdate();
	
});
var titlethree;
var alldata;
var titletwo;
function showlookreportdate(){
	$.ajax({
		 url:"/audit/lookreport/findlookreportdata.do",
	     type:"POST",
	     async: false,
	     data:{"id":levelid},
	     dataType:"json",
	     success:function(data){
	    	var a=eval("("+data+")");
	    	var b=a.data;
	    	 alldata=b.alldata;
	    	 titletwo=b.titletwo;
	    	 titlethree=b.titlethree;
	    	 titlefour=b.titlefour;
	    	 $("#onename").text(alldata[0].onename);
	    	 var str="";
	    	 if(titletwo[0][0]!=0){
	    		 for ( var i = 0; i < titletwo.length; i++) {
	 				str+="<div a="+titletwo[i][0]+" onclick='showthree(this)'><span>"+titletwo[i][1]+"</span></div>"
	 			 }
	 	    	 $("#main_left_conter").html(str);
	 	    	 var main_left_conter=$("#main_left_conter").children("div").get(0);
	 	    	$(main_left_conter).click();
	    	 }
	     },
	     error:function(){
	    	 alert("加载数据失败...");
	     }
	})
}

function showTitleThree(element){
   var twoid=	$(element).attr("a");
	$(element).siblings().attr("style","height: 45px;background-color: #D9E0E6;cursor: pointer;")
	$(element).attr("style","height: 45px;background-color: white;cursor: pointer;");
	 var str="";
	 console.info(titlethree);
	for ( var i = 0; i < titlethree.length; i++) {
		if(twoid==titlethree[i][2]){
		  str+=titlethree[i].id;
		  str+="<li role='presentation' class=''  style='background-color: #D9D9D9;border-radius: 8px 8px 0 0;' >"
		  str+="<a href='#' aria-controls='home' role='tab' data-toggle='tab' onclick='showthree(this)' a="+titlethree[i][0]+">"+titlethree[i][1]+"</a></li>";
		}
	}
	 /*for ( var i = 0; i < alldata.length; i++) {
			if(twoid==alldata[i].twoid){
			  str+=alldata[i].id;
			  str+="<li role='presentation' class=''  style='background-color: #D9D9D9;border-radius: 8px 8px 0 0;' >"
			  str+="<a href='#' aria-controls='home' role='tab' data-toggle='tab' onclick='showthree(this)' a="+alldata[i].id+">"+alldata[i].filename+"</a></li>";
			}
		}*/
	$("#tabul").html(str);
	var c=$("#tabul").children("li").get(0);
	$(c).attr("class","active");
	var cc="当前位置："+$(element).find("span").text();
	$("#therename").html(cc);
	$("#fourtable").html("");
	$(c).find("a").click();
}
function showthree(element){
	$("#tabul").html(str);
	var c=$("#tabul").children("li").get(0);
	$(c).attr("class","active");
	var cc="当前位置："+$(element).find("span").text();
	$("#therename").html(cc);
	$("#fourtable").html("");
	$(c).find("a").click();
	 var threeid=	$(element).attr("a");
	 var str="";
	 console.info(titlethree);
	 for ( var i = 0; i < titlethree.length; i++) {
		 if(threeid==titlethree[i][2]){
			 if(i%2==0){
				 str+="<tr>";
				 str+="<td style='background-color: #E7E7E7;cursor: pointer;' onclick=\"alertWin('"+titlethree[i][1]+"','',1200,650);showOnline(this);\" a="+titlethree[i][0]+">"+titlethree[i][1]+"</td>";
				 str+="</tr>";
			 }else{
				 str+="<tr>";
				 str+="<td style='background-color: #FFFFFF;cursor: pointer;' onclick=\"alertWin('"+titlethree[i][1]+"','',1200,650);showOnline(this);\" a="+titlethree[i][0]+">"+titlethree[i][1]+"</td>";
				 str+="</tr>";
			 }
		 }
	 }
	$("#fourtable").html(str);
	
}
/*function showthree(element){
	 var threeid=	$(element).attr("a");
	 var str="";
	 console.info(titlefour);
	 for ( var i = 0; i < titlefour.length; i++) {
		 if(threeid==titlefour[i][2]){
			 if(i%2==0){
				 str+="<tr>";
				 str+="<td style='background-color: #E7E7E7;cursor: pointer;' onclick=\"alertWin('"+titlefour[i][1]+"','',1200,650);showOnline(this);\" a="+titlefour[i][0]+">"+titlefour[i][1]+"</td>";
				 str+="</tr>";
			 }else{
				 str+="<tr>";
				 str+="<td style='background-color: #FFFFFF;cursor: pointer;' onclick=\"alertWin('"+titlefour[i][1]+"','',1200,650);showOnline(this);\" a="+titlefour[i][0]+">"+titlefour[i][1]+"</td>";
				 str+="</tr>";
			 }
		 }
	 }
	$("#fourtable").html(str);
}*/


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
	
	var nr = document.createElement("div");
	msgObj.appendChild(nr);
	nr.style.cssText="width:20%;height:94%;float:left;overflow:auto;margin-top:5px;border:1px solid #E7E7E7";
	$(nr).attr("id","onlinezccl");
	
	var nr1 = document.createElement("div");
	msgObj.appendChild(nr1);
	nr1.style.cssText="width:79%;height:96%;float:left;margin-top:5px;";
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
 function showOnline(element){
	 var id= $(element).attr("a");
	/* var str="<div class='col-md-10 button-znj' style='padding-top: 5px' >";
		 str+=" <ul class='nav nav-tabs nav-justified tab-znj' role='tablist' id='tabul2'>";
		 for ( var i = 0; i < alldata.length; i++) {
			 if(id==alldata[i].filedparentid){
				 var b=alldata[i].filename;
				  var a=b.substring(0,b.lastIndexOf("."));
				  str+="<li role='presentation' class=''  style='background-color: #D9D9D9;border-radius: 8px 8px 0 0;' >"
				  str+="<a href='#' aria-controls='home' role='tab' data-toggle='tab' onclick=\"showzccl('"+alldata[i].onlinefilename+"',this)\" a="+alldata[i].fileid+">"+a+"</a></li>";
			 }
		 }*/
	 var str=" <table class='table table-bordered table-znj'>";
		 for ( var i = 0; i < alldata.length; i++) {
			 if(id==alldata[i].filedparentid){
				     var b=alldata[i].filename;
				     var a=b.substring(0,b.lastIndexOf("."));
					 if(i%2==0){
						 str+="<tr>";
						 str+="<td style='background-color: #E7E7E7;cursor: pointer;' onclick=\"showzccl('"+alldata[i].onlinefilename+"',this)\" a="+alldata[i].fileid+">"+b+"</td>";
						 str+="</tr>";
					 }else{
						 str+="<tr>";
						 str+="<td style='background-color: #FFFFFF;cursor: pointer;' onclick=\"showzccl('"+alldata[i].onlinefilename+"',this)\" a="+alldata[i].fileid+">"+b+"</td>";
						 str+="</tr>";
					 }
				 /* str+="<a href='#' aria-controls='home' role='tab' data-toggle='tab' onclick=\"showzccl('"+alldata[i].onlinefilename+"',this)\" a="+alldata[i].fileid+">"+a+"</a></li>";*/
			 }
		 }
		 str+="</table></div>";
	// str+="	</ul></div><input type='button' style='margin-top: 10px;' value='下载' onclick='downreport()'/>";
	 $("#onlinezccl").html(str);
	 $("#onlinezcclnr").html("<p id='viewerPlaceHolder'style='width:95%;height:95%;display:block;margin-left: 14px;'></p>");
	// $("#onlinezcclnr").html(" <video src='F:/upload/1431589237438.swf'controls/>");
	 var c=$("#tabul2").find("tb")[0];
	 $(c).attr("class","active");
	 $(c).click();
 }
 function  showzccl(onlineurl,element){
	 //var style = $(element).attr("style","background-color: #66CD00;cursor: pointer;");//"background-color: #E7E7E7;cursor: pointer;"
	 var fileid= $(element).attr("a");
/*	 var flag = true;
		flag = isFileExist(onlineurl);
		if(!flag){
			var index = layer.confirm('抱歉，由于文件编码原因，当前文件无法在线预览，您可以下载后查看或浏览其它文件,是否下载？', {
				  btn: ['确定','取消'] //按钮
				}, function(){
					downreport(fileid);
					layer.close(index);
				}
			);
		}else{*/
		
	 //'/audit/upload/<%=(String)request.getParameter("wj")%>'
	
	 /*$.ajax({
		 url:"/audit/lookreport/lookcount.do",
	     type:"POST",
	     async: false,
	     data:{"id":fileid},
	     dataType:"json",
		 success:function(){
			 
		 },
		 error:function(){
			 
		 }
	 });*/
	 
	 var filetype=onlineurl.substring(onlineurl.lastIndexOf(".")+1);
	 if(filetype=="jpg" || filetype=="png" || filetype=="JPG" || filetype=="bmp"){
		 var str="<img src='../audit/upload/"+onlineurl+"' style='height:600px;width:700px'></img>"
		 $("#viewerPlaceHolder").html(str);
	 }else{
		 var a="/audit/upload/"+onlineurl;
		 var fp = new FlexPaperViewer(    
	             '/audit/FlexPaper/swfFiles/FlexPaperViewer', 
	            //  对应于p 标签的id
	             'viewerPlaceHolder',   
	             { config : { 
	           //导入的.swf的路径,文件名称使用英语表示，中文时显示不出来，暂时未解决这个问题
	           SwfFile :escape(a),
	           //  SwfFile :escape('/upload/1431589237438.swf'),                
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
		/*}*/
 }
 
//判断在线预览的swf格式文件是否存在
 function isFileExist(onlineurl){
	 var isExist;
	var url = "/audit/supportMaterialLibrary/isFileExist.do?onlineUrl="+onlineurl;
	$.ajax({
		 url:url,
		 async : false,
		 type : 'get',
		 contentType : 'application/json',
		 //data : str,
		 error:function(data){
			 layer.msg("请求失败");
		 },
		 success:function(data){
			 var obj = eval("("+data+")");
			 isExist = obj; 
		 }
	});
	return isExist;
}
 function downreport(id){
	//var id=$("#tabul2").find("li[class=active]").find("a").attr("a");
	var  downurl="/audit/lookreport/downlookreportdata.do?downurl="+id;
/*	for ( var i = 0; i <alldata.length; i++) {
	   if(id== alldata[i].fileid){
		   downurl+=alldata[i].downurl;
	   }
	}
*/	$("#zcclDown").attr("action",downurl);
	$("#zcclDown").submit();
 }
 
 function goback(){
	 window.location.href="/CHART/expertnavigation.jsp";
 }
 
 function tuichu(){
	 window.location.href="/logout";
 }
