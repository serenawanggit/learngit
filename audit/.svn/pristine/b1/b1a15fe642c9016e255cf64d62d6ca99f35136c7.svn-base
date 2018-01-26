$(function(){
	initHome();
	
	getChildrenMenu();
});

//初始化条件
function initHome(){
	var url = "/audit/homeContro/findAllModule.do";
	$.ajax( {  
		async : false,
        type : "post",  
        url : url,
        dataType:"json",
        success : function(msg) { 
			var json = eval('('+msg+')');
			if (msg == null) {
				return;
			}
			$('#moduleTB').empty();
			var tbStr = '';
			var module = json.modules;
			var xh = 0;
        	for ( var i = 0; i < module.length; i++) {
        		var md = module[i];
        		if (md.grade=="1") {
        		xh++;
				tbStr +="<tr>"+
						"	<td valign='left' style='background-image:url(../../images/topflm_bk002.png);background-repeat:no-repeat;'"+
						"		colspan='2' onclick='menuexpand(this);' value='submenu00"+md.pmid+"'>"+
						"		<table cellpadding='0' cellspacing='0' style='width:212px;'>"+
						"			<tr>"+
						"				<td align='left'>"+
						"					<span style='display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;'>"+
						"					<img src='../../images/"+(xh==1?"icon001.png":"icon002.png")+"' " +
						"						style='vertical-align:middle;margin-left:10px;margin-right:5px;'>"+
						"					<a href='#' style='font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;'>"+
											md.name+
						"					</a>"+
						"					</span>"+
						"				</td>"+
						"				<td align='right'>"+
						"					<img src='../../images/menu_expand.png' style='vertical-align:middle;margin-right:20px;'>"+
						"				</td>"+
						"			</tr>"+
						"		</table>"+
						"	</td>"+
						"</tr>";
//				tbStr +="<tr id='submenu00"+md.pmid+"' class='submenu001' style='display:"+(xh==1?"":"none")+";'>"+
				tbStr +="<tr id='submenu00"+md.pmid+"' class='submenu001'>"+
				"	<td align='left' colspan='2'>"+
				"		<table cellpadding='0' cellspacing='0' style='width:212px;'>";
				for ( var j = 0; j < module.length; j++) {
					var sMd = module[j];
					if (sMd.parentId==md.pmid) {
				tbStr +="			<tr>"+
						"				<td align='left'  mname='"+sMd.name+"' onclick='selectMenu("+sMd.pmid+",&quot"+sMd.name+"&quot);'"+
						"					style='display:none; width:212px;height:40px;background-image:url(../../images/secondflm_bk001.png);'>"+
						"					<img src='../../images/status_green.png' style='vertical-align:middle;margin-left:26px;'>"+
						"					<a id='datasbitem016' target='rightbox' ";
						if ("评估方案查看" == sMd.name) {
							tbStr += "href='../../page/auditing/lookPlan.jsp'  ";
						}else if ("自选特色项目" == sMd.name) {
							tbStr += "href='../../page/auditing/zxFeature.jsp'  ";
						}else if("状态数据" == sMd.name){
							tbStr += "href='../../page/auditing/statusData.jsp'  ";
						}else if("自评报告" == sMd.name){
							tbStr += "href='../../page/auditing/estimate/estimatebyself.jsp'  ";
						}else{
							tbStr += "href='../../page/auditing/goal.jsp'  ";
						}
				tbStr +="						style='font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;'>"+
												sMd.name+
						"					</a>"+
						"				</td>"+
						"			</tr>";
					}//if 结束
				}//for j 结束
				
				tbStr +="		</table>"+
						"	</td>"+
						"</tr>";
				
        		}//if 结束
			}//for i 结束
        	$('#moduleTB').html(tbStr);
		}
	});
}
