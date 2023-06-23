<script lang="ts">
	let shadow: HTMLDivElement;
	let card: HTMLDivElement;
	function handleMove(e: MouseEvent) {
		if (!e.target) return;
		let element = e.target as HTMLDivElement;
		let rotateX = (-e.offsetY + element.clientWidth / 2) / 10;
		let rotateY = (e.offsetX - element.clientHeight / 2) / 10;
		let brightness = 1.5 - e.offsetY / element.clientHeight;
		card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		card.style.filter = `brightness(${brightness})`;
	}
	function handleLeave() {
		card.style.transform = `rotateX(0deg) rotateY(0deg)`;
		card.style.filter = `brightness(1)`;
	}

	export let data: { url: string; alt: string };
</script>

<div class="content" bind:this={card} on:mousemove={handleMove} on:mouseleave={handleLeave}>
	<img src={data.url} alt={data.alt} />
	<div />
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
			height: 400px;
		}
		div {
			position: absolute;
			width: 100%;
			height: 100%;
			background: linear-gradient(red, blue);
		}
	}
</style>
