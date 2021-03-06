# svef.is
[![Build Status (master)](https://img.shields.io/travis/svef/iceweb.is/master.svg?maxAge=3600&style=flat)](https://travis-ci.org/svef/iceweb.is)
[![Build Status (develop)](https://img.shields.io/travis/svef/iceweb.is/develop.svg?maxAge=3600&style=flat)](https://travis-ci.org/svef/iceweb.is)
![GitHub Release](https://img.shields.io/github/release/svef/iceweb.is.svg?maxAge=3600&style=flat)

## Quick start

These are the available scripts

*Run local dev environment*
```
npm run dev
  supervisor --watch gulp,gulpfile.js --no-restart-on exit --quiet --exec gulp server
```

*Run lint*
```
npm run lint
  eslint .
```

*Run tests*
```
npm run test
  nyc ava
```

*Run tests on every change*
```
npm run test-dev
  supervisor --quiet --watch test,src/scripts --no-restart-on exit --exec npm -- run test --silent
```

*Single static build*
```
npm run build
  gulp build
```
