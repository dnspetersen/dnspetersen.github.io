<template>
  <section >
  		<ul class="menu">
			<li v-for="menu in menus">
				<router-link :to="'/' + menu.toLowerCase()" @click.native="bindOpen()" active-class="active">{{ menu }}</router-link>
			</li> 
		</ul>
		<router-view></router-view>
  </section>
</template>

<script>	
	export default {
		data() {
			return {
				menus: ['Digital', 'Identity', 'About'],
			}
		},
		methods: {
			bindOpen() {
				document.getElementById('digital-menu').classList.add('open');
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>