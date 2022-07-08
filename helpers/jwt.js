const jwt = require('jsonwebtoken')

const generateJWT = (id, email) =>{
    return new Promise((resolve, reject)=>{
        const payload = {id, email}

        jwt.sign(payload, process.env.SECRET_JWT_SEED,{
            expiresIn: '2h'
        }, (err, token)=>{
            if(err){
                console.log(err)
                reject('JWT could not be generated')
            }
            resolve(token)
        })
    })
}

module.exports={
    generateJWT
}