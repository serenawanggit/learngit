/**
 * 初始化
 */
jQuery(document).ready(function(){
	jQuery.ajax({
		url:"/audit/zlrwController/selectAllZLrwxx.do",
		type:"POST",
		dataType:"JSON",
		success:function(result){
			var results=eval("("+result+")");
			var str ="<option value='0' >---请选择质量任务---</option>";
			for ( var i = 0; i < results.length; i++) {
				str += "<option value='"+results[i].id+"' >"+results[i].zlrwmc+"</option>";
			}
			$("#cjbm").html(str);
		}
	});
	
	jQuery.ajax({
		url:"/audit/asZLJDrwxxController/selectAlljdrwzb.do",
		type:"POST",
		dataType:"JSON",
		success:function(result){
			var results=eval("("+result+")");
			var str ="<tr id='trid' align='center'" +
			"style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>" +
			"<td align='center' width='5%'>排序</td>"+
			"<td width='25%'>阶段任务名称</td>" +
			"<td width='11%'>任务范围</td>" +
			"<td width='11%'>开始时间</td>" +
			"<td width='11%'>结束时间</td>" +
			"<td width='11%'>参与部门</td>" +
			"<td width='11%'>已达标部门</td>" +
			"<td width='11%' style='border-right:1px solid #dadada;'>完成进度</td></tr>";
			
			for ( var i = 0; i < results.length; i++) {
				var yidabiao=results[i].yidabiaobumen;
				var canyubumen= results[i].organizeCount;
				var	jieguo=0;
				if (canyubumen==0) {
					jieguo=0;
				}else{
					jieguo= (yidabiao/canyubumen) * 100;
				}
				str += "<tr  align='center' style='background-color:#FFF;color:#333333;font-size:12px; border-top:0px solid #dadada;'>";
				str +="<td style='border-bottom: 1px solid #dadada;'><input type='hidden' value='"+results[i].id+"'> "+(i+1)+"</td>";
				str +="<td style='border-bottom: 1px solid #dadada;'>"+results[i].jdrwmc+"</td>";
				if(results[i].rwfw==1){
					str +="<td style='border-bottom: 1px solid #dadada;'>学院</td>";
				}if(results[i].rwfw==2){
					str +="<td style='border-bottom: 1px solid #dadada;'>院系</td>";
				}if(results[i].rwfw==3){
					str +="<td style='border-bottom: 1px solid #dadada;'>专业</td>";	
				}
				str +="<td style='border-bottom: 1px solid #dadada;'>"+results[i].startTime+"</td>";
				str +="<td style='border-bottom: 1px solid #dadada;'>"+results[i].endTime+"</td>";
				str +="<td style='border-bottom: 1px solid #dadada;'>"+canyubumen+"</td>";
				str +="<td style='border-bottom: 1px solid #dadada;'>"+yidabiao+"</td>";
				if (jieguo<=0||jieguo==Infinity) {
					str +="<td style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada;'>0%</td></tr>";	
				}else{
					str +="<td style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada;'>"+jieguo.toFixed(2)+"%</td></tr>";
				}
				
				
				$("#jdrwtr").html(""); 
				$("#jdrwtr").append(str);
		}
		}
	});
	
});
/**
 * 查询阶段任务
 */
var canyubumen=0;
function selectJDrwxx(){
	var cjbm=$("#cjbm").val();
	
	jQuery.ajax({
		url:"/audit/asZLJDrwxxController/selectJDrw.do",
		type:"POST",
		data:{"glJDRWID":cjbm},
		dataType:"JSON",
		async  : false,
		success:function(result){
			var results=eval("("+result+")");
			
			var str ="<tr id='trid' align='center'" +
					"style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>" +
					"<td align='center' width='5%'>排序</td>"+
					"<td width='25%'>阶段任务名称</td>" +
					"<td width='11%'>任务范围</td>" +
					"<td width='11%'>开始时间</td>" +
					"<td width='11%'>结束时间</td>" +
					"<td width='11%'>参与部门</td>" +
					"<td width='11%'>已达标部门</td>" +
					"<td width='11%' style='border-right:1px solid #dadada;'>完成进度</td></tr>";
			if (results.length!=0) {
			for ( var i = 0; i < results.length; i++) {
					var yidabiao=results[i].yidabiaobumen;
					canyubumen= results[i].organizeCount;
					var	jieguo=0;
					if (canyubumen==0) {
						jieguo=0;
					}else{
						jieguo=(yidabiao/canyubumen)*100;
					}
					str += "<tr align='center' style='background-color:#FFF;color:#333333;font-size:12px; border-top:0px solid #dadada;'>";
					str +="<td style='border-bottom: 1px solid #dadada;'><input id='jdrwid' type='hidden' value='"+results[i].id+"'> "+(i+1)+"</td>";
					str +="<td style='border-bottom: 1px solid #dadada;'>"+results[i].jdrwmc+"</td>";
					if(results[i].rwfw==1){
						str +="<td style='border-bottom: 1px solid #dadada;'>学院</td>";
					}if(results[i].rwfw==2){
						str +="<td style='border-bottom: 1px solid #dadada;'>院系</td>";
					}if(results[i].rwfw==3){
						str +="<td style='border-bottom: 1px solid #dadada;'>专业</td>";	
					}
					str +="<td style='border-bottom: 1px solid #dadada;'>"+results[i].startTime+"</td>";
					str +="<td style='border-bottom: 1px solid #dadada;'>"+results[i].endTime+"</td>";
					str +="<td style='border-bottom: 1px solid #dadada;'>"+canyubumen+"</td>";
					str +="<td style='border-bottom: 1px solid #dadada;'>"+yidabiao+"</td>";
					if (jieguo<=0||jieguo==Infinity) {
						str +="<td style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada;'>0%</td></tr>";	
					}else{
						str +="<td style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada;'>"+jieguo.toFixed(2)+"%</td></tr>";
					}
					
					$("#jdrwtr").html(""); 
					$("#jihuabumentd").html("计划部门（ 4 ）");
					$("#jdrwtr").append(str);
				}
			}else{
				str += "<tr  align='center' style='background-color:#FFF;color:#333333;font-size:12px; border-top:0px solid #dadada;'>";
				str +="<td colspan='8' style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada; align='center'><font color='red'>暂无数据</td></tr>";
				$("#jdrwtr").html(""); 
				$("#jihuabumentd").html("计划部门（ 4 ）");
				$("#jdrwtr").append(str);
			}	
			var str="<tr align='center' style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>"+
			"<td align='center' width='5%'>排名</td>"+
			"<td width='25%'>部门名称</td>"+
			"<td width='11%'>最后更新时间</td>"+
			"<td width='11%'>已达标指标数</td>"+
			"<td width='11%'>未达标指标数</td>"+
			"<td width='11%' style='border-right:1px solid #dadada;'>当前进度</td>"+
		"</tr>";
		str += "<tr  align='center' style='background-color:#FFF;color:#333333;font-size:12px; border-top:0px solid #dadada;'>";
		str += "<td colspan='8' style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada; align='center'><font color='red'>暂无数据</td></tr>";
			if (cjbm==0) {
				$("#tbodyid").html(""); 
				$("#jihuabumentd").html("计划部门（ 4 ）");
				$("#tbodyid").append(str);
			}//如果参与部门为0就给默认无数句
			if (canyubumen==0) {
				$("#tbodyid").html(""); 
				$("#jihuabumentd").html("计划部门（ 4 ）");
				$("#tbodyid").html(str);
			}
		}
	});
	//计划阶段任务
	var jdrwid= $("#jdrwid").val();
	if (jdrwid==0||jdrwid==""||jdrwid==null) {
		jdrwid=0;
	}
	jQuery.ajax({
		url:"/audit/asZLJDrwxxController/selectjdrwzb.do",
		type:"POST",
		data:{"jdrwid":jdrwid},
		dataType:"JSON",
		async : false,
		success:function(result){
			var results=eval("("+result+")");
			var rwxxList=results.listzljdrwkgzb;
			var zhibiaogeshu=results.zhibiao;
			var weidachengzhibiao=results.weiwangcheng;
			var jieguo=0;
			if (weidachengzhibiao==0) {
				jieguo=0;
			}else{
				jieguo=((zhibiaogeshu/weidachengzhibiao)*100);
			}
			var str="<tr align='center' style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>"+
						"<td align='center' width='5%'>排名</td>"+
						"<td width='25%'>部门名称</td>"+
						"<td width='11%'>最后更新时间</td>"+
						"<td width='11%'>已达标指标数</td>"+
						"<td width='11%'>未达标指标数</td>"+
						"<td width='11%' style='border-right:1px solid #dadada;'>当前进度</td>"+
					"</tr>";
			if (rwxxList.length!=0) {
				xianshi();
				for ( var i = 0; i < canyubumen; i++) {
					str+="<tr align='center' style='background-color:#FFF;color:#333333;font-size:12px;'>";
					str+="		<td style='border-bottom: 1px solid #dadada;'>"+(i+1)+"</td>";
					str+="		<td style='border-bottom: 1px solid #dadada;'>"+rwxxList[i].oname+"</td>";
					str+="		<td style='border-bottom: 1px solid #dadada;'>"+rwxxList[i].endTime+"</td>";
					str+="		<td style='border-bottom: 1px solid #dadada;'>"+zhibiaogeshu+"</td>";
					str+="		<td style='border-bottom: 1px solid #dadada;'>"+weidachengzhibiao+"</td>";
					if (jieguo<=0||jieguo==Infinity) {
						str+="	<td style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada;'>0%</td>";
					}else{
						str+="	<td style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada;'>"+jieguo.toFixed(2)+"%</td>";
					}
					str+="</tr>";
				}
				$("#tbodyid").html(""); 
				$("#tbodyid").append(str);
			}else{
				str += "<tr  align='center' style='background-color:#FFF;color:#333333;font-size:12px; border-top:0px solid #dadada;'>";
				str +="<td colspan='8' style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada; align='center'><font color='red'>暂无数据</td></tr>";
				$("#tbodyid").html(""); 
				$("#tbodyid").append(str);
			}	
		}
	});
}


function xianshi(){
	$("#jihuabumen").css("display","block");
	$("table[name=sstb2]").css("display","block");
}