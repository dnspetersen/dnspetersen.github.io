<template>
    <section class="page" ref="page">
        <Intro></Intro>
    </section>
</template>

<script>

import Intro from "../components/intro.vue"

export default {
    components: {
        Intro,
    },
}
</script>

<style lang="less" scoped>
section {
    & > h3 {
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