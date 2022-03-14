Demonstrates initialising a `Sandpack` managed iframe with pre-compiled javascript.

## Prerequisites
- Several versions of NodeJS are required (consider using [nvm](https://github.com/nvm-sh/nvm) to facilitate this):
  - NodeJS v14.18.2 (used by `sandpack` repo).
  - NodeJS v10.23.2 (used by `codesandbox-client` repo).
  - I used v16.11.0 for this repo.
- Yarn (I have not tested this with npm).
- Docker and Docker compose

## Setup

**NOTE:** Clone all repo's into the same parent folder.

### codesandbox-client
1. Clone https://github.com/christian-schulze/codesandbox-client.
2. Check out the `inject-pre-transpiled-code` branch.
3. Follow steps [here](https://sandpack.codesandbox.io/docs/advanced-usage/client#hosting-the-bundler) to install node modules and bundle javascript.

### sandpack
1. Clone https://github.com/christian-schulze/sandpack.
2. Check out the `inject-pre-transpiled-code` branch.
3. Run `yarn` to install node modules.
4. Run `yarn build` to bundle javascript.

### sandpack-pre-compiled (This repo)
1. Clone https://github.com/christian-schulze/sandpack-pre-compiled.
2. Run `cd docker`.
3. Run `docker-compose up -d`, this will start an `nginx` container listening on port 80.
4. Run `cd ..`.
5. Copy `.env.local.example` to `.env.local`.
6. Run `yarn` to install node modules.
7. Run `yarn dev` to start the site.\
   Site will be available at http://localhost:3000/
