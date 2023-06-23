<script lang="ts">
	let shadow: HTMLDivElement;
	let card: HTMLDivElement;

	// TODO: increase performance by using a canvas element?
	function handleMove(event: MouseEvent) {
		if (!event.target) return;
		let element = event.target as HTMLDivElement;

		let rotateX = (-event.offsetY + element.clientWidth / 2) / 10;
		let rotateY = (event.offsetX - element.clientHeight / 2) / 10;
		// let brightness = 1.5 - event.offsetY / element.clientHeight;

		card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		// card.style.filter = `brightness(${brightness})`;

		let fixedX = event.offsetX - element.clientWidth / 2;
		let fixedY = event.offsetY - element.clientHeight / 2;
		let angle = Math.atan2(fixedY, fixedX) - Math.PI / 2;
		let intensity = Math.sqrt(
			(fixedX / element.clientWidth / 2) ** 2 + (fixedY / element.clientHeight / 2) ** 2
		);

		shadow.style.background = `linear-gradient(${angle}rad, black, transparent), linear-gradient(${
			angle + Math.PI
		}rad, white, transparent)`;
		shadow.style.opacity = `${intensity}`;
	}

	function handleLeave() {
		card.style.transform = `rotateX(0deg) rotateY(0deg)`;
		card.style.filter = `brightness(1)`;
		shadow.style.background = `none`;
	}

	export let data: { url: string; alt: string };
</script>

<div class="content" bind:this={card} on:mousemove={handleMove} on:mouseleave={handleLeave}>
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
			background: linear-gradient(rgba(255, 0, 0, 0.2), transparent);
		}
	}
</style>
