<!DOCTYPE html>
<html lang="en"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"><meta charset="utf-8"><title>Node.js First Example - javaTpoint</title><link rel="SHORTCUT ICON" href="http://www.javatpoint.com/images/logo/icon.png"><link rel="stylesheet" type="text/css" href="main_files/link.css"><meta name="keywords" content="nodejs, tutorial, beginners, professionals, introduction, example, repl terminal, package manager, callback concept, event loop, buffers, streams, file systems, global objects, web modules"><meta name="description" content="Node.js first example for beginners and professionals with examples on first application, repl terminal, package manager, callback concept, event loop, buffers, streams, file systems, global objects, web modules and more."><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><link rel="canonical" href="main_files/nodejs-first-example_004.html"><meta property="og:locale" content="en_US"><meta property="og:type" content="article"><meta name="twitter:title" property="og:title" content="Node.js First Example - javaTpoint"><meta name="twitter:description" property="og:description" content="Node.js first example for beginners and professionals with examples on first application, repl terminal, package manager, callback concept, event loop, buffers, streams, file systems, global objects, web modules and more."><meta property="og:url" content="http://www.javatpoint.com/nodejs-first-example"><meta property="og:site_name" content="www.javatpoint.com"><meta name="twitter:card" content="summary"><meta name="twitter:site" content="@pagejavatpoint"><meta name="twitter:domain" content="www.javatpoint.com"><meta name="twitter:creator" content="@pagejavatpoint"><style type="text/css">.dp-j .annotation { color: #646464; }.dp-j .number { color: #C00000; }</style><style type="text/css">.dp-xml .cdata { color: #ff1493; }.dp-xml .tag, .dp-xml .tag-name { color: #069; font-weight: bold; }.dp-xml .attribute { color: red; }.dp-xml .attribute-value { color: blue; }</style><style type="text/css">.dp-xml .cdata { color: #ff1493; }.dp-xml .tag, .dp-xml .tag-name { color: #069; font-weight: bold; }.dp-xml .attribute { color: red; }.dp-xml .attribute-value { color: blue; }</style><style type="text/css">.dp-xml .cdata { color: #ff1493; }.dp-xml .tag, .dp-xml .tag-name { color: #069; font-weight: bold; }.dp-xml .attribute { color: red; }.dp-xml .attribute-value { color: blue; }</style><style type="text/css">.dp-xml .cdata { color: #ff1493; }.dp-xml .tag, .dp-xml .tag-name { color: #069; font-weight: bold; }.dp-xml .attribute { color: red; }.dp-xml .attribute-value { color: blue; }</style><style type="text/css">.dp-xml .cdata { color: #ff1493; }.dp-xml .tag, .dp-xml .tag-name { color: #069; font-weight: bold; }.dp-xml .attribute { color: red; }.dp-xml .attribute-value { color: blue; }</style><style type="text/css">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;_background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/s816eWC-2sl.gif);cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent;_background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/s816eWC-2sl.gif)}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent;_background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/s816eWC-2sl.gif)}.fb_dialog_loader{background-color:#f6f7f9;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100%}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100%;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100%;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{width:auto;height:auto;min-height:initial;min-width:initial;background:none}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{color:#fff;display:block;padding-top:20px;clear:both;font-size:18px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;bottom:0;left:0;right:0;top:0;width:100%;min-height:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #29487d;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f6f7f9;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-repeat:no-repeat;background-position:50% 50%;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50%;z-index:4}</style></head> <body onload="highlightlink()"> <div id="page" style="margin-top:-8px;background-color:#f5f5f4;"><div id="container"> <div class="header"><!--<p style="font-weight:bold;padding:7px;color:white;background-color:gray;margin:0px"><marquee>JavaTpoint will be down for 2 to 4 hours tonight. Sorry for inconvenience.</marquee></p>-->

<table style="width:100%"><tbody><tr><td><div id="headerlink" style="padding:0px;margin:0px"><span style="margin-right:20px;width:45%px"></span><span style="float:right;margin-right:5px;width:45%"><a href="http://www.javatpoint.com/contact-us" style="text-decoration:none;color:#6666CC">Contact Us</a>  | <a href="http://www.javatpoint.com/asknewquestion.jsp" style="text-decoration:none;color:#6666CC">Ask Question</a> | <a href="http://www.javatpoint.com/login.jsp" style="text-decoration:none;color:#6666CC">login</a> <a target="_blank" href="http://feeds.feedburner.com/javatpointsonoo"><img src="main_files/r.png" alt="RSS Feed"></a>&nbsp;<a target="_blank" href="http://feedburner.google.com/fb/a/mailverify?uri=javatpointsonoo"><img src="main_files/m.png" alt="Subscribe to Get Email Alerts"></a>&nbsp;<a target="_blank" href="https://www.facebook.com/javatpoint"><img src="main_files/f.png" alt="Facebook Page"></a>&nbsp;<a target="_blank" href="https://plus.google.com/u/0/113973042385691981314/posts"><img src="main_files/g.png" alt="Google Page"></a>&nbsp;<a target="_blank" href="https://twitter.com/pagejavatpoint"><img src="main_files/t.png" alt="Twitter Page"></a></span><hr class="upperhr"></div> </td></tr><tr><td>
<div style="float:left;width:230px;"><a href="http://www.javatpoint.com/"><img src="main_files/jtp_logo.png" alt="Javatpoint Logo"></a></div>
<!--<div style="margin:0px;padding:0px;float:left;width:23%;margin-left:10px;margin-bottom:0px"><a href="http://www.javatpoint.com" style="text-decoration:none;"><span style="color:orange;font-size:28px;font-weight:bold;">Java</span><span style="color:#666600;font-size:40px;font-weight:bold;">T</span><span style="color:red;font-size:28px;font-weight:bold;">point</span></a></div>-->

<div style="float:left;width:50%;"><form class="navbar-search" method="get" action="http://www.google.com/search" target="_blank"> <input name="q" class="search-query span2" placeholder="Search on javatpoint..." title="Search on Javatpoint" type="text"><input name="sitesearch" value="www.javatpoint.com" type="hidden"></form><!--<span style="margin-left:100px;color:orange;font-size:20px;font-weight:bold;">Happy </span><span style="color:red;font-size:20px;font-weight:bold;">New </span><span style="color:#666600;font-size:20px;font-weight:bold;">Year</span><span style="color:#666600;font-size:30px;font-weight:bold;"> 2015</span>--></div><div style="width:25%;float:right"><div style="padding:0px;margin:0px;margin-right:10px;margin-top:10px;float:right"><a target="_blank" style="background-color:#6699CC;text-decoration:none;color:white;border-radius:2px;font-weight:bold;padding:6px 10px 6px 10px;" href="http://www.javatpoint.com/subscribe.jsp">Subscribe Us</a></div><div style="padding:0px;margin:0px;margin-right:10px;float:right"><p style="padding:0px;margin:0px;margin-top:5px;color:#983688;font-weight:bold;">91-9990449935</p><p style="padding:0px;margin:0px;color:#983688;font-weight:bold;">&nbsp;0120-4256464</p></div></div></td></tr></tbody></table> </div>
<div class="headermobile">
<div style="margin-top:10px;padding:0px;text-align:left;">
<span style="float:left"><input src="main_files/menuhome64.png" onclick="showmenu()" type="image"></span>
<span style="float:left"><a href="http://www.javatpoint.com/"><img src="main_files/jtp_logo.png" alt="Javatpoint Logo"></a></span>
</div>
<div style="margin:0px;padding:0px;clear:both"><form class="navbar-search-m" method="get" action="http://www.google.com/search" target="_blank"> <input name="q" class="search-query span2-m" placeholder="Search on javatpoint..." title="Search on Javatpoint" type="text"><input name="sitesearch" value="www.javatpoint.com" type="hidden"></form></div></div><div id="link" style="clear:both"> <div class="ddsmoothmenu">
<ul>
<li><a href="http://www.javatpoint.com/">Home</a></li>
<li><a href="http://www.javatpoint.com/c-programming-language-tutorial">C</a></li>
<li><a href="http://www.javatpoint.com/java-tutorial">Java</a></li>
<li><a href="http://www.javatpoint.com/angularjs-tutorial">AngularJS</a></li>
<li><a href="http://www.javatpoint.com/nodejs-tutorial" class="selected">Node.js</a></li>
<li><a href="http://www.javatpoint.com/expressjs-tutorial">Express.js</a></li>
<li><a href="http://www.javatpoint.com/html-tutorial">HTML</a></li>
<li><a href="http://www.javatpoint.com/css-tutorial">CSS</a></li>
<li><a href="http://www.javatpoint.com/javascript-tutorial">JavaScript</a></li>
<li><a href="http://www.javatpoint.com/jquery-tutorial">jQuery</a></li>
<li><a href="http://www.javatpoint.com/bootstrap-tutorial">Bootstrap</a></li>
<li><a href="http://www.javatpoint.com/php-tutorial">PHP</a></li>
<li><a href="http://www.javatpoint.com/sql-tutorial">SQL</a></li>
<li><a href="http://www.javatpoint.com/pl-sql-tutorial">PL/SQL</a></li>
<li><a href="http://www.javatpoint.com/examaccess">Quiz</a></li>
<li><a href="http://www.javatpoint.com/free-java-projects">Projects</a></li>
<li><a href="http://www.javatpoint.com/corejava-interview-questions">Interview Q</a></li>
<li><a href="http://www.javatpoint.com/comment.jsp">Comment</a></li>
<li><a href="http://www.javatpoint.com/forum">Forum</a></li>
<li><a href="http://www.javatpoint.com/training">Training</a></li>

</ul>
<br style="clear: left">
</div></div><div class="mobilemenu" style="clear:both"> </div>

<div id="menu"><div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">Node.js Tutorial</span></h2>
</div>
<div class="leftmenu">
<a href="http://www.javatpoint.com/nodejs-tutorial">Node.js Tutorial</a>
<a href="http://www.javatpoint.com/what-is-nodejs" class="l1">What is Node.js</a>
<a href="http://www.javatpoint.com/nodejs-features">Node.js Features</a>
<a href="http://www.javatpoint.com/install-nodejs">Install Node.js Windows</a>
<a href="http://www.javatpoint.com/install-nodejs-on-linux-ubuntu-centos">Install Node.js Linux</a>
<a href="http://www.javatpoint.com/nodejs-first-example" style="color: black;"><strong>Node.js First Example</strong> <img src="main_files/open-12.png" alt="open link"></a>
<a href="http://www.javatpoint.com/nodejs-console">Node.js Console</a>
<a href="http://www.javatpoint.com/nodejs-repl">Node.js REPL</a>
<a href="http://www.javatpoint.com/nodejs-package-manager">Node.js NPM</a>
<a href="http://www.javatpoint.com/nodejs-command-line-options">Node.js CL Options</a>
<a href="http://www.javatpoint.com/nodejs-global-objects">Node.js Globals</a>
<a href="http://www.javatpoint.com/nodejs-os">Node.js OS</a>
<a href="http://www.javatpoint.com/nodejs-timer">Node.js Timer</a>
<a href="http://www.javatpoint.com/nodejs-errors">Node.js Errors</a>
<a href="http://www.javatpoint.com/nodejs-dns">Node.js DNS</a>
<a href="http://www.javatpoint.com/nodejs-net">Node.js Net</a>
<a href="http://www.javatpoint.com/nodejs-crypto">Node.js Crypto</a>
<a href="http://www.javatpoint.com/nodejs-tls-ssl">Node.js TLS/SSL</a>
<a href="http://www.javatpoint.com/nodejs-debugger">Node.js Debugger</a>
<a href="http://www.javatpoint.com/nodejs-process">Node.js Process</a>
<a href="http://www.javatpoint.com/nodejs-child-process">Node.js Child Process</a>
<a href="http://www.javatpoint.com/nodejs-buffers">Node.js Buffers</a>
<a href="http://www.javatpoint.com/nodejs-streams">Node.js Streams</a>
<a href="http://www.javatpoint.com/nodejs-file-system">Node.js File System</a>
<a href="http://www.javatpoint.com/nodejs-path">Node.js Path</a>
<a href="http://www.javatpoint.com/nodejs-stringdecoder">Node.js StringDecoder</a>
<a href="http://www.javatpoint.com/nodejs-query-string">Node.js Query String</a>
<a href="http://www.javatpoint.com/nodejs-zlib">Node.js ZLIB</a>
<a href="http://www.javatpoint.com/nodejs-assertion-testing">Node.js Assertion</a>
<a href="http://www.javatpoint.com/nodejs-v8">Node.js V8</a>
<a href="http://www.javatpoint.com/nodejs-callbacks">Node.js Callbacks</a>
<a href="http://www.javatpoint.com/nodejs-events">Node.js Events</a>
<a href="http://www.javatpoint.com/nodejs-punycode">Node.js Punycode</a>
<a href="http://www.javatpoint.com/nodejs-tty">Node.js TTY</a>
<a href="http://www.javatpoint.com/nodejs-web-modules">Node.js Web Modules</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">Difference</span></h2>
</div>
<div class="leftmenu">
<a href="http://www.javatpoint.com/nodejs-vs-angularjs">Node.js vs AngularJS</a>
<a href="http://www.javatpoint.com/nodejs-vs-python">Node.js vs Python</a>
<a href="http://www.javatpoint.com/nodejs-vs-php">Node.js vs PHP</a>
<a href="http://www.javatpoint.com/nodejs-vs-java">Node.js vs Java</a>
</div>
<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">Node.js Express Tutorial</span></h2>
</div>
<div class="leftmenu">
<a href="http://www.javatpoint.com/expressjs-tutorial">Express.js Tutorial 10+</a>
</div>

<div class="leftmenu2">
<h2 class="spanh2"><span class="spanh2">Interview Questions</span></h2>
</div>
<div class="leftmenu">
<a href="http://www.javatpoint.com/node-js-interview-questions"><span>Node.js Interview</span></a>
<a href="http://www.javatpoint.com/angularjs-interview-questions"><span>AngularJS Interview</span></a>
<a href="http://www.javatpoint.com/javascript-interview-questions"><span>JavaScript Interview</span></a>
<a href="http://www.javatpoint.com/jquery-interview-questions"><span>jQuery Interview</span></a>
<a href="http://www.javatpoint.com/backbone-js-interview-questions"><span>Backbone.js Interview</span></a>
<a href="http://www.javatpoint.com/ember-js-interview-questions"><span>Ember.js Interview</span></a>
<a href="http://www.javatpoint.com/neo4j-interview-questions"><span>Neo4j Interview</span></a>
</div>


<table id="leftad"><tbody><tr><td><img src="main_files/wh.JPG" alt="space"></td></tr><tr><td>
<script src="main_files/3605.js" async="" type="text/javascript"></script><script src="main_files/ca-pub-4699858549023382.js"></script><script type="text/javascript" async="" src="main_files/ga.js"></script><script id="facebook-jssdk" src="main_files/sdk.js"></script><script async="" src="main_files/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-4699858549023382" data-ad-slot="4476401222" data-adsbygoogle-status="done"><ins id="aswift_0_expand" style="display:inline-table;border:none;height:600px;margin:0;padding:0;position:relative;visibility:visible;width:160px;background-color:transparent"><ins id="aswift_0_anchor" style="display:block;border:none;height:600px;margin:0;padding:0;position:relative;visibility:visible;width:160px;background-color:transparent"><iframe marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_0" name="aswift_0" style="left:0;position:absolute;top:0;" width="160" height="600" frameborder="0"></iframe></ins></ins></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>
</td></tr></tbody></table>

</div><div class="onlycontent">


<script async="" src="main_files/adsbygoogle.js"></script>
<!-- CM_JTP_Leaderbaord -->
<ins class="adsbygoogle cm_jtp_leaderbaord" style="display: inline-block; width: 728px; height: 90px;" data-ad-client="ca-pub-4699858549023382" data-ad-slot="9201901915" data-adsbygoogle-status="done"><ins id="aswift_1_expand" style="display:inline-table;border:none;height:90px;margin:0;padding:0;position:relative;visibility:visible;width:728px;background-color:transparent"><ins id="aswift_1_anchor" style="display:block;border:none;height:90px;margin:0;padding:0;position:relative;visibility:visible;width:728px;background-color:transparent"><iframe marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_1" name="aswift_1" style="left:0;position:absolute;top:0;" width="728" height="90" frameborder="0"></iframe></ins></ins></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>

<div style="margin-left:0px;">
<div id="city">
<table>
<tbody><tr><td>

<div id="bottomnextup">
<a class="next" href="http://www.javatpoint.com/nodejs-console">next →</a>
<a class="next" href="http://www.javatpoint.com/install-nodejs">← prev</a>
</div>

<h1 class="h1">Node.js First Example</h1>
<p>There can be console-based and web-based node.js applications.</p>

<h2 class="h2">Node.js console-based Example</h2>
<p class="filename">File: console_example1.js </p>
<div class="codeblock"><div class="dp-highlighter"><div class="bar"><div class="tools"><a href="#" onclick="dp.sh.Toolbar.Command('ViewSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('PrintSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('About',this);return false;"></a></div></div><ol start="1" class="dp-j"><li class="alt"><span><span>console.log(</span><span class="string">'Hello&nbsp;JavaTpoint'</span><span>);&nbsp;&nbsp;&nbsp;</span></span></li></ol></div><textarea name="code" class="java" style="display: none;">console.log('Hello JavaTpoint'); 
</textarea></div>
<p>Open Node.js command prompt and run the following code:</p>
<div class="codeblock"><div class="dp-highlighter"><div class="bar"><div class="tools"><a href="#" onclick="dp.sh.Toolbar.Command('ViewSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('PrintSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('About',this);return false;"></a></div></div><ol start="1" class="dp-xml"><li class="alt"><span><span>node&nbsp;console_example1.js&nbsp;&nbsp;</span></span></li></ol></div><textarea name="code" class="xml" style="display: none;">node console_example1.js
</textarea></div>
<img src="main_files/nodejs-console-example1.jpg" alt="Node.js console example 1">
<p>Here, console.log() function displays message on console.</p>

<h2 class="h2">Node.js web-based Example</h2>
<p>A node.js web application contains the following three parts:</p>

<ol class="points">
<li><strong>Import required modules:</strong> The "require" directive is used to load a Node.js module.</li>
<li><strong>Create server: </strong>You have to establish a server which will listen to client's request similar to Apache HTTP Server.</li>
<li><strong>Read request and return response:</strong> Server created in
 the second step will read HTTP request made by client which can be a 
browser or console and return the response.</li>

</ol>

<p><strong>How to create node.js web applications</strong></p>
<p>Follow these steps:</p>

<ol class="points">
<li><strong>Import required module: </strong> The first step is to use 
?require? directive to load http module and store returned HTTP instance
 into http variable. For example:</li>
<div class="codeblock"><div class="dp-highlighter"><div class="bar"><div class="tools"><a href="#" onclick="dp.sh.Toolbar.Command('ViewSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('PrintSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('About',this);return false;"></a></div></div><ol start="1" class="dp-xml"><li class="alt"><span><span>var&nbsp;</span><span class="attribute">http</span><span>&nbsp;=&nbsp;</span><span class="attribute-value">require</span><span>("http");&nbsp;&nbsp;</span></span></li></ol></div><textarea name="code" class="xml" style="display: none;">var http = require("http");
</textarea></div>
<li><strong>Create server: </strong> In the second step, you have to use
 created http instance and call http.createServer() method to create 
server instance and then  bind it at port 8081 using listen method 
associated with server instance. Pass it a function with request and 
response parameters and write the sample implementation to return "Hello
 World". For example:</li>
<div class="codeblock"><div class="dp-highlighter"><div class="bar"><div class="tools"><a href="#" onclick="dp.sh.Toolbar.Command('ViewSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('PrintSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('About',this);return false;"></a></div></div><ol start="1" class="dp-xml"><li class="alt"><span><span>http.createServer(function&nbsp;(request,&nbsp;response)&nbsp;{&nbsp;&nbsp;</span></span></li><li class=""><span>&nbsp;&nbsp;&nbsp;//&nbsp;Send&nbsp;the&nbsp;HTTP&nbsp;header&nbsp;&nbsp;&nbsp;</span></li><li class="alt"><span>&nbsp;&nbsp;&nbsp;//&nbsp;HTTP&nbsp;Status:&nbsp;200&nbsp;:&nbsp;OK&nbsp;&nbsp;</span></li><li class=""><span>&nbsp;&nbsp;&nbsp;//&nbsp;Content&nbsp;Type:&nbsp;text/plain&nbsp;&nbsp;</span></li><li class="alt"><span>&nbsp;&nbsp;&nbsp;response.writeHead(200,&nbsp;{'Content-Type':&nbsp;'text/plain'});&nbsp;&nbsp;</span></li><li class=""><span>&nbsp;&nbsp;&nbsp;//&nbsp;Send&nbsp;the&nbsp;response&nbsp;body&nbsp;as&nbsp;"Hello&nbsp;World"&nbsp;&nbsp;</span></li><li class="alt"><span>&nbsp;&nbsp;&nbsp;response.end('Hello&nbsp;World\n');&nbsp;&nbsp;</span></li><li class=""><span>}).listen(8081);&nbsp;&nbsp;</span></li><li class="alt"><span>//&nbsp;Console&nbsp;will&nbsp;print&nbsp;the&nbsp;message&nbsp;&nbsp;</span></li><li class=""><span>console.log('Server&nbsp;running&nbsp;at&nbsp;http://127.0.0.1:8081/');&nbsp;&nbsp;</span></li></ol></div><textarea name="code" class="xml" style="display: none;">http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

</textarea></div>
<li><strong>Combine step1 and step2 together</strong> in a file named "main.js". </li>
<p class="filename">File: main.js</p>
<div class="codeblock"><div class="dp-highlighter"><div class="bar"><div class="tools"><a href="#" onclick="dp.sh.Toolbar.Command('ViewSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('PrintSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('About',this);return false;"></a></div></div><ol start="1" class="dp-xml"><li class="alt"><span><span>var&nbsp;</span><span class="attribute">http</span><span>&nbsp;=&nbsp;</span><span class="attribute-value">require</span><span>("http");&nbsp;&nbsp;</span></span></li><li class=""><span>http.createServer(function&nbsp;(request,&nbsp;response)&nbsp;{&nbsp;&nbsp;</span></li><li class="alt"><span>&nbsp;//&nbsp;Send&nbsp;the&nbsp;HTTP&nbsp;header&nbsp;&nbsp;&nbsp;</span></li><li class=""><span>&nbsp;&nbsp;&nbsp;//&nbsp;HTTP&nbsp;Status:&nbsp;200&nbsp;:&nbsp;OK&nbsp;&nbsp;</span></li><li class="alt"><span>&nbsp;&nbsp;&nbsp;//&nbsp;Content&nbsp;Type:&nbsp;text/plain&nbsp;&nbsp;</span></li><li class=""><span>&nbsp;&nbsp;&nbsp;response.writeHead(200,&nbsp;{'Content-Type':&nbsp;'text/plain'});&nbsp;&nbsp;</span></li><li class="alt"><span>&nbsp;&nbsp;&nbsp;//&nbsp;Send&nbsp;the&nbsp;response&nbsp;body&nbsp;as&nbsp;"Hello&nbsp;World"&nbsp;&nbsp;</span></li><li class=""><span>&nbsp;&nbsp;&nbsp;response.end('Hello&nbsp;World\n');&nbsp;&nbsp;</span></li><li class="alt"><span>}).listen(8081);&nbsp;&nbsp;</span></li><li class=""><span>//&nbsp;Console&nbsp;will&nbsp;print&nbsp;the&nbsp;message&nbsp;&nbsp;</span></li><li class="alt"><span>console.log('Server&nbsp;running&nbsp;at&nbsp;http://127.0.0.1:8081/');&nbsp;&nbsp;</span></li></ol></div><textarea name="code" class="xml" style="display: none;">var http = require("http");
http.createServer(function (request, response) {
 // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

</textarea></div>
</ol>
<p><strong>How to start your server:</strong></p>
<p>Go to start menu and click on the Node.js command prompt. </p>
<img src="main_files/nodejs-first-example1.png" alt="Node.js first example 1">

<p>Now command prompt is open:</p>
<img src="main_files/nodejs-first-example2.png" alt="Node.js first example 2">

<p><strong>Set path: </strong>Here we have save "main.js" file on the desktop.</p>

<p>So type <strong>cd desktop</strong> on the command prompt. After that execute the main.js to start the server as follows:</p>
<div class="codeblock"><div class="dp-highlighter"><div class="bar"><div class="tools"><a href="#" onclick="dp.sh.Toolbar.Command('ViewSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('PrintSource',this);return false;"></a><a href="#" onclick="dp.sh.Toolbar.Command('About',this);return false;"></a></div></div><ol start="1" class="dp-xml"><li class="alt"><span><span>node&nbsp;main.js&nbsp;&nbsp;</span></span></li></ol></div><textarea name="code" class="xml" style="display: none;">node main.js
</textarea></div>
<img src="main_files/nodejs-first-example3.png" alt="Node.js first example 3">

<p>Now server is started. </p>
<p><strong>Make a request to Node.js server:</strong></p>
<p>Open http://127.0.0.1:8081/ in any browser. You will see the following result.</p>
<img src="main_files/nodejs-first-example5.png" alt="Node.js first example 5">

<p>Now, if you make any changes in the "main.js" file, you need to again run the "node main.js" command.</p>


<div class="nexttopicdiv">
<span class="nexttopictext">Next Topic</span><span class="nexttopiclink"><a href="http://www.javatpoint.com/nodejs-console">Node.js Console</a></span>
</div>
<!-- link -->
<br><br>

<div id="bottomnext">
<a style="float:left" class="next" href="http://www.javatpoint.com/install-nodejs">← prev</a>
<a style="float:right" class="next" href="http://www.javatpoint.com/nodejs-console">next →</a>
</div>

<br><br>


</td></tr></tbody></table>
</div>


<!-- latest tutorials start -->
<fieldset class="gra1footer">
<h2 class="h2">Latest 4 Tutorials on JavaTpoint</h2>
<div class="firsthomecontent">
<a href="http://www.javatpoint.com/java-date">
<div class="homecontent">
<img src="main_files/java-date-time.png" alt="Java Date and Time"><span class="homespan">Java Date</span>
</div>
</a>
<a href="http://www.javatpoint.com/collections-in-java">
<div class="homecontent">
<img src="main_files/java-collections-tutorial.png" alt="Java Collections tutorial"><span class="homespan">Collections</span>
</div>
</a>
<a href="http://www.javatpoint.com/ms-word-tutorial">
<div class="homecontent">
<img src="main_files/word-home.png" alt="Word tutorial"><span class="homespan">MS Word</span>
</div>
</a>
<a href="http://www.javatpoint.com/scala-tutorial">
<div class="homecontent">
<img src="main_files/scala-home.png" alt="Scala tutorial"><span class="homespan">Scala</span>
</div>
</a>

</div>
</fieldset>
<!-- latest tutorial end -->
<br>
<!-- social sharing buttons -->
<!--facebook-->
<span id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div><iframe name="fb_xdm_frame_http" allowtransparency="true" allowfullscreen="true" scrolling="no" id="fb_xdm_frame_http" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" style="border: medium none;" src="http://staticxx.facebook.com/connect/xd_arbiter/r/0eWevUAMuoH.js?version=42#channel=f5cbcfaeaed684&amp;origin=http%3A%2F%2Fwww.javatpoint.com" frameborder="0"></iframe><iframe name="fb_xdm_frame_https" allowtransparency="true" allowfullscreen="true" scrolling="no" id="fb_xdm_frame_https" aria-hidden="true" title="Facebook Cross Domain Communication Frame" tabindex="-1" style="border: medium none;" src="main_files/0eWevUAMuoH_002.html" frameborder="0"></iframe></div></div><div style="position: absolute; top: -10000px; height: 0px; width: 0px;"><div></div></div></span>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=151763741599302";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<span class="fb-share-button fb_iframe_widget" data-href="http://www.javatpoint.com/nodejs-first-example" data-layout="button_count" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=151763741599302&amp;container_width=0&amp;href=http%3A%2F%2Fwww.javatpoint.com%2Fnodejs-first-example&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey"><span style="vertical-align: bottom; width: 86px; height: 20px;"><iframe name="f3ea2213f1e4a5e" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:share_button Facebook Social Plugin" style="border: medium none; visibility: visible; width: 86px; height: 20px;" src="main_files/share_button.html" class="" width="1000px" height="1000px" frameborder="0"></iframe></span></span>

</div>


<br><div class="mobilemenu" style="clear:both">
<script async="" src="main_files/adsbygoogle.js"></script><!-- responsivemobilefooter --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4699858549023382" data-ad-slot="8222866318" data-ad-format="auto" data-adsbygoogle-status="done"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div></div>
<div id="right" style="width:15%;float:left;margin-left:10px;margin-top:10px;">
<script async="" src="main_files/adsbygoogle.js"></script>
<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-4699858549023382" data-ad-slot="3155368314" data-adsbygoogle-status="done"><ins id="aswift_2_expand" style="display:inline-table;border:none;height:600px;margin:0;padding:0;position:relative;visibility:visible;width:160px;background-color:transparent"><ins id="aswift_2_anchor" style="display:block;border:none;height:600px;margin:0;padding:0;position:relative;visibility:visible;width:160px;background-color:transparent"><iframe marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_2" name="aswift_2" style="left:0;position:absolute;top:0;" width="160" height="600" frameborder="0"></iframe></ins></ins></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script><br><br><br>




</div>
<div class="right1024" style="float:left;margin-left:10px;margin-top:120px;"><script async="" src="main_files/adsbygoogle.js"></script><!-- right1024only --><ins class="adsbygoogle" style="display:inline-block;width:120px;height:600px" data-ad-client="ca-pub-4699858549023382" data-ad-slot="2180118716" data-adsbygoogle-status="done"><ins id="aswift_3_expand" style="display:inline-table;border:none;height:600px;margin:0;padding:0;position:relative;visibility:visible;width:120px;background-color:transparent"><ins id="aswift_3_anchor" style="display:block;border:none;height:600px;margin:0;padding:0;position:relative;visibility:visible;width:120px;background-color:transparent"><iframe marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" onload="var i=this.id,s=window.google_iframe_oncopy,H=s&amp;&amp;s.handlers,h=H&amp;&amp;H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&amp;&amp;d&amp;&amp;(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}" id="aswift_3" name="aswift_3" style="left:0;position:absolute;top:0;" width="120" height="600" frameborder="0"></iframe></ins></ins></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
<br><br>
</div>

<div id="footer" style="clear:both;width:100%">

<script type="text/javascript"> var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-24880427-1']); _gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();</script><hr>

<div style="padding:0px;margin:0px;text-align:center"><sup style="font:16px arial;">Like/Subscribe us for latest updates or newsletter </sup><a target="_blank" href="http://feeds.feedburner.com/javatpointsonoo"><img src="main_files/rss1.png" alt="RSS Feed"></a><a target="_blank" href="http://feedburner.google.com/fb/a/mailverify?uri=javatpointsonoo"><img src="main_files/mail1.png" alt="Subscribe to Get Email Alerts"></a><a target="_blank" href="https://www.facebook.com/javatpoint"><img src="main_files/facebook1.jpg" alt="Facebook Page"></a><a target="_blank" rel="author" href="https://plus.google.com/u/0/113973042385691981314/posts"><img src="main_files/google1.png" alt="Google Page"></a><a target="_blank" href="https://twitter.com/pagejavatpoint"><img src="main_files/twitter1.png" alt="Twitter Page"></a><a target="_blank" href="http://javatpoint.blogspot.com/"><img src="main_files/blog.png" alt="Blog Page"></a><a href="#" style="font:bold 18px arial;text-decoration:none;"><sup>↑Top</sup></a></div><div style="margin:auto 0px;line-height:20px;padding:0px 40px;font-size:12px;height:390px;background:#6699CC;color: white; font-family:serif; border-bottom: solid 1px #A3AE7E;"> <div id="innerfooter"> <div><span style="text-decoration:none;font-size:larger;font-family:serif;color:white;font-weight:bolder;">Tutorials</span> <hr><ul class="footer-list"> <li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/java-tutorial">» Core Java Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/servlet-tutorial">» Servlet Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/jsp-tutorial">» JSP Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/java-mail-api-tutorial">» Mail API Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/design-patterns-in-java">» Design Pattern Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/struts-2-tutorial">» Struts Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/spring-tutorial">» Spring Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/hibernate-tutorial">» Hibernate Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/android-tutorial">» Android Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/javascript-tutorial">» JavaScript Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/sql-tutorial">» SQL Tutorial</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/c-programming-language-tutorial">» C Tutorial</a></li> <li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/ajax-tutorial">» AJAX Tutorial</a></li> <li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/junit-tutorial">» JUnit Tutorial</a></li> <li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/jaxb-tutorial">» JAXB Tutorial</a></li> <li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/maven-tutorial">» Maven Tutorial</a></li></ul> </div> <div><span style="text-decoration:none;font-size:larger;font-family:serif;color:white;font-weight:bolder;">Interview Questions</span> <hr><ul class="footer-list"> <li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/corejava-interview-questions">» Java Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/servletinterview">» Servlet Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/jspinterview">» JSP Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/hibernate-interview-questions">» Hibernate Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/spring-interview-questions">» Spring Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/android-interview-questions">» Android Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/sql-interview-questions">» SQL Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/pl-sql-interview-questions">» PL/SQL Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/oracle-interview-questions">» Oracle Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/mysql-interview-questions">» MySQL Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/sql-server-interview-questions">» SQL Server Interview</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/mongodb-interview-questions">» MongoDB Interview</a></li> <li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/cloud-computing-interview-questions">» Cloud Interview</a></li> </ul> </div><div><a style="font-weight:bolder;text-decoration: none;text-align:center;font-size:larger;font-family:serif;color:white;" target="_blank" href="http://www.javatpoint.com/examaccess">Quizzes</a><hr><ul class="footer-list"><li><a target="_blank" href="http://www.javatpoint.com/core-java-quiz" style="text-decoration: none;font-family:serif;color:white;">» Core Java quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/servlet-quiz" style="text-decoration: none;font-family:serif;color:white;">» Servlet quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/jsp-quiz" style="text-decoration: none;font-family:serif;color:white;">» JSP quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/struts-quiz" style="text-decoration: none;font-family:serif;color:white;">» Struts2 quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/android-quiz" style="text-decoration: none;font-family:serif;color:white;">» Android quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/scjp-quiz" style="text-decoration: none;font-family:serif;color:white;">» OCJP quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/scwcd-quiz" style="text-decoration: none;font-family:serif;color:white;">» OCWCD quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/hibernate-quiz" style="text-decoration: none;font-family:serif;color:white;">» Hibernate quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/spring-quiz" style="text-decoration: none;font-family:serif;color:white;">» Spring quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/c-quiz" style="text-decoration: none;font-family:serif;color:white;">» C quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/cloud-computing-quiz" style="text-decoration: none;font-family:serif;color:white;">» Cloud Computing quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/javascript-quiz" style="text-decoration: none;font-family:serif;color:white;">» JavaScript quiz</a></li><li><a target="_blank" href="http://www.javatpoint.com/sql-quiz" style="text-decoration: none;font-family:serif;color:white;">» SQL quiz</a></li></ul></div><div><a style="font-weight:bolder;text-decoration: none;font-size:larger;font-family:serif;color:white;text-align:center;" target="_blank" href="http://www.javatpoint.com/forum">Forum</a><hr><ul class="footer-list"><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/forum.jsp?category=corejava">» Core Java Ques.</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/forum.jsp?category=servlet">» Servlet Ques.</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/forum.jsp?category=jsp">» JSP Ques.</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/forum.jsp?category=struts">» Struts Ques.</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/forum.jsp?category=spring">» Spring Ques.</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/forum.jsp?category=hibernate">» Hibernate Ques.</a></li><li><a style="text-decoration: none;font-family:serif;color:white;" href="http://www.javatpoint.com/forum.jsp?category=android">» Android Ques.</a></li></ul><hr><a style="font-weight:bolder;text-decoration: none;text-align:center;font-size:larger;font-family:serif;color:white;" href="http://www.javatpoint.com/free-java-projects">Projects</a><hr><a style="font-weight:bolder;text-decoration: none;font-size:larger;font-family:serif;text-align:center;color:white;" href="http://www.sssit.org/" rel="nofollow">SSS IT PVT LTD</a><hr><ul class="footer-list"><li><a rel="nofollow" href="http://www.sssit.org/development" style="text-decoration: none;font-family:serif;color:white;">» Development</a></li><li><a href="http://www.javatpoint.com/training" style="text-decoration: none;font-family:serif;color:white;">» Training</a></li><li><a rel="nofollow" href="http://www.sssit.org/seo" style="text-decoration: none;font-family:serif;color:white;">» SEO</a></li><li><a rel="nofollow" href="http://www.sssit.org/consultancy" style="text-decoration: none;font-family:serif;color:white;">» Consultancy</a></li></ul></div><div style="border-right:2px solid white;"><span style="font-weight:bolder;text-decoration: none;font-size:larger;font-family:serif;color:white;float:right;padding-right:16px;">CONTACT US</span><br><hr><p style="text-align:center;border-bottom:1px solid white;padding-bottom:30px;">Tel. : 0120-4256464<br>Mob. : +91 9990449935<br>Email : enquiry@sssit.org<br>Address: 2nd Floor, G-13,<br> (Near 16 Metro Station),<br>Sec - 3, Noida, <br>201301, UP, India<br><a href="http://www.javatpoint.com/contact-us" style="text-decoration: none;font-family:serif;color:white;">» Contact Us</a><br><a href="http://www.javatpoint.com/privacy-policy" style="text-decoration: none;font-family:serif;color:white;">» Privacy Policy</a></p><p style="text-align:center;border-bottom:1px solid white;padding-bottom:30px;padding-left:none;"><br>© 2011-2017 Javatpoint.<br> All Rights Reserved.<br><a href="http://www.dmca.com/Protection/Status.aspx?ID=e8b533d5-7356-47f5-820b-72c890f03a4e" rel="nofollow" title="DMCA"> <img src="main_files/dmca_protected_sml_120c.png" alt="DMCA.com"></a></p></div></div></div>

</div></div></div><script src="main_files/shcoreandbrush.js"></script><script type="text/javascript"> dp.SyntaxHighlighter.HighlightAll('code'); </script>
<script type="text/javascript">
setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0027/3605.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
</script>
  </body></html>