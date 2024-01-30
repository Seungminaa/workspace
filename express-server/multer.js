const multer = require('multer');
const express = require('express');
const app = express();

const storage = multer.diskStorage({
    //저장경로
    destination : function(req, file, cb){
        //callback
        cb(null,'files/'); //내부에 저장하지 않고 path로 외부경로를 찾아서 저장해야함
    },
    filename : function(req,file,cb){
        let rename = (new Date()).getMilliseconds() + file.originalname; //충돌방지를 위함
        
        cb(null,rename);
    }
})

const upload = multer({ storage : storage});
const staticUrl = '/images';
app.use(staticUrl,express.static('files'));

app.post('/profile',upload.single('avatar'),(req,res)=>{
    // <img src=""> -> src속성이 가져야하는 경로 반환 / 미리보기를 위한 경로 반환 /이미지를 먼저 저장해두고 위치를 보여줌으로써 미리보기가 가능케함
    let imgUrl = `${staticUrl}\/${req.file.filename}`;
    res.send(imgUrl);
})

//form의 name값이 array()내의 값이 되어야함
app.post('/photos',upload.array('list'),(req,res)=>{
    let imgUrlList = [];
    for(let file of req.files){
        let imgUrl = `${staticUrl}\/${file.filename}`;
        imgUrlList.push(imgUrl);
    }
    res.send(imgUrlList);
})

app.listen(4000,()=>{
    console.log('Server Start : multer');
})