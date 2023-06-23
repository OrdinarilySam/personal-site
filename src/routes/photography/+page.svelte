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
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
