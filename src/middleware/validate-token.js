const { response } = require("express");
const jwt = require('jsonwebtoken')



const validateJWT= (req, res= response, next) =>{
    
    const token = req.header('x-token')

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'No token in the request'
        })
    }

    try {
        const {id,email} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )

       req.id= id
       req.email= email

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token is invalid'
        })
    }

    next()
}

module.exports= {
    validateJWT
}