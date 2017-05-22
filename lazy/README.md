# HOW TO COMPILE THE APP

1. Before starting, take a look at the following [post](http://www.typescriptlang.org/docs/handbook/gulp.html) from the typescript developer team; it's also noteworthy [The Future of Declaration Files](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)

2. Download and install [NodeJS](https://nodejs.org/en/)

3. Download [Webstorm](https://www.jetbrains.com/webstorm/) or open your favourite IDE

4. From the console, run ``npm install``. You'll get a folder named *node_modules* with all necessary modules

5. Run ``npm run dev`` or ``npm run prod`` on the console in order to deploy the code inside *dist* (``gulp default`` or ``gulp prod`` scripts inside ``package.json`` get executed). 

6. If you want to mock the backend, run ``npm run dev-mock`` or ``npm run prod-mock``

7. Using ``npm run dev`` or ``npm run dev-mock``, you get incremental buildings of typescript code (thanks to [watchify](https://www.npmjs.com/package/watchify)) and live update on multiple browsers (thanks to [browsersync](https://browsersync.io))   

8. If you install gulp globally (``sudo npm install -g gulp``), you can use ``gulp default`` or ``gulp release``

9. In order to uninstall a package globally, run ``sudo npm uninstall -g gulp``

# UNIT-TESTS (KARMA + JASMINE)

1. The unit-tests are written in typescript using Jasmine. You fine all the files searching for *__.spec.ts*
 
2. On the console, run ``npm test`` for execute the tests

# E2E-TESTS (PROTRACTOR + JASMINE)

1. Run ``npm start`` and when the server is up and running, open another console and run ``npm run protractor``

2. Write e2e tests using Typescript

# LIGHT REST-API-TESTS

1. Take a look at [Frisby](http://frisbyjs.com) and write your own tests inside *rest-api-tests*

2. Run ``npm run frisby`` on the console

# UPDATING NODE MODULES

1. Check versions using ``npm outdated``

2. Update ``package.json`` modules using ``npm update``

3. When you update the ``dependencies`` on ``package.json``, you get the new versions for free thanks to the automatic compile process

4. Pay attention that you need to manually update sass files of ``bootstrap-sass`` and ``font-awesome`` 

5. If you need to use a file that is not available through npm, just copy it in the ``lib`` folder and referece it in ``index.html``


# USING JetBrains Chrome EXTENSION

1. In order to debug the code using Chrome, take a look at [JetBrains IDE Support](https://www.jetbrains.com/help/webstorm/2016.1/using-jetbrains-chrome-extension.html)

2. If you use Safari on a Mac, simply open ``dist/index.html``; alternatively, you can run ``/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --disable-web-security --allow-file-access-from-files --user-data-dir`` on the console and use Chrome