$(function(){
	// 初始化
	init();
});

var page = 1; // 页数
var rows = 10;// 行
var count = 0; // 总行

//var exsits = [2010,2011,2012,2013]; //已抽取的年份
var exsits = [];

// 初始化操作
function init(){
	// 初始化年份，默认起始年份为2010年 结束年份为当前年
	var startYear = 2010;
	var endYear = new Date().getFullYear() + 1;
	
	var str = "";
	for(var i = startYear ; i <= endYear ; i++ ){
		if(!isArr(i)){
			str += "<option value="+i+" disabled='disabled'>"+i+"</option>";
		}else{
			str += "<option value="+i+">"+i+"</option>";
		}
	}
	
	$("#byYear").html(str);
	$("#byYear1").html(str);
	
	$("#dataExtract").click(function(){
		var inputChecks = $("#checkedChoice :checked");
		
		var prols = [];
		var content = []
		$.each(inputChecks,function(i,element){
			prols.push(element.value);
			content.push($(element).parent().find("span").text());
		});
		if(confirm("确定要更新【" + content + "】年份为"+$("#byYear").val()+"的数据吗？")){
			$("#msg").fadeIn(1000);
			$.ajax({
				url : "/TQCC" + "/dataExtract/dataExtract_updateData.htm",
				type : "POST",
				data : {
					year : $("#byYear").val(),
					propsJson : JSON.stringify(prols)
				},
				success : function(data){
					$("#msg").fadeOut(1500);
					logDataPaging();
				},
				error : function(){
					alert("系统忙，请稍后重试！");
				}
			});
		}
	});
	
	//　初始化查询
	logDataPaging();
}

/**
 * 数据更新日志分页查询
 */
function logDataPaging(){
	$.ajax({
		url : "/TQCC" + "/dataExtract/dataExtract_logDataPaging.htm",
		type : "POST",
		data : {
			page : page,
			rows : rows
		},
		success : function(data){
			var result = eval("("+data+")");
			
			var resource = result.resource;
			
			var str = "";
			$.each(resource,function(i,obj){
				str+="<tr ";
				if(i%2==0){
					str+="bgcolor='white'>";
				}else{
					str+="bgcolor='#F5F5F5'>";
				}
				str+=
					"<td >"+obj[0]+"</td>"+
					"<td >"+obj[1]+"</td>"+
					"<td >"+obj[2]+"</td>"+
					"<td >"+obj[4]+"</td>"+
				"</tr>";
			});
			
			//初始化分页需要的数据
			setPagingParam(result);
			
			$("#logdatalist tbody").html(str);
		},
		error : function(){
			alert("系统忙，请稍后重试！");
		}
	});
}

/**
 * 跳到首页
 */
function goFirst(){
	page = 1;
	logDataPaging();
	//修改当前页
	$("#page").val(page);
}

/**
 * 跳到尾页
 */
function goLast(){
	page = count;
	logDataPaging();
	//修改当前页
	$("#page").val(page);
}


/**
 * 上一页
 */
function next(){
	page--;
	if(page==0){
		alert("已经到头了！");
		page++;
		return;
	}
	logDataPaging();
	//修改当前页
	$("#page").val(page);
}

/**
 * 下一页
 */
function forword(){
	page++;
	if(page>count){
		page--;
		alert("这是最后一页了！");
		return;
	}
	logDataPaging();
	//修改当前页
	$("#page").val(page);
}


function isArr(year){
	for ( var i = 0; i < exsits.length; i++) {
		if(year == exsits[i]){
			return false;
		}
	}
	return true;
}

/**
 * 初始化分页需要的数据
 */
function setPagingParam(data){
	total=parseInt(data.total);
	count=parseInt((total%rows==0?total/rows:total/rows+1));
	$("#total").html("共"+total+"条数据");
	$("#rows").html("/"+count);
	$("#page").val(page);
}

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
