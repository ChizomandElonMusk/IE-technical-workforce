import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _caee3b04 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _eb2f72b0 = () => interopDefault(import('../pages/crmd/index.vue' /* webpackChunkName: "pages/crmd/index" */))
const _55c47a1e = () => interopDefault(import('../pages/customer_categorization/index.vue' /* webpackChunkName: "pages/customer_categorization/index" */))
const _1673b45d = () => interopDefault(import('../pages/customer_complaints/index.vue' /* webpackChunkName: "pages/customer_complaints/index" */))
const _1744fe4b = () => interopDefault(import('../pages/customer_details_validation/index.vue' /* webpackChunkName: "pages/customer_details_validation/index" */))
const _fe42d2e2 = () => interopDefault(import('../pages/customer_mapping/index.vue' /* webpackChunkName: "pages/customer_mapping/index" */))
const _34536582 = () => interopDefault(import('../pages/customer_visitation/index.vue' /* webpackChunkName: "pages/customer_visitation/index" */))
const _10eb0232 = () => interopDefault(import('../pages/dashboard_ie_force.vue' /* webpackChunkName: "pages/dashboard_ie_force" */))
const _33307664 = () => interopDefault(import('../pages/dt_assigned.vue' /* webpackChunkName: "pages/dt_assigned" */))
const _a79670cc = () => interopDefault(import('../pages/e_services/index.vue' /* webpackChunkName: "pages/e_services/index" */))
const _221b212c = () => interopDefault(import('../pages/energy_theft/index.vue' /* webpackChunkName: "pages/energy_theft/index" */))
const _ac7311da = () => interopDefault(import('../pages/esr_form_history.vue' /* webpackChunkName: "pages/esr_form_history" */))
const _51ba0c82 = () => interopDefault(import('../pages/forgot.vue' /* webpackChunkName: "pages/forgot" */))
const _574c2a20 = () => interopDefault(import('../pages/forms.vue' /* webpackChunkName: "pages/forms" */))
const _8d2068b2 = () => interopDefault(import('../pages/idb_customer_mapping/index.vue' /* webpackChunkName: "pages/idb_customer_mapping/index" */))
const _a0703db2 = () => interopDefault(import('../pages/idb_customer_visitation/index.vue' /* webpackChunkName: "pages/idb_customer_visitation/index" */))
const _4b6bef27 = () => interopDefault(import('../pages/ie_force.vue' /* webpackChunkName: "pages/ie_force" */))
const _f82f3f4c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _379f8121 = () => interopDefault(import('../pages/md-customer-ir.vue' /* webpackChunkName: "pages/md-customer-ir" */))
const _67a3267e = () => interopDefault(import('../pages/menu.vue' /* webpackChunkName: "pages/menu" */))
const _7ebeb28a = () => interopDefault(import('../pages/newly_installed_ppm/index.vue' /* webpackChunkName: "pages/newly_installed_ppm/index" */))
const _1a519ce2 = () => interopDefault(import('../pages/nmd-activity-checklist.vue' /* webpackChunkName: "pages/nmd-activity-checklist" */))
const _0c3c27c4 = () => interopDefault(import('../pages/nmd-pre-survey-checklist.vue' /* webpackChunkName: "pages/nmd-pre-survey-checklist" */))
const _edb573b6 = () => interopDefault(import('../pages/non_inclusion_capture/index.vue' /* webpackChunkName: "pages/non_inclusion_capture/index" */))
const _df0dc9a0 = () => interopDefault(import('../pages/none_vending_cv/index.vue' /* webpackChunkName: "pages/none_vending_cv/index" */))
const _200a006d = () => interopDefault(import('../pages/payment-channel.vue' /* webpackChunkName: "pages/payment-channel" */))
const _5247c792 = () => interopDefault(import('../pages/sent.vue' /* webpackChunkName: "pages/sent" */))
const _3bbbfe22 = () => interopDefault(import('../pages/sent_tracking.vue' /* webpackChunkName: "pages/sent_tracking" */))
const _457d97f7 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _6ca1750e = () => interopDefault(import('../pages/suspended_cv/index.vue' /* webpackChunkName: "pages/suspended_cv/index" */))
const _92fa5586 = () => interopDefault(import('../pages/token_request/index.vue' /* webpackChunkName: "pages/token_request/index" */))
const _17384261 = () => interopDefault(import('../pages/user-info.vue' /* webpackChunkName: "pages/user-info" */))
const _14a4bd4c = () => interopDefault(import('../pages/vsm-checklist.vue' /* webpackChunkName: "pages/vsm-checklist" */))
const _107e1082 = () => interopDefault(import('../pages/work_order_details.vue' /* webpackChunkName: "pages/work_order_details" */))
const _03ff3d16 = () => interopDefault(import('../pages/crmd/account_reactivation.vue' /* webpackChunkName: "pages/crmd/account_reactivation" */))
const _6bb260c9 = () => interopDefault(import('../pages/crmd/account_suspension.vue' /* webpackChunkName: "pages/crmd/account_suspension" */))
const _55b856b2 = () => interopDefault(import('../pages/crmd/correction_of_dials.vue' /* webpackChunkName: "pages/crmd/correction_of_dials" */))
const _17efb6ee = () => interopDefault(import('../pages/crmd/correction_of_lar_par.vue' /* webpackChunkName: "pages/crmd/correction_of_lar_par" */))
const _02c95b9c = () => interopDefault(import('../pages/crmd/sent.vue' /* webpackChunkName: "pages/crmd/sent" */))
const _63df2bb8 = () => interopDefault(import('../pages/crmd/switch_to_actual_read.vue' /* webpackChunkName: "pages/crmd/switch_to_actual_read" */))
const _e78913c4 = () => interopDefault(import('../pages/crmd/switch_to_dormant.vue' /* webpackChunkName: "pages/crmd/switch_to_dormant" */))
const _0d0b9dac = () => interopDefault(import('../pages/crmd/switch_to_quantitative.vue' /* webpackChunkName: "pages/crmd/switch_to_quantitative" */))
const _74dab698 = () => interopDefault(import('../pages/e_services/billing_history.vue' /* webpackChunkName: "pages/e_services/billing_history" */))
const _3f08cda3 = () => interopDefault(import('../pages/e_services/payment_history.vue' /* webpackChunkName: "pages/e_services/payment_history" */))
const _8b7e857a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _caee3b04,
    name: "about"
  }, {
    path: "/crmd",
    component: _eb2f72b0,
    name: "crmd"
  }, {
    path: "/customer_categorization",
    component: _55c47a1e,
    name: "customer_categorization"
  }, {
    path: "/customer_complaints",
    component: _1673b45d,
    name: "customer_complaints"
  }, {
    path: "/customer_details_validation",
    component: _1744fe4b,
    name: "customer_details_validation"
  }, {
    path: "/customer_mapping",
    component: _fe42d2e2,
    name: "customer_mapping"
  }, {
    path: "/customer_visitation",
    component: _34536582,
    name: "customer_visitation"
  }, {
    path: "/dashboard_ie_force",
    component: _10eb0232,
    name: "dashboard_ie_force"
  }, {
    path: "/dt_assigned",
    component: _33307664,
    name: "dt_assigned"
  }, {
    path: "/e_services",
    component: _a79670cc,
    name: "e_services"
  }, {
    path: "/energy_theft",
    component: _221b212c,
    name: "energy_theft"
  }, {
    path: "/esr_form_history",
    component: _ac7311da,
    name: "esr_form_history"
  }, {
    path: "/forgot",
    component: _51ba0c82,
    name: "forgot"
  }, {
    path: "/forms",
    component: _574c2a20,
    name: "forms"
  }, {
    path: "/idb_customer_mapping",
    component: _8d2068b2,
    name: "idb_customer_mapping"
  }, {
    path: "/idb_customer_visitation",
    component: _a0703db2,
    name: "idb_customer_visitation"
  }, {
    path: "/ie_force",
    component: _4b6bef27,
    name: "ie_force"
  }, {
    path: "/login",
    component: _f82f3f4c,
    name: "login"
  }, {
    path: "/md-customer-ir",
    component: _379f8121,
    name: "md-customer-ir"
  }, {
    path: "/menu",
    component: _67a3267e,
    name: "menu"
  }, {
    path: "/newly_installed_ppm",
    component: _7ebeb28a,
    name: "newly_installed_ppm"
  }, {
    path: "/nmd-activity-checklist",
    component: _1a519ce2,
    name: "nmd-activity-checklist"
  }, {
    path: "/nmd-pre-survey-checklist",
    component: _0c3c27c4,
    name: "nmd-pre-survey-checklist"
  }, {
    path: "/non_inclusion_capture",
    component: _edb573b6,
    name: "non_inclusion_capture"
  }, {
    path: "/none_vending_cv",
    component: _df0dc9a0,
    name: "none_vending_cv"
  }, {
    path: "/payment-channel",
    component: _200a006d,
    name: "payment-channel"
  }, {
    path: "/sent",
    component: _5247c792,
    name: "sent"
  }, {
    path: "/sent_tracking",
    component: _3bbbfe22,
    name: "sent_tracking"
  }, {
    path: "/signup",
    component: _457d97f7,
    name: "signup"
  }, {
    path: "/suspended_cv",
    component: _6ca1750e,
    name: "suspended_cv"
  }, {
    path: "/token_request",
    component: _92fa5586,
    name: "token_request"
  }, {
    path: "/user-info",
    component: _17384261,
    name: "user-info"
  }, {
    path: "/vsm-checklist",
    component: _14a4bd4c,
    name: "vsm-checklist"
  }, {
    path: "/work_order_details",
    component: _107e1082,
    name: "work_order_details"
  }, {
    path: "/crmd/account_reactivation",
    component: _03ff3d16,
    name: "crmd-account_reactivation"
  }, {
    path: "/crmd/account_suspension",
    component: _6bb260c9,
    name: "crmd-account_suspension"
  }, {
    path: "/crmd/correction_of_dials",
    component: _55b856b2,
    name: "crmd-correction_of_dials"
  }, {
    path: "/crmd/correction_of_lar_par",
    component: _17efb6ee,
    name: "crmd-correction_of_lar_par"
  }, {
    path: "/crmd/sent",
    component: _02c95b9c,
    name: "crmd-sent"
  }, {
    path: "/crmd/switch_to_actual_read",
    component: _63df2bb8,
    name: "crmd-switch_to_actual_read"
  }, {
    path: "/crmd/switch_to_dormant",
    component: _e78913c4,
    name: "crmd-switch_to_dormant"
  }, {
    path: "/crmd/switch_to_quantitative",
    component: _0d0b9dac,
    name: "crmd-switch_to_quantitative"
  }, {
    path: "/e_services/billing_history",
    component: _74dab698,
    name: "e_services-billing_history"
  }, {
    path: "/e_services/payment_history",
    component: _3f08cda3,
    name: "e_services-payment_history"
  }, {
    path: "/",
    component: _8b7e857a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
