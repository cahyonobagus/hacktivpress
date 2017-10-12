<template>
  <div class="">
    <BoxArticle
    v-for="(article, index) in articles"
    :key="index"
    :article="article"
    />
  </div>
</template>

<script>
import BoxArticle from '@/components/BoxArticle'
import { mapState } from 'vuex'
export default {
  components: {
    BoxArticle
  },
  computed: {
    ...mapState(['articles'])
  }
}
</script>

<style lang="css">
</style>
