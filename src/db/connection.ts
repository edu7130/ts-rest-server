import { Sequelize } from 'sequelize';

export const db = new Sequelize({
    database: '',
    host: 'localhost',
    dialect: 'mysql',
    username: '',
    password: ''
})

//Install the driver for your database:
/* 
    npm i pg pg-hstore # PostgreSQL
    npm i mysql2 # MySQL
    npm i mariadb # MariaDB
    npm i sqlite3 # SQLite
    npm i tedious # Microsoft SQL Server
    npm i ibm_db # DB2
*/