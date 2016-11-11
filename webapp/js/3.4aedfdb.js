webpackJsonp([3],{17:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(30),r=i(o);e["default"]=r["default"]},19:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={methods:{goDetail:function(t,e){this.setScrollPosition(),this.$route.router.go("/detail/"+t),this.setDetailValue({owner:t.split("/")[0],repo:t.split("/")[1],backUrl:this.$route.path,readmeUrl:e})},setScrollPosition:function(){var t=this.$route.path;switch(t){case"/trending":this.$dispatch("setTrendingScrollPosition");break;case"/search":this.$dispatch("setSearchScrollPosition");break;case"/stars":this.$dispatch("setStarsScrollPosition")}},setDetailValue:function(t){this.$store.dispatch("setDetailValue",{detailValue:t})}},props:{list:{type:Array,required:!0}}}},26:function(t,e,s){e=t.exports=s(1)(),e.push([t.id,".card-title[_v-7be98b7c]{color:#7569b2;font-size:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card-action[_v-7be98b7c]{display:-ms-flexbox;display:flex}.card-action>div[_v-7be98b7c]{margin-right:10px}.card-action>div[_v-7be98b7c],.card-content>div[_v-7be98b7c]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.star-item i[_v-7be98b7c]{color:#ffeb3b}.increasing-item[_v-7be98b7c]{color:#4caf50}img[_v-7be98b7c]{width:30px;height:30px;border-radius:15px;margin-right:10px}.item-transition[_v-7be98b7c]{transition:all .5s ease}.item-enter[_v-7be98b7c],.item-leave[_v-7be98b7c]{transform:scale(.1)}",""])},29:function(t,e){t.exports='<div id=list-items _v-7be98b7c=""> <div class=card v-for="item in list" transition=item v-touch:tap="goDetail(item.name, item.readme)" _v-7be98b7c=""> <div class=card-content _v-7be98b7c=""> <div _v-7be98b7c=""> <img :lazy-img=item.icon _v-7be98b7c=""> <span class=card-title _v-7be98b7c=""> {{ item.name }} </span> </div> <p _v-7be98b7c=""> {{ item.desc }} </p> </div> <div class=card-action _v-7be98b7c=""> <div class=code-item _v-7be98b7c=""> <i class=material-icons _v-7be98b7c="">code</i> <span _v-7be98b7c="">{{ item.language }}</span> </div> <div class=star-item _v-7be98b7c=""> <i class=material-icons _v-7be98b7c="">star</i> <span _v-7be98b7c="">{{ item.stars_count }}</span> </div> <div class=increasing-item v-if="item.stars_increasing >= 0" _v-7be98b7c=""> <span _v-7be98b7c="">{{ item.stars_increasing }} stars today</span> </div> </div> </div> </div>'},30:function(t,e,s){var i,o;s(31),i=s(19),o=s(29),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},31:function(t,e,s){var i=s(26);"string"==typeof i&&(i=[[t.id,i,""]]);s(2)(i,{});i.locals&&(t.exports=i.locals)},46:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(82),r=i(o);e["default"]=r["default"]},53:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{searchMsg:"",isShowInput:!1,fontSize:"0",inputStyle:{width:"0"},searchIconStyle:{color:"#fff",background:"#7569B2"}}},methods:{showInput:function(){var t=this.isShowInput?window.screen.availWidth+"px":"0",e=this.isShowInput?"#7569B2":"#fff",s=this.isShowInput?"#fff":"#7569B2",i=this.isShowInput?"24px":"0";this.inputStyle={width:t},this.searchIconStyle={color:e,background:s},this.fontSize=i,this.isShowInput=!this.isShowInput},execSearch:function(){this.$dispatch("searchResult",this.searchMsg)}}}},71:function(t,e,s){e=t.exports=s(1)(),e.push([t.id,"header[_v-678eb0c8]{height:44px;display:-ms-flexbox;display:flex;position:absolute;z-index:1111;top:0;left:0;width:100%}.search-btn[_v-678eb0c8]{width:50px;background:#7569b2;color:#fff;-ms-flex-pack:center;justify-content:center;position:fixed;z-index:1;left:5px;top:5px}.input-msg[_v-678eb0c8],.search-btn[_v-678eb0c8]{height:50px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-radius:25px}.input-msg[_v-678eb0c8]{background:#fff;margin-top:5px;margin-left:20px;margin-right:10px;width:290px;transition:all .3s ease}.input-msg input[_v-678eb0c8]{height:35px;border-bottom:0;margin-bottom:0;margin-left:37px;margin-right:10px}.input-msg i[_v-678eb0c8]{margin-right:5%;color:#7569b2}.input-msg input[type=text][_v-678eb0c8]:focus{border-bottom-color:#7569b2;box-shadow:0 1px 0 0 #7569b2}",""])},77:function(t,e){t.exports='<header _v-678eb0c8=""> <div class="search-btn z-depth-1" v-touch:tap=showInput :style=searchIconStyle _v-678eb0c8=""> <i class=material-icons _v-678eb0c8="">search</i> </div> <div class="input-msg z-depth-1" :style=inputStyle _v-678eb0c8=""> <input type=text :placeholder="$t(\'words.search\')" @keyup.enter=execSearch v-model=searchMsg _v-678eb0c8=""> <i class=material-icons :style="{ \'font-size\': fontSize }" v-touch:tap=execSearch _v-678eb0c8="">done</i> </div> </header>'},82:function(t,e,s){var i,o;s(88),i=s(53),o=s(77),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},88:function(t,e,s){var i=s(71);"string"==typeof i&&(i=[[t.id,i,""]]);s(2)(i,{});i.locals&&(t.exports=i.locals)},116:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(244),r=i(o);e["default"]=r["default"]},155:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(9);e["default"]={data:function(){return{thirdLink:(0,i.signin)()}}}},163:function(t,e,s){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(116),r=i(o),n=s(46),a=i(n),c=s(17),l=i(c),d=s(18),p=i(d);e["default"]={data:function(){return{shouldLogin:!1,isScroll:!0,notFoundMsg:"no result found."}},route:{data:function(t){var e=t.from;this.$dispatch("footerChangeStateCtrl","/stars"),/(detail)/g.test(e.path)&&this.initScrollPosition()}},ready:function(){this.shouldLogin=!1,0===this.starsList.length&&this.getStarsList()},computed:{starsList:function(){return this.$store.getters.getStarsList},starsLoadmoreIndex:function(){return this.$store.getters.getStarsLoadmoreIndex},starsScrollPosition:function(){return this.$store.getters.getStarsScrollPosition},isLoad:function(){return this.$store.getters.getLoad}},methods:{setStarsList:function(t,e){return this.$store.dispatch("setStarsList",{params:t,isFirst:e})},setLoad:function(t){this.$store.dispatch("setLoad",{isLoad:t})},setStarsCacheKeywords:function(t){this.$store.dispatch("setStarsCacheKeywords",{keywords:t})},setStarsLoadmoreIndex:function(t){this.$store.dispatch("setStarsLoadmoreIndex",{index:t})},setStarsScrollPosition:function(t){this.$store.dispatch("setStarsScrollPosition",{position:t})},initScrollPosition:function(){var t=this,e=this.$el.querySelector(".list-content");if(e)var s=setTimeout(function(){e.scrollTop=t.starsScrollPosition,clearTimeout(s)},100)},getStarsList:function(){var t=this;this.setLoad(!0),this.setStarsList({}).then(function(){t.setLoad(!1),t.setStarsCacheKeywords("")})["catch"](function(){t.setLoad(!1),t.shouldLogin=!0})},scrollHandler:function(){var t=this;if(this.isScroll&&!this.shouldLogin&&0!==this.starsList.length){var e=window.screen.availHeight,s=this.$el.querySelector(".list-content").scrollTop,i=this.$el.querySelector("#list-items").offsetHeight;if(e+s>=i-500){this.isScroll=!1,this.$progress.start(3e3);var o=this.starsLoadmoreIndex+1;this.setStarsLoadmoreIndex(o),this.setStarsList({q:this.cacheKeywords,page:this.starsLoadmoreIndex,per_page:25},!1).then(function(){t.isScroll=!0,t.$progress.finish()})["catch"](function(){t.$progress.fail()})}}}},events:{searchResult:function(t){var e=this;this.setLoad(!0),this.setStarsList({q:t,page:1,per_page:25}).then(function(){e.$el.querySelector(".list-content")&&(e.$el.querySelector(".list-content").scrollTop=0),e.shouldLogin=!1,e.setLoad(!1),e.setStarsLoadmoreIndex(1),e.setStarsCacheKeywords(t)})},setStarsScrollPosition:function(){var t=this.$el.querySelector(".list-content").scrollTop;this.setStarsScrollPosition(t)}},components:{Login:r["default"],SearchHeader:a["default"],ListItems:l["default"],NotFound:p["default"]}}},203:function(t,e,s){e=t.exports=s(1)(),e.push([t.id,".list-content[_v-0bf34b6f]{padding:20px 0;overflow-y:scroll;width:100%;height:100%;position:absolute;-webkit-overflow-scrolling:touch}",""])},214:function(t,e,s){e=t.exports=s(1)(),e.push([t.id,"#login[_v-ec886860]{color:#7569b2;margin:100px auto;text-align:center}.btn[_v-ec886860]{margin-top:20px;background:#7569b2}",""])},223:function(t,e){t.exports='<div id=stars-panel _v-0bf34b6f=""> <login v-if=shouldLogin _v-0bf34b6f=""></login> <div class=star-panel v-else="" _v-0bf34b6f=""> <search-header _v-0bf34b6f=""></search-header> <div class=list-content @scroll=scrollHandler v-lazy="" _v-0bf34b6f=""> <list-items :list=starsList v-show="starsList.length !== 0" _v-0bf34b6f=""></list-items> </div> <not-found type=noResult v-show="starsList.length === 0 &amp;&amp; !isLoad" _v-0bf34b6f=""></not-found> </div> </div>'},234:function(t,e){t.exports='<div id=login _v-ec886860=""> <i class="material-icons large" _v-ec886860="">sentiment_dissatisfied</i> <h3 _v-ec886860="">{{ $t(\'words.oop\') }}</h3> <p _v-ec886860=""> <span _v-ec886860="">{{{ $t(\'messages.loginMsg\') }}}</span> </p> <a class="waves-effect waves-light btn" :href=thirdLink _v-ec886860=""> {{ $t(\'words.login\') }} </a> </div>'},244:function(t,e,s){var i,o;s(288),i=s(155),o=s(234),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},252:function(t,e,s){var i,o;s(277),i=s(163),o=s(223),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},277:function(t,e,s){var i=s(203);"string"==typeof i&&(i=[[t.id,i,""]]);s(2)(i,{});i.locals&&(t.exports=i.locals)},288:function(t,e,s){var i=s(214);"string"==typeof i&&(i=[[t.id,i,""]]);s(2)(i,{});i.locals&&(t.exports=i.locals)}});