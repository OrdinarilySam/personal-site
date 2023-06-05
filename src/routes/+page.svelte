<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
	<meta name="home" content="Homepage for ordinarilysam website" />
</svelte:head>

<div class="container">
		<a href="/projects" class="projects">
			<h1>Programming Projects</h1>
		</a>
		<a href="/photography" class="photography">
			<h1>Photography</h1>
		</a>
</div>

<style lang="scss">
	:global(*) {
		box-sizing: border-box;
	}

	.container {
		flex-grow: 1;
		display: grid;
    grid-template: 1fr / 1fr 1fr;
    grid-gap: 1rem;
    margin: 1rem;
		a {
      text-align: center;
      width: 100%;
      transition: width 0.5s;
      &:hover {
        width: 60vw;
      }
      grid-row: auto;
      align-content: center;
      display: flex;
			text-decoration: none;
			color: black;
      justify-content: center;
      align-content: center;
      h1 {
        margin: auto;
      }
      &.projects {
        background: pink;
      }
      &.photography {
        background: red;
      }
		}
	}
</style>
<!--   

-->
