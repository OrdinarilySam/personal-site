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
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
    width: 100%;
    height: 100%;
    align-items: stretch;
	}
  main {
    background: pink;
    height: 100%;
    flex-grow: 1;
    display: flex;
  }
</style>
