var zyfxbg;
var hzpgbg;
var templist;

var collegeCode;

$(function(){
	validateLogin();
	// 初始化
	divCss();
	arrowInit();
	loadingContent();
	clickTab(0);
	//getAllData();

//	eventBind();
	zyfxbg=[
            
			   {id:"1",name:"专业基本信息",
				   children:[
//				             {id:"1",name:"1.1 办学指标思想",url:"asds_error"},
				             {id:"1",name:"专业基本信息",url:"ProfessionalReport/zy_table0-0.jsp"},
				           /*  {id:"1",name:"1.6 教学单位学科专业概览",url:"ASDS_table1-6.jsp"},*/
				             ]
			   },
		   	/* 主表 */
		   {id:"1",name:"一、学生",
			   children:[
//			             {id:"1",name:"1.1 办学指标思想",url:"asds_error.jsp"},
			             /*{id:"1",name:"1.1 本专业在校生数",url:"ProfessionalReport/zy_table1-1.jsp"},
			             {id:"1",name:"1.2 近三年本专业招生情况",url:"ProfessionalReport/zy_table1-2.jsp"},
			             {id:"1",name:"1.3 近三年毕业生去向分布情况",url:"ProfessionalReport/zy_table1-3.jsp"},
			             {id:"1",name:"1.4 近三年本专业学生转入转出情况",url:"ProfessionalReport/zy_table1-4.jsp"},*/
			           /*  {id:"1",name:"1.6 教学单位学科专业概览",url:"ProfessionalReport/ASDS_table1-6.jsp"},*/
						 {id:"1",name:"1.1本专业在校学生数",url:"ProfessionalReport/zy_table1-1.jsp?code="+collegeCode},
						 {id:"1",name:"1.2 专业招生报到情况",url:"ProfessionalReport/zy_table1-2.jsp?code="+collegeCode},
						 {id:"1",name:"1.3 本专业学生转入及转出情况",url:"ProfessionalReport/zy_table1-3.jsp?code="+collegeCode},
						 {id:"1",name:"1.4 近三年毕业生趋向分布情况",url:"ProfessionalReport/zy_table1-4.jsp?code="+collegeCode},
						 {id:"1",name:"1.5 学生毕业就业情况",url:"ProfessionalReport/zy_table1-1.jsp?code="+collegeCode},
			             {id:"1",name:"1.6 学生参与教师科研项目情况",url:"ProfessionalReport/zy_table1-2.jsp?code="+collegeCode},
			             {id:"1",name:"1.7 学生学习成效",url:"ProfessionalReport/zy_table1-3.jsp?code="+collegeCode},
			             {id:"1",name:"1.8 本专业本科生交流情况",url:"ProfessionalReport/zy_table1-3.jsp?code="+collegeCode},
						 {id:"1",name:"1.9 学生社团",url:"ProfessionalReport/zy_table1-1.jsp?code="+collegeCode},
			             {id:"1",name:"1.10  学生异动情况",url:"ProfessionalReport/zy_table1-10.jsp?code="+collegeCode}
			             ]
		   },
		   {id:"2",name:"二、师资队伍",
			   children:[
//			             {id:"1",name:"2.1专业教师分类人数构成比例",url:"ProfessionalReport/zy_table2-1.jsp"},
//			             {id:"1",name:"2.2 专业教师队伍结构",url:"ProfessionalReport/zy_table2-2.jsp"},
//			           //  {id:"1",name:"2.3 专任教师企业经历背景情况",children:[{id:"1",name:"2.3.1 专任教师企业、工程背景统计 ",url:"ProfessionalReport/zy_table2-3-1.jsp"},{id:"1",name:"2.3.2 专任教师企业工作经历  ",url:"ProfessionalReport/zy_table2-3-2.jsp"}]},
//			             {id:"1",name:"2.3 专任教师企业经历背景情况",url:"ProfessionalReport/zy_table2-3-1.jsp"},
//			             {id:"1",name:"2.4  近三年专任教师接受培训进修情况",url:"ProfessionalReport/zy_table2-4.jsp"},
//			             {id:"1",name:"2.5近三年专任教师的教学科学研究项目、获奖和成果情况汇总",url:"ProfessionalReport/zy_table2-5.jsp"},

						 {id:"1",name:"职称结构(饼状图)",url:"ProfessionalReport/zy_zcjg.jsp"},
						 {id:"1",name:"年龄结构(饼状图)",url:"ProfessionalReport/zy_nljg.jsp"},
						 {id:"1",name:"学缘结构(饼状图)",url:"ProfessionalReport/zy_xyjg.jsp"},
						 {id:"1",name:"学历学位结构(饼状图)",url:"ProfessionalReport/zy_xlxwjg.jsp"},
						 {id:"1",name:"2.1本专业教师基本情况",url:"ProfessionalReport/zy_table2-1.jsp"},
			             {id:"1",name:"2.2专任教师接受培训进修、交流情况",url:"ProfessionalReport/zy_table2-2.jsp"},
			             {id:"1",name:"2.3专任教师主持科研项目明细表",url:"ProfessionalReport/zy_table2-3.jsp"},
			             {id:"1",name:"2.4教师承担教学研究与改革项目明细表",url:"ProfessionalReport/zy_table2-4.jsp"},
			             {id:"1",name:"2.5教师发表教学研究论文",url:"ProfessionalReport/zy_table2-5.jsp"},
			             {id:"1",name:"2.6教师专利（著作权授权情况）明细表",url:"ProfessionalReport/zy_table2-6.jsp"},
			             {id:"1",name:"2.7教师出版专著明细表",url:"ProfessionalReport/zy_table2-7.jsp"},
			             {id:"1",name:"2.8高层次人才",url:"ProfessionalReport/zy_table2-8.jsp"},
			             {id:"1",name:"2.9高层次教学、研究团队",url:"ProfessionalReport/zy_table2-9.jsp"},
			             {id:"1",name:"2.10教师的教学、科研获奖情况",url:"ProfessionalReport/zy_table2-10.jsp"},
			             {id:"1",name:"2.11教学成果奖",url:"ProfessionalReport/zy_table2-11.jsp"},
			             {id:"1",name:"2.12出版教材",url:"ProfessionalReport/zy_table2-12.jsp"},
			             {id:"1",name:"2.13教师发表科研论文",url:"ProfessionalReport/zy_table2-13.jsp"},
			             {id:"1",name:"2.14课程教学质量评价统计表",url:"ProfessionalReport/zy_table2-14.jsp"}
			             ]
		   },
		   {id:"3",name:"三、支撑条件",
			   children:[
			             {id:"1",name:"3.1 与企业合作建立实践基地",url:"ProfessionalReport/zy_table3-1.jsp"},
			             {id:"1",name:"3.2 校内实践教学场所使用状况",url:"ProfessionalReport/zy_table3-2.jsp"},
			             {id:"1",name:"3.3 校外实习实训基地使用状况",url:"ProfessionalReport/zy_table3-3.jsp"},
			             ]
		   },
		   {id:"4",name:"四、培养目标和毕业要求",
			   children:[
			             {id:"1",name:"4.1近期专业培养目标修订时企业行业参与情况",url:"ProfessionalReport/zy_table4-1.jsp"},
			        /*     {id:"1",name:"4.2 人才培养模式创新实验项目情况",url:"ProfessionalReport/ASDS_table4-2.jsp"},
			             {id:"1",name:"4.3学校创新创业教育情况",url:"ProfessionalReport/ASDS_table4-3.jsp"},
			             {id:"1",name:"4.4 实验教学示范中心",url:"ProfessionalReport/ASDS_table4-4.jsp"},
			             {id:"1",name:"4.5 毕业综合训练情况",url:"ProfessionalReport/ASDS_table4-5.jsp"},
			             {id:"1",name:"4.6 校园文化活动情况",url:"ProfessionalReport/ASDS_table4-6.jsp"},
			             {id:"1",name:"4.7 学生社团情况",url:"ProfessionalReport/ASDS_table4-7.jsp"},
			             {id:"1",name:"4.8 国外及港澳台学生情况",url:"ProfessionalReport/ASDS_table4-8.jsp"},*/
//			             {id:"1",name:"4.8 各教学单位教育教学研究与改革情况",url:"ProfessionalReport/ASDS_table4-8"}
			             ]
		   },
		   {id:"5",name:"五、课程体系",
			   children:[
			             {id:"1",name:"5.1 课程情况",url:"ProfessionalReport/zy_table5-1.jsp"},
			             {id:"1",name:"5.2专业主干课程情况",url:"ProfessionalReport/zy_table5-2.jsp"},
			             {id:"1",name:"5.4近三年毕业设计（论文）情况",url:"ProfessionalReport/zy_table5-4.jsp"},
			             {id:"1",name:"5.5近三年专任教师代表性教学研究、科学研究项目",url:"ProfessionalReport/zy_table5-5.jsp"},
			      /*       {id:"1",name:"5.3 学生管理人员结构",url:"ProfessionalReport/ASDS_table5-3.jsp"},
			            
			             
			             {id:"1",name:"5.6 学生发展情况",url:"ProfessionalReport/ASDS_table5-6.jsp"},
			             {id:"1",name:"5.7 本科生参加大学生创新创业训练计划与参与教师科研情况",url:"ProfessionalReport/ASDS_table5-7.jsp"},
			             {id:"1",name:"5.8 各专业毕业生情况",url:"ProfessionalReport/ASDS_table5-8.jsp"},
			             {id:"1",name:"5.9 毕业生就业去向分布情况",url:"ProfessionalReport/ASDS_table5-9"}*/
			             ]},
		/*   {id:"6",name:"6. 质量保障",
			   children:[
			             {id:"1",name:"6.1 评教信息",url:"ProfessionalReport/ASDS_table6-1.jsp"},
			             {id:"1",name:"6.2 教学质量管理队伍结构",url:"ProfessionalReport/ASDS_table6-2.jsp"},
			             {id:"1",name:"6.3 教学管理队伍教学研究情况",url:"ProfessionalReport/ASDS_table6-3"}
			             ]},
		   {id:"7",name:"7. 详细数据附表",
			          	   children:[
			          	             {id:"1",name:"7.1 专业基本情况",url:"ProfessionalReport/ASDS_tableF-1.jsp"},
			          	             {id:"1",name:"7.2 专业大类情况",url:"ProfessionalReport/ASDS_tableF-2.jsp"},
			          	             {id:"1",name:"7.3 校领导情况",url:"ProfessionalReport/ASDS_tableF-3.jsp"},
			          	             {id:"1",name:"7.4 校级教学管理人员基本信息",url:"ProfessionalReport/ASDS_tableF-4.jsp"},
			          	             {id:"1",name:"7.5 各教学单位专任教师结构",url:"ProfessionalReport/ASDS_tableF-5.jsp"},
			          	             {id:"1",name:"7.6 各教学单位专业带头人情况",url:"ProfessionalReport/ASDS_tableF-6.jsp"},
			          	             {id:"1",name:"7.7 各教学单位实验系列职称人员结构",url:"ProfessionalReport/ASDS_tableF-7.jsp"},
			          	             {id:"1",name:"7.8 各专业授课教师结构",url:"ProfessionalReport/ASDS_tableF-8.jsp"},
			          	             {id:"1",name:"7.9 各专业授课教师结构",url:"ProfessionalReport/ASDS_tableF-9.jsp"},
			          	             {id:"1",name:"7.10 各专业授课教师授课情况",url:"ProfessionalReport/ASDS_tableF-10.jsp"},
			          	             {id:"1",name:"7.11 各专业授课教师授课情况",url:"ProfessionalReport/ASDS_tableF-11.jsp"},
			          	             {id:"1",name:"7.12 各专业教师、学生情况概览",url:"ProfessionalReport/ASDS_tableF-12.jsp"},
			          	             {id:"1",name:"7.13 校内实验室使用情况",url:"ProfessionalReport/ASDS_tableF-13.jsp"},
			          	            // {id:"1",name:"7.9 校内实验实习实训场所情况",url:"ProfessionalReport/ASDS_tableF-9.jsp"},
			          	             {id:"1",name:"7.14 各专业实践教学情况",url:"ProfessionalReport/ASDS_tableF-14.jsp"},
			          	             {id:"1",name:"7.15 各专业教学情况一览表",url:"ProfessionalReport/ASDS_tableF-15.jsp"},
			          	             {id:"1",name:"7.16 毕业综合训练情况",url:"ProfessionalReport/ASDS_tableF-16.jsp"},
			          	             {id:"1",name:"7.17 各专业（大类）本科生招生情况",url:"ProfessionalReport/ASDS_tableF-17.jsp"},
			          	             {id:"1",name:"7.18 各大类本科生招生情况",url:"ProfessionalReport/ASDS_tableF-18.jsp"},
			          	             {id:"1",name:"7.19 各专业毕业生情况",url:"ProfessionalReport/ASDS_tableF-19"}
			          	             ]},*/
		   {id:"6",name:"六. 状态分析报告",
			   children:[
			             {id:"1",name:"6.1 状态分析报告(new)",url:"ProfessionalReport/zy_table_main.jsp"},
			             {id:"1",name:"6.2 状态分析报告记录",url:"ProfessionalReport/zy_table_history.jsp"}
			             ]}
         ];
	
	
	/**
	 * 合作评估分析报告
	 */
	hzpgbg=[
            
			   /*{id:"1",name:"办学思路与领导作用",
				   children:[
				             {id:"1",name:"1.1 办学定位",url:"asds_error"},
				             {id:"1",name:"1.2领导作用",url:"ProfessionalReport/zy_table0-0.jsp"},
				           {id:"1",name:"1.3 人才培养模式",url:"ASDS_table1-6.jsp"},
				             ]
			   },*/
		   	/* 主表 */
		   {id:"1",name:"一、办学思路与领导作用",
				   children:[
				             {id:"1",name:"1.1 办学定位",url:"hzpgbgReport/hzpg_table1-1.jsp"},
				             {id:"1",name:"1.2领导作用",children:[
				                     {id:"1",name:"1.2.1校领导基本信息一览表",url:"hzpgbgReport/hzpg_table1-2-1.jsp"},
				                     {id:"1",name:"1.2.2校领导年龄和学位结构",url:"hzpgbgReport/hzpg_table1-2-2.jsp"},
				                     {id:"1",name:"1.2.3校级教学管理人员结构",url:"hzpgbgReport/hzpg_table1-2-3.jsp"}
				                     ]},
				           {id:"1",name:"1.3 人才培养模式",url:"hzpgbgReport/hzpg_table1-3.jsp"},
			             ]
		   },
		   {id:"2",name:"二、教师队伍",
			   children:[
			             {id:"1",name:"2.1数量与结构",children:[
			            	 {id:"1",name:"2.1.1 学校专任教师数量、生师比及主讲教师情况",url:"hzpgbgReport/hzpg_table2-1-1.jsp"},
			            	 {id:"1",name:"2.1.2 教师队伍职称、学位、年龄分布",url:"hzpgbgReport/hzpg_table2-1-2.jsp"},
			            	 {id:"1",name:"2.1.3 各教学单位教师数、本科生数。",url:"hzpgbgReport/hzpg_table2-1-(3).jsp"},
			            	 {id:"1",name:"2.1.4 各专业授课教师数及职称、学位、年龄分布",url:"hzpgbgReport/hzpg_table2-1-4.jsp"}
			             ],
			             },
			             {id:"1",name:"2.2 教育教学水平",children:[
			                 {id:"1",name:"2.2.1 近一届省级以上教学成果奖一览表",url:"hzpgbgReport/hzpg_table2-2-1.jsp"},
			             ],
			             },
			             {id:"1",name:"2.3教师培养培训",children:[
			                   			                 {id:"1",name:"2.3.1各专业带头人情况列表",url:"hzpgbgReport/hzpg_table2-3-1.jsp"},
			                   			                 {id:"1",name:"2.3.2教师教学发展机构",url:"hzpgbgReport/hzpg_table2-3-2.jsp"}
			                   				             ],
			             }]},
		  
		   {id:"3",name:"三、教学条件与利用",
			   children:[
			             {id:"1",name:"3.1 教学基本设施",children:[
				                   			                 {id:"1",name:"3.1.1教学基本设施情况",url:"hzpgbgReport/hzpg_table3-1-1.jsp"},
				                   			                 {id:"1",name:"3.1.2校内实验实习实训场所名称、面积、面向专业",url:"hzpgbgReport/hzpg_table3-1-2.jsp"},
				                   				             ]},
			             {id:"1",name:"3.2 经费投入",url:"hzpgbgReport/hzpg_table3-2.jsp"}
			             ]
		   },
		   {id:"5",name:"四、专业与课程建设",
			   children:[
			             {id:"1",name:"4.1专业建设",children:[
			                 			                 {id:"1",name:"4.1.1本科专业情况一览表",url:"hzpgbgReport/hzpg_table4-1-1.jsp"},
			                 				             ]},
			            {id:"1",name:"4.2课程与教学",children:[
				                   			                 {id:"1",name:"4.2.1全校课程开设情况",url:"hzpgbgReport/hzpg_table4-2-1.jsp"},
				                   			                 {id:"1",name:"4.2.2全校课程规模情况",url:"hzpgbgReport/hzpg_table4-2-2.jsp"},
				                   			                 {id:"1",name:"4.2.3省部级以上精品课程列表	",url:"hzpgbgReport/hzpg_table4-2-3.jsp"},
				                   				             ]},
			             {id:"1",name:"4.3实践教学",children:[
				                   			                 {id:"1",name:"4.3.1.分专业实验、毕业综合训练情况",url:"hzpgbgReport/hzpg_table4-3-1.jsp"},
				                   			                 {id:"1",name:"4.3.2.院系实验技术人员职称、学位、年龄分布情况",url:"hzpgbgReport/hzpg_table4-3-2.jsp"},
				                   				             ]},
			             ]
		   },
		   {id:"5",name:"五、质量管理",
			   children:[
			             {id:"1",name:"5.1 教学管理队伍",children:[
				                 			                 {id:"1",name:"5.1.1各院系教学管理人员基本情况",url:"hzpgbgReport/hzpg_table5-1-1.jsp"},
				                 				             ]},
			             ]},
		   {id:"6",name:"六、学风建设与学生指导",
			   children:[
			             {id:"1",name:"6.1 学风建设",children:[
				                 			                 {id:"1",name:"6.1.1本科生交流情况",url:"hzpgbgReport/hzpg_table6-1-1.jsp"},
				                 				             ]},
			             {id:"1",name:"6.2 指导与服务",children:[
				                   			                 {id:"1",name:"6.2.1校级学生管理人员职称、学位、年龄分布",url:"hzpgbgReport/hzpg_table6-2-1.jsp"},
				                   			                 {id:"1",name:"6.2.2学生就业管理人员列表",url:"hzpgbgReport/hzpg_table6-2-2.jsp"},
				                   			                 {id:"1",name:"6.2.3本科生奖贷补情况	",url:"hzpgbgReport/hzpg_table6-2-3.jsp"},
				                   			              {id:"1",name:"6.2.4各教学单位学生管理人员与学生情况	",url:"hzpgbgReport/hzpg_table6-2-4.jsp"},
				                   				             ]},,
			             ]},
		   {id:"7",name:"七、 教学质量",
			          	   children:[
			          	             {id:"1",name:"7.1 德育",url:"hzpgbgReport/hzpg_table7-1.jsp"},
			          	             {id:"1",name:"7.2 专业知识能力",url:"hzpgbgReport/hzpg_table7-2.jsp"},
			          	             {id:"1",name:"7.3 体育美育",url:"hzpgbgReport/hzpg_table7-3.jsp"},
			          	             {id:"1",name:"7.4 校内评价",children:[
							                   			                 {id:"1",name:"7.4.1各专业报到率、录取率",url:"hzpgbgReport/hzpg_table7-4-1.jsp"},
							                   			                 {id:"1",name:"7.4.2分省录取分数线",url:"hzpgbgReport/hzpg_table7-4-2.jsp"},
							                   				             ]},
			          	             {id:"1",name:"7.5 就业",children:[
						                   			                 {id:"1",name:"7.5.1学校总体就业率、分专业就业率",url:"hzpgbgReport/hzpg_table7-5-1.jsp"},
						                   			                 {id:"1",name:"7.5.2应届毕业生升学基本情况",url:"hzpgbgReport/hzpg_table7-5-2.jsp"},
						                   			                 {id:"1",name:"7.5.3毕业生就业去向分布情况",url:"hzpgbgReport/hzpg_table7-5-3.jsp"},
						                   				             ]},
			          	             ]},
		   {id:"8",name:"八. 状态分析报告",
			   children:[
			             
			             {id:"1",name:"8.1 状态分析报告(new)",url:"hzpgbgReport/hzpg_table_main.jsp"},
			             {id:"1",name:"8.2 状态分析报告记录",url:"hzpgbgReport/hz_table_history.jsp"}
			             ]}
      ];
	
});
function divCss(){
	var iWidth = document.documentElement.clientWidth;
	var iHeight = document.documentElement.clientHeight;
	$("#div1").width(iWidth).height(iHeight);
	
}
var taskInfo;
var sContentPath = getContentPath();
var is_Engineering;
var dateReport;
var itemId;
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}
function loadingContent(){
	var cid = $("#cid").val();
	if(cid==1){
		$("#dynamic").html("领导驾驶舱")
		document.title = "领导驾驶舱";
		$("#tab").html("");
		$("#tab").append("<li><div onclick='clickTab(0)' style='cursor:pointer'>指标状态</div></li>");
		//$("#tab").append("<li><div onclick='clickTab(1)' style='cursor:pointer'>指标检测</div></li>");
		$("#tab").append("<li><div onclick='clickTab(2)' style='cursor:pointer'>指标预警</div></li>");
		$("#tab").append("<li><div onclick='clickTab(3)' style='cursor:pointer'>课程评价</div></li>");
	}else if(cid ==2){
		$("#dynamic").html("数据统计");
		document.title = "数据统计";
			$("#tab").html("");
			$("#tab").append("<li><div onclick='clickTab(0)' style='cursor:pointer'>教学基本状态数据</div></li>")
			$("#tab").append("<li><div onclick='clickTab(1)' style='cursor:pointer'>质量年报数据</div></li>")
			$("#tab").append("<li><div onclick='clickTab(3)' style='cursor:pointer'>专业分析报告</div></li>")
			$("#tab").append("<li><div onclick='clickTab(2)' style='cursor:pointer'>排名分析</div></li>")
			$("#tab").append("<li><div onclick='clickTab(4)' style='cursor:pointer'>合格评估分析报告</div></li>")
	}else if(cid ==3){
		$("#dynamic").html("分析报告")
		document.title = "分析报告";
		$("#tab").html("");
		$("#tab").append("<li><div onclick='clickTab(0)' style='cursor:pointer'>质量报告</div></li>");
		$("#tab").append("<li><div onclick='clickTab(3)' style='cursor:pointer'>学生评教</div></li>");
		$("#tab").append("<li><div onclick='clickTab(4)' style='cursor:pointer'>省级排名分析</div></li>");
	/*	$("#tab").append("<li><div onclick='clickTab(1)' style='cursor:pointer'>自评报告</div></li>");*/
		//$("#tab").append("<li><div onclick='clickTab(2)' style='cursor:pointer'>专项报告</div></li>");
	}else if(cid ==4){
		$("#dynamic").html("全文检索");
		document.title = "全文检索";
		$("#tab").html("");
		$("#tab").append("<li><div onclick='clickTab(0)' style='cursor:pointer'>全库检索</div></li>");
		$("#tab").append("<li><div onclick='clickTab(1)' style='cursor:pointer'>指标检索</div></li>");
		//$("#tab").append("<li><div onclick='clickTab(2)' style='cursor:pointer'>报告检索</div></li>");
		$("#tab").append("<li><div onclick='clickTab(3)' style='cursor:pointer'>状态数据查看</div></li>");
	}else if(cid ==5){
		$("#dynamic").html("主题分析");
		document.title = "主题分析";
		$("#tab").html("");
		$("#tab").append("<li><div onclick='clickTab(0)' style='cursor:pointer'>教师分析</div></li>");
		$("#tab").append("<li><div onclick='clickTab(1)' style='cursor:pointer'>教学分析</div></li>");
		$("#tab").append("<li><div onclick='clickTab(2)' style='cursor:pointer'>学院分析</div></li>");
		$("#tab").append("<li><div onclick='clickTab(3)' style='cursor:pointer'>专业分析</div></li>");
	}else if(cid ==6){
		$("#dynamic").html("保障体系文档")
		$("#tab").html("");
		$("#tab").append("<li><div onclick='clickTab(0)' style='cursor:pointer'>质保体系</div></li>");
		/*$("#tab").append("<li><div onclick='clickTab(1)' style='cursor:pointer'>指标体系</div></li>");*/
		document.title = "保障体系文档";
	}else if(cid ==7){
		$("#dynamic").html("工作进度")
		$("#tab").html("");
		$("#tab").append("<li><div onclick='clickTab(0)' style='cursor:pointer'>数据填报</div></li>");
		$("#tab").append("<li><div onclick='clickTab(1)' style='cursor:pointer'>教学评估</div></li>");
		/*$("#tab").append("<li><div onclick='clickTab(2)' style='cursor:pointer'>项目申报</div></li>");*/
		document.title = "工作进度";
	}
	$.ajax({
		url:'/audit/asAssessReport/getCookie.do',
		type:'POST',
		dataType:'json',
		async:false,
		success:function(data){
		var datas = eval("("+data+")")
		$("#showUserName").html(datas[0].showname);
		}
	})
	
}
/*function getTaskInfo(){
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	$.ajax({
		url:sContentPath+"/asAssessReport/selectTask.do",
		type:'POST',
		async:false,
		dataType:'json',
		data:{
			"itemId":itemId,
			"dateYear":dateYear,
			"specialtyId":specialtyId
		},success:function(data){
			var datas = eval("("+data+")");
			taskInfo = datas;
		}
	});
}*/

function getInspectSysInfo(){
	$.ajax({
		url:sContentPath+"/assessInspect/getInspectSysInfo.do",
		type:'POST',
		async:false,
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			array=[];
			var array1 = []
			for ( var i = 0; i < datas.length; i++) {
				var obj = new Object();
				if(datas[i].LEVEL==2){
					obj.id = datas[0].id;
					obj.name = datas[0].SYSTEM_NAME;
					obj.url="inspect1";
					array1.push(obj);
				}
			}	
			for ( var i = 0; i < datas.length; i++) {
				var obj = new Object();
				//alert(datas[i].LEVEL)
				if(datas[i].LEVEL==1){
					obj.id = datas[0].id;
					obj.name = datas[0].SYSTEM_NAME;
					obj.children = array1;
					array.push(obj);
				}
			}
			array.push({id:"x2",name:"定位与目标",url:"inspect1"})
			array.push({id:"x3",name:"教师队伍",url:"inspect1"})
			array.push({id:"x4",name:"教学资源",url:"inspect1"})
			array.push({id:"x5",name:"培养过程",url:"inspect1"})
			array.push({id:"x6",name:"学生发展",url:"inspect1"})
			array.push({id:"x7",name:"质量保障",url:"inspect1"})
			array.push({id:"x8",name:"特色分析",url:"inspect1"})
		}
	});
}
function getAllData(){
	var specialtyId = $("#specialtyId").val();
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
			if(datas!=""&&datas!=null){
				is_Engineering = datas[0].is_engineering;
				$("#showUserName").html(datas[0].showName);
				dateReport = 	datas[0].self_assessment_date;
				/*$("#tab div:eq(0)").html("Self-Report");*/
				/*if(datas[0].is_rz==2){
					$("#tab div:eq(1)").hide();
					clickTab(0);
				}else if(datas[0].is_rz==1){
					$("#tab div:eq(1)").show();
					$("#tab div:eq(0)").html("专业评估整改落实情况");
					clickTab(0);
				}else if(datas[0].is_rz==3){
					$("#tab div:eq(1)").show();
					$("#tab div:eq(0)").hide();
					clickTab(1);
				}*/
			}
		}
	});
	
	
}

function loading(num){
	var parentData;
	$.ajax({
		url: sContentPath+"/asAssessReport/getSystemByType.do",
		data:{
			"id":is_Engineering
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				parentData = datas;
			}
			
		}
	});
	$.ajax({
		url: sContentPath+"/asAssessReport/getSystemSonByType.do",
		data:{
			"id":is_Engineering
		},
		async:false,
		type:'POST',
		dataType:'json',
		success:function(data){
			array = [];
			var datas = eval("("+data+")");
		
			if(datas!=""&&datas!=null){
				if(parentData!=null&&parentData!=""){
					for ( var i = 0; i < parentData.length; i++) {
						var obj =new Object();
						obj.id = parentData[i].id;
						obj.name = parentData[i].system_name;
						var childrens = []
						for ( var j = 0; j < datas.length; j++) {
							if(datas[j].parent_id == parentData[i].id){
								childrens.push({id:datas[j].id,name:datas[j].system_name,url:"../page_"+num})
							}
						}
						if(childrens.length==0){
							obj.url=	"../page_"+num;
						}else{
							obj.children = childrens;	
						}
						array.push(obj);
						iframeTab("../page_1",array[0].id);
					}
				}
			}
			ASDSReportInit();
		}
	});
	
}
/**
 * 初始化各类东西
 */
function ASDSReportInit(){

	$("#content").html(menuStr());
	// 菜单初始化
	$('#content').tendina({
        // This is a setup made only
        // to show which options you can use,
        // it doesn't actually make sense!
        animate: true,
        speed: 500,
        onHover: false,
        hoverDelay: 300
//        activeMenu: $('#deepest')
//        openCallback: function(clickedEl) {
//        },
//        closeCallback: function(clickedEl) {
//        }
  });
}
//
var testURL;
var testId;
function menuStr(){
	var indexs=1;
	//初始化菜单
	var str = "";
	$.each(array,function(i,obj){
		if(i==0){
			str += "<li class='li1'><a id='deepest' href='javascript:void(0);'";
		}else{
			str += "<li class='li1'><a href='javascript:void(0);'";
		}
			str += "onclick=iframeTab('"+obj.url+"',"+obj.id+")";
			if(obj.url != null){
		}
		str += " >"+obj.name+"</a>";
		// 二级菜单
	
		if(obj.children != null && obj.children != undefined && obj.children.length > 0){
			str += "<ul>";
			$.each(obj.children,function(j,obj2){
				if(obj2!=undefined){
					str += "<li class='li2'><a href='javascript:void(0);'";
					if(obj2.url!=null){
						str += " onclick=iframeTab('"+obj2.url+"',"+obj2.id+")";
						if(indexs==1){
							testURL=obj2.url;
							testId=obj2.id;
							indexs+=1;
						}
					}
				    str += ">"+ obj2.name +"</a>";
				    
					// 三级菜单
					if(obj2.children != null && obj2.children != undefined && obj2.children.length > 0){
						str += "<ul>";
						$.each(obj2.children,function(k,obj3){
							if(obj3!=undefined){
								str += "<li class='li3'><a href='javascript:void(0);'";
								if(obj3.url != null){
									str += " onclick=iframeTab('"+obj3.url+"',"+obj3.id+")";
								}
								str += ">"+ obj3.name +"</a>";
							}
						});
						str += "</ul>";
					}
				}
			});
			str += "</ul>";
		}
		str += "</li>";
	});
	return str;
}
// 内嵌页面跳转
function iframeTab(url,id){
	var iframe=$("#tempIframe");
	var path=$("#tempIframe").attr("src");
	var array=path.split("page");
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var path=url;
	if(url=="undefined"){
		return;
	}
	if(path.length<20){
		path="/audit/page/zenith/staticPage/ASDSReport3.0/"+url+".jsp";
	}
	iframe.attr("src",path);
}

//菜单对象
var array=[
	{id:"1",name:"一、学校概要数据",
		   children:[
	//	             {id:"1",name:"1.1 办学指标思想",url:"asds_error"},
		             {id:"1",name:"  学位点概况",url:"ASDS_tableG-2"},
		             {id:"1",name:"学位专业基本情况",url:"ASDS_tableG-3"},
		           //  {id:"1",name:"学校《本科教学质量报告》支撑数据指标比较",url:"ASDS_tableG-4"},
		             ]
	},
   	/* 主表 */
   {id:"1",name:"1. 定位与目标",
	   children:[
//	             {id:"1",name:"1.1 办学指标思想",url:"asds_error"},
	             {id:"1",name:"1.2 校领导年龄和学位结构",url:"ASDS_table1-2"},
	             {id:"1",name:"1.3 校级教学管理人员结构",url:"ASDS_table1-3"},
	             {id:"1",name:"1.4 教育教学改革与成果",url:"ASDS_table1-4"},
	             {id:"1",name:"1.5 专业布局概览",url:"ASDS_table1-5"},
	            // {id:"1",name:"1.6 教学单位学科专业概览",url:"ASDS_table1-6"},
	             ]
   },
   {id:"2",name:"2. 教师队伍",
	   children:[
	             {id:"1",name:"2.1 学校生师比及教师情况",url:"ASDS_table2-1"},
	             {id:"1",name:"2.2  教师队伍结构",url:"ASDS_table2-2"},
	             {id:"1",name:"2.3 各教学单位教师与本科生情况",url:"ASDS_table2-3"},
	             {id:"1",name:"2.4 主讲教师本科授课情况",url:"ASDS_table2-4"},
	             {id:"1",name:"2.5 教授、副教授讲授本科课程比例",url:"ASDS_table2-5"},
	             {id:"1",name:"2.6 教师培养培训情况",url:"ASDS_table2-6"},
	             {id:"1",name:"2.7 专业带头人情况",url:"ASDS_table2-7"},
	             {id:"1",name:"2.8 学校实验系列人员结构",url:"ASDS_table2-8"},
	             {id:"1",name:"2.9 教师教育教学改革与成果",url:"ASDS_table2-9"}
	             ]
   },
   {id:"3",name:"3. 教学资源",
	   children:[
	             {id:"1",name:"3.1 教学经费投入情况",url:"ASDS_table3-1"},
	             {id:"1",name:"3.2 教学基本设施情况",children:[
	                                                   	{name:"3.2.1 教学行政用房情况",url:"ASDS_table3-2-1"},
	                                                   	{name:"3.2.2 教学、科研仪器情况",url:"ASDS_table3-2-2"},
	                                                   	{name:"3.2.3 本科实验、实习、实训场所情况",url:"ASDS_table3-2-3"},
	                                                   	{name:"3.2.4 校园网、图书情况",url:"ASDS_table3-2-4"},
	                                                   ]},
	             {id:"1",name:"3.3 专业概况预览",url:"ASDS_table3-3"},
	             {id:"1",name:"3.4 优势专业概览",url:"ASDS_table3-4"},
	             {id:"1",name:"3.5 新设专业概览",url:"ASDS_table3-5"},
	             {id:"1",name:"3.6 各教学单位课程开设情况",url:"ASDS_table3-6"},
	             {id:"1",name:"3.7 各专业实践教学情况",url:"ASDS_table3-7"},
	             {id:"1",name:"3.8 全校课程开设情况",url:"ASDS_table3-8"},
	             {id:"1",name:"3.9 精品（优秀）课程（群）建设",url:"ASDS_table3-9"},
	             {id:"1",name:"3.10 合作办学情况",url:"ASDS_table3-10"}
	             ]
   },
   {id:"4",name:"4. 培养过程",
	   children:[
	             {id:"1",name:"4.1 专业培养课程学分结构",url:"ASDS_table4-1"},
	             {id:"1",name:"4.2 人才培养模式创新区情况",url:"ASDS_table4-2"},
	             {id:"1",name:"4.3 实验教学示范中心",url:"ASDS_table4-3"},
	             {id:"1",name:"4.4 毕业综合训练情况",url:"ASDS_table4-4"},
	             {id:"1",name:"4.5 校园文化活动情况",url:"ASDS_table4-5"},
	             {id:"1",name:"4.6 学生社团情况",url:"ASDS_table4-6"},
	             {id:"1",name:"4.7 学生国际交流情况",url:"ASDS_table4-7"},
	             {id:"1",name:"4.8 各教学单位教育教学研究与改革情况",url:"ASDS_table4-8"}
	             ]
   },
   {id:"5",name:"5. 学生发展",
	   children:[
	             {id:"1",name:"5.1 生源情况",url:"ASDS_table5-1"},
	             {id:"1",name:"5.2 各专业（大类）本科生招生报到情况",url:"ASDS_table5-2"},
	             {id:"1",name:"5.3 学生管理人员结构",url:"ASDS_table5-3"},
	             {id:"1",name:"5.4 各教学单位学生管理人员与学生情况",url:"ASDS_table5-4"},
	             {id:"1",name:"5.5 本科生奖贷补情况",url:"ASDS_table5-5"},
	             {id:"1",name:"5.6 学生发展情况",url:"ASDS_table5-6"},
	             {id:"1",name:"5.7 各专业毕业生情况",url:"ASDS_table5-7"},
	             {id:"1",name:"5.8 毕业生就业去向分布情况",url:"ASDS_table5-8"}
	             ]},
   {id:"6",name:"6. 质量保障",
	   children:[
	             {id:"1",name:"6.1 评教信息",url:"ASDS_table6-1"},
	             {id:"1",name:"6.2 教学质量管理队伍结构",url:"ASDS_table6-2"},
	             {id:"1",name:"6.3 教学管理队伍教学研究情况",url:"ASDS_table6-3"}
	             ]},
   {id:"7",name:"7. 详细数据附表",
	          	   children:[
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
	          	             {id:"1",name:"7.14 各专业毕业生情况",url:"ASDS_tableF-14"}
	          	             ]},
   {id:"8",name:"8. 状态分析报告",
	   children:[
	             {id:"1",name:"8.1 状态分析报告(new)",url:"ASDS_table_main"},
	             {id:"1",name:"8.2 状态分析报告记录",url:"ASDS_table_history"}
	             ]}
   
];

function arrowInit(){
	$(".li1>a").addClass("arrow");
}
/*function eventBind(){
//	console.log($("#tab div").get(0));
	var objs=$("#tab div");
	objs[0].click=function(){
		alert(0);
	};
	objs[0].click=function(){
		alert(1);
	};
	objs[0].click=function(){
		alert(2);
	};
	objs[0].click=function(){
		alert(3);
	};
	$("#tab div").get(1).bind("click",{num:1},clickTab);
	$("#tab div").get(2).bind("click",{num:2},clickTab);
	$("#tab div").get(3).bind("click",{num:3},clickTab);
	$("#tab div").get(0).click(function(){
		alert(0);
	});
	$("#tab div").get(1).click(function(){
		alert(1);
	});
	$("#tab div").get(2).click(function(){
		alert(2);
	});
	$("#tab div").get(3).click(function(){
		alert(3);
	});
}*/
var prevID;
var prevCID;
var cishu=1;
//返回上一级
function BackTo(){
	prevCID=$("#cid").val();
	if(prevID==3&&cishu==1){
		clickTab(prevID);
		cishu=3;
	}else{
		location.href="/audit/page/zenith/Main.jsp?cid="+prevCID;
	}
}

function clickTab(num){
	$("#down").show();
	$("#middle").show();
	$("#main").attr("style","width:85%;float:left")
	$("#tab div:eq(0)").css("background-color","#034783");
	$("#tab div:eq(1)").css("background-color","#034783");
	$("#tab div:eq(2)").css("background-color","#034783");
	$("#tab div:eq(3)").css("background-color","#034783");
	$("#tab div:eq(4)").css("background-color","#034783");
	var cid = $("#cid").val();
	prevID=num;
	if(cid==1){
		if(num==0){
			itemId = 1;
			array =[];
			$('#content').tendina('destroy');
			$("#dataReport").html($("#tab div:eq(0)").html());
			$("#tab div:eq(0)").css("background-color","#46A3D1");
			//getInspectSysInfo();
			ASDSReportInit();
			//getTaskInfo();
		/*	$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('ASDS_tableG-2',1);*/
			$("#down").hide();
			$("#middle").hide();
			$("#main").attr("style","width:100%;float:left")
			iframeTab('/CHART/page/home/home.jsp');
		}else if(num==1){
			
			$("#tab div:eq(1)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			array=[];
			//getTaskInfo();
			/*var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
			appendStr+="<a href='javascript:void(0)' onclick=\"iframeTab('page_0',0)\"><img src='/audit/page/zenith/staticPage/img/uploading.png' style='margin-top:2%'/><br/></a>"
			 appendStr+="<a href='javascript:void(0)' onclick='allLook()' ><img src='img/readAll.png' style='margin-top:2%'></a></div>";
			$("#content").append(appendStr);*/
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('../loading');
		}else if(num==2){
			$("#tab div:eq(1)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			array=[];
			//getTaskInfo();
			
			/*var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
			appendStr+="<a href='javascript:void(0)' onclick=\"iframeTab('page_0',0)\"><img src='/audit/page/zenith/staticPage/img/uploading.png' style='margin-top:2%'/><br/></a>"
			 appendStr+="<a href='javascript:void(0)' onclick='allLook()' ><img src='img/readAll.png' style='margin-top:2%'></a></div>";
			
			$("#content").append(appendStr);*/
			ASDSReportInit();
			$("#down").hide();
			$("#middle").hide();
			$("#main").attr("style","width:100%;float:left")
			iframeTab('/CHART/page/qualityMonitoring/zhiliangjiance_mains.jsp');
			/*array=[{id:"1",name:"校级核心", children:[],url:"../loading"}];
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(2)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			$("#down").hide();
			$("#middle").hide();
			$("#main").attr("style","width:100%;float:left");
			*/
		}else if(num==3){
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(2)").html());
			$('#content').tendina('destroy');
			array=[];
			ASDSReportInit();
			$("#down").hide();
			$("#middle").hide();
			$("#main").attr("style","width:100%;float:left");
//			iframeTab('/CHART/page/qualityMonitoring/curriculumEvaluation.jsp');
			iframeTab('/CHART/page/qualityMonitoring/curriculumEvaluting_main.jsp');
		}
	}else if(cid==2){
		if(num==0){
			$("#tempIframe").css('display','block');
			$("#collegeContent").hide();
			$("#down").show();
			$('#content').tendina('destroy');
			$("#dataReport").html($("#tab div:eq(0)").html());
			$("#tab div:eq(0)").css("background-color","#46A3D1");
			array =	[
						{id:"1",name:"一、学校概要数据",
							   children:[
						//	             {id:"1",name:"1.1 办学指标思想",url:"asds_error"},
							             {id:"1",name:"  学位点概况",url:"ASDS_tableG-2"},
							             {id:"1",name:" 学科专业基本情况",url:"ASDS_tableG-3"},
							             {id:"1",name:" 学校《本科教学质量报告》支撑数据指标比较",url:"ASDS_tableG-4"},
							             ]
						},
					   	/* 主表 */
					   {id:"1",name:"1. 定位与目标",
						   children:[
//						             {id:"1",name:"1.1 办学指标思想",url:"asds_error"},
						             {id:"1",name:"1.2 校领导年龄和学位结构",url:"ASDS_table1-2"},
						             {id:"1",name:"1.3 校级教学管理人员结构",url:"ASDS_table1-3"},
						             {id:"1",name:"1.4 专业布局概览",url:"ASDS_table1-4"},
						             {id:"1",name:"1.5 教学单位学科专业概览",url:"ASDS_table1-5"},
						           /*  {id:"1",name:"1.6 教学单位学科专业概览",url:"ASDS_table1-6"},*/
						             ]
					   },
					   {id:"2",name:"2. 教师队伍",
						   children:[
						             {id:"1",name:"2.1 学校教师情况及师生比",url:"ASDS_table2-1"},
						             {id:"1",name:"2.2  教师队伍结构",url:"ASDS_table2-2"},
						             {id:"1",name:"2.3 各教学单位教师与本科生情况",url:"ASDS_table2-3"},
						             {id:"1",name:"2.4 各专业专任教师与本科生情况",url:"ASDS_table2-4"},
						             {id:"1",name:"2.5 各专业授课教师情况",url:"ASDS_table2-5"},
						           /*  {id:"1",name:"2.6教授、副教授及高层次人才讲授本科课程情况",url:"ASDS_table2-6"},*/
						             {id:"1",name:"2.6教授、副教授及高层次人才讲授本科课程情况",children:[
								                                                   	{name:"2.6.1教授、副教授讲授本科课程情况",url:"ASDS_table2-6"},
								                                                   	{name:"2.6.2高层次人才讲授本科课程情况",url:"ASDS_table2-6-2"},
								                                                   ]},
						             {id:"1",name:"2.7教师发展与服务情况",children:[
									                                                   	{name:"2.7.1教师教学发展机构培训情况",url:"ASDS_table2-7-1"},
									                                                   	{name:"2.7.2教师进修、培养与交流情况",url:"ASDS_table2-7"},
									                                                   ]},
						             
						             
						             {id:"1",name:"2.8 专业带头人情况",url:"ASDS_table2-8"},
						             {id:"1",name:"2.9学校实验技术人员结构",url:"ASDS_table2-9"},
						          /*   {id:"1",name:"2.10 教师教育教学改革与成果",url:"ASDS_table2-10"}*/
						             ]
					   },
					   {id:"3",name:"3. 教学资源",
						   children:[
						             {id:"1",name:"3.1 教学经费投入情况",url:"ASDS_table3-1"},
						             {id:"1",name:"3.2 教学基本设施情况",children:[
						                                                   	{name:"3.2.1 教学行政用房情况",url:"ASDS_table3-2-1"},
						                                                   	{name:"3.2.2 教学、科研仪器情况",url:"ASDS_table3-2-2"},
						                                                   	{name:"3.2.3 本科校内实验、实习、实训场所及设备情况",url:"ASDS_table3-2-3"},
						                                                   	{name:"3.2.4 校园网、图书情况",url:"ASDS_table3-2-4"},
						                                                   ]},
						             {id:"1",name:"3.3 专业概况预览",url:"ASDS_table3-3"},
						             {id:"1",name:"3.4 优势专业概览",url:"ASDS_table3-4"},
						             {id:"1",name:"3.5 新设专业概览",url:"ASDS_table3-5"},
						           //  {id:"1",name:"3.6 各教学单位课程开设情况",url:"ASDS_table3-6"},
						             {id:"1",name:"3.6各专业实验教学情况",url:"ASDS_table3-7"},
						             
						             {id:"1",name:"3.7课程开设情况",children:[
						                                                   	{name:"3.7.1全校课程开设情况",url:"ASDS_table3-8"},
						                                                   	{name:"3.7.2全校课程规模情况",url:"ASDS_table3-7-2"},
						                                                   ]},
						             
						             {id:"1",name:"3.8在线开放课程情况",url:"ASDS_table3-9"},
						             {id:"1",name:"3.9 合作办学情况",url:"ASDS_table3-10"}
						             ]
					   },
					   {id:"4",name:"4. 培养过程",
						   children:[
						             {id:"1",name:"4.1 专业培养课程学分结构",url:"ASDS_table4-1"},
						             {id:"1",name:"4.2 人才培养模式创新实验项目情况",url:"ASDS_table4-2"},
						             
						             {id:"1",name:"4.3创新创业教育",children:[
					                                                   	{name:"4.3.1学校创新创业教育情况",url:"ASDS_table4-3"},
					                                                   	{name:"4.3.2高校实践育人创新创业基地",url:"ASDS_table4-3-2"},
					                                                   ]},
						             
						             {id:"1",name:"4.4 实验教学示范中心",url:"ASDS_table4-4"},
						             {id:"1",name:"4.5 毕业综合训练情况",url:"ASDS_table4-5"},
						             {id:"1",name:"4.6 校园文化活动情况",url:"ASDS_table4-6"},
						             {id:"1",name:"4.7 学生社团情况",url:"ASDS_table4-7"},
						             {id:"1",name:"4.8国外及港澳台学生情况",url:"ASDS_table4-8"},
//						             {id:"1",name:"4.8 各教学单位教育教学研究与改革情况",url:"ASDS_table4-8"}
						             ]
					   },
					   {id:"5",name:"5. 学生发展",
						   children:[
						             {id:"1",name:"5.1 生源情况",url:"ASDS_table5-1"},
						             {id:"1",name:"5.2 各专业（大类）本科生招生报到情况",children:[
						                                                   	{name:"5.2.1 各专业本科生招生报到情况",url:"ASDS_table5-2"},
						                                                   	{name:"5.2.2 各大类本科生招生报到情况",url:"ASDS_table5-2-2"},
						                                                   ]},
						             {id:"1",name:"5.3学生管理人员与心理咨询人员结构",url:"ASDS_table5-3"},
						             {id:"1",name:"5.4 各教学单位学生管理人员与学生情况",url:"ASDS_table5-4"},
						             {id:"1",name:"5.5 本科生奖贷补情况",url:"ASDS_table5-5"},
						             {id:"1",name:"5.6 学生发展情况",url:"ASDS_table5-6"},
						             {id:"1",name:"5.7 本科生参加大学生创新创业训练计划与参与教师科研情况",url:"ASDS_table5-7"},
						             {id:"1",name:"5.8 各专业毕业生情况",url:"ASDS_table5-8"},
						             {id:"1",name:"5.9 毕业生就业去向分布情况",url:"ASDS_table5-9"}
						             ]},
					   {id:"6",name:"6. 质量保障",
						   children:[
						             {id:"1",name:"6.1 评教信息",url:"ASDS_table6-1"},
						             {id:"1",name:"6.2 教学质量管理队伍结构",url:"ASDS_table6-2"},
						             {id:"1",name:"6.3教育教学改革与成果",url:"ASDS_table6-3"}
						             ]},
					   {id:"7",name:"7. 详细数据附表",
						          	   children:[
						          	             {id:"1",name:"7.1 专业基本情况",url:"ASDS_tableF-1"},
						          	             {id:"1",name:"7.2 专业大类情况",url:"ASDS_tableF-2"},
						          	             {id:"1",name:"7.3 校领导情况",url:"ASDS_tableF-3"},
						          	             {id:"1",name:"7.4 校级教学管理人员基本信息",url:"ASDS_tableF-4"},
						          	             {id:"1",name:"7.5 各教学单位专任教师结构",url:"ASDS_tableF-5"},
						          	             {id:"1",name:"7.6 各教学单位专业带头人情况",url:"ASDS_tableF-6"},
						          	             {id:"1",name:"7.7 各教学单位实验系列职称人员结构",url:"ASDS_tableF-7"},
						          	             {id:"1",name:"7.8 各专业授课教师结构",url:"ASDS_tableF-8"},
						          	             {id:"1",name:"7.9 各大类授课教师结构",url:"ASDS_tableF-9"},
						          	             {id:"1",name:"7.10 各专业授课教师授课情况",url:"ASDS_tableF-10"},
						          	             {id:"1",name:"7.11 各专业大类授课教师授课情况",url:"ASDS_tableF-11"},
						          	             {id:"1",name:"7.12 各专业教师、学生情况概览",url:"ASDS_tableF-12"},
						          	             {id:"1",name:"7.13 校内实验室使用情况",url:"ASDS_tableF-13"},
						          	            // {id:"1",name:"7.9 校内实验实习实训场所情况",url:"ASDS_tableF-9"},
						          	             {id:"1",name:"7.14 各专业实践教学情况",url:"ASDS_tableF-14"},
						          	             {id:"1",name:"7.15 各专业教学情况一览表",url:"ASDS_tableF-15"},
						          	             {id:"1",name:"7.16 毕业综合训练情况",url:"ASDS_tableF-16"},
						          	             {id:"1",name:"7.16-1医学专业学生毕业综合训练情况",url:"ASDS_tableF-16-1"},
						          	             {id:"1",name:"7.17 各专业本科生招生情况",url:"ASDS_tableF-17"},
						          	             {id:"1",name:"7.18 各大类本科生招生情况",url:"ASDS_tableF-18"},
						          	             {id:"1",name:"7.19各专业毕业生情况",url:"ASDS_tableF-19"}
						          	             ]},
					   {id:"8",name:"8. 状态分析报告",
						   children:[
						             {id:"1",name:"8.1 状态分析报告(new)",url:"ASDS_table_main"},
						             {id:"1",name:"8.2 状态分析报告记录",url:"ASDS_table_history"}
						             ]}
					   
					];
			//getInspectSysInfo();
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			//getTaskInfo();
		/*	$('.li1:eq(0)').attr('class','li1 mySelect');
			;*/
	
			iframeTab('ASDS_tableG-2')
		}else if(num==1){
			$("#tempIframe").css('display','block');
			$("#collegeContent").hide();
			$("#down").show();
			$("#tab div:eq(1)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			array=[];
			//getTaskInfo();
			
			/*var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
			appendStr+="<a href='javascript:void(0)' onclick=\"iframeTab('page_0',0)\"><img src='/audit/page/zenith/staticPage/img/uploading.png' style='margin-top:2%'/><br/></a>"
			 appendStr+="<a href='javascript:void(0)' onclick='allLook()' ><img src='img/readAll.png' style='margin-top:2%'></a></div>";
			
			$("#content").append(appendStr);*/
			ASDSReportInit();
			$("#down").hide();
			$("#middle").hide();
			$("#main").attr("style","width:100%;float:left")
			iframeTab('/CHART/page/qualityReport/qualityReport.jsp');
		}else if(num==2){
			$("#tempIframe").css('display','block');
			$("#collegeContent").hide();
			$("#down").show();
			array=[];
			/*array=[{id:"1",name:"学院排名",url:"/audit/page/zenith/staticPage/newMain/xueyuan_home.jsp"},
			       {id:"1",name:"专业排名",url:"/audit/page/zenith/staticPage/newMain/assessRanking.jsp"}];*/
			$("#tab div:eq(3)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(3)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('/audit/page/zenith/staticPage/newMain/assessRanking.jsp?');
		}else if(num==3){
			/*var table = "<div style='border:1px solid red;margin-top:-10px;'>请输入学院名称:<select style='width:150px;height:25px;'  type='text' id='inum'placeholder='输入学院搜索' ></select><img src='/TQCC/page/college/images/count/seek.png' style='width:30px;height:20px;margin-top:10px;'></div>" +
			"<div id = 'content1' style='height:200px;width:98%;background-color:#E8E8E8'><div id = 'ctop1' style='height:30px;background-color:#DFDDDE'>定量数据表计算公式</div><div id='areaIndex'><textarea style='width:100%;height:85%' id='indexContent'></textarea></div>"*/ ;
			/*$.ligerDialog.open({
			height : 550,
			width : 700,
			top : 80,
			title : '分析报告',
			//content: table,
			url :   '/audit/page/zenith/staticPage/College.jsp?',
			showMax : false,
			showToggle : true,
			showMin : false,
			isResize : true,
			slide : false,
			isHidden:false
			});*/
			$("#tempIframe").css('display','none');
			$("#collegeContent").show();
			$("#down").find("li").text("");
			collegeLoad();
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(2)").html());
			$('#content').tendina('destroy');
		}else if(num==4){
			$("#tempIframe").css('display','block');
			$("#collegeContent").hide();
			$("#down").show();
			array=hzpgbg;
			$("#tab div:eq(4)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(4)").html());
			$('#content').tendina('destroy');
			$('.li1:eq(0)').attr('class','li1 mySelect');
			ASDSReportInit();
			iframeTab('/audit/page/zenith/staticPage/hzpgbgReport/hzpg_table1-1.jsp');
		}
	}else if(cid==3){
		if(num==0){
			itemId = 1;
			array =[];
			$('#content').tendina('destroy');
			$("#dataReport").html($("#tab div:eq(0)").html());
			$("#tab div:eq(0)").css("background-color","#46A3D1");
			//getInspectSysInfo();
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			//getTaskInfo();
		/*	$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('ASDS_tableG-2',1);*/
			//iframeTab('/CHART/page/qualityReport/qualityReport.jsp');
			iframeTab('/audit/page/zenith/staticPage/newMain/reportL.jsp');
			/*$("#down").hide();
			$("#middle").hide();
			$("#main").attr("style","width:100%;float:left;")*/
		}else if(num==1){
			$("#tab div:eq(1)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			array =[{id:"1",name:"专业自评报告",url:"/audit/page/guanliyuan/staticPage/page_0.jsp",
					   children:[
					         	//	             {id:"1",name:"1.1 办学指标思想",url:"asds_error"},
					         		             {id:"1",name:"整改报告",url:"/audit/page/guanliyuan/staticPage/page_0.jsp"},
					         		             {id:"1",name:"专业质量报告",url:"/audit/page/guanliyuan/staticPage/page_4.jsp"},
					         		             ]
					         	}];
			//getTaskInfo();
			/*var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
			appendStr+="<a href='javascript:void(0)' onclick=\"iframeTab('page_0',0)\"><img src='/audit/page/zenith/staticPage/img/uploading.png' style='margin-top:2%'/><br/></a>"
			appendStr+="<a href='javascript:void(0)' onclick='allLook()' ><img src='img/readAll.png' style='margin-top:2%'></a></div>";
			
			$("#content").append(appendStr);*/
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 selected');
			$("ul").show();
			$('.li2:eq(0)').attr('class','li2 mySelect');
			iframeTab('/audit/page/guanliyuan/staticPage/page_0.jsp');
		}else if(num==2){
			array=[];
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(2)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('../loading');
		}else if(num==3){
//			array=[];
			array=[{id:"1",name:"本科学生教评报告",url:"/audit/page/analysisReport/report_1.jsp"},
			       {id:"2",name:"本科学生教评报告记录",url:"/audit/page/analysisReport/ASDS_table_history.jsp"}];
			$("#tab div:eq(1)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('/audit/page/analysisReport/report_1.jsp');
		}
		else if(num==4){
			array=[];
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(2)").html());
			array=[{id:"1",name:"一、2016年学院全省排名情况",url:"/audit/page/analysisReport/HZSF_Table_1.jsp"},
			       {id:"1",name:"二、2015年学院专科排名情况",url:"/audit/page/analysisReport/HZSF_Table_2.jsp"},
			       {id:"1",name:"三、学院排名",url:"/audit/page/analysisReport/HZSF_Table_3.jsp"},
			       {id:"1",name:"四、中国最好大学排名",url:"/audit/page/analysisReport/HZSF_Table_4.jsp"},
			       {id:"1",name:"五、武书连大学排名",url:"/audit/page/analysisReport/WSL_Table_5.jsp"},
			       {id:"1",name:"六、校友会大学排名",url:"/audit/page/analysisReport/XYH_Table_6.jsp"}];
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('/audit/page/analysisReport/HZSF_Table_2.jsp');
		}
	}else if(cid==4){
		if(num==0){
			array =[];
			$('#content').tendina('destroy');
			$("#dataReport").html($("#tab div:eq(0)").html());
			$("#tab div:eq(0)").css("background-color","#46A3D1");
			//getInspectSysInfo();
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			//getTaskInfo();
		/*	$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('ASDS_tableG-2',1);*/
			iframeTab('/audit/page/searchAll/searchAll.jsp');
		}else if(num==1){
			
			$("#tab div:eq(1)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			array=[];
			//getTaskInfo();
			
			/*var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
			appendStr+="<a href='javascript:void(0)' onclick=\"iframeTab('page_0',0)\"><img src='/audit/page/zenith/staticPage/img/uploading.png' style='margin-top:2%'/><br/></a>"
			 appendStr+="<a href='javascript:void(0)' onclick='allLook()' ><img src='img/readAll.png' style='margin-top:2%'></a></div>";
			
			$("#content").append(appendStr);*/
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('/CHART/page/qualitydata/zhiliangbaogao.jsp');
			$("#down").hide();
			$("#middle").hide();
			$("#main").attr("style","width:100%;float:left;")
		}else if(num==2){
			array=[];
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(2)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('../loading');
		}else if(num==3){
			var array1 = [{id:"1",name:"表1_4学校教学科研单位",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表1_4学校教学科研单位"))},
			              {id:"2",name:"表1_5_1专业基本情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表1_5_1专业基本情况"))},
			              {id:"3",name:"表1_5_2专业大类情况表",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表1_5_2专业大类情况表"))},
			              {id:"4",name:"表1_6_1教职工基本信息",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表1_6_1教职工基本信息"))},
			              {id:"5",name:"表1_6_2外聘教师基本信息",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表1_6_2外聘教师基本信息"))}, 
			              {id:"6",name:"表1_6_3附属医院师资情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表1_6_3附属医院师资情况"))},
			              {id:"7",name:"表1_8_1本科实验场所",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表1_8_1本科实验场所"))},
			              {id:"8",name:"表1_8_2科研基地",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表1_8_2科研基地"))}];
			
			var array3 = [{id:"1",name:"表3_2相关管理人员基本信息",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_2相关管理人员基本信息"))},
			              {id:"2",name:"表3_3_1高层次人才",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_3_1高层次人才"))},
			              {id:"3",name:"表3_3_2高层次教学_研究团队",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_3_2高层次教学_研究团队"))},
			              {id:"4",name:"表3_4_2教师培训进修_交流情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_4_2教师培训进修_交流情况"))},
			              {id:"5",name:"表3_5_1教师主持科研项目情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_5_1教师主持科研项目情况"))},
			              {id:"6",name:"表3_5_2教师获得科研奖励情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_5_2教师获得科研奖励情况"))},
			              {id:"7",name:"表3_5_3教师发表的论文情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_5_3教师发表的论文情况"))},
			              {id:"8",name:"表3_5_4教师出版专著情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_5_4教师出版专著情况"))},
			              {id:"9",name:"表3_5_5教师专利_著作权_授权情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_5_5教师专利_著作权_授权情况"))},
			              {id:"10",name:"表3_5_6教师主编本专业教材情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表3_5_6教师主编本专业教材情况"))}];
			
			var array4 = [{id:"1",name:"表4_1_2博士后流动点",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表4_1_2博士后流动点"))},
			              {id:"2",name:"表4_1_3博士点_硕士点",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表4_1_3博士点_硕士点"))},
			              {id:"3",name:"表4_1_4重点学科",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表4_1_4重点学科"))},
			              {id:"4",name:"表4_2专业培养计划表",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表4_2专业培养计划表"))}];
			
			var array5 = [{id:"1",name:"表5_1_1开课情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表5_1_1开课情况"))},
			              {id:"2",name:"表5_1_2专业课教学实施情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表5_1_2专业课教学实施情况"))},
			              {id:"3",name:"表5_1_3专业核心课程情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表5_1_3专业核心课程情况"))},
			              {id:"4",name:"表5_1_4分专业_大类_专业实验课情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表5_1_4分专业_大类_专业实验课情况"))},
			              {id:"5",name:"表5_2_1分专业毕业综合训练情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表5_2_1分专业毕业综合训练情况"))},
			              {id:"6",name:"表5_2_2分专业教师指导学生毕业综合训练情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表5_2_2分专业教师指导学生毕业综合训练情况"))},
			              {id:"6",name:"表5_3_2本科教学信息化",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表5_3_2本科教学信息化"))}];
			
			var array6 = [{id:"1",name:"表6_2_1本科生转专业情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_2_1本科生转专业情况"))},
			              {id:"2",name:"表6_2_2本科生辅修_双学位情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_2_2本科生辅修_双学位情况"))},
			              {id:"3",name:"表6_3_4近一届各专业_大类_招生报到情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_3_4近一届各专业_大类_招生报到情况"))},
			              {id:"4",name:"表6_5_2应届本科毕业生分专业毕业就业情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_5_2应届本科毕业生分专业毕业就业情况"))},
			              {id:"5",name:"表6_6_1学生参加大学生创新创业训练计划情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_6_1学生参加大学生创新创业训练计划情况"))},
			              {id:"6",name:"表6_6_2学生参与教师科研项目情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_6_2学生参与教师科研项目情况"))},
			              {id:"7",name:"表6_6_3学生获省级及以上各类竞赛奖励情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_6_3学生获省级及以上各类竞赛奖励情况"))},
			              {id:"8",name:"表6_6_4学生获专业比赛奖励情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_6_4学生获专业比赛奖励情况"))},
			              {id:"9",name:"表6_6_5学生发表学术论文情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_6_5学生发表学术论文情况"))},
			              {id:"10",name:"表6_6_6学生创作_表演的代表性作品",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_6_6学生创作_表演的代表性作品"))},
			              {id:"11",name:"表6_6_7学生专利_著作权_授权情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_6_7学生专利_著作权_授权情况"))},
			              {id:"11",name:"表6_7本科生交流情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表6_7本科生交流情况"))}];
			
			var array7 = [{id:"1",name:"表7_3_1教育教学研究与改革项目",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表7_3_1教育教学研究与改革项目"))},
			              {id:"2",name:"表7_3_2教学成果奖",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表7_3_2教学成果奖"))},
			              {id:"3",name:"表7_3_3省级及以上本科教学工程项目情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表7_3_3省级及以上本科教学工程项目情况"))}];
			
			array=[{id:"1",name:"学校基本信息",children:array1},
			       {id:"2",name:"学校基本条件",children:[{id:"1",name:"表2_4校外实习_实训基地",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表2_4校外实习_实训基地"))},{id:"1",name:"表2_7本科实验设备情况",url:"/audit/page/searchAll/lookDataTable.jsp?tableName="+encodeURI(encodeURI("表2_7本科实验设备情况"))}]},
			       {id:"3",name:"教职工信息",children:array3},
			       {id:"4",name:"学科专业",children:array4},
			       {id:"5",name:"人才培养",children:array5},
			       {id:"6",name:"学生信息",children:array6},
			       {id:"7",name:"教学管理与质量监测",children:array7}];
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(2)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
//			iframeTab('../loading');
			iframeTab('/audit/page/searchAll/lookDataTable.jsp?tableName='+encodeURI(encodeURI("表1_4学校教学科研单位")));
		}
	}else if(cid==5){
		if(num==0){
			itemId = 1;
			array =[{id:"1",name:"专任教师情况统计表", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=1"},
			        {id:"1",name:"专任教师明细表", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=2"},
			        {id:"1",name:"承担教学任务的专任教师名单", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=3"},
			        {id:"1",name:"未承担教学任务的专任教师明细表", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=4"},
			        {id:"1",name:"教师职称结构", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=5"},
			        {id:"1",name:"教师学位结构", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=6"},
			        {id:"1",name:"教师学缘结构", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=7"},
			        {id:"1",name:"教师年龄结构", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=8"},
			        {id:"1",name:"教师背景情况", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=9"}
			];
			$('#content').tendina('destroy');
			$("#dataReport").html($("#tab div:eq(0)").html());
			$("#tab div:eq(0)").css("background-color","#46A3D1");
			//getInspectSysInfo();
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			//getTaskInfo();
		/*	$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('ASDS_tableG-2',1);*/
			iframeTab('/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=1');
		}else if(num==1){
			
			$("#tab div:eq(1)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(0)").html());
			$('#content').tendina('destroy');
			array =[
                    {id:"1",name:"授课教师", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=10"},
			        {id:"1",name:"教授、副教授授课课时情况", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=11"},
			        {id:"1",name:"教授、副教授、助教授课情况", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=12"},
			        {id:"1",name:"教授授课课程名单", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=13"},
			        {id:"1",name:"教授给低年级本科生授课名单", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=14"}
			];
			//getTaskInfo();
			
			/*var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
			appendStr+="<a href='javascript:void(0)' onclick=\"iframeTab('page_0',0)\"><img src='/audit/page/zenith/staticPage/img/uploading.png' style='margin-top:2%'/><br/></a>"
			 appendStr+="<a href='javascript:void(0)' onclick='allLook()' ><img src='img/readAll.png' style='margin-top:2%'></a></div>";
			$("#content").append(appendStr);*/
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=10');
		}else if(num==2){
			array =[{id:"1",name:"教师及本科生", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=21"},
			        {id:"1",name:"专业带头人", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=22"},
			        {id:"1",name:"实验技术人员", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=23"},
			        {id:"1",name:"课程开设情况表", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=26"},
			        {id:"1",name:"教育教学研究与改革情况", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=24"},
			        {id:"1",name:"学生管理人员与学生情况", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=25"}
			];
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=21');
		}else if(num==3){
			array =[{id:"1",name:"授课教师", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=31"},
			        {id:"1",name:"专业带头人", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=32"},
			        {id:"1",name:"招生报到情况", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=33"},
			        {id:"1",name:"毕业就业情况", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=34"},
			        {id:"1",name:"专业培养方案学分结构", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=35"},
			        {id:"1",name:"课程学分情况表", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=36"},
			        {id:"1",name:"毕业综合训练情况表", children:[],url:"/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=37"}
			];
			$("#tab div:eq(3)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('/audit/page/zenith/staticPage/newMain/analysis.jsp?aid=31');
		}	
	}else if(cid==6){
		if(num==0){
			array =[];
			$('#content').tendina('destroy');
			$("#dataReport").html($("#tab div:eq(0)").html());
			$("#tab div:eq(0)").css("background-color","#46A3D1");
			//getInspectSysInfo();
			ASDSReportInit();
			//$('.li1:eq(0)').attr('class','li1 mySelect');
			//getTaskInfo();
		/*	$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('ASDS_tableG-2',1);*/
			iframeTab('/audit/page/zenith/staticPage/newMain/SupportFileManage.jsp');
			//iframeTab('/CHART/showAndDownReport.jsp');
			$("#down").hide();
			$("#middle").hide();
			$("#main").attr("style","width:100%;float:left;")
		}else if(num==1){
			
			$("#tab div:eq(1)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			array=[];
			//getTaskInfo();
			
			/*var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
			appendStr+="<a href='javascript:void(0)' onclick=\"iframeTab('page_0',0)\"><img src='/audit/page/zenith/staticPage/img/uploading.png' style='margin-top:2%'/><br/></a>"
			 appendStr+="<a href='javascript:void(0)' onclick='allLook()' ><img src='img/readAll.png' style='margin-top:2%'></a></div>";
			
			$("#content").append(appendStr);*/
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('../loading');
		}else if(num==2){
			
			array=[];
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(2)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('../loading');
		}	
	}else if(cid==7){
		if(num==0){
			itemId = 1;
			array =[];
			$('#content').tendina('destroy');
			$("#dataReport").html($("#tab div:eq(0)").html());
			$("#tab div:eq(0)").css("background-color","#46A3D1");
			//getInspectSysInfo();
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			//getTaskInfo();
		/*	$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('ASDS_tableG-2',1);*/
//			iframeTab('/datareport_platform/page/datareport/home.jsp');
			iframeTab('/audit/page/zenith/staticPage/mains_data.jsp');
			$("#down").hide();
			$("#middle").hide();
			$("#main").attr("style","width:100%;float:left;")
		}else if(num==1){
			
			$("#tab div:eq(1)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(1)").html());
			$('#content').tendina('destroy');
			array=[{id:"1",name:"专业评估", children:[],url:"/audit/page/guanliyuan/staticPage/jindugenzong.jsp"}];
			//getTaskInfo();
			
			/*var appendStr="<div><a href='javascript:void(0)' onclick='insertTaskInfo(2)'><img src='/audit/page/zenith/staticPage/img/submitReport.png' style='margin-top:10%'/></a><br/>";
			appendStr+="<a href='javascript:void(0)' onclick=\"iframeTab('page_0',0)\"><img src='/audit/page/zenith/staticPage/img/uploading.png' style='margin-top:2%'/><br/></a>"
			 appendStr+="<a href='javascript:void(0)' onclick='allLook()' ><img src='img/readAll.png' style='margin-top:2%'></a></div>";
			$("#content").append(appendStr);*/
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('/audit/page/guanliyuan/staticPage/jindugenzong.jsp');
		}else if(num==2){
			array=[];
			$("#tab div:eq(2)").css("background-color","#46A3D1");
			$("#dataReport").html($("#tab div:eq(2)").html());
			$('#content').tendina('destroy');
			ASDSReportInit();
			$('.li1:eq(0)').attr('class','li1 mySelect');
			iframeTab('../loading');
			
		}	
	}

	
}

function insertTaskInfo(item){
	
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var date = new Date();
	var nowDate = parseInt(date.getFullYear());
	var dates = dateReport.split("~");
	var nowDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
	if(taskInfo.length==0){
		if(Date.parse(dates[0])<=Date.parse(nowDate)<=Date.parse(dates[1])){
			$.ajax({
				url :sContentPath+"/asAssessReport/insertTaskInfo.do",
				data:{
					"item":item,
					"specialtyId":specialtyId,
					"dateYear":dateYear
				},
				async:false,
				type:'POST',
				success:function(data){
					alert(data);
					//getTaskInfo();
				}
			});
		}else{
			alert("当前时间不在任务时间内");
		}
		
	}else{
		 if(taskInfo[0].self_assess_zt==2){
			 if(Date.parse(dates[0])<=Date.parse(nowDate)<=Date.parse(dates[1])){
				 
				 $.ajax({
						url :sContentPath+"/asAssessReport/updateTaskInfo.do",
						data:{
							"id":taskInfo[0].id
						},
						async:false,
						type:'POST',
						success:function(data){
							alert(data);
							//getTaskInfo();
						}
						
					});
				}else{
					alert("当前时间不在任务时间内");
				}
		}else{
			alert("自评人已提交审核");
		}
	}
}
//领导驾驶舱页面点击领导按钮修改密码
function updatePassword(){
	var b = document.body;
	//设置边距为0，是为了全屏遮盖，否则上、右两边会留有边距，不能全屏遮盖
	b.style.margin=0;
	jQuery("body").append("<div id='mask'></div>");
	jQuery("#mask").addClass("mask").fadeIn("slow");
	jQuery("#pwdManageDiv").fadeIn("slow");
	//实现透明遮盖，如果不需要透明，不需要设置此属性
	var ie = !-[1,]; 
	var maskobj = document.getElementById("mask");
	if(ie){
		maskobj.style.filter="alpha(opacity=80)";
	}else{
		maskobj.style.opacity="0.8";
	}
	var sp_height = $(document).height()//获取当期窗口的高度  
	$(".sp_box").css({"opacity":"0.5","height":sp_height})//锁屏层高度采用获取窗口的高度，从而达到锁全屏的目的。  
	$(".sp_box").show()//显示锁屏层，此时锁屏层的宽在CSS里设置了100%  
}
jQuery(function (jQuery) {
	//关闭
	jQuery(".close_btn").hover(function () { jQuery(this).css({ color: 'black' }) }, function () { jQuery(this).css({ color: '#999' }) }).one('click', function () {
		jQuery("#pwdManageDiv").fadeOut("fast");
		jQuery("#mask").css({ display: 'none' });
		$(".sp_box").hide()//锁屏层消失 
	});
});

function closePswd(){
	jQuery("#pwdManageDiv").fadeOut("fast");
	jQuery("#mask").css({ display: 'none' });
	$(".sp_box").hide()//锁屏层消失 
}

function passwordWH(){
	var oldPassword = jQuery("#oldPassword").val();
	var newPassword = jQuery("#newPassword").val();
	var renewPassword = jQuery("#renewPassword").val();
	
	//验证密码
	if (oldPassword == null || isNull(oldPassword)) {
		alert("原密码不能为空");
		$("#oldPassword").focus();
		return;
	}
	//新密码
	var cat = /.{6,16}/g
	if (newPassword == null || isNull(newPassword)) {
		alert("新密码不能为空");
		$("#newPassword").focus();
		return;
	}
	if (!cat.test(newPassword)) {
		alert("新密码格式错误");
		$("#newPassword").focus();
		return;
	}
	//验证密码
	if (renewPassword != newPassword) {
		alert("两次密码输入不一致");
		$("#renewPassword").focus();
		return;
	}
	var url = "/CHART/home/passwordWH.htm?oldPassword="+oldPassword+"&newPassword="+newPassword;
    jQuery.ajax({
		type:'POST',
		dateType:'xml',
		url:url,
		async: false,
		success:function(data){
			if (data.saveStatic == null) {
				return;
			}
			var bl = data.saveStatic;
			if (bl) {
				alert("保存成功！系统即将退出！");
				closePswd();
				window.location.href="/";
			}else {
				alert("原密码错误，请重新输入！");
			}
		}
	});//ajax
	
}
function isNull( str ){ 
	if ( str == "" ) return true; 
	var regu = "^[ ]+$"; 
	var re = new RegExp(regu); 
	return re.test(str); 
} 

function nfocus() {
	jQuery('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
	jQuery('#newPassword').keyup();
}

function nkeyup() {
	var __th = $("#newPassword");
	
	if (!__th.val()) {
		Primary();
		return;
	}
	if (__th.val().length < 6) {
		Weak();
		return;
	}
	var _r = checkPassword(__th);
	if (_r < 1) {
		Primary();
		return;
	}

	if (_r > 0 && _r < 2) {
		Weak();
	} else if (_r >= 2 && _r < 4) {
		Medium();
	} else if (_r >= 4) {
		Tough();
	}

//	$('#pwd_tip').hide();
//	$('#pwd_err').hide();
}

function Primary() {
	$('#pwdLevel_1').attr('class', 'ywz_zhuce_huixian');
	$('#pwdLevel_2').attr('class', 'ywz_zhuce_huixian');
	$('#pwdLevel_3').attr('class', 'ywz_zhuce_huixian');
}

function Weak() {
	$('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
	$('#pwdLevel_2').attr('class', 'ywz_zhuce_huixian');
	$('#pwdLevel_3').attr('class', 'ywz_zhuce_huixian');
}

function Medium() {
	$('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
	$('#pwdLevel_2').attr('class', 'ywz_zhuce_hongxian2');
	$('#pwdLevel_3').attr('class', 'ywz_zhuce_huixian');
}

function Tough() {
	$('#pwdLevel_1').attr('class', 'ywz_zhuce_hongxian');
	$('#pwdLevel_2').attr('class', 'ywz_zhuce_hongxian2');
	$('#pwdLevel_3').attr('class', 'ywz_zhuce_hongxian3');
}
// 两次输入密码是否一致校验
function checkPassword(pwdinput) {
	var maths, smalls, bigs, corps, cat, num;
	var str = $("#newPassword").val()
	var len = str.length;

	var cat = /.{16}/g
	if (len == 0) return 1;
	if (len > 16) { $("#newPassword").val(str.match(cat)[0]); }
	cat = /.*[\u4e00-\u9fa5]+.*$/
	if (cat.test(str)) {
		return -1;
	}
	cat = /\d/;
	var maths = cat.test(str);
	cat = /[a-z]/;
	var smalls = cat.test(str);
	cat = /[A-Z]/;
	var bigs = cat.test(str);
	var corps = corpses(pwdinput);
	var num = maths + smalls + bigs + corps;

	if (len < 6) { return 1; }

	if (len >= 6 && len <= 8) {
		if (num == 1) return 1;
		if (num == 2 || num == 3) return 2;
		if (num == 4) return 3;
	}

	if (len > 8 && len <= 11) {
		if (num == 1) return 2;
		if (num == 2) return 3;
		if (num == 3) return 4;
		if (num == 4) return 5;
	}

	if (len > 11) {
		if (num == 1) return 3;
		if (num == 2) return 4;
		if (num > 2) return 5;
	}
}

function corpses(pwdinput) {
	var cat = /./g
	var str = $("#newPassword").val();
	var sz = str.match(cat)
	for (var i = 0; i < sz.length; i++) {
		cat = /\d/;
		maths_01 = cat.test(sz[i]);
		cat = /[a-z]/;
		smalls_01 = cat.test(sz[i]);
		cat = /[A-Z]/;
		bigs_01 = cat.test(sz[i]);
		if (!maths_01 && !smalls_01 && !bigs_01) { return true; }
	}
	return false;
}

function pop(){
	var b = document.body;
					
	//设置边距为0，是为了全屏遮盖，否则上、右两边会留有边距，不能全屏遮盖
	b.style.margin=0;
	$("md").style.display="block";
	$("md").style.height=getScrollHeight() +"px";
	
	var ie = !-[1,]; 
	//实现透明遮盖，如果不需要透明，不需要设置此属性
	if(ie){
		$("md").style.filter="alpha(opacity=80)";
	}else{
		$("md").style.opacity="0.8";
	}

}

function logout(){
	window.location.href="/logout";
}

function allLook(){
	var iframe=$("#tempIframe");
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
	var path = "/audit/page/zenith/staticPage/AllContent.jsp?type="+is_Engineering+"&specialtyId="+specialtyId+"&dateYear="+dateYear;
	iframe.attr("src",path);
	$("#content").attr("class","dropdown tendina");
	
}


function collegeLoad(){
		/*$.ajax({
			url:'/CHART/collegeReport/collegeReport_querycollegeAll.htm',
			async:false,
			type:"POST",
			data:{},
			//dataType: "json",
			success:function(data){
				var result=eval("("+data+")");
				$("#collegeId").empty();
				if(result.length>0){
					$.each(result,function(i,obj){
						$("#collegeId").append("<option value="+result[i][0]+">"+result[i][1]+"</option>")
					});
				}
			},error:function(){
				
			}
		});*/
		//选择学院类别事件
		selectChilds($("#collegeId").val());
		//选择学课名称事件
//		selectTable($("#collegeChildId").val());
		//选择年份
		selectTable($("#year").val());
		//创建表格
		createTable(templist);
	}

	//创建表格
	function createTable(templist){
		/*var tableData = {};
		tableData.Rows = templist;
		 $("#templist").ligerGrid({
			checkbox: false,
			//rownumbers: true,
			pageSizeOptions: [10, 20, 30, 40, 50],
			usePager: true,
			pageSize: 10,
			data: tableData,
			hideLoadButton: true,
			width: '100%',
			columns: [{
				display: '专业名称',
				name: 'FIELD2',
				minWidth: 400
			}, {
				display: '专业代码',
				name: 'FIELD1',
				width: 470
			},  {
				display: '操作',
				name: 'ID',
				minWidth: 380,
				align: 'center',
				render: function(row) {
					var code=row.FIELD1;
					var html = "<a href='javascript:;' style='margin:5px 0 0 5px;' onclick=closeOpent('"+row.FIELD1+"')  class='btn-small btn-icon'><img src='/TQCC/page/roleDataShow/images/edit.png' title='编辑'/></a> ";
					return html;
				}
			}]
		});*/
		$("#tb_tbody2").empty();
		var htmls="";
		$(templist).each(function(index,val){
			htmls +="<tr>"
			//网评时间
			htmls +="	<td nowrap='nowrap'";
			htmls +="style='padding:0 20px; height:20px;border:#DADADA 1px solid;'";
//			htmls +="	align='center'>"+val.a+"</td>";
			htmls +="	align='center'>"+val[0]+"</td>";
			//现场考查时间
			htmls +="	<td nowrap='nowrap'";
			htmls +="style='padding:0 20px; height:20px;border:#DADADA 1px solid;'";
//			htmls +="	align='center'>"+val.b+"</td>";
			htmls +="	align='center'>"+val[1]+"</td>";
			
			htmls +="	<td nowrap='nowrap'";
			htmls +="style='padding:0 20px; height:20px;border:#DADADA 1px solid;'";
//			htmls +="	align='center'>"+val.c+"</td>";
			htmls +="	align='center'>"+val[2]+"</td>";
				
			htmls +="	<td nowrap='nowrap'";
			htmls +="style='padding:0 20px; height:20px;border:#DADADA 1px solid;'";
//			htmls +="	align='center'>"+val.d+"</td>";
			htmls +="	align='center'>"+val[3]+"</td>";
					
			htmls +="	<td nowrap='nowrap'";
			htmls +="style='padding:0 20px; height:20px;border:#DADADA 1px solid;'";
//			htmls +="	align='center'>"+(val.e==undefined?"":val.e)+"</td>";
			htmls +="	align='center'>"+(val[4]==undefined?"":val[4])+"</td>";
						
			htmls +="	<td nowrap='nowrap'";
			htmls +="style='padding:0 20px; height:20px;border:#DADADA 1px solid;'";
//			htmls +="	align='center'>"+val.f+"</td>";
			htmls +="	align='center'>"+val[5]+"</td>";
							
			htmls +="<td nowrap='nowrap'";
			htmls +="	style='padding:0 20px 0 60px; height:20px;border:#DADADA 1px solid;'";
			htmls +="	align='center'>";
//			htmls +="	<div style='cursor:pointer;width:65px;align:center' onclick=closeOpent('"+val.b+"','"+val.a+"')>";
			htmls +="	<div style='cursor:pointer;width:65px;align:center;padding-top:8px;' onclick=closeOpent('"+val[1]+"','"+val[0]+"')>";
//			htmls +="			<img  src='/TQCC/page/roleDataShow/images/edit.png' style='float:left'/>";
			htmls +="			<img  src='/audit/images/ck_icon.png' style='float:left' title='查看'/>";
			htmls +="	</div>"	;
			htmls +="</td>"	;
			htmls +="	</tr> ";
		});
		$("#tb_tbody2").html(htmls);
	}
	//查询学课名称
	function selectChilds(id){
		$.ajax({
			url:"/CHART/collegeReport/collegeReport_getcollegeByCId.htm",
			data:{"cid":id},
			type:'POST',
			async:false,
			success:function(data){
				var result=eval("("+data+")");
				$("#collegeChildId").empty();
				if(result.length>0){
					$.each(result,function(i,obj){
						$("#collegeChildId").append("<option value="+result[i][1]+">"+result[i][1]+"</option>")
					});
				}
			},error:function(){
				
			}
		});
//		$.ajax({
//			url:"/CHART/analysisReport/analysis_findSpecialtyInfoByYear.htm",
//			data:{"year":id},
//			type:'POST',
//			async:false,
//			success:function(data){
//				var result=eval("("+data+")");
//				$("#collegeChildId").empty();
//				if(result.length>0){
//					$.each(result,function(i,obj){
//						$("#collegeChildId").append("<option value="+result[i][1]+">"+result[i][1]+"</option>")
//					});
//				}
//			},error:function(){
//				
//			}
//		});
		//selectTable($("#collegeChildId").val());
		//创建表格
		createTable(templist);
	}
	//根据页数查询
	function selectPages(page){
		if(page==1){
			page=1;
		}else if(page==2){
			//当它为第一页的时候
			if($("#prevPage").val()=="0")
				page=1
			else
				page=$("#prevPage").val();
		}else if(page==3){
			//当他它是最后一页时
			if(parseInt($("#nextPage").val())>parseInt($("#pages").text()))
				page=$("#pages").val();
			else
				page=$("#nextPage").val();
		}else if(page==4){
			page=$("#lastPage").val();
		}
		$.ajax({
			url:"/datareport_platform/dataTask/selectByCname.do",
			data:{
				/*"cname":$("#collegeChildId").val(),*/
				"pageNum":page
				},
			type:'POST',
			async:false,
			success:function(data){
				templist=data.resultObject;//*
				//给分页初始化
				$("#prevPage").val(data.pageNum-1);
				$("#nextPage").val(data.pageNum+1);
				$("#lastPage").val(data.pages);
				$("#pageNum").text(data.pageNum);
				$("#pages").text(data.pages);
			},error:function(){
				
			}
		});
		//创建表格
		createTable(templist);
	}
	//根据学课名称生成表格
	function selectTable(cname){
		templist=null;
//		$.ajax({
//			url:"/datareport_platform/dataTask/selectByCname.do",
//			data:{/*"cname":"工学"*/},
//			type:'POST',
//			async:false,
//			success:function(data){
//				templist=data.resultObject;//*
//				//给分页初始化
//				$("#prevPage").val(data.pageNum-1);
//				$("#nextPage").val(data.pageNum+1);
//				$("#lastPage").val(data.pages);
//				$("#pageNum").text(data.pageNum);
//				$("#pages").text(data.pages);
//			},error:function(){
//			}
//		});
		$.ajax({
			url:"/CHART/analysisReport/analysis_findSpecialtyInfoByYear.htm",
			data:{
				"key":"ASDS_table_zy",
				"year":cname
			},
			type:'POST',
			async:false,
			success:function(data){
//				templist=data.resultObject;//*
				templist=eval("("+data+")");
				//给分页初始化
				$("#prevPage").val(data.pageNum-1);
				$("#nextPage").val(data.pageNum+1);
				$("#lastPage").val(data.pages);
				$("#pageNum").text(data.pageNum);
				$("#pages").text(data.pages);
			},error:function(){
			}
		});
		//创建表格
		createTable(templist);
	}
	//关闭页面
	function closeOpent(collegeid,majorName){
		collegeCode = collegeid;
//		alert(collegeid);
		$("#tempIframe").css('display','block');
		$("#collegeContent").hide();
		$("#down").show();
		//学院类型
		var collegeLx;
		$.ajax({
			url:"/datareport_platform/dataTask/selectByCode.do",
			data:{"code":collegeid},
			type:"POST",
			dataType:"JSON",
			async:false,
			success:function(data){
				if(data!="" && data!=undefined){
					collegeLx=data[0][0].parentId;
				}
			},error:function(){
				
			}
		});
//		alert(testURL);
		zyfxbg=[{id:"1",name:"专业基本信息",
				   children:[
			             {id:"1",name:"专业基本信息",url:"ProfessionalReport/zy_table0-0.jsp?dateReport="+$("#year").val()},
			             ]
			   },
			   {id:"1",name:"一、学生",
				   children:[
							 {id:"1",name:"1.1本专业在校学生数",url:"ProfessionalReport/zy_table1-1.jsp?dateReport="+$("#year").val()+"&code="+collegeCode+"&majorName="+ encodeURI(encodeURI(majorName))},
							 {id:"1",name:"1.2 专业招生报到情况",url:"ProfessionalReport/zy_table1-2.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"1.3 本专业学生转入及转出情况",url:"ProfessionalReport/zy_table1_3.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"1.4 近三年毕业生去向分布情况",url:"ProfessionalReport/zy_table1-4.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"1.5 学生毕业就业情况",url:"ProfessionalReport/zy_table1-5.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"1.6 学生参与教师科研项目情况",url:"ProfessionalReport/zy_table1-6.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"1.7 学生学习成效",url:"ProfessionalReport/zy_table1-7.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"1.8 本专业本科生交流情况",url:"ProfessionalReport/zy_table1-8.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"1.9 学生社团",url:"ProfessionalReport/zy_table1-9.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"1.10 学生异动情况",url:"ProfessionalReport/zy_table1-10.jsp?dateReport="+$("#year").val()+"&code="+collegeCode}
				             ]
			   },
			   {id:"2",name:"二、师资队伍",
				   children:[
							 {id:"1",name:"职称结构（饼状图）",url:"ProfessionalReport/zy_zcjg.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"年龄结构（饼状图）",url:"ProfessionalReport/zy_nljg.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"学缘结构（饼状图）",url:"ProfessionalReport/zy_xyjg.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"学历学位结构（饼状图）",url:"ProfessionalReport/zy_xlxwjg.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"2.1本专业教师基本情况",url:"ProfessionalReport/zy_table2-1.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.2专任教师接受培训进修、交流情况",url:"ProfessionalReport/zy_table2-2.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.3专任教师主持科研项目明细表",url:"ProfessionalReport/zy_table2-3.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.4教师承担教学研究与改革项目明细表",url:"ProfessionalReport/zy_table2-4.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.5教师发表教学研究论文",url:"ProfessionalReport/zy_table2-5.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.6教师专利（著作权授权情况）明细表",url:"ProfessionalReport/zy_table2-6.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.7教师出版专著明细表",url:"ProfessionalReport/zy_table2-7.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.8高层次人才",url:"ProfessionalReport/zy_table2-8.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.9高层次教学、研究团队",url:"ProfessionalReport/zy_table2-9.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.10教师的教学、科研获奖情况",url:"ProfessionalReport/zy_table2-10.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.11教学成果奖",url:"ProfessionalReport/zy_table2-11.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.12出版教材",url:"ProfessionalReport/zy_table2-12.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.13教师发表科研论文",url:"ProfessionalReport/zy_table2-13.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"2.14课程教学质量评价统计表",url:"ProfessionalReport/zy_table2-14.jsp?dateReport="+$("#year").val()+"&code="+collegeCode}
				             ]
			   },
			   {id:"3",name:"三、课程",//"三、支撑条件",
				   children:[

//				             {id:"1",name:"3.1 与企业合作建立实践基地",url:"ProfessionalReport/zy_table3-1.jsp"},
							 {id:"1",name:"3.1 核心课程",url:"ProfessionalReport/zy_table3-1.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"3.2主要实践教学环节",url:"ProfessionalReport/zy_table3-2.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"3.3校级、省部级课程汇总表",url:"ProfessionalReport/zy_table3-3.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"3.4当年课程教材使用情况汇总表",url:"ProfessionalReport/zy_table3-4.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"3.5当年课程考试平均分汇总表",url:"ProfessionalReport/zy_table3-5.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"3.6当年课程考试不及格率汇总表",url:"ProfessionalReport/zy_table3-6.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
							 {id:"1",name:"3.7当年课程教学满意度评价汇总表",url:"ProfessionalReport/zy_table3-7.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
//				             {id:"1",name:"3.2 校内实践教学场所使用状况",url:"ProfessionalReport/zy_table3-2.jsp"},
//				             {id:"1",name:"3.3 校外实习实训基地使用状况",url:"ProfessionalReport/zy_table3-3.jsp"},
				             ]
			   },
			   {id:"4",name:"四、条件",
				   children:[
				             {id:"1",name:"4.1校外实习、实训基地",url:"ProfessionalReport/zy_table4-1.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             {id:"1",name:"4.2本科实验、实习、实训场所",url:"ProfessionalReport/zy_table4-2.jsp?dateReport="+$("#year").val()+"&code="+collegeCode},
				             ]
			   },
		/*	   {id:"5",name:"五、课程体系",
				   children:[
				             {id:"1",name:"5.1 课程情况",url:"ProfessionalReport/zy_table5-1.jsp"},
				             {id:"1",name:"5.2专业主干课程情况",url:"ProfessionalReport/zy_table5-2.jsp"},
				             {id:"1",name:"5.4近三年毕业设计（论文）情况",url:"ProfessionalReport/zy_table5-4.jsp"},
				             {id:"1",name:"5.5近三年专任教师代表性教学研究、科学研究项目",url:"ProfessionalReport/zy_table5-5.jsp"},
				             ]},
			   {id:"6",name:"六. 状态分析报告",
				   children:[
				             {id:"1",name:"6.1 状态分析报告(new)",url:"ProfessionalReport/zy_table_main.jsp"},
				             {id:"1",name:"6.2 状态分析报告记录",url:"ProfessionalReport/zy_table_history.jsp"}
				             ]}*/
	         ];
		
		//1文科 2理科
		if(collegeLx==1){
			array=zyfxbg;
			ASDSReportInit();
			iframeTab(testURL+"?collegeLx="+collegeLx+"&code="+collegeid+"&name="+name,testId);
		}else{
			array=zyfxbg;
			ASDSReportInit();
			iframeTab(testURL+"?collegeLx="+collegeLx+"&code="+collegeid+"&name="+name,testId);
		}
	}