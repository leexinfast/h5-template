import router from './router'
import store from './store'
// import { GetUrlParam } from '@/utils/index'

const whiteList = ['/', '/bind', '/partner', '/info', '/center']//白名单
//路由统一拦截
router.beforeEach((to, from, next) => {
    // const token = localStorage.getItem('token')//存储自己业务token

    // alert(to.path+'0')
    if (to.path == '/wxauth') {//如果是wxauth不拦截
        // alert('1')
        next()
        return
    }

    let wxUserInfo = localStorage.getItem('wxUserInfo')//存储wx信息

    if (!wxUserInfo || (wxUserInfo && wxUserInfo.errmsg)) {
        let appId = 'wx58eca2f5f458d6a9'
        let redirectUrl = encodeURIComponent('https://ccdh.ycaomei.com/index.html#/wxauth')
        window.location.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`)
    } else {
        if (token) {
            next()
        } else {
            if (whiteList.indexOf(to.path) !== -1) {
                if (localStorage.getItem('first')) {//首次会先提示绑定
                    if (to.path == '/bind') {
                        next()
                    } else {
                        next({ path: '/bind', query: {first: 1} , replace:true })
                    }
                } else {
                    next()
                }
            } else {
                next(`/bind`)
            }
        }
    }
})
