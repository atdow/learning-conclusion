(window.webpackJsonp=window.webpackJsonp||[]).push([[55,61,71],{215:function(t,e,n){"use strict";n.r(e);var i=n(224);i.default.install=function(t){t.component(i.default.name,i.default)},e.default=i.default},224:function(t,e,n){"use strict";n.r(e);var i={name:"SProgress",props:{percent:{type:Number,default:0},direction:{type:String,default:"left",validator:function(t){return-1!==["left","right"].indexOf(t)}},strokeColor:{type:String,default:"green"},background:{type:String,default:"#ebeef5"},height:{type:Number,default:20},strokeRadius:{type:Boolean,default:!0},containerRadius:{type:Boolean,default:!0},minWidth:{type:Number,default:0},resizeDebounce:{type:Number,default:0}},data:()=>({progressContentWidth:"0%"}),components:{},watch:{percent:{immediate:!0,handler:function(){this.minWidth?this.calProgressHasMinWidthContentWidth():this.progressContentWidth=this.percent+"%"}}},computed:{},created(){},mounted(){this.minWidth&&(window.addEventListener("resize",this.calProgressHasMinWidthContentWidth,this.resizeDebounce),this.$once("hook:beforeDestroy",()=>{window.removeEventListener("resize",this.calProgressHasMinWidthContentWidth)}))},methods:{calProgressHasMinWidthContentWidth(){this.$nextTick(()=>{const{progressContainerRef:t}=this.$refs,e=t.getBoundingClientRect().width-this.minWidth||0;this.progressContentWidth=this.minWidth+this.percent/100*e+"px"})}},beforeDestroy(){}},r=(n(322),n(9)),s=Object(r.a)(i,(function(){var t=this,e=t._self._c;return t.percent,e("div",{ref:"progressContainerRef",staticClass:"s-progress",style:{width:"calc(100%)",height:t.height+"px",background:t.background,"line-height":t.height+"px","justify-content":"left"===t.direction?"flex-start":"flex-end","border-radius":!0===t.containerRadius?t.height/2+"px":"0px"}},[e("div",{staticClass:"s-progress-content",style:{background:t.strokeColor,width:t.progressContentWidth,"text-align":"right"===t.direction?"left":"right","border-radius":!0===t.strokeRadius?t.height/2+"px":"0px"}},[t.$slots.default?[e("div",{style:{"margin-right":"left"===t.direction?"10px":0,"margin-left":"right"===t.direction?"10px":0}},[t._t("default")],2)]:[e("div",{style:{"margin-right":"left"===t.direction?"10px":0,"margin-left":"right"===t.direction?"10px":0}},[t._v("\n        "+t._s(t.percent)+"%\n      ")])]],2)])}),[],!1,null,"0cf3d02d",null);e.default=s.exports},292:function(t,e,n){"use strict";n.r(e);var i={name:"Progress",props:{},data:()=>({}),components:{SProgress:n(215).default},watch:{},computed:{},created(){},mounted(){},beforeDestroy(){}},r=n(9),s=Object(r.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"progress"},[t("s-progress",{attrs:{percent:10,background:"rgb(232, 232, 232)",height:20,minWidth:50,direction:"left"}})],1)}),[],!1,null,"e31daea4",null);e.default=s.exports},305:function(t,e,n){var i=n(2),r=n(323);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1};i(r,s);t.exports=r.locals||{}},322:function(t,e,n){"use strict";n(305)},323:function(t,e,n){(e=n(3)(!1)).push([t.i,".s-progress[data-v-0cf3d02d] {\n  display: flex;\n  width: 100%;\n  font-size: 12px;\n  color: white;\n  overflow: hidden;\n  position: relative;\n}\n.s-progress-content[data-v-0cf3d02d] {\n  flex-shrink: 0;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n",""]),t.exports=e}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvcHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3Byb2dyZXNzL3NyYy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3Byb2dyZXNzL3NyYy9pbmRleC52dWU/ODcxMCIsIndlYnBhY2s6Ly8vc3JjL3BhY2thZ2VzL3Byb2dyZXNzL3NyYy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3Byb2dyZXNzL3NyYy9pbmRleC52dWU/NmI4NCIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9wcm9ncmVzcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vcHJvZ3Jlc3MudnVlPzJjNTUiLCJ3ZWJwYWNrOi8vL3NyYy9kZW1vL3Byb2dyZXNzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9wcm9ncmVzcy52dWU/ODQyYSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvcHJvZ3Jlc3Mvc3JjL2luZGV4LnZ1ZT82ZGE3Iiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy9wcm9ncmVzcy9zcmMvaW5kZXgudnVlP2U3ZGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3Byb2dyZXNzL3NyYy9pbmRleC52dWU/ZTQ5YSJdLCJuYW1lcyI6WyJQcm9ncmVzcyIsImluc3RhbGwiLCJWdWUiLCJjb21wb25lbnQiLCJuYW1lIiwicHJvcHMiLCJwZXJjZW50IiwidHlwZSIsIk51bWJlciIsImRlZmF1bHQiLCJkaXJlY3Rpb24iLCJTdHJpbmciLCJ2YWxpZGF0b3IiLCJ2YWx1ZSIsImluZGV4T2YiLCJzdHJva2VDb2xvciIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJzdHJva2VSYWRpdXMiLCJCb29sZWFuIiwiY29udGFpbmVyUmFkaXVzIiwibWluV2lkdGgiLCJyZXNpemVEZWJvdW5jZSIsImRhdGEiLCJwcm9ncmVzc0NvbnRlbnRXaWR0aCIsImNvbXBvbmVudHMiLCJ3YXRjaCIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJjYWxQcm9ncmVzc0hhc01pbldpZHRoQ29udGVudFdpZHRoIiwiY29tcHV0ZWQiLCJjcmVhdGVkIiwibW91bnRlZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCIkb25jZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZXRob2RzIiwiJG5leHRUaWNrIiwicHJvZ3Jlc3NDb250YWluZXJSZWYiLCIkcmVmcyIsInRvdGFsU3BsaXRXaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiYmVmb3JlRGVzdHJveSIsIl92bSIsInRoaXMiLCJfYyIsIl9zZWxmIiwicmVmIiwic3RhdGljQ2xhc3MiLCJzdHlsZSIsIiRzbG90cyIsIl90IiwiX3YiLCJfcyIsIlNQcm9ncmVzcyIsImF0dHJzIiwiYXBpIiwiY29udGVudCIsIl9fZXNNb2R1bGUiLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImV4cG9ydHMiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iLCJwdXNoIl0sIm1hcHBpbmdzIjoiaUdBQUEsb0JBU0FBLFVBQVNDLFFBQVUsU0FBU0MsR0FDMUJBLEVBQUlDLFVBQVVILFVBQVNJLEtBQU1KLFlBR2hCQSxZQUFRLFMsd0NDYnZCLElDQStNLEVDdURoTSxDQUNmSSxLQUFBLFlBQ0FDLE1BQUEsQ0FDQUMsUUFBQSxDQUNBQyxLQUFBQyxPQUNBQyxRQUFBLEdBRUFDLFVBQUEsQ0FDQUgsS0FBQUksT0FDQUYsUUFBQSxPQUNBRyxVQUFBLFNBQUFDLEdBQ0EsNEJBQUFDLFFBQUFELEtBR0FFLFlBQUEsQ0FDQVIsS0FBQUksT0FDQUYsUUFBQSxTQUVBTyxXQUFBLENBQ0FULEtBQUFJLE9BQ0FGLFFBQUEsV0FFQVEsT0FBQSxDQUNBVixLQUFBQyxPQUNBQyxRQUFBLElBRUFTLGFBQUEsQ0FDQVgsS0FBQVksUUFDQVYsU0FBQSxHQUVBVyxnQkFBQSxDQUNBYixLQUFBWSxRQUNBVixTQUFBLEdBRUFZLFNB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SUgsRUFBUyxNQUc5QyxJQUFJSSxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FFUEwsRUFBSUMsRUFBU0ksR0FJMUJGLEVBQU9HLFFBQVVMLEVBQVFNLFFBQVUsSSxpQ0NsQm5DLFEscUJDRUFELEVBRGtDLEVBQVEsRUFDaENFLEVBQTRCLElBRTlCQyxLQUFLLENBQUNOLEVBQU9DLEVBQUksdVFBQXdRLEtBRWpTRCxFQUFPRyxRQUFVQSIsImZpbGUiOiJqcy81NS5kOGJkOWU3MzQ4ZGRkNmU5ZmRhMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiBhdGRvd1xuICogQERhdGU6IDIwMjItMDQtMTQgMjI6MTU6NDFcbiAqIEBMYXN0RWRpdG9yczogbnVsbFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wNC0xNCAyMjoxNjo1OVxuICogQERlc2NyaXB0aW9uOiBmaWxlIGRlc2NyaXB0aW9uXG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9zcmMvaW5kZXgnXG5Qcm9ncmVzcy5pbnN0YWxsID0gZnVuY3Rpb24oVnVlKSB7XG4gIFZ1ZS5jb21wb25lbnQoUHJvZ3Jlc3MubmFtZSwgUHJvZ3Jlc3MpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpe3ZhciBfdm09dGhpcyxfYz1fdm0uX3NlbGYuX2M7cmV0dXJuIChfdm0ucGVyY2VudCB8fCB0cnVlKT9fYygnZGl2Jyx7cmVmOlwicHJvZ3Jlc3NDb250YWluZXJSZWZcIixzdGF0aWNDbGFzczpcInMtcHJvZ3Jlc3NcIixzdHlsZTooe1xuICAgIHdpZHRoOiBgY2FsYygxMDAlKWAsXG4gICAgaGVpZ2h0OiBfdm0uaGVpZ2h0ICsgJ3B4JyxcbiAgICBiYWNrZ3JvdW5kOiBfdm0uYmFja2dyb3VuZCxcbiAgICAnbGluZS1oZWlnaHQnOiBfdm0uaGVpZ2h0ICsgJ3B4JyxcbiAgICAnanVzdGlmeS1jb250ZW50JzogX3ZtLmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ2ZsZXgtc3RhcnQnIDogJ2ZsZXgtZW5kJyxcbiAgICAnYm9yZGVyLXJhZGl1cyc6IF92bS5jb250YWluZXJSYWRpdXMgPT09IHRydWUgPyBgJHtfdm0uaGVpZ2h0IC8gMn1weGAgOiAnMHB4JyxcbiAgfSl9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJzLXByb2dyZXNzLWNvbnRlbnRcIixzdHlsZTooe1xuICAgICAgYmFja2dyb3VuZDogX3ZtLnN0cm9rZUNvbG9yLFxuICAgICAgd2lkdGg6IF92bS5wcm9ncmVzc0NvbnRlbnRXaWR0aCxcbiAgICAgICd0ZXh0LWFsaWduJzogX3ZtLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6IF92bS5zdHJva2VSYWRpdXMgPT09IHRydWUgPyBgJHtfdm0uaGVpZ2h0IC8gMn1weGAgOiAnMHB4JyxcbiAgICB9KX0sWyhfdm0uJHNsb3RzLmRlZmF1bHQpP1tfYygnZGl2Jyx7c3R5bGU6KHtcbiAgICAgICAgICAnbWFyZ2luLXJpZ2h0JzogX3ZtLmRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJzEwcHgnIDogMCxcbiAgICAgICAgICAnbWFyZ2luLWxlZnQnOiBfdm0uZGlyZWN0aW9uID09PSAncmlnaHQnID8gJzEwcHgnIDogMCxcbiAgICAgICAgfSl9LFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwyKV06W19jKCdkaXYnLHtzdHlsZTooe1xuICAgICAgICAgICdtYXJnaW4tcmlnaHQnOiBfdm0uZGlyZWN0aW9uID09PSAnbGVmdCcgPyAnMTBweCcgOiAwLFxuICAgICAgICAgICdtYXJnaW4tbGVmdCc6IF92bS5kaXJlY3Rpb24gPT09ICdyaWdodCcgPyAnMTBweCcgOiAwLFxuICAgICAgICB9KX0sW192bS5fdihcIlxcbiAgICAgICAgXCIrX3ZtLl9zKF92bS5wZXJjZW50KStcIiVcXG4gICAgICBcIildKV1dLDIpXSk6X3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCI8IS0tXG4gKiBAQXV0aG9yOiBhdGRvd1xuICogQERhdGU6IDIwMjItMDQtMTQgMjI6MTU6NTNcbiAqIEBMYXN0RWRpdG9yczogbnVsbFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wNC0xNiAwMToxOTowMFxuICogQERlc2NyaXB0aW9uOiBmaWxlIGRlc2NyaXB0aW9uXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIHYtaWY9XCJwZXJjZW50IHx8IHRydWVcIlxuICAgIGNsYXNzPVwicy1wcm9ncmVzc1wiXG4gICAgOnN0eWxlPVwie1xuICAgICAgd2lkdGg6IGBjYWxjKDEwMCUpYCxcbiAgICAgIGhlaWdodDogaGVpZ2h0ICsgJ3B4JyxcbiAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQsXG4gICAgICAnbGluZS1oZWlnaHQnOiBoZWlnaHQgKyAncHgnLFxuICAgICAgJ2p1c3RpZnktY29udGVudCc6IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ2ZsZXgtc3RhcnQnIDogJ2ZsZXgtZW5kJyxcbiAgICAgICdib3JkZXItcmFkaXVzJzogY29udGFpbmVyUmFkaXVzID09PSB0cnVlID8gYCR7aGVpZ2h0IC8gMn1weGAgOiAnMHB4JyxcbiAgICB9XCJcbiAgICByZWY9XCJwcm9ncmVzc0NvbnRhaW5lclJlZlwiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInMtcHJvZ3Jlc3MtY29udGVudFwiXG4gICAgICA6c3R5bGU9XCJ7XG4gICAgICAgIGJhY2tncm91bmQ6IHN0cm9rZUNvbG9yLFxuICAgICAgICB3aWR0aDogcHJvZ3Jlc3NDb250ZW50V2lkdGgsXG4gICAgICAgICd0ZXh0LWFsaWduJzogZGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBzdHJva2VSYWRpdXMgPT09IHRydWUgPyBgJHtoZWlnaHQgLyAyfXB4YCA6ICcwcHgnLFxuICAgICAgfVwiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCIkc2xvdHMuZGVmYXVsdFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgOnN0eWxlPVwie1xuICAgICAgICAgICAgJ21hcmdpbi1yaWdodCc6IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJzEwcHgnIDogMCxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyA/ICcxMHB4JyA6IDAsXG4gICAgICAgICAgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICA6c3R5bGU9XCJ7XG4gICAgICAgICAgICAnbWFyZ2luLXJpZ2h0JzogZGlyZWN0aW9uID09PSAnbGVmdCcgPyAnMTBweCcgOiAwLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzogZGlyZWN0aW9uID09PSAncmlnaHQnID8gJzEwcHgnIDogMCxcbiAgICAgICAgICB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHBlcmNlbnQgfX0lXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuwqBcbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdTUHJvZ3Jlc3MnLFxuICBwcm9wczoge1xuICAgIHBlcmNlbnQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBkaXJlY3Rpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsZWZ0JyxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzdHJva2VDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2dyZWVuJyxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcjZWJlZWY1JyxcbiAgICB9LFxuICAgIGhlaWdodDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMjAsXG4gICAgfSxcbiAgICBzdHJva2VSYWRpdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlLFxuICAgIH0sXG4gICAgY29udGFpbmVyUmFkaXVzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIG1pbldpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgcmVzaXplRGVib3VuY2U6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvZ3Jlc3NDb250ZW50V2lkdGg6ICcwJScsXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7fSxcbiAgd2F0Y2g6IHtcbiAgICBwZXJjZW50OiB7XG4gICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm1pbldpZHRoKSB7XG4gICAgICAgICAgdGhpcy5jYWxQcm9ncmVzc0hhc01pbldpZHRoQ29udGVudFdpZHRoKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQ29udGVudFdpZHRoID0gdGhpcy5wZXJjZW50ICsgJyUnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBjcmVhdGVkKCkge30sXG4gIG1vdW50ZWQoKSB7XG4gICAgaWYgKHRoaXMubWluV2lkdGgpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbFByb2dyZXNzSGFzTWluV2lkdGhDb250ZW50V2lkdGgsIHRoaXMucmVzaXplRGVib3VuY2UpXG4gICAgICB0aGlzLiRvbmNlKCdob29rOmJlZm9yZURlc3Ryb3knLCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmNhbFByb2dyZXNzSGFzTWluV2lkdGhDb250ZW50V2lkdGgpXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNhbFByb2dyZXNzSGFzTWluV2lkdGhDb250ZW50V2lkdGgoKSB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgcHJvZ3Jlc3NDb250YWluZXJSZWYgfSA9IHRoaXMuJHJlZnNcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NDb250YWluZXJXaWR0aCA9IHByb2dyZXNzQ29udGFpbmVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgICAgIGNvbnN0IHRvdGFsU3BsaXRXaWR0aCA9IHByb2dyZXNzQ29udGFpbmVyV2lkdGggLSB0aGlzLm1pbldpZHRoIHx8IDBcbiAgICAgICAgdGhpcy5wcm9ncmVzc0NvbnRlbnRXaWR0aCA9IHRoaXMubWluV2lkdGggKyAodGhpcy5wZXJjZW50IC8gMTAwKSAqIHRvdGFsU3BsaXRXaWR0aCArICdweCdcbiAgICAgIH0pXG4gICAgfSxcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHt9LFxufVxuPC9zY3JpcHQ+XG7CoFxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuLnMtcHJvZ3Jlc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJi1jb250ZW50IHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGNmM2QwMmQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGNmM2QwMmQmcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGNmM2QwMmRcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCl7dmFyIF92bT10aGlzLF9jPV92bS5fc2VsZi5fYztyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicHJvZ3Jlc3NcIn0sW19jKCdzLXByb2dyZXNzJyx7YXR0cnM6e1wicGVyY2VudFwiOjEwLFwiYmFja2dyb3VuZFwiOlwicmdiKDIzMiwgMjMyLCAyMzIpXCIsXCJoZWlnaHRcIjoyMCxcIm1pbldpZHRoXCI6NTAsXCJkaXJlY3Rpb25cIjpcImxlZnRcIn19KV0sMSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2dyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCI8IS0tXG4gKiBAQXV0aG9yOiBhdGRvd1xuICogQERhdGU6IDIwMjItMDQtMTQgMjI6MTQ6NTBcbiAqIEBMYXN0RWRpdG9yczogbnVsbFxuICogQExhc3RFZGl0VGltZTogMjAyMy0wNC0xNiAxMTo1NjozMFxuICogQERlc2NyaXB0aW9uOiBmaWxlIGRlc2NyaXB0aW9uXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgwqA8ZGl2wqBjbGFzcz1cInByb2dyZXNzXCI+XG4gICAgwqA8cy1wcm9ncmVzcyA6cGVyY2VudD1cIjEwXCIgYmFja2dyb3VuZD1cInJnYigyMzIsIDIzMiwgMjMyKVwiIDpoZWlnaHQ9XCIyMFwiIDptaW5XaWR0aD1cIjUwXCIgZGlyZWN0aW9uPVwibGVmdFwiPjwvcy1wcm9ncmVzcz5cbiAgPC9kaXbCoGNsYXNzPVwicHJvZ3Jlc3NcIj5cbjwvdGVtcGxhdGU+XG7CoFxuPHNjcmlwdD5cbmltcG9ydCBTUHJvZ3Jlc3MgZnJvbSAnQC9wYWNrYWdlcy9wcm9ncmVzcydcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Byb2dyZXNzJyxcbiAgcHJvcHM6IHt9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7fVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgU1Byb2dyZXNzLFxuICB9LFxuICB3YXRjaDoge30sXG4gIGNvbXB1dGVkOiB7fSxcbiAgY3JlYXRlZCgpIHt9LFxuICBtb3VudGVkKCkge30sXG4gIGJlZm9yZURlc3Ryb3koKSB7fSxcbn1cbjwvc2NyaXB0PlxuwqBcbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTMxZGFlYTQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImUzMWRhZWE0XCIsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wY2YzZDAyZCZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wY2YzZDAyZCZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZVwiIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zLXByb2dyZXNzW2RhdGEtdi0wY2YzZDAyZF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnMtcHJvZ3Jlc3MtY29udGVudFtkYXRhLXYtMGNmM2QwMmRdIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9