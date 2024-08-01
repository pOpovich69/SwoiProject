<template>
  <div class="price">
    <div class="price__content">
      <div class="price__text">
        <div class="price__title">Ну шо погнали?</div>
        <div class="price__description">
          Усі продажі здійснюються через нашого менеджера в Telegram. При необхідності ми можемо виставити рахунок-фактуру для фірм. 
          Усі вихідні дані повинні бути надіслані у вигляді файлу для збереження якості. Термін та дату слід узгодити з менеджером.
        </div>
      </div>
      <div class="price__blocks">
        <div class="price__item" v-for="(item, index) in prices" :key="index">
          <div class="item__img">
            <img :src="item.img" alt="price__img">
          </div>
          <div class="item__price">
            <span class="item__price_new">{{ item.new_price }}</span>
            <div class="dash"></div>
            <span class="item__price_old">{{ item.old_price }}</span>
          </div>
          <p class="item__title">{{ item.plan }}</p>
          <p class="item__description">
            <ul>
              <li v-for="(data, index) in item.list" :key="index">{{ index + 1 }}. {{ data }}</li>
            </ul>
          </p>
          <div class="item__btn">
            <my-button>Купляю</my-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script lang="ts" setup>
import { ref } from 'vue'

import p1 from '@/assets/prices/p1.svg'
import p2 from '@/assets/prices/p2.svg'
import p3 from '@/assets/prices/p3.svg'

const prices = ref([
  {
    img: p1,
    old_price: "120zł",
    new_price: "100zł",
    plan: 'План "Офісник"',
    list: [
      "Розміщення реклами в історіях (2 історії)",
      "Можливість включити посилання у профіль"
    ]
  },
  {
    img: p2,
    new_price: "150zł",
    old_price: "200zł",
    plan: 'План "Депутат"',
    list: [
      "Розміщення реклами в історіях (3 історії)",
      "Публікація посту з вашим контентом та рекламою у підписі",
      "Можливість проведення конкурсів або розіграшів з призами"
    ]
  },
  {
    img: p3,
    new_price: "250zł",
    old_price: "300zł",
    plan: 'План "Ухилянт"',
    list: [
      "Реклама в історіях (5 історій) з використанням стікерів та фільтрів",
      "Публікація посту (3 пости) з вашим контентом та рекламою у підписі",
      "Публікація відео-огляду або інтерв'ю в Reals",
    ]
  }
])

</script>

<style scoped lang="scss">
.price {
  height: calc(100%);
  background: linear-gradient(to bottom, $bgColor 0%, $bgFade 100%);
  padding-bottom: 30px;
  &__content {
    @extend %limiter;
  }
  &__text {
    text-align: center;
    padding-top: 10px;
  }
  &__title {  
    font-size: 56px;
    font-weight: bold;
    margin-bottom: 25px;
  }
  &__description {
    margin-bottom: 40px;
    font-size: 16px;
  }
  &__blocks {
    display: flex;
    justify-content: center;
  }
  &__item {
    width: 310px;
    padding: 10px;
    margin: 0px 20px;
    border-radius: 10px;
    background-color: rgba(18, 19, 43, 0.5);
    display: flex;
    flex-direction: column;
  }
  &__item:first-child {
    margin-left: 0px;
  }
  &__item:last-child {
    margin-right: 0px;
  }
}
.item {
  &__img {
    margin-bottom: 20px;
    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__price {
    margin-bottom: 15px;
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
    margin-bottom: 20px;
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

@media (max-width: 768px) {
  .price {
    &__blocks {
      flex-direction: column;
      align-items: center;
    }
    &__item {
      margin: 0;
      margin-bottom: 20px;
    }
  }
}

</style>