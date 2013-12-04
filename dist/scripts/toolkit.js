"undefined"==typeof toolkit&&(toolkit={}),toolkit.skycons=function(){function t(){var t,e=document,n=(e.documentElement,e.body),i=!1,o=e.createElement("p"),a=e.createElement("style"),s='#testbefore:before { content: "before"; }';return a.type="text/css",o.id="testbefore",a.styleSheet?a.styleSheet.cssText=s:a.appendChild(e.createTextNode(s)),n.appendChild(a),n.appendChild(o),t=e.getElementById("testbefore").offsetHeight,t>=1&&(i=!0),n.removeChild(a),n.removeChild(o),i}function e(t,e){var n=t.innerHTML,o=i[e];t.innerHTML='<span style="font-family: \'skycons\'" class="ie7-skycon">'+o+"</span>"+n}function n(){if(!t()){var n,i,o,a=document.getElementsByTagName("*");for(n=0;o=a[n],o;n+=1)i=o.className,i=i.match(/skycon-[^\s'"]+/),i&&e(o,i[0])}}var i={"skycon-sky":"&#xf100;","skycon-chevron-down":"&#xf101;","skycon-info":"&#xf102;","skycon-arrow-right":"&#xf103;","skycon-plus-circle":"&#xf104;","skycon-sky-plus":"&#xf105;","skycon-tv":"&#xf106;","skycon-twitter-reply":"&#xf107;","skycon-arrow-down-left":"&#xf108;","skycon-chevron-up":"&#xf109;","skycon-chevron":"&#xf10a;","skycon-facebook":"&#xf10b;","skycon-tick":"&#xf10c;","skycon-remote-record":"&#xf10d;","skycon-warning":"&#xf10e;","skycon-carousel-play":"&#xf10f;","skycon-arrow-left":"&#xf110;","skycon-chevron-left":"&#xf111;","skycon-on-demand":"&#xf112;","skycon-user-profile":"&#xf113;","skycon-search":"&#xf114;","skycon-twitter-retweet":"&#xf115;","skycon-at":"&#xf116;","skycon-volume":"&#xf117;","skycon-twitter-favourite":"&#xf118;","skycon-expand":"&#xf119;","skycon-carousel-pause":"&#xf11a;","skycon-mouse":"&#xf11b;","skycon-share":"&#xf11c;","skycon-never-miss":"&#xf11d;","skycon-mail":"&#xf11e;","skycon-sky-go":"&#xf11f;","skycon-twitter-follow":"&#xf120;","skycon-minify":"&#xf121;","skycon-twitter":"&#xf122;","skycon-close":"&#xf123;","skycon-menu":"&#xf124;","skycon-phone":"&#xf125;","skycon-cloud":"&#xf126;","skycon-video-play":"&#xf127;","skycon-google-plus":"&#xf128;"};return{add:e,init:n}}(),"function"==typeof window.define&&window.define.amd&&define("utils/skycons",[],function(){return toolkit.skycons}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.hashmanager=function(){function t(){$(window).on("hashchange",e);var t=document.documentMode,n="onhashchange"in window&&(void 0===t||t>7);n||(r.hash=document.location.hash,setInterval(function(){document.location.hash!==r.hash&&$(window).trigger("hashchange")},200)),r.windowLoaded=!0}function e(t){var e,n;t=s("string"==typeof t?t:location.hash),t?(e=r.globalHashList[t],n="callback",r.lastExecutor=t):r.lastExecutor&&(e=r.globalHashList[r.lastExecutor],n="undo"),e&&"function"==typeof e[n]&&e[n](t)}function n(){var t=window.location;"pushState"in history?(location.hash="!",history.pushState("",document.title,t.pathname+t.search)):location.hash="!"}function i(t){location.hash="!"+t}function o(t,n,i){var o=r.globalHashList;$(t).each(function(t,a){if(a=s(a),o[a]){var d="hashManager: hash ("+a+") already exists";throw new Error(d)}o[a]={callback:n,undo:i},r.windowLoaded&&a===s(location.hash)&&e(a)})}function a(){r.globalHashList=[]}function s(t){return t.replace(/[#!]/g,"")}var r={globalHashList:{},hasLoaded:!1,windowLoaded:!1,lastExecutor:null,hash:null};return t(),{register:o,change:i,remove:n,onHashChange:e,resetHash:a,cleanHash:s}}(),"function"==typeof window.define&&window.define.amd&&define("utils/hashmanager",[],function(){return toolkit.hashmanager}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.popup=function(){function t(t){var e=t.url,n=t.width||400,i=t.height||n,o=t.top||screen.height/2-i/2,a=t.left||screen.width/2-n/2,s=t.title||"Sky";return window.open(e,s,"top="+o+",left="+a+",width="+n+",height="+i)}function e(){$("body").on("click","[data-popup]",function(e){e.preventDefault();var n=$.extend($(this).data("popup"),{url:$(this).attr("href")});t(n)})}return{init:e,open:t}}(),"function"==typeof window.define&&window.define.amd&&define("utils/popup",[],function(){return toolkit.popup}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.toggle=function(){function t(t,e){return h&&t.css({height:e,overflow:"hidden",transition:"height 0.5s ease-in-out"}),t.toggleClass("toggle-hidden",0===e),t}function e(t){return void 0===t.data("openHeight")||d||c?($("body").append($('<div id="toggle-tmp-height" class="skycom-container"></div>').append(t.clone().attr("style","").removeClass("toggle-hidden"))),t.data("openHeight",$("#toggle-tmp-height > div").height()),$("#toggle-tmp-height").remove(),t.data("openHeight")):t.data("openHeight")}function n(t){var e=t.find("span").length>0?t.find("span"):t,n=e.text();e.text(t.attr("data-toggle-text")),t.attr("data-toggle-text",n).attr("data-tracking-label",n)}function i(t){t.find("i").toggleClass("rotate-180")}function o(n){var i=e(n);t(n,i)}function a(e){t(e,0)}function s(t,e){"shown"==t?l[e.selector]={state:t,$elementToToggle:e}:delete l[e.selector]}function r(t){var e=t.$elClicked,r=t.$container||$(e.attr("data-toggle")),d=t.action,l=e&&e.attr("data-toggle-state");c=void 0!==t.contentChanged?t.contentChanged:!1,"shown"===l||"hide"==d?(a(r),l="hidden"):(o(r),l="shown"),s(l,r),e||(e=$('[data-toggle="#'+r.attr("id")+'"]')),e&&l!==e.attr("data-toggle-state")&&(n(e,l),i(e),e.attr("data-toggle-state",l))}var d=!1,c=!1,l={},h=function(){var t=document.body||document.documentElement;return"string"==typeof t.style.transition}();return $(window).on("skycom.resizeend",function(){d=!0;var n,i;for(i in l)if(n=l[i],"shown"===n.state){var o=e(n.$elementToToggle);t(n.$elementToToggle,o)}d=!1}),r}(),"function"==typeof window.define&&window.define.amd&&define("utils/toggle",[],function(){return toolkit.toggle}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.diff=function(){function t(t){var n=t.oldRoute,i=t.newRoute;a(),$("a[data-diff]").each(function(){e(n,i,$(this).attr("data-diff"))})}function e(t,e,n){var o,a,s=n.split("/")[n.split("/").length-1],r=e+"/"+n+".html",d=t+"/"+n+".html";o=$.ajax({crossDomain:!0,url:r,cache:!1}),a=$.ajax({crossDomain:!0,url:d,cache:!1}),$.when(o,a).done(function(t,e){var n=$('<div class="togglee" data-toggle="'+s+'"><table id="'+s+'-table"></table></div>');n.append($('<textarea id="'+s+'" class="hidden latest"></textarea>').val(t)).append($('<textarea id="old-'+s+'" class=hidden></textarea>').val(e)),$("[data-diff-container]").append('<h3 class="has-toggle wiki-h3 smaller" id="'+s+'-header"><span class="toggler" for="'+s+'"></span>'+s+"</h3>").append(n),i(s,e[0].split("\n"),t[0].split("\n"))})}function n(t,e,i,a,s,r){if(s>0&&r>0&&i[r-1]===a[s-1])n(t,e,i,a,s-1,r-1),o(t,s,r," ",i[r-1]);else if(s>0&&(0===r||e[r][s-1]>=e[r-1][s]))n(t,e,i,a,s-1,r),o(t,s,"","+",a[s-1]);else{if(!(r>0&&(0===s||e[r][s-1]<e[r-1][s])))return;n(t,e,i,a,s,r-1),o(t,"",r,"-",i[r-1],"")}}function i(t,e,i){var o,a,s=new Array(e.length+1);for(a=0;a<s.length;a++)for(s[a]=new Array(i.length+1),o=0;o<s[a].length;o++)s[a][o]=0;for(a=1;a<s.length;a++)for(o=1;o<s[a].length;o++)s[a][o]=e[a-1]===i[o-1]?1+s[a-1][o-1]:Math.max(s[a-1][o],s[a][o-1]);try{n(t,s,e,i,o-1,a-1)}catch(r){alert(r)}}function o(t,e,n,i,o){var a=document.getElementById(t+"-table"),s=document.getElementById(t+"-header"),r=document.createElement("tr"),d=document.createElement("td"),c=document.createElement("td"),l=document.createElement("td"),h=document.createTextNode(n),u=document.createTextNode(e),f=document.createTextNode(i+" "+o);"+"===i?(r.className="add",$(s).addClass("add")):"-"===i&&(r.className="del",$(s).addClass("del")),d.className="codekolom",c.className="codekolom",l.className="bredecode",d.appendChild(h),c.appendChild(u),l.appendChild(f),r.appendChild(d),r.appendChild(c),r.appendChild(l),a.appendChild(r)}function a(){$(".sky-form .error").text(""),$(".togglee").remove(),$(".has-toggle").remove()}return t}(),"function"==typeof window.define&&window.define.amd&&define("utils/diff",[],function(){return toolkit.diff}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.inPageNav=function(t){function e(t){this.$tabContainer=t,this.$tabs=t.find("li[role=tab]"),this.$tabTargets=t.find("div[role=tabpanel]"),this.$showMore=t.find(".dropdown-tab-select > a"),this.$moreTabsContainer=t.find(".dropdown-tab-select"),this.$moreTabsLink=t.find(".more-tabs"),this.numberOfTabsToShow=0,this.saveTabOrder(),this.bindEvents(),this.initTabs()}function n(t){var e=[];t.find("li").each(function(){e.push($(this).attr("data-position"))}),e.sort(),$.each(e,function(){t.find('li[data-position="'+this+'"]').appendTo(t)})}e.prototype={bindEvents:function(){var e=this;t.register(this.getHashList(),this.changeTab.bind(e)),this.$tabs.on("click",function(){e.changeTab($(this).find("a").attr("href"))}),this.$showMore.on("click",this.toggleShowMore.bind(e)),$("body").on("click",this.hideMore.bind(e)),$(window).bind("skycom.resizeend",this.initTabs.bind(e))},getHashList:function(){var t=[];return this.$tabs.each(function(){t.push($(this).attr("aria-controls"))}),t},saveTabOrder:function(){this.$tabs.each(function(t){$(this).attr("data-position",t)})},initTabs:function(){this.moveTabsToList(),this.moveTabsToDropdown()},changeTab:function(t){t=t.replace("#!","");var e=$("#"+t+"-tab"),n=$("#"+t);this.$tabTargets.add(this.$tabs).removeClass("selected"),e.add(n).addClass("selected"),this.initTabs()},hideMore:function(t){$(t.target).closest(this.$showMore).length||this.toggleShowMore("hide")},toggleShowMore:function(t){var e=this.$moreTabsLink.hasClass("dropdown-tab-selected")||"hide"===t?"remove":"add";this.$showMore.add(this.$moreTabsLink)[e+"Class"]("dropdown-tab-selected")},getNumberOfTabsToShow:function(){var t=this.$tabContainer.outerWidth(!0)-this.$moreTabsContainer.show().outerWidth(!0)-this.$tabs.filter(".selected").outerWidth(!0),e=0,n=0;return this.$tabs.not(".selected").attr("style","float:left").each(function(){e+=$(this).outerWidth(!0),e>t||n++}),this.$tabs.add(this.$moreTabsContainer).removeAttr("style"),n},moveTabsToList:function(){var t=this;this.$tabs.each(function(){$(this).appendTo(t.$tabContainer.find(".tabs"))}),n(this.$tabContainer.find(".tabs")),this.numberOfTabsToShow=this.getNumberOfTabsToShow()},moveTabsToDropdown:function(){var t=this;this.$tabs.not(".selected").each(function(e){e<t.numberOfTabsToShow||($(this).appendTo(t.$moreTabsLink),t.$moreTabsContainer.show())}),n(this.$moreTabsLink)}},$.fn.inPageNav=function(t){return this.each(function(){new e($(this),t)})}}(toolkit.hashmanager),"function"==typeof window.define&&window.define.amd&&define("modules/inPageNav",["utils/hashmanager"],function(){return toolkit.inPageNav}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.accordion=function(t){function e(t){this.$container=t,this.$headings=t.find(".accordion-heading"),this.bindEvents()}return e.prototype={bindEvents:function(){this.$headings.on("click",this.toggleContent.bind(this))},toggleContent:function(e){e.preventDefault();var n=t(e.currentTarget);toolkit.toggle({$elClicked:n})}},t.fn.accordion=function(){return this.each(function(){new e(t(this))})},e}(jQuery,toolkit.toggle),"function"==typeof window.define&&window.define.amd&&define("modules/accordion",["utils/toggle"],function(){return toolkit.accordion}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.datePicker=function(){function t(t,e){return[null,31,n(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}function e(t,e){var n=new Date(e,t-1,1).getDay();return 0===n?7:n-1}function n(t){return 0===t%4&&0!==t%100||0===t%400}function i(t){return t.toString().length<2?"0"+t:t}function o(t){this.calendarDate=$.extend(s),this.$container=t,this.$day=t.find(".day"),this.$month=t.find(".month"),this.$year=t.find(".year"),this.addCalendarHTML(),this.bindEvents()}var a=["","January","February","March","April","May","June","July","August","September","October","November","December"],s={day:(new Date).getDate(),month:(new Date).getMonth()+1,year:(new Date).getFullYear()};o.prototype={bindEvents:function(){var t=this;t.$calendar.on("click",".date",t.selectDate.bind(t)).on("click",".prev",t.displayPreviousMonth.bind(t)).on("click",".next",t.displayNextMonth.bind(t)),t.$container.on("keyup","input",t.updateCalendarView.bind(t)).on("focus","input",t.show.bind(t)).on("keydown","input",function(e){9==e.keyCode&&t.hide()}),$(document).on("keydown",function(e){27==e.keyCode&&t.hide()}).on("click",function(e){"date-picker"==e.target.className||t.$container.find(e.target).length||t.hide()})},show:function(){this.$calendar.removeClass("hidden")},hide:function(){this.$calendar.addClass("hidden")},addCalendarHTML:function(){var t=$('<div class="calendar hidden" aria-hidden="true"></div>'),e=$('<div class="header"></div>'),n=$('<span class="prev"><i class="skycon-arrow-left"></i></span>'),i=$('<span class="next"><i class="skycon-arrow-right"></i></span>'),o=$("<span data-date></span>"),a=$('<div class="days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>'),s=$('<div class="day-container"></div>');e.append(n).append(o).append(i),t.append(e).append(a).append(s),this.$container.append(t),this.$calendar=t,this.$dateDescription=o,this.$dayContainer=s,this.renderCalendar()},renderCalendar:function(){var n=this;n.$dateDescription.text(a[n.calendarDate.month]+" "+n.calendarDate.year),n.fillDays(t(n.calendarDate.month,n.calendarDate.year),e(n.calendarDate.month,n.calendarDate.year))},fillDays:function(t,e){var n=1,i=1,o=this,a=o.calendarDate,r=[],d=[],c=!1,l=!1,h=!1,u=a.month<s.month&&a.year<=s.year||a.year<s.year,f=a.month==s.month&&a.year==s.year,p=a.month==o.$month.val()&&a.year==o.$year.val();for(n;e>n;n++)r.push("<span></span>");for(i;t>=i;i++)d=[],l=i==o.$day.val()&&p,h=i<s.day&&f||u,c=i==s.day&&f,l&&d.push("selected"),h&&d.push("past"),c&&d.push("today"),r.push("<span class='date "+d.join(" ")+"' >"+i+"</span>");o.$dayContainer.html(r.join(""))},selectDate:function(t){var e=this;e.$container.find(".selected").removeClass("selected"),$(t.currentTarget).addClass("selected"),e.calendarDate.day=parseInt(t.currentTarget.innerText,10),e.$day.val(i(e.calendarDate.day)),e.$month.val(i(e.calendarDate.month)),e.$year.val(i(e.calendarDate.year)),e.hide()},displayPreviousMonth:function(){var t=this;1===t.calendarDate.month?(t.calendarDate.month=12,t.calendarDate.year--):t.calendarDate.month--,t.renderCalendar()},displayNextMonth:function(){var t=this;12===t.calendarDate.month?(t.calendarDate.month=1,t.calendarDate.year++):t.calendarDate.month++,t.renderCalendar()},updateCalendarView:function(){var t=this;t.calendarDate.day=parseInt(t.$day.val(),10)||s.day,t.calendarDate.month=parseInt(t.$month.val(),10)||s.month,t.calendarDate.year=parseInt(t.$year.val(),10)||s.year,t.renderCalendar()}},$.fn.datePicker=function(){return this.each(function(){new o($(this))})},$(".date-picker").datePicker()}(),"function"==typeof window.define&&window.define.amd&&define("modules/datePicker",[],function(){return toolkit.datePicker}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.form=function(t){function e(){var t=navigator.userAgent.toLowerCase();return-1!=t.indexOf("safari")?-1===t.indexOf("chrome"):!1}function n(t){var e=null;return t.is("[type=checkbox]")?t.is(":checked"):t.is("[type=radio]")?(e=t.parents("form").find('input[name="'+t.attr("name")+'"]')).filter(":checked").length>0:t.val()}function i(t,e){function n(){""===t.value?e.emptyText&&t.setCustomValidity(e.emptyText):t.setCustomValidity("")}function i(){""===t.value?e.emptyText&&t.setCustomValidity(e.emptyText):e.invalidText&&t.setCustomValidity(e.invalidText)}e.emptyText&&t.setCustomValidity(e.defaultText),t.addEventListener("change",n),t.addEventListener("input",n),t.addEventListener("invalid",i)}function o(t){this.$container=t,this.$requiredInputs=t.find("input[required]"),this.$patternInputs=t.find("input[pattern]"),this.errors=[],this.hasError=!1,this.customiseHTML5Messages(),this.bindEvents()}var a=!("required"in document.createElement("input")&&"pattern"in document.createElement("input")&&!e()),s="setCustomValidity"in document.createElement("input");return o.prototype={bindEvents:function(){var t=this;a&&t.$container.on("submit",function(e){t.validate(e)})},customiseHTML5Messages:function(){s&&this.$container.find(".feedback[data-for]").each(function(){var e=document.getElementById(t(this).attr("data-for"));new i(e,{invalidText:this.innerText||this.innerHTML})})},addErrorMessageToInput:function(e){var n=e.attr("id"),i=this.$container.find("label.descriptor[for="+n+"]"),o=this.$container.find(".feedback[data-for="+n+"]");this.hasError=!0,o.length>0?o.removeClass("hidden"):o=t('<span class="form-error feedback" data-for="'+e.attr("id")+'">'+i.text()+" is required</span>").insertAfter(e),e.hasClass("form-error")||(e.addClass("form-error"),t('<i class="form-error skycon-warning"></i>').insertAfter(e)),this.errors.push(o.first())},removeErrorsFromInput:function(t){var e=t.attr("id"),n=this.$container.find(".feedback[data-for="+e+"]");t.hasClass("form-error")&&(t.removeClass("form-error"),t.next(".skycon-warning").remove()),n.addClass("hidden")},createErrorsAtTop:function(){var t,e='<div id="feedback-list-container" class="row" aria-live="polite"><p><i class="form-error skycon-warning"></i>Please correct the highlighted fields below:</p><ul class="feedback-list">';for(t=0;t<this.errors.length;t++)e+='<li class="form-error">'+this.errors[t].text()+"</li>";e+="</ul></div>",this.$container.prepend(e),window.location.href=window.location.href.split("#")[0]+"#feedback-list-container"},resetErrors:function(){this.hasError=!1,this.errors=[],this.$container.find("#feedback-list-container").remove()},validateRequired:function(e,n){var i=t(n),o=this;""===i.val()?o.addErrorMessageToInput(i):o.removeErrorsFromInput(i)},validatePattern:function(e,i){var o=t(i),a=this,s=o.attr("pattern"),r=new RegExp("^(?:"+s+")$"),d=n(o);d&&!r.test(d)?a.addErrorMessageToInput(o):a.removeErrorsFromInput(o)},validate:function(t){var e=this;e.resetErrors(),this.$requiredInputs.each(this.validateRequired.bind(e)),this.$patternInputs.each(this.validatePattern.bind(e)),e.hasError&&(t.preventDefault(),e.createErrorsAtTop())}},t.fn.validation=function(){return this.each(function(){new o(t(this))})},t(".sky-form").validation(),o}(jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/validation",[],function(){return toolkit.validation}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.share=function(){function t(){i.shareCount.on("click keypress",e)}function e(t){t.preventDefault();var e=$(this).parent(),n="keypress "+("ontouchend"in document.documentElement?"touchend":"click");("click"===t.type||"touchend"===t.type||"keypress"===t.type&&13===t.which)&&(e.toggleClass("active"),i.document.on(n,function o(t){$.contains(e[0],t.target)||(e.removeClass("active"),i.document.off(n,o))}))}function n(){t()}var i={document:$(document),shareCount:$(".share-popup .summary")};return{init:n,toggleSharePopover:e}}(),"function"==typeof window.define&&window.define.amd&&define("modules/share",[],function(){return toolkit.share}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.video=function(t,e){function n(t,e){t.attr("data-video-id")&&(this.$container=t,this.options={token:e.token,freewheel:e.displayAdverts,animationSpeed:void 0!==e.animationSpeed?e.animationSpeed:500,autoplay:!1,videoId:t.attr("data-video-id"),onPlay:e.onPlay,closeCallback:e.closeCallback,$wrapperLocation:e.$wrapperLocation||this.$container},this.bindEvents())}return n.prototype={bindEvents:function(){var t=this;t.$container.on("click",".play-video",function(e){t.createWrapper(),t.play(e)})},bindWrapperEvents:function(){var t=this;e("body").one("keydown",t.stopOnEscape.bind(t)),t.$wrapper.one("click touchstart",".close",t.stop.bind(t)),t.$player.one("ended webkitendfullscreen",t.stop.bind(t))},createWrapper:function(){this.options.$wrapperLocation.append('<div class="video-wrapper"><a href="#!" class="close"><i class="skycon-close" aria-hidden=true></i><span class="speak">Close</span></a><div class="videocontrolcontainer"><video></video><img class="posterFrame"/></div></div>'),this.options.$wrapperLocation.find(".posterFrame").on("error",function(){this.src=options.placeHolderImage}),this.options.$wrapperLocation.append('<div class="video-overlay"></div>'),this.$player=this.options.$wrapperLocation.parent().find("video"),this.$wrapper=this.options.$wrapperLocation.find(".video-wrapper"),this.$wrapper.attr("id","video-"+this.options.videoId),this.bindWrapperEvents()},removeWrapper:function(){this.$wrapper.removeClass("playing-video").remove(),this.options.$wrapperLocation.find(".video-overlay").remove()},play:function(t){t&&t.preventDefault();var e=this;e.options.onPlay&&e.options.onPlay(),this.showCanvas(function(){e.$player.sky_html5player(e.options),setTimeout(function(){sky.html5player.play()},1333)})},stopOnEscape:function(t){27===t.keyCode&&(t.preventDefault(),this.stop())},stop:function(n){n&&n.preventDefault();var i=this;e(t).off("skycom.resizeend",i.resizeContainer),sky.html5player.close(this.$wrapper),this.hideCanvas()},showCanvas:function(n){var i,o=this.$container,a=this.options.$wrapperLocation,s=a.find(".video-overlay"),r=a.find(".video-wrapper"),d=o.find(".play-video"),c=r.find(".close"),l=0===this.options.animationSpeed?0:this.options.animationSpeed||500,h=this;this.originalHeight=o.height(),r.addClass("playing-video"),s.fadeIn(l,function(){d.fadeOut(l),i=h.calculateHeight(),o.animate({height:i},l,function(){e(t).on("skycom.resizeend",e.proxy(h.resizeContainer,h)),r.show(),s.fadeOut(l,function(){c.addClass("active")}),n()})})},calculateHeight:function(){return Math.round(9*(this.$container.width()/16))},resizeContainer:function(){this.$container.animate({height:this.calculateHeight()},250)},hideCanvas:function(){var t=this,e=this.$container,n=this.options.$wrapperLocation,i=n.find(".video-overlay"),o=n.find(".video-wrapper"),a=e.find(".play-video"),s=o.find(".close"),r=0===this.options.animationSpeed?0:this.options.animationSpeed||500,d=this.originalHeight;i.fadeIn(r,function(){s.removeClass("active"),e.animate({height:d},r,function(){e.css({height:"auto"}),t.options.closeCallback&&t.options.closeCallback(),a.fadeIn(r),i.hide(),o.fadeOut(r,t.removeWrapper.bind(t))})})}},e.fn.video=function(t){return this.each(function(){new n(e(this),t)})},n}(window,jQuery),"function"==typeof window.define&&window.define.amd&&define("modules/video",[],function(){return toolkit.video}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.carousel=function(t,e){function n(t,e){this.options=e,this.$viewport=t,this.$slideContainer=t.find(".skycom-carousel-container"),this.$slides=this.$slideContainer.find(">"),this.currentIndex=0,this.slideCount=this.$slides.length,this.timerId=!1,this.touchReset(),this.bindEvents(),this.initialiseVideos()}var i=function(){return"WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix}(),o=function(){var t=document.body.style;return void 0!==t.transform||void 0!==t.WebkitTransform||void 0!==t.MozTransform||void 0!==t.OTransform}();n.prototype={unbindTouchEvents:function(){this.$slideContainer.off("touchstart touchmove touchend touchcancel")},bindTouchEvents:function(){this.$slideContainer.on("touchstart",this.touchstart.bind(this)).on("touchmove",this.touchmove.bind(this)).on("touchend",this.touchend.bind(this)).on("touchcancel",this.touchReset.bind(this))},bindEvents:function(){this.bindTouchEvents(),this.$slideContainer.find("a").on("click",this.pause.bind(this))},unbindEvents:function(){this.unbindTouchEvents(),this.$slideContainer.find("a").off("click")},setOffset:function(t,e){var n=this.$slideContainer.removeClass("animate");return e&&n.addClass("animate"),i?n.css("transform","translate3d("+t+"%,0,0) scale3d(1,1,1)"):o?n.css("transform","translate("+t+"%,0)"):e?n.animate({left:2*t+"%"},600):n.css({left:2*t+"%"}),this},toggleTermsContent:function(){this.pause();var t=0===this.$viewport.next(".terms-content").find(".terms").length;this[t?"showTermsContent":"hideTermsContent"]()},showTermsContent:function(){this.hideTermsContent();var t=e(this.$slides[this.currentIndex]).find(".terms");t.length&&this.$viewport.next(".terms-content").append(t.clone(!0).removeClass("speak").attr("aria-hidden","true")).fadeIn(200)},hideTermsContent:function(){this.$viewport.next(".terms-content").fadeOut(200,function(){e(this).find(".terms").remove()})},showTermsLink:function(t){this.hideTermsLink();var n=e(this.$slides[t]).find(".terms");n.length&&this.$viewport.find(".terms-link").removeClass("hidden").fadeIn(200)},hideTermsLink:function(){this.$viewport.find(".terms-link").fadeOut(200),this.hideTermsContent()},initialiseVideos:function(){var t=this;this.$slides.video({$wrapperLocation:t.$viewport,token:"8D5B12D4-E1E6-48E8-AF24-F7B13050EE85",displayAdverts:!1,onPlay:function(){t.pause(),t.$viewport.find(".actions, .indicators, .terms-link").fadeOut(500)},closeCallback:function(){t.$viewport.find(".actions, .indicators, .terms-link").fadeIn(500)}})},moveSlide:function(t){var e,n,i=this,o=this.$slides;return n=t.index>=this.slideCount?0:t.index<0?this.slideCount-1:t.index,e=t.index>this.currentIndex&&!t.reverse?"left":"right",o.filter(":not(:eq("+this.currentIndex+"))").hide(),o.eq(this.currentIndex).css("float",e),o.eq(n).show().css("float","left"==e?"right":"left"),this.setOffset(t.start,!1),"undefined"!=typeof t.end&&(setTimeout(function(){i.setOffset(t.end,!0),i.showTermsLink(n),i.$viewport.trigger("change",n)},20),this.currentIndex=n,"function"==typeof t.callback&&t.callback(n)),n},"goto":function(t,e,n){return e!==!1&&this.pause(),t!==this.currentIndex?(t>this.currentIndex?this.moveSlide({index:t,start:0,end:-50,callback:n}):this.moveSlide({index:t,start:-50,end:0,callback:n}),this):void 0},next:function(t,e){return this.goto(this.currentIndex+1,t,e),this.$viewport.find(".indicators, .actions").css("display","block"),this},previous:function(){return this.goto(this.currentIndex-1),this.$viewport.find(".indicators, .actions").css("display","block"),this},play:function(t,e){var n=this,i=this.options.interval;return n.timerId=setTimeout(function(){n.next(!1),n.timerId=setTimeout(function t(){n.next(!1,function(){n.timerId=setTimeout(t,i)})},i)},e||this.options.onPlayDelay),this.$viewport.trigger("playing"),"function"==typeof t&&t(),this},pause:function(t){return clearTimeout(this.timerId),this.$viewport.trigger("paused"),"function"==typeof t&&t(),this},touchstart:function(t){var e=t.originalEvent.touches[0];this.pause(),this.swipe.start={x:e.pageX,y:e.pageY}},touchmove:function(t){var e,n=this.swipe,i=t.originalEvent.touches[0],o=i.pageX-n.start.x,a=i.pageY-n.start.y,s=Math.abs(o)>Math.abs(a),r=0>o?this.currentIndex+1:this.currentIndex-1;n.start&&s!==!1&&(t.preventDefault(),e=100*(o/this.$slideContainer.outerWidth(!0)),o>0&&(e-=50),this.swipe.positionAsPercentage=e,this.moveSlide({index:r,start:e}))},touchend:function(t){if(this.swipe.start){var e=this.swipe,n=e.positionAsPercentage,i=t.originalEvent.changedTouches[0],o=i.pageX-e.start.x,a=null,s=75;if(Math.abs(o)>s&&(a=0>o?"left":"right"),"left"===a)this.moveSlide({index:this.currentIndex+1,start:n,end:-50}),this.$viewport.find(".next").trigger("toolkit.track");else if("right"===a)this.moveSlide({index:this.currentIndex-1,start:n,end:0}),this.$viewport.find(".previous").trigger("toolkit.track");else if(0!==n){var r,d=o>0?n+50:n,c=this.currentIndex,l=0;0>d?this.currentIndex=c+1>=this.slideCount?0:c+1:(this.currentIndex-=1,l=-50,d-=50),r=0===this.currentIndex&&c===this.slideCount-1,this.moveSlide({index:c,start:d,end:l,reverse:r})}this.touchReset()}},touchReset:function(){this.swipe={start:!1,positionAsPercentage:0}}},e.fn.skycom_carousel=function(t){var i=e.extend(!0,{carousel:{actions:[{id:"play",label:"Play Carousel",icon:"carousel-play"},{id:"pause",label:"Pause Carousel",icon:"carousel-pause"},{id:"previous",label:"Previous",icon:"chevron-left",speak:!0},{id:"next",label:"Next",icon:"chevron",speak:!0}],autoplay:!0,startSlideIndex:0,onPlayDelay:500,interval:6e3}},t),o={actions:function(t,n){var i,o,a,s,r,d,c="",l=n.actions,h=n.onclick;if(n.count<=1)return this;for(a in l)d=l[a],i=d.id,s="next"==i||"previous"==i?" hidden-touch ":"",r="skycon-"+d.icon,o=d.speak?'<span class="speak">'+d.label+"</span>":d.label,c+='<a href="#" class="skycom-internal supportive '+s+i+'" >',c+='<span class="semi-circle"><i class="'+r+'" aria-hidden="true"></i></span>'+o,c+="</a>";return t.find(".skycom-carousel-container").before('<div class="actions">'+c+"</div>"),t.find("> .actions > *").each(function(t){e(this).attr("data-action",l[t].id).on("click",function(e){h(l[t].id),e.preventDefault()})}),this},indicators:function(t,n){var i,o,a=n.count,s=n.onclick,r='<div class="indicators"><div class="container">',d=' class="active"';if(1>=a)return this;for(o=a;o--;)r+="<span"+d+' data-tracking data-tracking-label="indicator"></span>',d="";return i=e(r+"</div></div>").on("click","span",function(t){s(e(t.currentTarget).index())}),t.append(i),this},terms:function(t){var n=e('<a href="#!" class="terms-link carousel-content cushioned hidden black internal-link supportive" aria-hidden="true">Terms and Conditions</a>'),i=e('<div class="terms-content carousel-content  cushioned hidden"></div>');return t.find(".terms").length&&(t.append(n),t.after(i),t.addClass("has-terms")),this},video:function(t){return t.append('<div class="video-overlay"></div>'),this}};return this.each(function(){var t=e(this),a=new n(t,i.carousel),s=function(e){o.indicators(t,{count:e.slideCount,onclick:function(t){e.goto(t)}}).terms(t).actions(t,{count:e.slideCount,actions:i.carousel.actions,onclick:function(t){e[t]()}})};s(a),t.on("click",".terms-link",function(){a.toggleTermsContent()}).on("change",function(e,n){n=n||0,t.find(".indicators .container > *").removeClass("active").eq(n).addClass("active"),a.$slides.removeClass("active").find("a").attr("tabindex",-1),a.$slides.eq(n).addClass("active").find("a").removeAttr("tabindex")}).on("playing",function(){t.removeClass("paused").addClass("playing")}).on("paused",function(){t.removeClass("playing").addClass("paused")}).on("pause",function(){a.pause()}).on("play",function(){a.play()}).on("refresh",function(e,n){a.$slides=a.$slideContainer.find(">"),a.slideCount=a.$slides.length,t.find(".indicators").remove(),t.find(".actions").remove(),t.find(".video-overlay").remove(),s(a),n=parseInt(n,10),isNaN(n)||0>n?n=0:n>a.slideCount-1&&(n=a.slideCount-1),n>a.currentIndex?a.moveSlide({index:n,start:0,end:-50}):a.moveSlide({index:n,start:-50,end:0})}).on("keyup",function(t){switch(t.keyCode){case 9:a.pause();break;case 37:a.previous();break;case 39:a.next()}}).find(".toggle-terms").on("click",function(){a.$viewport.toggleClass("showing-tandcs")}),a.slideCount>1?(a[i.carousel.autoplay===!0?"play":"pause"](!1,i.carousel.interval),a.goto(i.carousel.startSlideIndex,!1),a.showTermsLink(0),t.trigger("change")):a.unbindTouchEvents()})}}(window,jQuery,toolkit.video),"function"==typeof window.define&&window.define.amd&&define("modules/carousel",["modules/video"],function(){return toolkit.carousel}),"undefined"==typeof toolkit&&(toolkit={}),toolkit.main=function(){function t(){var t=function(){$(document.body).addClass("window-loaded")},e=setTimeout(t,5e3);$(window).load(function(){clearTimeout(e),t()})}t()}(),toolkit.modules=function(){var t=function(t){var e,n=$.extend({skycons:!1,share:!1,popup:!1,inPageNav:!1,accordion:!1,datePicker:!1},t);for(e in n)(n[e]||!t)&&toolkit[e]&&toolkit[e].init&&toolkit[e].init()};return{init:t}}(),"function"==typeof window.define&&window.define.amd&&define("modules",[],function(){return toolkit.modules}),"function"==typeof window.define&&window.define.amd&&define("toolkit",["utils/skycons","utils/hashmanager","utils/popup","utils/toggle","utils/diff","modules","modules/inPageNav","modules/accordion","modules/datePicker","modules/validation","modules/share","modules/video","modules/carousel"],function(t,e,n,i,o,a,s,r,d,c,l,h,u){return{modules:a,skycons:t,hashmanager:e,popup:n,diff:o,inPageNav:s,accordion:r,datePicker:d,validation:c,share:l,video:h,carousel:u}});