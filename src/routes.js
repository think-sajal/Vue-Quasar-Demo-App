import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/HomePage.vue'
import FormPage from './components/form/FormPage.vue'
import Page from './components/pages/Page.vue'


const routes = [{
    name: 'HomePage',
    component: HomePage,
    path: '/',
    props: true

}, {
    name: 'FormPage',
    component: FormPage,
    path: '/form',
    props: true

}, {
    name: 'AboutPage',
    component: Page,
    path: '/about',
    props(route) {
        return {  myprop: route.query.myprop }
      }
}]

const router = createRouter({ history: createWebHistory(), routes })

export default router