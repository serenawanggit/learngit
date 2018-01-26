$(function(){
	qreportquerythml();
})

function qreportquerythml(){
		var shtml="<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>";
		
		shtml+="<tr><td style='height:40px;' align='left'><span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'><span style='display:inline-block;height:28px;line-height:28px;'>质量报告查询</span></span></td><td style='height:40px;' align='right'>&nbsp;</td></tr>";
		
		shtml+="<tr>";
			shtml+="<td style='height:60px;border:#DADADA 1px solid;border-bottom:0px;background-color:#FFFFFF;' align='left' colspan='2'>";
				shtml+="<table cellpadding='0' cellspacing='0' style='width:100%;'>";
					shtml+="<tr>";
						
						shtml+="<td>";
							shtml+="<span style='font-size:12px;display:inline-block;padding-left:10px;width:60px;'>数据报告：</span><span id='datatabmodelcategoryspan'></span>";
							shtml+="&nbsp;&nbsp;报告名称：";
							shtml+="&nbsp;&nbsp;<input type='text'  id='qrnameinput' style='display:inline-block;border:#CCCCCC 1px solid;width:140px;height:18px;line-height:18px;vertical-align:middle;padding-left:5px;padding-right:5px;'>";
							
							shtml+="&nbsp;&nbsp;报告年份：";
							shtml+="&nbsp;&nbsp;<input type='text'  id='qryearinput' style='display:inline-block;border:#CCCCCC 1px solid;width:140px;height:18px;line-height:18px;vertical-align:middle;padding-left:5px;padding-right:5px;'>";
							
							shtml+="&nbsp;<a href='#' ename='search'  onclick='qrcp=1;qrmodel=&quot;&quot;;queryqreport(&quot;4&quot;);return false;'><img src='/audit/page/zenith/staticPage/newMain/images/searchbtn.png' border='0px' style='vertical-align:middle;margin-left:5px;'></a>";
						shtml+="</td>";
						
					shtml+="</tr>";
					
				shtml+="</table>";
			shtml+="</td>";
		shtml+="</tr>";
		shtml+="<tr><td colspan='2'>";
			shtml+="<div id='recorddiv'></div>";
		shtml+="</td></tr>";
		
	shtml+="</table>";
	
	$("#container").html(shtml);
	//数据报表模板类型检索
	querytabmodelcategory("9");
	//质量报告检索
	qrcp=1;
	qrmodel="";
	queryqreport("1");
}

