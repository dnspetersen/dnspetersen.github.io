import { gsap } from 'gsap/all'
export default {
    data() {
        return {
            buffer: [],
        }
    },
    methods: {
        movement() {
            const { image, linkme, photo, stack1, stack2, feature } = this.$refs;
            window.outerWidth > 800 ? gsap.to(stack1,{width: '40%', paddingLeft: "calc(48px + 5vw)", duration: 0.5, ease: 'power3.out'}) :
                                      gsap.to(stack1,{width: '40%', paddingLeft: "24px", duration: 0.5, ease: 'power3.out'});
            gsap.to(stack2,{width: '60%', duration: 0.5, ease: 'power3.out'});
            gsap.to(linkme,{opacity:0,height: 0,y:'-10vh', delay: 0.5});
            gsap.to(feature,{opacity:1,height: 180, delay: 1});
            gsap.to([...feature.children],{opacity:1, height: 48, stagger:0.15, rotationY: 0, delay: 1});
            photo.classList.remove('animate');
            window.outerWidth > 800 ? gsap.to(image,{width: '65vw', duration: 0.5, ease: 'power3.out'}) : 
                                      gsap.to(image,{height: '52vw', duration: 0.5, ease: 'power3.out'});
        }
    },
    created() {
        const gestureZone = document.getElementById('app');
        gestureZone.addEventListener('touchstart',this.doInit, false);
        gestureZone.addEventListener('touchend',this.doGesture, false);
        window.addEventListener('wheel',this.scrollToComp);
    },
    mounted() {
      if (this.$route.path !== '/work') {
        this.movement();
        const gestureZone = document.getElementById('app');
        gestureZone.removeEventListener('touchstart',this.doInit, false);
        gestureZone.removeEventListener('touchend',this.doGesture, false);
        window.removeEventListener('wheel',this.scrollToComp);
      }
    },
    watch: {
        $route (to) {
            if (to.path !== '/work') {
                this.movement();
            }
        }
    },
}