import sqlite3 from "sqlite3";

const sqlite = sqlite3.verbose();
const db = new sqlite.Database("./BD_SQlite/db_users.db", sqlite.OPEN_READWRITE, (err) => {
  
  if (err){
    console.error(err);
  }

});


function init(name, lastName) {
 
  db.run(`DROP TABLE IF EXISTS users`); //?--> is not function 

  db.run(`CREATE TABLE users 
    (
        name TEXT NOT NULL,
       lastName TEXT NOT NULL,
       id INTEGER PRIMARY KEY
    )`);


   const values = db.prepare("INSERT INTO users(name, lastName) VALUES(?,?)"); // 

  values.run([name, lastName]); // get values of method post
  values.finalize();

  db.each("SELECT id,name,lastName FROM users", (err, row) => {
    if (err) {
      console.error("this error in db");
    }

    console.clear();
    console.log(row.name, row.lastName,row.id); //--> remove is part 
  
  });
}


// Lack a function of init here
// the  base data is error, close connection 

export { db, init };
