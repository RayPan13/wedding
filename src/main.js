// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faTwitter, faGoogle, faLinkedinIn, faInstagram)
library.add(faEnvelope)
library.add(faGem)

import DefaultLayout from '~/layouts/default.vue'
import '~/assets/css/normalize.css'
import '~/assets/scss/basic.scss'

export default function(Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.component('fa', FontAwesomeIcon)
}
//typeface font
require('typeface-montserrat')
require('typeface-dancing-script')
