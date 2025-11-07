## Description

A simple NestJS application with a PostgreSQL database using TypeORM.

## Project setup

```bash
$ pnpm install
```

## Docker

You will need to change the `DATABSE_HOST` env var to `DATABASE_HOST=postgres`

```bash
# build the nest app
$ docker compose build

# start the nest app and the database
$ docker compose up
```

## Compile and run the project

You will need to change the `DATABSE_HOST` env var to `DATABASE_HOST=localhost`

```bash
# run database with docker
$ docker compose up -d postgres adminer

# run migrations
$ pnpm migrations:run

# start the app
$ pnpm run start:dev
```

## Database

```bash
# generate a migration
$ pnpm migration:generate src/database/migrations/newMigration --pretty=true

# create a blank migration
$ pnpm migration:create src/database/migrations/newMigration

# run migrations
$ pnpm migration:run
```
