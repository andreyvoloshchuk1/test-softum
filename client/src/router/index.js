import {
    createRouter as _createRouter,
    createWebHistory
} from 'vue-router'

import error from '../pages/error/index.vue'
const pages = import.meta.glob('../pages/*.vue')

const routes = Object.keys(pages).map((path) => {
    const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
    return {
        path: name === '/index' ? '/' : name,
        component: pages[path]
    }
})

routes.push({
    path: '/:pathMatch(.*)*',
    component: error
})

export function createRouter() {
    return _createRouter({
        history: createWebHistory(),
        routes
    })
}
