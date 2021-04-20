const net = require('net');
const server = net.createServer();

server.on('connection', socket => {
    console.log('服务器被访问了:');
    // console.log(socket.remoteAddress);
    socket.on('data', chunk => {
        console.log(chunk.toString('utf-8'));

        socket.write(`HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html lang="zh">

<head>
	<script>
		"use strict";var __JS_RETRY__={};function __retryPlugin(event){try{var getRetryUrl=function getRetryUrl(src){var retryPublicPath="//ke.qq.com/";var publicPath=["//7.idqqimg.com/edu/","//8.idqqimg.com/edu/"];if(retryPublicPath){retryPublicPath+="/";retryPublicPath=retryPublicPath.replace(/\/\/$/,"/")}var value=src;if(Object.prototype.toString.call(publicPath)){for(var i=0;i<publicPath.length;i++){var formatPublicPath=publicPath[i].replace(/^https?:/,"");if(src.indexOf(formatPublicPath)!==-1){value=src.replace(/^https?:/,"").replace(formatPublicPath,"").replace(/^\//,"");break}}}else{value=src.replace(/^https?:/,"").replace(publicPath.replace(/^https?:/,""),"").replace(/^\//,"")}if(value===src)return src;return retryPublicPath+value};// 修复部分浏览器this.tagName获取失败的问题
this.onload=this.onerror=null;var JS_SUCC_MSID="";var JS_FAIL_MSID="";var CSS_SUCC_MSID="";var CSS_FAIL_MSID="";var JS_RETRY_SUCC_MSID="";var JS_RETRY_FAIL_MSID="";var CSS_RETRY_SUCC_MSID="";var CSS_RETRY_FAIL_MSID="";var BADJS_LEVEL=2;var report=function report(data){setTimeout(function(){window.BJ_REPORT&&window.BJ_REPORT.report(data)},2000)};var isRetry=this.hasAttribute("retry");// 只有异步的js走这个重试逻辑，同步的都是采用document.write
var isAsync=this.hasAttribute("isAsync");var isStyle=this.tagName==="LINK";var isError=event.type==="error"||event.type==="timeout";var src=this.href||this.src;var newSrc=getRetryUrl(src);if(isError){if(isRetry){report({level:BADJS_LEVEL||2,msg:this.tagName+" retry load fail: "+src,ext:{msid:isStyle?CSS_RETRY_FAIL_MSID:JS_RETRY_FAIL_MSID}})}else{if(isStyle){// link style 重新加载
var link=document.createElement("link");link.rel="stylesheet";link.href=newSrc;link.setAttribute("retry","");link.setAttribute("onerror","__retryPlugin.call(this,event)");link.setAttribute("onload","__retryPlugin.call(this,event)");this.parentNode.insertBefore(link,this.nextSibling)}else if(isAsync){// js 重新加载
var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.charset="utf-8";script.timeout=120;script.src=newSrc;if(script.src.indexOf(window.location.origin+"/")!==0){script.crossOrigin="anonymous"}var _timeout_=setTimeout(function(){script.onerror({type:"timeout",target:script})},120000);script.onerror=function(event){script.onerror=script.onload=null;clearTimeout(_timeout_);report({level:BADJS_LEVEL||2,msg:this.tagName+" retry load fail: "+this.src,ext:{msid:JS_RETRY_SUCC_MSID}})};script.onload=function(event){script.onerror=script.onload=null;clearTimeout(_timeout_);report({level:BADJS_LEVEL||2,msg:this.tagName+" retry load success: "+this.src,ext:{msid:JS_SUCC_MSID}})};head.appendChild(script)}report({level:BADJS_LEVEL||2,msg:this.tagName+" load fail: "+src,ext:{msid:isStyle?CSS_FAIL_MSID:JS_FAIL_MSID}})}}else{if(isRetry){report({level:BADJS_LEVEL||2,msg:this.tagName+" retry load success: "+src,ext:{msid:isStyle?CSS_RETRY_SUCC_MSID:JS_RETRY_SUCC_MSID}})}else{report({level:BADJS_LEVEL||2,msg:this.tagName+" load success: "+src,ext:{msid:isStyle?CSS_SUCC_MSID:JS_SUCC_MSID}})}}}catch(e){}}
	</script>
	<meta charset="UTF-8">
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no,email=no">
	<link rel="shortcut icon" href="//9.idqqimg.com/edu/edu_modules/edu-ui/img/nohash/favicon.ico">
	<link rel="dns-prefetch" href="//7.idqqimg.com">
	<link rel="dns-prefetch" href="//8.idqqimg.com">
	<link rel="dns-prefetch" href="//9.idqqimg.com">

	<meta name="keywords" content="渡一教育,官网">
	<meta name="description" itemprop="description"
		content="渡一教育在腾讯课堂在线教育平台开课啦！超强大的上课工具，QQ/微信提醒，3万门高质课程，千万名同学和你一起学习，快来腾讯课堂关注渡一教育吧！">
	<meta itemprop="name" content="渡一教育">
	<meta itemprop="image"
		content="http://p.qpic.cn/qqcourse/QFzQYCgCrxlGILTrkJeq7YsySGsa1E3A81pfP6CgzVoWUTKp0AdmIFfkbI6B4201/"
		data-ignore="1">
	<title>渡一教育_渡一教育腾讯课堂官网</title>
	<script>
		window.TRecord=window.TRecord||function(){// usage: TRecord.cfg.url=TRecord.maps.agency.billing;
var maps={core:{grandDetail:"1565-1-17",// 豪华详情页
indexNew:"7832-96-24",// 新版首页
index:"7832-96-1",// vm/index.vm
courseList:"7832-96-2",// vm/courseList.vm
courseDetail:"7832-96-3",// vm/courseDetail.vm
coursePackage:"7832-96-4",// 系列课 vm/coursePackage.vm
agencyIndex:"7832-96-7",// 没有级别的机构主页  https://frontend.ke.qq.com/
agencyIndexNew:"7832-96-8",// 3-5星级机构主页
agencyTeacher:"7832-96-9",// 机构老师 teacher/index.ejs
agencyServiceHelp:"7832-96-10",// 机构自助服务中心 service_agency.html
agencyRenzheng:"7832-96-11",// 机构认证宣传页，和404一样，应该是拷贝出现的
"404":"7832-96-12",personIndex:"7832-96-13",// 个人老师主页 vm/personIndex.vm
cateCommonTpl:"7832-96-23",// 类目通用模板
topo:"7832-96-14",// vm/topo.vm
topoCourseList:"7832-96-15",// vm/topo_index.vm
searchAgency:"7832-96-16",// 机构搜索 searchAgency.html
applySuccess:"7832-96-17",// 付费课支付成功 applySuccess.html(准备废弃)
acceptCoupon:"7832-96-18",// 接受优惠券 acceptCoupon.html
faq:"7832-96-19",downloadTeacher:"7832-96-20",// download/teacher.html
downloadApp:"7832-96-21",// download/app.html
sale:"7832-96-27",// 分销课程 sale.html
next:"1565-1-21",// next 学位详细页
syncLogin:"7832-96-36"// 企业微信内嵌页
},agency:{applyAgency:"7832-98-1",// 机构入驻申请  join/index.html
applyPersonal:"7832-98-2",// 个人老师入驻申请  personal/index.html
applyPersonalIntro:"7832-98-3",// 个人老师入驻申请说明  personal/intro.html
agencyAdmin:"7832-98-4",// 机构管理后台
billing:"7832-98-5",cdkey:"7832-98-6",graph:"7832-98-7",installDetail:"7832-98-8",installment:"7832-98-9",level:"7832-98-10",mailbox:"7832-98-11",notice:"7832-98-12",orderdetails:"7832-98-13",profile:"7832-98-14",publish:"7832-98-15",publishpacks:"7832-98-16",research:"7832-98-17",schedule:"7832-98-18",serve:"7832-98-19",settlement:"7832-98-20",sign:"7832-98-21",serveReceive:"7832-98-22",scheduleTask:"7832-98-23"},user:{user:"7832-99-1",// ueser分支
task:"7832-99-2",// 任务详细页 user/tasks/index.html
comment:"7832-99-3",// user分支 comment/index.html
schedule:"7832-99-4"// user分支 user/schedule/index.html
}};var e={url:""},n={};return{cfg:e,maps:maps,push:function push(e,c){n[e]=c||new Date-0},getCachedData:function getCachedData(){return{cfg:e,speedPoints:n}}}}();window.T=window.T||[+new Date];window.TAuto=true;
	</script>
	<script>
		// for 跳转
function getQueryValue(n){var m=window.location.search.match(new RegExp("(\\?|&)"+n+"=([^&]*)(&|$)"));return!m?"":decodeURIComponent(m[2])}function getTuinStr(){var tuin=getQueryValue("tuin");if(tuin){return"tuin="+tuin}return""}function isMobile(){return /Android|iPhone|iPod|BlackBerry|IEMobile/i.test(window.navigator.userAgent)}
	</script>
	<link href="//8.idqqimg.com/edu/assets/css/common_css_c5d13b15.css" rel="stylesheet"
		onerror="__retryPlugin.call(this,event)" onload="__retryPlugin.call(this,event)">
	<link href="//8.idqqimg.com/edu/assets/css/5_4b785a12.css" rel="stylesheet" onerror="__retryPlugin.call(this,event)"
		onload="__retryPlugin.call(this,event)">
	<link href="//8.idqqimg.com/edu/assets/css/agencyIndex/index.live_d6b328d6.css" rel="stylesheet"
		onerror="__retryPlugin.call(this,event)" onload="__retryPlugin.call(this,event)">
	<script>
		TRecord.push('page_css_ready');
	</script>
	<script>
		var BJ_REPORT=function(a){function b(a){var b=document.cookie.match(new RegExp("(^| )"+a+"=([^;]*)(;|$)"));return b?decodeURIComponent(b[2]):""}function c(a){return a>=200&&a<=299||304===a}if(a.BJ_REPORT)return a.BJ_REPORT;var d=[],e={},f={id:0,uin:0,url:"",combo:1,ext:null,level:4,ignore:[],random:1,delay:1e3,submit:null,repeat:5,fulllink:!1,tcode:null,initPv:!0,pvMsg:"!#imweb-badjs-pv#!",costomStringify:null},g="//badjs.qq.com/badjs",h="application/json; charset=utf-8",i=a.location.href,j=function(a,b){return Object.prototype.toString.call(a)==="[object "+(b||"Object")+"]"},k=function(a){return"object"==typeof a&&!!a},l=function(a){return null===a||!j(a,"Number")&&!a},m=(parseInt(b("uid_type"),10),a.onerror);a.onerror=function(b,c,d,e,g){var h=b;g&&g.stack&&(h=o(g)),j(h,"Event")&&(h+=h.type?"--"+h.type+"--"+(h.target?h.target.tagName+"::"+h.target.src:""):"");var i={msg:h,level:4,target:c,rowNum:d,colNum:e};f.jsErrorMSID&&(i.ext={msid:f.jsErrorMSID}),B.push(i),y(),m&&m.apply(a,arguments)};var n=function(a){try{if(a.stack){var b=a.stack.match("https?://[^\n]+");b=b?b[0]:"";var c=b.match(":(\\d+):(\\d+)");c||(c=[0,0,0]);return{msg:o(a),rowNum:c[1],colNum:c[2],target:b.replace(c[0],"")}}return a.name&&a.message&&a.description?{msg:f.customStringify?f.customStringify(a):JSON.stringify(a)}:a}catch(b){return a}},o=function(a){var b=a.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,5).join("@").replace(/\?[^:]+/gi,""),c=a.toString();return b.indexOf(c)<0&&(b=c+"@"+b),b},p=function(a){if(!k(a))return!0;var b=a.msg;return(e[b]=(parseInt(e[b],10)||0)+1)>f.repeat},q=function(a,b){var c=[],d=[],e=[];if(k(a)){if(a.level=a.level||f.level,!a.ext){var g=null;switch(a.level){case 1:g=f.debugMSID;break;case 2:g=f.infoMSID;break;case 4:g=f.errorMSID}g&&(a.ext={msid:g})}for(var h in a){var i=a[h];if(!l(i)){if(k(i))try{i=f.customStringify?f.customStringify(i):JSON.stringify(i)}catch(a){i="[BJ_REPORT detect value stringify error] "+a.toString()}e.push(h+":"+i),c.push(h+"="+encodeURIComponent(i)),"id"!==h&&d.push(h+"["+b+"]="+encodeURIComponent(i))}}}return[d.join("&"),e.join(","),c.join("&")]},r=function(a){(new Image).src=a.replace(f.url,g)},s=function(a){if(f.submit)f.submit(a);else{var b=u(a);if(f.fulllink){var d=new XMLHttpRequest;d.open("post",b.url),d.setRequestHeader("content-type",h),d.send(b.data),d.onload=function(){var b,e=c(d.status);if(e)try{b=JSON.parse(d.responseText)}catch(a){}(!e||b&&"number"==typeof b.err&&0!==b.err)&&r(a)}}else r(a)}},t=function(a){setTimeout(function(){s(a)},0)},u=function(a){var b=v(a),c=b[0],d=b[1],e=[];if(f.fulllink){"string"==typeof d.msg&&(d.msg=[d.msg],d.level=[d.level],d.ext&&(d.ext=[d.ext]));for(var g=0;g<d.msg.length;g++){var h={content:d.msg[g],level:+d.level[g]};if(d.ext&&d.ext[g])try{var i=JSON.parse(d.ext[g]),j=parseInt(i,10);"number"==typeof j&&j===j?h.ext={msid:parseInt(i,10)}:i.msid&&(h.ext={msid:parseInt(i.msid,10)})}catch(a){}f.tcode&&(h.cmd=f.tcode),e.push(h)}d={id:d.id,uin:d.uin,from:d.from,msg:e}}return{url:c,data:f.customStringify?f.customStringify(d):JSON.stringify(d)}},v=function(a){for(var b=a.split("?"),c=b[0],d=b[1],e={},f=d.split("&"),g=0;g<f.length;g++){var h=f[g].split("="),i=decodeURIComponent(h[0]),j=decodeURIComponent(h[1]||""),k=i.match(/\[\d+]$/);if(k){var l=k[0].match(/\d+/g)[0];i=i.replace(k[0],"");var m=e[i]||[];m[l]=j,e[i]=m}else e[i]=j}return[c,e]},w=[],x=0,y=function(a){if(f.report){for(;d.length;){var b=!1,c=d.shift();if(!p(c)){var e=q(c,w.length);if(j(f.ignore,"Array"))for(var g=0,h=f.ignore.length;g<h;g++){var i=f.ignore[g];if(j(i,"RegExp")&&i.test(e[1])||j(i,"Function")&&i(c,e[1])){b=!0;break}}if(!b){if(c.id&&c.id.toString()!==f.id.toString()){var k=(f.url||"/badjs")+"?uin="+f.uin+"&from="+encodeURIComponent(location.href)+"&";t(k+e[2]+"&_t="+ +new Date)}else f.combo?w.push(e[0]):t(f.report+e[2]+"&_t="+ +new Date);f.onReport&&f.onReport(f.id,c)}}}if(w.length){var l=function(){clearTimeout(x),t(f.report+w.join("&")+"&count="+w.length+"&_t="+ +new Date),x=0,w=[]};a?l():x||(x=setTimeout(l,f.delay))}}},z=function(a,b){var c=a;return k(a)?c.level=b:c={msg:a,level:b},c},A=function(){var a=parseInt(f.id,10);f.report=(f.url||"/badjs")+"?id="+a+"&uin="+f.uin+"&from="+encodeURIComponent(location.href)+"&"},B={push:function(a){var b=location.href;if(b!==i&&(B.report(),i=b,A()),Math.random()>=f.random)return B;var c=k(a)?n(a):{msg:a};return f.ext&&!c.ext&&(c.ext=f.ext),d.push(c),y(),B},report:function(a){return a&&B.push(a),y(!0),B},error:function(a){return a?(a=z(a,4),B.push(a),B):B},info:function(a){return a?(a=z(a,2),B.push(a),B):B},debug:function(a){return a?(a=z(a,1),B.push(a),B):B},pv:function(){return B.info(f.pvMsg)},init:function(a){if(k(a))for(var c in a)f[c]=a[c];return parseInt(f.id,10)&&(/qq\.com$/gi.test(location.hostname)&&(f.url||(f.url=g),f.uin||(f.uin=b("uin")||b("uid_uin")||b("p_luin")||b("p_uin"))),f.tcode=b("im_t_c"),A(),f.initPv&&B.pv()),B},bjReq:function(a){var b=q(a,0),c=g+"?uin="+f.uin+"&id="+f.id+"&from="+encodeURIComponent(location.href)+"&";(new Image).src=c+b[0]},__onerror__:a.onerror};if("undefined"!=typeof console&&console.error&&setTimeout(function(){var a=((location.hash||"").match(/([#&])BJ_ERROR=([^&$]+)/)||[])[2];a&&console.error("BJ_ERROR",decodeURIComponent(a).replace(/(:\d+:\d+)\s*/g,"$1\n"))},0),window.onhashchange){var C=window.onhashchange;window.onhashchange=function(a){C(a),B.pv()}}else window.onhashchange=function(){B.pv()};return B}(window);"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=BJ_REPORT),exports.BJ_REPORT=BJ_REPORT),function(a){if(a.BJ_REPORT){var b,c=function(b){a.BJ_REPORT.error(b)},d=a.BJ_REPORT.tryJs=function(a){return a&&(c=a),d},e=function(a,b){var c;for(c in b)a[c]=b[c]},f=function(a){return"function"==typeof a},g=function(d,e){return function(){try{return d.apply(this,e||arguments)}catch(d){if(c(d),d.stack&&console&&console.error&&console.error("[BJ-REPORT]",d.stack),!b){var f=a.onerror;a.onerror=function(){},b=setTimeout(function(){a.onerror=f,b=null},50)}throw d}}},h=function(a){return function(){for(var b,c=[],d=0,e=arguments.length;d<e;d++)b=arguments[d],f(b)&&(b=g(b)),c.push(b);return a.apply(this,c)}},i=function(a){return function(b,c){if("string"==typeof b)try{b=new Function(b)}catch(a){throw a}var d=[].slice.call(arguments,2);return b=g(b,d.length&&d),a(b,c)}},j=function(a,b){return function(){for(var c,d,e=[],h=0,i=arguments.length;h<i;h++)c=arguments[h],f(c)&&(c.tryWrap?c.tryWrap:(d=g(c),c.tryWrap=d,c=d)),e.push(c);return a.apply(b||this,e)}},k=function(a){var b,c;for(b in a)c=a[b],f(c)&&(a[b]=g(c));return a};d.spyJquery=function(){var b=a.$;if(!b||!b.event)return d;var c,e;b.zepto?(c=b.fn.on,e=b.fn.off,b.fn.on=j(c),b.fn.off=function(){for(var a,b=[],c=0,d=arguments.length;c<d;c++)a=arguments[c],f(a)&&a.tryWrap&&(a=a.tryWrap),b.push(a);return e.apply(this,b)}):window.jQuery&&(c=b.event.add,e=b.event.remove,b.event.add=j(c),b.event.remove=function(){for(var a,b=[],c=0,d=arguments.length;c<d;c++)a=arguments[c],f(a)&&a.tryWrap&&(a=a.tryWrap),b.push(a);return e.apply(this,b)});var g=b.ajax;return g&&(b.ajax=function(a,c){return c||(c=a,a=void 0),k(c),a?g.call(b,a,c):g.call(b,c)}),d},d.spyModules=function(){var b=a.require,c=a.define;return c&&c.amd&&b&&(a.require=h(b),e(a.require,b),a.define=h(c),e(a.define,c)),a.seajs&&c&&(a.define=function(){for(var a,b=[],d=0,e=arguments.length;d<e;d++)a=arguments[d],f(a)&&(a=g(a),a.toString=function(a){return function(){return a.toString()}}(arguments[d])),b.push(a);return c.apply(this,b)},a.seajs.use=h(a.seajs.use),e(a.define,c)),d},d.spySystem=function(){return a.setTimeout=i(a.setTimeout),a.setInterval=i(a.setInterval),d},d.spyCustom=function(a){return f(a)?g(a):k(a)},d.spyAll=function(){return d.spyJquery().spyModules().spySystem(),d}}}(window);
	</script>
	<script>
		function _readOnlyError(name){throw new Error("\""+name+"\" is read-only")}window.reportMonitor=function(id){var url="//tmapp.qq.com/cgi-bin/activity_platform/report/report_vm";var pool=[];if(!id)return;if(Array.isArray(id)){pool=(_readOnlyError("pool"),id)}else{pool.push(id)}if(pool.length){new Image().src=url+"?monitors=["+pool.join(",")+"]&_t="+new Date().getTime()}};if(!window.BJ_REPORT){var BJ_REPORT={debug:function debug(){},report:function report(){},info:function info(){},init:function init(){},tryJs:function tryJs(){return{spyAll:function spyAll(){}}}}}if(!window.Badjs){window.Badjs=function(){}}
	</script>
	<script>
		var metaData = {
            room_url: '',
            aid: '46532',
            agency_step_flag: '3'
        };
	</script>
</head>

<body>
	<script id="imweb-webpack-retry-head"></script>
	<!--[if lte IE 9]>
<div style="height:24px;width:100%;">
  <p style="line-height:24px;position:fixed;top:0;width:100%;text-align:center;min-width: 900px;background-color:#F6F6CC;color:#333;z-index:901;">
        当前的浏览器版本过低，部分功能可能会受影响，请尽快升级哦（推荐下载
        <a href="http://browser.qq.com/" target="blank" title="QQ浏览器">QQ浏览器</a>
        或
        <a href="https://www.google.cn/intl/zh-CN/chrome/" target="blank" title="谷歌浏览器">谷歌浏览器</a>
        ），或联系QQ客服800082734获得帮助
  </p>
</div>
<![endif]-->

	<!--包含头部进来-->
	<header class="header-index" id="js_main_nav">
		<div class="header-index-inner clearfix">
			<a href="https://ke.qq.com" class="header-index-logo js-header-index-logo"
				report-tdw="action=rainbow-logo-clk" title="腾讯课堂_专业的在线教育平台"></a>
			<div class="header-index-category js-header-index-category" report-hover="ver1=cates">
				<div class="header-index-category-text">
					<i class="icon-font i-list-index"></i>
					<a href="https://ke.qq.com/course/list" target="_blank" title="分类">分类</a>
				</div>
				<div class="index-cate js-index-cate">
					<!-- 类目导航 -->
				</div>
			</div>
			<div class="header-index-search" id="js-searchbox" data-report-module="searchbar">
				<div class="mod-search">
					<a class="mod-search-dropdown">
						<span class="mod-search-dropdown-item mod-search-dropdown-item-selected" data-type="course">课程<i class="icon-font i-v-bottom-small"></i></span>
						<span class="mod-search-dropdown-item" style="display: none;" data-type="agency">机构<i class="icon-font i-v-bottom-small"></i></span>
					</a>
					<!-- 默认搜索词 -->
					<input type="text" id="js_keyword" maxlength="38" class="mod-search__input" placeholder="搜索课程" autocomplete="off">
					<a id="js_search" href="javascript:void(0)"
						class="mod-search__btn-search"><i class="icon-font i-search-bold"></i></a>
				</div>
				<div id="js-searchhot" class="header-index-hot">
					<div class="header-index-hot--history">
						<p class="hot-list-tt">
							历史搜索
							<span class="btn-clear-history js-clear-history"><i class="icon-font i-delete"></i>清空</span>
						</p>
						<div class="hot-word-list"></div>
					</div>
					<!-- 搜索历史及搜索热词 -->
				</div>
				<div id="js-searchAssociation" class="header-index-hot"></div>
			</div>
			<div class="header-index-text">
				<div class="header-index-join dropdown-wrap" style="display: none"
					report-hover="module=join&amp;position=cooperate" report-attr="module=join&amp;position=cooperate">
					<p class="join-tt dropdown-tt">入驻/合作</p>
					<ul class="join-list dropdown-list">
						<li>
							<a href="https://ke.qq.com/admin/personal_join.html" title="个人入驻" target="_blank"
								report-attr="module=join&amp;position=personal">个人入驻</a>
						</li>
						<li>
							<a href="https://ke.qq.com/admin/agency_join.html" title="机构入驻" target="_blank"
								report-attr="module=join&amp;position=institution">机构入驻</a>
						</li>
						<li>
							<a href="https://ke.qq.com/sale.html" rel="nofollow" title="分销课程 " target="_blank"
								report-attr="module=join&amp;position=distribution">分销课程</a>
						</li>
						<li>
							<a href="https://ke.qq.com/cates/cooperation/index.html" rel="nofollow" title="企业合作"
								target="_blank" report-attr="module=join&amp;position=business">企业合作</a>
						</li>
					</ul>
				</div>
				<div class="header-index-quick-download">
					<a href="https://ke.qq.com/s" target="_blank" title="极速下载">极速版</a>
				</div>
				<div class="header-index-download dropdown-wrap" report-hover="module=download&amp;position=download"
					report-attr="module=download&amp;position=download">
					<p class="download-tt dropdown-tt">客户端</p>
					<ul class="download-list dropdown-list">
						<li>
							<a href="https://ke.qq.com/download/pcapp.html" title="Win客户端" target="_blank"
								report-attr="module=download&amp;position=windownload">Win客户端</a>
						</li>
						<li>
							<a href="https://ke.qq.com/download/macapp.html" title="Mac客户端" target="_blank"
								report-attr="module=download&amp;position=macdownload">Mac客户端</a>
						</li>
						<li>
							<a href="https://ke.qq.com/download/app.html" title="App客户端 " target="_blank"
								report-attr="module=download&amp;position=appdownload">App客户端</a>
						</li>
					</ul>
				</div>
				<div class="header-index-private-msgs" style="display: none">
					<a href="javascript:void(0)" rel="nofollow" title="私信">
						私信
						<span class="red-point">0</span>
					</a>
				</div>
				<!-- 登录相关组件 -->
				<div id="js-mod-header-login" class="mod-header__wrap-login mod-header__wrap-logined">
					<!-- 新版登录 个人 -->
					<div class="mod-header_wrap-user dropdown-wrap" id="js_logout_outer">
						<p class="mod-header__user-name dropdown-tt">
							<a href="https://ke.qq.com/user/index/index.html" class="mod-header__user-operation"
								rel="nofollow" report-hover="module=personalcenter&amp;position=nickname"
								report-attr="module=personalcenter&amp;position=nickname">
								<img alt="头像" class="mod-header__user-avatar js-avatar">
								<i class="icon-account js-account"></i>
								<span class="mod-header__user-operation-title js-username"></span>
							</a>
						</p>
						<ul class="mod-header__user-operations dropdown-list">
							<li>
								<a href="https://ke.qq.com/user/index/index.html#sid=plan"
									class="mod-header__user-operation" rel="nofollow"
									report-attr="module=personalcenter&amp;position=class_schedule&amp;ver1=topbar">课程表</a>
							</li>
							<li>
								<a href="https://ke.qq.com/user/index/index.html#sid=signup"
									class="mod-header__user-operation js-signup" rel="nofollow"
									report-attr="module=personalcenter&amp;position=orders&amp;ver1=topbar">全部订单</a>
							</li>
							<li class="mod-header__mailbox hide">
								<a href="https://ke.qq.com/agency/mailbox/index.html#sid=msg"
									class="mod-header__user-operation" rel="nofollow">消息管理</a>
							</li>
							<li>
								<a href="https://ke.qq.com/user/index/index.html#sid=fav"
									class="mod-header__user-operation js-fav" rel="nofollow"
									report-attr="module=personalcenter&amp;position=collection&amp;ver1=topbar">收藏</a>
							</li>
							<li>
								<a href="https://ke.qq.com/user/index/index.html#sid=coupon"
									class="mod-header__user-operation js-coupon" rel="nofollow"
									report-attr="module=personalcenter&amp;position=coupon&amp;ver1=topbar">优惠券</a>
							</li>
							<li>
								<a href="https://ke.qq.com/user/index/index.html#sid=contact"
									class="mod-header__user-operation js-userinfo" rel="nofollow"
									report-attr="module=personalcenter&amp;position=userinfo&amp;ver1=topbar">个人信息</a>
							</li>
							<li>
								<a href="javascript:void(0)" data-hook="logout"
									class="js_logout mod-header__link-logout js-login-op"
									report-attr="module=personalcenter&amp;position=exit&amp;ver1=topbar">退出登录</a>
							</li>
						</ul>
					</div>
					<!-- 新版登录 个人&&开通创作者中心 -->
					<div class="mod-header_wrap-user dropdown-wrap header-media" id="js_logout_outer_knowledge">
						<p class="mod-header__user-name dropdown-tt">
							<a href="https://ke.qq.com/admin/knowledge.html" class="mod-header__user-operation"
								rel="nofollow" report-hover="module=personalcenter&amp;position=topbar"
								report-attr="module=personalcenter&amp;position=topbar">
								<span class="mod-header__user-operation-title js-agency-op">创作中心</span>
							</a>
						</p>

						<ul class="mod-header__user-operations dropdown-list">
							<li class="mod-header__mailbox hide">
								<a href="https://ke.qq.com/agency/mailbox/index.html#sid=msg"
									class="mod-header__user-operation" rel="nofollow">消息管理</a>
							</li>
							<li>
								<a href="https://ke.qq.com/user/index/index.html#sid=plan"
									class="mod-header__user-operation" rel="nofollow"
									report-attr="module=personalcenter&amp;position=class_schedule&amp;ver1=topbar">课程表</a>
							</li>
							<li>
								<a href="javascript:void(0)" data-hook="logout"
									class="js_logout mod-header__link-logout js-login-op"
									report-attr="module=personalcenter&amp;position=exit&amp;ver1=topbar">退出登录</a>
							</li>
						</ul>
					</div>
					<div class="mod-header_live-tip triangle">
						<p></p>
						<span class="btn-s btn-outline">我知道了</span>
					</div>
					<!-- 新版登录 机构 -->
					<div class="mod-header_wrap-user mod-header_wrap-user-org dropdown-wrap"
						id="js_logout_outer_agency">
						<p class="mod-header__user-name dropdown-tt">
							<a href="https://ke.qq.com/admin/index.html" class="mod-header__user-operation"
								rel="nofollow" report-hover="module=personalcenter&amp;position=topbar"
								report-attr="module=personalcenter&amp;position=topbar">
								<span class="mod-header__user-operation-title js-agency-op">机构管理</span>
							</a>
						</p>
						<ul class="mod-header__user-operations dropdown-list">
							<li class="mod-header__mailbox hide">
								<a href="https://ke.qq.com/agency/mailbox/index.html#sid=msg"
									class="mod-header__user-operation" rel="nofollow">消息管理</a>
							</li>
							<li>
								<a href="https://ke.qq.com/user/index/index.html#sid=plan"
									class="mod-header__user-operation js-course-plan" rel="nofollow"
									report-attr="module=personalcenter&amp;position=class_schedule&amp;ver1=topbar">课程表</a>
							</li>
							<!-- 开通机构&&开通创作中心 展示创作中心入口 -->
							<li>
								<a href="https://ke.qq.com/admin/knowledge.html"
									class="mod-header__user-operation mod-header__user-knowledge js-knowledge"
									rel="nofollow">创作中心</a>
							</li>
							<li>
								<a href="javascript:void(0)" data-hook="logout"
									class="js_logout mod-header__link-logout js-login-op"
									report-attr="module=personalcenter&amp;position=exit&amp;ver1=topbar">退出登录</a>
							</li>
						</ul>
					</div>
					<a href="javascript:void(0)" class="mod-header__link-login js-login-op" id="js_login"
						data-hook="login" rel="nofollow" report-attr="module=login&amp;position=topbar">登录</a>
				</div>
				<!-- <div class="header-index-tips hide" id="js-header-sale-tips">
        转发即可赚钱！分享课程赚佣金
        <a href="javascript:void(0);" class="js-close-sale-tips"><i class="icon-font i-close-s" title="不再提醒"></i></a>
      </div> -->
			</div>
		</div>
	</header>





	<!-- banner -->

	<div class="agency-big-banner inner-center agency-new-box" id="js_banner">
		<ul class="agency-big-banner-ul" id="js_sliderbox">

			<li class="agency-big-banner-li" report-tdw="action=Banner_click&ver1=231577&ver3=0">
				<a href="https://ke.qq.com/course/231577" target="_blank" title="Web前端开发之JavaScript(Js)精英课堂【渡一教育】"
					class="js-more js-banner-btnqq" data-id="231577" data-service-uin="231577">
					<img src="//10.idqqimg.com/eth/ajNVdqHZLLCY8iaPzaU1OsuhR9Fe6xLWmAk7TCibyVJ3eZqCTFuwA0C6ZHaKciaK6pUib0Jc4mWPfec/" alt="Web前端开发之JavaScript(Js)精英课堂【渡一教育】">
            </a>
			</li>

			<li class="agency-big-banner-li" report-tdw="action=Banner_click&ver1=231577&ver3=1">
				<a href="https://ke.qq.com/course/231577" target="_blank" title="Web前端开发之JavaScript(Js)精英课堂【渡一教育】"
					class="js-more js-banner-btnqq" data-id="231577" data-service-uin="231577">
					<img src="//10.idqqimg.com/eth/ajNVdqHZLLDuhHyu5ayy1WK1icibJUhwuAeGUjDRQrQtDSsPfYicauh5bcZAeBy4FhiaPHYe0GDtmHw/" alt="Web前端开发之JavaScript(Js)精英课堂【渡一教育】">
            </a>
			</li>

			<li class="agency-big-banner-li" report-tdw="action=Banner_click&ver1=231577&ver3=2">
				<a href="https://ke.qq.com/course/231577" target="_blank" title="Web前端开发之JavaScript(Js)精英课堂【渡一教育】"
					class="js-more js-banner-btnqq" data-id="231577" data-service-uin="231577">
					<img src="//10.idqqimg.com/eth/ajNVdqHZLLD1BYo3V2ra1sVIzLlVovBLHJhmWsHia33RD69ib7G955tW81tib9Oz8AV0KsbhbhZuEw/" alt="Web前端开发之JavaScript(Js)精英课堂【渡一教育】">
            </a>
			</li>

		</ul>

		<div class="mod-big-banner__banner-status" id="js_slidernav">
			<ul class="mod-big-banner__status-bar" id="js-big-banner">

				<li class="js-big-banner-nav mod-big-banner__status mod-big-banner__status_current">
				</li>

				<li class="js-big-banner-nav mod-big-banner__status ">
				</li>

				<li class="js-big-banner-nav mod-big-banner__status ">
				</li>

			</ul>
		</div>

	</div>



	<!-- 机构头部 -->
	<section class="agency-head">
		<img src="//p.qpic.cn/qqcourse/QFzQYCgCrxlGILTrkJeq7YsySGsa1E3A81pfP6CgzVoWUTKp0AdmIFfkbI6B4201/" alt="渡一教育" class="agency-head-logo" />
		<div class="agency-head-main">
			<div class="ag-title clearfix">
				<a href="javascript:void(0);" class="ag-title-main js-agency-info-name" title="渡一教育">渡一教育</a>

				<!-- 机构等级勋章 + hover气泡 start -->
				<div class="js-agency-medal"></div>
				<!-- 机构等级勋章 + hover气泡 end -->


				<a class="ag-title-renzheng icon-renzheng-l js-renzheng" href="https://ke.qq.com/faq.html#id=10"
					target="_blank" title=&#34;前端开发类目认证机构&#34;>
				</a>

			</div>
			<div class="ag-info">

				<span>好评度
                
                97%
                
            </span>
				<i class="ag-info-split"></i>
				<span>学生数
                <span class="js-item-num" data-num="846769">
                    
                </span>
				</span>
				<i class="ag-info-split"></i>

				<span class="ag-info-des">育人为渡，经久如一</span>
				<i class="ag-info-split"></i>

				<a class="ag-info-btn" href="http://wpa.qq.com/msgrd?v=3&uin=3007014552&site=qq&menu=yes"
					target="_blank" data-service-uin="3007014552" report-tdw="action=click&module=message"
					class="ag-subinfo-btn">
					<i class="icon-font i-qq"></i>在线咨询
				</a>
			</div>
		</div>
		<div class="agency-head-mask"></div>
	</section>


	<!-- 固定导航条 -->
	<nav class="agency-sticky-nav hide" id="js-float-tab">
		<div class="agency-wrap-mod-no-border inner-center">
			<ul class="agency-tab__ul js-side-nav">
				<li class="agency-tab__li agency-tab__li_current" data-hook="agency-home"><a href="javascript:;">
						<h2>主页</h2>
					</a></li>
				<li class="agency-tab__li" data-hook="agency-course"><a href="javascript:;">
						<h2>课程(94)</h2>
					</a></li>

				<li class="agency-tab__li" data-hook="agency-teacher"><a href="javascript:;">
						<h2>老师(37)</h2>
					</a></li>

				<li class="agency-tab__li" data-hook="agency-about"><a href="javascript:;">
						<h2>关于我们</h2>
					</a></li>
			</ul>
			<a class="agency-info-qq-fix js-agency-btn-open"
				href="http://wpa.qq.com/msgrd?v=3&uin=3007014552&site=qq&menu=yes" target="_blank"
				data-service-uin="3007014552">
				<i class="icon-font i-qq"></i>
				<span>在线咨询</span>
			</a>
		</div>
	</nav>

	<!-- 主内容区域 -->
	<section class="section-main">
		<div class="agency-wrap-mod inner-center">
			<ul class="agency-tab__ul js-side-nav" id="js-tab" data-index="1">
				<li class="agency-tab__li agency-tab__li_current" data-hook="agency-home"><a href="javascript:;">
						<h2>主页</h2>
					</a></li>
				<li class="agency-tab__li" data-hook="agency-course"><a href="javascript:;">
						<h2>课程(94)</h2>
					</a></li>

				<li class="agency-tab__li" data-hook="agency-teacher"><a href="javascript:;">
						<h2>老师(37)</h2>
					</a></li>

				<li class="agency-tab__li" data-hook="agency-about"><a href="javascript:;">
						<h2>关于我们</h2>
					</a></li>
			</ul>
		</div>
		<div class="agency-content">

			<!--主页-->
			<div class="agency-tab agency-home">
				<div class="agency-coupon inner-center hide">
					<ul class="agency-coupon-list clearfix"></ul>
				</div>

				<!-- 课程分类导航 -->
				<div class="agency-new-box agency-nav hide" id="js-agency-nav">
				</div>

				<!-- 重点合辑 -->

				<div class="agency-spread-wrap inner-center">
					<h4>精英课堂</h4>
					<ul class="spread-course-ul">


						<li report-tdw="action=Course_expo&ver1=231577&ver3=1.1.0" cors-name="course">
							<div class="spread-course-cover-wrap"
								report-tdw="action=Coursecard_Coursecover-clk&ver1=231577&ver3=1.1.0"
								cors-name="course">
								<a href="https://ke.qq.com/course/231577" target="_blank" title="Web前端开发JavaScript权威课堂"
									report-tdw="action=hotcourse_clk&ver1=231577">
									<img class="spread-course-cover" src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBtwj3n87gmO6l8BvaHq5Mz2UhX5JBRIwLhETywO0rx62jcOibMpB9bQU7X7pTuD7yE/440" width="460" height="259"
                                    alt="Web前端开发JavaScript权威课堂">
                            </a>


							</div>
							<div class="spread-course-wrap">
								<a href="https://ke.qq.com/course/231577" target="_blank" title="Web前端开发JavaScript权威课堂"
									report-tdw="action=Coursecard_Coursesname-clk&ver1=231577&ver3=1.1.0"
									cors-name="course">
									<h3 class="spread-course-title" report-tdw="action=hotcourse_clk&ver1=231577">
										Web前端开发JavaScript权威课堂</h3>
								</a>
								<div class="spread-des-wrap">
									<div class="spread-course-des">这可能是全网最好的web前端基础教程，看过的人都建议把“可能”去掉。</div>
									<div class="spread-course-face"
										report-tdw="action=Course_teacher_clk&ver1=231577&ver3=1.0&ver4=79368009">
										<img src="//10.idqqimg.com/eth/ajNVdqHZLLACXRdcvO67aZ5zdYt1TpglRQhQKUuuNKDib4aYbyr3c7gW9DaXPRhzBX3lsrDzf3PQ/90" alt="姬成">
										<span>姬成</span><i></i>
										<span>
                                        2561人
                                        最近报名
                                    </span>
									</div>
								</div>

								<div class="spread-course-price spread-course-free">
									免费

								</div>

								<div>

									<a href="https://ke.qq.com/course/231577" target="_blank" cors-name="course"
										report-tdw="action=hotcourse_clk&ver1=231577">
										<span class="spread-btn-join btn-primary">立即报名</span>
									</a>

								</div>
							</div>
						</li>



						<li report-tdw="action=Course_expo&ver1=375599&ver3=1.1.0" cors-name="course">
							<div class="spread-course-cover-wrap"
								report-tdw="action=Coursecard_Coursecover-clk&ver1=375599&ver3=1.1.0"
								cors-name="course">
								<a href="https://ke.qq.com/course/375599" target="_blank"
									title="Java零基础入门到精通Ⅰ [运算符,语法结构,数组使用,面向对象]"
									report-tdw="action=hotcourse_clk&ver1=375599">
									<img class="spread-course-cover" src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLCKAyXhbUJbO93kuiaavKLHWWd9yibdrvNnZBC7XicySSYArQYpmCUHQyQA24sBXUOCec/440" width="460" height="259"
                                    alt="Java零基础入门到精通Ⅰ [运算符,语法结构,数组使用,面向对象]">
                            </a>


							</div>
							<div class="spread-course-wrap">
								<a href="https://ke.qq.com/course/375599" target="_blank"
									title="Java零基础入门到精通Ⅰ [运算符,语法结构,数组使用,面向对象]"
									report-tdw="action=Coursecard_Coursesname-clk&ver1=375599&ver3=1.1.0"
									cors-name="course">
									<h3 class="spread-course-title" report-tdw="action=hotcourse_clk&ver1=375599">
										Java零基础入门到精通Ⅰ [运算符,语法结构,数组使用,面向对象]</h3>
								</a>
								<div class="spread-des-wrap">
									<div class="spread-course-des">底层核心算法+性能开发+完整企业项目实战！助你冲击大厂！</div>
									<div class="spread-course-face"
										report-tdw="action=Course_teacher_clk&ver1=375599&ver3=1.0&ver4=30411434">
										<img src="//10.idqqimg.com/eth/ajNVdqHZLLBrCbTjickdK6EiaibRTJu9icLibibRibUKb6S01zlxav4PYzicPOntazkAptvenSribwk0M9v8/90" alt="渡一Java-唐老师">
										<span>渡一Java-唐老师</span><i></i>
										<span>
                                        2125人
                                        最近报名
                                    </span>
									</div>
								</div>

								<div class="spread-course-price spread-course-free">
									免费

								</div>

								<div>

									<a href="https://ke.qq.com/course/375599" target="_blank" cors-name="course"
										report-tdw="action=hotcourse_clk&ver1=375599">
										<span class="spread-btn-join btn-primary">立即报名</span>
									</a>

								</div>
							</div>
						</li>



					</ul>
				</div>


				<script>
					var Tfp = +(new Date());

				</script>
				<!-- 合辑推荐 -->

				<div class="agency-recommend-course inner-center">
					<div class="recommend-course-title">
						<span>冲刺高薪必学技能<span>
                            
                            <a href="https://ke.qq.com/course/231577" target="_blank"
                                report-tdw="action=More_clk&ver3=0">更多</a>
                            
                </div>
                <div class="recommend-course-wrap clearfix">
                    <div class="course-card-consult course-card-list-1200-wrap course-card-agency" id="js-course-block">
                        
                        <div class="rec-group">
                            <div class="rec-group-mask"></div>
                            <p class="rec-group-info">录播视频，资料分享</p>
                            
                            <a title="加群" href="tencent://VisitPublicGroup/?subcmd=VisitPublicGroupEx&amp;param=7b2267726f757055696e223a3637323638353235352c22457874506172616d223a7b226170704964223a2230227d2c2276697369746f72223a317d" class="rec-group-join js-group-join"
                                report-tdw="action=add_group">加群</a>
                            
                        </div>
                        
                        
                        <!--
    opt = {
        simplify: true,  // 简化模式，少了第二行
        sIndex:   1,     // 首页楼层上报用
        fIndex:   2,     // 首页楼层上报用
        noAgency: true,  // 简化模式下不展示机构信息，展示学习人数
        showOrigin: true,  / 是否在价格后显示原价
        hideStatus: true,// 隐藏课程状态栏
        lazyload: true,   // 课程图懒加载
        grayTag: true, // 展示标签
        fakeString: function, // 替换成假字符串
        numberClass: 'custom-string', // 假字符串类名
    }

 -->
<ul class="course-card-list" auto-test="">
    
    <li class="course-card-item" 
        data-report-position="1">

        <a href="https://ke.qq.com/course/231577" target="_blank" class="item-img-link" data-ispkg="0" data-id="231577"
            data-index="1"
            report-tdw="action=Coursecard_Coursecover-clk&ver1=231577&ver3=1.1.1" cors-name="course">
            
            <img lazy-src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLBtwj3n87gmO6l8BvaHq5Mz2UhX5JBRIwLhETywO0rx62jcOibMpB9bQU7X7pTuD7yE/356" alt="Web前端开发JavaScript权威课堂" title="Web前端开发JavaScript权威课堂" class="item-img"
                width="220" height="124" />
            
            
        </a>
        
        <div class="item-status">
            <span class="item-status-step">随到随学（共36节）</span>

					</div>


					<h4 class="item-tt">


						<a href="https://ke.qq.com/course/231577" target="_blank" class="item-tt-link"
							title="Web前端开发JavaScript权威课堂"
							report-tdw="action=Coursecard_Coursesname-clk&ver1=231577&ver3=1.1.1"
							cors-name="course">Web前端开发JavaScript权威课堂</a>

					</h4>



					<div class="item-line item-line--bottom">
						<span
                class="line-cell item-price free ">免费</span>



						<span class="line-cell item-user item-user--right">
                2561人最近报名
                </span>

					</div>
					</li>

					<li class="course-card-item" data-report-position="2">

						<a href="https://ke.qq.com/course/231570" target="_blank" class="item-img-link" data-ispkg="0"
							data-id="231570" data-index="2"
							report-tdw="action=Coursecard_Coursecover-clk&ver1=231570&ver3=1.1.2" cors-name="course">

							<img lazy-src="https://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLA0fvGgtFzPm8rz2aOiaLmBHibzFB1czNrNYApe9sCXry1rtos9fMpqX1xwudARRagwM/356" alt="2021权威HTML+CSS零基础入学" title="2021权威HTML+CSS零基础入学" class="item-img"
                width="220" height="124" />


        </a>

							<div class="item-status">
								<span class="item-status-step">随到随学（共10节）</span>

							</div>


							<h4 class="item-tt">


								<a href="https://ke.qq.com/course/231570" target="_blank" class="item-tt-link"
									title="2021权威HTML+CSS零基础入学"
									report-tdw="action=Coursecard_Coursesname-clk&ver1=231570&ver3=1.1.2"
									cors-name="course">2021权威HTML+CSS零基础入学</a>

							</h4>



							<div class="item-line item-line--bottom">
								<span
                class="line-cell item-price free ">免费</span>



								<span class="line-cell item-user item-user--right">
                1079人最近报名
                </span>

							</div>
					</li>

					</ul>
				</div>
			</div>
		</div>


		<div class="agency-teacher-student">
			<!-- 明星老师 -->

			<div class="agency-teacher-wrap inner-center clearfix">
				<h3>渡一教育 -【明星老师】</h3>

				<div class="agency-teacher-star-wrap clearfix agency-teacher-star-left"
					report-tdw="action=Super_teacher_expo&ver1=79368009">
					<a href="https://ke.qq.com/teacher/79368009" target="_blank" class="teacher-face-a"><img
                                src="//10.idqqimg.com/eth/ajNVdqHZLLACXRdcvO67aZ5zdYt1TpglRQhQKUuuNKDib4aYbyr3c7gW9DaXPRhzBX3lsrDzf3PQ/130"></a>
						<div class="agency-teacher-right">
							<a href="https://ke.qq.com/teacher/79368009" target="_blank" class="teacher-right-title"
								report-tdw="action=Super_teacher_clk&ver1=79368009">
								<h4>姬成</h4>
							</a>
							<div class="teacher-right-info">
								<span>课程64</span>
								<i class="teacher-right-info-split"></i>
								<span>学生498527</span>
							</div>

							<div class="teacher-right-des"
								title="现任渡一信息开发有限公司 CEO，原阿里巴巴 UC 移动事业群购物搜索项目负责人，微软 GMCT 金牌讲师，并兼任多所高校企联合生涯规划师，曾累计在各大学开展70余场生涯规划讲座。">
								现任渡一信息开发有限公司 CEO，原阿里巴巴 UC 移动事业群购物搜索项目负责人，微软 GMCT
								金牌讲师，并兼任多所高校企联合生涯规划师，曾累计在各大学开展70余场生涯规划讲座。</div>


							<div class="teacher-course teacher-course--hide">
								<p class="teacher-course-main">
									<span class="teacher-course-label">任教：</span>
									<a href="https://ke.qq.com/course/0" target="_blank" class="teacher-course-tit"
										report-tdw="action=teacher_course_clk&ver1=0">

									</a>
								</p>
							</div>
						</div>
				</div>

				<div class="agency-teacher-star-wrap clearfix agency-teacher-star-right"
					report-tdw="action=Super_teacher_expo&ver1=835650053">
					<a href="https://ke.qq.com/teacher/835650053" target="_blank" class="teacher-face-a"><img
                                src="//10.idqqimg.com/eth/ajNVdqHZLLABx3384A9WSC8gITtQhZNXPbamNwJ9EqMrBAHYjq42AibbSYxZkpLMZyJwwbGvWJiak/130"></a>
						<div class="agency-teacher-right">
							<a href="https://ke.qq.com/teacher/835650053" target="_blank" class="teacher-right-title"
								report-tdw="action=Super_teacher_clk&ver1=835650053">
								<h4>渡一陈老师</h4>
							</a>
							<div class="teacher-right-info">
								<span>课程23</span>
								<i class="teacher-right-info-split"></i>
								<span>学生250114</span>
							</div>

							<div class="teacher-right-des"
								title="渡一教育高级讲师，现任渡一信息技术开发有限公司VP，哈尔滨托特教育科技有限公司VP， 原百度自然语言处理事业群 T5 级高级工程师，精通 Web 全栈、Java和 C++等技术，对设计模式，框架源码有很深的理解！">
								渡一教育高级讲师，现任渡一信息技术开发有限公司VP，哈尔滨托特教育科技有限公司VP， 原百度自然语言处理事业群 T5 级高级工程师，精通 Web 全栈、Java和
								C++等技术，对设计模式，框架源码有很深的理解！</div>


							<div class="teacher-course teacher-course--hide">
								<p class="teacher-course-main">
									<span class="teacher-course-label">任教：</span>
									<a href="https://ke.qq.com/course/0" target="_blank" class="teacher-course-tit"
										report-tdw="action=teacher_course_clk&ver1=0">

									</a>
								</p>
							</div>
						</div>
				</div>

				<div class="agency-teacher-star-wrap clearfix agency-teacher-star-left"
					report-tdw="action=Super_teacher_expo&ver1=2782170452">
					<a href="https://ke.qq.com/teacher/2782170452" target="_blank" class="teacher-face-a"><img
                                src="//10.idqqimg.com/eth/ajNVdqHZLLBwqA4XStHBds9cHo2yakRBaK00QFToemXy1YU5d3SdE5CKCl76iccFraD5ZoYc9vZU/130"></a>
						<div class="agency-teacher-right">
							<a href="https://ke.qq.com/teacher/2782170452" target="_blank" class="teacher-right-title"
								report-tdw="action=Super_teacher_clk&ver1=2782170452">
								<h4>渡一前端-袁进老师</h4>
							</a>
							<div class="teacher-right-info">
								<span>课程43</span>
								<i class="teacher-right-info-split"></i>
								<span>学生240628</span>
							</div>

							<div class="teacher-right-des"
								title="渡一高级讲师
曾在大型互联网企业先后担任架构师和技术总监。深入了解C#、php、java、前端等多门计算机语言，擅长分析和搭建系统架构和更擅长沟通协作。5年教学经验，授课方式幽默风趣，细致入微，凭着突出的技术实力和教学能力为一线大厂输送了大量的优质人才。">渡一高级讲师
								曾在大型互联网企业先后担任架构师和技术总监。深入了解C#、php、java、前端等多门计算机语言，擅长分析和搭建系统架构和更擅长沟通协作。5年教学经验，授课方式幽默风趣，细致入微，凭着突出的技术实力和教学能力为一线大厂输送了大量的优质人才。
							</div>


							<div class="teacher-course teacher-course--hide">
								<p class="teacher-course-main">
									<span class="teacher-course-label">任教：</span>
									<a href="https://ke.qq.com/course/0" target="_blank" class="teacher-course-tit"
										report-tdw="action=teacher_course_clk&ver1=0">

									</a>
								</p>
							</div>
						</div>
				</div>

				<div class="agency-teacher-star-wrap clearfix agency-teacher-star-right"
					report-tdw="action=Super_teacher_expo&ver1=370917198">
					<a href="https://ke.qq.com/teacher/370917198" target="_blank" class="teacher-face-a"><img
                                src="//thirdqq.qlogo.cn/g?b=sdk&amp;k=8LtOBKEHDJo3F2RzBrbmHA&amp;s=640&amp;t=1483313307130"></a>
						<div class="agency-teacher-right">
							<a href="https://ke.qq.com/teacher/370917198" target="_blank" class="teacher-right-title"
								report-tdw="action=Super_teacher_clk&ver1=370917198">
								<h4>渡一Java-阿拓老师</h4>
							</a>
							<div class="teacher-right-info">
								<span>课程73</span>
								<i class="teacher-right-info-split"></i>
								<span>学生250764</span>
							</div>

							<div class="teacher-right-des"
								title="渡一教育Java金牌讲师，架构师；曾就职于华硕电脑，哈药集团，哈尔滨高新区管委会等公司；擅长以生活中的实际案例深入讲解面向对象核心思想；擅长以基础知识深入剖析技术发展及底层原理；旨在培养学员提升思想底蕴，让学员感受不一样的Java">
								渡一教育Java金牌讲师，架构师；曾就职于华硕电脑，哈药集团，哈尔滨高新区管委会等公司；擅长以生活中的实际案例深入讲解面向对象核心思想；擅长以基础知识深入剖析技术发展及底层原理；旨在培养学员提升思想底蕴，让学员感受不一样的Java
							</div>


							<div class="teacher-course teacher-course--hide">
								<p class="teacher-course-main">
									<span class="teacher-course-label">任教：</span>
									<a href="https://ke.qq.com/course/0" target="_blank" class="teacher-course-tit"
										report-tdw="action=teacher_course_clk&ver1=0">

									</a>
								</p>
							</div>
						</div>
				</div>

			</div>

			<!-- 明星学员 -->

			<div class="agency-student-wrap inner-center clearfix">
				<h3>渡一教育 -【优秀学员】</h3>
				<div class="agency-stu">
					<ul class="agency-stu-list clearfix">

						<li class="stu">
							<a class="stu-face"><img class="stu-img" src="//10.idqqimg.com/eth/ajNVdqHZLLD5guicfz5mjnH4dDNHicLnfUzVjQhvfebxDcXRtQoN7da1YEGCfGc9O02lgicSTOKl2I/90"
                                        alt="李敏"></a>
								<div class="stu-main">
									<h4>李敏</h4>
									<p class="stu-main-cnt ">
										刚刚毕业就达到年薪28.8万的李敏同学就职于凡普金科。</p>

									<p class="stu-main-course">
										<span class="stu-main-label">学过：</span>
										<a href="https://ke.qq.com/course/231577" target="_blank"
											title="Web前端开发JavaScript权威课堂" hasWork="true"
											report-tdw="action=Student_class_clk&ver1=231577" class="stu-main-tit">
											Web前端开发JavaScript权威课堂
										</a>
									</p>

								</div>

						</li>

					</ul>
				</div>
				<div class="student-work-wrap js-student-work hide"></div>
				<div class="student-work-bg js-student-work-bg hide"><img src=""></div>
				</div>




			</div>
		</div>

		<!--课程TAB-->
		<div class="agency-tab agency-course hide inner-center">
			<div class="course-tab-wrap">
				<div class="js-course-tab-pkg"></div>
				<div class="course-total-title">全部课程</div>
				<div class="js-course-tab-filter"></div>
				<div class="course-card-list-1200-wrap course-card-list-multi-wrap js-course-list"></div>
			</div>
			<div class="wrap-change-page">
				<div class="sort-page"></div>
			</div>
		</div>

		<!-- 老师TAB -->
		<div class="agency-tab agency-teacher hide inner-center">
			<ul class="tea-wrap js-teacher-list clearfix">
			</ul>
			<div class="wrap-change-page">
				<div class="sort-page"></div>
			</div>
		</div>

		<!-- 关于我们TAB -->
		<div class="agency-tab agency-about js-about hide inner-center">

			<div class="about-banner-wrap-0 about-banner-pic0">

				<div class="about-agency-name-wrap-0">
					<span class="about-agency-propagate">育人为渡 经久如一</span>
					<span class="about-agency-name">—— 渡一教育</span>
				</div>

			</div>

			<div class="about-agency-intr-wrap">
				<h2>渡一教育 - 机构简介</h2>
				<div class="about-agency-devide"></div>

				<div class="about-agency-intr">
					<span style="font-size:16px;">&nbsp; &nbsp; &nbsp; 我公司成立于2009年，致力于 IT 技术人才职业培养，经整合并购，于2016年正式创立“渡一教育”品牌，于2017年拓展在线教学市场，现已成为在线 IT 职业教育领域领军品牌，覆盖用户超百万。<br /><br />&nbsp; &nbsp; &nbsp;&nbsp;公司位于上海、哈尔滨两地，坐落在上海御华山氪空间，与哈尔滨金爵万象大厦。<br />&nbsp; &nbsp;<br />&nbsp; &nbsp; &nbsp;&nbsp;企业创始人及骨干成员均来自知名一线互联网公司，团队成员近百人，团队作风干练，氛围融洽。<br /><br />&nbsp; &nbsp; &nbsp;&nbsp;渡一教育品牌，是我国首家开设“web前端”精品就业培训的教育机构。课程内容质量精良，长期以来，一直处于业内领军位置。机构下设JavaWeb、Python、Web前端、平面设计、电商设计、Data Scientist、Data Analyst等课程。截止2019年末，企业市场辐射范围除中国内陆外已达中国台湾、北美、加拿大、澳洲、新西兰、英国、西班牙、日本、马来西亚、泰国等国家地区。已向国际一线互联网企业输送数万精英。<br /><br />&nbsp; &nbsp; &nbsp;&nbsp;公司通过不断健全自身产品方向、打磨产品质量，兼并推出IT咨询与服务等配套业务，多维度、多角度为学员解决切身问题，更好、更全面的为每位学员赋能。&nbsp;<br /><br />&nbsp; &nbsp;&nbsp;“渡一”经营管理体系完备，业务运营模式卓越，致力于成为中国互联网IT教育行业的领军企业，引领行业发展与改善，秉持“育人为渡，经久如一”之理念服务用户，基于互联网IT教育行业贡献社会。&nbsp;<br /><br /><br /><strong>企业文化：</strong><br />愿景：成为 IT 学习者的唯一选择；<br />使命：链接每一位 IT 求学者，让 IT 学起来更容易；<br />核心价值观：终身学习 、追求极致 、拥抱变化、居安思危、初心至善。</span>
				</div>

			</div>

			<div class="about-agency-develop-wrap">

				<h2>渡一教育 - 发展历程</h2>
				<div class="about-agency-devide"></div>
				<div class="about-agency-develop">

					<div class="develop-item">
						<i class="develop-icon-dotted"></i>
						<span class="develop-item-time">2009年5月</span>
						<p class="develop-item-des">“渡一”前身“明彦科技”，经营业务涵盖线下IT教育、创意设计以及IT技术服务外包，业务范围覆盖黑龙江省。</p>
					</div>

					<span class="develop-dotted-line"></span>
				</div>

			</div>

		</div>
		</div>
	</section>

	<script>
		var metaData = {
        room_url: '',
        aid: '46532',
        agency_step_flag: '3'
    };

    var aboutData = {"pic_no":0,"cover_url":"//p.qpic.cn/qqcourse/QFzQYCgCrxlGILTrkJeq7YsySGsa1E3A81pfP6CgzVoWUTKp0AdmIFfkbI6B4201/","agency_name":"渡一教育","service_uin":3007014552,"star":2,"introduce":"<span style=\"font-size:16px;\">&nbsp; &nbsp; &nbsp; 我公司成立于2009年，致力于 IT 技术人才职业培养，经整合并购，于2016年正式创立“渡一教育”品牌，于2017年拓展在线教学市场，现已成为在线 IT 职业教育领域领军品牌，覆盖用户超百万。<br /><br />&nbsp; &nbsp; &nbsp;&nbsp;公司位于上海、哈尔滨两地，坐落在上海御华山氪空间，与哈尔滨金爵万象大厦。<br />&nbsp; &nbsp;<br />&nbsp; &nbsp; &nbsp;&nbsp;企业创始人及骨干成员均来自知名一线互联网公司，团队成员近百人，团队作风干练，氛围融洽。<br /><br />&nbsp; &nbsp; &nbsp;&nbsp;渡一教育品牌，是我国首家开设“web前端”精品就业培训的教育机构。课程内容质量精良，长期以来，一直处于业内领军位置。机构下设JavaWeb、Python、Web前端、平面设计、电商设计、Data Scientist、Data Analyst等课程。截止2019年末，企业市场辐射范围除中国内陆外已达中国台湾、北美、加拿大、澳洲、新西兰、英国、西班牙、日本、马来西亚、泰国等国家地区。已向国际一线互联网企业输送数万精英。<br /><br />&nbsp; &nbsp; &nbsp;&nbsp;公司通过不断健全自身产品方向、打磨产品质量，兼并推出IT咨询与服务等配套业务，多维度、多角度为学员解决切身问题，更好、更全面的为每位学员赋能。&nbsp;<br /><br />&nbsp; &nbsp;&nbsp;“渡一”经营管理体系完备，业务运营模式卓越，致力于成为中国互联网IT教育行业的领军企业，引领行业发展与改善，秉持“育人为渡，经久如一”之理念服务用户，基于互联网IT教育行业贡献社会。&nbsp;<br /><br /><br /><strong>企业文化：</strong><br />愿景：成为 IT 学习者的唯一选择；<br />使命：链接每一位 IT 求学者，让 IT 学起来更容易；<br />核心价值观：终身学习 、追求极致 、拥抱变化、居安思危、初心至善。</span>","agency_summay":"我公司成立于2009年，致力于 IT 技术人才职业培养，经整合并购，于2016年正式创立“渡一教育”品牌，于2017年拓展在线教学市场，现已成为在线 IT 职业教育领域领军品牌，覆盖用户超百万。\n\n      公司位于上海、哈尔滨两地，坐落在上海御华山氪空间，与哈尔滨金爵万象大厦。\n   \n      企业创始人及骨干成员均来自知名一线互联网公司，团队成员近百人，团队作风干练，氛围融洽。\n\n      渡一教育品牌，是我国首家开设“web前端”精品就业培训的教育机构。课程内容质量精良，长期以来，一直处于业内领军位置。机构下设JavaWeb、Python、Web前端、平面设计、电商设计、Data Scientist、Data Analyst等课程。截止2019年末，企业市场辐射范围除中国内陆外已达中国台湾、北美、加拿大、澳洲、新西兰、英国、西班牙、日本、马来西亚、泰国等国家地区。已向国际一线互联网企业输送数万精英。\n\n      公司通过不断健全自身产品方向、打磨产品质量，兼并推出IT咨询与服务等配套业务，多维度、多角度为学员解决切身问题，更好、更全面的为每位学员赋能。\n\n    “渡一”经营管理体系完备，业务运营模式卓越，致力于成为中国互联网IT教育行业的领军企业，引领行业发展与改善，秉持“育人为渡，经久如一”之理念服务用户，基于互联网IT教育行业贡献社会。\n\n\n企业文化：\n愿景：成为 IT 学习者的唯一选择；\n使命：链接每一位 IT 求学者，让 IT 学起来更容易；\n核心价值观：终身学习 、追求极致 、拥抱变化、居安思危、初心至善。\n","publicity":"育人为渡 经久如一","aid":46532,"course_milestones":[{"date":"2009年5月","introduce":"“渡一”前身“明彦科技”，经营业务涵盖线下IT教育、创意设计以及IT技术服务外包，业务范围覆盖黑龙江省。","id":15868500543111200}]};
	</script>



	<!--包含尾部进来-->
	<footer class="footer">
		<i class="icon-font i-logo" title="腾讯课堂_专业的在线教育平台"></i>
		<p>Copyright © 2021 Tencent. All Rights Reserved.</p>
		<p>深圳市腾讯计算机系统有限公司 版权所有 | <a href="https://ke.qq.com/proService.html" target="_blank" rel="nofollow">腾讯课堂服务协议</a>
			|
			<a href="https://ke.qq.com/article/487" target="_blank">隐私政策</a> | <a href="https://ke.qq.com/sitemap.html"
				target="_blank">站点地图</a> | <a href="https://ke.qq.com/tort.html" target="_blank">侵权投诉</a> | <a
				href="https://support.qq.com/products/1290" rel="nofollow" report-tdw="action=Feedback"
				target="_blank">问题反馈</a> | <a href="https://ke.qq.com/faq.html" target="_blank">帮助</a>
			| <a href="https://ke.qq.com/cheese" target="_blank">涨知识</a></p>

		<p></p>
	</footer>



	<script>
		window.TInline=+new Date();TRecord.push('page_render_fp');
	</script>
	<!--ignore-->
	<script>
		TRecord.cfg.url='7832-96-8';
	</script>
	<script src="//7.idqqimg.com/edu/assets/js/runtime_67267d7e.js" crossOrigin="anonymous" false></script>
	<script>
		if(!__JS_RETRY__["runtime_67267d7e.js"]){document.write('\x3Cscript type="text/javascript" src="//ke.qq.com/assets/js/runtime_67267d7e.js" retry>\x3C/script>');}
	</script>
	<script src="//7.idqqimg.com/edu/assets/js/polyfill_18f50e4f.js" crossOrigin="anonymous" false></script>
	<script>
		if(!__JS_RETRY__["polyfill_18f50e4f.js"]){document.write('\x3Cscript type="text/javascript" src="//ke.qq.com/assets/js/polyfill_18f50e4f.js" retry>\x3C/script>');}
	</script>
	<script src="//7.idqqimg.com/edu/assets/js/common_css_070ff4ca.js" crossOrigin="anonymous" false></script>
	<script>
		if(!__JS_RETRY__["common_css_070ff4ca.js"]){document.write('\x3Cscript type="text/javascript" src="//ke.qq.com/assets/js/common_css_070ff4ca.js" retry>\x3C/script>');}
	</script>
	<script src="//7.idqqimg.com/edu/assets/js/vendor_fc862180.js" crossOrigin="anonymous" false></script>
	<script>
		if(!__JS_RETRY__["vendor_fc862180.js"]){document.write('\x3Cscript type="text/javascript" src="//ke.qq.com/assets/js/vendor_fc862180.js" retry>\x3C/script>');}
	</script>
	<script src="//7.idqqimg.com/edu/assets/js/4_c06a71bf.js" crossOrigin="anonymous" false></script>
	<script>
		if(!__JS_RETRY__["4_c06a71bf.js"]){document.write('\x3Cscript type="text/javascript" src="//ke.qq.com/assets/js/4_c06a71bf.js" retry>\x3C/script>');}
	</script>
	<script src="//7.idqqimg.com/edu/assets/js/5_be1a094f.js" crossOrigin="anonymous" false></script>
	<script>
		if(!__JS_RETRY__["5_be1a094f.js"]){document.write('\x3Cscript type="text/javascript" src="//ke.qq.com/assets/js/5_be1a094f.js" retry>\x3C/script>');}
	</script>
	<script src="//7.idqqimg.com/edu/assets/js/agencyIndex/index.live_c8a0f27e.js" crossOrigin="anonymous" false>
	</script>
	<script>
		if(!__JS_RETRY__["index.live_c8a0f27e.js"]){document.write('\x3Cscript type="text/javascript" src="//ke.qq.com/assets/js/agencyIndex/index.live_c8a0f27e.js" retry>\x3C/script>');}
	</script>
	<script>
		//首屏DOM操作
(function(){function getRegText(n){return"(^|&|\\?)"+n+"=([^&]*)(&|$)"}function getValue(mainString,n){var m=mainString.match(getRegText(n));return!m?undefined:decodeURIComponent(m[2])}function $(n){return document.getElementById(n)}//被广点通嵌入时，隐藏head头
//http://shang.qq.com/v3/tutorial.html
var searchString=location.search||"";var outer=getValue(searchString,"outer");if(outer=="1"&&/\.ke\.qq\.com$/.test(location.hostname)){$("js_main_nav").style.display="none"}})();
	</script>
	<script>
		TRecord.push('page_js_ready');
	</script>

	<script>
		TRecord.push('inline_script_run_time', T[0] + (new Date - TInline));
	</script>
	<!-- tcss点击流上报 -->
	<script>
		(function () {
        var node = document.createElement('script'),
            script = document.getElementsByTagName('script')[0];
        node.src = window.location.protocol === 'https:' ?
            'https://pingjs.qq.com/tcss.ping.https.js' :
            'http://pingjs.qq.com/tcss.ping.js';
        node.type = 'text/javascript';
        node.onload = node.onerror = node.onreadystatechange = function () {
            /loaded|complete|undefined/.test(node.readyState) && (function () {
                node.onload = node.onerror = node.onreadystatechange = null;
                node.parentNode.removeChild(node);
                node = undefined;
                if (typeof window.pgvMain == 'function') {
                    window.pgvMain();
                }
            }());
        };
        script.parentNode.insertBefore(node, script);
    })();
	</script>

	<!-- 百度统计上报代码 -->
	<script>
		var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?0c196c536f609d373a16d246a117fd44";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
	</script>

	<script id="imweb-webpack-retry-tail"></script>



</body>

</html>`)
socket.end();
    })
})

server.on('listening', () => {
    console.log('服务器启动了');
})
server.listen(3000)