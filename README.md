Demo of angular 1.x lazy loading components
=========

## How to build the app

1. Before starting, take a look at the following [page](https://angular.io/docs/ts/latest/guide/webpack.html); it's also noteworthy [The Future of Declaration Files](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)

2. Download and install [NodeJS](https://nodejs.org/en/)

3. From the console, run ``npm install``

4. On the console, run ``npm run build`` in order to build the code inside *dist* 

5. On the console, run ``npm run serve`` in order to launch the application 
 
6. If you want to mock the backend, run ``npm run serve-mock`` or ``npm run build-mock``
 
## Backend implementation 
 
1. REST APIs from [jsonplaceholder](https://jsonplaceholder.typicode.com)

## Analysis tools

1. [TSLint](https://github.com/palantir/tslint)

## Unit-tests (karma + jasmine)

1. The unit-tests are written in typescript using Jasmine. You find all the files searching for *__.spec.ts*
 
2. On the console, run ``npm test`` for execute the tests

3. Tests are run automatically by [Travis CI](https://travis-ci.com/)

## Working with editors/IDEs supporting “safe write”

Take a look at the following [page](https://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write) if you use IntelliJ or VIM 
