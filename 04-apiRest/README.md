## Migrations

```migration
npx sequelize migration:create --name=SOME_MIGRATION_NAME
npx sequelize db:migrate

seeds:
npx sequelize seed:generate --name create-users
npx sequelize db:seed:all
```
