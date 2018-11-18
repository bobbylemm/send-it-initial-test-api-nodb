import config from '../config/databaseConfiguration';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const pool = new pg.Pool(config.development);

const parcelsTable = `DROP TABLE IF EXISTS users CASCADE;`;
const usersTable = `DROP TABLE IF EXISTS parcels CASCADE;`;

pool.query(usersTable)
    .then(res => console.log(res));
        pool.query(parcelsTable)
        .then(res => console.log(res))
    .catch(err => console.log(err))
.catch(err => console.log(err));