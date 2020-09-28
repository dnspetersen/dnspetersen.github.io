import { gsap } from 'gsap/all'

export default {
    data() {
        return {
            instructions: '',
        }
    },
    methods: {
        setText() {
            window.outerWidth > 800 ? this.instruction = "Scroll Down" : this.instruction = "Swipe up";
            return this.instruction;
        },
        enterAnim() {
            const { title, linkme, image } = this.$refs;
            let tText = title.children;
            gsap.fromTo(
                [...tText],
                {clipPath:"polygon(0% 100%,100% 100%,100% 100%,0% 120%)"},
                {clipPath:"polygon(0% 100%,100% 100%,100% -50%,0% 0%)",
                stagger: 0.2,
                duration: 0.8,
                delay:0,
                ease: 'power2.out'}
            );
            gsap.set([title,linkme],{opacity:0, y:'200px'});
            gsap.set(image,{opacity:0,y:'150px'});
            gsap.to(title,{opacity:1,y:'0vh', duration: 0.7, delay: 0.1, ease: 'power3.out'});
            gsap.to(image,{opacity:1,y:'0vh', delay: 0.8, ease: 'power3.out'});
        }
    },
    created() {
        this.setText();
    },
    mounted() {
        this.enterAnim();
    }
}