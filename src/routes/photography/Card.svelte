<script lang="ts">
	import throttle from '$lib/tools/throttle';

	let reflection: HTMLDivElement;
	let card: HTMLDivElement;
	let shadow: HTMLDivElement;

	const throttledHandleMove = throttle(handleMove, 50);

	function handleMove(event: MouseEvent) {
		const element = event.target as HTMLDivElement;

		const halfWidth = element.clientWidth / 2;
		const halfHeight = element.clientHeight / 2;

		const rotateX = (halfHeight - event.offsetY) / 10;
		const rotateY = (event.offsetX - halfWidth) / 10;

		card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

		const fixedX = event.offsetX - halfWidth;
		const fixedY = event.offsetY - halfHeight;

		const angle = Math.atan2(fixedY, fixedX) - Math.PI / 2;
		const intensity =
			Math.sqrt((fixedX / halfWidth / 2) ** 2 + (fixedY / halfHeight / 2) ** 2) * 0.5;

		reflection.style.background = `linear-gradient(${angle}rad, rgba(0, 0, 0, ${intensity}), transparent, rgba(255, 255, 255, ${intensity}))`;
		shadow.style.background = `linear-gradient(rgb(255, 0, 0), rgb(0, 255, 0))`;
	}

	function handleLeave() {
		setTimeout(() => {
			card.style.transform = `rotateX(0deg) rotateY(0deg)`;
			shadow.style.background = `none`;
			reflection.style.background = `none`;
			card.style.boxShadow = `none`;
		}, 100);
	}

	export let data: { url: string; alt: string };
</script>

<div
	class="content"
	bind:this={card}
	on:mousemove={throttledHandleMove}
	on:mouseleave={handleLeave}
>
	<img src={data.url} alt={data.alt} />
	<div class="reflection" bind:this={reflection} />
	<div class="shadow" bind:this={shadow} />
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
