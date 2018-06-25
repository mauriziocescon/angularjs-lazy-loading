Demo of angular 1.x lazy loading components
=========

## Demo 

1. [Demo](https://mc-angularjs-lazy-loading.herokuapp.com) powered by Heroku

## How to build the app

1. Download and install [NodeJS](https://nodejs.org/en/)

2. On the console, run ``npm install``

3. Run ``npm run build`` in order to build the code inside *dist* for distribution 

4. Run ``npm run serve`` in order to launch the application for development 
 
## Backend implementation 

1. Based on [json-server](https://github.com/typicode/json-server) with mocks from [faker](https://github.com/Marak/faker.js) (APIs available at `http://localhost:3000/api/`)

2. Run ``npm run build`` and ``npm start`` in order to launch the server (``http://localhost:3000``) with the distribution version of the app 

3. The server randomly simulates delays and errors for testing purposes

## Progressive web app 

1. The app contains a [manifest.json](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) and the entire [service-worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) business in order to cache the app (sw is enabled only for ``npm run build``)

## Libs & Tooling

1. [Angular 1.x](https://angularjs.org/)

2. [Typescript](https://www.typescriptlang.org/) (with ``--strict true``) 

3. [Angular Material](https://material.angularjs.org/latest/) 

4. [ocLazyLoad](https://oclazyload.readme.io/)

5. [UI-Router](https://ui-router.github.io/) 

6. [Sass](http://sass-lang.com/) 

7. [Webpack](https://webpack.js.org/) 

8. [Babel](https://babeljs.io/) 

9. [TSLint](https://palantir.github.io/tslint/) 

10. [Stylelint](https://stylelint.io/) 

11. [JSON Server](https://github.com/typicode/json-server) 

12. [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 

## Unit-tests (karma + jasmine)

1. The unit-tests are written in typescript using Jasmine. You find all the files searching for *__.spec.ts*
 
2. On the console, run ``npm test`` for executing them 

3. Tests are also executed automatically by [Travis CI](https://travis-ci.com/)

## Working with editors/IDEs supporting “safe write”

1. Take a look at the following [page](https://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write) if you use IntelliJ or VIM 
