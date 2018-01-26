/*var sContextPath;
var templist;
$(function(){
	sContextPath=getContentPath();
	//collegeLoad();
});
function getContentPath(){
	var pathName  = window.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0,index+1);
	return result;
	
}
function collegeLoad(){
	$.ajax({
		url:'/CHART/collegeReport/collegeReport_querycollegeAll.htm',
		async:false,
		type:"POST",
		data:{},
		//dataType: "json",
		success:function(data){
			var result=eval("("+data+")");
			if(result.length>0){
				$.each(result,function(i,obj){
					$("#collegeId").append("<option value="+result[i][0]+">"+result[i][1]+"</option>")
				});
			}
		},error:function(){
			
		}
	});
	//选择学院类型事件
	selectChilds($("#collegeId").val());
	//选择学院名称事件
	selectTable($("#collegeChildId").val());
	//创建表格
	createTable(templist);
}

//创建表格
function createTable(templist){
	var tableData = {};
	tableData.Rows = templist;
	 $("#templist").ligerGrid({
		checkbox: false,
		//rownumbers: true,
		pageSizeOptions: [10, 20, 30, 40, 50],
		usePager: true,
		pageSize: 10,
		data: tableData,
		hideLoadButton: true,
		width: '100%',
		columns: [{
			display: '学院名称',
			name: 'FIELD2',
			minWidth: 400
		}, {
			display: '学院代码',
			name: 'FIELD1',
			width: 500
		},  {
			display: '操作',
			name: 'ID',
			minWidth: 380,
			align: 'center',
			render: function(row) {
				var code=row.FIELD1;
				var html = "<a href='javascript:;' style='margin:5px 0 0 5px;' onclick=closeOpent('"+row.FIELD1+"')  class='btn-small btn-icon'><img src='/TQCC/page/roleDataShow/images/edit.png' title='编辑'/></a> ";
				html += '<a href="javascript:;" class="btn-small  btn-icon" data-click-data="' + row.id + '" data-click="delete"><img src="/TQCC/page/roleDataShow/images/delete1.png" title="删除"/></a> ';
				html += '<a href="javascript:;" class="btn-small  btn-icon" data-click-data="' + row.id + '" data-click="fieldEdit"><img src="/TQCC/page/roleDataShow/images/table.png" title="字段设计"/></a> ';
				if(row.tableType == '2') {
					html += '<a href="javascript:;"  class="btn-small  btn-icon" data-click-data="' + row.id + '" data-click="styleEdit"><img src="/TQCC/page/roleDataShow/images/menu.png" title="表样设计"/></a> ';
				} else if(row.tableType == '1') {
					html += '<a href="javascript:;"  class="btn-small  btn-icon" data-click-data="' + row.id + '" data-click="download"><img src="/TQCC/page/roleDataShow/images/down.png" title="模板下载"/></a> '
				}
				return html;
			}
		}]
	});

}
//查询学院名称
function selectChilds(id){
	$.ajax({
		url:"/CHART/collegeReport/collegeReport_getcollegeByCId.htm",
		data:{"cid":id},
		type:'POST',
		async:false,
		success:function(data){
			var result=eval("("+data+")");
			$("#collegeChildId").empty();
			if(result.length>0){
				$.each(result,function(i,obj){
					$("#collegeChildId").append("<option value="+result[i][1]+">"+result[i][1]+"</option>")
				});
			}
		},error:function(){
			
		}
	});
	selectTable($("#collegeChildId").val());
	//创建表格
	createTable(templist);
}
//根据学院名称生成表格
function selectTable(cname){
	templist=null;
	$.ajax({
		url:"/datareport_platform/dataTask/selectByCname.do",
		data:{"cname":cname},
		type:'POST',
		async:false,
		success:function(data){
			templist=data.resultObject;
		},error:function(){
		}
	});
	//创建表格
	createTable(templist);
}
//关闭页面
function closeOpent(collegeid){
	alert(collegeid);
	$("#tempIframe").css('display','block');
	$("#collegeContent").hide();
	$("#down").show();
}
*/