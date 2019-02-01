<template>
	<article id="digital">
		<aside class="panels">
			<ul id="digital-menu" :class="[isOpen ? 'open' : null]">
				<li v-for="(panel, i) in panels" :key="i">
					<ins>0{{ i + 1 }}</ins>
					<h3 @click="setComp = showApp(i), avoidOpen()"><span>&bull;</span> {{ panel }}</h3>
				</li>
			</ul>
		</aside>
		<keep-alive>
			<component :is="setComp"> </component>
		</keep-alive>
	</article>
</template>
<script>
	import winemania from './digital/winemania.vue'
	import hapjet from './digital/hapjet.vue'
	import esupri from './digital/esupri.vue'
	import torcedor from './digital/torcedor.vue'
	import oma from './digital/oma.vue'
	
	export default {
		data() {
			return {
				isOpen: true,
				setComp: 'appWinemania',
				comps: ["appWinemania", "appHapjet", "appEsupri", "appTT","appOma"],
				panels: ['WineMania', 'HAPJET', 'e-Supri','Técnico Torcedor', 'Oma Galeria']
			}
			
		},
		components: {
			"appWinemania": winemania,
			"appHapjet": hapjet,
			"appEsupri": esupri,
			"appTT": torcedor,
			"appOma": oma,
		}, 
		methods: {
			showApp(id) {
				return this.comps[id];
			},
			avoidOpen() {
				document.getElementById('digital-menu').classList.remove('open');
			}
		}
	}
</script>