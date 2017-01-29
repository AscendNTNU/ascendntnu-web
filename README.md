# Webpage for [AscendNTNU](http://ascendntnu.no)

This page shows who AscendNTNU are and what we do.

## Developers

To set up the environment, follow the instructions below.

### Set up the dev environment

You should have `node.js` installed with `npm`. Just go to their website.

If you are new to `typescript` and `webpack`, you should get these packages first:

```bash
$ npm install -g typescript typings webpack # You may need admin access (sudo, run as admin)
```

Using `npm`:

```bash
$ npm install # Installing dependencies.
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
$ npm install -g typescript typings webpack
$ npm link typescript
```

### Run in Docker (Because it only works)

```bash
$ make docker-baseimage # To initialise a base image. Setting up the environment. It is only needed once.
$ make docker-image # Create a new image which extends the baseimage. This one is way faster.
$ make docker-container # To create a dev-container. It will find the old and replace if nessesary.
$ make docker-container-prod # To create a production container. It will find the old  production and replace if nessesary.
# Prod container runs at port 8080 and dev container at port 8081.
```

Shortcut for entering the containers:

```bash
$ make docker-enter-container(-prod)
```
