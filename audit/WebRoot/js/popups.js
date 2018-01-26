/*--------------------------------------弹出框--------------------------------------*/

//点击确认事件
var btnFn = function( e ){
	alert( e.target );
	return false;
};

/*
 *确定按钮 无 
 *取消按钮 无 
 *title 标题
 *content 内容
 *width 宽度 默认'700' 单位px
 *height高度 默认'300' 单位px
 */
function tsk1(title,content,width,height){
	easyDialog.open({
		container : {
			header : title,
			content : content
		},
		fixed : false,
//		width: width==null?'700':width,
		width: width || '700',
		height:	height==null?'300':height
	});
}

/*
 *温馨提示
 *确定按钮 有 
 *取消按钮 有
 *title 标题
 *content 内容
 *width 宽度 默认'700' 单位px
 *height高度 默认'300' 单位px
 */
function tsk2(title,content,width,height,mybtnFn){
	easyDialog.open({
		container : {
			header : title,
			content : content,
			yesFn : mybtnFn,
			yesText:"保存",
			noFn : true
		},
		fixed : false,
		width: width==null?'700':width,
		height:	height==null?'300':height
	});
}

function tck(){
	easyDialog.open({
		container : {
			header : "弹出层标题2",
			content : getAddZbHtml(),
			noFn : true
		},
		fixed : false,
		width: '700px',
		height:	'300px'
	});
}

function getAddZbHtml(){
	var shtml = '<table width="580" border="0" cellspacing="0" cellpadding="0" style="margin-left: 25px;margin-top: 10px;">'+
				'  </table>';
	return shtml;
}
