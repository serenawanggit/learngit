	jQuery(function(){
		validateLogin();
	//页面加载显示所有报表
	showAllReports();
})



//显示所有报表函数
function showAllReports(){
	var url = "/audit/reportTable/listReportTables.do";
	var str = "";
	$.ajax({
		async:false,
		url:url,
		dataType:"json",
		type:'get',
		error:function(){
			alert("系统自身原因，请联系技术人员");
		},
		success:function(data){
			if(eval(data) == null){
				return;
			}
		
			var os = eval('(' + data + ')');
			var k = 0;
			jQuery.each(os,function(i,value){
				k++;
				str += "<tr style='font-size:12px;'>";
				str += "<td style='width:60px;height:30px;' align='center'>"+k+"</td>";
				str += "<td style='width:200px;height:30px;' align='center'><a href='/audit/downReport?reportid="+value.reportid+"' style='color:black;text-decoration:none;'>"+value.reportName+"</a></td>";
				str += "<td style='width:300px;height:30px;' align='center'>"+value.reportContent+"</td>";
				str += "<td style='width:100px;height:30px;' align='center'><a href='javascript:lookthis("+value.reportid+")'>查看</a></td>";
				str += "</tr>";
			});
			jQuery("#rtshow tbody").append(str);
		}
	});
}
	
	
	
	
	function lookthis(reportid){
	    if(reportid == "1"){
	    	window.location.href = "/audit/page/qualityReport/highBaseTable/G318.jsp";
		}else if(reportid == "2"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G314.jsp";
		}else if(reportid == "3"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G313.jsp";
		}else if(reportid == "4"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G424.jsp";
		}else if(reportid == "5"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G411.jsp";
		}else if(reportid == "6"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G461.jsp";
		}else if(reportid == "7"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G312.jsp";
		}else if(reportid == "8"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G311.jsp";
		}else if(reportid == "9"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G361.jsp";
		}else if(reportid == "10"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G317.jsp";
		}else if(reportid == "11"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G371.jsp";
		}else if(reportid == "12"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G511.jsp";
		}else if(reportid == "13"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G932.jsp";
		}else if(reportid == "14"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G522.jsp";
		}else if(reportid == "15"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G331.jsp";
		}else if(reportid == "16"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G332.jsp";
		}else if(reportid == "17"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G112.jsp";
		}else if(reportid == "18"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G451.jsp";
		}else if(reportid == "19"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G321.jsp";
		}else if(reportid == "20"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G341.jsp";
		}else if(reportid == "21"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G351.jsp";
		}else if(reportid == "22"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G322.jsp";
		}else if(reportid == "23"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G421.jsp";
		}else if(reportid == "24"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G422.jsp";
		}else if(reportid == "25"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G431.jsp";
		}else if(reportid == "26"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G441.jsp";
		}else if(reportid == "27"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G423.jsp";
		}else if(reportid == "28"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G931.jsp";
		}else if(reportid == "29"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G521.jsp";
		}else if(reportid == "30"){
			window.location.href = "/audit/page/qualityReport/highBaseTable/G111.jsp";
		}else{
			return;
		}
}
	
	
	function returnreporti(){
		window.location.href = "/audit/page/qualityReport/homeReport.jsp";
	}