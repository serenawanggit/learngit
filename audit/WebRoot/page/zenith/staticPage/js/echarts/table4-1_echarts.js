		// 图形对象
		var table4_1_chart1;
		var table4_1_chart2;

		jQuery(function(){
			table4_1_chart2 = echarts.init(document.getElementById("table4_1_chart2"));
			init();// echarts控件初始化后初始化页面数据
		});

		//图形对象
		var option2 = {
				title : {
				//text: '专任教师职称分布变化图（百分比）',
				},
				tooltip : {
					trigger : 'axis'
				},
				legend : {
					data : [ '正高级', '副高级', '中级', '初级' ]
				},
				/*  toolbox: {
				     show : true,
				     feature : {
				         mark : {show: true},
				         dataView : {show: true, readOnly: false},
				         magicType : {show: true, type: ['line', 'bar']},
				         restore : {show: true},
				         saveAsImage : {show: true}
				     }
				 }, */
				calculable : true,
				xAxis : [ {
					type : 'category',
					data : [/* '2008年','2009年','2010年','2011年','2012年','2013年' */]
				} ],
				yAxis : [ {
					type : 'value'
				} ],
				series : [ {
					name : '正高级',
					type : 'bar',
					data : [ 2.0, 4.9, 7.0, 23.2, 22.3, 19.3 ],
					markPoint : {
						data : [ {
							type : 'max',
							name : '最大值'
						}, {
							type : 'min',
							name : '最小值'
						} ]
					},
					markLine : {
						data : [ {
							type : 'average',
							name : '平均值'
						} ]
					}
				}, {
					name : '副高级',
					type : 'bar',
					data : [ 2.6, 5.9, 9.0, 26.4, 22.3, 19.3 ],
					markPoint : {
						data : [ {
							type : 'max',
							name : '最大值'
						}, {
							type : 'min',
							name : '最小值'
						} ]
					},
					markLine : {
						data : [ {
							type : 'average',
							name : '平均值'
						} ]
					}
				}, {
					name : '中级',
					type : 'bar',
					data : [ 2.6, 5.9, 9.0, 26.4, 22.3, 19.3 ],
					markPoint : {
						data : [ {
							type : 'max',
							name : '最大值'
						}, {
							type : 'min',
							name : '最小值'
						} ]
					},
					markLine : {
						data : [ {
							type : 'average',
							name : '平均值'
						} ]
					}
				}, {
					name : '初级',
					type : 'bar',
					data : [ 2.6, 5.9, 9.0, 26.4, 22.3, 19.3 ],
					markPoint : {
						data : [ {
							type : 'max',
							name : '最大值'
						}, {
							type : 'min',
							name : '最小值'
						} ]
					},
					markLine : {
						data : [ {
							type : 'average',
							name : '平均值'
						} ]
					}
				} ]
			};

		function init() {
			//初始化年份
			formatStartYear("startYear");
			formatEndYear("endYear");
			jQuery(".chocieYear ul li select").change(
			function() {
				loadTable2(jQuery(".chocieYear ul li select:eq(1)").val(),jQuery(".chocieYear ul li select:eq(0)").val());
			});
			/* table1 */
			loadTable1();
			//触发change事件
			jQuery(".chocieYear ul li select:eq(0)").change();
		}
		function loadTable1() {
			jQuery.ajax({
				url : "/CHART/qualityReport/qualityReport_getList.htm",
				async : false,
				data : {
					key : "table4-1_sql1"
				},
				type : "GET",
				success : function(data) {
					var result = eval("(" + data + ")");
					var table1 = jQuery("table4-1 tbody:eq(0)");
					var str = "";
					jQuery.each(result, function(i, element) {
						str += "<tr>";
						str += "<td>" + isNull(element[0])+ "</td>";
						str += "<td>" + isNull(element[1]) + "</td>";
						str += "<td>" + isNull(element[2]) + "</td>";
						str += "<td>" + percent(element[3]) + "%</td>";
						str += "<td>" + isNull(element[4]) + "</td>";
						str += "<td>" + percent(element[5]) + "%</td>";
						str += "<td>" + isNull(element[6]) + "</td>";
						str += "<td>" + percent(element[7]) + "%</td>";
						str += "<td>" + isNull(element[8]) + "</td>";
						str += "<td>" + percent(element[9]) + "%</td>";
						str += "</tr>";
					});
					table1.html(str);
				}
			});
		}

		function loadTable2(startYear, endYear) {
			jQuery.ajax({
				url :"/CHART/qualityReport/qualityReport_getListByYear.htm",
				async : false,
				data : {
					beginYear : startYear,
					endYear : endYear,
					key : "table4-1_sql2"
				},
				type : "GET",
				success : function(data) {
					var result = eval("(" + data + ")");
					var table2 = jQuery("table4-1-CC tbody:eq(1)");
					var str = "";
					if(result.length>0){
						jQuery("#table4_1_chart1").show();
						var xData = [];
						var aData = [];
						var bData = [];
						var cData = [];
						var dData = [];
	
						option2.xAxis[0].data = [];
						option2.series[0].data = [];
						option2.series[1].data = [];
						option2.series[2].data = [];
						option2.series[3].data = [];
	
						jQuery.each(result, function(i, element) {
							str += "<tr>";
	
							str += "<td>" + isNull(element[0]) + "</td>";
							str += "<td>" + isNull(element[2]) + "</td>";
							str += "<td>" + isNull(element[3]) + "</td>";
							str += "<td>" + isNull(element[4]) + "</td>";
							str += "<td>" + isNull(element[5]) + "</td>";
							str += "<td>" + isNull(element[1])+ "</td>";
							str += "</tr>";
	
							xData.push(element[0] + "年");
							aData.push(element[2]);
							bData.push(element[3]);
							cData.push(element[4]);
							dData.push(element[5]);
	
						});
						option2.xAxis[0].data = xData;
						option2.series[0].data = aData;
						option2.series[1].data = bData;
						option2.series[2].data = cData;
						option2.series[3].data = dData;
						table2.html(str);
						table4_1_chart2.setOption(option2);
					}else{
						str+="<tr style='color:red;text-align:center;'><td colspan='6'><h4>该年份无数据。<h4/><td/></tr>";
						table2.html(str);
						jQuery("#table4_1_chart2").hide();
					}
				}
			});
		}
