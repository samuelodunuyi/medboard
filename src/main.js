/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGear } from '@fortawesome/free-solid-svg-icons'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

import Menu from 'primevue/menu'

library.add(faGear)

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
app.component('Menu', Menu)
