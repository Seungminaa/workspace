const express = require('express');
const router = express.Router();
//라우팅 정보를 가지고 있다고 판단
//Router는 lesten이 없음

//user/
router.get('/',(req,res)=>{
    res.send('회원정보조회');
})

//user/insert
router.post('/insert',(req,res)=>{
    res.send('회원 등록');
})


//user/update
router.put('/update',(req,res)=>{
    res.send('회원 수정');
})



//user/delete
router.delete('/delete',(req,res)=>{
    res.send('회원 삭제');
})

module.exports = router;