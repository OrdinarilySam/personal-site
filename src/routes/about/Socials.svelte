<script lang="ts">
  import Github from "$lib/images/github.svg"
  import Linkedin from "$lib/images/linkedin.svg"
  import Twitter from "$lib/images/twitter.svg"
  import Instagram from "$lib/images/instagram.svg"
</script>
<div>         <!-- TODO: fix weird a side effect -->
  <h3>Socials</h3>
  <ul>
    <li><a href="https://www.github.com/ordinarilysam"><img src={Github} alt="github logo" /></a></li>
    <li><a href="https://www.linkedin.com/in/samuel-d-martin"><img src={Linkedin} alt="linkedin logo" /></a></li>
    <li><a href="https://www.twitter.com/ordinarilysam"><img src={Twitter} alt="twitter logo" /></a></li>
    <li><a href="https://www.instagram.com/ordinarilysamm"><img src={Instagram} alt="instagram logo" /></a></li>
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
      height: 2rem;
      display: flex;
      list-style: none;
      justify-content: space-between;
      li {
        height: 100%;
      }
    }
  }
  img {
    height: 100%;
    color: black;
    margin: auto;
  }
</style>
