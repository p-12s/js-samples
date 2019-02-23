const { Client } = require('pg');

const db = new Client({
  user: 'test', 
	host: 'localhost', 
  database: 'test', 
  password: 'test', 
  port: 5432
});

db.connect();

db.query('SELECT * FROM students', (err, data) => {
  if (err) 
    throw new Error(err);

  console.log(data.rows);
  
  db.end()
});
