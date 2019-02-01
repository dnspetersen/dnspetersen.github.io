<template>
  <div>
  	<app-header></app-header>
  	<app-section></app-section>
  </div>
</template>

<script>
import header from './components/header.vue'
import section from './components/section.vue'

export default {
	components: {
		'appHeader': header,
		'appSection': section
	}
}
</script>

<style>

</style>
