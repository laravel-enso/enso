import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import axios from 'axios'
import { locale } from './store/enso/locale'
import { menus } from './store/enso/menus'
import { layout } from './store/enso/layout'
import { auth } from './store/enso/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: { locale, menus, layout, auth },
  state: {
    user: {},
    impersonating: null,
    meta: {},
    appIsLoaded: false,
    routes: {}
  },
  getters: {
    avatarLink: (state, getters) => state.appIsLoaded
      ? route('core.avatars.show', (state.user.avatarId || 'null'), false).toString()
      : '#'
  },
  mutations: {
    setUser: (state, user) => { state.user = user },
    setImpersonating: (state, impersonating) => { state.impersonating = impersonating },
    setUserAvatar: (state, avatarId) => { state.user.avatarId = avatarId },
    setTheme: (state, theme) => { state.user.preferences.global.theme = theme },
    setLocale: (state, locale) => { state.user.preferences.global.lang = locale },
    setMeta: (state, meta) => { state.meta = meta },
    setLoadedState: (state) => { state.appIsLoaded = true },
    setRoutes: (state, routes) => { state.routes = routes }
  },
  actions: {
    setState ({ commit, dispatch }) {
      axios.get('/api/core/init')
        .then(({ data }) => {
          const {
            user,
            impersonating,
            menus,
            implicitMenu,
            languages,
            i18n,
            themes,
            routes,
            meta,
            csrfToken
          } = data
          commit('setUser', user)
          commit('setImpersonating', impersonating)
          commit('menus/set', menus)
          commit('menus/setImplicit', implicitMenu)
          commit('locale/setLanguages', languages)
          commit('locale/setI18n', i18n)
          dispatch('locale/setLocale', user.preferences.global.lang)
          commit('layout/setThemes', themes)
          commit('setMeta', meta)
          dispatch('layout/setTheme')
          window.Laravel = { csrfToken: csrfToken }
          axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
          commit('setRoutes', routes)
          router.addRoutes([
            {
              path: '/',
              redirect: { name: implicitMenu.link }
            }
          ])
          commit('setLoadedState')
        })
        .catch(error => {
          if (error.response.status === 401) dispatch('auth/logout', false)
        })
    }
  }
})

export default store
