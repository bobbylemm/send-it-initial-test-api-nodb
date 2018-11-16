import config from '../config/databaseConfiguration';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const pool = new pg.Pool(config.development);

const usersTable = `
CREATE TABLE IF NOT EXISTS users(
    userId SERIAL NOT NULL PRIMARY KEY,
    userName varchar(10) UNIQUE NOT NULL,
    email varchar(100) UNIQUE NOT NULL,
    password text NOT NULL,
    createdat TIMESTAMP NOT NULL DEFAULT NOW()
);`;
const parcelsTable = `
CREATE TABLE IF NOT EXISTS parcels(
    parcelId SERIAL NOT NULL PRIMARY KEY,
    packageName varchar(10) NOT NULL,
    presentLocation text NOT NULL,
    price INTEGER NOT NULL,
    status varchar(10) NOT NULL,
    userId INTEGER REFERENCES users(userId) ON DELETE CASCADE,
    userName varchar(10) REFERENCES users(userName) ON DELETE CASCADE,
    createdat TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedat TIMESTAMP NOT NULL DEFAULT NOW()
);`;
const parcelsLogistics = `
CREATE TABLE IF NOT EXISTS parcelslogistics(
    parcelLogisticsId SERIAL NOT NULL PRIMARY KEY,
    pickUpCity text NOT NULL,
    destinationCity text NOT NULL,
    weight NOT NULL,
    parcelId INTEGER REFERENCES parcels(parcelId) ON DELETE CASCADE,
    userId INTEGER REFERENCES users(userId) ON DELETE CASCADE,
);`;


pool.query(usersTable).then(res => console.log(res)).catch(err => console.log(err));
pool.query(parcelsTable).then(res => console.log(res)).catch(err => console.log(err));
pool.query(parcelsLogistics).then(res => console.log(res)).catch(err => console.log(err));


