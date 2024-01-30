//모듈생성
const fs = require('fs');
const express = require('express');
//라우터는 모듈이 아닌 파일로 인식시킴(경로를 찾아가야함)
const userRoutor = require('./user.js');
const app = express();

// 미들웨어
// -- Request process

// application/json
app.use(express.json({
    limit : '50mb'
}))

// application/x-www-form-urlencoded  (extends : false) - 기본기능만 사용
app.use(express.urlencoded({extended : false}))

//Error
app.use(function(err,req,res,next){
    console.log(err);
    res.status(500).json({statusCode : res.statusCode,
                        errMessage : err.message});
});

app.get('/defaultErr',(req,res)=>{
    throw new Error('기본 핸들러 동작');
})

app.get('/customErr',(req,res,next) => {
    next(new Error('Process Fail! Check Data!'));
})

//static
app.use(express.static('./files'));
//새로운 경로만 부여('/public')
app.use('/public',express.static('./files'));

//Data Loding
//파일읽어오기
const jsonFile = fs.readFileSync('./db.json');
//json변환
const jsonData = JSON.parse(jsonFile);

const getData = (target,where)=>{
    let data = jsonData[target];
    if(Array.isArray(data)){
        let list = data;
        for(let obj of list){
            if(obj.id == where){
                data = obj;
            }
        }
    }
    return data;
}

app.use('/user',userRoutor);

//포트지정 터미널당 1개의 listen만 실행
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})

//get방식으로 callback을 받음
//req : 사용자가 전달한 데이터
//res : 사용자에게 전달할 데이터
app.get('/',(req,res)=>{
    res.send('Hello,Express.js World')
})

//라우팅은 짧게 / 함수를 따로 작성해서 따로 넣어줘야함
//전체조회
app.get('/posts',(req,res)=>{
    let data = getData('posts');
    res.json(data);
});

//단건조회
app.get('/posts/:id',(req,res)=>{
    let postId = req.params.id;
    let data = getData('posts',postId);
    res.json(data);
});

//전체조회 - comments
app.get('/comments',(req,res)=>{
    let data = getData('comments');
    res.json(data);
})

//단건조회 - comments
app.get('/comments/:id',(req,res)=>{
    let commentsId =req.params.id;
    let data = getData('comments',commentsId);
    res.json(data);
})

//조회 - profile
app.get('/profile',(req,res)=>{
    let data = getData('profile')
    res.json(data)
})

//등록
app.post('/posts',(req,res)=>{
    let data = req.body;
    console.log('등록',data);
    res.json(data);
})

//수정
app.put('/posts/:id',(req,res)=>{
    let postId = req.params.id;
    let data = req.body;
    console.log('수정',postId,data);
    res.json({id : postId,data});
})

//삭제
app.delete('/posts/:id',(req,res)=>{
    let postId = req.params.id;
    console.log('삭제',postId);
    res.sendStatus(203);
})

//검색을 포함하는 경우 -> QueryString
app.get('/search',(req,res)=>{
    let keywords = req.query;
    console.log('검색조건 구성',keywords);
    res.json(keywords);
})


