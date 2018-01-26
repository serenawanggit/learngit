$(function(){
	$.ajaxSetup({cache: false}); 
});

/**
 * js获取项目根路径，
 */
function getRootPath(){
    var base = document.getElementById('servUrl');
    return base.value;
};

function getDlyzPath(){
	var base = document.getElementById('dlyzserver');
    return base.value;
}

function getTqccPath(){
	var base = document.getElementById('tqccserver');
    return base.value;
}


function checknum(value) {
    var Regx = /^[A-Za-z0-9]*$/;
    if (Regx.test(value)) {
        return true;
    }
    else {
        return false;
    }
}

function getStr(str,length){
	if(str.length <= length){
		return str;
	}else{
		return str.substring(0,length) + "***";
	}
	
}

function myTrim(str){
	for ( var i = 0; i < str.length; i++) {
		var star = str.substring(0, 1);
		if (star == " ") {
			str = str.substring(1, str.length);
		}
		var end = str.substring(str.length-1, str.length);
		if (end == " ") {
			str = str.substring(0, str.length-1);
		}
	}
	return str;
}

function getRequest() {
	var url = decodeURI(location.search); // 获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for ( var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

// rgb 转 16 进制
function rgbhex(rgb) {
	  if (rgb.charAt(0) == '#')
	    return rgb;
	 
	  var ds = rgb.split(/\D+/);
	  var decimal = Number(ds[1]) * 65536 + Number(ds[2]) * 256 + Number(ds[3]);
	  return "#" + zero_fill_hex(decimal, 6);
	}


/**
 * 格式化起始年份
 * 
 * @param id
 */
function formatStartYear(id){
	var endYear = getYear();
	var str = "";
	for ( var i = endYear; i > 2011; i--) {
		str += "<option value='"+i+"'>"+i+"</option>";
	}
	str += "<option value='2011' selected>2011</option>";
	$("#"+id).html(str);
}

/**
 * 格式化结束年份
 * 
 * @param id
 */
function formatEndYear(id){
	var endYear = getYear();
	var str = "";
	str += "<option value='"+endYear+"' selected>"+endYear+"</option>";
	for ( var i = endYear - 1; i >= 2011; i--) {
		str += "<option value='"+i+"'>"+i+"</option>";
	}
	$("#"+id).html(str);
}

/**
 * 获取年份时间
 */
function getYear(){
	var date=new Date();
	var nowYear=date.getFullYear();
	var nowMonth=date.getMonth()+1;
	var nowDate=date.getDate();
	
	if(nowMonth>9){
		return nowYear;
	}else{
		return nowYear-1;
	}
}