<script lang="ts">
	import Card from './Card.svelte';
	import { photos } from '$lib/data/photos';
	import type { Photo } from '$lib/types';
	import Modal from './Modal.svelte';

	let modalOpen = false;
	let photo: Photo | null = null;

	// loop through every photo and assign it an id in increasing order
	photos.forEach((photo, index) => {
		photo.id = index;
	});

	function toggleStates() {
		modalOpen = !modalOpen;
		if (modalOpen) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}
	}

	function handleClick(event: MouseEvent, data?: Photo) {
		if (data) {
			photo = data;
		}
		toggleStates();
	}

	function handleKeyDown(event: KeyboardEvent, data?: Photo) {
		if (data) {
			photo = data;
		}
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

<svelte:head>
	<title>Photography</title>
	<meta name="photography" content="ordinarilysam photography portfolio" />
</svelte:head>
<div>
	{#if modalOpen && photo}
		<Modal {photo} {handleClick} {handleKeyDown} />
	{/if}
	{#each photos as photo}
		<Card {photo} {handleClick} {handleKeyDown} />
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
