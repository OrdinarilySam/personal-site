<script lang="ts">
	import Card from './Card.svelte';
	import { photos } from '$lib/data/photos';
	import type { Photo } from '$lib/types';
	import Modal from './Modal.svelte';

	let modalOpen = false;
	let currentPhoto: Photo | null = null;
	let currentPhotoIndex = 0;

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
			currentPhoto = data;
			currentPhotoIndex = photos.findIndex((photo) => photo === data);
		}
		toggleStates();
	}

	function handleKeyDown(event: KeyboardEvent, data?: Photo) {
		if (data) {
			currentPhoto = data;
			currentPhotoIndex = photos.findIndex((photo) => photo === data);
		}
		if ((event.key === 'Enter' || event.key === ' ') && !modalOpen) {
			toggleStates();
		}
		if (event.key === 'Escape' && modalOpen) {
			toggleStates();
		}
		if (event.key === 'ArrowRight' && modalOpen) {
			nextPic();
		}
		if (event.key === 'ArrowLeft' && modalOpen) {
			prevPic();
		}
	}

	function nextPic() {
		if (currentPhotoIndex === photos.length - 1) {
			currentPhotoIndex = 0;
			currentPhoto = photos[currentPhotoIndex];
		} else {
			currentPhotoIndex++;
			currentPhoto = photos[currentPhotoIndex];
		}
	}

	function prevPic() {
		if (currentPhotoIndex === 0) {
			currentPhotoIndex = photos.length - 1;
			currentPhoto = photos[currentPhotoIndex];
		} else {
			currentPhotoIndex--;
			currentPhoto = photos[currentPhotoIndex];
		}
	}
</script>

<svelte:head>
	<title>Photography</title>
	<meta name="photography" content="ordinarilysam photography portfolio" />
</svelte:head>
<div>
	{#if modalOpen && currentPhoto}
		<Modal photo={currentPhoto} {handleClick} {handleKeyDown} {nextPic} {prevPic} />
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
