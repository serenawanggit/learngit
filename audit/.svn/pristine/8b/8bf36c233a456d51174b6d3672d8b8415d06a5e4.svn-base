<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    <title>数据跟踪</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css"> /audit/page/zenith/staticPage/mians_data.jsp
	-->
	
	<script src="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/js/core/base.js" type="text/javascript"></script>
	
	<script src="${pageContext.request.contextPath }/js/ligerui/lib/jquery/jquery-1.9.0.min.js" type="text/javascript"></script>
    <link href="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
    <script src="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/js/plugins/ligerDateEditor.js" type="text/javascript"></script>

	<script src="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/js/core/base.js" type="text/javascript"></script>
	<link href="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css"/>
	<script src="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/ligerui/lib/json2.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/page/guanliyuan/staticPage/js/mains_data.js"></script>

	
	<style type="text/css">
		.typeSelect{
			border: solid 1px #C3C3C3;
			appearance:none;
			-moz-appearance:none;
			-webkit-appearance:none;
			background: url("/TQCC/page/roleDataShow/images/select_down.png") no-repeat scroll right center transparent;
			padding-right: 14px;
			width:230px;
			height:32px;
		}
		.shrSelect{
			border: solid 1px #C3C3C3;
			appearance:none;
			-moz-appearance:none;
			-webkit-appearance:none;
			background: url("/TQCC/page/roleDataShow/images/select_down.png") no-repeat scroll right center transparent;
			padding-right: 14px;
			width:190px;
			height:32px;
		}
		.dateSelect{
			border: solid 1px #C3C3C3;
			appearance:none;
			-moz-appearance:none;
			-webkit-appearance:none;
			background: url("/TQCC/page/roleDataShow/images/select_date.png") no-repeat scroll right center transparent;
			padding-right: 14px;
			width:200px;
			height:32px;
		}
		.checkbox {
			 width: 30px;
			 height: 30px;
			 padding: 0 5px 0 0;
			 display: block;
			 clear: left;
			 float: left;
		}
		#data tr{
			height:40px;
			border: solid 1px #D2D2D2;
		}
		#data th{
			text-align:center;
			font-weight:bold;
		}
		#data tr{
			text-align:center;
		}
		#fixedLayer { 
			position:fixed; 
			left: 42%; 
			top: 36%; 
			width:250px; 
			height:200px;
			line-height:30px; 
		} 
		#sh_tab3 td{
			font-weight:normal;
			height:40px;
		}
	</style>
	
	<style type="text/css">
		.div_tab table{border-collapse:collapse;border:none;}
		.div_tab table td{border:solid #BDBCBC 1px;line-height:25px;font-size:15px;text-align:center;font-weight:bold;}
		.div_tab table th{border:solid #BDBCBC 1px;line-height:25px;font-size:15px;text-align:center;font-weight:bold;color:red;}
	</style>
	
  </head>
  
  <body>
  	<div id="fixedLayer"><img src="/CHART/images/dengdai_lv_se.gif"></img></div> 
	<div class="card">
		<div class="card-body">
			<center>
		    	<div id="main" style="width:98%;margin-top:30px">
			    	<div id="check">
			    		<center>
			    			<table cellspacing="0" >
				    			<tr>
				    				<td width="50px"><font id="fName" style="font-weight:bold;">专业：</font> </td>
				    				<td width="295px"><select class="typeSelect" id="parentType"></select></td>
				    				<!-- <td style="width:190px"><input type="text" class="grayTips" id="tableName" style="border: solid 1px #76D7C5;width:190px;height:32px"/>
				    				<td width="130px"><a href="javascript:void(0);" onclick="checkSpecialty()"><img id="lookData" src="/audit/page/guanliyuan/staticPage/img/search_2.png"></a></td> -->
				    				<td width="50px"><font style="font-weight:bold;">年份：</font></td>
				    				<td width="255px">
				    					<select class="dateSelect" id="txt2"><option>2014</option><option>2015</option><option selected="selected">2016</option><option>2017</option><option>2018</option><option>2019</option><option>2020</option></select>
			  						</td>
			  						<td width="50px"><font style="font-weight:bold;">选择：</font> </td>
				    				<td width="255px">
				    					<select class="shrSelect" id="pgry">
				    						<option>自评人</option>
					    					<option>审核人</option>
					    					<option>网评人</option>
					    					<option>考察专家</option>
					    					<option>考察组长</option>
				    					</select>
				    				</td>
				    			</tr>
				    		</table>
			    		</center>
			    	</div>
			    	
			    	<div style="border:1px solid red;width:96%;margin-top:23px;"></div>
			    	<div id="middle" style="width:96%;margin-top:0px;border:1px solid #D3D3D3;overflow-x:scroll;">
			    		<table style="margin:0px;padding:0px;" cellpadding="0" border="0" cellspacing="0" width="100%">
			    			<tr>
			    				<td width="46%" valign="top">
			    					<div id="zpTab" class="div_tab">
						    			<table id="tab1" style="display:inline;table-layout:fixed;width:100%" align="left" border="1">
						    				<!-- <tr style='background-color:#E6E6E6;height:40px;text-align:center;boder-right:0px;'>
						    					<td id="loadData_" style="font-size:20px;font-weight:none;boder-right:0px;">正在加载数据，请稍等...</td>
						    				</tr> -->
						    				<thead width="100%"></thead>
						    				<tbody></tbody>
						    			</table>
						    		</div>
			    				</td>
			    				<td  valign="top" width="54%">
			    					<div id="zpTab" class="div_tab">
						    			<table id="sh_tab3" style="height:100%;width:100%" align="left" border="0">
						    				<!-- <tr style='background-color:#E6E6E6;height:40px;text-align:center;border-left:0px;'>
						    					<td id="loadData_2" style="font-size:20px;font-weight:none;border-left:0px;width:100%;"></td>
						    				</tr> -->
						    			</table>
						    		</div>
			    				</td>
			    			</tr>
			    		</table>
			    	</div>
			    	
			    	
			    	
			    	<div style="width:96%;margin-top:23px;border:1px solid #D3D3D3;">
			    		<div style="border:1px solid red;width:100%"></div>
			    		<div id="opinion" class="div_tab">
			    			<table id="suggestion" width="100%">
			    			</table>
			    		</div>
			    	</div>
			    	
		    	</div>
		    </center>
		</div>
	</div>
  
    <br><br><br><br><br><br><br><br>
  </body>
</html>

	<script type="text/javascript">
		$(function(){
			$("#fixedLayer").hide();
			var str = "请输入关键字...";
			$("#tableName").css("color","#7D7D7D");
			$("#tableName").val(str);
			$("#tableName").focus(function(){
				var v = this.value;
				if($("#tableName").val()==str){
					$("#tableName").css("color","#000");
					$("#tableName").val("");
				}
			}).blur(function(){
				if($("#tableName").val()==""){
					$("#tableName").css("color","#7D7D7D");
					$("#tableName").val(str);
				}
			});
			
		});
	</script>
