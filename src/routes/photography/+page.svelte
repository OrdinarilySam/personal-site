<script lang="ts">
	import Card from './Card.svelte';
	import { photos } from '$lib/data/photos';
</script>

<svelte:head>
	<title>Photography</title>
	<meta name="photography" content="ordinarilysam photography portfolio" />
</svelte:head>
<div>
	{#each photos as data}
		<Card {data} />
	{/each}
</div>

<style lang="scss">
	div {
		justify-content: center;
		width: 100%;
		align-items: center;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		padding: 1rem;
		gap: 1rem;
	}
</style>
