import Scrollbar from './src/main'
import './src/scrollbar.less'

/* istanbul ignore next */
Scrollbar.install = function (Vue) {
  Vue.component(Scrollbar.name, Scrollbar)
}

export default Scrollbar
