const pg = require("pg")
const dotenv = require("dotenv");

dotenv.config();

const { Pool } = pg;

export const DBconnect = new Pool({
    connectionString: process.env.DATABASE_URL
});