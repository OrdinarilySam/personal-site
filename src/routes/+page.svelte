<script>
</script>

<svelte:head>
	<title>Home</title>
	<meta name="home" content="Homepage for ordinarilysam website" />
</svelte:head>

<div class="container">
  <a href="/projects">
    <div>
      Programming Projects
    </div>
  </a>
  <a href="/photography">
    <div>
      Photography
    </div>
  </a>
</div>

<style lang="scss">
  :global(*) {
    box-sizing: border-box;
  }
  
  .container {
    flex-grow: 1;
    display: grid;
    background: #d6b24d;
    grid-template: 1fr / 1fr 1fr;
    a {
      text-align: center;
      vertical-align: center;
      height: 100%;
      text-decoration: none;
      color: black;
      div {
        margin: auto;
        padding: auto;
      }
    }
  }

</style>
