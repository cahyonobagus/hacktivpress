<template >
  <div class="panel panel-default">
    <div class="panel-heading">Post New Article</div>
    <div class="panel-body">
      <form class="form-horizontal" @submit.prevent="submitArticle(formNewArticle)">
          <div class="form-group">
            <label class="col-lg-2 control-label">Title</label>
            <div class="col-lg-10">
              <input type="text" v-model="formNewArticle.title" class="form-control"placeholder="Title">
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-2 control-label">Content</label>
            <div class="col-lg-10">
              <textarea name="content" v-model="formNewArticle.content" class="form-control" rows="8" cols="80"></textarea>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-2 control-label">Category</label>
            <div class="col-lg-10">
              <select class="form-control" v-model="formNewArticle.category" name="category">
                <option value="techno">Techno</option>
                <option value="programming">Programming</option>
                <option value="startup">Startup</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
              <button type="reset" class="btn btn-default">Cancel</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formNewArticle: {
        title: '',
        content: '',
        category: ''
      }
    }
  },
  methods: {
    ...mapActions(['submitArticle'])
  }
}
</script>

<style lang="css">
</style>
