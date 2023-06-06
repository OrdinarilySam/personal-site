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
<!--   

-->

<style lang="scss">
	:global(*) {
		box-sizing: border-box;
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
				flex: 1.5;
			}
			grid-row: auto;
			align-content: center;
			display: flex;
			text-decoration: none;
			color: black;
			justify-content: center;
			align-content: center;
			h1 {
				text-decoration: none;
				margin: auto;
				color: white;
				text-shadow: black 0 0 1px;
        position: relative;
			}
			&.projects {
				background-image: url('$lib/images/Projects.jpeg');
				background-position: center;
			}
			&.photography {
				background-image: url('$lib/images/Photography.jpeg');
				background-position: center;
			}
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: inherit;
        filter: blur(2px) brightness(50%);
        z-index: -1;
    }
    		}
	}
</style>
