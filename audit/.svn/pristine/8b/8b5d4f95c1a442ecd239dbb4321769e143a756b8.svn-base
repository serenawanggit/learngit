$(function(){
	
	$("#dateYear").html("");
	var date = new Date();
			for(var i = 2013;i<=date.getFullYear()+1;i++){
			if(i!=date.getFullYear()){
				$("#dateYear").append("<option value='"+i+"'>"+i+"</option>");
			}else{
				$("#dateYear").append("<option value='"+i+"'>"+i+"</option>");
			}
		}
			$('select').find('option').eq(3).attr("selected","selected");	
	
	getSelect();
	getSelectToChiled();
});

var sContentPath;
function init(){
	$("#upload_img").show();
	$("#tb_thead").html("");
	sContentPath = getContentPath();
	var htmls="<tr style='background-color:EEEEEE;color:000000;font-weight:bold;font-size:12px;'>" +
	"<td nowrap='nowrap'  rowspan='3' style='padding:0 20px;height:30px;border:#D1D1D1 1px solid;' align='center' >排名</td>"+
			"<td nowrap='nowrap'  rowspan='3' style='padding:0 20px;height:30px;border:#D1D1D1 1px solid;' align='center' >专业名称</td>";
	var htmls1="";
	var type = $("#zbSelect").val();
	var num = 0;
	var num1 = 0;
	var td2htmls="";
			$.ajax({
				url:sContentPath+"/assessInspect/selectOneList.do",
				type:'POST',
				async:false,
				data:{"stype":type,"keys":1,"syear":$("#dateYear").val()},
				dataType:'json',
				success:function(datas){
						if(datas.length>2){
							var result=eval("("+datas+")");
							$.each(result,function(i,obj){
								htmls+="<td nowrap='nowrap'   colspan='"+obj.cols+"' style='background-color:EEEEEE;color:000000;font-weight:bold;font-size:12px;padding:0 20px;width:150px;height:30px;border:#D1D1D1 1px solid;'"
								+	"align='center' >"+obj.name+"</td>";
							});
						}else{
							return ;
						}
				},error:function(errors){
					alert("一级列加载数据不正确!");
				}
			});
			htmls+="<td nowrap='nowrap' rowspan='3' style='background-color:EEEEEE;color:000000;font-weight:bold;font-size:12px;padding:0 20px;height:30px;border:#D1D1D1 1px solid;'"
				+	"align='center' >总分</td></tr>";
			$.ajax({
				url:sContentPath+"/assessInspect/selectTwoList.do",
				type:'POST',
				async:false,
				data:{"stype":type,"syear":$("#dateYear").val()},
				dataType:'json',
				success:function(datas){
						htmls+="<tr>";
						if(datas.length>2){
							var result=eval("("+datas+")");
							$.each(result,function(i,obj){
								var str=obj.name;
								if(str.length>3){
									str=str.substr(0,18);
								}
								htmls+="<td nowrap='nowrap'  colspan='"+obj.cols+"' rowspan='"+obj.rows+"' style='background-color:EEEEEE;color:000000;font-weight:bold;font-size:12px;padding:0 20px;height:30px;border:#D1D1D1 1px solid;'"
								+	"align='center' ><a title='"+obj.name+"' >"+str+"</a></td>";
							});
						}else{
							return ;
						}
						htmls+="</tr>";
				},error:function(errors){
					alert("二级列加载数据不正确!");
				}
			});
			$.ajax({
				url:sContentPath+"/assessInspect/selectThreeList.do",
				type:'POST',
				async:false,
				data:{"stype":type,"syear":$("#dateYear").val()},
				dataType:'json',
				success:function(datas){
						htmls+="<tr>";
						if(datas.length>2){
							var result=eval("("+datas+")");
							$.each(result,function(i,obj){
								var str=obj.name;
								if(str.length>6){
									str=str.substr(0,18);
								}
								htmls+="<td nowrap='nowrap'  colspan='"+obj.cols+"' style='background-color:EEEEEE;color:000000;font-weight:bold;font-size:12px;padding:0 20px;height:30px;border:#D1D1D1 1px solid;'"
								+	"align='center' ><a title='"+obj.name+"' >"+str+"</a></td>";
							});
						}else{
							return ;
						}
						htmls+="</tr>";
				},error:function(errors){
					alert("三级列加载数据不正确!");
				}
			});
			/*$("#upload_img").hide();
			$("#tb_thead").html(htmls);
			return ;*/
			//填充body
			$.ajax({
				url:sContentPath+"/assessInspect/selectPFNoDJ.do",
				type:'POST',
				async:false,
				data:{"stype":type,"syear":$("#dateYear").val(),"pgtx":$("#dataOrg").val()},
				success:function(datas){
						var result=eval("("+datas+")");
						if(datas.length>2){
						var rows=result.length;
						var cols=result[0].length;
						//循环专业数目
						for ( var i = 0; i < rows; i++) {
							htmls+="<tr>";
							htmls+="<td  style='padding:0 20px;height:30px;border:#D1D1D1 1px solid;' align='center' >"+(i+1)+"</td>";
							htmls+="<td  style='padding:0 20px;height:30px;border:#D1D1D1 1px solid;' align='center' >"+result[i][cols-1]+"</td>";
							//循环子节点个数
							for ( var j = 0; j < cols-1; j++) {
								htmls+="<td  style='padding:0 20px;height:30px;border:#D1D1D1 1px solid;' align='center' >"+valueFormat(result[i][j],2)+"</td>";
							}
							htmls+="</tr>";
						}
						}
						
				},error:function(errors){
					alert("没有数据");
				}
			});
			$("#upload_img").hide();
			$("#tb_thead").html(htmls);
	
}
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}
function valueFormat(value,flag) {
	if (value == undefined || value == null || value == 0 || value=="") {
		return "0";
	}
	var num = parseFloat(value);   
        var a=num.toString();
   
      
	switch (flag) {
	case 1: // 转百分比，保留两位小数
              if(num==1){
                  return num * 100;
              }else{
                   var c=  (num * 100).toFixed(2);
                   var d=c.split(".");
                   if(d[1]=="00"){
                      return d[0];
                   }else{
                      return c;
                   }
              }
		
	case 2: // 保留两位小数

                if(a.indexOf(".")>0){
                    return num.toFixed(2); 
                }else{
                     return num
                }
		
//	case 3: // 保留两位小数
//		return (num * 100).toFixed(2)+"%";
	default:
		return value;
	}
}


function getSelect(){
	var str ="";
	$.ajax({
		async:false,
		url:"/TQCC/accessment/type_findAssessmentTypeList.htm",
		type:'POST',
		dataType:"json",
		success:function(data){
			var result= eval(data);
			$.each(data,function(index,dom){
				str += "<option value='"+dom.id+"'>"+dom.name+"</option>";
			});
			$("#dataOrg").html(str);
		}
	});
}

function getSelectToChiled(){
	sysid=null;
	var parentId = $("#dataOrg").val();
	$.ajax({
		url:"/TQCC/accessment/type_getAccessmentTypeByPid.htm",
		type:'POST',
		data:{"parentId":parentId},
		async:false,
		dataType:"json",
		success:function(data){
			var str = "";
			$.each(data,function(index,dom){
				str += "<option value='"+dom.id+"'>"+dom.name+"</option>";
			});
			$("#zbSelect").html(str);
		}
	});
	init();
}