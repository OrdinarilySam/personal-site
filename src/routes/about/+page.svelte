<script lang="ts">
  import MeImage from "$lib/images/Me.jpeg"
  import About from "$lib/text/about.js"
</script>

<svelte:head>
	<title>About</title>
	<meta name="about" content="ordinarilysam about" />
</svelte:head>

<div class="container">
  <div class="main">
    <h3>Hi, I'm <span>Sam Martin</span>.</h3>
    <p>{About}</p>
      </div>  
  <div class="side">
    <img src={MeImage} alt="headshot of sam"/>
    <p aria-hidden="true">Hey there</p>
  </div>
</div>

<style lang="scss">
  .container {
    flex-grow: 1;
    display: flex;
    margin: 1rem;
    flex-direction: row;
    gap: 1rem;
    .main {
      flex: 2;
      text-align: center;
      h3 {
        font-weight: 400;
        font-size: 3rem;
        span {
          font-weight: 600;
        }
      }
    }
    .side {
      flex: 1;
      p {
        position: absolute;
        transform: rotate(45deg) translate(-3em, -4em);
        z-index: -1;
        font-weight: 600;
              }
    }

  }
  img {
    max-width: 100%;
    max-height: 100%;
    border: 4px solid black;
    transition: transform 0.5s ease-in-out;
    &:hover {
      transform: rotate(45deg);
    }
  }
</style>
