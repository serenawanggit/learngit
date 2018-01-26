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

function getDate(){
	return request.dateReport;
}

/**
 * 获取学院专业名称
 * @returns
 */
function getMajorName(){
	return decodeURI(request.majorName,"UTF-8");
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
	var endYear =getYear()+1;
	var str = "";
	str += "<option value='" + endYear + "/09/30' selected>" + endYear + "/09/30</option>";
	for ( var i = endYear; i >= 2014; i--) {
		str += "<option value='" + i + "/09/30'>" + i + "/09/30</option>";
	}
	$("#" + id).html(str);
}

function formatDate(id){
	var dateReport = request.dateReport + "";
	var year = parseInt(dateReport.split("/")[0]);
	var str = "<option value='"+(year-3)+"/09/30'>"+(year-3)+"/09/30</option>";
	str += "<option value='"+(year-2)+"/09/30'>"+(year-2)+"/09/30</option>";
	str += "<option value='"+(year-1)+"/09/30'>"+(year-1)+"/09/30</option>";
	str += "<option value='"+(year)+"/09/30' selected>"+(year)+"/09/30</option>";
	str += "<option value='"+(parseInt(year)+1)+"/09/30'>"+(year+1)+"/09/30</option>";
	str += "<option value='"+(parseInt(year)+2)+"/09/30'>"+(year+2)+"/09/30</option>";
	str += "<option value='"+(parseInt(year)+3)+"/09/30'>"+(year+3)+"/09/30</option>";
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
	
		return nowYear;
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


function findTableDatas(tableName){
//	表1_10校友会于社会合作
	var templateId = 0;
	
	//查询templateId
	$.ajax({
		url:"/audit/analysisReport/getTemplateByTableName.do",
		type:'POST',
		async:false,
		data:{
			"tableName":tableName
		},
		success:function(data){
			var datas = eval("("+data+")");
			templateId = datas[0].ID;
		}
	});
	//查询templateId
	$.ajax({
		url:"/audit/analysisReport/findFieldByTemplateId.do",
		type:'POST',
		async:false,
		data:{
			"templateId":templateId
		},
		success:function(data){
			var datas = eval("("+data+")");
//			$("#td_1").css("colspan",datas.length-2);
			var str = "";
			$.each(datas,function(i,dom){
				if(dom.FIELD_ENAME!="ID" && dom.FIELD_ENAME!="ERROR_MSG"){
					str += "<td>"+dom.FIELD_CNAME+"</td>";
				}
			});
			$("#tr_1").html(str);
		}
	});
	
	//查询表信息
	$.ajax({
		url:"/audit/analysisReport/findAllDataByTableName.do",
		type:'POST',
		async:false,
		data:{
			"templateId":templateId,
			"dateReport":$("#year").val()
		},
		success:function(data){
			var datas = eval("("+data+")");
			var str = "";
			$.each(datas,function(i,dom){
				str += "<tr>";
				$.each(dom,function(k,obj){
					if(k!="REPORT_DATE" && k!="USER_ID" && k!="SCHOOL_ID" && k!="ERROR_MSG" && k!="ID"){
						str += "<td>"+(obj==undefined?"":obj)+"</td>";
					}
				})
//				if(dom.FIELD_ENAME!="ID" && dom.FIELD_ENAME!="ERROR_MSG"){
//					alert(dom.FIELD_CNAME);
//					str += "<td>"+dom.FIELD_CNAME+"</td>";
//				}
				str += "</tr>";
			});
			$("#tbody_1").html(str);
		}
	});
	
	//弹窗
	var winWidth = window.innerWidth;
	var leftWidth = winWidth/2-580;
	$.ligerDialog.open({
		target : $("#showTableData"),
		height : 600,
		width : 1000,
		top : 50,
		left : leftWidth,
		title : '查看',
		showMax : false,
		showToggle : true,
		showMin : false,
		isResize : true,
		slide : false,
		isHidden:false,
//			fixedType:'se',
		buttons:[{text:'关闭',
			onclick:function(item, dialog){
				dialog.close();
			}
		}]
	});
}


//数字四舍五入（保留n位小数）
function getFloat(number, n) { 
 n = n ? parseInt(n) : 0; 
 if (n <= 0) return Math.round(number); 
 number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n); 
 return number; 
};

/*function ZYyear(year,key){
	alert(year+"=="+key);
}*/
