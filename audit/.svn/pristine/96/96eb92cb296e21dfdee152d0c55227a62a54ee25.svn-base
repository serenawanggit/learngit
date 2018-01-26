
var w=document.body.clientWidth;
var h=document.body.clientHeight;

//上报计划添加
function adduploadplan(ach){
	/*
	http://127.0.0.1:8880/TQCSERVER/TQCService?GLTP=GLTP001000&planname=2013年数据上报计划&planyear=2012&shcoolyear=2012-2013&pointtime=2012-09-01&status=0&plantype=0
	*/
	//计划名称
	var pnvalue=$1("plannameinput").value;
	//自然年度
	var zyvalue=$1("zyearinput").value;
	//统计学年
	var syvalue=$1("schoolyearinput").value;
	//统计时点
	var ptvalue=$1("pttimeinput").value;	
	
	//统计状态
	var pstatusselect=$1("pstatusselect");
	var pssvalue=pstatusselect.options[pstatusselect.selectedIndex].value;

	
	var d=new Date();
	var tp=getRTP()[1][0];
	var pms="GLTP="+tp+"&planname="+b64(pnvalue)+"&planyear="+zyvalue+"&shcoolyear="+syvalue+"&pointtime="+ptvalue+"&status="+pssvalue+"&plantype="+ach+"&time="+d.getTime();

	new AJAXPOST(pms,tp,ach);
}
//上报计划添加结果处理
function adduploadplan_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo.indexOf("GEO010000")!=-1){
		if(ach=="0"){
			edubasecp=1;
			edubasemodel="1";
			queryedubasetab("3",res.statusInfo.split("_")[1]);
			
			//showalert("教育部上报计划添加成功");
		}else if(ach=="1"){
			
			shjwbasecp=1;
			shjwbasemodel="1";
			queryshjwbasetab("3",res.statusInfo.split("_")[1]);

			//showalert("上海教委上报计划添加成功");
		}
		
	}else if(res.statusInfo.indexOf("GEO010012")!=-1){
		if(ach=="0"){
			showalert("教育部库中缺少基础表");
		}else if(ach=="1"){
			showalert("上海教委库中缺少基础表");
		}
	}else if(res.statusInfo.indexOf("GEO010013")!=-1){
		if(ach=="0"){
			showalert("教育部该自然年上报计划已经添加");
		}else if(ach=="1"){
			showalert("上海教委该自然年上报计划已经添加");
		}
	}else{
		if(ach=="0"){
			showalert("教育部上报计划添加失败");
		}else if(ach=="1"){
			showalert("上海教委上报计划添加失败");
		}
	}
}

//上报计划检索
var plcp=1;
var plmodel="1";
function queryuploadplan(ach){
	plmodel=ach;
	
	var d=new Date();
	var tp=getRTP()[1][3];
	var pms="GLTP="+tp+"&cp="+plcp+"&time="+d.getTime();
	if(ach=="1"||ach=="2"){
		pms+="&plantype=0&pns=10";
	}else if(ach=="3"||ach=="4"){
		pms+="&plantype=1&pns=10";
	}else if(ach=="5"){//教育部数据上传处使用
		pms+="&plantype=0&pns=100";
	}else if(ach=="10"){//教育部数据查询处使用
		pms+="&plantype=0&pns=100";
	}else if(ach=="11"){//教育部导入查询处使用
		pms+="&plantype=0&pns=100";
	}else if(ach=="13"){//教育部导入查询处使用
		pms+="&plantype=0&pns=10";
	}else if(ach=="6"){//上海教委数据上传处使用
		pms+="&plantype=1&pns=100";
	}else if(ach=="7"){//上海教委导入查询处使用--导入明细
		pms+="&plantype=1&pns=100";
	}else if(ach=="8"){//上海教委数据查询处使用
		pms+="&plantype=1&pns=100";
	}else if(ach=="9"){//上海教委导入查询数据表年份选择
		pms+="&plantype=1&pns=100";
	}else if(ach=="12"){//上海教委--一键上报处使用
		pms+="&plantype=1&pns=100";
	}else if(ach=="14"){//上海教委--首页使用
		pms+="&plantype=1&pns=10";
	}
	if(ach=="2"||ach=="4"){//上报计划关键字检索
		var pnvalue=$1("plannameinput").value;
		if(pnvalue==null||pnvalue.length<1){
			showalert("请输入查询的上报计划关键字");
			return false;
		}
		pms+="&planname="+b64(pnvalue);
	}
	
	
	new AJAXPOST(pms,tp,ach);
}
//上报计划添加结果处理
function queryuploadplanuploadplan_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"||ach=="2"||ach=="3"||ach=="4"){
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'><td style='width:100px;height:40px;' align='center' valign='middle'><input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/></td><td style='width:160px;'  align='center'>统计计划名称</td><td style='width:100px;' align='center'>统计自然年</td><td style='width:100px;' align='center'>统计学年</td><td style='width:100px;'  align='center'>统计时点</td><td style='width:100px;' align='center'>状态</td><td style='width:100px;' align='center'>操作</td></tr>";
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						/*
						[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
						*/
						
						var storeplan=ach+"=="+res[i].id+"_"+res[i].planname+"_"+res[i].status+"_"+res[i].plantype+"_"+res[i].pointtime+"_"+res[i].planyear+"_"+res[i].shcoolyear+"_"+res[i].totalnums+"_"+res[i].ctime;
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+res[i].id+"'></td>";
							shtml+="<td style='width:160px;border-top:#DADADA 1px solid;' align='center'><a href='#' style='color:#0B8AD9;' onclick='showedudptplanthml(this);return false;' value='"+storeplan+"'>"+res[i].planname+"</a></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;'  align='center'>"+res[i].planyear+"</td><td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].shcoolyear+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].pointtime+"</td><td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getplanstatus(res[i].status)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
								shtml+="<a href='#' onclick='editedudptplanthml(this);return false;' value='"+storeplan+"'><img src='images/bj_icon.png' style='vertical-align:middle;' border='0'><span style='display:inline-block;width:30px;text-align:center;'>编辑</span></a>";
								shtml+="<a href='#' onclick='deleteuploadplan(this);return false;' value='"+res[i].id+"'><img src='images/sc_icon.png' style='vertical-align:middle;border:0px;'><span style='display:inline-block;width:30px;text-align:center;'>删除</span></a>";
							shtml+="</td>";
							
						shtml+="</tr>";
					}
					//====================分页查询开始====================
				
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='7'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefindeduplan(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefindeduplan(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+plcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefindeduplan(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									
									shtml+="<img value='4_0' onclick='pagefindeduplan(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="5"){
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			
			var shtml="";
			shtml+="<select id='zyearselect' onchange='findedubyyear();' style='border:#DADADA 1px solid;height:24px;line-height:24px;width:160px;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].planyear+"'>"+res[i].planyear+"年</option>";
			}
			shtml+="</select>";
			$1("zryearspan").innerHTML=shtml;
		}else if(ach=="6"){
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			
			var shtml="";
			shtml+="<select id='zyearselect' onchange='findshjwbyyear();' style='border:#DADADA 1px solid;height:24px;line-height:24px;width:160px;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].planyear+"'>"+res[i].planyear+"年</option>";
			}
			shtml+="</select>";
			$1("zryearspan").innerHTML=shtml;
		}else if(ach=="7"){//上海教委导入查询处使用
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			
			var shtml="";
			shtml+="<select id='zyearselect' onchange='findjwimpitembyyear();' style='border:#DADADA 1px solid;height:24px;line-height:24px;width:160px;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].planyear+"'>"+res[i].planyear+"年</option>";
			}
			shtml+="</select>";
			$1("zryearspan").innerHTML=shtml;
		}else if(ach=="8"){//上海教数据查询处使用
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			
			var shtml="";
			shtml+="<select id='zyearselect' onchange='findallhavecreate();' style='border:#DADADA 1px solid;height:24px;line-height:24px;width:160px;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].planyear+"'>"+res[i].planyear+"年</option>";
			}
			shtml+="</select>";
			$1("zryearspan").innerHTML=shtml;
		}else if(ach=="9"){//上海教数据查询处使用
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			
			var shtml="";
			shtml+="<select id='zyearselect' onchange='findallhavecreateforimp();' style='border:#DADADA 1px solid;height:24px;line-height:24px;width:160px;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].planyear+"'>"+res[i].planyear+"年</option>";
			}
			shtml+="</select>";
			$1("zryearspan").innerHTML=shtml;
		}else if(ach=="10"){//教育部数据查询处使用
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			
			var shtml="";
			shtml+="<select id='zyearselect' onchange='findedubyyearofdataquery();' style='border:#DADADA 1px solid;height:24px;line-height:24px;width:160px;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].planyear+"'>"+res[i].planyear+"年</option>";
			}
			shtml+="</select>";
			$1("zryearspan").innerHTML=shtml;
		}else if(ach=="11"){//教育部导入查询处使用
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			
			var shtml="";
			shtml+="<select id='zyearselect' onchange='findedubyyearofimpquery();' style='border:#DADADA 1px solid;height:24px;line-height:24px;width:160px;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].planyear+"'>"+res[i].planyear+"年</option>";
			}
			shtml+="</select>";
			$1("zryearspan").innerHTML=shtml;
		}else if(ach=="12"){//上海教委数据上报一键上报处使用
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			
			var shtml="";
			shtml+="<select id='zyearselectforonekey' style='border:#DADADA 1px solid;height:24px;line-height:24px;width:160px;'>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].planyear+"'>"+res[i].planyear+"年</option>";
			}
			shtml+="</select>";
			$1("zryearforonekeyuploadspan").innerHTML=shtml;
		}else if(ach=="13"){//首页使用
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 0px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						/*
						[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
						*/
						
						shtml+="<tr><td style='height:30px;width:160px;border-bottom:#DADADA 1px dotted;padding-left:20px;' align='left'><a href='#' style='color:#333333;text-decoration:none;' onclick='fpmoresbjhdetail();return false;'>"+res[i].planname+"</a></td></tr>";
					}
					
				shtml+="</table>";
			$1("jybdatafinddiv").innerHTML=shtml;
		}else if(ach=="14"){//首页使用
			/*
			[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 0px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						/*
						[{"id":1,"planname":"2013年数据上报计划","status":0,"plantype":0,"pointtime":"2012-09-01","planyear":"2012","shcoolyear":"2012-2013","totalnums":1,"ctime":"2014-08-07 18:02:05.0430000"}]
						*/
						
						shtml+="<tr><td style='height:30px;width:160px;border-bottom:#DADADA 1px dotted;padding-left:20px;' align='left'><a href='#' style='color:#0B8AD9;text-decoration:none;color:#333333;'>"+res[i].planname+"</a></td></tr>";
					}
					
				shtml+="</table>";
			$1("shjwdatafinddiv").innerHTML=shtml;
		}
	}else{
		if(ach=="1"||ach=="2"){
			$1("recorddiv").innerHTML="<table style='height:100%;width:100%;font-size:20px;'><tr><td align='center'>教育部上报计划检索没有结果"+txt+"</td></tr></table>";
		}else if(ach=="3"||ach=="4"){
			$1("recorddiv").innerHTML="<table style='height:100%;width:100%;font-size:20px;'><tr><td align='center'>上海教委上报计划检索没有结果"+txt+"</td></tr></table>";
		}
	}
}

//教育部基本表数据年份查询
function findedubyyear(){
	//教育部基础表查询信息初始化
	edubasecp=1;
	edubasemodel="1";
	//教育部数据上报基础表查询
	queryedubasetab("2");
}	

//教育部基本表数据年份查询--数据查询处使用
function findedubyyearofdataquery(){
	//教育部基础表查询信息初始化
	edubasecp=1;
	edubasemodel="1";
	//教育部数据上报基础表查询
	queryedubasetab("6");
}

//教育部基本表数据年份查询--导入查询处使用
function findedubyyearofimpquery(){
	//教育部基础表查询信息初始化
	edubasecp=1;
	edubasemodel="1";
	//教育部数据上报基础表查询
	queryedubasetab("9");
}	

/*
//上海教委导入查询年份查询
function findjwimpitembyyear(){
	//上海教委数据导入查询
	jwimpcp=1;
 	jwimpmodel="1";
	queryshjwimport("2");

}
*/

//上海教委数据查询模块--年份条件切换
function findallhavecreate(){
	//上海教委基础表查询
	shjwbasecp=1;
	shjwbasemodel="1";
	queryshjwbasetab("6");
}

//上海教委数据查询模块--年份条件切换
function findallhavecreateforimp(){
	//上海教委基础表查询
	shjwbasecp=1;
	shjwbasemodel="1";
	queryshjwbasetab("9");
}

//上海教委基本表数据年份查询
function findshjwbyyear(){
	//上海教委基础表查询
	shjwbasecp=1;
	shjwbasemodel="1";
	queryshjwbasetab("2");
}

//全选
function selectAll(){
	var checklist = document.getElementsByName ("selected");
    if(document.getElementById("controlAll").checked){
		for(var i=0;i<checklist.length;i++){
			checklist[i].checked = 1;
		} 
 	}else{
		for(var j=0;j<checklist.length;j++){
			 checklist[j].checked = 0;
		}
 	}
}



//分页查询教育部数据上报计划
function pagefindeduplan(obj){
	
	var p=obj.getAttribute("value").split("_");

	if(p[0]=="1"){//首页
	    plcp="1";
		
		queryuploadplan(plmodel);
	}else if(p[0]=="2"){//上一页
		if(plcp=="1"){
			showalert("当前页已经是第一页了");
			return;
		}else{
			plcp=parseInt(plcp)-1;
		}
		queryuploadplan(plmodel);
	}else if(p[0]=="3"){//下一页
		/*
		if(zjjltjcp==p[1]){
			showalert("已经是最后一页了!");
			return;
		}
		*/
		plcp=parseInt(plcp)+1;
		
 		queryuploadplan(plmodel);
	}else if(p[0]=="4"){//下一页
		var pnos=$1("pagenotext").value;
		if(pnos.length<1){
			showalert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			showalert("输入非页码数字");
			return;
		}else{/*
			if(pnums>parseInt(p[1])){
				showalert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
			*/
				plcp=pnos;
				queryuploadplan(plmodel);
			//}
		}
	}
}

//获取上报计划状态
function getplanstatus(st){
	if(st=="0"){
		return "计划";
	}else if(st=="1"){
		return "编制中";
	}else if(st=="2"){
		return "完成";
	} 
}

//获取总页数
function getAllPages(totalnums,pns){
	var ye=parseInt(totalnums)%pns;
	var pgs=Math.floor(parseInt(totalnums)/pns);
	if(ye==0){
		return pgs;
	}else{
		return pgs+1;
	}
}

//上报计划删除
function deleteuploadplan(obj){		
	if(!confirm('是否确认删除该上报计划?')){
	   return;
	}
	
	var d=new Date();
	var tp=getRTP()[1][1];
	/*
	http://127.0.0.1:8880/TQCSERVER/TQCService?GLTP=GLTP001001&upid=1
	*/
	
	var pms="GLTP="+tp+"&upid="+obj.getAttribute("value")+"&time="+d.getTime();
	
	new AJAXPOST(pms,tp,"1");
}

//教育部上报计划批量删除
function deleteAlleduplan(){
	var checklist = document.getElementsByName ("selected");
	
	var allid="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked){
			allid+=checklist[i].value+",";
		}
	}
	if(allid.length<1){
		showalert("请选择要删除的上报计划");
		return;
	}
	
	var newalleduid=allid.substring(0,allid.length-1);
	
	var d=new Date();
	var tp=getRTP()[1][1];	
	var pms="GLTP="+tp+"&upid="+newalleduid+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"2");
	
}

//上报计划删除结果处理
function deleteuploadplan_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO010020"){
		if(ach=="1"){
			queryuploadplan(plmodel);
		}else if(ach=="2"){//教育部上报计划数据批量删除成功
			queryuploadplan(plmodel);
		}
	}else{
		showalert("上报计划删除失败");
	}
}

//上报计划编辑保存
function edituploadplan(obj){
	/*
	obj value
		var storeplan=ach+"=="+res[i].id;
		
		*/
	/*
	http://127.0.0.1:8880/TQCSERVER/TQCService?GLTP=GLTP001000&planname=2013年数据上报计划&planyear=2012&shcoolyear=2012-2013&pointtime=2012-09-01&status=0&plantype=0
	*/
	//计划名称
	var pnvalue=$1("plannameinput").value;
	//自然年度
	var zyvalue=$1("zyearinput").value;
	//统计学年
	var syvalue=$1("schoolyearinput").value;
	//统计时点
	var ptvalue=$1("pttimeinput").value;	
	
	//统计状态
	var pstatusselect=$1("pstatusselect");
	var pssvalue=pstatusselect.options[pstatusselect.selectedIndex].value;
	
	//传递过来的参数信息
	var cdpms=obj.getAttribute("value").split("==");
	var plantype="";
	if(cdpms[0]=="1"||cdpms[0]=="2"){//教育部
		plantype="0";
	}else if(cdpms[0]=="3"||cdpms[0]=="4"){//上海教委
		plantype="1";
	}
	var d=new Date();
	var tp=getRTP()[1][2];
	var pms="GLTP="+tp+"&planname="+b64(pnvalue)+"&planyear="+zyvalue+"&shcoolyear="+syvalue+"&pointtime="+ptvalue+"&status="+pssvalue+"&plantype="+plantype+"&upid="+cdpms[1]+"&time="+d.getTime();
	new AJAXPOST(pms,tp,cdpms[0]);
}
//上报计划编辑结果处理
function edituploadplan_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO010040"){
		if(ach=="1"||ach=="2"){
			showalert("教育部上报计划编辑成功");
		}else if(ach=="3"||ach=="4"){
			showalert("上海教委上报计划编辑成功");
		}
	}else{
		if(ach=="1"||ach=="2"){
			showalert("教育部上报计划编辑失败");
		}else if(ach=="3"||ach=="4"){
			showalert("上海教委上报计划编辑失败");
		}
	}
}


//教育部数据上报基础表查询
var edubasecp=1;
var edubasemodel="";
var xxx_x="";
function queryedubasetab(ach,pid){
	edubasemodel=ach;
	xxx_x=pid;
	
	var d=new Date();
	var tp=getRTP()[1][4];
	var pms="GLTP="+tp+"&cp="+edubasecp+"&pns=7&time="+d.getTime();
	
	if(ach=="1"){
		pms="GLTP="+tp+"&cp="+edubasecp+"&pns=7&time="+d.getTime();
	}else if(ach=="2"){//教育部基本表年份查询
		pms="GLTP="+tp+"&cp="+edubasecp+"&pns=7&time="+d.getTime();
		
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
	}else if(ach=="3"){//上报计划添加处刷新使用
		pms+="&pid="+pid;
	}else if(ach=="4"||ach=="12"){//上报计划编辑处刷新使用--及查看出使用
		pms+="&pid="+pid;
	}else if(ach=="5"){
		pms="GLTP="+tp+"&cp="+edubasecp+"&pns=7&time="+d.getTime();
	}else if(ach=="6"){//教育部基本表年份查询-数据查询处使用
		pms="GLTP="+tp+"&cp="+edubasecp+"&pns=7&time="+d.getTime();
		
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
	}else if(ach=="7"){//教育部基本表表名年份查询-数据查询处使用
		pms="GLTP="+tp+"&cp="+edubasecp+"&pns=7&time="+d.getTime();
		
		var tabinputvalue=$1("tabinput").value;
		if(tabinputvalue.length<1){
			showalert("数据表名参数为空！");
			reutrn;
		}else{
			pms+="&tabname="+b64(tabinputvalue);
		}
		
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
	}else if(ach=="8"){//教育部基本表表名年份查询-导入查询处使用
		pms="GLTP="+tp+"&cp="+edubasecp+"&pns=7&time="+d.getTime();
		
	}else if(ach=="9"){//教育部基本表年份查询-导入查询处使用
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
	}else if(ach=="10"){//教育部基本表表名年份查询-导入查询处使用
		var tabinputvalue=$1("tabinput").value;
		if(tabinputvalue.length<1){
			showalert("数据表名参数为空！");
			reutrn;
		}else{
			pms+="&tabname="+b64(tabinputvalue);
		}
		
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
	}
	
	new AJAXPOST(pms,tp,ach,pid);
}
//教育部数据上报基础表查询结果处理
function queryedubasetab_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"||ach=="2"){
			/*
			[{"tabsourcetp":"0","RNAME":"学校概况(时点)","addtime":"2014-08-09 21:10:24.9000000","pmid":"30","createstatus":"0","zyear":"2014","pid":"7","totalnums":69,"pttime":"2014-09-01","ctime":"","syear":"2014-2015","tabid":"20762"}]

			*/
			
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
					shtml+="<td style='width:60px;height:40px;border-right:#DADADA 1px solid;' align='center'>";
						shtml+="<input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/>";
					shtml+="</td>";
					shtml+="<td style='width:100px;' align='center'>数据表名</td>";
					shtml+="<td style='width:100px;'  align='center'>要求统计时间</td>";
					shtml+="<td style='width:100px;' align='center'>计划统计时间</td>";
					shtml+="<td style='width:100px;' align='center'>生成状态</td>";
					shtml+="<td style='width:100px;' align='center'>上次生成时间</td>";
					shtml+="<td style='width:100px;' align='center'>操作</td>";
				shtml+="</tr>";
				
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME;
					
					
					var timeyear="";
					var tttime=getpttype(res[i].RNAME,1);
					if(tttime=="自然年"){
						timeyear=res[i].zyear;
					}else if(tttime=="学年"){
						timeyear=res[i].syear;
					}else if(tttime=="时点"){
						timeyear=res[i].pttime;
					}
						
					shtml+="<tr style='background-color:"+itembk+";'>";
						shtml+="<td style='width:60px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'>";			//if(res[i].createstatus=="1"){
								shtml+="<input type='checkbox' name='selected' value='"+basetabinfo+"'>";
							//}else{
								//shtml+="<input type='checkbox' disabled>";
							//}
						
						shtml+="</td>";
						
						/*
						shtml+="<td style='width:200px;border-top:#DADADA 1px solid;' align='center'>";
							shtml+="<a href='#' onclick='vieweducreatetabdetail(this);return false;' value='"+basetabinfo+"_0_"+timeyear+"' style='display:inline-block;width:200px;text-align:center;'>"+getpttype(res[i].RNAME,0)+"</a>";
						shtml+="</td>";
						*/
						
						shtml+="<td style='width:200px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								shtml+="<a href='#' onclick='vieweducreatetabdetail(this);return false;' value='"+basetabinfo+"_0_"+timeyear+"' style='display:inline-block;width:200px;text-align:center;'>"+getpttype(res[i].RNAME,0)+"</a>";
							}else{
								shtml+="<a href='#' style='display:inline-block;width:200px;text-align:center;color:#999999;' onclick='alert(&quot;还未生成，无法查看！&quot;);return false;' value='' >"+getpttype(res[i].RNAME,0)+"</a>";
							}
						shtml+="</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getpttype(res[i].RNAME,1)+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].pttime)+"</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_ok.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_ok.png' style='width:50px;height:22px;'>";
							}else{
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_not.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_not.png' style='width:50px;height:22px;'>";
							}
						shtml+="</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].ctime)+"</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							shtml+="<a href='#' onclick='vieweducreatetabdetail(this);return false;' value='"+basetabinfo+"_0_"+timeyear+"'><img src='images/ck_icon.png' border='0px' title='' alt='' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;color:#333333;'>查看</span></a> ";
							shtml+="<a href='#' onclick='getjasperreport(this);return false;' value='"+basetabinfo+"_1_"+timeyear+"'><img src='images/ct_icon.png' border='0px' title='' alt='' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;color:#333333;'>生成</span></a>";
						shtml+="</td>";
						
					shtml+="</tr>";
				}
				//====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+edubasecp+"/"+getAllPages(res[0].totalnums,7)+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="3"||ach=="4"){//上报计划添加处使用
			/*
			[{"tabsourcetp":"0","RNAME":"学校概况(时点)","addtime":"2014-08-09 21:10:24.9000000","pmid":"30","createstatus":"0","zyear":"2014","pid":"7","totalnums":69,"pttime":"2014-09-01","ctime":"","syear":"2014-2015","tabid":"20762"}]

			*/
			var shtml="";
			shtml+="<table id='basetabhtml' style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'><td style='width:100px;height:40px;' align='center'>数据表名</td><td style='width:100px;'  align='center'>要求统计时间</td><td style='width:100px;' align='center'>计划统计时间</td><td style='width:100px;' align='center'>操作</td></tr>";
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME;
					
					shtml+="<tr style='background-color:"+itembk+";'>";
					shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='viewdatatabledetailthml(this);return false;' value='"+basetabinfo+"' style='display:inline-block;width:200px;text-align:center;'>"+getpttype(res[i].RNAME,0)+"</a></td>";
					shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getpttype(res[i].RNAME,1)+"</td>";
					shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><input type='text' value='"+res[i].pttime+"' style='padding-left:5px;padding-right:5px;text-align:center;'></td>";
					shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='updatebasetabpt(this);return false;' value='"+res[i].pmid+"_"+(i+1)+"'>更新时间</a></td>";
					shtml+="</tr>";
				}
				//====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+edubasecp+"/"+getAllPages(res[0].totalnums,7)+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="5"||ach=="6"||ach=="7"){//教育部数据查询处使用
			/*
			[{"tabsourcetp":"0","RNAME":"学校概况(时点)","addtime":"2014-08-09 21:10:24.9000000","pmid":"30","createstatus":"0","zyear":"2014","pid":"7","totalnums":69,"pttime":"2014-09-01","ctime":"","syear":"2014-2015","tabid":"20762"}]

			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'><td style='width:60px;height:40px;border-right:#DADADA 1px solid;' align='center'>序号</td><td style='width:100px;' align='center'>数据表名</td><td style='width:100px;'  align='center'>要求统计时间</td><td style='width:100px;' align='center'>计划统计时间</td><td style='width:100px;' align='center'>生成状态</td><td style='width:100px;' align='center'>上次生成时间</td><td style='width:100px;' align='center'>操作</td></tr>";
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME;
				
					shtml+="<tr style='background-color:"+itembk+";'>";
						shtml+="<td style='width:60px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'>"+(i+1)+"</td>";
						shtml+="<td style='width:200px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								shtml+="<a href='#' onclick='vieweducreatetabdetail(this);return false;' value='"+basetabinfo+"_2' style='display:inline-block;width:200px;text-align:center;'>"+getpttype(res[i].RNAME,0)+"</a>";
							}else{
								shtml+="<a href='#' style='display:inline-block;width:200px;text-align:center;color:#999999;' onclick='alert(&quot;还未生成，无法查看！&quot;);return false;' value='' >"+getpttype(res[i].RNAME,0)+"</a>";
							}
						shtml+="</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getpttype(res[i].RNAME,1)+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].pttime)+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_ok.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_ok.png' style='width:50px;height:22px;'>";
							}else{
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_not.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_not.png' style='width:50px;height:22px;'>";
							}
						shtml+="</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].ctime)+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								shtml+="<a href='#' onclick='vieweducreatetabdetail(this);return false;' value='"+basetabinfo+"_2' >详情</a>";
							}else{
								shtml+="<a href='#' style='display:inline-block;width:200px;text-align:center;color:#999999;' onclick='alert(&quot;还未生成，无法查看！&quot;);return false;' value=''>详情</a>";
							}
						shtml+="</td>";	
						
					shtml+="</tr>";
				}
				//====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+edubasecp+"/"+getAllPages(res[0].totalnums,7)+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="8"||ach=="9"||ach=="10"){//教育部导入查询处使用
			/*
			[{"tabsourcetp":"0","RNAME":"学校概况(时点)","addtime":"2014-08-09 21:10:24.9000000","pmid":"30","createstatus":"0","zyear":"2014","pid":"7","totalnums":69,"pttime":"2014-09-01","ctime":"","syear":"2014-2015","tabid":"20762"}]

			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'><td style='width:60px;height:40px;border-right:#DADADA 1px solid;' align='center'>序号</td><td style='width:100px;' align='center'>数据表名</td><td style='width:100px;'  align='center'>要求统计时间</td><td style='width:100px;' align='center'>计划统计时间</td><td style='width:100px;' align='center'>生成状态</td><td style='width:100px;' align='center'>上次生成时间</td><td style='width:100px;' align='center'>操作</td></tr>";
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo_1="0_"+res[i].tabid+"_"+res[i].RNAME;
					var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME+"_"+res[i].zyear;
					
					shtml+="<tr style='background-color:"+itembk+";'>";
						shtml+="<td style='width:60px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'>"+(i+1)+"</td>";
						shtml+="<td style='width:200px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								shtml+="<a href='#' style='display:inline-block;width:200px;text-align:center;' onclick='vieweducreatetabdetail(this);return false;' value='"+basetabinfo_1+"_2' >"+getpttype(res[i].RNAME,0)+"</a>";
							}else{
								shtml+="<a href='#' style='display:inline-block;width:200px;text-align:center;color:#999999;' onclick='alert(&quot;还未生成，无法查看！&quot;);return false;' value='' >"+getpttype(res[i].RNAME,0)+"</a>";
							}
						shtml+="</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getpttype(res[i].RNAME,1)+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].pttime)+"</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_ok.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_ok.png' style='width:50px;height:22px;'>";
							}else{
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_not.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_not.png' style='width:50px;height:22px;'>";
							}
						shtml+="</td>";
						
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].ctime)+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";						
							if(res[i].createstatus=="1"){
								shtml+="<a href='#' onclick='viewjybimptabdetail(this);return false;' value='"+basetabinfo+"' ><img src='images/ck_icon.png' border='0px' title='' alt='' style='vertical-align:middle;'><span style='display:inline-block;width:60px;text-align:center;color:#333333;'>查看明细</span></a>";
							}else if(res[i].createstatus=="0"){
								shtml+="<a href='#' onclick='alert(&quot;教育部数据还未执行生成，无法查看导入明细&quot;);return false;'><img src='images/ck_icon_no.png' border='0px' title='' alt='' style='vertical-align:middle;'><span style='display:inline-block;width:60px;text-align:center;color:#999999;'>查看明细</span></a>";
							}
						shtml+="</td>";
						
					shtml+="</tr>";
				}
				//====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+edubasecp+"/"+getAllPages(res[0].totalnums,7)+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="12"){//上报计划查看处使用
			/*
			[{"tabsourcetp":"0","RNAME":"学校概况(时点)","addtime":"2014-08-09 21:10:24.9000000","pmid":"30","createstatus":"0","zyear":"2014","pid":"7","totalnums":69,"pttime":"2014-09-01","ctime":"","syear":"2014-2015","tabid":"20762"}]

			*/
			var shtml="";
			shtml+="<table id='basetabhtml' style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'><td style='width:100px;height:40px;' align='center'>数据表名</td><td style='width:100px;'  align='center'>要求统计时间</td><td style='width:100px;' align='center'>计划统计时间</td>";
				//shtml+="<td style='width:100px;' align='center'>操作</td>";
				shtml+="</tr>";
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME;
					
					shtml+="<tr style='background-color:"+itembk+";'>";
					//shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='viewdatatabledetailthml(this);return false;' value='"+basetabinfo+"' style='display:inline-block;width:200px;text-align:center;'>"+getpttype(res[i].RNAME,0)+"</a></td>";
					shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'><a value='"+basetabinfo+"' style='display:inline-block;width:200px;text-align:center;'>"+getpttype(res[i].RNAME,0)+"</a></td>";
					shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getpttype(res[i].RNAME,1)+"</td>";
					shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><span style='padding-left:5px;padding-right:5px;text-align:center;'>"+res[i].pttime+"</span></td>";
					//shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='updatebasetabpt(this);return false;' value='"+res[i].pmid+"_"+(i+1)+"'>更新时间</a></td>";
					shtml+="</tr>";
				}
				//====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+edubasecp+"/"+getAllPages(res[0].totalnums,7)+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindedubasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}
	}else{
		if(edubasecp=="1"){
			$1("recorddiv").innerHTML="<table style='height:100%;width:100%;font-size:20px;'><tr><td align='center'>分页教育部数据上报基础表查询没有结果</td></tr></table>";
		}else{
			alert("没有更多的数据了");
		}
	}
}


//上报计划基表时点信息更新
function updatebasetabpt(obj){
	var pmid=obj.getAttribute("value").split("_");
	
	var d=new Date();
	var tp=getRTP()[1][6];
	
	var tableobj=$1("basetabhtml");
	var pttime=tableobj.rows[parseInt(pmid[1])].cells[2].childNodes[0].value;
	var pms="GLTP="+tp+"&pmid="+pmid[0]+"&pttime="+pttime+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1");
}

//上报计划基表时点信息更新结果处理
function updatebasetabpt_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO010120"){
		showalert("时点信息更新成功!");
	}else{
		showalert("时点信息更新失败");
	}
}


//全量更新上报计划基表时点信息
function updateallbasetabpt(obj){
	var pid=obj.getAttribute("value");
	
	var pttime=$1("pttimeinput").value;
	if(pttime==null||pttime.length<1){
		showalert("统计时点参数不能为空");
		return;
	}
		
	var d=new Date();
	var tp=getRTP()[1][7];

	var pms="GLTP="+tp+"&pid="+pid+"&pttime="+pttime+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1",pid);
}

//全量更新上报计划基表时点信息结果处理
function updateallbasetabpt_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO010140"){
		edubasecp=1;
		edubasemodel="1";
		queryedubasetab("4",values);
	}else{
		showalert("全量更新上报计划基表时点信息失败");
	}
}

//获取要求统计时间类型
function getpttype(tabname,tp){
	if(tp==0){//获取名称
		if(tabname.indexOf("自然年")!=-1){
			tabname=tabname.replace("自然年","").replace("(","").replace(")","").replace("[","").replace("]","");
		}else if(tabname.indexOf("学年")!=-1){
			tabname=tabname.replace("学年","").replace("(","").replace(")","").replace("[","").replace("]","");
		}else if(tabname.indexOf("时点")!=-1){
			tabname=tabname.replace("时点","").replace("(","").replace(")","").replace("[","").replace("]","");
		}
	}else if(tp==1){//去获取类型
		if(tabname.indexOf("自然年")!=-1){
			tabname="自然年";
		}else if(tabname.indexOf("学年")!=-1){
			tabname="学年";
		}else if(tabname.indexOf("时点")!=-1){
			tabname="时点";
		}
	}
	return tabname;
}

//获取生成状态
function getstatus(st){
	if(st=="0"){// 0 未生成
		return "未生成";
	}else if(st=="1"){// 1已经生成
		return "已生成";
	}
}

//获取生成时间
function getcreatetime(ct){
	if(ct==null||ct.length<1){
		return "-";
	}else{
		return ct.substring(0,10);
	}
	
}

//分页教育部数据上报基础表查询
function pagefindedubasetab(obj){
	var p=obj.getAttribute("value").split("_");

	if(p[0]=="1"){//首页
	    edubasecp="1";
		
		queryedubasetab(edubasemodel,xxx_x);
	}else if(p[0]=="2"){//上一页
		if(edubasecp=="1"){
			showalert("当前页已经是第一页了");
			return;
		}else{
			edubasecp=parseInt(edubasecp)-1;
		}
		queryedubasetab(edubasemodel,xxx_x);
	}else if(p[0]=="3"){//下一页
		/*
		if(zjjltjcp==p[1]){
			showalert("已经是最后一页了!");
			return;
		}
		*/
		edubasecp=parseInt(edubasecp)+1;
		
 		queryedubasetab(edubasemodel,xxx_x);
	}else if(p[0]=="4"){//下一页
		var pnos=$1("pagenotext").value;
		if(pnos.length<1){
			showalert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			showalert("输入非页码数字");
			return;
		}else{/*
			if(pnums>parseInt(p[1])){
				showalert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
			*/
				edubasecp=pnos;
				queryedubasetab(edubasemodel,xxx_x);
			//}
		}
	}
}




//上海教委数据上报基础表查询
var shjwbasecp=1;
var shjwbasemodel="";
var pid_store="";
function queryshjwbasetab(ach,pid){
	shjwbasemodel=ach;
	pid_store=pid;
	
	var d=new Date();
	var tp=getRTP()[1][5];
	var pms="GLTP="+tp+"&cp="+shjwbasecp+"&pns=7&time="+d.getTime();
	
	if(ach=="1"){
		pms="GLTP="+tp+"&cp="+shjwbasecp+"&pns=7&time="+d.getTime();
		
	}else if(ach=="2"){//上海教委基本表年份查询
		pms="GLTP="+tp+"&cp="+shjwbasecp+"&pns=7&time="+d.getTime();
		
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
	}else if(ach=="3"){//上报计划添加处刷新使用
		pms+="&pid="+pid;
	}else if(ach=="5"){//数据查询处使用
		pms="GLTP="+tp+"&cp="+shjwbasecp+"&pns=7&time="+d.getTime();
		
	}else if(ach=="6"){//数据查询处使用--年份切换
	
		pms="GLTP="+tp+"&cp="+shjwbasecp+"&pns=7&time="+d.getTime();
		
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
	}else if(ach=="7"){//数据查询处使用--年份切换+表名综合检索
		pms="GLTP="+tp+"&cp="+shjwbasecp+"&pns=7&time="+d.getTime();
		
		var tabinputvalue=$1("tabinput").value;
		if(tabinputvalue.length<1){
			showalert("数据表名参数为空！");
			reutrn;
		}else{
			pms+="&tabname="+b64(tabinputvalue);
		}
		
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
	}else if(ach=="8"){//上海教委-导入查询处使用
		pms="GLTP="+tp+"&cp="+shjwbasecp+"&pns=7&time="+d.getTime();
		
	}else if(ach=="9"){//导入查询处处使用--年份切换
		pms="GLTP="+tp+"&cp="+shjwbasecp+"&pns=7&time="+d.getTime();
		
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
	}else if(ach=="10"){//导入查询处使用--年份切换+表名综合检索
		pms="GLTP="+tp+"&cp="+shjwbasecp+"&pns=7&time="+d.getTime();
		
		var tabinputvalue=$1("tabinput").value;
		if(tabinputvalue.length<1){
			showalert("数据表名参数为空！");
			reutrn;
		}else{
			pms+="&tabname="+b64(tabinputvalue);
		}
		
		var zyselect=$1("zyearselect");
		var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
		if(zyselectvalue!="all"){
			pms+="&year="+zyselectvalue;
		}
		
	}
	new AJAXPOST(pms,tp,ach);
}
//上海教委数据上报基础表查询结果处理
function queryshjwbasetab_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"||ach=="2"){
			/*
			[{
				"tabsourcetp":"1",
				"pmid":"2100",
				"pid":"49",
				"ctime":"",
				"tabcode":"tab1",
				"syear":"2013-2014",
				"addtime":"2014-08-15 12:10:13.5730000",
				"createstatus":"0",
				"uptimetype":"学年",
				"zyear":"2013"
				,"tabname":"全日制在校本科生数及占在校生总数的比例",
				"pttime":"2013-08-15",
				"totalnums":32,
				"tabid":"1"
			}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
					shtml+="<td style='width:100px;height:40px;' align='center'>";
						shtml+="<input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/>";
					shtml+="</td>";
					shtml+="<td style='width:200px;' align='center'>数据表名</td>";
					shtml+="<td style='width:100px;' align='center'>要求统计时间</td>";
					shtml+="<td style='width:100px;' align='center'>计划统计时间</td>";
					shtml+="<td style='width:100px;' align='center'>生成状态</td>";
					shtml+="<td style='width:100px;' align='center'>上次生成时间</td>";
					shtml+="<td style='width:100px;' align='center'>操作</td>";
				shtml+="</tr>";
				
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo="1_"+res[i].tabid+"_"+res[i].tabname;
					
					//&datasource=shjw&tabid=1&zyear=2014&tabname=tab1
					var tabinfo=res[i].tabid+"_"+res[i].tabname+"_shjw_"+res[i].zyear+"_"+res[i].tabcode;
					
					shtml+="<tr style='background-color:"+itembk+";'>";
						shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+tabinfo+"'></td>";
						shtml+="<td style='width:200px;border-top:#DADADA 1px solid;' align='center'><span style='display:inline-block;text-align:left;width:200px;'>"+res[i].tabname+"</span></td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].uptimetype+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].pttime)+"</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_ok.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_ok.png' style='width:50px;height:22px;'>";
							}else{
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_not.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_not.png' style='width:50px;height:22px;'>";
							}
						shtml+="</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].ctime)+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							shtml+="<a href='#' onclick='viewtabinfoofjwupload(this);return false;' value='"+tabinfo+"'><img src='images/ck_icon.png' border='0px' title='' alt='' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;color:#333333;'>查看</span></a> ";
							shtml+="<a href='#' onclick='createshjwtab(this);return false;' value='"+tabinfo+"'><img src='images/ct_icon.png' border='0px' title='' alt='' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;color:#333333;'>生成</span></a>";
						shtml+="</td>";
						
					shtml+="</tr>";
				}
				//====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='8'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>第"+shjwbasecp+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="3"||ach=="4"){
			/*
			[{
				"tabsourcetp":"1",
				"pmid":"2100",
				"pid":"49",
				"ctime":"",
				"tabcode":"tab1",
				"syear":"2013-2014",
				"addtime":"2014-08-15 12:10:13.5730000",
				"createstatus":"0",
				"uptimetype":"学年",
				"zyear":"2013"
				,"tabname":"全日制在校本科生数及占在校生总数的比例",
				"pttime":"2013-08-15",
				"totalnums":32,
				"tabid":"1"
			}]

			*/
			var shtml="";
			shtml+="<table id='basetabhtml' style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'><td style='width:260px;height:36px;' align='center'>数据表名</td><td style='width:100px;'  align='center'>要求统计时间</td><td style='width:100px;' align='center'>计划统计时间</td><td style='width:100px;' align='center'>操作</td></tr>";
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo="1_"+res[i].tabid+"_"+res[i].tabname;
					
					shtml+="<tr style='background-color:"+itembk+";'>";
		
					shtml+="<td style='width:300px;border-top:#DADADA 1px solid;height:36px;' align='center'><span style='display:inline-block;text-align:left;width:300px;'>"+res[i].tabname+"</span></td>";
					
					shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].uptimetype+"</td>";
					if(res[i].uptimetype=="时点"){
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><input type='text' value='"+res[i].pttime+"' style='padding-left:5px;padding-right:5px;text-align:center;'></td>";
					}else if(res[i].uptimetype=="自然年"){
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].zyear+"</td>";
					}else if(res[i].uptimetype=="学年"){
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].syear+"</td>";
					}
					
					if(res[i].uptimetype=="时点"){
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='updatebasetabpt(this);return false;' value='"+res[i].pmid+"_"+(i+1)+"'>更新时间</a></td>";
					}else{
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>-</td>";
					}
					shtml+="</tr>";
				}
				
				 //====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='8'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+shjwbasecp+"/"+getAllPages(res[0].totalnums,7)+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="5"||ach=="6"||ach=="7"){
			/*
			[{
				"tabsourcetp":"1",
				"pmid":"2100",
				"pid":"49",
				"ctime":"",
				"tabcode":"tab1",
				"syear":"2013-2014",
				"addtime":"2014-08-15 12:10:13.5730000",
				"createstatus":"0",
				"uptimetype":"学年",
				"zyear":"2013"
				,"tabname":"全日制在校本科生数及占在校生总数的比例",
				"pttime":"2013-08-15",
				"totalnums":32,
				"tabid":"1"
			}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'><td style='width:100px;height:40px;' align='center'>序号</td><td style='width:200px;' align='center'>数据表名</td><td style='width:100px;' align='center'>表号</td><td style='width:100px;'  align='center'>要求统计时间</td><td style='width:100px;' align='center'>计划统计时间</td><td style='width:100px;' align='center'>生成状态</td><td style='width:100px;' align='center'>上次生成时间</td><td style='width:100px;' align='center'>操作</td></tr>";
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo=res[i].tabid+"_"+res[i].tabname+"_"+res[i].tabcode;
					
					shtml+="<tr style='background-color:"+itembk+";'>";
						shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+(i+1)+"</td>";
						shtml+="<td style='width:200px;border-top:#DADADA 1px solid;' align='center'><span style='display:inline-block;text-align:left;width:200px;'>"+res[i].tabname+"</span></td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].tabcode+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].uptimetype+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].pttime)+"</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_ok.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_ok.png' style='width:50px;height:22px;'>";
							}else{
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_not.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_not.png' style='width:50px;height:22px;'>";
							}
						shtml+="</td>";

						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].ctime)+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a href='#' value='"+basetabinfo+"' onclick='viewcreatetabinfo(this);return false;'>详情</a></td>";
					shtml+="</tr>";
				}
				//====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='8'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+shjwbasecp+"/"+getAllPages(res[0].totalnums,7)+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="8"||ach=="9"||ach=="10"){//上海教委导入查询处使用
			/*
			[{
				"tabsourcetp":"1",
				"pmid":"2100",
				"pid":"49",
				"ctime":"",
				"tabcode":"tab1",
				"syear":"2013-2014",
				"addtime":"2014-08-15 12:10:13.5730000",
				"createstatus":"0",
				"uptimetype":"学年",
				"zyear":"2013"
				,"tabname":"全日制在校本科生数及占在校生总数的比例",
				"pttime":"2013-08-15",
				"totalnums":32,
				"tabid":"1"
			}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'><td style='width:100px;height:40px;' align='center'>序号</td><td style='width:200px;' align='center'>数据表名</td><td style='width:100px;' align='center'>表号</td><td style='width:100px;'  align='center'>要求统计时间</td><td style='width:100px;' align='center'>计划统计时间</td><td style='width:100px;' align='center'>生成状态</td><td style='width:100px;' align='center'>上次生成时间</td><td style='width:100px;' align='center'>操作</td></tr>";
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo=res[i].tabid+"_"+res[i].tabname+"_"+res[i].tabcode+"_"+res[i].zyear;
					
					shtml+="<tr style='background-color:"+itembk+";'>";
						shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+(i+1)+"</td>";
						shtml+="<td style='width:200px;border-top:#DADADA 1px solid;' align='center'><span style='display:inline-block;text-align:left;width:200px;'>"+res[i].tabname+"</span></td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].tabcode+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].uptimetype+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].pttime)+"</td>";
						
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_ok.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_ok.png' style='width:50px;height:22px;'>";
							}else{
								//shtml+="<span style='color:#FFFFFF;background-image:url(images/bk_not.png);display:inline-block;width:60px;height:24px;line-height:24px;text-align:center;font-size:12px;'>"+getstatus(res[i].createstatus)+"</span>";
								shtml+="<img src='images/bk_not.png' style='width:50px;height:22px;'>";
							}
						shtml+="</td>";


						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getcreatetime(res[i].ctime)+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							if(res[i].createstatus=="1"){
								shtml+="<a href='#' value='"+basetabinfo+"' onclick='viewshjwimptabdetail(this);return false;'><img src='images/ck_icon.png' border='0px' title='' alt='' style='vertical-align:middle;'><span style='display:inline-block;width:60px;text-align:center;color:;'>查看明细</span></a>";
							}else if(res[i].createstatus=="0"){
								shtml+="<a href='#' onclick='alert(&quot;上海教委数据还未执行生成，无法查看导入明细&quot;);return false;'><img src='images/ck_icon_no.png' border='0px' title='' alt='' style='vertical-align:middle;'><span style='display:inline-block;width:60px;text-align:center;color:#999999;'>查看明细</span></a>";
							}
						shtml+="</td>";
					shtml+="</tr>";
				}
				//====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='8'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+shjwbasecp+"/"+getAllPages(res[0].totalnums,7)+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="12"){//上报计划查看
			/*
			[{
				"tabsourcetp":"1",
				"pmid":"2100",
				"pid":"49",
				"ctime":"",
				"tabcode":"tab1",
				"syear":"2013-2014",
				"addtime":"2014-08-15 12:10:13.5730000",
				"createstatus":"0",
				"uptimetype":"学年",
				"zyear":"2013"
				,"tabname":"全日制在校本科生数及占在校生总数的比例",
				"pttime":"2013-08-15",
				"totalnums":32,
				"tabid":"1"
			}]

			*/
			var shtml="";
			shtml+="<table id='basetabhtml' style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'><td style='width:260px;height:36px;' align='center'>数据表名</td><td style='width:100px;'  align='center'>要求统计时间</td><td style='width:100px;' align='center'>计划统计时间</td></tr>";
				for(var i=0;i<res.length;i++){
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					var basetabinfo="1_"+res[i].tabid+"_"+res[i].tabname;
					
					shtml+="<tr style='background-color:"+itembk+";'>";
		
					shtml+="<td style='width:300px;border-top:#DADADA 1px solid;height:36px;' align='center'><span style='display:inline-block;text-align:left;width:300px;'>"+res[i].tabname+"</span></td>";
					
					shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].uptimetype+"</td>";
					if(res[i].uptimetype=="时点"){
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><input type='text' value='"+res[i].pttime+"' style='padding-left:5px;padding-right:5px;text-align:center;'></td>";
					}else if(res[i].uptimetype=="自然年"){
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].zyear+"</td>";
					}else if(res[i].uptimetype=="学年"){
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].syear+"</td>";
					}
					/*
					if(res[i].uptimetype=="时点"){
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='updatebasetabpt(this);return false;' value='"+res[i].pmid+"_"+(i+1)+"'>更新时间</a></td>";
					}else{
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>-</td>";
					}
					*/
					shtml+="</tr>";
				}
				
				 //====================分页查询开始====================
				
				shtml+="<tr style='background-color:#FFF;color:#333333;'>";
					shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='8'>";
						shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
							shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
								shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
								shtml+="<img value='1_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
								shtml+="<img value='2_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
								
								shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+shjwbasecp+"/"+getAllPages(res[0].totalnums,7)+"页</span>";
								shtml+="<img value='3_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
								shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
								
								shtml+="<img value='4_0' onclick='pagefindshjwbasetab(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
								shtml+="</span>";
								shtml+="</td>";
							shtml+="</tr>";
						shtml+="</table>";
					shtml+="</td>";
				shtml+="</tr>";
	
				//====================分页查询结束====================
				
			shtml+="</table>";
				
			$1("recorddiv").innerHTML=shtml;
		}
	}else{
		if(shjwbasecp=="1"){
			$1("recorddiv").innerHTML="<table style='height:100%;width:100%;font-size:20px;'><tr><td align='center'>分页教育部数据上报基础表查询没有结果</td></tr></table>";
		}else{
			alert("没有更多的数据了!");
		}
	}
}


//分页上海教委数据上报基础表查询
function pagefindshjwbasetab(obj){
	var p=obj.getAttribute("value").split("_");

	if(p[0]=="1"){//首页
	    shjwbasecp="1";
		
		queryshjwbasetab(shjwbasemodel,pid_store);
	}else if(p[0]=="2"){//上一页
		if(shjwbasecp=="1"){
			showalert("当前页已经是第一页了");
			return;
		}else{
			shjwbasecp=parseInt(shjwbasecp)-1;
		}
		queryshjwbasetab(shjwbasemodel,pid_store);
	}else if(p[0]=="3"){//下一页
		/*
		if(zjjltjcp==p[1]){
			showalert("已经是最后一页了!");
			return;
		}
		*/
		shjwbasecp=parseInt(shjwbasecp)+1;
		
 		queryshjwbasetab(shjwbasemodel,pid_store);
	}else if(p[0]=="4"){//下一页
		var pnos=$1("pagenotext").value;
		if(pnos.length<1){
			showalert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			showalert("输入非页码数字");
			return;
		}else{/*
			if(pnums>parseInt(p[1])){
				showalert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
			*/
				shjwbasecp=pnos;
				queryshjwbasetab(shjwbasemodel,pid_store);
			//}
		}
	}
}


//jasperreport报表显示
function getjasperreport(obj){
	//var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME_0_zyear;
	var basetabinfo=obj.getAttribute("value").split("_");
		
	var d=new Date();
	var tp=getRTP()[1][8];

	var pms="GLTP="+tp+"&tabsourcetp="+basetabinfo[0]+"&tabname="+b64(basetabinfo[2])+"&tabid="+basetabinfo[1]+"&createflag="+basetabinfo[3]+"&zyear="+basetabinfo[4]+"&time="+d.getTime();
	new AJAXPOST(pms,tp,basetabinfo[0],basetabinfo);
}

//教育部批量生成
function createedutabforbatch(){
	var checklist = document.getElementsByName ("selected");
	var tpms="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked){
			//var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME;
			var tabinfo=checklist[i].value.split("_");
			/*
			&tabid=1&zyear=2014&tabname=当年本科招生专业总数&tabcode=tab1
			*/
			tpms+="&tabid="+tabinfo[1]+"&tabname="+b64(tabinfo[2]);
		}
		
	} 
	if(tpms.length==0){
		showalert("请选择指标表进行生成操作！");
		return;
	}
	
	var d=new Date();
	var tp=getRTP()[1][8];

	var pms="GLTP="+tp+"&tabsourcetp=0&createflag=1&time="+d.getTime();
	
	pms+=tpms;
	
	var tpvalue="0_0_0_2".split("_");
	new AJAXPOST(pms,tp,"0",tpvalue);
}

//教育部批量生成
function createedutabforallbatch(){
	var checklist = document.getElementsByName ("selected");
	var tpms="";
	for(var i=0;i<checklist.length;i++){
		//if(checklist[i].checked){
			//var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME;
			var tabinfo=checklist[i].value.split("_");
			/*
			&tabid=1&zyear=2014&tabname=当年本科招生专业总数&tabcode=tab1
			*/
			tpms+="&tabid="+tabinfo[1]+"&tabname="+b64(tabinfo[2]);
		//}
		
	} 
	if(tpms.length==0){
		showalert("请选择指标表进行生成操作！");
		return;
	}
	
	var d=new Date();
	var tp=getRTP()[1][8];

	var pms="GLTP="+tp+"&tabsourcetp=0&createflag=1&time="+d.getTime();
	
	pms+=tpms;
	
	var tpvalue="0_0_0_2".split("_");
	new AJAXPOST(pms,tp,"0",tpvalue);
}
//jasperreport报表显示结果处理
function getjasperreport_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO010162"){
		var frameheight=h-100-120;
		
		if(ach=="0"){
			if(values[3]=="0"){//查看
				$1("ireportpdfdiv").innerHTML="<iframe src='../TQCSERVER/pdf-jyb/jyb"+values[1]+".pdf' style='width:100%;height:660px;' frameborder='0'></iframe>";
			}else if(values[3]=="1"){//生成详情
				
				//showalert("指标【"+values[2]+"】生成成功!");
				queryedubasetab(edubasemodel);
				/*
				$1("ireportpdfdiv").innerHTML="<iframe src='../TQCSERVER/pdf-jyb-create/jyb"+values[1]+".pdf' style='width:100%;height:"+frameheight+"px;' frameborder='0'></iframe>";
				*/
			}else if(values[3]=="2"){//生成详情
				
				//showalert("指标批量生成成功!");
				queryedubasetab(edubasemodel);
				/*
				$1("ireportpdfdiv").innerHTML="<iframe src='../TQCSERVER/pdf-jyb-create/jyb"+values[1]+".pdf' style='width:100%;height:"+frameheight+"px;' frameborder='0'></iframe>";
				*/
			}
		}else if(ach=="1"){
			$1("ireportpdfdiv").innerHTML="<iframe src='../TQCSERVER/pdf-shjw/shjw"+values[1]+".pdf' style='width:100%;height:660px;' frameborder='0'></iframe>";
		}
	}else{
		/*
		showalert("指标【"+values[2]+"】生成失败!");
		*/
	}
}


//======================上海教委数据导入查询开始=================================
//上海教委数据导入查询
function queryshjwimport(basetabinfo){
	//var basetabinfo=res[i].tabid+"_"+res[i].tabname+"_"+res[i].tabcode+"_"+res[i].zyear;
	//var basetabinfo=obj.getAttribute("value").split("_");
	
	var d=new Date();
	var tp=getRTP()[2][0];
	var pms="GLTP="+tp+"&mcategory="+b64("上海教委")+"&zyear="+basetabinfo[3]+"&rname="+b64(basetabinfo[1])+"&cp=1&pns=100&time="+d.getTime();
	
	new AJAXPOST(pms,tp,"1");
}

//教育部数据导入查询
function queryjybimport(obj){
	//var basetabinfo=res[i].tabid+"_"+res[i].tabname+"_"+res[i].tabcode+"_"+res[i].zyear;
	//var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME+"_"+res[i].zyear;
	var basetabinfo=obj.getAttribute("value").split("_");
	//alert(basetabinfo[2])
	var d=new Date();
	var tp=getRTP()[2][0];
	var pms="GLTP="+tp+"&mcategory="+b64("教育部")+"&zyear="+basetabinfo[3]+"&rname="+b64( getpttype(basetabinfo[2],0) )+"&cp=1&pns=100&time="+d.getTime();
	//alert(pms);
	new AJAXPOST(pms,tp,"1");
}

//上海教委数据导入查询结果处理
function queryshjwimport_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"){
			/*
			[{
			"mname":"学生数量基本情况统计表",
			"mfield":"专科（高职）生数",
			"is_have":"无",
			"utime":"2014-08-17 11:07:58.497",
			"rfield":"折合在校生数",
			"rname":"生均图书数",
			"ttime":"2014",
			"totalnums":"24",
			"mcategory":"上海教委"
			}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'>序号</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>大类</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>数据表名</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>统计列名</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>标准模板名</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>模板列名</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>数据导入状态</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'>"+(i+1)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].mcategory+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].rname+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].rfield+"</td>";
							shtml+="<td style='width:140px;border-top:#DADADA 1px solid;' align='center'><span style='display:inline-block;width:140px;text-align:left;'>"+res[i].mname+"</span></td>";
							shtml+="<td style='width:140px;border-top:#DADADA 1px solid;' align='center'><span style='display:inline-block;width:140px;text-align:left;'>"+res[i].mfield+"</span></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].is_have+"</td>";
						shtml+="</tr>";
					}
					
				shtml+="</table>";
			$1("imdetailddiv").innerHTML=shtml;
		}
	}else{
		$1("imdetailddiv").innerHTML="<table style='height:100%;width:100%;font-size:20px;'><tr><td align='center'>上海教委数据导入查询没有结果</td></tr></table>";
		
	}
}

//======================上海教委数据导入查询结束=================================

//=========================上海教委导入查询表状态更新结束==================
//上海教委导入表状态更新
/*
function updatestatusofshjw(){
	var tabinputvalue=$1("tabinput").value;
	if(tabinputvalue==null||tabinputvalue.length<1){
		showalert("数据表名不能为空！");
		return;
	}
		
	var zyselect=$1("zyearselect");
	var zyselectvalue=zyselect.options[zyselect.selectedIndex].value;
	if(zyselectvalue=="all"){
		showalert("选择年份时间不能为所有！");
		return;
	}
		
	//http://127.0.0.1:8080/TQCSERVER/TQCService?GLTP=GLTP005012&mcategory=上海教委&tabname=生均图书数&zyear=2014
	
	var d=new Date();
	var tp=getRTP()[3][2];
	var pms="GLTP="+tp+"&mcategory="+b64("上海教委")+"&tabname="+b64(tabinputvalue)+"&zyear="+zyselectvalue+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1",tabinputvalue);
}

//上海教委导入表状态更新结果处理
function updatestatusofshjw_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	
	///var tabinfo=res[i].tabid+"_"+res[i].tabname+"_shjw_"+res[i].zyear+"_"+res[i].tabcode;
	if(res.statusInfo=="GEO020271"){//
		//showalert("【"+values+"】状态更新成功！");
		
		jwimpcp=1;
 		jwimpmodel="1";
		queryshjwimport("3");
	
	}else{
		showalert("【"+values+"】状态更新失败！");
	}
}
*/


//上海教委一键数据上报
//
function startonkeyupload(){
	var zys=$1("zyearselectforonekey");
	var zyear=zys.options[zys.selectedIndex].value;
	if(zyear==null||zyear.length<1){
		alert("请选择一键上报年份");
		return;
	}
	
	
	for(var i=0;i<30;i++){
		var tcd="table"+(i+1);
		
		window.setTimeout("onkeyupload('"+zyear+"','"+tcd+"')",500*(i-1) );
		
	}
	
}

function onkeyupload(zyear,tablecode){
	var d=new Date();
	var tp=getRTP()[3][3];
	var pms="GLTP="+tp+"&zyear="+zyear+"&tablecode="+tablecode+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1",tablecode);
}


var xxxstr="全日制在校本科生数及占在校生总数的比例;当年本科招生专业总数;当年本科招生一志愿录取比例;教师总数及结构;生师比;生均教学科研仪器设备值及当年新增值;生均图书数;电子图书、电子期刊种数;本科生均图书流通量;生均教学行政用房（其中生均实验室面积）;生均本科教学日常运行支出;本科专项教学经费;生均本科实验经费;生均本科实习经费;当年本科应届毕业生总学分及学时数;当年本科应届毕业生实践教学学分和选修课学分分别占总学分比例;当年全校开设本科课程的总门数及总门次;主讲本科课程的教授比例（不含讲座）;教授授本科课程比例;当年新开本科课程总门数及总门次;教学班额情况;学生转专业人数比例;校外实习基地数;学生出境游学人数比例;学生补考和重修人次;学生学习成绩情况;应届本科生毕业率和学位授予率;应届本科生签约率;体质测试达标率;学生学习满意度（调查方法与结果）";
var xxxtabs=xxxstr.split(";");
function gettabname(idx){
	return xxxtabs[idx];
}
	
//上海教委一键数据上报结果处理
function onkeyupload_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	
	///var tabinfo=res[i].tabid+"_"+res[i].tabname+"_shjw_"+res[i].zyear+"_"+res[i].tabcode;
	if(res.statusInfo=="GEO020291"){//
		var sp=document.createElement("p");
		sp.style.color="green";
		sp.style.display="inline-block";
		sp.style.textAlign="left";
		sp.style.width="100%";
		sp.style.paddingLeft="5px";
		sp.innerHTML=values+"：数据表【"+gettabname(parseInt(values.replace("table",""))-1 )+"】 导入成功;";
		$1("onekeyrecorddiv").appendChild(sp);
	}else{
		var sp=document.createElement("p");
		sp.style.color="red";
		sp.style.display="inline-block";
		sp.style.textAlign="left";
		sp.style.width="100%";
		sp.style.paddingLeft="5px";
		
		var sif=res.statusInfo;
		
		var errorinfo="";
		if(sif=="GEO020293"){
			errorinfo="账号登陆失败";
		}else if(sif=="GEO020294"||sif=="GEO020295"||sif=="GEO020296"||
		   sif=="GEO020297"||sif=="GEO020298"||sif=="GEO020299"||
		   sif=="GEO020300"||sif=="GEO020301"||sif=="GEO020302"||
		   sif=="GEO020303"||sif=="GEO020304"||sif=="GEO020305"||
		   sif=="GEO020306"||sif=="GEO020307"||sif=="GEO020308"||
		   sif=="GEO020309"||sif=="GEO020310"||sif=="GEO020311"||
		   sif=="GEO020312"||sif=="GEO020313"||sif=="GEO020315"||
		   sif=="GEO020316"||sif=="GEO020317"||sif=="GEO020318"||
		   sif=="GEO020319"||sif=="GEO020320"||sif=="GEO020321"||
		   sif=="GEO020322"||sif=="GEO020323"
		
		){
			errorinfo="没有查询到相关数据";
		}else{
			errorinfo="导入数据失败";
		}
		sp.innerHTML=values+"：数据表【"+gettabname(parseInt( values.replace("table","")-1 ) )+"】"+errorinfo+"!";
		$1("onekeyrecorddiv").appendChild(sp);
	}
}
//=========================上海教委导入查询表状态更新结束=======================


//上海教委数据生成
function createshjwtab(obj){
	
	//var tabinfo=res[i].tabid+"_"+res[i].tabname+"_shjw_"+res[i].zyear+"_"+res[i].tabcode;
	
	var tabinfo=obj.getAttribute("value").split("_");
	
	//http://127.0.0.1:8080/TQCSERVER/TQCService?GLTP=GLTP005010&datasource=shjw&tabid=1&zyear=2014&tabname=tab1
	
	var d=new Date();
	var tp=getRTP()[3][0];
	var pms="GLTP="+tp+"&datasource="+tabinfo[2]+"&tabid="+tabinfo[0]+"&zyear="+tabinfo[3]+"&tabname="+b64(tabinfo[1])+"&tabcode="+tabinfo[4]+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1",tabinfo);
}

//上海教委批量生成
function createshjwtabforbatch(){
	var checklist = document.getElementsByName ("selected");
	
	var tpms="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked){
			//var tabinfo=res[i].tabid+"_"+res[i].tabname+"_shjw_"+res[i].zyear+"_"+res[i].tabcode;
			var tabinfo=checklist[i].value.split("_");
			/*
			&tabid=1&zyear=2014&tabname=当年本科招生专业总数&tabcode=tab1
			*/
			tpms+="&tabid="+tabinfo[0]+"&tabname="+b64(tabinfo[1])+"&tabcode="+tabinfo[4];
		}
		
	} 
	if(tpms.length==0){
		showalert("请选择指标表进行生成操作！");
		return;
	}
	
	var d=new Date();
	var tp=getRTP()[3][0];
	var pms="GLTP="+tp+"&datasource="+tabinfo[2]+"&zyear="+tabinfo[3]+"&time="+d.getTime();
	pms+=tpms;
	
	new AJAXPOST(pms,tp,"1",tabinfo);
}

//上海教委全部批量生成
function createshjwtabforallbatch(){
	var checklist = document.getElementsByName ("selected");
	
	var tpms="";
	for(var i=0;i<checklist.length;i++){
		//if(checklist[i].checked){
			//var tabinfo=res[i].tabid+"_"+res[i].tabname+"_shjw_"+res[i].zyear+"_"+res[i].tabcode;
			var tabinfo=checklist[i].value.split("_");
			/*
			&tabid=1&zyear=2014&tabname=当年本科招生专业总数&tabcode=tab1
			*/
			tpms+="&tabid="+tabinfo[0]+"&tabname="+b64(tabinfo[1])+"&tabcode="+tabinfo[4];
		//}
		
	} 
	/*
	if(tpms.length==0){
		showalert("请选择指标表进行生成操作！");
		return;
	}
	*/
	
	var d=new Date();
	var tp=getRTP()[3][0];
	var pms="GLTP="+tp+"&datasource="+tabinfo[2]+"&zyear="+tabinfo[3]+"&time="+d.getTime();
	pms+=tpms;
	
	new AJAXPOST(pms,tp,"1",tabinfo);
}

//上海教委数据生成结果处理
function createshjwtab_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	
	///var tabinfo=res[i].tabid+"_"+res[i].tabname+"_shjw_"+res[i].zyear+"_"+res[i].tabcode;
	if(res.statusInfo=="GEO020251"){//
		showalert("【"+values[1]+"】生成成功！");
		
		queryshjwbasetab(shjwbasemodel);

	}else{
		showalert("【"+values[1]+"】生成失败！");
	}
}

//上海教委数据查询
function viewcreatetabinfo(obj){
	try{
		closevideoedit("editvideohtml");
	}catch(Exception){
	
	}
	
	//basetabinfo=res[i].tabid+"_"+res[i].tabname+"_"+res[i].tabcode;
	var tabinfo=obj.getAttribute("value").split("_");

	//初始化表格样式
	viewshjwcreatetabdetail(tabinfo);
	
	var d=new Date();
	var tp=getRTP()[3][1];
	var pms="GLTP="+tp+"&tabid="+tabinfo[0]+"&time="+d.getTime();

	new AJAXPOST(pms,tp,"1",tabinfo);
}

//上海教委数据查询结果处理
function viewcreatetabinfo_result_pro(txt,ach,values){
	var res=eval('('+txt+')');	
	//alert(txt)
	if(typeof(res.statusInfo)=="undefined"){//
		//res[i].tabid+"_"+res[i].tabname+"_"+res[i].tabcode;
		var tabcode=values[2];
		if(tabcode=="tab1"){
			/*
			public String benkenum;		//普通本科生数
			public String zhuankenum;	//专科（高职）生数
			public String shuoshinum;	//全日制硕士数
			public String boshinum;		//全日制博士数
			public String liuxuenum;	//留学生数
			public String yukenum;		//预科生数
			public String jinxiunum;	//进修生数
			public String tuochannum;	//成人脱产班学生数
			public String yedanum;		//夜大（业余）学生数
			public String hanshounum;	//函授生数
			public String totalstunum;	//全日制在校生数
			public String benkeratio;	//本科生占在校生总数的比例
			*/
			
			$1("benkenum").value=res[0].benkenum;
			//$1("benkenumincrement").value=res[0].benkenumincrement;
			$1("zhuankenum").value=res[0].zhuankenum;
	
			$1("shuoshinum").value=res[0].shuoshinum;
			$1("boshinum").value=res[0].boshinum;
			
			$1("liuxuenum").value=res[0].liuxuenum;
			$1("yukenum").value=res[0].yukenum;
			
			$1("jinxiunum").value=res[0].jinxiunum;
			$1("tuochannum").value=res[0].tuochannum;
			
			$1("yedanum").value=res[0].yedanum;
			$1("hanshounum").value=res[0].hanshounum;
			
			$1("totalstunum").value=res[0].totalstunum;
			$1("benkeratio").value=(parseFloat(res[0].benkeratio)*100).toFixed(2)+"%";
			
		}else if(tabcode=="tab2"){
			/*
			public String majorname;		//学科门类
			public String flmmajornum;		//各学科门类招生专业数
			public String majorratio;		//占专业总数比例
			public String totalmajornum;	//招生专业总数
			 */
			 
			 var shtml="";
			shtml+="<table id='luqulvtable' style='width:710px;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='height:40px;border-right:#DADADA 1px solid;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学科门类</span></td><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>各学科门类招生专业数</span></td><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>占专业总数比例</span></td><td align='center' style='height:40px;border-right:#DADADA 0px solid;'><span style='display:inline-block;margin-left:5px;'>招生专业总数</span></td></tr>";
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text'  value='"+res[i].majorname+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].flmmajornum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].majorratio+"'></td>";
							shtml+="<td align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 0px solid;'><input type='text'  value='"+res[i].totalmajornum+"' style='color:#AAAAAA;width:100px;padding-left:5px;border:#DADADA 1px solid;' ></td>";
							
						shtml+="</tr>";
					
				}
					
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;
		}else if(tabcode=="tab3"){
			/*
			[{"majorcodename":"计算机科学","tiaojiratio":"0.5","zhiyuanratio":"0.1"},
			{"majorcodename":"计算机科学","tiaojiratio":"0.5","zhiyuanratio":"0.1"}]
			*/
			
			var shtml="";
			shtml+="<table id='luqulvtable' style='width:710px;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='height:40px;border-right:#DADADA 1px solid;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>专业代码及名称</span></td><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>专业一志愿率</span></td><td align='center' style='height:40px;border-right:#DADADA 0px solid;'><span style='display:inline-block;margin-left:5px;'>专业调剂率</span></td></tr>";
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text'  value='"+res[i].majorcodename+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].zhiyuanratio+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 0px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].tiaojiratio+"'></td>";
						shtml+="</tr>";
					
				}
					
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;
			
			$1("totalzyratio").value=strpercent(res.totalzyratio);
			$1("totaltjratio").value=strpercent(res.totaltjratio);
			$1("totalzyratioincrement").value=res.totalzyratioincrement;
			$1("tophighmajor").value=res.tophighmajor;
			$1("toplowmajor").value=res.toplowmajor;
		}else if(tabcode=="tab4"){
			/*
			[{"zhenggaonum":"78",
			"age61andoldnum":"4",
			"masternum":"82",
			"totaljsnum":"640.0",
			"age30andyoungnum":"141",
			"zhuanrennum":"640",
			"age41to50num":"101",
			"fugaonum":"150",
			"age31to40num":"371",
			"waipinnum":"0",
			"age51to60num":"23",
			"doctornum":"541"}]
			*/
			$1("zhuanrennum").value=res[0].zhuanrennum;
			$1("waipinnum").value=res[0].waipinnum;
			$1("totaljsnum").value=res[0].totaljsnum;
			$1("zhenggaonum").value=res[0].zhenggaonum;
			$1("fugaonum").value=res[0].fugaonum;
			
			//$1("zhenggaoincrement").value=res[0].zhenggaoincrement;
			//$1("fugaoincrement").value=res[0].fugaoincrement;
			
			$1("doctornum").value=res[0].doctornum;
			$1("masternum").value=res[0].masternum;
			
			//$1("doctorincrement").value=res[0].doctorincrement;
			//$1("masterincrement").value=res[0].masterincrement;
			
			$1("age30andyoungnum").value=res[0].age30andyoungnum;
			$1("age31to40num").value=res[0].age31to40num;
			$1("age41to50num").value=res[0].age41to50num;
			$1("age51to60num").value=res[0].age51to60num;
			$1("age61andoldnum").value=res[0].age61andoldnum;
			
			/*
			$1("zhenggaoratio").innerHTML=strpercent(res.zhenggaoratio);
			$1("fugaoratio").innerHTML=strpercent(res.fugaoratio);
			
			$1("doctorratio").innerHTML=strpercent(res.doctorratio);
			$1("masterratio").innerHTML=strpercent(res.masterratio);
			
			$1("age30andyoungratio").innerHTML=verifyresultpercentfortab4(res.age30andyoungratio);
			$1("age31to40ratio").innerHTML=verifyresultpercentfortab4(res.age31to40ratio);
			$1("age41to50ratio").innerHTML=verifyresultpercentfortab4(res.age41to50ratio);
			$1("age51to60ratio").innerHTML=verifyresultpercentfortab4(res.age51to60ratio);
			$1("age61andoldratio").innerHTML=verifyresultpercentfortab4(res.age61andoldratio);
			*/
		}else if(tabcode=="tab5"){
			/*
			[{
			"totaljsnum":"640.0",
			"studentnum":"",
			"zhuanrennum":"640",
			"waipinnum":"0",
			"stutearatio":""}]
			*/
			
			$1("zhuanrennum").value=res[0].zhuanrennum;
			$1("waipinnum").value=res[0].waipinnum;
			$1("totaljsnum").value=res[0].totaljsnum;
			$1("studentnum").value=res[0].studentnum;
			$1("stutearatio").value=res[0].stutearatio;
			//$1("stutearatioincrement").value=res.stutearatioincrement;
			
		}else if(tabcode=="tab6"){
			/*
			[{
			"equipnetincrementratio":"0.17483649540803944",
			"studentnum":"16131.0",
			"equipnetincrement":"16078.09",
			"avgequipvalue":"5.700869133965656",
			"totalequipvalue":"91960.72"}]
			*/
			$1("studentnum").value=res[0].studentnum;
			$1("totalequipvalue").value=res[0].totalequipvalue;
			$1("equipnetincrement").value=res[0].equipnetincrement;
			$1("equipnetincrementratio").value=strpercent(res[0].equipnetincrementratio);
			$1("avgequipvalue").value=res[0].avgequipvalue;
			
			//$1("avgequipvalueincrement").value=strpercent(res.avgequipvalueincrement);
		}else if(tabcode=="tab7"){
			/*
			[{"avgbooknum":"164.40",
			"studentnum":"16131.0",
			"totalbooknum":"2651960"}]
			*/
			$1("studentnum").value=res[0].studentnum;
			$1("totalbooknum").value=res[0].totalbooknum;
			$1("avgbooknum").value=res[0].avgbooknum;
	
		}else if(tabcode=="tab8"){
			/*
			[{
			"eperiodicalnum":"55818",
			"ebooknum":"1975740"
			}]
			*/
			
			$1("ebooknum").value=res[0].ebooknum;
			//$1("ebookincrement").value=res.ebookincrement;
			$1("eperiodicalnum").value=res[0].eperiodicalnum;
			//$1("eperiodicalincrement").value=res.eperiodicalincrement;
		}else if(tabcode=="tab9"){
			/*
			[{
			"avgborrownum":"15",
			"borrownum":"251556",
			"benkenum":"16131"
			}]
			*/
			
			$1("benkenum").value=res[0].benkenum;
			$1("borrownum").value=res[0].borrownum;
			//$1("borrowincrement").value=res.borrowincrement;
			$1("avgborrownum").value=res[0].avgborrownum;
			//$1("avgborrowincrement").value=res.avgborrowincrement;
		}else if(tabcode=="tab10"){
			/*
			[{"avglabarea":"11",
			"teachofficearea":"378921",
			"avgteachofficearea":"23",
			"labarea":"192752",
			"teacharea":"339921",
			"totalstunum":"16131",
			"officearea":"39000"}]
			[{"avglabarea":"10","teachofficearea":"430451","avgteachofficearea":"21","labarea":"218744","teacharea":"389163","totalstunum":"41357","officearea":"41288"}]

			*/
			
			$1("totalstunum").value=res[0].totalstunum;
			$1("teacharea").value=res[0].teacharea;
			$1("officearea").value=res[0].officearea;
			$1("teachofficearea").value=res[0].teachofficearea;
			
			$1("labarea").value=res[0].labarea;
			$1("avgteachofficearea").value=res[0].avgteachofficearea;
			//$1("avgteachofficeincrement").value=res.avgteachofficeincrement;
			$1("avglabarea").value=res[0].avglabarea;
			//$1("avglabincrement").value=res.avglabincrement;
			
		}else if(tabcode=="tab11"){
			/*
			[{"avgexpense":"",
			"totalexpense":"",
			"benkenum":"16131"}]
			*/
			
			$1("benkenum").value=res[0].benkenum;
			$1("totalexpense").value=res[0].totalexpense;
			//$1("totalexpenseincrement").value=res.totalexpenseincrement;
			$1("avgexpense").value=res[0].avgexpense;
			//$1("avgexpenseincrement").value=res.avgexpenseincrement;
			
		}else if(tabcode=="tab12"){
			/*
			[{
			"avgteachingfund":"",
			"teachingfund":"",
			"benkenum":"16131"
			}]
			*/
			$1("benkenum").value=res[0].benkenum;
			$1("teachingfund").value=res[0].teachingfund;
			//$1("teachingfundincrement").value=res.teachingfundincrement;
			$1("avgteachingfund").value=res[0].avgteachingfund;
			//$1("avgteachingfundincrement").value=res.avgteachingfundincrement;
			
		}else if(tabcode=="tab13"){
			/*
			[{
			"avgexperimentfund":"",
			"experimentfund":"",
			"benkenum":"16131"
			}]
			*/
			$1("benkenum").value=res[0].benkenum;
			$1("experimentfund").value=res[0].experimentfund;
			//$1("experimentfundincrement").value=res.experimentfundincrement;
			$1("avgexperimentfund").value=res[0].avgexperimentfund;
			//$1("avgexperimentfundincrement").value=res.avgexperimentfundincrement;
		}else if(tabcode=="tab14"){
			/*
			[{
			"practisefund":"",
			"avgpractisefund":"",
			"benkenum":""
			}]
			*/
			$1("benkenum").value=res[0].benkenum;
			$1("practisefund").value=res[0].practisefund;
			//$1("practisefundincrement").value=res.practisefundincrement;
			$1("avgpractisefund").value=res[0].avgpractisefund;
			//$1("avgpractisefundincrement").value=res.avgpractisefundincrement;
		}else if(tabcode=="tab15"){
				/*
				[{
				"majorcredit":"xxx","theoryhour":"xxx","practisehour":"xxx","majorhour":"xxx","majorcategory":"xxx"},
				{"majorcredit":"xxx","theoryhour":"xxx","practisehour":"xxx","majorhour":"xxx","majorcategory":"xxx"}
				]
				*/
				
				var shtml="";
				shtml+="<table id='luqulvtable' style='width:100%;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学科门类</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>总学分</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>总学时</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>理论课学时</span></td><td align='center'><span style='display:inline-block;margin-left:5px;'>实践环节学时</span></td></tr>";
				
					for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text'  value='"+res[i].majorcategory+"' style='color:#AAAAAA;width:80px;border:#DADADA 1px solid;padding-left:5px;' readonly></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].majorcredit+"' style='width:80px;border:#DADADA 1px solid;'></td>";
							shtml+="<td align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].majorhour+"' style='width:80px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].theoryhour+"' style='width:80px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;'><input type='text' value='"+res[i].practisehour+"' style='width:80px;border:#DADADA 1px solid;'></td>";
							
						shtml+="</tr>";
					
					}
					
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;
	
	
			$1("totalcredit").value=res.totalcredit;
			$1("totalhour").value=res.totalhour;
			$1("avgcredit").value=res.avgcredit;
			$1("avgcreditincrement").value=res.avgcreditincrement;
			$1("avghour").value=res.avghour;
			$1("avghourincrement").value=res.avghourincrement;
			$1("avgtheoryhour").value=res.avgtheoryhour;
			$1("avgtheoryhourratio").value=strpercent(res.avgtheoryhourratio);
			$1("avgpractisehour").value=res.avgpractisehour;
			$1("avgpractisehourratio").value=strpercent(res.avgpractisehourratio);
		}else if(tabcode=="tab16"){
			/*
			[
			{"practiseratio":"xxx","electiveratio":"xxx","practisecredit":"xxx","majorcredit":"xxx",
			"electivecredit":"xxx","majorcategory":"xxx"},
			{"practiseratio":"xxx","electiveratio":"xxx","practisecredit":"xxx","majorcredit":"xxx",
			"electivecredit":"xxx","majorcategory":"xxx"}
			]
			*/
			
			var shtml="";
			shtml+="<table id='luqulvtable' style='width:100%;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学科门类</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>总学分</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>选修课学分</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>选修课比例</span></td><td align='center'><span style='display:inline-block;margin-left:5px;'>实践环节学分</span></td><td align='center'><span style='display:inline-block;margin-left:5px;'>实践环节比例</span></td></tr>";
				
					for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].majorcategory+"' style='color:#AAAAAA;padding-left:5px;width:80px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].majorcredit+"' style='color:#AAAAAA;padding-left:5px;width:80px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].electivecredit+"' style='width:80px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].electiveratio+"' style='color:#AAAAAA;padding-left:5px;width:80px;border:#DADADA 1px solid;' readonly></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].practisecredit+"' style='width:80px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;'><input type='text' value='"+res[i].practiseratio+"' style='color:#AAAAAA;padding-left:5px;width:80px;border:#DADADA 1px solid;' readonly></td>";
							
						shtml+="</tr>";
					
					}
					
			shtml+="</table>";
			$1("zytianchongqu").innerHTML=shtml;
					
			$1("avgelectivecredit").value=res.avgelectivecredit;
			$1("avgelectivecreditratio").value=res.avgelectivecreditratio;
			$1("avgpractisecredit").value=res.avgpractisecredit;
			$1("avgpractisecreditratio").value=res.avgpractisecreditratio;
		}else if(tabcode=="tab17"){
			/**
			[{"totalcoursenum":"0","totaltimenum":"0"}]
			*/
			$1("totalcoursenum").value=res[0].totalcoursenum;
			//$1("totalcourseincrement").value=res.totalcourseincrement;
			$1("totaltimenum").value=res[0].totaltimenum;
			//$1("totaltimeincrement").value=res.totaltimeincrement;
		}else if(tabcode=="tab18"){
			/*
			[{
			"professornum":"0",
			"professorteachratio":"0",
			"departmentname":"材料工程学院",
			"professorteachnum":""
			}]
			*/
			
			var shtml="";
			shtml+="<table id='luqulvtable' style='width:710px;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学院名称</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>正高级教授数</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>主讲正高级教授数</span></td><td align='center' style='border-right:#DADADA 0px solid;' ><span style='display:inline-block;margin-left:5px;'>主讲正高级教授占比</span></td></tr>";
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].departmentname+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].professornum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].professorteachnum+"'></td>";
							shtml+="<td align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text'  value='"+res[i].professorteachratio+"' style='color:#AAAAAA;width:100px;padding-left:5px;border:#DADADA 1px solid;' readonly></td>";
							
						shtml+="</tr>";
					
				}
					
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;
			
			/*
			$1("totalprofessornum").value=res.totalprofessornum;
			$1("totalprofessorteachnum").value=res.totalprofessorteachnum;
			$1("totalprofessorteachratio").value=strpercent(res.totalprofessorteachratio);
			$1("totalprofessorteachratioincrement").value=res.totalprofessorteachratioincrement;
			*/
		}else if(tabcode=="tab19"){
			/*
			[{
				"timenum":"xxx",
				"professorcreditratio":"xxx",
				"creditnum":"xxx",		        
				"professortimeratio":"xxx",
				"professortimenum":"xxx",
				"departmentname":"xxx",
				"professorcreditnum":"xxx"
			}]
			*/
			

			var shtml="";
			shtml+="<div style='width:708px;overflow-y:hidden;overflow-x:auto;SCROLLBAR-FACE-COLOR:#0B8AD9;SCROLLBAR-SHADOW-COLOR:#FFF;SCROLLBAR-HIGHLIGHT-COLOR:#FFF;SCROLLBAR-3DLIGHT-COLOR:#FFF;SCROLLBAR-DARKSHADOW-COLOR:#FFF;SCROLLBAR-TRACK-COLOR:#FFF;SCROLLBAR-ARROW-COLOR:#FFF;'>";
			shtml+="<table id='luqulvtable' style='width:1000px;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学院名称</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>开课总门次</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>开课总学分</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>正高级教授授课门次数</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>正高级教授授课总学分</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>授课门次数占比</span></td><td align='center' style='border-right:#DADADA 0px solid;'><span style='display:inline-block;margin-left:5px;'>授课学分占比</span></td></tr>";
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text'  value='"+res[i].departmentname+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].timenum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].creditnum+"'></td>";
							shtml+="<td align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].professortimenum+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].professorcreditnum+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							
							shtml+="<td align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+strpercent(res[i].professortimeratio)+"' style='color:#AAAAAA;width:100px;padding-left:5px;border:#DADADA 1px solid;' readonly></td>";
							shtml+="<td align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+strpercent(res[i].professorcreditratio)+"' style='color:#AAAAAA;width:100px;padding-left:5px;border:#DADADA 1px solid;' readonly></td>";
						shtml+="</tr>";
					

				}
					
			shtml+="</table>";
			shtml+="</div>";
				
			$1("zytianchongqu").innerHTML=shtml;
			
			/*
			$1("totaltimenum").value=res.totaltimenum;
			$1("totalprofessortimenum").value=res.totalprofessortimenum;
			$1("totalprofessortimeratio").value=strpercent(res.totalprofessortimeratio);
			$1("totalptratioincrement").value=res.totalptratioincrement;
			$1("totalprofessorcreditratio").value=strpercent(res.totalprofessorcreditratio);
			$1("totalpcratioincrement").value=res.totalpcratioincrement;
			*/
		}else if(tabcode=="tab20"){
			/*
			[{
				"departmentname":"xxx",
				"newtimenum":"xxx",
				"newcoursenum":"xxx"
			}]
			*/

			var shtml="";
			shtml+="<table id='luqulvtable' style='width:100%;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学院名称</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>新开课程门数</span></td><td align='center' style='border-right:#DADADA 0px solid;'><span style='display:inline-block;margin-left:5px;'>新开课程门次数</span></td></tr>";
				
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].departmentname+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].newcoursenum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].newtimenum+"'></td>";
							
						shtml+="</tr>";
					
				}
					
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;

			/*
			$1("totalnewcoursenum").value=res.totalnewcoursenum;
			$1("totalnewcourseincrement").value=res.totalnewcourseincrement;
			$1("totalnewtimenum").value=res.totalnewtimenum;
			$1("totalnewtimeincrement").value=res.totalnewtimeincrement;
			*/
		}else if(tabcode=="tab21"){
			/*
			[{
			"total60to89ratio":"xxx",
			"major60to89num":"xxx",
			"major90andmoreratio":"xxx",
			"basiclessthan30num":"xxx",
			"basic60to89ratio":"xxx",
			"totalmajorratio":"xxx",
			"totallessthan30ratio":"xxx",
			"major60to89ratio":"xxx",
			"total30to59ratio":"xxx",
			"basic30to59num":"xxx",
			"totalbasicratio":"xxx",				
			"totalmajorclassnum":"xxx",
			"basiclessthan30ratio":"xxx",
			"totalclassnum":"xxx",
			"totaltimenum":"xxx",
			"basic30to59ratio":"xxx",
			"major30to59ratio":"xxx",
			"basic90andmoreratio":"xxx",
			"basic60to89num":"xxx",
			"majorlessthan30ratio":"xxx",
			"basic90andmorenum":"xxx",
			"majorlessthan30num":"xxx",
			"total90andmoreratio":"xxx",
			"totalbasicclassnum":"xxx",
			"major90andmorenum":"xxx",
			"major30to59num":"xxx"
			}] 26
			*/
			$1("basiclessthan30num").value=res[0].basiclessthan30num;
			$1("basic30to59num").value=res[0].basic30to59num;
			$1("basic60to89num").value=res[0].basic60to89num;
			$1("basic90andmorenum").value=res[0].basic90andmorenum;
			
			$1("basiclessthan30ratio").value=strpercent(res[0].basiclessthan30ratio);
			$1("basic30to59ratio").value=strpercent(res[0].basic30to59ratio);
			$1("basic60to89ratio").value=strpercent(res[0].basic60to89ratio);
			$1("basic90andmoreratio").value=strpercent(res[0].basic90andmoreratio);
			
			$1("majorlessthan30num").value=res[0].majorlessthan30num;
			$1("major30to59num").value=res[0].major30to59num;
			$1("major60to89num").value=res[0].major60to89num;
			$1("major90andmorenum").value=res[0].major90andmorenum;
	
			$1("majorlessthan30ratio").value=strpercent(res[0].majorlessthan30ratio);
			$1("major30to59ratio").value=strpercent(res[0].major30to59ratio);
			$1("major60to89ratio").value=strpercent(res[0].major60to89ratio);
			$1("major90andmoreratio").value=strpercent(res[0].major90andmoreratio);
				
			$1("totaltimenum").value=res[0].totaltimenum;
			$1("totalbasicclassnum").value=res[0].totalbasicclassnum;
			$1("totalmajorclassnum").value=res[0].totalmajorclassnum;
			$1("totalclassnum").value=res[0].totalclassnum;
			
			$1("totalbasicratio").value=strpercent(res[0].totalbasicratio);
			$1("totalmajorratio").value=strpercent(res[0].totalmajorratio);
			$1("totallessthan30ratio").value=strpercent(res[0].totallessthan30ratio);
			$1("total30to59ratio").value=strpercent(res[0].total30to59ratio);
			$1("total60to89ratio").value=strpercent(res[0].total60to89ratio);
			$1("total90andmoreratio").value=strpercent(res[0].total90andmoreratio);
		}else if(tabcode=="tab22"){
			/*
			[{
			"topinmajorpop":"xxx",
			"topindepartmentpop":"xxx",
			"topoutdepartmentpop":"xxx",
			"topindepartment":"xxx",
			"transfernum":"xxx",
			"topoutmajorpop":"xxx",
			"transferratio":"xxx",
			"topinmajor":"xxx",
			"topoutmajor":"xxx",
			"topoutdepartment":"xxx",
			"benkenum":"xxx"
			}]
			*/
			$1("benkenum").value=res[0].benkenum;
			$1("transfernum").value=res[0].transfernum;
			$1("topindepartment").value=res[0].topindepartment;
			$1("topindepartmentpop").value=res[0].topindepartmentpop;
			$1("topinmajor").value=res[0].topinmajor;
			$1("topinmajorpop").value=res[0].topinmajorpop;
			
			
			$1("topoutdepartment").value=res[0].topoutdepartment;
			$1("topoutdepartmentpop").value=res[0].topoutdepartmentpop;
			
			$1("topoutmajor").value=res[0].topoutmajor;
			$1("topoutmajorpop").value=res[0].topoutmajorpop;
			
			//$1("transfernumincrement").value=res.transfernumincrement;				
			
			$1("transferratio").value=strpercent(res[0].transferratio);
			
			//$1("transferratioincrement").value=res.transferratioincrement;				
			//$1("indeptpopincrement").value=res.indeptpopincrement;
			//$1("inmajorpopincrement").value=res.inmajorpopincrement;
			//$1("outdeptpopincrement").value=res.outdeptpopincrement;
			//$1("outmajorpopincrement").value=res.outmajorpopincrement;
		}else if(tabcode=="tab23"){
			/*
			[{
				"departmentname":"材料工程学院",
				"basenum":"29"
			}]
			*/
			
			var shtml="";
			shtml+="<table id='luqulvtable' style='width:100%;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学院名称</span></td><td align='center' style='border-right:#DADADA 0px solid;'><span style='display:inline-block;margin-left:5px;'>基地数</span></td></tr>";
				
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].departmentname+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].basenum+"'></td>";
				
						shtml+="</tr>";
					
				}
	
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;
			
			/*
			$1("totalbasenum").value=res.totalbasenum;
			$1("totalbasenumincrement").value=res.totalbasenumincrement;
			*/
			
		}else if(tabcode=="tab24"){
			/*
			[{
				"travelnum":"xxx","departmentname":"xxx"
			}]
			*/
					
			var shtml="";
			shtml+="<table id='luqulvtable' style='width:100%;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学院名称</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>本科生出境游学人数</span></td></tr>";
				
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].departmentname+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].travelnum+"'></td>";
							
						shtml+="</tr>";
					
				}
					
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;
			
			/*
			$1("benkenum").value=res.benkenum;
			$1("totaltravelnum").value=res.totaltravelnum;
			$1("totaltravelnumincrement").value=res.totaltravelnumincrement;
			$1("totaltravelratio").value=strpercent(res.totaltravelratio);
			$1("totaltravelratioincrement").value=res.totaltravelratioincrement;
			*/
		}else if(tabcode=="tab25"){
			//alert(txt)
			/*
			[{
			"makeuporretakepop":"xxx",
			"makeuporretakenum":"xxx",
			"studyagainum":"xxx",
			"departmentname":"xxx",
			"studyagaipop":"xxx"}
			]


			*/

			var shtml="";
			shtml+="<table id='luqulvtable' style='width:100%;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学院名称</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;' id='chongxiurenci'>补考人次</span></td><td align='center' style='border-right:#DADADA 0px solid;'><span style='display:inline-block;margin-left:5px;' id=''>补考人数</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;' id='chongxiurenci'>重修人次</span></td><td align='center' style='border-right:#DADADA 0px solid;'><span style='display:inline-block;margin-left:5px;' id=''>重修人数</span></td></tr>";
				
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].departmentname+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].makeuporretakenum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 0px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].makeuporretakepop+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].studyagainum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 0px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].studyagaipop+"'></td>";
							
						shtml+="</tr>";
					
				}
					
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;
			
			/*
			$1("benkenum").value=res.benkenum;
			
			$1("totalmakeupnum").value=res.totalmakeupnum;
			$1("totalmakeupnumincrement").value=res.totalmakeupnumincrement;
			$1("avgmakeupnum").value=res.avgmakeupnum;
			$1("avgmakeupnumincrement").value=res.avgmakeupnumincrement;
			
 
			$1("totalmakeuppop").value=res.totalmakeuppop;
			$1("totalmakeuppopincrement").value=res.totalmakeuppopincrement;
			$1("totalmakeuppopratio").value=strpercent(res.totalmakeuppopratio);
			$1("totalmakeuppopratioincrement").value=res.totalmakeuppopratioincrement;
			
			
			$1("totalretakenum").value=res.totalretakenum;
			$1("totalretakenumincrement").value=res.totalretakenumincrement;
			$1("avgretakenum").value=res.avgretakenum;
			$1("avgretakenumincrement").value=res.avgretakenumincrement;
 
			$1("totalretakepop").value=res.totalretakepop;
			$1("totalretakepopincrement").value=res.totalretakepopincrement;
			$1("totalretakepopratio").value=strpercent(res.totalretakepopratio);
			$1("totalretakepopratioincrement").value=res.totalretakepopratioincrement;
			*/
		}else if(tabcode=="tab26"){
			/**
			[{
			"grade":"xxx",
			"secondnum":"xxx",
			"fifthnum":"xxx",
			"departmentname":"xxx",
			"fourthnum":"xxx",
			"firstnum":"xxx",
			"thirdnum":"xxx"}
			]
			*/
		
			var shtml="";
			shtml+="<div style='width:1000px;overflow-y:hidden;overflow-x:auto;SCROLLBAR-FACE-COLOR:#0B8AD9;SCROLLBAR-SHADOW-COLOR:#FFF;SCROLLBAR-HIGHLIGHT-COLOR:#FFF;SCROLLBAR-3DLIGHT-COLOR:#FFF;SCROLLBAR-DARKSHADOW-COLOR:#FFF;SCROLLBAR-TRACK-COLOR:#FFF;SCROLLBAR-ARROW-COLOR:#FFF;'>";
			
			shtml+="<table id='luqulvtable' style='width:1000px;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>年级</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学院名称</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>3.5-4本科生数</span></td><td align='center'  style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>3-3.5本科生数</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>2.5-3本科生数</span></td><td align='center'  style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>2-2.5本科生数</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>0-2本科生数</span></td></tr>";
				
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
							var y=new Date().getFullYear();
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+( y-parseInt(res[i].grade) )+"年级' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].departmentname+"' style='width:100px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].firstnum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].secondnum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].thirdnum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].fourthnum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:100px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].fifthnum+"'></td>";
					
						shtml+="</tr>";
					
				}
					
			shtml+="</table>";
			shtml+="</div>";
			
			$1("zytianchongqu").innerHTML=shtml;
			
			/*
			var grades=res.grade.split("_");			
			var totalfirstratios=res.totalfirstratio.split("_");
			var totalsecondratios=res.totalsecondratio.split("_");
			var totalthirdratios=res.totalthirdratio.split("_");
			var totalfourthratios=res.totalfourthratio.split("_");
			var totalfifthratios=res.totalfifthratio.split("_");
			
			
			var tpgrades=["一年级","二年级","三年级","四年级","五年级","应届毕业生"];
			var ghtml="";	
			ghtml+="<table style='width:100%;' cellpadding='0' cellspacing='0'>";	
			for(var j=0;j<tpgrades.length;j++){		
				//for(var j=0;j<grades.length;j++){
					
					if(j<grades.length){
						ghtml+="<tr style='background-color:#F7F7F7;'>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'>"+grades[j]+"</td>";
							ghtml+="<td style='width:120px;height:32px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;background-color:#FFF;color:#AAAAAA;' align='center'>"+strpercent(totalfirstratios[j])+"</td>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;background-color:#FFF;color:#AAAAAA;' align='center'>"+strpercent(totalsecondratios[j])+"</td>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;background-color:#FFF;color:#AAAAAA;' align='center'>"+strpercent(totalthirdratios[j])+"</td>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;background-color:#FFF;color:#AAAAAA;' align='center'>"+strpercent(totalfourthratios[j])+"</td>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 0px solid;background-color:#FFF;color:#AAAAAA;' align='center'>"+strpercent(totalfifthratios[j])+"</td>";
						ghtml+="</tr>";
					}else{
						ghtml+="<tr style='background-color:#F7F7F7;'>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'>"+tpgrades[j]+"</td>";
							ghtml+="<td style='width:120px;height:32px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;background-color:#FFF;color:#AAAAAA;' align='center'>自动计算</td>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;background-color:#FFF;color:#AAAAAA;' align='center'>自动计算</td>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;background-color:#FFF;color:#AAAAAA;' align='center'>自动计算</td>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;background-color:#FFF;color:#AAAAAA;' align='center'>自动计算</td>";
							ghtml+="<td style='width:120px;height:24px;border-top:#DADADA 1px solid;border-right:#DADADA 0px solid;background-color:#FFF;color:#AAAAAA;' align='center'>自动计算</td>";
						ghtml+="</tr>";
					}
				//}
			}
			ghtml+="</table>";

			$1("nianjitongjiquyu").innerHTML=ghtml;
			*/
		}else if(tabcode=="tab27"){
			/*
			[{
			"degreeratio":"xxxxxx",
			"graduateratio":"xxxxxx",
			"degreenum":"xxxxxx",
			"majorcodename":"xxxxxx",
			"graduatenum":"xxxxxx",
			"shouldgraduatenum":"xxxxxx"
			}]
			*/
			
			var shtml="";
			shtml+="<table id='luqulvtable' style='width:100%;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>专业名称</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>应毕业人数</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>毕业人数 </span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>毕业率</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>获学位人数</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>获学位率</span></td></tr>";
				
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
			
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].majorcodename+"' style='width:80px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:80px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].shouldgraduatenum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:80px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].graduatenum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:80px;padding-left:5px;border:#DADADA 1px solid;color:#DADADA;' value='"+strpercent(res[i].graduateratio)+"' readonly></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:80px;padding-left:5px;border:#DADADA 1px solid;' value='"+res[i].degreenum+"'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:80px;padding-left:5px;border:#DADADA 1px solid;color:#DADADA;' value='"+strpercent(res[i].degreeratio)+"' readonly></td>";
							
						shtml+="</tr>";
					
				}
					
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;
			
		 	/*
			$1("totalshouldgraduatenum").value=res.totalshouldgraduatenum;
			$1("totalsgnincrement").value=res.totalsgnincrement;
			$1("totalgraduatenum").value=res.totalgraduatenum;
			
			$1("totalgnincrement").value=res.totalgnincrement;
			$1("totalgraduateratio").value=strpercent(res.totalgraduateratio);
			$1("totalgrincrement").value=res.totalgrincrement;
			$1("totaldegreenum").value=res.totaldegreenum;
			$1("totaldnincrement").value=res.totaldnincrement;
			$1("totaldegreeratio").value=strpercent(res.totaldegreeratio);
			$1("totaldrincrement").value=res.totaldrincrement;
			*/
		}else if(tabcode=="tab28"){
			/*
			[{
				"offerratio":"xxx",
				"departmentname":"xxx"
			}]
			*/
			
			var shtml="";
			shtml+="<table id='luqulvtable' style='width:100%;border:#DADADA 1px solid;margin-right:10px;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#F3F3F3;'><td align='center' style='height:40px;border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>序号</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>学院名称</span></td><td align='center' style='border-right:#DADADA 1px solid;'><span style='display:inline-block;margin-left:5px;'>签约率</span></td></tr>";
				
				for(var i=0;i<res.length;i++){
						var ibk="#FFF";
						if(i%2==1){
							ibk="#F7F7F7";
						}
						shtml+="<tr style='background-color:"+ibk+";'>";
							shtml+="<td align='center' style='height:40px;width:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'>"+(i+1)+"</td>";
			
							shtml+="<td  align='center'  style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' value='"+res[i].departmentname+"' style='width:80px;padding-left:5px;border:#DADADA 1px solid;'></td>";
							shtml+="<td  align='center' style='height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;'><input type='text' style='width:80px;padding-left:5px;border:#DADADA 1px solid;' value='"+strpercent(res[i].offerratio)+"'></td>";	
							
						shtml+="</tr>";
					
				}
					
			shtml+="</table>";
				
			$1("zytianchongqu").innerHTML=shtml;
			
		 	/*
			$1("totalofferratio").value=strpercent(res.totalofferratio);
			$1("totalofferratioincrement").value=res.totalofferratioincrement;
			*/
			
		}else if(tabcode=="tab29"){
			/*
			[{"passratio":"0.9475"}]
			*/
			$1("passratio").value=strpercent(res[0].passratio);
			//$1("passratioincrement").value=res.passratioincrement;
		}else if(tabcode=="tab30"){
			/*
			[{
			"badcoursenum":"xxx",
			"mediumcoursenum":"xxx",
			"goodcoursenum":"xxx",
			"excellentcoursenum":"xxx",
			"totalevaluatednum":"xxx"
			}]
			*/
			
			$1("excellentcoursenum").value=res[0].excellentcoursenum;
			$1("goodcoursenum").value=res[0].goodcoursenum;
			$1("mediumcoursenum").value=res[0].mediumcoursenum;
			$1("badcoursenum").value=res[0].badcoursenum;
			
			//$1("excellentcourseratio").value=strpercent(res.excellentcourseratio);
			//$1("goodcourseratio").value=strpercent(res.goodcourseratio);
			//$1("mediumcourseratio").value=strpercent(res.mediumcourseratio);
			//$1("badcourseratio").value=strpercent(res.badcourseratio);
			
			$1("totalevaluatednum").value=res[0].totalevaluatednum;
		}
	}else{
		showalert("查询没有结果");
	}
}





//上海教委数据上报处数据表详情查看
function viewtabinfoofjwupload(obj){
	try{
		closevideoedit("editvideohtml");
	}catch(Exception){
	
	}
	//var tabinfo=res[i].tabid+"_"+res[i].tabname+"_shjw_"+res[i].zyear+"_"+res[i].tabcode;
	//basetabinfo=res[i].tabid+"_"+res[i].tabname+"_"+res[i].tabcode;
	
	var tabinfo=obj.getAttribute("value").split("_");
	
	var tabp=tabinfo[0]+"_"+tabinfo[1]+"_"+tabinfo[4];
	
	//初始化表格样式
	viewshjwcreatetabdetail(tabp.split("_"));
	
	var d=new Date();
	var tp=getRTP()[5][0];
	var pms="GLTP="+tp+"&tabname="+tabinfo[4]+"&zyear="+tabinfo[3]+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1",tabp.split("_"));
}

//上海教委数据查询展示
function viewshjwcreatetabdetail(values){
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(images/showtitlebk800.png);'><td align='left'><span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>指标【"+values[1]+"】详情</span></td><td align='right'><a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:14px;' onclick='closevideoedit(&quot;editvideohtml&quot;);'><img src='images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a></td></tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr>";
			shtml+="<td colspan='2' valign='top' align='center' style='width:100%;background-color:#FFFFFF;height:260px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
					
					var tabcode=values[2];
					
					if(tabcode=="tab1"){
						shtml+=gethtmloftable1("1");
					}else if(tabcode=="tab2"){
						shtml+=gethtmloftable2("1");
					}else if(tabcode=="tab3"){
						shtml+=gethtmloftable3("1");
					}else if(tabcode=="tab4"){
						shtml+=gethtmloftable4("1");
					}else if(tabcode=="tab5"){
						shtml+=gethtmloftable5("1");
					}else if(tabcode=="tab6"){
						shtml+=gethtmloftable6("1");
					}else if(tabcode=="tab7"){
						shtml+=gethtmloftable7("1");
					}else if(tabcode=="tab8"){
						shtml+=gethtmloftable8("1");
					}else if(tabcode=="tab9"){
						shtml+=gethtmloftable9("1");
					}else if(tabcode=="tab10"){
						shtml+=gethtmloftable10("1");
					}else if(tabcode=="tab11"){
						shtml+=gethtmloftable11("1");
					}else if(tabcode=="tab12"){
						shtml+=gethtmloftable12("1");
					}else if(tabcode=="tab13"){
						shtml+=gethtmloftable13("1");
					}else if(tabcode=="tab14"){
						shtml+=gethtmloftable14("1");
					}else if(tabcode=="tab15"){
						shtml+=gethtmloftable15("1");
					}else if(tabcode=="tab16"){
						shtml+=gethtmloftable16("1");
					}else if(tabcode=="tab17"){
						shtml+=gethtmloftable17("1");
					}else if(tabcode=="tab18"){
						shtml+=gethtmloftable18("1");
					}else if(tabcode=="tab19"){
						shtml+=gethtmloftable19("1");
					}else if(tabcode=="tab20"){
						shtml+=gethtmloftable20("1");
					}else if(tabcode=="tab21"){
						shtml+=gethtmloftable21("1");
					}else if(tabcode=="tab22"){
						shtml+=gethtmloftable22("1");
					}else if(tabcode=="tab23"){
						shtml+=gethtmloftable23("1");
					}else if(tabcode=="tab24"){
						shtml+=gethtmloftable24("1");
					}else if(tabcode=="tab25"){
						shtml+=gethtmloftable25_1("1");
					}else if(tabcode=="tab26"){
						shtml+=gethtmloftable26("1");
					}else if(tabcode=="tab27"){
						shtml+=gethtmloftable27("1");
					}else if(tabcode=="tab28"){
						shtml+=gethtmloftable28("1");
					}else if(tabcode=="tab29"){
						shtml+=gethtmloftable29("1");
					}else if(tabcode=="tab30"){
						shtml+=gethtmloftable30("1");
					}
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr><td colspan='2' style='height:20px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>&nbsp;</td></tr>";
		
	shtml+="</table>";
	
	var editvideodiv=$c("div");
	editvideodiv.id="editvideohtml";
	//editvideodiv.style.border="#DADADA 1px solid";
	//editvideodiv.style.boxShadow="editvideodiv.style";

	editvideodiv.style.position="absolute";
	var sTop=document.body.scrollTop+document.documentElement.scrollTop;
	editvideodiv.style.top=(140+sTop)+"px";
	editvideodiv.style.left=(w-1000)/2+"px";
	editvideodiv.style.height="500px";
	editvideodiv.style.width="1000px";
	editvideodiv.style.zIndex="2000";
	//editvideodiv.style.backgroundColor="#FFF";
	//editvideodiv.style.border="pink 3px solid;"

	editvideodiv.innerHTML=shtml;
	
	//登录验证页面添加
	document.body.appendChild(editvideodiv);
	
	pop();

}

//教育部数据表查看
function vieweducreatetabdetail(obj){
	
	//var basetabinfo="0_"+res[i].tabid+"_"+res[i].RNAME_0;
	var basetabinfo=obj.getAttribute("value").split("_");
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(images/showtitlebk800.png);'><td align='left'><span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>指标【"+basetabinfo[2]+"】详情</span></td><td align='right'><a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:14px;' onclick='closevideoedit(&quot;editvideohtml&quot;);'><img src='images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a></td></tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr>";
			shtml+="<td colspan='2' valign='top' align='center' style='background-color:#FFFFFF;height:"+(h-200)+"px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
				shtml+="<div id='ireportpdfdiv' style='width:100%;height:100%;'></div>";
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr><td colspan='2' style='height:20px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>&nbsp;</td></tr>";
		
	shtml+="</table>";
	
	var editvideodiv=$c("div");
	editvideodiv.id="editvideohtml";
	//editvideodiv.style.border="#DADADA 1px solid";
	//editvideodiv.style.boxShadow="editvideodiv.style";

	editvideodiv.style.position="absolute";
	var sTop=document.body.scrollTop+document.documentElement.scrollTop;
	editvideodiv.style.top=(4+sTop)+"px";
	editvideodiv.style.left=(w-1024)/2+"px";
	editvideodiv.style.height=(h-100)+"px";
	editvideodiv.style.width="1024px";
	editvideodiv.style.zIndex="2000";
	//editvideodiv.style.backgroundColor="#FFF";
	//editvideodiv.style.border="pink 3px solid;"

	editvideodiv.innerHTML=shtml;
	
	//登录验证页面添加
	document.body.appendChild(editvideodiv);
	
	pop();
	if(basetabinfo[3]=="0"){//查看动态数据
		//显示报表
		getjasperreport(obj);
	}else if(basetabinfo[3]=="2"){//查看已经生成数据
		var frameheight=h-100-120;
		
		$1("ireportpdfdiv").innerHTML="<iframe src='../TQCSERVER/pdf-jyb-create/jyb"+basetabinfo[1]+".pdf' style='width:100%;height:660px;' frameborder='0'></iframe>";
	}
				
}


//上海教委导入查询结果
function viewshjwimptabdetail(obj){
	//var basetabinfo=res[i].tabid+"_"+res[i].tabname+"_"+res[i].tabcode+"_"+res[i].zyear;
	var basetabinfo=obj.getAttribute("value").split("_");
	
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(images/showtitlebk800.png);'><td align='left'><span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>指标【"+basetabinfo[1]+"】"+basetabinfo[3]+"年导入详情</span></td><td align='right'><a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:14px;' onclick='closevideoedit(&quot;editvideohtml&quot;);'><img src='images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a></td></tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr>";
			shtml+="<td colspan='2' valign='top' align='center' style='background-color:#FFFFFF;height:260px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
					shtml+="<div id='imdetailddiv' style='overflow-x:hidden;overfow-y:scroll;height:445px;'></div>";
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr><td colspan='2' style='height:20px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>&nbsp;</td></tr>";
		
	shtml+="</table>";
	
	var editvideodiv=$c("div");
	editvideodiv.id="editvideohtml";
	//editvideodiv.style.border="#DADADA 1px solid";
	//editvideodiv.style.boxShadow="editvideodiv.style";

	editvideodiv.style.position="absolute";
	var sTop=document.body.scrollTop+document.documentElement.scrollTop;
	editvideodiv.style.top=(100+sTop)+"px";
	editvideodiv.style.left=(w-1024)/2+"px";
	editvideodiv.style.height="500px";
	editvideodiv.style.width="1024px";
	editvideodiv.style.zIndex="2000";
	//editvideodiv.style.backgroundColor="#FFF";
	//editvideodiv.style.border="pink 3px solid;"

	editvideodiv.innerHTML=shtml;
	
	//登录验证页面添加
	document.body.appendChild(editvideodiv);
	
	pop();
	
	//加载教委表导入明细
	queryshjwimport(basetabinfo);
}

//教育部导入详情检索
function viewjybimptabdetail(obj){
	//var basetabinfo=res[i].tabid+"_"+res[i].tabname+"_"+res[i].tabcode+"_"+res[i].zyear;
	var basetabinfo=obj.getAttribute("value").split("_");
	
	var shtml="<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
		shtml+="<tr style='height:35px;background-image:url(images/showtitlebk800.png);'><td align='left'><span style='color:#FFF;font-size:12px;padding:0 0 0 5px;'>指标【"+basetabinfo[2]+"】"+basetabinfo[3]+"年导入详情</span></td><td align='right'><a href='#' style='color:#FFF;text-decoration:none;padding:0 5px 0 0;font-size:14px;' onclick='closevideoedit(&quot;editvideohtml&quot;);'><img src='images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a></td></tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr>";
			shtml+="<td colspan='2' valign='top' align='center' style='background-color:#FFFFFF;height:260px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
					shtml+="<div id='imdetailddiv' style='overflow-x:hidden;overfow-y:scroll;height:445px;'></div>";
			shtml+="</td>";
		shtml+="</tr>";
		
		shtml+="<tr><td colspan='2' style='height:20px;background-color:#FFFFFF;border-bottom:#DADADA 1px solid;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;'>&nbsp;</td></tr>";
		
	shtml+="</table>";
	
	var editvideodiv=$c("div");
	editvideodiv.id="editvideohtml";
	//editvideodiv.style.border="#DADADA 1px solid";
	//editvideodiv.style.boxShadow="editvideodiv.style";

	editvideodiv.style.position="absolute";
	var sTop=document.body.scrollTop+document.documentElement.scrollTop;
	editvideodiv.style.top=(100+sTop)+"px";
	editvideodiv.style.left=(w-1024)/2+"px";
	editvideodiv.style.height="500px";
	editvideodiv.style.width="1024px";
	editvideodiv.style.zIndex="2000";
	//editvideodiv.style.backgroundColor="#FFF";
	//editvideodiv.style.border="pink 3px solid;"

	editvideodiv.innerHTML=shtml;
	
	//登录验证页面添加
	document.body.appendChild(editvideodiv);
	
	pop();
	
	//加载教育部表导入明细
	queryjybimport(obj);
}


//====================指标维度管理开始==========================
//指标项检索
var icp=1;
var icpmodel="";
function queryindicator(ach,values){
	icpmodel=ach;
	var d=new Date();
	var tp=getRTP()[6][3];
	var pms="GLTP="+tp+"&cp="+icp+"&pns=7&time="+d.getTime();
	if(ach=="1"){//指标数据项条件检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=7&time="+d.getTime();
	}else if(ach=="2"){//指标数据项条件检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=1000&time="+d.getTime();
	}else if(ach=="3"){//指标数据项条件检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=1000&time="+d.getTime();
	}else if(ach=="4"){//指标数据项条件检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=1000&time="+d.getTime();
	}else if(ach=="5"){//指标数据项条件检索

		var measurename=$1("measurenameinput").value;
		var subject=$1("subjectinput").value;
		/*
		if( (measurename==null||measurename.length<1)&&
			(subject==null||subject.length<1)
		  ){
			alert("查询条件不能同时为空");
			return;
		}
		*/
		
		if( measurename!=null&&measurename.length>0){
			pms+="&measurename="+b64(measurename);
		}
		if( subject!=null&&subject.length>0){
			pms+="&subject="+b64(subject);
		}
		
		var categoryid=getselectionvalue("indicatorcategoryselect");
		if(categoryid!="all"){
			pms+="&categoryid="+categoryid;
		}
		
	}else if(ach=="11"){//指标数据项条件检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=7&time="+d.getTime();
		var categoryid=getselectionvalue("indicatorcategoryselect");
		if(categoryid!="all"){
			pms+="&categoryid="+categoryid;
		}
		
	}else if(ach=="21"){//列维度-指标分类检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=1000&time="+d.getTime();
		var categoryid=getselectionvalue("indicatorcategoryselect_cols");
		if(categoryid!="all"){
			pms+="&categoryid="+categoryid;
		}
	}else if(ach=="31"){//行维度-指标分类检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=1000&time="+d.getTime();
		var categoryid=getselectionvalue("indicatorcategoryselect_rows");
		if(categoryid!="all"){
			pms+="&categoryid="+categoryid;
		}
	}else if(ach=="41"){//筛选条件-指标分类检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=1000&time="+d.getTime();
		var categoryid=getselectionvalue("indicatorcategoryselect_conds");
		if(categoryid!="all"){
			pms+="&categoryid="+categoryid;
		}
	}else if(ach=="211"){//列维度-指标分类检索	
		pms="GLTP="+tp+"&cp="+icp+"&pns=1000&time="+d.getTime();
		var measurename=$1("measurenameinput_cols").value;
		if( measurename!=null&&measurename.length>0){
			pms+="&measurename="+b64(measurename);
		}
		
		var categoryid=getselectionvalue("indicatorcategoryselect_cols");
		if(categoryid!="all"){
			pms+="&categoryid="+categoryid;
		}
	}else if(ach=="311"){//行维度-指标分类检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=1000&time="+d.getTime();
		var measurename=$1("measurenameinput_rows").value;
		if( measurename!=null&&measurename.length>0){
			pms+="&measurename="+b64(measurename);
		}
		
		var categoryid=getselectionvalue("indicatorcategoryselect_rows");
		if(categoryid!="all"){
			pms+="&categoryid="+categoryid;
		}
	}else if(ach=="411"){//筛选条件-指标分类检索
		pms="GLTP="+tp+"&cp="+icp+"&pns=1000&time="+d.getTime();
		var measurename=$1("measurenameinput_conds").value;
		if( measurename!=null&&measurename.length>0){
			pms+="&measurename="+b64(measurename);
		}
		
		var categoryid=getselectionvalue("indicatorcategoryselect_conds");
		if(categoryid!="all"){
			pms+="&categoryid="+categoryid;
		}
	}
	
	new AJAXPOST(pms,tp,ach,values);
}

//指标项检索结果处理
function queryindicator_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"||ach=="5"||ach=="11"){//指标数据项检索
			/*
			[{"STATES":"1","NOTICE":"","INDEX_CLASSIFICATION_ID":"021001","iwid":"2","dimen_organization":"0","METHODS":"bar","subject":"不好","IS_ASSESS":"是","IS_PROFESSION":"否","LEVEL":"三级","MEASURE_NAME":"学校总占地面积","property":"0","IS_QUERY":"1","IS_DEPARTMENT":"否","CLASSIFY":"客观指标","EQUATION":"","dimen_time":"0","CATEGORY_ID":"2","MEASURE_ID":"026199501","IS_SCHOOL":"是","totalnums":1}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'><input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/></td>";
						shtml+="<td style='width:180px;height:40px;' align='center'>指标名称</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>所属分类</td>";
						shtml+="<td style='width:80px;height:40px;' align='center'>时间维度</td>";
						shtml+="<td style='width:80px;height:40px;' align='center'>组织维度</td>";
						shtml+="<td style='width:80px;height:40px;' align='center'>通用维度</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>属性</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var iwid=res[i].iwid;
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+iwid+"'></td>";
							shtml+="<td style='width:180px;border-top:#DADADA 1px solid;' align='center'><span style='display:inline-block;width:180px;text-align:left;'>"+res[i].MEASURE_NAME+"</span></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].CLASSIFY+"</td>";
							shtml+="<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+getdimenoftime(res[i].dimen_time)+"</td>";
							shtml+="<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+getdimenoforganization(res[i].dimen_organization)+"</td>";
							shtml+="<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+res[i].IS_DEPARTMENT+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getproperty(res[i].property)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
								shtml+="<a href='#' onclick='showeditnewtarget(this);return false;' value='"+json2str(res[i])+"'><img src='images/bj_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>编辑</span></a>";
								shtml+="&nbsp;&nbsp;<a href='#' onclick='deleteindicator(this);return false;' value='"+iwid+"'><img src='images/sc_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>删除</span></a>";
							shtml+="</td>";
						shtml+="</tr>";
					}
					
					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefindindicator(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefindindicator(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+icp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefindindicator(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									
									shtml+="<img value='4_0' onclick='pagefindindicator(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="2"||ach=="21"||ach=="211"){//数据报表新增-列维度-指标
			var shtml="<table>";
				for(var i=0;i<res.length;i++){
					shtml+="<tr>";
						shtml+="<td>";
						shtml+="<input type='checkbox' style='vertical-align:middle;' value='"+res[i].MEASURE_NAME+"' name='dimenindicate001' id='indicatecols"+(i)+"' onclick='addindicators2right_cols(this);'><span style='display:inline-block;font-size:12px;text-align:left;'>"+res[i].MEASURE_NAME+"</span>";
						
						shtml+="</td>";	
					shtml+="</tr>";
				}
				
			shtml+="</table>";
			$1("dimenclosdiv").innerHTML=shtml;
		}else if(ach=="3"||ach=="31"||ach=="311"){//数据报表新增-行维度-指标
			var shtml="<table>";
				for(var i=0;i<res.length;i++){
					shtml+="<tr>";
						shtml+="<td>";
						shtml+="<input type='checkbox' style='vertical-align:middle;' value='"+res[i].MEASURE_NAME+"' name='dimenindicate002'  id='indicaterows"+(i)+"' onclick='addindicators2right_rows(this);'><span style='display:inline-block;font-size:12px;text-align:left;'>"+res[i].MEASURE_NAME+"</span>";
						
						shtml+="</td>";	
					shtml+="</tr>";
				}
				
			shtml+="</table>";
			$1("dimenrowsdiv").innerHTML=shtml;
		}else if(ach=="4"||ach=="41"||ach=="411"){//数据报表新增-条件维度-指标
			var shtml="<table>";
				for(var i=0;i<res.length;i++){
					shtml+="<tr>";
						shtml+="<td>";
						shtml+="<input type='checkbox' style='vertical-align:middle;' value='"+res[i].MEASURE_NAME+"' name='dimenindicate003' id='indicateconds"+(i)+"' onclick='addindicators2right_conds(this);'><span style='display:inline-block;font-size:12px;text-align:left;'>"+res[i].MEASURE_NAME+"</span>";
						
						shtml+="</td>";	
					shtml+="</tr>";
				}
				
			shtml+="</table>";
			$1("dimenconditiondiv").innerHTML=shtml;
		}else if(ach=="6"){//数据报表编辑-列维度-指标
			var mv=new Map();
			if(values!=null){
				var lcos=values.split(",");
				for(var j=0;j<lcos.length;j++){
					mv.put(lcos[j],lcos[j]);
				}
			}
		
			var shtml="<table>";
				for(var i=0;i<res.length;i++){
					shtml+="<tr>";
						shtml+="<td>";
						
						if(mv.containsKey(res[i].MEASURE_NAME)){//包含
							shtml+="<input type='checkbox' style='vertical-align:middle;' value='"+res[i].MEASURE_NAME+"' name='dimenindicate001' id='indicatecols"+(i)+"' onclick='addindicators2right_cols(this);' checked><span style='display:inline-block;font-size:12px;text-align:left;'>"+res[i].MEASURE_NAME+"</span>";
							
							var newobj=document.createElement("checkbox");
							newobj.id="indicatecols"+(i);
							newobj.value=res[i].MEASURE_NAME;
							newobj.setAttribute("value",res[i].MEASURE_NAME);
							newobj.checked=true;
							addindicators2right_cols(newobj);
							
						}else {
							shtml+="<input type='checkbox' style='vertical-align:middle;' value='"+res[i].MEASURE_NAME+"' name='dimenindicate001' id='indicatecols"+(i)+"' onclick='addindicators2right_cols(this);'><span style='display:inline-block;font-size:12px;text-align:left;'>"+res[i].MEASURE_NAME+"</span>";
						}
						
						shtml+="</td>";	
					shtml+="</tr>";
				}
				
			shtml+="</table>";
			$1("dimenclosdiv").innerHTML=shtml;
		}else if(ach=="7"){//数据报表编辑-行维度-指标
			var mv=new Map();
			if(values!=null){
				var lcos=values.split(",");
				for(var j=0;j<lcos.length;j++){
					mv.put(lcos[j],lcos[j]);
				}
			}
			
			
			var shtml="<table>";
				for(var i=0;i<res.length;i++){
					shtml+="<tr>";
						shtml+="<td>";
						
						if(mv.containsKey(res[i].MEASURE_NAME)){
							shtml+="<input type='checkbox' style='vertical-align:middle;' value='"+res[i].MEASURE_NAME+"' name='dimenindicate002'  id='indicaterows"+(i)+"' onclick='addindicators2right_rows(this);' checked><span style='display:inline-block;font-size:12px;text-align:left;'>"+res[i].MEASURE_NAME+"</span>";
							
							var newobj=document.createElement("checkbox");
							newobj.id="indicaterows"+(i);
							newobj.value=res[i].MEASURE_NAME;
							newobj.setAttribute("value",res[i].MEASURE_NAME);
							newobj.checked=true;
							addindicators2right_rows(newobj);
						}else{
							shtml+="<input type='checkbox' style='vertical-align:middle;' value='"+res[i].MEASURE_NAME+"' name='dimenindicate002'  id='indicaterows"+(i)+"' onclick='addindicators2right_rows(this);'><span style='display:inline-block;font-size:12px;text-align:left;'>"+res[i].MEASURE_NAME+"</span>";
						}
						
						shtml+="</td>";	
					shtml+="</tr>";
				}
				
			shtml+="</table>";
			$1("dimenrowsdiv").innerHTML=shtml;
		}else if(ach=="8"){//数据报表编辑-行维度-指标
			var mv=new Map();
			if(values!=null){
				var lcos=values.split(",");
				for(var j=0;j<lcos.length;j++){
					mv.put(lcos[j],lcos[j]);
				}
			}
			
			var shtml="<table>";
				for(var i=0;i<res.length;i++){
					shtml+="<tr>";
						shtml+="<td>";
						
						if(mv.containsKey(res[i].MEASURE_NAME)){
							shtml+="<input type='checkbox' style='vertical-align:middle;' value='"+res[i].MEASURE_NAME+"' name='dimenindicate003' id='indicateconds"+(i)+"' onclick='addindicators2right_conds(this);' checked><span style='display:inline-block;font-size:12px;text-align:left;'>"+res[i].MEASURE_NAME+"</span>";
							
							var newobj=document.createElement("checkbox");
							newobj.id="indicateconds"+(i);
							newobj.value=res[i].MEASURE_NAME;
							newobj.setAttribute("value",res[i].MEASURE_NAME);
							newobj.checked=true;
							addindicators2right_conds(newobj);
							
						}else{
							shtml+="<input type='checkbox' style='vertical-align:middle;' value='"+res[i].MEASURE_NAME+"' name='dimenindicate003' id='indicateconds"+(i)+"' onclick='addindicators2right_conds(this);'><span style='display:inline-block;font-size:12px;text-align:left;'>"+res[i].MEASURE_NAME+"</span>";
						}
						
						shtml+="</td>";	
					shtml+="</tr>";
				}
				
			shtml+="</table>";
			$1("dimenconditiondiv").innerHTML=shtml;
		}
	}else{
		if(ach=="2"||ach=="21"||ach=="211"){
			$1("dimenclosdiv").innerHTML="无";
		}else if(ach=="3"||ach=="31"||ach=="311"){
			$1("dimenrowsdiv").innerHTML="无";
		}else if(ach=="4"||ach=="41"||ach=="411"){
			$1("dimenconditiondiv").innerHTML="无";
		}else if(ach=="1"||ach=="5"||ach=="11"){
			$1("recorddiv").innerHTML="检索没有结果";
		}
		
		
		
	}
}

//分页查询指标项
function pagefindindicator(obj){
	var p=obj.getAttribute("value").split("_");

	if(p[0]=="1"){//首页
	    icp="1";
		
		queryindicator(icpmodel);
	}else if(p[0]=="2"){//上一页
		if(icp=="1"){
			showalert("当前页已经是第一页了");
			return;
		}else{
			icp=parseInt(icp)-1;
		}
		queryindicator(icpmodel);
	}else if(p[0]=="3"){//下一页
		/*
		if(zjjltjcp==p[1]){
			showalert("已经是最后一页了!");
			return;
		}
		*/
		icp=parseInt(icp)+1;
		
 		queryindicator(icpmodel);
	}else if(p[0]=="4"){//下一页
		var pnos=$1("pagenotext").value;
		if(pnos.length<1){
			showalert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			showalert("输入非页码数字");
			return;
		}else{/*
			if(pnums>parseInt(p[1])){
				showalert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
			*/
				icp=pnos;
				queryindicator(icpmodel);
			//}
		}
	}
}


//指标维度删除
function deleteindicator(obj){
	if(!confirm('是否确认删除该指标?')){
	   return;
	}

	var d=new Date();
	var tp=getRTP()[6][2];
	var pms="GLTP="+tp+"&iwid="+obj.getAttribute("value")+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1");
}

//指标维度批量删除
function deletebatchzb(){
	if(!confirm('是否确认删除该指标?')){
	   return;
	}
	var checklist = document.getElementsByName ("selected");
  	var tppms="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked ){
			tppms+="&iwid="+checklist[i].value;
		}
	} 
	if(tppms==null||tppms.length<1){
		alert("未选中任何指标项！");
		return false;
	}
 	
	
	var d=new Date();
	var tp=getRTP()[6][2];
	var pms="GLTP="+tp+"&time="+d.getTime();
	
	if(tppms!=null&&tppms.length>0){
		pms+=tppms;
	}
	new AJAXPOST(pms,tp,"2");
}

//指标维度删除结果处理
function deleteindicator_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021020"){
		queryindicator(icpmodel);
	}else{
		alert("指标维度删除失败！");
		return;
	}
}

//指标维度添加维护
function addindicatordimen(){
	
	/*
	var indicatornameselect=$1("indicatornameselect");
	var indicatornameselectvalue=indicatornameselect.options[indicatornameselect.selectedIndex].value;
	if(indicatornameselectvalue==null||indicatornameselectvalue.length<1||indicatornameselectvalue=="no"){
		alert("请选择指标");
		return;
	}
	*/
	
	var checklist = document.getElementsByName ("selected");
	var tmppms="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked ){
			 tmppms+="&MEASURE_ID="+checklist[i].value;
		}
	} 
		
	var subjectinput=getselectionvalue("subjectselect");
	if(subjectinput==null||subjectinput.length<1){
		alert("请添加主题");
		return;
	}
	
	var dimentimevalue=null;
	var checklist_time = document.getElementsByName ("dimentime");
	for(var i=0;i<checklist_time.length;i++){
		if(checklist_time[i].checked ){
			dimentimevalue+=parseInt(checklist_time[i].value);
		}
	} 
	if(dimentimevalue==null||dimentimevalue.length<1){
		alert("请设置时间维度");
		return;
	}
	
	
	var dimenorgvalue=null;
	var checklist_org = document.getElementsByName ("dimenorg");
	for(var i=0;i<checklist_org.length;i++){
		if(checklist_org[i].checked ){
			dimenorgvalue+=parseInt(checklist_org[i].value);
		}
	}
	if(dimenorgvalue==null||dimenorgvalue.length<1){
		alert("请设置组织维度");
		return;
	}
	
	var propertyvalue="";
	var checklist_property = document.getElementsByName ("property");
	for(var i=0;i<checklist_property.length;i++){
		if(checklist_property[i].checked ){
			propertyvalue=checklist_property[i].value;
		}
	}
	if(propertyvalue==null||propertyvalue.length<1){
		alert("请设置属性");
		return;
	}

	
	var d=new Date();
	var tp=getRTP()[6][0];
	var pms="GLTP="+tp+"&subject="+b64(subjectinput)+"&dimen_time="+dimentimevalue+"&dimen_organization="+dimenorgvalue+"&property="+propertyvalue+"&time="+d.getTime();
	
	if(tmppms!=null&&tmppms.length>0){
		pms+=tmppms;
	}
	new AJAXPOST(pms,tp,"1");
}

//指标维度添加维护结果处理
function addindicatordimen_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021000"){
		alert("指标维度添加成功！");
	}else if(res.statusInfo=="GEO0210011"){
		alert("指标维度部分已经添加,请勿重复添加！");
	}else if(res.statusInfo=="GEO0210012"){
		alert("指标维度全部已经添加,请勿重复添加！");
	}else{
		alert("指标维度添加失败！");
		return;
	}
}

//指标维度编辑
function editindicatordimen(obj){
	var pmsinfo=obj.getAttribute("value").split("_");
	var iwid=pmsinfo[0];
	var MEASURE_ID=pmsinfo[1];
	
	var subjectinput=getselectionvalue("subjectselect");
	if(subjectinput==null||subjectinput.length<1){
		alert("请添加主题");
		return;
	}
	
	var dimentimevalue=0;
	var checklist_time = document.getElementsByName ("dimentime");
	for(var i=0;i<checklist_time.length;i++){
		if(checklist_time[i].checked ){
			//dimentimevalue=checklist_time[i].value;
			dimentimevalue+=parseInt(checklist_time[i].value);
		}
	} 
	if(dimentimevalue==null||dimentimevalue.length<1){
		alert("请设置时间维度");
		return;
	}
	
	
	var dimenorgvalue=0;
	var checklist_org = document.getElementsByName ("dimenorg");
	for(var i=0;i<checklist_org.length;i++){
		if(checklist_org[i].checked ){
			dimenorgvalue+=parseInt(checklist_org[i].value);
		}
	}
	if(dimenorgvalue==null||dimenorgvalue.length<1){
		alert("请设置组织维度");
		return;
	}
	
	var propertyvalue="";
	var checklist_property = document.getElementsByName ("property");
	for(var i=0;i<checklist_property.length;i++){
		if(checklist_property[i].checked ){
			propertyvalue=checklist_property[i].value;
		}
	}
	if(propertyvalue==null||propertyvalue.length<1){
		alert("请设置属性");
		return;
	}

	
	var d=new Date();
	var tp=getRTP()[6][1];
	var pms="GLTP="+tp+"&iwid="+iwid+"&MEASURE_ID="+MEASURE_ID+"&subject="+b64(subjectinput)+"&dimen_time="+dimentimevalue+"&dimen_organization="+dimenorgvalue+"&property="+propertyvalue+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1");
}

//指标维度编辑结果处理
function editindicatordimen_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021010"){
		alert("指标维度编辑成功！");
	}else{
		alert("指标维度编辑失败！");
		return;
	}
}

//指标名称检索
function queryindicatorname(ach,categoryid){

	var d=new Date();
	var tp=getRTP()[6][4];
	var pms="GLTP="+tp+"&cp=1&pns=1000&time="+d.getTime();
	
	if(ach=="1"){
		var indicatorname=$1("indicatornameinput").value;
		if(indicatorname!=null&&indicatorname.length>0){
			pms+="&measurename="+b64(indicatorname);
		}
		
		var newcategoryid=getselectionvalue("indicatorcategoryselect");
		if(newcategoryid!=null&&newcategoryid!="all"){
			pms+="&categoryid="+newcategoryid;
		}
	}else if(ach=="2"){
		if(categoryid!=null&&categoryid!="all"){
			pms+="&categoryid="+categoryid;
		}
	}
	
	new AJAXPOST(pms,tp,"1");
}

//指标名称检索结果处理
function queryindicatorname_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"){
			/*   		        [{"STATES":"0","NOTICE":"","INDEX_CLASSIFICATION_ID":"041001","iwid":"","dimen_organization":"","METHODS":"bar","subject":"","IS_ASSESS":"否","IS_PROFESSION":"否","LEVEL":"三级","MEASURE_NAME":"35岁以下教师数","property":"","IS_QUERY":"0","IS_DEPARTMENT":"是","CLASSIFY":"客观指标","EQUATION":"","dimen_time":"","CATEGORY_ID":"4","MEASURE_ID":"046199509","IS_SCHOOL":"是","totalnums":554}]
			*/
			
			$1("zhibiaonumsspan").innerHTML="（共"+res.length+"个指标项）";
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'><input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/></td>";
						shtml+="<td style='width:180px;height:40px;' align='center'>指标名称</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>所属分类</td>";
						shtml+="<td style='width:80px;height:40px;' align='center'>级别</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var iwid=res[i].iwid;
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+res[i].MEASURE_ID+"'></td>";
							shtml+="<td style='width:180px;border-top:#DADADA 1px solid;' align='center'><span style='display:inline-block;width:180px;text-align:left;'>"+res[i].MEASURE_NAME+"</span></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].CLASSIFY+"</td>";
							shtml+="<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+res[i].LEVEL+"</td>";
							
						shtml+="</tr>";
					}
			shtml+="</table>";
			
			$1("measurenamecheckdiv").innerHTML=shtml;
		}
	}else{
		$1("zhibiaonumsspan").innerHTML="（共0个指标项）";
		
		var shtml="";	
		shtml+="该分类下没有指标";
		shtml+="";
		$1("measurenamecheckdiv").innerHTML=shtml;;
	}
}

//指标分类检索
function queryindicatorcategory(ach){
	var d=new Date();
	var tp=getRTP()[6][5];
	var pms="GLTP="+tp+"&cp=1&pns=100&time="+d.getTime();
	new AJAXPOST(pms,tp,ach);
}

//指标分类检索结果处理
function queryindicatorcategory_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"){
			/*
		    [{"id":"01","INDEX_NAME":"学校基本信息","PARENT_ID":"00"}]
			*/
			var shtml="<select id='indicatorcategoryselect' style='width:214px;height:28px;border:#DADADA 1px solid;' onchange='getcategoryindicator();'>";
			shtml+="<option value='all'>全部</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].id+"'>"+(i+1)+":"+res[i].INDEX_NAME+"</option>";
			}	
			shtml+="</select>";
			$1("indicatorcategoryspan").innerHTML=shtml;
			
			//queryindicatorname(res[0].id);
			//onchange='getindicatorname();'
		}else if(ach=="2"){
			/*
		    [{"id":"01","INDEX_NAME":"学校基本信息","PARENT_ID":"00"}]
			*/
			
			//*********************列维度处使用开始*********************
			var shtml="<select id='indicatorcategoryselect_cols' style='width:120px;height:22px;line-hegiht:22px;border:#DADADA 1px solid;' onchange='getcategoryindicatorforadd(&quot;1&quot;);'>";
			shtml+="<option value='all'>全部</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].id+"'>"+(i+1)+":"+res[i].INDEX_NAME+"</option>";
			}	
			shtml+="</select>";
			$1("indicatorcategoryspan_cols").innerHTML=shtml;
			//*********************列维度处使用结束*********************
			
			//*********************行维度处使用开始*********************
			shtml="<select id='indicatorcategoryselect_rows' style='width:120px;height:22px;line-hegiht:22px;border:#DADADA 1px solid;' onchange='getcategoryindicatorforadd(&quot;2&quot;);'>";
			shtml+="<option value='all'>全部</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].id+"'>"+(i+1)+":"+res[i].INDEX_NAME+"</option>";
			}	
			shtml+="</select>";
			$1("indicatorcategoryspan_rows").innerHTML=shtml;
			//*********************行维度处使用结束*********************
			
			
			//*********************过滤条件处使用开始*********************
			shtml="<select id='indicatorcategoryselect_conds' style='width:120px;height:22px;line-hegiht:22px;border:#DADADA 1px solid;' onchange='getcategoryindicatorforadd(&quot;3&quot;);'>";
			shtml+="<option value='all'>全部</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].id+"'>"+(i+1)+":"+res[i].INDEX_NAME+"</option>";
			}	
			shtml+="</select>";
			$1("indicatorcategoryspan_conds").innerHTML=shtml;
			//*********************过滤条件处使用结束*********************
		}else if(ach=="3"){//指标维度查询处使用
			/*
		    [{"id":"01","INDEX_NAME":"学校基本信息","PARENT_ID":"00"}]
			*/
			var shtml="<select id='indicatorcategoryselect' style='width:214px;height:24px;border:#DADADA 1px solid;' onchange='getcategoryindicatorforweidu();'>";
			shtml+="<option value='all'>全部</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].id+"'>"+(i+1)+":"+res[i].INDEX_NAME+"</option>";
			}	
			shtml+="</select>";
			$1("indicatorcategoryspan").innerHTML=shtml;
			
			//queryindicatorname(res[0].id);
			//onchange='getindicatorname();'
		}
	}else{
		var shtml="<select >";	
		shtml+="<option>没有指标分类</option>";
		shtml+="</select>";
		$1("indicatorcategoryspan").innerHTML=shtml;;
	}
}
//添加了指标分类检索
function getcategoryindicator(){
	var categoryid=getselectionvalue("indicatorcategoryselect");
	
	//分类查询指标项
	queryindicatorname("2",categoryid);
}
//指标维度分类检索
function getcategoryindicatorforweidu(){
	//indicatorcategoryselect
	//var categoryid=getselectionvalue("indicatorcategoryselect");
	//alert(categoryid)
	//指标维度检索
	icp=1;
	icpmodel="";
	queryindicator("11");
}
//添加了指标分类检索
function getcategoryindicatorforadd(ach){
	if(ach=="1"){
		//指标维度检索
		icp=1;
		icpmodel="";
		queryindicator("21");
		
	}else if(ach=="2"){
		//指标维度检索
		icp=1;
		icpmodel="";
		queryindicator("31");
		
	}else if(ach=="3"){
		//指标维度检索
		icp=1;
		icpmodel="";
		queryindicator("41");
	}
}
//指标维度检索
function findcategoryindicatorforaddinput(ach){
	if(ach=="1"){
		//指标维度检索
		icp=1;
		icpmodel="";
		queryindicator("211");
		
	}else if(ach=="2"){
		//指标维度检索
		icp=1;
		icpmodel="";
		queryindicator("311");
		
	}else if(ach=="3"){
		//指标维度检索
		icp=1;
		icpmodel="";
		queryindicator("411");
	}
}

//指标值检索
function queryzbvalue(){
	
	var zb=$1("zbname").value;
	var dpname=$1("dpname").value;
	var pfname=$1("pfname").value;
	var syear=$1("syear").value;
	
	var d=new Date();
	var tp=getRTP()[6][6];
	var pms="GLTP="+tp+"&cp=1&pns=100&time="+d.getTime();
	
	if(zb!=null&&zb.length>0){
		pms+="&zb="+b64(zb);
	}
	
	if(dpname!=null&&dpname.length>0){
		pms+="&department="+b64(dpname);
	}
	
	if(pfname!=null&&pfname.length>0){
		pms+="&profession="+b64(pfname);
	}
	if(syear!=null&&syear.length>0){
		pms+="&syear="+syear;
	}
	//alert(pms)
	new AJAXPOST(pms,tp,"1");
}

//指标值检索结果处理
function queryzbvalue_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"){
			/*
		    [
			{
				"zbid": "66199501",
				"id": "1",
				"zb": "普通本科生数",
				"zhi": "15688.0",
				"department": "化工学院",
				"profession": "ZYMC",
				"syear": "2012"
		},
		]

			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
					shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'><input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/></td>";
					shtml+="<td style='width:100px;height:40px;' align='center'>指标名称</td>";
					shtml+="<td style='width:140px;height:40px;' align='center'>院系</td>";
					shtml+="<td style='width:140px;height:40px;' align='center'>专业</td>";
					shtml+="<td style='width:100px;height:40px;' align='center'>年份</td>";
					shtml+="<td style='width:100px;height:40px;' align='center'>值</td>";
				shtml+="</tr>";
				
				for(var i=0;i<res.length;i++){
					var iwid=res[i].iwid;
					var itembk="#F5F5F5";
					if(i%2==0){
						itembk="#FFF";
					}
					
					var ttt=res[i].id+"___"+res[i].syear+"___"+res[i].department+"___"+res[i].profession+"___"+res[i].zbid+"___"+res[i].zb+"___"+res[i].zhi;
					
					shtml+="<tr style='background-color:"+itembk+";'>";
						shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+ttt+"'></td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].zb+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].department+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].profession+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].syear+"</td>";
						shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].zhi+"</td>";
						
					shtml+="</tr>";
				}
					
					
			shtml+="</table>";
				
			$1("zbcontainerdiv").innerHTML=shtml;
			
			queryindicatorname(res[0].id);
		}
	}else{
		var shtml="";	
		shtml+="没有指标值";
		shtml+="";
		$1("zbcontainerdiv").innerHTML=shtml;;
	}
}

//指标分类切换查找指标名称
function getindicatorname(){
	var indicatorcategoryselect=$1("indicatorcategoryselect");
	var indicatorcategoryselectvalue=indicatorcategoryselect.options[indicatorcategoryselect.selectedIndex].value;
	
	//根据分类检索指标名称
	queryindicatorname(indicatorcategoryselectvalue);
}
//====================指标维度管理结束==========================

//====================数据报表模板管理开始==========================

//数据报表模板添加
function adddatatabmodel(obj){
	var tabmodelname=$1("tabmodelnameinput").value;
	if(tabmodelname==null||tabmodelname.length<1){
		alert("请输入数据报表名称模板");
		return;
	}
	
	//数据报表类型ID
	var dtcategoryselect=$1("dtcategoryselect");
	var dtcategory=dtcategoryselect.options[dtcategoryselect.selectedIndex].value;
	if(dtcategory==null||dtcategory.length<1){
		alert("请选择数据报表类型");
		return;
	}
	
	//属性
  	var propertyradio=document.getElementsByName("property");
	var propertyvalue="";
  	for(var i=0;i<propertyradio.length;i++){
	 	if(propertyradio[i].checked)
		   propertyvalue = propertyradio[i].value;
  	}
	if(propertyvalue==null||propertyvalue.length<1){
		alert("请选择属性");
		return;
	}
	
	//列维度
	var pms_clos="";
	var dimencolsselect=$1("dimencolsselect");
	var dimencols=dimencolsselect.options[dimencolsselect.selectedIndex].value;
	if(dimencols==null||dimencols.length<1){
		alert("请选择列维度");
		return;
	}else{
		//alert(dimencols)
		if(dimencols=="1"){//组织维度
			var tableobj=$1("dimenclostab001");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("列维度取值："+nipt1value);
				pms_clos+="&closv="+b64(nipt1value);
			}
			
		}else if(dimencols=="0"){//时间维度
			//dimentime
			var checklist = document.getElementsByName ("zyear001");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("列维度取值："+checklist[i].value);
					pms_clos+="&closv="+b64(checklist[i].value);
				}
			} 
		}else if(dimencols=="2"){//指标
			/*
			var checklist = document.getElementsByName ("dimenindicate001");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("列维度取值："+checklist[i].value);
					pms_clos+="&closv="+b64(checklist[i].value);
				}
			} 
			*/
			
			var tableobj=$1("dimenclostab001");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("列维度取值："+nipt1value);
				pms_clos+="&closv="+b64(nipt1value);
			}
		}
					
	}
	
	//行维度
	var pms_rows="";
	var dimenrowssselect=$1("dimenrowssselect");
	var dimenrows=dimenrowssselect.options[dimenrowssselect.selectedIndex].value;
	if(dimenrows==null||dimenrows.length<1){
		alert("请选择行维度");
		return;
	}else{
		//alert(dimencols)
		if(dimenrows=="1"){//组织维度
			var tableobj=$1("dimenclostab002");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("行维度取值："+nipt1value);
				pms_rows+="&rowsv="+b64(nipt1value);
			}
			
		}else if(dimenrows=="0"){//时间维度
			//dimentime
			var checklist = document.getElementsByName ("zyear002");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("行维度取值："+checklist[i].value);
					pms_rows+="&rowsv="+b64(checklist[i].value);
				}
			} 
		}else if(dimenrows=="2"){//指标
			/*
			var checklist = document.getElementsByName ("dimenindicate002");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("行维度取值："+checklist[i].value);
					pms_rows+="&rowsv="+b64(checklist[i].value);
				}
			} 
			*/
			
			var tableobj=$1("dimenclostab002");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("行维度取值："+nipt1value);
				pms_rows+="&rowsv="+b64(nipt1value);
			}
			
		}
					
	}
	
	//筛选条件
	var pms_conds="";
	var dimenconditionsselect=$1("dimenconditionsselect");
	var dimencondition=dimenconditionsselect.options[dimenconditionsselect.selectedIndex].value;
	if(dimencondition==null||dimencondition.length<1){
		alert("请选择筛选条件");
		return;
	}else{
		//alert(dimencols)
		if(dimencondition=="1"){//组织维度
			var tableobj=$1("dimenclostab003");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("筛选条件取值："+nipt1value);
				pms_conds+="&consv="+b64(nipt1value);
			}
			
		}else if(dimencondition=="0"){//时间维度
			//dimentime
			var checklist = document.getElementsByName ("zyear003");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("筛选条件取值："+checklist[i].value);
					pms_conds+="&consv="+b64(checklist[i].value);
				}
			} 
		}else if(dimencondition=="2"){//指标
			/*
			var checklist = document.getElementsByName ("dimenindicate003");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("筛选条件取值："+checklist[i].value);
					pms_conds+="&consv="+b64(checklist[i].value);
				}
			} 
			*/
			
			var tableobj=$1("dimenclostab003");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("筛选条件取值："+nipt1value);
				pms_conds+="&consv="+b64(nipt1value);
			}
			
		}
					
	}
	
	
	var d=new Date();
	var tp=getRTP()[7][0];
	var pms="GLTP="+tp+"&tabmodel_name="+b64(tabmodelname)+"&dtcid="+dtcategory+"&tabmodel_property="+propertyvalue+"&tabmodel_cols="+dimencols+"&tabmodel_rows="+dimenrows+"&tabmodel_filter="+dimencondition+"&time="+d.getTime();
	
	if(pms_clos.length>0){
		pms+=pms_clos;
	}
	if(pms_rows.length>0){
		pms+=pms_rows;
	}
	if(pms_conds.length>0){
		pms+=pms_conds;
	}
	new AJAXPOST(pms,tp,"1");
}

//数据报表模板添加结果处理
function adddatatabmodel_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021201"){
		alert("数据报表模板添加成功！");
	}else{
		alert("数据报表模板添加失败！");
	}
}

//数据报表模板编辑
function eidtdatatabmodel(obj){
	var tabmodelname=$1("tabmodelnameinput").value;
	if(tabmodelname==null||tabmodelname.length<1){
		alert("请输入数据报表名称模板");
		return;
	}
	
	//数据报表类型ID
	var dtcategoryselect=$1("dtcategoryselect");
	var dtcategory=dtcategoryselect.options[dtcategoryselect.selectedIndex].value;
	if(dtcategory==null||dtcategory.length<1){
		alert("请选择数据报表类型");
		return;
	}
	
	//属性
  	var propertyradio=document.getElementsByName("property");
	var propertyvalue="";
  	for(var i=0;i<propertyradio.length;i++){
	 	if(propertyradio[i].checked)
		   propertyvalue = propertyradio[i].value;
  	}
	if(propertyvalue==null||propertyvalue.length<1){
		alert("请选择属性");
		return;
	}
	
	//列维度
	var pms_clos="";
	var dimencolsselect=$1("dimencolsselect");
	var dimencols=dimencolsselect.options[dimencolsselect.selectedIndex].value;
	if(dimencols==null||dimencols.length<1){
		alert("请选择列维度");
		return;
	}else{
		//alert(dimencols)
		if(dimencols=="1"){//组织维度
			var tableobj=$1("dimenclostab001");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("列维度取值："+nipt1value);
				pms_clos+="&closv="+b64(nipt1value);
			}
			
		}else if(dimencols=="0"){//时间维度
			//dimentime
			var checklist = document.getElementsByName ("zyear001");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("列维度取值："+checklist[i].value);
					pms_clos+="&closv="+b64(checklist[i].value);
				}
			} 
		}else if(dimencols=="2"){//指标
			/*
			var checklist = document.getElementsByName ("dimenindicate001");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("列维度取值："+checklist[i].value);
					pms_clos+="&closv="+b64(checklist[i].value);
				}
			} 
			*/
			
			var tableobj=$1("dimenclostab001");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("列维度取值："+nipt1value);
				pms_clos+="&closv="+b64(nipt1value);
			}
		}
					
	}
	
	//行维度
	var pms_rows="";
	var dimenrowssselect=$1("dimenrowssselect");
	var dimenrows=dimenrowssselect.options[dimenrowssselect.selectedIndex].value;
	if(dimenrows==null||dimenrows.length<1){
		alert("请选择行维度");
		return;
	}else{
		//alert(dimencols)
		if(dimenrows=="1"){//组织维度
			var tableobj=$1("dimenclostab002");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("行维度取值："+nipt1value);
				pms_rows+="&rowsv="+b64(nipt1value);
			}
			
		}else if(dimenrows=="0"){//时间维度
			//dimentime
			var checklist = document.getElementsByName ("zyear002");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("行维度取值："+checklist[i].value);
					pms_rows+="&rowsv="+b64(checklist[i].value);
				}
			} 
		}else if(dimenrows=="2"){//指标
			/*dimentime
			var checklist = document.getElementsByName ("dimenindicate002");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("行维度取值："+checklist[i].value);
					pms_rows+="&rowsv="+b64(checklist[i].value);
				}
			} 
			*/
			
			var tableobj=$1("dimenclostab002");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("行维度取值："+nipt1value);
				pms_rows+="&rowsv="+b64(nipt1value);
			}
		}
					
	}
	
	//筛选条件
	var pms_conds="";
	var dimenconditionsselect=$1("dimenconditionsselect");
	var dimencondition=dimenconditionsselect.options[dimenconditionsselect.selectedIndex].value;
	if(dimencondition==null||dimencondition.length<1){
		alert("请选择筛选条件");
		return;
	}else{
		//alert(dimencols)
		if(dimencondition=="1"){//组织维度
			var tableobj=$1("dimenclostab003");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("筛选条件取值："+nipt1value);
				pms_conds+="&consv="+b64(nipt1value);
			}
			
		}else if(dimencondition=="0"){//时间维度
			//dimentime
			var checklist = document.getElementsByName ("zyear003");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("筛选条件取值："+checklist[i].value);
					pms_conds+="&consv="+b64(checklist[i].value);
				}
			} 
		}else if(dimencondition=="2"){//指标
			/*dimentime
			var checklist = document.getElementsByName ("dimenindicate003");
			for(var i=0;i<checklist.length;i++){
				if(checklist[i].checked){
					//alert("筛选条件取值："+checklist[i].value);
					pms_conds+="&consv="+b64(checklist[i].value);
				}
			} 
			*/
			
			var tableobj=$1("dimenclostab003");
			for(i=0;i<tableobj.rows.length;i++){
				//var nipt1value=tableobj.rows[i].cells[0].childNodes[0].value;
				var nipt1value=tableobj.rows[i].cells[0].innerHTML;
				//alert("筛选条件取值："+nipt1value);
				pms_conds+="&consv="+b64(nipt1value);
			}
		}
					
	}
	
	
	
	var d=new Date();
	var tp=getRTP()[7][1];
	var pms="GLTP="+tp+"&tmid="+obj.getAttribute("value")+"&tabmodel_name="+b64(tabmodelname)+"&dtcid="+dtcategory+"&tabmodel_property="+propertyvalue+"&tabmodel_cols="+dimencols+"&tabmodel_rows="+dimenrows+"&tabmodel_filter="+dimencondition+"&time="+d.getTime();
	
	if(pms_clos.length>0){
		pms+=pms_clos;
	}
	if(pms_rows.length>0){
		pms+=pms_rows;
	}
	if(pms_conds.length>0){
		pms+=pms_conds;
	}
	new AJAXPOST(pms,tp,"1");
}

//数据报表模板编辑结果处理
function eidtdatatabmodel_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021221"){
		alert("数据报表模板编辑成功！");
	}else{
		alert("数据报表模板编辑失败！");
	}
}


//数据报表模板检索
var dtmcp=1;
var dtmpcpmodel="";
function querydatatabmodel(ach,values){
	dtmpcpmodel=ach;
	
	var d=new Date();
	var tp=getRTP()[7][3];
	var pms="GLTP="+tp+"&cp="+dtmcp+"&pns=8&time="+d.getTime();
	
	if(ach=="3"){//数据报表模板条件检索
		//数据报表类型
		var dtcategoryselect=$1("dtcategoryselect");
		var dtcategory=dtcategoryselect.options[dtcategoryselect.selectedIndex].value;
	
		var dtmodelname=$1("dtmodelinput").value;
		if( (dtmodelname==null||dtmodelname.length<1)&&
			(dtcategory==null||dtcategory.length<1)
		  ){
			alert("报表模板类型和名称不能同时为空");
			return;
		}
		
		if( dtmodelname!=null&&dtmodelname.length>0){
			pms+="&tabmodelname="+b64(dtmodelname);
		}
		if( dtcategory!=null&&dtcategory.length>0&&dtcategory!="all"){
			pms+="&tabmodelcategory="+dtcategory;
		}
	}else if(ach=="21"){//数据报表模板条件检索
		//数据报表类型
		var dtcategory=getselectionvalue("dtcategoryselect");

		if( dtcategory!=null&&dtcategory.length>0){
			pms+="&tabmodelcategory="+dtcategory;
		}
	}
	
	new AJAXPOST(pms,tp,ach,values);
}

//数据报表模板检索结果处理
function querydatatabmodel_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"||ach=="3"){//数据报表模板检索处使用
			/*
			[{
					"tabmodel_property": "0",
					"lrows": [
						"本科教学日常运行支出总额(万元)",
						"当年新增电子图书数"
					],
					"tabmodel_filter": "1",
					"ctime": "2014-10-23 13:25:48.8800000",
					"tabmodel_cols": "0",
					"tabmodel_rows": "2",
					"lcos": [
						"石油加工系",
						"产品工程系",
						"化学工程系"
					],
					"dtcid": "1",
					"tabmodel_name": "本科生数比例模板",
					"tmid": "19",
					"type_name": "质量报表",
					"totalnums": 8,
					"lcons": [
						"2014"
					]
			}]			
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'><input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/></td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>数据报表名称</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>数据报表类型</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>属性</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>列维度</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>行维度</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>筛选条件</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>创建时间</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var tmid=res[i].tmid;
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						//处理生产==================================
						var x="";
						
						
						//行维度
						var lrowsstr=res[i].lrows.join(""); 
						if(lrowsstr!=null&&lrowsstr.length>0){//1
							x+=res[i].lrows+"___";
						}else{
							x+="null___";
						}
						//alert(x);
						
						//列维度
						var lcosStr=res[i].lcos.join(""); 
						if(lcosStr!=null&&lcosStr.length>0){//2
							x+=res[i].lcos+"___";
						}else{
							x+="null___";
						}
						
						//筛选条件
						var lconsStr=res[i].lcons.join(""); 
						if(lconsStr!=null&&lconsStr.length>0){//3
							x+=res[i].lcons+"___";
						}else{
							x+="null___";
						}
						
						
						if(res[i].tabmodel_name!=null){//idx:4 
							x+=res[i].tabmodel_name+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].dtcid!=null){//idx:5
							x+=res[i].dtcid+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].type_name!=null){//idx:6
							x+=res[i].type_name+"___";
						}else{
							x+="null___";
						}
			
						if(res[i].tabmodel_property!=null){//idx:7
							x+=res[i].tabmodel_property+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tabmodel_cols!=null){//idx:8
							x+=res[i].tabmodel_cols+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tabmodel_rows!=null){//idx:9
							x+=res[i].tabmodel_rows+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tabmodel_filter!=null){//idx:10
							x+=res[i].tabmodel_filter+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tmid!=null){//idx:11
							x+=res[i].tmid+"___";
						}else{
							x+="null___";
						}
						//处理生产==================================
						
						//var tttt=json2str(res[i]);
						//alert(res[i].lcos);
						//alert(tttt);
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+tmid+"'></td>";
							shtml+="<td style='width:140px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='showtabmodel(this);return false;' value='"+x+"'>"+res[i].tabmodel_name+"</a></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].type_name+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getproperty(res[i].tabmodel_property)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(res[i].tabmodel_cols)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(res[i].tabmodel_rows)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(res[i].tabmodel_filter)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].ctime.substring(0,10)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
								shtml+="<a href='#' onclick='showeditnewdataxlsmodel(this);return false;' value='"+x+"'><img src='images/bj_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>编辑</span></a>";
								shtml+="&nbsp;&nbsp;<a href='#' onclick='deletedatatabmodel(this);return false;' value='"+tmid+"'><img src='images/sc_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>删除</span></a>";
							shtml+="</td>";
						
						shtml+="</tr>";
					}
					
					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+dtmcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									
									shtml+="<img value='4_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="2"||ach=="21"){//数据报表新增处使用
			/*
			[{
					"tabmodel_property": "0",
					"lrows": [
						"本科教学日常运行支出总额(万元)",
						"当年新增电子图书数"
					],
					"tabmodel_filter": "1",
					"ctime": "2014-10-23 13:25:48.8800000",
					"tabmodel_cols": "0",
					"tabmodel_rows": "2",
					"lcos": [
						"石油加工系",
						"产品工程系",
						"化学工程系"
					],
					"dtcid": "1",
					"tabmodel_name": "本科生数比例模板",
					"tmid": "19",
					"type_name": "质量报表",
					"totalnums": 8,
					"lcons": [
						"2014"
					]
			}]			
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						
						shtml+="<td style='width:;height:40px;border-right:#DADADA 1px solid;'  align='center'>";
							shtml+="<input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/>";
						shtml+="</td>";
						
						shtml+="<td style='width:;height:40px;' align='center'>数据报表类型</td>";
						shtml+="<td style='width:;height:40px;' align='center'>数据报表名称</td>";
						shtml+="<td style='width:;height:40px;' align='center'>属性</td>";
						shtml+="<td style='width:;height:40px;' align='center'>列维度</td>";
						shtml+="<td style='width:;height:40px;' align='center'>行维度</td>";
						shtml+="<td style='width:;height:40px;' align='center'>筛选条件</td>";
						shtml+="<td style='width:;height:40px;' align='center'>设置</td>";
						//shtml+="<td style='width:100px;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var tmid=res[i].tmid;
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						//处理生产==================================
						var x="";
						
						
						//行维度
						var lrowsstr=res[i].lrows.join(""); 
						if(lrowsstr!=null&&lrowsstr.length>0){
							x+=res[i].lrows+"___";
						}else{
							x+="null___";
						}
						//alert(x);
						
						//列维度
						var lcosStr=res[i].lcos.join(""); 
						if(lcosStr!=null&&lcosStr.length>0){
							x+=res[i].lcos+"___";
						}else{
							x+="null___";
						}
						
						//筛选条件
						var lconsStr=res[i].lcons.join(""); 
						if(lconsStr!=null&&lconsStr.length>0){
							x+=res[i].lcons+"___";
						}else{
							x+="null___";
						}
						
						
						if(res[i].tabmodel_name!=null){//idx:4 
							x+=res[i].tabmodel_name+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].dtcid!=null){//idx:5
							x+=res[i].dtcid+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].type_name!=null){//idx:6
							x+=res[i].type_name+"___";
						}else{
							x+="null___";
						}
			
						if(res[i].tabmodel_property!=null){//idx:7
							x+=res[i].tabmodel_property+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tabmodel_cols!=null){//idx:8
							x+=res[i].tabmodel_cols+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tabmodel_rows!=null){//idx:9
							x+=res[i].tabmodel_rows+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tabmodel_filter!=null){//idx:10
							x+=res[i].tabmodel_filter+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tmid!=null){//idx:11
							x+=res[i].tmid+"___";
						}else{
							x+="null___";
						}
						
						//处理生产==================================
						
						//var tttt=json2str(res[i]);
						//alert(res[i].lcos);
						//alert(tttt);
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+res[i].tmid+"'></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].type_name+"</td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;padding-left:10px;padding-right:10px;' align='left'><a href='#' onclick='showtabmodel(this);return false;' value='"+x+"'>"+res[i].tabmodel_name+"</a></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getproperty(res[i].tabmodel_property)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(res[i].tabmodel_cols)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(res[i].tabmodel_rows)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(res[i].tabmodel_filter)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].ctime.substring(0,10)+"</td>";
							/*
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='showeditnewdataxlsmodel(this);return false;' value='"+json2str(res[i])+"'>编辑</a> <a href='#' onclick='deletedatatabmodel(this);return false;' value='"+tmid+"'>删除</a></td>";
						*/
						shtml+="</tr>";
					}
					

					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+dtmcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									
									shtml+="<img value='4_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="4"){//数据报表编辑处使用
			/*
			[{
					"tabmodel_property": "0",
					"lrows": [
						"本科教学日常运行支出总额(万元)",
						"当年新增电子图书数"
					],
					"tabmodel_filter": "1",
					"ctime": "2014-10-23 13:25:48.8800000",
					"tabmodel_cols": "0",
					"tabmodel_rows": "2",
					"lcos": [
						"石油加工系",
						"产品工程系",
						"化学工程系"
					],
					"dtcid": "1",
					"tabmodel_name": "本科生数比例模板",
					"tmid": "19",
					"type_name": "质量报表",
					"totalnums": 8,
					"lcons": [
						"2014"
					]
			}]			
			*/
			var mv=new Map();
			if(values!=null){
				for(var j=0;j<values.length;j++){
					mv.put(values[j],values[j]);
				}
			}
			
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						
						shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'>";
							shtml+="<input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/>";
						shtml+="</td>";
						
						shtml+="<td style='width:100px;height:40px;' align='center'>数据报表类型</td>";
						shtml+="<td style='width:;height:40px;' align='center'>数据报表名称</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>属性</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>列维度</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>行维度</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>筛选条件</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>创建时间</td>";
						//shtml+="<td style='width:100px;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var tmid=res[i].tmid;
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						//处理生产==================================
						var x="";
						
						
						//行维度
						var lrowsstr=res[i].lrows.join(""); 
						if(lrowsstr!=null&&lrowsstr.length>0){
							x+=res[i].lrows+"___";
						}else{
							x+="null___";
						}
						//alert(x);
						
						//列维度
						var lcosStr=res[i].lcos.join(""); 
						if(lcosStr!=null&&lcosStr.length>0){
							x+=res[i].lcos+"___";
						}else{
							x+="null___";
						}
						
						//筛选条件
						var lconsStr=res[i].lcons.join(""); 
						if(lconsStr!=null&&lconsStr.length>0){
							x+=res[i].lcons+"___";
						}else{
							x+="null___";
						}
						
						
						if(res[i].tabmodel_name!=null){//idx:4 
							x+=res[i].tabmodel_name+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].dtcid!=null){//idx:5
							x+=res[i].dtcid+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].type_name!=null){//idx:6
							x+=res[i].type_name+"___";
						}else{
							x+="null___";
						}
			
						if(res[i].tabmodel_property!=null){//idx:7
							x+=res[i].tabmodel_property+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tabmodel_cols!=null){//idx:8
							x+=res[i].tabmodel_cols+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tabmodel_rows!=null){//idx:9
							x+=res[i].tabmodel_rows+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tabmodel_filter!=null){//idx:10
							x+=res[i].tabmodel_filter+"___";
						}else{
							x+="null___";
						}
						
						if(res[i].tmid!=null){//idx:11
							x+=res[i].tmid+"___";
						}else{
							x+="null___";
						}
						
						//处理生产==================================
						
						//var tttt=json2str(res[i]);
						//alert(res[i].lcos);
						//alert(tttt);
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							if(mv.containsKey(res[i].tmid)){
								shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+res[i].tmid+"' checked></td>";
							}else{
								shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+res[i].tmid+"'></td>";
							}
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].type_name+"</td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;padding-left:10px;padding-right:10px;' align='left'><a href='#' onclick='showtabmodel(this);return false;' value='"+x+"' style=''>"+res[i].tabmodel_name+"</a></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getproperty(res[i].tabmodel_property)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(res[i].tabmodel_cols)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(res[i].tabmodel_rows)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(res[i].tabmodel_filter)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].ctime.substring(0,10)+"</td>";
							/*
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='showeditnewdataxlsmodel(this);return false;' value='"+json2str(res[i])+"'>编辑</a> <a href='#' onclick='deletedatatabmodel(this);return false;' value='"+tmid+"'>删除</a></td>";
						*/
						shtml+="</tr>";
					}
					

					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+dtmcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									
									shtml+="<img value='4_0' onclick='pagefinddatatabmodel(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}
	}else{
		$1("recorddiv").innerHTML="";
	}
} 

//分页查询数据报表模板
function pagefinddatatabmodel(obj){
	var p=obj.getAttribute("value").split("_");

	if(p[0]=="1"){//首页
	    dtmcp="1";
		
		querydatatabmodel(dtmpcpmodel);
	}else if(p[0]=="2"){//上一页
		if(dtmcp=="1"){
			showalert("当前页已经是第一页了");
			return;
		}else{
			dtmcp=parseInt(dtmcp)-1;
		}
		querydatatabmodel(dtmpcpmodel);
	}else if(p[0]=="3"){//下一页
		/*
		if(zjjltjcp==p[1]){
			showalert("已经是最后一页了!");
			return;
		}
		*/
		dtmcp=parseInt(dtmcp)+1;
		
 		querydatatabmodel(dtmpcpmodel);
	}else if(p[0]=="4"){//下一页
		var pnos=$1("pagenotext").value;
		if(pnos.length<1){
			showalert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			showalert("输入非页码数字");
			return;
		}else{/*
			if(pnums>parseInt(p[1])){
				showalert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
			*/
				dtmcp=pnos;
				querydatatabmodel(dtmpcpmodel);
			//}
		}
	}
}

//数据报表模板删除
function deletedatatabmodel(obj){
	if(!confirm('是否确认删除该报表模板?')){
	   return;
	}
	var d=new Date();
	var tp=getRTP()[7][2];
	var pms="GLTP="+tp+"&tmid="+obj.getAttribute("value")+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1");
}
//数据报表模板批量删除
function deleteAlldatatabmodel(){
	if(!confirm('是否确认删除该报表模板?')){
	   return;
	}
	
	var checklist = document.getElementsByName ("selected");
  	var tppms="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked ){
			tppms+="&tmid="+checklist[i].value;
		}
	} 
	if(tppms==null||tppms.length<1){
		alert("未选中任何数据报表模板！");
		return false;
	}
 
	var d=new Date();
	var tp=getRTP()[7][2];
	var pms="GLTP="+tp+"&time="+d.getTime();
	
	if(tppms!=null&&tppms.length>0){
		pms+=tppms;
	}
	new AJAXPOST(pms,tp,"2");
}
//数据报表模板删除结果处理
function deletedatatabmodel_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021241"){
		querydatatabmodel(dtmpcpmodel);
	}else{
		alert("数据报表模板删除失败！");
		return;
	}
}

//数据报表模板类型检索
function querytabmodelcategory(ach,values){
	var d=new Date();
	var tp=getRTP()[7][4];
	var pms="GLTP="+tp+"&time="+d.getTime();
	new AJAXPOST(pms,tp,ach,values);
}

//数据报表模板类型检索结果处理
function querytabmodelcategory_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"){
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:200px;height:26px;line-height:26px;border:#DADADA 1px solid;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="2"){//数据报表模板编辑处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:200px;height:26px;line-height:26px;border:#DADADA 1px solid;vertical-align:middle;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				if(values==res[i].ID){
					shtml+="<option value='"+res[i].ID+"' selected>"+res[i].TYPE_NAME+"</option>";
				}else{
					shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
				}
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="3"){//质量报告模板添加处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:200px;height:26px;line-height:26px;border:#DADADA 1px solid;vertical-align:middle;'>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="4"){//数据报表模板编辑处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:200px;height:26px;line-height:26px;border:#DADADA 1px solid;vertical-align:middle;'>";
			for(var i=0;i<res.length;i++){
				if(values==res[i].ID){
					shtml+="<option value='"+res[i].ID+"' selected>"+res[i].TYPE_NAME+"</option>";
				}else{
					shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
				}
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="5"){//质量报告编制处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:200px;height:24px;line-height:24px;border:#DADADA 1px solid;'>";
			//shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="6"){//质量报告编辑处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:200px;height:24px;line-height:24px;border:#DADADA 1px solid;'>";
			//shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				if(values==res[i].ID){
					shtml+="<option value='"+res[i].ID+"' selected>"+res[i].TYPE_NAME+"</option>";
				}else{
					shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
				}
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
			
		}else if(ach=="7"){//质量报告模板检索处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:100px;height:24px;line-height:24px;border:#DADADA 1px solid;vertical-align:middle;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="8"){//质量报告编制查询处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:100px;height:24px;line-height:24px;border:#DADADA 1px solid;vertical-align:middle;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="9"){//质量报告预览查询处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:100px;height:24px;line-height:24px;border:#DADADA 1px solid;vertical-align:middle;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="10"){//数据报表模板处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:100px;height:24px;line-height:24px;border:#DADADA 1px solid;vertical-align:middle;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="11"){//数据报表编制检索处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:100px;height:24px;line-height:24px;border:#DADADA 1px solid;vertical-align:middle;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="12"){//数据报表检索处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:100px;height:24px;line-height:24px;border:#DADADA 1px solid;vertical-align:middle;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="13"){//数据报表新增处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:200px;height:26px;line-height:26px;border:#DADADA 1px solid;' onchange='querydtmodelbycategotyid();'>";
			//shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				//if(values==res[i].ID){
					//shtml+="<option value='"+res[i].ID+"' selected>"+res[i].TYPE_NAME+"</option>";
				//}else{
					shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
				//}
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="14"){//数据报表编辑处使用
			/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:200px;height:26px;line-height:26px;border:#DADADA 1px solid;'>";
			//shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				if(values==res[i].ID){
					shtml+="<option value='"+res[i].ID+"' selected>"+res[i].TYPE_NAME+"</option>";
				}else{
					shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
				}
			}			
			shtml+="</select>";		
				
			$1("datatabmodelcategoryspan").innerHTML=shtml;
		}else if(ach=="15"){//数据报表插入处使用
				/*
			[{"TYPE_NAME":"质量报表","ID":"1"},{"TYPE_NAME":"年度报表","ID":"2"},{"TYPE_NAME":"教委报表","ID":"3"}]
			*/
			var shtml="";
			shtml+="<select id='dtcategoryselect' style='display:inline-block;width:100px;height:24px;line-height:24px;border:#DADADA 1px solid;vertical-align:middle;'>";
			shtml+="<option value='all'>所有</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].ID+"'>"+res[i].TYPE_NAME+"</option>";
			}			
			shtml+="</select>";		
			$1("newdatatabmodelcategoryspan").innerHTML=shtml;
		}
	}else{
		//$1("imdetailddiv").innerHTML="<table style='height:100%;width:100%;font-size:20px;'><tr><td align='center'>上海教委数据导入查询没有结果:"+txt+"</td></tr></table>";
		
	}
}
//数据报表模板检索
function querydtmodelbycategotyid(){
	var dtcategoryid=getselectionvalue("dtcategoryselect");
	
	//数据报表模板检索
	dtmcp=1;
	dtmpcpmodel="";
	querydatatabmodel("21");
}
//数据报表模板内容值检索
function querydatatabmodelgridvalue(obj,ach){
	var tabmodel_cols=obj.tabmodel_cols;
	var tabmodel_rows=obj.tabmodel_rows;
	var tabmodel_filter=obj.tabmodel_filter;
	
	var values_cols=obj.values_cols.split(",");
	var values_rows=obj.values_rows.split(",");
	var values_conds=obj.values_conds.split(",");
		
	var d=new Date();
	var tp=getRTP()[6][7];
	var pms="GLTP="+tp+"&tabmodel_cols="+tabmodel_cols+"&tabmodel_rows="+tabmodel_rows+"&tabmodel_filter="+tabmodel_filter;
	
	for(var i=0;i<values_cols.length;i++){
		pms+="&values_cols="+b64(values_cols[i]);
	}
	
	for(var i=0;i<values_rows.length;i++){
		pms+="&values_rows="+b64(values_rows[i]);
	}
	
	for(var i=0;i<values_conds.length;i++){
		pms+="&values_conds="+b64(values_conds[i]);
	}
	
	
	pms+="&time="+d.getTime();
	
	new AJAXPOST(pms,tp,ach,obj);
}

//指标值检索结果处理
function querydatatabmodelgridvalue_result_pro(txt,ach,obj){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"){
			/*
			[{
				"zbid": "66199501",
				"id": "1",
				"zb": "普通本科生数",
				"zhi": "15688.0",
				"department": "化工学院",
				"profession": "ZYMC",
				"syear": "2012"
			}]
			*/
			var tabmodel_cols=obj.tabmodel_cols;
			var tabmodel_rows=obj.tabmodel_rows;
			var tabmodel_filter=obj.tabmodel_filter;
		
			//var values_cols=obj.values_cols.split(",");
			//var values_rows=obj.values_rows.split(",");
			//var values_conds=obj.values_conds.split(",");
			//alert(res.length)
			//if(res.length>1){
				//*************循环开始*******************
				/*
				for(var i=0;i<res.length;i++){
					var newid="";
					var p=document.createElement("p");
					var gridvalue="";
					
					if(tabmodel_cols=="0"&&tabmodel_rows=="1"){//时间-院系
						newid=res[i].syear+"_"+res[i].department;
						
						gridvalue=res[i].zb+"：<span style='text-decoration:underline;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="0"&&tabmodel_rows=="2"){//时间-指标
						newid=res[i].syear+"_"+res[i].zb;
						
						gridvalue=res[i].department+"：<span style='text-decoration:underline;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="1"&&tabmodel_rows=="0"){//院系-时间
						newid=res[i].department+"_"+res[i].syear;
						
						gridvalue=res[i].zb+"：<span style='text-decoration:underline;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="1"&&tabmodel_rows=="2"){//院系-指标
						newid=res[i].department+"_"+res[i].zb;
						
						gridvalue=res[i].syear+"年：<span style='text-decoration:underline;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="2"&&tabmodel_rows=="0"){//指标-时间
						newid=res[i].zb+"_"+res[i].syear;
						
						gridvalue=res[i].department+"：<span style='text-decoration:underline;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="2"&&tabmodel_rows=="1"){//指标-院系
						newid=res[i].zb+"_"+res[i].department;
						
						gridvalue=res[i].syear+"年：<span style='text-decoration:underline;'>"+res[i].zhi+"</span>";
					}
					
					p.innerHTML=gridvalue;
					$1(newid).appendChild(p);		
				}*/
				//*************循环结束*******************
			//}else{
				//*************循环开始*******************
				
				for(var i=0;i<res.length;i++){
					var newid="";
					var p=document.createElement("p");
					var gridvalue="";
					
					if(tabmodel_cols=="0"&&tabmodel_rows=="1"){//时间-院系
						newid=res[i].syear+"_"+res[i].department;
						
						gridvalue="<span style='text-decoration:;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="0"&&tabmodel_rows=="2"){//时间-指标
						newid=res[i].syear+"_"+res[i].zb;
						
						gridvalue="<span style='text-decoration:;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="1"&&tabmodel_rows=="0"){//院系-时间
						newid=res[i].department+"_"+res[i].syear;
						
						gridvalue="<span style='text-decoration:;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="1"&&tabmodel_rows=="2"){//院系-指标
						newid=res[i].department+"_"+res[i].zb;
						
						gridvalue="<span style='text-decoration:;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="2"&&tabmodel_rows=="0"){//指标-时间
						newid=res[i].zb+"_"+res[i].syear;
						
						gridvalue="<span style='text-decoration:;'>"+res[i].zhi+"</span>";
					}else if(tabmodel_cols=="2"&&tabmodel_rows=="1"){//指标-院系
						newid=res[i].zb+"_"+res[i].department;
						
						gridvalue="<span style='text-decoration:;'>"+res[i].zhi+"</span>";
					}
					
					p.innerHTML=gridvalue;
					$1(newid).appendChild(p);
				}
				//*************循环结束*******************
			//}	
		}else if(ach=="2"){//切换图形处获取值使用
			/*
			[{
				"zbid": "66199501",
				"id": "1",
				"zb": "普通本科生数",
				"zhi": "15688.0",
				"department": "化工学院",
				"profession": "ZYMC",
				"syear": "2012"
			}]
			*/
			
			var tabmodel_cols=obj.tabmodel_cols;
			var tabmodel_rows=obj.tabmodel_rows;
			var tabmodel_filter=obj.tabmodel_filter;
			
			var xxx=new Array();
			var vvv=new Array();
			for(var i=0;i<res.length;i++){
				var newid=res[i].syear+"<br/>"+res[i].department+"<br/>"+res[i].zb;
				xxx.push(newid);
				vvv.push(parseFloat(res[i].zhi) );
			}
			showsqureimg(obj.getAttribute("id"),xxx,vvv);
			
		}else if(ach=="3"){//切换图形处获取值使用--折线图
			/*
			[{
				"zbid": "66199501",
				"id": "1",
				"zb": "普通本科生数",
				"zhi": "15688.0",
				"department": "化工学院",
				"profession": "ZYMC",
				"syear": "2012"
			}]
			*/
			
			var tabmodel_cols=obj.tabmodel_cols;
			var tabmodel_rows=obj.tabmodel_rows;
			var tabmodel_filter=obj.tabmodel_filter;
			
			var xxx=new Array();
			var vvv=new Array();
			for(var i=0;i<res.length;i++){
				var newid=res[i].syear+"<br/>"+res[i].department+"<br/>"+res[i].zb;
				xxx.push(newid);
				vvv.push(parseFloat(res[i].zhi) );
			}
			showlineimg(obj.getAttribute("id"),xxx,vvv);
			
		}else if(ach=="4"){//切换图形处获取值使用--饼图
			/*
			[{
				"zbid": "66199501",
				"id": "1",
				"zb": "普通本科生数",
				"zhi": "15688.0",
				"department": "化工学院",
				"profession": "ZYMC",
				"syear": "2012"
			}]
			*/
			
			var tabmodel_cols=obj.tabmodel_cols;
			var tabmodel_rows=obj.tabmodel_rows;
			var tabmodel_filter=obj.tabmodel_filter;
			
			var xxx=new Array();
			var vvv=new Array();
			for(var i=0;i<res.length;i++){
				var newid=res[i].syear+"<br/>"+res[i].department+"<br/>"+res[i].zb;
				xxx.push(newid);
				vvv.push(parseFloat(res[i].zhi) );
			}
			showpieimg(obj.getAttribute("id"),xxx,vvv);
			
		}
	}else{
		if(ach=="2"){
			alert("没有指标值，无法生成图形");
		}else if(ach=="3"){
			alert("没有指标值，无法生成图形");
		}else if(ach=="4"){
			alert("没有指标值，无法生成图形");
		}
	}
}

//====================数据报表模板管理结束==========================

//====================组织结构检索开始=============================
//组织结构检索
function queryorganization(ach,values){
	var d=new Date();
	var tp=getRTP()[7][5];
	var pms="GLTP="+tp+"&time="+d.getTime();
	new AJAXPOST(pms,tp,ach,values);
}

//组织结构检索结果处理
function queryorganization_result_pro(txt,ach,values){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"){//列维度-添加
			/*
			[
			{"id":"320","level":"1","description":"","oename":"","name":"华东理工大学","parent":"0","code":"00"},
			{"id":"544","level":"1","description":"","oename":"","name":"aaa","parent":"0","code":"aa"}
			]
			*/
			
			var zNodesStr ="[";
			for(var i=0;i<res.length;i++){
				
				zNodesStr+='{ id:'+res[i].id+', pId:'+res[i].parent+', name:"'+res[i].name+'", open:false},';

			}			
			zNodesStr+="];";		
			zNodesStr=zNodesStr.substring(0,zNodesStr.length-1);
			
			var zNodes=eval('('+zNodesStr+')');
			//$1("dimenclosdiv").innerHTML=shtml;				
			
			$.fn.zTree.init($("#treeDemo001"), setting, zNodes);
			//setCheck();
			$("#py").bind("change", setCheck);
			$("#sy").bind("change", setCheck);
			$("#pn").bind("change", setCheck);
			$("#sn").bind("change", setCheck);
			
			
			//$1("dimenclosdivvalue");
		}else if(ach=="2"){//行维度-添加
			/*
			[
			{"id":"320","level":"1","description":"","oename":"","name":"华东理工大学","parent":"0","code":"00"},
			{"id":"544","level":"1","description":"","oename":"","name":"aaa","parent":"0","code":"aa"}
			]
			*/
			
			var zNodesStr ="[";
			for(var i=0;i<res.length;i++){
				
				zNodesStr+='{ id:'+res[i].id+', pId:'+res[i].parent+', name:"'+res[i].name+'", open:false},';

			}			
			zNodesStr+="];";		
			zNodesStr=zNodesStr.substring(0,zNodesStr.length-1);
			
			var zNodes=eval('('+zNodesStr+')');
			//$1("dimenclosdiv").innerHTML=shtml;
			
			$.fn.zTree.init($("#treeDemo002"), setting, zNodes);
			//setCheck();
			$("#py").bind("change", setCheck);
			$("#sy").bind("change", setCheck);
			$("#pn").bind("change", setCheck);
			$("#sn").bind("change", setCheck);
			
			
			//$1("dimenclosdivvalue");
		}else if(ach=="3"){//筛选条件-添加
			/*
			[
			{"id":"320","level":"1","description":"","oename":"","name":"华东理工大学","parent":"0","code":"00"},
			{"id":"544","level":"1","description":"","oename":"","name":"aaa","parent":"0","code":"aa"}
			]
			*/
			
			var zNodesStr ="[";
			for(var i=0;i<res.length;i++){
				
				zNodesStr+='{ id:'+res[i].id+', pId:'+res[i].parent+', name:"'+res[i].name+'", open:false},';

			}			
			zNodesStr+="];";		
			zNodesStr=zNodesStr.substring(0,zNodesStr.length-1);
			
			var zNodes=eval('('+zNodesStr+')');
			//$1("dimenclosdiv").innerHTML=shtml;
			
			$.fn.zTree.init($("#treeDemo003"), setting, zNodes);
			//setCheck();
			$("#py").bind("change", setCheck);
			$("#sy").bind("change", setCheck);
			$("#pn").bind("change", setCheck);
			$("#sn").bind("change", setCheck);
			
			
			//$1("dimenclosdivvalue");
		}else if(ach=="4"){//列维度-编辑
			/*
			[
			{"id":"320","level":"1","description":"","oename":"","name":"华东理工大学","parent":"0","code":"00"},
			{"id":"544","level":"1","description":"","oename":"","name":"aaa","parent":"0","code":"aa"}
			]
			*/
			
			/*
			values:
			//lrows:{0:"35至50岁教师数",1:"50岁以上教师数",2:"本科教学日常运行支出总额(万元)",3:"本科生生均地方拨款总额(万元)",4:"教师总数(折合教师数)",5:"外聘教师数",6:"指导毕业设计外聘教师数",7:"指导毕业设计专任教师数"}
			
			lcos:{0:"生物工程学院",1:"资源与环境工程学院",2:"信息科学与工程学院",3:"机械与动力工程学院",4:"材料工程学院",5:"化学与分子工程学院",6:"化工学院"}
			
			//lcons:{0:"2014",1:"2010"}
			*/
			var mv=new Map();
			if(values!=null){
				var lcos=values.split(",");
				for(var j=0;j<lcos.length;j++){
					mv.put(lcos[j],lcos[j]);
				}
			}
			
			
			//**************填充组织结构选中列表开始**************
			var dimenclostab=$1("dimenclostab001");
			if(dimenclostab==null){
				dimenclostab=document.createElement("table");
				dimenclostab.id="dimenclostab001";
				dimenclostab.style.width="100%";
				dimenclostab.cellPadding="0px";
				dimenclostab.cellSpacing="0px";
			}
			//**************填充组织结构选中列表结束**************
			
			var zNodesStr ="[";
			for(var i=0;i<res.length;i++){
				
				var checkflag=false;
				if(mv.containsKey(res[i].name)){
					checkflag=true;
				}
				zNodesStr+='{ id:'+res[i].id+', pId:'+res[i].parent+', name:"'+res[i].name+'", open:false,checked:'+checkflag+'},';
					
				//************************************
				if(mv.containsKey(res[i].name)){
					var rowobj=dimenclostab.insertRow(dimenclostab.rows.length-1);
					rowobj.id="dimenclostab001"+res[i].id;
				
					var ibk="#FFF";
					if((dimenclostab.rows.length-1)%2==1){
						ibk="#F7F7F7";
					}
					rowobj.style.backgroundColor=ibk;	
					var cell1=rowobj.insertCell(rowobj.cells.length);
					var cell2=rowobj.insertCell(rowobj.cells.length);
				
					cell1.style.height="40px";
					cell1.align="center";
					cell1.style.borderBottom="#DADADA 1px solid";
					//cell1.style.borderRight="#DADADA 1px solid";
					
					cell2.style.height="40px";
					cell2.align="center";
					cell2.style.borderBottom="#DADADA 1px solid";
		
					cell1.innerHTML=res[i].name;
					cell2.innerHTML="<a href='#' onclick='moveUp(this);return false;'>上移</a>  <a href='#' onclick='moveDown(this);return false;'>下移</a>";
					
					if($1("dimenclostab001")==null){
						$1("dimenclosdivvalue").appendChild(dimenclostab);
					}
				}
				//************************************	
			}			
			zNodesStr+="];";		
			zNodesStr=zNodesStr.substring(0,zNodesStr.length-1);
			
			var zNodes=eval('('+zNodesStr+')');
			//$1("dimenclosdiv").innerHTML=shtml;				
			
			$.fn.zTree.init($("#treeDemo001"), setting, zNodes);
			//setCheck();
			$("#py").bind("change", setCheck);
			$("#sy").bind("change", setCheck);
			$("#pn").bind("change", setCheck);
			$("#sn").bind("change", setCheck);
			
		}else if(ach=="5"){//行维度-编辑
			/*
			[
			{"id":"320","level":"1","description":"","oename":"","name":"华东理工大学","parent":"0","code":"00"},
			{"id":"544","level":"1","description":"","oename":"","name":"aaa","parent":"0","code":"aa"}
			]
			*/
			var mv=new Map();
			if(values!=null){
				var lcos=values.split(",");
				for(var j=0;j<lcos.length;j++){
					mv.put(lcos[j],lcos[j]);
				}
			}
			//containsKey
			
			//**************填充组织结构选中列表开始**************
			var dimenclostab=$1("dimenclostab002");
			if(dimenclostab==null){
				dimenclostab=document.createElement("table");
				dimenclostab.id="dimenclostab002";
				dimenclostab.style.width="100%";
				dimenclostab.cellPadding="0px";
				dimenclostab.cellSpacing="0px";
			}
			//**************填充组织结构选中列表结束**************
			
			var zNodesStr ="[";
			for(var i=0;i<res.length;i++){
				
				var checkflag=false;
				if(mv.containsKey(res[i].name)){
					checkflag=true;
				}
				zNodesStr+='{ id:'+res[i].id+', pId:'+res[i].parent+', name:"'+res[i].name+'", open:false,checked:'+checkflag+'},';
				//************************************
				if(mv.containsKey(res[i].name)){
					var rowobj=dimenclostab.insertRow(dimenclostab.rows.length-1);
					rowobj.id="dimenclostab002"+res[i].id;
					
					var ibk="#FFF";
					if((dimenclostab.rows.length-1)%2==1){
						ibk="#F7F7F7";
					}
					rowobj.style.backgroundColor=ibk;	
					var cell1=rowobj.insertCell(rowobj.cells.length);
					var cell2=rowobj.insertCell(rowobj.cells.length);
				
					cell1.style.height="40px";
					cell1.align="center";
					cell1.style.borderBottom="#DADADA 1px solid";
					//cell1.style.borderRight="#DADADA 1px solid";
					
					cell2.style.height="40px";
					cell2.align="center";
					cell2.style.borderBottom="#DADADA 1px solid";
		
					cell1.innerHTML=res[i].name;
					cell2.innerHTML="<a href='#' onclick='moveUp(this);return false;'>上移</a>  <a href='#' onclick='moveDown(this);return false;'>下移</a>";
					
					if($1("dimenclostab002")==null){
						$1("dimenrowsdivvalue").appendChild(dimenclostab);
					}
				}
				//************************************	
			}			
			zNodesStr+="];";		
			zNodesStr=zNodesStr.substring(0,zNodesStr.length-1);
			
			var zNodes=eval('('+zNodesStr+')');
			//$1("dimenclosdiv").innerHTML=shtml;
			
			$.fn.zTree.init($("#treeDemo002"), setting, zNodes);
			//setCheck();
			$("#py").bind("change", setCheck);
			$("#sy").bind("change", setCheck);
			$("#pn").bind("change", setCheck);
			$("#sn").bind("change", setCheck);
			
			
			//$1("dimenclosdivvalue");
		}else if(ach=="6"){//筛选条件-编辑
			/*
			[
			{"id":"320","level":"1","description":"","oename":"","name":"华东理工大学","parent":"0","code":"00"},
			{"id":"544","level":"1","description":"","oename":"","name":"aaa","parent":"0","code":"aa"}
			]
			*/
			
			var mv=new Map();
			if(values!=null){
				var lcos=values.split(",");
				for(var j=0;j<lcos.length;j++){
					mv.put(lcos[j],lcos[j]);
				}
			}
			//containsKey
			
			//**************填充组织结构选中列表开始**************
			var dimenclostab=$1("dimenclostab003");
			if(dimenclostab==null){
				dimenclostab=document.createElement("table");
				dimenclostab.id="dimenclostab003";
				dimenclostab.style.width="100%";
				dimenclostab.cellPadding="0px";
				dimenclostab.cellSpacing="0px";
			}
			//**************填充组织结构选中列表结束**************
			
			var zNodesStr ="[";
			for(var i=0;i<res.length;i++){
				
				var checkflag=false;
				if(mv.containsKey(res[i].name)){
					checkflag=true;
				}
				zNodesStr+='{ id:'+res[i].id+', pId:'+res[i].parent+', name:"'+res[i].name+'", open:false,checked:'+checkflag+'},';
				//*************************************************
				if(mv.containsKey(res[i].name)){
					var rowobj=dimenclostab.insertRow(dimenclostab.rows.length-1);
					rowobj.id="dimenclostab003"+res[i].id;
					
					var ibk="#FFF";
					if((dimenclostab.rows.length-1)%2==1){
						ibk="#F7F7F7";
					}
					rowobj.style.backgroundColor=ibk;	
					var cell1=rowobj.insertCell(rowobj.cells.length);
					var cell2=rowobj.insertCell(rowobj.cells.length);
				
					cell1.style.height="40px";
					cell1.align="center";
					cell1.style.borderBottom="#DADADA 1px solid";
					//cell1.style.borderRight="#DADADA 1px solid";
					
					cell2.style.height="40px";
					cell2.align="center";
					cell2.style.borderBottom="#DADADA 1px solid";
		
					cell1.innerHTML=res[i].name;
					cell2.innerHTML="<a href='#' onclick='moveUp(this);return false;'>上移</a>  <a href='#' onclick='moveDown(this);return false;'>下移</a>";
					
					if($1("dimenclostab003")==null){
						$1("dimenconditiondivvalue").appendChild(dimenclostab);
					}
				}
				//*************************************************
			}		
			zNodesStr+="];";		
			zNodesStr=zNodesStr.substring(0,zNodesStr.length-1);
			
			var zNodes=eval('('+zNodesStr+')');
			//$1("dimenclosdiv").innerHTML=shtml;
			
			$.fn.zTree.init($("#treeDemo003"), setting, zNodes);
			//setCheck();
			$("#py").bind("change", setCheck);
			$("#sy").bind("change", setCheck);
			$("#pn").bind("change", setCheck);
			$("#sn").bind("change", setCheck);
			
			
			//$1("dimenclosdivvalue");
		}
	}else{
		//$1("imdetailddiv").innerHTML="<table style='height:100%;width:100%;font-size:20px;'><tr><td align='center'>上海教委数据导入查询没有结果:"+txt+"</td></tr></table>";
		
	}
}
//====================组织结构检索结束=============================


//====================数据报表编制管理结束==========================

//数据报表编制添加
function adddatatab(){
	
	//数据报表名称
	var reportname=$1("reportnameinput").value;
	if(reportname==null||reportname.length<1){
		alert("请输入数据报表名称");
		return;
	}
	
	var dtcid=getselectionvalue("dtcategoryselect");
	if(dtcid==null||dtcid.length<1){
		alert("请选择数据报表类型");
		return;
	}
	//数据报表级别
	var reportlevelselect=$1("reportlevelselect");
	var reportlevel=reportlevelselect.options[reportlevelselect.selectedIndex].value;

	if(reportlevel==null||reportlevel.length<1){
		alert("请选择数据报表级别");
		return;
	}
	
	//年份
	var zyearselect=$1("zyearselect");
	var reportzyear=zyearselect.options[zyearselect.selectedIndex].value;
	if(reportzyear==null||reportzyear.length<1){
		alert("请选择数据报表年份");
		return;
	}
	
	//数据报表包含数据模板
	var pms_tmid="";
	var nn=0;
	var checklist = document.getElementsByName ("selected");
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked ){
			pms_tmid+="&tmid="+checklist[i].value;
			
			nn++;
		}
	} 
 	
	var d=new Date();
	var tp=getRTP()[8][0];
	var pms="GLTP="+tp+"&reportname="+b64(reportname)+"&reportlevel="+reportlevel+"&report_zyear="+reportzyear+"&report_status=0&report_tabs="+nn+"&dtcid="+dtcid+"&time="+d.getTime();
	
	if(pms_tmid!=null&&pms_tmid.length>0){
		pms+=pms_tmid;
	}
	new AJAXPOST(pms,tp,"1");
}

//数据报表编制添加结果处理
function adddatatab_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021401"){
		querydatatabedit(dteditmodel);
	}else{
		alert("数据报表编制添加失败！");
		return;
	}
}


//数据报表编制编辑
function editdatatab(obj){
	
	//数据报表名称
	var reportname=$1("reportnameinput").value;
	if(reportname==null||reportname.length<1){
		alert("请输入数据报表名称");
		return;
	}
	
	var dtcid=getselectionvalue("dtcategoryselect");
	if(dtcid==null||dtcid.length<1){
		alert("请选择数据报表类型");
		return;
	}
	
	//数据报表级别
	var reportlevelselect=$1("reportlevelselect");
	var reportlevel=reportlevelselect.options[reportlevelselect.selectedIndex].value;

	if(reportlevel==null||reportlevel.length<1){
		alert("请选择数据报表级别");
		return;
	}
	
	//年份
	var zyearselect=$1("zyearselect");
	var reportzyear=zyearselect.options[zyearselect.selectedIndex].value;
	if(reportzyear==null||reportzyear.length<1){
		alert("请选择数据报表年份");
		return;
	}
	
	//数据报表包含数据模板
	var pms_tmid="";
	var nn=0;
	var checklist = document.getElementsByName ("selected");
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked ){
			pms_tmid+="&tmid="+checklist[i].value;
			
			nn++;
		}
	} 
	
	var d=new Date();
	var tp=getRTP()[8][1];
	var pms="GLTP="+tp+"&rtid="+obj.getAttribute("value")+"&reportname="+b64(reportname)+"&reportlevel="+reportlevel+"&report_zyear="+reportzyear+"&report_status=0&report_tabs=0&dtcid="+dtcid+"&time="+d.getTime();
	
	if(pms_tmid!=null&&pms_tmid.length>0){
		pms+=pms_tmid;
	}
	new AJAXPOST(pms,tp,"1");
}

//数据报表编制编辑结果处理
function editdatatab_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021411"){
		querydatatabedit(dteditmodel);
	}else{
		alert("数据报表编制编辑失败！");
		return;
	}
}


//数据报表编制检索
var dteditcp=1;
var dteditmodel="";
function querydatatabedit(ach){
	dteditmodel=ach;
	
	var d=new Date();
	var tp=getRTP()[8][3];
	var pms="GLTP="+tp+"&cp="+dteditcp+"&pns=10&time="+d.getTime();
	
	
	if(ach=="4"||ach=="5"||ach=="6"){//数据报表条件检索
		//数据报表类型
		var dtcategory=getselectionvalue("dtcategoryselect");
		
		//数据报表级别
		var reportlevelselect=$1("reportlevelselect");
		var reportlevel=reportlevelselect.options[reportlevelselect.selectedIndex].value;
		
		//年份
		var zyearselect=$1("zyearselect");
		var zyear=zyearselect.options[zyearselect.selectedIndex].value;
		
		//状态
		var reportstatusselect=$1("reportstatusselect");
		var reportstatus=reportstatusselect.options[reportstatusselect.selectedIndex].value;
		
		//数据报表名称
		var dtname=$1("dtnameinput").value;
		/*
		if( 
			(dtcategory==null||dtcategory.length<1)&&
			(reportlevel==null||reportlevel.length<1)&&
			(zyear==null||zyear.length<1)&&
			(reportstatus==null||reportstatus.length<1)&&
			(dtname==null||dtname.length<1)
		  ){
			alert("报表模板类型和名称不能同时为空");
			return;
		}*/
		
		if( dtcategory!=null&&dtcategory.length>0&&dtcategory!="all"){
			pms+="&dtcid="+dtcategory;
		}
		if( reportlevel!=null&&reportlevel.length>0&&reportlevel!="all"){
			pms+="&reportlevel="+reportlevel;
		}
		if( zyear!=null&&zyear.length>0&&zyear!="all"){
			pms+="&zyear="+zyear;
		}
		if( reportstatus!=null&&reportstatus.length>0&&reportstatus!="all"){
			pms+="&reportstatus="+reportstatus;
		}
		if( dtname!=null&&dtname.length>0){
			pms+="&reportname="+b64(dtname);
		}
	}
	
	new AJAXPOST(pms,tp,ach);
}

//数据报表编制检索结果处理
function querydatatabedit_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"||ach=="4"){//数据报表编制检索处使用
			/*
			[{"report_zyear":"2013","report_status":"0","reportlevel":"0","report_tabs":"20","rtid":"2","totalnums":1,"ctime":"2014-09-21 17:12:24.8630000","reportname":"xxx"}]
			*/
			
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'><input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/></td>";
						shtml+="<td style='width:160px;height:40px;' align='center'>数据报表名称</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>数据报表类型</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>级别</td>";
						shtml+="<td style='width:80px;height:40px;' align='center'>年份</td>";
						shtml+="<td style='width:80px;height:40px;' align='center'>状态</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>数据报表数</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>最后修改时间</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						var rtid=res[i].rtid;
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='checkbox' name='selected' value='"+rtid+"'></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><span style='display:inline-block;text-align:left;160px;'><a href='#' onclick='showdataxlsdetail(this);return false;' value='"+res[i].rtid+"'>"+res[i].reportname+"</a></span></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].type_name+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdatatablevel(res[i].reportlevel)+"</td>";
							shtml+="<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+res[i].report_zyear+"年</td>";
							shtml+="<td style='width:80px;border-top:#DADADA 1px solid;' align='center'>"+getdatatabstatus(res[i].report_status)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].report_tabs+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].ctime.substring(0,10)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
								shtml+="<a href='#' onclick='showeditnewdataxls(this);return false;' value='"+json2str(res[i])+"'><img src='images/bj_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>编辑</span></a>";
								shtml+="&nbsp;&nbsp;<a href='#' onclick='deletedatatabedit(this);return false;' value='"+rtid+"'><img src='images/sc_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>删除</span></a>";
							shtml+="</td>";
						shtml+="</tr>";
					}
					
					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+dteditcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									
									shtml+="<img value='4_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="2"||ach=="5"){//数据报表条件查询处使用
			/*
			[{"report_zyear":"2013","report_status":"0","reportlevel":"0","report_tabs":"20","rtid":"2","totalnums":1,"ctime":"2014-09-21 17:12:24.8630000","reportname":"xxx"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'>全选</td>";
						shtml+="<td style='width:160px;height:40px;' align='center'>数据报表名称</td>";
						shtml+="<td style='width:160px;height:40px;' align='center'>数据报表类型</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>级别</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>年份</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>状态</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>数据报表数</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>最后修改时间</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						var rtid=res[i].rtid;
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'>"+(i+1)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><span style='display:inline-block;text-align:left;160px;'><a href='#' onclick='showdataxlsdetail(this);return false;' value='"+res[i].rtid+"'>"+res[i].reportname+"</a></span></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].type_name+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdatatablevel(res[i].reportlevel)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].report_zyear+"年</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdatatabstatus(res[i].report_status)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].report_tabs+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].ctime.substring(0,10)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a  href='#' onclick='showdatatabdetailpreview(this);return false;' value='"+res[i].rtid+"'><img src='images/ck_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>查看</span></a></td>";
						shtml+="</tr>";
					}
					
					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+dteditcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									
									shtml+="<img value='4_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="3"||ach=="6"){//质量报告模板添加-插入数据表处使用
			/*
			[{"report_zyear":"2013","report_status":"0","reportlevel":"0","report_tabs":"20","rtid":"2","totalnums":1,"ctime":"2014-09-21 17:12:24.8630000","reportname":"xxx"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						//shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'><input onclick='selectAll()' type='checkbox' name='controlAll' style='controlAll' id='controlAll' style='display:inline-block;height:40px;line-height:40px;vertical-align:middle;'/></td>";
						shtml+="<td style='width:;height:30px;' align='center'>报表名称</td>";
						shtml+="<td style='width:;height:30px;' align='center'>报表类型</td>";
						shtml+="<td style='width:;height:30px;' align='center'>级别</td>";
						shtml+="<td style='width:;height:30px;' align='center'>年份</td>";
						shtml+="<td style='width:;height:30px;' align='center'>报表数</td>";
						shtml+="<td style='width:;height:30px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						var rtid=res[i].rtid;
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;height:30px;' align='center'><span style='display:inline-block;text-align:left;width:;'>"+res[i].reportname+"</span></td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;' align='center'>"+res[i].type_name+"</td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;' align='center'>"+getdatatablevel(res[i].reportlevel)+"</td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;' align='center'>"+res[i].report_zyear+"年</td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;' align='center'>"+res[i].report_tabs+"</td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;' align='center'>";
								shtml+="<a href='#' onclick='showdatatabdetailpreview_add(this);return false;' value='"+res[i].rtid+"' style='display:inline-block;margin-right:10px;'>预览</a>";
								//shtml+="<a href='#' onclick='insertcontentdatatodiv(this);return false;'>插入</a>";
							shtml+="</td>";
							
						shtml+="</tr>";
					}
					
					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+dteditcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									
									shtml+="<img value='4_0' onclick='pagefinddatatabmedit(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("zbcontainerdiv").innerHTML=shtml;
		}
	}else{
		$1("recorddiv").innerHTML="";
	}
}


//数据报表详情检索
function querydatatabdetail(ach,rtid){
	var d=new Date();
	var tp=getRTP()[8][6];
	var pms="GLTP="+tp+"&rtid="+rtid+"&time="+d.getTime();
	new AJAXPOST(pms,tp,ach);
}

//数据报表详情检索结果处理
function querydatatabdetail_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"){
			/*
			[
    {
        "report_zyear": "2014",
        "report_status": "0",
        "reportlevel": "1",
        "report_tabs": "2",
        "rtid": "18",
        "totalnums": 1,
        "lbd_m": [
            {
                "tabmodel_property": "0",
                "lrows": [
                    "本科教学日常运行支出总额(万元)",
                    "当年新增电子图书数"
                ],
                "tabmodel_filter": "1",
                "ctime": "2014-10-23 13:25:48.8800000",
                "tabmodel_cols": "0",
                "tabmodel_rows": "2",
                "lcos": [
                    "石油加工系",
                    "产品工程系",
                    "化学工程系"
                ],
                "dtcid": "1",
                "tabmodel_name": "本科生数比例模板",
                "tmid": "19",
                "type_name": "质量报表",
                "totalnums": 0,
                "lcons": [
                    "2014"
                ]
            },
            {
                "tabmodel_property": "0",
                "lrows": [
                    "2014",
                    "2013",
                    "2012",
                    "2011",
                    "2010",
                    "2009",
                    "2008",
                    "2007",
                    "2006",
                    "2005",
                    "2004",
                    "2003"
                ],
                "tabmodel_filter": "2",
                "ctime": "2014-10-23 17:07:21.9670000",
                "tabmodel_cols": "0",
                "tabmodel_rows": "1",
                "lcos": [
                    "生物工程学院",
                    "化学与分子工程学院",
                    "材料工程学院",
                    "机械与动力工程学院",
                    "信息科学与工程学院",
                    "资源与环境工程学院",
                    "理学院",
                    "商学院",
                    "社会与公共管理学院",
                    "人文科学研究院",
                    "艺术设计与传媒学院",
                    "外国语学院",
                    "体育科学与工程学院",
                    "药学院",
                    "化工学院"
                ],
                "dtcid": "1",
                "tabmodel_name": "专任教师数",
                "tmid": "20",
                "type_name": "质量报表",
                "totalnums": 0,
                "lcons": [
                    "本科教学日常运行支出总额(万元)",
                    "当年新增电子图书数"
                ]
            }
        ],
        "ctime": "2014-10-23 19:39:58.3100000",
        "reportname": "2014年管理学院质量报告"
    }
]
			*/
			
			var dthtml="";
			dthtml+="<span style='display:inline-block;padding-left:10px;'>数据报表名称：【"+res[0].reportname+"】</span>";
			dthtml+="<span style='display:inline-block;padding-left:10px;'>级别：【"+getdatatablevel(res[0].reportlevel)+"】</span>";
			dthtml+="<span style='display:inline-block;padding-left:10px;'>年份：【"+res[0].report_zyear+"】</span>";
			$1("datatabinfo").innerHTML=dthtml;
			
			//
			var newres=res[0].lbd_m;
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						
						shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;'  align='center'>";
							shtml+="序号";
						shtml+="</td>";
						
						shtml+="<td style='width:100px;height:40px;' align='center'>数据报表类型</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>数据报表名称</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>属性</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>列维度</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>行维度</td>";
						shtml+="<td style='width:140px;height:40px;' align='center'>筛选条件</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>创建时间</td>";
						//shtml+="<td style='width:100px;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<newres.length;i++){
						var tmid=newres[i].tmid;
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						//处理生产==================================
						var x="";
						
						
						//行维度
						var lrowsstr=newres[i].lrows.join(""); 
						if(lrowsstr!=null&&lrowsstr.length>0){
							x+=newres[i].lrows+"___";
						}else{
							x+="null___";
						}
						//alert(x);
						
						//列维度
						var lcosStr=newres[i].lcos.join(""); 
						if(lcosStr!=null&&lcosStr.length>0){
							x+=newres[i].lcos+"___";
						}else{
							x+="null___";
						}
						
						//筛选条件
						var lconsStr=newres[i].lcons.join(""); 
						if(lconsStr!=null&&lconsStr.length>0){
							x+=newres[i].lcons+"___";
						}else{
							x+="null___";
						}
						
						
						if(newres[i].tabmodel_name!=null){//idx:4 
							x+=newres[i].tabmodel_name+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].dtcid!=null){//idx:5
							x+=newres[i].dtcid+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].type_name!=null){//idx:6
							x+=newres[i].type_name+"___";
						}else{
							x+="null___";
						}
			
						if(newres[i].tabmodel_property!=null){//idx:7
							x+=newres[i].tabmodel_property+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tabmodel_cols!=null){//idx:8
							x+=newres[i].tabmodel_cols+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tabmodel_rows!=null){//idx:9
							x+=newres[i].tabmodel_rows+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tabmodel_filter!=null){//idx:10
							x+=newres[i].tabmodel_filter+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tmid!=null){//idx:11
							x+=newres[i].tmid+"___";
						}else{
							x+="null___";
						}
						
						//处理生产==================================
						
						//var tttt=json2str(res[i]);
						//alert(res[i].lcos);
						//alert(tttt);
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'>"+(i+1)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+newres[i].type_name+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='showtabmodel(this);return false;' value='"+x+"'>"+newres[i].tabmodel_name+"</a></td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getproperty(newres[i].tabmodel_property)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(newres[i].tabmodel_cols)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(newres[i].tabmodel_rows)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+getdtdimen(newres[i].tabmodel_filter)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+newres[i].ctime.substring(0,10)+"</td>";
							/*
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'><a href='#' onclick='showeditnewdataxlsmodel(this);return false;' value='"+json2str(res[i])+"'>编辑</a> <a href='#' onclick='deletedatatabmodel(this);return false;' value='"+tmid+"'>删除</a></td>";
						*/
						shtml+="</tr>";
					}
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="2"){//数据报表详情预览
			/*
			[{
        "report_zyear": "2014",
        "report_status": "0",
        "reportlevel": "1",
        "report_tabs": "2",
        "rtid": "18",
        "totalnums": 1,
        "lbd_m": [
            {
                "tabmodel_property": "0",
                "lrows": [
                    "本科教学日常运行支出总额(万元)",
                    "当年新增电子图书数"
                ],
                "tabmodel_filter": "1",
                "ctime": "2014-10-23 13:25:48.8800000",
                "tabmodel_cols": "0",
                "tabmodel_rows": "2",
                "lcos": [
                    "石油加工系",
                    "产品工程系",
                    "化学工程系"
                ],
                "dtcid": "1",
                "tabmodel_name": "本科生数比例模板",
                "tmid": "19",
                "type_name": "质量报表",
                "totalnums": 0,
                "lcons": [
                    "2014"
                ]
            },
            {
                "tabmodel_property": "0",
                "lrows": [
                    "2014",
                    "2013",
                    "2012",
                    "2011",
                    "2010",
                    "2009",
                    "2008",
                    "2007",
                    "2006",
                    "2005",
                    "2004",
                    "2003"
                ],
                "tabmodel_filter": "2",
                "ctime": "2014-10-23 17:07:21.9670000",
                "tabmodel_cols": "0",
                "tabmodel_rows": "1",
                "lcos": [
                    "生物工程学院",
                    "化学与分子工程学院",
                    "材料工程学院",
                    "机械与动力工程学院",
                    "信息科学与工程学院",
                    "资源与环境工程学院",
                    "理学院",
                    "商学院",
                    "社会与公共管理学院",
                    "人文科学研究院",
                    "艺术设计与传媒学院",
                    "外国语学院",
                    "体育科学与工程学院",
                    "药学院",
                    "化工学院"
                ],
                "dtcid": "1",
                "tabmodel_name": "专任教师数",
                "tmid": "20",
                "type_name": "质量报表",
                "totalnums": 0,
                "lcons": [
                    "本科教学日常运行支出总额(万元)",
                    "当年新增电子图书数"
                ]
            }
        ],
        "ctime": "2014-10-23 19:39:58.3100000",
        "reportname": "2014年管理学院质量报告"
    }
]
			*/
			var dthtml="";
			dthtml+="<table cellpadding='0' cellspacing='0' style='width:100%;'>";
				dthtml+="<tr>";
					dthtml+="<td>";
						dthtml+="<span style='display:inline-block;padding-left:20px;'>数据报表名称：【"+res[0].reportname+"】</span>";
						dthtml+="<span style='display:inline-block;padding-left:10px;'>级别：【"+getdatatablevel(res[0].reportlevel)+"】</span>";
						dthtml+="<span style='display:inline-block;padding-left:10px;'>年份：【"+res[0].report_zyear+"】</span>";
					dthtml+="</td>";
					
					dthtml+="<td align='right' style='padding-right:20px;'>";
						/*
						dthtml+="<a href='#' onclick='viewdataimagedetail(this);return false;' value='"+txt+"' style='display:inline-block;margin-left:10px;font-size:12px;margin-right:10px;height:24px;line-height:24px;background-color:#F7F7F7;border:#DADADA 1px solid;text-align:center;width:80px;text-decoration:none;vertical-align:middle;'>切换图形</a>";
						*/
						dthtml+="<a href='#' onclick='outputdatatab();return false;'><img src='images/btn_002.png' style='vertical-align:middle;margin-left:15px;' border='0'></a>";
					dthtml+="</td>";
				dthtml+="</tr>";
			dthtml+="</table>";
	
			$1("datatabinfo").innerHTML=dthtml;
			
			//
			var newres=res[0].lbd_m;
			var shtml="";
			shtml+='<form id="outputform" class="outputform" name="outputform" method="post" action="download/download_datatab.jsp" enctype="application/x-www-form-urlencoded">';
			shtml+="<table style='font-size:12px;width:100%;' cellpadding='0' cellspacing='0'>";
				shtml+="<input type='text' value='fdsafds' id='datatableinfoinput' name='datatableinfoinput'   class='datatableinfoinput' style='color:#F00;display:none;'>";
					
					for(var i=0;i<newres.length;i++){
						var tmid=newres[i].tmid;
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						//处理生产==================================
						var x="";
						
						
						//行维度
						var lrowsstr=newres[i].lrows.join(""); 
						if(lrowsstr!=null&&lrowsstr.length>0){
							x+=newres[i].lrows+"___";
						}else{
							x+="null___";
						}
						//alert(x);
						
						//列维度
						var lcosStr=newres[i].lcos.join(""); 
						if(lcosStr!=null&&lcosStr.length>0){
							x+=newres[i].lcos+"___";
						}else{
							x+="null___";
						}
						
						//筛选条件
						var lconsStr=newres[i].lcons.join(""); 
						if(lconsStr!=null&&lconsStr.length>0){
							x+=newres[i].lcons+"___";
						}else{
							x+="null___";
						}
						
						
						if(newres[i].tabmodel_name!=null){//idx:4 
							x+=newres[i].tabmodel_name+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].dtcid!=null){//idx:5
							x+=newres[i].dtcid+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].type_name!=null){//idx:6
							x+=newres[i].type_name+"___";
						}else{
							x+="null___";
						}
			
						if(newres[i].tabmodel_property!=null){//idx:7
							x+=newres[i].tabmodel_property+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tabmodel_cols!=null){//idx:8
							x+=newres[i].tabmodel_cols+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tabmodel_rows!=null){//idx:9
							x+=newres[i].tabmodel_rows+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tabmodel_filter!=null){//idx:10
							x+=newres[i].tabmodel_filter+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tmid!=null){//idx:11
							x+=newres[i].tmid+"___";
						}else{
							x+="null___";
						}
						//处理生产==================================
			

						shtml+="<tr style='background-color:#FFFFFF;'>";
							shtml+="<td style='' align='center'>";
								shtml+="<div style='width:"+(w-320)+"px;background-color:#F7F7F7;color:#333333;border:#DADADA 1px solid;border-bottom:0px;padding-left:10px;padding-right:10px;margin-top:10px;' align='left'>";
									shtml+="<table style='width:100%;' cellpadding=0' cellspacing='0'>";
										shtml+="<tr>";
											shtml+="<td>";
												shtml+="<span style='display:inline-block;padding-left:10px;padding-right:10px;height:32px;line-height:32px;font-weight:bold;'>【数据报表模板："+newres[i].tabmodel_name+"】</span>";
											shtml+="</td>";
											
											shtml+="<td align='right'>";
												shtml+="<a href='#' onclick='viewdataimagedetailforevery(this);return false;' value='"+x+"' style='display:inline-block;margin-left:10px;font-size:12px;margin-right:10px;height:24px;line-height:24px;background-color:#FFFFFF;border:#DADADA 1px solid;text-align:center;width:80px;text-decoration:none;vertical-align:middle;'>切换图形</a>";
												shtml+="<select style='margin-left:15px;width:120px;height:26px;line-height:26px;border:#DADADA 1px solid;display:none;vertical-align:middle;' id='tuliselect' onchange='cgtl(this);' value='"+x+"'>";
													shtml+="<option value='0'>柱形图</option>";
													shtml+="<option value='1'>折线图</option>";
													shtml+="<option value='2'>饼图</option>";
												shtml+="</select>";
							
											shtml+="</td>";
										shtml+="</tr>";
									shtml+="</table>";
								shtml+="</div>";
								
								//**********************开始********************
								var dividstr=new Date().getTime();
								shtml+="<div style='width:"+(w-320)+"px;overflow-x:auto;overflow-y:auto;padding-left:10px;padding-right:10px;padding-bottom:10px;border:#DADADA 1px solid;position:;' id='qrid"+i+dividstr+"'>";
									shtml+=gettablemodelcontent(x);
								shtml+="</div>";	
								//**********************开始********************
							shtml+="</td>";
							
							
						shtml+="</tr>";
					}
					
				shtml+="</table>";
				shtml+='</form>';
			$1("recorddiv").innerHTML=shtml;
			
			
		}else if(ach=="3"){//数据报表详情预览---质量报告模板添加处使用
			/*
			[
    {
        "report_zyear": "2014",
        "report_status": "0",
        "reportlevel": "1",
        "report_tabs": "2",
        "rtid": "18",
        "totalnums": 1,
        "lbd_m": [
            {
                "tabmodel_property": "0",
                "lrows": [
                    "本科教学日常运行支出总额(万元)",
                    "当年新增电子图书数"
                ],
                "tabmodel_filter": "1",
                "ctime": "2014-10-23 13:25:48.8800000",
                "tabmodel_cols": "0",
                "tabmodel_rows": "2",
                "lcos": [
                    "石油加工系",
                    "产品工程系",
                    "化学工程系"
                ],
                "dtcid": "1",
                "tabmodel_name": "本科生数比例模板",
                "tmid": "19",
                "type_name": "质量报表",
                "totalnums": 0,
                "lcons": [
                    "2014"
                ]
            },
            {
                "tabmodel_property": "0",
                "lrows": [
                    "2014",
                    "2013",
                    "2012",
                    "2011",
                    "2010",
                    "2009",
                    "2008",
                    "2007",
                    "2006",
                    "2005",
                    "2004",
                    "2003"
                ],
                "tabmodel_filter": "2",
                "ctime": "2014-10-23 17:07:21.9670000",
                "tabmodel_cols": "0",
                "tabmodel_rows": "1",
                "lcos": [
                    "生物工程学院",
                    "化学与分子工程学院",
                    "材料工程学院",
                    "机械与动力工程学院",
                    "信息科学与工程学院",
                    "资源与环境工程学院",
                    "理学院",
                    "商学院",
                    "社会与公共管理学院",
                    "人文科学研究院",
                    "艺术设计与传媒学院",
                    "外国语学院",
                    "体育科学与工程学院",
                    "药学院",
                    "化工学院"
                ],
                "dtcid": "1",
                "tabmodel_name": "专任教师数",
                "tmid": "20",
                "type_name": "质量报表",
                "totalnums": 0,
                "lcons": [
                    "本科教学日常运行支出总额(万元)",
                    "当年新增电子图书数"
                ]
            }
        ],
        "ctime": "2014-10-23 19:39:58.3100000",
        "reportname": "2014年管理学院质量报告"
    }
]
			*/
			
			var dthtml="<table cellpadding='0' cellspacing='0' style='width:100%;height:24px;border-bottom:#DADADA 1px dotted;'>";
				dthtml+="<tr>";
					dthtml+="<td>";
						dthtml+="<span style='display:inline-block;padding-left:20px;'>【"+res[0].reportname+"】</span>";
						dthtml+="<span style='display:inline-block;padding-left:10px;'>级别：【"+getdatatablevel(res[0].reportlevel)+"】</span>";
						dthtml+="<span style='display:inline-block;padding-left:10px;'>年份：【"+res[0].report_zyear+"】</span>";
					dthtml+="</td>";
					
					
					//dthtml+="<td align='right' style='padding-right:20px;'>";
						//dthtml+="<a href='#' onclick='viewdataimagedetail(this);return false;' value='"+txt+"' style='display:inline-block;margin-left:10px;font-size:12px;margin-right:10px;'>切换表格</a>";
						//dthtml+="<a href='#' onclick=''><img src='images/btn_002.png' style='border:0px;vertical-align:middle;'></a>";
					//dthtml+="</td>";
				
				dthtml+="</tr>";
			dthtml+="</table>";
			
			$1("datatabinfo").innerHTML=dthtml;
			
			//
			var newres=res[0].lbd_m;
			var shtml="";
			shtml+="<table style='font-size:12px;width:100%;' cellpadding='0' cellspacing='0'>";
					
					for(var i=0;i<newres.length;i++){
						var tmid=newres[i].tmid;
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						//处理生产==================================
						var x="";
						
						
						//行维度
						var lrowsstr=newres[i].lrows.join(""); 
						if(lrowsstr!=null&&lrowsstr.length>0){
							x+=newres[i].lrows+"___";
						}else{
							x+="null___";
						}
						//alert(x);
						
						//列维度
						var lcosStr=newres[i].lcos.join(""); 
						if(lcosStr!=null&&lcosStr.length>0){
							x+=newres[i].lcos+"___";
						}else{
							x+="null___";
						}
						
						//筛选条件
						var lconsStr=newres[i].lcons.join(""); 
						if(lconsStr!=null&&lconsStr.length>0){
							x+=newres[i].lcons+"___";
						}else{
							x+="null___";
						}
						
						
						if(newres[i].tabmodel_name!=null){//idx:4 
							x+=newres[i].tabmodel_name+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].dtcid!=null){//idx:5
							x+=newres[i].dtcid+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].type_name!=null){//idx:6
							x+=newres[i].type_name+"___";
						}else{
							x+="null___";
						}
			
						if(newres[i].tabmodel_property!=null){//idx:7
							x+=newres[i].tabmodel_property+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tabmodel_cols!=null){//idx:8
							x+=newres[i].tabmodel_cols+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tabmodel_rows!=null){//idx:9
							x+=newres[i].tabmodel_rows+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tabmodel_filter!=null){//idx:10
							x+=newres[i].tabmodel_filter+"___";
						}else{
							x+="null___";
						}
						
						if(newres[i].tmid!=null){//idx:11
							x+=newres[i].tmid+"___";
						}else{
							x+="null___";
						}
						
						//处理生产==================================
			

						shtml+="<tr style='background-color:#FFFFFF;'>";
							shtml+="<td style='width:40px;padding:10px;' align='center'>";
								shtml+="<div style='width:"+((w-260)/2)+"px;overflow-x:auto;overflow-y:auto;padding:10px;position:relative;'>"
									shtml+=gettablemodelcontent(x);
									
									shtml+="<div style='position:absolute;left:0px;top:0px;width:100%;background-color:#F7F7F7;border:#DADADA 1px solid;' align='left'>";
										shtml+="<a href='#' style='display:inline-block;width:80px;height:24px;line-height:24px;text-align:center;background-color:#FF9900;text-decoration:none;color:#FFFFFF;margin-left:5px;' onclick='insertcontentdatatodiv(this);return false;'>插入</a><span style='display:inline-block;padding-left:10px;padding-right:10px;height:32px;line-height:32px;background-color:#F7F7F7;color:#333333;'>【数据报表模板："+newres[i].tabmodel_name+"】</span>";
									shtml+="</div>";
								shtml+="</div>";
							shtml+="</td>";
							
							
						shtml+="</tr>";
					}
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="4"){//数据报表编辑处使用

			var tmid_arrys=new Array();
			var newres=res[0].lbd_m;
			for(var i=0;i<newres.length;i++){
				tmid_arrys.push(newres[i].tmid);
			}
			//alert(tmid_arrys);
			
			//数据报表模板检索
			dtmcp=1;
			dtmpcpmodel="";
			querydatatabmodel("4",tmid_arrys);
		}
	}else{
		//$1("imdetailddiv").innerHTML="<table style='height:100%;width:100%;font-size:20px;'><tr><td align='center'>上海教委数据导入查询没有结果:"+txt+"</td></tr></table>";
		
	}
}

//分页查询数据报表编制
function pagefinddatatabmedit(obj){
	var p=obj.getAttribute("value").split("_");

	if(p[0]=="1"){//首页
	    dteditcp="1";
		
		querydatatabedit(dteditmodel);
	}else if(p[0]=="2"){//上一页
		if(dteditcp=="1"){
			showalert("当前页已经是第一页了");
			return;
		}else{
			dteditcp=parseInt(dteditcp)-1;
		}
		querydatatabedit(dteditmodel);
	}else if(p[0]=="3"){//下一页
		/*
		if(zjjltjcp==p[1]){
			showalert("已经是最后一页了!");
			return;
		}
		*/
		dteditcp=parseInt(dteditcp)+1;
		
 		querydatatabedit(dteditmodel);
	}else if(p[0]=="4"){//下一页
		var pnos=$1("pagenotext").value;
		if(pnos.length<1){
			showalert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			showalert("输入非页码数字");
			return;
		}else{/*
			if(pnums>parseInt(p[1])){
				showalert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
			*/
				dteditcp=pnos;
				querydatatabedit(dteditmodel);
			//}
		}
	}
}

//数据报表编制删除
function deletedatatabedit(obj){
	if(!confirm('是否确认删除该数据报表?')){
	   return;
	}
	var d=new Date();
	var tp=getRTP()[8][2];
	var pms="GLTP="+tp+"&rtid="+obj.getAttribute("value")+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1");
}
//数据报表批量删除
function deleteAlldatatabedit(){
	if(!confirm('是否确认删除该数据报表?')){
	   return;
	}
	var checklist = document.getElementsByName ("selected");
  	var tppms="";
	for(var i=0;i<checklist.length;i++){
		if(checklist[i].checked ){
			tppms+="&rtid="+checklist[i].value;
		}
	} 
	if(tppms==null||tppms.length<1){
		alert("未选中任何数据报表！");
		return false;
	}
 
	var d=new Date();
	var tp=getRTP()[8][2];
	var pms="GLTP="+tp+"&time="+d.getTime();
	
	if(tppms!=null&&tppms.length>0){
		pms+=tppms;
	}
	new AJAXPOST(pms,tp,"2");
}
//数据报表编制删除结果处理
function deletedatatabedit_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021431"){
		querydatatabedit(dteditmodel);
	}else{
		alert("数据报表删除失败！");
		return;
	}
}

//====================数据报表编制管理结束==========================


//====================质量报告模板管理开始==========================

//质量报告模板添加
function addqrmodel(){
	
	//质量报告模板名称
	var qrmodelname=$1("qrmodelnametxt").value;
	if(qrmodelname==null||qrmodelname.length<1){
		alert("请输入质量报告模板名称");
		return;
	}
	var qrtpid=getselectionvalue("qrtpnameselect");
	if(qrtpid==null||qrtpid.length<1){
		alert("请选择模板类型");
		return;
	}
	//所属报告分类
	var dtcategoryselect=$1("dtcategoryselect");
	var dtcategory=dtcategoryselect.options[dtcategoryselect.selectedIndex].value;

	if(dtcategory==null||dtcategory.length<1){
		alert("请选择所属报告分类");
		return;
	}
	
	var qrmmodelcontent=window.frames['newscontentframe'].GetContents();
	if(qrmmodelcontent==null||qrmmodelcontent.length<1){
		alert("请编写模板内容");
		return;
	}
	
	var d=new Date();
	var tp=getRTP()[9][0];
	var pms="GLTP="+tp+"&qrmname="+b64(qrmodelname)+"&qrmcategoryid="+dtcategory+"&qrmmodelcontent="+b64(qrmmodelcontent)+"&qrtpid="+qrtpid+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1");
}

//质量报告模板添加结果处理
function addqrmodel_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021601"){
		alert("质量报告模板添加成功！");
		return;
	}else if(res.statusInfo=="GEO021606"){
		alert("质量报告模板已经存在，请勿重复添加！");
		return;
	}else{
		alert("质量报告模板添加失败！");
		return;
	}
}

//质量报告模板编辑
function editqrmodel(obj){
	
	//质量报告模板名称
	var qrmodelname=$1("qrmodelnametxt").value;
	if(qrmodelname==null||qrmodelname.length<1){
		alert("请输入质量报告模板名称");
		return;
	}
	var qrtpid=getselectionvalue("qrtpnameselect");
	if(qrtpid==null||qrtpid.length<1){
		alert("请选择模板类型");
		return;
	}
	
	//所属报告分类
	var dtcategoryselect=$1("dtcategoryselect");
	var dtcategory=dtcategoryselect.options[dtcategoryselect.selectedIndex].value;

	if(dtcategory==null||dtcategory.length<1){
		alert("请选择所属报告分类");
		return;
	}
	
	var qrmodelcontent=window.frames["newscontentframe"].GetContents();
	if(qrmodelcontent==null||qrmodelcontent.length<1){
		alert("请填写质量报告模板内容");
		return;
	}
	
	var d=new Date();
	var tp=getRTP()[9][1];
	var pms="GLTP="+tp+"&qrmid="+obj.getAttribute("value")+"&qrmname="+b64(qrmodelname)+"&qrmcategoryid="+dtcategory+"&qrmmodelcontent="+b64(qrmodelcontent)+"&qrtpid="+qrtpid+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1");
}

//质量报告模板编辑结果处理
function editqrmodel_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021611"){
		alert("质量报告模板编辑成功！");
		return;
	}else if(res.statusInfo=="GEO021606"){
		alert("质量报告模板已经存在，请勿重复添加！");
		return;
	}else{
		alert("质量报告模板编辑失败！");
		return;
	}
}

//质量报告模板检索
var qrmcp=1;
var qrmmodel="";
function queryqrmodel(ach){
	qrmmodel=ach;
	var d=new Date();
	var tp=getRTP()[9][3];
	var pms="GLTP="+tp+"&cp="+qrmcp+"&pns=10&time="+d.getTime();
	
	
	if(ach=="3"){//质量报告名称及分类检索
		//数据报表类型
		var dtcategoryselect=$1("dtcategoryselect");
		var dtcategory=dtcategoryselect.options[dtcategoryselect.selectedIndex].value;
		
		var qrtpid=getselectionvalue("qrtpnameselect");
		if(qrtpid!=null&&qrtpid.length>0&&qrtpid!="all"){
			pms+="&qrtpid="+qrtpid;
		}
	
		var qrmodelname=$1("qrmodelnameinput").value;
		if( (qrmodelname==null||qrmodelname.length<1)&&
			(dtcategory==null||dtcategory.length<1)
		  ){
			alert("报表模板类型和名称不能同时为空");
			return;
		}
		
		if( qrmodelname!=null&&qrmodelname.length>0){
			pms+="&qrmname="+b64(qrmodelname);
		}
		if( dtcategory!=null&&dtcategory.length>0&&dtcategory!="all"){
			pms+="&qrmcategoryid="+dtcategory;
		}
	}else if(ach=="4"){//质量报告名称及分类检索	
		var qrtpid=getselectionvalue("qrtpnameselect");
		if(qrtpid!=null&&qrtpid.length>0&&qrtpid!="all"){
			pms+="&qrtpid="+qrtpid;
		}
	}
	new AJAXPOST(pms,tp,ach);
}

//质量报告模板检索结果处理
function queryqrmodel_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"||ach=="3"){
			/*
			[{qrmmodelcontent:"","qrmid":"7","qrmname":"上海本科教学成绩","qrmcategoryname":"年度报表","qrmcategoryid":"2","totalnums":2,"ctime":"2014-10-07 07:57:52.8200000"},{"qrmid":"6","qrmname":"fdasfsadf","qrmcategoryname":"教委报表","qrmcategoryid":"3","totalnums":2,"ctime":"2014-10-07 07:57:18.4130000"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:100px;height:40px;'  align='center'>模板分类</td>";
						shtml+="<td style='width:100px;height:40px;'  align='center'>模板名称</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>所属报告</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>修改时间</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						var qrmid=res[i].qrmid;
						var xxxx=res[i].qrmid+"____"+res[i].qrmname+"____"+res[i].qrmcategoryid+"____"+res[i].qrmmodelcontent+"____"+res[i].qrtpid+"____"+res[i].qrtpname;
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qrtpname+"</td>";
							shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qrmname+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qrmcategoryname+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].ctime.substring(0,10)+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
								shtml+="<a href='#' onclick='showeditqrreporthtml(this);return false;' value='"+xxxx+"'><img src='images/bj_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>编辑</span></a>";
								shtml+="&nbsp;&nbsp;<a href='#' onclick='deleteqrmodel(this);return false;' value='"+qrmid+"'><img src='images/sc_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>删除</span></a>";
							shtml+="</td>";
						shtml+="</tr>";
					}
					
					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefindqreportmodel(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefindqreportmodel(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";
									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+qrmcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefindqreportmodel(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									
									shtml+="<img value='4_0' onclick='pagefindqreportmodel(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="2"||ach=="4"){//质量报告编制处使用--选择质量报告模板
			
			/*
			[{"qrmid":"7","qrmname":"上海本科教学成绩","qrmcategoryname":"年度报表","qrmcategoryid":"2","totalnums":2,"ctime":"2014-10-07 07:57:52.8200000"},{"qrmid":"6","qrmname":"fdasfsadf","qrmcategoryname":"教委报表","qrmcategoryid":"3","totalnums":2,"ctime":"2014-10-07 07:57:18.4130000"}]
			*/
			var shtml="";
			shtml+="<select id='qrmodelselect' style='display:inline-block;width:;height:24px;line-height:24px;border:#DADADA 1px solid;' onchange='getvalueforset(this);'>";
			shtml+="<option value='00'>请选择报告模板</option>";
			for(var i=0;i<res.length;i++){
				shtml+="<option value='"+res[i].qrmmodelcontent+"'>"+res[i].qrmname+"</option>";
			}			
			shtml+="</select>";		
				
			$1("modelselectspan").innerHTML=shtml;
		}
	}else{
		$1("recorddiv").innerHTML="没有结果";		
	}
}

//选择模板
function getvalueforset(){
	var qrmodelselect=$1("qrmodelselect");
	var mdcontent=qrmodelselect.options[qrmodelselect.selectedIndex].value;
	if(mdcontent=="00") return;
	window.frames["newscontentframe"].InsertHTML(mdcontent) ;
	
}

//分页查询质量报告模板
function pagefindqreportmodel(obj){
	var p=obj.getAttribute("value").split("_");

	if(p[0]=="1"){//首页
	    qrmcp="1";
		
		queryqrmodel(qrmmodel);
	}else if(p[0]=="2"){//上一页
		if(qrmcp=="1"){
			showalert("当前页已经是第一页了");
			return;
		}else{
			qrmcp=parseInt(qrmcp)-1;
		}
		queryqrmodel(qrmmodel);
	}else if(p[0]=="3"){//下一页
		/*
		if(zjjltjcp==p[1]){
			showalert("已经是最后一页了!");
			return;
		}
		*/
		qrmcp=parseInt(qrmcp)+1;
		
 		queryqrmodel(qrmmodel);
	}else if(p[0]=="4"){//下一页
		var pnos=$1("pagenotext").value;
		if(pnos.length<1){
			showalert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			showalert("输入非页码数字");
			return;
		}else{/*
			if(pnums>parseInt(p[1])){
				showalert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
			*/
				qrmcp=pnos;
				queryqrmodel(qrmmodel);
			//}
		}
	}
}

//质量报告模板删除
function deleteqrmodel(obj){
	if(!confirm('是否确认删除该质量报告模板?')){
	   return;
	}
	var d=new Date();
	var tp=getRTP()[9][2];
	var pms="GLTP="+tp+"&qrmid="+obj.getAttribute("value")+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1");
}

//质量报告模板删除结果处理
function deleteqrmodel_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021621"){
		queryqrmodel(qrmmodel);
	}else{
		alert("质量报告模板删除失败！");
		return;
	}
}
//====================质量报告模板管理结束==========================


//====================质量报告查询管理开始==========================
//质量报告添加
function addqreport(){
	
	//保存当前选中目录内容设置
	savemlucontentformulu();
	
	var qrname=$1("qrnameinput").value;
	var qryear=$1("qryearinput").value;
	
	if(qrname==null||qrname.length<1){
		alert("请填写质量报告名称");
		return;
	}
	
	if(qryear==null||qryear.length<1){
		alert("请填写质量报告年份");
		return;
	}
	
	//====================获取目录节点开始====================
	/*
	String mluid[]=request.getParameterValues("mluid");     				//目录ID
	String pmluid[]=request.getParameterValues("pmluid");     				//父目录ID
	String mluname[]=request.getParameterValues("mluname");     			//目录名称
	String mlucontent[]=request.getParameterValues("mlucontent");     		//目录内容
			*/

		var tmppms="";
		var zTree =window.frames["mluframe"].$.fn.zTree.getZTreeObj("treeDemo");
		//alert(zTree.transformToArray(zTree.getNodes()).length)
		var nodes = zTree.transformToArray(zTree.getNodes());
		//alert(nodes.length);
		for ( var i = 0, l = nodes.length; i < l; i++) {
			var n = nodes[i];
			/*
			n.title = "[" + n.id + "] isFirstNode = " + n.isFirstNode
					+ ", isLastNode = " + n.isLastNode;	
			zTree.updateNode(n);
			*/
			//alert(n.ctxkey);
			var nt=n.title;
			if(nt===null||nt.length<1){
				nt="<h1>"+n.name+"</h1>";
			}
			var npid=n.pId;
			if(npid==null||npid.length<1||npid=="null"){
				npid="0";
			}
			
			tmppms+="&mluid="+n.id+"&pmluid="+npid+"&mluname="+b64(n.name)+"&mlucontent="+b64(nt);
		}
	//====================获取目录节点结束====================
	
	//数据报表类型ID
	var dtcategoryselect=$1("dtcategoryselect");
	var dtcategory=dtcategoryselect.options[dtcategoryselect.selectedIndex].value;
	if(dtcategory==null||dtcategory.length<1){
		alert("请选择数据报表类型");
		return;
	}
	if(dtcategory==null||dtcategory.length<1){
		alert("请选择所属报告分类");
		return;
	}
	var qrcontent="null";//window.frames["newscontentframe"].GetContents() ;
	if(qrcontent==null||qrcontent.length<1){
		alert("请填写质量报告内容");
		return;
	}
	var d=new Date();
	var tp=getRTP()[10][0];
	var pms="GLTP="+tp+"&qrname="+b64(qrname)+"&qryear="+qryear+"&qrmcategoryid="+dtcategory+"&qrcontent="+b64(qrcontent)+"&time="+d.getTime();
	
	if(tmppms!=null&&tmppms.length>0){
		pms+=tmppms;
	}
	new AJAXPOST(pms,tp,"1");
}

//质量报告添加结果处理
function addqreport_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021801"){
		alert("质量报告添加成功！");
		return;
	}else{
		alert("质量报告添加失败！");
		return;
	}
}

//质量报告编辑
function editqreport(obj){
	
	//保存当前选中目录内容设置
	savemlucontentformulu();
	
	var qrname=$1("qrnameinput").value;
	var qryear=$1("qryearinput").value;
	
	if(qrname==null||qrname.length<1){
		alert("请填写质量报告名称");
		return;
	}
	
	if(qryear==null||qryear.length<1){
		alert("请填写质量报告年份");
		return;
	}
	
	//====================获取目录节点开始====================
	/*
	String mluid[]=request.getParameterValues("mluid");     				//目录ID
	String pmluid[]=request.getParameterValues("pmluid");     				//父目录ID
	String mluname[]=request.getParameterValues("mluname");     			//目录名称
	String mlucontent[]=request.getParameterValues("mlucontent");     		//目录内容
			*/

		var tmppms="";
		var zTree =window.frames["mluframe"].$.fn.zTree.getZTreeObj("treeDemo");
		//alert(zTree.transformToArray(zTree.getNodes()).length)
		var nodes = zTree.transformToArray(zTree.getNodes());
		//alert(nodes.length);
		for ( var i = 0, l = nodes.length; i < l; i++) {
			var n = nodes[i];
			/*
			n.title = "[" + n.id + "] isFirstNode = " + n.isFirstNode
					+ ", isLastNode = " + n.isLastNode;	
			zTree.updateNode(n);
			*/
			//alert(n.ctxkey);
			var nt=n.title;
			if(nt===null||nt.length<1){
				nt="<h1>"+n.name+"</h1>";
			}
			var npid=n.pId;
			if(npid==null||npid.length<1||npid=="null"){
				npid="0";
			}
			
			tmppms+="&mluid="+n.id+"&pmluid="+npid+"&mluname="+b64(n.name)+"&mlucontent="+b64(nt);
		}
	//====================获取目录节点结束====================
	
	//数据报表类型ID
	var dtcategoryselect=$1("dtcategoryselect");
	var dtcategory=dtcategoryselect.options[dtcategoryselect.selectedIndex].value;
	if(dtcategory==null||dtcategory.length<1){
		alert("请选择数据报表类型");
		return;
	}
	if(dtcategory==null||dtcategory.length<1){
		alert("请选择所属报告分类");
		return;
	}
	var qrcontent="null";//window.frames["newscontentframe"].GetContents() ;
	if(qrcontent==null||qrcontent.length<1){
		alert("请填写质量报告内容");
		return;
	}
	
	var d=new Date();
	var tp=getRTP()[10][1];
	var pms="GLTP="+tp+"&qrid="+obj.getAttribute("value")+"&qrname="+b64(qrname)+"&qryear="+qryear+"&qrmcategoryid="+dtcategory+"&qrcontent="+b64(qrcontent)+"&time="+d.getTime();
	
	if(tmppms!=null&&tmppms.length>0){
		pms+=tmppms;
	}
	
	new AJAXPOST(pms,tp,"1");
}

//质量报告编辑结果处理
function editqreport_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021811"){
		alert("质量报告编辑成功！");
		return;
	}else{
		alert("质量报告编辑失败！");
		return;
	}
}


//质量报告检索
var qrcp=1;
var qrmodel="";
function queryqreport(ach){
	qrmodel=ach;
	
	var d=new Date();
	var tp=getRTP()[10][3];
	var pms="GLTP="+tp+"&cp="+qrcp+"&pns=10&time="+d.getTime();
	
	if(ach=="3"||ach=="4"){//3:编制检索条件检索  4：报告检索条件检索
		//数据报表类型
		var dtcategoryselect=$1("dtcategoryselect");
		var dtcategory=dtcategoryselect.options[dtcategoryselect.selectedIndex].value;
	
		var qrname=$1("qrnameinput").value;
		var qryear=$1("qryearinput").value;
		
		if( (qrname==null||qrname.length<1)&&
			(qryear==null||qryear.length<1)&&
			(dtcategory==null||dtcategory.length<1)
		  ){
			alert("报告类型和名称不能同时为空");
			return;
		}
		
		if( qrname!=null&&qrname.length>0){
			pms+="&qrname="+b64(qrname);
		}
		if( qryear!=null&&qryear.length>0){
			pms+="&qryear="+qryear;
		}
		if( dtcategory!=null&&dtcategory.length>0){
			pms+="&qrmcategoryid="+dtcategory;
		}
	}
	
	new AJAXPOST(pms,tp,ach);
}

//质量报告检索结果处理
function queryqreport_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"||ach=="4"){//1:报告检索  4：报告条件检索
			/*
		[{"qrcontent":"","qryear":"2013","qrname":"111","qrmcategoryname":"质量报表","qrmcategoryid":"1","totalnums":2,"ctime":"2014-09-24 22:57:57.9230000","qrid":"3"},{"qrcontent":"","qryear":"2014","qrname":"111","qrmcategoryname":"质量报表","qrmcategoryid":"1","totalnums":2,"ctime":"2014-09-24 22:57:55.0030000","qrid":"2"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:100px;height:40px;' align='center'>报告名1称</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>所属报告</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>报告年份</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						var xxx=res[i].qrid+"____"+res[i].qrname+"____"+res[i].qrmcategoryid+"____"+res[i].qryear+"____"+res[i].qrcontent;			   
						//setCookie("qreportkey"+res[i].qrid,res[i].qrcontent);
						
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qrname+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qrmcategoryname+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qryear+"年</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>";
							shtml+="<a href='#' style='display:inline-block;width:50px;' onclick='previewqreport(this);return false;' value='"+xxx+"'><img src='images/ck_icon.png' border='0px' title='质量报告详情查看' alt='质量报告详情查看' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>查看</span></a>";
							
								//shtml+="<a href='#' style='display:inline-block;width:30px;' onclick='previewqreport(this);return false;' value='"+xxx+"'>查看</a>";
								
								shtml+="<a href='download/download_qreport.jsp?qrid="+res[i].qrid+"' style='display:inline-block;width:50px;'><img src='images/dc_icon.png' border='0px' title='质量报告导出' alt='质量报告导出' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>导出</span></a>";
							shtml+="</td>";
						shtml+="</tr>";
					}
					
					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefindqreport(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefindqreport(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+qrcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefindqreport(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									shtml+="<img value='4_0' onclick='pagefindqreport(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="2"||ach=="3"){//2:默认查询  3:条件查询
			/*
		[{"qrcontent":"","qryear":"2013","qrname":"111","qrmcategoryname":"质量报表","qrmcategoryid":"1","totalnums":2,"ctime":"2014-09-24 22:57:57.9230000","qrid":"3"},{"qrcontent":"","qryear":"2014","qrname":"111","qrmcategoryname":"质量报表","qrmcategoryid":"1","totalnums":2,"ctime":"2014-09-24 22:57:55.0030000","qrid":"2"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:;height:40px;' align='center'>报告名称</td>";
						shtml+="<td style='width:;height:40px;' align='center'>所属报告</td>";
						shtml+="<td style='width:;height:40px;' align='center'>报告年份</td>";
						shtml+="<td style='width:;height:40px;' align='center'>操作</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						var qrid=res[i].qrid;
						var xxx=res[i].qrid+"____"+res[i].qrname+"____"+res[i].qrmcategoryid+"____"+res[i].qryear+"____"+res[i].qrcontent;
						shtml+="<tr style='background-color:"+itembk+";'>";
							shtml+="<td style='width:;height:40px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qrname+"</td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;' align='center'>"+res[i].qrmcategoryname+"</td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;' align='center'>"+res[i].qryear+"年</td>";
							shtml+="<td style='width:;border-top:#DADADA 1px solid;' align='center'>";
								shtml+="<a href='#' style='display:inline-block;' onclick='qrreportedithtml(this);return false;' value='"+xxx+"'><img src='images/bj_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>编辑</span></a>";
								shtml+="<a href='#' style='display:inline-block;' onclick='deleteqreport(this);return false;' value='"+qrid+"'><img src='images/sc_icon.png' border='0px' style='vertical-align:middle;'><span style='display:inline-block;width:30px;text-align:center;'>删除</span></a>";
							shtml+="</td>";
						shtml+="</tr>";
					}
					
					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefindqreport(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefindqreport(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+qrcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefindqreport(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									shtml+="<img value='4_0' onclick='pagefindqreport(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("recorddiv").innerHTML=shtml;
		}else if(ach=="5"){//质量报告检查处使用
			/*
		[{"qrcontent":"","qryear":"2013","qrname":"111","qrmcategoryname":"质量报表","qrmcategoryid":"1","totalnums":2,"ctime":"2014-09-24 22:57:57.9230000","qrid":"3"},{"qrcontent":"","qryear":"2014","qrname":"111","qrmcategoryname":"质量报表","qrmcategoryid":"1","totalnums":2,"ctime":"2014-09-24 22:57:55.0030000","qrid":"2"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					shtml+="<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
						shtml+="<td style='width:40px;height:40px;border-right:#DADADA 1px solid;' align='center'>选择报告</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>报告名称</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>所属报告</td>";
						shtml+="<td style='width:100px;height:40px;' align='center'>报告年份</td>";
					shtml+="</tr>";
					
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						//var qrid=res[i].qrid;
						//var xxx=res[i].qrid+"____"+res[i].qrname+"____"+res[i].qrmcategoryid+"____"+res[i].qryear+"____"+res[i].qrcontent;
						shtml+="<tr style='background-color:"+itembk+";'>";
						if(i==0){
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='radio'  name='checkqrradio' value='"+res[i].qrid+"_"+res[i].qrname+"' checked></td>";
						}else{
							shtml+="<td style='width:40px;height:40px;border-top:#DADADA 1px solid;border-right:#DADADA 1px solid;' align='center'><input type='radio'  name='checkqrradio' value='"+res[i].qrid+"_"+res[i].qrname+"'></td>";
						}
							shtml+="<td style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qrname+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qrmcategoryname+"</td>";
							shtml+="<td style='width:100px;border-top:#DADADA 1px solid;' align='center'>"+res[i].qryear+"年</td>";
						shtml+="</tr>";
					}
					
					//====================分页查询开始====================
					shtml+="<tr style='background-color:#FFF;color:#333333;'>";
						shtml+="<td style='width:100%;height:40px;border-top:#DADADA 1px solid;' colspan='9'>";
							shtml+="<table cellpadding='0' cellpadding='0' style='width:100%;'>";
								shtml+="<tr><td align='left'><span style='display:inline-block;margin-left:40px;'>&nbsp;</span></td>";
									shtml+="<td align='right'><span style='display:inline-block;margin-right:40px;'>";
									shtml+="<img value='1_0' onclick='pagefindqreport(this);return false' src='images/pgicon-first_press.png' style='vertical-align:middle;' onmouseover='this.src=&quot;images/pgicon-first.png&quot;;' onmouseout='this.src=&quot;images/pgicon-first_press.png&quot;;'>";
									shtml+="<img value='2_0' onclick='pagefindqreport(this);return false' src='images/pgicon-pre_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-pre.png&quot;;' onmouseout='this.src=&quot;images/pgicon-pre_press.png&quot;;'>";									
									shtml+="<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;vertical-align:middle;font-size:16px;'>"+qrcp+"/"+getAllPages(res[0].totalnums,10)+"页</span>";
									shtml+="<img value='3_0' onclick='pagefindqreport(this);return false' src='images/pgicon-next_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-next.png&quot;;' onmouseout='this.src=&quot;images/pgicon-next_press.png&quot;;'>";
									shtml+="<input type='text' id='pagenotext' style='width:30px;margin-left:5px;height:20px;line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;'>";
									shtml+="<img value='4_0' onclick='pagefindqreport(this);return false' src='images/pgicon-last_press.png' style='vertical-align:middle;margin-left:5px;' onmouseover='this.src=&quot;images/pgicon-last.png&quot;;' onmouseout='this.src=&quot;images/pgicon-last_press.png&quot;;'>";
									shtml+="</span>";
									shtml+="</td>";
								shtml+="</tr>";
							shtml+="</table>";
						shtml+="</td>";
					shtml+="</tr>";
		
					//====================分页查询结束====================
					
				shtml+="</table>";
			$1("qrdiv").innerHTML=shtml;
		}else if(ach=="6"){//质量报告-首页处使用
			/*
		   [{"qrcontent":"","qryear":"2013","qrname":"111","qrmcategoryname":"质量报表","qrmcategoryid":"1","totalnums":2,"ctime":"2014-09-24 22:57:57.9230000","qrid":"3"},{"qrcontent":"","qryear":"2014","qrname":"111","qrmcategoryname":"质量报表","qrmcategoryid":"1","totalnums":2,"ctime":"2014-09-24 22:57:55.0030000","qrid":"2"}]
			*/
			var shtml="";
			shtml+="<table style='font-size:12px;border:#DADADA 0px solid;width:100%;' cellpadding='0' cellspacing='0'>";
					for(var i=0;i<res.length;i++){
						var itembk="#F5F5F5";
						if(i%2==0){
							itembk="#FFF";
						}
						
						var xxx=res[i].qrid+"____"+res[i].qrname+"____"+res[i].qrmcategoryid+"____"+res[i].qryear+"____"+res[i].qrcontent;			   
						
						shtml+="<tr>";
							shtml+="<td style='height:30px;width:160px;border-bottom:#DADADA 1px dotted;padding-left:20px;' align='left'>";
								shtml+="<a href='#' style='display:inline-block;color:#333333;text-decoration:none;' onclick='previewqreport(this);return false;' value='"+xxx+"'>"+res[i].qrname+"</a>";
								
							shtml+="</td>";
						shtml+="</tr>";
						
					}
					
				shtml+="</table>";
			$1("shjwdatafinddiv").innerHTML=shtml;
		}
	}else{
		$1("recorddiv").innerHTML="";
	}
}

//分页查询质量报告
function pagefindqreport(obj){
	var p=obj.getAttribute("value").split("_");

	if(p[0]=="1"){//首页
	    qrcp="1";
		
		queryqreport(qrmodel);
	}else if(p[0]=="2"){//上一页
		if(qrcp=="1"){
			showalert("当前页已经是第一页了");
			return;
		}else{
			qrcp=parseInt(qrcp)-1;
		}
		queryqreport(qrmodel);
	}else if(p[0]=="3"){//下一页
		/*
		if(zjjltjcp==p[1]){
			showalert("已经是最后一页了!");
			return;
		}
		*/
		qrcp=parseInt(qrcp)+1;
		
 		queryqreport(qrmodel);
	}else if(p[0]=="4"){//下一页
		var pnos=$1("pagenotext").value;
		if(pnos.length<1){
			showalert("请输入您要跳转的页码!");
			return;
		}
		var pnums=parseInt(pnos);
		if(isNaN(pnums)){
			showalert("输入非页码数字");
			return;
		}else{/*
			if(pnums>parseInt(p[1])){
				showalert("记录只有"+p[1]+"页,你输入的页码"+pnums+"超出范围");
				return;
			}else{
			*/
				qrcp=pnos;
				queryqreport(qrmodel);
			//}
		}
	}
}

//质量报告删除
function deleteqreport(obj){
	if(!confirm('是否确认删除该质量报告?')){
	   return;
	}
	var d=new Date();
	var tp=getRTP()[10][2];
	var pms="GLTP="+tp+"&qrid="+obj.getAttribute("value")+"&time="+d.getTime();
	new AJAXPOST(pms,tp,"1");
}

//质量报告删除结果处理
function deleteqreport_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(res.statusInfo=="GEO021821"){
		queryqreport(qrmodel);
	}else{
		alert("质量报告删除失败！");
		return;
	}
}


//质量报告详情ID检索
function queryqreportdetailbyid(ach,qrid){
	var d=new Date();
	var tp=getRTP()[10][4];
	var pms="GLTP="+tp+"&qrid="+qrid+"&time="+d.getTime();
	new AJAXPOST(pms,tp,ach);
}

//质量报告详情ID检索结果处理
function queryqreportdetailbyid_result_pro(txt,ach){
	var res=eval('('+txt+')');
	if(typeof(res.statusInfo)=="undefined"){
		if(ach=="1"){
			/*
		[
    {
        "qrcontent": "<p>uuu</p>\n",
        "qryear": "2014",
        "lmulu": [
            {
                "mlname": "首页",
                "mladdtime": "2014-10-25 15:41:21.1400000",
                "pmid": "0",
                "mid": "2",
                "amlid": "7",
                "mlcontent": "xxxxxx001",
                "qrid": "13"
            },
            {
                "mlname": "学校办学特色",
                "mladdtime": "2014-10-25 15:41:21.1430000",
                "pmid": "2",
                "mid": "11",
                "amlid": "8",
                "mlcontent": "xxxxxx002",
                "qrid": "13"
            },
            {
                "mlname": "学校办学定位",
                "mladdtime": "2014-10-25 15:41:21.1470000",
                "pmid": "11",
                "mid": "31",
                "amlid": "9",
                "mlcontent": "xxxxxx003",
                "qrid": "13"
            },
            {
                "mlname": "学校教育理念",
                "mladdtime": "2014-10-25 15:41:21.1470000",
                "pmid": "11",
                "mid": "31",
                "amlid": "10",
                "mlcontent": "xxxxxx004",
                "qrid": "13"
            },
            {
                "mlname": "学校本科人才培养目标",
                "mladdtime": "2014-10-25 15:41:21.1470000",
                "pmid": "11",
                "mid": "31",
                "amlid": "11",
                "mlcontent": "xxxxxx005",
                "qrid": "13"
            },
            {
                "mlname": "学校招生规模与升学质量",
                "mladdtime": "2014-10-25 15:41:21.1470000",
                "pmid": "2",
                "mid": "12",
                "amlid": "12",
                "mlcontent": "xxxxxx006",
                "qrid": "13"
            }
        ],
        "qrname": "yyyy",
        "qrmcategoryname": "质量报表",
        "qrmcategoryid": "1",
        "totalnums": 0,
        "ctime": "2014-10-25 15:41:21.1330000",
        "qrid": "13"
    }
]
			*/
			var thtml="";
			thtml+="<table style='width:100%;border-bottom:red 2px solid;'>";
				thtml+="<tr>";
					thtml+="<td align='center'>";
						thtml+="<span style='font-size:48px;font-weight:bold;color:red;'>"+res[0].qrname+"</span>";
					thtml+="</td>";
				thtml+="</tr>";
				
				thtml+="<tr>";
					thtml+="<td align='center'>";
						thtml+="<span style='display:inline-block;font-size:14px;margin:10px 0px 20px 0px;'>创建时间："+res[0].ctime.substring(0,19)+"</span>";
					thtml+="</td>";
				thtml+="</tr>";
				
			thtml+="</table>";
			$1("wenjuanbasediv").innerHTML=thtml;

			
			var shtml="";
			shtml+="<div style='width:800px;overflow-x:hidden;'><table style='width:800px;background-color:#FFFFFF;' cellpadding='0' cellspacing='0'>";
			
			var mlarys=res[0].lmulu;
			
			for(var i=0;i<mlarys.length;i++){
				shtml+="<tr>";
					shtml+="<td align='left' id='maodian"+mlarys[i].mid+"' name='maodian"+mlarys[i].mid+"' style='border-top:#DADADA 1px dotted;'><h3>"+mlarys[i].mlname+"</h3><br/>"+mlarys[i].mlcontent+"</td>";
				shtml+="</tr>";
			}
		
			shtml+="</table></div>";
			$1("wenjuancontentdiv").innerHTML=shtml;
			
			
			var mulushtml="";
			mulushtml+="<table style='width:140px;background-color:#FFFFFF;padding-top:15px;' cellpadding='0' cellspacing='0'>";
			
			for(var i=0;i<mlarys.length;i++){
				mulushtml+="<tr>";
					mulushtml+="<td align='center' style='padding:5px;border-bottom:#F1F1F1 1px dotted;'><a href='#maodian"+mlarys[i].mid+"' style='display:inline-block;width:100px;height:;line-height:;color:#CCCCCC;text-decoration:none;text-align:left;'>"+mlarys[i].mlname+"</td>";
				mulushtml+="</tr>";
			}
		
			mulushtml+="</table>";
			//展示目录
			showmuluofqr(mulushtml,"mulushowdivid");
			
		}else if(ach=="2"){//质量报告编辑
			var xznn=[];
			 
			var mlarys=res[0].lmulu;
			
			for(var i=0;i<mlarys.length;i++){
				var xznn_child=new Array();
				xznn_child[0]="id:"+mlarys[i].mid;
				xznn_child[1]="pId:"+mlarys[i].pmid;
				xznn_child[2]="name:'"+mlarys[i].mlname+"'";
				//xznn_child[3]="title:"+mlarys[i].mlcontent;
				xznn_child[3]="title:''";
				xznn_child[4]="open:true";
				
				xznn.push({
					"id": mlarys[i].mid,
				 	"pId": mlarys[i].pmid, 
				 	"name": mlarys[i].mlname, 
				 	"title": mlarys[i].mlcontent,
				 	open:true 
					}); 

			}
			
			window.frames["mluframe"].setzNodes(xznn);
			window.frames["mluframe"].loadztree();
			
			/*
			var ztree=window.frames["mluframe"].$.fn.zTree.getZTreeObj("treeDemo");
			for(var i=0;i<mlarys.length;i++){
				ztree.getNodeByTId(mlarys[i].mid).title=mlarys[i].mlcontent;
			}
			*/
		}else if(ach=="3"){//质量报告检查

			var shtml="<table style='width:100%;' cellpadding='0' cellspacing='0'>";
			
			var mlarys=res[0].lmulu;
			var muluStr=""
			var mlcontentStr="";
			for(var i=0;i<mlarys.length;i++){
				muluStr+=mlarys[i].mlname+"___";
				mlcontentStr+=mlarys[i].mlcontent+"___";
			}
			
			
			
			if(checkdetail.length>0){
				var newres=eval('('+checkdetail+')');
				
				//++++++++++++++++++++++++++++++基本要求匹配开始+++++++++++++++++++++
				var res_br=newres[0].l_baserequire;
				for(var i=0;i<res_br.length;i++){
					var brid=res_br[i].brid;
					var baserequireStr=res_br[i].baserequire;
					if(muluStr.length>0){
						if(muluStr.indexOf(baserequireStr)!=-1){//包含
							$1("brid"+brid).innerHTML="<span style='color:#00CC00;'>包含</span>";
							
							shtml+="<tr>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>目录中</td>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>"+baserequireStr+"</td>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'><span style='display:inline-block;background-color:#009900;color:#FFF;height:18px;line-height:18px;width:18px;text-align:center;'>有</span></td>";
							shtml+="</tr>";
						}else{
							$1("brid"+brid).innerHTML="<span style='color:#FF9900;'>不包含</span>";
							shtml+="<tr>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>目录中</td>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>"+baserequireStr+"</td>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'><span style='display:inline-block;background-color:#FF9900;color:#FFF;height:18px;line-height:18px;width:18px;text-align:center;'>无</span></td>";
							shtml+="</tr>";
						}
					}else{
						$1("brid"+brid).innerHTML="<span style='color:#FF9900;'>不包含</span>";
						shtml+="<tr>";
							shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>目录中</td>";
							shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>"+baserequireStr+"</td>";
							shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'><span style='display:inline-block;background-color:#FF9900;color:#FFF;height:18px;line-height:18px;width:18px;text-align:center;'>无</span></td>";
						shtml+="</tr>";
					}
				}
				//++++++++++++++++++++++++++++++基本要求匹配结束+++++++++++++++++++++
				
				
				//++++++++++++++++++++++++++++++基本数据匹配开始+++++++++++++++++++++
				var res_bd=newres[0].l_basedata;
				for(var i=0;i<res_bd.length;i++){
					var bdid=res_bd[i].bdid;
					var basedataStr=res_bd[i].basedata;
					if(mlcontentStr.length>0){
						if(mlcontentStr.indexOf(basedataStr)!=-1){//包含
							$1("bdid"+bdid).innerHTML="<span style='color:#00CC00;'>包含</span>";
							shtml+="<tr>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>内容中</td>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>"+basedataStr+"</td>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'><span style='display:inline-block;background-color:#009900;color:#FFF;height:18px;line-height:18px;width:18px;text-align:center;'>有</span></td>";
							shtml+="</tr>";
						}else{
							$1("bdid"+bdid).innerHTML="<span style='color:#FF9900;'>不包含</span>";
							shtml+="<tr>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>内容中</td>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>"+basedataStr+"</td>";
								shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'><span style='display:inline-block;background-color:#FF9900;color:#FFF;height:18px;line-height:18px;width:18px;text-align:center;'>无</span></td>";
							shtml+="</tr>";
						}
					}else{
						$1("bdid"+bdid).innerHTML="<span style='color:#FF9900;'>不包含</span>";
						shtml+="<tr>";
							shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>内容中</td>";
							shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'>"+basedataStr+"</td>";
							shtml+="<td align='center' style='height:30px;border-bottom:#DADADA 1px dotted;'><span style='display:inline-block;background-color:#FF9900;color:#FFF;height:18px;line-height:18px;width:18px;text-align:center;'>无</span></td>";
						shtml+="</tr>";
					}
				}
				//++++++++++++++++++++++++++++++基本数据匹配结束+++++++++++++++++++++
				
				shtml+="</table>";
				$1("checkresultdiv").innerHTML=shtml;
			}
			
		}
	}else{
		//$1("imdetailddiv").innerHTML="<table style='height:100%;width:100%;font-size:20px;'><tr><td align='center'>上海教委数据导入查询没有结果:"+txt+"</td></tr></table>";
		
	}
}
//====================质量报告查询管理结束==========================

// 对Date的扩展，将 Date 转化为指定格式的String    
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，    
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)    
// 例子：    
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423    
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18    
Date.prototype.Format=function(fmt){  
  var o = {   
    "M+" : this.getMonth()+1,                 //月份    
    "d+" : this.getDate(),                    //日    
    "h+" : this.getHours(),                   //小时    
    "m+" : this.getMinutes(),                 //分    
    "s+" : this.getSeconds(),                 //秒    
    "q+" : Math.floor((this.getMonth()+3)/3), //季度    
    "S"  : this.getMilliseconds()             //毫秒    
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}

/*
 * 网络请求识别码段位分配
 * 网络请求识别码构成：前缀DPFT + 6位数字
 * 系统管理模块：	分配段号：DPFT000001-DPFT010000
 * 资源管理模块： 分配段号：DPFT010001-DPFT040000
 */
//获取请求的类型
function getRTP(){
	var tp=[
				[				   //0 系统模块  预留
				 "" 
				],
				[				   //1 上报计划添加
				 "GLTP001000",	   //上报计划添加
				 "GLTP001001",	   //上报计划删除
				 "GLTP001002",	   //上报计划编辑
				 "GLTP001003",	   //上报计划检索
				 "GLTP001004",	   //教育部基准表查询
				 "GLTP001005",	   //上海教委基准表查询
				 "GLTP001006",	   //上报计划基表时点信息更新修改
				 "GLTP001007",	   //全量更新上报计划基表时点信息
				 "GLTP001008"      //jasperreport报表显示
				]
				, 
				[				   //2 上海教委导入查询
				"GLTP005000"	   //上海教委导入查询
				]
				,
				[                  //3 上海教委数据生成
				"GLTP005010",	   //数据生成
				"GLTP005011",	   //数据查询
				"GLTP005012",	   //上海教委导入数据表状态更新
				"GLTP005013"	   //上海教委数据一键上报
				],
				[					//4 登录教委账号管理
				"GLTP003200",	    //登录教委账号添加
				"GLTP003201",	    //登录教委账号编辑
				"GLTP003202",		//登录教委账号删除
				"GLTP003203",		//登录教委账号检索
				"GLTP003204"		//登录教委账号测试
				],
				[					//5 上海教委上报数据查看
				"GLTP003000"
				],
				[					//6 指标维度管理
				"GLTP006000",		//指标维度添加
				"GLTP006001",		//指标维度编辑
				"GLTP006002",		//指标维度删除
				"GLTP006003",		//指标维度检索
				"GLTP006004",		//指标检索
				"GLTP006005",		//指标分类检索
				"GLTP006006",		//指标值检索
				"GLTP006007",		//7 数据报表内容值检索
				"GLTP0060081",		//主题添加
				"GLTP0060082",		//主题编辑
				"GLTP0060083",		//主题删除
				"GLTP0060084"		//主题检索
		   		],
				[					//7 数据报表模板
				"GLTP006011",		//数据报表模板添加
				"GLTP006012",		//数据报表模板编辑
				"GLTP006013",		//数据报表模板删除
				"GLTP006014",		//数据报表模板查询
				"GLTP006015",		//数据报表类型--报告模板处 所属报告
				"GLTP006016",       //组织维度检索
				"GLTP006017"        //专业检索
		   		],
				[					//8 数据报表处理
				"GLTP006021",		//数据报表编制
				"GLTP006022",		//数据报表编辑
				"GLTP006023",		//数据报表删除
				"GLTP006024",		//数据报表检索
				"GLTP006025",		//数据报表内含模板添加
				"GLTP006026",		//数据报表内含模板删除
				"GLTP006027"		//数据报表详情查询
		   		],
				[					//9 质量报告模板管理
				"GLTP006040",		//质量报告模板添加
				"GLTP006041",		//质量报告模板编辑
				"GLTP006042",		//质量报告模板删除
				"GLTP006043",		//质量报告模板检索
				"GLTP006044",		//质量报告模板详情索
				"GLTP0060501",		//5质量报告模板类型添加
				"GLTP0060502",		//6质量报告模板类型编辑
				"GLTP0060503",		//7质量报告模板类型删除
				"GLTP0060504"		//8质量报告模板类型检索
				
		   		],
				[					//10 质量报告管理
				"GLTP006070",		//质量报告添加
				"GLTP006071",		//质量报告修改
				"GLTP006072",		//质量报告删除
				"GLTP006073",		//质量报告检索
				"GLTP006074"		//质量报告详情
		   		],
				[					//11 质量报告检查
				"GLTP006081",		//0 检查标准添加
				"GLTP006082",		//1 检查标准编辑
				"GLTP006083",		//2 检查标准删除
				"GLTP006084",		//3 检查标准检索
				"GLTP006085",		//4 基础要求添加
				"GLTP006086",		//5 基础要求删除
				"GLTP006087",		//6 基础数据添加
				"GLTP006088",		//7 基础数据删除
				"GLTP006089",		//8 检查标准详情
				"GLTP006090"		//9 质量报告检查
		   		]
			];
	return tp;
}


//获取请求接口
function getbaseurl(){
	return getIPPT()+"TQCSERVER/TQCService";
}
//获取AJAX POST基础
function getpostbaseurl(){
	return getIPPT()+"TQCSERVER/TQCService";
}
function getIPPT(){
	return "http://"+window.location.host+"/";
}

function getpicbasesrc(){
	return getIPPT()+"tqc/";
}

//===========Cookie操作函数开始=============
function setCookie(name,value) { 
	var Days = 1; 
	var exp = new Date(); 
	exp.setTime(exp.getTime() + 60*60*1000); 
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 
//读取COOKIES 
function getCookie(name) { 
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)"); 
	if(arr=document.cookie.match(reg)) return unescape(arr[2]); 
	else return null; 
}
//删除COOKIES 
function delCookie(name) { 
	var exp = new Date(); 
	exp.setTime(exp.getTime() - 1); 
	var cval=getCookie(name); 
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
} 
//===========Cookie操作函数结束============



function addloadding(){
	var loadingimg=document.createElement("img");
	loadingimg.style.position="absolute";
	loadingimg.style.zIndex="2000";
	loadingimg.src="images/loading.gif";
	loadingimg.id="loadimgid";
	var sTop=document.body.scrollTop+document.documentElement.scrollTop;
	loadingimg.style.top=(sTop+200)+"px";
	loadingimg.style.left=(w-62)/2+"px";
	loadingimg.style.height="62px";
	loadingimg.style.width="62px";
	document.body.appendChild(loadingimg);
}
function delloadding(){
	document.body.removeChild($1("loadimgid"));
}
//POST请求AJAX
//values 用于函数之间传递参数
AJAXPOST=function(pms,tp,ach,values){
	if($1("loadimgid")==null){
		//显示进度加载条
		addloadding();
	}
	
	var req;
	if(typeof XMLHttpRequest=='undefined'){
		req=new ActiveXObject('Microsoft.XMLHttp');
	}else{
		req=new XMLHttpRequest();
	}
	pms+="&cltp=web";//记录日志时使用
	var data =pms;
	//不用担心缓存问题
	req.open("post", getpostbaseurl(), true);


	//必须设置,否则服务器端收不到参数
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	req.onreadystatechange = function () {
		
		if (req.readyState == 4 && req.status == 200) {
			 try{
			     delloadding();
			 }catch(Exception){
			
			 }
			 var txt=req.responseText;
			 //txt=txt.replace(new RegExp("!!==","gm"),"；"); 			 
			 if(tp==getRTP()[0][0]){
				 
			 }else if(tp==getRTP()[1][0]){//上报计划添加
				 adduploadplan_result_pro(txt,ach);
			 }else if(tp==getRTP()[1][1]){//上报计划删除 
				 deleteuploadplan_result_pro(txt,ach);
			 }else if(tp==getRTP()[1][2]){//上报计划编辑保存  
				 edituploadplan_result_pro(txt,ach);
		 	 }else if(tp==getRTP()[1][3]){//上报计划检索			 
			 	 queryuploadplanuploadplan_result_pro(txt,ach);
			 }else if(tp==getRTP()[1][4]){//教育部基础表查询	
			 	 queryedubasetab_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[1][5]){//教育部基础表查
			 	 queryshjwbasetab_result_pro(txt,ach);
			 }else if(tp==getRTP()[1][6]){//上报计划基表时点信息更新
			 	 updatebasetabpt_result_pro(txt,ach);
			 }else if(tp==getRTP()[1][7]){//全量更新上报计划基表时点信息
			 	 updateallbasetabpt_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[1][8]){//jasperreport报表显示
			 	getjasperreport_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[2][0]){//数据导入查询
			 	queryshjwimport_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[3][0]){//上海教委数据表生成
				createshjwtab_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[3][1]){//上海教委数据查询
			 	viewcreatetabinfo_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[3][2]){//上海教委数据导入表状态更新
			 	updatestatusofshjw_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[3][3]){//一键数据上报
				onkeyupload_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[4][0]){//上海教委账号添加
			 	shjwaccountadd_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[4][2]){//上海教委账号编辑
				shjwaccountedit_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[4][3]){//上海教委账号检索
			 	shjwaccountquery_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[4][4]){//上海教委账号登录
			 	loginshjw_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[5][0]){//上海教委数据实时查看
			 	viewcreatetabinfo_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][0]){//指标维度添加
				addindicatordimen_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][1]){//指标维度编辑
				editindicatordimen_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][2]){//指标维度删除
				deleteindicator_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][3]){//指标维度检索
			 	queryindicator_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][4]){//指标名称检索
				queryindicatorname_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][5]){//指标分类检索
				queryindicatorcategory_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][6]){//指标值检索
				queryzbvalue_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][7]){//数据报表模板内容检索
				querydatatabmodelgridvalue_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][8]){//主题添加
				addsubject_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][9]){//主题编辑
				editsubject_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][10]){//主题删除	
				deletesubject_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[6][11]){//主题检索
				querysubject_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[7][0]){//数据报表模板添加
				adddatatabmodel_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[7][1]){//数据报表模板编辑
				eidtdatatabmodel_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[7][2]){//数据报表模板删除	
				deletedatatabmodel_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[7][3]){//数据报表模板检索
			 	querydatatabmodel_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[7][4]){//数据报表模板类型检索
				querytabmodelcategory_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[7][5]){//组织结构检索
				queryorganization_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[8][0]){//数据报表编制添加 
				adddatatab_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[8][1]){//数据报表编制编辑
				editdatatab_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[8][2]){//数据报表编制删除
				deletedatatabedit_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[8][3]){//数据报表编制检索
			 	querydatatabedit_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[8][6]){//数据报表详情检索	
				querydatatabdetail_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[9][0]){//质量报告模板添加
				addqrmodel_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[9][1]){//质量报告模板编辑
				editqrmodel_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[9][2]){//质量报告模板删除
			 	deleteqrmodel_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[9][3]){//质量报告模板检索
			 	queryqrmodel_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[9][5]){//质量报告模板类型添加
			 	addqrtpname_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[9][6]){//质量报告模板类型编辑
			 	editqrtpname_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[9][7]){//质量报告模板类型删除
			 	deleteqrtpname_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[9][8]){//质量报告模板类型检索
			 	queryqrmodeltype_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[10][0]){//质量报告添加
				addqreport_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[10][1]){//质量报告编辑
				editqreport_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[10][2]){//质量报告删除
				deleteqreport_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[10][3]){//质量报告检索
			 	queryqreport_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[10][4]){//质量报告详情检索
			 	queryqreportdetailbyid_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[11][0]){//检查标准添加
				addqrcheck_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[11][1]){//检查标准编辑	
				editqrcheck_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[11][2]){//检查标准删除
				deleteqrcheck_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[11][3]){//检查标准检索
			 	querycheckstard_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[11][4]){//基础要求添加
			 	addbaserequire_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[11][5]){//基础要求删除
			 	deletebaserequire_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[11][6]){//基础数据添加
				addbasedata_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[11][7]){//基础数据删除
			 	deletebasedata_result_pro(txt,ach,values);
			 }else if(tp==getRTP()[11][8]){//检查标准检索详情
			  	querycheckstarddetail_result_pro(txt,ach,values);
			 }
		}
	}

	//发送请求,要data数据
	req.send(data);
}

function $c(bv){
	return document.createElement(bv);
}

function $1(id){
	return document.getElementById(id);
}
//编码
function b64(str){
	return encodeURIComponent(encodeURIComponent(str));
}


function pop(){
	var b = document.body;
					
	//设置边距为0，是为了全屏遮盖，否则上、右两边会留有边距，不能全屏遮盖
	b.style.margin=0;
	$1("md").style.display="block";
	$1("md").style.height=getScrollHeight() +"px";
	
	var ie = !-[1,]; 
	//实现透明遮盖，如果不需要透明，不需要设置此属性
	if(ie){
		$1("md").style.filter="alpha(opacity=80)";
	}else{
		$1("md").style.opacity="0.8";
	}

}
function getScrollHeight(){
    return Math.max(document.body.scrollHeight,
		document.documentElement.scrollHeight);
}

//提示框
function showalert(msg){
	
	//==============关闭以前的窗口==============
	try{
		closevideoedit("editvideohtml");
	}catch(Exception){
	
	}
	//==============关闭以前的窗口==============
	
	var shtml="<table style='width:100%;' cellpadding='0' cellspacing='0' border='0'>";
		shtml+="<tr style='height:35px;background-image:url(images/alertimg/alerttitle.png);'><td align='left'><span style='color:#FFF;font-size:14px;padding:0 0 0 5px;'>信息提示</span></td><td align='right'><a href='#' onclick='closevideoedit(&quot;editvideohtml&quot;);'><img src='images/alertimg/alertclose.png' border='0'></a></td></tr>";
		
		//=============================内容编辑区域开始===============================
		shtml+="<tr>";
			shtml+="<td colspan='2' valign='middle' align ='center' style='background-image:url(images/alertimg/alertcontainer.png);width:390px;height:164px;'>";
					shtml+="<span style='font-size:12px;padding:10 10 10 10px;display:inline-block;'>"+msg+"</span>";
			shtml+="</td>";
		shtml+="</tr>";
		
	shtml+="</table>";
	
	var editvideodiv=$c("div");
	editvideodiv.id="editvideohtml";
	editvideodiv.style.border="#DADADA 0px solid";
	//editvideodiv.style.boxShadow="editvideodiv.style";

	editvideodiv.style.position="absolute";
	var sTop=document.body.scrollTop+document.documentElement.scrollTop;
	editvideodiv.style.top=(200+sTop)+"px";
	editvideodiv.style.left=(w-390)/2+"px";
	editvideodiv.style.height="200px";
	editvideodiv.style.width="390px";
	editvideodiv.style.zIndex="2000";
	editvideodiv.style.backgroundColor="";

	editvideodiv.innerHTML=shtml;
	
	//视频编辑页面添加
	document.body.appendChild(editvideodiv);
	
	pop();
}

//关闭视频编辑弹出页面
function closevideoedit(htmlid){
	document.body.removeChild($1(htmlid));
	//关闭覆盖层
	document.body.style.margin="";
	document.getElementById("md").style.display="none";
}
//关闭菜单
function hiddenshowpanel(htmlid){
	if(parseInt($1(htmlid).style.right)>=0){
		$1(htmlid).style.right=(18-(w-222))+"px";
	}else{
		$1(htmlid).style.right="0px";
	}
}
//Json对象转字符串的方法
function json2str(obj)
{
  var S = [];
  for(var i in obj){
  obj[i] = typeof obj[i] == 'string'?'"'+obj[i]+'"':(typeof obj[i] == 'object'?json2str(obj[i]):obj[i]);
  S.push(i+':'+obj[i]);
  }
    return '{'+S.join(',')+'}';
}


//获取select值
function getselectionvalue(id){
	var sl=$1(id);
	if(sl==null){
		return null;
	}
	return sl.options[sl.selectedIndex].value;
}

function Map() {
    this.elements = new Array();

    //获取MAP元素个数
    this.size = function() {
        return this.elements.length;
    };

    //判断MAP是否为空
    this.isEmpty = function() {
        return (this.elements.length < 1);
    };

    //删除MAP所有元素
    this.clear = function() {
        this.elements = new Array();
    };

    //向MAP中增加元素（key, value) 
    this.put = function(_key, _value) {
        this.elements.push( {
            key : _key,
            value : _value
        });
    };

    //删除指定KEY的元素，成功返回True，失败返回False
    this.remove = function(_key) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    this.elements.splice(i, 1);
                    return true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //获取指定KEY的元素值VALUE，失败返回NULL
    this.get = function(_key) {
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    return this.elements[i].value;
                }
            }
        } catch (e) {
            return null;
        }
    };

    //获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
    this.element = function(_index) {
        if (_index < 0 || _index >= this.elements.length) {
            return null;
        }
        return this.elements[_index];
    };

    //判断MAP中是否含有指定KEY的元素
    this.containsKey = function(_key) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].key == _key) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //判断MAP中是否含有指定VALUE的元素
    this.containsValue = function(_value) {
        var bln = false;
        try {
            for (i = 0; i < this.elements.length; i++) {
                if (this.elements[i].value == _value) {
                    bln = true;
                }
            }
        } catch (e) {
            bln = false;
        }
        return bln;
    };

    //获取MAP中所有VALUE的数组（ARRAY）
    this.values = function() {
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].value);
        }
        return arr;
    };

    //获取MAP中所有KEY的数组（ARRAY）
    this.keys = function() {
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].key);
        }
        return arr;
    };
}