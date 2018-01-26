function searchStart(){
	 $("#divdiv").show();
	 $("#showcontentdiv").hide();
	$("#tdtd").html("正在查询...");
	var startdate=$("#startdate").val();
	var enddate=$("#enddate").val();
	if(startdate>enddate){
		alert("开始年份不能大于结束年份！");
		return;
	}
    $.ajax({
    	url:"/audit/asShZtsjbController/searchAll.do",
    	type:"post",
    	dataType:"json",
    	data:{"searchValue":$("#searchValue").val().trim(),"startdate":startdate,"enddate":enddate},
    	success:function(data){
    		var result=eval('('+data+')');
    		 var list=result.title;
    		 $("#divdiv").hide();
    		 $("#showcontentdiv").show();
    		 $("#showcontentdiv").html("");
    		 for ( var i = 0; i < list.length; i++) {
    			 var str="";
    		     str+=" <div> ";
    		     str+="   <div style='padding: 5px 5px 5px 5px;font-size:14px;font-weight:bold'>表名："+list[i][2]+"</div> ";
    			 str+="   <div id='divcontent' ";
    			 str+=" 		style='background-color:white;";
    			 if(list[i][1].length>14){
    				 str+="height:50%;";
    			 }
    			 str+=		"width:100%; top: 10%;left:8%;overflow-x:auto;'> ";
    			 str+=" 		<div style='padding: 5px 5px 5px 5px'> ";
    			 str+=" 			<table style='font-size:12px;width:100%; border:#F8AC59 1px solid;' ";
    			 str+=" 				cellpadding='0' cellspacing='0' id='contenttable'> ";
    			 str+=" 				<thead id='tb_thead' class='tb_thead'> ";
    			 str+=" 					<tr ";
    		     str+=" 						style='background-color:#F8AC59;color:white;font-weight:bold;font-size:14px;'> ";
    			 for ( var j = 0; j < list[i][0].length; j++) {
        			 str+=" 						<td nowrap='nowrap' ";
        			 str+=" 							style='padding:0 20px; height:30px;border:#DADADA 1px solid;' ";
        			 str+=" 							align='center'>" ;
        			 str+=list[i][0][j].field_cname;
        			 str+="	</td> ";
				 }
    			 str+=" 		</thead> ";
    			 str+=" 		<tbody id='tb_tbody2' > ";
    			 for ( var k = 0; k < list[i][1].length; k++) {
    				 str+="<tr> ";
    				 for ( var l = 0; l < list[i][1][k].length; l++) {
            			 str+=" 						<td nowrap='nowrap' ";
            			 str+=" 							style='padding:0 20px; height:30px;border:#DADADA 1px solid;" ;
            			 if(list[i][1][k][l].indexOf($("#searchValue").val().trim())>=0){
            				 str+=" color:red;font-weight:bold;font-size:13px;";
            			 }
            			 str+=	"' ";
            			 str+=" 							align='center'>" ;
            			 str+=list[i][1][k][l];
            			 str+="	</td> ";
					 }
                     str+="</tr>";
				 }
    			 str+=" 				</tbody> ";
    			 str+=" 			</table> ";
    			 str+=" 		</div> ";
    			 str+=" 		</div> ";
    		     str+="   </div> ";
    		     $("#showcontentdiv").append(str);
			 }
    	},
    	error:function(){	
    		
    	}
    })
}