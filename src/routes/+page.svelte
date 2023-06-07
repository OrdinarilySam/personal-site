<svelte:head>
  <title>Home</title>
  <meta name="home" content="Homepage for ordinarilysam website" />
</svelte:head>

<div class="container">
  <div class="projects-container">
    <a href="/projects" class="projects">
      <h1>Programming Projects</h1>
    </a>
    <div class="projects-img">

    </div>
  </div>
  <div class="photography-container">
    <a href="/photography" class="photography">
      <h1>Photography</h1>
    </a>
    <div class="photography-img">

    </div>
  </div>
</div>

<style lang="scss">
    .container {
    flex-grow: 1;
    display: flex;
    gap: 1rem;
    margin: 1rem;
    div {
      width: 100%;
      flex: 1;
      transition: flex 0.5s;
      grid-row: auto;
      display: flex;
      position: relative;
      overflow: hidden;
      &:hover {
        div {
          filter: blur(1px) brightness(50%);
        }
        flex: 1.5;
      }
      a {
        height: 100%;
        width: 100%;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
          transition: filter 0.5s;
          padding: 1rem;
          text-align: center;
          font-family: 'Raleway', sans-serif;
          font-size: 2.5rem;
          color: white;
          text-shadow: black 0 0 1px;
          margin: 0;
        }
      }
      div {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-position: center;
        transition: filter 0.5s;
        filter: blur(2px) brightness(25%);
        &.photography-img{
          background-image: url("$lib/images/Photography.jpeg");
          background-size: cover;
        }
        &.projects-img{
          background-image: url("$lib/images/Projects.jpeg");
        }
      }
    }
    &:hover > div > a > h1 {
      filter: brightness(75%);
  }
    div:hover > a > h1 {
      filter: brightness(100%);
    }

  }
</style>
