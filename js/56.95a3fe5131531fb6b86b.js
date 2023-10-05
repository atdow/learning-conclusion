(window.webpackJsonp=window.webpackJsonp||[]).push([[56,65],{212:function(t,e,o){"use strict";o.r(e);var i=o(217);i.default.install=function(t){t.component(i.default.name,i.default)},e.default=i.default},217:function(t,e,o){"use strict";o.r(e);o(23);var i={name:"ColorGridChartVirtualScroll",props:{data:{type:Array,default:function(){return[[]]},require:!0},itemHeight:{type:Number,default:50},itemWidth:{type:Number},maxHeight:{type:Number,default:300},showTooltip:{type:Boolean,default:!0},cursorStyle:{type:Object,default:function(){return{cursor:"auto"}}},startColor:{type:String,default:"#c1cae9"},endColor:{type:String,default:"#273C70"},boundaryValue:{type:Object}},data:()=>({maxValue:0,minValue:0,colors:[],renderData:[],virtualContentHeight:300,contentHeight:300,scrollHeight:300,scrollResolveTimer:null,tooltipPosition:{x:0,y:0},tooltipData:{},tooltipIsShow:!1}),components:{},watch:{data:{immediate:!0,handler:function(){const{max:t,min:e}=this.calDataBoundaryValue();this.maxValue=t,this.minValue=e;let o=0;o=0===this.minValue?0===this.maxValue?0:this.maxValue-this.minValue+1:this.maxValue-this.minValue;const i=this.gradientColors(this.startColor,this.endColor,o);this.colors=i,this.$nextTick(()=>{this.updateVirtualContentHeight(),this.updateContentHeight(),this.update(0)})}}},computed:{},created(){},mounted(){const t=this.$refs.geminiScrollbarRef.$el.childNodes[2];t.scrollTop=this.scrollTop,t.addEventListener("scroll",this.scrollResolve),this.$once("hook:beforeDestroy",()=>{t.removeEventListener("scroll",this.scrollResolve)})},methods:{gradientColors(t,e,o,i){var l,s,r,n,a=[],h=[];i=i||1;var c=function(t){return Math.pow(t/255,i)};for(t=this.parseColor(t).map(c),e=this.parseColor(e).map(c),l=0;l<o;l++){for(n=1-(r=l/(o-1)),s=0;s<3;s++)h[s]=this.pad(Math.round(255*Math.pow(t[s]*n+e[s]*r,1/i)).toString(16));a.push("#"+h.join(""))}return a},parseColor:t=>4===t.length?t.substr(1).split("").map((function(t){return 17*parseInt(t,16)})):[t.substr(1,2),t.substr(3,2),t.substr(5,2)].map((function(t){return parseInt(t,16)})),pad:t=>1===t.length?"0"+t:t,calDataBoundaryValue(){if(this.boundaryValue){const{max:t,min:e}=this.boundaryValue;return{min:e,max:t}}let t=0,e=0;return this.data.forEach(o=>{o&&o.forEach(o=>{o.value>t&&(t=o.value),o.value<e&&(e=o.value)})}),{max:t,min:e}},calItemStyle(t){const e={};return e.background=this.calItemColor(t.value).color,this.itemWidth?this.data.length>0&&(this.data[0].length*this.itemWidth>this.$el.clientWidth?(e.width=this.itemWidth+"px",e.flexShrink=0):e.flex=1):e.flex=1,e},calItemColor(t){let e="white",o=Math.ceil((this.colors.length-1)*t/(this.maxValue-this.minValue));return o>this.colors.length-1&&(o=this.colors.length-1),e=this.colors[o],{color:e,colorsIndex:o}},scrollResolve(t){clearTimeout(this.scrollResolveTimer),this.scrollResolveTimer=setTimeout(()=>{this.geminiScrollbarScrollTop=t.target.scrollTop;const{scrollLeft:e,scrollTop:o}=t.target;this.$emit("scroll",{scrollLeft:e,scrollTop:o})},10),this.update(t.target.scrollTop)},update(t=0){this.$nextTick(()=>{const e=Math.ceil(this.$el.clientHeight/this.itemHeight),o=Math.floor(t/this.itemHeight);let i=o+e;i+1<=this.data.length-1&&(i+=1),this.renderData=this.data.slice(o,i),this.$nextTick(()=>{this.$refs.content&&(this.$refs.content.style.webkitTransform=`translate3d(0, ${o*this.itemHeight}px, 0)`)})})},updateGridHeight(){"double"==this.processTableMode?this.gridHeight=70:this.gridHeight=35},geminiScrollbarReset(){try{this.$refs.geminiScrollbarRef.$el.childNodes[2].scrollTop=0,this.$emit("scroll",0)}catch(t){}},updateVirtualContentHeight(){this.virtualContentHeight=this.data.length*this.itemHeight},updateContentHeight(){this.virtualContentHeight>this.maxHeight?this.contentHeight=this.maxHeight:this.contentHeight=this.virtualContentHeight},itemClick(t,e,o){this.$emit("itemClick",t,e,o)},itemMousemove(t){if(this.$emit("itemMouseMove",t),!1!==this.showTooltip){this.tooltipData=t;var e=window.event,o=e.x,i=e.y;this.tooltipPosition={x:o+20,y:i+20}}},contentMouseenter(){!1!==this.showTooltip&&(this.tooltipIsShow=!0)},contentMouseleave(){!1!==this.showTooltip&&(this.tooltipIsShow=!1)}},beforeDestroy(){}},l=(o(311),o(9)),s=Object(l.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"color-grid-chart"},[e("GeminiScrollbar",{ref:"geminiScrollbarRef",staticClass:".pmd-scrollbar .mCustomScrollbar gm-scrollbar-color white",style:"height:"+(t.contentHeight+"px")},[e("div",{ref:"clientHeight",staticClass:"list-view-phantom",style:{height:t.virtualContentHeight+"px"}}),t._v(" "),e("div",{ref:"content",on:{mouseenter:t.contentMouseenter,mouseleave:t.contentMouseleave}},t._l(t.renderData,(function(o,i){return e("div",{key:i,staticClass:"color-grid-chart-row",style:{height:t.itemHeight+"px"}},t._l(o,(function(o,l){return e("div",{key:l,staticClass:"color-grid-chart-item",style:{...t.calItemStyle(o),...t.cursorStyle},on:{click:function(e){return t.itemClick(o,i,l)},mousemove:function(e){return t.itemMousemove(o)}}},[t.$scopedSlots.default?[t._t("default",null,{record:o})]:e("span",[t._v(" "+t._s(o.value))])],2)})),0)})),0)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.tooltipIsShow,expression:"tooltipIsShow"}],staticClass:"color-grid-chart-tooltip",style:{left:t.tooltipPosition.x+"px",top:t.tooltipPosition.y+"px"}},[t.$scopedSlots.tooltipSlot?[t._t("tooltipSlot",null,{record:t.tooltipData})]:e("span",[t._v("请指定插槽内容")])],2)],1)}),[],!1,null,"e7325edc",null);e.default=s.exports},296:function(t,e,o){var i=o(2),l=o(312);"string"==typeof(l=l.__esModule?l.default:l)&&(l=[[t.i,l,""]]);var s={insert:"head",singleton:!1};i(l,s);t.exports=l.locals||{}},311:function(t,e,o){"use strict";o(296)},312:function(t,e,o){(e=o(3)(!1)).push([t.i,".color-grid-chart-row[data-v-e7325edc] {\n  display: flex;\n  width: 100%;\n}\n.color-grid-chart-item[data-v-e7325edc] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  box-sizing: border-box;\n  border: 1px solid white;\n}\n.color-grid-chart-item[data-v-e7325edc]:hover {\n  border-color: black;\n}\n.list-view-phantom[data-v-e7325edc] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  z-index: -1;\n}\n.color-grid-chart-tooltip[data-v-e7325edc] {\n  background: #fff;\n  opacity: 0.96;\n  border-radius: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  padding: 12px;\n  color: #333333;\n  font-size: 13px;\n  position: fixed;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n}\n",""]),t.exports=e}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC12aXJ0dWFsLXNjcm9sbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC12aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy9jb2xvci1ncmlkLWNoYXJ0LXZpcnR1YWwtc2Nyb2xsL3NyYy9pbmRleC52dWU/ZTQ1YyIsIndlYnBhY2s6Ly8vc3JjL3BhY2thZ2VzL2NvbG9yLWdyaWQtY2hhcnQtdmlydHVhbC1zY3JvbGwvc3JjL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC12aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXgudnVlP2VlZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL2NvbG9yLWdyaWQtY2hhcnQtdmlydHVhbC1zY3JvbGwvc3JjL2luZGV4LnZ1ZT81MjNkIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy9jb2xvci1ncmlkLWNoYXJ0LXZpcnR1YWwtc2Nyb2xsL3NyYy9pbmRleC52dWU/MTdkNiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC12aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXgudnVlPzUyYTAiXSwibmFtZXMiOlsiQ29sb3JHcmlkQ2hhcnRWaXJ0dWFsU2Nyb2xsIiwiaW5zdGFsbCIsIlZ1ZSIsImNvbXBvbmVudCIsIm5hbWUiLCJwcm9wcyIsImRhdGEiLCJ0eXBlIiwiQXJyYXkiLCJkZWZhdWx0IiwicmVxdWlyZSIsIml0ZW1IZWlnaHQiLCJOdW1iZXIiLCJpdGVtV2lkdGgiLCJtYXhIZWlnaHQiLCJzaG93VG9vbHRpcCIsIkJvb2xlYW4iLCJjdXJzb3JTdHlsZSIsIk9iamVjdCIsImN1cnNvciIsInN0YXJ0Q29sb3IiLCJTdHJpbmciLCJlbmRDb2xvciIsImJvdW5kYXJ5VmFsdWUiLCJtYXhWYWx1ZSIsIm1pblZhbHVlIiwiY29sb3JzIiwicmVuZGVyRGF0YSIsInZpcnR1YWxDb250ZW50SGVpZ2h0IiwiY29udGVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInNjcm9sbFJlc29sdmVUaW1lciIsInRvb2x0aXBQb3NpdGlvbiIsIngiLCJ5IiwidG9vbHRpcERhdGEiLCJ0b29sdGlwSXNTaG93IiwiY29tcG9uZW50cyIsIndhdGNoIiwiaW1tZWRpYXRlIiwiaGFuZGxlciIsIm1heCIsIm1pbiIsImNhbERhdGFCb3VuZGFyeVZhbHVlIiwic3RlcCIsImdyYWRpZW50Q29sb3JzIiwiJG5leHRUaWNrIiwidXBkYXRlVmlydHVhbENvbnRlbnRIZWlnaHQiLCJ1cGRhdGVDb250ZW50SGVpZ2h0IiwidXBkYXRlIiwiY29tcHV0ZWQiLCJjcmVhdGVkIiwibW91bnRlZCIsImdlbWluaVNjcm9sbGJhclZpZXciLCIkcmVmcyIsImdlbWluaVNjcm9sbGJhclJlZiIsIiRlbCIsImNoaWxkTm9kZXMiLCJzY3JvbGxUb3AiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsUmVzb2x2ZSIsIiRvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ldGhvZHMiLCJzdGFydCIsImVuZCIsInN0ZXBzIiwiZ2FtbWEiLCJpIiwiaiIsIm1zIiwibWUiLCJvdXRwdXQiLCJzbyIsIm5vcm1hbGl6ZSIsImNoYW5uZWwiLCJNYXRoIiwicG93IiwicGFyc2VDb2xvciIsIm1hcCIsInBhZCIsInJvdW5kIiwidG9TdHJpbmciLCJwdXNoIiwiam9pbiIsImhleFN0ciIsImxlbmd0aCIsInN1YnN0ciIsInNwbGl0IiwicyIsInBhcnNlSW50IiwiZm9yRWFjaCIsImRhdGFJdGVtIiwiaXRlbSIsInZhbHVlIiwiY2FsSXRlbVN0eWxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY2FsSXRlbUNvbG9yIiwiY29sb3IiLCJjbGllbnRXaWR0aCIsIndpZHRoIiwiZmxleFNocmluayIsImZsZXgiLCJjb2xvcnNJbmRleCIsImNlaWwiLCJlIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImdlbWluaVNjcm9sbGJhclNjcm9sbFRvcCIsInRhcmdldCIsInNjcm9sbExlZnQiLCIkZW1pdCIsImNvdW50IiwiY2xpZW50SGVpZ2h0IiwiZmxvb3IiLCJzbGljZSIsImNvbnRlbnQiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJ1cGRhdGVHcmlkSGVpZ2h0IiwicHJvY2Vzc1RhYmxlTW9kZSIsImdyaWRIZWlnaHQiLCJnZW1pbmlTY3JvbGxiYXJSZXNldCIsImVycm9yIiwiaXRlbUNsaWNrIiwicm93SW5kZXgiLCJDb2x1bW5JbmRleCIsIml0ZW1Nb3VzZW1vdmUiLCJldmUiLCJ3aW5kb3ciLCJldmVudCIsImNvbnRlbnRNb3VzZWVudGVyIiwiY29udGVudE1vdXNlbGVhdmUiLCJiZWZvcmVEZXN0cm95IiwiX3ZtIiwidGhpcyIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsInJlZiIsImhlaWdodCIsIl92Iiwib24iLCJfbCIsImRhdGFSb3ciLCJkYXRhUm93SW5kZXgiLCJrZXkiLCJkYXRhSXRlbUluZGV4IiwiJGV2ZW50IiwiJHNjb3BlZFNsb3RzIiwiX3QiLCJfcyIsImRpcmVjdGl2ZXMiLCJyYXdOYW1lIiwiZXhwcmVzc2lvbiIsImxlZnQiLCJ0b3AiLCJ0b29sdGlwU2xvdCIsImFwaSIsIl9fZXNNb2R1bGUiLCJtb2R1bGUiLCJvcHRpb25zIiwiZXhwb3J0cyIsImxvY2FscyIsIl9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyJdLCJtYXBwaW5ncyI6IjhGQUFBLG9CQVVBQSxVQUE0QkMsUUFBVSxTQUFVQyxHQUM5Q0EsRUFBSUMsVUFBVUgsVUFBNEJJLEtBQU1KLFlBR25DQSxZQUEyQixTLDhDQ2QxQyxJQ0FnTixFQ21Eak0sQ0FDZkksS0FBQSw4QkFDQUMsTUFBQSxDQUNBQyxLQUFBLENBQ0FDLEtBQUFDLE1BQ0FDLFFBQUEsV0FDQSxZQUVBQyxTQUFBLEdBRUFDLFdBQUEsQ0FDQUosS0FBQUssT0FDQUgsUUFBQSxJ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S0FBTTJILElBQUt0QixFQUFJdEcsZ0JBQWdCRSxFQUFJLE9BQVMsQ0FBRW9HLEVBQUllLGFBQWFRLFlBQWEsQ0FBQ3ZCLEVBQUlnQixHQUFHLGNBQWMsS0FBSyxDQUFDLE9BQVNoQixFQUFJbkcsZUFBZXFHLEVBQUcsT0FBTyxDQUFDRixFQUFJTyxHQUFHLGNBQWMsSUFBSSxLQUVsOUMsSUdVcEIsRUFDQSxLQUNBLFdBQ0EsTUFJYSxVQUFBMUksRSw2QkNuQmYsSUFBSTJKLEVBQU0sRUFBUSxHQUNGekMsRUFBVSxFQUFRLEtBSUMsaUJBRnZCQSxFQUFVQSxFQUFRMEMsV0FBYTFDLEVBQVE1RyxRQUFVNEcsS0FHL0NBLEVBQVUsQ0FBQyxDQUFDMkMsRUFBTzVGLEVBQUlpRCxFQUFTLE1BRzlDLElBQUk0QyxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FFUEgsRUFBSXpDLEVBQVM0QyxHQUkxQkQsRUFBT0UsUUFBVTdDLEVBQVE4QyxRQUFVLEksaUNDbEJuQyxRLHFCQ0VBRCxFQURrQyxFQUFRLEVBQ2hDRSxFQUE0QixJQUU5QmpGLEtBQUssQ0FBQzZFLEVBQU81RixFQUFJLGt1QkFBbXVCLEtBRTV2QjRGLEVBQU9FLFFBQVVBIiwiZmlsZSI6ImpzLzU2Ljk1YTNmZTUxMzE1MzFmYjZiODZiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGF0ZG93XG4gKiBARGF0ZTogMjAyMi0wMy0yMyAxNToxMDo0MVxuICogQExhc3RFZGl0b3JzOiBudWxsXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTAzLTIzIDE2OjIyOjQyXG4gKiBARGVzY3JpcHRpb246IGZpbGUgZGVzY3JpcHRpb25cbiAqL1xuaW1wb3J0IENvbG9yR3JpZENoYXJ0VmlydHVhbFNjcm9sbCBmcm9tICcuL3NyYy9pbmRleCdcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbkNvbG9yR3JpZENoYXJ0VmlydHVhbFNjcm9sbC5pbnN0YWxsID0gZnVuY3Rpb24gKFZ1ZSkge1xuICBWdWUuY29tcG9uZW50KENvbG9yR3JpZENoYXJ0VmlydHVhbFNjcm9sbC5uYW1lLCBDb2xvckdyaWRDaGFydFZpcnR1YWxTY3JvbGwpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yR3JpZENoYXJ0VmlydHVhbFNjcm9sbCIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKXt2YXIgX3ZtPXRoaXMsX2M9X3ZtLl9zZWxmLl9jO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb2xvci1ncmlkLWNoYXJ0XCJ9LFtfYygnR2VtaW5pU2Nyb2xsYmFyJyx7cmVmOlwiZ2VtaW5pU2Nyb2xsYmFyUmVmXCIsc3RhdGljQ2xhc3M6XCIucG1kLXNjcm9sbGJhciAubUN1c3RvbVNjcm9sbGJhciBnbS1zY3JvbGxiYXItY29sb3Igd2hpdGVcIixzdHlsZTooYGhlaWdodDoke192bS5jb250ZW50SGVpZ2h0ICsgJ3B4J31gKX0sW19jKCdkaXYnLHtyZWY6XCJjbGllbnRIZWlnaHRcIixzdGF0aWNDbGFzczpcImxpc3Qtdmlldy1waGFudG9tXCIsc3R5bGU6KHsgaGVpZ2h0OiBfdm0udmlydHVhbENvbnRlbnRIZWlnaHQgKyAncHgnIH0pfSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7cmVmOlwiY29udGVudFwiLG9uOntcIm1vdXNlZW50ZXJcIjpfdm0uY29udGVudE1vdXNlZW50ZXIsXCJtb3VzZWxlYXZlXCI6X3ZtLmNvbnRlbnRNb3VzZWxlYXZlfX0sX3ZtLl9sKChfdm0ucmVuZGVyRGF0YSksZnVuY3Rpb24oZGF0YVJvdyxkYXRhUm93SW5kZXgpe3JldHVybiBfYygnZGl2Jyx7a2V5OmRhdGFSb3dJbmRleCxzdGF0aWNDbGFzczpcImNvbG9yLWdyaWQtY2hhcnQtcm93XCIsc3R5bGU6KHsgaGVpZ2h0OiBfdm0uaXRlbUhlaWdodCArICdweCcgfSl9LF92bS5fbCgoZGF0YVJvdyksZnVuY3Rpb24oZGF0YUl0ZW0sZGF0YUl0ZW1JbmRleCl7cmV0dXJuIF9jKCdkaXYnLHtrZXk6ZGF0YUl0ZW1JbmRleCxzdGF0aWNDbGFzczpcImNvbG9yLWdyaWQtY2hhcnQtaXRlbVwiLHN0eWxlOih7IC4uLl92bS5jYWxJdGVtU3R5bGUoZGF0YUl0ZW0pLCAuLi5fdm0uY3Vyc29yU3R5bGUgfSksb246e1wiY2xpY2tcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uaXRlbUNsaWNrKGRhdGFJdGVtLCBkYXRhUm93SW5kZXgsIGRhdGFJdGVtSW5kZXgpfSxcIm1vdXNlbW92ZVwiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5pdGVtTW91c2Vtb3ZlKGRhdGFJdGVtKX19fSxbKF92bS4kc2NvcGVkU2xvdHMuZGVmYXVsdCk/W192bS5fdChcImRlZmF1bHRcIixudWxsLHtcInJlY29yZFwiOmRhdGFJdGVtfSldOl9jKCdzcGFuJyxbX3ZtLl92KFwiIFwiK192bS5fcyhkYXRhSXRlbS52YWx1ZSkpXSldLDIpfSksMCl9KSwwKV0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTooX3ZtLnRvb2x0aXBJc1Nob3cpLGV4cHJlc3Npb246XCJ0b29sdGlwSXNTaG93XCJ9XSxzdGF0aWNDbGFzczpcImNvbG9yLWdyaWQtY2hhcnQtdG9vbHRpcFwiLHN0eWxlOih7IGxlZnQ6IF92bS50b29sdGlwUG9zaXRpb24ueCArICdweCcsIHRvcDogX3ZtLnRvb2x0aXBQb3NpdGlvbi55ICsgJ3B4JyB9KX0sWyhfdm0uJHNjb3BlZFNsb3RzLnRvb2x0aXBTbG90KT9bX3ZtLl90KFwidG9vbHRpcFNsb3RcIixudWxsLHtcInJlY29yZFwiOl92bS50b29sdGlwRGF0YX0pXTpfYygnc3BhbicsW192bS5fdihcIuivt+aMh+WumuaPkuanveWGheWuuVwiKV0pXSwyKV0sMSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjwhLS1cbiAqIEBBdXRob3I6IGF0ZG93XG4gKiBARGF0ZTogMjAyMi0wMy0yMyAxNToxMDo1MVxuICogQExhc3RFZGl0b3JzOiBudWxsXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIyLTEwLTExIDIxOjAyOjQ3XG4gKiBARGVzY3JpcHRpb246IGZpbGUgZGVzY3JpcHRpb25cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29sb3ItZ3JpZC1jaGFydFwiPlxuICAgIDxHZW1pbmlTY3JvbGxiYXJcbiAgICAgIGNsYXNzPVwiLnBtZC1zY3JvbGxiYXIgLm1DdXN0b21TY3JvbGxiYXIgZ20tc2Nyb2xsYmFyLWNvbG9yIHdoaXRlXCJcbiAgICAgIDpzdHlsZT1cImBoZWlnaHQ6JHtjb250ZW50SGVpZ2h0ICsgJ3B4J31gXCJcbiAgICAgIHJlZj1cImdlbWluaVNjcm9sbGJhclJlZlwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImxpc3Qtdmlldy1waGFudG9tXCIgcmVmPVwiY2xpZW50SGVpZ2h0XCIgOnN0eWxlPVwieyBoZWlnaHQ6IHZpcnR1YWxDb250ZW50SGVpZ2h0ICsgJ3B4JyB9XCI+PC9kaXY+XG4gICAgICA8ZGl2IHJlZj1cImNvbnRlbnRcIiBAbW91c2VlbnRlcj1cImNvbnRlbnRNb3VzZWVudGVyXCIgQG1vdXNlbGVhdmU9XCJjb250ZW50TW91c2VsZWF2ZVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjb2xvci1ncmlkLWNoYXJ0LXJvd1wiXG4gICAgICAgICAgdi1mb3I9XCIoZGF0YVJvdywgZGF0YVJvd0luZGV4KSBpbiByZW5kZXJEYXRhXCJcbiAgICAgICAgICA6a2V5PVwiZGF0YVJvd0luZGV4XCJcbiAgICAgICAgICA6c3R5bGU9XCJ7IGhlaWdodDogaXRlbUhlaWdodCArICdweCcgfVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNvbG9yLWdyaWQtY2hhcnQtaXRlbVwiXG4gICAgICAgICAgICA6c3R5bGU9XCJ7IC4uLmNhbEl0ZW1TdHlsZShkYXRhSXRlbSksIC4uLmN1cnNvclN0eWxlIH1cIlxuICAgICAgICAgICAgdi1mb3I9XCIoZGF0YUl0ZW0sIGRhdGFJdGVtSW5kZXgpIGluIGRhdGFSb3dcIlxuICAgICAgICAgICAgOmtleT1cImRhdGFJdGVtSW5kZXhcIlxuICAgICAgICAgICAgQGNsaWNrPVwiaXRlbUNsaWNrKGRhdGFJdGVtLCBkYXRhUm93SW5kZXgsIGRhdGFJdGVtSW5kZXgpXCJcbiAgICAgICAgICAgIEBtb3VzZW1vdmU9XCJpdGVtTW91c2Vtb3ZlKGRhdGFJdGVtKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIkc2NvcGVkU2xvdHMuZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8c2xvdCA6cmVjb3JkPVwiZGF0YUl0ZW1cIiAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxzcGFuIHYtZWxzZT4ge3sgZGF0YUl0ZW0udmFsdWUgfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9HZW1pbmlTY3JvbGxiYXI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjb2xvci1ncmlkLWNoYXJ0LXRvb2x0aXBcIlxuICAgICAgOnN0eWxlPVwieyBsZWZ0OiB0b29sdGlwUG9zaXRpb24ueCArICdweCcsIHRvcDogdG9vbHRpcFBvc2l0aW9uLnkgKyAncHgnIH1cIlxuICAgICAgdi1zaG93PVwidG9vbHRpcElzU2hvd1wiXG4gICAgPlxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCIkc2NvcGVkU2xvdHMudG9vbHRpcFNsb3RcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cInRvb2x0aXBTbG90XCIgOnJlY29yZD1cInRvb2x0aXBEYXRhXCI+PC9zbG90PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxzcGFuIHYtZWxzZT7or7fmjIflrprmj5Lmp73lhoXlrrk8L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDb2xvckdyaWRDaGFydFZpcnR1YWxTY3JvbGwnLFxuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW1tdXVxuICAgICAgfSxcbiAgICAgIHJlcXVpcmU6IHRydWUsXG4gICAgfSxcbiAgICBpdGVtSGVpZ2h0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1MCxcbiAgICB9LFxuICAgIGl0ZW1XaWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgIH0sXG4gICAgbWF4SGVpZ2h0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzMDAsXG4gICAgfSxcbiAgICBzaG93VG9vbHRpcDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgICBjdXJzb3JTdHlsZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGN1cnNvcjogJ2F1dG8nLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gICAgc3RhcnRDb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyNjMWNhZTknLFxuICAgIH0sXG4gICAgZW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcjMjczQzcwJyxcbiAgICB9LFxuICAgIGJvdW5kYXJ5VmFsdWU6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXhWYWx1ZTogMCxcbiAgICAgIG1pblZhbHVlOiAwLFxuICAgICAgY29sb3JzOiBbXSxcbiAgICAgIC8vIOiZmuaLn+a7muWKqFxuICAgICAgcmVuZGVyRGF0YTogW10sXG4gICAgICB2aXJ0dWFsQ29udGVudEhlaWdodDogMzAwLFxuICAgICAgY29udGVudEhlaWdodDogMzAwLFxuICAgICAgc2Nyb2xsSGVpZ2h0OiAzMDAsXG4gICAgICBzY3JvbGxSZXNvbHZlVGltZXI6IG51bGwsXG4gICAgICB0b29sdGlwUG9zaXRpb246IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwRGF0YToge30sXG4gICAgICB0b29sdGlwSXNTaG93OiBmYWxzZSxcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHt9LFxuICB3YXRjaDoge1xuICAgIGRhdGE6IHtcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgeyBtYXgsIG1pbiB9ID0gdGhpcy5jYWxEYXRhQm91bmRhcnlWYWx1ZSgpXG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSBtYXhcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IG1pblxuICAgICAgICBsZXQgc3RlcCA9IDBcbiAgICAgICAgaWYgKHRoaXMubWluVmFsdWUgPT09IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5tYXhWYWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgc3RlcCA9IDBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RlcCA9IHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlICsgMSAvLyDlpoLmnpzmmK8wLXjml7bvvIxzdGVw5bqU6K+l5piveC0wKzEsMOS5n+mcgOimgeWNoOS4gOS4quWIhuWJslxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGVwID0gdGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdyYWRpZW50Q29sb3JzKHRoaXMuc3RhcnRDb2xvciwgdGhpcy5lbmRDb2xvciwgc3RlcClcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnNcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlVmlydHVhbENvbnRlbnRIZWlnaHQoKVxuICAgICAgICAgIHRoaXMudXBkYXRlQ29udGVudEhlaWdodCgpXG4gICAgICAgICAgdGhpcy51cGRhdGUoMClcbiAgICAgICAgfSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21heDonLCBtYXgsIG1pbilcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuY29sb3JzIDonLCB0aGlzLmNvbG9ycylcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBjcmVhdGVkKCkge30sXG4gIG1vdW50ZWQoKSB7XG4gICAgY29uc3QgZ2VtaW5pU2Nyb2xsYmFyVmlldyA9IHRoaXMuJHJlZnMuZ2VtaW5pU2Nyb2xsYmFyUmVmLiRlbC5jaGlsZE5vZGVzWzJdXG4gICAgZ2VtaW5pU2Nyb2xsYmFyVmlldy5zY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcFxuICAgIGdlbWluaVNjcm9sbGJhclZpZXcuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxSZXNvbHZlKVxuICAgIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlRGVzdHJveScsICgpID0+IHtcbiAgICAgIGdlbWluaVNjcm9sbGJhclZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxSZXNvbHZlKVxuICAgIH0pXG4gICAgLy8gY29uc29sZS5sb2coJyRzY29wZWRTbG90czonLCB0aGlzLiRzY29wZWRTbG90cylcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAgc3RhcnQg5byA5aeL6aKc6ImyXG4gICAgICBlbmQg57uT5p2f6aKc6ImyXG4gICAgICBzdGVwcyDpopzoibLliIbop6Mg5qyh5pWwXG4gICAgICBnYW1tYSDmmoLml7bnkIbop6PkuLrpgI/mmI7kuIDngrnvvIjkvL3pqazvvIlcbiAgICAgKi9cbiAgICBncmFkaWVudENvbG9ycyhzdGFydCwgZW5kLCBzdGVwcywgZ2FtbWEpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICBqLFxuICAgICAgICBtcyxcbiAgICAgICAgbWUsXG4gICAgICAgIG91dHB1dCA9IFtdLFxuICAgICAgICBzbyA9IFtdXG4gICAgICBnYW1tYSA9IGdhbW1hIHx8IDFcbiAgICAgIHZhciBub3JtYWxpemUgPSBmdW5jdGlvbiAoY2hhbm5lbCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coY2hhbm5lbCAvIDI1NSwgZ2FtbWEpXG4gICAgICB9XG4gICAgICBzdGFydCA9IHRoaXMucGFyc2VDb2xvcihzdGFydCkubWFwKG5vcm1hbGl6ZSlcbiAgICAgIGVuZCA9IHRoaXMucGFyc2VDb2xvcihlbmQpLm1hcChub3JtYWxpemUpXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc3RlcHM7IGkrKykge1xuICAgICAgICBtcyA9IGkgLyAoc3RlcHMgLSAxKVxuICAgICAgICBtZSA9IDEgLSBtc1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgc29bal0gPSB0aGlzLnBhZChNYXRoLnJvdW5kKE1hdGgucG93KHN0YXJ0W2pdICogbWUgKyBlbmRbal0gKiBtcywgMSAvIGdhbW1hKSAqIDI1NSkudG9TdHJpbmcoMTYpKVxuICAgICAgICB9XG4gICAgICAgIG91dHB1dC5wdXNoKCcjJyArIHNvLmpvaW4oJycpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG91dHB1dFxuICAgIH0sXG4gICAgcGFyc2VDb2xvcihoZXhTdHIpIHtcbiAgICAgIHJldHVybiBoZXhTdHIubGVuZ3RoID09PSA0XG4gICAgICAgID8gaGV4U3RyXG4gICAgICAgICAgICAuc3Vic3RyKDEpXG4gICAgICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgIHJldHVybiAweDExICogcGFyc2VJbnQocywgMTYpXG4gICAgICAgICAgICB9KVxuICAgICAgICA6IFtoZXhTdHIuc3Vic3RyKDEsIDIpLCBoZXhTdHIuc3Vic3RyKDMsIDIpLCBoZXhTdHIuc3Vic3RyKDUsIDIpXS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludChzLCAxNilcbiAgICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8gemVyby1wYWQgMSBkaWdpdCB0byAyXG4gICAgcGFkKHMpIHtcbiAgICAgIHJldHVybiBzLmxlbmd0aCA9PT0gMSA/ICcwJyArIHMgOiBzXG4gICAgfSxcbiAgICBjYWxEYXRhQm91bmRhcnlWYWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLmJvdW5kYXJ5VmFsdWUpIHtcbiAgICAgICAgY29uc3QgeyBtYXgsIG1pbiB9ID0gdGhpcy5ib3VuZGFyeVZhbHVlXG4gICAgICAgIHJldHVybiB7IG1pbiwgbWF4IH1cbiAgICAgIH1cbiAgICAgIGxldCBtYXggPSAwXG4gICAgICBsZXQgbWluID0gMFxuICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGRhdGFJdGVtKSA9PiB7XG4gICAgICAgIGlmIChkYXRhSXRlbSkge1xuICAgICAgICAgIGRhdGFJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlID4gbWF4KSB7XG4gICAgICAgICAgICAgIG1heCA9IGl0ZW0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICAgIG1pbiA9IGl0ZW0udmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGE6JywgdGhpcy5kYXRhKVxuICAgICAgLy8gY29uc29sZS5sb2coJ21heDonLCBtYXgsIG1pbilcbiAgICAgIHJldHVybiB7IG1heCwgbWluIH1cbiAgICB9LFxuICAgIC8vIFRPRE/lkI7pnaLpnIDopoHmir3nprvlh7rljrvlnKjliJ3lp4vljJbml7bkuIDmrKHorqHnrpflh7rmnaXvvIzkuI3opoHkuIDnm7Tph43lpI3lnLDmuLLmn5PorqHnrpdcbiAgICBjYWxJdGVtU3R5bGUoZGF0YUl0ZW0pIHtcbiAgICAgIGNvbnN0IHN0eWxlID0ge31cbiAgICAgIHN0eWxlLmJhY2tncm91bmQgPSB0aGlzLmNhbEl0ZW1Db2xvcihkYXRhSXRlbS52YWx1ZSkuY29sb3JcbiAgICAgIGlmICh0aGlzLml0ZW1XaWR0aCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnd2lkdGg6JywgdGhpcy5kYXRhWzBdLmxlbmd0aCAqIHRoaXMuaXRlbVdpZHRoLCB0aGlzLiRlbC5jbGllbnRXaWR0aClcbiAgICAgICAgICBpZiAodGhpcy5kYXRhWzBdLmxlbmd0aCAqIHRoaXMuaXRlbVdpZHRoID4gdGhpcy4kZWwuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgICAgIHN0eWxlLndpZHRoID0gdGhpcy5pdGVtV2lkdGggKyAncHgnXG4gICAgICAgICAgICBzdHlsZS5mbGV4U2hyaW5rID0gMFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5mbGV4ID0gMVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGUuZmxleCA9IDFcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHlsZVxuICAgIH0sXG4gICAgY2FsSXRlbUNvbG9yKHZhbHVlKSB7XG4gICAgICBsZXQgY29sb3IgPSAnd2hpdGUnXG4gICAgICAvKipcbiAgICAgICAqIOWfuuacrOWFrOW8j++8mmNvbG9yc0luZGV4Lyh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSA9IHZhbHVlLyh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSlcbiAgICAgICAqIOS9huaYr+S4jeS4gOWumuS8muacieaVtOWPlueahOe0ouW8le+8jOWuueaYk+i2iueVjFxuICAgICAgICovXG4gICAgICBsZXQgY29sb3JzSW5kZXggPSBNYXRoLmNlaWwoKCh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSkpXG4gICAgICAvLyDlrrnmmJPotornlYzlpITnkIZcbiAgICAgIGlmIChjb2xvcnNJbmRleCA+IHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29sb3JzSW5kZXggPSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxXG4gICAgICB9XG4gICAgICBjb2xvciA9IHRoaXMuY29sb3JzW2NvbG9yc0luZGV4XVxuICAgICAgLy8gaWYgKCEhIWNvbG9yKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdjb2xvcjonLCBjb2xvcilcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2NvbG9yc0luZGV4OicsIGNvbG9yc0luZGV4KVxuICAgICAgLy8gfVxuICAgICAgcmV0dXJuIHsgY29sb3IsIGNvbG9yc0luZGV4IH1cbiAgICB9LFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t6Jma5ouf5rua5YqoIHN0YXJ0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBzY3JvbGxSZXNvbHZlKGUpIHtcbiAgICAgIC8vIOmYsuaKllxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2Nyb2xsUmVzb2x2ZVRpbWVyKVxuICAgICAgdGhpcy5zY3JvbGxSZXNvbHZlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5nZW1pbmlTY3JvbGxiYXJTY3JvbGxUb3AgPSBlLnRhcmdldC5zY3JvbGxUb3BcbiAgICAgICAgY29uc3QgeyBzY3JvbGxMZWZ0LCBzY3JvbGxUb3AgfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuJGVtaXQoJ3Njcm9sbCcsIHsgc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wIH0pXG4gICAgICB9LCAxMClcbiAgICAgIHRoaXMudXBkYXRlKGUudGFyZ2V0LnNjcm9sbFRvcClcbiAgICB9LFxuICAgIC8vIOabtOaWsOW9k+WJjeiiq+a4suafk+WHuuadpeeahOaVsOaNrlxuICAgIHVwZGF0ZShzY3JvbGxUb3AgPSAwKSB7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIC8vIOiOt+WPluW9k+WJjeWPr+WxleekuuaVsOmHj1xuICAgICAgICBjb25zdCBjb3VudCA9IE1hdGguY2VpbCh0aGlzLiRlbC5jbGllbnRIZWlnaHQgLyB0aGlzLml0ZW1IZWlnaHQpXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5mbG9vcihzY3JvbGxUb3AgLyB0aGlzLml0ZW1IZWlnaHQpXG4gICAgICAgIC8vIOWPluW+l+WPr+ingeWMuuWfn+eahOe7k+adn+aVsOaNrue0ouW8lVxuICAgICAgICBsZXQgZW5kID0gc3RhcnQgKyBjb3VudFxuICAgICAgICAvLyDlvoDkuIvooaUx77yM5YeP5bCR6Zeq54OB5oSfXG4gICAgICAgIGlmIChlbmQgKyAxIDw9IHRoaXMuZGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgZW5kID0gZW5kICsgMVxuICAgICAgICB9XG4gICAgICAgIC8vIOiuoeeul+WHuuWPr+ingeWMuuWfn+WvueW6lOeahOaVsOaNru+8jOiuqSBWdWUuanMg5pu05pawXG4gICAgICAgIHRoaXMucmVuZGVyRGF0YSA9IHRoaXMuZGF0YS5zbGljZShzdGFydCwgZW5kKVxuICAgICAgICAvLyDmiorlj6/op4HljLrln5/nmoQgdG9wIOiuvue9ruS4uui1t+Wni+WFg+e0oOWcqOaVtOS4quWIl+ihqOS4reeahOS9jee9ru+8iOS9v+eUqCB0cmFuc2Zvcm0g5piv5Li65LqG5pu05aW955qE5oCn6IO977yJXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy4kcmVmcy5jb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmNvbnRlbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsICR7c3RhcnQgKiB0aGlzLml0ZW1IZWlnaHR9cHgsIDApYFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmm7TmlrDmr4/mnaHmoLzlrZDpq5jluqZcbiAgICB1cGRhdGVHcmlkSGVpZ2h0KCkge1xuICAgICAgaWYgKHRoaXMucHJvY2Vzc1RhYmxlTW9kZSA9PSAnZG91YmxlJykge1xuICAgICAgICB0aGlzLmdyaWRIZWlnaHQgPSA3MFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ncmlkSGVpZ2h0ID0gMzVcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIOa7muWKqOadoea7muWKqOWIsOmhtumDqFxuICAgIGdlbWluaVNjcm9sbGJhclJlc2V0KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy4kcmVmcy5nZW1pbmlTY3JvbGxiYXJSZWYuJGVsLmNoaWxkTm9kZXNbMl0uc2Nyb2xsVG9wID0gMFxuICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGwnLCAwKVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgIH0sXG4gICAgLy8g5pu05paw5pKR5byA6auY5bqmXG4gICAgdXBkYXRlVmlydHVhbENvbnRlbnRIZWlnaHQoKSB7XG4gICAgICB0aGlzLnZpcnR1YWxDb250ZW50SGVpZ2h0ID0gdGhpcy5kYXRhLmxlbmd0aCAqIHRoaXMuaXRlbUhlaWdodFxuICAgIH0sXG4gICAgdXBkYXRlQ29udGVudEhlaWdodCgpIHtcbiAgICAgIGlmICh0aGlzLnZpcnR1YWxDb250ZW50SGVpZ2h0ID4gdGhpcy5tYXhIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gdGhpcy5tYXhIZWlnaHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGVudEhlaWdodCA9IHRoaXMudmlydHVhbENvbnRlbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t6Jma5ouf5rua5YqoIGVuZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgaXRlbUNsaWNrKGRhdGEsIHJvd0luZGV4LCBDb2x1bW5JbmRleCkge1xuICAgICAgdGhpcy4kZW1pdCgnaXRlbUNsaWNrJywgZGF0YSwgcm93SW5kZXgsIENvbHVtbkluZGV4KVxuICAgIH0sXG4gICAgaXRlbU1vdXNlbW92ZShkYXRhKSB7XG4gICAgICB0aGlzLiRlbWl0KCdpdGVtTW91c2VNb3ZlJywgZGF0YSlcbiAgICAgIGlmICh0aGlzLnNob3dUb29sdGlwID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMudG9vbHRpcERhdGEgPSBkYXRhXG4gICAgICB2YXIgZXZlID0gd2luZG93LmV2ZW50XG4gICAgICB2YXIgeCA9IGV2ZS54IC8vIFjlnZDmoIdcbiAgICAgIHZhciB5ID0gZXZlLnkgLy8gWeWdkOagh1xuICAgICAgdGhpcy50b29sdGlwUG9zaXRpb24gPSB7XG4gICAgICAgIHg6IHggKyAyMCxcbiAgICAgICAgeTogeSArIDIwLFxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2l0ZW1Ib3ZlcicpXG4gICAgfSxcbiAgICBjb250ZW50TW91c2VlbnRlcigpIHtcbiAgICAgIGlmICh0aGlzLnNob3dUb29sdGlwID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMudG9vbHRpcElzU2hvdyA9IHRydWVcbiAgICB9LFxuICAgIGNvbnRlbnRNb3VzZWxlYXZlKCkge1xuICAgICAgaWYgKHRoaXMuc2hvd1Rvb2x0aXAgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy50b29sdGlwSXNTaG93ID0gZmFsc2VcbiAgICB9LFxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge30sXG59XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbi5jb2xvci1ncmlkLWNoYXJ0IHtcbiAgJi1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgJi1pdGVtIHtcbiAgICAvLyB3aWR0aDogNTBweDtcbiAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICB9XG59XG4ubGlzdC12aWV3LXBoYW50b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLmNvbG9yLWdyaWQtY2hhcnQtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG9wYWNpdHk6IDAuOTY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU3MzI1ZWRjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU3MzI1ZWRjJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlNzMyNWVkY1wiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTczMjVlZGMmcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU3MzI1ZWRjJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb2xvci1ncmlkLWNoYXJ0LXJvd1tkYXRhLXYtZTczMjVlZGNdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbG9yLWdyaWQtY2hhcnQtaXRlbVtkYXRhLXYtZTczMjVlZGNdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5jb2xvci1ncmlkLWNoYXJ0LWl0ZW1bZGF0YS12LWU3MzI1ZWRjXTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbn1cXG4ubGlzdC12aWV3LXBoYW50b21bZGF0YS12LWU3MzI1ZWRjXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmNvbG9yLWdyaWQtY2hhcnQtdG9vbHRpcFtkYXRhLXYtZTczMjVlZGNdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBvcGFjaXR5OiAwLjk2O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=