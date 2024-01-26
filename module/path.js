const path = require('path');

console.log('==절대경로==')
console.log(__filename);
console.log(__dirname);
//마지막에 오는 파일명
console.log('실제 파일명 : ' ,path.basename(__filename));
console.log('확장자 ',path.extname(__filename));
//현재환경변수 불러옴
let pathList = process.env.PATH.split(path.delimiter);
console.log(path.delimiter) //구분자
//환경에 맞춰서 잘라줌
console.table(pathList)
console.log(path.sep) //경로구분값 (/값)
console.log(pathList[2].split(path.sep));

console.log()
console.log()