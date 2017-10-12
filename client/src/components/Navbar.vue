<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Hacktiv Press</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
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
            <form method="post" @submit.prevent="submitLogin(formLogin)">
              <input v-model="formLogin.username" type="text" name="" value="" placeholder="username">
              <input v-model="formLogin.password" type="password" name="" value="" placeholder="password">
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions(['submitLogin'])
  }
}
</script>

<style lang="css">
</style>
