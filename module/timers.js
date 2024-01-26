
function format(value){
    return ('0' + value).slice(-2);
    
}
function getDateTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = format(date.getMonth() + 1);
    let day = format(date.getDate());
    let hour = format(date.getHours());
    let min = format(date.getMinutes());
    let sec = format(date.getSeconds());

    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}
console.log(getDateTime())

const timeout = setTimeout(()=>{
    console.log(getDateTime())
},3000);

// 타임아웃 취소
// clearTimeout(timeout);

let count = 0;
const interval = setInterval(()=> {
    console.log('count',count++);
    if(count == 5){
        clearInterval(interval);
    }
    console.log(getDateTime())
},2000)

setImmediate(()=>{
    console.log('setImmediate',setImmediate);
})
console.log('마지막 코드');