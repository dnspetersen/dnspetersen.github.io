<template>
<div class="work" id="work-5">
	<h2><span>05</span>Omagaleria</h2>
	<div class="subtitle">
		<h3><span>Year</span>2014</h3>
		<h3><span>Product</span>Site and Store</h3>
		<h3><span>Technology</span>WordPress and WooCommerce</h3>
	</div>
	<blockquote>
		Oma Galeria is an art gallery that has a curatorial work for street art and wants to give the newest artist of the movement for their visitors.
	</blockquote>
	<figure>
		<figcaption>
			<h3>Project goal</h3>
			<p>Develop a website that would inspire the user to visit the exhibitions and the gallery, new admirers. Also, to gain the attention of new artists for the gallery.</p>
			<h3>My roles</h3>
			<p>For this project I worked with the product designer <a href="https://felipesbravate.com/" title="Felipe Sbravate">Sbravate</a>and developed all the front-end and navigation for the website.</p>
		</figcaption>
		<span><img src="../../assets/desk_omagaleria.jpg" alt="Oma galeria"></span>
	</figure>
	<figure class="half">
		<img src="../../assets/mob_omagaleria.jpg" alt="mobile Oma">
		<img src="../../assets/mob_omagaleria2.jpg" alt="mobile Oma">
		<figcaption>
			<h3>The problem</h3>
			<p>To stand out the art pieces of the gallery without not interfering the user's attention was a huge challenge. This target group has a high level of expectations regarding the experience and the attention of the details was one of the priorities. </p>
			<h3>The solution</h3>
			<p>The main idea was to bring, in a modern way, the feeling of an art archive that describes your artists in a clear way and always with inspiring art.</p>
		</figcaption>
	</figure>
	<figure>
		<span><img src="../../assets/home_omagaleria.jpg" alt="Oma galeria"></span>
		<span><img src="../../assets/desk_omagaleria2.jpg" alt="Oma galeria"></span>
	</figure>
	<blockquote>
		"This site challenge, as many others i've created, it's balance the creation priority of other designers mind, visit the gallery in <a href="//www.omagaleria.com" target="_blank">www.omagaleria.com</a>"
	</blockquote>
</div>
</template>
<script>
export default {
	data() {
		return {

		}
	},
	methods: {
		handleScroll() {
			let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
			if (bottomOfWindow) {
				document.getElementById('work-menu').classList.add('open');
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