$(function(){
	alert(12);
	var divStr = "<div id='div1' >" +
			"<img src='/CHART/images/dengdai_lv_se.gif'/></div>";
	$("body").append(divStr);
	
	letDivCenter('#div1');
})

//style='position: absolute;  top: 50%; left: 50%;transform: translate(0, -50%);border:1px solid red;'

function letDivCenter(divName){   
	var top = ($(window).height() - $(divName).height())/2;   
	var left = ($(window).width() - $(divName).width())/2;   
	var scrollTop = $(document).scrollTop();   
	var scrollLeft = $(document).scrollLeft();   
	$(divName).css( { position : 'absolute', 'top' : top + scrollTop, left : left + scrollLeft } ).show();  
}  