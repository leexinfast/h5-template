import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import '@/vconsole'
// import '@/permission'
import Vant from 'vant';
import 'vant/lib/index.css';
import './styles/app.styl';
import './styles/layout.styl';
import './styles/util.styl';
import 'amfe-flexible';

Vue.config.productionTip = false

Vue.use(Vant);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
