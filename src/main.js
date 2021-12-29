import Vue from 'vue'
import App from './App.vue'

// Bước 1: cài đặt và import vue-router:
import VueRouter from 'vue-router'
// B2:  Define some route

import AssetList from './view/asset/AssetList.vue';
import AssetHTDB from './view/asset-htdb/AssetHTDB.vue';
import Category from './view/category/Category.vue';
import Overview from './view/overview/Overview.vue';
import Report from './view/report/Report.vue';
import Search from './view/search/Search.vue';
import Tools from './view/tools/Tools.vue'

const routes = [
    { path: '/overview', component: Overview },
    { path: '/asset', component: AssetList },
    { path: '/asset-htdb', component: AssetHTDB },
    { path: '/category', component: Category },
    { path: '/tools', component: Tools },
    { path: '/search', component: Search },
    { path: '/report', component: Report }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.config.productionTip = false

// Note Vue-router: phải use VueRouter
Vue.use(VueRouter)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')