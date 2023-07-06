<script lang="ts">
	import Card from './Card.svelte';
	import { photos } from '$lib/data/photos';
	import type { Photo } from '$lib/types';
	import Modal from './Modal.svelte';

	let modalOpen = false;
	let photo: Photo | null = null;

	function toggleStates() {
		modalOpen = !modalOpen;
		if (modalOpen) {
			document.body.classList.add('modal-open');
			window.addEventListener('keydown', handleKeyDown);
		} else {
			document.body.classList.remove('modal-open');
			window.removeEventListener('keydown', handleKeyDown);
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
</style>
