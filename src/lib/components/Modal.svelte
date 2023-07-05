<script lang="ts">
	export let modalOpen = true;
	let modal: HTMLDivElement;

	function closeModal() {
		modalOpen = false;
	}

	function openModal() {
		modalOpen = true;
	}
</script>

{#if modalOpen}
	<div bind:this={modal}>
		<div class="background" on:click={closeModal} />
		<div class="photo">
			<!-- Photo content goes here -->
			<slot />
			<button on:click={closeModal}>Close</button>
		</div>
	</div>
{/if}

<style>
	div {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		position: fixed;
		display: none;
	}

	.background {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(10px);
		background: rgba(0, 0, 0, 0.5);
		position: absolute;
	}

	.photo {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
	}
</style>
