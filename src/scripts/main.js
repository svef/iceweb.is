// Polyfills
import 'es6-promise'
import 'whatwg-fetch'

import analytics from './modules/analytics'
analytics.init('UA-90006733-1')

import domready from './modules/domready'
import initRouter from './init/router'

// Routes
import indexRoute from './routes/index'

initRouter({
  '/': indexRoute,
})

domready(() => {
  setTimeout(() => document.querySelector('html').classList.remove('loading'), 750)
})
