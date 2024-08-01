<template>
  <div class="bg-img">
    <div></div>
    <video autoplay muted loop>
      <source :src="video" type="video/mp4">
      Your browser does not support the video tag!
    </video>
  </div>

  <div class="fullscreen">
    <div class="fullscreen__content">
      <div class="fullscreen__wrapper">
        <div class="fullscreen__project-title">
          <h1>Swoi project</h1>
        </div>
        <div class="fullscreen__project-slogan">
          <p>Trojmiasto Swoi: Будь в курсі подій ⏱️</p>
        </div>
        <div class="fullscreen__btns">
          <my-button @click="routing.toAboutUs()" class="fbtn" background-color="#4671D5" color="#fff" paddingX="40px">Про нас</my-button>
          <my-button @click="routing.toForm()" class="fbtn" paddingX="40px" >Напиши нам</my-button>
        </div>
      </div>
    </div>
  </div>
</template>   
    
<script lang="ts" setup>
import video from '@/assets/video/demo.mp4'
import { routingService } from '@/services';

const routing = routingService()

</script>

<style scoped lang="scss">
.bg-img {
  width: 100vw;
  height: 100%;

  video{
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $firstBlockBlue;
    z-index: 0;
    top: 0
  }
}

.fullscreen {
  @extend %limiter;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  &__wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__content {
    height: 100%;
    max-width: 500px;
  }

  &__project-title {
    h1 {
      animation: fadeFromLeft 500ms;
      font-family: $righteousFont;
      font-size: 84px;
    }
  }

  &__project-slogan {
    margin-bottom: 20px;
    p {
      animation: fadeFromLeft 500ms;
      font-size: 32px;
      width: 100%;
    }
  }

  &__btns {
    animation: fadeFromBottom 500ms;
    display: flex;
    :first-child {
      margin-right: 20px;
    }
  }
}

.fbtn {
  max-width: 210px;
  width: 100%;
  &:first-child {
    max-width: 180px;
    width: 100%;
  }
}

@media (max-width: 525px) {
  .fullscreen {
    &__project-title {
      h1 {
        font-size: 48px;
      }
    }
    &__btns {
      flex-direction: column;
      :first-child {
        margin-right: 0px;
        margin-bottom: 12px;
      }
    }
  }
}

@media (max-width: 446px) {

}



</style>