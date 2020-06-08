<template>
	<article id="work">
		<aside class="panels">
			<ul id="work-menu" :class="[isOpen ? 'open' : null]">
				<li>
					<h1>
						<svg version="1.1" x="0px" y="0px" width="62.5px" height="62.5px" viewBox="0 0 62.5 62.5" enable-background="new 0 0 62.5 62.5" xml:space="preserve">
						<path fill="#424242" d="M45.7,27.8c0,0.4,0,0.8,0,1.2c0,9.1-2.8,13.9-6.2,16.5c-4.4,3.2-10.1,3.5-15,3.5h-5.1v-8.5L2.6,48.7v13.8
							h26.3c3.8,0,7-0.2,10.7-1c8.2-1.9,13.1-6.3,15.3-8.7c3.6-4.2,7.7-11.7,7.7-24.3c0-3.2-0.3-6-0.7-8.4L45.7,27.8z"/>
						<path fill="#424242" d="M16.9,41.7V14.1h6.7c3.2,0,6.1-0.1,9.2,0.9c3.6,1.1,5.6,3.4,6.5,4.6c2.3,2.9,3.2,6,3.6,9.4l15.6-7.5
							c-1-3.5-2.3-6.2-3.6-8.1c-2.1-3.3-4.1-5.1-5.3-6.1c-8.2-6.7-19.3-7-22.2-7.2c-2-0.1-4-0.1-6.1-0.1H0v49.8L16.9,41.7z"/>
						</svg>igital, UX and Front-end Designer
						<span class="bar" id="load-site"></span>
					</h1>
					<p>Selected Works</p>
				</li>
				<li @click="setComp = 'appEsupri', scrollToTop(), avoidOpen()">
					<img src="../assets/thumb_1.jpg">
					<ins>01</ins>
					<h3><span>&bull;</span> e-Supri</h3>
				</li>
				<li @click="setComp = 'appSce', scrollToTop(), avoidOpen()">
					<img src="../assets/thumb_2.jpg">
					<ins>02</ins>
					<h3><span>&bull;</span> SCE</h3>
				</li>
				<li @click="setComp = 'appWinemania', scrollToTop(), avoidOpen()">
					<img src="../assets/thumb_3.jpg">
					<ins>03</ins>
					<h3><span>&bull;</span> WineMania</h3>
				</li>
				<li @click="setComp = 'appOma', scrollToTop(), avoidOpen()">
					<img src="../assets/thumb_4.jpg">
					<ins>04</ins>
					<h3><span>&bull;</span> Oma Galeria</h3>
				</li>
				<li @click="setComp = 'appTgp', scrollToTop(), avoidOpen()">
					<img src="../assets/thumb_5.jpg">
					<ins>05</ins>
					<h3><span>&bull;</span> TGP Advogados</h3>
				</li>
				<li @click="setComp = 'appGreen', scrollToTop(), avoidOpen()">
					<img src="../assets/thumb_6.jpg">
					<ins>06</ins>
					<h3><span>&bull;</span> Green Ride Club</h3>
				</li>
				<li @click="setComp = 'appTT', scrollToTop(), avoidOpen()">
					<img src="../assets/thumb_7.jpg">
					<ins>07</ins>
					<h3><span>&bull;</span> Técnico Torcedor</h3>
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
				setComp: '',
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
			scrollToTop() {
				window.scrollTo(0,0);
			},
			avoidOpen() {
				this.isOpen = !this.isOpen;
			},
			handleScroll() {
				let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
				if (bottomOfWindow) {
					document.getElementById('work-menu').classList.add('open');
					this.isOpen = true;
				} else {
					document.getElementById('work-menu').classList.remove('open');
				}
			}
		},
		created () {
			window.addEventListener('scroll', this.handleScroll);
		},
		destroyed () {
			window.removeEventListener('scroll', this.handleScroll);
		}
	}
</script>