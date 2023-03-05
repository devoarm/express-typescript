import knex, { Knex } from 'knex';

const dbBlog:Knex = knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ntng",
    database: "web_blog",
  },
  pool: {
    min: 0,
    max: 7,
    afterCreate: (conn: any, done: any) => {
      conn.query("SET NAMES utf8mb4", (err: any) => {
        done(err, conn);
      });
    },
  },
});

export default dbBlog;
