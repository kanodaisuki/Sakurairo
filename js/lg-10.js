(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[4441],{1363:function(e){var o,i,t,s,n,r,l,d,a;e.exports=(o=function(){return(o=Object.assign||function(e){for(var o,i=1,t=arguments.length;i<t;i++)for(var s in o=arguments[i])Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);return e}).apply(this,arguments)},i={autoplayFirstVideo:!0,youTubePlayerParams:!1,vimeoPlayerParams:!1,wistiaPlayerParams:!1,gotoNextSlideOnVideoEnd:!0,autoplayVideoOnSlide:!1,videojs:!1,videojsTheme:"",videojsOptions:{}},t="lgHasVideo",s="lgSlideItemLoad",n="lgBeforeSlide",r="lgAfterSlide",l="lgPosterClick",d=function(e){return Object.keys(e).map((function(o){return encodeURIComponent(o)+"="+encodeURIComponent(e[o])})).join("&")},a=function(e,i){if(!e.youtube)return"";var t=e.youtube[2]?e.youtube[2].slice(1).split("&").map((function(e){return e.split("=")})).reduce((function(e,o){var i=o.map(decodeURIComponent),t=i[0],s=i[1];return e[t]=s,e}),{}):"",s=i||{},n=o(o(o({},{wmode:"opaque",autoplay:0,mute:1,enablejsapi:1}),s),t);return"?"+d(n)},function(){function e(e){return this.core=e,this.settings=o(o({},i),this.core.settings),this}return e.prototype.init=function(){var e=this;this.core.LGel.on(t+".video",this.onHasVideo.bind(this)),this.core.LGel.on(l+".video",(function(){var o=e.core.getSlideItem(e.core.index);e.loadVideoOnPosterClick(o)})),this.core.LGel.on(s+".video",this.onSlideItemLoad.bind(this)),this.core.LGel.on(n+".video",this.onBeforeSlide.bind(this)),this.core.LGel.on(r+".video",this.onAfterSlide.bind(this))},e.prototype.onSlideItemLoad=function(e){var o=this,i=e.detail,t=i.isFirstSlide,s=i.index;this.settings.autoplayFirstVideo&&t&&s===this.core.index&&setTimeout((function(){o.loadAndPlayVideo(s)}),200),!t&&this.settings.autoplayVideoOnSlide&&s===this.core.index&&this.loadAndPlayVideo(s)},e.prototype.onHasVideo=function(e){var o=e.detail,i=o.index,t=o.src,s=o.html5Video;o.hasPoster||(this.appendVideos(this.core.getSlideItem(i),{src:t,addClass:"lg-object",index:i,html5Video:s}),this.gotoNextSlideOnVideoEnd(t,i))},e.prototype.onBeforeSlide=function(e){if(this.core.lGalleryOn){var o=e.detail.prevIndex;this.pauseVideo(o)}},e.prototype.onAfterSlide=function(e){var o=this,i=e.detail,t=i.index,s=i.prevIndex,n=this.core.getSlideItem(t);this.settings.autoplayVideoOnSlide&&t!==s&&n.hasClass("lg-complete")&&setTimeout((function(){o.loadAndPlayVideo(t)}),100)},e.prototype.loadAndPlayVideo=function(e){var o=this.core.getSlideItem(e);this.core.galleryItems[e].poster?this.loadVideoOnPosterClick(o,!0):this.playVideo(e)},e.prototype.playVideo=function(e){this.controlVideo(e,"play")},e.prototype.pauseVideo=function(e){this.controlVideo(e,"pause")},e.prototype.getVideoHtml=function(e,o,i,t){var s="",n=this.core.galleryItems[i].__slideVideoInfo||{},r=this.core.galleryItems[i],l=r.title||r.alt;l=l?'title="'+l+'"':"";var c='allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';if(n.youtube){var u="lg-youtube"+i,h=a(n,this.settings.youTubePlayerParams);s='<iframe allow="autoplay" id='+u+' class="lg-video-object lg-youtube '+o+'" '+l+' src="'+(e.includes("youtube-nocookie.com")?"//www.youtube-nocookie.com/":"//www.youtube.com/")+"embed/"+(n.youtube[1]+h)+'" '+c+"></iframe>"}else if(n.vimeo){u="lg-vimeo"+i;var f=function(e,o){if(!o||!o.vimeo)return"";var i=o.vimeo[2]||"",t=e&&0!==Object.keys(e).length?"&"+d(e):"",s=((o.vimeo[0].split("/").pop()||"").split("?")[0]||"").split("#")[0],n=o.vimeo[1]!==s;return n&&(i=i.replace("/"+s,"")),"?autoplay=0&muted=1"+(n?"&h="+s:"")+t+("?"==i[0]?"&"+i.slice(1):i||"")}(this.settings.vimeoPlayerParams,n);s='<iframe allow="autoplay" id='+u+' class="lg-video-object lg-vimeo '+o+'" '+l+' src="//player.vimeo.com/video/'+(n.vimeo[1]+f)+'" '+c+"></iframe>"}else if(n.wistia){var p="lg-wistia"+i;f=(f=d(this.settings.wistiaPlayerParams))?"?"+f:"",s='<iframe allow="autoplay" id="'+p+'" src="//fast.wistia.net/embed/iframe/'+(n.wistia[4]+f)+'" '+l+' class="wistia_embed lg-video-object lg-wistia '+o+'" name="wistia_embed" '+c+"></iframe>"}else if(n.html5){for(var g="",y=0;y<t.source.length;y++)g+='<source src="'+t.source[y].src+'" type="'+t.source[y].type+'">';if(t.tracks){var v=function(e){var o="",i=t.tracks[e];Object.keys(i||{}).forEach((function(e){o+=e+'="'+i[e]+'" '})),g+="<track "+o+">"};for(y=0;y<t.tracks.length;y++)v(y)}var m="",w=t.attributes||{};Object.keys(w||{}).forEach((function(e){m+=e+'="'+w[e]+'" '})),s='<video class="lg-video-object lg-html5 '+(this.settings.videojs&&this.settings.videojsTheme?this.settings.videojsTheme+" ":"")+" "+(this.settings.videojs?" video-js":"")+'" '+m+">\n                "+g+"\n                Your browser does not support HTML5 video.\n            </video>"}return s},e.prototype.appendVideos=function(e,o){var i,t=this.getVideoHtml(o.src,o.addClass,o.index,o.html5Video);e.find(".lg-video-cont").append(t);var s=e.find(".lg-video-object").first();if(o.html5Video&&s.on("mousedown.lg.video",(function(e){e.stopPropagation()})),this.settings.videojs&&(null===(i=this.core.galleryItems[o.index].__slideVideoInfo)||void 0===i?void 0:i.html5))try{return videojs(s.get(),this.settings.videojsOptions)}catch(e){console.error("lightGallery:- Make sure you have included videojs")}},e.prototype.gotoNextSlideOnVideoEnd=function(e,o){var i=this,t=this.core.getSlideItem(o).find(".lg-video-object").first(),s=this.core.galleryItems[o].__slideVideoInfo||{};if(this.settings.gotoNextSlideOnVideoEnd)if(s.html5)t.on("ended",(function(){i.core.goToNextSlide()}));else if(s.vimeo)try{new Vimeo.Player(t.get()).on("ended",(function(){i.core.goToNextSlide()}))}catch(e){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(s.wistia)try{window._wq=window._wq||[],window._wq.push({id:t.attr("id"),onReady:function(e){e.bind("end",(function(){i.core.goToNextSlide()}))}})}catch(e){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},e.prototype.controlVideo=function(e,o){var i=this.core.getSlideItem(e).find(".lg-video-object").first(),t=this.core.galleryItems[e].__slideVideoInfo||{};if(i.get())if(t.youtube)try{i.get().contentWindow.postMessage('{"event":"command","func":"'+o+'Video","args":""}',"*")}catch(e){console.error("lightGallery:- "+e)}else if(t.vimeo)try{new Vimeo.Player(i.get())[o]()}catch(e){console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")}else if(t.html5)if(this.settings.videojs)try{videojs(i.get())[o]()}catch(e){console.error("lightGallery:- Make sure you have included videojs")}else i.get()[o]();else if(t.wistia)try{window._wq=window._wq||[],window._wq.push({id:i.attr("id"),onReady:function(e){e[o]()}})}catch(e){console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")}},e.prototype.loadVideoOnPosterClick=function(e,o){var i=this;if(e.hasClass("lg-video-loaded"))o&&this.playVideo(this.core.index);else if(e.hasClass("lg-has-video"))this.playVideo(this.core.index);else{e.addClass("lg-has-video");var t=void 0,s=this.core.galleryItems[this.core.index].src,n=this.core.galleryItems[this.core.index].video;n&&(t="string"==typeof n?JSON.parse(n):n);var r=this.appendVideos(e,{src:s,addClass:"",index:this.core.index,html5Video:t});this.gotoNextSlideOnVideoEnd(s,this.core.index);var l=e.find(".lg-object").first().get();e.find(".lg-video-cont").first().append(l),e.addClass("lg-video-loading"),r&&r.ready((function(){r.on("loadedmetadata",(function(){i.onVideoLoadAfterPosterClick(e,i.core.index)}))})),e.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg",(function(){setTimeout((function(){i.onVideoLoadAfterPosterClick(e,i.core.index)}),50)}))}},e.prototype.onVideoLoadAfterPosterClick=function(e,o){e.addClass("lg-video-loaded"),this.playVideo(o)},e.prototype.destroy=function(){this.core.LGel.off(".lg.video"),this.core.LGel.off(".video")},e}())}}]);
//# sourceMappingURL=lg-10.js.map