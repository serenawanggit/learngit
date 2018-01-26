/**
 * 监测是否选择权限按钮
 * @param flag 选择器类型
 * @param value 选择器值
 * @param all  权限标签ID
 */
function checkedChoiceAll(flag,value,all){
	if(flag=="id"){
		if($("input[id='"+value+"']").length == $("input[id='"+value+"']:checked").length){
			$("#"+all).attr("checked",true);
		}else{
			$("#"+all).attr("checked",false);
		}
	}else if(flag=="name"){
		if($("input[name='"+value+"']").length == $("input[name='"+value+"']:checked").length){
			$("#"+all).attr("checked",true);
		}else{
			$("#"+all).attr("checked",false);
		}
	}else if(flag=="tableId"){
		if($("#"+value).find("input:checked").length == $("#"+value).find("input").length){
			$("#"+all).attr("checked",true);
		}else{
			$("#"+all).attr("checked",false);
		}
	}
}