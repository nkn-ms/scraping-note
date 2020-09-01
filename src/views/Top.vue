<template>
  <div style="width:960px;margin:auto">
    <sc-header class="my-4" />
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
