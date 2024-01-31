//db.js

const mysql = require('mysql');
const sql = require('./db/customerSql.js');
// sql.customerList

const connectionPool = mysql.createPool({
    host : '127.0.0.1',
    port : '3306',
    user : 'dev01',
    password : '1234',
    database : 'dev',
    connectionLimit : 10,
    debug : true
});

//alias는 작성하는 쿼리 자체
const executeQuery = async (alias, values)=> {
    return new Promise((resolve,reject) => {
        let executeSql = sql[alias];
        //results는 배열로 나옴
        connectionPool.query(executeSql, values, (err, results) =>{
            if(err){
                console.log(err);
                reject({err});
            }else{
                console.log(results)
                resolve(results);
            }
        })
    })
}

module.exports = {
    executeQuery
}