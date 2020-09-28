<template>
    <section>
        <article>
            <div class="stack">
                <h2>Available in</h2>
                <p> <a href="https://apps.apple.com/br/app/scoo/id1495366561" target="_blank">App Store</a> &amp;
                <a href="https://play.google.com/store/apps/details?id=br.srv.gs.scoo" target="_blank">Play Store</a></p>
                <p>SCOO is a Startup from Brazil for rent micro mobility vehicles throught an App, which is growing faster with large investors like their major sponsor, the state company of transit and transportation CCR and other noted ventures in Brazil.</p>
            </div>
            <div class="stack">
                <p><strong> Objective for this project </strong></p>
                <p>To provide the best improvements comparing to competitors that came out of country, to give value and create a look alike as an inovative service and cheap price at same time.</p>
                <p><strong>My Role</strong></p>
                <p>All website visual guideline, layouts and front-end development, for this app I've made the concept, the ux flow and the prototype, working from the inital draw until the javascript interactions.</p>
            </div>
        </article>
        <article>
            <div class="stack">
                
            </div>
            <div class="stack wrapper" ref="content">
                
                <ul class="gallery phone" ref="gallery">
                    <li ref="slides">
                        <img src="../assets/app_screen.webp" alt="app" />
                    </li>
                    <li ref="slides">
                        <img src="../assets/app_screen_2.webp" alt="app" />
                    </li>
                    <li ref="slides">
                        <img src="../assets/app_screen_3.webp" alt="app" />
                    </li>
                    <li ref="slides">
                        <img src="../assets/app_screen_4.webp" alt="app" />
                    </li>
                    <li ref="slides">
                        <img src="../assets/login.jpg" alt="app" />
                    </li>
                    <li ref="slides">
                        <img src="../assets/scoo_mobi_1.png" alt="app" />
                    </li>
                    <li ref="slides">
                        <img src="../assets/scoo_mobi_2.png" alt="app" />
                    </li>
                    <li ref="slides">
                        <img src="../assets/scannerQR.jpg" alt="app" />
                    </li>
                    <li ref="slides">
                        <img src="../assets/scoo_mobi_4.png" alt="app" />
                    </li>
                    <li ref="slides">
                        <img src="../assets/scoo_mobi_5.png" alt="app" />
                    </li>
                </ul>
            </div>
        </article>
        <article>
            <div class="stack">
                <h3>We've took a project with a tight budget to a large project, being partners to targeting a result that, even with the time against us, we achive on time an entire functional app, site and platform.</h3>
            </div>
            <div class="stack">
                <p><strong>The Solution</strong></p>
                <p>The entire project was exhaustively planned to grab the attention of subway public, the average middle-classes customers and the investors.</p>
                <p>From their first impressions of website, released at first, to the final app launch all the solution was based on the subway crowd behavior, the day and night trafic and conditions.</p>
            </div>
        </article>
        <article>
            <div class="stack wrapper">
                <ul class="frames" ref="frames">
                    <li class="frame">
                        <img src="../assets/scoo_02.png" />
                        <cite>Website image</cite>
                    </li>
                    <li class="frame">
                        <img src="../assets/scoo_02b.png" />
                         <cite>Website image</cite>
                    </li>
                    <li class="frame">
                        <img src="../assets/scoo_03.png" />
                         <cite>Website image</cite>
                    </li>
                    <li class="frame">
                        <img src="../assets/scoo_04.png" />
                         <cite>Platform image</cite>
                    </li>
                    <li class="frame">
                        <img src="../assets/scoo_05.png" />
                        <cite>Platform image</cite>
                    </li>
                </ul>
            </div>
            <div class="stack"></div>
        </article>
        <article>
            <div class="stack">
                <h3>The feel of doing something that promisses goes big, "flooding in the mainstream", with so inovative service and technology made a great learning opportunity, the result can be accessed in <a href="https://scoo.mobi" target="_blank">scoo.mobi</a></h3>
            </div>
            <div class="stack"></div>
        </article>
    </section>
    
</template>

<style lang="less" scoped>
#app > section {
    article {
        &:not(:first-child) {
            height: 80vh;
            @media screen and (max-width: 912px) {
                 height: auto;
            }
        }
        .stack {
            margin-bottom: auto;
            &.wrapper {
                z-index: 90;
            }
            &:nth-of-type(odd) {
                padding-left: calc(48px + 5vw);
                width: 40%;
                @media screen and (max-width: 912px) {
                    padding-left: 16px;
                }
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
import scrollx from '@/mixins/scrollx'

export default {
    methods: {
        ...mapMutations([
            'CHANGE_COMP'
        ]),
    },
    mixins: [
        scrollx
    ],
    created() {
        this.CHANGE_COMP('scooCard')
    },
    computed: {
        ...mapGetters([
            'getComp'
        ])
    }
}
</script>