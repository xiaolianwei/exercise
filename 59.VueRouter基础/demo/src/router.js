import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'

import auth from './utils/auth'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
        // alias:'/',
    },
    {
        path: '/about',
        component: () => import('./views/About'),
        meta: {
            requiresLogin: true,
        },
    },
    {
        path: '/learn',
        component: () => import('./views/Learn')
    },
    {
        path: '/student',
        component: () => import('./views/Student')
    },
    {
        path: '/activity',
        component: () => import('./views/Activity'),
        redirect: {name:'academic'},
        meta: {
            requiresLogin: true,
        },
        children: [
            {
                path: "download",
                name: 'download',
                component: () => import('./views/Download')
            },
            {
                path: "personal",
                name: 'personal',
                component: () => import('./views/Personal')
            },
            {
                path: "academic",
                name: 'academic',
                component: () => import('./views/Academic')
            },
        ]
    },
    {
        path: '/question/:id',
        name: 'question',
        props: true,
        component: () => import('./views/Question')
    },
    {
        path: '/Login',
        component: () => import('./views/Login')
    }
]

const router =  new VueRouter({
    mode:'history',
    routes,
})

router.beforeEach((to,from,next) => {
    const isRequiresLogin = to.matched.some(item => item.meta.requiresLogin);
    // console.log(isRequiresLogin);
    if(isRequiresLogin) {
        const isLogin = auth.isLogin()
        if(isLogin){
            next()
        }else{
            const isToLogin = window.confirm('要登录后才可以浏览，要去登录吗？');
            isToLogin ? next('/login') : next(false)
        }
    }else{
        next();
    }
})

export default router;