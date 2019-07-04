import Vue from 'vue'
import Router from 'vue-router'

import AppView from '@/components/app-view'
import Home from '@/pages/home'

Vue.use(Router)

const page = name => () => import('@/pages/' + name)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '',
      component: AppView,
      children: [
        { path: '/', name: 'home', component: Home },
        { path: '/data-table', name: 'p-data-table', component: page('table') },
        { path: '/404', name: '404', component: page('404') },
        { path: '/500', name: '500', component: page('500') },
        { path: '/waitVisit', name: 'waitVisit', component: page('waitVisit') },
        { path: '/earlyWarning', name: 'earlyWarning', component: page('earlyWarning') },
        { path: '/userException', name: 'userException', component: page('userException') },
        { path: '/createPlan', name: 'createPlan', component: page('createPlan') },
        { path: '/EssentialInfo', name: 'EssentialInfo', component: page('EssentialInfo') },
        { path: '/createVisit', name: 'createVisit', component: page('createVisit') },
        { path: '/authManagement', name: 'authManagement', component: page('authManagement') },
        { path: '/roleManagement', name: 'roleManagement', component: page('roleManagement') },
        { path: '/queryVisit', name: 'queryVisit', component: page('queryVisit') },
        { path: '/departManagement', name: 'departManagement', component: page('departManagement') },
        { path: '/hospitalManagement', name: 'hospitalManagement', component: page('hospitalManagement') },
        { path: '/addHospital', name: 'addHospital', component: page('addHospital') },
        { path: '/noticeManagement', name: 'noticeManagement', component: page('noticeManagement') },
        { path: '/addNotice', name: 'addNotice', component: page('addNotice') },
        { path: '/posterManagement', name: 'posterManagement', component: page('posterManagement') },
        { path: '/followupplan', name: 'followUpPlan', component: page('followupplan') }
      ]
    },
    { path: '/login', name: 'login', component: page('login') },
    // pages
    { path: '*', redirect: { name: '404' } }
  ]
})
