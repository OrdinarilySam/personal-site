<script lang="ts">
	import type { Photo } from '$lib/types';

	let modalOpen = false;

	export let photo: Photo;
	let image: HTMLImageElement;

	function handleClick(event: MouseEvent) {
		modalOpen = !modalOpen;
	}
</script>

{#if modalOpen}
	<div class="modal" on:click={handleClick}>
		<div class="full">
			<img src={photo.imageUrl} bind:this={image} alt={photo.title} />
			<h2>{photo.title}</h2>
			<p>{photo.description}</p>
		</div>
	</div>
{:else}
	<div class="card" on:click={handleClick}>
		<img src={photo.imageUrl} bind:this={image} alt={photo.title} />
	</div>
{/if}

<style lang="scss">
	.card {
		cursor: pointer;
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
		transition: transform 0.2s ease-in-out;
	}

	.card:hover {
		transform: scale(1.05);
	}

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

	img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.full {
		z-index: 2;
		max-height: 75vh;
		max-width: 75vw;
		background: white;
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
</style>
