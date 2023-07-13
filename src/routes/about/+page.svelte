<script lang="ts">
	import ImageContainer from './ImageContainer.svelte';
	import Socials from './Socials.svelte';
	import About from './About.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="about" content="ordinarilysam about" />
</svelte:head>

<div class="container">
	<div class="content-wrapper">
		<div class="main">
			<h3>Hi, I'm <span>Sam Martin</span>.</h3>
			<About />
		</div>
		<div class="side">
			<Socials />
			<ImageContainer />
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		flex-grow: 1;
		display: flex;
		margin: 1rem;
		margin-right: 2rem;
		flex-direction: column;
		h3 {
			width: 100%;
			text-align: left;
			font-weight: 400;
			font-size: 5rem;
			margin: 1rem 0;
			span {
				font-weight: 600;
			}
		}
		.content-wrapper {
			display: flex;
			flex-direction: row;
			gap: 1rem;
			flex-grow: 1;
			.main {
				flex: 2;
			}
			.side {
				flex: 1;
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
