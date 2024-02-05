let userList = 
`select   user_no
        , user_id
        , user_pwd
        , user_name
        , user_gender
        , user_age
        , DATE_FORMAT(join_date, '%Y-%m-%d') join_date
from t_users`;

let userInfo = 
`select   user_no
        , user_id
        , user_pwd
        , user_name
        , user_gender
        , user_age
        , DATE_FORMAT(join_date, '%Y-%m-%d') join_date
from t_users
where user_id = ?`;

let userInsert = 
`Insert into t_users 
set ?`;

let userUpdateJson = 
 `Update t_users
 set ?
 where user_id = ?`; 

 let userUpdateValue = 
 `Update t_users
 set user_name =?, user_gender = ?, user_age = ?
 where user_id = ?`;

 let userDelete =
 `Delete from t_users
 where user_id = ?`

module.exports = {
    userList,
    userInfo,
    userInsert,
    userUpdateJson,
    userUpdateValue,
    userDelete
}