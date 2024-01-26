const defaultNum = 1;

function add(num1,num2){
    return num1 + num2;
}
function minus(num1,num2){
    return num1 - num2;
}
function multi(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}

//변수랑 동일한 명의 필드를 생성하겠다라는 의미
// module.exports = {
export default{
    defNum : defaultNum,
    add,
    minus, //"minus" : minus
    multi,
    divide
}