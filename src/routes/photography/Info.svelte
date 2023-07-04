<script lang="ts">
	import type { Photo } from '$lib/types';
	export let photo: Photo;
</script>

<div class="info">
	<h2>{photo.title}</h2>
	<p>{photo.location}</p>
	<p>{photo.date}</p>
	<a href={photo.imageUrl} target="_blank">View Full Size</a>
</div>

<style lang="scss">
	.info {
		text-align: center;
		width: 100%;
	}
</style>
