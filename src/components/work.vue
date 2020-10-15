<template>
    <section>
        <h3>Selected Works</h3>
         <component :key="card" :is="getComp"></component>
         <router-view :key="$route.path"></router-view>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import scooCard from '@/components/cardscoo.vue'
import grideCard from '@/components/cardgride.vue'
import essenzaCard from '@/components/cardessenza.vue'
import ttCard from '@/components/cardtt.vue'

export default {
    components: {
        scooCard,
        grideCard,
        essenzaCard,
        ttCard,
    },
    data() {
        return {
            card: 'scooCard'
        }
    },
    methods: {
        
    },
    computed: {
        ...mapGetters( [
            'getComp'
        ]),
    },
}
</script>

<style lang="less" scoped>
section {
    overflow-x:hidden;
    & > h3 {
        position: relative;
        z-index: 9;
        top: 45px;
        text-align: center;
        width: 100%;
        height: 0;
        @media screen and (max-width: 768px) {
            height: 22px;
            background: #13C7EF;
            line-height: 1em;
            margin-bottom: 64px;
        }
    }
}
</style>