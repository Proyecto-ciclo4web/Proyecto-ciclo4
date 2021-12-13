import { gql } from 'apollo-server-express';

const tiposAvance = gql`
  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observacion: String
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avance]
    Avance(_id:String!):Avance
    filtrarAvance(idProyecto: String!): [Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
    AgregarObservacion(_id:String!,observacion:String!): Avance
    editarAvance(_id:String!, descripcion:String!):Avance
  }
`;

export { tiposAvance };
