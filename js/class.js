// ES6 이전
// 재생산을 위한 객체 => 생성자함수 + 즉시실행함수
// 생성자 함수는 대문자로 시작

// var Person =  (function(){
// function Person(name){
//     // 객체가 가질 필드
//     this._name = name;
// }

// // 객체가 가질 메소드
// Person.prototype.sayHi = function(){
//     console.log('Hi' + this._name);
// }

// // 필드가 접근할 Setter,Getter
// //_ 있을시 직접접근을 하지 말라는 의미(숨겨진 태그라는 의미)
// Person.prototype.setName = function(name){
//     this._name = name;
// }

// Person.prototype.getName = function(){
//     return this._name;
// }
// return Person;
// })();

// let userA = new Person('Hong');
// userA.sayHi();
// userA.setName('Adward');
// userA.sayHi();


//ES6 - let, const 
// class 는 객체정의 / 생성자 필요(constructor)
class Person{
    constructor(name){
        this._name = name;
    }

    sayHi(){
        console.log('Hi, new ' + this._name);
    }

    //get,set을 필드추가하는 방식으로
    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }
}
let userB = new Person('Hong');
userB.sayHi();
userB.name = 'Lee';
console.log(userB.name)
userB.sayHi();