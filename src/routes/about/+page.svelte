<script lang="ts">
  import ImageContainer from "./ImageContainer.svelte";
  import Socials from "./Socials.svelte"
  import About from "./About.svelte"
</script>

<svelte:head>
  <title>About</title>
  <meta name="about" content="ordinarilysam about" />
</svelte:head>

<div class="container">
  <h3>Hi, I'm <span>Sam Martin</span>.</h3>
  <div class="content-wrapper">
    <div class="main">
      <About />
    </div> 
    <div class="side">
    <Socials />
      <ImageContainer />
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    flex-grow: 1;
    display: flex;
    margin: 1rem;
    margin-right: 2rem;
    flex-direction: column;
    h3 {
      width: 100%;
      text-align: center;
      font-weight: 400;
      font-size: 3rem;
      margin: 1rem 0;
      span {
        font-weight: 600;
      }

    }
    .content-wrapper {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      flex-grow: 1;
      .main {
        flex: 2;
        text-align: center;
              }
      .side {
        flex: 1;
        display: flex;
        flex-direction: column;

      }
    }



  }
  </style>
