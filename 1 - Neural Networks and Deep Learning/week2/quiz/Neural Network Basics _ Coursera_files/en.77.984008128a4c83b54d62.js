(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"/n9k":function(module,t,e){"use strict";var n=e("PTN7"),a=e.n(n),o=e("Ji/E"),i=function supportsNativeTextTracks(){var t,e=a.a.getTech("html5");if(!e.TEST_VID||!o.a.browser)return!1;return(t=!!e.TEST_VID.textTracks)&&e.TEST_VID.textTracks.length>0&&(t="number"!=typeof e.TEST_VID.textTracks[0].mode),!t||"onremovetrack"in e.TEST_VID.textTracks||(t=!1),t};t.a=i},"/xeL":function(module,t,e){"use strict";var n=e("PJYZ"),a=e.n(n),o=e("VbXa"),i=e.n(o),s=e("FMcB"),l=e.n(s),u=e("PTN7"),r=e.n(u),c=e("Ji/E"),d=e("oYk5"),p=e.n(d),f=e("VYij"),h=e.n(f),b=function(t){function PlaybackRateMenuSection(e,n){var o;return(o=t.call(this,e,n)||this).options_={name:"playbackRateMenuSection"},o.playbackRates_=[.75,1,1.25,1.5,1.75,2],p()(o.el_).find('[data-js="c-playback-rate-minus-button"]').click(o.decreasePlaybackRate.bind(a()(o))),p()(o.el_).find('[data-js="c-playback-rate-plus-button"]').click(o.increasePlaybackRate.bind(a()(o))),o.updateVisibility(),o.player_.on("ratechange",r.a.bind(a()(o),o.changeRateText)),o.player_.on("loadstart",r.a.bind(a()(o),o.updateVisibility)),o.changeRateText.call(a()(o)),o}i()(PlaybackRateMenuSection,t);var e=PlaybackRateMenuSection.prototype;return e.name=function name(){return"PlaybackRateMenuSection"},e.createEl=function createEl(t,e){return p()(l()())[0]},e.updateVisibility=function updateVisibility(){this.isPlaybackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},e.isPlaybackRateSupported=function isPlaybackRateSupported(){return this.player_.options().playbackRates&&this.player().tech_&&this.player().tech_.featuresPlaybackRate&&!c.a.isAndroid},e.changeRateText=function changeRateText(){var t=this.player_.playbackRate().toFixed(2)+"x";p()(this.el_).find('[data-js="c-playback-rate-text"]').text(t)},e.getRateIndex=function getRateIndex(){return h.a.indexOf(this.playbackRates_,this.player_.playbackRate()||1)},e.decreasePlaybackRate=function decreasePlaybackRate(){this.player_.playbackRate()!==h.a.first(this.playbackRates_)&&this.player_.options().playbackRates&&this.player_.playbackRate(this.playbackRates_[this.getRateIndex()-1])},e.increasePlaybackRate=function increasePlaybackRate(){this.player_.playbackRate()!==h.a.last(this.playbackRates_)&&this.player_.options().playbackRates&&this.player_.playbackRate(this.playbackRates_[this.getRateIndex()+1])},PlaybackRateMenuSection}(r.a.getComponent("MenuItem"));r.a.registerComponent("PlaybackRateMenuSection",b)},"1+fi":function(module,t,e){"use strict";var n=e("MVZn"),a=e.n(n),o=e("VbXa"),i=e.n(o),s=e("PTN7"),l=e.n(s),u=e("3g8Y"),r=e.n(u),c=e("Zg9a"),d=function(t){function SubtitlesOffMenuItem(e,n){var o;return(o=t.call(this,e,a()({},n,{track:{kind:"subtitles",player:e,label:r()({controlName:"subtitlesOffLabel"}),dflt:!1,mode:!1},selectable:!0}))||this).selected(!0),o}return i()(SubtitlesOffMenuItem,t),SubtitlesOffMenuItem}(l.a.getComponent("SubtitlesMenuItem"));l.a.registerComponent("SubtitlesOffMenuItem",d)},"2UcY":function(module,exports,t){var e,n,a,o;a=window,o=function(t,e,n){var a=function template(n){var a=[],o,i=n||{};return function(e){a.push('<div tabindex="0" aria-label="Autoplay" class="c-autoplay-menu-section"><div class="vjs-menu-title"><h3 class="menu-section-title headline-1-text">'+t.escape(null==(o=e("Autoplay"))?"":o)+'</h3></div><div class="c-menu-divider"></div><div class="c-autoplay-button-container"><button data-js="autoplay-off-button" aria-label="Autoplay Off" class="c-autoplay-button c-autoplay-off-button">'+t.escape(null==(o=e("Off"))?"":o)+'</button><button data-js="autoplay-on-button" aria-label="Autoplay On" class="c-autoplay-button c-autoplay-on-button">'+t.escape(null==(o=e("On"))?"":o)+"</button></div></div>")}.call(this,"_t"in i?i._t:void 0!==e?e:void 0),a.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("O+Uj")],void 0===(n=function(t,e){var n;return o(t,e,n)}.apply(exports,e))||(module.exports=n)},"3Ivv":function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),o=e("PTN7"),i=e.n(o),s=e("oYk5"),l=e.n(s),u=function(t){function CVolumeMenuButton(){return t.apply(this,arguments)||this}var e;return a()(CVolumeMenuButton,t),CVolumeMenuButton.prototype.createEl=function createEl(){var e=t.prototype.createEl.call(this),n=l()(e);return n.attr("data-js","video-mute-control"),n.addClass("c-video-control c-volume-menu-button vjs-menu-button-popup"),e},CVolumeMenuButton}(i.a.getComponent("VolumePanel"));i.a.registerComponent("CVolumeMenuButton",u)},"3g8Y":function(module,exports,t){var e,n,a,o;a=window,o=function(t,e,n){var a=function template(n){var a=[],o,i=n||{};return function(e,n,i){switch(e){case"countdown":a.push('<div class="vjs-control c-countdown"><span class="c-countdown-text"><em class="cif-spin cif-refresh"></em></span></div>');break;case"subtitlesMenuItem":a.push('<em class="cif-lg cif-fw c-subtitles-menu-item-selected-icon"></em><span data-js="c-subtitles-menu-item-label" class="c-subtitles-menu-item-label caption-text">'+t.escape(null==(o=n(i))?"":o)+"</span>");break;case"subtitlesOffLabel":a.push(""+t.escape(null==(o=n("Subtitles Off"))?"":o));break;case"subtitlesMenuTitle":a.push('<h3 class="vjs-menu-title headline-1-text menu-section-title">'+t.escape(null==(o=n("Subtitles"))?"":o)+"</h3>");break;case"menuDivider":a.push('<div class="c-menu-divider"></div>')}}.call(this,"controlName"in i?i.controlName:"undefined"!=typeof controlName?controlName:void 0,"_t"in i?i._t:void 0!==e?e:void 0,"label"in i?i.label:"undefined"!=typeof label?label:void 0),a.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("Kq1R")],void 0===(n=function(t,e){var n;return o(t,e,n)}.apply(exports,e))||(module.exports=n)},"4nMq":function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),o=e("oYk5"),i=e.n(o),s=e("VYij"),l=e.n(s),u=e("PTN7"),r=e.n(u),c=e("3g8Y"),d=e.n(c),p=e("u5HK"),f=e.n(p),h=e("1+fi"),b=e("NjGn"),y=e("Zg9a"),v=38,m=40,g=13,C=32,k="vjs-selected",M="vjs-hidden",R=function(t){function SubtitlesMenuButton(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n=t.call(this,e,a)||this;var o=f()("Subtitles");n.menuButton_.el_.innerHTML='<span class="cif-2x cif-fw cif-captions"></span>',n.menuButton_.el_.innerHTML+='<span class="vjs-control-text">'.concat(o,"</span>"),n.menuButton_.el_.setAttribute("aria-label",o),n.menuButton_.addClass("vjs-control"),n.menuButton_.addClass("c-vjs-button"),n.menuButton_.el_.removeAttribute("aria-live");var i=a.defaultSubtitleLanguage;return i?n.menu.showSubtitleOffItem():n.menu.hideSubtitleOffItem(),n.one(e,"ready",function(){l()(e.textTracks()).forEach(function(t){t.language===i?t.mode="showing":t.mode="hidden"})}),n}a()(SubtitlesMenuButton,t);var e=SubtitlesMenuButton.prototype;return e.createEl=function createEl(e,n){var a=t.prototype.createEl.call(this),o=i()(a);return o.attr("data-js","subtitles-menu-button"),o.addClass("c-video-control c-subtitles-control vjs-menu-button-popup"),a},e.handleKeyPress=function handleKeyPress(t){if([v,m,g,C].includes(t.keyCode)){var e=this.menu,n=l()(e.children_).filter(function(t){return!t.hasClass("vjs-hidden")}),a;l()(n).find(function(t){return t.hasClass("vjs-selected")})||(e.showSubtitleOffItem(),e.children()[0].selected(!0)),this.el().classList.add("selected"),e.lockShowing(),e.focus(),t.preventDefault(),t.stopPropagation()}},e.handleClick=function handleClick(t){this.player_.controlBar.subtitlesMenuButton.menu.unlockShowing();var e=this.player_.textTracks(),n=l()(e).findWhere({mode:"showing"});if(n)n.mode="disabled";else if(e.length){var a=l()(e).findWhere({default:!0});if(a)a.mode="showing";else{var o=l()(e).findWhere({language:"en"});o?o.mode="showing":e[0].mode="showing"}}},e.createMenu=function createMenu(){var t,e=new(r.a.getComponent("SubtitlesMenu"))(this.player_,this.options_.subtitlesMenu);this.items=this.createItems(),this.items.forEach(function(t){return e.addItem(t)});var n=e.contentEl().children[0]||null;return e.contentEl().insertBefore(i()(d()({controlName:"subtitlesMenuTitle"}))[0],n),e.contentEl().insertBefore(i()(d()({controlName:"menuDivider"}))[0],n),e},e.createItems=function createItems(){var t,e=new(r.a.getComponent("SubtitlesOffMenuItem"))(this.player_,{kind:"subtitles",id:"subtitles-off"});e.hide();var n=r.a.getComponent("SubtitlesMenuItem");return[e].concat(l.a.chain(this.player_.textTracks()).filter(function(t){return"subtitles"===t.kind}).sortBy("label").map(function(t){return new n(this.player_,{track:t,selectable:!0})},this).value())},SubtitlesMenuButton}(r.a.getComponent("SubtitlesButton"));r.a.registerComponent("SubtitlesMenuButton",R)},BQhx:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},FMcB:function(module,exports,t){var e,n,a,o;a=window,o=function(t,e,n){var a=function template(n){var a=[],o,i=n||{};return function(e){a.push('<div tabindex="0" aria-label="Playback Rate" class="c-playback-rate-menu-section"><div class="vjs-menu-title"><h3 class="menu-section-title headline-1-text">'+t.escape(null==(o=e("Playback Rate"))?"":o)+'</h3></div><div class="c-menu-divider"></div><div class="c-playback-rate-button-container"><button data-js="c-playback-rate-minus-button" aria-label="Playback Rate Minus" class="c-playback-rate-button"><em class="cif-minus"></em></button><span data-js="c-playback-rate-text" class="c-playback-rate-text"></span><button data-js="c-playback-rate-plus-button" aria-label="Playback Rate Plus" class="c-playback-rate-button"><em class="cif-plus"></em></button></div></div>')}.call(this,"_t"in i?i._t:void 0!==e?e:void 0),a.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("tioU")],void 0===(n=function(t,e){var n;return o(t,e,n)}.apply(exports,e))||(module.exports=n)},HX4l:function(module,t,e){"use strict";e.r(t);var n=e("oYk5"),a=e.n(n),o=e("VYij"),i=e.n(o),s=e("PTN7"),l=e.n(s),u=e("/n9k"),r=e("yiR1"),c=e.n(r),d=e("xbf0"),p=e("rQOG"),f=e("PRI2"),h=e("t9gw"),b=e("PTu/"),y=e("4nMq"),v=e("3Ivv"),m=e("uvZC"),g=function getFlexDefaults(t){return{fluid:!0,controls:!0,html5:{nativeTextTracks:Object(u.a)()},children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},circlePlayButton:{},controlBar:{children:["progressControl","cPlayToggle","currentTimeDisplay","timeDivider","durationDisplay",{name:"subtitlesMenuButton",defaultSubtitleLanguage:t.defaultSubtitleLanguage},{name:"cVolumeMenuButton",children:["cMuteToggle"],inline:!1,vertical:!0},"settingsMenuButton","cFullscreenToggle"]},errorDisplay:{},textTrackSettings:{}}}},C=function attachListeners(t){t.one("play",function(){t.autoplay()&&a()(t.el_).focus()})},k=function VideoPlayer(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i()(e).defaults(g(e)),a=l()(t,n);return C(a),a.emitter||(a.emitter=c.a.emitter()),a.setupHeartbeatListener(),a.currentTrack=function(){return i()(a.textTracks()).find(function(t){return"showing"===t.mode})},a};t.default=k},HwIc:function(module,exports,t){var e,n,a,o;a=window,o=function(t,e,n){var a=function template(n){var a=[],o,i=n||{};return function(e){a.push('<div tabindex="0" aria-label="Video Quality" class="c-resolution-menu-section"><div class="vjs-menu-title"><h3 class="menu-section-title headline-1-text">'+t.escape(null==(o=e("Video Quality"))?"":o)+'</h3></div><div class="c-menu-divider"></div><div class="c-resolution-button-container"><button data-js="decrease-resolution-button" aria-label="Decrease Resolution" class="c-resolution-button"><em class="cif-minus"></em></button><span data-js="resolution-text" class="c-resolution-text"></span><button data-js="increase-resolution-button" aria-label="Increase Resolution" class="c-resolution-button"><em class="cif-plus"></em></button></div></div>')}.call(this,"_t"in i?i._t:void 0!==e?e:void 0),a.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("iuOe")],void 0===(n=function(t,e){var n;return o(t,e,n)}.apply(exports,e))||(module.exports=n)},JAA1:function(module,t,e){"use strict";var n=e("PTN7"),a=e.n(n),o=e("VYij"),i=e.n(o),s=e("unn+"),l=e("c6na"),u=e.n(l),r=function ResolutionsHandler(t,e){this.player=t,this.sourcesByResolution=e.sourcesByResolution,this.supportedResolutions=i()(this._knownResolutions).intersection(i()(e.sourcesByResolution).keys()),this.resolution=this.isResolutionSupported(e.resolution)?e.resolution:"540p",this.possibleResolutions=this.supportedResolutions,this.player.on("error",function(){var t=this.player.error();if(t&&4===t.code&&"testing"!==u.a.environment){s.default.error("Attempted to get source for resolution, but server responded with an error");var e=this.getResolution();this.possibleResolutions=i()(this.possibleResolutions).without(e),this.possibleResolutions.length&&this.setResolution(this.possibleResolutions[0])}}.bind(this))};r.prototype.getResolution=function(){return this.resolution},r.prototype.getResolutionIndex=function(){return i()(this.supportedResolutions).indexOf(this.resolution)},r.prototype.isResolutionSupported=function(t){return i()(this.supportedResolutions).contains(t)},r.prototype.getSourceForResolution=function(t){if(!this.isResolutionSupported(t))return void s.default.error("Attempted to get source for unsupported resolution");var e=i()(this.sourcesByResolution[t]).findWhere({type:"video/mp4"});return e&&e.src},r.prototype.setResolution=function(t){if(this.resolution===t)return;if(!this.isResolutionSupported(t))return;var e=this.player.currentTime(),n=this.player.playbackRate(),a=this.player.paused();this.player.pause(),this.player.one("loadedmetadata",function(){this.player.currentTime(e),this.player.options().playbackRates&&this.player.playbackRate(n),a?this.player.pause():this.player.play()}.bind(this)),this.player.src(this.sourcesByResolution[t]),this.resolution=t,this.player.trigger("resolutionchange")},r.prototype.decreaseResolution=function(){0!==this.supportedResolutions.length&&this.getResolution!==i()(this.supportedResolutions).first()&&this.setResolution(this.supportedResolutions[this.getResolutionIndex()-1])},r.prototype.increaseResolution=function(){0!==this.supportedResolutions.length&&this.resolution!==i()(this.supportedResolutions).last()&&this.setResolution(this.supportedResolutions[this.getResolutionIndex()+1])},r.prototype._knownResolutions=["360p","540p","720p"],a.a.registerPlugin("resolutions",function(t){if(!this.resolutionsHandler_){var e=new r(this,t);this.resolutionsHandler_=e,this.resolution=function(t){return t?(e.setResolution(t),t):e.getResolution()},this.increaseResolution=e.increaseResolution.bind(e),this.decreaseResolution=e.decreaseResolution.bind(e),this.isResolutionSupported=e.isResolutionSupported.bind(e),this.getResolutionIndex=e.getResolutionIndex.bind(e),this.getSourceForResolution=e.getSourceForResolution.bind(e)}})},JZ2G:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},Kq1R:function(module,exports,t){var e=t("wfto"),n=e.default?e.default:{},a,o=(0,t("HdzH").default)(n);o.getLocale=function(){return"en"},module.exports=o},NjGn:function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),o=e("PTN7"),i=e.n(o),s="vjs-highlighted",l=function(t){function SubtitlesMenu(){return t.apply(this,arguments)||this}a()(SubtitlesMenu,t);var e=SubtitlesMenu.prototype;return e.hideSubtitleOffItem=function hideSubtitleOffItem(){var t=this.getChildById("subtitles-off");t.removeClass(s),t.hide()},e.showSubtitleOffItem=function showSubtitleOffItem(){this.getChildById("subtitles-off").show()},SubtitlesMenu}(i.a.getComponent("Menu"));i.a.registerComponent("SubtitlesMenu",l)},"O+Uj":function(module,exports,t){var e=t("JZ2G"),n=e.default?e.default:{},a,o=(0,t("HdzH").default)(n);o.getLocale=function(){return"en"},module.exports=o},PRI2:function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),o=e("PTN7"),i=e.n(o),s=e("oYk5"),l=e.n(s),u=e("u5HK"),r=e.n(u),c=function(t){function CPlayToggle(e,n){var a;a=t.call(this,e,n)||this;var o=r()("Play"),i;return a.el_.innerHTML='<span class="cif-2x cif-fw cif-play"></span>',a.el_.innerHTML+='<span class="vjs-control-text">'.concat(o,"</span>"),a.el_.setAttribute("aria-label",o),n.isAudio&&(a.el_.innerHTML='<span class="cif-fw cif-play"></span>'),a}a()(CPlayToggle,t);var e=CPlayToggle.prototype;return e.createEl=function createEl(){var e=t.prototype.createEl.call(this),n=l()(e);return n.attr("data-js","c-play-control"),n.addClass("c-video-control c-play-control"),e},e.handlePlay=function handlePlay(){t.prototype.handlePlay.call(this);var e=r()("Pause");this.el_.setAttribute("aria-label",e);var n=l()(this.el_).find("span.cif-fw"),a;n.removeClass("cif-play"),n.addClass("cif-pause"),l()(this.el_).find("span.vjs-control-text").html(e)},e.handlePause=function handlePause(){t.prototype.handlePause.call(this);var e=r()("Play");this.el_.setAttribute("aria-label",e);var n=l()(this.el_).find("span.cif-fw"),a;n.removeClass("cif-pause"),n.addClass("cif-play"),l()(this.el_).find("span.vjs-control-text").html(e)},CPlayToggle}(i.a.getComponent("PlayToggle"));i.a.registerComponent("CPlayToggle",c)},"PTu/":function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),o=e("oYk5"),i=e.n(o),s=e("VYij"),l=e.n(s),u=e("PTN7"),r=e.n(u),c=e("u5HK"),d=e.n(c),p=e("p65z"),f=e("/xeL"),h=e("q6B5"),b=e("yVbM"),y="vjs-highlighted",v=function handleEnterAndSpaceKeys(t){t.lockShowing();var e=i()(t.contentEl_).find("button"),n=l()(e).find(function(t){return i()(t).hasClass(y)});n?(i()(n).removeClass(y),i()(n).blur()):(e.eq(0).addClass(y),e.eq(0).focus())},m=function handleTabAndEscapeKeys(t){i()(t.contentEl_).find("button").removeClass(y),t.unlockShowing()},g=function handleUpAndDownArrowKeys(t,e){t.lockShowing();var n=-1,a=i()(t.contentEl_).find("button"),o=l()(a).find(function(t){return i()(t).hasClass(y)});o&&(n=l()(a).indexOf(o),i()(o).removeClass(y),i()(o).blur()),0===n&&-1===e?(a.eq(a.length-1).addClass(y),a.eq(a.length-1).focus()):n<0||n>=a.length-1?(a.eq(0).addClass(y),a.eq(0).focus()):(a.eq(n+e).addClass(y),a.eq(n+e).focus())},C=function(t){function SettingsMenuButton(e){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n=t.call(this,e,a)||this;var o=d()("Settings");return n.menuButton_.el_.innerHTML='<span class="cif-2x cif-fw cif-cog"></span>',n.menuButton_.el_.innerHTML+='<span class="vjs-control-text">'.concat(o,"</span>"),n.menuButton_.el_.setAttribute("aria-label",o),n.menuButton_.addClass("vjs-control"),n.menuButton_.addClass("c-vjs-button"),n}a()(SettingsMenuButton,t);var e=SettingsMenuButton.prototype;return e.createEl=function createEl(){var e=t.prototype.createEl.call(this),n=i()(e);return n.attr("data-js","settings-menu-button"),n.addClass("c-video-control c-settings-control vjs-menu-button-popup"),e},e.handleKeyPress=function handleKeyPress(t){var e=i()(this.player_.controlBar.settingsMenuButton.contentEl_),n=this.player_.controlBar.settingsMenuButton.menu;t.keyCode===b.f||t.keyCode===b.a?(g(n,t.keyCode===b.f?-1:1),e.focus(),t.preventDefault(),t.stopPropagation()):t.keyCode===b.e||t.keyCode===b.c||t.shiftKey&&t.keyCode===b.e?(m(n),e.blur()):t.keyCode!==b.b&&t.keyCode!==b.d||(v(n),e.focus(),t.preventDefault(),t.stopPropagation())},e.createMenu=function createMenu(){var t,e=new(r.a.getComponent("Menu"))(this.player_,{contentElType:"div"});return l.a.each(this.createItems(),function(t){e.addItem(t)},this),e},e.createItems=function createItems(){var t,e=[new(r.a.getComponent("ResolutionMenuSection"))(this.player_,{})],n=r.a.getComponent("PlaybackRateMenuSection");e.push(new n(this.player_,{}));var a=r.a.getComponent("AutoplayMenuSection");return e.push(new a(this.player_,{})),e},SettingsMenuButton}(r.a.getComponent("MenuButton"));r.a.registerComponent("SettingsMenuButton",C)},Rmay:function(module,exports,t){},Y22C:function(module,exports,t){var e=t("uVoQ"),n=e.default?e.default:{},a,o=(0,t("HdzH").default)(n);o.getLocale=function(){return"en"},module.exports=o},Zg9a:function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),o=e("PTN7"),i=e.n(o),s=e("3g8Y"),l=e.n(s),u=27,r=9,c=function(t){function SubtitlesMenuItem(){return t.apply(this,arguments)||this}a()(SubtitlesMenuItem,t);var e=SubtitlesMenuItem.prototype;return e.createEl=function createEl(t,e){var n,a=i.a.getComponent("ClickableComponent").prototype.createEl.call(this,"li",Object.assign({className:"vjs-menu-item",innerHTML:l()({controlName:"subtitlesMenuItem",label:this.options_.label})},e));return a.setAttribute("data-js","c-subtitles-menu-item"),a},e.closeAndFocus=function closeAndFocus(){var t=this.player_.controlBar.subtitlesMenuButton;t.menu.unlockShowing(),t.el().focus(),t.el().classList.remove("selected")},e.handleKeyPress=function handleKeyPress(e){27===e.keyCode||9===e.keyCode?(this.closeAndFocus(),e.preventDefault(),e.stopPropagation()):t.prototype.handleKeyPress.call(this,e)},e.handleClick=function handleClick(){t.prototype.handleClick.call(this),this.player_.trigger("subtitleschange"),"subtitles-off"===this.id_?(this.player_.controlBar.subtitlesMenuButton.menu.hideSubtitleOffItem(),this.closeAndFocus()):this.player_.controlBar.subtitlesMenuButton.menu.showSubtitleOffItem()},SubtitlesMenuItem}(i.a.getComponent("TextTrackMenuItem"));i.a.registerComponent("SubtitlesMenuItem",c)},ej64:function(module,exports,t){var e,n,a,o;a=window,o=function(t,e,n){var a=function template(t){var e=[],n;return e.push('<span class="cif-stack cif-2x"><em class="cif-circle cif-stack-2x cif-inverse"></em><em class="cif-play-circle cif-stack-2x"></em></span>'),e.join("")};return function(t){return t&&"_t"in t&&(e=t._t.merge(e)),a(t)}},e=[t("xgPa"),t("Y22C")],void 0===(n=function(t,e){var n;return o(t,e,n)}.apply(exports,e))||(module.exports=n)},iuOe:function(module,exports,t){var e=t("BQhx"),n=e.default?e.default:{},a,o=(0,t("HdzH").default)(n);o.getLocale=function(){return"en"},module.exports=o},nPCH:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},oS9v:function(module,exports,t){var e=t("Rmay"),n;"string"==typeof e&&(e=[[module.i,e,""]]);var a={transform:void 0},o=t("aET+")(e,a);e.locals&&(module.exports=e.locals)},p65z:function(module,t,e){"use strict";var n=e("PJYZ"),a=e.n(n),o=e("VbXa"),i=e.n(o),s=e("oYk5"),l=e.n(s),u=e("PTN7"),r=e.n(u),c=e("2UcY"),d=e.n(c),p=9,f=13,h=32,b=function(t){function AutoplayMenuSection(e,n){var o;return o=t.call(this,e,n)||this,l()(o.el_).find('[data-js="autoplay-off-button"]').click(o.onAutoplayOff.bind(a()(o))),l()(o.el_).find('[data-js="autoplay-on-button"]').click(o.onAutoplayOn.bind(a()(o))),l()(o.el_).find('[data-js="autoplay-on-button"]').keydown(function(t){o.handleKeyPress(t)}),o.one(e,"ready",function(){e.autoplay()?l()(this.el_).find('[data-js="autoplay-on-button"]').addClass("selected").attr("aria-label","Autoplay On Selected"):l()(this.el_).find('[data-js="autoplay-off-button"]').addClass("selected").attr("aria-label","Autoplay Off Selected")}),o}i()(AutoplayMenuSection,t);var e=AutoplayMenuSection.prototype;return e.createEl=function createEl(t,e){return l()(d()())[0]},e.onAutoplayOff=function onAutoplayOff(t,e){l()(this.el_).find('[data-js="autoplay-off-button"]').addClass("selected").attr("aria-selected","true").attr("aria-label","Autoplay Off Selected"),l()(this.el_).find('[data-js="autoplay-on-button"]').removeClass("selected").attr("aria-selected","false").attr("aria-label","Autoplay On"),this.player_.autoplay(!1),this.player_.trigger("autoplaychange")},e.onAutoplayOn=function onAutoplayOn(t,e){l()(this.el_).find('[data-js="autoplay-off-button"]').removeClass("selected").attr("aria-selected","false").attr("aria-label","Autoplay Off"),l()(this.el_).find('[data-js="autoplay-on-button"]').addClass("selected").attr("aria-selected","true").attr("aria-label","Autoplay On Selected"),this.player_.autoplay(!0),this.player_.trigger("autoplaychange")},e.closeAndFocus=function closeAndFocus(){var t=this.player_.controlBar.settingsMenuButton;t.menu.unlockShowing(),t.el().focus(),t.el().classList.remove("selected")},e.handleKeyPress=function handleKeyPress(e){var n=l()(this.el).find("[data-js=autoplay-on-button]")[0];9!==e.keyCode||e.shiftKey||document.activeElement!==n?13===e.keyCode||32===e.keyCode?this.onAutoplayOn.bind(this):t.prototype.handleKeyPress.call(this,e):(this.closeAndFocus(),e.stopPropagation())},AutoplayMenuSection}(r.a.getComponent("MenuItem"));r.a.registerComponent("AutoplayMenuSection",b)},q6B5:function(module,t,e){"use strict";var n=e("PJYZ"),a=e.n(n),o=e("VbXa"),i=e.n(o),s=e("HwIc"),l=e.n(s),u=e("PTN7"),r=e.n(u),c=e("iuOe"),d=e.n(c),p=e("oYk5"),f=e.n(p),h=e("JAA1"),b=function(t){function ResolutionMenuSection(e,n){var o;return(o=t.call(this,e,n)||this).options_={name:"resolutionMenuSection"},o.resolutionNames_={"360p":d()("Low"),"540p":d()("Medium"),"720p":d()("High")},e.on("resolutionchange",o.updateResolutionText.bind(a()(o))),o.one(e,"ready",function(){f()(this.el_).find('[data-js="decrease-resolution-button"]').click(e.decreaseResolution.bind(e)),f()(this.el_).find('[data-js="increase-resolution-button"]').click(e.increaseResolution.bind(e)),this.updateResolutionText()}),o}i()(ResolutionMenuSection,t);var e=ResolutionMenuSection.prototype;return e.createEl=function createEl(t,e){return f()(l()())[0]},e.updateResolutionText=function updateResolutionText(){var t=this.player_.resolution(),e=this.resolutionNames_[t]||t;f()(this.el_).find('[data-js="resolution-text"]').text(e)},ResolutionMenuSection}(r.a.getComponent("MenuItem"));r.a.registerComponent("ResolutionMenuSection",b)},rQOG:function(module,t,e){"use strict";var n=e("PJYZ"),a=e.n(n),o=e("VbXa"),i=e.n(o),s=e("oYk5"),l=e.n(s),u=e("PTN7"),r=e.n(u),c=e("u5HK"),d=e.n(c),p=e("yVbM"),f="vjs-highlighted",h=function(t){function CFullscreenToggle(e,n){var o;o=t.call(this,e,n)||this;var i=d()("Full Screen");return o.el_.innerHTML='<span class="cif-2x cif-fw cif-expand"></span>',o.el_.innerHTML+='<span class="vjs-control-text">'.concat(i,"</span>"),o.el_.setAttribute("aria-label",i),e.on("fullscreenchange",o.changeIcon.bind(a()(o))),o}i()(CFullscreenToggle,t);var e=CFullscreenToggle.prototype;return e.createEl=function createEl(){var e=t.prototype.createEl.call(this),n=l()(e);return n.attr("data-js","c-fullscreen-control"),n.removeAttr("title"),n.addClass("c-vjs-button c-video-control c-fullscreen-control"),e},e.handleKeyPress=function handleKeyPress(t){var e=this.player_.controlBar.settingsMenuButton.menu;(t.keyCode===p.e||t.keyCode===p.c||t.shiftKey&&t.keyCode===p.e)&&(l()(e.contentEl_).find("button").removeClass(f),e.unlockShowing())},e.changeIcon=function changeIcon(){var t=l()(this.el_).find("span.cif-fw");this.player_.isFullscreen()?(t.removeClass("cif-expand"),t.addClass("cif-compress")):(t.removeClass("cif-compress"),t.addClass("cif-expand"))},CFullscreenToggle}(r.a.getComponent("FullscreenToggle"));r.a.registerComponent("CFullscreenToggle",h)},t9gw:function(module,t,e){"use strict";var n=e("PTN7"),a=e.n(n),o=e("yiR1"),i=e.n(o),s=5e3,l=function Heartbeat(t,e,n){var a=function startHeartbeat(){this.interval&&window.clearInterval(this.interval),this.interval=window.setInterval(n,parseInt(e,10))};t.on("playing",a.bind(this)),t.on("pause",function(){window.clearInterval(this.interval)}.bind(this)),t.on("dispose",function(){window.clearInterval(this.interval)}.bind(this))};a.a.registerPlugin("setupHeartbeatListener",function(){var t=this,e=[];t.emitter||(t.emitter=i.a.emitter()),t.emitter.on("emitter.listener",function(n,a){var o,i;if(i=(o=/^heartbeat(:(\d+))?$/).exec(n)){var s=i[2]||5e3;e.push(new l(t,s,a))}})})},tioU:function(module,exports,t){var e=t("nPCH"),n=e.default?e.default:{},a,o=(0,t("HdzH").default)(n);o.getLocale=function(){return"en"},module.exports=o},uVoQ:function(module,exports){exports.default={}},uvZC:function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),o=e("PTN7"),i=e.n(o),s=e("oYk5"),l=e.n(s),u=function(t){function CMuteToggle(e,n){var a,o=(a=t.call(this,e,n)||this).player_.volume(),i;return a.removeClass("vjs-mute-control"),a.addClass("c-vjs-button"),0===o||a.player_.muted()?(a.el_.innerHTML='<span class="cif-2x cif-fw cif-volume-off"></span>',i=!0):o<.33?(a.el_.innerHTML='<span class="cif-2x cif-fw cif-volume-down"></span>',i=!1):(a.el_.innerHTML='<span class="cif-2x cif-fw cif-volume-up"></span>',i=!1),a.eventBusEl_.setAttribute("aria-pressed",i),a.eventBusEl_.removeAttribute("aria-disabled"),a}var e;return a()(CMuteToggle,t),CMuteToggle.prototype.updateIcon_=function updateIcon_(){var t=this.player_.volume(),e=l()(this.el_).find("span.cif-fw"),n=l()(this.el_);0===t||this.player_.muted()?(e.removeClass("cif-volume-up"),e.removeClass("cif-volume-down"),e.addClass("cif-volume-off"),n.attr("aria-pressed",!0)):t<.33?(e.removeClass("cif-volume-up"),e.removeClass("cif-volume-off"),e.addClass("cif-volume-down"),n.attr("aria-pressed",!1)):(e.removeClass("cif-volume-down"),e.removeClass("cif-volume-off"),e.addClass("cif-volume-up"),n.attr("aria-pressed",!1))},CMuteToggle}(i.a.getComponent("MuteToggle"));i.a.registerComponent("CMuteToggle",u)},wfto:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},xbf0:function(module,t,e){"use strict";var n=e("VbXa"),a=e.n(n),o=e("ej64"),i=e.n(o),s=e("PTN7"),l=e.n(s),u=e("oS9v"),r=e.n(u),c=13,d=32,p=function(t){function CirclePlayButton(){return t.apply(this,arguments)||this}a()(CirclePlayButton,t);var e=CirclePlayButton.prototype;return e.handleClick=function handleClick(){this.hide(),this.player_.play()},e.createEl=function createEl(){var t;return l.a.getComponent("ClickableComponent").prototype.createEl.call(this,"div",{className:"vjs-circle-play-button",innerHTML:i()()},{"aria-label":"play video"})},e.handleKeyPress=function handleKeyPress(t){13!==t.keyCode&&32!==t.keyCode||(this.hide(),this.player_.play(),t.preventDefault(),t.stopPropagation())},CirclePlayButton}(l.a.getComponent("BigPlayButton"));l.a.registerComponent("CirclePlayButton",p)},yVbM:function(module,t,e){"use strict";e.d(t,"f",function(){return n}),e.d(t,"a",function(){return a}),e.d(t,"e",function(){return o}),e.d(t,"b",function(){return i}),e.d(t,"d",function(){return s}),e.d(t,"c",function(){return l});var n=38,a=40,o=9,i=13,s=32,l=27}}]);
//# sourceMappingURL=en.77.984008128a4c83b54d62.js.map