<script lang="ts">
	let shadow: HTMLDivElement;
	let card: HTMLDivElement;

	import throttle from '$lib/tools/throttle';
	const throttledHandleMove = throttle(handleMove, 16);

	function handleMove(event: MouseEvent) {
		console.log(event.target);
		let element = event.target as HTMLDivElement;
		let halfWidth = element.clientWidth / 2;
		let halfHeight = element.clientHeight / 2;

		let rotateX = (halfHeight - event.offsetY) / 10;
		let rotateY = (event.offsetX - halfWidth) / 10;

		card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

		let fixedX = event.offsetX - halfWidth;
		let fixedY = event.offsetY - halfHeight;
		let angle = Math.atan2(fixedY, fixedX) - Math.PI / 2;
		let intensity = Math.sqrt((fixedX / halfWidth / 2) ** 2 + (fixedY / halfHeight / 2) ** 2) * 0.5;

		shadow.style.background = `linear-gradient(${angle}rad, rgba(0, 0, 0, ${intensity}), transparent, rgba(255, 255, 255, ${intensity}))`;
	}

	function handleLeave() {
		setTimeout(() => {
			card.style.transform = `rotateX(0deg) rotateY(0deg)`;
			shadow.style.background = `none`;
			card.style.boxShadow = `none`;
		}, 20);
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
	<div bind:this={shadow} />
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
		div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 9;
			transition: all 250ms ease-out;
			&::before {
				content: '';
				position: absolute;
				inset: -5px;
				transform: translate(10px, 8px);
				z-index: -1;
				filter: blur(10px);
			}
		}
	}
</style>
