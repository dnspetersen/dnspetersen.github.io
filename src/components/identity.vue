<template>
	<article id="identity">
		<aside class="panels">
			<ul id="digital-menu" :class="[isOpen ? 'open' : null]">
				<li v-for="(panel, i) in panels" :key="i" @click="setComp = showApp(i), avoidOpen()">
					<ins>0{{ i + 1 }}</ins>
					<h3><span>&bull;</span> {{ panel }}</h3>
				</li>
			</ul>
		</aside>
		<keep-alive>
			<component :is="setComp"> </component>
		</keep-alive>
	</article>
</template>
<script>
import banktools from './identity/banktools.vue'
import vicer from './identity/vicer.vue'

export default {
	data() {
		return {
			isOpen: true,
			setComp: 'appTGP',
			comps: ["appBT", "appVicer"],
			panels: ['BankTools', 'Vicer']
		}
		
	},
	components: {
		"appBT": banktools,
		"appVicer": vicer
	}, 
	methods: {
		showApp(id) {
			return this.comps[id];
		},
		avoidOpen() {
			document.getElementById('work-menu').classList.remove('open');
		}
	}
}
</script>