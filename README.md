# Webpage for [AscendNTNU](http://ascendntnu.no)

[![Build Status](https://drone.ascendntnu.no/api/badges/AscendNTNU/ascendntnu-web/status.svg)](https://drone.ascendntnu.no/AscendNTNU/ascendntnu-web)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


This is the webpage for Ascend NTNU.

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

### Set up the development environment

To set up the developent environment, follow the instructions below.

You should have `node.js` installed with `npm`. Just go to their [website](https://nodejs.org) and download. Any version should work.

If you are a Ascend NTNU member, we will give you access to content belonging to the project. If you have access, run:

```bash
make download-images
```

There are also plenty of ways to download content from the server. Just find a way to copy the content from the `public/images/assets` and `public/images/teams` folder. The `make` command above is the easiest one.

Now that the resources is in place, run: **(This is the most important step)**

```bash
# Installing dependencies.
$ npm install

# Run a static file server:
$ npm run server # This runs the server at localhost:8080 (default)

# Hot-reloading (live refresh) while developing:
$ npm start # This should open the project in the browser at localhost:8081 (default)
```

### Deploy, Production

Most production environments likes to use their own set of environment variables to control the state. We therefore have an option for adding environment variables. You can either:

1. Change a env var before the server starts. Linux: `NODE_ENV=production npm run ...`
2. Or add them to a `.env.local` file. Format (and defaults) are set in `.env`.

Our docker-compose transfers `NODE_ENV` into the containers.

### Run in Docker (Because it only works)

If you have `docker-compose` (which should follow the docker installation), you only need these commands:

```bash
# Run server on localhost:8080 (port set by DOCKER_PORT)
$ docker-compose run build # To build in production used by server
$ docker-compose up server

# Run development on localhost:8081 (port set by DOCKER_DEV_PORT)
$ docker-compose up dev # This also starts the API at localhost:8082

# Run API on localhost:8082 (port set by DOCKER_API_PORT)
$ docker-compose run api python manage.py createsuperuser # Create a super user
$ docker-compose up api # Run in background mode by adding -d (detach).

# Use .env.local and .env.production.local files to control the ports.
```

Read more about `docker-compose` on the Internet if you want to learn more neat commands.
