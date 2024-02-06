// module 자리 / db/dbSetting.env 파일은 require('./db.js') 상단에 존재해야함
require('dotenv').config({path : './db/dbSetting.env'});
const express = require('express');
const app = express();
const sql = require('./db.js');

// middleware 자리
// json, urlencoded parser 처리
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//서버 생성
app.listen(3000,()=>{
    console.log('서버시작, http://localhost:3000');
})

// 유저 전체 리스트 가져오기
app.get('/user', async(req,res)=>{
    let list = await sql.query('userList');
    res.json(list);
});
 
// 유저 1명 정보 가져오기
app.get('/user/:id', async(req,res)=>{
    let userId = req.params.id;
    let user = (await sql.query('userInfo',userId))[0];
    res.json(user);
});

// 유저 정보 추가
app.post('/user', async (req,res) => {
    let userData = req.body.param;
    let result = await sql.query('userInsert',userData);
    res.json(result);
})

// 유저 정보 수정
app.put('/user/:id',async (req,res) => {
    //set json
    let result = await updateJson(req);

    //set 단일값
    // let result = await updateInfo(req);
    res.json(result); 
})

// Json 수정
async function updateJson(req){
    let userData = [selectedJson(req.body.param), req.params.id];
    let result = await sql.query('userUpdateJson',userData);
    return result;
}

// Json 변경불가 데이터
function selectedJson(obj){

    //스프레드 연산자로 나머지값만 사용
    const {user_no, user_id, ...newObj } = obj
    return newObj;
}

// 단일값 수정
async function updateInfo(req){
    let userData = [...getInfo(req.body.param),req.params.id]; 
    let result = await sql.query('userUpdateValue',userData);
    return result;
}

// 단일값 변경가능 데이터
function getInfo(obj){
    let getData = ["user_name","user_gender","user_age"]
    let newAry = [];
    for(let target of getData){
        for(let field in obj){
            if(field == target){
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry;
}

//유저 삭제
app.delete('/user/:id', async(req,res)=>{
    let userId = req.params.id;
    let user = await sql.query('userDelete',userId);
    //삭제되서 값없음
    res.json(user);
});

//성별조건필요?
//set의 경우 (수정,추가시) 날짜 포멧은 데이터를 새로 말아줘야하나?