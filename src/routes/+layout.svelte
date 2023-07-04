<script>
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500;600;700&display=swap');
	:global(*) {
		font-family: 'Raleway', sans-serif;
		box-sizing: border-box;
	}
	:global(body.modal-open) {
		overflow: hidden;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		width: 100%;
		height: 100%;
		align-items: stretch;
		overflow: hidden;
	}
	main {
		height: 100%;
		flex-grow: 1;
		display: flex;
	}
</style>
