	var taskStatusList = {'00' : '未提交','01' : '已提交未校验','02' : '校验未通过','03' : '校验通过','13' :'已提交院级审核','22' :'院级未通过，校验未通过','21' :'院级未通过，未校验',
				'23' :'院级未通过','33':'已提交校级审核','43':'校级未通过','42':'校级未通过，校验未通过','41':'校级未通过，未校验','53':'校级已通过','63':'已提交上报平台'
	};
	
	var sContentPath = getContentPath();
	var request=GetRequest();
	var report_Id =0;
	var choose;
	var sysid;
	var dateYear;
	var taskInfo;
	var syscore;
	var specialtyId;
	var zylxId = getQueryString('zylxId');
	var zyId = getQueryString('zyId');
	var ranks;
	var wpInfo = [];

	var ScoreSum=0;
	//加载事件
	$(function(){
		specialtyId = getQueryString('specialtyId');
		dateYear=request.dateYear;
		getAllWangping();
		getAllReport();
		getAllData();
		
	});
	
	function getAllData(){
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoWangPingController/getAllData.do",
			async:false,
			type:'POST',
			data:{
				"specialtyId":specialtyId
			},
			success:function(data){
				var datas = eval("("+data+")");
				if(datas!=""&&datas!=null){
					is_Engineering = datas[0].is_engineering;
					load();
				}
			}
		});
	}
	
	function getAllWangping(){
		$.ajax({
			//url: "/audit/AssessmentSpecialtyInfoWangPingController/findAllWangpingInfo.do",
			url: "/audit/AssessmentSpecialtyInfoXueYuanController/selectAllrecodrd.do",
			async:true,
			type:'POST',
			data:{
				"specialtyId":specialtyId,
				"ITEM":0,
				"SYEAR":dateYear
			},
			success:function(data){
				var datas = eval("("+data+")");
				//alert("datas:"+datas);
				wpInfo = datas;
			//	alert("wpInfo:"+wpInfo);
			}
		});
	}
	
	function load(){
		var parentData;
		$.ajax({
			url: "/audit/asAssessReport/getSystemByType.do",
			data:{
				"id":is_Engineering,
				"syear":dateYear
			},
			async:false,
			type:'POST',
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
				if(datas!="" && datas!=null){
					parentData = datas;
				}
			}
		});
		$.ajax({
			url: "/audit/asAssessReport/getSystemSonByType.do",
			data:{
				"id":is_Engineering,
				"syear":dateYear
			},
			async:false,
			type:'POST',
			dataType:'json',
			success:function(data){
				array = [];
				var datas = eval("("+data+")");
				if(datas!="" && datas!=null){
					if(parentData!=null && parentData!=""){
						for ( var i = 0; i < parentData.length; i++) {
							var obj =new Object();
							obj.id = parentData[i].id;
							obj.name = parentData[i].system_name;
							var childrens = [];
							for ( var j = 0; j < datas.length; j++) {
								if(datas[j].parent_id == parentData[i].id){
									childrens.push({id:datas[j].id,name:datas[j].system_name,url:datas[j].id+"x"})
								}
							}
							if(childrens.length==0){
								obj.url=parentData[i].id;
							}else{
								obj.children = childrens;	
							}
							array.push(obj);
						}
					}
				}
			}
		});
		
/*		$.ajax({
			url: sContentPath+"/asAssessReport/getSystemThreeByType.do",
			data:{
				"id":is_Engineering
			},
			async:false,
			type:'POST',
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
			   if(datas!=null && datas.length>0){
				   var obj;
				   //一级
				   $.each(array,function(index,dom){
					   //二级
					   if(dom.children!=null && dom.children!=""){
						   $.each(dom.children,function(int,doc){
							   array3=[];
							   //三级
							   for ( var i = 0; i < datas.length; i++) {
								   obj = new Object();
								   obj.id = datas[i].id;
								   obj.name = datas[i].system_name;
								   obj.url = datas[i].id+"x";
								   if(doc.id==datas[i].parent_id){
									   array3.push(obj);
								   }
							   }
							   doc.children = array3;
						   })
					   }
				   })	
			   }
//			   ASDSReportInit();
			}
		});*/
		showAllTextPreview();
		
		//查询总意见
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoXueYuanController/selectRecords.do",
			async:false,
			type:"POST",
			data:{
				//"sysid":id,
				"item":0,
				"syear":dateYear,
				"specialtyId":specialtyId
			},
			success:function(data){
				var datas=eval("("+data+")");
				if(datas!=null && datas.length>0){
					$("#zongyijian").val(datas[0].kc_suggestions);
					//alert(datas[0].ranks);
					//加载总意见
					$("input:radio[value='"+datas[0].ranks+"']").attr('checked','true');
				}
			},error:function(errmesge){
				alert("没有数据！");
			}
		});
	}
	
	function save1(){
		//alert(dateYear+"---"+specialtyId);
		var zongyijian=$("#zongyijian").val();id="rankss"
		//alert($('#rankss input[name="ranks"]:checked ').val());
		//模块添加或修改
		$.ajax({
			url: "/audit/AssessmentSpecialtyInfoXueYuanController/insertRecord.do",
			async:false,
			type:"POST",
			data:{
				//"sysid":id,
				"time":new Date().toLocaleDateString(),
				//"content":$("#xcmessge").val(),
				"item":0, 	//模块ID
				"syear":dateYear,
				"type":2,
				"specialtyId":specialtyId,
				"suggestions":$("#zongyijian").val(),
				"ranks":$('#rankss input[name="ranks"]:checked ').val()
			},
			success:function(data){
				alert("操作成功");
				$("#zongyijian").val($("#zongyijian").val());
			},error:function(errmesge){
				alert(errmesge);
			}
		});
	}
	
	function showAllTextPreview(){
		var wpStr = "";
		var str = "";
		var a = "";
		$.each(array,function(i,obj){
			if((i+1)==1) a = "一、";
			if((i+1)==2) a = "二、";
			if((i+1)==3) a = "三、";
			if((i+1)==4) a = "四、";
			if((i+1)==5) a = "五、";
			if((i+1)==6) a = "六、";
			if((i+1)==7) a = "七、";
			if((i+1)==8) a = "八、";
			if((i+1)==9) a = "九、";
			if((i+1)==10) a = "十、";
			wpStr = "没有意见";
	
				$.each(wpInfo,function(m,wpObj){
					if(obj.id == wpObj.sysid){
						wpStr = wpObj.comment_content;
						if(wpStr==undefined || wpStr=="") wpStr="没有意见"
							return false;
						}
				});

			
			//一级菜单
			str += "<div style='padding-top:20px'> <font style='color:#C73D3C;font-size:22px;font-weight:bold;'>" + a + obj.name + "</font> <div style='width:100%;height:0px;border:1px solid #C73D3C;'></div> <br>";
			
			// 二级菜单
			if(obj.children != null && obj.children != undefined && obj.children.length > 0){
				str += "<div id='buttons'>&nbsp;&nbsp;&nbsp;<img src='/audit/page/wangping/staticPage/img/files.png'>&nbsp;&nbsp;<font style='font-weight:bold;font-size:16px;'>" + obj.name + "详情</font><table style='width:100%;margin-top:10px;'>";
				$.each(obj.children,function(j,obj2){
					//查询每个节点的分数
					$.ajax({
						url: "/audit/AssessmentSpecialtyInfoXueYuanController/getAS_ASSESS_INDEX_FORMULA1.do",
						type:'POST',
						async:false,
						data:{
							'dateYear':dateYear,
							'Sysid':obj.children[j].id,
							'specialtyId':specialtyId
						},
						success : function(oData) {
							var _syscore1=oData;
							if(_syscore1!=null||_syscore1!=""){
								var scores=_syscore1*1.0;
								ScoreSum+=scores;
							}
						},
						error : function(oData) {
							lzrWindow.alert("量化数据加载失败");
						}
					});
					if(wpInfo.length<1){
						wpStr="没有意见";
						ranks="未评级";
					}
					$.each(wpInfo,function(m,wpObj){
						if(obj2.id == wpObj.sysid ){
							wpStr = wpObj.kc_content;
							//alert( wpObj.kc_content+"--"+wpObj.ranks); 
							if(wpObj.ranks!=undefined)
								ranks=wpObj.ranks;
							else
								ranks="未评级";
							return false;
						}else{
							wpStr = "没有意见";
							ranks="未评级";
						}
					})
					if(obj2!=undefined){
						str += "<tr><td style='width:5%'></td>" +
								"<td width='20%' height='50px'><img src='/audit/page/wangping/staticPage/img/file.png'>&nbsp;&nbsp;<font style='font-size:14px;font-weight:bold'>" + (j+1) + "." + obj2.name + "&nbsp;&nbsp;评分等级(&nbsp;"+ranks+"&nbsp;)</font></td>" +
								"<td align='left'><input style='border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:40px;width:100%;margin-left:50px;' readonly='readonly' value='"+wpStr+"'> </td></tr>";
						// 三级菜单
						if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
							$.each(obj2.children,function(k,obj3){
								if(obj3!=undefined){
									str += (k+1) + "." + obj3.name + "<br>";
								}
							});
						}
					}
				});
			}else{
				str += "<input style='border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:60px;width:100%;font-size:15px' readonly='readonly' value='"+wpStr+"'>"
			}
			str += "</table> </div></div>";
		});
		
//		var str = "";
//		$.each(array,function(index,dom){
//			str = "";
//			$.each(array.children,function(){
//				
//			})
//		})
		if(ScoreSum>=90&&ScoreSum<=100){
			$("#socre").text("(系统评分等级为A)");
		}else if(ScoreSum>=80&&ScoreSum<90){
			$("#socre").text("(系统评分等级为B)");
		}
		else if(ScoreSum>=60&&ScoreSum<70){
			$("#socre").text("(系统评分等级为C)");
		}
		else if(ScoreSum<60){
			$("#socre").text("(系统评分等级为D)");
		}
		$("#showContext").html(str);
	}

	
	//获取课程
	function getAllReport(){
		$.ajax({
			url: sContentPath+"/asAssessReport/getAllData.do",
			async:false,
			type:'POST',
			data:{
				"specialtyId":specialtyId
			},
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
				if(datas!="" && datas != null){
					$("#specialty_name").html(datas[0].specialty_name);
				}
			}
		});
	}



	//文本框失焦聚焦事件
	function checkGrade(){
		if(!($("#grade").val()=="A" || $("#grade").val()=="a" || $("#grade").val()=="C" || $("#grade").val()=="c")){
			alert("请输入正确的自评等级！只能输入A或C等级");
		}
	}
	
	function checkScore(){//syscore
		var score = $("#score").val();
		if(parseInt(score) > parseInt(syscore)){
			alert("输入分数必须小于总分值！");
		}
	}
	
	
	//菜单对象
	var array=[{id:"1",name:"一、学校概要数据", children:[
        	             {id:"1",name:"  学位点概况",url:"ASDS_tableG-2"},
        	             {id:"1",name:"学校《本科教学质量报告》支撑数据指标比较",url:"ASDS_tableG-3"},]
				},
	           /* 主表 */
	           {id:"1",name:"1. 定位与目标",children:[
						{id:"1",name:"1.2 校领导年龄和学位结构",url:"ASDS_table1-2"},
						{id:"1",name:"1.3 校级教学管理人员结构",url:"ASDS_table1-3"},
						{id:"1",name:"1.4 教育教学改革与成果",url:"ASDS_table1-4"},
						{id:"1",name:"1.5 专业布局概览",url:"ASDS_table1-5"},]
	           },
	           {id:"2",name:"2. 教师队伍",children:[
	        	             {id:"1",name:"2.1 学校生师比及教师情况",url:"ASDS_table2-1"},
	        	             {id:"1",name:"2.2  教师队伍结构",url:"ASDS_table2-2"},
	        	             {id:"1",name:"2.3 各教学单位教师与本科生情况",url:"ASDS_table2-3"},
	        	             {id:"1",name:"2.4 主讲教师本科授课情况",url:"ASDS_table2-4"},
	        	             {id:"1",name:"2.5 教授、副教授讲授本科课程比例",url:"ASDS_table2-5"},
	        	             {id:"1",name:"2.6 教师培养培训情况",url:"ASDS_table2-6"},
	        	             {id:"1",name:"2.7 专业带头人情况",url:"ASDS_table2-7"},
	        	             {id:"1",name:"2.8 学校实验系列人员结构",url:"ASDS_table2-8"},
	        	             {id:"1",name:"2.9 教师教育教学改革与成果",url:"ASDS_table2-9"}]
	           },
	           {id:"3",name:"3. 教学资源",children:[
	        	           {id:"1",name:"3.1 教学经费投入情况",url:"ASDS_table3-1"},
	        	           {id:"1",name:"3.2 教学基本设施情况",children:[
	                                               {name:"3.2.1 教学行政用房情况",url:"ASDS_table3-2-1"},
                                                   {name:"3.2.2 教学、科研仪器情况",url:"ASDS_table3-2-2"},
                                                   {name:"3.2.3 本科实验、实习、实训场所情况",url:"ASDS_table3-2-3"},
                                                   {name:"3.2.4 校园网、图书情况",url:"ASDS_table3-2-4"}]},
	                       {id:"1",name:"3.3 专业概况预览",url:"ASDS_table3-3"},
	                       {id:"1",name:"3.4 优势专业概览",url:"ASDS_table3-4"},
	                       {id:"1",name:"3.5 新设专业概览",url:"ASDS_table3-5"},
	                       {id:"1",name:"3.6 各教学单位课程开设情况",url:"ASDS_table3-6"},
	                       {id:"1",name:"3.7 各专业实践教学情况",url:"ASDS_table3-7"},
	                       {id:"1",name:"3.8 全校课程开设情况",url:"ASDS_table3-8"},
	                       {id:"1",name:"3.9 精品（优秀）课程（群）建设",url:"ASDS_table3-9"},
	                       {id:"1",name:"3.10 合作办学情况",url:"ASDS_table3-10"}]
	           },
	           {id:"4",name:"4. 培养过程",children:[
	        	             {id:"1",name:"4.1 专业培养课程学分结构",url:"ASDS_table4-1"},
	        	             {id:"1",name:"4.2 人才培养模式创新区情况",url:"ASDS_table4-2"},
	        	             {id:"1",name:"4.3 实验教学示范中心",url:"ASDS_table4-3"},
	        	             {id:"1",name:"4.4 毕业综合训练情况",url:"ASDS_table4-4"},
	        	             {id:"1",name:"4.5 校园文化活动情况",url:"ASDS_table4-5"},
	        	             {id:"1",name:"4.6 学生社团情况",url:"ASDS_table4-6"},
	        	             {id:"1",name:"4.7 学生国际交流情况",url:"ASDS_table4-7"},
	        	             {id:"1",name:"4.8 各教学单位教育教学研究与改革情况",url:"ASDS_table4-8"}]
	           },
	           {id:"5",name:"5. 学生发展",children:[
	        	             {id:"1",name:"5.1 生源情况",url:"ASDS_table5-1"},
	        	             {id:"1",name:"5.2 各专业（大类）本科生招生报到情况",url:"ASDS_table5-2"},
	        	             {id:"1",name:"5.3 学生管理人员结构",url:"ASDS_table5-3"},
	        	             {id:"1",name:"5.4 各教学单位学生管理人员与学生情况",url:"ASDS_table5-4"},
	        	             {id:"1",name:"5.5 本科生奖贷补情况",url:"ASDS_table5-5"},
	        	             {id:"1",name:"5.6 学生发展情况",url:"ASDS_table5-6"},
	        	             {id:"1",name:"5.7 各专业毕业生情况",url:"ASDS_table5-7"},
	        	             {id:"1",name:"5.8 毕业生就业去向分布情况",url:"ASDS_table5-8"}]
	           },
	           {id:"6",name:"6. 质量保障",children:[
	            	         {id:"1",name:"6.1 评教信息",url:"ASDS_table6-1"},
	            	         {id:"1",name:"6.2 教学质量管理队伍结构",url:"ASDS_table6-2"},
	            	         {id:"1",name:"6.3 教学管理队伍教学研究情况",url:"ASDS_table6-3"}]
	           },
	           {id:"7",name:"7. 详细数据附表",children:[
	        	             {id:"1",name:"7.1 校领导情况",url:"ASDS_tableF-1"},
	        	             {id:"1",name:"7.2 校级教学管理人员基本信息",url:"ASDS_tableF-2"},
	        	             {id:"1",name:"7.3 各教学单位专任教师结构",url:"ASDS_tableF-3"},
	        	             {id:"1",name:"7.4 各教学单位专业带头人情况",url:"ASDS_tableF-4"},
	        	             {id:"1",name:"7.5 各教学单位实验系列职称人员结构",url:"ASDS_tableF-5"},
	        	             {id:"1",name:"7.6 各专业授课教师结构",url:"ASDS_tableF-6"},
	        	             {id:"1",name:"7.7 各专业授课教师授课情况",url:"ASDS_tableF-7"},
	        	             {id:"1",name:"7.8 各专业教师、学生情况概览",url:"ASDS_tableF-8"},
	        	             {id:"1",name:"7.9 校内实验实习实训场所情况",url:"ASDS_tableF-9"},
	        	             {id:"1",name:"7.10 各专业实践教学情况",url:"ASDS_tableF-10"},
	        	             {id:"1",name:"7.11 各专业教学情况一览表",url:"ASDS_tableF-11"},
	        	             {id:"1",name:"7.12 毕业综合训练情况",url:"ASDS_tableF-12"},
	        	             {id:"1",name:"7.13 各专业（大类）本科生招生情况",url:"ASDS_tableF-13"},
	        	             {id:"1",name:"7.14 各专业毕业生情况",url:"ASDS_tableF-14"}]
	           },
	           {id:"8",name:"8. 状态分析报告", children:[
	            	         {id:"1",name:"8.1 状态分析报告(new)",url:"ASDS_table_main"},
	            	         {id:"1",name:"8.2 状态分析报告记录",url:"ASDS_table_history"}]
	           }

	];
	
	
	function getContentPath(){
		var pathName = document.location.pathname;
		var index = pathName.substr(1).indexOf("/");
		var result = pathName.substr(0, index + 1);
		return result;
		
	}
	
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); return null; 
	}
	/**
	 * 拿到url上面的参数
	 * @returns {Object}
	 */
	function GetRequest() { 
		var url = window.location.search; //获取url中"?"符后的字串 
		var theRequest = new Object(); 
		if (url.indexOf("?") != -1) { 
			var str = url.substr(1); 
			strs = str.split("&"); 
			for(var i = 0; i < strs.length; i ++) { 
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
			} 
		}
		return theRequest; 
	}
	
	var specialtyName;
	var xckczzId;
	//判断是组员还是组长
	function booxckc(id){
		//根据专业ID查询专业名称
		$.ajax({
			url:"/audit/AssessmentSpecialtyInfoXueYuanController/selectSpecialtyId.do",
			data:{"id":specialtyId},
			async:false,
			type:"POST",
			success:function(data){
				var result=eval("("+data+")");
				specialtyName=result[0].SPECIALTY_NAME;
				}
		});
		$.ajax({
			  url:"/audit/assessmentSpecialtyInfoController/findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor.do",
			  type:"post",
			  dataType:"json",
			  async:false,
			  data:{"searchvalue":specialtyName,"pgid":zylxId},
			  success:function(data){
				  var result= eval("("+data+")");
				  xckczzId=result.Rows[0].xianChangKaoChaZuZhangId.replace(",","");
				  }
			  });
		if(id==xckczzId)
			return true;
		return false;
	}
