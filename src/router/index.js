import { createRouter, createWebHashHistory } from 'vue-router'
import { ElMessage } from 'element-plus'
const router = createRouter ({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import('@/views/home/index.vue'),
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    component: () => import('@/views/home/homeSonPage.vue')
                },
                {
                    path: '/about',
                    name: '关于我们',
                    component: () => import('@/views/about/index.vue')
                },
                // 用户管理
                {
                    path: '/account',
                    name: '用户管理',
                    component: () => import('@/views/account/index.vue'),
                    redirect: '/account/changePassword',
                    children: [
                        {
                            path: 'changePassword',
                            name: '修改密码',
                            component: () => import('@/views/account/changePwd/index.vue')
                        },
                        {
                            path: 'addUser',
                            name: '添加用户',
                            component: () => import('@/views/account/addUser/index.vue')
                        }
                    ]
                }
            ]
        },
        // 登录页
        {
            path: '/login',
            name: '登录',
            component: ()=> import('@/views/login/index.vue')
        },

        {
            path: '/404',
            name: '404',
            title: '页面找不到~',
            component: () => import('@/views/404.vue')
        },

        {
            path: `/:pathMatch(.*)`,
            redirect: '/404'
        }
    ]
})
router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem('token') || '' 
    if (token) {
        if (to.matched && to.matched.length) {
            let arr = []
            to.matched.map(res => { 
                if (res.path && res.name) arr.push({path: res.path, name: res.name}) 
            })
            localStorage.setItem('routeList', JSON.stringify(arr))
        }
        next()
    } else {
        if (to.path === '/login') {
            next()
        } else {
            ElMessage({
                message: '登陆已过期，请重新登陆',
                type: 'warning',
            })
            setTimeout(() => {
                next('/login')
            }, 1000);
        }
    }
})
export default router
