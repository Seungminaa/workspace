const fs = require('fs');
const {Console } = require('console');

// 노드나 require 같은 경우 같은 경로에 대해 ./로 표시
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

//로그를 작성하는 주체
const logger = new Console({ stdout : output,stderr : errorOutput});

const msg = 'Log Writing';
logger.log('Result : %s',msg); //stdout
logger.error(`Result : ${msg}`); //stderr
