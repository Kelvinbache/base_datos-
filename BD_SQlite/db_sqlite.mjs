import sqlite3 from "sqlite3";

const sqlite = sqlite3.verbose();
const db = new sqlite.Database("./BD_SQlite/db_users.db");

function init() {
  db.run(`DROP TABLE IF EXISTS users`);

  db.run(`CREATE TABLE users 
    (
        name TEXT NOT NULL,
       lastName TEXT NOT NULL,
       id INTEGER PRIMARY KEY
    )`);

  const values = db.prepare("INSERT INTO users(name, lastName) VALUES(?,?)");

  values.run(["kelvin", "abache"]); // get values of method post
  values.finalize();

  db.each("SELECT id,name,lastName FROM users", (err, row) => {
    if (err) {
      console.error("this error in db");
    }

    console.log(row.name, row.lastName);
  });
}

// Lack a function of init here
db.serialize(init);
db.close();
