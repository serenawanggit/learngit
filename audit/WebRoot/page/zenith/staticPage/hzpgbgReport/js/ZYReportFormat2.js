/**
 * 显示lodding div
 */
function showLodding() {
	$(".loadding").show();
}
var request=GetRequest();
/**
 * 获得学科门类
 * @returns
 */
function getNum(){
	return request.collegeLx;
}
/**
 * 获得学院专业代码
 * @returns
 */
function getCode(){
	return request.code;
}

function getName(){
	return request.name;
}
function GetRequest() { 
	var url = window.location.search; //获取url中"?"符后的字串 
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	} 
	/*var name=decodeURI(theRequest.name);
	name=name.split("'");
	$("#text").html(name[1]);*/
	return theRequest; 
}
/**
 * 隐藏lodding div
 */
function hideLodding() {
	$(".loadding").fadeOut(1000);
}

/**
 * 格式化起始年份
 * 
 * @param id
 */
function formatStartYear(id) {
	var endYear = getYear();
	var str = "";
	for ( var i = endYear; i > 2011; i--) {
		str += "<option value='" + i + "'>" + i + "</option>";
	}
	str += "<option value='2011' selected>2011</option>";
	$("#" + id).html(str);
}

String.prototype.trim = function () {
	return this .replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
 }

/**
 * 格式化结束年份
 * 
 * @param id
 */
function formatEndYear(id) {
	var endYear =getYear();
	var str = "";
	//str += "<option value='" + endYear + "/09/30' selected>" + endYear + "/09/30</option>";
	for ( var i = endYear; i >= 2014; i--) {
		str += "<option value='" + i + "/09/30'>" + i + "/09/30</option>";
	}
	$("#" + id).html(str);
}

/**
 * 获取年份时间
 */
function getYear() {
	var date = new Date();
	var nowYear = date.getFullYear();
	var nowMonth = date.getMonth() + 1;
	var nowDate = date.getDate();
	
	if (nowMonth > 9) {
		return nowYear;
	} else {
		return nowYear;
	}
}

/**
 * 数据格式化
 */
function valueFormat(value,flag) {
	if (value == undefined || value == null || value == 0 || value=="") {
		return "0";
	}
	var num = parseFloat(value);   
        var a=num.toString();
   

      
	switch (flag) {
	case 1: // 转百分比，保留两位小数
              if(num==1){
                  return num * 100;
              }else{
                   var c=  (num * 100).toFixed(2);
                   var d=c.split(".");
                   if(d[1]=="00"){
                      return d[0];
                   }else{
                      return c;
                   }
              
              }
		
	case 2: // 保留两位小数

                if(a.indexOf(".")>0){
                    return num.toFixed(2); 
                }else{
                     return num
                }
		
//	case 3: // 保留两位小数
//		return (num * 100).toFixed(2)+"%";
	default:
		return value;
	}

}

/*function ZYyear(year,key){
	alert(year+"=="+key);
}*/