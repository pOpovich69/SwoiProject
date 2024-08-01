<template>
  <div class="info">
    <div class="info__content">
      <div class="info__wrapper">
        <div class="info__data">
          <h1 class="info__title">Трохи про нас</h1>
          <h2 class="info__subtitle">Доброго вам дня!</h2>
          <p class="info__description">
            Мене звуть Антон, і я представляю вам Trojmiasto Swoi – ваш надійний інформаційний канал у Instagram!
          </p>
          <p class="info__description">
            Наш проект Trojmiasto Swoi стартував у 2022 році з ідеєю використання для особистих потреб, але згодом ми переросли у платформу загального користування. 
            Сьогодні понад 12 тисяч активних підписників стежать за нашими новинами. 
            Ми створили цей проект, щоб забезпечити наших користувачів зручною та доступною інформацією.
          </p>
          <div class="info__social-links">
            <div class="social-links__text">Follow us:</div>
            <div class="social-links__wrapper">
              <div v-for="(link, index) in socialLinks" :key="index" class="social-link">
                <a :href="link.url">
                  <img alt="social" :src="link.img"/>
                </a>
              </div>
            </div>
          </div>
          <my-button @click="routing.toForm()">Напиши нам</my-button>
        </div>
        <div class="info__phone">
          <img src="../../assets/imgs/pt.svg" alt="phone and tablet">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import inst from '@/assets/icons/inst.svg'
import facebook from '@/assets/icons/facebook.svg'
import tiktok from '@/assets/icons/tiktok.svg'
import { routingService } from '@/services';

const routing = routingService()

const socialLinks = ref([
  {
    img: inst,
    url: "https://www.instagram.com/trojmiasto.swoi?igsh=MWNnaXh3bWxsMzhrYQ%3D%3D"
  },
  {
    img: facebook,
    url: "https://www.facebook.com/groups/3775953115993736/"
  },
  {
    img: tiktok,
    url: "https://www.tiktok.com/@trojmiasto.swoi?_t=8lX8NU29jZR&_r=1"
  }
])

</script>

<style scoped lang="scss">
.info {
  min-height: calc(100vh);
  padding-top: $headerHeight;
  background-color: $bgColor;

  &__content {
    min-height: calc(100vh);
    display: flex;
    justify-content: center;
    align-items: center;
    @extend %limiter;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__data {
    margin-right: 20px;
    flex: 1;
  }

  &__title {
    font-family: $juraFont;
    font-weight: bold;
    font-size: 48px;
    margin-bottom: 30px;
    &::first-letter{
      color: $textYellowColor;
    }
  }

  &__subtitle {
    font-family: $robotoFont;
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 10px;
  }

  &__description {
    font-family: $robotoFont;
    font-size: 18px;
    margin-bottom: 15px;
  }

  &__social-links {
    display: flex;
    margin-bottom: 30px;

    :last-child {
      margin-right: 0px;
    }
  }

  &__phone {

    img {
      height: 100%;
      width: 100%;
    }
  }
}

.social-links {
  &__text {
    font-family: $robotoFont;
    font-weight: bold;
    font-size: 26px;
    margin-right: 10px;
  }
  &__wrapper {
    display: flex;
    align-items: center;
  }
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 10px;

  a {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 22px;
      widows: 22px;
      object-fit: cover;
    }
  }
}

@media (max-width: 851px) {
  .info {

    &__wrapper {
      flex-direction: column-reverse;
    }

    &__data {
      text-align: center;
      margin-right: 0;
    }

    &__title {
      margin-bottom: 15px;
    }

    &__social-links {
      flex-direction: column;
    }
  }

  .social-links {
    &__wrapper {
      justify-content: center;
      width: 100%;
    }
    &__text {
      margin-right: 0px;
      margin-bottom: 10px;
    }
  }

  .social-link {
    width: 60px;
    height: 60px;
    margin: 0px 10px;

    a {
      img {
        height: 30px;
        widows: 30px;
        object-fit: cover;
      }
    }

    &:first-child {
      margin-left: 0px;
    }

    &:last-child {
      margin-right: 0px;
    }
  }
}


</style>