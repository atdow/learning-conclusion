(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{115:function(n,t,a){"use strict";a.r(t);var r={components:{}},e=(a(643),a(9)),i={name:"ComponentDoc",components:{Com247u21ktlozyibj3Demo0:Object(e.a)(r,(function(){return(0,this._self._c)("button",{staticClass:"button"},[this._v("Button")])}),[],!1,null,"273c85db",null).exports}},s=Object(e.a)(i,(function(){var n=this._self._c;return n("div",{staticClass:"vue-demo-container"},[n("h4",[this._v("1. 基础用法")]),this._v(" "),n("div",{staticClass:"vue-demo-wrapper"},[n("Com247u21ktlozyibj3Demo0"),this._v(" "),this._m(0)],1),this._v(" "),n("h3",[this._v("2.设计思路")]),this._v(" "),this._m(1)])}),[function(){var n=this._self._c;return n("div",{staticClass:"vue-demo-highlight"},[n("div",{staticClass:"vue-demo-highlight-content"},[n("pre",[n("code",{pre:!0,attrs:{class:"html"}},[this._v('<template>\n  <button class="button">Button</button>\n</template>\n \n<script>\nexport default {\n  components: {}\n}\n<\/script>\n<style lang="less" scoped>\n.button {\n  display: inline-block;\n  padding: 1em 2em;\n  background-color: #ff0081;\n  color: #fff;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);\n  outline: 0;\n  transition: transform ease-in 0.1s, background-color ease-in 0.1s, box-shadow ease-in 0.25s;\n}\n\n.button::before {\n    position: absolute;\n    content: \'\';\n    left: -2em;\n    right: -2em;\n    top: -2em;\n    bottom: -2em;\n    pointer-events: none;\n    background-repeat: no-repeat;\n    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        /* 下面的点 */\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%),\n        radial-gradient(circle, #ff0081 20%, transparent 20%);\n    /*扩散的状态*/\n    background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%, 100% -2%, -5% 80%,\n        100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%, 100% 100%;\n    /*隐藏*/\n    background-size: 0% 0%;\n    transition: background-position .5s ease-in-out, background-size .75s ease-in-out;\n}\n\n.button:active::before {\n    /**注意取消掉过渡，达到瞬时变化到下面的状态**/\n    transition: 0s;\n    /*聚合的状态*/\n    background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%,\n        83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;\n    /*显示*/\n    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%,\n        15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;\n}\n</style>\n\n')])])]),this._v(" "),n("div",{staticClass:"code-folder"},[this._v("显示代码")])])},function(){var n=this._self._c;return n("p",[this._v("粒子使用"),n("code",[this._v("background-image")]),this._v("，每个粒子由"),n("code",[this._v("radial-gradient(circle, #ff0081 20%, transparent 20%)")]),this._v("径向渐变实现。一开始粒子是扩散隐藏状态，当点击的时候瞬间"),n("code",[this._v("（transition: 0s）")]),this._v("切换为聚合显示状态，最终粒子将会是从中心向周围扩散并慢慢消失。")])}],!1,null,null,null);t.default=s.exports},393:function(n,t,a){var r=a(2),e=a(644);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[n.i,e,""]]);var i={insert:"head",singleton:!1};r(e,i);n.exports=e.locals||{}},643:function(n,t,a){"use strict";a(393)},644:function(n,t,a){(t=a(3)(!1)).push([n.i,".button[data-v-273c85db] {\n  display: inline-block;\n  padding: 1em 2em;\n  background-color: #ff0081;\n  color: #fff;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  box-shadow: 0 2px 25px rgba(233, 30, 99, 0.5);\n  outline: 0;\n  transition: transform ease-in 0.1s, background-color ease-in 0.1s, box-shadow ease-in 0.25s;\n}\n.button[data-v-273c85db]::before {\n  position: absolute;\n  content: '';\n  left: -2em;\n  right: -2em;\n  top: -2em;\n  bottom: -2em;\n  pointer-events: none;\n  background-repeat: no-repeat;\n  background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), /* 下面的点 */ radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);\n  /*扩散的状态*/\n  background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%, 100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%, 60% 95%, 70% 96%, 100% 100%;\n  /*隐藏*/\n  background-size: 0% 0%;\n  transition: background-position 0.5s ease-in-out, background-size 0.75s ease-in-out;\n}\n.button[data-v-273c85db]:active::before {\n  /**注意取消掉过渡，达到瞬时变化到下面的状态**/\n  transition: 0s;\n  /*聚合的状态*/\n  background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%,\n        83% 60%, 18% 70%, 25% 70%, 41% 70%, 50% 70%, 64% 70%, 80% 71%;\n  /*显示*/\n  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%,\n        15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;\n}\n",""]),n.exports=t}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzLWV4YW1wbGVzL2dyYW51bGUtYnV0dG9uLm1kPzg1NmUiLCJ3ZWJwYWNrOi8vL3NyYy9wYWNrYWdlcy1leGFtcGxlcy9ncmFudWxlLWJ1dHRvbi5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/Njc0MiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/MWQzZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/MDE3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/YzJkZCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/Y2Y3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvZ3JhbnVsZS1idXR0b24ubWQ/ZTViYiJdLCJuYW1lcyI6WyJjb21wb25lbnRzIiwibmFtZSIsIl9jIiwidGhpcyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJfdiIsIl9tIiwicHJlIiwiYXR0cnMiLCJhcGkiLCJjb250ZW50IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImV4cG9ydHMiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iLCJwdXNoIl0sIm1hcHBpbmdzIjoia0dBQUEsSUNBK1AsRUNLaFAsQ0FDZkEsV0FBQSxJLGdCQ053TyxFRG1HeE8sQ0FDQUMsS0FBQSxlQUNBRCxXQUFBLENBQ0EseUJFOUZnQixZQUNkLEdKVFcsV0FBK0MsT0FBT0UsRUFBNUJDLEtBQVlDLE1BQU1GLElBQWEsU0FBUyxDQUFDRyxZQUFZLFVBQVUsQ0FBL0RGLEtBQW9FRyxHQUFHLGNBRXhGLElJVXBCLEVBQ0EsS0FDQSxXQUNBLE0sVUNSRSxFQUFZLFlBQ2QsR0xSVyxXQUFrQixJQUFhSixFQUFMQyxLQUFZQyxNQUFNRixHQUFHLE9BQU9BLEVBQUcsTUFBTSxDQUFDRyxZQUFZLHNCQUFzQixDQUFDSCxFQUFHLEtBQUssQ0FBakZDLEtBQXNGRyxHQUFHLGFBQXpGSCxLQUEwR0csR0FBRyxLQUFLSixFQUFHLE1BQU0sQ0FBQ0csWUFBWSxvQkFBb0IsQ0FBQ0gsRUFBRyw0QkFBaEtDLEtBQWdNRyxHQUFHLEtBQW5NSCxLQUE0TUksR0FBRyxJQUFJLEdBQW5OSixLQUEwTkcsR0FBRyxLQUFLSixFQUFHLEtBQUssQ0FBMU9DLEtBQStPRyxHQUFHLFlBQWxQSCxLQUFrUUcsR0FBRyxLQUFyUUgsS0FBOFFJLEdBQUcsT0FFbFMsQ0FBQyxXQUFZLElBQWFMLEVBQUwsS0FBWUUsTUFBTUYsR0FBRyxPQUFPQSxFQUFHLE1BQU0sQ0FBQ0csWUFBWSxzQkFBc0IsQ0FBQ0gsRUFBRyxNQUFNLENBQUNHLFlBQVksOEJBQThCLENBQUNILEVBQUcsTUFBTSxDQUFDQSxFQUFHLE9BQU8sQ0FBQ00sS0FBSSxFQUFLQyxNQUFNLENBQUMsTUFBUSxTQUFTLENBQXBMLEtBQXlMSCxHQUFHLGtoRkFBNUwsS0FBbXRGQSxHQUFHLEtBQUtKLEVBQUcsTUFBTSxDQUFDRyxZQUFZLGVBQWUsQ0FBaHdGLEtBQXF3RkMsR0FBRyxhQUNqekYsV0FBWSxJQUFhSixFQUFMLEtBQVlFLE1BQU1GLEdBQUcsT0FBT0EsRUFBRyxJQUFJLENBQW5DLEtBQXdDSSxHQUFHLFFBQVFKLEVBQUcsT0FBTyxDQUE3RCxLQUFrRUksR0FBRyxzQkFBckUsS0FBK0ZBLEdBQUcsVUFBVUosRUFBRyxPQUFPLENBQXRILEtBQTJISSxHQUFHLDJEQUE5SCxLQUE2TEEsR0FBRyxnQ0FBZ0NKLEVBQUcsT0FBTyxDQUExTyxLQUErT0ksR0FBRyxzQkFBbFAsS0FBNFFBLEdBQUcsd0NLUW5TLEVBQ0EsS0FDQSxLQUNBLE1BSWEsWSw2QkNsQmYsSUFBSUksRUFBTSxFQUFRLEdBQ0ZDLEVBQVUsRUFBUSxLQUlDLGlCQUZ2QkEsRUFBVUEsRUFBUUMsV0FBYUQsRUFBUUUsUUFBVUYsS0FHL0NBLEVBQVUsQ0FBQyxDQUFDRyxFQUFPQyxFQUFJSixFQUFTLE1BRzlDLElBQUlLLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVQTixFQUFJQyxFQUFTSyxHQUkxQkYsRUFBT0csUUFBVU4sRUFBUU8sUUFBVSxJLGlDQ2xCbkMsUSxxQkNFQUQsRUFEa0MsRUFBUSxFQUNoQ0UsRUFBNEIsSUFFOUJDLEtBQUssQ0FBQ04sRUFBT0MsRUFBSSw4c0VBQStzRSxLQUV4dUVELEVBQU9HLFFBQVVBIiwiZmlsZSI6ImpzLzIyLjE2MjgwYTc5ZGExOWE2NjhhMjA5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpe3ZhciBfdm09dGhpcyxfYz1fdm0uX3NlbGYuX2M7cmV0dXJuIF9jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcImJ1dHRvblwifSxbX3ZtLl92KFwiQnV0dG9uXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbWFya2Rvd24tdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0xIS4vZ3JhbnVsZS1idXR0b24ubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9tYXJrZG93bi12dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTEhLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZmZW5jZSZjb21wb25lbnRJbmRleD0wXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidnVlLWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGg0PjEuIOWfuuehgOeUqOazlTwvaDQ+XG48ZGl2IGNsYXNzPVwidnVlLWRlbW8td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPENvbTI0N3UyMWt0bG96eWliajNEZW1vMD48L0NvbTI0N3UyMWt0bG96eWliajNEZW1vMD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidnVlLWRlbW8taGlnaGxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidnVlLWRlbW8taGlnaGxpZ2h0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiIHYtcHJlID4mbHQ7dGVtcGxhdGUmZ3Q7XG4gICZsdDtidXR0b24gY2xhc3M9JnF1b3Q7YnV0dG9uJnF1b3Q7Jmd0O0J1dHRvbiZsdDsvYnV0dG9uJmd0O1xuJmx0Oy90ZW1wbGF0ZSZndDtcbsKgXG4mbHQ7c2NyaXB0Jmd0O1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7fVxufVxuJmx0Oy9zY3JpcHQmZ3Q7XG4mbHQ7c3R5bGUgbGFuZz0mcXVvdDtsZXNzJnF1b3Q7IHNjb3BlZCZndDtcbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwODE7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDI1cHggcmdiYSgyMzMsIDMwLCA5OSwgMC41KTtcbiAgb3V0bGluZTogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2UtaW4gMC4xcywgYmFja2dyb3VuZC1jb2xvciBlYXNlLWluIDAuMXMsIGJveC1zaGFkb3cgZWFzZS1pbiAwLjI1cztcbn1cblxuLmJ1dHRvbjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgbGVmdDogLTJlbTtcbiAgICByaWdodDogLTJlbTtcbiAgICB0b3A6IC0yZW07XG4gICAgYm90dG9tOiAtMmVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgLyog5LiL6Z2i55qE54K5ICovXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSxcbiAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xuICAgIC8q5omp5pWj55qE54q25oCBKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1JSA0NCUsIC01JSAyMCUsIDclIDUlLCAyMyUgMCUsIDM3JSAwLCA1OCUgLTIlLCA4MCUgMCUsIDEwMCUgLTIlLCAtNSUgODAlLFxuICAgICAgICAxMDAlIDU1JSwgMiUgMTAwJSwgMjMlIDEwMCUsIDQyJSAxMDAlLCA2MCUgOTUlLCA3MCUgOTYlLCAxMDAlIDEwMCU7XG4gICAgLyrpmpDol48qL1xuICAgIGJhY2tncm91bmQtc2l6ZTogMCUgMCU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAuNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtc2l6ZSAuNzVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0dG9uOmFjdGl2ZTo6YmVmb3JlIHtcbiAgICAvKirms6jmhI/lj5bmtojmjonov4fmuKHvvIzovr7liLDnnqzml7blj5jljJbliLDkuIvpnaLnmoTnirbmgIEqKi9cbiAgICB0cmFuc2l0aW9uOiAwcztcbiAgICAvKuiBmuWQiOeahOeKtuaAgSovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTglIDQwJSwgMjAlIDMxJSwgMzAlIDMwJSwgNDAlIDMwJSwgNTAlIDMwJSwgNTclIDMwJSwgNjUlIDMwJSwgODAlIDMyJSwgMTUlIDYwJSxcbiAgICAgICAgODMlIDYwJSwgMTglIDcwJSwgMjUlIDcwJSwgNDElIDcwJSwgNTAlIDcwJSwgNjQlIDcwJSwgODAlIDcxJTtcbiAgICAvKuaYvuekuiovXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMCUgMTAlLCAyMCUgMjAlLCAxNSUgMTUlLCAyMCUgMjAlLCAxOCUgMTglLCAxMCUgMTAlLCAxNSUgMTUlLCAxMCUgMTAlLCAxOCUgMTglLFxuICAgICAgICAxNSUgMTUlLCAyMCUgMjAlLCAxOCUgMTglLCAyMCUgMjAlLCAxNSUgMTUlLCAxMCUgMTAlLCAyMCUgMjAlO1xufVxuJmx0Oy9zdHlsZSZndDtcblxuPC9jb2RlPjwvcHJlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2RlLWZvbGRlclwiPuaYvuekuuS7o+eggTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbjxoMz4yLuiuvuiuoeaAnei3rzwvaDM+XG48cD7nspLlrZDkvb/nlKg8Y29kZT5iYWNrZ3JvdW5kLWltYWdlPC9jb2RlPu+8jOavj+S4queykuWtkOeUsTxjb2RlPnJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpPC9jb2RlPuW+hOWQkea4kOWPmOWunueOsOOAguS4gOW8gOWni+eykuWtkOaYr+aJqeaVo+makOiXj+eKtuaAge+8jOW9k+eCueWHu+eahOaXtuWAmeeerOmXtDxjb2RlPu+8iHRyYW5zaXRpb246IDBz77yJPC9jb2RlPuWIh+aNouS4uuiBmuWQiOaYvuekuueKtuaAge+8jOacgOe7iOeykuWtkOWwhuS8muaYr+S7juS4reW/g+WQkeWRqOWbtOaJqeaVo+W5tuaFouaFoua2iOWkseOAgjwvcD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICAgIGltcG9ydCBDb20yNDd1MjFrdGxvenlpYmozRGVtbzAgZnJvbSBcIi4vZ3JhbnVsZS1idXR0b24ubWQ/ZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiO1xuICAgICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdDb21wb25lbnREb2MnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbTI0N3UyMWt0bG96eWliajNEZW1vMCc6IENvbTI0N3UyMWt0bG96eWliajNEZW1vMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL21hcmtkb3duLXZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMSEuL2dyYW51bGUtYnV0dG9uLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL21hcmtkb3duLXZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMSEuL2dyYW51bGUtYnV0dG9uLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2dyYW51bGUtYnV0dG9uLm1kP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3M2M4NWRiJnNjb3BlZD10cnVlJmZlbmNlJmNvbXBvbmVudEluZGV4PTBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZmZW5jZSZjb21wb25lbnRJbmRleD0wXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dyYW51bGUtYnV0dG9uLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJmZlbmNlJmNvbXBvbmVudEluZGV4PTBcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9ncmFudWxlLWJ1dHRvbi5tZD92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI3M2M4NWRiJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlJmZlbmNlJmNvbXBvbmVudEluZGV4PTBcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjczYzg1ZGJcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2dyYW51bGUtYnV0dG9uLm1kP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhOTJjMDIxXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZ3JhbnVsZS1idXR0b24ubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZ3JhbnVsZS1idXR0b24ubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL21hcmtkb3duLXZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMSEuL2dyYW51bGUtYnV0dG9uLm1kP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjczYzg1ZGImcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL21hcmtkb3duLXZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMSEuL2dyYW51bGUtYnV0dG9uLm1kP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjczYzg1ZGImcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idXR0b25bZGF0YS12LTI3M2M4NWRiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAxZW0gMmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDA4MTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm94LXNoYWRvdzogMCAycHggMjVweCByZ2JhKDIzMywgMzAsIDk5LCAwLjUpO1xcbiAgb3V0bGluZTogMDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlLWluIDAuMXMsIGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiAwLjFzLCBib3gtc2hhZG93IGVhc2UtaW4gMC4yNXM7XFxufVxcbi5idXR0b25bZGF0YS12LTI3M2M4NWRiXTo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgbGVmdDogLTJlbTtcXG4gIHJpZ2h0OiAtMmVtO1xcbiAgdG9wOiAtMmVtO1xcbiAgYm90dG9tOiAtMmVtO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgLyog5LiL6Z2i55qE54K5ICovIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmYwMDgxIDIwJSwgdHJhbnNwYXJlbnQgMjAlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgI2ZmMDA4MSAyMCUsIHRyYW5zcGFyZW50IDIwJSksIHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICNmZjAwODEgMjAlLCB0cmFuc3BhcmVudCAyMCUpO1xcbiAgLyrmianmlaPnmoTnirbmgIEqL1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNSUgNDQlLCAtNSUgMjAlLCA3JSA1JSwgMjMlIDAlLCAzNyUgMCwgNTglIC0yJSwgODAlIDAlLCAxMDAlIC0yJSwgLTUlIDgwJSwgMTAwJSA1NSUsIDIlIDEwMCUsIDIzJSAxMDAlLCA0MiUgMTAwJSwgNjAlIDk1JSwgNzAlIDk2JSwgMTAwJSAxMDAlO1xcbiAgLyrpmpDol48qL1xcbiAgYmFja2dyb3VuZC1zaXplOiAwJSAwJTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC41cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1zaXplIDAuNzVzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYnV0dG9uW2RhdGEtdi0yNzNjODVkYl06YWN0aXZlOjpiZWZvcmUge1xcbiAgLyoq5rOo5oSP5Y+W5raI5o6J6L+H5rih77yM6L6+5Yiw556s5pe25Y+Y5YyW5Yiw5LiL6Z2i55qE54q25oCBKiovXFxuICB0cmFuc2l0aW9uOiAwcztcXG4gIC8q6IGa5ZCI55qE54q25oCBKi9cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDE4JSA0MCUsIDIwJSAzMSUsIDMwJSAzMCUsIDQwJSAzMCUsIDUwJSAzMCUsIDU3JSAzMCUsIDY1JSAzMCUsIDgwJSAzMiUsIDE1JSA2MCUsXFxuICAgICAgICA4MyUgNjAlLCAxOCUgNzAlLCAyNSUgNzAlLCA0MSUgNzAlLCA1MCUgNzAlLCA2NCUgNzAlLCA4MCUgNzElO1xcbiAgLyrmmL7npLoqL1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMCUgMTAlLCAyMCUgMjAlLCAxNSUgMTUlLCAyMCUgMjAlLCAxOCUgMTglLCAxMCUgMTAlLCAxNSUgMTUlLCAxMCUgMTAlLCAxOCUgMTglLFxcbiAgICAgICAgMTUlIDE1JSwgMjAlIDIwJSwgMTglIDE4JSwgMjAlIDIwJSwgMTUlIDE1JSwgMTAlIDEwJSwgMjAlIDIwJTtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=