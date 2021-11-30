
import jwt from 'jsonwebtoken';

//funcion generar tokens
const generateToken = (payload) => {
    return jwt.sign(payload, 'secret', {
        expiresIn: '24h'
    });
}


const Tokenvalidar = (token) => {
    //garantizar el token se genero con el texto secret
    if(token){
        const verification = jwt.verify(token, 'secret', (err, data) => {
            if (data) {
              return {
                data: data,
              };
            }
            if (err) {
              return {
                error: err,
              };
            }
          });
          console.log(verification, token);
          return verification;
    }

}

export { generateToken,Tokenvalidar }




