import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import Bridge from './utils/jsbridge'
// import '@/vconsole'
// import '@/permission'
import Vant from 'vant';
import 'vant/lib/index.css';
import './styles/app.styl';
import './styles/layout.styl';
import './styles/util.styl';
import 'amfe-flexible';

Vue.config.productionTip = false
// Vue.prototype.$bridge = Bridge

Vue.use(Vant);

document.addEventListener('JSBridgeReady', function() {
    new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')
}, false);

