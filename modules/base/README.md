Base application
=========

## How to build the app

1. Download and install [NodeJS](https://nodejs.org/en/)

2. On the console, run ``npm install``

3. Run ``npm run build`` in order to build the code inside *dist* for distribution 

4. Run ``npm run serve`` in order to launch the application for development 
 
## Backend implementation 

1. Based on [json-server](https://github.com/typicode/json-server) with mocks from [faker](https://github.com/Marak/faker.js) (APIs available at `http://localhost:5000/api/`)

2. Run ``npm run build`` and ``npm start`` in order to launch the server (``http://localhost:5000``) with the distribution version of the app 

3. The server randomly simulates delays and errors for testing purposes

## Libs & Tooling

1. [Angular 1.x](https://angularjs.org/)

2. [Lerna](https://lernajs.io/)

3. [Typescript](https://www.typescriptlang.org/) (with ``--strict true``)

4. [Angular Material](https://material.angularjs.org/latest/) 

5. [ocLazyLoad](https://oclazyload.readme.io/)

6. [UI-Router](https://ui-router.github.io/) 

7. [Sass](http://sass-lang.com/) 

8. [Webpack](https://webpack.js.org/) 

9. [Babel](https://babeljs.io/) 

10. [TSLint](https://palantir.github.io/tslint/) 

11. [Stylelint](https://stylelint.io/) 

## Unit-tests (karma + jasmine)

1. The unit-tests are written in typescript using Jasmine. You find all the files searching for *__.spec.ts*
 
2. On the console, run ``npm test`` for executing them 

3. Tests are also executed automatically by [Travis CI](https://travis-ci.com/)

## Working with editors/IDEs supporting “safe write”

Take a look at the following [page](https://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write) if you use IntelliJ or VIM 
