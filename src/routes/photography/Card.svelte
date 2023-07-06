<script lang="ts">
	import type { Photo } from '$lib/types';
	export let photo: Photo;
	export let handleClick: (event: MouseEvent, data: Photo) => void;
	export let handleKeyDown: (event: KeyboardEvent, data: Photo) => void;
</script>

<div
	class="card"
	on:click={(event) => handleClick(event, photo)}
	on:keydown={(event) => handleKeyDown(event, photo)}
>
	<img src={photo.imageUrl} alt={photo.title} />
</div>

<style lang="scss">
	.card {
		cursor: pointer;
		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
		transition: transform 0.2s ease-in-out;
		img {
			object-fit: cover;
			max-height: 100%;
			max-width: 100%;
		}
	}

	.card:hover {
		transform: scale(1.05);
	}
</style>
