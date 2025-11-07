## Description

A simple NestJS application with a PostgreSQL database using TypeORM.

## Project setup

```bash
$ pnpm install
```

## Docker

```bash
# build the nest app
$ docker compose build

# start the nest app and the database
$ docker compose up
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
