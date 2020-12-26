import Scrollbar from './src/Scrollbar';

/* istanbul ignore next */
Scrollbar.install = function (Vue) {
    Vue.component(Scrollbar.name, Scrollbar);
};

export default Scrollbar;