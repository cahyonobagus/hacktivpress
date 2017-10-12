<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        Hacktiv Press
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a v-if="user.username" href="#">{{ user.username }}</a></li>
          <li v-if="user.username"><router-link  :to="{ name: 'Post' }">Post</router-link></li>
          <li><a href="#" data-toggle="modal" data-target="#modallogin">Login</a></li>
        </ul>
      </div>
    </div>
    <div id="modallogin" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 class="modal-title">Login</h4>
          </div>
          <div class="modal-body">
            <form method="post" @submit.prevent="submitLoginForm">
              <input v-model="formLogin.username" type="text" name="" value="" placeholder="username">
              <input v-model="formLogin.password" type="password" name="" value="" placeholder="password">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <input type="submit" class="btn btn-primary" value="Login">
            </form>
          </div>
          <div class="modal-footer">

          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['submitLogin']),
    submitLoginForm () {
      this.submitLogin(this.formLogin)
      $('#modallogin').modal('hide')
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="css">
</style>
