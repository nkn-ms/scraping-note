<template>
  <div class="home">
    <sc-header />
    <sc-contents v-if="isScrapingData" />
    <router-view /> <!-- <sc-detail>の挿入 -->
  </div>
</template>

<script>
// @ is an alias to /src
import ScHeader from '@/components/ScHeader.vue'
import ScContents from '@/components/ScContents.vue'

export default {
  name: 'Top',
  components: {
    ScHeader,
    ScContents
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    isScrapingData () {
      return this.$store.state.scrapingData !== null
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
        console.log(response)
        return response.body.getReader()
      }).then((reader) => {
        // ReadableStream.read()はPromiseを返す。
        // Promiseは{ done, value }として解決される。
        // データを読み込んだとき：doneはfalse, valueは値。
        // データを読み込み終わったとき：doneはtrue, valueはundefined。
        function readChunk ({ done, value }) {
          if (done) {
            // 読み込みが終わっていれば最終的なテキストを表示する。
            console.log(scrapingData)
            return
          }
          scrapingData += decoder.decode(value)
          // 次の値を読みにいく。
          reader.read().then(readChunk)
        }
        // 最初の値を読み込む。
        reader.read().then(readChunk)
      }).then(() => {
        this.setScrapingData(JSON.parse(scrapingData))
        this.loading = false
      })
    }
  }
}
</script>
