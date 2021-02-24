import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './view/Home'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home 
    },
    {
        path: '/learn',
        component: () => import('./view/Learn')
    },
    {
        path: '/student',
        component: () => import('./view/Student')
    },
    {
        path: '/about',
        component: () => import('./view/About')
    },
    {
        path: '/activity',
        component: () => import('./view/Activity')
    }
]

export default new VueRouter({
    mode: 'history',
    routes,
})