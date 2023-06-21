<script lang="ts">
	let shadow: HTMLDivElement;
	let card: HTMLDivElement;
	function handleMove(e: MouseEvent) {
		let rotateY = -25 + ((e.offsetX - 0) * (25 + 25)) / 180;
		let rotateX = 25 + ((e.offsetY - 0) * (-25 - 25)) / 250;
		let brightness = 1.5 + ((e.offsetY - 0) * (0.5 - 1.5)) / 250;
		card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
		card.style.filter = `brightness(${brightness})`;
		// let x: number = 3;
		// let y: number = 3;
		//
		// if ((e.offsetX < 200 && e.offsetY < 200) || (e.offsetX > 200 && e.offsetY > 200)) {
		//   x = -3;
		//   y = -3;
		// }
		// card.style.transform = `skew(${x}deg, ${y}deg)`

		// card.style.boxShadow = `${e.offsetX}px 0 8px -24px inset`
		// card.style.transform = `rotate(${Math.atan2(e.offsetX, e.offsetY) * 180 / Math.PI}deg)`

		// console.log("degrees:", Math.atan(e.offsetY / e.offsetX) * 180 / Math.PI)
		// console.log("(", e.offsetX, ", ", e.offsetY, ")")
	}
	function handleLeave() {
		card.style.transform = `rotateX(0deg) rotateY(0deg)`;
		card.style.transform = `brightness(1)`;
	}
</script>

<div class="content" bind:this={card}>
	<div class="mouse-container" on:mousemove={handleMove} on:mouseleave={handleLeave} />
	<div class="text">
		<h1>Under Construction</h1>
	</div>
</div>

<style lang="scss">
	.content {
		height: 400px;
		width: 400px;
		position: relative;
		overflow: hidden;
		border: 2px solid black;
		background: lightblue;
		transition: all 250ms ease-out;
		perspective: 600px;
		div {
			position: absolute;
			width: 100%;
			height: 100%;
			&.text {
				display: flex;
				justify-content: center;
				align-items: center;
				z-index: -1;
			}
		}
		h1 {
			text-align: center;
		}
	}
</style>
