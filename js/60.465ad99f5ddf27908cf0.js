(window.webpackJsonp=window.webpackJsonp||[]).push([[60,109],{230:function(t,e,n){"use strict";n.r(e),n.d(e,"isSingleOverEllipsis",(function(){return i}));const i=function(t){const e=t,n=e.getBoundingClientRect().width,i=document.createRange();i.setStart(e,0),i.setEnd(e,e.childNodes.length);const o=i.getBoundingClientRect().width;return i.detach(),o>n}},256:function(t,e,n){"use strict";n.r(e);var i=n(230),o={name:"SinoSelectOption",props:{data:{type:Object,default:function(){return{}}},multiple:{type:Boolean,default:!1},isCheck:{type:Boolean,default:!1}},data:()=>({}),components:{},watch:{},computed:{},created(){},mounted(){this.$nextTick(()=>{this.$refs.selectLiContentRef&&(this.data.isShow=Object(i.isSingleOverEllipsis)(this.$refs.selectLiContentRef))})},beforeDestroy(){},methods:{select(t){this.$emit("select",t,this.isCheck)}}},s=(n(362),n(9)),a=Object(s.a)(o,(function(){var t=this,e=t._self._c;return e("li",{ref:"liRef",class:["sino-select-option",{multiple:t.multiple}],on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.select(t.data)}}},[(t.data.isShow,e("p",{ref:"selectLiContentRef",class:{select_active:t.isCheck}},[t._v("\n    "+t._s(t.data.name)+"\n  ")])),t._v(" "),t.isCheck?e("i",{staticClass:"check",attrs:{"aria-label":"图标: check"}},[e("svg",{attrs:{viewBox:"64 64 896 896","data-icon":"check",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"}},[e("path",{attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}})])]):t._e()])}),[],!1,null,"4d6dc760",null);e.default=a.exports},327:function(t,e,n){var i=n(2),o=n(363);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var s={insert:"head",singleton:!1};i(o,s);t.exports=o.locals||{}},362:function(t,e,n){"use strict";n(327)},363:function(t,e,n){(e=n(3)(!1)).push([t.i,"[data-v-4d6dc760]:export {\n  liHeight: 32;\n}\n.sino-select-option[data-v-4d6dc760] {\n  height: 32px;\n  display: block;\n  padding: 5px 12px;\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: 400;\n  font-size: 0.14rem;\n  line-height: 22px;\n  white-space: nowrap;\n  cursor: pointer;\n  position: relative;\n}\n.sino-select-option[data-v-4d6dc760]:hover {\n  background-color: rgba(39, 60, 112, 0.26);\n}\n.sino-select-option p[data-v-4d6dc760] {\n  white-space: nowrap;\n}\n.sino-select-option .check[data-v-4d6dc760] {\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n}\n.select_active[data-v-4d6dc760] {\n  font-weight: bold;\n}\n.multiple[data-v-4d6dc760] {\n  padding-right: 20px;\n}\ni[data-v-4d6dc760] {\n  font-size: 12px;\n}\n",""]),t.exports=e}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvdmlydHVhbC1zZWxlY3QvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3ZpcnR1YWwtc2VsZWN0L3NlbGVjdC1vcHRpb24vaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy92aXJ0dWFsLXNlbGVjdC9zZWxlY3Qtb3B0aW9uL2luZGV4LnZ1ZT83YWViIiwid2VicGFjazovLy9zcmMvcGFja2FnZXMvdmlydHVhbC1zZWxlY3Qvc2VsZWN0LW9wdGlvbi9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3ZpcnR1YWwtc2VsZWN0L3NlbGVjdC1vcHRpb24vaW5kZXgudnVlP2M5NjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3ZpcnR1YWwtc2VsZWN0L3NlbGVjdC1vcHRpb24vaW5kZXgudnVlP2VmNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3ZpcnR1YWwtc2VsZWN0L3NlbGVjdC1vcHRpb24vaW5kZXgudnVlPzZlMjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL3ZpcnR1YWwtc2VsZWN0L3NlbGVjdC1vcHRpb24vaW5kZXgudnVlPzM0N2EiXSwibmFtZXMiOlsiaXNTaW5nbGVPdmVyRWxsaXBzaXMiLCJlbCIsInRleHRDb250ZW50IiwidGFyZ2V0VyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2V0U3RhcnQiLCJzZXRFbmQiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwicmFuZ2VXaWR0aCIsImRldGFjaCIsIm5hbWUiLCJwcm9wcyIsImRhdGEiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsIm11bHRpcGxlIiwiQm9vbGVhbiIsImlzQ2hlY2siLCJjb21wb25lbnRzIiwid2F0Y2giLCJjb21wdXRlZCIsImNyZWF0ZWQiLCJtb3VudGVkIiwiJG5leHRUaWNrIiwiJHJlZnMiLCJzZWxlY3RMaUNvbnRlbnRSZWYiLCJpc1Nob3ciLCJiZWZvcmVEZXN0cm95IiwibWV0aG9kcyIsInNlbGVjdCIsIiRlbWl0IiwiY29tcG9uZW50IiwiX3ZtIiwidGhpcyIsIl9jIiwiX3NlbGYiLCJyZWYiLCJjbGFzcyIsIm9uIiwiJGV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJzZWxlY3RfYWN0aXZlIiwiX3YiLCJfcyIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJfZSIsImFwaSIsImNvbnRlbnQiLCJfX2VzTW9kdWxlIiwibW9kdWxlIiwiaSIsIm9wdGlvbnMiLCJleHBvcnRzIiwibG9jYWxzIiwiX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIiwicHVzaCJdLCJtYXBwaW5ncyI6IitGQUFBLDREQU9PLE1BQU1BLEVBQXVCLFNBQVVDLEdBQzVDLE1BQU1DLEVBQWNELEVBQ2RFLEVBQVVELEVBQVlFLHdCQUF3QkMsTUFDOUNDLEVBQVFDLFNBQVNDLGNBQ3ZCRixFQUFNRyxTQUFTUCxFQUFhLEdBQzVCSSxFQUFNSSxPQUFPUixFQUFhQSxFQUFZUyxXQUFXQyxRQUNqRCxNQUFNQyxFQUFhUCxFQUFNRix3QkFBd0JDLE1BS2pELE9BSkFDLEVBQU1RLFNBSUNELEVBQWFWLEksd0NDbEJ0QixJLFNDQWdOLEVDdUNqTSxDQUNmWSxLQUFBLG1CQUNBQyxNQUFBLENBQ0FDLEtBQUEsQ0FDQUMsS0FBQUMsT0FDQUMsUUFBQSxXQUNBLFdBR0FDLFNBQUEsQ0FDQUgsS0FBQUksUUFDQUYsU0FBQSxHQUVBRyxRQUFBLENBQ0FMLEtBQUFJLFFBQ0FGLFNBQUEsSUFHQUgsVUFDQSxJQUVBTyxXQUFBLEdBQ0FDLE1BQUEsR0FDQUMsU0FBQSxHQUNBQyxZQUNBQyxVQUVBLEtBQUFDLFVBQUEsS0FDQSxLQUFBQyxNQUFBQyxxQkFDQSxLQUFBZCxLQUFBZSxPQUFBaEMsK0JBQUEsS0FBQThCLE1BQUFDLHdCQUlBRSxrQkFDQUMsUUFBQSxDQUNBQyxPQUFBbEIsR0FDQSxLQUFBbUIsTUFBQSxTQUFBbkIsRUFBQSxLQUFBTSxZLGdCQ25FSWMsRUFBWSxZQUNkLEdIVFcsV0FBa0IsSUFBSUMsRUFBSUMsS0FBS0MsRUFBR0YsRUFBSUcsTUFBTUQsR0FBRyxPQUFPQSxFQUFHLEtBQUssQ0FBQ0UsSUFBSSxRQUFRQyxNQUFNLENBQUMscUJBQXNCLENBQUV0QixTQUFVaUIsRUFBSWpCLFdBQVl1QixHQUFHLENBQUMsTUFBUSxTQUFTQyxHQUF5RCxPQUFqREEsRUFBT0Msa0JBQWtCRCxFQUFPRSxpQkFBd0JULEVBQUlILE9BQU9HLEVBQUlyQixTQUFTLEVBQUdxQixFQUFJckIsS0FBS2UsT0FBZ0JRLEVBQUcsSUFBSSxDQUFDRSxJQUFJLHFCQUFxQkMsTUFBTSxDQUFFSyxjQUFlVixFQUFJZixVQUFXLENBQUNlLEVBQUlXLEdBQUcsU0FBU1gsRUFBSVksR0FBR1osRUFBSXJCLEtBQUtGLE1BQU0sV0FBbUJ1QixFQUFJVyxHQUFHLEtBQU1YLEVBQUlmLFFBQVNpQixFQUFHLElBQUksQ0FBQ1csWUFBWSxRQUFRQyxNQUFNLENBQUMsYUFBYSxjQUFjLENBQUNaLEVBQUcsTUFBTSxDQUFDWSxNQUFNLENBQUMsUUFBVSxnQkFBZ0IsWUFBWSxRQUFRLE1BQVEsTUFBTSxPQUFTLE1BQU0sS0FBTyxlQUFlLGNBQWMsT0FBTyxVQUFZLFVBQVUsQ0FBQ1osRUFBRyxPQUFPLENBQUNZLE1BQU0sQ0FBQyxFQUFJLG1NQUFtTWQsRUFBSWUsU0FFejFCLElHVXBCLEVBQ0EsS0FDQSxXQUNBLE1BSWEsVUFBQWhCLEUsNkJDbkJmLElBQUlpQixFQUFNLEVBQVEsR0FDRkMsRUFBVSxFQUFRLEtBSUMsaUJBRnZCQSxFQUFVQSxFQUFRQyxXQUFhRCxFQUFRbkMsUUFBVW1DLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0UsRUFBT0MsRUFBSUgsRUFBUyxNQUc5QyxJQUFJSSxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FFUEwsRUFBSUMsRUFBU0ksR0FJMUJGLEVBQU9HLFFBQVVMLEVBQVFNLFFBQVUsSSxpQ0NsQm5DLFEscUJDRUFELEVBRGtDLEVBQVEsRUFDaENFLEVBQTRCLElBRTlCQyxLQUFLLENBQUNOLEVBQU9DLEVBQUksd3dCQUF5d0IsS0FFbHlCRCxFQUFPRyxRQUFVQSIsImZpbGUiOiJqcy82MC40NjVhZDk5ZjVkZGYyNzkwOGNmMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiBhdGRvd1xuICogQERhdGU6IDIwMjItMDktMjMgMjA6MDU6MzNcbiAqIEBMYXN0RWRpdG9yczogbnVsbFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wOS0yNCAyMTozNDoxNlxuICogQERlc2NyaXB0aW9uOiBmaWxlIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBpc1NpbmdsZU92ZXJFbGxpcHNpcyA9IGZ1bmN0aW9uIChlbCkge1xuICBjb25zdCB0ZXh0Q29udGVudCA9IGVsXG4gIGNvbnN0IHRhcmdldFcgPSB0ZXh0Q29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgcmFuZ2Uuc2V0U3RhcnQodGV4dENvbnRlbnQsIDApXG4gIHJhbmdlLnNldEVuZCh0ZXh0Q29udGVudCwgdGV4dENvbnRlbnQuY2hpbGROb2Rlcy5sZW5ndGgpXG4gIGNvbnN0IHJhbmdlV2lkdGggPSByYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICByYW5nZS5kZXRhY2goKSAvL+S7juaWh+aho+S4reWIhuemu1xuICAvLyByYW5nZSA9IG51bGwgLy/op6PpmaTlvJXnlKhcbiAgLy8gY29uc29sZS5sb2coJ3RhcmdldFc6JywgdGFyZ2V0VylcbiAgLy8gY29uc29sZS5sb2coJ3JhbmdlV2lkdGg6JywgcmFuZ2VXaWR0aClcbiAgcmV0dXJuIHJhbmdlV2lkdGggPiB0YXJnZXRXXG59XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCl7dmFyIF92bT10aGlzLF9jPV92bS5fc2VsZi5fYztyZXR1cm4gX2MoJ2xpJyx7cmVmOlwibGlSZWZcIixjbGFzczpbJ3Npbm8tc2VsZWN0LW9wdGlvbicsIHsgbXVsdGlwbGU6IF92bS5tdWx0aXBsZSB9XSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyRldmVudC5wcmV2ZW50RGVmYXVsdCgpO3JldHVybiBfdm0uc2VsZWN0KF92bS5kYXRhKX19fSxbKCFfdm0uZGF0YS5pc1Nob3cgfHwgdHJ1ZSk/X2MoJ3AnLHtyZWY6XCJzZWxlY3RMaUNvbnRlbnRSZWZcIixjbGFzczp7IHNlbGVjdF9hY3RpdmU6IF92bS5pc0NoZWNrIH19LFtfdm0uX3YoXCJcXG4gICAgXCIrX3ZtLl9zKF92bS5kYXRhLm5hbWUpK1wiXFxuICBcIildKTpfdm0uX2UoKSxfdm0uX3YoXCIgXCIpLChfdm0uaXNDaGVjayk/X2MoJ2knLHtzdGF0aWNDbGFzczpcImNoZWNrXCIsYXR0cnM6e1wiYXJpYS1sYWJlbFwiOlwi5Zu+5qCHOiBjaGVja1wifX0sW19jKCdzdmcnLHthdHRyczp7XCJ2aWV3Qm94XCI6XCI2NCA2NCA4OTYgODk2XCIsXCJkYXRhLWljb25cIjpcImNoZWNrXCIsXCJ3aWR0aFwiOlwiMWVtXCIsXCJoZWlnaHRcIjpcIjFlbVwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCIsXCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLFwiZm9jdXNhYmxlXCI6XCJmYWxzZVwifX0sW19jKCdwYXRoJyx7YXR0cnM6e1wiZFwiOlwiTTkxMiAxOTBoLTY5LjljLTkuOCAwLTE5LjEgNC41LTI1LjEgMTIuMkw0MDQuNyA3MjQuNSAyMDcgNDc0YTMyIDMyIDAgMCAwLTI1LjEtMTIuMkgxMTJjLTYuNyAwLTEwLjQgNy43LTYuMyAxMi45bDI3My45IDM0N2MxMi44IDE2LjIgMzcuNCAxNi4yIDUwLjMgMGw0ODguNC02MTguOWM0LjEtNS4xLjQtMTIuOC02LjMtMTIuOHpcIn19KV0pXSk6X3ZtLl9lKCldKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPCEtLVxuICogQEF1dGhvcjogYXRkb3dcbiAqIEBEYXRlOiAyMDIyLTA5LTIzIDE3OjE1OjExXG4gKiBATGFzdEVkaXRvcnM6IG51bGxcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMDktMjQgMjI6NDY6NTVcbiAqIEBEZXNjcmlwdGlvbjogZmlsZSBkZXNjcmlwdGlvblxuLS0+XG48dGVtcGxhdGU+XG4gIDxsaSBAY2xpY2suc3RvcC5wcmV2ZW50PVwic2VsZWN0KGRhdGEpXCIgcmVmPVwibGlSZWZcIiA6Y2xhc3M9XCJbJ3Npbm8tc2VsZWN0LW9wdGlvbicsIHsgbXVsdGlwbGU6IG11bHRpcGxlIH1dXCI+XG4gICAgPHAgdi1pZj1cIiFkYXRhLmlzU2hvdyB8fCB0cnVlXCIgcmVmPVwic2VsZWN0TGlDb250ZW50UmVmXCIgOmNsYXNzPVwieyBzZWxlY3RfYWN0aXZlOiBpc0NoZWNrIH1cIj5cbiAgICAgIHt7IGRhdGEubmFtZSB9fVxuICAgIDwvcD5cbiAgICA8IS0tIDxhLXRvb2x0aXAgcGxhY2VtZW50PVwidG9wTGVmdFwiIHYtaWY9XCJkYXRhLmlzU2hvd1wiPlxuICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPlxuICAgICAgICA8cCB2LXRleHQ9XCJkYXRhLm5hbWVcIj48L3A+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHAgdi10ZXh0PVwiZGF0YS5uYW1lXCIgOmNsYXNzPVwiWydzaW5nbGUtb3Zlci1lbGxpcHNpcycsIHsgc2VsZWN0X2FjdGl2ZTogaXNDaGVja31dXCI+PC9wPlxuICAgIDwvYS10b29sdGlwPiAtLT5cbiAgICA8aSB2LWlmPVwiaXNDaGVja1wiIGFyaWEtbGFiZWw9XCLlm77moIc6IGNoZWNrXCIgY2xhc3M9XCJjaGVja1wiPlxuICAgICAgPHN2Z1xuICAgICAgICB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiXG4gICAgICAgIGRhdGEtaWNvbj1cImNoZWNrXCJcbiAgICAgICAgd2lkdGg9XCIxZW1cIlxuICAgICAgICBoZWlnaHQ9XCIxZW1cIlxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICBjbGFzcz1cIlwiXG4gICAgICA+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk05MTIgMTkwaC02OS45Yy05LjggMC0xOS4xIDQuNS0yNS4xIDEyLjJMNDA0LjcgNzI0LjUgMjA3IDQ3NGEzMiAzMiAwIDAgMC0yNS4xLTEyLjJIMTEyYy02LjcgMC0xMC40IDcuNy02LjMgMTIuOWwyNzMuOSAzNDdjMTIuOCAxNi4yIDM3LjQgMTYuMiA1MC4zIDBsNDg4LjQtNjE4LjljNC4xLTUuMS40LTEyLjgtNi4zLTEyLjh6XCJcbiAgICAgICAgPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgIDwvaT5cbiAgPC9saT5cbjwvdGVtcGxhdGU+XG7CoFxuPHNjcmlwdD5cbmltcG9ydCB7IGlzU2luZ2xlT3ZlckVsbGlwc2lzIH0gZnJvbSAnLi4vdXRpbHMnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdTaW5vU2VsZWN0T3B0aW9uJyxcbiAgcHJvcHM6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfSxcbiAgICB9LFxuICAgIG11bHRpcGxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBpc0NoZWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge31cbiAgfSxcbiAgY29tcG9uZW50czoge30sXG4gIHdhdGNoOiB7fSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBjcmVhdGVkKCkge30sXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8g5Yik5pat5piv5ZCm5Ye6546wZWxsaXBzaXNcbiAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICBpZiAodGhpcy4kcmVmcy5zZWxlY3RMaUNvbnRlbnRSZWYpIHtcbiAgICAgICAgdGhpcy5kYXRhLmlzU2hvdyA9IGlzU2luZ2xlT3ZlckVsbGlwc2lzKHRoaXMuJHJlZnMuc2VsZWN0TGlDb250ZW50UmVmKVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7fSxcbiAgbWV0aG9kczoge1xuICAgIHNlbGVjdChkYXRhKSB7XG4gICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBkYXRhLCB0aGlzLmlzQ2hlY2spXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuwqBcbjxzdHlsZSBsYW5nPVwibGVzc1wiIHNjb3BlZD5cbkBpbXBvcnQgJy4vc2VsZWN0LW9wdGlvbi1zdHlsZXMnO1xuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDZkYzc2MCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZDZkYzc2MCZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGQ2ZGM3NjBcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRkNmRjNzYwJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZDZkYzc2MCZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJbZGF0YS12LTRkNmRjNzYwXTpleHBvcnQge1xcbiAgbGlIZWlnaHQ6IDMyO1xcbn1cXG4uc2luby1zZWxlY3Qtb3B0aW9uW2RhdGEtdi00ZDZkYzc2MF0ge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA1cHggMTJweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMC4xNHJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnNpbm8tc2VsZWN0LW9wdGlvbltkYXRhLXYtNGQ2ZGM3NjBdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzksIDYwLCAxMTIsIDAuMjYpO1xcbn1cXG4uc2luby1zZWxlY3Qtb3B0aW9uIHBbZGF0YS12LTRkNmRjNzYwXSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc2luby1zZWxlY3Qtb3B0aW9uIC5jaGVja1tkYXRhLXYtNGQ2ZGM3NjBdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5zZWxlY3RfYWN0aXZlW2RhdGEtdi00ZDZkYzc2MF0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5tdWx0aXBsZVtkYXRhLXYtNGQ2ZGM3NjBdIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcbmlbZGF0YS12LTRkNmRjNzYwXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9