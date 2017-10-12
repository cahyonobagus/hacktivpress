<template>
  <div class="panel panel-default">
    <div class="panel-heading">{{ article.title }}</div>
    <div class="panel-body">
      <p>{{ article.content }}</p>
      <p>Written by: {{ article.author.username}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="css">
</style>
