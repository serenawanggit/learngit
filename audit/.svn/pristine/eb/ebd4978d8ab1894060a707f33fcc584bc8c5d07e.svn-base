(function($){
		lzrWindow={		
				closewindow:function(obj){
					$("#lzrwindow").remove();
				},
				//type:1 自定义 默认不是自定义
				//title: 标题，
				//messge: 内容，
				//clickClose: true  自动关闭  false或者不填表示点击关闭
				//width: 弹出窗体宽度 单位px
				//height: 弹出船体高度 单位px
				//bottom: 绝对定位下 % 
				//left: 绝对定位左 %
				alert:function(obj){
					
					$("#lzrwindow").remove();
					//默认框
					//如果传进来的是字符串
					if(obj!=null&&typeof(obj)=='string'){
						 var str ="<div id='lzrwindow'>"+
												//头box
										        "<div id='lzrwindowHead'>";
														str+= "<span class='lzrwindowTitle'>提示</span>";
										  str+= "</div>";
										//内容box
										if(obj!=null){
											str+= "<div id='lzrwindowContent'>"+obj+"</div>"
										}
						str+=  "</div>";
					}else if(obj==null||obj.type!=1){
						  var str ="<div id='lzrwindow'>"+
												//头box
										        "<div id='lzrwindowHead'>";
														str+= "<span class='lzrwindowTitle'>提示</span>";
														//如果不是自动关闭
														if(obj!=null&&obj.clickClose==true){
															str+=	"<a  href='javascript:lzrWindow.closewindow(this)' class='lzrbtn_close'></a>"
														}
										  str+= "</div>";
										//内容box
										if(obj==null||obj.messge==undefined){
											str+= "<div id='lzrwindowContent'>操作成功!</div>"
										}else if(obj.messge!=null){
											str+= "<div id='lzrwindowContent'>"+obj.messge+"</div>"
										}
						str+=  "</div>";
					}else{
						//自定义框 
						var str ="<div id='lzrwindow' style=\"width:"+obj.width+"px; height:"+obj.height+"px ;bottom:"+obj.bottom+"%;left:"+obj.left+"%;   \">"+
												//头box
										        "<div id='lzrwindowHead'>";
														if(obj!=null&&obj.title!=undefined){
															str+= "<span class='lzrwindowTitle'>"+obj.title+"</span>";
														}else{
															str+= "<span class='lzrwindowTitle'>提示</span>";
														}
														//如果不是自动关闭
														if(obj!=null&&obj.clickClose==true){
															str+=	"<a  href='javascript:lzrWindow.closewindow(this)' class='lzrbtn_close'></a>"
														}
										  str+= "</div>";
										//内容box
										if(obj==null||obj.messge==undefined){
											str+= "<div id='lzrwindowContent'>操作成功!</div>"
										}else if(obj.messge!=undefined){
											str+= "<div id='lzrwindowContent'>"+obj.messge+"</div>"
										}
						str+=  "</div>";
					}

					$("body").append(str);
					//如果默认 自动取消
					if(obj==null||obj.clickClose==undefined){
						setTimeout(function(){
							$("#lzrwindow").fadeOut(function(){
								$(this).remove();
							});
						},1500); 
					}
				}
		};
})(jQuery)







