import sqlite3 from "sqlite3";
import { drive_error_connection, drive_exit_data, drive_input_data } from "./controller_error/controller.mjs";

const sqlite = sqlite3.verbose();
const db = new sqlite.Database("./BD_SQlite/db_users.db", sqlite.OPEN_READWRITE || sqlite.OPEN_CREATE,drive_error_connection);

function drive_init() {

 const create_table = db.prepare(
  ` CREATE TABLE If NOT EXISTS users 
  (
      
    name TEXT NOT NULL,
		lastName TEXT NOT NULL,
    ID INTEGER NOT NULL PRIMARY KEY
    );
  `
);

create_table.run();

 const insert = db.prepare(`INSERT INTO users (name, lastName) VALUES(?,?)`); // i as insert data in the table 
 insert.run(['kelvin','abache'], drive_input_data);

 
  db.each("SELECT name, lastName, ID FROM users", drive_exit_data); //-- I as take out data ?
}

db.serialize(drive_init);
