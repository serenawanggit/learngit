<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<html>

<head>
<title>纯CSS可折叠树状菜单</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<style type="text/css">
	*{margin: 0px; padding: 0px; font-family: "微软雅黑";}
	body{background-color: #596B81;}
	li{list-style: none; color:white;}
	
	.index_tree{width:350px; float: left;}
	.index_tree ul{float: left; width: 100%; cursor: pointer; display: none;}
	.index_tree li{ line-height: 30px; width: 92%; float: left; color:#F9F9F9; font-weight:bold; }
	.index_tree li div{float: left; height:30px; line-height: 30px;}
	.index_tree li div.tree_icon{ padding:0px 10px; }
	.index_tree li div.tree_icon img{ margin-top: 8px; height:15px; width:15px; }
	.index_tree li div.tree_text{ width:73%;}
	.index_tree li div.tree_text:hover{color:#E7A84A; cursor: pointer;}
	.index_tree li div.tree_score{ width:10%; font-style:italic; }
	 
	.index_tree li ul li{padding-left:8%;}
	.index_tree li ul li{color:#EEEFF0; font-weight: normal; font-size:13px; }
	
	
	.tree_head{float: left; width: 100%;}
	.tree_head_back{background-color: #41556D;}
	.tree_checked{background-color: #FFFFFF; border-left:10px solid #19C6A1; width:88.5%!important;}
	.tree_checked div{color:#19C6A1;}
</style>
	<script type="text/javascript" src="/audit/js/jquery.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/commonjs/common1.js"></script>
	<script type="text/javascript">
	
        validateLogin();
		$(function(){
			// 一 二 级点击事件
			$(".tree_icon").parent().click(function(){
				var key = $(this).find("div img").attr("class");
				if(key == "down"){
					$(this).parent().find("ul:eq(0)").slideUp();
					$(this).find("div img").attr("class","right");
					$(this).find("div img").attr("src","/audit/img/majorEvaluation/xiangyou.png");
				}else{
					$(this).parent().find("ul:eq(0)").slideDown();
					$(this).find("div img").attr("class","down");
					$(this).find("div img").attr("src","/audit/img/majorEvaluation/xiangxia.png");
				}
			});
			
			// 三级点击事件
			$(".index_tree li ul li ul li").click(function(){
				$(".index_tree li[class=tree_checked]").attr("class","");
				$(this).attr("class","tree_checked");
			});
			
// 			class=""
		});
	</script>
	
	
</head>
<body>
	<ul class="index_tree">
		<li>
			<div class="tree_head tree_head_back">
				<div class="tree_icon"><img class="right" src="/audit/img/majorEvaluation/xiangyou.png"></img></div>
				<div class="tree_text">1.培养目标和方案（16分）</div>
				<div class="tree_score">14.8</div>
			</div>
			<ul>
				<li>
					<div class="tree_head">
						<div class="tree_icon"><img class="right" src="/audit/img/majorEvaluation/xiangyou.png"></img></div>
						<div class="tree_text">1.培养目标和方案（16分）</div>
						<div class="tree_score">14.8</div>
					</div>
					<ul>
						<li>
							<div class="tree_head">
								<div class="tree_icon"></div>
								<div class="tree_text">1.1.1</div>
								<div class="tree_score">14.8</div>
							</div>
						</li>
						<li>
							<div class="tree_head">
								<div class="tree_icon"></div>
								<div class="tree_text">1.1.1</div>
								<div class="tree_score">14.8</div>
							</div>
						</li>
						<li>
							<div class="tree_head">
								<div class="tree_icon"></div>
								<div class="tree_text">1.1.1</div>
								<div class="tree_score">14.8</div>
							</div>
						</li>
					</ul>
				</li>
				
				<li>
					<div class="tree_head">
						<div class="tree_icon"><img class="right" src="/audit/img/majorEvaluation/xiangyou.png"></img></div>
						<div class="tree_text">2.1培养目标和方案（16分）</div>
						<div class="tree_score">14.8</div>
					</div>
					<ul>
						<li>
							<div class="tree_icon"></div>
							<div class="tree_text">1.1.1</div>
						</li>
						<li>
							<div class="tree_icon"></div>
							<div class="tree_text">1.1.2</div>
						</li>
						<li>
							<div class="tree_icon"></div>
							<div class="tree_text">1.1.3</div>
						</li>
					</ul>
				</li>
			</ul>
		</li>
		<!-- 2 -->
		<li>
			<div class="tree_head tree_head_back">
				<div class="tree_icon"><img class="right" src="/audit/img/majorEvaluation/xiangyou.png"></img></div>
				<div class="tree_text">2.教师队伍（18分）</div>
				<div class="tree_score">16.1</div>
			</div>
			<ul>
				<li>
					<div class="tree_head">
						<div class="tree_icon"><img class="right" src="/audit/img/majorEvaluation/xiangyou.png"></img></div>
						<div class="tree_text">2.1培养目标和方案（16分）</div>
						<div class="tree_score">14.8</div>
					</div>
					<ul>
						<li>
							<div class="tree_icon"></div>
							<div class="tree_text">2.1.1</div>
						</li>
						<li>
							<div class="tree_icon"></div>
							<div class="tree_text">2.1.2</div>
						</li>
						<li>
							<div class="tree_icon"></div>
							<div class="tree_text">2.1.3</div>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</body>
</html>

