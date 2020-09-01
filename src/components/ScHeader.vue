<template>
  <div class="text-center">
    <v-btn :disabled="isDisabled" @click="getScraping">
      go scraping
    </v-btn>
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
      const url = 'https://powerful-reaches-95672.herokuapp.com/2'
      const data = await this.$store.dispatch('scraping/getScrapingData', url)
      setTimeout(() => {
        this.$store.dispatch('scraping/setScrapingData', data)
        this.$store.dispatch('scraping/setIsLoading', false)
      }, 800)
    }
  }
}
</script>
