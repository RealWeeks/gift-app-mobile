import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)

const store = new Vuex.Store({
  state: {
    email: '',
    password: '',
    message: '',
    token: ''
  },
  mutations: {
    SET_EMAIL (state, data) {
      // debugger
      state.email = data
      // this.$q.notify({message: 'Si', type: 'negative', position: 'top'})
    },
    SET_PASSWORD (state, data) {
      state.password = data
    },
    SET_ID (state, data) {
      state.password = data
    },
    SET_MESSAGE (state, data) {
      state.password = data
    },
    SET_TOKEN (state, data) {
      state.token = data
    }
  },
  actions: {
    SIGN_UP ({ commit }, data) {
      axios.post(`http://localhost:3000/signup?email=${data.email}&password=${data.password}`)
        .then((response) => {
          if (response.status === 200) {
            debugger
            commit('SET_EMAIL', response.data.user.email)
            commit('SET_PASSWORD', response.data.user.password)
            commit('SET_ID', response.data.user._id)
            commit('SET_MESSAGE', response.data.message)
          } else {
            // handle error
          }
        })
        .catch((err) => {
          debugger
          console.log(err)
        })
    },
    SIGN_IN ({ commit }, data) {
      axios.post(`http://localhost:3000/login?email=${data.email}&password=${data.password}`)
        .then((response) => {
          if (response.status === 200) {
            commit('SET_TOKEN', response.data.token)
          } else {
            // handle error
          }
        })
        .catch((err) => {
          debugger
          console.log(err)
        })
    }
  }
})

export default store
