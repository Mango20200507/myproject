import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: DemoHome },
        { path: '/about', component: DemoAbout },
        { path: '/contact', component: DemoContact }
    ]
})