import { gql } from 'apollo-server-express';

const tiposUsuario = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }

  input FiltroUsuarios{
     _id: ID
    nombre: String
    apellido: String
    identificacion: String
    correo: String
    rol: Enum_Rol
  }

  type Query {
    Usuarios(filtro:FiltroUsuarios): [Usuario]
    Usuario(_id: String!): Usuario
    Estudiantes: [Usuario]  
    Lideres:[Usuario]
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
      password: String!
    ): Usuario


    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol
      estado: Enum_EstadoUsuario
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario


  

  CambiarEstadoUsuario (
  _id:String!
  estado:Enum_EstadoUsuario!) : Usuario 

  






  }

`;

export { tiposUsuario };
