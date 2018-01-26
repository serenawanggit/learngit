function getChildrenMenu(){
	$.ajax({
		async : false,
		url:"/TQCC/permission/getUserPermission",
		type:"POST",
		data:{
			platForm:3
		},
		success:function(data){
			var arr=eval("("+data+")");
			$("td[mname]").each(function(i,td){
				$.each(arr,function(j,obj){
					if($(td).attr("mname") == obj[4]){
						$(td).show();
						return false;
					}
				});
			});
		},
		error:function(){
			
		}
	});
}