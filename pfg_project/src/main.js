import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ProductList from './components/ProductList.vue';
import ProductDetail from './components/ProductDetail.vue';

const routes = [
    { path: '/', redirect: '/products' }, // Redirect root path to /products
    { path: '/products', component: ProductList },
    { path: '/products/:id', component: ProductDetail, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);

app.mount('#app');