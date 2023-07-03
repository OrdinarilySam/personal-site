<script lang="ts">
	export let data: { url: string; alt: string };
</script>

<div class="content">
	<img src={data.url} alt={data.alt} />
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
		max-width: min-content;
		img {
			height: 100%;
		}
		&:hover {
			scale: 1.05;
		}
	}
</style>
