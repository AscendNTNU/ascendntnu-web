# Webpage for [AscendNTNU](http://ascendntnu.no)

This page shows who AscendNTNU are and what we do.

## Developers

To set up the environment, follow the instructions below.

### Set up the dev environment

**First step after clone:**  
If you have `make`, run:

```bash
$ make init
```

Else (Windows users usually do not have `make`):

```bash
$ cp constants-example.js constants.js # Copy content from constants-example.js into constants.js
```

You should have `node.js` installed with `npm`. Just go to their [website](https://nodejs.org) and download. Any version should work.

If you are new to `typescript` and `webpack`, you should get these packages first:

```bash
$ npm install -g typescript typings webpack # Will require admin access
```

Now that the environment is in place, run: **(This is the most important step)**

```bash
$ npm install # Installing dependencies.
$ npm run dev # Running the dev environment. (Rebuilding on change and running server)
```

If you want to just build the frontend or just run the server:

```bash
$ npm start # Building once, running the server after.
$ npm run build / webpack # Building once.
$ npm run watch / webpack -w # Rebuild on change.
$ npm run server / node server.js # Only run the server, which is much faster when testing server.js.
```

If you are a fan of `make`, we have options for that too. Just check the `Makefile`.

### Deploy, Production

```bash
$ npm install --production
$ npm install -g typescript typings webpack
$ npm link typescript
```

Most production environments likes to use environment variables. We therefore have an option for adding environment variables. You can eighter:
1. Change a env var before the server starts.
2. Or add them to a `.env` config. Format (and defaults) are set in `.env.default`.

### Run in Docker (Because it only works)

If you have `docker-compose`, you only need one command:

```bash
$ docker-compose up # Run in background mode by adding -d (detach).
```

It is highly recommend using `docker-compose`, as the code below is hackish and you should have a lot of docker knowledge already.

Eighter start your own containers without `make`, or use `make`:

```bash
$ make docker-baseimage # To initialise a base image. Setting up the environment. It is only needed once.
$ make docker-image # Create a new image which extends the baseimage. This one is way faster.
$ make docker-container # To create a dev-container. It will find the old and replace if nessesary.
$ make docker-container-prod # To create a production container. It will find the old  production and replace if nessesary.
# Prod container runs at port 8080 and dev container at port 8081.
```

Shortcut for entering the containers (also requiring `make`):

```bash
$ make docker-enter-container(-prod)
```
