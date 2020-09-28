export default {
    methods: {
        addScrollX(elem, factor) {
            let isDown = false;
            let startX;
            let scrollLeft;

            elem.addEventListener('mousedown', (e) => {
                isDown = true;
                elem.classList.add('active');
                startX = e.pageX - elem.offsetLeft;
                scrollLeft = elem.scrollLeft;
                cancelMomentumTracking();
            });
            
            elem.addEventListener('mouseleave', () => {
                isDown = false;
                elem.classList.remove('active');
            });
            
            
            elem.addEventListener('mouseup', () => {
                isDown = false;
                elem.classList.remove('active');
                beginMomentumTracking();
            });
            
            
            elem.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - elem.offsetLeft;
                const walk = (x - startX) * factor; //scroll speed
                var prevScrollLeft = elem.scrollLeft;
                elem.scrollLeft = scrollLeft - walk;
                velX = elem.scrollLeft - prevScrollLeft;
            });
            
            // Momentum 
            
            var velX = 20;
            var momentumID;
            
            elem.addEventListener('wheel', () => {
                cancelMomentumTracking();
            });  
            
            function beginMomentumTracking(){
                cancelMomentumTracking();
                momentumID = requestAnimationFrame(momentumLoop);
            }
            function cancelMomentumTracking(){
                cancelAnimationFrame(momentumID);
            }
            function momentumLoop(){
                elem.scrollLeft += velX;
                velX *= 0.95; 
                if (Math.abs(velX) > 0.5){
                    momentumID = requestAnimationFrame(momentumLoop);
                }
            }
        }
    },
    mounted() {
        const { gallery, frames} = this.$refs;
        this.addScrollX(gallery, 0.5);
        this.addScrollX(frames, 1);
    },
}