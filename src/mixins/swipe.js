import { mapGetters, mapMutations } from 'vuex'
import { gsap } from 'gsap/all'

let sum = 0;

export default {
    data() {
        return {
            touchstartY: 0,
            touchendY: 0,
            refers: '',
            timeout: '',
            longtouch: Boolean
        }
    },
    methods: {
        ...mapMutations([
           'CHANGE_COMP' 
        ]),
        toRoute(route) {
            this.$router.push({name: route}).catch(()=>{});
        },
        doInit(event) {
            this.touchstartY = event.changedTouches[0].screenY;
            this.timeout = setTimeout( () => this.longtouch = true, 700)
        },
        setCard () {
            if (this.getComp == "scooCard") {
                this.currentUp = 'grideCard'
                this.currentDown = 'ttCard'
            } else if (this.getComp == "grideCard") {
                this.currentUp = 'essenzaCard'
                this.currentDown = 'scooCard'
            } else if (this.getComp == "essenzaCard") {
                this.currentUp = 'ttCard'
                this.currentDown = 'grideCard'
            } else if (this.getComp == "ttCard") {
                this.currentUp = 'scooCard'
                this.currentDown = 'essenzaCard'
            }
        },
        doGesture(event) {
            if (this.longtouch) {
                event.stopPropagation();
            } else {
                const { title, linkme, image } = this.$refs;

                const gestureZone = document.getElementById('app');
                const height = gestureZone.getBoundingClientRect().height;
                const ratio_vertical = (this.touchendY - this.touchstartY) / height;
                this.touchendY = event.changedTouches[0].screenY;

                this.setCard();
                if (this.touchendY <= this.touchstartY && ratio_vertical < -0.1) {
                    gsap.to([title,image],{opacity:0, y:'-10vh', delay: 0.4, onComplete:() => this.CHANGE_COMP(this.currentUp)});
                    gsap.to(linkme,{opacity:0,y:'-10vh', delay: 0.2});
                } else if (this.touchendY >= this.touchstartY){
                    gsap.to([title,image],{opacity:0, y:'10vh', delay: 0.4, onComplete:() => this.CHANGE_COMP(this.currentDown)});
                    gsap.to(linkme,{opacity:0,y:'10vh', delay: 0.2});
                }
            }
            this.longtouch = false;
            clearTimeout(this.timeout);
        },
        scrollToComp (ev) {
            const { title, linkme, image} = this.$refs;
            let count = 1;
            sum = sum + count;
            let obj = [title,linkme, image];
            for (var item in obj) {
                if (ev.deltaY > 0 && sum > 0) {
                    obj[item].style.transform = "translateY(-"+ Math.floor(sum*10) +"px)";
                } else if (ev.deltaY < 0 && sum > 0) {
                   obj[item].style.transform = "translateY("+ Math.floor(sum*10) +"px)";
                }
            }
            this.setCard();
            if (ev.deltaY >= 100 && sum >= 3) {
                gsap.to([title,image],{opacity:0, y:'-150px', delay: 0.4, onComplete:() => {sum = 0; this.CHANGE_COMP(this.currentUp)}});
                gsap.to(linkme,{opacity:0, height: 0, y:'-150px', delay: 0.2});
            } else if (ev.deltaY <= -100 && sum >= 3) {
                gsap.to([title,image],{opacity:0, y:'150px', delay: 0.4, onComplete:() => {sum = 0; this.CHANGE_COMP(this.currentDown)}});
                gsap.to(linkme,{opacity:0,y:'150px', height: '0px', delay: 0.2});
            }
        },
    },
    watch: {
        $route(to) {
            const gestureZone = document.getElementById('app');
            if (to.path == '/work') {
                const {image, linkme, photo, stack1, stack2, feature } = this.$refs;
                gsap.to(stack1,{width: '35%', paddingLeft: 48, duration: 0.4, ease: 'power3.out'});
                window.outerWidth > 1440 ? gsap.to(stack2,{width: '45%', duration: 0.4, ease: 'power3.out'}) :
                                            gsap.to(stack2,{width: '40%', duration: 0.4, ease: 'power3.out'});
                window.outerWidth > 768 ? gsap.to(image,{width: '52vw', height: "auto", duration: 0.4, ease: 'power3.out'}): null;
                gsap.to(linkme,{opacity:1,y:'0vh', delay: 0.2});
                gsap.to(feature,{opacity:0, height: 0, delay: 0.2});
                gsap.to([...feature.children],{opacity:0,height: 0, rotationY: 90, delay: 0.2});
                photo.classList.add('animate');
                gestureZone.addEventListener('touchstart',this.doInit, false);
                gestureZone.addEventListener('touchend',this.doGesture, false);
                window.addEventListener('wheel',this.scrollToComp);
            } else {
                gestureZone.removeEventListener('touchstart',this.doInit);
                gestureZone.removeEventListener('touchend',this.doGesture);
                window.removeEventListener('wheel',this.scrollToComp);
            }
        }
    },
    mounted() {
        if (this.$route.path == '/work') {
            const gestureZone = document.getElementById('app');
            gestureZone.addEventListener('touchstart',this.doInit, false);
            gestureZone.addEventListener('touchend',this.doGesture, false);
            window.addEventListener('wheel',this.scrollToComp);
        }
    },
    destroyed() {
        const gestureZone = document.getElementById('app');
        gestureZone.removeEventListener('touchstart',this.doInit);
        gestureZone.removeEventListener('touchend',this.doGesture);
        window.removeEventListener('wheel',this.scrollToComp);
    },
    computed: {
        ...mapGetters([
            'getComp'
        ])
    },
}