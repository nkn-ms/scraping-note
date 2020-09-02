<template>
  <div class="text-center">
    <v-btn :disabled="isDisabled" @click="getScraping">go scraping</v-btn>
  </div>
</template>

<script>
export default {
  name: 'ScHeader',
  data: () => {
    return {
      isDisabled: false
    }
  },
  methods: {
    // onclickでスクレイピング実行
    async getScraping() {
      this.isDisabled = true
      this.$store.dispatch('scraping/setIsLoading', true)
      // const url = 'https://powerful-reaches-95672.herokuapp.com/2'
      const url = '/scraping'
      const res = await this.$store.dispatch('scraping/getScrapingData', url)
      if (res.status === 'error') {
        alert('スクレイピングに失敗したので事前に取得したデータを使います。')
      }
      setTimeout(() => {
        this.$store.dispatch('scraping/setScrapingData', res.scraping)
        this.$store.dispatch('scraping/setIsLoading', false)
      }, 800)
    }
  }
}
</script>
