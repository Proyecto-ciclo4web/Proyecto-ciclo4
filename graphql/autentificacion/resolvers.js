
import { UserModel } from '../../models/usuario/usuario.js';


const resolverAutentificacion = {

Query:{

},

Mutation:{
    registro : async (parents,args)=>{
 
        //Crear un Usuario
        const registrar = await  UserModel.create({
         nombre:args.nombre,
         apellido:args.apellido,
         identificacion:args.identificacion,
         correo:args.correo,
         rol:args.rol,
         password:args.password,
        });
        
        console.log("usuario creado",regitrar);
        return "Usuario Creado"
        
       
    
    }

}
    
}

export {resolverAutentificacion}


