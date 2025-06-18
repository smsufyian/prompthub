TODO: Cleanup later

Steps to setup fresh:

Install nvm
Install a node version using nvm (mine is 22.15.1)
Goto project root dir (root dir where u cloned)
Run following commands:
corepack enable yarn
yarn init -2
yarn set version 4.9.1

//-- Following steps were one-time and have been checked in to git so u dont need to do these:

//-- create .yarnrc.yml in project root dir with this line: 
//-- nodeLinker: node-modules
yarn add @nestjs/core @nestjs/common @nestjs/platform-express reflect-metadata rxjs
yarn add -D rimraf

yarn add --dev eslint
yarn add --dev eslint-plugin-react eslint-config-prettier
yarn eslint --init

yarn add knex pg
//-- @types/knex not necessary bc knex has built in typescript libs starting from v1 and onwards.
yarn add -D @types/pg @types/knex
yarn add -D testcontainers


//-- Do the following to check everything is working:
yarn install
yarn build
yarn test
yarn test:e2e

//-- To run:
yarn start (see package.json for other options and commands)
