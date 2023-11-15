(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{115:function(n,t,a){"use strict";a.r(t);var r={components:{}},e=(a(643),a(9)),i={name:"ComponentDoc",components:{Com7qv41sclozz973aDemo0:Object(e.a)(r,(function(){return(0,this._self._c)("button",{staticClass:"button"},[this._v("Button")])}),[],!1,null,"273c85db",null).exports}},s=Object(e.a)(i,(function(){var n=this._self._c;return n("div",{staticClass:"vue-demo-container"},[n("h4",[this._v("1. 基础用法")]),this._v(" "),n("div",{staticClass:"vue-demo-wrapper"},[n("Com7qv41sclozz973aDemo0"),this._v(" "),this._m(0)],1),this._v(" "),n("h3",[this._v("2.设计思路")]),this._v(" "),this._m(1)])}),[function(){var n=this._self._c;return n("div",{staticClass:"vue-demo-highlight"},[n("div",{staticClass:"vue-demo-highlight-content"},[n("pre",[n("code",{pre:!0,attrs:{class:"html"}},[this._v('<template>\n  <button class="button">Button</button>\n</template>\n \n<script>\nexport default {\n  components: {}\n}\n<\/script>\n<style lang="less" scoped>\n.button {\n  display: inline-block;\n  padding: 1em 2em;\n  background-color: #ff0081;\n  color: #fff;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);\n  outline: 0;\n  transition: transform ease-in 0.1s, background-color ease-in 0.1s, box-shadow ease-in 0.25s;\n}\n\n.button::before {\n    position: absolute;\n    content: \'\';\n    left: -2em;\n    right: -2em;\n    top: -2em;\n    bottom: -2em;\n    pointer-events: none;\n    background-repeat: no-repeat;\n    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        /* 下面的点 */\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%);\n    /*扩散的状态*/\n    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%, 100% -2%, -5% 80%,\n        100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%, 100% 100%;\n    /*隐藏*/\n    background-size: 0% 0%;\n    transition: background-position .5s ease-in-out, background-size .75s ease-in-out;\n}\n\n.button:active::before {\n    /**注意取消掉过渡，达到瞬时变化到下面的状态**/\n    transition: 0s;\n    /*聚合的状态*/\n    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%,\n        83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;\n    /*显示*/\n    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%,\n        15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;\n}\n</style>\n\n')])])]),this._v(" "),n("div",{staticClass:"code-folder"},[this._v("显示代码")])])},function(){var n=this._self._c;return n("p",[this._v("粒子使用"),n("code",[this._v("background-image")]),this._v("，每个粒子由"),n("code",[this._v("radial-gradient(circle, #ff0081 20%, transparent 20%)")]),this._v("径向渐变实现。一开始粒子是扩散隐藏状态，当点击的时候瞬间"),n("code",[this._v("（transition: 0s）")]),this._v("切换为聚合显示状态，最终粒子将会是从中心向周围扩散并慢慢消失。")])}],!1,null,null,null);t.default=s.exports},393:function(n,t,a){var r=a(2),e=a(644);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var i={insert:"head",singleton:!1};r(e,i);n.exports=e.locals||{}},643:function(n,t,a){"use strict";a(393)},644:function(n,t,a){(t=a(3)(!1)).push([n.i,".button[data-v-273c85db] {\n  display: inline-block;\n  padding: 1em 2em;\n  background-color: #ff0081;\n  color: #fff;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);\n  outline: 0;\n  transition: transform ease-in 0.1s, background-color ease-in 0.1s, box-shadow ease-in 0.25s;\n}\n.button[data-v-273c85db]::before {\n  position: absolute;\n  content: '';\n  left: -2em;\n  right: -2em;\n  top: -2em;\n  bottom: -2em;\n  pointer-events: none;\n  background-repeat: no-repeat;\n  background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), /* 下面的点 */ radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);\n  /*扩散的状态*/\n  background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%, 100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%, 100% 100%;\n  /*隐藏*/\n  background-size: 0% 0%;\n  transition: background-position 0.5s ease-in-out, background-size 0.75s ease-in-out;\n}\n.button[data-v-273c85db]:active::before {\n  /**注意取消掉过渡，达到瞬时变化到下面的状态**/\n  transition: 0s;\n  /*聚合的状态*/\n  background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%,\n        83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;\n  /*显示*/\n  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%,\n        15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;\n}\n",""]),n.exports=t}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzLWV4YW1wbGVzL2dyYW51bGUtYnV0dG9uLm1kPzg1NmUiLCJ3ZWJwYWNrOi8vL3NyYy9wYWNrYWdlcy1leGFtcGxlcy9ncmFudWxlLWJ1dHRvbi5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/Njc0MiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/MWQzZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/MDE3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/YzJkZCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/Y2Y3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/ZTViYiJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwibmFtZSIsIl9jIiwidGhpcyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsIl9tIiwicHJlIiwiYXR0cnMiLCJhcGkiLCJjb250ZW50IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImV4cG9ydHMiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iLCJwdXNoIl0sIm1hcHBpbmdzIjoia0dBQUEsSUNBK1AsRUNLaFAsQ0FDZkEsV0FBQSxJLGdCQ053TyxFRG1HeE8sQ0FDQUMsS0FBQSxlQUNBRCxXQUFBLENBQ0Esd0JFOUZnQixZQUNkLEdKVFcsV0FBK0MsT0FBT0UsRUFBNUJDLEtBQVlDLE1BQU1GLElBQWEsU0FBUyxDQUFDRyxZQUFZLFVBQVUsQ0FBL0RGLEtBQW9FRyxHQUFHLGNBRXhGLElJVXBCLEVBQ0EsS0FDQSxXQUNBLE0sVUNSRSxFQUFZLFlBQ2QsR0xSVyxXQUFrQixJQUFhSixFQUFMQyxLQUFZQyxNQUFNRixHQUFHLE9BQU9BLEVBQUcsTUFBTSxDQUFDRyxZQUFZLHNCQUFzQixDQUFDSCxFQUFHLEtBQUssQ0FBakZDLEtBQXNGRyxHQUFHLGFBQXpGSCxLQUEwR0csR0FBRyxLQUFLSixFQUFHLE1BQU0sQ0FBQ0csWUFBWSxvQkFBb0IsQ0FBQ0gsRUFBRywyQkFBaEtDLEtBQStMRyxHQUFHLEtBQWxNSCxLQUEyTUksR0FBRyxJQUFJLEdBQWxOSixLQUF5TkcsR0FBRyxLQUFLSixFQUFHLEtBQUssQ0FBek9DLEtBQThPRyxHQUFHLFlBQWpQSCxLQUFpUUcsR0FBRyxLQUFwUUgsS0FBNlFJLEdBQUcsT0FFalMsQ0FBQyxXQUFZLElBQWFMLEVBQUwsS0FBWUUsTUFBTUYsR0FBRyxPQUFPQSxFQUFHLE1BQU0sQ0FBQ0csWUFBWSxzQkFBc0IsQ0FBQ0gsRUFBRyxNQUFNLENBQUNHLFlBQVksOEJBQThCLENBQUNILEVBQUcsTUFBTSxDQUFDQSxFQUFHLE9BQU8sQ0FBQ00sS0FBSSxFQUFLQyxNQUFNLENBQUMsTUFBUSxTQUFTLENBQXBMLEtBQXlMSCxHQUFHLGtoRkFBNUwsS0FBbXRGQSxHQUFHLEtBQUtKLEVBQUcsTUFBTSxDQUFDRyxZQUFZLGVBQWUsQ0FBaHdGLEtBQXF3RkMsR0FBRyxhQUNqekYsV0FBWSxJQUFhSixFQUFMLEtBQVlFLE1BQU1GLEdBQUcsT0FBT0EsRUFBRyxJQUFJLENBQW5DLEtBQXdDSSxHQUFHLFFBQVFKLEVBQUcsT0FBTyxDQUE3RCxLQUFrRUksR0FBRyxzQkFBckUsS0FBK0ZBLEdBQUcsVUFBVUosRUFBRyxPQUFPLENBQXRILEtBQTJISSxHQUFHLDJEQUE5SCxLQUE2TEEsR0FBRyxnQ0FBZ0NKLEVBQUcsT0FBTyxDQUExTyxLQUErT0ksR0FBRyxzQkFBbFAsS0FBNFFBLEdBQUcsd0NLUW5TLEVBQ0EsS0FDQSxLQUNBLE1BSWEsWSw2QkNsQmYsSUFBSUksRUFBTSxFQUFRLEdBQ0ZDLEVBQVUsRUFBUSxLQUlDLGlCQUZ2QkEsRUFBVUEsRUFBUUMsV0FBYUQsRUFBUUUsUUFBVUYsS0FHL0NBLEVBQVUsQ0FBQyxDQUFDRyxFQUFPQyxFQUFJSixFQUFTLE1BRzlDLElBQUlLLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVQTixFQUFJQyxFQUFTSyxHQUkxQkYsRUFBT0csUUFBVU4sRUFBUU8sUUFBVSxJLGlDQ2xCbkMsUSxxQkNFQUQsRUFEa0MsRUFBUSxFQUNoQ0UsRUFBNEIsSUFFOUJDLEtBQUssQ0FBQ04sRUFBT0MsRUFBSSw4c0VBQStzRSxLQUV4dUVELEVBQU9HLFFBQVVBIiwiZmlsZSI6ImpzLzIyLjQxMWRkNzViZDc0MDJjMzA3ZWFlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpe3ZhciBfdm09dGhpcyxfYz1fdm0uX3NlbGYuX2M7cmV0dXJuIF9jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImJ1dHRvblwifSxbX3ZtLl92KFwiQnV0dG9uXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbWFya2Rvd24tdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0xIS4vZ3JhbnVsZS1idXR0b24ubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9tYXJrZG93bi12dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTEhLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZmZW5jZSZjb21wb25lbnRJbmRleD0wXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidnVlLWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGg0PjEuIOWfuuehgOeUqOazlTwvaDQ+XG48ZGl2IGNsYXNzPVwidnVlLWRlbW8td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPENvbTdxdjQxc2Nsb3p6OTczYURlbW8wPjwvQ29tN3F2NDFzY2xveno5NzNhRGVtbzA+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZ1ZS1kZW1vLWhpZ2hsaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZ1ZS1kZW1vLWhpZ2hsaWdodC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHByZT48Y29kZSBjbGFzcz1cImh0bWxcIiB2LXByZSA+Jmx0O3RlbXBsYXRlJmd0O1xuICAmbHQ7YnV0dG9uIGNsYXNzPSZxdW90O2J1dHRvbiZxdW90OyZndDtCdXR0b24mbHQ7L2J1dHRvbiZndDtcbiZsdDsvdGVtcGxhdGUmZ3Q7XG7CoFxuJmx0O3NjcmlwdCZndDtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge31cbn1cbiZsdDsvc2NyaXB0Jmd0O1xuJmx0O3N0eWxlIGxhbmc9JnF1b3Q7bGVzcyZxdW90OyBzY29wZWQmZ3Q7XG4uYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDgxO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDJweCAyNXB4IHJnYmEoMjMzLCAzMCwgOTksIDAuNSk7XG4gIG91dGxpbmU6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluIDAuMXMsIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiAwLjFzLCBib3gtc2hhZG93IGVhc2UtaW4gMC4yNXM7XG59XG5cbi5idXR0b246OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IC0yZW07XG4gICAgcmlnaHQ6IC0yZW07XG4gICAgdG9wOiAtMmVtO1xuICAgIGJvdHRvbTogLTJlbTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIC8qIOS4i+mdoueahOeCuSAqL1xuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcbiAgICAvKuaJqeaVo+eahOeKtuaAgSovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSUgNDQlLCAtNSUgMjAlLCA3JSA1JSwgMjMlIDAlLCAzNyUgMCwgNTglIC0yJSwgODAlIDAlLCAxMDAlIC0yJSwgLTUlIDgwJSxcbiAgICAgICAgMTAwJSA1NSUsIDIlIDEwMCUsIDIzJSAxMDAlLCA0MiUgMTAwJSwgNjAlIDk1JSwgNzAlIDk2JSwgMTAwJSAxMDAlO1xuICAgIC8q6ZqQ6JePKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAlIDAlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gLjVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLXNpemUgLjc1cyBlYXNlLWluLW91dDtcbn1cblxuLmJ1dHRvbjphY3RpdmU6OmJlZm9yZSB7XG4gICAgLyoq5rOo5oSP5Y+W5raI5o6J6L+H5rih77yM6L6+5Yiw556s5pe25Y+Y5YyW5Yiw5LiL6Z2i55qE54q25oCBKiovXG4gICAgdHJhbnNpdGlvbjogMHM7XG4gICAgLyrogZrlkIjnmoTnirbmgIEqL1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE4JSA0MCUsIDIwJSAzMSUsIDMwJSAzMCUsIDQwJSAzMCUsIDUwJSAzMCUsIDU3JSAzMCUsIDY1JSAzMCUsIDgwJSAzMiUsIDE1JSA2MCUsXG4gICAgICAgIDgzJSA2MCUsIDE4JSA3MCUsIDI1JSA3MCUsIDQxJSA3MCUsIDUwJSA3MCUsIDY0JSA3MCUsIDgwJSA3MSU7XG4gICAgLyrmmL7npLoqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAlIDEwJSwgMjAlIDIwJSwgMTUlIDE1JSwgMjAlIDIwJSwgMTglIDE4JSwgMTAlIDEwJSwgMTUlIDE1JSwgMTAlIDEwJSwgMTglIDE4JSxcbiAgICAgICAgMTUlIDE1JSwgMjAlIDIwJSwgMTglIDE4JSwgMjAlIDIwJSwgMTUlIDE1JSwgMTAlIDEwJSwgMjAlIDIwJTtcbn1cbiZsdDsvc3R5bGUmZ3Q7XG5cbjwvY29kZT48L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29kZS1mb2xkZXJcIj7mmL7npLrku6PnoIE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG48aDM+Mi7orr7orqHmgJ3ot688L2gzPlxuPHA+57KS5a2Q5L2/55SoPGNvZGU+YmFja2dyb3VuZC1pbWFnZTwvY29kZT7vvIzmr4/kuKrnspLlrZDnlLE8Y29kZT5yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTwvY29kZT7lvoTlkJHmuJDlj5jlrp7njrDjgILkuIDlvIDlp4vnspLlrZDmmK/mianmlaPpmpDol4/nirbmgIHvvIzlvZPngrnlh7vnmoTml7blgJnnnqzpl7Q8Y29kZT7vvIh0cmFuc2l0aW9uOiAwc++8iTwvY29kZT7liIfmjaLkuLrogZrlkIjmmL7npLrnirbmgIHvvIzmnIDnu4jnspLlrZDlsIbkvJrmmK/ku47kuK3lv4PlkJHlkajlm7TmianmlaPlubbmhaLmhaLmtojlpLHjgII8L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICBpbXBvcnQgQ29tN3F2NDFzY2xveno5NzNhRGVtbzAgZnJvbSBcIi4vZ3JhbnVsZS1idXR0b24ubWQ/ZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiO1xuICAgICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdDb21wb25lbnREb2MnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbTdxdjQxc2Nsb3p6OTczYURlbW8wJzogQ29tN3F2NDFzY2xveno5NzNhRGVtbzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICA8L3NjcmlwdD5cbiAgICAiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9tYXJrZG93bi12dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTEhLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9tYXJrZG93bi12dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTEhLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzNjODVkYiZzY29wZWQ9dHJ1ZSZmZW5jZSZjb21wb25lbnRJbmRleD0wXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ3JhbnVsZS1idXR0b24ubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiXG5leHBvcnQgKiBmcm9tIFwiLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZmZW5jZSZjb21wb25lbnRJbmRleD0wXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZ3JhbnVsZS1idXR0b24ubWQ/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNzNjODVkYiZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZmZW5jZSZjb21wb25lbnRJbmRleD0wXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI3M2M4NWRiXCIsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDJjMWY5OVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2dyYW51bGUtYnV0dG9uLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dyYW51bGUtYnV0dG9uLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9tYXJrZG93bi12dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTEhLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI3M2M4NWRiJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlJmZlbmNlJmNvbXBvbmVudEluZGV4PTBcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9tYXJrZG93bi12dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTEhLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI3M2M4NWRiJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlJmZlbmNlJmNvbXBvbmVudEluZGV4PTBcIiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYnV0dG9uW2RhdGEtdi0yNzNjODVkYl0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMWVtIDJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwODE7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDI1cHggcmdiYSgyMzMsIDMwLCA5OSwgMC41KTtcXG4gIG91dGxpbmU6IDA7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiAwLjFzLCBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4gMC4xcywgYm94LXNoYWRvdyBlYXNlLWluIDAuMjVzO1xcbn1cXG4uYnV0dG9uW2RhdGEtdi0yNzNjODVkYl06OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIGxlZnQ6IC0yZW07XFxuICByaWdodDogLTJlbTtcXG4gIHRvcDogLTJlbTtcXG4gIGJvdHRvbTogLTJlbTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIC8qIOS4i+mdoueahOeCuSAqLyByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcXG4gIC8q5omp5pWj55qE54q25oCBKi9cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUlIDQ0JSwgLTUlIDIwJSwgNyUgNSUsIDIzJSAwJSwgMzclIDAsIDU4JSAtMiUsIDgwJSAwJSwgMTAwJSAtMiUsIC01JSA4MCUsIDEwMCUgNTUlLCAyJSAxMDAlLCAyMyUgMTAwJSwgNDIlIDEwMCUsIDYwJSA5NSUsIDcwJSA5NiUsIDEwMCUgMTAwJTtcXG4gIC8q6ZqQ6JePKi9cXG4gIGJhY2tncm91bmQtc2l6ZTogMCUgMCU7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtc2l6ZSAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuLmJ1dHRvbltkYXRhLXYtMjczYzg1ZGJdOmFjdGl2ZTo6YmVmb3JlIHtcXG4gIC8qKuazqOaEj+WPlua2iOaOiei/h+a4oe+8jOi+vuWIsOeerOaXtuWPmOWMluWIsOS4i+mdoueahOeKtuaAgSoqL1xcbiAgdHJhbnNpdGlvbjogMHM7XFxuICAvKuiBmuWQiOeahOeKtuaAgSovXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxOCUgNDAlLCAyMCUgMzElLCAzMCUgMzAlLCA0MCUgMzAlLCA1MCUgMzAlLCA1NyUgMzAlLCA2NSUgMzAlLCA4MCUgMzIlLCAxNSUgNjAlLFxcbiAgICAgICAgODMlIDYwJSwgMTglIDcwJSwgMjUlIDcwJSwgNDElIDcwJSwgNTAlIDcwJSwgNjQlIDcwJSwgODAlIDcxJTtcXG4gIC8q5pi+56S6Ki9cXG4gIGJhY2tncm91bmQtc2l6ZTogMTAlIDEwJSwgMjAlIDIwJSwgMTUlIDE1JSwgMjAlIDIwJSwgMTglIDE4JSwgMTAlIDEwJSwgMTUlIDE1JSwgMTAlIDEwJSwgMTglIDE4JSxcXG4gICAgICAgIDE1JSAxNSUsIDIwJSAyMCUsIDE4JSAxOCUsIDIwJSAyMCUsIDE1JSAxNSUsIDEwJSAxMCUsIDIwJSAyMCU7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9