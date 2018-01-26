<%@page contentType="text/html; charset=UTF-8"%>
<%@taglib uri="/WEB-INF/struts-tags.tld" prefix="s"%>
<%@include file="../../../common/lib.jsp"%>
<script type="text/javascript" src="/TQCC/page/supportMaterialLibrary/layer/layer.js"></script>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<style type="text/css">
table.gridtable {
	font-family: verdana,arial,sans-serif;
	font-size:15px;
	color:#333333;
	border-width: none;
	
}
table.gridtable th {
	border-width: none;
	padding: 0px;
	
}
table.gridtable td {
    text-align:center
	border-width: none;
	padding: 16px;
	
}
<style type="text/css">
body,html {
	width: 100%;
	height: 100%;
	margin: 0;
	border: none;
	background-image: url(TQCC/images/centerbk.png);
	background-repeat: repeat-x;
	background-color:#f0f0f0;
	font-size: 12px;
	font-family: Arial, Helvetica, sans-serif;
}
#point img{
	cursor: pointer;
}
</style>
</style>
<title>指标体系维护</title>
<link href="/TQCC/css/tsk.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="/TQCC/css/zTreeStyle/zTreeStyle.css" type="text/css">

<script type="text/javascript" src="/audit/page/zenith/staticPage/newMain/js/dataExtract.js"></script>
<script type="text/javascript" src="/audit/page/zenith/staticPage/newMain/js/supportUpLoad.js"></script>
<%-- <script type="text/javascript" src="/TQCC/js/ajaxfileupload.js"></script>
<script type="text/javascript" src="/TQCC/js/jquery.fileupload.js"></script>
<script type="text/javascript" src="/TQCC/js/common.js"></script> --%>

<script type="text/javascript" src="/TQCC/js/jquery.js"></script>
<script type="text/javascript" src="/TQCC/js/ztree/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript" src="/TQCC/js/ztree/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript" src="/TQCC/js/ztree/jquery.ztree.exedit-3.5.js"></script>
<script type="text/javascript" src="/audit/page/zenith/staticPage/newMain/js/estimate_action.js"></script>
<script type="text/javascript" src="/audit/page/zenith/staticPage/newMain/js/createpic.js"></script>

   <%--   <script type="text/javascript" src="/audit/FlexPaper/js/jquery.js"></script> --%>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash.js"></script>
		<script type="text/javascript" src="/audit/FlexPaper/js/flexpaper_flash_debug.js"></script>

<script type="text/javascript">

//---关闭
function closeYS(){
	$("#md").fadeOut("fast");
	$("#mask").css({ display: 'none' });
}


function closeYS2(){
	$("#mdn").fadeOut("fast");
	$("#mask").css({ display: 'none' });
}
</script>
</head>
<body style="background-color:#f0f0f0;">
<input type='hidden' id='userOnlineId'>;
<div class="mask" ></div>
<%-- 	<%@include file="/page/common/leftbar.jsp"%>
	<input type="hidden" value="135" id="pid" />
	<input type="hidden" value="136" id="sid" />   --%>
	

	
		<div style="width:98%;height:85%;margin-left:10px;margin-top:30px;">
			<div style="width:20%;height:100%;float:left">
				<%-- <div style="width:100%;height:8%;">
					<span style="float:left;">材料管理目录</span> <a  href="javascript:deletejd()"
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
				</div> --%>
				
			
				<div style="background-color:white;width:98%;height:90%;overflow:auto;border: solid 1px #ccc;">
					<ul id="treeDemo1" class="ztree" style="">
					</ul>
				</div>
			</div>
			
			<div style="width:79%;height:100%;float:left;" id="rightbar">
				
			<%-- <div style="position:relative;height:35px;right:0%;" id="point">
				 
				 <span style="display:inline;margin-left:40px;float:left" id="img1">
				 <img  src="/TQCC/images/supportFile/up_1.png">
				 </span>
				 
				 <span style="display:inline;margin-left:40px;float:left"  id="img3">
				 <img  src="/TQCC/images/supportFile/up_2.png">
				 </span>
				 
				 <span style="displa	y:inline;margin-left:40px;float:left" id="img2">
				 <img  src="/TQCC/images/supportFile/up_3.png">
				 </span>
				 	
				 <span style="display:inline;margin-left:40px;float:left" id="img4">
				 <img  src="/TQCC/images/supportFile/up_4.png">
				 </span>
			</div> --%>
				  
			<div style="height:30px;right:0;border:1px;background-color:#E6E6E6;" >
			 <form enctype="multipart/form-data" id="explore" method='post'>
				<%--  <div style="display:inline;margin-left:40px;font-size:15px;float:left;">状态</div>
				 <div style="display:inline;margin-left:30px;float:left;">
				 <select  class="show_year" name="termState">
				 <option>审核</option>
				 <option>未审核</option>
				 </select></div> --%>
				  <div style="display:inline;margin-left:80px;font-size:15px;float:left;">
				 <input type="text" maxlength="100" style="height:24px;width:200px" name="termFile">
				 </div>
				 <input type="hidden" name="termid" id="termid">
				 <div style="display:inline;margin-left:1px;font-size:15px;float:left;">
				 <img  src="<%=basePath%>/images/ss_btn01.png" onclick="explore()">
				 </div>
				</form>
			</div>
				
				
				 
				 <div style="background-color:white;height:90%;overflow: auto;margin-top:10px">
				<div style="background-color:white;width:1500px;margin-left:20px;overflow: auto;">
				<table class="materials_table1">
		 <tbody>
		 <tr bgcolor="#E6E6E6">
			<td style="text-align:center;height:38px; font-weight:bold;" width="80px">
				<input id="checkAll" name="checkAll" onclick="checkedAllbox();" type="checkbox">
			</td>
			
			<td style="text-align:center;height:38px; " width="250px">名称</td>
			<td style="text-align:center;height:38px; " width="100px">创建人</td>
			<td style="text-align:center;height:38px; " width="150px">创建时间</td>
			<td style="text-align:center;height:38px; " width="200px">上传单位</td>
			<td style="text-align:center;height:38px; " width="100px">浏览量</td>
			<td style="text-align:center;height:38px; " width="100px">下载量</td>
			<td style="text-align:center;height:38px; " width="90px">状态</td>
			<td style="text-align:center;height:38px; " width="90px">审核人</td>
			<td style="text-align:center;height:38px; " width="150px">审核时间</td>
			</tr>
	      </tbody>
	      </table>
				<table class="materials_table2" id="dataTable"></table>
				
				<!-- 展示支撑材料表的table end -->
			 <div class="bai_tips" style=" width:97%; margin: 0px auto; display:none" id=tableEnd>
	     <span class="page_txt f_l mg_top10 mg_l10" id="total1"></span>
	     <a class="last_btn f_r mg_top10 mg_r10" href="javascript:void(0)" onclick="forwardtop()"></a>
	     <a class="next_btn f_r mg_top10 mg_r5" href="javascript:void(0)" onclick="forward()"></a>
	     <span class="page_txt f_r mg_r5 mg_top10" id="rows">/<label id="totalPage">${pageBean.totalpage}</label></span>
	     <input class="page_input f_r mg_top10 mg_r5" name="" type="text" value="${pageBean.currentpage }" id="currentpage"/>
	     <a class="previous_btn f_r mg_top10 mg_r5" href="javascript:void(0)" onclick="back()"></a>
	     <a class="first_btn f_r mg_top10 mg_r5" href="javascript:void(0)" onclick="backtop()"></a>
      </div>	
	
	
				</div>
			    </div>	
			</div>
				
			</div>
<!-- 遮盖层 -->
<input type="hidden" value="" id="swfvalue"/>

<div id="md" class="mymd"></div>			
			
 <div id ="fileShow" style="margin: 0px; padding: 0px; width: 60%; height: 80%;  z-index: 99; position: absolute; top: 10%; left: 20%;border:1px solid #E8E8E8;background: rgb(255, 255, 255) none repeat ;display:none ">
	<div style="height:30px;width:100%;background:#46A3D1;" ><span id="fileTitle" style="line-height:30px;color:#FFF"></span><a href="javascript:void(0)" onclick="closeFile()"><img style="float:right;margin-top:3px;margin-right:3px;" src="/datareport_platform/page/roleDataShow/images/cancel.png"/></a></div>
	<div id="fileContent" style="overflow :auto"></div>
	</div>		 
<div id = "loading" style="margin: 0px; padding: 0px; width: 10%; height: 10%;  z-index: 999; position: absolute; top: 35%; left: 50%;border:2px solid #E8E8E8;background: rgb(255, 255, 255) none repeat ;display:none">
<center style="line-height:55px;">正在加载中...</center>
</div>			
			
<!-- 弹出层 -->					
	<%-- <div id="divc" style="margin: 0px; padding: 0px; border: medium none; width: 100%; height: 100%; background: rgb(51, 51, 51) none repeat scroll 0% 0%; opacity: 0.6; z-index: 99; position: fixed; top: 0px; left: 0px; display: none;"></div>
	<div id="divclose" style="text-align:center;line-height:33px;font-size:16px;background-color:#BEBEBE; height: 6%; width: 68%; z-index: 100; position: absolute; top: 4%; left: 5%; display: none;">
				材料上传
               <img style="vertical-align:middle;float: right;" src="<%=basePath %>/images/anniu.png " onclick="hidebutton()" border="0">
        </div>
        
        <div id="divcontent1" style="text-align:center;line-height:300px;font-size:16px;background-color: white; height: 60%; width: 68%; z-index: 100; position: absolute; top: 10%; left: 5%; overflow-x: auto; display: none;">
               
        </div>
    	  <div id="divcontent" style="background-color: white; height: 60%; width: 68%; z-index: 100; position: absolute; top: 10%; left: 5%; overflow-x: auto; display: none;">
            
           <form enctype="multipart/form-data" id="formupload" method='post'>
					<center>
					<table frame=void id="resource_table" class="gridtable" style="width:68%;margin-top:50px ">
						
					
                                <tr>
	                                 <td>材料名称</td><td>
	                        <input type=text id="upFileName" length="100" name="upFileName" style="width:215px">
	                        <span id="msg1" name="msg" style="color:red;"></span>
	                        </td>
                                </tr>
                            <tr>
	                               <td>上传单位</td><td>
	                        <select  id="upDepart"  name="upDepart" onFocus="showdepart()"></select>
	                        <span id="msg2" name="msg" style="color:red;"></span>
	                        </td>
	                        
                                </tr>
                                
                                  </tr>
                            <tr id ="chosefile">
	                               <td >选择文件</td><td>
	                        <input type=file id="upFile" value="选择文件" name="upFile" >
	                        </td>
                                </tr>
                                
                                 <tr>
	                               <td>状态</td><td>
	                               <input type="radio"  name="isabled" value="1" checked="true">审核
	                               <input type="radio"  name="isabled" value="2">未审核
	                                </td>
                                </tr>
                                
                                 <tr>
	                              <td></td> <td>
	                        <input type=button id="keep" value="保存" onclick="upLoadfile()">
	                        <input type="hidden" value="" id="treetableId" name="treetableId"/>
	                        <input type="button" value="确定" id="modify" name="modify" style="display:none" onclick="fileModify()"/>
	                        <input type="hidden" id="modNames" name="modNames">
	                        <span id="msg" name="msg" style="color:red;"></span>
	                        </td>
                                </tr>
					</table>
					</center>	
					</form> 
             
             
           </div>		 --%>
	
</body>
</html>
