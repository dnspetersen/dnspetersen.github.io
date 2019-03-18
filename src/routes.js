import work from './components/work.vue';
import esupri from './components/work/esupri.vue';
import identity from './components/identity.vue';
import about from './components/about.vue';

export const routes = [
    { path: '/', name: 'home', component: work },
    { path: '/work', component: work },
    { path: '/identity', component: identity },
    { path: '/about', component: about },
    { path: '/work/esupri', component: esupri },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
];