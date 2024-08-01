<template>
  <footer class="footer">
    <div class="footer__content">
      <ul class="footer__list">
        <li v-for="(data, index) in footerInfo" :key="index"><img :src="data.icon" :alt="data.data"/><span>{{ data.data }}</span></li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
import phoneIcon from '@/assets/icons/phone.png'
import emailIcon from '@/assets/icons/email.png'
import locationIcon from '@/assets/icons/location.png'

const footerInfo = [
  {
    icon: phoneIcon,
    data: "+48 729 228 787"
  },
  {
    icon: emailIcon,
    data: "trojmiastoswoi@email.com"
  },
  {
    icon: locationIcon,
    data: "Aleja Grunwaldzka 71/73, 80-241 Gdańsk"
  }
]

</script>

<style scoped lang="scss">
.footer {
  background-color: $footerColor;

  &__content {
    height: 100%;
    padding: 20px 30px;
  }

  &__list {
    height: 100%;
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      margin-right: 25px;

      &:last-child {
        margin-right: 0px;
      }

      span {
        font-size: 16px;
      }
      img {
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }
}

@media (max-width: 799px) {
  .footer {
    &__list {
      flex-direction: column;

      li {
        margin-right: 0px;
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
}

</style>