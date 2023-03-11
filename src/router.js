import {createRouter, createWebHistory} from 'vue-router'
import CounterApp from './components/CounterApp.vue'
import NotFound from '../src/components/NotFound.vue'

const routes = [ 
    { 
        path:'/', 
        redirect: '/counter'
    }, 
    { 
        path:'/counter', 
        name: 'CounterApp', 
        component:CounterApp
    }, 
    { 
        path: '/:catchAll(.*)', 
        name: 'NotFound', 
        component: NotFound
    }
]

const router = createRouter({
    history:createWebHistory(), 
    routes
})

export default router