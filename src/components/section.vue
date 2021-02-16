<template>
  <section>
	  <ul class="menu">
		  <li v-for="menu in menus" key="i">
			  <router-link :to="'/'+menu.toLowerCase()" @click.native="bindOpen()" active-class="active">{{ menu }}</router-link>
			</li> 
		</ul>
		<router-view></router-view>
  </section>
</template>

<script>	
	export default {
		data() {
			return {
				menus: ['Work', 'About'],
			}
		},
		methods: {
			bindOpen() {
				document.getElementById('work-menu').classList.add('open');
			}
		}
	}
</script>