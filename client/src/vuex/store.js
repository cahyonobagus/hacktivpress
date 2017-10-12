import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var http = axios.create({
  baseURL: 'http://localhost:3000/'
})

const store = new Vuex.Store({
  state: {
    articles: [],
    user: {}
  },
  mutations: {
    setAllArticles (state, paylod) {
      state.articles = paylod
    },
    pushArticle (state, payload) {
      state.articles.push(payload)
    },
    setUserToken (state, payload) {
      state.user.token = payload
    }
  },
  actions: {
    getAllArticles ({ commit }) {
      http.get('/articles')
      .then(({ data }) => {
        commit('setAllArticles', data)
      })
      .catch(err => { console.log(err) })
    },
    submitArticle ({ commit }, dataArticle) {
      http.post('/articles', dataArticle)
      .then(({ data }) => {
        commit('pushArticle', data)
      })
      .catch(err => { console.log(err) })
    },
    submitLogin ({ commit }, dataLogin) {
      http.post('/users/login', dataLogin)
      .then(({ data }) => {
        commit('setUserToken', data)
      })
      .catch(err => { console.log(err) })
    }
  }
})

export default store
