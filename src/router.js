import {createRouter, createWebHistory} from 'vue-router'
// import App from './App'
import CounterApp from './views/CounterApp.vue'
import NotFound from './views/NotFound.vue'
import HomeSection from './views/HomeSection.vue'

const routes = [ 
    { 
        path:'/', 
        name:'HomeSection',
        component:HomeSection
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