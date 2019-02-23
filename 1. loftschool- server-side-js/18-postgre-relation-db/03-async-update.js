const { Client } = require('pg');

const db = new Client({
  user: 'test',
  host: 'localhost',
  database: 'test',
  password: 'test',
  port: 5432
});

async function connect() {
  await db.connect();
  await db.query('UPDATE students SET start_year = $1 WHERE s_id = 1567', [
    2015
  ]);

  const data = await db.query('SELECT * FROM students');
  console.log(data.rows);
  db.end();
}

connect();