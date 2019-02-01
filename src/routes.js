import content from './components/content.vue';
import digital from './components/digital.vue';
import identity from './components/identity.vue';
import about from './components/about.vue';

export const routes = [
    { path: '/', name: 'home', components: { default: content } },
    { path: '/digital', components: { default: digital }},
    { path: '/identity', components: { default: identity } },
	{ path: '/about', components: { default: about} },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
];