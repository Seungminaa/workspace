console.log("Destructuring");

//Object
function getUSerInfo(){
    return{
        firstName : 'John',
        lastName:'Doe',
        age:37,
        email:'john@gmail.com',
        city:'New York',
        country:'USA',
        info: function(){
            return 'My name is ' + this.lastName;
        }
    }
}

let user = getUSerInfo();
console.log(user);
console.log(user.info());

let{firstName,lastName, info} = getUSerInfo();
console.log(firstName,lastName);
//분해시 해당 this 데이터가 없으면 this 의 존재가 사라져서 undefined로 바뀜
console.log(info());
console.clear();

// Array
let ary = [1,2,3];

let [x,y,z] = ary;
console.log(x,y,z);

let [a,b] = ary;
console.log(a,b);

let [e,f,g,h] = ary;
console.log(e,f,g,h);

//나머지 파라미터 매개변수(...ary) - 배열로 나옴
//다름
