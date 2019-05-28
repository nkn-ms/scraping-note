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
  computed: {
    isScrapingData () {
      return this.$store.state.scrapingData !== null
    }
  },
  methods: {
    setScrapingData (data) {
      this.$store.dispatch('setScrapingData', data)
      console.log(this.$store.state)
    }
  }
}
</script>
