<template>
  <div class="text-center">
    <v-btn @click="getScraping">
      go scraping
    </v-btn>
    <span>
      <a href="https://github.com/nkn-ms/scraping-note" target="_blank">
        source code
      </a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ScHeader',
  methods: {
    // onclickでスクレイピング実行
    async getScraping() {
      this.$store.dispatch('scraping/setIsLoading', true)
      const url = 'https://powerful-reaches-95672.herokuapp.com/2'
      const data = await this.$store.dispatch('scraping/getScrapingData', url)
      console.log(data)
      setTimeout(() => {
        this.$store.dispatch('scraping/setScrapingData', data)
        this.$store.dispatch('scraping/setIsLoading', false)
      }, 1000)
      // this.$store.dispatch('setScrapingData', data)
    }
  }
}
</script>
