import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrapingData: [],
    detailData: null,
    isLoading: false
  },
  mutations: {
    setScrapingData(state, data) {
      state.scrapingData = data
    },
    setIsLoading(state, data) {
      state.isLoading = data
    },
    setDetailData(state, detailData) {
      state.detailData = detailData
    }
  },
  actions: {
    setScrapingData(context, data) {
      context.commit('setScrapingData', data)
    },
    setDetailData(context, detailData) {
      context.commit('setDetailData', detailData)
    },
    setIsLoading(context, data) {
      context.commit('setIsLoading', data)
    },
    async getScrapingData(context, url) {
      const response = await axios.get(url)
      return response.data.scraping
    }
  }
})
