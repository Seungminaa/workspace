const express = require('express');

//별도의 설치필요
const session = require('express-session');
const cors = require('cors');

const app = express();

//application/x-www-form-urlencoded
const defaultParser = express.urlencoded({extended : false});

//application/json
const jsonParser = express.json();

//모든 라우팅에 대해 적용
app.use(jsonParser);

//특정 라우팅에 대해서만 parsing하는 경우
//get 방식은 query로 들어오고 post 방식은 bady로 들어온다
app.get('/search', defaultParser,(req,res)=>{
    let data = req.query.keyword;
    res.send(data + ', 검색결과')
})
// /search?keyword=${value}

app.post('/info',defaultParser,(req,res)=>{
    let data = req.body.name;
    res.send('welcome,' + data);
});
//json은 body쪽에만 가능
// /info => method:post, body:name=${value}

//json타입만 등록해서 json으로 들어옴
app.post('/message', (req,res)=>{
    //객체로 부름
    let data = req.body.param;
    res.send(data.title + ',' + data.content);
})
// /message => method:post, body: {"param" : {"title" : , "content" : }


app.listen(5000,()=>{
    console.log('Server Start');
})

let sessionSetting = session({
    secret : 'Have@N$@i#ce_D2ay', //하드코딩 X 환경변수세팅후 넘김
    resave : false,
    saveUninitialized : true, //초기화 X , 로그인된 경우가 아닌경우도 세션을 저장하기위함
    cookie : {
        httpOnly : true, //통신할때만 쿠키의 접근을 허용
        secure : false, //true일 경우 프로토콜이 https일때만 동작
        maxAge : 60000 //밀리세컨드, 쿠키의 유효기간은 설정하는게 좋음
    }
});

app.use(sessionSetting);



app.post('/login',(req,res)=>{
    const {id, pwd} = req.body;
    if(!req.session.inLogin){
        req.session.user = id;
        req.session.isLogin = true;
    }
    //세션값을 저장을 해야 가지고있음
    req.session.save((err)=>{
        if(err) throw err;
        res.redirect('/'); //처음페이지로 돌아감
    }); 
})

//npm install cors, npm install express-session 설치후 package.json파일의 dependencies 에 추가됫는지 확인
app.get('/logout',(req,res) =>{
    req.session.destroy(); //세션 파괴
    res.redirect('/');
})

const corsOptions = {
    origin : 'http://127.0.0.1:5500',
    optionsSuccessStatus : 200
};

app.use(cors(corsOptions));

//라우팅은 미들웨어 다음으로 적용되어야함
app.get('/',(req,res)=>{
    res.json(req.session)
})

//morgan : 미들웨어, 정해진 포멧으로 자동 로그출력할때씀(웹서버용)
//multer : 미들웨어, 멀티파트form 데이터에 대해 처리를 도와줌 / 위치(destination)적용 및 이름(filename)설정함
// 