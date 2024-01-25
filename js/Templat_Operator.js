console.log('Template Literer');

let subject = 'Javascript';
let tool = 'VS code';

//현재 수업은 "Javascript"를 진행하고
//사용하는 툴은 "VS Code"입니다.

let msg = `현재 수업은 "${subject}"를 진행하고
사용하는 툴은 "${tool}"입니다.`;
console.log(msg)

//배열
let arr1 = [4,5,6];
let arr2 = [1,2,3];
let arr3 = [arr1,arr2];
console.log(arr3)
arr3 = [...arr1,...arr2];
console.log(arr3)

//문자열
let word ='Hello';
// HELLO
let alphabet = [...word,"J","S"];
console.log(alphabet);

//배열인지 체크(typeOf로는 배열 구분불가)
Array.isArray(arr3); 

console.log(Array.isArray(arr3))

let user = {
    id:100,
    name:"Hong",
    age:20,
    address:"Deagu"
};

let info = [];
for(let f in user){
    console.log(f,user[f])
    //user.f 사용불가
    //객체 => 배열
    info.push(f);
}
console.log(info);