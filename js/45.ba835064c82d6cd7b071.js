(window.webpackJsonp=window.webpackJsonp||[]).push([[45,80,81,107,114],{222:function(t,a,e){"use strict";e.r(a);var s=e(307),i=e.n(s);const l={};Object.keys(i.a.methods).forEach(t=>{l[t]=function(...a){this.$refs.eleTableRef[t](...a)}}),a.default=l},229:function(t,a,e){"use strict";e.r(a);const s=e(659).a.create({baseURL:"",timeout:2e4});s.interceptors.request.use(t=>t,t=>Promise.reject(t)),s.interceptors.response.use(t=>t.data,t=>Promise.reject(t)),a.default=s},235:function(t,a,e){"use strict";e.r(a);var s=e(326),i=e.n(s),l=(e(363),e(11),e(364)),n=e.n(l),o=(e(367),e(307)),r=e.n(o),h=e(222);const d=r.a,p=n.a;a.default={name:"STable",data:()=>({tableData:[],total:0,totalPage:0,tableParams:{pageNum:1,pageSize:10},loading:!1,loadingService:null,loadDataTimer:null,isLazy:!0}),props:Object.assign({},r.a.props,{rowKey:{type:[String,Function],default:"key"},data:{type:[Function,Array],required:!0},pageSize:{type:Number,default:10},showSizeChanger:{type:Boolean,default:!0},pageSizes:{type:Array,default:function(){return[10,20,30,50,100]}},size:{type:String,default:"mini"},showPagination:{type:[String,Boolean],default:"auto"},paginationLayout:{type:String,default:"total, sizes, prev, pager, next, jumper"},isDefaultRefresh:{type:Boolean,default:!1},border:{type:Boolean,default:!0}}),components:{ElTable:d,ElPagination:p},mounted(){this.tableParams.pageSize=this.pageSize,!0===this.isDefaultRefresh&&this.refresh(!0)},watch:{data:{immediate:!0,handler(){"[object Array]"==Object.prototype.toString.call(this.data)&&(this.isLazy=!1,this.tableParams.pageNum=1,this.$nextTick(()=>{this.updateStaticTableData()}))}}},methods:{updateStaticTableData(){const{pageNum:t,pageSize:a}=this.tableParams;this.tableData=this.data.slice((t-1)*a,t*a),this.total=this.data.length,this.resetTableScrollDefault()},refresh(t=!1,a){!0===t?this.tableParams.pageNum=1:a&&(this.tableParams.pageNum=a||1),this.updateTable()},clearData(){this.loading=!1,this.tableData=[],this.total=0,this.totalPage=0,this.tableParams={pageNum:1,pageSize:10}},updateTable(){this.isLazy?this.loadData():this.updateStaticTableData()},loadData(){const t=this.data(this.tableParams);this.loading=!0,t.then(t=>{const{total:a=0,totalPage:e=0,data:s=[]}=t,i=t.pageNum,l=t.pageSize;if(this.tableData=s,i&&l&&(this.tableParams={pageNum:i||1,pageSize:l}),this.total=a,this.totalPage=e,0===s.length&&this.showPagination&&this.tableParams.pageNum>1)return this.tableParams.pageNum=this.tableParams.pageNum-1,void(this.loadDataTimer=setTimeout(()=>{clearTimeout(this.loadDataTimer),this.loadData()},0))}).catch(()=>{}).finally(()=>{this.loading=!1,this.resetTableScrollDefault()})},handleSizeChange(t){this.tableParams.pageSize=t,this.tableParams.pageNum=1,this.updateTable()},handleCurrentChange(t){this.tableParams.pageNum=t,this.updateTable()},rowClick(t,a,e){this.$emit("row-click",t,a,e)},handleSelectionChange(t){this.$emit("handleSelectionChange",t)},resetTableScrollDefault(){this.$nextTick(()=>{var t;const a=null===(t=this.$refs.eleTableRef)||void 0===t||null===(t=t.$el)||void 0===t?void 0:t.querySelector(".el-table__body-wrapper");a&&(a.scrollTop=0,a.scrollLeft=0)})},...h.default},render(){const t=arguments[0],{tableData:a=[],total:e=0,tableParams:s={},loading:l=!1}=this,n={},o=Object.keys(this.$data);Object.keys(r.a.props).forEach(t=>{!1===o.includes(t)&&"data"!==t&&(n[t]=this._props[t])});let h=this._props.paginationLayout;return!1===this._props.showSizeChanger&&(h=h.split(",").map(t=>t.trim()).filter(t=>"sizes"!==t).join(",")),t("div",{directives:[{name:"loading",value:this.loading}],class:"s-table",ref:"stableRef"},[t("el-table",i()([{attrs:{data:a},ref:"eleTableRef"},{props:n,scopedSlots:{...this.$scopedSlots}},{on:{"row-click":this.rowClick,"selection-change":this.handleSelectionChange},style:"width: 100%"}]),[Object.keys(this.$slots).map(a=>t("template",{slot:a},[this.$slots[a]]))]),this._props.showPagination&&t("el-pagination",{attrs:{disabled:l,"current-page":s.pageNum,"page-sizes":this._props.pageSizes,"page-size":s.pageSize,layout:h,total:e},style:"text-align: end; margin-top: 10px",on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})])}}},250:function(t,a,e){"use strict";e.r(a),e.d(a,"getTableData",(function(){return i}));var s=e(229);function i(t){return Object(s.default)({url:"/v1/getTableData",method:"get",params:t})}},293:function(t,a,e){"use strict";e.r(a);e(24);var s=e(235),i=e(250),l={name:"STableDemo",props:{},data:()=>({data:[],dataFn:t=>Object(i.getTableData)({...t}).then(t=>t.data)}),components:{STable:s.default},watch:{},computed:{},created(){const t=[];for(let a=0;a<100;a++)t.push({index:a});this.data=t},mounted(){this.$refs.tableRef.refresh(!0)},beforeDestroy(){}},n=(e(621),e(9)),o=Object(n.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"s-table-demo"},[t("s-table",{staticClass:"table",attrs:{data:this.data}},[t("el-table-column",{attrs:{prop:"index",label:"索引"}})],1),this._v(" "),t("s-table",{ref:"tableRef",staticClass:"table",attrs:{data:this.dataFn}},[t("el-table-column",{attrs:{prop:"index",label:"索引"}})],1)],1)}),[],!1,null,"4e9cdcc7",null);a.default=o.exports},387:function(t,a,e){var s=e(2),i=e(622);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var l={insert:"head",singleton:!1};s(i,l);t.exports=i.locals||{}},621:function(t,a,e){"use strict";e(387)},622:function(t,a,e){(a=e(3)(!1)).push([t.i,".s-table-demo[data-v-4e9cdcc7] {\n  padding: 20px;\n}\n.s-table-demo .table[data-v-4e9cdcc7] {\n  margin-bottom: 50px;\n}\n",""]),t.exports=a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvcy10YWJsZS9zcmMvZWxlVGFibGVNZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy9zLXRhYmxlL3NyYy90YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3RhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9kZW1vL3MtdGFibGUtZGVtby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vcy10YWJsZS1kZW1vLnZ1ZT8wOGYyIiwid2VicGFjazovLy9zcmMvZGVtby9zLXRhYmxlLWRlbW8udnVlIiwid2VicGFjazovLy8uL3NyYy9kZW1vL3MtdGFibGUtZGVtby52dWU/OTMxZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9zLXRhYmxlLWRlbW8udnVlPzFmNGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vcy10YWJsZS1kZW1vLnZ1ZT9hZTZmIiwid2VicGFjazovLy8uL3NyYy9kZW1vL3MtdGFibGUtZGVtby52dWU/ZWI1YyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiT2JqZWN0Iiwia2V5cyIsIlQiLCJmb3JFYWNoIiwiZXZlbnROYW1lIiwiYXJncyIsInRoaXMiLCIkcmVmcyIsImVsZVRhYmxlUmVmIiwic2VydmljZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJyZXMiLCJkYXRhIiwiRWxUYWJsZSIsIl9UYWJsZSIsIkVsUGFnaW5hdGlvbiIsIl9QYWdpbmF0aW9uIiwibmFtZSIsInRhYmxlRGF0YSIsInRvdGFsIiwidG90YWxQYWdlIiwidGFibGVQYXJhbXMiLCJwYWdlTnVtIiwicGFnZVNpemUiLCJsb2FkaW5nIiwibG9hZGluZ1NlcnZpY2UiLCJsb2FkRGF0YVRpbWVyIiwiaXNMYXp5IiwicHJvcHMiLCJhc3NpZ24iLCJyb3dLZXkiLCJ0eXBlIiwiU3RyaW5nIiwiRnVuY3Rpb24iLCJkZWZhdWx0IiwiQXJyYXkiLCJyZXF1aXJlZCIsIk51bWJlciIsInNob3dTaXplQ2hhbmdlciIsIkJvb2xlYW4iLCJwYWdlU2l6ZXMiLCJzaXplIiwic2hvd1BhZ2luYXRpb24iLCJwYWdpbmF0aW9uTGF5b3V0IiwiaXNEZWZhdWx0UmVmcmVzaCIsImJvcmRlciIsImNvbXBvbmVudHMiLCJtb3VudGVkIiwicmVmcmVzaCIsIndhdGNoIiwiaW1tZWRpYXRlIiwiaGFuZGxlciIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIiRuZXh0VGljayIsInVwZGF0ZVN0YXRpY1RhYmxlRGF0YSIsInNsaWNlIiwibGVuZ3RoIiwicmVzZXRUYWJsZVNjcm9sbERlZmF1bHQiLCJib29sIiwiY3VycmVudCIsInVwZGF0ZVRhYmxlIiwiY2xlYXJEYXRhIiwibG9hZERhdGEiLCJyZXN1bHQiLCJ0aGVuIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNhdGNoIiwiZmluYWxseSIsImhhbmRsZVNpemVDaGFuZ2UiLCJoYW5kbGVDdXJyZW50Q2hhbmdlIiwicm93Q2xpY2siLCJyb3ciLCJjb2x1bW4iLCJldmVudCIsIiRlbWl0IiwiaGFuZGxlU2VsZWN0aW9uQ2hhbmdlIiwic2VsZWN0aW9uIiwiX3RoaXMkJHJlZnMkZWxlVGFibGVSIiwiZG9tIiwiJGVsIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJlbGVUYWJsZU1ldGhvZHMiLCJyZW5kZXIiLCJoIiwiYXJndW1lbnRzIiwibG9jYWxLZXlzIiwiJGRhdGEiLCJUS2V5IiwiaW5jbHVkZXMiLCJfcHJvcHMiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJ0cmltIiwiZmlsdGVyIiwiam9pbiIsInZhbHVlIiwiX21lcmdlSlNYUHJvcHMiLCJzY29wZWRTbG90cyIsIiRzY29wZWRTbG90cyIsIiRzbG90cyIsImdldFRhYmxlRGF0YSIsInBhcmFtcyIsInVybCIsIm1ldGhvZCIsImRhdGFGbiIsInBhZ2luYXRpb25QYXJhbXMiLCJTVGFibGUiLCJjb21wdXRlZCIsImNyZWF0ZWQiLCJpIiwicHVzaCIsImluZGV4IiwidGFibGVSZWYiLCJiZWZvcmVEZXN0cm95IiwiY29tcG9uZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiYXR0cnMiLCJfdiIsInJlZiIsImFwaSIsImNvbnRlbnQiLCJfX2VzTW9kdWxlIiwibW9kdWxlIiwib3B0aW9ucyIsImV4cG9ydHMiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iXSwibWFwcGluZ3MiOiJ5R0FBQSw2QkFTQSxNQUFNQSxFQUFVLEdBQ2hCQyxPQUFPQyxLQUFLQyxJQUFFSCxTQUFTSSxRQUFTQyxJQUM5QkwsRUFBUUssR0FBYSxZQUFhQyxHQUNoQ0MsS0FBS0MsTUFBTUMsWUFBWUosTUFBY0MsTUFJMUJOLGEsaUNDaEJmLE9BU0EsTUFBTVUsRUFUTixPQVNnQkMsRUFBTUMsT0FBTyxDQUMzQkMsUUFBUyxHQUNUQyxRQUFTLE1BR1hKLEVBQVFLLGFBQWFDLFFBQVFDLElBQzFCQyxHQUNRQSxFQUVSQyxHQUNRQyxRQUFRQyxPQUFPRixJQUkxQlQsRUFBUUssYUFBYU8sU0FBU0wsSUFDM0JNLEdBQ2NBLEVBQUlDLEtBR2xCTCxHQUNRQyxRQUFRQyxPQUFPRixJQUlYVCxhLG1JQy9CZixNQUFNZSxFQUFPQyxJQUNQQyxFQUFZQyxJQUdILFdBQ2JDLEtBQU0sU0FDTkwsS0FBSUEsS0FDSyxDQUNMTSxVQUFXLEdBQ1hDLE1BQU8sRUFDUEMsVUFBVyxFQUNYQyxZQUFhLENBQ1hDLFFBQVMsRUFDVEMsU0FBVSxJQUVaQyxTQUFTLEVBQ1RDLGVBQWdCLEtBQ2hCQyxjQUFlLEtBQ2ZDLFFBQVEsSUFHWkMsTUFBT3ZDLE9BQU93QyxPQUFPLEdBQUl0QyxJQUFFcUMsTUFBTyxDQUNoQ0UsT0FBUSxDQUNOQyxLQUFNLENBQUNDLE9BQVFDLFVBQ2ZD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QWtCLENBQUNHLE1BQU0sQ0FBQyxLQUFPLFFBQVEsTUFBUSxTQUFTLEdBQTVMakksS0FBbU1rSSxHQUFHLEtBQUtKLEVBQUcsVUFBVSxDQUFDSyxJQUFJLFdBQVdILFlBQVksUUFBUUMsTUFBTSxDQUFDLEtBQW5RakksS0FBOFFtSCxTQUFTLENBQUNXLEVBQUcsa0JBQWtCLENBQUNHLE1BQU0sQ0FBQyxLQUFPLFFBQVEsTUFBUSxTQUFTLElBQUksS0FFMVcsSUdVcEIsRUFDQSxLQUNBLFdBQ0EsTUFJYSxVQUFBSixFLDZCQ25CZixJQUFJTyxFQUFNLEVBQVEsR0FDRkMsRUFBVSxFQUFRLEtBSUMsaUJBRnZCQSxFQUFVQSxFQUFRQyxXQUFhRCxFQUFROUYsUUFBVThGLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0UsRUFBT2YsRUFBSWEsRUFBUyxNQUc5QyxJQUFJRyxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FFUEosRUFBSUMsRUFBU0csR0FJMUJELEVBQU9FLFFBQVVKLEVBQVFLLFFBQVUsSSxpQ0NsQm5DLFEscUJDRUFELEVBRGtDLEVBQVEsRUFDaENFLEVBQTRCLElBRTlCbEIsS0FBSyxDQUFDYyxFQUFPZixFQUFJLDhIQUErSCxLQUV4SmUsRUFBT0UsUUFBVUEiLCJmaWxlIjoianMvNDUuYmE4MzUwNjRjODJkNmNkN2IwNzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogYXRkb3dcbiAqIEBEYXRlOiAyMDIzLTA0LTE0IDIwOjIzOjU5XG4gKiBATGFzdEVkaXRvcnM6IG51bGxcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDQtMTYgMTI6NDk6MTlcbiAqIEBEZXNjcmlwdGlvbjogZmlsZSBkZXNjcmlwdGlvblxuICovXG5pbXBvcnQgVCBmcm9tICdlbGVtZW50LXVpL2xpYi90YWJsZSdcblxuY29uc3QgbWV0aG9kcyA9IHt9XG5PYmplY3Qua2V5cyhULm1ldGhvZHMpLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICBtZXRob2RzW2V2ZW50TmFtZV0gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIHRoaXMuJHJlZnMuZWxlVGFibGVSZWZbZXZlbnROYW1lXSguLi5hcmdzKVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzXG4iLCIvKlxuICogQEF1dGhvcjogYXRkb3dcbiAqIEBEYXRlOiAyMDIzLTA0LTE2IDE2OjExOjUzXG4gKiBATGFzdEVkaXRvcnM6IG51bGxcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDQtMTYgMTY6MTI6NTZcbiAqIEBEZXNjcmlwdGlvbjogZmlsZSBkZXNjcmlwdGlvblxuICovXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnJyxcbiAgdGltZW91dDogMjAwMDAsXG59KVxuXG5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgKGNvbmZpZykgPT4ge1xuICAgIHJldHVybiBjb25maWdcbiAgfSxcbiAgKGVycm9yKSA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICB9XG4pXG5cbnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcbiAgKHJlcykgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YVxuICAgIHJldHVybiBkYXRhXG4gIH0sXG4gIChlcnJvcikgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmltcG9ydCB7IExvYWRpbmcsIFRhYmxlLCBQYWdpbmF0aW9uIH0gZnJvbSAnZWxlbWVudC11aSdcbmNvbnN0IEVsVGFibGUgPSBUYWJsZSAvLyDmmoLml7bml6Dms5Xkvb/nlKhpbXBvcnQgYXMg5pa55byP77yM5bqU6K+l5pivYmFiZWzphY3nva7pl67pophcbmNvbnN0IEVsUGFnaW5hdGlvbiA9IFBhZ2luYXRpb25cbmltcG9ydCBUIGZyb20gJ2VsZW1lbnQtdWkvbGliL3RhYmxlJ1xuaW1wb3J0IGVsZVRhYmxlTWV0aG9kcyBmcm9tICcuL2VsZVRhYmxlTWV0aG9kcycgLy8g57un5om/55qEZWxlbWVudOaWueazlVxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnU1RhYmxlJyxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFibGVEYXRhOiBbXSxcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgdG90YWxQYWdlOiAwLFxuICAgICAgdGFibGVQYXJhbXM6IHtcbiAgICAgICAgcGFnZU51bTogMSxcbiAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgbG9hZGluZ1NlcnZpY2U6IG51bGwsXG4gICAgICBsb2FkRGF0YVRpbWVyOiBudWxsLFxuICAgICAgaXNMYXp5OiB0cnVlLCAvLyDmmK/mh5LliqDovb3ov5jmmK/pnZnmgIHmlbDmja5cbiAgICB9XG4gIH0sXG4gIHByb3BzOiBPYmplY3QuYXNzaWduKHt9LCBULnByb3BzLCB7XG4gICAgcm93S2V5OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBGdW5jdGlvbl0sXG4gICAgICBkZWZhdWx0OiAna2V5JyxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6IFtGdW5jdGlvbiwgQXJyYXldLCAvLyDlpoLmnpzmmK/lh73mlbDmlrnlvI/vvIzlsLHmmK/mh5LliqDovb3vvJvlpoLmnpzmmK/mlbDnu4TvvIzlsLHmmK/pnZnmgIHmlbDmja5cbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0sXG4gICAgcGFnZVNpemU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEwLFxuICAgIH0sXG4gICAgc2hvd1NpemVDaGFuZ2VyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICB9LFxuICAgIHBhZ2VTaXplczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbMTAsIDIwLCAzMCwgNTAsIDEwMF1cbiAgICAgIH0sXG4gICAgfSxcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbWluaScsXG4gICAgfSxcbiAgICBzaG93UGFnaW5hdGlvbjoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uTGF5b3V0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndG90YWwsIHNpemVzLCBwcmV2LCBwYWdlciwgbmV4dCwganVtcGVyJyxcbiAgICB9LFxuICAgIGlzRGVmYXVsdFJlZnJlc2g6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIGJvcmRlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgfSxcbiAgfSksXG4gIGNvbXBvbmVudHM6IHtcbiAgICBFbFRhYmxlLFxuICAgIEVsUGFnaW5hdGlvbixcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnRhYmxlUGFyYW1zLnBhZ2VTaXplID0gdGhpcy5wYWdlU2l6ZVxuICAgIGlmICh0aGlzLmlzRGVmYXVsdFJlZnJlc2ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMucmVmcmVzaCh0cnVlKVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBkYXRhOiB7XG4gICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICBoYW5kbGVyKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5kYXRhOicsIHRoaXMuZGF0YSwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMuZGF0YSkpO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMuZGF0YSkgPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgIHRoaXMuaXNMYXp5ID0gZmFsc2VcbiAgICAgICAgICB0aGlzLnRhYmxlUGFyYW1zLnBhZ2VOdW0gPSAxXG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0aWNUYWJsZURhdGEoKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZVN0YXRpY1RhYmxlRGF0YSgpIHtcbiAgICAgIGNvbnN0IHsgcGFnZU51bSwgcGFnZVNpemUgfSA9IHRoaXMudGFibGVQYXJhbXNcbiAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5kYXRhLnNsaWNlKChwYWdlTnVtIC0gMSkgKiBwYWdlU2l6ZSwgcGFnZU51bSAqIHBhZ2VTaXplKVxuICAgICAgdGhpcy50b3RhbCA9IHRoaXMuZGF0YS5sZW5ndGhcbiAgICAgIHRoaXMucmVzZXRUYWJsZVNjcm9sbERlZmF1bHQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog6KGo5qC86YeN5paw5Yqg6L295pa55rOVXG4gICAgICog5aaC5p6c5Y+C5pWw5Li6IHRydWUsIOWImeW8uuWItuWIt+aWsOWIsOesrOS4gOmhtVxuICAgICAqIEBwYXJhbSBCb29sZWFuIGJvb2xcbiAgICAgKi9cbiAgICByZWZyZXNoKGJvb2wgPSBmYWxzZSwgY3VycmVudCkge1xuICAgICAgaWYgKGJvb2wgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy50YWJsZVBhcmFtcy5wYWdlTnVtID0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgICAgICB0aGlzLnRhYmxlUGFyYW1zLnBhZ2VOdW0gPSBjdXJyZW50IHx8IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVUYWJsZSgpXG4gICAgfSxcbiAgICBjbGVhckRhdGEoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy50YWJsZURhdGEgPSBbXVxuICAgICAgdGhpcy50b3RhbCA9IDBcbiAgICAgIHRoaXMudG90YWxQYWdlID0gMFxuICAgICAgdGhpcy50YWJsZVBhcmFtcyA9IHtcbiAgICAgICAgcGFnZU51bTogMSxcbiAgICAgICAgcGFnZVNpemU6IDEwLFxuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVGFibGUoKSB7XG4gICAgICBpZiAodGhpcy5pc0xhenkpIHtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRpY1RhYmxlRGF0YSgpXG4gICAgICB9XG4gICAgfSxcbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0YSh0aGlzLnRhYmxlUGFyYW1zKVxuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgLy8gdGhpcy5sb2FkaW5nU2VydmljZSA9IExvYWRpbmcuc2VydmljZSh7IHRhcmdldDogdGhpcy4kcmVmcy5zdGFibGVSZWYgfSk7XG4gICAgICByZXN1bHRcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdG90YWwgPSAwLCB0b3RhbFBhZ2UgPSAwLCBkYXRhID0gW10gfSA9IHJlc1xuICAgICAgICAgIGNvbnN0IHBhZ2VOdW0gPSByZXMucGFnZU51bVxuICAgICAgICAgIGNvbnN0IHBhZ2VTaXplID0gcmVzLnBhZ2VTaXplXG4gICAgICAgICAgdGhpcy50YWJsZURhdGEgPSBkYXRhXG4gICAgICAgICAgLy8g5ZCO56uv5rKh5pyJ6L+U5Zue77yM5bCx5piv55So5YmN56uv55qE5Y+C5pWwXG4gICAgICAgICAgaWYgKHBhZ2VOdW0gJiYgcGFnZVNpemUpIHtcbiAgICAgICAgICAgIHRoaXMudGFibGVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgIHBhZ2VOdW06IHBhZ2VOdW0gPyBwYWdlTnVtIDogMSxcbiAgICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRvdGFsID0gdG90YWxcbiAgICAgICAgICB0aGlzLnRvdGFsUGFnZSA9IHRvdGFsUGFnZVxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIOiHquWKqOe/u+mhtVxuICAgICAgICAgICAqIOS4uumYsuatouWIoOmZpOaVsOaNruWQjuWvvOiHtOmhtemdouW9k+WJjemhtemdouaVsOaNrumVv+W6puS4uiAwICzoh6rliqjnv7vpobXliLDkuIrkuIDpobVcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5zaG93UGFnaW5hdGlvbiAmJiB0aGlzLnRhYmxlUGFyYW1zLnBhZ2VOdW0gPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnRhYmxlUGFyYW1zLnBhZ2VOdW0gPSB0aGlzLnRhYmxlUGFyYW1zLnBhZ2VOdW0gLSAxXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubG9hZERhdGFUaW1lcilcbiAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpXG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge30pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIHRoaXMucmVzZXRUYWJsZVNjcm9sbERlZmF1bHQoKVxuICAgICAgICAgIC8vIHRoaXMubG9hZGluZ1NlcnZpY2UuY2xvc2UoKTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZVNpemVDaGFuZ2UocGFnZVNpemUpIHtcbiAgICAgIHRoaXMudGFibGVQYXJhbXMucGFnZVNpemUgPSBwYWdlU2l6ZVxuICAgICAgdGhpcy50YWJsZVBhcmFtcy5wYWdlTnVtID0gMVxuICAgICAgdGhpcy51cGRhdGVUYWJsZSgpXG4gICAgfSxcbiAgICBoYW5kbGVDdXJyZW50Q2hhbmdlKHBhZ2VOdW0pIHtcbiAgICAgIHRoaXMudGFibGVQYXJhbXMucGFnZU51bSA9IHBhZ2VOdW1cbiAgICAgIHRoaXMudXBkYXRlVGFibGUoKVxuICAgIH0sXG4gICAgcm93Q2xpY2socm93LCBjb2x1bW4sIGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdyb3ctY2xpY2snLCByb3csIGNvbHVtbiwgZXZlbnQpXG4gICAgfSxcbiAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLiRlbWl0KCdoYW5kbGVTZWxlY3Rpb25DaGFuZ2UnLCBzZWxlY3Rpb24pXG4gICAgfSxcbiAgICByZXNldFRhYmxlU2Nyb2xsRGVmYXVsdCgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgZG9tID0gdGhpcy4kcmVmcy5lbGVUYWJsZVJlZj8uJGVsPy5xdWVyeVNlbGVjdG9yKCcuZWwtdGFibGVfX2JvZHktd3JhcHBlcicpXG4gICAgICAgIGlmIChkb20pIHtcbiAgICAgICAgICBkb20uc2Nyb2xsVG9wID0gMFxuICAgICAgICAgIGRvbS5zY3JvbGxMZWZ0ID0gMFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgLi4uZWxlVGFibGVNZXRob2RzLCAvLyDnu6fmib/nmoRlbGVtZW505pa55rOVXG4gIH0sXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRhYmxlRGF0YSA9IFtdLCB0b3RhbCA9IDAsIHRhYmxlUGFyYW1zID0ge30sIGxvYWRpbmcgPSBmYWxzZSB9ID0gdGhpc1xuICAgIGNvbnN0IHByb3BzID0ge31cbiAgICBjb25zdCBsb2NhbEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLiRkYXRhKVxuICAgIC8vIOi/h+a7pOaOieacrOWcsOWumuS5ieS9v+eUqOeahGtleVxuICAgIE9iamVjdC5rZXlzKFQucHJvcHMpLmZvckVhY2goKFRLZXkpID0+IHtcbiAgICAgIGlmIChsb2NhbEtleXMuaW5jbHVkZXMoVEtleSkgPT09IGZhbHNlICYmIFRLZXkgIT09ICdkYXRhJykge1xuICAgICAgICBwcm9wc1tUS2V5XSA9IHRoaXMuX3Byb3BzW1RLZXldXG4gICAgICB9XG4gICAgfSlcbiAgICBsZXQgcGFnaW5hdGlvbkxheW91dCA9IHRoaXMuX3Byb3BzLnBhZ2luYXRpb25MYXlvdXRcbiAgICBpZiAodGhpcy5fcHJvcHMuc2hvd1NpemVDaGFuZ2VyID09PSBmYWxzZSkge1xuICAgICAgcGFnaW5hdGlvbkxheW91dCA9IHBhZ2luYXRpb25MYXlvdXRcbiAgICAgICAgLnNwbGl0KCcsJylcbiAgICAgICAgLm1hcCgoaXRlbSkgPT4gaXRlbS50cmltKCkpXG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09ICdzaXplcycpXG4gICAgICAgIC5qb2luKCcsJylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgdi1sb2FkaW5nPXt0aGlzLmxvYWRpbmd9IGNsYXNzPVwicy10YWJsZVwiIHJlZj1cInN0YWJsZVJlZlwiPlxuICAgICAgICA8ZWwtdGFibGVcbiAgICAgICAgICBkYXRhPXt0YWJsZURhdGF9XG4gICAgICAgICAgcmVmPVwiZWxlVGFibGVSZWZcIlxuICAgICAgICAgIHsuLi57IHByb3BzLCBzY29wZWRTbG90czogeyAuLi50aGlzLiRzY29wZWRTbG90cyB9IH19XG4gICAgICAgICAgb25Sb3ctY2xpY2s9e3RoaXMucm93Q2xpY2t9XG4gICAgICAgICAgb25TZWxlY3Rpb24tY2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdGlvbkNoYW5nZX1cbiAgICAgICAgICBzdHlsZT1cIndpZHRoOiAxMDAlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLiRzbG90cykubWFwKChuYW1lKSA9PiAoXG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD17bmFtZX0+e3RoaXMuJHNsb3RzW25hbWVdfTwvdGVtcGxhdGU+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZWwtdGFibGU+XG4gICAgICAgIHt0aGlzLl9wcm9wcy5zaG93UGFnaW5hdGlvbiAmJiAoXG4gICAgICAgICAgPGVsLXBhZ2luYXRpb25cbiAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBlbmQ7IG1hcmdpbi10b3A6IDEwcHhcIlxuICAgICAgICAgICAgb25TaXplLWNoYW5nZT17dGhpcy5oYW5kbGVTaXplQ2hhbmdlfVxuICAgICAgICAgICAgb25DdXJyZW50LWNoYW5nZT17dGhpcy5oYW5kbGVDdXJyZW50Q2hhbmdlfVxuICAgICAgICAgICAgY3VycmVudC1wYWdlPXt0YWJsZVBhcmFtcy5wYWdlTnVtfVxuICAgICAgICAgICAgcGFnZS1zaXplcz17dGhpcy5fcHJvcHMucGFnZVNpemVzfVxuICAgICAgICAgICAgcGFnZS1zaXplPXt0YWJsZVBhcmFtcy5wYWdlU2l6ZX1cbiAgICAgICAgICAgIGxheW91dD17cGFnaW5hdGlvbkxheW91dH1cbiAgICAgICAgICAgIHRvdGFsPXt0b3RhbH1cbiAgICAgICAgICA+PC9lbC1wYWdpbmF0aW9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxufVxuIiwiLypcbiAqIEBBdXRob3I6IGF0ZG93XG4gKiBARGF0ZTogMjAyMy0wNC0xNiAxNjoxNDowOVxuICogQExhc3RFZGl0b3JzOiBudWxsXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIzLTA0LTE2IDE2OjE2OjQ4XG4gKiBARGVzY3JpcHRpb246IGZpbGUgZGVzY3JpcHRpb25cbiAqL1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnQC91dGlscy9yZXF1ZXN0J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFibGVEYXRhKHBhcmFtcykge1xuICByZXR1cm4gcmVxdWVzdCh7XG4gICAgdXJsOiAnL3YxL2dldFRhYmxlRGF0YScsXG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICBwYXJhbXMsXG4gIH0pXG59XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCl7dmFyIF92bT10aGlzLF9jPV92bS5fc2VsZi5fYztyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwicy10YWJsZS1kZW1vXCJ9LFtfYygncy10YWJsZScse3N0YXRpY0NsYXNzOlwidGFibGVcIixhdHRyczp7XCJkYXRhXCI6X3ZtLmRhdGF9fSxbX2MoJ2VsLXRhYmxlLWNvbHVtbicse2F0dHJzOntcInByb3BcIjpcImluZGV4XCIsXCJsYWJlbFwiOlwi57Si5byVXCJ9fSldLDEpLF92bS5fdihcIiBcIiksX2MoJ3MtdGFibGUnLHtyZWY6XCJ0YWJsZVJlZlwiLHN0YXRpY0NsYXNzOlwidGFibGVcIixhdHRyczp7XCJkYXRhXCI6X3ZtLmRhdGFGbn19LFtfYygnZWwtdGFibGUtY29sdW1uJyx7YXR0cnM6e1wicHJvcFwiOlwiaW5kZXhcIixcImxhYmVsXCI6XCLntKLlvJVcIn19KV0sMSldLDEpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zLXRhYmxlLWRlbW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zLXRhYmxlLWRlbW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCI8IS0tXG4gKiBAQXV0aG9yOiBhdGRvd1xuICogQERhdGU6IDIwMjMtMDQtMTYgMTI6MTc6MDRcbiAqIEBMYXN0RWRpdG9yczogbnVsbFxuICogQExhc3RFZGl0VGltZTogMjAyMy0wNC0xNiAxNjozMzozM1xuICogQERlc2NyaXB0aW9uOiBmaWxlIGRlc2NyaXB0aW9uXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInMtdGFibGUtZGVtb1wiPlxuICAgIDxzLXRhYmxlIDpkYXRhPVwiZGF0YVwiIGNsYXNzPVwidGFibGVcIj5cbiAgICAgIDxlbC10YWJsZS1jb2x1bW4gcHJvcD1cImluZGV4XCIgbGFiZWw9XCLntKLlvJVcIj48L2VsLXRhYmxlLWNvbHVtbj5cbiAgICA8L3MtdGFibGU+XG4gICAgPHMtdGFibGUgOmRhdGE9XCJkYXRhRm5cIiByZWY9XCJ0YWJsZVJlZlwiIGNsYXNzPVwidGFibGVcIj5cbiAgICAgIDxlbC10YWJsZS1jb2x1bW4gcHJvcD1cImluZGV4XCIgbGFiZWw9XCLntKLlvJVcIj48L2VsLXRhYmxlLWNvbHVtbj5cbiAgICA8L3MtdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbsKgXG48c2NyaXB0PlxuaW1wb3J0IFNUYWJsZSBmcm9tICdAL3BhY2thZ2VzL3MtdGFibGUvc3JjL3RhYmxlLmpzJ1xuaW1wb3J0IHsgZ2V0VGFibGVEYXRhIH0gZnJvbSAnQC9hcGkvdGFibGUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdTVGFibGVEZW1vJyxcbiAgcHJvcHM6IHt9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGRhdGFGbjogKHBhZ2luYXRpb25QYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge30gLy8g5YW25LuW6K+35rGC5Y+C5pWwXG4gICAgICAgIHJldHVybiBnZXRUYWJsZURhdGEoeyAuLi5wYWdpbmF0aW9uUGFyYW1zLCAuLi5wYXJhbXMgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlcy5kYXRhXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIFNUYWJsZSxcbiAgfSxcbiAgd2F0Y2g6IHt9LFxuICBjb21wdXRlZDoge30sXG4gIGNyZWF0ZWQoKSB7XG4gICAgY29uc3QgZGF0YSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgZGF0YS5wdXNoKHsgaW5kZXg6IGkgfSlcbiAgICB9XG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuJHJlZnMudGFibGVSZWYucmVmcmVzaCh0cnVlKVxuICB9LFxuICBiZWZvcmVEZXN0cm95KCkge30sXG59XG48L3NjcmlwdD5cbsKgXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG4ucy10YWJsZS1kZW1vIHtcbiAgcGFkZGluZzogMjBweDtcbiAgLnRhYmxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zLXRhYmxlLWRlbW8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlOWNkY2M3JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcy10YWJsZS1kZW1vLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zLXRhYmxlLWRlbW8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcy10YWJsZS1kZW1vLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlOWNkY2M3JnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRlOWNkY2M3XCIsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zLXRhYmxlLWRlbW8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGU5Y2RjYzcmcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWVcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcy10YWJsZS1kZW1vLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRlOWNkY2M3JnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlXCIiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnMtdGFibGUtZGVtb1tkYXRhLXYtNGU5Y2RjYzddIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5zLXRhYmxlLWRlbW8gLnRhYmxlW2RhdGEtdi00ZTljZGNjN10ge1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=