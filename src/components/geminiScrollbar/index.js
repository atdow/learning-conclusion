import GeminiScrollbar from './src/GeminiScrollbar';

/* istanbul ignore next */
GeminiScrollbar.install = function (Vue) {
    Vue.component(GeminiScrollbar.name, GeminiScrollbar);
};

export default GeminiScrollbar;