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

  :global(.nav-home) {
    cursor: default;
    font-weight: 600;
  }

	.container {
		flex-grow: 1;
		display: flex;
    gap: 1rem;
    margin: 1rem;
		a {
      text-align: center;
      width: 100%;
      flex: 1;
      transition: flex 0.5s;
      &:hover {
        flex: 2;
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
