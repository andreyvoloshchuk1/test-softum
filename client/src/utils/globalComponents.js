import { defineAsyncComponent } from 'vue'

const components = import.meta.glob('../components/shared/*.vue');

export function registerComponents (app) {
    const names = Object.keys(components).map((path) => {
        const name = path.match(/\.\/components\/shared\/(.*)\.vue$/)[1]
        app.component(name, defineAsyncComponent(components[path]))
    })
}