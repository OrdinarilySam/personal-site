<script lang="ts">
	import type { Photo } from '$lib/types';
	import Info from './Info.svelte';

	export let photo: Photo;
	export let handleClick: (event: MouseEvent) => void;
	export let handleKeyDown: (event: KeyboardEvent) => void;
</script>

<div class="modal" on:click={handleClick} on:keydown={handleKeyDown}>
	<div class="full" on:click|stopPropagation on:keydown|stopPropagation>
		<img src={photo.imageUrl} alt={photo.title} />
		{#if Object.values(photo).every((value) => !!value)}
			<Info {photo} />
		{/if}
	</div>
</div>

<style lang="scss">
	.modal {
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 1;
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(5px);
		background: rgba(0, 0, 0, 0.5);
	}

	.full {
		z-index: 2;
		max-height: 90vh;
		max-width: 90vw;
		height: 100%;
		background: white;
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		gap: 1rem;
		img {
			height: 100%;
			object-fit: contain;
		}
	}
</style>
