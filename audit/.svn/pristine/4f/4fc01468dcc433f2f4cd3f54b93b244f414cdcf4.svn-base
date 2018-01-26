		//计划内容
		function PLANCONTENT(id,content,isrelate){
			this.id = id;
			this.content = content;
			this.isrelate = isrelate;
		}
		//支撑文件
		function STFILE(id,pid,filename,uploader,uploadtime,flag){
			this.id = id;
			this.pid = pid;
			this.filename = filename;
			this.uploader = uploader;
			this.uploadtime = uploadtime;
			this.flag = flag;
		}
		//关联指标项
		function VIEWQUOTA(id,pid,qname,qcategory,qtype){
			this.id = id;
			this.pid = pid;
			this.qname = qname;
			this.qcategory = qcategory;
			this.qtype = qtype;
		}
		//关联项目
		function RELATEPROJECT(pid,rpid,rvid,pname,qname){
			this.pid = pid;
			this.rpid = rpid;
			this.rvid = rvid;
			this.pname = pname;
			this.qname = qname;
		}
		var starry = new Array();
		var plancontentarry = new Array();
		var vquotaarray = new Array();
		var relatearray = new Array();
		//点击菜单
		function clickplan(id){
			//////////////////清空
			starry.splice(0,starry.length);
			plancontentarry.splice(0,plancontentarry.length);
			vquotaarray.splice(0,vquotaarray.length);
			relatearray.splice(0,relatearray.length);
			$("#tabs").empty();
			$("#yaosu").html("");
			$("#stfiles tbody").empty();
			$("#glproject tbody").empty();
			$("#gczbxsj tbody").empty();
			////////////////////获取该菜单下的所有设计方案
			var url = "/audit/asPlanController/showallinfo.do?mid="+id;
		    $.ajax( {  
		    	dataType : "JSON",
		        type : "get",  
		        url : url,  
		        success : function(msg) { 
		        	var json = eval(msg);
		        	var k = 0;
		        	var str = "";
		        	for(var i = 0; i < json.length; i++){
		        		k++;
		        		if(k == 1){
		        			str = "<li myval='"+id+"-"+k+"' class='hit' onclick='clicktab("+id+","+k+")'>"+json[i].asplan.no+json[i].asplan.name+"</li>";
		        		}else{
		        			str = "<li myval='"+id+"-"+k+"' onclick='clicktab("+id+","+k+")'>"+json[i].asplan.no+json[i].asplan.name+"</li>";
		        		}
		        		$("#tabs").append(str);
		        		
		        		var plancontent = new PLANCONTENT(id+"-"+k,
				        		json[i].asplan.content,
				        		json[i].asplan.isrelate
			        		);
		        		plancontentarry.push(plancontent);
		        		
		        		///////////////////支撑材料
		        		var supportfiles = eval(json[i].asplan.supportfiles);
		        		for(var j = 0; j < supportfiles.length; j++){
		        			var filename = supportfiles[j].filename;
		        			if(undefined != filename){
		        				var uploadtimeDate = new Date(supportfiles[j].uploadtime);
		        				var now = new Date(uploadtimeDate); 
								var uploadtime = now.format("yyyy-MM-dd hh:mm:ss"); 
		        				var stfile = new STFILE(
		        					supportfiles[j].id,
		        					//supportfiles[j].pid,
		        					id+"-"+k,
		        					supportfiles[j].filename,
		        					supportfiles[j].uploadername,
		        					uploadtime,
		        					supportfiles[j].flag
		        				);
		        				starry.push(stfile);
		        			}
		        		}
		        		////////////////////////观测指标项
		        		var viewquotas = eval(json[i].asplan.viewQuota);
		        		for(var v =0; v < viewquotas.length;v++){
		        			var qname = viewquotas[v].qname;
		        			if(undefined != qname){
			        			var viewquota = new VIEWQUOTA(
				        			viewquotas[v].vid, 
				        			//viewquotas[v].pid,
				        			id+"-"+k,
				        			viewquotas[v].qname,
				        			viewquotas[v].qcategory,
				        			viewquotas[v].qtype
			        			);
			        			vquotaarray.push(viewquota);
		        			}
		        		}
		        		
		        		///////////////////////////关联指标项
		        		var relates = eval(json[i].asplan.relevanceItem);
		        		for(var r = 0; r < relates.length; r++){
		        			var relatesname = relates[r].rpname;
		        			if(undefined != relatesname){
		        				var relateproject = new RELATEPROJECT(
		        					//relates[r].pid,
		        						id+"-"+k,
		        						relates[r].rpid,
		        						relates[r].rvid,
		        						relatesname,
		        						relates[r].rvqname
		        				);
		        				relatearray.push(relateproject);
		        			}
		        		}
//		        		clicktab("<li myval='1' class='hit' />");
		        		clicktab(id,1);
		        	} 
		        }  
		    }); 
		    
		}
		
		
		//点击各个方案
		function clicktab(id,n){
			$("li[myval="+id+"-"+n+"]").addClass('hit').siblings().removeClass('hit');
			//显示内容
			$("#yaosu").html("");
			for(var c = 0; c < plancontentarry.length; c++){
				if(plancontentarry[c].id == (id+"-"+n)){
					$("#yaosu").html(plancontentarry[c].content);
					if(plancontentarry[c].isrelate == "0"){
						$("#gczbx").hide();
					}
					
					if(plancontentarry[c].isrelate == "1"){
						$("#gczbx").show();
					}
				}
			}
			
			//显示支撑文件
			$("#stfiles tbody").empty("");
			var strhtml = "";
			var k = 0;
			var color = "";
				for(var i = 0; i < starry.length; i++){
					if(starry[i].pid == (id+"-"+n)){
						k++;
						if(k % 2 == 0){
							color = "#DBE0E6";
						}else{
							color = "#fff";
						}
						strhtml += "<tr style='background-color:"+color+"'>";
						strhtml += "<td style='width:60px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+k+"</td>";
						strhtml += "<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+starry[i].filename+"</td>";
						strhtml += "<td style='width:140px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+starry[i].uploader+"</td>";
						strhtml += "<td style='width:140px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+starry[i].uploadtime+"</td>";
//						strhtml += "<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'><a style='color:blue' href='javascript:preview("+starry[i].id+","+starry[i].flag+")'>预览</a></td>";
						// 将原先的预览改为下载
						var id = starry[i].id;
						strhtml += "<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'><a style='color:blue' href='/audit/download?id="+id+"'>下载</a></td>";
						strhtml += "</tr>";	
					}
					
					
				}
				
			$("#stfiles").append(strhtml);
			var sflen = $("#stfiles tbody tr").length;
			if(sflen == 0){
				strhtml += "<tr style='background-color:#FFF;'>";
				strhtml += "<td colspan='5' style='height:30px;color:blue' align='center'>暂无内容显示</td></tr>";
				$("#stfiles").append(strhtml);
			}
			//显示观测项
			
			var vtrhtml = "";
			var vk = 0;
			$("#gczbxsj").html("");
			for(var v = 0; v < vquotaarray.length; v++){
				if(vquotaarray[v].pid == (id+"-"+n)){
					vk++;
					vtrhtml += "<tr style='background-color:#FFF;'>";
					vtrhtml += "<td style='width:60px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vk+"</td>";
					vtrhtml += "<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquotaarray[v].qname+"</td>";
					vtrhtml += "<td style='width:140px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquotaarray[v].qcategory+"</td>";
					vtrhtml += "<td style='width:140px;height:30px;border-top:#DADADA 1px solid;' align='center'>"+vquotaarray[v].qtype+"</td>";
					vtrhtml += "<td style='width:100px;height:30px;border-top:#DADADA 1px solid;' align='center'><a href='javascript:preview()'>...</a></td>";
					vtrhtml += "</tr>";
				}
			}
			$("#gczbxsj").append(vtrhtml);
			var gclen = $("#gczbxsj tbody tr").length;
			if(gclen == 0){
				vtrhtml += "<tr style='background-color:#FFF;'>";
				vtrhtml += "<td colspan='5' style='height:30px;color:blue' align='center'>暂无内容显示</td></tr>";
				$("#gczbxsj").append(vtrhtml);
			}
			
			//显示关联项目
			var tbStr = "";
			$("#glproject tbody").empty();
			var rpArr = qcf(relatearray);
			for ( var ri = 0; ri < rpArr.length; ri++) {
				var releva = rpArr[ri];
					if(releva.pid == (id+"-"+n)){
						tbStr += "<tr><td colspan='2' style='border:#DADADA 0px solid;'>";
						tbStr += "<div style='width: 100%;resize:none;border:#DADADA 0px solid; font-size: 12px;padding: 5px;'>";
						tbStr += releva.pname+"<br/>";
						for ( var vi = 0; vi < relatearray.length; vi++) {
							if (relatearray[vi].rpid == rpArr[ri].rpid && relatearray[vi].rpid!=0) {
								tbStr += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;"+relatearray[vi].qname+"<br/>";
							}
						}
						tbStr += "</div></td></tr>";
					}
			}
			
			$("#glproject").append(tbStr);
			var gllen = $("#glproject tbody tr").length;
			if(gllen == 0){
				tbStr += "<tr><td colspan='2' style='border:#DADADA 0px solid;'>";
				tbStr += "<div style='color:blue;width: 100%;resize:none;border:#DADADA 0px solid; font-size: 12px;padding: 5px;'>暂无内容显示</div></td></tr>";
				$("#glproject").append(tbStr);
			}
		}
		
		
		function preview(id,flag){
			//调用父类的js函数
			window.parent.sw(id,flag);
			$("#mdn",parent.document).css("top","20px");
			$("#mdn",parent.document).css("left","320px");
			$("#mdn",parent.document).css("width","800px");
			$("body",parent.document).append("<div id='mask'></div>");
			$("#mask",parent.document).addClass("mask").fadeIn("slow");
			$("#mdn",parent.document).fadeIn("slow");
		}

		
		function qcf(res) {
		    var temp = new Array();
		    res.sort();
		    if (res!=null && res.length>1) {
		    	for(i = 0; i < res.length; i++) {
		    		if(res[i+1]!=null && res[i].rpid == res[i+1].rpid) {
		    			continue;
		    		}
		    		temp[temp.length]=res[i];
		    	}
		    	return temp;
			}else {
				return res;
			}
		}
		
		//时间格式化函数

		Date.prototype.format = function (format) {

		  var o = {

		      "M+": this.getMonth() + 1, //month

		      "d+": this.getDate(), //day

		      "h+": this.getHours(), //hour

		      "m+": this.getMinutes(), //minute

		      "s+": this.getSeconds(), //second

		      "q+": Math.floor((this.getMonth() + 3) / 3), //quarter

		      "S": this.getMilliseconds() //millisecond

		  };

		  if (/(y+)/.test(format)) format = format.replace(RegExp.$1,(this.getFullYear() + "").substr(4 - RegExp.$1.length));

		  for (var k in o) if (new RegExp("(" + k + ")").test(format))format = format.replace(RegExp.$1,RegExp.$1.length == 1 ? o[k] :("00" + o[k]).substr(("" + o[k]).length));

		  return format;

		};