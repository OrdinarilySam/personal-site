<script lang="ts">
	export let data;
	import Card from './Card.svelte';
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="projects" content="ordinarilysam programming projects portfolio" />
</svelte:head>

<div>
	{#each data.summaries as { slug, title, description }}
		<Card {slug} {title} {description} />
	{/each}
</div>

<style lang="scss">
	div {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		padding: 1rem;
		gap: 1rem;
	}
</style>
