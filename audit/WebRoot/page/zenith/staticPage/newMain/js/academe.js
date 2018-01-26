// 雷达图对象
var academy_radar_chart;
// 院系考评图
var evaluationRankingChart;
//指标对比图
var zb_contrast;

jQuery(function() {
    academy_radar_chart = echarts.init(document.getElementById("academy_radar_chart"));
    evaluationRankingChart  = echarts.init(document.getElementById("evaluationRankingChart"));
    zb_contrast = echarts.init(document.getElementById("zb_contrast"));
    init(); // echarts控件初始化后初始化页面数据
  //院系数据 显示其他隐藏
    showyxsj();
//  	majordata();
	$("#zbdb01").hide();
	/*showMajorData();*/
	/*$("#zbqhSelect").change(function as(){
		initOne();
	});*/
	tabChart('evaluationRankingChart');
});

function hideMajorData(){
	$("#majordata").empty();
}


function showMajorData(){
	
	var academeName= $("#academeName").html();
	$.ajax({
		async : false,
		url: "/CHART/qualityDataHome/showMajorData.htm",
		type : "POST",
		data : {
			academeName :  academeName
		},
		success : function (data){
			if(data.majorList == null){
				return;
			}
			$.each(data.majorList,function(j,value){
				if(value != null){
					var sname = value[0];
					var str="<td colspan='3' height='8%' style='text-align:center;'>"+"数据或比例("+sname+")</td>"
					$("#majorid").append(str);
				}
				
			});
		
		},
		error : function(){
			alert("系统忙，请稍后重试！！！");
		}
	});
}
function init() {
    jQuery(".zhankai_fuhao").click(function() {
        showOrHide(this);
    });
    //显示当前学院名字
    jQuery("#academeName").text(getRequest().academeName);
    var str="<span class='box30 mg_l10'>";
    var academeName=getRequest().academeName;
    str+="<a href='zhuanye.jsp?academeName="+academeName+"' target='conbar' style='color:#4A9AD2' >"+"专业评估"+"</a>";
    str+="</span>";
	jQuery("#major_evaluation").append(str);
    initTime();
    //下拉框加载所有学院
    //initAcademe();
    //初始化 学院和时间的change事件
    initChange();
    //academy_radar_chart.setOption(getRadarOption("/CHART" + "/academe/academe_getCodeIndexShowRadar.htm"));
    
}

/**
 * 获取雷达图需要的数据
 */
function getRadarOption(url) {
    // 图表清空-------------------
    academy_radar_chart.clear();
    // 指标清空-------------------
    var lis = jQuery(".li_tips");
    lis[0].innerHTML = "";
    lis[1].innerHTML = "";
    var url = "/CHART" + "/core/core_showOrgaRader.htm";
    jQuery.ajax({
        url: url,
        type: "POST",
        async: false,
        data: {
            year: $("#radarTime").val(),
            department: getRequest().academeName
        },
        success: function(data) {
        	var result = eval("(" + data + ")");
        	if(result.ok){
        		// 指标轴
                raderOption.polar[0].indicator = [];
                // 指标数据源
                raderOption.series[0].data[0].value = [];
                raderOption.series[0].data[1].value = [];
                raderOption.series[0].data[2].value = [];
                
                // 指标阀值
                var lis = jQuery(".li_tips");
                var str = "";
                
                $.each(result.data,function(i, obj) {
                    var zhi = parseFloat(obj[3]);
                    var top = parseFloat(obj[4]);
                    var ftop = parseFloat(obj[5]);
                    var warn = parseFloat(obj[6]);
                    var fwarn = parseFloat(obj[7]);
                    var qfd = parseFloat(obj[8]);
                    
                    // 指标阀值
                    str += "<li><span class='box40 bg_" + checkFaZhi(obj) + " f_l tbg_box'>" + obj[2] + "</span><span class='box30 f_l font_blue txt_c'>" + (obj[3] == null ? "---": zhi.toFixed(2)) + "</span></li>";
                    lis[0].innerHTML = str;
                    
                    if (ftop != 1) {
                        qfd = percent(toOne(parseFloat(obj[7]), parseFloat(obj[6]), parseFloat(obj[5]), parseFloat(obj[8])));
                        warn = percent(toOne(parseFloat(obj[7]), parseFloat(obj[6]), parseFloat(obj[5]), parseFloat(obj[7])));
                        if(zhi != 0){
                        	zhi = percent(toOne(parseFloat(obj[7]), parseFloat(obj[6]), parseFloat(obj[5]), parseFloat(obj[3])));
                        }
                        top = percent(toOne(parseFloat(obj[7]), parseFloat(obj[6]), parseFloat(obj[5]), parseFloat(obj[5])));
                    }
                    var a = {};
                    a.text = obj[2];
                    a.max = 0.75;
                    raderOption.polar[0].indicator.push(a);
                    raderOption.series[0].data[0].value.push(warn);
                    raderOption.series[0].data[1].value.push(qfd);
                    raderOption.series[0].data[2].value.push(parseFloat(zhi).toFixed(2));
                });
        	}else{
        		// 错误
        	}
        },
        error: function() {
            alert("系统忙，请稍后重试！");
        }
    });
    return raderOption;
}

function getRequest() {
    var url = decodeURI(location.search); // 获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

//*********LLP**********//
/**
 * 切换机构等级
 */
function changeLevel(){
	var organizationLevel = $("#coreIndexLevel").val();
	var organization = $("#organization").val();
	var str = "";
	if(organizationLevel == 1){
		organization = "全校";
	}else{
		getOrgization(organizationLevel);
	}
//	initCodeIndex();
}
//二级指标对比初始化
function initChildzb(){
	var parentIdTwo="";
	if(evaluationIndexs==null){
		return;
	}
	$.ajax({
		async : false,
		url : "/TQCC/evaluationRanking/evaluationRanking_findChildrenEvaluationIndexByParentId.htm",
		type : "POST",
		data : {
			parentId :  evaluationIndexs[0].id
		},
		success : function (data){
			var result = eval("("+data+")");
			for(var i=0; i<result.data.length;i++){
				parentIdTwo+=result.data[i].id+",";
			}
			parentIdTwo=parentIdTwo.substring(0, parentIdTwo.length-1);//获取所有一级指标的id ,为二级指标对比用
			findTwoZb(parentIdTwo)
		},
		error : function(){
			alert("系统忙，请稍后重试！！！");
		}
	});
}
//二级指标对比,取所有二级指标
function findTwoZb(parentIdTwo){
	$.ajax({
		async : false,
		url : "/CHART/xueYuan/xueYuan_searchNotInParentData.htm",
		type : "POST",
		data : {
			"parentIdTwo" :  parentIdTwo
		},
		success : function (data){
			var result = eval("("+data+")");
			var html="<dl class='dlOne'><dt>一级指标:</dt><div>";
			for(var i=0; i<result.length;i++){
				html+="<dd><input type='checkbox' ename='"+result[i].MEASURE_NAME+"' onclick='isOChecked();' id='"+result[i].id+"' MEASUREID='"+result[i].MEASURE_ID+"' name='parentId'/> "+ result[i].MEASURE_NAME+"</dd>";
			}
			html+="</div></dl>";
			$("#zbData").html(html);
		},
		error : function(){
			alert("系统忙，请稍后重试！！！");
		}
	});
}
/**
 * 初始化 指标 机构等级来定义所显示 指标
 */
function initCodeIndex(){
	var organizationLevel = $("#coreIndexLevel").val();
	var organization = $("#organization").val();
	if(organizationLevel == 1){
		organization = "全校";
		$("#organizationBox").hide();
	}else{
		$("#organizationBox").show();
	}
	
	//初始化所有一级指标，并模拟点击第一个指标
	$.ajax({
		async : false,
		url : "/TQCC/coreIndex/coreIndex_initShowCoreIndex.htm",
		type : "POST",
		data : {
			level : organizationLevel,
			organization : organization 
		},
		success : function (data){
			var result = eval("("+data+")");
			if (result.ok) {
				var zbHtml="";
				for(var i =0; i<result.data.length;i++){
					zbHtml+="<dd><input type='checkbox' id='"+result.data[i].MEASURE_ID+"' name='zbCheck' /> "+result.data[i].MEASURE_NAME+"</dd>";
				}
				$("#oneIndicators").html(zbHtml)
			}
		},
		error : function(){
			alert("系统忙，请稍后重试！！！");
		}
	});
}
/**
 * 传入 等级 获取机构
 * @param level
 */
function getOrgization(level){
	var url = "";
	var str = "";
	if(level == 2){
		// 加载学院
		str += "<option value='所有学院' selected>所有学院</>";
		url = "/TQCC/coreIndex/coreIndex_getAllDepartment.htm";
	}else if(level == 3){
		// 加载专业 此处
		str += "<option value='所有专业' selected>所有专业</>";
		url = "/TQCC/coreIndex/coreIndex_getAllSpecialty.htm";
	}
	
	$.ajax({
		async : false,
		url : url ,
		type : "POST",
		success : function (data){
			var result = eval("("+data+")");
			if (result.ok) {
				// 当机构为专业的时候value存ID，其他则存code
				if(level == 3){
					$.each(result.data,function(i,obj){
						str += "<option value="+obj.id+">"+obj.bprofessionName+"</option>";
					});
				}else{
					$.each(result.data,function(i,obj){
						str += "<option value="+obj.code+">"+obj.name+"</option>";
					});
				}
			}else{
				alert(result.message);
			}
		},
		error : function(){
			alert("系统忙，请稍后重试！！！");
		}
	});
	
	$("#organization").html(str);
}
function searchAllOrg(){
	$.ajax({
		async : false,
		url : "/TQCC/coreIndex/coreIndex_getAllDepartment.htm" ,
		type : "POST",
		success : function (data){
			var result = eval("("+data+")");
			if (result.ok) {
				var zbHtml="<dl class='dlOne'><dt>选择学院:</dt><div style='color: #0066FF;font-weight: bold;text-align: center;'>";
				for(var i =0; i<result.data.length;i++){
					zbHtml+="<dd><input onclick='isOChecked();' value='"+result.data[i].name+"' type='checkbox' id='"+result.data[i].id+"' name='oCheck' /> "+result.data[i].name+"</dd>";
				}
				zbHtml+="</div></dl>";
				$("#orgList").html(zbHtml);
			}
		},
		error : function(){
			alert("系统忙，请稍后重试！！！");
		}
	});
}
/**
 * 院系评估 一级指标
 * 点击学院评估后触发
 */
function selectOneZB(){
	if(evaluationIndexs==null){
		return;
	}
	var id = $("#zbqhSelect option:selected").attr("zzbid");
	$.ajax({
		async : false,
		url : "/TQCC/evaluationRanking/evaluationRanking_findChildrenEvaluationIndexByParentId.htm",
		type : "POST",
		data : {
			parentId :  id
		},
		success : function (data){
			var result = eval("("+data+")");
			var html="<dl class='dlOne'><dt>一级指标:</dt><div>";
			for(var i=0; i<result.data.length;i++){
				html+="<dd><input type='checkbox' ename='"+result.data[i].MEASURE_NAME+"' onclick='isOChecked();' id='"+result.data[i].id+"' MEASUREID='"+result.data[i].MEASURE_ID+"' name='parentId'/> "+ result.data[i].MEASURE_NAME+"</dd>";
			}
			html+="</div></dl>";
			$("#zbData").html(html);
		},
		error : function(){
			alert("系统忙，请稍后重试！！！");
		}
	});
}
/**
 * 学院是否选择
 * 全局zbidStr获取 指标id
 */
function isOChecked(){
	if(!$("[name=parentId]").is(":checked")){
		alert("选择指标");
		return;
	}
	
	//取指标
	var parentId1="";
	var parentName=[];
	var parentId=$("[name=parentId]:checked");
	for(var i=0;i<parentId.length;i++){
		parentId1+=$(parentId[i]).attr("id")+",";
		parentName.push($(parentId[i]).attr("ename"));
	}
	
	//取学院
	var oid="";
	var oids = $("[name=oCheck]:checked");
	if(oids.length!=0){
		for(var i=0; i< oids.length; i++){
			oid +=oids[i].id+",";
		}
		oid = oid.substring(0, oid.length-1);//
	}
	
	if(oid!=""){
		var year=$("#radarTime2").val();
		searchZBRanking(year,oid,parentId1,parentName);
	}
}
/**
 * 如果存在 子级指标 一级指标排名
 * @param oid 学院id
 * @param zbidStr 指标id
 * @param year	年份
 */
function searchZBRanking(year,oid,parentid,parentName){
	zb_contrast.clear();//清空图标
	$.ajax({
		url : "/CHART/xueYuan/xueYuan_searchZBRanking.htm",
		type : "POST",
		data : {
			"year":year,
			"oid":oid,
			"parentid":parentid
		},
		success : function (data){
			var result = eval("("+data+")");
			console.info(result);
			var xData = new Array();//X
			var oids = $("[name=oCheck]:checked");
			var oid="";
			if(oids.length!=0){
				for(var i=0; i< oids.length; i++){
					xData.push($(oids[i]).attr("value"));
				}
			}
			option2.title.text="指标排名";//标题
			option2.xAxis[0].data = xData;//学院名称
			var legendData = [];//top
			var series = [];//数据
			for(var k=0; k<$(parentName).length;k++){
				legendData.push(parentName[k]);
				series.push({name:parentName[k],barCategoryGap: '50%',type:'bar',data:result[k],itemStyle:{normal:{color: '#00C13F',label:{show:true,formatter:"{c}"}}}});
			}
//			for(var i=0;i<result.length;i++){
//				
//			}
			
			option2.xAxis[0]={type:'category',axisLabel:{rotate:38},data:xData};
			
			option2.legend.data = legendData;
			option2.series = series;
			zb_contrast.setOption(option2);
			console.info(option2);
			
		},
		error : function(){
			alert("系统忙，请稍后重试！！！");
		}
	});
}

var option2 = {
    title : {
        text: '某地区蒸发量和降水量'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量']
    },
    grid :{
        height:'60%'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            axisLabel:{
                rotate:38 // 字体斜体
            },
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
        	barCategoryGap: '50%',
//            name:'蒸发量',
            type:'bar',
            data:[],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{c}"
                    }
                }
            }
        }
    ]
};
/**
 * 数组去重复
 * @param arr
 * @returns {Array}
 */
function unique(arr) {
	var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
 }


//*********LLP**********//

/**
 * 初始化时间
 */
function initTime() {
    var startYear = 2011;
    var checkedYear = 0;
    var date = new Date();

    var nowYear = getYear();
    checkedYear = nowYear; // 默认选中年
    var options = "";
    for (var i = nowYear; i >= startYear; i--) {
        options += "<option ";
        if (i == checkedYear) {
            options += "selected='selected' ";
        }
        options += "value=" + i + ">";
        options += i + "";
        options += "</option>";
    }
    jQuery("select[name='academeTime']").empty();
    jQuery("select[name='bj_time']").empty();

    jQuery("select[name='academeTime']").append(options);
    jQuery("select[name='bj_time']").append(options);
}

/**
 * 时间select change事件联动
 */
function changeAllTime(obj) {
    //	var times=jQuery("select[name='bj_time']");
    //	for(var i=0;i<times.length;i++){
    //		jQuery(times[i]).find("option[value='"+obj.value+"']").attr("selected",true);
    //	}
    getResource(obj);
}

/**
 * 学院select change事件联动
 */
function changeAllAcademe(obj) {
    getResource(obj);
}

/**
 * 初始化学院和时间的change事件
 */
function initChange() {
    var academes = jQuery("select[name='xueyuan'],");
    for (var i = 0; i < academes.length; i++) {
        jQuery(academes[i]).change(function() {
            changeAllAcademe(this);
        });
    }

    var times = jQuery("select[name='bj_time']");
    for (var i = 0; i < times.length; i++) {
        jQuery(times[i]).change(function() {
            changeAllTime(this);
        });
    }
}

/**
 * 获取数据源
 * @param obj
 */
function getResource(obj) {
    var div = jQuery(obj).parent().parent().parent();
    var fenleiId = jQuery(div).find(":first").attr("fenleiId");
    var name = jQuery(div).find("select[name='xueyuan']").val();
    var time = jQuery(div).find("select[name='bj_time']").val();

    var showUl = jQuery(div).find(".shuju_body");

    jQuery.ajax({
        url: "/CHART" + "/academe/academe_compareAcademe.htm",
        type: "POST",
        data: {
            cateGroyId: fenleiId,
            academeNameOne: getRequest().academeName,
            academeNameTwo: name,
            year: time
        },
        success: function(data) {
            var resource = eval("(" + data + ")");
            if (resource.length < 1) {
                jQuery(obj).parent().parent().next().slideUp(700,
                function() {
                    alert("该分类下无指标。");
                    jQuery(obj).parent().parent().find("span[class='f_r mg_r10 zhankai_fuhao']").html("+");
                });
                return;
            }

            var flag = false;
            var str = "";
            jQuery.each(resource,
            function(i, element) {
                if (element.data < 1) {
                    return true;
                } else {
                    flag = true;
                }
                str += "<ul>";
                str += "<li>";
                str += "<div class='title01 mg_r10 fenlei_title'><span class='mg_l10'>" + element.className + "</span></div>";
                str += "<dl>";
                jQuery.each(element.data,
                function(index, obj) {
                    str += "<dt style='border-bottom: 1px solid #ccc;'>" + obj.indexName + "</dt>";
                    str += "<dd>" + obj.zhi + "</dd>";
                });
                str += "</dl>";
                str += "</li>";
                str += "</ul>";
            });
            if (!flag) {
                jQuery(obj).parent().parent().next().slideUp(700,
                function() {
                    alert("该分类下无指标。");
                    jQuery(obj).parent().parent().find("span[class='f_r mg_r10 zhankai_fuhao']").html("+");
                });
                return;
            } else {
                showUl.html(str);
            }
        },
        error: function() {
            alert("系统忙，请稍后重试");
        }
    });
}

/**
 * 显示指标并显示当前阀值状态
 */
function showIndexThreshold(fazhi) {
    var lis = jQuery(".li_tips");
    if (fazhi == undefined || fazhi.length < 1) {
        return;
    }
    var str = "";
    for (var i = 0; i < fazhi.length; i++) {
        var obj = fazhi[i];
        if (obj == null) {
            continue;
        }
        var indexName = obj[2];
        var zhi = formatDouble(obj[3]);
        //		var color="green";
        //		if((obj[4]!=null && zhi>=formatDouble(obj[4])) || (obj[5]!=null && zhi<=formatDouble(obj[5]))){
        //			color="red";
        //		}else if((obj[6]!=null && zhi>=formatDouble(obj[6])) || (obj[7]!=null && zhi<=formatDouble(obj[7]))){
        //			color="yellow";
        //		}else if((obj[8]!=null && zhi>=formatDouble(obj[8])) || (obj[9]!=null && zhi<=formatDouble(obj[9]))){
        //			color="green";
        //		}
        //		if(color=="red"){
        //			str+="<li><span class='box40 bg_red f_l tbg_box'>"+indexName+"</span><span class='box30 f_l font_blue txt_c'>"+zhi+"</span><span class='icon_red f_r mg_r10 mg_top23'></span></li>";
        //		}else if(color=="yellow"){
        //			str+="<li><span class='box40 bg_yellow f_l tbg_box'>"+indexName+"</span><span class='box30 f_l font_blue txt_c'>"+zhi+"</span><span class='icon_yellow f_r mg_r10 mg_top23'></span></li>";
        //		}else if(color=="green"){
        //			str+="<li><span class='box40 bg_gree f_l tbg_box'>"+indexName+"</span><span class='box30 f_l font_blue txt_c'>"+zhi+"</span><span class='icon_gree f_r mg_r10 mg_top23'></span></li>";
        //		}
    }

    lis[0].innerHTML = str;
    lis[1].innerHTML = str;
}

/**
 * 根据年份显示雷达图，或院系考评排名
 */
function getRaderByYearAndTab() {
	var tab1 = $("#academy_radar_chart");
	// 查询核心指标，显示雷达图
    if(tab1.css("display") == "block"){
    	$("#tabName").html("该院核心指标");
    	 academy_radar_chart.setOption(getRadarOption("/CHART" + "/academe/academe_getCodeIndexShowRadar.htm"));
    }else{
    	$("#tabName").html("院系考评排名");
    	// 院系考评排名
    	showEvaluationRanking();
    }
}
/**
 * 显示指标对对
 */
function showZBContrast(){
	// 图表清空-------------------
	evaluationRankingChart.clear();
	if($("#zbqhSelect").val()==""||$("#zbqhSelect").val()==null){
		return;
	}
	jQuery.ajax({
        url: "/CHART/academe/academe_showEvaluationRanking.htm",
        type: "POST",
        async: false,
        data: {
            year: $("#radarTime").val(),
            praentID : $("#zbqhSelect").val(),
            zbid:$("#zbqhSelect").val()
        },
        success: function(data) {
        },
        error: function() {
            alert("系统忙，请稍后重试！");
        }
    });
}

/**
 * 显示院系考评
 */
function showEvaluationRanking(){
	// 图表清空-------------------
	evaluationRankingChart.clear();
    // 指标清空-------------------
    var lis = jQuery(".li_tips");
//    lis[0].innerHTML = "";
    jQuery.ajax({
        url: "/CHART/academe/academe_showEvaluationRanking.htm",
        type: "POST",
        async: false,
        data: {
            year: $("#dateYear").val(),
            praentID : $("#zbqhSelect").val(),
            zbid:$("#zbqhSelect").val()
        },
        success: function(data) {
        	var result = eval("(" + data + ")");
        	if(result.ok){
        		sortOption.xAxis[0].data = [];
        		sortOption.series[0].data = [];
        		var xData = new Array();
        		var series = new Array();
        		var colors = new Array();
        		var str = "";
        		$.each(result.data.resource,function(i,obj){
        			var color = "gree";
        			if(obj.departmentName == getRequest().academeName){
        				color = "red";
        			}
        			
        			str += "<li><span class='box40 bg_"+color+" f_l tbg_box'  name='fly'>" + obj.departmentName + "</span><span ";
                    str += "	class='box30 f_l font_blue txt_c'>" + obj.value.toFixed(2) + "</span>";
                    str += "</li>";
                    xData.push(obj.departmentName);
                    series.push(obj.value.toFixed(2));
                    colors.push(color == "gree" ? "#00C13F" : "#F7464A");
        		});
        		
        		sortOption.xAxis[0].data = xData;
        		sortOption.series[0].data = series;
        		sortOption.series[0].diyColors = colors;
        		//sortOption.title.subtext = result.data.evaluationRankingName;
        		evaluationRankingChart.setOption(sortOption);
        		
        		lis[0].innerHTML = str;
        	}else{
        		alert(result.message);
        	}
        },
        error: function() {
            alert("系统忙，请稍后重试！");
        }
    });
}
/**
 * 切换图形
 */
function tabChart(id){
	$("#"+id).show().siblings().hide();
	
	if(id!=""&&id=="evaluationRankingChart"){
		$("#zbqh").show();
	}
	
	if(id!="" && id=="evaluationRankingChart"){
		$("#zbdb01").show();  
		$("#yxsj").hide();
	}
	if(id!="" && id=="academy_radar_chart"){
		$("#yxsj").show();
		$("#zbdb01").hide(); 
	}
/*	$("#zyndztsjb").show(); */ 
	searchOneZB();
	selectOneZB();//初始化学院排名一级指标
	searchAllOrg();//初始化所有机构
	getRaderByYearAndTab();
	
	
}
function initOne(){
//	searchOneZB();
	
	selectOneZB();//初始化学院排名一级指标
	searchAllOrg();//初始化所有机构
	$("#oneTwoZBDiv").show();
	$("#yxsj").hide();
	$("#zyndztsjb").hide();  
}


	

/**
 * 所有一级指标
 */

var evaluationIndexs;
function searchOneZB(){
	var param = {
		organizationLevel : 2,
		parentId : 0,
		zbid:0
	}
	
	$.ajax({
		async : false,
		url : "/TQCC/evaluationRanking/evaluationRanking_findEvaluationIndexByParam.htm",
		type : "POST",
		data : param,
		success : function(data){
			var result = eval("("+data+")");
			if(result.ok){  
				evaluationIndexs = result.data;
				if(evaluationIndexs==null){
					return;
				}
				var html="";
				for(i=0;i<evaluationIndexs.length;i++){
					html+="<option value='"+evaluationIndexs[i].MEASURE_ID+"'  zzbid='"+evaluationIndexs[i].id+"' >"+evaluationIndexs[i].MEASURE_NAME+"</option>";
				}
				$("#zbqhSelect").html(html);
			}else{
				alert(result.message);
			}
		}
	});
}

/**
 * 显示或隐藏DIV
 * @param obj
 */
function showOrHide(obj) {
    var span = jQuery(obj);
    if (span.text() == "+") {
        getResource(span.next().children("select"));
        span.parent().next().slideDown(700,
        function() {
            span.text("-");
        });
    } else if (span.text() == "-") {
        span.parent().next().slideUp(700,
        function() {
            span.text("+");
        });
    }
}

/**
 * 初始学院下拉框
 */
function initAcademe() {
    //var selects=jQuery("#xueyuan");
    //初始化
    var submitUrl = "/CHART" + "/qualityDataHome/dataOrganizations.htm";
    jQuery.ajax({
        type: 'POST',
        dateType: 'xml',
        url: submitUrl,
        async: false,
        beforeSend: function(xmlhttprequest) {},
        success: function(data) {
            var selects = jQuery("select[name='xueyuan']");
            for (var index = 0; index < selects.length; index++) {
                var select = selects[index];
                //给学院赋值                                                                                                                                           
                jQuery(select).empty();
                //var defaultTj = eval(data.defaultAsRSave);
                jQuery(select).append("<option value='0'>---请选择---</option>");
                jQuery.each(data.orgList,
                function(i, value) {
                    if (value[1] != getRequest().academeName && value[1] != "全校") {
                        var optionStr = "<option value='" + value[1] + "' ";
                        optionStr += " >" + value[1] + "</option>";
                        jQuery(select).append(optionStr);
                    }
                });
            }
        }
    });
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
        return nowYear - 1;
    }
}

function formatDouble(obj) {
    var s = obj.toString();
    var index = s.indexOf('.');
    var addFlag = false;
    var value = 0;
    if (index != -1) {
        if (s.substring(index + 1).length > 2) {
            var num = parseInt(s.substring(index + 3, index + 4));
            value = s.substring(0, index + 3) * 1;
            if (num > 4) {
                addFlag = true;
            } else {
                addFlag = false;
            }
        }
    } else {
        return obj;
    }

    if (value > 0) {
        if (addFlag) {
            value += 0.01;
        } else {
            value += 0.01;
        }
    }
    return value.toString().substring(0, index + 3);
}

/**
 * 归一算法
 * @param fwarn 警示值
 * @param warn 归一警示值
 * @param max 最优值
 * @param zhi 传入值
 * @returns
 */
function toOne(fwarn, warn, max, zhi) {
    return Math.abs(zhi - fwarn) * warn / Math.abs(max - fwarn) + warn;
}

/**
 * 截取小数点后两位
 * 
 * @param param
 * @returns
 */
function percent(param) {
    return param.toFixed(2);
}

//雷达图 option
var raderOption = {
    backgroundColor: '#FFFFFF',
    color: ['#F7464A', '#00C13F', '#1790CF'],
    title: {
        text: '',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'bottom',
        data: [{
            name: '警告',
        },
        {
            name: '正常',
        },
        {
            name: '我校',
        }]
    },
    toolbox: {
        show: true,
        feature: {
            //           mark : {show: true},
            //           dataView : {show: true, readOnly: false},
            //           restore : {show: true},
            //saveAsImage : {show: true}
        }
    },
    polar: [{
        indicator: [{
            text: '生师比',
            max: 6000
        },
        {
            text: '生均图书流通量',
            max: 16000
        },
        {
            text: '生均教学科研仪器设备值',
            max: 30000
        },
        {
            text: '高职称教学授课总占比',
            max: 38000
        },
        {
            text: '签约率',
            max: 52000
        },
        {
            text: '就业率',
            max: 25000
        }],
        name: {
            formatter: "【{value}】",
            //           textStyle: {color:'red'}
        }
    }],
    calculable: true,
    series: [{
        type: 'radar',
        data: [
       {
            value: [4300, 10000, 29000, 38000, 50000, 19000],
            name: '警告',
            itemStyle: {
                normal: {
                    color: '#F7464A',
                    lineStyle: { // 系列级个性化折线样式
                        width: 2
                    },
                    label: {
                        show: true
                    }
                }
            }
        },
        {
            value: [6000, 14000, 26000, 32000, 44000, 21000],
            name: '正常',
            itemStyle: {
                normal: {
                    color: '#00C13F',
                    lineStyle: { // 系列级个性化折线样式
                        width: 2
                    },
                    label: {
                        show: true
                    }
                }
            }
        },
        {
            value: [8000, 16000, 24000, 31000, 41000, 21000],
            name: '我校',
            itemStyle: {
                normal: {
                    color: '#1790CF',
                    lineStyle: { // 系列级个性化折线样式
                        width: 2
                    },
                    label: {
                        show: true
                    }
                }
            }
        }
        /*, {
			value : [ 1, 1, 1, 1, 1, 1 ],
			name : '最优线',
			itemStyle : {
				normal : {
					color : '#CCCCCC',
					lineStyle : { // 系列级个性化折线样式
						width : 2
					},
					label: {
                       show: true
                   }
				}
			}
		} */
        ]
    }]
};

//阀值验证
function checkFaZhi(formula) {
    var color = "gree";
    if (formula != null) {
        var reg = new RegExp("#", "g");
        var redFz = formula[9];
        var yellowFz = formula[10];
        var greenFz = formula[11];
        var zhi = formula[3];
        if (zhi == null || zhi == "") {
            return color;
        }
        var ct = false;
        if (redFz != null && redFz != "") {
            redFz = redFz.replace(reg, zhi);
            ct = eval(redFz);
            color = ct ? "red": color;
        }
        if (!ct && yellowFz != null && yellowFz != "") {
            yellowFz = yellowFz.replace(reg, zhi);
            var ct = eval(yellowFz);
            color = ct ? "yellow": color;
        }
        if (!ct && greenFz != null && greenFz != "") {
            greenFz = greenFz.replace(reg, zhi);
            var ct = eval(greenFz);
            color = ct ? "gree": color;
        }
    }
    return color;
}

var sortOption = {
	    title: {
	        text: '院系考评排名',
	        subtext: ''
	    },
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	        data: ["分值"]
	    },
	    grid :{
	        height:'60%'
	    },
	    toolbox: {
	        show: true,
	        feature: {
	            mark: {
	                show: true
	            },
	            dataView: {
	                show: true,
	                readOnly: false
	            },
	            magicType: {
	                show: true,
	                type: ['line', 'bar']
	            },
	            restore: {
	                show: true
	            },
	            saveAsImage: {
	                show: true
	            }
	        }
	    },
	    calculable: true,
	    xAxis: [{
	        type: 'category',
	        axisLabel:{
                rotate:38 // 字体斜体
            },
	        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	    }],
	    yAxis: [{
	        type: 'value'
	    }],
	    series: [{
	        name: '分值',
	        type: 'bar',
	        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
//	        markPoint: {
//	            data: [{
//	                type: 'max',
//	                name: '最大值'
//	            },
//	            {
//	                type: 'min',
//	                name: '最小值'
//	            }]
//	        },
//	        markLine: {
//	            data: [{
//	                type: 'average',
//	                name: '平均值'
//	            }]
//	        },
	        itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: '12',
                            fontFamily: '微软雅黑',
                            fontWeight: 'bold'
                        }
                    },
                    color: function(params) {
                        return params.series.diyColors[params.dataIndex];
                    }
                }
            }
	    }]
	};
function showyxsj(){
	// 图表清空-------------------
	zb_contrast.clear();
	$("#yxsj").show();
	/*$("#zyndztsjb").hide();*/
	$("#oneTwoZBDiv").hide();
}

function showProTable(){
	/*$("#zyndztsjb").show();*/
	$("#oneTwoZBDiv").hide();
	$("#yxsj").hide();
}

/**
 * 数据格式化
 */
function valueFormat(value,flag) {
	if (value == undefined || value == null || value == 0 || value=="") {
		return "0";
	}
	var num = parseFloat(value);
	switch (flag) {
	case 1: // 转百分比，保留两位小数
		return (num * 100).toFixed(2); 
	case 2: // 保留两位小数
		return num.toFixed(2); 
//	case 3: // 保留两位小数
//		return (num * 100).toFixed(2)+"%";
	default:
		return value;
	}
}

