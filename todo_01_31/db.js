const mysql = require('mysql');
const sql = require('./db/t_usersSql.js');

// sql 접속설정
const connectionPool = mysql.createPool({
    host : '127.0.0.1',
    port : '3306',
    user : 'developer',
    password : '1234',
    database : 'developer',
    connectionLimit : 20,
    debug : true
});

//alias는 작성하는 쿼리, values는 파라미터 값
const query = async (alias, values)=> {
    return new Promise((resolve,reject) => {
        let executeSql = sql[alias];
        connectionPool.query(executeSql, values, (err, res) =>{
            if(err){ // sql애러
                console.log(err);
                reject({err});
            }else{ // sql 결과
                console.log(res)
                resolve(res);
            }
        })
    })
}

// module 내보내기
module.exports = {
    query
}