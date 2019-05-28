<template>
  <div
    v-if="detailData"
    class="detail"
  >
    <h1 class="mbt-0">
      Detail
    </h1>
    <a
      v-if="detailData"
      :href="detailData.url"
      target="_blank"
      @click.stop="disp"
    >
      <div>
        <h3>{{ detailData.title }}</h3>
      </div>
      <div class="content">
        <div class="author">
          <img
            :src="detailData.icon"
            class="icon"
          >
        </div>
        <div class="description">
          {{ detailData.description }}
          <div class="meta">
            <div>{{ detailData.date }}</div>
            <div>{{ detailData.name }}</div>
          </div>
        </div>
        <div>
          <img
            :src="detailData.eyecatch_src"
            class="eyecatch"
          >
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ScDetail',
  computed: {
    detailData () {
      console.log('Detail computed')
      console.log(this.$store.state.detailData)
      return this.$store.state.detailData
    }
  },
  watch: {
    '$route': function (to, from) {
      if (to.path !== from.path) {
        // history.back() history.forward()時にdetailを更新
        this.$store.dispatch('setDetailData', this.$store.state.scrapingData[location.pathname.split('/detail/')[1] - 1])
      }
    }
  },
  methods: {
    disp (e) {
      if (!window.confirm('noteを開きますがよろしいでしょうか？？')) {
        e.preventDefault()
      }
    }
  }
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.detail {
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
.content {
  display: flex;
  text-align: left;
  justify-content: space-between;
}
.author {
  position: relative;
}
.icon {
  width: 150px;
  border-radius: 50%;
}
.description {
  position: relative;
  width: calc(100% - 150px - 150px );
  margin: 0 10px;
}
.meta {
  color: gray;
  position: absolute;
  bottom: 0px;
  left: 0px;

}
.eyecatch {
  width: 150px;
  height: auto;
}
.mbt-0 {
  margin-bottom: 0;
}
</style>
