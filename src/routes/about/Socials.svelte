<script lang="ts">
  import Github from "$lib/images/github.svg"
  import Linkedin from "$lib/images/linkedin.svg"
  import Twitter from "$lib/images/twitter.svg"
  import Instagram from "$lib/images/instagram.svg"
</script>
<div>
  <h3>Socials</h3>
  <ul>
    <li><a target="_blank" href="https://www.github.com/ordinarilysam"><img src={Github} alt="github logo" /></a></li>
    <li><a target="_blank" href="https://www.linkedin.com/in/samuel-d-martin"><img src={Linkedin} alt="linkedin logo" /></a></li>
    <li><a target="_blank" href="https://www.twitter.com/ordinarilysam"><img src={Twitter} alt="twitter logo" /></a></li>
    <li><a target="_blank" href="https://www.instagram.com/ordinarilysamm"><img src={Instagram} alt="instagram logo" /></a></li>
  </ul>
</div>
<style lang="scss">
  div {
    h3 {
      font-size: 2rem;
      text-align: center;
    }
    ul {
      padding-left: 0;
      height: 3rem;
      display: flex;
      list-style: none;
      justify-content: space-between;
      li {
        height: 100%;
        a {
          display: block;
          height: 100%;
        }
      }
    }
  }
  img {
    height: 100%;
    color: black;
    margin: auto;
  }
</style>
