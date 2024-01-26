let test = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        console.log('비동기 작업 실행');
        // resolve('작업성공');
        reject('작업실패');
    },1000);
});
//ajax 랑 promise의 처리방식이 조금 다름
test
.then(data => console.log('then',data))
.catch(err=> console.log('catch',err))
.finally(()=>{console.log('작업끝')});

let fetch = () => {
    return new Promise((resolve,reject)=>{
    })
}