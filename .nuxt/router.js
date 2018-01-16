import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1042d166 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _0a7c1ed6 = () => import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */).then(m => m.default || m)
const _10065219 = () => import('../pages/faleconosco.vue' /* webpackChunkName: "pages/faleconosco" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _1042d166,
			name: "index"
		},
		{
			path: "/inspire",
			component: _0a7c1ed6,
			name: "inspire"
		},
		{
			path: "/faleconosco",
			component: _10065219,
			name: "faleconosco"
		}
    ],
    
    
    fallback: false
  })
}
