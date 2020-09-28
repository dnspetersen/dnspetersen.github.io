<template>
    <section>
        <article>
            <div class="stack">

            </div>
            <div class="stack">
                <div ref="content">
                    <p>SCOO is a Startup from Brazil for rent micro mobility vehicles throught an App, has a large investiment from a state company (CCR) and noted ventures of Brazil.</p>
                </div>
            </div>
        </article>
    </section>
    
</template>

<style lang="less" scoped>
#app > section {
     overflow-x:hidden;
    article {
        .stack {
            align-content: flex-start;
            &:nth-of-type(odd) {
                width: 40%;
            }
            &:nth-of-type(even) {
                width: 60%;
            }
        }
    }
}
</style>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations([
            'CHANGE_COMP'
        ]),
    },
    created() {
        this.CHANGE_COMP('ttCard')
    },
    computed: {
        ...mapGetters([
            'getComp'
        ])
    },
}
</script>