import GS from 'gemini-scrollbar'
import GeminiScrollbar from './geminiScrollbar.vue'
import CustomScrollbarDerective from './directive'

const install = function(Vue) {
  Vue.component(GeminiScrollbar.name, GeminiScrollbar)
  Vue.directive(CustomScrollbarDerective.name, CustomScrollbarDerective)
  Vue.prototype.$geminiScrollbar = Vue.$geminiScrollbar = GS
  window.GeminiScrollbar = GS
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
  window[directive.name] = CustomScrollbarDerective
  window.Vue.prototype.$geminiScrollbar = window.Vue.$geminiScrollbar = GS
}
CustomScrollbarDerective.install = install
export default install
