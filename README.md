Demonstrates initialising a `Sandpack` managed iframe with pre-compiled javascript.

## Prerequisites
- A modern version of NodeJS, I'm using `v16.11.0`.
- Yarn (I have not tested this with npm).
- Docker and Docker compose

## Setup

**NOTE:** Clone all repo's into the same parent folder.

### codesandbox-client
1. Clone https://github.com/christian-schulze/codesandbox-client.
2. Check out the `inject-pre-transpiled-code` branch.
3. Follow steps [here](https://sandpack.codesandbox.io/docs/advanced-usage/client#hosting-the-bundler) to install node modules and bundle javascript.
4. `cd docker`.
5. `docker-compose up -d`, this will start an `nginx` container listening on port 80.

### sandpack
1. Clone https://github.com/christian-schulze/sandpack.
2. Check out the `inject-pre-transpiled-code` branch.
3. Run `yarn` to install node modules.
4. Run `yarn build` to bundle javascript.

### sandpack-pre-compiled (This repo)
1. Clone https://github.com/christian-schulze/sandpack-pre-compiled.
2. Copy `.env.local.example` to `.env.local`
3. Run `yarn` to install node modules.
4. Run `yarn dev` to start the site.
