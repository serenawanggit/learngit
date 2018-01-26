$(function(){
	
});

function getUserMenuPermission(pid){
	$.ajax({
		async : false,
		url:"/TQCC/permission/getUserPermission",
		type:"POST",
		data:{
			platForm:pid
		},
		success:function(data){
			var result=eval(data);
			if(result!=null){
				var modals=$("#table2 td");
				var shpgTable=$("#moduleTB tbody tr");
				var tdStyle="height:40px;background-image:url(../../images/secondflm_bk001.png);display:block;";
				$.each(result,function(i,element){
					//top菜单列表 把
					$.each(modals,function(k,td){
						if (element[4]===$(td).attr("ename")) {
							$(td).attr("class","");
						}
					});
					
					for ( var i = 0; i < shpgTable.length; i++) {
						//把 【审核评估】菜单列的子菜单项做处理 如果在表中存在，那么更改style
						if (element[4]===$(shpgTable[i]).find("td").attr("name")) {
							$(shpgTable[i]).find("td").attr("style",tdStyle)
						}
						//子菜单
						if (element[4]===$("#datasbitem016").text()) {
//							$(shpgTable[i]).find("td[name="+$("#datasbitem016").text()+"]").attr("style",tdStyle);
							$(shpgTable[i]).find("td[name="+$("#datasbitem016").text()+"]").show();
						}
					}
				});
			}
		},
		error:function(){
			alert("权限异常...")
		}
	});
}
