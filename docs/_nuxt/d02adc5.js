(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{285:function(t,e,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(60).default)("54d0cfa8",content,!0,{sourceMap:!1})},291:function(t,e,o){"use strict";o(285)},292:function(t,e,o){var n=o(59)(!1);n.push([t.i,".blog-id-page .hero-section{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;min-height:480px;background-size:cover;background-position:50%;display:flex;justify-content:center;align-items:flex-end;position:relative;width:100vw;left:calc(-50vw - -50%)}.blog-id-page .hero-section .blog-title{padding:0 20px;margin:50px 0 20px;width:100%;text-align:center;color:#fff;background-color:rgba(0,0,0,.6);font-size:36px}.blog-id-page .desc-container{margin-top:50px}.blog-id-page .desc-container .blog-desc{font-size:1.2em;line-height:1.9}",""]),t.exports=n},296:function(t,e,o){"use strict";o.r(e);o(27),o(23),o(34),o(47),o(26),o(48);var n=o(18),r=o(45);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={middleware:["authenticated"],computed:l(l({},Object(r.b)({blog:"blogs/blog"})),{},{blogId:function(){var t;return(null===(t=this.$route.params)||void 0===t?void 0:t.id)||""},fields:function(){var t;return(null===(t=this.blog)||void 0===t?void 0:t.fields)||{}}}),created:function(){this.getBlog()},methods:{getBlog:function(){this.$store.dispatch("blogs/getBlog",this.blogId)}}},f=(o(291),o(25)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog-id-page"},[o("div",{staticClass:"hero-section",style:{backgroundImage:"url("+t.fields.url+")"}},[o("h1",{staticClass:"blog-title"},[t._v(t._s(t.fields.title))])]),t._v(" "),o("div",{staticClass:"desc-container"},[o("p",{staticClass:"blog-desc"},[t._v(t._s(t.fields.body))])])])}),[],!1,null,null,null);e.default=component.exports}}]);