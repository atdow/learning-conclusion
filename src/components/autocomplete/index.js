import Autocomplete from './src/Autocomplete';

/* istanbul ignore next */
Autocomplete.install = function (Vue) {
    Vue.component(Autocomplete.name, Autocomplete);
};

export default Autocomplete;