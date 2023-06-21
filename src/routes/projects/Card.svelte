<script lang="ts">
	export let slug: string;
	export let title: string;
	export let description: string;
</script>

<a href="projects/{slug}">
	<h1>
		{title}
	</h1>
	<p>
		{description}
	</p>
</a>

<style lang="scss">
	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		transition: all 0.2s ease-in-out;
		text-decoration: none;
		color: inherit;
		&:hover {
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
			transform: translate(2px, -2px);
		}
	}
</style>
