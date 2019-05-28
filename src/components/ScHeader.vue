<template>
  <div class="home">
    <base-button @click="getScraping">
      go scraping
    </base-button>
    <spinner
      v-if="loading"
      size="large"
      message="loading..."
      class="mgt-10"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from '@/components/BaseButton.vue'
import Spinner from 'vue-simple-spinner'

export default {
  name: 'ScHeader',
  components: {
    BaseButton,
    Spinner
  },
  data () {
    return {
      loading: false

    }
  },
  methods: {
    setScrapingData (data) {
      this.$store.dispatch('setScrapingData', data)
      console.log(this.$store.state)
    },
    // onclickでスクレイピング実行
    getScraping () {
      console.log('getScraping')
      this.loading = true
      let scrapingData = ''
      const decoder = new TextDecoder()
      fetch('https://heroku-puppeteer-note.herokuapp.com/scraping', {
        mode: 'cors'
      }).then((response) => {
        return response.body.getReader()
      }).then((reader) => {
        // ReadableStream.read()はPromiseを返す。
        // Promiseは{ done, value }として解決される。
        // データを読み込んだとき：doneはfalse, valueは値。
        // データを読み込み終わったとき：doneはtrue, valueはundefined。
        const readChunk = ({ done, value }) => {
          if (done) {
            // 読み込みが終わっていれば最終的なテキストを表示する。
            console.log(scrapingData)
            this.setScrapingData(JSON.parse(scrapingData))
            this.loading = false
            return
          }
          scrapingData += decoder.decode(value)
          // 次の値を読みにいく。
          reader.read().then(readChunk)
        }
        // 最初の値を読み込む。
        reader.read().then(readChunk)
      })
    }
  }
}
</script>

<style scoped>
.mgt-10 {
  margin-top: 10px;
}
</style>
