import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'
import { browser } from '../assets/js/userAgent'

const demo: AsyncComponent = (): any => import('@/views/demo.vue')
const main: AsyncComponent = (): any => import('@/views/main.vue')
const mobile: AsyncComponent = (): any => import('@/views/mobile.vue')
const helpLayout: AsyncComponent = (): any => import('@/views/layout/helpLayout.vue')
const atcHelp: AsyncComponent = (): any => import('@/components/help/atcHelp.vue')
const coinHelp: AsyncComponent = (): any => import('@/components/help/coinHelp.vue')

// import main from '@/views/main.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'main',
    component: main
  },{
    path: '/mobile',
    name: 'mobile',
    component: mobile
  },{
    path: '/help',
    name: 'help',
    redirect: '/help/atcHelp',
    component: helpLayout,
    children: [{
      path: 'atcHelp',
      name: 'atcHelp',
      component: atcHelp
    }, {
      path: 'coinHelp',
      name: 'coinHelp',
      component: coinHelp
    }]
  },{
    path: '/demo',
    name: 'demo',
    component: demo
  }
]

const router: Router = new Router({
  // mode: 'history',
  base: '/',
  routes
})

router.beforeEach((to, from, next) => {
  //判断是否是手机端
  if (browser.versions.mobile && to.path != '/mobile' && to.path.indexOf('help') === -1 ) {
    next({ path: '/mobile' });
  } else {
    //浏览器重定向
    if (to.path == '/mobile' && !browser.versions.mobile) {
      return next({ path: '/' });
    }
    next();
  }
})

export default router
