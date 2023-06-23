<script lang="ts">
	let shadow: HTMLDivElement;
	let card: HTMLDivElement;

	function throttle<T extends any[]>(
		func: (...args: T) => void,
		delay: number
	): (...args: T) => void {
		let timeoutId: number;
		let lastExecTime = 0;

		return function (...args: T) {
			const currentTime = new Date().getTime();
			const timeSinceLastExec = currentTime - lastExecTime;

			clearTimeout(timeoutId);

			if (timeSinceLastExec > delay) {
				func(...args);
				lastExecTime = currentTime;
			} else {
				timeoutId = setTimeout(() => {
					func(...args);
					lastExecTime = new Date().getTime();
				}, delay);
			}
		};
	}

	const throttledHandleMove = throttle(handleMove, 16);

	// TODO: increase performance by using a canvas element?
	function handleMove(event: MouseEvent) {
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

		shadow.style.background = `linear-gradient(${angle}rad, black, transparent, white)`;
		shadow.style.opacity = `${intensity}`;
	}

	function handleLeave() {
		card.style.transform = `rotateX(0deg) rotateY(0deg)`;
		shadow.style.background = `none`;
		shadow.style.opacity = `0`;
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
			z-index: 3;
			transition: all 250ms ease-out;
		}
	}
</style>
