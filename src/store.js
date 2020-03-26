import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reading: require('@/data/reading.json'),
    works: require('@/data/works.json'),
    drawer: false,
    items: [
      {
        text: 'Home',
        to: '/'
      },
      {
        text: 'About',
        to: '/about'
      },
      {
        text: 'Work',
        to: '/works'
      },
      {
        text: 'Book',
        to: '/books'
      }
    ]
  },
  getters: {
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
