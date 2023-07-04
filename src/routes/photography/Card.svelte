<script lang="ts">
	import type { Photo } from '$lib/types';
	// maybe create a card holder component that handles the modal state and modal photo

	let modalOpen = false;

	export let photo: Photo;
	let image: HTMLImageElement;

	function toggleStates() {
		modalOpen = !modalOpen;
		if (modalOpen) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}
	}

	function handleClick() {
		toggleStates();
	}

	function handleKeyDown(event: KeyboardEvent) {
		if ((event.key === 'Enter' || event.key === ' ') && !modalOpen) {
			toggleStates();
		}
		if (event.key === 'Escape' && modalOpen) {
			toggleStates();
		}
	}

	$: {
		if (modalOpen) {
			window.addEventListener('keydown', handleKeyDown);
		} else {
			window.removeEventListener('keydown', handleKeyDown);
		}
	}
</script>

{#if modalOpen}
	<div class="modal" on:click={handleClick} on:keydown={handleKeyDown}>
		<div class="full" on:click|stopPropagation on:keydown|stopPropagation>
			<img src={photo.imageUrl} bind:this={image} alt={photo.title} />
			<div class="info">
				<h2>{photo.title}</h2>
			</div>
		</div>
	</div>
{/if}
<div class="card" on:click={handleClick} on:keydown={handleKeyDown}>
	<img src={photo.imageUrl} bind:this={image} alt={photo.title} />
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
		background: white;
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		img {
			object-fit: contain;
			max-width: 75%;
		}
		.info {
			text-align: center;
			width: 100%;
		}
	}
</style>
