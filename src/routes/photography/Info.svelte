<script lang="ts">
	import type { Photo } from '$lib/types';
	export let photo: Photo;
</script>

<div class="info">
	{#if photo.title}
		<h2>{photo.title}</h2>
	{/if}
	{#if photo.location}
		<p>{photo.location}</p>
	{/if}
	{#if photo.date}
		<p>{photo.date}</p>
	{/if}
</div>

<style lang="scss">
	.info {
		text-align: center;
		width: 100%;
	}
</style>
