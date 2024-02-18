# BACKEND HUNTING SEASON

This is the backend of the hunting season application that i(Sibren Eeckhout) am developing. This backend api is made out of deno and express.js. For the database am i using a Mysql database. 

Thoe run the API execute: ```deno run --allow-all app.js```

## Get started 

### .env:

First fill in all required information in the .env file:

- database url, user, password, name. 


### scripts:

There are currently three script:
- databaseTables.js (create the tables in the database)
- databaseSeeders.js (seed the tables in the database)
- databaseRemoveTables.js (remove the tables in the database)

#### create tables and seed:

run the following script: ```deno run --unstable --allow-all .\run.js``` in the root directory. This script will run the seeder and table scripts automatically. 

#### remove tables:

run the following script: ```deno run --unstable --allow-all .\pre\scripts\databaseRemoveTables.js``` in the root directory. This will remove all the tables in the database. 

