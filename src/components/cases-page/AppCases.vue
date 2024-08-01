<template>
  <div class="cases">
    <div class="cases__content">
      <div class="price__blocks">
        <div class="price__item" v-for="(item, index) in casesData" :key="index">
          <div class="item__img">
            <img :src="item.image" alt="price__img">
          </div>
          <div class="item__price">
            <span class="item__price_new">{{ item.newCost }}zł</span>
            <div class="dash"></div>
            <span class="item__price_old">{{ item.oldCost }}zł</span>
          </div>
          <p class="item__title">{{ item.planName }}</p>
          <p class="item__description">
            <ul>
              <li v-for="(data, index) in item.planDescription" :key="index">{{ index + 1 }}. {{ data }}</li>
            </ul>
          </p>
          <div class="item__btn">
            <my-button @click="isOpen1 = true">Купляю</my-button>
          </div>
        </div>  
      </div>
    </div>
    <my-popup @toggle-popup="isOpen1 = !isOpen1" :is-open="isOpen1">
      <div class="oops-window">
        <a href="https://t.me/swoireklm" class="qr-img">
            <img src="../../assets/qr.png" alt="qr">
          </a>
          <div class="oops-window__text">
            <div class="text">
              Усі продажі здійснюються через нашого менеджера в Telegram. При необхідності ми можемо виставити рахунок-фактуру для фірм.
            </div>
            <div class="text">
              Усі вихідні дані повинні бути надіслані у вигляді файлу для збереження якості. Термін та дату слід узгодити з менеджером.
            </div>
          </div>
      </div>
    </my-popup>
  </div>
</template>



<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { AdvertisingCase } from '@/models'
import { priceImg1, priceImg2, priceImg3 } from '@/constants/constants'

const isOpen1 = ref<boolean>(false)

const casesData = ref<AdvertisingCase[]>([
  {
    newCost: 100,
    oldCost: 120,
    planName: "План \"Офісник\"",
    planDescription: [
      'Розміщення реклами в історіях (2 історії)',
      'Можливість включити посилання у профіль',
    ],
    image: priceImg1
  },
  {
    newCost: 150,
    oldCost: 200,
    planName: "План \"Депутат\"",
    planDescription: [
      'Реклама в історіях (3 історії)',
      'Публікація посту з вашим контентом та рекламою у підписі',
      'Можливість проведення конкурсів або розіграшів з призами'
    ],
    image: priceImg2,
  },
  {
    newCost: 250,
    oldCost: 300,
    planName: "План \"Ухилянт\"",
    planDescription: [
      'Реклама в історіях (5 історій) з використанням стікерів та фільтрів',
      'Публікація посту (3 пости) з вашим контентом та рекламою у підписі',
      'Публікація відео-огляду або інтерв\'ю в Reals',
      'Розміщення посилань у історіях'
    ],
    image: priceImg3
  }
])


onMounted(async () => {
  // @ts-ignore
  $(document).ready(() => {
    // @ts-ignore
    $('.price__blocks').slick({
      arrows: false,
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '20px',
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            centerMode: false,
            dots: true
          }
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 1,
            centerPadding: '0px',
            centerMode: true,
            dots: true
          }
        }
        
      ]
    })
  })
})

</script>

<style scoped lang="scss">
.cases {
  min-height: 100vh;
  width: 100%;
  background-color: $bgColor;
  &__content {
    padding-top: calc($headerHeight + 30px);
  }

  &__text {
    width: 100%;
    text-align: center;
    padding: 20px 10px;

  }

  &__description {
    width: 100%;
    font-size: 18px;
  }
}

.price {
  &__blocks {
    display: flex;
    justify-content: center;
    align-items: center;

  }
  &__item {
    max-width: 400px;
    padding: 10px;
    padding-bottom: 15px;
    margin: 0px 50px;
    border-radius: 10px;
    background-color: rgba(18, 19, 43, 0.5);
    display: flex;
    flex-direction: column;
  }
  &__item:first-child {
    margin: 0px;
  }
  &__item:last-child {
    margin: 0px;
  }
}
.item {
  &__img {
    margin-bottom: 15px;
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__price {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &_new {
      font-size: 20px;
    }
    &_old {
      font-size: 24px;
      text-decoration: line-through;
    }
  }
  &__title {
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: bold;
  }
  &__description {
    margin-bottom: 20px;
    ul {
      li {
        margin-bottom: 10px;
        font-size: 18px;
      }
      li:last-child {
        margin-bottom: 0px;
      }
    }
  }
  &__btn {
    height: 100%;
    display: flex;  
    flex-direction: column;
    justify-content: flex-end;

    button {
      max-height: 40px;
    }
  }
}

.dash {
  width: 1px;
  height: 100%;
  background-color: #fff;
  margin: 0px 5px;
}

@media (max-width: 1000px) {
  .price {
    &__blocks {
      display: block;
    }
    &__item {
      max-width: none;
      margin: 0px 20px;

      &:first-child {
        margin-left: 15px;
      }

      &:last-child {
        margin-right: 15px;
      }
    }
  }
}

@media (max-width: 568px) {
  .price {
    &__item {
      margin: 0px 20px;
      &:first-child {
        margin-left: 10px;
      }

      &:last-child {
        margin-right: 10px;
      }
    }
    
  }
}

</style>