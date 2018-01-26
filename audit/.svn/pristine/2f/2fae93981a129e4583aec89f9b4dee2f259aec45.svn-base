/**
 * 显示用户对菜单可执行的操作
 */
function showUserMenuOperation(platForm,menuId){
jQuery.ajax({
		async : false,
		url:"/TQCC/permission/getUserMenuOperation",
		data:{
			platForm:platForm,
			menuId:menuId
		},
		type:"POST",
		success:function(data){
			if(data!="null"){
				var arr=eval("("+data+")");
				//console.info(arr);
				$.each(arr,function(i,element){
					$("body [ename="+element.ename+"]").show();
				});
			}
		},
		error:function(){
			alert("系统忙，请稍后重试!");
		}
	});
}