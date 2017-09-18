# Webpage for [AscendNTNU](http://ascendntnu.no)

[![Build Status](https://drone.ascendntnu.no/api/badges/AscendNTNU/ascendntnu-web/status.svg)](https://drone.ascendntnu.no/AscendNTNU/ascendntnu-web)

This page shows who AscendNTNU really are and what we do.

## Developers

- [Guidelines for changing code](#guidelines-for-changing-code)
- [Setup dev environment](#set-up-the-dev-environment)
- [Deploy, Production](#deploy-production)
- [Run in Docker (Because it only works)](#run-in-docker-because-it-only-works)

### Guidelines for changing code

We have some rules when changing code:
- **Use braches!** Every time someone pushes to `dev` branch, a new website is build from ground up. `dev` branch is for staging so you can see the result on [dev.ascendntnu.no](https://dev.ascendntnu.no).
- **Use Pull Requests.** We need to review code, and making sure things are working. Do not merge to `dev` without a PR.
- **Test everything.** The site is made for mobile and desktop. Please test both before lauching to `dev` and creating a release (tag).
- **Comment code.** We use [Standard JS](https://standardjs.com/).

### Set up the dev environment

To set up the environment, follow the instructions below.

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

If you are a Ascend NTNU member, we will also give you access to content belonging to the project. If you have acces, run:

```bash
make download-images
```

There are also plenty of ways to download content from the server. Just find a way to copy the content from the `/images/assets` and `/images/teams` folder. The `make` command above is the easiest one.

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

Most production environments likes to use environment variables. We therefore have an option for adding environment variables. You can either:
1. Change a env var before the server starts.
2. Or add them to a `.env` config. Format (and defaults) are set in `.env.default`.

### Run in Docker (Because it only works)

If you have `docker-compose` (which should follow the docker installation), you only need one command:

```bash
$ docker-compose up # Run in background mode by adding -d (detach).
```

It is highly recommend using `docker-compose`, as the code below is hackish and you should have a lot of docker knowledge already.

Either start your own containers without `make`, or use `make`:

```bash
$ make docker-baseimage # To initialize a base image. Setting up the environment. It is only needed once.
$ make docker-image # Create a new image which extends the baseimage. This one is way faster.
$ make docker-container # To create a dev-container. It will find the old and replace if nessesary.
$ make docker-container-prod # To create a production container. It will find the old  production and replace if nessesary.
# Prod container runs at port 8080 and dev container at port 8081.
```

Shortcut for entering the containers (also requiring `make`):

```bash
$ make docker-enter-container(-prod)
```
