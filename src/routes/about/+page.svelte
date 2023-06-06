<script lang="ts">
  import MeImage from "$lib/images/Me.jpeg"
</script>

<svelte:head>
	<title>About</title>
	<meta name="about" content="ordinarilysam about" />
</svelte:head>

<div class="container">
  <div class="main">
    <h1>Sam Martin</h1>
    <p>More coming soon...</p>
  </div>  
  <div class="side">
    <img src={MeImage} alt="headshot of sam"/>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    div {
      width: 100%;
    }
    .main {
      text-align: center;
      h1 {
        font-size: 3rem;
      }
    }

  }
  img {
    width: 100%; 
  }
</style>
