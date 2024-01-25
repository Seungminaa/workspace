console.log('arrow.js');

//함수선언식 -> var 선언자 /동일한 이름의 함수가 선언될수 있음 / 전역함수
function name(){

}
function name(){

}

//함수 표현식 -> const 선언자(변수고정) -> 위에선 호출 불가
const hello2 = function(){

}

const hello3 = (name) => console.log('hello'+ name);

hello3('asd');

// 화살표 함수 문법
let msg = msg => console.log('result, ' + msg);
msg = () => console.log('Hello, World');
msg = (x,y) => console.log(x+y);

msg = (x,y) => {
    let result = x+y;
    console.log(result);
}

console.clear();
//화살표 함수와 this 의 연관성
let array = [1, 3, 5, 7];

//내장객체 출력
array.forEach(function(value,idx){
    console.log(value,this);
});

//이벤트 등록시 화살표함수를 사용하지 말아야함
array.forEach((value,idx)=>{
    console.log(value,this);
});
//주석