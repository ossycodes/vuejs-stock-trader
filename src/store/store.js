import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import stock from './modules/stock';
import portfolio from './modules/portfolio';
import * as actions from './actions';

//store
const store = new Vuex.Store({
    modules: {
        stock,
        portfolio
    },
    actions
})


export default store;