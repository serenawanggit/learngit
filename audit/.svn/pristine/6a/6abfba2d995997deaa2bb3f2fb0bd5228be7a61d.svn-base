<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>TQC教学质量中心</title>
<link rel="stylesheet" href="<%=basePath%>/css/easydialog.css" type="text/css">

<%--<link rel="stylesheet" href="<%=basePath%>/css/dialog/dialog_style.css"
	type="text/css">

--%>
<link rel="stylesheet"
	href="<%=basePath%>/css/zTreeStyle/zTreeStyle.css" type="text/css">
<script type="text/javascript" src="<%=basePath%>/js/jquery.js"></script>
<script type="text/javascript"
	src="<%=basePath%>/js/ztree/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript"
	src="<%=basePath%>/js/ztree/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/easydialog.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/echarts-all.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/popups.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<SCRIPT type="text/javascript">
var option = {
	    title : {
	        text: '某地区蒸发量和降水量',
	        subtext: '纯属虚构'
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
	     


var myChart = [];

function ts(){
	kkk();
	sctp();
}

function kkk(){
	for ( var i = 0; i < 2; i++) {
		var chartDiv = document.getElementById("div"+i);
		myChart[i] = echarts.init(chartDiv);
		myChart[i].setOption(option);
	}
}

function sctp(){
	for( var i = 0; i < myChart.length; i++){
		var data = myChart[i].getDataURL("png");
		 data =encodeURIComponent(data);
		 var url = "/audit/viewPic/createImage.do";
		 $.ajax({
		 	url:url,
		 	async: false,
		 	data:{"image":data},
		 	type:'POST',
		 	success:function(data){
		 		alert(data);
		 	}
		 });
		
	}
}

var option = {
		animation:false,//关闭渲染
	    title : {
	        text: '某地区蒸发量和降水量',
	        subtext: '纯属虚构'
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
	     
</SCRIPT>
<SCRIPT type="text/javascript">
		
		var setting = {
			view: {
				showIcon: true
			},
			check: {
				enable: false
			},
			data: {
				simpleData: {
					enable: true
				}
			}
		};

		var zNodes =[
			{ id:1, pId:0, name:"随意勾选 1", open:true,icon:'../../css/zTreeStyle/img/diy/green.png'},
			{ id:11, pId:1, name:"随意勾选 1-1", open:true,icon:'../../css/zTreeStyle/img/diy/green.png'},
			{ id:111, pId:11, name:"无 checkbox 1-1-1", nocheck:true,open:true,icon:'../../css/zTreeStyle/img/diy/p1.png'},
			{ id:112, pId:11, name:"随意勾选 1-1-2",open:true,icon:'../../css/zTreeStyle/img/diy/p1.png'},
			{ id:12, pId:1, name:"无 checkbox 1-2", nocheck:true, open:true},
			{ id:121, pId:12, name:"无 checkbox 1-2-1"},
			{ id:122, pId:12, name:"无 checkbox 1-2-2"},
			{ id:2, pId:0, name:"随意勾选 2", checked:true, open:true},
			{ id:21, pId:2, name:"随意勾选 2-1"},
			{ id:22, pId:2, name:"随意勾选 2-2", open:true},
			{ id:221, pId:22, name:"随意勾选 2-2-1", checked:true},
			{ id:222, pId:22, name:"随意勾选 2-2-2"},
			{ id:23, pId:2, name:"随意勾选 2-3"}
		];

		function nocheckNode(e) {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			nocheck = e.data.nocheck,
			nodes = zTree.getSelectedNodes();
			if (nodes.length == 0) {
				alert("请先选择一个节点");
			}

			for (var i=0, l=nodes.length; i<l; i++) {
				nodes[i].nocheck = nocheck;
				zTree.updateNode(nodes[i]);
			}
			
			var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
			var nodes = treeObj.getNodes();
			if (nodes.length>0) {
				treeObj.selectNode(nodes[0]);
			}

		}

		$(document).ready(function(){
			//$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			$("#nocheckTrue").bind("click", {nocheck: true}, nocheckNode);
			$("#nocheckFalse").bind("click", {nocheck: false}, nocheckNode);
			
			
			validateLogin();
		});
		
		function clickan(){
			var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
			var nodes = treeObj.getCheckedNodes(true);
			alert(nodes.length);
		}
		
		
		function onCheck(e, treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			nodes = zTree.getCheckedNodes(true),
			v = "";
			var myID = "";
			var depId="";
			for (var i=0, l=nodes.length; i<l; i++) {
				v += nodes[i].name + ",";
				
				if(nodes[i].checked){
					myID += nodes[i].id+',';
					depId += nodes[i].depId+',';
				}
				
			}
			
			if (v.length > 0 ) myID = myID.substring(0, myID.length-1);
			if (v.length > 0 ) depId = depId.substring(0, depId.length-1);
			if($("#deptmentIdstr").length>0){
				$("#deptmentIdstr").val(depId);
			}
			if($("#parentNo").length>0){
				$("#parentNo").val(myID);
			}
			
			if (v.length > 0 ) v = v.substring(0, v.length-1);

			var cityObj = $("#citySel");
			cityObj.attr("value", v);
		}
	</SCRIPT>
	
</head>
<body scroll="no">

	<div class="zTreeDemoBackground left" style='border:1px red solid;'>
		<ul id="treeDemo1" class="ztree"></ul>
	</div>
	
	
	<input type="button" onclick="clickan();" value="点击" />
	<input type="hidden" id='gcPid' value='' />

	<input type="button" onclick="tck();" value="弹出框" />
	
	<button id="open" onclick="ts();">open1</button>
	
	<div id="div0" class="zTreeDemoBackground left" style='border:1px red solid;width:300px;height:300px;'>
	</div>
	<div id="div1" class="zTreeDemoBackground left" style='border:1px red solid;width:300px;height:300px;'>
	</div>
</body>
</html>