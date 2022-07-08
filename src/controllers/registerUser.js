const { User } = require("../db");
const bcrypt = require("bcrypt");
const { generateJWT } = require("../../helpers/jwt");
exports.registerUser= async(req, res) => {
    try {
      const {
        name,
        documentNumber,
        documentType,
        email,
        password
      } = req.body;
  
      const salt = bcrypt.genSaltSync();
  
      const hash = bcrypt.hashSync(password, salt);
      const userDB = await User.create({
        id: `${documentType}-${documentNumber}`,
        email,
        name,
        password: hash,
        documentNumber,
        documentType,
      });

      const token = await generateJWT(userDB.id, userDB.email);

      res.status(201).send({
        ok: true,
        id: userDB.id,
        email: userDB.email,
        token,
      });
    } catch (error) {
        res.status(500).send({
            ok: false,
            error : error,
            msg: "Error en la base de datos"
          });
      console.log(error);
    }
}
 
exports.loginUser = async(req, res= response) =>{

  const {email, password}= req.body

  try {
      
      const UserDB= await User.findOne({
          where:{
              email: email
          }
      })

      if(!UserDB){
          return res.status(400).json({
              ok: false,
              msg: 'Usuario o contraseña invalida'
          })
      };

      const validPassword= bcrypt.compareSync(password,UserDB.password)

      if(!validPassword){
          return res.status(400).json({
              ok: false,
              msg: 'Usuario o contraseña invalida'
          })
      };

      const token = await generateJWT(User.id, User.email)

      res.json({
          ok: true,
          id: UserDB.id,
          email,
          token
          
      })
      
  } catch (error) {
      res.status(500).json({
          ok: false,
          msg: 'Error conectando a la base de datos',
          error
      })
  }
  
}