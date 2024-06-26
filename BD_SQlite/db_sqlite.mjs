import sqlite3 from "sqlite3";
import { drive_error_connection, drive_exit_data, drive_input_data } from "./controller_error/controller.mjs";

const sqlite = sqlite3.verbose();
const db = new sqlite.Database("./BD_SQlite/db_users.db", sqlite.OPEN_READWRITE || sqlite.OPEN_CREATE,drive_error_connection);

function drive_init() {
  //----> drive error of exist ? 
  // db.run(
  //   ` 
  //   CREATE TABLE users (
  //   name TEXT NOT NULL,
	// 	lastName TEXT NOT NULL,
	// 	id PRIMARY KEY
  // )`
  // )
  

  db.run(`INSERT INTO users (name, lastName) VALUES(?,?)`,['kelvin','abache'], drive_input_data); // i as insert data in the table 

  db.each("SELECT name FROM users", drive_exit_data); //-- I as take out data ?
}

db.serialize(drive_init);
