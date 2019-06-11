import Vuex from "vuex"
import cookie from "cookie"
 
export const state = () => ({
  isLogin: false
})
 
export const mutations = {
  SET_LOGIN(state, data) {
    state.isLogin = data
  }
}
export const actions = {
    // nuxtServerInit  dijalankan oleh Nuxt.js sebelum server-rendering setiap page
    async nuxtServerInit({ commit }, context) {
      const cookies = cookie.parse(context.req.headers.cookie || "");
      let token = cookies.token
      context.$axios.setToken(token, "Bearer")
      await context.$axios.$get('http://localhost:8000/login/status/')
              .then( (response) => {
                if (response) {
                  commit('SET_LOGIN', true)
                }
              })
              .catch(function (error) {
                  commit("SET_LOGIN", false)
              })
    }
  };