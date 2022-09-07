<template>
  <div>
    <ArticleItem v-for="obj in list" :key="obj.art_id" :artobj="obj"></ArticleItem>
  </div>
</template>

<script>
import ArticleItem from './ArticleItem.vue'
export default {
  components: { ArticleItem },
  props: {
    list: Array
  }
}
</script>

<style>

</style>
