
import { createRouter, createWebHistory } from 'vue-router'
import TableView from '@/views/TableView.vue'
import FormView from '@/views/FormView.vue'
import NewCategoryView from '@/views/NewCategoryView.vue'




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Table',
            component: TableView
        },
        {
            path: '/new-transaction',
            name: 'Form',
            component: FormView
        },
        {
            path: '/new-catégorie',
            name: 'Form_catégorie',
            component: NewCategoryView
        }

    ]
})

export default router