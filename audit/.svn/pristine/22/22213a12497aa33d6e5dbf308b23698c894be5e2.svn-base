<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="/CHART/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="/CHART/js/ASDSReport/ASDSReportFormat.js"></script>
	<script type="text/javascript" src="/CHART/js/jquery.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/commonjs/common1.js"></script>
	<script type="text/javascript">
	validateLogin();
		$(function(){
			 // show
			showLodding();
			init();
			// hide
			hideLodding();
		});
		function init(){
			jQuery.ajax({
				url:"/CHART/auditing/auditing_searchAll.htm",
				data:{"versionsID":3},
				type:"POST",
				success:function(result){
					var data =  eval("("+result+")");
					var html="";
					if(data!=""){
						$(data).each(function(i,obj){
						    html+="<tr>";
			   				html+="<td>"+(i+1)+"</td>";
			   				html+="<td>"+obj[1]+"</td>";
			   				html+="<td>"+obj[2]+"</td>";
			   				html+="<td><a href='javascript:void(0);' onclick='searchSingleWord(this);'>下载</a> <a href='javascript:void(0);' onclick='deleteSingle(this)'>删除</a></td>";
			   			
			   				/* if( obj[1]=="word审核评估状态数据分析报告"){
			   					html+="<td><a href='javascript:void(0);' onclick='searchSingleWord(this);'>下载</a> <a href='javascript:void(0);' onclick='deleteSingle(this)'>删除</a></td>";
			   				}else{
			   					html+="<td><a href='javascript:void(0);' onclick='searchSingle(this);'>下载</a> <a href='javascript:void(0);' onclick='deleteSingle(this)'>删除</a></td>";
			   					//html+="<td><a href='javascript:void(0);' onclick='searchSingle(this);'>下载</a> <a href='javascript:void(0);' onclick='oneData();'>删除</a></td>";
			   				} */
			   				html+="<td style='display:none'>"+obj[0]+"</td>";
			   				html+="</tr>";
						 });
						 $("#auditinghistory tbody").html(html);
					}
				},error:function(){
					alert("异常");
				}
			});
		}
		
		function searchSingle(dateString){
			var dateString = $(dateString).parent().parent().find("td").eq(2).text();
			var html="";
			html="<form id=\"formid\" action=\""+getRootPath()+"/CHART/itextUpload\" method=\"post\"><input type=\"hidden\" id=\"filename\" name=\"filename\" value='审核评估状态数据分析报告'></input><input type=\"hidden\" id=\"dateString\" name=\"dateString\" value='"+dateString+"'></input></form>";
			$("body").append(html);
			$("#formid").submit();
			$("#formid").remove();
		}
		
		function searchSingleWord(dateString){
			var dateString = $(dateString).parent().parent().find("td").eq(2).text();
			var html="";
			html="<form id=\"formid\" action=\""+getRootPath()+"/CHART/poiWordUpload\" method=\"post\"><input type=\"hidden\" id=\"filename\" name=\"filename\" value='合格评估教学状态数据分析报告'></input><input type=\"hidden\" id=\"dateString\" name=\"dateString\" value='"+dateString+"'></input></form>";
			$("body").append(html);
			$("#formid").submit();
			$("#formid").remove();
		}
		
		//删除记录-成功后删除文件
		function deleteSingle(fileName){
			var fileName2 = $(fileName).parent().parent().find("td").eq(2).text();
			var id = $(fileName).parent().parent().find("td").eq(4).text();
			
			if(confirm("您确定要删除该记录吗？")){ 
				jQuery.ajax({
					async :false,
					url:"/CHART/auditing/auditing_deleteAuditingHistoryById.htm",
					type:"POST",
					data:{"id":id},
					success:function(result){
						if(result=="0"){
							alert("删除失败");
						}else{
							//删除文件
							deleteFile(fileName2);
						}
					},error:function(){
						alert("异常");
					}
				});	
				
			}
			
		}
		
		function deleteFile(fileName2){
			jQuery.ajax({
				async :false,
				url:getRootPath()+"/CHART/DeleteSinglePdf",
				type:"POST",
				data:{"fileName":fileName2},
				success:function(result){
// 					if(result!="error"){
// 						alert("删除成功");
// 					}else{
// 						alert("删除error");
// 					}
					init();
				},error:function(){
					alert("异常");
				}
			});	
		}
		
		function oneData(){
			alert("受保护的数据");
		}
		function getRootPath() {
			//获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
			var curWwwPath = window.document.location.href;
			//获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
			var pathName = window.document.location.pathname;
			var pos = curWwwPath.indexOf(pathName);
			//获取主机地址，如： http://localhost:8083
			var localhostPaht = curWwwPath.substring(0, pos);
			//获取带"/"的项目名，如：/uimcardprj
			var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
			return localhostPaht;
		}
	</script>
</head>
  
  <body>
  <div class='loadding'><img src='/CHART/images/lodding.gif'></img></div>
  <div class="tb_main">
   	<table id="auditinghistory">
   		<thead>
   			<tr>
   				<td>序号</td>
   				<td>文件名</td>
   				<td>更新时间</td>
   				<td>操作</td>
   			</tr>
   		</thead>
   		<tbody>
   		</tbody>
   	</table>
 	</div>
  </body>
</html>
