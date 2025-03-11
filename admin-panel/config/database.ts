export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString: env("DATABASE_URL"),
      ssl: env.bool("DATABASE_SSL", true) ? { rejectUnauthorized: false } : false,
    },
    pool: { min: 0, max: 5, acquireTimeoutMillis: 60000 }, // Reduce max connections & increase timeout
  },
});
