const mysql = require('mysql');
const sql = require('./db/t_usersSql.js');

// sql 접속설정
// connectionLimit 최대 10개
//console.table(process.env)
const connectionPool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_CONNECT_LIMIT,
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