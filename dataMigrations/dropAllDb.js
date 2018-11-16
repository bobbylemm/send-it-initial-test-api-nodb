import config from '../config/databaseConfiguration';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const pool = new pg.Pool(config.development);

const parcelsTable = `DROP TABLE IF EXISTS parcels`;
const usersTable = `DROP TABLE IF EXISTS users`;
const parcelsLogistics = `DROP TABLE IF EXISTS parcelslogistics`;

pool.query(usersTable).then(res => console.log(res)).catch(err => console.log(err));
pool.query(parcelsTable).then(res => console.log(res)).catch(err => console.log(err));
pool.query(parcelsLogistics).then(res => console.log(res)).catch(err => console.log(err));