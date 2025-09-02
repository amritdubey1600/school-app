import mysql from "mysql2/promise";

// Need to be added in .env but couldn't as git ignores it

export const pool = mysql.createPool({
  host: "localhost",   
  user: "root",        
  password: "Qwerty@123",
  database: "schooldb",
  waitForConnections: true
});
