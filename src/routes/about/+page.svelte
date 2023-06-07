<script lang="ts">
  import MeImage from "$lib/images/Me.jpeg"
  import About from "./About.svelte"
</script>

<svelte:head>
	<title>About</title>
	<meta name="about" content="ordinarilysam about" />
</svelte:head>

<div class="container">
  <div class="main">
    <h3>Hi, I'm <span>Sam Martin</span>.</h3>
    <About />
  </div>  
  <div class="side">
    <div class="img-container">
      <div class="hover-area"></div>
      <div class="outline-area"></div>
      <img src={MeImage} alt="headshot of sam"/>
      <p aria-hidden="true">Hey there</p>
    </div>
    <div>
      <h3>Socials</h3>
      <ul>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
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
      .img-container{
        aspect-ratio: 1 / 1;
        position: relative;
        div {
          aspect-ratio: 1 / 1;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          &.hover-area {
            z-index: 3;
            &:hover ~ img {
              transform: rotate(45deg);
            }
          }
          &.outline-area {
            z-index: -1;
            outline: 2px solid black;
          }
        }
        p {
          position: absolute;
          bottom: 0;
          left: 0;
          transform: rotate(45deg) translate(-1vw, -1vh);
          /* transform: rotate(45deg) translate(-3em, -4em); */
          z-index: -1;
          font-weight: 600;
        }
        img {
          max-width: 100%;
          max-height: 100%;
          border: 2px solid black;
          transition: transform 0.5s ease-in-out;
          
        }
        
      }

    }

  }
  </style>
