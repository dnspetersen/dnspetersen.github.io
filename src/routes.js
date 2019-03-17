import content from './components/content.vue';
import work from './components/work.vue';
import identity from './components/identity.vue';
import about from './components/about.vue';

export const routes = [
    { path: '/', name: 'home', components: { default: content } },
    { path: '/work', components: { default: work } },
    { path: '/identity', components: { default: identity } },
    { path: '/about', components: { default: about } },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
];