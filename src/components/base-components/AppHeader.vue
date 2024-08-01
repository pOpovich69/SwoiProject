<template>
  <!-- Header for pc version -->
  <header class="header header_pc">
    <div class="header__content">
      <div class="logo" @click="routing.toHome()">{{ LOGO }}</div>
      <nav class="navigation">
        <ul class="navigation__list">
          <li v-for="(link, index) in navigationLinks" :key="index" @click="link.routingTo">{{ link.name }}</li>
        </ul>
        <!-- <div class="header__lang_switch" @click="langSwitchIsOpen = !langSwitchIsOpen">
          <div class="arrow__img">
            <img src="@/assets/imgs/flags/uk.png" alt="flag"/>
          </div>
          <div class="arrow__img" :class="{arrow__img_active: langSwitchIsOpen}">
            <img src="@/assets/icons/arrow.png" alt="arrow"/>
          </div>
          <div class="lang__menu" :class="{lang__menu_active: langSwitchIsOpen}">
            <ul class="menu__list">
              <li @click="console.log('lang1')"><img src="@/assets/imgs/flags/uk.png" alt="flag"/></li>
              <li @click="console.log('lang2')"><img src="@/assets/imgs/flags/uk.png" alt="flag"/></li>
            </ul>
          </div>
        </div> -->
      </nav>
    </div>
  </header>

  <!-- Header for mobile version -->
  <header class="header header_mob">
    <div class="header__content">
      <div class="logo">{{ LOGO }}</div>
      <nav class="navigation">
        <div class="header__burger_btn" @click="slideInMenu = true">
          <img src="@/assets/icons/menu.png" alt="menu button">
        </div>
      </nav>
    </div>
  </header>
  
  <!-- Slide-in menu -->
  <app-slide-in :is-open="slideInMenu" @toggle-slide-in="slideInMenu = !slideInMenu">
    <ul class="slide-in__list">
      <li v-for="(link, index) in navigationLinks" :key="index" @click="link.routingTo">{{ link.name }}</li>
      <!-- <div class="header__lang_switch" @click="langSwitchIsOpen = !langSwitchIsOpen">
        <div class="arrow__img">
          <img src="@/assets/imgs/flags/uk.png" alt="flag"/>
        </div>
        <div class="arrow__img" :class="{arrow__img_active: langSwitchIsOpen}">
          <img src="@/assets/icons/arrow.png" alt="arrow"/>
        </div>
        <div class="lang__menu" :class="{lang__menu_active: langSwitchIsOpen}">
          <ul class="menu__list">
            <li @click="console.log('lang1')"><img src="@/assets/imgs/flags/uk.png" alt="flag"/></li>
            <li @click="console.log('lang2')"><img src="@/assets/imgs/flags/uk.png" alt="flag"/></li>
          </ul>
        </div>
      </div> -->
    </ul>
  </app-slide-in>
</template>

<script setup lang="ts">
import AppSlideIn from '@/components/base-components/AppSlideIn.vue'
import { ref } from 'vue';
import { LOGO } from '@/constants/constants'
import type { NavigationLink } from '@/models'
import { routingService } from '@/services'
import { useRouter } from 'vue-router';

const langSwitchIsOpen = ref<boolean>(false)
const slideInMenu = ref<boolean>(false)

const routing = routingService()


const navigationLinks = ref<NavigationLink[]>(([
  {
    name: 'Головна',
    routingTo: () => {
      slideInMenu.value = false
      routing.toHome()
    }
  },
  {
    name: 'Про нас',
    routingTo: () => {
      slideInMenu.value = false
      routing.toAboutUs()
    }
  },
  {
    name: 'Контакти',
    routingTo: () => {
      slideInMenu.value = false
      routing.toForm()
    }
  },
  {
    name: 'Кейси',
    routingTo: () => {
      slideInMenu.value = false
      routing.toCases()
    }
  },
  {
    name: 'Інші проекти',
    routingTo: () => {
      slideInMenu.value = false
      routing.toProjects()
    }
  }
]))

</script>

<style scoped lang="scss">

.header {
  background-color: $headerColor;
  height: $headerHeight;
  width: 100%;
  position: fixed;
  z-index: 10;
  font-family: $juraFont;
  border-radius: 0px 0px 10px 10px;
  &_pc {
    display: block;
  }
  &_mob {
    display: none;
  }
  &__content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
  } 
  &__lang {
    &_switch {
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      span {
        margin-right: 5px;
      }
    }
  }
}

.arrow {
  &__img {
    height: 30px;
    transition: all 300ms;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    &_active {
      transform: rotateX(180deg);
    }
  }
}

.logo {
  cursor: pointer;
  font-family: $italiannoFont;
  font-size: 54px;
  text-shadow: -2px 4px 4px rgba(0, 0, 0, 0.5);
  &::first-letter {
    color: #F5EB5B;
  } 
}

.navigation {
  display: flex;
  align-items: center;
  &__list {
      display: flex;
      li {
        margin: 0px 20px; 
        cursor: pointer;
        font-size: 19px;
        transform: scale(1);
        transition: all 300ms;
        &:first-child {
          margin-left: 0px;
        }
        &:last-child {
          margin-right: 0px;
        }
        &::first-letter {
          color: #F5EB5B;
        } 
        &:hover {
          transform: scale(1.1);
          text-shadow: -1px 1px 1px rgba(0, 0, 0, 1);
        }
      }
  }
}

.lang {
  &__menu {
    position: absolute;
    z-index: 9;
    top: 55px;
    right: 0px;
    text-align: center;
    background-color: $headerColor;
    border-radius: 0px 0px 10px 10px;
    transition: all 300ms;
    transform-origin: top;
    transform: scaleY(0);
    li {
      padding: 0px 20px;
      padding-top: 5px;
    }
    
  }
  &__menu_active {
    transform: scaleY(1);
  }
}

.menu {
  &__list {
    li {
      cursor: pointer;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media (max-width: 851px) {
  .header {

    &_pc {
      display: none;
    }

    &_mob {
      display: block;
    }

    &__content {
      padding: 0px 10px;
    }

    &__burger_btn {
      height: 24px;
      width: 24px;
      margin-left: 10px;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .slide-in {

    &__list {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        margin: 10px 0px;
        text-align: center;
        font-size: 20px;
      }
    }

    .header__lang_switch {
      margin-top: 10px;
    }

    .menu__list {
      max-height: 115px;
      overflow-y: auto;
    }
  }
}

</style>  