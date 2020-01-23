<template>
	<div class="List">

		{{this.posts}}
		<img class="fit-picture" src="" alt="">
		<button @click="callApi">test</button>
	</div>

</template>
<script>
	import axios from 'axios';

	export default {
	name: 'List',
		props: {},
		data() {
		return {
		posts: [],
		}
		},
		
		methods:{
			callApi (){
				axios.get(`https://api.pokemontcg.io/v1/cards?id=xy7-54`)
				.then(response => {
					// JSON responses are automatically parsed.
					this.posts = response.data.cards[0].imageUrlHiRes
				})
				.catch(e => {
					this.errors.push(e)
				})
			}	
		}
	}
</script>

