<template>
    <article>
        <div class="stack">
            <h1 ref="title">
                <span>Digital</span>
                <span>UX-UI</span>
                <span>Front-end</span>
                <span>Creative</span>
                <span>Designer</span>
            </h1>
            <span ref="linkme"><button type="button" @click="moveUp('about')" class="action">About me</button></span>
        </div>
        <div class="stack">
            <figure ref="image">
                <img src="../assets/imagem_estanque.png" alt="capa" @load="onImgLoad">
            </figure>
            <label class="orientation" ref="button">
                <button type="button" @click="moveUp('work')" class="round-btn">{{instruction}}</button>
            </label>
        </div>
    </article>
</template>

<script>
import { gsap } from 'gsap/all'
import { mapMutations, mapGetters } from 'vuex'
import animations from '../mixins/animations'

let sum = 0;

export default {
    data() {
        return {
            isLoaded: false,
            resetCard: 'scooCard',
            touchstartY: 0,
            touchendY: 0,
            timeout: '',
            longtouch: Boolean
        }
    },
    mixins: [animations],
    methods: {
        ...mapMutations([
            'CHANGE_COMP',
        ]),
        onImgLoad() {
            const image = this.$refs.image;
            this.isLoaded = true;
            gsap.to(image,{opacity:1,y:'0vh', delay: 0.5});
        },
        toRoute(route) {
            this.$router.push({name: route}).catch(()=>{});
        },
        moveUp(route) {
            const { title, linkme, image } = this.$refs;
            gsap.to([title,image],{opacity:0, y:'-10vh', delay: 0.4, onComplete:() =>this.toRoute(route)});
            gsap.to([linkme],{opacity:0,y:'-10vh', delay: 0.2});
        },
        scrollToComp (ev) {
            let count = 1;
            sum = sum + count;

            const { title, linkme, image } = this.$refs;
            let obj = [title,linkme, image]
            for (var item in obj) {
                if (ev.deltaY > 0 && sum > 0 && window.outerWidth >= 800) {
                    obj[item].style.transform = "translateY(-"+ Math.round(sum*10) +"px)";
                }
            }
            if (ev.deltaY >= 100 && sum >= 4 ) {
                this.moveUp('work');
                sum = 0;
            }
        },
        touchInit(event) {
            this.timeout = setTimeout( () => this.longtouch = true, 1000)
            this.touchstartY = event.changedTouches[0].screenY;
        },
        handleGesture(event) {
             if (this.longtouch) {
                event.stopPropagation();
            } else {
                const gestureZone = document.getElementById('app');
                const height = gestureZone.getBoundingClientRect().height;
                const ratio_vertical = (this.touchendY - this.touchstartY) / height;
                this.touchendY = event.changedTouches[0].screenY;

                console.log(ratio_vertical);

                if (this.touchendY <= this.touchstartY && ratio_vertical < -0.3) {
                    this.moveUp('work');
                }
            }
            this.longtouch = false;
            clearTimeout(this.timeout);
        }
    },
    created() {
        this.CHANGE_COMP(this.resetCard);
        
    },
    mounted() {
        const gestureZone = document.getElementById('app');
        window.addEventListener('wheel',this.scrollToComp);

        gestureZone.addEventListener('touchstart',this.touchInit, false);
        gestureZone.addEventListener('touchend',this.handleGesture, false);

        gsap.set(this.$refs.button,{opacity:0,y:'100px'});
        gsap.to(this.$refs.button,{opacity:1,y:'0vh', delay: 0.5});
        gsap.to( this.$refs.linkme,{opacity:1,y:'0vh', duration: 0.7, delay: 0.4, ease: 'power3.out'});
        
    },
    destroyed() {
        const gestureZone = document.getElementById('app');
        window.removeEventListener('wheel',this.scrollToComp);
        gestureZone.removeEventListener('touchstart',this.touchInit);
        gestureZone.removeEventListener('touchend',this.handleGesture);
    },
    computed: {
        ...mapGetters([
            'getComp',
        ])
    },
}
</script>

<style lang="less" scoped>

 article {
     .stack {
         h1, figure, .orientation, & > span {
             opacity: 0;
         }
     }
     .stack > span {
         margin-top:48px;
     }
     .stack > span {
         display: inline-block;
         opacity: 0;
     }
 }
</style>