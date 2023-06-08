<script lang="ts">
  let shadow: HTMLDivElement;
  let card: HTMLDivElement;
  function handleMove(e: MouseEvent) {
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

</script>
<div class="content" bind:this={card}>
  <div class="shadow" bind:this={shadow}>

  </div>
  <div class="mouse-container" on:mousemove={handleMove} on:mouseleave={() => {card.style.transform = "none"}}></div>
</div>
<style lang="scss">
  .content {
    height: 400px;
    width: 400px;
    position: relative;
    overflow: hidden;
    border: 2px solid black;
    background: lightblue;
    transition: transform 0.2s;
    div {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

</style>
