const Promise =require("bluebird");
const mysql=require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db={
    host:"localhost",
    user:"root",
    password:"12345",
    database:"mydb"
};
let adddetails = async () => {
    const connection = mysql.createConnection(db);
    await connection.connectAsync();
  
    let sql =
      "INSERT INTO USER (fname,city) VALUES (?, ?)";
    let operation = await connection.queryAsync(sql, [
      "kunal",
      "badlapur",
    ]);
  
    await connection.endAsync();
    return operation;
  };
  
  adddetails();