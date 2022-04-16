(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d911efe2","chunk-69784886","chunk-2732a37d","chunk-cce36536"],{"0f64":function(t,e,n){"use strict";n("b0cc")},2638:function(t,e,n){"use strict";function o(){return o=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var o in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},o.apply(this,arguments)}var s=["attrs","props","domProps"],l=["class","style","directives"],a=["on","nativeOn"],i=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==s.indexOf(n))t[n]=o({},t[n],e[n]);else if(-1!==l.indexOf(n)){var i=t[n]instanceof Array?t[n]:[t[n]],c=e[n]instanceof Array?e[n]:[e[n]];t[n]=i.concat(c)}else if(-1!==a.indexOf(n))for(var d in e[n])if(t[n][d]){var u=t[n][d]instanceof Array?t[n][d]:[t[n][d]],f=e[n][d]instanceof Array?e[n][d]:[e[n][d]];t[n][d]=u.concat(f)}else t[n][d]=e[n][d];else if("hook"==n)for(var h in e[n])t[n][h]=t[n][h]?r(t[n][h],e[n][h]):e[n][h];else t[n]=e[n];else t[n]=e[n];return t}),{})},r=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=i},4e3:function(t,e,n){"use strict";n("6186")},6186:function(t,e,n){},"656f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-demo-container"},[n("h4",[t._v("1. 使用案例")]),n("div",{staticClass:"vue-demo-wrapper"},[n("Comzzsi41eal21iz3mdDemo0"),t._m(0)],1),n("h3",[t._v("API")]),t._m(1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-demo-highlight"},[n("div",{staticClass:"vue-demo-highlight-content"},[n("pre",[n("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <virtual-scroll-milestone-table\n    :data="milestoneData"\n    :contentHeight="300"\n    title="相关药物"\n  >\n    <div slot="contentSlot" slot-scope="{ record }" class="content-slot">\n      <template v-if="record.event">\n        <i\n          :class="[\n            \'dot\',\n            { research: record.event.status == \'在研\' ? true : false },\n          ]"\n        ></i>\n        <div class="text-content">\n          <p v-text="record.event.title"></p>\n          <p>\n            <span v-text="record.event.label"></span>\n            <span>({{ record.event.phase }})</span>\n          </p>\n        </div>\n      </template>\n    </div>\n    <div slot="footSlot" class="footSlot">\n      <ul>\n        <li>\n          <i class="dot approved"></i>\n          <span>上市</span>\n        </li>\n        <li>\n          <i class="dot research"></i>\n          <span>在研</span>\n        </li>\n      </ul>\n    </div>\n  </virtual-scroll-milestone-table>\n</template>\n\n<script>\nimport VirtualScrollMilestoneTable from "@/packages/virtual-scroll-milestone-table";\nexport default {\n  name: "ListView",\n  computed: {},\n  mounted() {\n    let data = [];\n    for (let row = 0; row < 400; row++) {\n      let rowData = [];\n      for (let col = 10; col < 50; col++) {\n        rowData.push({\n          date: `19` + col,\n          event: {\n            label: "HRA PHARMA",\n            phase: "批准上市",\n            status: col % 3 === 0 ? "批准上市" : "在研",\n            title: "米托坦",\n          },\n        });\n      }\n      data.push(rowData);\n    }\n    this.milestoneData = data;\n    // console.log("this.milestoneData:", this.milestoneData);\n  },\n  data() {\n    return {\n      milestoneData: [],\n    };\n  },\n  components: {\n    VirtualScrollMilestoneTable,\n  },\n  methods: {},\n};\n<\/script>\n\n<style lang="less" scoped>\n.dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: red;\n  border-radius: 50%;\n  margin-right: 8px;\n  margin-top: 4px;\n  flex-shrink: 0;\n}\n.approved {\n  background: red !important;\n}\n.research {\n  background: #34b800 !important;\n}\n.content-slot {\n  display: flex;\n  align-items: flex-start;\n  padding-top: 20px;\n  p {\n    margin-bottom: 0;\n    margin-top: 0;\n    font-size: 14px;\n    font-weight: 400;\n    color: #333333;\n    line-height: 20px;\n  }\n}\n.footSlot {\n  li:first-child {\n    margin-right: 140px;\n  }\n  li {\n    display: flex;\n    align-items: center;\n    span {\n      font-size: 16px;\n      font-weight: 400;\n      color: #333333;\n      line-height: 12px;\n    }\n  }\n}\n</style>\n')])])]),n("div",{staticClass:"code-folder"},[t._v("显示代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),n("th",[t._v("说明")]),n("th",[t._v("类型")]),n("th",[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("data")]),n("td",[t._v("渲染数据")]),n("td",[n("code",[t._v("Array<Array> ")])]),n("td",[n("code",[t._v("[[]]")]),t._v(" 格式： "),n("code",[t._v("[[{date:xxx,event:{}}]]")])])]),n("tr",[n("td",[t._v("tdHeight")]),n("td",[t._v("每个格子的高度")]),n("td",[t._v("Number")]),n("td",[t._v("80 "),n("code",[t._v("px")])])]),n("tr",[n("td",[t._v("tdWidth")]),n("td",[t._v("每个格子的宽度")]),n("td",[t._v("Number")]),n("td",[t._v("230 "),n("code",[t._v("px")])])]),n("tr",[n("td",[t._v("contentHeight")]),n("td",[t._v("表格的高度")]),n("td",[t._v("Number")]),n("td",[t._v("300 "),n("code",[t._v("px")])])]),n("tr",[n("td",[t._v("noFullScreen")]),n("td",[t._v("没有放大功能")]),n("td",[t._v("Boolean")]),n("td",[t._v("false")])]),n("tr",[n("td",[t._v("fullScreenTitle")]),n("td",[t._v("放大弹窗的title")]),n("td",[t._v("String")]),n("td",[t._v("相关药物")])])])])}],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("virtual-scroll-milestone-table",{attrs:{data:t.milestoneData,contentHeight:300,title:"相关药物"},scopedSlots:t._u([{key:"contentSlot",fn:function(e){var o=e.record;return n("div",{staticClass:"content-slot"},[o.event?[n("i",{class:["dot",{research:"在研"==o.event.status}]}),n("div",{staticClass:"text-content"},[n("p",{domProps:{textContent:t._s(o.event.title)}}),n("p",[n("span",{domProps:{textContent:t._s(o.event.label)}}),n("span",[t._v("("+t._s(o.event.phase)+")")])])])]:t._e()],2)}}])},[n("div",{staticClass:"footSlot",attrs:{slot:"footSlot"},slot:"footSlot"},[n("ul",[n("li",[n("i",{staticClass:"dot approved"}),n("span",[t._v("上市")])]),n("li",[n("i",{staticClass:"dot research"}),n("span",[t._v("在研")])])])])])},a=[],i=n("6fc0"),r={name:"ListView",computed:{},mounted:function(){for(var t=[],e=0;e<400;e++){for(var n=[],o=10;o<50;o++)n.push({date:"19"+o,event:{label:"HRA PHARMA",phase:"批准上市",status:o%3===0?"批准上市":"在研",title:"米托坦"}});t.push(n)}this.milestoneData=t},data:function(){return{milestoneData:[]}},components:{VirtualScrollMilestoneTable:i["default"]},methods:{}},c=r,d=(n("4000"),n("2877")),u=Object(d["a"])(c,l,a,!1,null,"033e7256",null),f=u.exports,h={name:"ComponentDoc",components:{Comzzsi41eal21iz3mdDemo0:f}},v=h,p=Object(d["a"])(v,o,s,!1,null,null,null);e["default"]=p.exports},"6fc0":function(t,e,n){"use strict";n.r(e);n("b0c0");var o=n("8be6");o["default"].install=function(t){t.component(o["default"].name,o["default"])},e["default"]=o["default"]},"8be6":function(t,e,n){"use strict";n.r(e);var o=n("2638"),s=n.n(o),l=n("5530"),a=(n("a9e3"),n("fa9a")),i=n("eb23");e["default"]={data:function(){return{scrollData:{top:0,left:0},calContentHeight:300}},props:{data:{type:Array,default:function(){return[]}},tdHeight:{type:Number,default:80},tdWidth:{type:Number,default:230},contentHeight:{type:Number,default:300},noFullScreen:{type:Boolean,default:!1},fullScreenTitle:{type:String,default:"相关药物"}},components:{MilestoneTable:a["default"],Magnify:i["default"]},mounted:function(){var t=this;window.addEventListener("resize",this.calContentHeightResolve),this.$once("hook:beforeDestroy",(function(){document.removeEventListener("resize",t.calContentHeightResolve)}))},methods:{fullscreen:function(){var t=this;this.$refs.magnifyRef.show(),this.$nextTick((function(){t.calContentHeightResolve()}))},scrollResolve:function(t){this.scrollData=t},calContentHeightResolve:function(){try{var t=this.$refs.magnifyRef.$el,e=t.querySelector(".s-magnify-content"),n=t.querySelector(".s-magnify-header"),o=e.getBoundingClientRect().height-n.getBoundingClientRect().height;this.calContentHeight=o-120}catch(s){}},onClose:function(t){this.$refs.milestoneTableSmallRef.bodyScrollBarScrollInit()}},render:function(){var t=arguments[0];return t("div",[t(a["default"],s()([{},{props:Object(l["a"])(Object(l["a"])({},this.$props),{},{contentHeight:this.contentHeight,noFullscreen:this.noFullScreen}),scopedSlots:Object(l["a"])({},this.$scopedSlots)},{attrs:{scrollData:this.scrollData},on:{fullscreen:this.fullscreen,scroll:this.scrollResolve},ref:"milestoneTableSmallRef"}])),t(i["default"],{attrs:{title:this.fullScreenTitle},ref:"magnifyRef",on:{close:this.onClose}},[t(a["default"],s()([{},{props:Object(l["a"])(Object(l["a"])({},this.$props),{},{contentHeight:this.calContentHeight,noFullscreen:!0}),scopedSlots:Object(l["a"])({},this.$scopedSlots)},{attrs:{scrollData:this.scrollData},on:{scroll:this.scrollResolve}}]))])])}}},b0cc:function(t,e,n){},eb23:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showState?n("div",{staticClass:"s-magnify"},[n("div",{staticClass:"s-magnify-content"},[n("div",{staticClass:"s-magnify-header"},[n("span",{staticClass:"title"},[t._v(t._s(t.title))]),n("div",{staticClass:"close"},[n("i",{staticClass:"iconfont cl-icon-close",on:{click:t.close}})])]),n("div",{staticClass:"s-magnify-slot"},[t._t("default")],2)])]):t._e()},s=[],l={name:"Magnify",props:{title:{type:String}},data:function(){return{showState:!1}},components:{},watch:{showState:{immediate:!0,handler:function(t){this.showState?document.body.style.overflow="hidden":document.body.style.overflow=""}}},computed:{},created:function(){},mounted:function(){var t=this;document.addEventListener("keydown",this.keyCodeResolve),this.$once("hook:beforeDestroy",(function(){document.removeEventListener("keydown",t.keyCodeResolve)}))},beforeDestroy:function(){document.body.style.overflow=""},methods:{close:function(){this.showState=!1,this.$emit("close",!0)},show:function(){this.showState=!0},keyCodeResolve:function(t){27==t.keyCode&&this.close()}}},a=l,i=(n("0f64"),n("2877")),r=Object(i["a"])(a,o,s,!1,null,"a13f6e54",null);e["default"]=r.exports}}]);