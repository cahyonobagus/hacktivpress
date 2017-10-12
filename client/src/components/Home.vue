<template>
  <div class="row">
    <div class="col-md-10">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">Articles</h3>
        </div>
        <div class="panel-body">
          Panel content
          list articles
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['getAllArticles'])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
