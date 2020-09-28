<template>
    <article>
        <div ref="stack1" class="stack title">
            <h2 ref="title">
                <span>Técnico</span>
                <span>Torcedor</span>
                <span>App</span>
            </h2>
            <span class="action" ref="linkme">
                <router-link :to="{name: 'torcedor'}">View Project</router-link>
            </span>
        </div>
        <div ref="stack2" class="stack">
             <figure ref='image'>
                <img ref="photo" class="animate" src="../assets/desk__0003_tt_01.jpg" alt="Essenzadh" @load="onImgLoad">
            </figure>
            <label class="orientation" ref="button">
                <button type="button" @click="CHANGE_COMP('scooCard')" class="round-btn">{{instruction}}</button>
            </label>
        </div>
    </article>
</template>

<style lang="less" scoped>
    @import '../assets/cards.less';
</style>
<script>
import { gsap } from 'gsap/all'
import { mapMutations, mapGetters } from 'vuex'
import animations from '../mixins/animations'
import worktransition from '../mixins/work-transition'
import swipe from '../mixins/swipe'

export default {
    data() {
        return {
            card: ''
        }
    },
    mixins: [animations, swipe, worktransition],
    methods: {
        ...mapMutations([
            'SET_REFER'
        ]),
        onImgLoad() {
            const image = this.$refs.image;
            this.isLoaded = true;
            gsap.to(image,{opacity:1,y:'0vh', delay: 0.5});
        },
    },
    mounted() {
        this.$route.path == '/work' ? gsap.to( this.$refs.linkme,{opacity:1,y:'0vh', duration: 0.7, delay: 0.4, ease: 'power3.out'}) :null;
        this.SET_REFER(this.$refs);
    },
    destroyed() {
        window.removeEventListener('wheel',this.scrollToComp);
    },
    computed: {
        ...mapGetters([
            'getComp'
        ])
    },
}
</script>