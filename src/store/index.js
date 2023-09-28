/*
 * @Author: atdow
 * @Date: 2023-09-29 00:12:03
 * @LastEditors: null
 * @LastEditTime: 2023-09-29 00:15:19
 * @Description: file description
 */
import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
  },
  state: {},
  mutations: {},
  actions: {},
  getters,
  plugins: [],
})
