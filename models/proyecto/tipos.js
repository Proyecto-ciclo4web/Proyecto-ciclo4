import { gql } from 'apollo-server-express';

const tiposProyecto = gql`
  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: String!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
  }

  type Query {

    Proyectos: [Proyecto]
    Proyecto (_id:String!):Proyecto
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: String!
      fechaInicio: String
      fechaFin: String
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: String!
      objetivos: [crearObjetivo]
    ): Proyecto

  CambiarEstadoProyecto (            
  id:String!
  estado:Enum_EstadoProyecto!) : Proyecto

  CambiarFaseProyecto (
  id:String!
  fase:Enum_FaseProyecto!) : Proyecto


  }
  



`;

export { tiposProyecto };
