# Webpage for [AscendNTNU](http://ascendntnu.no)

This page shows who AscendNTNU are and what we do.

## Developers

To set up the environment, follow the instructions below.

### SetUp

You should have `node.js` installed with `npm`. Just go to their website.

If you are new to `typescript` and `webpack`, you should get these packages first:

```bash
$ npm install -g typescript typings webpack # You may need admin access (sudo, run as admin)
```

Using `npm`:

```bash
$ npm install # Installing dependencies.
$ typings install --global --save dt~react
$ typings install --global --save dt~react-dom
$ typings install --global --save dt~react-router
$ typings install --global --save dt~react-router/history
$ npm run build # Building the application.
$ npm run watch # Build + watch for changes / Rebuild on change.
$ npm run dev # Running the dev environment.
```

Using `make` (on UNIX systems):

```bash
$ make install # Installing dependencies.
$ make # Building the application.
$ make watch # Build + watch for changes / Rebuild on change.
$ make dev # Running the dev environment.
```

### Deploy, Production

```bash
$ npm install --production
$ typings install --global --save dt~react
$ typings install --global --save dt~react-dom
$ typings install --global --save dt~react-router
$ typings install --global --save dt~react-router/history
$ npm install -g typescript typings webpack
$ npm link typescript
```
