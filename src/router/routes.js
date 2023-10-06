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
        component: () => import('@/pages/Third.vue')
    }
]
export default routes