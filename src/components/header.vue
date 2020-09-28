<template>
  <header>
      <figure id="identity">
          <router-link :to="{name: 'home'}" ><svg version="1.1" x="0px" y="0px" width="62.5px" height="62.5px" viewBox="0 0 62.5 62.5" enable-background="new 0 0 62.5 62.5" xml:space="preserve"><path fill="#424242" d="M45.7,27.8c0,0.4,0,0.8,0,1.2c0,9.1-2.8,13.9-6.2,16.5c-4.4,3.2-10.1,3.5-15,3.5h-5.1v-8.5L2.6,48.7v13.8
				h26.3c3.8,0,7-0.2,10.7-1c8.2-1.9,13.1-6.3,15.3-8.7c3.6-4.2,7.7-11.7,7.7-24.3c0-3.2-0.3-6-0.7-8.4L45.7,27.8z"></path><path fill="#424242" d="M16.9,41.7V14.1h6.7c3.2,0,6.1-0.1,9.2,0.9c3.6,1.1,5.6,3.4,6.5,4.6c2.3,2.9,3.2,6,3.6,9.4l15.6-7.5
				c-1-3.5-2.3-6.2-3.6-8.1c-2.1-3.3-4.1-5.1-5.3-6.1c-8.2-6.7-19.3-7-22.2-7.2c-2-0.1-4-0.1-6.1-0.1H0v49.8L16.9,41.7z"></path></svg>
          </router-link>
          <figcaption>
              <h4>
                Denis<br/>Digital Designer
              </h4>
          </figcaption>
      </figure>
      <nav class="menu">
        <button class="menu-btn" @click="toggleMenu">
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect class="square-btn" x="6.90393" y="5.91376" width="34.0925" height="34.0925"/>
            <rect x="0.672607" y="0.824402" width="23.3382" height="2.9454" fill="#424242"/>
            <rect x="0.672607" y="12.8244" width="31.7444" height="2.9454" fill="#424242"/>
            <rect x="0.672607" y="24.8244" width="31.7444" height="2.9454" fill="#424242"/>
          </svg>
        </button>
        <ul class="menu" :class="{active: isActive}">
          <li>
            <router-link :to='{name:"home"}'>HOME</router-link>
          </li>
          <li>
            <router-link :to='{name:"about"}'>ABOUT</router-link>
          </li>
          <li>
            <router-link :to='{name:"work"}'>WORK</router-link>
            <ul class="sub-menu">
              <li>
                <router-link :to='{name:"scoo"}'>SCOO</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
  </header>
</template>

<script>

export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
     toggleMenu() {
       this.isActive = !this.isActive;
     }
  },
  watch: {
    $route() {
      this.isActive = false;
    }
  },
}
</script>