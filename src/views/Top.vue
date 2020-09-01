<template>
  <div style="max-width:960px;margin:auto">
    <span class="source_code">
      <a href="https://github.com/nkn-ms/scraping-note" target="_blank">
        <img src="/GitHub-Mark-32px.png" alt="source code" />
      </a>
    </span>
    <sc-header class="mb-4" />
    <sc-contents-table class="mx-10 mb-4" />
    <router-view />
    <!-- <sc-detail>の挿入 -->
  </div>
</template>

<script>
// @ is an alias to /src
import ScHeader from '@/components/ScHeader.vue'
import ScContentsTable from '@/components/ScContentsTable.vue'

export default {
  name: 'Top',
  components: {
    ScHeader,
    ScContentsTable
  }
}
</script>

<style scoped>
.source_code {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 40px;
}
</style>
