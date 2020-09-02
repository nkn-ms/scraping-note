<template>
  <v-card v-if="detailData" max-width="344" class="mx-auto" @click="disp">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ detailData.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ detailData.name }}</v-list-item-subtitle>
        <div class="text--primary mt-1">
          <v-icon class="pink--text">mdi-heart</v-icon>
          <span class="pink--text">{{ detailData.like }}</span>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-img :src="detailData.eyecatch_src" height="194"></v-img>
    <v-card-text>{{ detailData.description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ScDetailCard',
  computed: {
    detailData() {
      return this.$store.state.scraping.detailData
    }
  },
  watch: {
    $route: function(to, from) {
      if (to.path !== from.path) {
        // history.back() history.forward()時にdetailを更新
        this.$store.dispatch(
          'scraping/setDetailData',
          this.$store.state.scraping.scrapingData[
            location.pathname.split('/detail/')[1] - 1
          ]
        )
      }
    }
  },
  methods: {
    disp() {
      if (window.confirm('noteを開きますがよろしいでしょうか？？')) {
        window.open(this.$store.state.scraping.detailData.url)
      }
    }
  }
}
</script>
