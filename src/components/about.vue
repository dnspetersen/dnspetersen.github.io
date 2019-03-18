<template>
	<article id="about">
		<div class="profile">
			<figure>
				<img src="../assets/profile.jpg" alt="Denis photo">
				<figcaption>
					<h2>Digital, UX Designer and Front-End Developer</h2>
					<p>I've been working more than 9 years with digital design and understanding all the evolution in the market improving my skills. In order to achieve more goals, I work focusing in Design, digital marketing and programming.</p>
					<p>I've started my career with architect design in Autocad and 3D softwares, that I still keep as hobby. Als worked with packaging design, e-learning, flash animations that lead me to the digital design market. </p>
					<p>As I grew in my career I realized that I could be closer to the people's routine working with web designs, in apps, platforms and pages. Even if I was just doing an illustration for it, I could be part of someone's everyday routine.</p>
					<p>In my firsts attempts in this field I realized the need of  understanding coding and SEO and gave me the same enthusiasm as design, using creativity and focusing on the results to achieve goals. You can bring amazing results using creativity and simple decisions for some problems.
I am a father of two boys and a girl and my goal is to give them an example. Giving this legacy moves me and strives me to go further also in my professional career, after all every kid wants to know what their Dad does and how he contributes with the world.</p>
					<p>I work hard to not get into a routine and the technology with design makes everything more interesting and pushes me to learn more.</p>
					<p>Now I am interested in learning more about Javascript frameworks with the possibility of increasing the user experience and all the improvement that this trend can bring.</p>
				</figcaption>
			</figure>
			<ol>
				<li><h2>Skills</h2></li>
				<li v-for="(skill,i) in skills">
					{{ skill }}<span :style="setPct(i)"></span>
				</li>
			</ol>
			<footer id="social">
				<p>Get in touch by <a :href="links.email">e-mail</a> or <a :href="links.whatsapp">WhatsApp</a></p>
				<h3>Social</h3>
				<ul>
					<li>
						<a :href="links.facebook" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path fill="#424242" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 
								4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
							</svg>
						</a>
					</li>
					<li>
						<a :href="links.linkedin" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path fill="#424242" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 
								4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
							</svg>
						</a>
					</li>
					<li>
						<a :href="links.twitter" target="_blank">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path fill="#424242" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 
								4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
							</svg>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	</article>
</template>

<script>
	export default {
		data() {
			return {
				skills: ['Adobe Pack', 'HTML5', 'CSS3', 'VUE.js','Wordpress', 'Woocommerce', 'SEO', 'English', 'Invision'],
				width: ['80','90','90','75', '80', '70','60', '80', '60'],
				links: {
					email: "mailto:dnspetersen@gmail.com",
					whatsapp: "https://wa.me/15551234567https://wa.me/5511976100928",
					facebook: "https://www.facebook.com/denis.p.kelley",
					linkedin: "https://www.linkedin.com/in/denis-petersen-37286220/",
					twitter: "https://twitter.com/dnspetersen" 
				}
			}
		},
		methods: {
			setPct: function(i) {
				return { width: this.width[i] + '%'}
			}
		}
	}
</script>