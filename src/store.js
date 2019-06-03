import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrapingData: null,
    detailData: null
  },
  mutations: {
    setScrapingData (state, data) {
      state.scrapingData = data
    },
    setDetailData (state, detailData) {
      state.detailData = detailData
    }
  },
  actions: {
    setScrapingData (context, data) {
      context.commit('setScrapingData', data)
    },
    setDetailData (context, detailData) {
      context.commit('setDetailData', detailData)
    }
  }
})
