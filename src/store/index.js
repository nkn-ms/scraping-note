import Vue from 'vue'
import Vuex from 'vuex'
import scraping from './modules/scraping'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    scraping: scraping
  }
})
