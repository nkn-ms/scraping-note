<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
      :loading="isLoading"
      loading-text="Loading... Please wait"
      @click:row="setDetailData"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'ScContents',
  data() {
    return {
      headers: [
        {
          text: 'name',
          align: 'start',
          value: 'name'
        },
        { text: 'title', value: 'title' },
        { text: 'likes', value: 'like' }
      ]
    }
  },
  computed: {
    items() {
      return this.$store.state.scraping.scrapingData
    },
    isLoading() {
      return this.$store.state.scraping.isLoading
    }
  },
  methods: {
    setDetailData(detailData) {
      this.$store.dispatch('scraping/setDetailData', detailData)
      this.$router.push({ path: `/detail/${detailData.id}` })
    }
  }
}
</script>
