
var pieoption = {
		animation:false,
		    title : {
		        text: '',//department,
		        x:'right'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{b} <br/>{a} : {c}"
		    },
		    legend: {
		        orient : 'vertical',
		        x : 'left',
		        data:[]
		    },
		    
		    calculable : true,
		   
		    series : [
		        {
		            name:'',
		            type:'pie',
		            radius : '55%',
		           center: ['50%', '50%'],
		            itemStyle: {
		                normal: {
		                    label: {
		                        show: false
		                    },
		        			labelLine:{
		        				show:false
		        			}
		                } ,
		                emphasis: {
		                    label: {
		                        show: false
		                    }
		                }
		            },
		            data:[
		                {value:335,name:'2012'},
		                {value:310,name:'2013'}
		            ]
		        }
		    ]
		};

	                    


var option = {
    title : {
        text: '',
        subtext: ''
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量']
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
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint : {
                data : [
                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};

var thisarr = new Array();
function createpic(){
	var obj = $("input[name=datatab]:checked",parent.document);
	for(var i = 0; i < obj.length; i++){
		var type = $("#"+$(obj[i]).val()+"select",parent.document).val();
		//判断是否未选择生成类型
		if(type == "0"){
			$("#" + $(obj[i]).val() + "warn",parent.document).show();
			return;
		}else{
			$("#" + $(obj[i]).val() + "warn",parent.document).hide();
		}
		//放进array
		thisarr.push($(obj[i]).val()+"-"+type);
	}
	
	for(var t = 0; t < thisarr.length; t++){
		var rtid = thisarr[t].split("-")[0];
		var type = thisarr[t].split("-")[1];
		var url =  "/TQCC/viewPic/saveVp.do?rtid=9";
		$.ajax({
			async : false,
			url:url,
			type:'get',
			dataType:'json',
			error:function(){
				alert("请求失败，请检查程序本身");
			},
			success:function(data){
				//获得json对象（内容为map)
				var o = eval('(' + data + ')').zb;
				//遍历
				for(var index in o){
					$("#md", parent.document).empty();
					var str = "";
					str += "<table style='width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>";
					str += "<tr style='height:25px;background-image:url(../../images/showtitlebk800.png);'>";
					str += "<td align='left'><span style='color:#FFF;font-size:12px;padding-left:10px;'></span></td>";
					str += "<td align='right'><a href='#' style='color:#FFF;text-decoration:none;font-size:12px;' onclick='closeYS();'>";
					str += "<img src='../images/alertimg/alertclose.png' border='0' style='vertical-align:middle;'></a>";
					str += "</td></tr>";
					str += "<tr><td colspan='2' style='background-color:#FFFFFF;height:350px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>";
					str += "<div style='width:100%;height:85%;padding-left:15px;'>";
					str += "<div style='width:85%;height:100%;padding-top:10px;' name='asd' id='tbarea'>";
					str += "</div>";
					str += "<div style='width:100%;height:10%;font-size:12px;padding-left:200px;padding-top:5px;' class='buttom_tips01'>";
					str += "<input type='hidden' value='' id='hd' />";
					str += "<a onclick='rightbox.window.scpic();return false' href = '#' style = 'text-decoration: none; text-align:center;height:30px; line-height:30px; color:#FFF;background:#2e8ae6;-webkit-border-radius: 3px;-moz-border-radius: 3px; border-radius: 3px;'>取消</a>";
					str += "</div></td></tr>";
					str += "</table>";
					$("#md", parent.document).css("top", "30px");
					$("#md", parent.document).css("left", "300px");
					$("#md", parent.document).css("width", "700px");
					$("#md", parent.document).append(str);
					$("body", parent.document).append("<div id='mask'></div>");
					$("#mask", parent.document).addClass("mask").fadeIn("slow");
					$("#md", parent.document).fadeIn("slow");
					//index 为map的key
					//olist 为map key对应的数据
					var olist = o[index];
					var time = new Array();
					var valuearr = new Array();
					var namearr = new Array();
					for(var i = 0; i < olist.length; i++){
						namearr.push(olist[i].name);
						time.push(olist[i].year);
						valuearr.push({value: olist[i].zhi , name: olist[i].year});
					}
					
					pieoption.legend.data = getArray(time);
					pieoption.series[0].name = getArray(namearr);
					pieoption.series[0].data = valuearr;
					//1.生成图表
					var chartDIV = parent.document.getElementById("tbarea");
					var mychartm = echarts.init(chartDIV);
					mychartm.setOption(pieoption);
					//2.生成图片
					var picdata = mychartm.getDataURL("png");
					picdata =encodeURIComponent(picdata);
					var url = "/audit/viewPic/createImage.do";
					 $.ajax({
					 	url:url,
					 	data:{"image":picdata},
					 	type:'post',
					 	success:function(data){
					 		//mychartm.clear();
					 	}
					 });
				}
				
			}
		});
	}
	parent.closeYS();
}

function scpic(){
	var picdata = $("#hd",parent.document).val();
	picdata =encodeURIComponent(picdata);
	var url = "/audit/viewPic/createImage.do";
	 $.ajax({
		async:false,
	 	url:url,
	 	data:{"image":picdata},
	 	type:'post',
	 	success:function(data){
	 		//mychartm.clear();
	 	}
	 });
}

//数组去重复
function getArray(a) {
	var hash = {}, len = a.length, result = [];
	for ( var i = 0; i < len; i++) {
		if (!hash[a[i]]) {
			hash[a[i]] = true;
			result.push(a[i]);
		}
	}
	return result;
}
