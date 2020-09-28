<template>
  <div id="app">
    <site-header></site-header>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script>
import SiteHeader from './components/header.vue'
import SiteFooter from './components/footer.vue'
import smoothscroll from '@/mixins/smoothscroll'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteFooter
  },
  mixins: [
    smoothscroll
  ]
}
</script>

<style lang="less">

</style>
