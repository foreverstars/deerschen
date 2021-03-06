import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/api/config'
import axios from '@/api/fetch'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      id: 3,
      name: 'deerschen',
      isAdmin: 1
    }
  },
  getter: {
    hasRoutePermission: state => path => {
      return path
    }
  },
  mutations: {
    LOGIN (state, payload) {
      state.userInfo.id = payload.id
      state.userInfo.name = payload.username
      state.userInfo.isAdmin = payload.isAdmin
    },

    LOGOUT (state, payload) {

    }
  },
  actions: {
    register ({ state, commit}, data) {
      return axios.post(Api.register, data)
    },

    login ({ state, commit}, data) {
      return axios.post(Api.login, data)
    },

    getArticleList ({ state, commit }, params) {

    },

    saveArticle ({ commit }, data) {
      return axios.post(Api.saveArticle, data)
    },

    getTypeList ({ commit }, filter) {
      return axios.post(Api.getTypeList, filter)
    },

    addType ({ commit }, filter) {
      return axios.post(Api.addType, filter)
    },


    getUserList ({ commit }) {
      return axios.post(Api.getUserList)
    },

    setUserAdmin ({ commit }) {
      return axios.post(Api.setUserAdmin)
    },

    setUserNormal ({ commit }) {
      return axios.post(Api.setUserNormal)
    },
    getCommentList ({}) {

    },
    deleteArticle ({ commit }) {
      return axios.post(Api.deleteArticle)
    }
  }
})

export default store