<template>

	<div class="List">


		<div v-if=" $route.params.type != 'booster' ">
			<cardPkmn
					v-for="item in this.posts" v-bind:key="item"
					v-bind:data="item" ></cardPkmn>
		</div>
		<div v-if=" $route.params.type == 'booster' ">
			<cardBooster
					v-for="item in this.posts" v-bind:key="item"
					v-bind:data="item" ></cardBooster>
		</div>

	</div>

</template>
<script>

	import axios from 'axios';
	import cardPkmn from './cardPkmn';
	import cardBooster from './cardBooster';

	export default {

		name: 'List',
		props: {},

		data() {
			return {
				posts: [],
			}
		},

		methods: {



		},

		created: function() {

			let urlApi = 'https://api.pokemontcg.io/v1/cards?pageSize=15';

			if (this.$route.params.type == 'ex') {
				urlApi = `https://api.pokemontcg.io/v1/cards?subtype=EX&pageSize=15`;
			} else if (this.$route.params.type == 'booster') {
				urlApi = `https://api.pokemontcg.io/v1/sets`;
			} else if (this.$route.params.type == 'Break') {
				urlApi = `https://api.pokemontcg.io/v1/cards?subtype=Break&pageSize=15`;
			} else if (this.$route.params.type == 'Legend') {
				urlApi = `https://api.pokemontcg.io/v1/cards?subtype=Legend&pageSize=15`;
			} else if (this.$route.path.includes('pkmnInBooster')) {
				urlApi = `https://api.pokemontcg.io/v1/cards?setCode=`+ this.$route.params.id +`&pageSize=15`;
			}

			axios.get(urlApi)
					.then(response => {

						if (this.$route.params.type != 'booster') {
							this.posts = response.data.cards
						} else if (this.$route.params.type == 'booster') {
							this.posts = response.data.sets
						}

					})
					.catch(e => {
						this.errors.push(e)
					})

		},

		updated: function() {

			let urlApi = 'https://api.pokemontcg.io/v1/cards?pageSize=15';

			if (this.$route.params.type == 'ex') {
				urlApi = `https://api.pokemontcg.io/v1/cards?subtype=EX&pageSize=15`;
			} else if (this.$route.params.type == 'booster') {
				urlApi = `https://api.pokemontcg.io/v1/sets`;
			} else if (this.$route.params.type == 'Break') {
				urlApi = `https://api.pokemontcg.io/v1/cards?subtype=Break&pageSize=15`;
			} else if (this.$route.params.type == 'Legend') {
				urlApi = `https://api.pokemontcg.io/v1/cards?subtype=Legend&pageSize=15`;
			} else if (this.$route.path.includes('pkmnInBooster')) {
				urlApi = `https://api.pokemontcg.io/v1/cards?setCode=`+ this.$route.params.id +`&pageSize=15`;
			}

			axios.get(urlApi)
					.then(response => {

						if (this.$route.params.type != 'booster') {
							this.posts = response.data.cards
						} else if (this.$route.params.type == 'booster') {
							this.posts = response.data.sets
						}

					})
					.catch(e => {
						this.errors.push(e)
					})

		},

		components: {
			cardPkmn,
			cardBooster,
		},

	}
</script>



