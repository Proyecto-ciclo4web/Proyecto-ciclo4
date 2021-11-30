import gql from "graphql-tag";



const tiposAutentificacion = gql`

type Token{

token:String
error:String

}



type Mutation {

    registro(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
      password:String!
    ): Token!


    login(
      correo: String!
      password:String!
    ): Token!



    RefreshTokenn: Token

    





    }





`;

export {tiposAutentificacion}



