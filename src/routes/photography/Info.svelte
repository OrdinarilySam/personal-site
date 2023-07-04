<script lang="ts">
	import type { Photo } from '$lib/types';
	export let data: Photo;
</script>

<div class="info">
	<h2>{data.title}</h2>
	<p>{data.location}</p>
	<p>{data.date}</p>
	<a href={data.imageUrl} target="_blank">View Full Size</a>
</div>
