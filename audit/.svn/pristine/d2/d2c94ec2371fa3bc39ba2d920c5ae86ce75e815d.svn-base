//返回
function returnreporti(){
		window.location.href = "/audit/page/qualityReport/hbTable.jsp";
}


//导入数据
function importData(){
	document.getElementById("ef").click();
}

jQuery(function(){
	var isjc = jQuery("#isjc").val();
	if(isjc ==  "0"){
		//初始化数据
		showgj(0);
	}
	
	if(isjc == "1"){
		showgjjc(0);
	}
	
	$("#ef").live('change',function(){ 
		var path = $("#ef").val();
		var fix = path.substring(path.lastIndexOf("."));
		if(fix != ".xls"){
			alert("选择的不是excel文件");
			return;
		}
		
		var gjname = jQuery("#gjname").val();
		var fname = path.substring(0,path.lastIndexOf("."));
		if(gjname != fname){
			alert("您选择的模板与高基表名不符，请重新选择");
			return;
		}
//		$("#eform").submit();
		// 为表单绑定异步上传的事件
			$("#eform").ajaxSubmit({
				url :  "/audit/upload?objclass="+jQuery("#objclass").val()+"&year="+jQuery("#year").val(), // 请求的url
				type : "post", // 请求方式
				dataType : "text", // 响应的数据类型
				async :false, // 异步
				error:function(){
					alert("文件提交不了，请联系技术人员");
				},
				success : function(msg){
					if(msg == "1"){
						var isjc = jQuery("#isjc").val();
						if(isjc ==  "0"){
							//初始化数据
							showgj(0);
						}
						
						if(isjc == "1"){
							showgjjc(0);
						}
					}else{
						alert("数据导入失败");
					}
					//若msg上传成功，导入数据库
				},
	 		});
	}); 
});


function showgj(status){
	var inputWidth = jQuery("#inputWid").val();
	if (status=="1") {
		jQuery("#bjButton").hide();
		jQuery("#dcButton").hide();
		jQuery("#bcButton").show();
		jQuery("#cus_ser").show();
		
	}else{
		jQuery("#bcButton").hide();
		jQuery("#cus_ser").hide();
		jQuery("#bjButton").show();
		jQuery("#dcButton").show();
	}
	var colsCount = 0;
	jQuery("#planTB tr").each(function(r){
		if (r==jQuery("#planTB tr").size()-1) {
			colsCount = jQuery(this).find('td').size();
		}
	});
	var url = "/audit/gj/showgjs.do?objclass="
		+jQuery("#objclass").val()+"&year="+jQuery("#year").val()+
		"&status=" + status+"&colsCount=" + colsCount+"&inputWidth="+inputWidth;
	var oTB = document.getElementById("planTB");
	jQuery("#planTB tr[name=gjdata]").each(function(r){
		var oDel = this.sectionRowIndex;
		oTB.deleteRow(oDel);
	});
	jQuery.ajax({
		async:false,
		url:url,
		type:'get',
		dataType:'json',
		error:function(){
			alert("系统自身原因，请联系技术人员");
		},
		success:function(data){
			if(data.length == 0){
				return;
			}
			jQuery("#planTB").append(data);
		}
	});
}


function showgjjc(status){
	var inputWidth = jQuery("#inputWid").val();
	if (status=="1") {
		jQuery("#bjButton").hide();
		jQuery("#dcButton").hide();
		jQuery("#bcButton").show();
		jQuery("#cus_ser").show();
	}else{
		jQuery("#bcButton").hide();
		jQuery("#cus_ser").hide();
		jQuery("#bjButton").show();
		jQuery("#dcButton").show();
	}
	var url = "/audit/gj/showgjjcs.do?objclass="
		+jQuery("#objclass").val()+"&year="+jQuery("#year").val()+"&status=" + status+"&inputWidth="+inputWidth;
	jQuery("#planTB tr[name=gjdata]").empty();
	var arr = new Array();
	jQuery.ajax({
		async:false,
		url:url,
		dataType:"json",
		type:'get',
		error:function(){
			alert("系统自身原因，请联系技术人员");
		},
		success:function(data){
			//G111
			if (jQuery("#objclass").val()=="AS_GJ_GJXJTB") {
				var json = eval('('+data+')');
				var module = json.modules;
				var md = module == null ? null:module[0];
				showG111(md,status);
				return;
			}
			
			if(data.length == 0){
				return;
			}
			
			arr.splice(0,arr.length);
			arr = data.split("|");
		}
	});
//	console.info("arr.length:"+arr.length)
	var jcstr = jQuery("tr[name=jctr]");
	var t = 0;
	jQuery("td[name=jctd]").remove();
	jcstr.each(function(i,element){
		t++;
		var tdstr = "";
		if( arr.length==2){
			//console.info(jQuery("#" + t + "tr"));
			for(var i=0; i<arr[1]-1; i++){
				jQuery("#" + t + "tr").append(arr[0]);
			}
			
		}else{
			for(var r = 0; r < arr.length; r++){
				if(t == arr[r].split("-")[0]){
					tdstr += arr[r].split("-")[1];
				}
			
			}
			jQuery("#" + t + "tr").append(tdstr);
		}
		
	});
}

function changeYear(){
	var isjc = jQuery("#isjc").val();
	if(isjc ==  "0"){
		//初始化数据
		showgj(0);
	}
	
	if(isjc == "1"){
		showgjjc(0);
	}
	
}

//保存编辑数据
function saveEditGJB(state){
	var colsCount = 0;
	var trArray = new Array;
	if (state=="1") {
		jQuery("#planTB tr[name=jctr]").each(function(r){
			var trStr = "";
			var tds = jQuery(this).find('td[name=jctd] input');
			tds.each(function(i){
				trStr += jQuery(this).val()+"|"
				if (i==tds.size()-1) {
					trStr += jQuery(this).attr("trid");
				}
			});
			trArray.push(trStr);
		});
	}else {
		jQuery("#planTB tr[name=gjdata]").each(function(r){
			var trStr = "";
			var trid = "";
			var tds = jQuery(this).find('td input');
			tds.each(function(i){
				if ("删除"==jQuery(this).val()) {
					
				}else{
					trStr += jQuery(this).val()+"|";
					trid = jQuery(this).attr("trid");
				}
				if (i==tds.size()-1) {
					trStr += trid;
				}
			});
			trArray.push(trStr);
		});
	}
	
	var dataStr = "objclass="
		+jQuery("#objclass").val()+"&year="+jQuery("#year").val()+"&status=" + status+"&trArray=" + trArray;
	
	var url = "/audit/gj/saveEditGJB.do?"+dataStr;
	url=encodeURI(url); 
	url=encodeURI(url);
	
	jQuery.ajax({
		async:false,
		url:url,
		type:'post',
//		data:dataStr,
		error:function(){
			alert("系统自身原因，请联系技术人员");
		},
		success:function(data){
			if (state=="1") {
				showgjjc(0);
			}else {
				showgj(0);
			}
			
		}
	});
}

//点击新增
function CreateTB(){
	var tdLength = 0;
	jQuery("#planTB tr").each(function(r){
		var tds = jQuery(this).find('td');
		if ((jQuery(this).find('td').length-1)>tdLength) {
			tdLength = (jQuery(this).find('td').length-1)
		}
	});
	
	var inputWidth = jQuery("#inputWid").val();
	var iwdths = inputWidth.split("-");
	var trStr = "<tr class='Gj_tab_text' name='gjdata'>";
	for ( var i = 0; i < tdLength; i++) {
		trStr += "<td colspan='1' title=''><input type='text' trid='-1' class='Gj_input0"+iwdths[i]+"' value='' trid=''/></td>";
	}
	trStr += "<td colspan='1'><input type='button' value='删除' onclick='del(this)'></td>";
	trStr += "</tr>";
	jQuery("#planTB").append(trStr)
	//------------------
//	var oTB = document.getElementById("planTB");
//	var oTR = oTB.insertRow(oTB.rows.length);
//	
//	for ( var i = 0; i < tdLength; i++) {
//		var oTD1 = oTR.insertCell(i);
//		oTD1.innerHTML = "<input type='text' class='Gj_input0"+iwdths[i]+"' value='' trid=''/>";
//	}
	
//	var oTD1 = oTR.insertCell(tdLength);
//	oTD1.innerHTML = "<input type='button' value='删除' onclick='del(this)'>";
}

//删除
function del(o){
	var oTB = document.getElementById("planTB");
	var oDel = o.parentNode.parentNode.sectionRowIndex;
	oTB.deleteRow(oDel);
}


function showG111(md,status){
	$('#planTB').empty();
	var tbStr = "";
	if (md==null) {
		if (status=="1") {
			tbStr = "<tr>"+
			"		<td colspan='10' class='Gj_tab_title'>高等教育学校（机构）统计报表</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='10' class='Gj_tab_title2'>（20    /20    学年初）</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='10' class='Gj_tab_title3_fr_del_bottom' style='text-align: right;'>"+
			"		制定机关：教   育   部"+
			"		</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='10' class='Gj_tab_title3_fr_del_tb' style='text-align: right;'>"+
			"		批准机关：国 家 统 计 局"+
			"		</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='10' class='Gj_tab_title3_fr_del_top' style='text-align: right;'>"+
			"		批准文号：国统制 【2013】78号"+
			"		</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='9' class='Gj_tab_title3_left' >"+
			"		高基111"+
			"		</td>"+
			"		<td colspan='1' class='Gj_tab_title3_right' >"+
			"		</td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_title3'>"+
			"		<td colspan='2'>学校标识码</td>"+
			"		<td colspan='4'>学校（机构）名称（章）</td>"+
			"		<td colspan='4'>学校（机构）英文名称</td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td colspan='2'><input type='text' class='Gj_input04' name='xXBSM7' value='' trid='-1'/></td>"+
			"		<td colspan='4'><input type='text' class='Gj_input09' name='xXJGMCZ7' value='' trid='-1'/></td>"+
			"		<td colspan='4'><input type='text' class='Gj_input09' name='xXJGYWMC7' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td>续</td><td></td><td></td><td></td><td></td>"+
			"		<td></td><td></td><td></td><td></td><td></td>"+
			"	</tr>"+
			"	<!-- 第二行 -->"+
			"	<tr class='Gj_tab_title3'>"+
			"		<td colspan='2'></td>"+
			"		<td colspan='3'>学校（机构）地址</td>"+
			"		<td colspan='1'>学校（机构）驻地城乡类型</td>"+
			"		<td colspan='4'>学校（机构）属地管理教育行政部门</td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td class='Gj_tab_title3' colspan='2'>名称</td>"+
			"		<td colspan='3'><input type='text' class='Gj_input08' name='xXJGDZ_MC10' value='' trid='-1'/></td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGZDCXLX_MC10' value='' trid='-1'/></td>"+
			"		<td colspan='4'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC10' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td class='Gj_tab_title3' colspan='2'>代码</td>"+
			"		<td colspan='3'><input type='text' class='Gj_input08' name='xXJGDZ_DM11' value='' trid='-1'/></td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGZDCXLX_DM11' value='' trid='-1'/></td>"+
			"		<td colspan='4'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM11' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td>续</td><td></td><td></td><td></td><td></td>"+
			"		<td></td><td></td><td></td><td></td><td></td>"+
			"	</tr>"+
			"	<!-- 第三行 -->"+
			"	<tr class='Gj_tab_title3'>"+
			"		<td colspan='2'></td>"+
			"		<td colspan='1'>学校（机构）办学类型</td>"+
			"		<td colspan='2'>学校（机构）举办者</td>"+
			"		<td colspan='1'>学校（机构）性质类别</td>"+
			"		<td colspan='2'>规定年制</td>"+
			"		<td colspan='2'>规定入学年龄</td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td class='Gj_tab_title3' colspan='2'>名称</td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGBXLX_MC14' value='' trid='-1'/></td>"+
			"		<td colspan='2'><input type='text' class='Gj_input04' name='xXJGJBZ_MC14' value='' trid='-1'/></td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGXZLB_MC14' value='' trid='-1'/></td>"+
			"		<td class='Gj_tab_title3' colspan='1'>小学</td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='gDNZ_XX14' value='' trid='-1'/></td>"+
			"		<td class='Gj_tab_title3' colspan='1'>小学</td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='gDRXNL_XX14' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td class='Gj_tab_title3' colspan='2'>代码</td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGBXLX_DM15' value='' trid='-1'/></td>"+
			"		<td colspan='2'><input type='text' class='Gj_input04' name='xXJGJBZ_DM15' value='' trid='-1'/></td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGXZLB_DM15' value='' trid='-1'/></td>"+
			"		<td class='Gj_tab_title3' colspan='1'>初中</td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='gDNZ_CZ15' value='' trid='-1'/></td>"+
			"		<td class='Gj_tab_title3' colspan='1'>初中</td>"+
			"		<td colspan='1'><input type='text' class='Gj_input04' name='gDRXNL_CZ15' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td>续</td><td></td><td></td><td></td><td></td>"+
			"		<td></td><td></td><td></td><td></td><td></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='2' class='Gj_tab_title3'>邮政编码</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='yZBM17_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_title3'>校园（局域）网域名</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xYJYWYM17_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>校（园）长（签章）</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>填表人</td>"+
			"		<td colspan='2' class='Gj_tab_title3'>学校（机构）所在地</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='2' class='Gj_tab_title3'>办公电话</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='bGDH18_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_title3'>单位电子信箱</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='dWDZXX18_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' rowspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xYZQZ18_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' rowspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='tBR18_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>经度</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>纬度</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='2' class='Gj_tab_title3'>传真电话</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='cZDH19_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_title3'>填表人电子信箱</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='tBRDZXX19_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='jD19_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='wD19_4' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td>续</td><td></td><td></td><td></td><td></td>"+
			"		<td></td><td></td><td></td><td></td><td></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='2' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>学校（机构）举办者</td>"+
			"		<td colspan='2' class='Gj_tab_title3'>学校（机构）属地管理教育行政部门</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>学校（机构）地址</td>"+
			"		<td colspan='2' class='Gj_tab_title3'>规定年制</td>"+
			"		<td colspan='2' class='Gj_tab_title3'>规定入学年龄</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设幼儿班</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC22_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC22_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC22_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX22_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX22_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>119</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM23_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM23_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM23_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ23_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ23_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设小学班</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC24_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC24_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC24_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX24_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX24_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>219</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM25_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM25_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM25_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ25_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ25_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设普通初中班</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC26_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC26_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC26_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX26_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX26_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>319</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM27_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM27_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM27_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ27_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ27_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设职业初中班</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC28_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC28_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC28_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX28_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX28_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>329</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM29_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM29_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM29_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ29_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ29_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设普通高中班</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC30_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC30_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC30_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX30_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX30_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>349</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM31_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM31_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM31_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ31_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ31_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设特教班</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC32_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC32_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC32_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX32_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX32_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>519</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM33_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM33_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM33_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ33_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ33_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设中职班</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC34_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC34_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC34_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX34_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX34_5' value='' trid='-1'/></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>368</td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM35_1' value='' trid='-1'/></td>"+
			"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM35_2' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM35_3' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ35_4' value='' trid='-1'/></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ35_5' value='' trid='-1'/></td>"+
			"	</tr>";
		}else{
			tbStr = "<tr>"+
			"		<td colspan='10' class='Gj_tab_title'>高等教育学校（机构）统计报表</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='10' class='Gj_tab_title2'>（20    /20    学年初）</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='10' class='Gj_tab_title3_fr_del_bottom' style='text-align: right;'>"+
			"		制定机关：教   育   部"+
			"		</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='10' class='Gj_tab_title3_fr_del_tb' style='text-align: right;'>"+
			"		批准机关：国 家 统 计 局"+
			"		</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='10' class='Gj_tab_title3_fr_del_top' style='text-align: right;'>"+
			"		批准文号：国统制 【2013】78号"+
			"		</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='9' class='Gj_tab_title3_left' >"+
			"		高基111"+
			"		</td>"+
			"		<td colspan='1' class='Gj_tab_title3_right' >"+
			"		</td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_title3'>"+
			"		<td colspan='2'>学校标识码</td>"+
			"		<td colspan='4'>学校（机构）名称（章）</td>"+
			"		<td colspan='4'>学校（机构）英文名称</td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td colspan='2'>&nbsp;</td>"+
			"		<td colspan='4'> </td>"+
			"		<td colspan='4'> </td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td>续</td><td></td><td></td><td></td><td></td>"+
			"		<td></td><td></td><td></td><td></td><td></td>"+
			"	</tr>"+
			"	<!-- 第二行 -->"+
			"	<tr class='Gj_tab_title3'>"+
			"		<td colspan='2'></td>"+
			"		<td colspan='3'>学校（机构）地址</td>"+
			"		<td colspan='1'>学校（机构）驻地城乡类型</td>"+
			"		<td colspan='4'>学校（机构）属地管理教育行政部门</td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td class='Gj_tab_title3' colspan='2'>名称</td>"+
			"		<td colspan='3'></td>"+
			"		<td colspan='1'></td>"+
			"		<td colspan='4'></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td class='Gj_tab_title3' colspan='2'>代码</td>"+
			"		<td colspan='3'></td>"+
			"		<td colspan='1'></td>"+
			"		<td colspan='4'></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td>续</td><td></td><td></td><td></td><td></td>"+
			"		<td></td><td></td><td></td><td></td><td></td>"+
			"	</tr>"+
			"	<!-- 第三行 -->"+
			"	<tr class='Gj_tab_title3'>"+
			"		<td colspan='2'></td>"+
			"		<td colspan='1'>学校（机构）办学类型</td>"+
			"		<td colspan='2'>学校（机构）举办者</td>"+
			"		<td colspan='1'>学校（机构）性质类别</td>"+
			"		<td colspan='2'>规定年制</td>"+
			"		<td colspan='2'>规定入学年龄</td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td class='Gj_tab_title3' colspan='2'>名称</td>"+
			"		<td colspan='1'></td>"+
			"		<td colspan='2'></td>"+
			"		<td colspan='1'></td>"+
			"		<td class='Gj_tab_title3' colspan='1'>小学</td>"+
			"		<td colspan='1'></td>"+
			"		<td class='Gj_tab_title3' colspan='1'>小学</td>"+
			"		<td colspan='1'></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td class='Gj_tab_title3' colspan='2'>代码</td>"+
			"		<td colspan='1'></td>"+
			"		<td colspan='2'></td>"+
			"		<td colspan='1'></td>"+
			"		<td class='Gj_tab_title3' colspan='1'>初中</td>"+
			"		<td colspan='1'></td>"+
			"		<td class='Gj_tab_title3' colspan='1'>初中</td>"+
			"		<td colspan='1'></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td>续</td><td></td><td></td><td></td><td></td>"+
			"		<td></td><td></td><td></td><td></td><td></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='2' class='Gj_tab_title3'>邮政编码</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_title3'>校园（局域）网域名</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>校（园）长（签章）</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>填表人</td>"+
			"		<td colspan='2' class='Gj_tab_title3'>学校（机构）所在地</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='2' class='Gj_tab_title3'>办公电话</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_title3'>单位电子信箱</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' rowspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' rowspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>经度</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>纬度</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='2' class='Gj_tab_title3'>传真电话</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_title3'>填表人电子信箱</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr class='Gj_tab_text'>"+
			"		<td>续</td><td></td><td></td><td></td><td></td>"+
			"		<td></td><td></td><td></td><td></td><td></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='2' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>学校（机构）举办者</td>"+
			"		<td colspan='2' class='Gj_tab_title3'>学校（机构）属地管理教育行政部门</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>学校（机构）地址</td>"+
			"		<td colspan='2' class='Gj_tab_title3'>规定年制</td>"+
			"		<td colspan='2' class='Gj_tab_title3'>规定入学年龄</td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设幼儿班</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>119</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设小学班</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>219</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设普通初中班</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>319</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设职业初中班</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>329</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设普通高中班</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>349</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设特教班</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>519</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>附设中职班</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>"+
			"	<tr>"+
			"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
			"		<td colspan='1' class='Gj_tab_title3'>368</td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='2' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_text'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
			"		<td colspan='1' class='Gj_tab_title3'></td>"+
			"	</tr>";
		}
		$('#planTB').append(tbStr);
		return;
	}
	
	if (status=="1") {
		tbStr = "<tr>"+
		"		<td colspan='10' class='Gj_tab_title'>高等教育学校（机构）统计报表</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='10' class='Gj_tab_title2'>（20    /20    学年初）</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='10' class='Gj_tab_title3_fr_del_bottom' style='text-align: right;'>"+
		"		制定机关：教   育   部"+
		"		</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='10' class='Gj_tab_title3_fr_del_tb' style='text-align: right;'>"+
		"		批准机关：国 家 统 计 局"+
		"		</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='10' class='Gj_tab_title3_fr_del_top' style='text-align: right;'>"+
		"		批准文号：国统制 【2013】78号"+
		"		</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='9' class='Gj_tab_title3_left' >"+
		"		高基111"+
		"		</td>"+
		"		<td colspan='1' class='Gj_tab_title3_right' >"+
		"		</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_title3'>"+
		"		<td colspan='2'>学校标识码</td>"+
		"		<td colspan='4'>学校（机构）名称（章）</td>"+
		"		<td colspan='4'>学校（机构）英文名称</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td colspan='2'><input type='text' class='Gj_input04' name='xXBSM7' value='"+(md.xXBSM7 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='4'><input type='text' class='Gj_input09' name='xXJGMCZ7' value='"+(md.xXJGMCZ7 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='4'><input type='text' class='Gj_input09' name='xXJGYWMC7' value='"+(md.xXJGYWMC7 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td>续</td><td></td><td></td><td></td><td></td>"+
		"		<td></td><td></td><td></td><td></td><td></td>"+
		"	</tr>"+
		"	<!-- 第二行 -->"+
		"	<tr class='Gj_tab_title3'>"+
		"		<td colspan='2'></td>"+
		"		<td colspan='3'>学校（机构）地址</td>"+
		"		<td colspan='1'>学校（机构）驻地城乡类型</td>"+
		"		<td colspan='4'>学校（机构）属地管理教育行政部门</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td class='Gj_tab_title3' colspan='2'>名称</td>"+
		"		<td colspan='3'><input type='text' class='Gj_input08' name='xXJGDZ_MC10' value='"+(md.xXJGDZ_MC10 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGZDCXLX_MC10' value='"+(md.xXJGZDCXLX_MC10 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='4'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC10' value='"+(md.xXJGSDGLJYXZBM_MC10 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td class='Gj_tab_title3' colspan='2'>代码</td>"+
		"		<td colspan='3'><input type='text' class='Gj_input08' name='xXJGDZ_DM11' value='"+(md.xXJGDZ_DM11 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGZDCXLX_DM11' value='"+(md.xXJGZDCXLX_DM11 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='4'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM11' value='"+(md.xXJGSDGLJYXZBM_DM11 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td>续</td><td></td><td></td><td></td><td></td>"+
		"		<td></td><td></td><td></td><td></td><td></td>"+
		"	</tr>"+
		"	<!-- 第三行 -->"+
		"	<tr class='Gj_tab_title3'>"+
		"		<td colspan='2'></td>"+
		"		<td colspan='1'>学校（机构）办学类型</td>"+
		"		<td colspan='2'>学校（机构）举办者</td>"+
		"		<td colspan='1'>学校（机构）性质类别</td>"+
		"		<td colspan='2'>规定年制</td>"+
		"		<td colspan='2'>规定入学年龄</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td class='Gj_tab_title3' colspan='2'>名称</td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGBXLX_MC14' value='"+(md.xXJGBXLX_MC14 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2'><input type='text' class='Gj_input04' name='xXJGJBZ_MC14' value='"+(md.xXJGJBZ_MC14 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGXZLB_MC14' value='"+(md.xXJGXZLB_MC14 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td class='Gj_tab_title3' colspan='1'>小学</td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='gDNZ_XX14' value='"+(md.gDNZ_XX14 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td class='Gj_tab_title3' colspan='1'>小学</td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='gDRXNL_XX14' value='"+(md.gDRXNL_XX14 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td class='Gj_tab_title3' colspan='2'>代码</td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGBXLX_DM15' value='"+(md.xXJGBXLX_DM15 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2'><input type='text' class='Gj_input04' name='xXJGJBZ_DM15' value='"+(md.xXJGJBZ_DM15 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='xXJGXZLB_DM15' value='"+(md.xXJGXZLB_DM15 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td class='Gj_tab_title3' colspan='1'>初中</td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='gDNZ_CZ15' value='"+(md.gDNZ_CZ15 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td class='Gj_tab_title3' colspan='1'>初中</td>"+
		"		<td colspan='1'><input type='text' class='Gj_input04' name='gDRXNL_CZ15' value='"+(md.gDRXNL_CZ15 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td>续</td><td></td><td></td><td></td><td></td>"+
		"		<td></td><td></td><td></td><td></td><td></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='2' class='Gj_tab_title3'>邮政编码</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='yZBM17_1' value='"+(md.yZBM17_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_title3'>校园（局域）网域名</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xYJYWYM17_2' value='"+(md.xYJYWYM17_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>校（园）长（签章）</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>填表人</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>学校（机构）所在地</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='2' class='Gj_tab_title3'>办公电话</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='bGDH18_1' value='"+(md.bGDH18_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_title3'>单位电子信箱</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='dWDZXX18_2' value='"+(md.dWDZXX18_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' rowspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xYZQZ18_3' value='"+(md.xYZQZ18_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' rowspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='tBR18_4' value='"+(md.tBR18_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>经度</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>纬度</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='2' class='Gj_tab_title3'>传真电话</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='cZDH19_1' value='"+(md.cZDH19_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_title3'>填表人电子信箱</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='tBRDZXX19_2' value='"+(md.tBRDZXX19_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='jD19_3' value='"+(md.jD19_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='wD19_4' value='"+(md.wD19_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td>续</td><td></td><td></td><td></td><td></td>"+
		"		<td></td><td></td><td></td><td></td><td></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='2' class='Gj_tab_title3'></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>学校（机构）举办者</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>学校（机构）属地管理教育行政部门</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>学校（机构）地址</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>规定年制</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>规定入学年龄</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设幼儿班</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC22_1' value='"+(md.xXJGJBZ_MC22_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC22_2' value='"+(md.xXJGSDGLJYXZBM_MC22_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC22_3' value='"+(md.xXJGDZ_MC22_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX22_4' value='"+(md.gDNZ_XX22_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX22_5' value='"+(md.gDRXNL_XX22_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>119</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM23_1' value='"+(md.xXJGJBZ_DM23_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM23_2' value='"+(md.xXJGSDGLJYXZBM_DM23_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM23_3' value='"+(md.xXJGDZ_DM23_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ23_4' value='"+(md.gDNZ_CZ23_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ23_5' value='"+(md.gDRXNL_CZ23_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设小学班</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC24_1' value='"+(md.xXJGJBZ_MC24_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC24_2' value='"+(md.xXJGSDGLJYXZBM_MC24_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC24_3' value='"+(md.xXJGDZ_MC24_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX24_4' value='"+(md.gDNZ_XX24_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX24_5' value='"+(md.gDRXNL_XX24_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>219</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM25_1' value='"+(md.xXJGJBZ_DM25_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM25_2' value='"+(md.xXJGSDGLJYXZBM_DM25_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM25_3' value='"+(md.xXJGDZ_DM25_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ25_4' value='"+(md.gDNZ_CZ25_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ25_5' value='"+(md.gDRXNL_CZ25_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设普通初中班</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC26_1' value='"+(md.xXJGJBZ_MC26_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC26_2' value='"+(md.xXJGSDGLJYXZBM_MC26_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC26_3' value='"+(md.xXJGDZ_MC26_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX26_4' value='"+(md.gDNZ_XX26_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX26_5' value='"+(md.gDRXNL_XX26_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>319</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM27_1' value='"+(md.xXJGJBZ_DM27_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM27_2' value='"+(md.xXJGSDGLJYXZBM_DM27_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM27_3' value='"+(md.xXJGDZ_DM27_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ27_4' value='"+(md.gDNZ_CZ27_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ27_5' value='"+(md.gDRXNL_CZ27_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设职业初中班</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC28_1' value='"+(md.xXJGJBZ_MC28_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC28_2' value='"+(md.xXJGSDGLJYXZBM_MC28_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC28_3' value='"+(md.xXJGDZ_MC28_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX28_4' value='"+(md.gDNZ_XX28_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX28_5' value='"+(md.gDRXNL_XX28_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>329</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM29_1' value='"+(md.xXJGJBZ_DM29_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM29_2' value='"+(md.xXJGSDGLJYXZBM_DM29_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM29_3' value='"+(md.xXJGDZ_DM29_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ29_4' value='"+(md.gDNZ_CZ29_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ29_5' value='"+(md.gDRXNL_CZ29_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设普通高中班</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC30_1' value='"+(md.xXJGJBZ_MC30_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC30_2' value='"+(md.xXJGSDGLJYXZBM_MC30_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC30_3' value='"+(md.xXJGDZ_MC30_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX30_4' value='"+(md.gDNZ_XX30_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX30_5' value='"+(md.gDRXNL_XX30_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>349</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM31_1' value='"+(md.xXJGJBZ_DM31_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM31_2' value='"+(md.xXJGSDGLJYXZBM_DM31_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM31_3' value='"+(md.xXJGDZ_DM31_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ31_4' value='"+(md.gDNZ_CZ31_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ31_5' value='"+(md.gDRXNL_CZ31_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设特教班</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC32_1' value='"+(md.xXJGJBZ_MC32_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC32_2' value='"+(md.xXJGSDGLJYXZBM_MC32_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC32_3' value='"+(md.xXJGDZ_MC32_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX32_4' value='"+(md.gDNZ_XX32_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX32_5' value='"+(md.gDRXNL_XX32_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>519</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM33_1' value='"+(md.xXJGJBZ_DM33_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM33_2' value='"+(md.xXJGSDGLJYXZBM_DM33_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM33_3' value='"+(md.xXJGDZ_DM33_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ33_4' value='"+(md.gDNZ_CZ33_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ33_5' value='"+(md.gDRXNL_CZ33_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设中职班</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_MC34_1' value='"+(md.xXJGJBZ_MC34_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_MC34_2' value='"+(md.xXJGSDGLJYXZBM_MC34_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_MC34_3' value='"+(md.xXJGDZ_MC34_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_XX34_4' value='"+(md.gDNZ_XX34_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_XX34_5' value='"+(md.gDRXNL_XX34_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>368</td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGJBZ_DM35_1' value='"+(md.xXJGJBZ_DM35_1 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='2' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGSDGLJYXZBM_DM35_2' value='"+(md.xXJGSDGLJYXZBM_DM35_2 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_text'><input type='text' class='Gj_input04' name='xXJGDZ_DM35_3' value='"+(md.xXJGDZ_DM35_3 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDNZ_CZ35_4' value='"+(md.gDNZ_CZ35_4 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'><input type='text' class='Gj_input04' name='gDRXNL_CZ35_5' value='"+(md.gDRXNL_CZ35_5 || "")+"' trid='"+(md.id || -1)+"'/></td>"+
		"	</tr>";
	}else{
		tbStr = "<tr>"+
		"		<td colspan='10' class='Gj_tab_title'>高等教育学校（机构）统计报表</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='10' class='Gj_tab_title2'>（20    /20    学年初）</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='10' class='Gj_tab_title3_fr_del_bottom' style='text-align: right;'>"+
		"		制定机关：教   育   部"+
		"		</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='10' class='Gj_tab_title3_fr_del_tb' style='text-align: right;'>"+
		"		批准机关：国 家 统 计 局"+
		"		</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='10' class='Gj_tab_title3_fr_del_top' style='text-align: right;'>"+
		"		批准文号：国统制 【2013】78号"+
		"		</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='9' class='Gj_tab_title3_left' >"+
		"		高基111"+
		"		</td>"+
		"		<td colspan='1' class='Gj_tab_title3_right' >"+
		"		</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_title3'>"+
		"		<td colspan='2'>学校标识码</td>"+
		"		<td colspan='4'>学校（机构）名称（章）</td>"+
		"		<td colspan='4'>学校（机构）英文名称</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td colspan='2'>"+(md.xXBSM7 || "")+"</td>"+
		"		<td colspan='4'>"+(md.xXJGMCZ7 || "")+"</td>"+
		"		<td colspan='4'>"+(md.xXJGYWMC7 || "")+"</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td>续</td><td></td><td></td><td></td><td></td>"+
		"		<td></td><td></td><td></td><td></td><td></td>"+
		"	</tr>"+
		"	<!-- 第二行 -->"+
		"	<tr class='Gj_tab_title3'>"+
		"		<td colspan='2'></td>"+
		"		<td colspan='3'>学校（机构）地址</td>"+
		"		<td colspan='1'>学校（机构）驻地城乡类型</td>"+
		"		<td colspan='4'>学校（机构）属地管理教育行政部门</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td class='Gj_tab_title3' colspan='2'>名称</td>"+
		"		<td colspan='3'>"+(md.xXJGDZ_MC10 || "")+"</td>"+
		"		<td colspan='1'>"+(md.xXJGZDCXLX_MC10 || "")+"</td>"+
		"		<td colspan='4'>"+(md.xXJGSDGLJYXZBM_MC10 || "")+"</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td class='Gj_tab_title3' colspan='2'>代码</td>"+
		"		<td colspan='3'>"+(md.xXJGDZ_DM11 || "")+"</td>"+
		"		<td colspan='1'>"+(md.xXJGZDCXLX_DM11 || "")+"</td>"+
		"		<td colspan='4'>"+(md.xXJGSDGLJYXZBM_DM11 || "")+"</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td>续</td><td></td><td></td><td></td><td></td>"+
		"		<td></td><td></td><td></td><td></td><td></td>"+
		"	</tr>"+
		"	<!-- 第三行 -->"+
		"	<tr class='Gj_tab_title3'>"+
		"		<td colspan='2'></td>"+
		"		<td colspan='1'>学校（机构）办学类型</td>"+
		"		<td colspan='2'>学校（机构）举办者</td>"+
		"		<td colspan='1'>学校（机构）性质类别</td>"+
		"		<td colspan='2'>规定年制</td>"+
		"		<td colspan='2'>规定入学年龄</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td class='Gj_tab_title3' colspan='2'>名称</td>"+
		"		<td colspan='1'>"+(md.xXJGBXLX_MC14 || "")+"</td>"+
		"		<td colspan='2'>"+(md.xXJGJBZ_MC14 || "")+"</td>"+
		"		<td colspan='1'>"+(md.xXJGXZLB_MC14 || "")+"</td>"+
		"		<td class='Gj_tab_title3' colspan='1'>小学</td>"+
		"		<td colspan='1'>"+(md.gDNZ_XX14 || "")+"</td>"+
		"		<td class='Gj_tab_title3' colspan='1'>小学</td>"+
		"		<td colspan='1'>"+(md.gDRXNL_XX14 || "")+"</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td class='Gj_tab_title3' colspan='2'>代码</td>"+
		"		<td colspan='1'>"+(md.xXJGBXLX_DM15 || "")+"</td>"+
		"		<td colspan='2'>"+(md.xXJGJBZ_DM15 || "")+"</td>"+
		"		<td colspan='1'>"+(md.xXJGXZLB_DM15 || "")+"</td>"+
		"		<td class='Gj_tab_title3' colspan='1'>初中</td>"+
		"		<td colspan='1'>"+(md.gDNZ_CZ15 || "")+"</td>"+
		"		<td class='Gj_tab_title3' colspan='1'>初中</td>"+
		"		<td colspan='1'>"+(md.gDRXNL_CZ15 || "")+"</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td>续</td><td></td><td></td><td></td><td></td>"+
		"		<td></td><td></td><td></td><td></td><td></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='2' class='Gj_tab_title3'>邮政编码</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.yZBM17_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>校园（局域）网域名</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xYJYWYM17_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>校（园）长（签章）</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>填表人</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>学校（机构）所在地</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='2' class='Gj_tab_title3'>办公电话</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.bGDH18_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>单位电子信箱</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.dWDZXX18_2 || "")+"</td>"+
		"		<td colspan='1' rowspan='2' class='Gj_tab_text'>"+(md.xYZQZ18_3 || "")+"</td>"+
		"		<td colspan='1' rowspan='2' class='Gj_tab_text'>"+(md.tBR18_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>经度</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>纬度</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='2' class='Gj_tab_title3'>传真电话</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.cZDH19_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>填表人电子信箱</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.tBRDZXX19_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.jD19_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.wD19_4 || "")+"</td>"+
		"	</tr>"+
		"	<tr class='Gj_tab_text'>"+
		"		<td>续</td><td></td><td></td><td></td><td></td>"+
		"		<td></td><td></td><td></td><td></td><td></td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='2' class='Gj_tab_title3'></td>"+
		"		<td colspan='1' class='Gj_tab_title3'>学校（机构）举办者</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>学校（机构）属地管理教育行政部门</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>学校（机构）地址</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>规定年制</td>"+
		"		<td colspan='2' class='Gj_tab_title3'>规定入学年龄</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设幼儿班</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_MC22_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_MC22_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_MC22_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_XX22_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_XX22_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>119</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_DM23_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_DM23_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_DM23_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_CZ23_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_CZ23_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设小学班</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_MC24_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_MC24_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_MC24_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_XX24_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_XX24_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>219</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_DM25_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_DM25_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_DM25_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_CZ25_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_CZ25_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设普通初中班</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_MC26_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_MC26_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_MC26_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_XX26_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_XX26_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>319</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_DM27_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_DM27_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_DM27_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_CZ27_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_CZ27_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设职业初中班</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_MC28_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_MC28_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_MC28_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_XX28_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_XX28_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>329</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_DM29_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_DM29_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_DM29_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_CZ29_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_CZ29_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设普通高中班</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_MC30_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_MC30_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_MC30_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_XX30_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_XX30_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>349</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_DM31_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_DM31_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_DM31_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_CZ31_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_CZ31_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设特教班</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_MC32_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_MC32_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_MC32_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_XX32_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_XX32_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>519</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_DM33_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_DM33_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_DM33_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_CZ33_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_CZ33_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>名称</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>附设中职班</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_MC34_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_MC34_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_MC34_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_XX34_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>小学</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_XX34_5 || "")+"</td>"+
		"	</tr>"+
		"	<tr>"+
		"		<td colspan='1' class='Gj_tab_title3'>代码</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>368</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGJBZ_DM35_1 || "")+"</td>"+
		"		<td colspan='2' class='Gj_tab_text'>"+(md.xXJGSDGLJYXZBM_DM35_2 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_text'>"+(md.xXJGDZ_DM35_3 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDNZ_CZ35_4 || "")+"</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>初中</td>"+
		"		<td colspan='1' class='Gj_tab_title3'>"+(md.gDRXNL_CZ35_5 || "")+"</td>"+
		"	</tr>";
	}
	$('#planTB').append(tbStr);
}


//保存编辑数据G111
function saveEditG111(state){
	var colsCount = 0;
	var trArray = new Array;
	var trStr = "";
	jQuery("input[type=text]").each(function(r){
			trStr += jQuery(this).val()+"|"
			if (r==jQuery("input[type=text]").size()-1) {
					trStr += jQuery(this).attr("trid");
			}
	});
//	trArray.push(trStr);
	
	var dataStr = "objclass="
		+jQuery("#objclass").val()+"&year="+jQuery("#year").val()+"&status=" + status+"&trArray=" + trStr;
	
	var url = "/audit/gj/saveEditG111.do?"+dataStr;
	url=encodeURI(url); 
	url=encodeURI(url);
	
	jQuery.ajax({
		async:false,
		url:url,
		type:'post',
//		data:dataStr,
		error:function(){
			alert("系统自身原因，请联系技术人员");
		},
		success:function(data){
			if (state=="1") {
				showgjjc(0);
			}else {
				showgj(0);
			}
			
		}
	});
}
