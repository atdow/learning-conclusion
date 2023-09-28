/*
 * @Author: atdow
 * @Date: 2023-09-29 00:13:20
 * @LastEditors: null
 * @LastEditTime: 2023-09-29 00:20:06
 * @Description: file description
 */
import Vue from 'vue'
import { Menu_Min_Width } from '@/store/mutation-types'

const app = {
  state: {
    menuWidth: Menu_Min_Width,
  },
  mutations: {
    SET_MENU_WIDTH: (state, width) => {
      state.menuWidth = width
    },
  },
  actions: {
    setMenuWidth({ commit }, width) {
      commit('SET_MENU_WIDTH', width)
    },
  },
}

export default app
