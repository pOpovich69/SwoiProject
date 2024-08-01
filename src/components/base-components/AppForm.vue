<template>
  <div class="contact">
    <div class="contact__wrapper">
      <div class="contact__title">Виникло питання?</div>
      <div class="contact__subtitle">Зв'яжіться з нами!</div>
      <form class="contact__form" submit="false">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="phone" placeholder="Phone">
      </form>
      <my-button class="form__btn" paddingX="40px" @click="isOpen = true">Відправити</my-button>
    </div>
    <my-popup @toggle-popup="isOpen = !isOpen" :is-open="isOpen">
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
import { ref } from "vue";


const isOpen = ref<boolean>(false)
</script>

<style scoped lang="scss">
.contact {
    min-height: calc(100vh);
    height: 100%;
    width: 100%;
    padding-top: $headerHeight;
    background: linear-gradient(to bottom, #2A4480, #4B68AB, #4671D5);

    &__wrapper {
      min-height: calc(100vh);
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__title {
      width: 100%;
      display: flex;
      justify-content: center;
      font-family: $juraFont;
      font-weight: bold;
      font-size: 32px;
    }

    &__subtitle {
      width: clac(100%);
      display: flex;
      justify-content: center;
      font-family: $juraFont;
      font-weight: bold;
      font-size: 32px;
      margin-bottom: 20px;
      padding: 0px 10px;
    }

    &__form {
      width: calc(100% - 20px);
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0px 10px;
      
      input {
        max-width: 450px;
        width: 100%;
        background-color: #fff;
        color: #000;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 20px;
        font-family: $robotoFont;
        font-weight: bold;
      }
    } 
}

.form {
  &__btn {
    max-width: 190px;
  }
}

@media (max-width: 646px) {
  .contact {
    padding-top: 20px;
  }
}
@media (max-width: 370px) {
  .contact {
    &__title {
      font-size: 24px;
    }

    &__subtitle {
      font-size: 24px;
    }
  }
}

</style> 