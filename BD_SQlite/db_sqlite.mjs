import sqlite3 from "sqlite3";
import { drive_error_connection, drive_exit_data, drive_input_data } from "./controller_error/controller.mjs";

const sqlite = sqlite3.verbose();
const db = new sqlite.Database("./BD_SQlite/db_users.db", sqlite.OPEN_READWRITE || sqlite.OPEN_CREATE,drive_error_connection);

function drive_init(name,lastName) {


// create a table of data 
db.run(  ` 
  
  CREATE TABLE If NOT EXISTS  users (

  name TEXT NOT NULL,
	lastName TEXT NOT NULL
  
)
  
`);

// insert data in the table
 const insert = db.prepare(`INSERT INTO users (name, lastName) VALUES(?,?)`);  
 insert.run([name,lastName], drive_input_data);


 // write the data of the table 
  db.each("SELECT name, lastName FROM users", drive_exit_data);  

 
}


export { 
  drive_init,
  db
};




