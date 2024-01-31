const express = require('express');
const app = express();
const sql = require('./db.js');
//mysql.executeQuery();

//미들웨어 등록(use)
// application/json
app.use(express.json());

// application/x-www-form-urlencoded / 실질적으로 보내준 데이터 처리를 할 경우 사용(parse)
app.use(express.urlencoded({extended : false}))

//공통적으로 사용하는 미들웨어를 사용하는 경우 사용
// app.use(function(req,res,next){

// })

app.listen(3000,()=>{
    console.log('Server Start, http://localhost:3000');
});

//데이터 넘어왔는지 확인(pending : 보류중(데이터가 덜넘어옴))
app.get('/customers', async (req,res)=>{
    let list = await sql.executeQuery('customerList');
    res.json(list);
})

app.get('/customers/:id', async (req,res)=>{
    let customerId = req.params.id;
    //배열을 객체로 바꿔서 처리(첫번째 값만 가져옴)
    let info = (await sql.executeQuery('customerInfo',customerId))[0];
    res.json(info);
})

app.post('/customers', async (req,res)=>{
    //특정 필드가 가진 대상을 등록
    let data = req.body.param;
    //배열을 객체로 바꿔서 처리(첫번째 값만 가져옴)
    let result = await sql.executeQuery('customerInsert',data);
    res.json(result);
})

app.put('/customers/:id',async (req,res) => {
    // let result = await updateAll(req);
    let result = await updateInfo(req);
    res.json(result); 
})

async function updateAll(req){
    let data = [selectedInfo(req.body.param), req.params.id]; //set절, id컬럼
    let result = await sql.executeQuery('customerUpdateAll',data);
    return result;
}

function selectedInfo(obj){
    let delData = ["id", "email"];
    let newObj = {};
    let isTargeted = null;
    for(let field in obj){
        // field : id, name, email,phone,address
        isTargeted = false;
        for(let target of delData){
            if(field == target){
                isTargeted = true;
                break;
            }
        }
        if(!isTargeted){
            newObj[field] = obj[field];
        }
    }
    
    return newObj;
}

//배열에 펼침연산자를 사용
async function updateInfo(req){
    let data = [...getInfo(req.body.param),req.params.id]; //set절, id컬럼
    let result = await sql.executeQuery('customerUpdateInfo',data);
    return result;
}

function getInfo(obj){
    let getData = ["email","phone","address"]
    let newAry = [];
    for(let target of getData){
        // field : id, name, email,phone,address
        for(let field in obj){
            if(field == target){
                newAry.push(obj[field]);
                break;
            }
        }
    }
    return newAry;
}
