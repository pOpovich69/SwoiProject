import './assets/base.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'


import myButton from '@/components/UI/myButton.vue'
import myYellowText from '@/components/UI/myYellowText.vue'
import myPopup from '@/components/base-components/AppPopup.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'md',
        aliases,
        sets: {
          md,
        },
      },
});

const app = createApp(App)

app.component('my-button', myButton)
app.component('my-yellow-text', myYellowText)
app.component('my-popup', myPopup)

app.use(router)
app.use(vuetify)

app.mount('#app')
