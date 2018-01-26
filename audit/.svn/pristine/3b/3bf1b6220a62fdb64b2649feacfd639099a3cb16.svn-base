$(document).ready(function() {
	validateLogin();
	// 界面加载时执行select数据绑定
	getYearData();
	
	}); 
function getYearData(){
	$.ajax({
		url : "/audit/asAccessStatusController/getYearData.do",
		type : "POST",
		dataType : "json",
		data : {},
		success : function(data) {
			var result = eval("(" + data + ")");
			if (result.flag!=1) {
				return;
			}
			var yearList = result.yearList;
			var str = "";
			var nowYear = "";
			//获取年份
			 var strCookie = document.cookie;
			 var cookies = strCookie.split("; ");
			 for(var i=0;i<cookies.length;i++){
			 	var cookie = cookies[i];
			 	var details = cookie.split("=");
			 	if(details[0] == "assessYear"){
			 		nowYear = eval(details[1]);
			 	}
			 }
			for ( var i = 0; i < yearList.length; i++) {
				if(yearList[i].access_year == nowYear){
					str += "<option value='" + yearList[i].access_year + "' selected='selected'>";
					str +=  yearList[i].access_year +"</option>";
				}else{
					str += "<option value='" + yearList[i].access_year + "' >";
					str +=  yearList[i].access_year +"</option>";
				}
				
			}
			$("#selectYear").html(str);
			changeStatus();
		},
		error : function() {
		}
	});
}
//查询评估状态数据
function getStatusEstimationData(year){
	$.ajax({
		url : "/audit/asAccessStatusController/getStatusEstimationData.do",
		type : "POST",
		dataType : "json",
		data : {year:year},
		success : function(data) {
			var result = eval("(" + data + ")");
			if (result.flag!=1) {
				$('#bottom-table-body').html("<td colspan='9'><span style='color:red;width:100%;font-size:14px'>没有该条件的数据</span></td>");
				return;
			}
			var statusList = result.statusList;
			
			var str = "";
			var userStr="";
			var timeStr="";
			var next=0;
			for ( var i = 0; i < statusList.length-1; i++) {
				if(next==0){
					str+="<tr> <td>"+statusList[i].id+"</td>";//序号
					str+="<td>"+statusList[i].academy_name+"</td>";//学院
					str+="<td>"+statusList[i].specialty_name+"</td>";//专业名称
					str+="<td>"+statusList[i].username+"</td>";//专业负责教授
				}
				//alert(statusList[i].start_datetime.toString());
				if(statusList[i].specialty_id==statusList[i+1].specialty_id){
					if(statusList[i].participate_type==1)//自评纪录
					{
						timeStr+="<td>"+statusList[i].start_datetime+"</td>";//序号
						next=1;//只有自评记录
					}
					if(statusList[i].participate_type==2)//网评纪录
					{
						userStr+="<td>"+statusList[i].name2+"</td>";
						timeStr+="<td>"+statusList[i].start_datetime+"</td>";//序号
						next=2;//只有自评，和网评记录
					}
					if(statusList[i].participate_type==3)//现场考察纪录
					{
						userStr+="<td>"+statusList[i].name3+"</td>";
						timeStr+="<td>"+statusList[i].start_datetime+"</td>";//序号
						next=3;
					}
				}
				else{
					if(next==0){
						userStr+="<td>--</td><td>--</td>";
						timeStr+="<td>"+statusList[i].start_datetime+"</td><td>--</td><td>--</td>";//序号
					}
					if(next==1){
						userStr+="<td>"+statusList[i].name2+"</td><td>--</td>";
						timeStr+="<td>"+statusList[i].start_datetime+"</td><td>--</td>";//序号
					}
					if(next==2){
						userStr+="<td>"+statusList[i].name3+"</td>";
						timeStr+="<td>"+statusList[i].start_datetime+"</td>";//序号
					}
					str+=timeStr+userStr+" </tr>";
					next=0;
					var userStr="";
					var timeStr="";
					//alert("11111"+str);
				}
				
			}
			if(next==0){
				str+="<tr> <td>"+statusList[statusList.length-1].id+"</td>";//序号
				str+="<td>"+statusList[statusList.length-1].academy_name+"</td>";//学院
				str+="<td>"+statusList[statusList.length-1].specialty_name+"</td>";//专业名称
				str+="<td>"+statusList[statusList.length-1].username+"</td>";//专业负责教授
				userStr+="<td>--</td><td>--</td>";
				timeStr+="<td>"+statusList[statusList.length-1].start_datetime+"</td><td>--</td><td>--</td>";//序号
			}
			else if(next==1){
				userStr+="<td>"+statusList[statusList.length-1].name2+"</td><td>--</td>";
				timeStr+="<td>"+statusList[statusList.length-1].start_datetime+"</td><td>--</td>";//序号
			}
			else if(next==2){
				userStr+="<td>"+statusList[statusList.length-1].name3+"</td>";
				timeStr+="<td>"+statusList[statusList.length-1].start_datetime+"</td>";//序号
			}
			str+=timeStr+userStr+" </tr>";
		//	alert(str);
			$('#bottom-table-body').html(str);
		},
		error : function() {
			$('#bottom-table-body').html("<td colspan='9'><span style='color:red;width:100%;font-size:14px'>没有该条件的数据</span></td>");
			}
	});
	
}
function changeStatus(){
	var year=$('#selectYear option:selected').val();//选中的值
	
	//设置年份
	document.cookie="assessYear="+year+";path=/";
	getStatusEstimationData(year);
}