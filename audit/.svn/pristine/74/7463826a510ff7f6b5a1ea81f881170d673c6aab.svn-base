var deft = macarons; //默认样式
var theme = deft;
var myChart = [];
var raderChart; // 雷达图
var sContentPath ="/CHART";
jQuery('[name=theme_select]').on('change',function() {
    selectChange(jQuery(this).val());
});

jQuery(function(jQuery) {
	// 初始化时间
	formatStartYear("startYear");
	formatEndYear("endYear");
	formatEndYear("choiceYear");
	$("#startYear option[value=2012]").attr("selected",true);
	
    showLeftType();
    //--------------------------------------------------------------------------------
    //根据大分类查询出指标id
//    var categoryId = 102;
    var categoryId = $("#leftType li:first").attr("value");
    if(getRequest().categoryId != undefined){ // 如果有则模拟点击此分类
    	categoryId = getRequest().categoryId;
    }
    clickLeft(categoryId);
    
    
    jQuery('.l_nav ul li').click(function() {
		jQuery(this).addClass('l_nav_on').siblings().removeClass('l_nav_on');
	});
});


function showLeftType() {
    var url = sContentPath + "/home/findLeftType.htm";
    jQuery.ajax({
        type: 'POST',
        dateType: 'xml',
        url: url,
		async: false,
        success: function(data) {
            if (data.categoryList == null) {
                return;
            }
            var leftType = document.getElementById("leftType");
            leftType.innerHTML = "";
            var htmlVal = "";
            jQuery.each(data.categoryList,
            function(i, value) {
                htmlVal += "<li style='cursor:pointer' id='li" + value[0] + "' ";
                if (i == 2) {
                    htmlVal += " class='l_nav_on'";
                }
                htmlVal += " onclick='clickLeft(" + value[0] + ");' value='" + value[0] + "'> " + value[1] + "</a></li>";
            });
            leftType.innerHTML += htmlVal;
            leftType.innerHTML += "<li style='cursor:pointer' id='li0' onclick='clickLeft(0);' value='0'> 我关注的指标</a></li>";
            leftType.innerHTML += "<li style='cursor:pointer' id='licore' onclick='showCoreRader(&quot;core&quot;);' value='-1'> 全校核心指标</a></li>";
        }
    }); //ajax
}

//根据指标分类ID查询
function showViewHome(zbIDs, chartm, tspan) {
	alert('1');
    var valuestr = "";
    valuestr += "quotaIDs=" + zbIDs;
    valuestr += "&startYear=" + $("#startYear").val();
    valuestr += "&endYear=" + $("#endYear").val()-1;
    alert($("#endYear").val()-1);
    var url = sContentPath + "/home/findHomeQuotaView.htm?" + valuestr;
    jQuery.ajax({
        type: 'POST',
        dateType: 'xml',
        url: url,
        async: false,
        success: function(data) {
            if (data.zbbes == null) {
                return;
            }
            var zbTypeName = "";
            var methods = "line";
            //将数值装进数组
            var a=data.zbbeslist;
            for ( var h = 0; h < a.length; h++) {

        		var timearray1 = new Array();
        	    var valuearray1 = new Array();
        	    var namearray1 = new Array(); //指标名称
        	    var orgArray = new Array(); //学院
        	    var speArray = new Array(); //专业
        	    
            	jQuery.each(a[h],
                        function(i, value) {
                            timearray1.push(value.timeperiod);
                            var vz = value.zhi;
                            var vid = vz.substring(0, vz.lastIndexOf("-"));
                            namearray1.push(vid + "&" + value.name);
                            methods = value.methods;
                            if (!isNull(value.department)) {
                                orgArray.push(value.department + vid + "&" + value.department);
                                valuearray1.push(value.department + value.zhi);
                            } else if (!isNull(value.profession)) {
                                speArray.push(value.profession + vid + "&" + value.profession);
                                valuearray1.push(value.profession + value.zhi);
                            }
                        });
                        
                        timearray1 = getArray(timearray1); //年份集合
                        //拼装指标与数据
                        namearray1 = getArray(namearray1);

                        orgArray = getArray(orgArray);
                        speArray = getArray(speArray);

                        //拼装第一列指标列
                        var zbNames = new Array(); //存放指标的名称
                        var zbValues = new Array(); //存放指标的值
                        var yxgs = false;
                        var countXY = (methods == "pie" ? 6 : 2);
                        countXY = (methods == "scatter" ? 3 : countXY);
                        var osArray = (orgArray.length > 0 ? orgArray: speArray);
                        for (var j = 0; j < osArray.length; j++) {
                            var id = osArray[j].substring(0, osArray[j].lastIndexOf("&"));
                            var name = osArray[j].substring(osArray[j].lastIndexOf("&") + 1, osArray[j].length);
                            var bl = false;
                            if (j < countXY) {
                                zbNames[j] = name;
                                bl = true;
                            } else {
                                yxgs = true;
                            }
                            var zbValue = new Array(); //存放当前指标的值
                            //拼装该指标列对应的年份数据
                            for (var k = 0; k < valuearray1.length; k++) {          
                                var vid = valuearray1[k].substring(0, valuearray1[k].lastIndexOf("-"));
                                var vale = valuearray1[k].substring(valuearray1[k].lastIndexOf("-") + 1, valuearray1[k].length);
                                if (vale == null || vale == "" || vale == "null") {
                                    vale = "0";
                                }
                                if (vid == id) {
                                    if (bl) {
                                        zbValue.push(vale);
                                    }
                                }
                            }
                            if (bl) {
                                zbValues[j] = zbValue;
                            }
                        }
                        
                        //给图表赋值
                        //报表展示
                       /* for ( var f = 0; f < array.length; f++) {
							
						}*/
                        
                       /* console.info( zbNames);
                        console.info( zbValues);*/
                        chartm[h].clear(); //清空图表
                        if (methods == "pie") {
                            //饼图
                            var option = getOptionBIN();
                            option.series[0]['name'] = timearray1[0];
                            for (var ii = 0; ii < zbNames.length; ii++) {
                                option.legend['data'][ii] = zbNames[ii];
                                option.series[0]['data'][ii] = {
                                    value: zbValues[ii],
                                    name: zbNames[ii]
                                };
                            }
                            if (yxgs) {
                                option.legend.data.push('......');
                            }
                            option.backgroundColor = '#FFFFFF'; // 背景颜色
                            chartm[h].setOption(option);
                            return;
                        } else if (methods == "scatter") {
                            //散点图
                            var option = getOptionScience();
                            option.xAxis[0]['name'] = timearray1[1];
                            option.yAxis[0]['name'] = timearray1[0];
                            for (var ii = 0; ii < zbNames.length; ii++) {
                                option.legend['data'][ii] = zbNames[ii];
                                option.series.push({
                                    name: zbNames[ii],
                                    type: 'scatter',
                                    data: [[zbValues[ii][1], zbValues[ii][0]]],
                                    markPoint: {
                                        data: [{
                                            type: 'max',
                                            name: '最大值',
                                            symbolSize: 15
                                        }]
                                    }
                                    //    					, markLine : {data : [{type : 'average', name: '平均值'}]},
                                });
                            }
                            if (yxgs) {
                                option.legend.data.push('......');
                            }
                            option.backgroundColor = '#FFFFFF'; // 背景颜色
                            chartm[h].setOption(option);
                        } else if (methods == "line") {
                            //折线图
                            var option = getOptionZhu();
                            option.title.text = zbTypeName;
                            option.xAxis[0]['data'] = timearray1;
                            for (var ii = 0; ii < zbNames.length; ii++) {
                                for (var s = 0; s < zbValues[ii].length; s++) {
                                    zbValues[ii][s] = {
                                        value: zbValues[ii][s],
                                        //			                    symbol: 'heart',  // 数据级个性化拐点图形
                                        //标志图形类型，默认自动选择（8种类型循环使用，不显示标志图形可设为'none'），默认循环选择类型有：
                                        //			                    'circle' | 'rectangle' | 'triangle' | 'diamond' |
                                        //			                    'emptyCircle' | 'emptyRectangle' | 'emptyTriangle' | 'emptyDiamond' 
                                        //			                    另外，还支持五种更特别的标志图形'heart'（心形）、'droplet'（水滴）、'pin'（标注）、'arrow'（箭头）和'star'（五角星）
                                        symbolSize: 3,
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true,
                                                    textStyle: {
                                                        fontSize: '12',
                                                        fontFamily: '微软雅黑',
                                                        fontWeight: 'bold'
                                                    }
                                                }
                                            }
                                        }
                                    };
                                }
                                option.legend['data'][ii] = zbNames[ii];
                                option.series.push({
                                    name: zbNames[ii],
                                    type: methods,
                                    smooth: true,
                                    //		    		            symbol: 'heart',     // 系列级个性化拐点图形
                                    symbolSize: 8,
                                    data: zbValues[ii]
                                });
                            }
                            if (yxgs) {
                                option.legend.data.push('......');
                            }
                            option.backgroundColor = '#FFFFFF'; // 背景颜色
                            chartm[h].setOption(option);

                        } else if (methods == "barType") {
                            //条形图
                            var option = getOptionZhu();
                            option.title.text = zbTypeName;

                            //	    			option.xAxis[0]['data'] = timearray1;
                            option.xAxis[0]['type'] = 'value';
                            option.yAxis[0]['type'] = 'category';
                            option.yAxis[0]['data'] = timearray1;
                            for (var ii = 0; ii < zbNames.length; ii++) {
                                option.legend['data'][ii] = zbNames[ii];
                                option.series.push({
                                    name: zbNames[ii],
                                    type: methods,
                                    //展现方式
                                    data: zbValues[ii],
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                textStyle: {
                                                    fontSize: '12',
                                                    fontFamily: '微软雅黑'
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                            option.backgroundColor = '#FFFFFF'; // 背景颜色
                            if (yxgs) {
                                option.legend.data.push('......');
                            }
                            chartm[h].setOption(option);
                        } else {
                            //柱状图
                            var option = getOptionZhu();
                            option.title.text = zbTypeName;
                            option.xAxis[0]['data'] = timearray1;

                            for (var ii = 0; ii < zbNames.length; ii++) {
                                option.legend['data'][ii] = zbNames[ii];
                                option.series.push({
                                    name: zbNames[ii],
                                    type: methods,
                                    //展现方式
                                    data: zbValues[ii],
                                    itemStyle: {
                                        normal: {
                                            label: {
                                                show: true,
                                                textStyle: {
                                                    fontSize: '12',
                                                    fontFamily: '微软雅黑'
                                                    //			                            fontWeight : 'bold'
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                            option.backgroundColor = '#FFFFFF'; // 背景颜色
                            if (yxgs) {
                                option.legend.data.push('......');
                            }
                            chartm[h].setOption(option);

                        } //else
                        //报警颜色
                        $("#loadGif").hide();
                        var warnVal = data.thresholdlist; // 获取阀值对象
                        //判断阀值   warnVal阀值对象    当前年份值
                        var warnValue = checkFaZhi(warnVal[h]);
                        var innerHtm = tspan[h].innerHTML;
                        var val1 = innerHtm.substring(0, innerHtm.indexOf("_") + 1);
                        var val2 = innerHtm.substring(innerHtm.indexOf(" mg_"), innerHtm.length);
                        tspan[h].innerHTML = val1 + warnValue + val2;
			}
        }
    });
}

//阀值验证
function checkFaZhi(formula) {
    var color = "gree";
    if (formula != null && formula.pdzbZhi != null && formula.pdzbZhi > 0) {
        var reg = new RegExp("#", "g");
        var redFz = formula.redt;
        var yellowFz = formula.yellowt;
        var greenFz = formula.greent;
        var zhi = formula.pdzbZhi;
        
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

 var mychart1=[];
 var tspan1=[];
//点击左边列表
function clickLeft(dflID) {
	$("#loadGif").show();
	$("li[name='choiceYear']").hide();
	$("li[name='betweenYear']").show();
    //改变样式
    jQuery("#li" + dflID).addClass('l_nav_on').siblings().removeClass('l_nav_on');
    //根据大分类查询出指标id
    var url = sContentPath + "/home/home.htm?dflID=" + dflID;
    jQuery.ajax({
        type: 'POST',
        dateType: 'xml',
        url: url,
        async: false,
        success: function(data) {
            var uldk = document.getElementById("uldk");
            jQuery(uldk).parent().next().remove(); // 删除 雷达图 DIV
            uldk.innerHTML = "";
            myChart = [];
            if (data.quota == null) {
                return;
            }
            // 点击指标查看学院信息时，同时传入当前选中的分类
            var categoryId = $("#leftType li.l_nav_on").val();
            
            jQuery.each(data.quota,function(i, value) {
                var ii = i + 1;
                uldk.innerHTML += "<li id='li_" + ii + "' class='baobiaoli'>" + 
                	"<span class='title' id='tsp" + ii + "'>" +
            		"<i name='fazhiIcon' class='icon_gree mg_top10 mg_r10'></i>" +
            		"<a href='" + sContentPath + "/home/departmentDeatil_initDepartmentDeatil.htm?measure_id=" + value[0] + "&state=1&categoryId="+categoryId+"' target='conbar' onmousedown='showRightMenu(this,event)' indexId='" + value[0] + "'>" + value[1]+"("+value[2]+")" + 
            		"<i style='margin-left:10px;color:#A5A5A5;line-height:15px; font-size:11px; font-weight:normal;'>点击可查看详细</i>" +
            		"</a>" +
            		"</span>" + 
            		"<span class='shuju' id='main" + ii + "' style='height:200px;border:1px solid #ccc;padding:0px;'></span>" +
                "</li>";
            });
            var str="";
            jQuery.each(data.quota,function(i, value) {
                var ii = i + 1;
                var tspan = document.getElementById("tsp" + ii);
                var chartDiv = document.getElementById("main" + ii);
                myChart[i] = echarts.init(chartDiv);
                myChart[i].showLoading();
                myChart[i].setTheme(theme);
             /*   showViewHome(value[0], myChart[i], tspan);*/
                myChart[i].hideLoading();
                str+=value[0]+",";
                mychart1[i]=myChart[i];
                tspan1[i]=tspan;
            });
            showViewHome(str, mychart1, tspan1);
        }
    }); //ajax
}

//根据class筛选红黄绿灯
function getObjsByClass(param) {
    getObjsShow();
//    var tags = document.getElementsByTagName("i");
    $("i[name=fazhiIcon]").each(function(i,element){
    	if($(element).attr("class") != param){
    		$(element).parent().parent().hide();
    	}
    });
//    for (var k = 0; k < tags.length; k++) {
//        var tag = tags[k];
//        if (tag != null && tag.className != param) {
//            var liobj = tag.parentNode.parentNode;
//            liobj.style.display = "none";
//        }
//    }
}

//显示全部红黄绿灯
//根据class筛选红黄绿灯
function getObjsShow() {
    var tags = jQuery('[class=baobiaoli]');
    for (var k = 0; k < tags.length; k++) {
        var tag = tags[k];
        if (tag != undefined) {
            tag.style.display = "block";
        }
    }
}

//选择年份
function checkSelect() {
	var startYear = $("#startYear").val();
	var endYear = $("#endYear").val();
	if(startYear > endYear){
		alert("起始年份不能大于结束年份！！！")
		return;
	}
	
    var dflID = $(".l_nav_on").attr("value");
    if (dflID == -1) {
        showCoreRader(dflID);
    } else {
        clickLeft(dflID);
    }
}

//数组去重复
function getArray(a) {
    var hash = {},
    len = a.length,
    result = [];

    for (var i = 0; i < len; i++) {
        if (!hash[a[i]]) {
            hash[a[i]] = true;
            result.push(a[i]);
        }
    }
    return result;
}

function isNull(str) {
    if (str == "" || str == null) return true;
    var regu = "^[ ]+jQuery";
    var re = new RegExp(regu);
    return re.test(str);
}

//切换主题
function selectChange(value) {
    showLoading();
    jQuery('[name=theme_select]').val(value); //下拉框选中
    var themes;
    switch (value) {
    case 'green':
        themes = green;
        break;
    case 'blue':
        themes = blue;
        break;
    case 'dark':
        themes = dark;
        break;
    case 'gray':
        themes = gray;
        break;
    case 'infographic':
        themes = infographic;
        break;
    case 'macarons':
        themes = macarons;
        break;
    case 'red':
        themes = red;
        break;
    case 'shine':
        themes = shine;
        break;
    default:
        themes = deft;
        break;
    }
    if (value != 'default') {
        theme = themes;
        setTimeout(refreshAll, 240);
    } else {
        theme = {};
        setTimeout(refreshAll, 240);
    }
}

function showLoading() {
    for (var i = 0,
    l = myChart.length; i < l; i++) {
        myChart[i].showLoading();
    }
}

function refreshAll() {
    for (var i = 0,
    l = myChart.length; i < l; i++) {
        myChart[i].hideLoading();
        var selColor = jQuery('[name=theme_select]').val();
        if (selColor == "dark") {
            var opt = myChart[i].getOption();
            opt.backgroundColor = '#000000' // 背景颜色
            myChart[i].setOption(opt);
        } else {
            var opt = myChart[i].getOption();
            opt.backgroundColor = '#FFFFFF' // 背景颜色
            myChart[i].setOption(opt);
        }
        myChart[i].setTheme(theme);
    }
}

function skipdetail(mid) {
    window.location.href = sContentPath + "/page/home/home_detail.jsp?measure_id=" + mid;
}

/**
   * 显示核心指标雷达图
   * @param id
   */
function showCoreRader(id) {
	$("#loadGif").show();
	$("li[name='choiceYear']").show();
	$("li[name='betweenYear']").hide();
    //改变样式
    jQuery("#li" + id).addClass('l_nav_on').siblings().removeClass('l_nav_on');
    var rightDiv = jQuery(".right_main");
    rightDiv.html("<div class='box_tips'><ul id='uldk'></ul></div>");
    // 雷达图 Div
    var raderDiv = jQuery("<div id='raderDiv' class='raderDiv'></div>");
    raderDiv.attr("style", "width:99%; height:550px;");
    rightDiv.append(raderDiv);
    raderChart = echarts.init(document.getElementById('raderDiv'));
    jQuery.ajax({
        url: sContentPath + "/core/core_showRader.htm",
        type: "POST",
        async: false,
        data: {
            year: $("#choiceYear").val(),
            flag: 'DEPARTMENT',
            department: '全校'
        },
        success: function(data) {
            var result = eval("(" + data + ")");
            if(result.ok){
                if (result.length == 0) {
                    alert("无数据");
                    return;
                }

                // 指标轴
                raderOption.polar[0].indicator = [];

                // 指标数据源
                raderOption.series[0].data[0].value = [];
                raderOption.series[0].data[1].value = [];
                raderOption.series[0].data[2].value = [];
                $.each(result.data,function(i, obj) {
                    var zhi = parseFloat(obj[3]);
                    var top = parseFloat(obj[4]);
                    var ftop = parseFloat(obj[5]);

                    var warn = parseFloat(obj[6]);
                    var fwarn = parseFloat(obj[7]);

                    var qfd = parseFloat(obj[8]);

                    if (ftop != 1) { // 是1则不用归一
                        qfd = percent(toOne(parseFloat(obj[7]), parseFloat(obj[6]), parseFloat(obj[5]), parseFloat(obj[8])));
                        warn = percent(toOne(parseFloat(obj[7]), parseFloat(obj[6]), parseFloat(obj[5]), parseFloat(obj[7])));
                        top = percent(toOne(parseFloat(obj[7]), parseFloat(obj[6]), parseFloat(obj[5]), parseFloat(obj[5])));
                        if(zhi != 0){
                        	zhi = percent(toOne(parseFloat(obj[7]), parseFloat(obj[6]), parseFloat(obj[5]), parseFloat(obj[3])));
                        }
                    }

                    var a = {};
                    a.text = obj[2];
                    a.max = 0.75;

                    raderOption.polar[0].indicator.push(a);

                    raderOption.series[0].data[0].value.push(warn);
                    raderOption.series[0].data[1].value.push(qfd);
                    raderOption.series[0].data[2].value.push(zhi);
                    //raderOption.series[0].data[3].value.push(1);
                });
                $("#loadGif").hide();
                raderChart.setOption(raderOption);
            }else{
            	
            }
        },
        error: function() {
            alert("系统忙，请稍后重试！");
        }
    });
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

var option = {
    title: {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['蒸发量', '降水量']
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
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '蒸发量',
        type: 'bar',
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            },
            {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    },
    {
        name: '降水量',
        type: 'bar',
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        markPoint: {
            data: [{
                name: '年最高',
                value: 182.2,
                xAxis: 7,
                yAxis: 183,
                symbolSize: 18
            },
            {
                name: '年最低',
                value: 2.3,
                xAxis: 11,
                yAxis: 3
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};

// 雷达图 option
var raderOption = {
    backgroundColor: '#FFFFFF',
    color: ['#F7464A', '#00C13F', '#1790CF'],
    title: {
        text: '核心指标雷达图',
        subtext: '此图为归一值'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'bottom',
        data: [{
            name: '警告'
        },
        {
            name: '正常'
        },
        {
            name: '我校'
        }]
    },
    toolbox: {
        show: true,
        feature: {
            //            mark : {show: true},
            //            dataView : {show: true, readOnly: false},
            //            restore : {show: true},
            saveAsImage: {
                show: true
            }
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
            formatter: "【{value}】"
            //            textStyle: {color:'red'}
        }
    }],
    calculable: true,
    series: [{
        type: 'radar',
        data: [{
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

//饼图
function getOptionBIN() {
    var opt = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            //布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'
            x: 'left',
            data: []
        },
        calculable: true,
        series: [{
            name: '',
            type: 'pie',
            radius: '75%',
            center: ['70%', '50%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: false,
                        position: 'center',
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: [

            ]
        }]
    };
    return opt;
}

//柱状图
function getOptionZhu() {
    var option = {
        title: {
            text: '',
            subtext: ''
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: [],
            y: "bottom"

        },
        toolbox: {
            show: false,
            feature: {
                magicType: {
                    show: true,
                    type: ['line', 'bar']
                }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value'
        }],
        grid: {
            x: '40px',
            y: '30px',
            width: '310px',
            height: '120px'
        },
        series: []
    };
    return option;
}

//散点图
function getOptionScience() {
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis',
            showDelay: 0,
            axisPointer: {
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },
        legend: {
            data: [],
            y: "bottom",
            textStyle: {
                fontSize: '11',
                fontFamily: '微软雅黑'
            }
        },
        xAxis: [{
            name: 'x',
            type: 'value',
            power: 1,
            precision: 2,
            scale: true,
            axisLabel: {
                rotate: 0,
                //旋转角度
                formatter: '{value}',
                textStyle: {
                    fontSize: '9',
                    fontFamily: '微软雅黑'
                }
            }
        }],
        yAxis: [{
            name: 'y',
            type: 'value',
            power: 1,
            precision: 2,
            scale: true,
            axisLabel: {
                rotate: 0,
                //旋转角度
                formatter: '{value}',
                textStyle: {
                    fontSize: '9',
                    fontFamily: '微软雅黑'
                }
            }
        }],
        grid: {
            x: '39px',
            y: '40px',
            width: '289px',
            height: '110px'
        },
        series: []
    };
    return option;
}