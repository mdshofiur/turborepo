import Pool from "pg-pool";

const pool = new Pool({
    database: "postgres",
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 4000,
    max: 20, // max number of clients in the pool
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 2000, // return an error after 2 second if connection could not be established
    maxUses: 1000, // max number of times a client can be used before it is removed and a new one is created
    // ssl: true, // set to true if you are using SSL
});

export default pool;