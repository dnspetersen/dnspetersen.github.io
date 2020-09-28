<template>
  <section>
    <article>
      <div class="stack">
        <h1 ref="title">
          <span>ABOUT ME</span>
        </h1>
        <div ref="linkme">
          <p>Digital designer, UX, UI &amp; Front-end</p>
          <p>SKILLS: Illustrator, Figma, Photoshop, Javascript, JQuery, VUE, SEO, design thinking, Scrum, Kanban, Mautic, Analytics, Wordpress, Woocommerce, 3Ds max, Less, CSS, HTML...</p>
          <a href="#" @click="moveUp('work')" class="action">Selected works</a>
        </div>
      </div>
      <div class="stack">
        <div ref="image">
          <p>I've been working more than 12 years with digital design and understanding all the evolution in the market improving my skills. In order to achieve more goals, I work focusing in Design, digital marketing and programming.</p>
          <p>I've started my career with architect design in Autocad and 3D softwares, that I still keep as hobby. Als worked with packaging design, e-learning, flash animations that lead me to the digital design market.</p>
          <p>As I grew in my career I realized that I could be closer to the people's routine working with web designs, in apps, platforms and pages. Even if I was just doing an illustration for it, I could be part of someone's everyday routine.</p>
          <p>In my firsts attempts in this field I realized the need of understanding coding and SEO and gave me the same enthusiasm as design, using creativity and focusing on the results to achieve goals. You can bring amazing results using creativity and simple decisions for some problems. I am a father of two boys and a girl and my goal is to give them an example. Giving this legacy moves me and strives me to go further also in my professional career, after all every kid wants to know what their Dad does and how he contributes with the world.</p>
          <p>I work hard to not get into a routine and the technology with design makes everything more interesting and pushes me to learn more.</p>
          <p>Now I am interested in learning more about Javascript frameworks with the possibility of increasing the user experience and all the improvement that this trend can bring.</p>
          <a href="#" @click="moveUp('work')" class="action">Selected works</a>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import gsap from 'gsap/all'
import animations from '../mixins/animations'

export default {
    mixins: [animations],
    methods: {
      toRoute(route) {
          this.$router.push({name: route}).catch(()=>{});
      },
      moveUp(route) {
          const { title, linkme, image, button } = this.$refs;
          gsap.to([title,image],{opacity:0, y:'-10vh', delay: 0.4, onComplete:() =>this.toRoute(route)});
          gsap.to([linkme,button],{opacity:0,y:'-10vh', delay: 0.2});
      },
    },
    mounted() {
      gsap.to( this.$refs.linkme,{opacity:1,y:'0vh', duration: 0.7, delay: 0.4, ease: 'power3.out'});
    },
};
</script>

<style lang="less" scoped>
    #app {
        section {
            article {
              height: auto;
              @media screen and (max-width: 768px) {
                  flex-direction: column;
              }
              .stack {
                  padding-top: 25vh;
                  @media screen and (min-width: 912px) {
                      padding-top: 20vh;
                      justify-content: flex-start;
                  }
                  &:nth-of-type(odd) {
                    height: 100vh;
                    position: sticky;
                    top: 0;
                  }
                  &:nth-of-type(even) {
                    @media screen and (max-width: 912px) {
                        z-index: 99;
                        width: 100%;
                        padding: 16px;
                        background: #fff;
                    }
                    .action {
                      @media screen and (min-width: 912px) {
                        display: none;
                      }
                    }
                  }
                  h1, p {
                      margin-bottom: 48px;
                  }
                  p {
                    @media screen and (min-width: 1440px) {
                      padding-right: 4vw;
                    }
                  }
              }
            }
        }
    }
</style>