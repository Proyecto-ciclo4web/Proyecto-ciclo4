
import { UserModel } from '../../models/usuario/usuario.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';


const resolverAutentificacion = {

    Query: {

    },

    Mutation: {
        registro: async (parents, args) => {

            //se ponen las rodas para encriptar la contraseña
            const salt = await bcrypt.genSalt(10);

            // encriptamos la contraseña y pasamos las rondas
            const contraEncriptada = await bcrypt.hash(args.password, salt);

            //Crear un Usuario
            const registrar = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                estado:args.estado,
                password: contraEncriptada,
            });

            console.log("usuario creado", registrar);
            return {
                token: generateToken({
                    _id: registrar._id,
                    nombre: registrar.nombre,
                    apellido: registrar.apellido,
                    identificacion: registrar.identificacion,
                    correo: registrar.correo,
                    rol: registrar.rol,
                    estado:registrar.estado,
                })
            }
        },

        login: async (parents, args) => {
            const login = await UserModel.findOne({ correo: args.correo });
            const comparacion = await bcrypt.compare(args.password, login.password);
            if (comparacion) {
                return {

                    token: generateToken({
                        _id: login._id,
                        nombre: login.nombre,
                        apellido: login.apellido,
                        identificacion: login.identificacion,
                        correo: login.correo,
                        rol: login.rol,
                        estado:login.estado,
                    })
                }
            }
        },

        RefreshTokenn: async (parents, args, context) => {

           if(!context.userData){
               return {
                   error:"token no valido"
               }
           }else{
            return{

            token: generateToken({
                _id: context.userData._id,
                nombre: context.userData.nombre,
                apellido: context.userData.apellido,
                identificacion: context.userData.identificacion,
                correo: context.userData.correo,
                rol: context.userData.rol,
                estado:context.userData.estado,
            })

            }     
            console.log(context)          
           }

                // valdiar que el contexto tenga info del usuario. si si, refrescar el token
               // si no devolver null para que en el front redirija al login.


        },



    }

}

export { resolverAutentificacion }


