<template>
	<article id="work">
		<aside class="panels">
			<ul id="work-menu" :class="[isOpen ? 'open' : null]">
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
	import esupri from './work/esupri.vue'
	import sce from './work/sce.vue'
	import winemania from './work/winemania.vue'
	import oma from './work/oma.vue'
	import green from './work/green.vue'
	import tgp from './work/tgp.vue'
	import torcedor from './work/torcedor.vue'

	export default {
		data() {
			return {
				isOpen: true,
				setComp: 'appWinemania',
				comps: ["appEsupri","appSce","appWinemania","appOma","appTgp","appGreen","appTT"],
				panels: ['e-Supri', 'SCE','WineMania','Oma Galeria','TGP','Green Ride','Técnico Torcedor']
			}
			
		},
		components: {
			"appWinemania": winemania,
			"appSce": sce,
			"appEsupri": esupri,
			"appTT": torcedor,
			"appOma": oma,
			"appTgp": tgp,
			"appGreen": green
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