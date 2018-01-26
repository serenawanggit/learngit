/*公共界面导航条 控制界面主题内容显示*/
function tabChange_workSchedule(obj) {
	var container = $("iframe[name = 'main']");
	var oList = '2015';
	container.attr("src", "/audit/examineScene/schedule.do?year="+oList);
	$('.topTab a').css("border-bottom", "2px solid #404A58");
	var obj = $(obj);
	obj.css("border-bottom", "2px solid #19C6A1");
}
function tabChange_myInspection(obj) {
	var container =$("iframe[name = 'main']");
	var oList = '2015';
	container.attr("src", "/audit/examineScene/scene.do?year="+oList);
	$('.topTab a').css("border-bottom", "2px solid #404A58");
	var obj = $(obj);
	obj.css("border-bottom", "2px solid #19C6A1");
}
function tabChange_myAssessment(obj) {
	var container =$("iframe[name = 'main']");
	var oList = '2015';
	container.attr("src", "/audit/examineScene/assessResult.do?year="+oList);
	$('.topTab a').css("border-bottom", "2px solid #404A58");
	var obj = $(obj);
	obj.css("border-bottom", "2px solid #19C6A1");
}
function tabChange_expertAssessment(obj) {
	var container =$("iframe[name = 'main']");
	container.attr("src", "/audit/page/majorEvaluation/siteVisitExpertAssessment.jsp");
	$('.topTab a').css("border-bottom", "2px solid #404A58");
	var obj = $(obj);
	obj.css("border-bottom", "2px solid #19C6A1");

}