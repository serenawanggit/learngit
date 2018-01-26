var taskStatusList = {
			'00' : '未提交',
			'01' : '已提交未校验',
			'02' : '校验未通过',
			'03' : '校验通过',
			'13' :'已提交院级审核',
			'21' :'院级未通过，未校验',
			'22' :'院级未通过，校验未通过',
			'23' :'院级未通过',
			'33':'已提交校级审核',
			'43':'校级未通过',
			'42':'校级未通过，校验未通过',
			'41':'校级未通过，未校验',
			'53':'校级已通过',
			'63':'已提交上报平台',
	};
//taskStatusList[item.shzt + '' + item.tbzt]
//var cid;
//var tableName;
//var dateValue;

$(function(){
	$("#aDiv").on("click",function(){
	    $("#aDiv_2").css("background-color","red");
	    $("#bDiv_2").css("background-color","#fff");
	    $("#cDiv_2").css("background-color","#fff");
	    queryDataByOrganizationid(null);
	})
	$("#bDiv").on("click",function(){
	    $("#aDiv_2").css("background-color","#fff");
	    $("#bDiv_2").css("background-color","red");
	    $("#cDiv_2").css("background-color","#fff");
	    queryDataByOrganizationid("教学");
	})
	$("#cDiv").on("click",function(){
	    $("#aDiv_2").css("background-color","#fff");
	    $("#bDiv_2").css("background-color","#fff");
	    $("#cDiv_2").css("background-color","red");
	    queryDataByOrganizationid("行政");
	})
	
	
	$.ajax({
		url:'/audit/shutcmDataTemplate/findDataType.do',
//		data:{"id":1},
		type:'POST',
		async:false,
		success:function(data){
			var str = "";
			var datas = eval("("+data+")");
			$.each(datas,function(index,dom){
				str += "<option value="+dom.ID+">"+dom.typeName+"</option>";
			})
			$("#parentType").html(str);
		}
	})
	var parentId = $("#parentType").val();
	selectToChild(parentId);
	
	//二级联动
	$("#parentType").change(function(){
		selectToChild($("#parentType").val());
		queryData();
	})
	queryData();
	//二级下拉框查询
	$("#childType").change(function(){
		$("#tableName").val("");
		queryData();
	})
	
	$("#txt2").click(function(){
		queryData();
	})
	
	
	//查询按钮，根据表名模糊查询'
	$("#lookData").click(function(){
		queryData();
	});
	
});

function queryDataByOrganizationid(oid){
	$.ajax({
		url:'/audit/shutcmDataTemplate/findDataTemplateByOrganizationid.do',
		data:{
			"INSERT_VSERSION":$("#txt2").val(),
			"UTYPE":oid
		},
		type:'POST',
		async:false,
		success:function(data){
			var str = "<tr style='background-color:#DCDBDB;'><th width='100px'>序号</th><th>数据表名</th><th>填报人</th><th>填报状态</th><th>复核人</th><th>复核状态</th><th>校级人</th><th>审核状态</th></tr>";
			var datas = eval("("+data+")");
//			taskStatusList[item.shzt + '' + item.tbzt]
			$.each(datas,function(index,dom){
				var tbImg = "";
				var fhImg = "";
				var shImg = "";
				if(parseInt(dom.SHZT + '' + dom.TBZT)>=13){
					tbImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
				}else{
					tbImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
				}
				if(parseInt(dom.SHZT + '' + dom.TBZT)>=33){
					fhImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
				}else{
					fhImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
				}
				if(parseInt(dom.SHZT + '' + dom.TBZT)>=53){
					shImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
				}else{
					shImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
				}
				
				str += "<tr>";
				str += "<td>" + (index+1) + "</td><td>" + dom.TABLE_NAME + "</td><td>"+dom.tbr+"</td><td>数据提交"+tbImg+"</td><td>"+dom.shr+"</td><td>数据复核"+fhImg+"</td><td>"+dom.xjshr+"</td><td>数据审核"+shImg+"</td>";
				str += "</tr>";
			});
			$("#data_tab").html(str);
		}
	})
}

function queryData(){
	$.ajax({
		url:'/audit/shutcmDataTemplate/findDataTemplate.do',
		data:{
			"TABLE_NAME":$("#tableName").val(),
			"INSERT_VSERSION":$("#txt2").val(),
			"CATEGORY_ID":$("#childType").val()
		},
		type:'POST',
		async:false,
		success:function(data){
			var str = "<tr style='background-color:#DCDBDB;'><th width='100px'>序号</th><th>数据表名</th><th>填报人</th><th>填报状态</th><th>复核人</th><th>复核状态</th><th>校级人</th><th>审核状态</th></tr>";
			var datas = eval("("+data+")");
//			taskStatusList[item.shzt + '' + item.tbzt]
			$.each(datas,function(index,dom){
				var tbImg = "";
				var fhImg = "";
				var shImg = "";
				if(parseInt(dom.SHZT + '' + dom.TBZT)>=13){
					tbImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
				}else{
					tbImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
				}
				if(parseInt(dom.SHZT + '' + dom.TBZT)>=33){
					fhImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
				}else{
					fhImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
				}
				if(parseInt(dom.SHZT + '' + dom.TBZT)>=53){
					shImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
				}else{
					shImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
				}
				
				str += "<tr>";
				str += "<td>" + (index+1) + "</td><td>" + dom.TABLE_NAME + "</td><td>"+dom.tbr+"</td><td>数据提交"+tbImg+"</td><td>"+dom.shr+"</td><td>数据复核"+fhImg+"</td><td>"+dom.xjshr+"</td><td>数据审核"+shImg+"</td>";
				str += "</tr>";
			});
			$("#data_tab").html(str);
		}
	})
}

function selectToChild(parentId){
	$.ajax({
		url:'/audit/shutcmDataTemplate/findDataTypeByParent.do',
		data:{"id":parentId},
		type:'POST',
		async:false,
		success:function(data){
			var str = "";//"<option>请选择</option>";
			var datas = eval("("+data+")");
			$.each(datas,function(index,dom){
				str += "<option value="+dom.ID+">"+dom.typeName+"</option>";
			})
			$("#childType").html(str);
		}
	})
}

function lookSelectData(){
	var cid = $("#childType").val();
	if($("#childType").val()=="请选择" || $("#childType").val()=="" || $("#childType").val()==undefined){
		cid = null;
	}
	$.ajax({
		url:'/audit/shutcmDataTemplate/findDataTemplate.do',
		data:{
			"CATEGORY_ID":cid
		},
		type:'POST',
		async:false,
		success:function(data){
			var str = "<tr style='background-color:#DCDBDB;width:100px'><th width='100px'>序号</th><th>数据表名</th><th>填报人</th><th>填报状态</th><th>复核人</th><th>复核状态</th><th>校级人</th><th>审核状态</th></tr>";
			var datas = eval("("+data+")");
//			taskStatusList[item.shzt + '' + item.tbzt]
			$.each(datas,function(index,dom){
				var tbImg = "";
				var fhImg = "";
				var shImg = "";
				if(parseInt(dom.SHZT + '' + dom.TBZT)>=13){
					tbImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
				}else{
					tbImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
				}
				if(parseInt(dom.SHZT + '' + dom.TBZT)>=33){
					fhImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
				}else{
					fhImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
				}
				if(parseInt(dom.SHZT + '' + dom.TBZT)>=53){
					shImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
				}else{
					shImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
				}
				str += "<tr>";
				str += "<td>" + (index+1) + "</td><td>" + dom.TABLE_NAME + "</td><td>"+dom.tbr+"</td><td>数据提交"+tbImg+"</td><td>"+dom.shr+"</td><td>数据复核"+fhImg+"</td><td>"+dom.xjshr+"</td><td>数据审核"+shImg+"</td>";
				str += "</tr>";
			});
//			$("#data_tab tr:not(:first)").empty(); //清空table
			$("#data_tab").html(str);
		}
	})
}

//function selectTable(dateValue,cid,tabName){
//	var tabName = "%"+tableName+"%"
//	$.ajax({
//		url:'/audit/shutcmDataTemplate/findDataTemplate.do',
//		data:{
//			"INSERT_VSERSION":dateValue,
//			"CATEGORY_ID":cid,
//			"TABLE_NAME":tabName
//		},
//		type:'POST',
//		async:false,
//		success:function(data){
//			var str = "";
//			var datas = eval("("+data+")");
////			taskStatusList[item.shzt + '' + item.tbzt]
//			$.each(datas,function(index,dom){
//				var tbImg = "";
//				var fhImg = "";
//				var shImg = "";
//				if(parseInt(dom.SHZT + '' + dom.TBZT)>=13){
//					tbImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
//				}else{
//					tbImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
//				}
//				if(parseInt(dom.SHZT + '' + dom.TBZT)>=33){
//					fhImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
//				}else{
//					fhImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
//				}
//				if(parseInt(dom.SHZT + '' + dom.TBZT)>=53){
//					shImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
//				}else{
//					shImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
//				}
//				str += "<tr>";
//				str += "<td>" + dom.TABLE_NAME + "</td><td>"+dom.tbr+"</td><td>数据提交"+tbImg+"</td><td>"+dom.shr+"</td><td>数据复核"+fhImg+"</td><td>"+dom.xjshr+"</td><td>数据审核"+shImg+"</td>";
//				str += "</tr>";
//			});
//			$("#data_tab tr:not(:first)").empty(); //清空table
//			$("#data_tab").append(str);
//		}
//	})
//}

//时间文本框内容改变事件
//$("#txt2").ligerDateEditor({
//	format: "yyyy/MM/dd",
//	width: 200,
//	height:30,
////	onChangeDate:function(value){
////		$.ajax({
////			url:'/audit/shutcmDataTemplate/findDataTemplate.do',
////			data:{
////				"INSERT_VSERSION":value
////			},
////			type:'POST',
////			async:false,
////			success:function(data){
////				var str = "<tr style='background-color:#DCDBDB;width:100px'><th width='100px'>序号</th><th>数据表名</th><th>填报人</th><th>填报状态</th><th>复核人</th><th>复核状态</th><th>校级人</th><th>审核状态</th></tr>";
////				var datas = eval("("+data+")");
//////				taskStatusList[item.shzt + '' + item.tbzt]
////				$.each(datas,function(index,dom){
////					var tbImg = "";
////					var fhImg = "";
////					var shImg = "";
////					if(parseInt(dom.SHZT + '' + dom.TBZT)>=13){
////						tbImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
////					}else{
////						tbImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
////					}
////					if(parseInt(dom.SHZT + '' + dom.TBZT)>=33){
////						fhImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
////					}else{
////						fhImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
////					}
////					if(parseInt(dom.SHZT + '' + dom.TBZT)>=53){
////						shImg = "<img src='/audit/page/zenith/staticPage/img/check.png'>";
////					}else{
////						shImg = "<img src='/audit/page/zenith/staticPage/img/error.png'>";
////					}
////					str += "<tr>";
////					str += "<td>" + (index+1) + "</td><td>" + dom.TABLE_NAME + "</td><td>"+dom.tbr+"</td><td>数据提交&nbsp;"+tbImg+"</td><td>"+dom.shr+"</td><td>数据复核&nbsp;"+fhImg+"</td><td>"+dom.xjshr+"</td><td>数据审核&nbsp;"+shImg+"</td>";
////					str += "</tr>";
////				});
//////				$("#data_tab tr:not(:first)").empty(); //清空table
////				$("#data_tab").html(str);
////			}
////		})
////	}
//});
