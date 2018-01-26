/**
 * 
 */
 var flashvars={
	f:'',//视频地址
	a:'',//调用时的参数，只有当s>0的时候有效
	s:'2',//调用方式，0=普通方法（f=视频地址），1=网址形式,2=xml形式，3=swf形式(s>0时f=网址，配合a来完成对地址的组装)
	c:'0',//是否读取文本配置,0不是，1是
	x:'',//调用xml风格路径，为空的话将使用ckplayer.js的配置
	i:'',//初始图片地址
	d:'',//暂停时播放的广告，swf/图片
	u:'',//暂停时如果是图片的话，加个链接地址
	l:'',//视频开始前播放的广告，swf/图片/视频
	r:'',//视频开始前播放图片/视频时加一个链接地址
	t:'8',//视频开始前播放swf/图片时的时间
	e:'3',//视频结束后的动作，0是调用js函数，1是循环播放，2是暂停播放，3是调用视频推荐列表的插件
	v:'80',//默认音量，0-100之间
	p:'0',//视频默认0是暂停，1是播放
	h:'1',//播放http视频流时采用何种拖动方法，0是按关键帧，1是按关键时间点
	q:'',//视频流拖动时参考函数，默认是start
	m:'0',//默认是否采用点击播放按钮后再加载视频，0不是，1是,设置成1时不要有前置广告
	g:'',//视频直接g秒开始播放
	j:'',//视频提前j秒结束
	k:'',//提示点时间，如 30|60鼠标经过进度栏30秒，60秒会提示n指定的相应的文字
	n:'',//提示点文字，跟k配合使用，如 提示点1|提示点2
	b:'#000',//播放器的背景色，如果不设置的话将默认透明
 	w:''//指定调用自己配置的文本文件,不指定将默认调用和播放器同名的txt文件

	};
	var params={bgcolor:'#000',allowFullScreen:true,allowScriptAccess:'always', wmode: "transparent" };
	var attributes={id:'ireportpdfdiv',name:'ireportpdfdiv'};
	
	/**
	 * 
	 * @param video
	 * @param previewImg
	 * @param pauseAdv
	 * @param pictureAdUrl
	 * @param preAd
	 * @param preAdUrl
	 * @returns
	 */
	var init = function(video,previewImg,pauseAdv,pictureAdUrl,preAd,preAdUrl, title) {
		flashvars.f = video;// 视频地址
		flashvars.i = previewImg;// 视频预览图片
		flashvars.d = pauseAdv; // 暂停的广告
		flashvars.u = pictureAdUrl;// 暂停时图片广告的链接
		flashvars.l = preAd; // 视频开始前播放的广告
		flashvars.r = preAdUrl; // 视频开始前播放的广告的链接
		flashvars.my_title = title;
		var base = "/audit";
		swfobject.embedSWF(
				base + '/ckplayer/ckplayer.swf', 
				'ireportpdfdiv', 
				'670', 
				'380', 
				'10.0.0', 
				base + '/ckplayer/expressInstall.swf', 
				flashvars, 
				params, 
				attributes);
	};
        