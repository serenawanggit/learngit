<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>任务更新</title>
<style type="text/css">
    *{margin:0px; padding: 0px; font-size: 12px;font-family:Arial, Helvetica, sans-serif;}
    html{width: 100%;height: 95%;}
    body{width: 100%;height: 100%;margin:0;border:none;
	background-repeat:repeat-x;font-size:12px;
	font-family:Arial, Helvetica, sans-serif;
	background:url(<%=basePath %>/images/centerbk.png);
	   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	   -moz-background-size:100% 100%;
	}
    a{text-decoration:none;}
/*     div{border: 1px solid red;} */
    li {list-style-type: none;float: left;}/**li标签去掉前面的点**/
    td {text-align: center; border-width: 1px;padding: 8px; border-style: solid; border-color: #DADADA;background-color: #ffffff;}
</style>
    <script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/Calendar.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
</script>
  </head>
  
  <body>
	<div style="height:28px; margin-left: 10px; margin-top: 10px; ">
   		<span style='background-color:#568E59;display:inline-block;height:28px;line-height:28px;color:white;padding:0px 15px;'>任务更新 >>任务详细</span>
	</div>
<!--     <table style="width:100%;" cellpadding='0' cellspacing='0'> -->
<!--        <td style='height:40px;' align='left'> -->
<!--         <span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'> -->
<!--      	<span style='display:inline-block;height:28px;line-height:28px;'>质量任务管理 >> 任务管理</span> -->
<!--     </table> -->
    <div class="box" style="height: 91%; width：100%">
    	<div class="box1" style="width:96%; height:7%; margin-left: 2em;margin-top: 1.5%;">
    		<ul>
    			 <li style="width: 90px; font-size: 12px;font-family:Arial, Helvetica, sans-serif;" >质量任务名称 ：</li>
                <li style="width: 20em; font-size: 12px;font-family:Arial, Helvetica, sans-serif;" >${zlRw.zlrwmc}</li>
                <li style="width:130px;margin-left:85px">最快的进度(${organizateName})：</li>
                <li style="width:340px;">
                     <canvas id="canvas" width="180px" height="15px" style="border:1px solid #c3c3c3;">
                           </canvas>
                                <script>
                                var fastXh = eval("(${fastXh}/${zlRw.jdCount})*200");
                                var c=document.getElementById("canvas");
                                var ctx=c.getContext("2d");
                                ctx.fillStyle="#8CBC4D";
                                ctx.fillRect(0,0,fastXh,75);
                                </script>
                </li>
			</ul>
    	</div>
    	<div class="box2" style="width:96%; height:8%; margin-left:22px;">
    		<ul>
    			<li style="width: 90px; font- size: 12px;font-family:Arial, Helvetica, sans-serif; " >参与部门数 ：</li>
                <li style="width: 325px; font-size: 12px;font-family:Arial, Helvetica, sans-serif; " >${zlRw.organizeCount}</li>
                <li style="width: 130px;">我的进度：</li>
                <li style="width: 340px;height:15px;">
    			    <canvas id="myCanvas" width="180px" height="15px" style="border:1px solid #c3c3c3;">
					</canvas>
						<script>
						var myXh = eval("(${myXh}/${zlRw.jdCount})*200");
						var c=document.getElementById("myCanvas");
						var ctx=c.getContext("2d");
						ctx.fillStyle="#8CBC4D";
						ctx.fillRect(0,0,myXh,75);
						</script>
				</li>
    		</ul>    		
    	</div>
    	<div class="box3" style="width:96%; height:5%; margin-left: 3em;";>
    		<ul>
    			<li style="width:100px;">计划阶段 (${zlRw.jdCount})</li>
       		</ul>   
    	</div>
    	<div class="box4" style="float:left;width:96%; height:78%;margin-left: 3em;">
    		<table id="jdRwList" style="background-color:#FFF; color:#333333;border-width: 1px;border-collapse: collapse;">
    			
    		</table>
    		<table style='width:100%;display:none' cellpadding='0' id="pageTb" >
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:40px;'>
								<img value='1_"+json.totalPage+"' onclick='jumpToFirstPage();'
									src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='/audit/images/pgicon-first.png;'"
										onmouseout="this.src='/audit/images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='jumpToPreviousPage()'
									src='/audit/images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-pre.png;'"
										onmouseout="this.src='/audit/images/pgicon-pre_press.png;'">
								<span id="pageNumer" style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>${page.currentPage}/${page.countPage}页</span>
								<img value='3_"+json.totalPage+"' onclick='jumpToNextPage()'
										src='/audit/images/pgicon-next_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-next.png;'"
										onmouseout="this.src='/audit/images/pgicon-next_press.png;'">
								<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
								line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
								<img value='4_"+json.totalPage+"' onclick='jumpToPage()'
										src='/audit/images/pgicon-last_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-last.png'"
										onmouseout="this.src='/audit/images/pgicon-last_press.png'">
								</span>
								</td>
							</tr>
						</tbody>
					</table>
    	</div>
    	
    </div><br>
    <input type="hidden" id="zlRwId" value="${zlRw.id}">
    <input type="hidden" id="thisPage" value="1"/>
  </body>
    <script type="text/javascript">
  $(document).ready(function () {
     getPage(1);
     });
  function getPage(pageNumber){
  var id=$("#zlRwId").val();
     $.ajax({
            url:"<%=basePath%>/userZlRwController/userJdTaskList.do?currentPage="+pageNumber+"&id="+id,
            type : "post",
            dataType : "json",
            error:function(){
                 alert("保存失败,未知原因");
            },
            success:function(dataString){
            	var data = eval("("+dataString+")");
                var list = data.data.list;
                $("#jdRwList").html("");
                var head = "";
                head += "<tr align='center' style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>"+
                "	<td style='background-color: #E6E6E6;width: 3em;'>排序</td>";
	           head += "<td style='background-color: #E6E6E6;width: 20em;'>阶段任务名称</td>";
	           head +=    "<td style='background-color: #E6E6E6;width: 12em;'>任务范围</td>";
	           head +=    "<td style='background-color: #E6E6E6;width: 10em;'>开始时间</td>";
	           head +=    "<td style='background-color: #E6E6E6;width: 10em;'>结束时间</td>";
	           head +=    "<td style='background-color: #E6E6E6;width: 10em;'>参与部门</td>";
	           head +=    "<td style='background-color: #E6E6E6;width: 12em;'>操作</td></tr>";
                $("#jdRwList").append(head);
                for(var i=0;i<list.length;i++){
                      var record = list[i];
                      var html= "";
                      html += "<tr><td>"+record.rwxh+"</td>";
                      html += "<td>"+record.jdrwmc+"</td>";
                      if(record.rwfw ==1){
                           html += "<td>学院或部门</td>";
                      }else if(record.rwfw ==2){
                           html += "<td>院系</td>";
                      }else{
                           html += "<td>专业</td>";
                      }
                      html += "<td>"+record.startTime+"</td>";
                      html += "<td>"+record.endTime+"</td>";
                      
                      html += "<td>"+record.organizeCount+"</td>";
                      if("${myXh}" < record.rwxh && record.userCount == 1){
                      		html += "<td><input type='submit' onclick='updateTask("+record.id+")' value='更新任务' style='color:#FFFFFF; border-width: 0px;width:60px;height:26px; background-color:#6DA770;'></td></tr>";    
                      }else if("${myXh}" >= record.rwxh && record.userCount == 1){
                      		html += "<td>任务已完成</td></tr>";    
                      }else{
                      		html += "<td>不可操作</td></tr>";   
                      }
                           
                     $("#jdRwList").append(html);
                }
                 $("#pageNumer").html(data.data.currentPage+"/"+data.data.countPage+"页");
                $("#thisPage").val(data.data.currentPage);
                if(data.data.countPage <= 1){
		 			$("#pageTb").hide();
			 	}else{
			 		$("#pageTb").show();
			 	}
            }
      });
     
}


function findPageByMC(){
     getPage();
}
//跳转方法
function jumpToFirstPage(){
     getPage(1);
}
function jumpToNextPage(){
     var thisPage = parseInt($("#thisPage").val(),10);
     getPage(thisPage+1);
}
function jumpToPreviousPage(){
     var page;
     var thisPage = parseInt($("#thisPage").val(),10);
     if(thisPage != 1){
           page = thisPage-1;
     }else{
           page = 1;
     }
     getPage(page);
}
function jumpToPage(){
     var page = $("#pagenotext").val();
     if(page == ''){
           alert("请输入跳转页面后再点击跳转按钮");
           return;
     }
     getPage(page);
}
 
function updateTask(id){
           $.ajax({
            url:"<%=basePath%>/userZlRwController/checkUpdate.do?id="+id,
            type : "post",
            dataType : "json",
            error:function(){
                 alert("网络异常，请重试");
            },
            success:function(dataString){
            	var data = eval("("+dataString+")");
                if(data.ok){
                      window.location.href = "<%=basePath%>/userZlRwController/userTaskDetails.do?id="+id;
                }else{
                      alert(data.comment);
                }
            }
           });
}
 
  </script>
  
  
</html>
