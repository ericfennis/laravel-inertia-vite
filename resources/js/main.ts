import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import App from '@/js/App.vue'

import './main.css'

let asyncViews = () => {
  return import.meta.glob('./pages/**/*.vue');
}

createInertiaApp({
    resolve:  async (name: string) => {
        let page;

        if (import.meta.env.DEV) {
            page = (await import(`./pages/${name}.vue`)).default;
        } else {
            let pages = asyncViews();
            const importPage = pages[`./pages/${name}.vue`];
            page = await importPage().then(module => module.default);
        }

        page.layout = page.layout || App

        return page
    },
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .mount(el)
    },
})
