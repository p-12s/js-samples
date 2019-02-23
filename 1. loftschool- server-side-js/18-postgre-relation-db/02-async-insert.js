const { Client } = require('pg');

const db = new Client({
  user: 'test',
  host: 'localhost',
  database: 'test',
  password: 'test',
  port: 5432
});

// need try-catch
async function connect() {
  await db.connect();
  await db.query(
    'INSERT INTO students(s_id, name, start_year) VALUES ($1, $2, $3)',
    [1567, 'Виталий', 2019]
  );

  const data = await db.query('SELECT * FROM students');
  console.log(data.rows);

  db.end();
}

connect();
