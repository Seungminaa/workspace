//customerSql.js

let customerList =
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers`;

let customerInfo = 
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers
WHERE id = ?`;

//set절을 활용해 유동적으로 데이터를 삽입가능
let customerInsert = 
`Insert into customers
 set ?`; //객체, 필드명 == 컬럼명

 let customerUpdateAll = 
 `Update customers
 set ?
 where id = ?`; //배열 [객체 , 단일값]
 
 let customerUpdateInfo = 
 `Update customers
 set email = ?, phone =?, address = ?
 where id = ?`; //배열 [단일값 ,단일값 ,단일값 ,단일값 ]


// 1) 배열인지 아닌지 : 물음표 갯수 (2개이상 배열)
// 2) ?별로 객체타입인지 아닌지 : 어느 컬럼에 들어가는 값인지 구분 가능여부


module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdateAll,
    customerUpdateInfo
}