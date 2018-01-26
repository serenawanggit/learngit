$(document).ready(function() { 
	// 界面加载时执行select数据绑定
	getEstimationData();
	validateLogin();
}); 

//点击切换界面事件
function changeTab(type,obj){
	$('.main-bottom div').css("display","none");
	$('.main-top-div1 li').css("font-color", "#000000");
	$('.main-top-div1 li').css("background-color", "#354B67");
	var obj = $(obj);
	obj.css("background-color", "#1C86EE");
	obj.css("font-color", "#ffffff");
	switch(type){
	case 1:
		$('#div1').css("display","block");
		break;
	case 2:
		$('#div2').css("display","block");
		break;
	case 3:
		$('#div3').css("display","block");
		break;
	}
	changeEstimation();
		
}
//获取 评分总表-评估体系数据下拉框
function getEstimationData(){
	$.ajax({
		url : "/audit/asAccessStatusController/getSumEstimationData.do",
		type : "POST",
		dataType : "json",
		data : {},
		success : function(data) {
			var result = eval("(" + data + ")");
			if (result.flag!=1) {
				return;
			}
			var estimationList = result.estimationList;
			var yearList=result.yearList;
			var str = "";
			for ( var i = 0; i < estimationList.length; i++) {
				str += "<option value='" + estimationList[i].id + "' >";
				str +=  estimationList[i].name +"</option>";
			}
			$("#selectEstimation").html(str);
			var yearStr="";
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
					yearStr += "<option value='" + yearList[i].access_year + "' selected='selected'>";
					yearStr +=  yearList[i].access_year +"</option>";
				}else{
					yearStr += "<option value='" + yearList[i].access_year + "' >";
					yearStr +=  yearList[i].access_year +"</option>";
				}
			}
			$("#selectYear").html(yearStr);
			changeEstimation();
		},
		error : function() {
		}
	});
	}
//点击评估体系下拉框触发事件 
function changeEstimation(){
	var estimationId=$('#selectEstimation option:selected').val();//选中的值
	var year=$('#selectYear option:selected').val();//选中的值
	//设置当前年份
	document.cookie="assessYear="+year+";path=/";
	
	getMingXiData(estimationId,year);
}

//获取 评分总表--明细数据指标和数据
function getMingXiData(id,year){
	$.ajax({
		url : "/audit/asAccessStatusController/getSumMingXiData.do",
		type : "POST",
		dataType : "json",
		data : {
			"estimationId" : id,
			"year":year
		},
		success : function(data) {
			var result = eval("(" + data + ")");
			if (result.flag!=1) {
				return;
			}
			//遍历显示三级指标明细
			console.info(result);
			var estimationList = result.estimationList;
			var thStr1=" <tr> <th rowspan='3' class='bigth'>学院</th> <th rowspan='3' class='bigth'>专业</th>";//头部第一行
			var thStr2=" <tr class='table3-top-td2'>";//头部第二行
			var thStr3=" <tr class='table3-top-td3'>";//头部第三行
		//	var thStr4=" <tr class='table3-top-td4'>";//头部第四行
		//	var thStr5=" <tr class='table3-top-td5'>";//头部第五行
			var length=estimationList.length;
			var count1=1;//记录每个一级指标数
			var count2=1;//记录每个一级指标下，二级指标数
		//	var count3=1;//记录每一个二级指标下，三级指标数
			var count=0;//记录每一个一级指标下面三级指标数
			var colsCount=0;//记录一共得列数
			for ( var i = 0; i <length -1; i++) {
				count+=1;
		//		thStr4+=" <td> "+count1+"."+count2+"."+count3+"</td>";
		//		thStr5+=" <td> "+estimationList[i].name3+"("+estimationList[i].score3+"分)</td>";
				
				if(estimationList[i].id1!=estimationList[i+1].id1){//遍历一级指标，是否为下一个一级指标
					 thStr1+="<th colspan='"+count2+"'>"+count1+"."+estimationList[i].name1+"("+estimationList[i].score1+"分)</th>";
					 thStr2+=" <td > "+count1+"."+count2+"</td>";
					 thStr3+=" <td> "+estimationList[i].name2+"("+estimationList[i].score2+"分)</td>";
					 count1+=1;
					 count2=1;//二级指标数初始化
					 colsCount+=1;
			//		 count3=1;
					 count=0;
				}else{   //同一个一级指标内的二级指标，链接
					if(estimationList[i].id2!=estimationList[i+1].id2){
						thStr2+=" <td > "+count1+"."+count2+"</td>";
						thStr3+=" <td > "+estimationList[i].name2+"("+estimationList[i].score2+"分)</td>";
						count2+=1;
						colsCount+=1;
					//	count3=0;//三级指标数初始化
					}
				//	count3+=1;
				}
			}
			thStr1+=" <th colspan='"+count2+"'>"+count1+"."+estimationList[length-1].name1+"("+estimationList[length-1].score1+"分)</th> <th  rowspan='3' class='bigth'>汇总</th></tr> ";
			thStr2+=" <td > "+count1+"."+count2+"</td> </tr> ";
			thStr3+=" <td > "+estimationList[length-1].name2+"("+estimationList[length-1].score2+"分)</td> </tr> ";
			
		//	thStr4+=" <td> "+count1+"."+count2+"."+count3+"</td> </tr> ";
		//	thStr5+=" <td> "+estimationList[length-1].name3+"("+estimationList[length-1].score3+"分)</td> </tr> ";
			$('#table3Head').html(thStr1+thStr2+thStr3);
			//遍历显示各专业指标评分数据
			var mingXijsonArray= result.mingXijsonArray;
			if(mingXijsonArray.length<=0){
				$('#table3Body').html("<td colspan='"+(colsCount+4)+"'><span style='color:red;width:100%;font-size:14px'>没有该条件的数据</span></td>");
			}else{
				var tbodyStr= "";
				var existSpe = new Array();
				for ( var i = 0; i < mingXijsonArray.length; i++) {
					
					var record = mingXijsonArray[i];
					var flag = false;
					for ( var j = 0; j < existSpe.length; j++) {
						if(existSpe[j] == record.access_specialty_id){
							flag = true;
						}
					}
					
					if(!flag){
						tbodyStr +="<tr><td>"+record.oname+"</td><td>"+record.sname+"</td>";
						existSpe.push(record.access_specialty_id);
					}else{
						continue;
					}
					var totalScore = 0;
					for ( var a = 0; a < estimationList.length; a++) {
						if(a != estimationList.length-1 && estimationList[a].id2 == estimationList[a+1].id2){
							continue;
						}
						var existScore = false;
						var thisScore = 0;
						
						for ( var k=0; k < mingXijsonArray.length; k++) {
							if(mingXijsonArray[k].parent_id == estimationList[a].id2 && mingXijsonArray[k].access_specialty_id == record.access_specialty_id){
								var str=mingXijsonArray[k].score;
								
								if(str==null){
									str=0;
								}
							
								console.info(str);
							
								thisScore +=str;
								totalScore +=str;
								existScore = true;
							}
						}
						//totalScore +=thisScore;
						if(!existScore){
							tbodyStr += "<td>0</td>";
						}else{
							tbodyStr += "<td>"+thisScore.toFixed(2)+"</td>";
						}
					}
					tbodyStr +="<td>"+totalScore.toFixed(2)+"</td></tr>";
				}
				
				
		        $('#table3Body').html(tbodyStr);
			}
			getBigCategory(id,year);
		},
		error : function() {
			//alert("没有相应指标数据！");
			$('#table3Body').html("<td><span style='color:red;width:100%'>没有相应指标数据</span></td>");
			
		}
	});
}

function getBigCategory(estimationId,year){
	$.ajax({
		url : "/audit/asAccessStatusController/getBigCategoryData.do",
		type : "POST",
		dataType : "json",
		data : {
			"standardId" : estimationId,
			"year":year
		},
		success : function(data) {
			var result = eval("(" + data + ")");
			var standardList = result.data.standardList;
			var scoreList = result.data.scoreList;
			
			var thead2Html = "<th>学院</th><th>专业</th>";
			var avgList =new Array();
			for ( var i = 0; i < standardList.length; i++) {
				var standard = standardList[i];
				thead2Html +="<th>"+(i+1)+"."+standard.name+"("+standard.score+"分)"+"</th>";
				var avg = {};
				avg.id = standard.id;
				avg.score = 0;
				avgList.push(avg);
			}
			thead2Html +="<th>汇总</th>";
			$("#thead2").html(thead2Html);
			//汇总分
			var table1BodyHtml ="";
			
			for ( var i = 0; i < scoreList.length; i++) {
				var score = scoreList[i];
				var a=score.totalScore;
				table1BodyHtml += "<tr><td>"+score.orgName+"</td><td>"+score.speName+"</td>";
				table1BodyHtml +="<td>"+a.toFixed(2)+"</td></tr>";
			}
			$("#table1Body").html(table1BodyHtml);
			//大分类
			var table2BodyHtml ="";
			for ( var i = 0; i < scoreList.length; i++) {
				var score = scoreList[i];
				table2BodyHtml += "<tr><td>"+score.orgName+"</td><td>"+score.speName+"</td>";
				
				for ( var j = 0; j < standardList.length; j++) {
					var standard = standardList[j];
					for (item in score) {
						if(item == "score_"+standard.id){
							
							for ( var k = 0; k < avgList.length; k++) {
								var avg = avgList[k];
								if(avg.id == standard.id){
									avg.score +=score[item] == null?0:score[item];
								}
							}
							
							if(score[item] == null){
								table2BodyHtml +="<td>0</td>";
							}else{
								table2BodyHtml +="<td>"+score[item].toFixed(2)+"</td>";
							}
						}
					}
				}
				table2BodyHtml +="<td>"+score.totalScore.toFixed(2)+"</td></tr>";
			}
			$("#table2Body").html(table2BodyHtml);
			var table2FootHmtl = "<tr><th colspan='2'>均值</th>";
			for ( var i = 0; i < avgList.length; i++) {
				table2FootHmtl +="<th>"+eval(avgList[i].score/scoreList.length)+"</th>";
			}
			table2FootHmtl +="<th></th></tr>";
			$("#table2Foot").html(table2FootHmtl);
		}
	});
}

function getCollectCategory(estimationId,year){
	$.ajax({
		url : "/audit/asAccessStatusController/getBigCategoryData.do",
		type : "POST",
		dataType : "json",
		data : {
			"standardId" : estimationId,
			"year":year
		},
		success : function(data) {
			var result = eval("(" + data + ")");
			var standardList = result.data.standardList;
			var scoreList = result.data.scoreList;
			
			var table1BodyHtml ="";
			
			for ( var i = 0; i < scoreList.length; i++) {
				var score = scoreList[i];
				table1BodyHtml += "<tr><td>"+score.orgName+"</td><td>"+score.speName+"</td>";
				table1BodyHtml +="<td>"+score.totalScore+"</td></tr>";
			}
			$("#table1Body").html(table1BodyHtml);
		}
	});
}
