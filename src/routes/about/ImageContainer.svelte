<script lang="ts">
  import MeImage from "$lib/images/Me.jpeg"
</script>
<div class="img-container">
  <div class="hover-area"></div>
  <div class="outline-area"></div>
  <img src={MeImage} alt="headshot of sam"/>
  <p aria-hidden="true">Hey there</p>
</div>
<style lang="scss">
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
            transform: translate(0, -1.5vh) rotate(45deg);
            /* transform: rotate(45deg) translate(-1vw, -1vh); */
            z-index: -1;
            font-weight: 600;
          }
          img {
            object-fit: cover;
            aspect-ratio: 1/1;
            max-width: 100%;
            max-height: 100%;
            border: 2px solid black;
            transition: transform 0.5s ease-in-out;

          }

        }
</style>
