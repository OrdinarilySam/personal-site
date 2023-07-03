<script lang="ts">
	export let data: { url: string; alt: string };
</script>

<div class="content">
	<img src={data.url} alt={data.alt} />
	<div class="reflection" />
	<div class="shadow" />
</div>

<style lang="scss">
	.content {
		position: relative;
		overflow: hidden;
		border: 2px solid black;
		background: lightblue;
		transition: all 250ms ease-out;
		perspective: 600px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
		height: 400px;
		img {
			height: 100%;
		}
		&:hover {
			scale: 1.05;
		}
		.reflection {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 9;
			transition: all 250ms ease-out;
		}
		.shadow {
			position: absolute;
			inset: -5px;
			transform: translate(10px, 8px);
			z-index: -1;
			filter: blur(10px);
		}
	}
</style>
