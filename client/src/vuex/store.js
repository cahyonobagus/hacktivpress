import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var http = axios.create({
  baseURL: 'http://localhost:3000/'
})

const store = new Vuex.Store({
  state: {
    articles: []
  },
  mutations: {
    setAllArticles (state, paylod) {
      state.articles = paylod
    }
  },
  actions: {
    getAllArticles ({ commit }) {
      http.get('/articles')
      .then(({ data }) => {
        commit('setAllArticles', data)
      })
      .catch(err => { console.log(err) })
    }
  }
})

export default store
