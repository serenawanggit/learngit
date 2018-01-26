<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="js/ZYReportFormat2.js"></script>
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/base.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/inject.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
	
	<script type="text/javascript">
	var object1;
	var object2;
	var object3;
	var object4;
	var object5;
		$(function(){
			//formatEndYear("year");
			formatDate("year");
			Zyselects();
		});
		
		function byyear(){
		   Zyselects();
		}
		
		
		function Zyselects(){
			hideLodding();
			$("#table_2_1 tbody").empty();
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2_1_zrjs",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						object1=result;
						var html="";
						/* 	$.each(result,function(i,obj){
								html+="<tr><td>"+(obj[0]==''?'0':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'0':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'0':valueFormat(obj[2],1))+"</td>"+
								"<td>"+(obj[3]==''?'0':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'0':valueFormat(obj[4],1))+"</td>"+
								"</tr>";
							});
							$("#table_2_1 tbody").html(html); */
							$("#field1").html(result.length);
						}else{
						  object1=null;
						  $("#field1").html("");
						}
					},error:function(){
						alert("加载失败");
					}
			});
			
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2_1_wpjs",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						object2=result;
						var html="";
							$("#field2").html(result.length);
						}else{
						  object1=null;
						  $("#field2").html("");
						}
					},error:function(){
						alert("加载失败");
					}
			});
			
			$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2_1_js",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						object3=result;
						var html="";
						/* 	$.each(result,function(i,obj){
								html+="<tr><td>"+(obj[0]==''?'0':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'0':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'0':valueFormat(obj[2],1))+"</td>"+
								"<td>"+(obj[3]==''?'0':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'0':valueFormat(obj[4],1))+"</td>"+
								"</tr>";
							});
							$("#table_2_1 tbody").html(html); */
							$("#field3").html(result.length);
						}else{
						  object3=null;
						  $("#field3").html("");
						}
					},error:function(){
						alert("加载失败");
					}
			});
						$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2_1_fjs",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						console.info(result);
						if(data.length>2){
						object4=result;
						var html="";
						/* 	$.each(result,function(i,obj){
								html+="<tr><td>"+(obj[0]==''?'0':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'0':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'0':valueFormat(obj[2],1))+"</td>"+
								"<td>"+(obj[3]==''?'0':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'0':valueFormat(obj[4],1))+"</td>"+
								"</tr>";
							});
							$("#table_2_1 tbody").html(html); */
							$("#field4").html(result.length);
						}else{
						  object4=null;
						 $("#field4").html("");
						}
					},error:function(){
						alert("加载失败");
					}
			});
			
				$.ajax({
					url : "/CHART/analysisReport/analysis_findTableByCodeToThree.htm",
					type : "POST",
					async:false,
					data : {
						key : "ASDS_table2_1_zydtr",
						year : $("#year").val(),
						num:getNum(),
						code:getCode()
					},
					success : function(data){
						var result=eval("("+data+")");
						if(data.length>2){
						object5=result;
						var html="";
						/* 	$.each(result,function(i,obj){
								html+="<tr><td>"+(obj[0]==''?'0':obj[0])+"</td>"+
								"<td>"+(obj[1]==''?'0':obj[1])+"</td>"+
								"<td>"+(obj[2]==''?'0':valueFormat(obj[2],1))+"</td>"+
								"<td>"+(obj[3]==''?'0':obj[3])+"</td>"+
								"<td>"+(obj[4]==''?'0':valueFormat(obj[4],1))+"</td>"+
								"</tr>";
							});
							$("#table_2_1 tbody").html(html); */
							$("#field5").html(result.length);
						}else{
						  object5=null;
						  $("#field5").html("");
						}
					},error:function(){
						alert("加载失败");
					}
			});
			
		}
		
		function findTableDatas1(num){
		
						var table="<table id='tableData' style='width:99.8%;text-align:center;'  cellpadding='0' cellspacing='0'>"+
			"<thead><tr id='tr_1' style='background:#EEEEEE;font-weight:bold;'></tr></thead>"+
			"<tbody id='tbody_1'></tbody>"+
		"</table>";
					//弹窗
				var winWidth = window.innerWidth;
				var leftWidth = winWidth/2-580;
				$.ligerDialog.open({
					height : 400,
					width : 1005,
					content:table,
					top : 50,
					left : leftWidth,
					title : '查看',
					showMax : false,
					showToggle : true,
					showMin : false,
					isResize : true,
					slide : false,
					isHidden:false,
			//			fixedType:'se',
					buttons:[{text:'关闭',
						onclick:function(item, dialog){
							dialog.close();
						}
					}]
				});
		
				if(num==1){
				var str="";
		     	var html="";
				 str+="<td>工号</td>";
				 str+="<td>姓名</td>";
				 str+="<td>入校时间</td>";
				  str+="<td>单位号</td>";
				   str+="<td>单位名称</td>";
				    str+="<td>学历</td>";
				     str+="<td>最高学位</td>";
				       str+="<td>学缘</td>";
				         str+="<td>职称</td>";
				           str+="<td>任教专业时间</td>";
				             str+="<td>导师类别</td>";
				             	$("#tr_1").html(str);
				     	$.each(object1,function(i,obj){
								html+="<tr><td>"+(obj[0])+"</td>"+
								"<td>"+(obj[1])+"</td>"+
								"<td>"+(obj[2])+"</td>"+
								"<td>"+(obj[3])+"</td>"+
								"<td>"+(obj[4])+"</td>"+
								"<td>"+(obj[5])+"</td>"+
								"<td>"+(obj[6])+"</td>"+
								"<td>"+(obj[7])+"</td>"+
								"<td>"+(obj[8])+"</td>"+
								"<td>"+(obj[9])+"</td>"+
								"<td>"+(obj[10])+"</td>"+
								"</tr>";
							});  
							$("#tbody_1").html(html);      	
				}else if(num==2){
					var str = "<td>工号</td><td>姓名</td><td>聘任时间</td><td>聘期</td><td>单位号</td>";
					str += "<td>单位名称</td><td>学历</td><td>最高学位</td><td>职称</td>";
					$("#tr_1").html(str);
		     		var html="";
		     		$.each(object2,function(i,obj){
						html+="<tr><td>"+(obj[0])+"</td>"+
						"<td>"+(obj[1])+"</td>"+
						"<td>"+(obj[2])+"</td>"+
						"<td>"+(obj[3])+"</td>"+
						"<td>"+(obj[4])+"</td>"+
						"<td>"+(obj[5])+"</td>"+
						"<td>"+(obj[6])+"</td>"+
						"<td>"+(obj[7])+"</td>"+
						"<td>"+(obj[8])+"</td>"+
						"</tr>";
					}); 
					$("#tbody_1").html(html);
			  }else if(num==3){
				var str="";
		     	var html="";
				str+="<td>工号</td>";
				 str+="<td>姓名</td>";
				   str+="<td>单位名称</td>";
				    str+="<td>学历</td>";
				     str+="<td>最高学位</td>";
				       str+="<td>学缘</td>";
				             	$("#tr_1").html(str);
				     	$.each(object3,function(i,obj){
								html+="<tr><td>"+(obj[0])+"</td>"+
								"<td>"+(obj[1])+"</td>"+
								"<td>"+(obj[2])+"</td>"+
								"<td>"+(obj[3])+"</td>"+
								"<td>"+(obj[4])+"</td>"+
								"<td>"+(obj[5])+"</td>"+
								"</tr>";
							});  
							$("#tbody_1").html(html); 
				
				}else if(num==4){
				var str="";
		     var html="";
				str+="<td>工号</td>";
				 str+="<td>姓名</td>";
				   str+="<td>单位名称</td>";
				    str+="<td>学历</td>";
				     str+="<td>最高学位</td>";
				       str+="<td>学缘</td>";
				             	$("#tr_1").html(str);
				     	$.each(object4,function(i,obj){
								html+="<tr><td>"+(obj[0])+"</td>"+
								"<td>"+(obj[1])+"</td>"+
								"<td>"+(obj[2])+"</td>"+
								"<td>"+(obj[3])+"</td>"+
								"<td>"+(obj[4])+"</td>"+
								"<td>"+(obj[5])+"</td>"+
								"</tr>";
							});  
							$("#tbody_1").html(html); 
				
				}else if(num==5){
				var str="";
		     var html="";
												 str+="<td>工号</td>";
				 str+="<td>姓名</td>";
				   str+="<td>单位名称</td>";
				    str+="<td>学历</td>";
				     str+="<td>最高学位</td>";
				       str+="<td>学缘</td>";
				             	$("#tr_1").html(str);
				     	$.each(object5,function(i,obj){
								html+="<tr><td>"+(obj[0])+"</td>"+
								"<td>"+(obj[1])+"</td>"+
								"<td>"+(obj[2])+"</td>"+
								"<td>"+(obj[3])+"</td>"+
								"<td>"+(obj[4])+"</td>"+
								"<td>"+(obj[5])+"</td>"+
								"</tr>";
							});  
							$("#tbody_1").html(html); 
				
				}
				

	
		}
	</script>
	<style type="text/css">
		#tableData{
			border-bottom:1px #cdcdcd solid;
			border-left:1px #cdcdcd solid;
		}
		#tableData td{
			border-top:1px #cdcdcd solid;
			border-right:1px #cdcdcd solid;
			height:35px;
		}
	</style>
</head>

<body>
<%-- 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> 
 --%>	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>师资队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<!-- <table border="1" id="table_2_1">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">2.1专业教师分类人数构成比例</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year" onchange="javascript:Zyselects();">
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td rowspan="2">教师总数</td>
							<td colspan="2">专任教师</td>
							<td colspan="2">外聘教师</td>
						</tr>
						<tr>
							<td>人数</td>
							<td>比例(%)</td>
							<td>人数</td>
							<td>比例(%)</td>
						</tr>
					</thead>
					
					<tbody>
						
					</tbody>
				
				<tfoot>
				</tfoot>
			</table> -->
			<table id="table2-1">
				<thead>
					<tr>
						<td colspan="4">
							<h4 id="filename">2.1 学校教师情况及师生比</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year" onchange="byyear()">
											<option>2017/09/30</option>
											<option selected="selected">2016/09/30</option>
											<option>2015/09/30</option>
											<option>2014/09/30</option>
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<tr>
						<td colspan="3">本专业教师基本情况</td> 
					</tr>
					<tr>
						<td>教师分类</td> 
						<td>数量</td> 
						<td>查看</td>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<td>专任教师人数</td> 
						<td id="field1"></td>
						<td>
							<a href="javascript:void(0);" onclick="findTableDatas1(1)">查看</a>
						<!-- 显示字段（工号，姓名，入校时间，单位号，单位名称，学历，最高学位，学缘，职称，任教专业时间，导师类别） --></td>
					</tr>
					
					<tr>
						<td>外聘教师人数</td>
						<td id="field2"></td>
						<td><a href="javascript:void(0);" onclick="findTableDatas1(2)">查看</a><!-- 显示字段：（工号，姓名，聘任时间，聘期，单位号，单位名称，学历，最高学位，职称） --></td>
					</tr>
					
					<tr>
						<td>教授人数</td> 
						<td id="field3"></td>
						<td><a href="javascript:void(0);" onclick="findTableDatas1(3)">查看</a><!-- 显示字段（工号，姓名，单位名称，学历，最高学位，学缘） --></td>
					</tr>
					
					<tr>
						<td>副教授人数</td> 
						<td id="field4"></td>
						<td><a href="javascript:void(0);" onclick="findTableDatas1(4)">查看</a><!-- 显示字段（工号，姓名，单位名称，学历，最高学位，学缘） --></td>
					</tr>
					
					<tr>
						<td >专业带头人基本情况</td> 
						<td id="field5"></td>
						<td><a href="javascript:void(0);" onclick="findTableDatas1(5)">查看</a><!-- 显示字段（工号，姓名，单位名称，学历，最高学位，学缘） --></td>
					</tr>
					
				</tbody>
				
				<tfoot>
				</tfoot>
			</table>
		</div>
	</div>
	<!-- display:none;Z-index:999 -->
	<div id="showTableData" style="width:98%;height:100%;margin:8px;display:none;Z-index:999" >

	</div>
	
</body>
</html>
