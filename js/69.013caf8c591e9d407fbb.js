(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{240:function(t,a,e){"use strict";e.r(a);e(24);var r={name:"ColorGridChart",props:{data:{type:Array,default:function(){return[[]]}},itemHeight:{type:Number,default:50}},data:()=>({maxValue:0,minValue:0,colors:[],startColor:"#eceff9",endColor:"#273C70"}),components:{},watch:{data:{immediate:!0,handler:function(){const{max:t,min:a}=this.calDataBoundaryValue();this.maxValue=t,this.minValue=a;let e=0;e=0===this.minValue?0===this.maxValue?0:this.maxValue-this.minValue+1:this.maxValue-this.minValue;const r=this.gradientColors(this.startColor,this.endColor,e);this.colors=r}}},computed:{},created(){},mounted(){},methods:{gradientColors(t,a,e,r){var o,n,i,l,s=[],c=[];r=r||1;var u=function(t){return Math.pow(t/255,r)};for(t=this.parseColor(t).map(u),a=this.parseColor(a).map(u),o=0;o<e;o++){for(l=1-(i=o/(e-1)),n=0;n<3;n++)c[n]=this.pad(Math.round(255*Math.pow(t[n]*l+a[n]*i,1/r)).toString(16));s.push("#"+c.join(""))}return s},parseColor:t=>4===t.length?t.substr(1).split("").map((function(t){return 17*parseInt(t,16)})):[t.substr(1,2),t.substr(3,2),t.substr(5,2)].map((function(t){return parseInt(t,16)})),pad:t=>1===t.length?"0"+t:t,calDataBoundaryValue(){let t=0,a=0;return this.data.forEach(e=>{e&&e.forEach(e=>{e.value>t&&(t=e.value),e.value<a&&(a=e.value)})}),{max:t,min:a}},calItemColor(t){let a="white",e=Math.ceil((this.colors.length-1)*t/(this.maxValue-this.minValue));return e>this.colors.length-1&&(e=this.colors.length-1),a=this.colors[e],{color:a,colorsIndex:e}},itemClick(t){this.$emit("itemClick",t)}},beforeDestroy(){}},o=(e(343),e(9)),n=Object(o.a)(r,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"color-grid-chart"},t._l(t.data,(function(e,r){return a("div",{key:r,staticClass:"color-grid-chart-row",style:{height:t.itemHeight+"px"}},t._l(e,(function(e,r){return a("div",{key:r,staticClass:"color-grid-chart-item",style:{background:t.calItemColor(e.value).color},on:{click:function(a){return t.itemClick(e)}}},[t.$scopedSlots.default?[t._t("default",null,{record:e})]:a("span",[t._v(" "+t._s(e.value))])],2)})),0)})),0)}),[],!1,null,"070ca96a",null);a.default=n.exports},316:function(t,a,e){var r=e(2),o=e(344);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var n={insert:"head",singleton:!1};r(o,n);t.exports=o.locals||{}},343:function(t,a,e){"use strict";e(316)},344:function(t,a,e){(a=e(3)(!1)).push([t.i,".color-grid-chart-row[data-v-070ca96a] {\n  display: flex;\n  width: 100%;\n}\n.color-grid-chart-item[data-v-070ca96a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  flex: 1;\n  border: 1px solid white;\n}\n.color-grid-chart-item[data-v-070ca96a]:hover {\n  border-color: black;\n}\n",""]),t.exports=a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC9zcmMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy9jb2xvci1ncmlkLWNoYXJ0L3NyYy9pbmRleC52dWU/ZjFlNCIsIndlYnBhY2s6Ly8vc3JjL3BhY2thZ2VzL2NvbG9yLWdyaWQtY2hhcnQvc3JjL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC9zcmMvaW5kZXgudnVlPzE4M2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL2NvbG9yLWdyaWQtY2hhcnQvc3JjL2luZGV4LnZ1ZT9iYTYwIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy9jb2xvci1ncmlkLWNoYXJ0L3NyYy9pbmRleC52dWU/NzI0OSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC9zcmMvaW5kZXgudnVlPzYwMTQiXSwibmFtZXMiOlsibmFtZSIsInByb3BzIiwiZGF0YSIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJpdGVtSGVpZ2h0IiwiTnVtYmVyIiwibWF4VmFsdWUiLCJtaW5WYWx1ZSIsImNvbG9ycyIsInN0YXJ0Q29sb3IiLCJlbmRDb2xvciIsImNvbXBvbmVudHMiLCJ3YXRjaCIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJtYXgiLCJtaW4iLCJjYWxEYXRhQm91bmRhcnlWYWx1ZSIsInN0ZXAiLCJncmFkaWVudENvbG9ycyIsImNvbXB1dGVkIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJtZXRob2RzIiwic3RhcnQiLCJlbmQiLCJzdGVwcyIsImdhbW1hIiwiaSIsImoiLCJtcyIsIm1lIiwib3V0cHV0Iiwic28iLCJub3JtYWxpemUiLCJjaGFubmVsIiwiTWF0aCIsInBvdyIsInBhcnNlQ29sb3IiLCJtYXAiLCJwYWQiLCJyb3VuZCIsInRvU3RyaW5nIiwicHVzaCIsImpvaW4iLCJoZXhTdHIiLCJsZW5ndGgiLCJzdWJzdHIiLCJzcGxpdCIsInMiLCJwYXJzZUludCIsImZvckVhY2giLCJkYXRhSXRlbSIsIml0ZW0iLCJ2YWx1ZSIsImNhbEl0ZW1Db2xvciIsImNvbG9yIiwiY29sb3JzSW5kZXgiLCJjZWlsIiwiaXRlbUNsaWNrIiwiJGVtaXQiLCJiZWZvcmVEZXN0cm95IiwiY29tcG9uZW50IiwiX3ZtIiwidGhpcyIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl9sIiwiZGF0YVJvdyIsImRhdGFSb3dJbmRleCIsImtleSIsInN0eWxlIiwiaGVpZ2h0IiwiZGF0YUl0ZW1JbmRleCIsImJhY2tncm91bmQiLCJvbiIsIiRldmVudCIsIiRzY29wZWRTbG90cyIsIl90IiwiX3YiLCJfcyIsImFwaSIsImNvbnRlbnQiLCJfX2VzTW9kdWxlIiwibW9kdWxlIiwib3B0aW9ucyIsImV4cG9ydHMiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iXSwibWFwcGluZ3MiOiJ3R0FBQSxJQ0ErTSxFQytCaE0sQ0FDZkEsS0FBQSxpQkFDQUMsTUFBQSxDQUNBQyxLQUFBLENBQ0FDLEtBQUFDLE1BQ0FDLFFBQUEsV0FDQSxhQUdBQyxXQUFBLENBQ0FILEtBQUFJLE9BQ0FGLFFBQUEsS0FHQUgsVUFDQSxDQUNBTSxTQUFBLEVBQ0FDLFNBQUEsRUFDQUMsT0FBQSxHQUNBQyxXQUFBLFVBQ0FDLFNBQUEsWUFHQUMsV0FBQSxHQUNBQyxNQUFBLENBQ0FaLEtBQUEsQ0FDQWEsV0FBQSxFQUNBQyxRQUFBLFdBQ0EsVUFBQUMsRUFBQSxJQUFBQyxHQUFBLEtBQUFDLHVCQUNBLEtBQUFYLFNBQUFTLEVBQ0EsS0FBQVIsU0FBQVMsRUFDQSxJQUFBRSxFQUFBLEVBR0FBLEVBRkEsU0FBQVgsU0FDQSxTQUFBRCxTQUNBLEVBRUEsS0FBQUEsU0FBQSxLQUFBQyxTQUFBLEVBR0EsS0FBQUQsU0FBQSxLQUFBQyxTQUVBLE1BQUFDLEVBQUEsS0FBQVcsZUFBQSxLQUFBVixXQUFBLEtBQUFDLFNBQUFRLEdB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LEVBQVEsR0FDRkMsRUFBVSxFQUFRLEtBSUMsaUJBRnZCQSxFQUFVQSxFQUFRQyxXQUFhRCxFQUFRaEYsUUFBVWdGLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0UsRUFBT3pELEVBQUl1RCxFQUFTLE1BRzlDLElBQUlHLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVQSixFQUFJQyxFQUFTRyxHQUkxQkQsRUFBT0UsUUFBVUosRUFBUUssUUFBVSxJLGlDQ2xCbkMsUSxxQkNFQUQsRUFEa0MsRUFBUSxFQUNoQ0UsRUFBNEIsSUFFOUI5QyxLQUFLLENBQUMwQyxFQUFPekQsRUFBSSwyVUFBNFUsS0FFcld5RCxFQUFPRSxRQUFVQSIsImZpbGUiOiJqcy82OS4wMTNjYWY4YzU5MWU5ZDQwN2ZiYi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKXt2YXIgX3ZtPXRoaXMsX2M9X3ZtLl9zZWxmLl9jO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb2xvci1ncmlkLWNoYXJ0XCJ9LF92bS5fbCgoX3ZtLmRhdGEpLGZ1bmN0aW9uKGRhdGFSb3csZGF0YVJvd0luZGV4KXtyZXR1cm4gX2MoJ2Rpdicse2tleTpkYXRhUm93SW5kZXgsc3RhdGljQ2xhc3M6XCJjb2xvci1ncmlkLWNoYXJ0LXJvd1wiLHN0eWxlOih7IGhlaWdodDogX3ZtLml0ZW1IZWlnaHQgKyAncHgnIH0pfSxfdm0uX2woKGRhdGFSb3cpLGZ1bmN0aW9uKGRhdGFJdGVtLGRhdGFJdGVtSW5kZXgpe3JldHVybiBfYygnZGl2Jyx7a2V5OmRhdGFJdGVtSW5kZXgsc3RhdGljQ2xhc3M6XCJjb2xvci1ncmlkLWNoYXJ0LWl0ZW1cIixzdHlsZTooeyBiYWNrZ3JvdW5kOiBfdm0uY2FsSXRlbUNvbG9yKGRhdGFJdGVtLnZhbHVlKS5jb2xvciB9KSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5pdGVtQ2xpY2soZGF0YUl0ZW0pfX19LFsoX3ZtLiRzY29wZWRTbG90cy5kZWZhdWx0KT9bX3ZtLl90KFwiZGVmYXVsdFwiLG51bGwse1wicmVjb3JkXCI6ZGF0YUl0ZW19KV06X2MoJ3NwYW4nLFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGRhdGFJdGVtLnZhbHVlKSldKV0sMil9KSwwKX0pLDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiPCEtLVxuICogQEF1dGhvcjogYXRkb3dcbiAqIEBEYXRlOiAyMDIyLTAzLTIzIDE1OjEwOjUxXG4gKiBATGFzdEVkaXRvcnM6IG51bGxcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjItMDQtMDEgMTM6NDY6MDZcbiAqIEBEZXNjcmlwdGlvbjogZmlsZSBkZXNjcmlwdGlvblxuLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2xvci1ncmlkLWNoYXJ0XCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJjb2xvci1ncmlkLWNoYXJ0LXJvd1wiXG4gICAgICB2LWZvcj1cIihkYXRhUm93LCBkYXRhUm93SW5kZXgpIGluIGRhdGFcIlxuICAgICAgOmtleT1cImRhdGFSb3dJbmRleFwiXG4gICAgICA6c3R5bGU9XCJ7IGhlaWdodDogaXRlbUhlaWdodCArICdweCcgfVwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNvbG9yLWdyaWQtY2hhcnQtaXRlbVwiXG4gICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZDogY2FsSXRlbUNvbG9yKGRhdGFJdGVtLnZhbHVlKS5jb2xvciB9XCJcbiAgICAgICAgdi1mb3I9XCIoZGF0YUl0ZW0sIGRhdGFJdGVtSW5kZXgpIGluIGRhdGFSb3dcIlxuICAgICAgICA6a2V5PVwiZGF0YUl0ZW1JbmRleFwiXG4gICAgICAgIEBjbGljaz1cIml0ZW1DbGljayhkYXRhSXRlbSlcIlxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiRzY29wZWRTbG90cy5kZWZhdWx0XCI+XG4gICAgICAgICAgPHNsb3QgOnJlY29yZD1cImRhdGFJdGVtXCIgLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHNwYW4gdi1lbHNlPiB7eyBkYXRhSXRlbS52YWx1ZSB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ29sb3JHcmlkQ2hhcnQnLFxuICBwcm9wczoge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW1tdXVxuICAgICAgfSxcbiAgICB9LFxuICAgIGl0ZW1IZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDUwLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1heFZhbHVlOiAwLFxuICAgICAgbWluVmFsdWU6IDAsXG4gICAgICBjb2xvcnM6IFtdLFxuICAgICAgc3RhcnRDb2xvcjogJyNlY2VmZjknLFxuICAgICAgZW5kQ29sb3I6ICcjMjczQzcwJyxcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHt9LFxuICB3YXRjaDoge1xuICAgIGRhdGE6IHtcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgeyBtYXgsIG1pbiB9ID0gdGhpcy5jYWxEYXRhQm91bmRhcnlWYWx1ZSgpXG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSBtYXhcbiAgICAgICAgdGhpcy5taW5WYWx1ZSA9IG1pblxuICAgICAgICBsZXQgc3RlcCA9IDBcbiAgICAgICAgaWYgKHRoaXMubWluVmFsdWUgPT09IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5tYXhWYWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgc3RlcCA9IDBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RlcCA9IHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlICsgMSAvLyDlpoLmnpzmmK8wLXjml7bvvIxzdGVw5bqU6K+l5piveC0wKzEsMOS5n+mcgOimgeWNoOS4gOS4quWIhuWJslxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGVwID0gdGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmdyYWRpZW50Q29sb3JzKHRoaXMuc3RhcnRDb2xvciwgdGhpcy5lbmRDb2xvciwgc3RlcClcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnNcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21heDonLCBtYXgsIG1pbilcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuY29sb3JzIDonLCB0aGlzLmNvbG9ycylcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHt9LFxuICBjcmVhdGVkKCkge30sXG4gIG1vdW50ZWQoKSB7fSxcbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAgc3RhcnQg5byA5aeL6aKc6ImyXG4gICAgICBlbmQg57uT5p2f6aKc6ImyXG4gICAgICBzdGVwcyDpopzoibLliIbop6Mg5qyh5pWwXG4gICAgICBnYW1tYSDmmoLml7bnkIbop6PkuLrpgI/mmI7kuIDngrnvvIjkvL3pqazvvIlcbiAgICAgKi9cbiAgICBncmFkaWVudENvbG9ycyhzdGFydCwgZW5kLCBzdGVwcywgZ2FtbWEpIHtcbiAgICAgIHZhciBpLFxuICAgICAgICBqLFxuICAgICAgICBtcyxcbiAgICAgICAgbWUsXG4gICAgICAgIG91dHB1dCA9IFtdLFxuICAgICAgICBzbyA9IFtdXG4gICAgICBnYW1tYSA9IGdhbW1hIHx8IDFcbiAgICAgIHZhciBub3JtYWxpemUgPSBmdW5jdGlvbiAoY2hhbm5lbCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coY2hhbm5lbCAvIDI1NSwgZ2FtbWEpXG4gICAgICB9XG4gICAgICBzdGFydCA9IHRoaXMucGFyc2VDb2xvcihzdGFydCkubWFwKG5vcm1hbGl6ZSlcbiAgICAgIGVuZCA9IHRoaXMucGFyc2VDb2xvcihlbmQpLm1hcChub3JtYWxpemUpXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc3RlcHM7IGkrKykge1xuICAgICAgICBtcyA9IGkgLyAoc3RlcHMgLSAxKVxuICAgICAgICBtZSA9IDEgLSBtc1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgc29bal0gPSB0aGlzLnBhZChcbiAgICAgICAgICAgIE1hdGgucm91bmQoXG4gICAgICAgICAgICAgIE1hdGgucG93KHN0YXJ0W2pdICogbWUgKyBlbmRbal0gKiBtcywgMSAvIGdhbW1hKSAqIDI1NVxuICAgICAgICAgICAgKS50b1N0cmluZygxNilcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgb3V0cHV0LnB1c2goJyMnICsgc28uam9pbignJykpXG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0XG4gICAgfSxcbiAgICBwYXJzZUNvbG9yKGhleFN0cikge1xuICAgICAgcmV0dXJuIGhleFN0ci5sZW5ndGggPT09IDRcbiAgICAgICAgPyBoZXhTdHJcbiAgICAgICAgICAgIC5zdWJzdHIoMSlcbiAgICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDB4MTEgKiBwYXJzZUludChzLCAxNilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDogW2hleFN0ci5zdWJzdHIoMSwgMiksIGhleFN0ci5zdWJzdHIoMywgMiksIGhleFN0ci5zdWJzdHIoNSwgMildLm1hcChcbiAgICAgICAgICAgIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChzLCAxNilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgfSxcbiAgICAvLyB6ZXJvLXBhZCAxIGRpZ2l0IHRvIDJcbiAgICBwYWQocykge1xuICAgICAgcmV0dXJuIHMubGVuZ3RoID09PSAxID8gJzAnICsgcyA6IHNcbiAgICB9LFxuICAgIGNhbERhdGFCb3VuZGFyeVZhbHVlKCkge1xuICAgICAgbGV0IG1heCA9IDBcbiAgICAgIGxldCBtaW4gPSAwXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCgoZGF0YUl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGRhdGFJdGVtKSB7XG4gICAgICAgICAgZGF0YUl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPiBtYXgpIHtcbiAgICAgICAgICAgICAgbWF4ID0gaXRlbS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPCBtaW4pIHtcbiAgICAgICAgICAgICAgbWluID0gaXRlbS52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLyBjb25zb2xlLmxvZygnZGF0YTonLCB0aGlzLmRhdGEpXG4gICAgICAvLyBjb25zb2xlLmxvZygnbWF4OicsIG1heCwgbWluKVxuICAgICAgcmV0dXJuIHsgbWF4LCBtaW4gfVxuICAgIH0sXG4gICAgY2FsSXRlbUNvbG9yKHZhbHVlKSB7XG4gICAgICBsZXQgY29sb3IgPSAnd2hpdGUnXG4gICAgICAvKipcbiAgICAgICAqIOWfuuacrOWFrOW8j++8mmNvbG9yc0luZGV4Lyh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSA9IHZhbHVlLyh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSlcbiAgICAgICAqIOS9huaYr+S4jeS4gOWumuS8muacieaVtOWPlueahOe0ouW8le+8jOWuueaYk+i2iueVjFxuICAgICAgICovXG4gICAgICBsZXQgY29sb3JzSW5kZXggPSBNYXRoLmNlaWwoXG4gICAgICAgICgodGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkgKiB2YWx1ZSkgLyAodGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUpXG4gICAgICApXG4gICAgICAvLyDlrrnmmJPotornlYzlpITnkIZcbiAgICAgIGlmIChjb2xvcnNJbmRleCA+IHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgY29sb3JzSW5kZXggPSB0aGlzLmNvbG9ycy5sZW5ndGggLSAxXG4gICAgICB9XG4gICAgICBjb2xvciA9IHRoaXMuY29sb3JzW2NvbG9yc0luZGV4XVxuICAgICAgLy8gaWYgKCEhIWNvbG9yKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdjb2xvcjonLCBjb2xvcilcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2NvbG9yc0luZGV4OicsIGNvbG9yc0luZGV4KVxuICAgICAgLy8gfVxuICAgICAgcmV0dXJuIHsgY29sb3IsIGNvbG9yc0luZGV4IH1cbiAgICB9LFxuICAgIGl0ZW1DbGljayhpdGVtKSB7XG4gICAgICB0aGlzLiRlbWl0KCdpdGVtQ2xpY2snLCBpdGVtKVxuICAgIH0sXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7fSxcbn1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuLmNvbG9yLWdyaWQtY2hhcnQge1xuICAmLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAmLWl0ZW0ge1xuICAgIC8vIHdpZHRoOiA1MHB4O1xuICAgIC8vIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxufVxuPC9zdHlsZT4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzBjYTk2YSZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNzBjYTk2YSZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwNzBjYTk2YVwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDcwY2E5NmEmcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWVcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDcwY2E5NmEmcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWVcIiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29sb3ItZ3JpZC1jaGFydC1yb3dbZGF0YS12LTA3MGNhOTZhXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jb2xvci1ncmlkLWNoYXJ0LWl0ZW1bZGF0YS12LTA3MGNhOTZhXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZmxleDogMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG4uY29sb3ItZ3JpZC1jaGFydC1pdGVtW2RhdGEtdi0wNzBjYTk2YV06aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=