(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{266:function(n,e,t){"use strict";t.r(e);var s={name:"Magnify",props:{title:{type:String}},data:()=>({showState:!1}),components:{},watch:{showState:{immediate:!0,handler:function(n){this.showState?document.body.style.overflow="hidden":document.body.style.overflow=""}}},computed:{},created(){},mounted(){document.addEventListener("keydown",this.keyCodeResolve),this.$once("hook:beforeDestroy",()=>{document.removeEventListener("keydown",this.keyCodeResolve)})},beforeDestroy(){document.body.style.overflow=""},methods:{close(){this.showState=!1,this.$emit("close",!0)},show(){this.showState=!0},keyCodeResolve(n){27==n.keyCode&&this.close()}}},o=(t(375),t(9)),a=Object(o.a)(s,(function(){var n=this,e=n._self._c;return n.showState?e("div",{staticClass:"s-magnify"},[e("div",{staticClass:"s-magnify-content"},[e("div",{staticClass:"s-magnify-header"},[e("span",{staticClass:"title"},[n._v(n._s(n.title))]),n._v(" "),e("div",{staticClass:"close"},[e("i",{staticClass:"iconfont cl-icon-close",on:{click:n.close}})])]),n._v(" "),e("div",{staticClass:"s-magnify-slot"},[n._t("default")],2)])]):n._e()}),[],!1,null,"a13f6e54",null);e.default=a.exports},352:function(n,e,t){var s=t(2),o=t(376);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};s(o,a);n.exports=o.locals||{}},375:function(n,e,t){"use strict";t(352)},376:function(n,e,t){(e=t(3)(!1)).push([n.i,".s-magnify[data-v-a13f6e54] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(1, 1, 1, 0.3);\n  z-index: 1001;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.s-magnify .close[data-v-a13f6e54] {\n  transition: all 0.2s;\n  cursor: pointer;\n}\n.s-magnify .close[data-v-a13f6e54]:hover {\n  transform: rotate(90deg);\n}\n.s-magnify .close i[data-v-a13f6e54] {\n  font-size: 23px;\n}\n.s-magnify .s-magnify-content[data-v-a13f6e54] {\n  background: white;\n  width: calc(100vw - 100px);\n  height: calc(100vh - 100px);\n  border-radius: 10px;\n  box-sizing: border-box;\n}\n.s-magnify .s-magnify-content .s-magnify-header[data-v-a13f6e54] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #eff1f5;\n  padding: 10px 20px;\n  height: 50px;\n}\n.s-magnify .s-magnify-content .s-magnify-header .title[data-v-a13f6e54] {\n  font-weight: 600;\n  font-size: 18px;\n  font-stretch: normal;\n  letter-spacing: 1px;\n  color: #333333;\n}\n.s-magnify .s-magnify-content .s-magnify-slot[data-v-a13f6e54] {\n  padding: 20px;\n}\n",""]),n.exports=e}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvdmlydHVhbC1zY3JvbGwtbWlsZXN0b25lLXRhYmxlL3NyYy9tb2R1bGVzL01hZ25pZnkudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy92aXJ0dWFsLXNjcm9sbC1taWxlc3RvbmUtdGFibGUvc3JjL21vZHVsZXMvTWFnbmlmeS52dWU/YmU2MiIsIndlYnBhY2s6Ly8vc3JjL3BhY2thZ2VzL3ZpcnR1YWwtc2Nyb2xsLW1pbGVzdG9uZS10YWJsZS9zcmMvbW9kdWxlcy9NYWduaWZ5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvdmlydHVhbC1zY3JvbGwtbWlsZXN0b25lLXRhYmxlL3NyYy9tb2R1bGVzL01hZ25pZnkudnVlP2JmODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3ZpcnR1YWwtc2Nyb2xsLW1pbGVzdG9uZS10YWJsZS9zcmMvbW9kdWxlcy9NYWduaWZ5LnZ1ZT8wM2Y2Iiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy92aXJ0dWFsLXNjcm9sbC1taWxlc3RvbmUtdGFibGUvc3JjL21vZHVsZXMvTWFnbmlmeS52dWU/MzUzYyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvdmlydHVhbC1zY3JvbGwtbWlsZXN0b25lLXRhYmxlL3NyYy9tb2R1bGVzL01hZ25pZnkudnVlPzdmZDIiXSwibmFtZXMiOlsibmFtZSIsInByb3BzIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwiZGF0YSIsInNob3dTdGF0ZSIsImNvbXBvbmVudHMiLCJ3YXRjaCIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJwYXJhbXMiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93IiwiY29tcHV0ZWQiLCJjcmVhdGVkIiwibW91bnRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlUmVzb2x2ZSIsIiRvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJlZm9yZURlc3Ryb3kiLCJtZXRob2RzIiwiY2xvc2UiLCIkZW1pdCIsInNob3ciLCJldmVudCIsImtleUNvZGUiLCJjb21wb25lbnQiLCJfdm0iLCJ0aGlzIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX3YiLCJfcyIsIm9uIiwiX3QiLCJfZSIsImFwaSIsImNvbnRlbnQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImkiLCJvcHRpb25zIiwiZXhwb3J0cyIsImxvY2FscyIsIl9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyIsInB1c2giXSwibWFwcGluZ3MiOiJrR0FBQSxJQ0F1TixFQ2lCeE0sQ0FDZkEsS0FBQSxVQUNBQyxNQUFBLENBQ0FDLE1BQUEsQ0FDQUMsS0FBQUMsU0FHQUMsVUFDQSxDQUNBQyxXQUFBLElBR0FDLFdBQUEsR0FDQUMsTUFBQSxDQUNBRixVQUFBLENBQ0FHLFdBQUEsRUFDQUMsUUFBQSxTQUFBQyxHQUNBLEtBQUFMLFVBQ0FNLFNBQUFDLEtBQUFDLE1BQUFDLFNBQUEsU0FFQUgsU0FBQUMsS0FBQUMsTUFBQUMsU0FBQSxNQUtBQyxTQUFBLEdBQ0FDLFlBQ0FDLFVBQ0FOLFNBQUFPLGlCQUFBLGVBQUFDLGdCQUNBLEtBQUFDLE1BQUEsMEJBQ0FULFNBQUFVLG9CQUFBLGVBQUFGLG1CQUdBRyxnQkFDQVgsU0FBQUMsS0FBQUMsTUFBQUMsU0FBQSxJQUVBUyxRQUFBLENBQ0FDLFFBQ0EsS0FBQW5CLFdBQUEsRUFDQSxLQUFBb0IsTUFBQSxhQUVBQyxPQUNBLEtBQUFyQixXQUFBLEdBRUFjLGVBQUFRLEdBQ0EsSUFBQUEsRUFBQUMsU0FDQSxLQUFBSixXLGdCQ3ZESUssRUFBWSxZQUNkLEdIVFcsV0FBa0IsSUFBSUMsRUFBSUMsS0FBS0MsRUFBR0YsRUFBSUcsTUFBTUQsR0FBRyxPQUFRRixFQUFJekIsVUFBVzJCLEVBQUcsTUFBTSxDQUFDRSxZQUFZLGFBQWEsQ0FBQ0YsRUFBRyxNQUFNLENBQUNFLFlBQVkscUJBQXFCLENBQUNGLEVBQUcsTUFBTSxDQUFDRSxZQUFZLG9CQUFvQixDQUFDRixFQUFHLE9BQU8sQ0FBQ0UsWUFBWSxTQUFTLENBQUNKLEVBQUlLLEdBQUdMLEVBQUlNLEdBQUdOLEVBQUk3QixVQUFVNkIsRUFBSUssR0FBRyxLQUFLSCxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxTQUFTLENBQUNGLEVBQUcsSUFBSSxDQUFDRSxZQUFZLHlCQUF5QkcsR0FBRyxDQUFDLE1BQVFQLEVBQUlOLGFBQWFNLEVBQUlLLEdBQUcsS0FBS0gsRUFBRyxNQUFNLENBQUNFLFlBQVksa0JBQWtCLENBQUNKLEVBQUlRLEdBQUcsWUFBWSxPQUFPUixFQUFJUyxPQUU5YixJR1VwQixFQUNBLEtBQ0EsV0FDQSxNQUlhLFVBQUFWLEUsNkJDbkJmLElBQUlXLEVBQU0sRUFBUSxHQUNGQyxFQUFVLEVBQVEsS0FJQyxpQkFGdkJBLEVBQVVBLEVBQVFDLFdBQWFELEVBQVFFLFFBQVVGLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0csRUFBT0MsRUFBSUosRUFBUyxNQUc5QyxJQUFJSyxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FFUE4sRUFBSUMsRUFBU0ssR0FJMUJGLEVBQU9HLFFBQVVOLEVBQVFPLFFBQVUsSSxpQ0NsQm5DLFEscUJDRUFELEVBRGtDLEVBQVEsRUFDaENFLEVBQTRCLElBRTlCQyxLQUFLLENBQUNOLEVBQU9DLEVBQUksNG9DQUE2b0MsS0FFdHFDRCxFQUFPRyxRQUFVQSIsImZpbGUiOiJqcy83Mi5iNGYyYTEzYWFlZTIxZmIyOWE3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKXt2YXIgX3ZtPXRoaXMsX2M9X3ZtLl9zZWxmLl9jO3JldHVybiAoX3ZtLnNob3dTdGF0ZSk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicy1tYWduaWZ5XCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJzLW1hZ25pZnktY29udGVudFwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicy1tYWduaWZ5LWhlYWRlclwifSxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInRpdGxlXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjbG9zZVwifSxbX2MoJ2knLHtzdGF0aWNDbGFzczpcImljb25mb250IGNsLWljb24tY2xvc2VcIixvbjp7XCJjbGlja1wiOl92bS5jbG9zZX19KV0pXSksX3ZtLl92KFwiIFwiKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJzLW1hZ25pZnktc2xvdFwifSxbX3ZtLl90KFwiZGVmYXVsdFwiKV0sMildKV0pOl92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYWduaWZ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFnbmlmeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInMtbWFnbmlmeVwiIHYtaWY9XCJzaG93U3RhdGVcIj5cbiAgICA8ZGl2IGNsYXNzPVwicy1tYWduaWZ5LWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzLW1hZ25pZnktaGVhZGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJpY29uZm9udCBjbC1pY29uLWNsb3NlXCIgQGNsaWNrPVwiY2xvc2VcIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicy1tYWduaWZ5LXNsb3RcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ01hZ25pZnknLFxuICBwcm9wczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd1N0YXRlOiBmYWxzZSxcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHt9LFxuICB3YXRjaDoge1xuICAgIHNob3dTdGF0ZToge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBpZiAodGhpcy5zaG93U3RhdGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJycgLy8g5Ye6546w5rua5Yqo5p2hXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBjcmVhdGVkKCkge30sXG4gIG1vdW50ZWQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5Q29kZVJlc29sdmUpXG4gICAgdGhpcy4kb25jZSgnaG9vazpiZWZvcmVEZXN0cm95JywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMua2V5Q29kZVJlc29sdmUpXG4gICAgfSlcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJycgLy8g5Ye6546w5rua5Yqo5p2hXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvd1N0YXRlID0gZmFsc2VcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJywgdHJ1ZSlcbiAgICB9LFxuICAgIHNob3coKSB7XG4gICAgICB0aGlzLnNob3dTdGF0ZSA9IHRydWVcbiAgICB9LFxuICAgIGtleUNvZGVSZXNvbHZlKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbi5zLW1hZ25pZnkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxLCAxLCAxLCAwLjMpO1xuICB6LWluZGV4OiAxMDAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLmNsb3NlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB9XG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgfVxuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAucy1tYWduaWZ5LWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTAwcHgpO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAucy1tYWduaWZ5LWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMWY1O1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICB9XG4gICAgfVxuICAgIC5zLW1hZ25pZnktc2xvdCB7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFnbmlmeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTEzZjZlNTQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYWduaWZ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWduaWZ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL01hZ25pZnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTEzZjZlNTQmcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTEzZjZlNTRcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hZ25pZnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTEzZjZlNTQmcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWVcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFnbmlmeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTNmNmU1NCZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZVwiIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zLW1hZ25pZnlbZGF0YS12LWExM2Y2ZTU0XSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEsIDEsIDEsIDAuMyk7XFxuICB6LWluZGV4OiAxMDAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zLW1hZ25pZnkgLmNsb3NlW2RhdGEtdi1hMTNmNmU1NF0ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zLW1hZ25pZnkgLmNsb3NlW2RhdGEtdi1hMTNmNmU1NF06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4ucy1tYWduaWZ5IC5jbG9zZSBpW2RhdGEtdi1hMTNmNmU1NF0ge1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbn1cXG4ucy1tYWduaWZ5IC5zLW1hZ25pZnktY29udGVudFtkYXRhLXYtYTEzZjZlNTRdIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAxMDBweCk7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDBweCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnMtbWFnbmlmeSAucy1tYWduaWZ5LWNvbnRlbnQgLnMtbWFnbmlmeS1oZWFkZXJbZGF0YS12LWExM2Y2ZTU0XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMWY1O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4ucy1tYWduaWZ5IC5zLW1hZ25pZnktY29udGVudCAucy1tYWduaWZ5LWhlYWRlciAudGl0bGVbZGF0YS12LWExM2Y2ZTU0XSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxufVxcbi5zLW1hZ25pZnkgLnMtbWFnbmlmeS1jb250ZW50IC5zLW1hZ25pZnktc2xvdFtkYXRhLXYtYTEzZjZlNTRdIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9