const crypto = require('crypto');
const data = 'pw1234';
//암호화
let encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('base64')
                    
console.log(data, encData);
encData = crypto.createHash('sha512')
                .update(data)
                .digest('hax')
console.log(data, encData);

// salting 암호화
const createSalt = () =>{
    return new Promise((resolve,reject)=>{
        crypto.randomBytes(64,(err,buf)=>{
            if(err) reject(err);
            resolve(buf.toString('base64'));
        })
    })
}
//암호화 작업후 salt가 시행되어야함(async 필요)
const createCryptoPassword = async(plainPassword)=>{
    const salt = await createSalt();

    return new Promise((resolve, reject)=>{
        crypto.pbkdf2(plainPassword,
                        salt,
                        9999,
                        64,
                        'sha512',
                        (err,key)=>{
                if(err) reject(err);
                resolve({password : key.toString('base64'),
                        salt
                    })
                })
    })
};

const cryptoPassword = async()=>{
    encData = await createCryptoPassword(data);
    console.log(encData);
}

cryptoPassword();
createCryptoPassword(data)
.then(result=>console.log(result))
.then(err => console.log(err))