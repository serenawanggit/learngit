	
$(document).ready(function(){
	findPageByMC();
	validateLogin();
});

//初始化分页查询指标
var icp=1;
function findPageByMC(){
	//查询全部指标树
	var rName = $("#rName").val();
	var url = "/audit/rwxxController/selectRwByMC.do";
	$.ajax( {  
	    type : "post",  
	    url : url, 
	    dataType:"json",
	    data:"rName="+(rName.trim()==null?'':rName.trim())+"&pageNo="+icp,
	    success : function(msg) { 
	        var ztr = eval('('+msg+')');
//	        var rwxxs = ztr.rwxxs;
	        if (ztr == null) {
				return;
			}
	        
	        $("#rName").val(ztr.rName);
	        jQuery("#rwTable tbody").empty();
	        var html = "";
	        jQuery.each(ztr.rwList, function(i, value) {
	        	html += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'>";
	        	/*html += "	<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
	        	html += "	<input type='checkbox' name='ckBut' value='"+value.id+"' />";
	        	html += "	</td>";*/
	        	html += "	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;height:40px;' align='center'>";
	        	html +=  value.cjrwmc;
	        	html += "   </td>";
	        	html += "	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;height:40px;' align='center'>"+value.fbsj+"</td>";
	        	html += "	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;height:40px;' align='center'>"+value.jzsj+"</td>";
	        	html += "	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;height:40px;' align='center'>";
	        	html += value.rwzt==0?"未审核":"已审核";
	        	html += "</td>";
	        	html += "	<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;height:40px;' align='center'>";
	        	html += "	<a href='#' onclick='addTask("+value.id+");' >填报";
	        	html += "	</a>";
	        	html += "	</td>";
	        	html += "</tr>";
	    	});
	        
	        jQuery("#rwTable tbody").append(html);
	        jQuery("#pageTb tbody").empty();
	        var pageHtml = "<tr>"+
	        "	<td align='left'>"+
	        "	<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>"+
	        "	</td>"+
	        "	<td align='right'>"+
	        "	<span style='display:inline-block;margin-right:40px;'>"+
	        "	<img value='1_"+ztr.totalPage+"' onclick='pagefindindicator(this);'"+
	        "		src='../../images/pgicon-first_press.png' style='vertical-align:middle;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-first.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-first_press.png;&quot;'>"+
	        "	<img value='2_"+ztr.totalPage+"' onclick='pagefindindicator(this);'"+
	        "		src='../../images/pgicon-pre_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-pre.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-pre_press.png;&quot;'>"+
	        "	<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>"+
	        ztr.pageNo+"/"+ztr.totalPage+"页</span>"+
	        "	<img value='3_"+ztr.totalPage+"' onclick='pagefindindicator(this);'"+
	        "			src='../../images/pgicon-next_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-next.png;&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-next_press.png;&quot;'>"+
	        "	<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;"+
	        "	line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>"+
	        "	<img value='4_"+ztr.totalPage+"' onclick='pagefindindicator(this);'"+
	        "			src='../../images/pgicon-last_press.png'"+
	        "			style='vertical-align:middle;margin-left:5px;'"+
	        "			onmouseover='this.src=&quot;../../images/pgicon-last.png&quot;'"+
	        "			onmouseout='this.src=&quot;../../images/pgicon-last_press.png&quot;'>"+
	        "	</span>"+
	        "	</td>"+
	        "</tr>";	        
	        jQuery("#pageTb tbody").append(pageHtml);
	    }
	});
	
}


//填报
function addTask(rwid){
	document.getElementById("bjForm").action = "/audit/rwxxController/tbRwxx.do?id="+rwid;
	document.getElementById("bjForm").submit();
}

//分页查询指标项
function pagefindindicator(obj){
	var p=obj.getAttribute("value").split("_");
	if(p[0]=="1"){//首页
	    icp="1";
		findPageByMC();
		return;
	}else if(p[0]=="2"){//上一页
		if(icp=="1"){
			alert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		findPageByMC();
	}else if(p[0]=="3"){//下一页
		
		if(icp==p[1]){
			alert("已经是最后一页了!");
			return;
		}
		icp=parseInt(icp)+1;
 		findPageByMC();
	}else if(p[0]=="4"){//下一页
		var pnos=$("#pagenotext").val();
		if(pnos.length<1){
			alert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			alert("输入非页码数字");
			return;
		}else{
			if(pnums>parseInt(p[1])){
				alert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
				icp=pnos;
				findPageByMC();
			}
		}
	}
}

