import VirtualListDynamicHeight from './src/index.vue'

/* istanbul ignore next */
VirtualListDynamicHeight.install = function (Vue) {
  Vue.component(VirtualListDynamicHeight.name, VirtualListDynamicHeight)
}

export default VirtualListDynamicHeight