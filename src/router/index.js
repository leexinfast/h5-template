import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export const constantRouterMap = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/dashboard'),
        meta: {
            title: '首页'
        }
    }
]

let router = new Router({
    base: '/',
    //mode: 'history',
    routes: constantRouterMap
});


//动态获取title
router.beforeEach((to, from, next) => {
    let routeName = to.meta.title || to.title;
    window.document.title = (routeName ? routeName : '');
    next();
})

export default router
