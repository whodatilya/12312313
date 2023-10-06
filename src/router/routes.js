const routes = [
    {
        path: '/first',
        name: 'first',
        component: () => import('@/pages/Index')
    },
    {
        path: '/second',
        name: 'second',
        component: () => import('@/pages/Second.vue')
    },
    {
        path: '/third',
        name: 'third',
        component: () => import('@/pages/Third2.vue')
    },
    {
        path: '/fourth',
        name: 'fourth',
        component: () => import('@/pages/Fourth.vue')
    },
    {
        path: '/fifth',
        name: 'fifth',
        component: () => import('@/pages/Fifth.vue')
    },
    {
        path: '/sixth',
        name: 'sixth',
        component: () => import('@/pages/Sixth.vue')
    }
]
export default routes